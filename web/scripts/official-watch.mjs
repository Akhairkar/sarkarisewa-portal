// Official update watcher: checks the notice pages of recruiting bodies
// (UPSC, SSC, NTA, IBPS, AIIMS ...) and posts each new result, admit card,
// answer key or notification straight to the Telegram channel, with the
// official link. Run by .github/workflows/official-watch.yml.
//
// Only links whose text looks like a result/admit card/notification are
// considered. A source seen for the first time is recorded silently (nothing
// is posted), so a lost state never floods the channel. At most MAX_PER_SOURCE
// items per source and MAX_TOTAL items per run are posted; the rest wait.
//
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL (default @sarkarisewaindia),
//      FB_PAGE_ID + FB_PAGE_TOKEN (optional: also post to the Facebook Page),
//      STATE_FILE (default .watch-state.json), DRY_RUN=1 to only print,
//      PROBE=1 to list what every source shows now. Neither saves state.
import fs from "node:fs";
import crypto from "node:crypto";
import { fbText, plain } from "./fb-page.mjs";

const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || "").trim();
const CHANNEL = (process.env.TELEGRAM_CHANNEL || "@sarkarisewaindia").trim();
const STATE_FILE = process.env.STATE_FILE || ".watch-state.json";
const PROBE = !!process.env.PROBE;
const DRY = !!process.env.DRY_RUN || !TOKEN || PROBE;
const MAX_PER_SOURCE = 3, MAX_TOTAL = 8, KEEP = 2000;
const SITE = "https://sarkarisewaindia.com";

// Notice pages of national recruiting and exam bodies. Optional fields:
//   api: "ssc"  read SSC's own JSON notice API (the site itself is a JS app)
//   match       only links whose text or address matches this regex
//   want        a looser "worth posting" regex than WANT for this source
const SSC_API = "https://ssc.gov.in/api/general-website/portal/";
const SSC_Q = "?page=1&limit=15&key=createdAt&order=DESC&isAttachment=true&language=english&attributes=id,headline,examId,contentType,redirectUrl,startDate,endDate,language,createdAt";
const SOURCES = process.env.SOURCES_FILE ? JSON.parse(fs.readFileSync(process.env.SOURCES_FILE, "utf8")) : [
  // www. is served from a cache that runners can reach; the bare host is not.
  { id: "upsc", name: "UPSC", url: "https://www.upsc.gov.in/whats-new", want: "notice|result|admit|interview|answer|marks|cut[\\s-]*off|advertisement|vacanc|examination" },
  { id: "upsc-exam", name: "UPSC", url: "https://upsc.gov.in/examinations/active-exams" },
  { id: "ssc", name: "SSC", api: "ssc", url: "https://ssc.gov.in/" },
  { id: "nta", name: "NTA", url: "https://nta.ac.in/" },
  { id: "ibps", name: "IBPS", url: "https://www.ibps.in/" },
  { id: "aiims", name: "AIIMS", url: "https://www.aiimsexams.ac.in/" },
  { id: "rrb", name: "RRB (Railway)", url: "https://www.rrbcdg.gov.in/" },
  // ctet.nic.in is unreachable; CBSE (which runs CTET) lists its notices.
  { id: "ctet", name: "CTET", url: "https://www.cbse.gov.in/cbsenew/cbse.html", match: "ctet" },
  { id: "rbi", name: "RBI", url: "https://opportunities.rbi.org.in/Scripts/Vacancies.aspx" },
  { id: "sbi", name: "SBI", url: "https://sbi.co.in/web/careers/current-openings" },
  { id: "army", name: "Indian Army", url: "https://joinindianarmy.nic.in/" },
  { id: "nielit", name: "NIELIT (CCC)", url: "https://www.nielit.gov.in/" },
];

