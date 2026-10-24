// Job pages added by hand, one JSON file per job in jobs-daily/ at the repo
// root (see jobs-daily/README.md). Meant to be filled from the official
// notification with a free AI chat and pasted into GitHub, so every file is
// checked here: a file that is not valid JSON or misses a required field is
// skipped with a warning in the build log, and the rest of the site builds
// as usual. Each good file becomes /jobs/<slug>.html and appears on the jobs
// hub and the qualification finder's "open now" list.
import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT } from "./repo";
import { JOBS, type Job } from "../data/jobs";
import type { DocGuide } from "../guides/doc/types";

type Row = [string, string];
export type DailyJob = {
  slug: string;
  sector: Job["sector"];
  title: string;
  description: string;
  h1: string;
  lastDate: string; // YYYY-MM-DD
  lastNote?: string;
  organisation: string;
  totalPosts: string;
  applyLink: string;
  officialSite: string;
  dates: Row[];
  posts: string[][]; // [post, number, pay]
  eligibility: string[];
  age: string;
  fee: Row[];
  selection: string[];
  howToApply: string[];
  faq: { q: string; a: string }[];
  sources: string[];
  verified: string; // e.g. "19 अक्टूबर 2026"
  published?: string;
  state?: string; // STATES slug, for state govt jobs
};

const DIR = path.join(REPO_ROOT, "jobs-daily");
const SECTORS: Job["sector"][] = ["SSC", "UPSC", "Banking", "Railway", "Defence", "Scientific", "State Govt", "Health", "Post", "PSU", "Central Govt"];
const esc = (s: unknown) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const isRows = (v: unknown, n: number) => Array.isArray(v) && v.every((r) => Array.isArray(r) && r.length >= n && r.every((x) => typeof x === "string"));
const isStrs = (v: unknown) => Array.isArray(v) && v.length > 0 && v.every((x) => typeof x === "string");

function check(j: any, file: string): string | null {
  if (!j || typeof j !== "object") return "not an object";
  if (!/^[a-z0-9-]{8,90}$/.test(j.slug ?? "")) return "slug: small letters, numbers and - only";
  if (`${j.slug}.json` !== file) return `file name must be ${j.slug}.json`;
  if (!SECTORS.includes(j.sector)) return `sector must be one of ${SECTORS.join(", ")}`;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(j.lastDate ?? "") || isNaN(Date.parse(j.lastDate))) return "lastDate must be YYYY-MM-DD";
  for (const k of ["title", "description", "h1", "organisation", "totalPosts", "age", "verified"]) if (typeof j[k] !== "string" || !j[k].trim()) return `${k} missing`;
  for (const k of ["applyLink", "officialSite"]) if (!/^https:\/\/[^\s"<>]+$/.test(j[k] ?? "")) return `${k} must be an https link`;
  if (!isRows(j.dates, 2) || !isRows(j.fee, 2) || !isRows(j.posts, 2)) return "dates / fee / posts must be lists of text pairs";
  for (const k of ["eligibility", "selection", "howToApply", "sources"]) if (!isStrs(j[k])) return `${k} must be a list of text`;
  if (!Array.isArray(j.faq) || !j.faq.every((f: any) => typeof f?.q === "string" && typeof f?.a === "string")) return "faq must be [{q, a}]";
  if (j.state !== undefined && !/^[a-z-]{3,40}$/.test(j.state)) return "state: small letters and - only, e.g. uttar-pradesh";
  if (JOBS.some((x) => x.slug === j.slug) || fs.existsSync(path.join(REPO_ROOT, "web/src/pages/jobs", `${j.slug}.astro`))) return "a page with this slug already exists";
  return null;
}

function load(): DailyJob[] {
  if (!fs.existsSync(DIR)) return [];
  const out: DailyJob[] = [];
  for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith(".json") && !f.startsWith("_")).sort()) {
    let j: any;
    try { j = JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8")); } catch (e) { console.warn(`[jobs-daily] SKIPPED ${file}: not valid JSON (${(e as Error).message})`); continue; }
    const err = check(j, file);
    if (err) { console.warn(`[jobs-daily] SKIPPED ${file}: ${err}`); continue; }
    out.push(j);
  }
  return out;
}

export const DAILY_JOBS = load();
export const ALL_JOBS: Job[] = [...JOBS, ...DAILY_JOBS.map((d) => ({ slug: d.slug, sector: d.sector, last: d.lastDate, lastNote: d.lastNote, state: d.state }))];

