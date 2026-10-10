// Assemble the deployable site in web/_site:
//   1. copy the old static site from the repo root, leaving out tooling
//      (scripts, notes, SQL, data dumps) that must not be public;
//   2. copy the Astro build (web/dist) on top, so a rebuilt page replaces the
//      old page at the same URL;
//   3. add rebuilt/new pages to sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { jobLastDate, isClosedPage } from "./job-dates.mjs";

const WEB = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = path.resolve(WEB, "..");
const DIST = path.join(WEB, "dist");
const OUT = path.join(WEB, "_site");
const SITE = "https://sarkarisewaindia.com";

// Top-level folders that are tooling, not website.
const SKIP_DIRS = new Set([
  ".git", ".github", ".vscode", "web", "node_modules", "scripts", "automation", "supabase",
  "sql-to-run-in-supabase", "scratch", "cloudflare", "api",
]);
// Extensions never published, anywhere in the tree.
const SKIP_EXT = new Set([".py", ".ps1", ".md", ".sql", ".log", ".toml", ".csv", ".pyc"]);
// Root-level files are mostly one-off scripts; only these extensions are
// published, plus the explicit allow-list below.
const ROOT_EXT = new Set([".html", ".xml", ".txt", ".ico"]);
const ROOT_ALLOW = new Set(["CNAME", "manifest.json", "app.js", "deadline-calendar.js", "deadline-calendar.css", "deadline-detail.js"]);

function copyTree(src, dst, isRoot) {
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, ent.name);
    const to = path.join(dst, ent.name);
    if (ent.isDirectory()) {
      if (isRoot && SKIP_DIRS.has(ent.name)) continue;
      if (ent.name === "__pycache__") continue;
      copyTree(from, to, false);
    } else if (ent.isFile()) {
      const ext = path.extname(ent.name).toLowerCase();
      if (SKIP_EXT.has(ext)) continue;
      if (isRoot && !ROOT_EXT.has(ext) && !ROOT_ALLOW.has(ent.name)) continue;
      if (ent.name === "requirements.txt") continue;
      fs.mkdirSync(dst, { recursive: true });
      fs.copyFileSync(from, to);
    }
  }
}

function listHtml(dir, base = dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...listHtml(p, base));
    else if (ent.name.endsWith(".html")) out.push(path.relative(base, p).split(path.sep).join("/"));
  }
  return out;
}

fs.rmSync(OUT, { recursive: true, force: true });
copyTree(ROOT, OUT, true);
fs.cpSync(DIST, OUT, { recursive: true });
// An old "x/index.html" whose canonical is "x.html" gets the rebuilt x.html too,
// so visitors on the old address see the same new page.
for (const rel of listHtml(DIST)) {
  const idx = path.join(OUT, rel.slice(0, -5), "index.html");
  if (!rel.endsWith(".html") || rel.endsWith("index.html") || fs.existsSync(path.join(DIST, rel.slice(0, -5), "index.html")) || !fs.existsSync(idx)) continue;
  const canon = fs.readFileSync(idx, "utf8").slice(0, 8000).match(/rel="canonical" href="([^"]*)"/)?.[1];
  if (canon === `${SITE}/${rel}`) fs.copyFileSync(path.join(DIST, rel), idx);
}

