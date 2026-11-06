// schema.org JobPosting data for an open job page (Google job results).
// Only for a vacancy that is open today (Indian time), is not "expected"
// (dates unconfirmed), is not on the hold list (scripts/job-hold.json) and
// has a known employer. Anything else returns null: no data is better than
// wrong data. assemble.mjs also strips this data once a page closes.
import fs from "node:fs";
import path from "node:path";
import { ALL_JOBS, DAILY_JOBS } from "./daily-jobs";
import { JOB_ORGS, NOT_A_JOB } from "../data/job-orgs";
import { STATES, SITE } from "../data/site";
import type { DocGuide } from "../guides/doc/types";

let HOLD: Record<string, string> = {};
try { HOLD = JSON.parse(fs.readFileSync(path.join(process.cwd(), "scripts", "job-hold.json"), "utf8")); } catch { /* no hold list */ }

const istToday = () => new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10);

/** Closing time in IST from the last-date note ("शाम 5 बजे तक", "रात 11:59 तक"); end of day if none. */
function closingTime(note?: string): string {
  const m = note?.match(/(शाम|दोपहर|रात)\s*(\d{1,2})(?::(\d{2}))?/);
  if (!m) return "23:59:00";
  let h = +m[2];
  // "शाम 5" = 17:00, "दोपहर 3" = 15:00, "रात 11:59" = 23:59 (रात 12 is left alone)
  if ((m[1] === "शाम" || m[1] === "दोपहर" || (m[1] === "रात" && h >= 6)) && h < 12) h += 12;
  if (h > 23) return "23:59:00";
  return `${String(h).padStart(2, "0")}:${m[3] ?? "00"}:00`;
}

/** Plain HTML of the guide (Google wants the full description). */
function descriptionHtml(g: DocGuide): string {
  const out: string[] = [`<p>${g.lead}</p>`];
  for (const s of g.sections) {
    out.push(`<h2>${s.title}</h2>`);
    if (s.intro) out.push(`<p>${s.intro}</p>`);
    if (s.table) out.push(`<ul>${s.table.rows.map((r) => `<li>${r.join(" - ")}</li>`).join("")}</ul>`);
    for (const l of [s.steps, s.list]) if (l?.length) out.push(`<ul>${l.map((x) => `<li>${x}</li>`).join("")}</ul>`);
    if (s.html) out.push(s.html);
  }
  return out.join("");
}

export function jobPostingFor(slug: string, g: DocGuide): Record<string, unknown> | null {
  if (NOT_A_JOB.has(slug) || HOLD[`jobs/${slug}.html`]) return null;
  const job = ALL_JOBS.find((j) => j.slug === slug);
  if (!job || job.status === "expected" || job.last < istToday()) return null;
  const daily = DAILY_JOBS.find((d) => d.slug === slug);
  const entry = JOB_ORGS[slug];
  const org = daily?.organisation ?? entry?.org;
  if (!org) return null;

  const title = g.title.split(/[:|]/)[0].trim();
  const region = job.state ? STATES.find((s) => s.slug === job.state)?.name : undefined;
  const type = /अप्रेंटिस|apprentice/i.test(title) ? "OTHER" : entry?.type ?? "FULL_TIME";
  const posted = g.published <= job.last ? g.published : job.last;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description: descriptionHtml(g),
    datePosted: posted,
    validThrough: `${job.last}T${closingTime(job.lastNote)}+05:30`,
    employmentType: type,
    hiringOrganization: { "@type": "Organization", name: org },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressCountry: "IN", ...(region && { addressRegion: region }) } },
    directApply: false,
    url: `${SITE.url}/jobs/${slug}.html`,
  };
}
