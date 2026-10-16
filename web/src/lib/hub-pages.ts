// Build-time helpers for the hub pages (blog, exams, category, services
// directory): find the new pages that really exist and read their guide data.
import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT } from "./repo";
import type { Card } from "../data/site";

export const PAGES_DIR = path.join(REPO_ROOT, "web/src/pages");

/** True when the new Astro site builds this URL ("/x/y.html" or "/x/"). */
export function newPage(href: string): boolean {
  const rel = href.replace(/^\//, "").replace(/[#?].*$/, "");
  const file = rel === "" || rel.endsWith("/") ? `${rel}index.astro` : rel.replace(/\.html$/, ".astro");
  return fs.existsSync(path.join(PAGES_DIR, file));
}

/** True when the URL is built by the new site or still served as an old static file. */
export function live(href: string): boolean {
  if (newPage(href)) return true;
  const rel = href.replace(/^\//, "").replace(/[#?].*$/, "");
  return fs.existsSync(path.join(REPO_ROOT, rel.endsWith("/") || rel === "" ? `${rel}index.html` : rel));
}

export const cleanTitle = (s: string) => s.replace(/\s*[|—]\s*SarkariSewa.*$/i, "").trim();
export const short = (s: string, n = 110) => (s.length > n ? s.slice(0, n - 2).trimEnd() + "…" : s);

type GuideLike = { title: string; description: string; modified?: string };

/**
 * Pages in web/src/pages/<dir>/ that render a guide object: for each page,
 * the guide it imports (matched by export name in the given guide modules).
 */
export function guidePages(dir: string, modules: Record<string, Record<string, unknown>>): { slug: string; href: string; g: GuideLike }[] {
  const byName = new Map<string, GuideLike>();
  for (const mod of Object.values(modules)) {
    for (const [name, v] of Object.entries(mod)) {
      if (v && typeof v === "object" && "title" in v && "description" in v) byName.set(name, v as GuideLike);
    }
  }
  const files = fs.readdirSync(path.join(PAGES_DIR, dir)).filter((f) => f.endsWith(".astro") && f !== "index.astro" && !f.startsWith("["));
  const out: { slug: string; href: string; g: GuideLike }[] = [];
  for (const f of files) {
    const src = fs.readFileSync(path.join(PAGES_DIR, dir, f), "utf8");
    const name = src.match(/import\s*\{\s*(\w+)\s*\}\s*from\s*["'][^"']*guides\//)?.[1];
    const g = name ? byName.get(name) : undefined;
    if (!g) continue;
    const slug = f.replace(/\.astro$/, "");
    out.push({ slug, href: `/${dir}/${slug}.html`, g });
  }
  return out;
}

export type Category = { slug: string; emoji: string; hi: string; en: string; text: string };

export const CATEGORIES: Category[] = [
  { slug: "identity-documents", emoji: "🆔", hi: "पहचान दस्तावेज़", en: "Identity Documents", text: "आधार, PAN, वोटर ID, पासपोर्ट, जन्म-जाति-निवास प्रमाण पत्र" },
  { slug: "government-schemes", emoji: "🏛️", hi: "सरकारी योजनाएं", en: "Government Schemes", text: "PM Kisan, आवास, उज्ज्वला, पेंशन, बीमा और लोन योजनाएं" },
  { slug: "finance-tax", emoji: "💰", hi: "वित्त और टैक्स", en: "Finance & Tax", text: "ITR, PAN-आधार लिंक, EPF, NPS, PPF, GST, Udyam" },
  { slug: "jobs-education", emoji: "🎓", hi: "नौकरी और शिक्षा", en: "Jobs & Education", text: "भर्तियां, छात्रवृत्ति, स्किल ट्रेनिंग, अप्रेंटिसशिप" },
  { slug: "utilities", emoji: "💡", hi: "उपयोगिताएं", en: "Utilities", text: "बिजली, पानी, गैस, प्रॉपर्टी टैक्स, FASTag, वाहन RC" },
  { slug: "health", emoji: "🏥", hi: "स्वास्थ्य", en: "Health", text: "आयुष्मान, ABHA, CGHS, ESIC, जन औषधि, ब्लड बैंक" },
  { slug: "mpbcdc-schemes", emoji: "🏦", hi: "MPBCDC योजनाएं", en: "MPBCDC Schemes", text: "महाराष्ट्र: SC/नव-बौद्ध स्वरोज़गार अनुदान और कर्ज" },
];

type Service = { slug: string; category: string; customUrl?: string; name: { en?: string; hi?: string }; shortDescription?: { en?: string; hi?: string } };

/** services.json entries of a category whose new page exists, as cards. */
export function categoryCards(slug: string, emoji = "📌"): Card[] {
  const all: Service[] = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "data/services.json"), "utf8"));
  const seen = new Set<string>();
  const out: Card[] = [];
  for (const s of all) {
    if (s.category !== slug) continue;
    const href = "/" + (s.customUrl ?? `service/${s.slug}.html`).replace(/^\//, "");
    if (seen.has(href) || !newPage(href)) continue;
    seen.add(href);
    out.push({ href, emoji, title: s.name.hi || s.name.en || s.slug, text: short(s.shortDescription?.hi || s.shortDescription?.en || "") });
  }
  return out;
}
