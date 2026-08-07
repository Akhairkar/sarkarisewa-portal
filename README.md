# SarkariSewaIndia (सरकारीसेवा इंडिया)

Bilingual (Hindi/English) guide site for Indian government services —
how to apply, eligibility, documents, fees, and official links for 93
services across 6 categories, plus job alerts, an exam calendar,
state-wise schemes, a blog, and a Common Service Centre (CSC)
directory.

**Live:** https://sarkarisewaindia.com
**Repo:** github.com/Akhairkar/sarkarisewa-portal

For the full current build inventory (every page, every data file,
every Supabase table, what's built vs not), see **`STATUS.md`**.
For the rules to follow when working on this codebase (AI session or
human), see **`HANDOFF.md`**.

## Stack

- **Frontend:** static HTML + vanilla JS (no framework, no build
  step). Bilingual strings live in `data/lang.json` (site chrome) or
  inline as `{en, hi}` objects in each content JSON file.
- **Content:** a mix of static JSON files (`data/*.json` — services,
  categories, blog posts, states) and Supabase tables (comments,
  subscribers, job alerts, exam calendar, CSC listings, analytics,
  admin-added services/blog posts). See `STATUS.md` for which feature
  uses which.
- **Backend:** Supabase (Postgres + Auth + RLS). Project URL/anon key
  are in `assets/js/supabase-client.js` (safe to be public — RLS
  policies, in `supabase/*.sql`, are what actually protect the data).
- **Static page generation:** `tools/generate-*-pages.py` scripts bake
  real, crawlable HTML for services/categories/jobs/blog posts (see
  `STATUS.md` → "Why static generation exists"), run automatically by
  `.github/workflows/regenerate-content.yml`.
- **Hosting:** GitHub Pages, custom domain via `CNAME`.

## Running locally

There's no build step — open any `.html` file directly, or serve the
folder with any static file server (`python3 -m http.server`, VS
Code's Live Server, etc.) so relative fetches work correctly.

The generator scripts (`tools/generate-*-pages.py`, `generate-sitemap.py`)
need `python3` and, for job/blog pages, live internet access to
Supabase. `audit-site.py` (QA checks) additionally needs
`pip install beautifulsoup4 lxml`.

## Deployment

Push to `main` — GitHub Pages serves directly from the repo root.
`.github/workflows/regenerate-content.yml` also runs daily (and
on-demand) to regenerate job/blog/category/service pages, the
sitemap, and submit to IndexNow, auto-committing anything that
changed.