// What counts as an update worth posting, and what never does.
const WANT = /result|admit\s*card|e-?admit|call\s*letter|answer\s*key|cut[\s-]*off|marks|notification|recruitment|advertisement|advt|vacanc|exam(ination)?\s*(date|schedule|calendar|city)|interview|merit\s*list|selection\s*list|written\s*test|परिणाम|प्रवेश\s*पत्र|भर्ती|विज्ञापन|उत्तर\s*कुंजी/i;
const SKIP = /tender|e-?procurement|auction|quotation|rti\b|annual\s*report|budget|empanel|rate\s*contract|login|sign\s*in|register(ed)?\s*user|archive|^more$|^click here$|^view all|^read more|^details?$|^download$/i;

const sha = (s) => crypto.createHash("sha1").update(s).digest("hex").slice(0, 16);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ndash: "–", mdash: "—", rsquo: "’", lsquo: "‘" };
const decode = (s) => s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => (e[0] === "#" ? String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : ENT[e.toLowerCase()] ?? m));

async function get(url) {
  for (let i = 0; i < 2; i++) {
    try {
      const r = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36", "Accept-Language": "en-IN,en;q=0.9,hi;q=0.8" },
        redirect: "follow", signal: AbortSignal.timeout(30000),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return { html: await r.text(), final: r.url };
    } catch (e) {
      if (i) throw e;
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
}

// Login links carry per-visit ids and PDFs a cache-buster (?appid=, ?t=);
// these are left out of the key so the same notice is not posted twice.
function stable(url) {
  const u = new URL(url);
  for (const k of [...u.searchParams.keys()]) if (/^(appid|t|token|sid|session|_|v|ver|timestamp)$/i.test(k)) u.searchParams.delete(k);
  return u.href;
}

// SSC notices, results and answer keys from the JSON API its site uses.
// An item can appear in more than one list, so it is keyed by its PDF.
async function sscItems() {
  const out = new Map();
  for (const [path, type] of [["notice-boards", "notice-boards"], ["records", "results"], ["records", "answer-key"]]) {
    const { html } = await get(`${SSC_API}${path}${SSC_Q}&contentType=${type}`);
    for (const d of JSON.parse(html).data || []) {
      const text = String(d.headline || "").replace(/\s+/g, " ").trim();
      const file = d.attachments?.[0]?.path;
      if (text.length < 8 || SKIP.test(text)) continue;
      const url = file ? "https://ssc.gov.in/api/attachment/" + encodeURI(String(file).replace(/\\/g, "/")) : d.redirectUrl;
      if (!url || !/^https?:/.test(url)) continue;
      const key = sha("ssc|" + (file || d.id));
      if (!out.has(key)) out.set(key, { key, text, url });
    }
  }
  return [...out.values()];
}

// Every link on the page whose text reads like an update.
function links(html, base, want = WANT) {
  const out = new Map();
  for (const m of html.matchAll(/<a\b[^>]*?href\s*=\s*["']([^"'#][^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    let text = decode(m[2].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
    const title = (m[0].match(/\btitle\s*=\s*["']([^"']+)["']/i) || [])[1];
    if (text.length < 12 && title) text = decode(title).trim();
    if (text.length < 12 || text.length > 300 || !want.test(text) || SKIP.test(text)) continue;
    let url;
    try { url = new URL(decode(m[1]).trim(), base).href; } catch { continue; }
    if (!/^https?:/.test(url)) continue;
    const key = sha(stable(url) + "|" + text.toLowerCase());
    if (!out.has(key)) out.set(key, { key, text, url });
  }
  return [...out.values()];
}

function kind(t) {
  if (/answer\s*key|उत्तर\s*कुंजी/i.test(t)) return ["🔑", "आंसर की"];
  if (/admit\s*card|e-?admit|call\s*letter|प्रवेश\s*पत्र|exam(ination)?\s*city/i.test(t)) return ["🎫", "एडमिट कार्ड / परीक्षा सूचना"];
  if (/result|merit|selection\s*list|shortlist|qualified|cut[\s-]*off|marks|परिणाम/i.test(t)) return ["📢", "रिजल्ट"];
  if (/notification|recruitment|advertisement|advt|vacanc|भर्ती|विज्ञापन/i.test(t)) return ["📝", "नई भर्ती / नोटिफिकेशन"];
  return ["📌", "नई सूचना"];
}

function message(src, it) {
  const [icon, label] = kind(it.text);
  const lines = [`${icon} <b>${esc(src.name)}: ${label}</b>`, "", esc(it.text), "", `🔗 Official लिंक: <a href="${esc(it.url)}">${esc(new URL(it.url).hostname)}</a>`];
  // Our tools only where they help with the next step (filling the form).
  if (label.startsWith("नई भर्ती")) {
    lines.push("", "फॉर्म भरने से पहले:",
      `📷 <a href="${SITE}/tools/photo-resizer.html?utm_source=telegram">फोटो</a> और <a href="${SITE}/tools/signature-resizer.html?utm_source=telegram">सिग्नेचर</a> सही KB में करें`,
      `⏳ <a href="${SITE}/tools/age-calculator.html?utm_source=telegram">कट-ऑफ तारीख पर अपनी उम्र</a> जांचें`);
  }
  lines.push("", "<i>पूरी जानकारी और आवेदन सिर्फ official वेबसाइट पर देखें।</i>");
  return lines.join("\n");
}

async function send(text) {
  const r = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHANNEL, text, parse_mode: "HTML", disable_web_page_preview: true }),
  });
  const j = await r.json();
  if (!j.ok) throw new Error(`Telegram: ${j.description}`);
}

