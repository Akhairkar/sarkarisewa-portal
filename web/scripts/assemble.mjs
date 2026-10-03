// Assemble the deployable site in web/_site:
//   1. copy the old static site from the repo root, leaving out tooling
//      (scripts, notes, SQL, data dumps) that must not be public;
//   2. copy the Astro build (web/dist) on top, so a rebuilt page replaces the
//      old page at the same URL;
//   3. add rebuilt/new pages to sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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

// Sitemap: keep the existing one, refresh entries for rebuilt pages, add new ones.
const today = new Date().toISOString().slice(0, 10);
const smPath = path.join(OUT, "sitemap.xml");
let sm = fs.readFileSync(smPath, "utf8");
let added = 0, refreshed = 0;
for (const rel of listHtml(DIST)) {
  const html = fs.readFileSync(path.join(DIST, rel), "utf8");
  if (/<meta name="robots" content="noindex/.test(html)) continue;
  const loc = `${SITE}/${rel.replace(/(^|\/)index\.html$/, "$1")}`;
  // A page that names another page as canonical is not listed itself.
  const canon = html.match(/rel="canonical" href="([^"]*)"/)?.[1];
  if (canon && canon !== `${SITE}/${rel}` && canon !== loc) {
    sm = sm.replace(new RegExp(`  <url>\\s*<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>[\\s\\S]*?</url>\\n`), "");
    continue;
  }
  // Drop the ".../index.html" spelling of a directory URL so it is listed once.
  if (loc.endsWith("/")) {
    const dup = new RegExp(`  <url>\\s*<loc>${(loc + "index.html").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>[\\s\\S]*?</url>\\n`);
    sm = sm.replace(dup, "");
  }
  const entry = new RegExp(`(<loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>\\s*<lastmod>)[^<]*(</lastmod>)`);
  if (entry.test(sm)) { sm = sm.replace(entry, `$1${today}$2`); refreshed++; }
  else {
    sm = sm.replace("</urlset>", `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>`);
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
fs.writeFileSync(smPath, sm);
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
