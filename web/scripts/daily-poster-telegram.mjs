// One poster a day for the Telegram channel, drawn with the site's
// poster-draw.js (photo designs) and sent as a picture with a short caption
// and the page link. Run by .github/workflows/daily-poster.yml.
//
// Which poster: the first poster published for today in the admin panel
// (Supabase daily_posters); if there is none, an open job from our own job
// pages whose last date is 3-12 days away (one per day, in turn), so the
// channel still gets a useful poster on days nothing was written.
//
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL (default @sarkarisewaindia),
//      POSTER_DATE (YYYY-MM-DD, default today in IST), DRY_RUN=1 to only build
//      (the picture is written to OUT_FILE, default ./poster.png).
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const WEB = path.join(HERE, "..");
const PUBLIC = path.join(WEB, "public");
const SITE = "https://sarkarisewaindia.com";
const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co";
const ANON = fs.readFileSync(path.join(WEB, "src", "lib", "supabase-public.ts"), "utf8").match(/SUPABASE_ANON_KEY = "([^"]+)"/)[1];
const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || "").trim();
const CHANNEL = (process.env.TELEGRAM_CHANNEL || "@sarkarisewaindia").trim();
const DRY = !!process.env.DRY_RUN || !TOKEN;
const DATE = process.env.POSTER_DATE || new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10);
const DAY = Math.floor(Date.parse(DATE + "T00:00:00Z") / 864e5);
const MONTHS = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
const dayHi = (iso) => { const d = new Date(iso + "T00:00:00Z"); return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`; };
const esc = (s) => String(s ?? "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

// 1. Today's poster from the admin panel
async function adminPoster() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/daily_posters?select=id,publish_date,category,title,body,highlight,source_label,page_url&status=eq.published&publish_date=eq.${DATE}&order=sort.asc&limit=1`, {
    headers: { apikey: ANON, Authorization: `Bearer ${ANON}` },
  });
  if (!res.ok) throw new Error(`Supabase ${res.status}`);
  return (await res.json())[0] || null;
}

// 2. Otherwise an open job closing in 3-12 days (web/src/data/jobs.ts and the
// job guide's docHi/description)
function jobPoster() {
  const src = fs.readFileSync(path.join(WEB, "src", "data", "jobs.ts"), "utf8");
  const jobs = [...src.matchAll(/\{ slug: "([^"]+)", sector: "[^"]+", last: "(\d{4}-\d{2}-\d{2})"(?:, lastNote: "([^"]*)")?([^}]*)\}/g)]
    .filter((m) => !/status: "expected"/.test(m[4]))
    .map((m) => ({ slug: m[1], last: m[2], note: m[3] || "" }));
  const dayOf = (iso) => Math.floor(Date.parse(iso + "T00:00:00Z") / 864e5);
  const soon = jobs.filter((j) => dayOf(j.last) - DAY >= 3 && dayOf(j.last) - DAY <= 12).sort((a, b) => a.last.localeCompare(b.last) || a.slug.localeCompare(b.slug));
  if (!soon.length) return null;
  const j = soon[DAY % soon.length];
  const guide = path.join(WEB, "src", "guides", "jobs", j.slug + ".ts");
  if (!fs.existsSync(guide)) return null;
  const g = fs.readFileSync(guide, "utf8");
  const field = (k) => (g.match(new RegExp(`\\n  ${k}: "((?:[^"\\\\]|\\\\.)*)"`)) || [])[1]?.replace(/\\"/g, '"') || "";
  const name = field("docHi") || j.slug;
  return {
    id: "job-" + j.slug,
    publish_date: DATE,
    category: "deadline",
    title: `${name}: आवेदन ${dayHi(j.last)} तक`,
    body: field("description").replace(/\s+/g, " ").slice(0, 170),
    highlight: `आखिरी तारीख: ${dayHi(j.last)}`,
    source_label: null,
    page_url: `/jobs/${j.slug}.html`,
  };
}

const post = (await adminPoster()) || jobPoster();
if (!post) { console.log(`No poster for ${DATE}: nothing to send.`); process.exit(0); }
console.log(`Poster for ${DATE}: ${post.title} (${post.id})`);

// 3. Draw it in Chromium; a small local server gives poster-draw.js its photos.
const TYPES = { ".js": "text/javascript", ".jpg": "image/jpeg", ".png": "image/png" };
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    return res.end(`<!doctype html><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&display=swap" rel="stylesheet"><body><script src="/assets/js/vendor-qrcode.js"></script><script src="/assets/js/poster-draw.js"></script></body>`);
  }
  const file = path.join(PUBLIC, decodeURIComponent(req.url.split("?")[0]));
  if (!file.startsWith(PUBLIC) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "content-type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { chromium } = await import("playwright");
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage();
await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: "networkidle" });
await page.evaluate(() => SSPoster.ready());
const designs = ["saffron", "blue", "green", "dark", "photo"];
const design = designs[DAY % designs.length];
const png = await page.evaluate(({ post, design }) => {
  const c = document.createElement("canvas");
  SSPoster.draw(c, post, { design, size: "status", scale: 1 });
  return c.toDataURL("image/png");
}, { post, design });
await browser.close();
server.close();
const img = Buffer.from(png.split(",")[1], "base64");

const link = `${SITE}${post.page_url || "/poster/"}?utm_source=telegram&utm_medium=poster`;
const cap = [
  `<b>${esc(post.title)}</b>`,
  post.body ? esc(post.body) : "",
  post.highlight ? `📌 ${esc(post.highlight)}` : "",
  `👉 पूरी जानकारी: ${link}`,
  "SarkariSewa India · निजी सेवा, सरकारी वेबसाइट नहीं",
].filter(Boolean).join("\n\n").slice(0, 1024);

if (DRY) {
  fs.writeFileSync(process.env.OUT_FILE || "poster.png", img);
  console.log(TOKEN ? "DRY_RUN: not sending." : "TELEGRAM_BOT_TOKEN not set: not sending.");
  console.log(cap);
  process.exit(0);
}
const form = new FormData();
form.append("chat_id", CHANNEL);
form.append("caption", cap);
form.append("parse_mode", "HTML");
form.append("photo", new Blob([img], { type: "image/png" }), "poster.png");
const r = await fetch(`https://api.telegram.org/bot${TOKEN}/sendPhoto`, { method: "POST", body: form });
const j = await r.json();
if (!j.ok) throw new Error(`Telegram: ${j.description}`);
console.log("Sent to", CHANNEL);