let state = {};
try { state = JSON.parse(fs.readFileSync(STATE_FILE, "utf8")); } catch { console.log("No saved state: every source starts with a silent baseline."); }

let posted = 0;
const report = [];
for (const src of SOURCES) {
  let items;
  try {
    if (src.api === "ssc") items = await sscItems();
    else {
      const { html, final } = await get(src.url);
      items = links(html, final, src.want ? new RegExp(src.want, "i") : WANT);
      // Application/login links carry a per-visit token; never post those.
      if (src.match) items = items.filter((i) => new RegExp(src.match, "i").test(i.text + " " + i.url) && !/[?&]enc=/.test(i.url));
    }
  } catch (e) {
    report.push(`✗ ${src.id}: ${e.message}${e.cause ? ` (${e.cause.code || e.cause.message})` : ""}`);
    continue;
  }
  if (PROBE) {
    report.push(`• ${src.id}: ${items.length} update links`);
    items.slice(0, 15).forEach((it) => console.log(`[${src.id}] ${kind(it.text)[1]} | ${it.text} | ${it.url}`));
    continue;
  }
  const seen = state[src.id];
  if (!seen) {
    state[src.id] = items.map((i) => i.key);
    report.push(`• ${src.id}: baseline ${items.length} links (nothing posted)`);
    continue;
  }
  const have = new Set(seen);
  const fresh = items.filter((i) => !have.has(i.key));
  let sent = 0;
  for (const it of fresh) {
    if (sent >= MAX_PER_SOURCE || posted >= MAX_TOTAL) break;
    const text = message(src, it);
    console.log(`--- ${src.id}\n${text}\n`);
    if (!DRY) {
      try { await send(text); } catch (e) { console.log(`send failed: ${e.message}`); break; }
      await fbText(plain(text), it.url);
      await new Promise((r) => setTimeout(r, 1500));
    }
    seen.push(it.key);
    sent++; posted++;
  }
  // Keep the newest keys; a link that drops off and comes back is not re-posted
  // while it is still remembered.
  state[src.id] = seen.slice(-KEEP);
  report.push(`• ${src.id}: ${items.length} links, ${fresh.length} new, ${sent} posted${fresh.length > sent ? `, ${fresh.length - sent} wait for the next run` : ""}`);
}

if (!DRY) fs.writeFileSync(STATE_FILE, JSON.stringify(state));
console.log("\n" + report.join("\n"));
console.log(`\n${PROBE ? "PROBE" : DRY ? "DRY_RUN" : "SENT"}: ${posted} item(s)${DRY && !PROBE ? " (not sent)" : ""}.`);
