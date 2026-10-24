// Last dates of our job pages, merged into the deadline calendar
// (/tools/deadline-calendar.html) by /assets/js/deadline-calendar.js. Built
// with the site, so new jobs appear and closed ones expire on their own.
import { jobDeadlines } from "../lib/open-jobs";

export function GET() {
  return new Response(JSON.stringify(jobDeadlines()), { headers: { "Content-Type": "application/json" } });
}
