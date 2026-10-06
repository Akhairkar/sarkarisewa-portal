// Daily Telegram post: one page from the live sitemap (newer sections first),
// with its title, summary, what is on the page, the link and a screenshot.
// Run by .github/workflows/telegram-daily.yml. No state is stored: the page
// is picked by date, rotating through sections, so posts do not repeat until
// every page of a section has been posted.
//
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL (default @sarkarisewaindia),
//      SITE (default https://sarkarisewaindia.com), DRY_RUN=1 to only print,
//      PICK_DAY to test another day.
import fs from "node:fs";

const SITE = (process.env.SITE || "https://sarkarisewaindia.com").replace(/\/$/, "");
const LIVE = "https://sarkarisewaindia.com";
const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || "").trim();
const CHANNEL = (process.env.TELEGRAM_CHANNEL || "@sarkarisewaindia").trim();
const DRY = !!process.env.DRY_RUN || !TOKEN;

// Sections to rotate through (one per day), newest work first.
const SECTIONS = [
  ["सोलर सब्सिडी", /\/solar\//],
  ["राज्य के दस्तावेज़", /\/states\/[a-z-]+-(certificate|card|licence|exchange)\.html$/],
  ["GST", /\/gst\/.+\.html$/],
  ["ट्रैफिक चालान", /\/challan\/.+\.html$/],
  ["DigiLocker", /\/digilocker\/.+\.html$/],
  ["किरायानामा / शपथ पत्र", /\/(rent-agreement|affidavit)\/.+\.html$/],
  ["जन औषधि", /\/service\/jan-aushadhi\/[a-z-]+\/[a-z-]+\.html$/],
];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const text = (h) => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();

async function get(url) {
  const r = await fetch(url, { headers: { "User-Agent": "SarkariSewa-Telegram-Bot" } });
  if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
  return r.text();
}

function pick(urls, day) {
  // Fixed shuffled order (hash of the path) so states and topics are mixed.
  const h = (u) => [...new URL(u).pathname].reduce((a, c) => (a * 33 + c.charCodeAt(0)) >>> 0, 5381);
  const groups = SECTIONS.map(([name, re]) => [name, urls.filter((u) => re.test(u)).sort((a, b) => h(a) - h(b))]).filter(([, l]) => l.length);
  const [name, list] = groups[day % groups.length];
  return { section: name, url: list[Math.floor(day / groups.length) % list.length] };
}

function describe(html) {
  const meta = (n) => html.match(new RegExp(`<meta[^>]+(?:name|property)="${n}"[^>]+content="([^"]*)"`, "i"))?.[1] ?? html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+(?:name|property)="${n}"`, "i"))?.[1];
  const title = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? html.match(/<title>([^<]*)/i)?.[1] ?? "").replace(/\s*\|\s*SarkariSewa.*$/i, "");
  const desc = text(meta("description") || meta("og:description") || "");
  const skip = /सवाल-जवाब|पूछे जाने वाले|FAQ|Official links|और जानकारी|लोकप्रिय|Explore|इस पेज पर|पेड सेवाएं|paid|दूसरे राज्यों|के दूसरे दस्तावेज़/i;
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => text(m[1]).replace(/^[^\wऀ-ॿ₹]+/, "")).filter((t) => t && t.length < 90 && !skip.test(t));
  return { title, desc, points: [...new Set(h2)].slice(0, 4) };
}

function caption({ section, url }, d) {
  const live = url.replace(SITE, LIVE);
  const lines = [
    `🆕 <b>${esc(d.title)}</b>`,
    "",
    esc(d.desc.length > 300 ? d.desc.slice(0, 297) + "…" : d.desc),
    ...(d.points.length ? ["", "📌 <b>इस पेज पर:</b>", ...d.points.map((p) => "• " + esc(p))] : []),
    "",
    `👉 <b>पूरी जानकारी:</b> ${live}`,
    "",
    `#${section.replace(/[^\wऀ-ॿ]+/g, "_")} #SarkariSewa`,
    `📢 चैनल शेयर करें: t.me/${CHANNEL.replace(/^@/, "")}`,
  ];
  let c = lines.join("\n");
  while (c.length > 1024 && d.points.length) { d.points.pop(); return caption({ section, url }, d); }
  return c.slice(0, 1024);
}

async function shot(url) {
  try {
    const { chromium } = await import("playwright");
    const b = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
    const pg = await b.newPage({ viewport: { width: 430, height: 900 }, deviceScaleFactor: 2 });
    await pg.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
    await pg.waitForTimeout(800);
    // Hide the bottom app bar and pop-ups so the content is visible.
    await pg.addStyleTag({ content: ".bottom-nav,.wa-float,#wa-join,[class*='whatsapp-banner'],[id*='consent'],.cookie{display:none!important}" }).catch(() => {});
    const file = "telegram-shot.png";
    await pg.screenshot({ path: file, clip: { x: 0, y: 0, width: 430, height: 900 } });
    await b.close();
    return file;
  } catch (e) {
    console.log("screenshot skipped:", e.message);
    return null;
  }
}

async function tg(method, body) {
  const r = await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`, { method: "POST", body });
  const j = await r.json();
  if (!j.ok) throw new Error(`${method}: ${j.description}`);
  return j;
}

const day = process.env.PICK_DAY ? Number(process.env.PICK_DAY) : Math.floor(Date.now() / 864e5);
const xml = await get(`${SITE}/sitemap.xml`);
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(LIVE, SITE));
const p = pick(urls, day);
const d = describe(await get(p.url));
const cap = caption(p, d);
console.log(`Day ${day}: ${p.section} -> ${p.url}\n---\n${cap}\n---`);
const img = await shot(p.url);

if (DRY) {
  console.log(TOKEN ? "DRY_RUN: not sending." : "TELEGRAM_BOT_TOKEN not set: not sending.");
} else if (img) {
  const form = new FormData();
  form.append("chat_id", CHANNEL);
  form.append("caption", cap);
  form.append("parse_mode", "HTML");
  form.append("photo", new Blob([fs.readFileSync(img)], { type: "image/png" }), "page.png");
  await tg("sendPhoto", form);
  console.log("Sent photo post to", CHANNEL);
} else {
  const form = new FormData();
  form.append("chat_id", CHANNEL);
  form.append("text", cap);
  form.append("parse_mode", "HTML");
  await tg("sendMessage", form);
  console.log("Sent text post to", CHANNEL);
}
