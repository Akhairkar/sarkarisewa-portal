// Build-time helpers that read the old static site (repo root) so hubs only
// link to pages that really exist.
import fs from "node:fs";
import path from "node:path";

export const REPO_ROOT = path.resolve(process.cwd(), "..");

export const exists = (rel: string) => fs.existsSync(path.join(REPO_ROOT, rel.replace(/^\//, "")));

/** <title> of an old page, without the " | SarkariSewa India" suffix. */
export function pageTitle(rel: string): string {
  try {
    const html = fs.readFileSync(path.join(REPO_ROOT, rel.replace(/^\//, "")), "utf8");
    const t = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "";
    return t.replace(/\s*[|—-]\s*SarkariSewa.*$/i, "").replace(/&amp;/g, "&").trim();
  } catch {
    return "";
  }
}

type Service = {
  id: string; slug: string; category: string; customUrl?: string; dateAdded?: string;
  name: { en?: string; hi?: string }; shortDescription?: { en?: string; hi?: string };
};

export type ServiceLink = { href: string; title: string; text: string; category: string; date: string };

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
        title: s.name.hi || s.name.en || s.slug,
        text: s.shortDescription?.hi || s.shortDescription?.en || "",
        category: s.category,
        date: s.dateAdded ?? "",
      };
    })
    .filter((s) => exists(s.rel))
    .map(({ rel, ...s }) => s);
}
