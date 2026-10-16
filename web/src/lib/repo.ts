// Build-time helpers that read the old static site (repo root) so hubs only
// link to pages that really exist.
import fs from "node:fs";
import path from "node:path";

export const REPO_ROOT = path.resolve(process.cwd(), "..");

// A page exists if the old static file is still there or an Astro page now
// builds that URL (most old pages were replaced by web/src/pages/*.astro).
const PAGES = path.join(process.cwd(), "src/pages");
export const exists = (rel: string) => {
  const r = rel.replace(/^\//, "").replace(/[?#].*$/, "");
  if (fs.existsSync(path.join(REPO_ROOT, r))) return true;
  const base = r.replace(/\.html$/, "").replace(/\/$/, "/index");
  return fs.existsSync(path.join(PAGES, base + ".astro")) || fs.existsSync(path.join(PAGES, base, "index.astro"));
};

/** <title> of an old page, without the " | SarkariSewa India" suffix; for a
 * page rebuilt from a guide (src/guides/<dir>/<slug>.ts), the guide's title. */
export function pageTitle(rel: string): string {
  const slug = path.basename(rel, ".html");
  for (const dir of ["doc", "blog", "jobs", "exams"]) {
    const f = path.join(process.cwd(), "src/guides", dir, slug + ".ts");
    if (!fs.existsSync(f)) continue;
    const t = fs.readFileSync(f, "utf8").match(/^\s*"?title"?:\s*(["'`])((?:\\.|(?!\1).)*)\1/m)?.[2];
    if (t) return t.replace(/\\(.)/g, "$1").replace(/\s*[|—-]\s*SarkariSewa.*$/i, "").trim();
  }
  try {
    const html = fs.readFileSync(path.join(REPO_ROOT, rel.replace(/^\//, "")), "utf8");
    const t = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "";
    return /^Moved\b/.test(t) ? "" : t.replace(/\s*[|—-]\s*SarkariSewa.*$/i, "").replace(/&amp;/g, "&").trim();
  } catch {
    return "";
  }
}

type Service = {
  id: string; slug: string; category: string; customUrl?: string; dateAdded?: string;
  name: { en?: string; hi?: string }; shortDescription?: { en?: string; hi?: string };
};

export type ServiceLink = { href: string; title: { hi: string; en: string }; text: { hi: string; en: string }; category: string; date: string };

/** Entries of data/services.json whose page exists, as links. */
export function services(categories: string[]): ServiceLink[] {
  const all: Service[] = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "data/services.json"), "utf8"));
  return all
    .filter((s) => categories.includes(s.category))
    .map((s) => {
      const rel = (s.customUrl ?? `service/${s.slug}.html`).replace(/^\//, "");
      return {
        href: "/" + rel,
        rel,
        title: { hi: s.name.hi || s.name.en || s.slug, en: s.name.en || s.name.hi || s.slug },
        text: {
          hi: s.shortDescription?.hi || s.shortDescription?.en || "",
          en: s.shortDescription?.en || s.shortDescription?.hi || "",
        },
        category: s.category,
        date: s.dateAdded ?? "",
      };
    })
    .filter((s) => exists(s.rel))
    .map(({ rel, ...s }) => s);
}
