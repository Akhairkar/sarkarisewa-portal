// Job pages on our site whose application is still open (src/data/jobs.ts +
// jobs-daily/), newest first by the guide's `published` date. Used by the
// homepage grid (NewJobs) and the small strip on guide pages (JobStrip).
// Built with the site (every 2 hours), so finished jobs drop off on their own.
import type { DocGuide } from "../guides/doc/types";
import { ALL_JOBS, DAILY_JOBS, verifiedIso } from "./daily-jobs";

const GUIDES = Object.fromEntries(
  Object.entries(import.meta.glob<Record<string, DocGuide>>("../guides/jobs/*.ts", { eager: true }))
    .map(([f, m]) => [f.split("/").pop()!.replace(/\.ts$/, ""), Object.values(m).find((v) => v && typeof v === "object" && "title" in v) as DocGuide]),
);
const DAILY = Object.fromEntries(DAILY_JOBS.map((d) => [d.slug, d]));
const DAY = 864e5;
const now = new Date();
const indiaParts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
const indiaPart = (type: string) => indiaParts.find((p) => p.type === type)?.value ?? "";
const today = `${indiaPart("year")}-${indiaPart("month")}-${indiaPart("day")}`;
const timeParts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now);
const nowMinutes = Number(timeParts.find((p) => p.type === "hour")?.value ?? "0") * 60 + Number(timeParts.find((p) => p.type === "minute")?.value ?? "0");
const deadlineMinutes = (note?: string) => {
  if (!note) return undefined;
  const m = note.match(/(सुबह|दोपहर|शाम|रात)\s*(\d{1,2})(?::(\d{2}))?\s*बजे/);
  if (!m) return undefined;
  let hour = Number(m[2]);
  if ((m[1] === "शाम" || m[1] === "रात") && hour < 12) hour += 12;
  if (m[1] === "सुबह" && hour === 12) hour = 0;
  return hour * 60 + Number(m[3] ?? "0");
};
const isOpen = (j: (typeof ALL_JOBS)[number]) => {
  if (j.status === "expected" || j.last < today) return false;
  if (j.last > today) return true;
  const deadline = deadlineMinutes(j.lastNote);
  return deadline === undefined || nowMinutes < deadline;
};
const days = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);

export type OpenJob = { slug: string; href: string; name: string; sub: string; last: string; published: string; isNew: boolean; left: number; state?: string };

export const OPEN_JOBS: OpenJob[] = ALL_JOBS
  .filter((j) => isOpen(j) && (GUIDES[j.slug] || DAILY[j.slug]))
  .map((j) => {
    const title = GUIDES[j.slug]?.title ?? DAILY[j.slug]!.title;
    const published = GUIDES[j.slug]?.published ?? (DAILY[j.slug] ? DAILY[j.slug]!.published ?? verifiedIso(DAILY[j.slug]!.verified) : undefined) ?? today;
    const [name, ...rest] = title.split(/:| — | \| /);
    return { slug: j.slug, href: `/jobs/${j.slug}.html`, name: name.trim(), sub: rest.join(" ").trim(), last: j.last, published, isNew: days(published, today) <= 7, left: days(today, j.last), state: j.state };
  })
  .sort((a, b) => b.published.localeCompare(a.published) || a.last.localeCompare(b.last));

/** Up to `n` open jobs for a page: that state's jobs first, then all-India
 * ones; other states' jobs are left out. */
export function jobsFor(state?: string, n = 4, exclude?: string): OpenJob[] {
  const list = OPEN_JOBS.filter((j) => j.slug !== exclude);
  const mine = state ? list.filter((j) => j.state === state) : [];
  const india = list.filter((j) => !j.state);
  return [...mine, ...india].slice(0, n);
}

/** Last dates of our job pages for the deadline calendar
 * (/deadlines-jobs.json): open ones plus those closed in the last 14 days
 * (shown there as expired). Expected (unconfirmed) dates are left out. */
// State filter values of the calendar page (deadline-calendar.js STATES).
const CAL_STATES = ["maharashtra", "madhya-pradesh", "rajasthan", "uttar-pradesh", "bihar", "gujarat", "karnataka", "delhi"];
export function jobDeadlines() {
  const since = new Date(Date.now() - 14 * DAY).toISOString().slice(0, 10);
  return ALL_JOBS
    .filter((j) => j.status !== "expected" && j.last >= since && (GUIDES[j.slug] || DAILY[j.slug]))
    .map((j) => {
      const g = GUIDES[j.slug], d = DAILY[j.slug];
      const title = (g?.title ?? d!.title).split(/:| — | \| /)[0].trim();
      return { slug: `job-${j.slug}`, href: `/jobs/${j.slug}.html`, title_hi: `${title}: आवेदन की आखिरी तारीख`, title_en: `${title}: last date to apply`,
        description_hi: j.lastNote ?? g?.description ?? d!.description, description_en: "", category: "jobs", deadline_type: "application",
        state: !j.state ? "all-india" : CAL_STATES.includes(j.state) ? j.state : "other", deadline_date: j.last, official_url: d?.applyLink ?? g?.official?.[0]?.href ?? "" };
    })
    .sort((a, b) => a.deadline_date.localeCompare(b.deadline_date));
}
