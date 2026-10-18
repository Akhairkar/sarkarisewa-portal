// Official update watcher: checks the notice pages of recruiting bodies
// (UPSC, SSC, NTA, IBPS, AIIMS ...) and posts each new result, admit card,
// answer key or notification straight to the Telegram channel, with the
// official link. Run by .github/workflows/official-watch.yml.
//
// Only links whose text looks like a result/admit card/notification are
// considered. A source seen for the first time is recorded silently (nothing
// is posted), so a lost state never floods the channel. Low-interest notices
// (NOISE: departmental exams, corrigenda, court matters) are never posted. At most MAX_PER_SOURCE
// items per source and MAX_TOTAL items per run are posted; the rest wait.
//
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL (default @sarkarisewaindia),
//      FB_PAGE_ID + FB_PAGE_TOKEN (optional: also post to the Facebook Page),
//      STATE_FILE (default .watch-state.json), DRY_RUN=1 to only print,
//      PROBE=1 to list what every source shows now. Neither saves state.
import fs from "node:fs";
import crypto from "node:crypto";
import { execSync } from "node:child_process";
import { fbText, plain } from "./fb-page.mjs";

const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || "").trim();
const CHANNEL = (process.env.TELEGRAM_CHANNEL || "@sarkarisewaindia").trim();
const STATE_FILE = process.env.STATE_FILE || ".watch-state.json";
const PROBE = !!process.env.PROBE;
const DRY = !!process.env.DRY_RUN || !TOKEN || PROBE;
const MAX_PER_SOURCE = 2, MAX_TOTAL = 6, KEEP = 2000;
const SITE = "https://sarkarisewaindia.com";
const WHATSAPP = "https://whatsapp.com/channel/0029VbDjAqgEAKWFibyzWr0g";