// Repair internal links that point to pages that never existed (older pages
// used other spellings, or /service/<state>-<doc>.html for guides that live
// under /states/), and point two short state-hub duplicates to the main hub.
// Unresolvable links are left as they are.
{
  const ALIAS = {
    "/service/ayushman-bharat-card.html": "/service/ayushman-bharat.html",
    "/service/driving-license.html": "/service/driving-licence.html",
    "/service/pm-fasal-bima.html": "/service/pm-fasal-bima-yojana.html",
    "/service/csc-locator/tools/status-troubleshooter.html": "/tools/status-troubleshooter.html",
  };
  const CANON = { "states/hp.html": "states/himachal-pradesh.html", "states/arunachal.html": "states/arunachal-pradesh.html" };
  const has = (p) => { const f = path.join(OUT, decodeURI(p).replace(/^\//, "")); return fs.existsSync(f) && fs.statSync(f).isFile(); };
  // State abbreviations from older /service/<abbr>-<doc>.html pages whose canonical is /states/<state>-<doc>.html.
  const abbr = { dn: "dadra-nagar-haveli-daman-diu" };
  for (const f of fs.readdirSync(path.join(OUT, "service"))) {
    const m = f.match(/^([a-z]{2,3})-([a-z-]+)\.html$/);
    if (!m) continue;
    const c = fs.readFileSync(path.join(OUT, "service", f), "utf8").slice(0, 8000).match(/rel="canonical" href="https:\/\/sarkarisewaindia\.com\/states\/([a-z-]+)-([a-z]+-[a-z-]+)\.html"/);
    if (c && c[2] === m[2]) abbr[m[1]] = c[1];
  }
  const fix = (abs) => {
    if (ALIAS[abs] && has(ALIAS[abs])) return ALIAS[abs];
    const m = abs.match(/^\/service\/([a-z-]+?)-((?:birth|death|caste|income|domicile)-certificate|ration-card|voter-id-card|driving-licence|labour-card|senior-citizen-card|employment-exchange)\.html$/);
    if (m) {
      for (const st of [m[1], abbr[m[1]]].filter(Boolean)) if (has(`/states/${st}-${m[2]}.html`)) return `/states/${st}-${m[2]}.html`;
    }
    return null;
  };
  let fixed = 0;
  for (const rel of listHtml(OUT)) {
    if (/^(admin|private|partials)\//.test(rel)) continue;
    const file = path.join(OUT, rel);
    let html = fs.readFileSync(file, "utf8");
    let changed = false;
    html = html.replace(/href="([^"#?:]+\.html)([#?][^"]*)?"/g, (all, href, rest) => {
      const abs = href.startsWith("/") ? href : "/" + path.posix.normalize(path.posix.join(path.posix.dirname(rel), href));
      if (abs.startsWith("/..") || has(abs)) return all;
      const to = fix(abs);
      if (!to) return all;
      changed = true; fixed++;
      return `href="${to}${rest ?? ""}"`;
    });
    if (CANON[rel] && has("/" + CANON[rel])) {
      html = html.replace(/(rel="canonical" href=")[^"]*(")/, `$1${SITE}/${CANON[rel]}$2`).replace(/(href=")[^"]*(" rel="canonical")/, `$1${SITE}/${CANON[rel]}$2`);
      changed = true;
    }
    if (changed) fs.writeFileSync(file, html);
  }
  console.log(`[assemble] internal links repaired: ${fixed}`);
}

// Job pages close themselves: once the last date (Indian time) has passed, a
// page without the "Application Closed" notice gets it under the heading.
{
  const todayIst = new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10);
  const BANNER = '<div class="job-expired-banner" role="status" style="margin:16px auto;max-width:1100px;padding:14px 18px;border:1px solid #f59e0b;background:rgba(245,158,11,.10);border-radius:12px;color:var(--color-text);"><strong>⏳ आवेदन बंद / Application Closed</strong><br><span style="font-size:.92rem;">इस भर्ती की आवेदन अंतिम तिथि समाप्त हो चुकी है। नीचे दी गई जानकारी केवल संदर्भ के लिए है। नई भर्तियों के लिए <a href="/jobs/index.html" style="font-weight:700;">Job Alerts</a> देखें।</span></div>';
  const jobsDir = path.join(OUT, "jobs");
  let closed = 0;
  if (fs.existsSync(jobsDir)) for (const f of fs.readdirSync(jobsDir)) {
    if (!f.endsWith(".html") || /^(index|post|expired)\.html$/.test(f)) continue;
    const file = path.join(jobsDir, f);
    const html = fs.readFileSync(file, "utf8");
    const last = jobLastDate(html);
    if (!last || isClosedPage(html) || last.toISOString().slice(0, 10) >= todayIst) continue;
    const at = html.search(/<\/h1>/i);
    if (at === -1) continue;
    fs.writeFileSync(file, html.slice(0, at + 5) + BANNER + html.slice(at + 5));
    closed++;
  }
  console.log(`[assemble] job pages marked closed: ${closed}`);
}

// Old URLs that Google still requests and that now 404: /service/<state>-<doc>.html
// guides moved to /states/<state>-<doc>.html, plus a few renamed pages. GitHub
// Pages has no server redirects, so each gets a small redirect page (meta
// refresh + canonical), like the older redirect pages in the repo. Pages that
// exist are never overwritten.
{
  const stub = (to) => `<!DOCTYPE html><html lang="hi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Moved | SarkariSewa India</title><link rel="canonical" href="${SITE}${to}"><meta http-equiv="refresh" content="0; url=${to}"><script>location.replace(${JSON.stringify(to)}+location.hash)</script></head><body><p>यह पेज यहां चला गया है: <a href="${to}">${SITE}${to}</a></p></body></html>`;
  const moves = { "servicehub/index.html": "/services/", "tools/gstin-verification.html": "/services/gstin-verification/" };
  for (const f of fs.readdirSync(path.join(OUT, "states"))) {
    if (/^[a-z-]+-[a-z]+(-[a-z]+)*\.html$/.test(f) && f.includes("-")) moves[`service/${f}`] = `/states/${f}`;
  }
  const isFile = (rel) => { const f = path.join(OUT, rel); return fs.existsSync(f) && fs.statSync(f).isFile(); };
  const stateFiles = fs.readdirSync(path.join(OUT, "states")).filter((f) => f.endsWith(".html")).map((f) => f.slice(0, -5));
  // State hubs: states/<hub>.html that also has states/<hub>-<doc>.html pages.
  const hubs = stateFiles.filter((h) => stateFiles.some((x) => x.startsWith(h + "-")));
  // Older state x document links for guides we never had per state: send them
  // to the national guide (or, for pensions, the state's hub page).
  const NATIONAL = {
    "disability-certificate": "/service/disability-certificate.html", "marriage-certificate": "/service/marriage-certificate.html",
    "pan-card-apply": "/service/pan-card.html", "e-shram-card": "/service/e-shram-card.html",
    "ayushman-card": "/service/ayushman-bharat.html", "ayushman-bharat": "/service/ayushman-bharat.html",
    "pm-kisan": "/service/pm-kisan.html", "pm-kisan-samman-nidhi": "/service/pm-kisan.html",
    "legal-heir-certificate": "/service/legal-heir-certificate.html", "pm-awas-yojana": "/service/pm-awas-yojana.html",
    "old-age-pension": "HUB",
  };
  for (const h of hubs) for (const [d, to] of Object.entries(NATIONAL)) {
    if (!isFile(`states/${h}-${d}.html`)) moves[`states/${h}-${d}.html`] = to === "HUB" ? `/states/${h}.html` : to;
  }
  // Short or old state slugs: dadra-nagar-haveli, and two-letter codes used by
  // older /service/<abbr>-<doc>.html pages (their canonical names the state).
  const short = { "dadra-nagar-haveli": "dadra-nagar-haveli-daman-diu" };
  for (const f of fs.readdirSync(path.join(OUT, "service"))) {
    const m = f.match(/^([a-z]{2,3})-([a-z-]+)\.html$/);
    if (!m) continue;
    const c = fs.readFileSync(path.join(OUT, "service", f), "utf8").slice(0, 8000).match(/rel="canonical" href="https:\/\/sarkarisewaindia\.com\/states\/([a-z-]+)-([a-z]+-[a-z-]+)\.html"/);
    if (c && c[2] === m[2]) short[m[1]] = c[1];
  }
  for (const [a, st] of Object.entries(short)) {
    for (const x of stateFiles) if (x.startsWith(st + "-")) moves[`states/${a}${x.slice(st.length)}.html`] = `/states/${x}.html`;
    for (const [d, to] of Object.entries(NATIONAL)) if (!moves[`states/${a}-${d}.html`]) moves[`states/${a}-${d}.html`] = to === "HUB" ? `/states/${st}.html` : to;
  }
  moves["states/aadhaar-card.html"] = "/service/aadhaar-card.html";
  // Hand-listed moves from Search Console's 404 report (scripts/moved-urls.json).
  try { Object.assign(moves, JSON.parse(fs.readFileSync(path.join(WEB, "scripts", "moved-urls.json"), "utf8"))); } catch (e) {}

  let made = 0;
  for (const [from, to] of Object.entries(moves)) {
    const file = path.join(OUT, from);
    if (fs.existsSync(file) || !fs.existsSync(path.join(OUT, to.endsWith("/") ? to + "index.html" : to))) continue;
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, stub(to));
    made++;
  }
  // The old dynamic state page (states/state.html?state=<slug>).
  if (!isFile("states/state.html")) {
    fs.writeFileSync(path.join(OUT, "states", "state.html"), `<!DOCTYPE html><html lang="hi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>राज्य सेवाएं | SarkariSewa India</title><link rel="canonical" href="${SITE}/states/"><meta name="robots" content="noindex, follow"><script>var s=(new URLSearchParams(location.search).get("state")||"").toLowerCase().replace(/[^a-z-]/g,"");location.replace(s?"/states/"+s+".html":"/states/");</script></head><body><p><a href="/states/">सभी राज्यों की सेवाएं</a></p></body></html>`);
    made++;
  }
  console.log(`[assemble] redirect pages for moved URLs: ${made}`);
}

// Sitemap: keep the existing one, refresh entries for rebuilt pages, add new ones.
const today = new Date().toISOString().slice(0, 10);
// Honest <lastmod>: a rebuilt page keeps its previous date unless its content
// changed. The live site publishes lastmod.json ({url: [hash, date]}); the
// hash covers the page's main content, not the shared header/footer.
// changed-urls.txt lists new and changed URLs for IndexNow.
let prevMod = {};
if (process.env.LASTMOD_FILE) {
  try { prevMod = JSON.parse(fs.readFileSync(process.env.LASTMOD_FILE, "utf8")); } catch (e) {}
} else if (!process.env.NO_LASTMOD_FETCH) {
  try {
    const r = await fetch(`${SITE}/lastmod.json`, { signal: AbortSignal.timeout(15000) });
    if (r.ok) prevMod = await r.json();
  } catch (e) { console.warn(`[assemble] no previous lastmod.json: ${e.message}`); }
}
const nextMod = {};
const changedUrls = [];
const contentHash = (html) => {
  const main = html.match(/<article[\s\S]*<\/article>/)?.[0] ?? html.match(/<main[\s\S]*<\/main>/)?.[0] ?? html;
  const t = main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return crypto.createHash("sha1").update(t).digest("hex").slice(0, 16);
};
const modDate = (loc, html) => {
  const h = contentHash(html), prev = prevMod[loc];
  const d = prev && prev[0] === h ? prev[1] : today;
  if (!prev || prev[0] !== h) changedUrls.push(loc);
  nextMod[loc] = [h, d];
  return d;
};
const smPath = path.join(OUT, "sitemap.xml");
let sm = fs.readFileSync(smPath, "utf8");
// Entries without a <loc> are invalid (Search Console reports them as errors).
sm = sm.replace(/  <url>(?:(?!<\/url>)[\s\S])*?<\/url>\n/g, (b) => (b.includes("<loc>") ? b : ""));
let added = 0, refreshed = 0;
for (const rel of listHtml(DIST)) {
  const html = fs.readFileSync(path.join(DIST, rel), "utf8");
  if (/<meta name="robots" content="noindex/.test(html)) continue;
  const canon = html.match(/rel="canonical" href="([^"]*)"/)?.[1];
  // A directory page is listed as "x/", unless its canonical keeps "x/index.html".
  const loc = canon === `${SITE}/${rel}` ? canon : `${SITE}/${rel.replace(/(^|\/)index\.html$/, "$1")}`;
  // A page that names another page as canonical is not listed itself.
  if (canon && canon !== `${SITE}/${rel}` && canon !== loc) {
    sm = sm.replace(new RegExp(`  <url>\\s*<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>[\\s\\S]*?</url>\\n`), "");
    continue;
  }
  // Drop the ".../index.html" spelling of a directory URL so it is listed once.
  if (loc.endsWith("/index.html")) {
    const dup = new RegExp(`  <url>\\s*<loc>${loc.slice(0, -10).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>[\\s\\S]*?</url>\\n`);
    sm = sm.replace(dup, "");
  }
  if (loc.endsWith("/")) {
    const dup = new RegExp(`  <url>\\s*<loc>${(loc + "index.html").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>[\\s\\S]*?</url>\\n`);
    sm = sm.replace(dup, "");
  }
  const lm = modDate(loc, html);
  const entry = new RegExp(`(<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>\\s*<lastmod>)[^<]*(</lastmod>)`);
  if (entry.test(sm)) { sm = sm.replace(entry, `$1${lm}$2`); refreshed++; }
  else {
    sm = sm.replace("</urlset>", `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lm}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>`);
    added++;
  }
}
// Never list URLs that robots.txt blocks, a host-only homepage duplicate, or a
// page whose canonical names another page.
const disallow = fs.readFileSync(path.join(OUT, "robots.txt"), "utf8")
  .split("\n").map((l) => l.match(/^\s*Disallow:\s*(\S+)/i)?.[1]).filter(Boolean);
let dropped = 0;
sm = sm.replace(/  <url>\s*<loc>([^<]*)<\/loc>[\s\S]*?<\/url>\n/g, (block, loc) => {
  const p = loc.slice(SITE.length);
  if (p === "" || disallow.some((d) => p.startsWith(d))) { dropped++; return ""; }
  const file = path.join(OUT, decodeURI(p).replace(/\/$/, "/index.html"));
  if (p.endsWith(".html") && fs.existsSync(file)) {
    const canon = fs.readFileSync(file, "utf8").slice(0, 8000).match(/rel="canonical" href="([^"]*)"/)?.[1];
    if (canon && canon !== loc) { dropped++; return ""; }
  }
  return block;
});
// Older static pages that are indexable, self-canonical and missing from the
// sitemap (e.g. the GSTIN tool) are added too. Script-filled detail templates
// are left out.
const NOT_LISTED = /^(admin|private|partials|account|google|404|search\.html|deadline-detail\.html|csc-centre\.html|csc-edit\.html)/;
const listed = new Set([...sm.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]));
for (const rel of listHtml(OUT)) {
  if (NOT_LISTED.test(rel)) continue;
  const loc = `${SITE}/${rel.replace(/(^|\/)index\.html$/, "$1")}`;
  if (listed.has(loc) || listed.has(`${SITE}/${rel}`)) continue;
  const head = fs.readFileSync(path.join(OUT, rel), "utf8").slice(0, 12000);
  if (/name="robots" content="[^"]*noindex/i.test(head) || /content="[^"]*noindex[^"]*" name="robots"/i.test(head)) continue;
  const canon = head.match(/rel="canonical" href="([^"]*)"/)?.[1] ?? head.match(/href="([^"]*)" rel="canonical"/)?.[1];
  if (canon !== loc) continue;
  if (disallow.some((d) => loc.slice(SITE.length).startsWith(d))) continue;
  sm = sm.replace("</urlset>", `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>\n</urlset>`);
  listed.add(loc);
  added++;
}
fs.writeFileSync(smPath, sm);
fs.writeFileSync(path.join(OUT, "lastmod.json"), JSON.stringify(nextMod));
// No previous file (first run): this build is the baseline, nothing to ping.
if (!Object.keys(prevMod).length) changedUrls.length = 0;
fs.writeFileSync(path.join(WEB, "changed-urls.txt"), changedUrls.join("\n") + (changedUrls.length ? "\n" : ""));
console.log(`[assemble] content changed or new: ${changedUrls.length} page(s)`);
// Search index for /search.html: [url, title] of every indexable page.
const SKIP_SEARCH = /^(admin|private|partials|account|google|404|search\.html)/;
const index = [];
for (const rel of listHtml(OUT)) {
  if (SKIP_SEARCH.test(rel)) continue;
  const head = fs.readFileSync(path.join(OUT, rel), "utf8").slice(0, 8000);
  if (/name="robots" content="noindex/i.test(head)) continue;
  const canon = head.match(/rel="canonical" href="https:\/\/sarkarisewaindia\.com(\/[^"]*)"/)?.[1];
  const url = "/" + rel.replace(/(^|\/)index\.html$/, "$1");
  if (canon && canon !== url) continue; // duplicates point elsewhere
  const title = (head.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "")
    .replace(/&amp;/g, "&").replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"')
    .replace(/\s*[|—–-]\s*SarkariSewa.*$/i, "").trim();
  if (title) index.push([url, title]);
}
fs.writeFileSync(path.join(OUT, "search-index.json"), JSON.stringify(index));
console.log(`assembled ${OUT}: sitemap refreshed ${refreshed}, added ${added}, dropped ${dropped}; search index ${index.length} pages`);
