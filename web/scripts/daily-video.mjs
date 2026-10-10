// Daily poster video for the Telegram channel. Takes the posters published
// for today (IST) in the admin panel (Supabase daily_posters), draws them with
// the same poster-draw.js as /poster/, adds an intro and an outro slide with
// the site link and QR, joins them into a vertical 1080x1920 MP4 with ffmpeg
// and sends it to the channel. No posters today: nothing is sent.
// Run by .github/workflows/daily-video.yml.
//
// Env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL (default @sarkarisewaindia),
//      ELEVENLABS_API_KEY (optional: Hindi voiceover; without it the video
//      is silent), ELEVENLABS_VOICE_ID (default: Ritu Rathore),
//      VIDEO_DATE (YYYY-MM-DD, default today in IST), DRY_RUN=1 to only build,
//      POSTERS_FILE / VIDEO_COPY_TO for local tests.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(HERE, "..", "public", "assets", "js");
const SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co";
// Public anon key (Row Level Security lets it read published posters only).
const ANON = fs.readFileSync(path.join(HERE, "..", "src", "lib", "supabase-public.ts"), "utf8").match(/SUPABASE_ANON_KEY = "([^"]+)"/)[1];
const TOKEN = (process.env.TELEGRAM_BOT_TOKEN || "").trim();
const CHANNEL = (process.env.TELEGRAM_CHANNEL || "@sarkarisewaindia").trim();
const XI_KEY = (process.env.ELEVENLABS_API_KEY || "").trim();
const VOICE = (process.env.ELEVENLABS_VOICE_ID || "fTfuemKGBjYqG4ni4gw3").trim();
const DRY = !!process.env.DRY_RUN || !TOKEN;
// GitHub may start the evening run hours late; before 6 AM IST it still
// means the previous day's posters.
const DATE = process.env.VIDEO_DATE || new Date(Date.now() + 330 * 60000 - 6 * 36e5).toISOString().slice(0, 10);
const OUT = fs.mkdtempSync(path.join(os.tmpdir(), "ss-video-"));
const ff = (args) => execFileSync("ffmpeg", ["-y", "-loglevel", "error", ...args], { stdio: "inherit" });
const dur = (file) => Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file]).toString());

// 1. Today's posters
const res = process.env.POSTERS_FILE ? new Response(fs.readFileSync(process.env.POSTERS_FILE)) : await fetch(`${SUPABASE_URL}/rest/v1/daily_posters?select=id,publish_date,category,title,body,highlight,source_label,page_url&status=eq.published&publish_date=eq.${DATE}&order=sort.asc&limit=6`, {
  headers: { apikey: ANON, Authorization: `Bearer ${ANON}` },
});
if (!res.ok) throw new Error(`Supabase ${res.status}`);
const posts = await res.json();
if (!posts.length) {
  console.log(`No published posters for ${DATE}: nothing to send.`);
  process.exit(0);
}
console.log(`${posts.length} posters for ${DATE}:`, posts.map((p) => p.title).join(" | "));