// Notice pages of national recruiting and exam bodies. Optional fields:
//   api: "ssc"  read SSC's own JSON notice API (the site itself is a JS app)
//   match       only links whose text or address matches this regex
//   want        a looser "worth posting" regex than WANT for this source
const SSC_API = "https://ssc.gov.in/api/general-website/portal/";
const SSC_Q = "?page=1&limit=15&key=createdAt&order=DESC&isAttachment=true&language=english&attributes=id,headline,examId,contentType,redirectUrl,startDate,endDate,language,createdAt";
const SOURCES = process.env.SOURCES_FILE ? JSON.parse(fs.readFileSync(process.env.SOURCES_FILE, "utf8")) : [
  // www. is served from a cache that runners can reach; the bare host is not.
  // Our own new job pages (siteJobs below), posted with a link to the page.
  { id: "site-jobs", name: "SarkariSewa", site: true, url: SITE },
  { id: "upsc", name: "UPSC", url: "https://www.upsc.gov.in/whats-new", want: "notice|result|admit|interview|answer|marks|cut[\\s-]*off|advertisement|vacanc|examination" },
  { id: "upsc-exam", name: "UPSC", url: "https://www.upsc.gov.in/examinations/active-exams" },
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

// From official sites only new recruitments are posted (results, answer keys
// and admit cards go to too few readers); our own new job pages are posted
// too (source "site-jobs"), with a link to the page.
const POST_KINDS = /^नई भर्ती/;

// Updates that matter only to a few people (departmental exams, corrigenda,
// court matters, lists of rejected candidates ...): recorded as seen, never posted.
const NOISE = /departmental|\bldce\b|in-?service|corrigend|addend|errat|court\s*(case|order)|contempt|compliance|show\s*cause|debar|representation|rejected|withheld|seniority|promotion|transfer\s*order|office\s*memorandum|\bo\.?m\.?\b|grievance|mock\s*test|feedback|tentative\s*vacanc|vacancy\s*position|minutes\s*of|re-?exam\s*request|additional|response\s*sheet|tentative|list[\s-]*i|qualified\s*for|provisional|marks\s*of|withheld|result\s*of\s*re/i;

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

// Open jobs that have a page on our site: src/data/jobs.ts (title from its
// guide) and jobs-daily/*.json. Read from the checked-out repo.
function siteJobs() {
  const root = "../..", today = new Date().toISOString().slice(0, 10), out = [];
  const guideTitle = (slug) => { try { return (fs.readFileSync(`${root}/web/src/guides/jobs/${slug}.ts`, "utf8").match(/\n  title: "([^"]+)"/) || [])[1]; } catch { return undefined; } };
  const jobsTs = fs.readFileSync(`${root}/web/src/data/jobs.ts`, "utf8");
  for (const m of jobsTs.matchAll(/\{ slug: "([^"]+)", sector: "[^"]+", last: "(\d{4}-\d{2}-\d{2})"(?:, lastNote: "([^"]*)")?(, status: "expected")?/g)) {
    const [, slug, last, note, expected] = m;
    const title = guideTitle(slug);
    if (title && !expected && last >= today) out.push({ key: sha("site|" + slug), text: title, url: `${SITE}/jobs/${slug}.html`, last, note });
  }
  try {
    for (const f of fs.readdirSync(`${root}/jobs-daily`).filter((f) => f.endsWith(".json") && !f.startsWith("_"))) {
      try { const j = JSON.parse(fs.readFileSync(`${root}/jobs-daily/${f}`, "utf8")); if (j.slug && j.title && j.lastDate >= today) out.push({ key: sha("site|" + j.slug), text: j.title, url: `${SITE}/jobs/${j.slug}.html`, last: j.lastDate, note: j.lastNote }); } catch {}
    }
  } catch {}
  return out;
}

function siteMessage(it) {
  const d = new Date(it.last + "T00:00:00").toLocaleDateString("hi-IN", { day: "numeric", month: "long", year: "numeric" });
  return [`🆕 <b>नई भर्ती: ${esc(it.text)}</b>`, "", `⏳ आखिरी तारीख: <b>${d}</b>${it.note ? ` (${esc(it.note)})` : ""}`, "",
    `👉 योग्यता, उम्र, फीस और आवेदन का तरीका: <a href="${esc(it.url)}?utm_source=telegram">पूरी जानकारी पढ़ें</a>`, "",
    `📋 <a href="${SITE}/jobs/qualification-wise-govt-jobs.html?utm_source=telegram">अपनी योग्यता से नौकरी खोजें</a> | 📲 <a href="${WHATSAPP}">WhatsApp चैनल</a>`].join("\n");
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
  lines.push("", "<i>पूरी जानकारी और आवेदन सिर्फ official वेबसाइट पर देखें।</i>",
    `📋 <a href="${SITE}/jobs/?utm_source=telegram">सभी सरकारी नौकरी अपडेट</a> | 📲 <a href="${WHATSAPP}">WhatsApp चैनल जॉइन करें</a>`);
  return lines.join("\n");
}

// A phone-size screenshot of one of our pages, for the post. Playwright is
// installed only when a run has a site job to post; on any failure the post
// goes out as text.
let pw = null;
async function shot(url) {
  try {
    if (!pw) {
      execSync("npm init -y >/dev/null && npm install --no-save playwright@1 && npx playwright install --with-deps chromium", { stdio: "inherit" });
      pw = await import("playwright");
    }
    const b = await pw.chromium.launch();
    const pg = await b.newPage({ viewport: { width: 430, height: 900 }, deviceScaleFactor: 2 });
    await pg.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
    await pg.waitForTimeout(800);
    await pg.addStyleTag({ content: ".bottom-nav,.wa-float,#wa-join,[id*='consent'],.cookie{display:none!important}" }).catch(() => {});
    const buf = await pg.screenshot({ clip: { x: 0, y: 0, width: 430, height: 900 } });
    await b.close();
    return buf;
  } catch (e) {
    console.log("screenshot skipped:", e.message);
    return null;
  }
}

async function sendPhoto(buf, caption) {
  const form = new FormData();
  form.append("chat_id", CHANNEL);
  form.append("caption", caption.slice(0, 1024));
  form.append("parse_mode", "HTML");
  form.append("photo", new Blob([buf], { type: "image/png" }), "page.png");
  const j = await (await fetch(`https://api.telegram.org/bot${TOKEN}/sendPhoto`, { method: "POST", body: form })).json();
  if (!j.ok) throw new Error(`Telegram: ${j.description}`);
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
    if (src.site) items = siteJobs();
    else if (src.api === "ssc") items = await sscItems();
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
  // Our own job pages start from nothing, so every open one is posted once.
  const seen = state[src.id] ?? (src.site ? [] : undefined);
  if (!seen) {
    state[src.id] = items.map((i) => i.key);
    report.push(`• ${src.id}: baseline ${items.length} links (nothing posted)`);
    continue;
  }
  const have = new Set(seen);
  const wanted = (i) => src.site || (!NOISE.test(i.text) && POST_KINDS.test(kind(i.text)[1]));
  const fresh = items.filter((i) => !have.has(i.key) && wanted(i));
  const skipped = items.filter((i) => !have.has(i.key) && !wanted(i));
  skipped.forEach((i) => { console.log(`[${src.id}] skipped (not a new recruitment / noise): ${i.text}`); seen.push(i.key); });
  let sent = 0;
  for (const it of fresh) {
    // Our own job pages all go out (each is a separate post); official notices are capped.
    if (src.site ? sent >= 20 : (sent >= MAX_PER_SOURCE || posted >= MAX_TOTAL)) break;
    const text = src.site ? siteMessage(it) : message(src, it);
    console.log(`--- ${src.id}\n${text}\n`);
    if (!DRY) {
      try {
        const img = src.site ? await shot(it.url) : null;
        if (img) await sendPhoto(img, text); else await send(text);
      } catch (e) { console.log(`send failed: ${e.message}`); break; }
      await fbText(plain(text), it.url);
      await new Promise((r) => setTimeout(r, 1500));
    }
    seen.push(it.key);
    sent++; posted++;
  }
  // Keep the newest keys; a link that drops off and comes back is not re-posted
  // while it is still remembered.
  state[src.id] = seen.slice(-KEEP);
  report.push(`• ${src.id}: ${items.length} links, ${fresh.length} new, ${skipped.length} skipped as noise, ${sent} posted${fresh.length > sent ? `, ${fresh.length - sent} wait for the next run` : ""}`);
}

if (!DRY) fs.writeFileSync(STATE_FILE, JSON.stringify(state));
console.log("\n" + report.join("\n"));
console.log(`\n${PROBE ? "PROBE" : DRY ? "DRY_RUN" : "SENT"}: ${posted} item(s)${DRY && !PROBE ? " (not sent)" : ""}.`);
