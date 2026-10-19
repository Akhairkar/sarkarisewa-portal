// Counts of the site's own content, built with the site, for the admin
// overview (admin/dashboard.html). Content lives in this repo, not in the
// old database tables.
import fs from "node:fs";
import path from "node:path";
import { ALL_JOBS } from "../lib/daily-jobs";
import { LETTERS } from "../letters";
import { STATUS_ITEMS } from "../data/status-hub";
import { FINDER_JOBS } from "../data/job-finder";

const files = (dir: string) => { try { return fs.readdirSync(path.join(process.cwd(), dir)).filter((f) => /\.(ts|astro)$/.test(f)).length; } catch { return 0; } };

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const guides = ["doc", "senior", "labour", "affidavit", "challan", "digilocker", "gst", "rent", "solar", "exams"].reduce((n, d) => n + files(`src/guides/${d}`), 0);
  const body = {
    built: new Date().toISOString(),
    jobs_total: ALL_JOBS.length,
    jobs_open: ALL_JOBS.filter((j) => j.status !== "expected" && j.last >= today).length,
    letters: LETTERS.length,
    guides,
    blog: files("src/guides/blog"),
    status_items: STATUS_ITEMS.length,
    finder_exams: FINDER_JOBS.length,
  };
  return new Response(JSON.stringify(body), { headers: { "Content-Type": "application/json" } });
}
