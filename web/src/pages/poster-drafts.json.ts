// Open vacancies whose last date is in the next three weeks, for the
// "draft from jobs" button in admin/posters.html. Built with the site, so it
// follows the same job pages and last-date parsing as the Telegram post.
import fs from "node:fs";
import path from "node:path";
import { REPO_ROOT } from "../lib/repo";
import { jobLastDate, isClosedPage } from "../../scripts/job-dates.mjs";

export function GET() {
  const dir = path.join(REPO_ROOT, "jobs");
  const today = new Date(); today.setUTCHours(0, 0, 0, 0);
  const limit = new Date(today.getTime() + 21 * 864e5);
  const seen = new Set<string>();
  const out: { title: string; last_date: string; url: string }[] = [];
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".html") || f === "index.html" || f === "expired.html") continue;
    const html = fs.readFileSync(path.join(dir, f), "utf8");
    if (isClosedPage(html)) continue;
    const canon = html.match(/rel="canonical" href="https:\/\/sarkarisewaindia\.com(\/[^"]+)"/)?.[1] ?? `/jobs/${f}`;
    if (seen.has(canon)) continue;
    const d = jobLastDate(html);
    if (!d || d < today || d > limit) continue;
    seen.add(canon);
    const title = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? html.match(/<title>([^<|]*)/)?.[1] ?? f).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    out.push({ title, last_date: d.toISOString().slice(0, 10), url: canon });
  }
  out.sort((a, b) => a.last_date.localeCompare(b.last_date));
  return new Response(JSON.stringify(out), { headers: { "Content-Type": "application/json" } });
}