// 2. Slides (PNG) drawn in Chromium with the site's poster code and font
const DESIGNS = ["saffron", "blue", "green", "dark"];
const NUM = ["पहली", "दूसरी", "तीसरी", "चौथी", "पांचवीं", "छठी"];
const COUNT = ["", "एक", "दो", "तीन", "चार", "पांच", "छह"];
const { chromium } = await import("playwright");
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage();
await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700;800&display=swap" rel="stylesheet"></head><body>
<script>${fs.readFileSync(path.join(JS, "vendor-qrcode.js"), "utf8")}</script>
<script>${fs.readFileSync(path.join(JS, "poster-draw.js"), "utf8")}</script></body></html>`, { waitUntil: "networkidle" });
await page.evaluate(() => SSPoster.ready());
const save = (name, dataUrl) => { const f = path.join(OUT, name); fs.writeFileSync(f, Buffer.from(dataUrl.split(",")[1], "base64")); return f; };
const card = (kind, n, topics) => page.evaluate(({ kind, n, topics }) => {
  const c = document.createElement("canvas"); c.width = 1080; c.height = 1920;
  const x = c.getContext("2d"); x.textBaseline = "top";
  const F = "'Mukta', sans-serif";
  const g = x.createLinearGradient(0, 0, 1080, 1920); g.addColorStop(0, "#0b3d91"); g.addColorStop(1, "#1d4ed8");
  x.fillStyle = g; x.fillRect(0, 0, 1080, 1920);
  x.fillStyle = "#ff9933"; x.fillRect(0, 0, 1080, 24); x.fillStyle = "#138808"; x.fillRect(0, 1896, 1080, 24);
  const ctr = (t, y, f, col) => { x.font = f; x.fillStyle = col; let s = t; while (x.measureText(s).width > 980 && s.length > 4) s = s.slice(0, -2); if (s !== t) s += "…"; x.fillText(s, (1080 - x.measureText(s).width) / 2, y); };
  if (kind === "intro") {
    ctr(`आज की ${n} ज़रूरी`, 640, "800 110px " + F, "#ffffff");
    ctr("सरकारी जानकारी", 780, "800 110px " + F, "#facc15");
    ctr(topics, 980, "600 50px " + F, "#e5edff");
    ctr("SarkariSewa India", 1640, "800 64px " + F, "#ffffff");
  } else {
    ctr("पूरी जानकारी और", 560, "800 92px " + F, "#ffffff");
    ctr("official लिंक यहां", 680, "800 92px " + F, "#facc15");
    ctr("sarkarisewaindia.com", 880, "800 76px " + F, "#ffffff");
    const q = qrcode(0, "M"); q.addData("https://sarkarisewaindia.com/poster/?utm_source=video"); q.make();
    const m = q.getModuleCount(), s = 360, cell = s / (m + 2), ox = 360, oy = 1030;
    x.fillStyle = "#fff"; x.fillRect(ox, oy, s, s); x.fillStyle = "#111827";
    for (let r = 0; r < m; r++) for (let k = 0; k < m; k++) if (q.isDark(r, k)) x.fillRect(ox + (k + 1) * cell, oy + (r + 1) * cell, Math.ceil(cell), Math.ceil(cell));
    ctr("रोज़ के अपडेट: Telegram @sarkarisewaindia", 1460, "600 46px " + F, "#e5edff");
    ctr("निजी जानकारी सेवा, सरकारी वेबसाइट नहीं", 1560, "400 38px " + F, "#c7d2fe");
  }
  return c.toDataURL("image/png");
}, { kind, n, topics });

const short = (t) => t.split(/[:।]/)[0].trim().slice(0, 22);
const slides = [{ img: save("s0.png", await card("intro", posts.length, posts.map((p) => short(p.title)).join(" · "))), say: `नमस्ते! आज की ${COUNT[posts.length] || posts.length} ज़रूरी सरकारी जानकारी।`, min: 3 }];
for (const [i, p] of posts.entries()) {
  const img = await page.evaluate(({ p, d }) => { const c = document.createElement("canvas"); SSPoster.draw(c, p, { design: d, size: "status", user: null, scale: 1 }); return c.toDataURL("image/png"); }, { p, d: DESIGNS[i % DESIGNS.length] });
  slides.push({ img: save(`s${i + 1}.png`, img), say: `${NUM[i] || ""}: ${p.title}। ${p.body}`, min: XI_KEY ? 5 : 8 });
}
slides.push({ img: save(`s${posts.length + 1}.png`, await card("outro")), say: "पूरी जानकारी और official लिंक के लिए देखें, सरकारी सेवा इंडिया डॉट कॉम।", min: 4 });
await browser.close();

// 3. Optional Hindi voiceover, one clip per slide so slides follow the voice
if (process.env.VOICE_DIR) {
  // Local test: pre-made clips a0.mp3, a1.mp3, ... instead of the API.
  slides.forEach((s, i) => { s.audio = path.join(process.env.VOICE_DIR, `a${i}.mp3`); });
} else if (XI_KEY) {
  for (const [i, s] of slides.entries()) {
    const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}?output_format=mp3_44100_128`, {
      method: "POST",
      headers: { "xi-api-key": XI_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ text: s.say, model_id: "eleven_flash_v2_5" }),
    });
    if (!r.ok) { console.warn(`Voiceover failed (${r.status}); making a silent video.`); slides.forEach((x) => delete x.audio); break; }
    s.audio = path.join(OUT, `a${i}.mp3`);
    fs.writeFileSync(s.audio, Buffer.from(await r.arrayBuffer()));
  }
}