const fmt = (d: string) => new Date(d + "T00:00:00").toLocaleDateString("hi-IN", { day: "numeric", month: "long", year: "numeric" });
const link = (href: string, text: string) => `<a href="${esc(href)}" target="_blank" rel="noopener nofollow">${esc(text)}</a>`;
const host = (u: string) => u.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

/** The DocGuide page for a daily job. All text from the file is escaped. */
export function dailyGuide(d: DailyJob): DocGuide {
  const today = new Date().toISOString().slice(0, 10);
  const open = d.lastDate >= today;
  return {
    crumbs: [{ label: "होम", href: "/" }, { label: "सरकारी नौकरी", href: "/jobs/index.html" }, { label: d.title.split(/[:|]/)[0].trim() }],
    docHi: d.title.split(/[:|]/)[0].trim(),
    title: d.title,
    description: d.description,
    published: d.published ?? today,
    modified: today,
    verified: d.verified,
    h1: d.h1,
    lead: `<strong>स्थिति: ${open ? "आवेदन चालू" : "आवेदन बंद"}।</strong> ${esc(d.organisation)} ने ${esc(d.totalPosts)} पदों की भर्ती निकाली है। ऑनलाइन आवेदन की आखिरी तारीख <strong>${fmt(d.lastDate)}</strong>${d.lastNote ? ` (${esc(d.lastNote)})` : ""} है। आवेदन सिर्फ आधिकारिक वेबसाइट ${link(d.applyLink, host(d.applyLink))} पर करें।`,
    facts: [
      ["संस्था", esc(d.organisation)],
      ["कुल पद", esc(d.totalPosts)],
      ["आखिरी तारीख", fmt(d.lastDate)],
      ["आवेदन", link(d.applyLink, host(d.applyLink))],
    ],
    notice: open ? undefined : "इस भर्ती की आखिरी तारीख निकल चुकी है। अगली भर्ती की तैयारी के लिए पात्रता और चयन प्रक्रिया देखें।",
    sections: [
      { id: "tarikh", title: "महत्वपूर्ण तारीखें", table: { head: ["चरण", "तारीख"], rows: d.dates.map((r) => [esc(r[0]), esc(r[1])]) } },
      { id: "pad", title: "पद और वेतन", table: { head: ["पद", "संख्या", "वेतन"], rows: d.posts.map((r) => [esc(r[0]), esc(r[1]), esc(r[2] ?? "नोटिफिकेशन में देखें")]) } },
      { id: "patrata", title: "योग्यता और उम्र", list: [...d.eligibility.map(esc), `<strong>उम्र:</strong> ${esc(d.age)}`] },
      { id: "fees", title: "आवेदन फीस", table: { head: ["वर्ग", "फीस"], rows: d.fee.map((r) => [esc(r[0]), esc(r[1])]) } },
      { id: "chayan", title: "चयन प्रक्रिया", steps: d.selection.map(esc) },
      { id: "apply", title: "ऑनलाइन आवेदन कैसे करें", steps: d.howToApply.map(esc), callout: { kind: "warn", html: "फीस और फॉर्म सिर्फ आधिकारिक वेबसाइट पर भरें। आवेदन से पहले पूरा नोटिफिकेशन ज़रूर पढ़ें; यह पेज उसी का सार है।" } },
      { id: "srot", title: "जानकारी का स्रोत", list: d.sources.map(esc) },
    ],
    official: [
      { href: d.applyLink, title: "ऑनलाइन आवेदन", note: host(d.applyLink) },
      ...(d.officialSite !== d.applyLink ? [{ href: d.officialSite, title: `${d.organisation} की आधिकारिक वेबसाइट`, note: host(d.officialSite) }] : []),
    ],
    faq: d.faq,
    related: [
      { href: "/jobs/qualification-wise-govt-jobs.html", emoji: "🎓", title: "योग्यता से नौकरी खोजें", text: "10वीं, 12वीं, ग्रेजुएट" },
      { href: "/exam-age-calculator.html", emoji: "🎂", title: "Exam Age Calculator", text: "कट-ऑफ तारीख पर उम्र" },
      { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    ],
    aside: [
      { href: d.applyLink, label: "📝 आधिकारिक वेबसाइट पर आवेदन" },
      { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
    ],
  };
}
