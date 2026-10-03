// Tell IndexNow search engines (Bing, Yandex, Seznam, Naver…) which pages
// changed in this deploy. No account is needed: the key file
// /990cec6ab75587968bc7a43b4721e52c.txt on the site proves ownership.
//
// Usage: node scripts/indexnow.mjs <changed-file> …
//   Arguments are repo-relative paths changed by the push. Every Astro page is
//   submitted when anything under web/ changed (a shared component may have
//   changed all of them); changed old .html pages are submitted as they are.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "sarkarisewaindia.com";
const KEY = "990cec6ab75587968bc7a43b4721e52c";
const WEB = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = path.join(WEB, "_site");

const changed = process.argv.slice(2);
const urls = new Set();
const toUrl = (rel) => `https://${HOST}/${rel.replace(/(^|\/)index\.html$/, "$1")}`;

function listHtml(dir, base = dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...listHtml(p, base));
    else if (ent.name.endsWith(".html")) out.push(path.relative(base, p).split(path.sep).join("/"));
  }
  return out;
}
const indexable = (rel) => {
  const file = path.join(SITE, rel);
  if (!fs.existsSync(file)) return false;
  const head = fs.readFileSync(file, "utf8").slice(0, 6000);
  return !/name="robots" content="noindex/i.test(head) && !rel.startsWith("admin/") && !rel.startsWith("private/");
};

if (changed.some((f) => f.startsWith("web/"))) {
  for (const rel of listHtml(path.join(WEB, "dist"))) if (indexable(rel)) urls.add(toUrl(rel));
}
for (const f of changed) {
  if (f.endsWith(".html") && !f.startsWith("web/") && indexable(f)) urls.add(toUrl(f));
}

const list = [...urls].slice(0, 10000);
if (!list.length) { console.log("IndexNow: nothing to submit"); process.exit(0); }
if (process.env.INDEXNOW_DRY) { console.log(list.join("\n")); process.exit(0); }

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: list }),
});
console.log(`IndexNow: submitted ${list.length} URL(s), HTTP ${res.status}`);
// 200/202 = accepted. Never fail the deploy over this.