// 4. One clip per slide (slow zoom), joined with cross-fades
const X = 0.6;
const lens = slides.map((s) => Math.max(s.min, s.audio ? dur(s.audio) + 0.6 : 0));
const clips = slides.map((s, i) => {
  const L = lens[i] + (i === 0 || i === slides.length - 1 ? X / 2 : X);
  const f = Math.round(L * 30), out = path.join(OUT, `c${i}.mp4`);
  const z = Math.min(0.0006, 0.06 / f).toFixed(6);
  ff(["-loop", "1", "-i", s.img, "-vf", `scale=2160:3840,zoompan=z='min(zoom+${z},1.06)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${f}:s=1080x1920:fps=30,format=yuv420p`, "-frames:v", String(f), "-c:v", "libx264", "-preset", "medium", "-crf", "21", out]);
  return out;
});
let t = 0, chain = "", prev = "[0]";
for (let k = 1; k < clips.length; k++) {
  t += lens[k - 1];
  const out = k === clips.length - 1 ? "[v]" : `[x${k}]`;
  chain += `${prev}[${k}]xfade=transition=${k === 1 || k === clips.length - 1 ? "fade" : "slideleft"}:duration=${X}:offset=${(t - X / 2).toFixed(3)}${out};`;
  prev = out;
}
const total = lens.reduce((a, b) => a + b, 0);
// Audio: the voice clips placed at each slide's start, or a silent track.
const inputs = clips.flatMap((c) => ["-i", c]);
let audioChain;
if (slides.every((s) => s.audio)) {
  let start = 0;
  slides.forEach((s, i) => { inputs.push("-i", s.audio); });
  audioChain = slides.map((s, i) => { const d = Math.round((start + (i ? 0.3 : 0.2)) * 1000); start += lens[i]; return `[${clips.length + i}:a]adelay=${d}|${d}[a${i}]`; }).join(";")
    + ";" + slides.map((_, i) => `[a${i}]`).join("") + `amix=inputs=${slides.length}:normalize=0,loudnorm=I=-16:TP=-1.5,apad[a]`;
} else {
  inputs.push("-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo");
  audioChain = `[${clips.length}:a]anull[a]`;
}
const video = path.join(OUT, `sarkarisewa-${DATE}.mp4`);
ff([...inputs, "-filter_complex", chain + audioChain, "-map", "[v]", "-map", "[a]", "-t", total.toFixed(2),
  "-c:v", "libx264", "-preset", "medium", "-crf", "22", "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", video]);
console.log(`Video: ${video} (${dur(video).toFixed(1)} s, ${(fs.statSync(video).size / 1e6).toFixed(1)} MB, voice: ${slides.every((s) => s.audio) ? "yes" : "no"})`);

// 5. Send to the channel
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const caption = [`📢 <b>आज की ${posts.length} ज़रूरी सरकारी जानकारी</b>`, "", ...posts.map((p, i) => `${i + 1}. ${esc(p.title)}`), "",
  `👉 पूरी जानकारी, अपने नाम वाला पोस्टर और official लिंक: https://sarkarisewaindia.com/poster/`,
  "✅ यह वीडियो फ्री है: अपने WhatsApp Status, YouTube Shorts, Instagram Reels या Facebook पर बेझिझक लगाएं। बस वीडियो में SarkariSewa India का नाम और लिंक रहने दें।"].join("\n").slice(0, 1000);
if (DRY) {
  console.log(TOKEN ? "DRY_RUN: not sending." : "TELEGRAM_BOT_TOKEN not set: not sending.");
  console.log(caption);
  if (process.env.VIDEO_COPY_TO) fs.copyFileSync(video, process.env.VIDEO_COPY_TO);
} else {
  const form = new FormData();
  form.append("chat_id", CHANNEL);
  form.append("caption", caption);
  form.append("parse_mode", "HTML");
  form.append("supports_streaming", "true");
  form.append("width", "1080");
  form.append("height", "1920");
  form.append("video", new Blob([fs.readFileSync(video)], { type: "video/mp4" }), path.basename(video));
  const r = await fetch(`https://api.telegram.org/bot${TOKEN}/sendVideo`, { method: "POST", body: form });
  const j = await r.json();
  if (!j.ok) throw new Error(`Telegram: ${j.description}`);
  console.log("Sent video to", CHANNEL);
}
