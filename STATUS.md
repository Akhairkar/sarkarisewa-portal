## 2026-09-29 — Session 7: Updates section cleanup complete
- Fixed incorrect `latest-updates.html` hreflang and Open Graph URL metadata that pointed to `about.html`.
- Updated `automation/update_pipeline.py` so generated update articles use the source summary/context instead of generic claims about Aadhaar, DBT, documents, fees, and applications.
- Removed the template's generic application-oriented FAQ content from newly generated updates and replaced it with source-grounded reading/verification guidance.
- Added `scripts/session7-updates-audit.py` as a read-only checker for canonical URLs, title length, NewsArticle schema, source URL presence, and generic FAQ schema.
- Existing update articles were not blindly rewritten because their source-specific facts and dates require individual verification.

## 2026-09-29 — Session 6: Jan Aushadhi thin-page indexing guard complete
- Updated `scripts/upgrade_all_csc_and_janaushadhi_districts.py` with `MIN_INDEXABLE_JA_STORES=5`.
- District pages are now generated as `noindex,follow` when their own ItemList reports fewer than 5 stores; state landing pages remain indexable.
- Existing nested state `index.html` URLs remain consolidated as `noindex,follow` duplicates pointing to the primary state HTML URL.
- Tightened generated Jan Aushadhi meta descriptions and removed the unsupported generic "90% discount" claim from the template.
- Corrected generated FAQ wording to align with current PMBJP official information on 50%-80% lower prices and batch testing.
- Added `scripts/session6-jan-aushadhi-thin-page-audit.py` as a read-only audit helper.
- This session intentionally uses a generator-level guard rather than blindly noindexing existing district pages without first measuring their store counts.


## 2026-09-29 — Session 5: CSC thin/duplicate URL cleanup complete
- Consolidated the duplicate state-level CSC <state>/index.html URLs: all 36 are noindex,follow with canonical pointing to the primary /service/csc-locator/<state>.html page.
- Consolidated normalized duplicate district URL variants and kept the primary district URL as the canonical target.
- Repository tree verification found no numeric-only CSC district filenames.
- generate_csc_pages.py normalizes district-name variants before generation, preventing duplicate district filenames from recurring.
- Added MIN_INDEXABLE_CENTERS=5 to the CSC district generator: district pages with fewer than 5 listed centers are generated with noindex,follow to reduce near-empty indexable pages.
- Added scripts/session5-csc-thin-page-fix.py as a read-only audit helper to identify district pages below the 5-center threshold.
## 2026-09-29 — Session 4 canonical/link repair in progress
- Session 1 code fixes are already committed: analytics RPCs now enforce `public.is_admin()` and the migration guide documents repeat/idempotent execution. Live Supabase Dashboard verification remains manual.
- Session 4: added `scripts/session4-canonical-link-fix.py` for idempotent broken-canonical and legacy internal-link repair.
- Session 4: `generate-sitemap.py` now emits real static state URLs and excludes local noindex/non-self-canonical pages.
- Session 4 is NOT marked complete yet: the repair script still needs to be executed and its audit output verified.

_Rewritten from a full code inventory, not carried over from older notes._
_Last verified: 2 Aug 2026._

**This file is the single source of truth for "what's built."** If any
other doc, or your own memory of a past session, disagrees with what's
actually in the repo, trust the repo. This file was rewritten
specifically because `PROJECT-ROADMAP.md`/old `STATUS.md`/`CHANGELOG.md`
had drifted badly out of sync with the live code (e.g. a full
state-wise scheme directory and an Exam Calendar module both existed
in code with zero mention in any doc). Keep this file honest going
forward — update it in the same session you change the code.

---

## 1. Public pages — full inventory

| Area | Path | What it is |
|---|---|---|
| Home | `index.html` | Landing page — category grid, trust stats, latest updates, state spotlight, blog preview |
| Services | `service/<slug>.html` × 93 | One static page per service (see § 4 — statically generated) |
| Services (shell) | `service/service.html` | Dynamic fallback template for Supabase-added (`source: "db"`) services, loaded via `?id=` |
| Categories | `category/<slug>.html` × 6 | One static page per category (identity-documents, government-schemes, finance-tax, jobs-education, utilities, health) |
| Categories (shell) | `category/category.html` | Legacy dynamic shell, superseded by the static pages above |
| Blog | `blog/<slug>.html` × 12 | One static page per post |
| Blog (shell) | `blog/index.html`, `blog/post.html` | Listing page + dynamic fallback template |
| Job Alerts | `jobs/<slug>.html` × 9 | One static detail page per vacancy — full info, JobPosting schema |
| Job Alerts (shell) | `jobs/index.html`, `jobs/post.html` | Listing page + dynamic fallback template |
| Exam Calendar (listing) | `exams/index.html` | Live exam list — Upcoming/Open/Closed computed client-side from dates, reads Supabase `exam_calendar` table. Each card links to its detail page, not straight out to the government site anymore. |
| Exam Calendar (detail) | `exams/<slug>.html` — one per published exam | Static, generated by `tools/generate-exam-pages.py` — description, eligibility, exam pattern, syllabus, selection process, application fee, how-to-apply, internal links to related services + related exams, Event + BreadcrumbList JSON-LD |
| Exam Calendar (fallback) | `exams/exam.html?slug=...` | Dynamic shell (rendered by `assets/js/exam-post.js`) — works immediately for any exam published since the last static-generation run, same pattern as `jobs/post.html` |
| States | `states/index.html`, `states/state.html` | Hub + per-state page — 20 states, 102 state-specific service entries, `data/states.json` |
| CSC Directory | `csc/index.html`, `csc/add.html`, `csc/claim.html`, `csc/profile.html` | Browse centres, submit a new one, claim an existing listing, centre owner profile |
| Search | `search.html` | Site-wide search |
| Find Services | `find-services.html` | Eligibility-wizard style discovery (persona + category filters) |
| Support | `support/index.html`, `support/helpline-directory.html`, `support/rti-guide.html`, `support/state-wise-services.html` | Help hub, helpline numbers, RTI how-to, state-wise services entry point |
| Sitemap (human) | `sitemap.html` | Browsable site map page (separate from `sitemap.xml`) |
| Legal | `about.html`, `contact.html`, `disclaimer.html`, `faq.html`, `privacy-policy.html`, `terms.html` | Standard pages |
| Error | `404.html` | GitHub Pages auto-serves this for unmatched URLs |
| Admin | `admin/login.html`, `admin/dashboard.html` | See § 3 |

**Static-generation shells you'll also see:** `service/service.html`,
`category/category.html`, `blog/post.html`, `jobs/post.html` are all
still-live dynamic templates — not dead code. They're the fallback
route for content that has no static page yet (Supabase-added
services, or if a static page generator hasn't run for new content).

## 2. Content data — where it actually lives

| Content type | Source | Count |
|---|---|---|
| Services | `data/services.json` | 93 (static pages) |
| Services (admin-added) | Supabase `services` table | variable — merged in by `assets/js/services-data.js`'s `fetchAllServices()`, JSON wins on slug collision |
| Categories | `data/categories.json` | 6 |
| Blog posts | `data/blog-posts.json` | 12 (static pages) |
| Blog posts (admin-added) | Supabase `blog_posts` table | variable — written directly from the admin dashboard's rich-text editor |
| States & state-services | `data/states.json` | 20 states, 102 service entries |
| Job alerts | Supabase `job_alerts` table | variable — no static JSON equivalent, always DB-driven |
| Exam calendar entries | Supabase `exam_calendar` table | variable |
| CSC centres | Supabase `csc_centres` + claims table | variable |
| Comments | Supabase `comments` table | per-service, moderated |
| Subscribers | Supabase `subscribers` table | email/WhatsApp opt-ins |
| Site chrome strings | `data/lang.json` | 351 keys, `{en, hi}` each |

**Orphan data files (not read by any code — safe to delete):**
`data/services.module2-sample.json`, `data/services.module3-identity-documents.json`
— early build-era sample files, fully superseded by `data/services.json`.

## 3. Admin dashboard (`/admin/dashboard.html`) — 9 tabs, all live

1. **Overview** — read-only stats (services/categories/blog counts)
2. **Comments** — moderate service-page comments (hide/show/delete)
3. **Subscribers** — view email/WhatsApp opt-in list
4. **CSC Listings** — approve/reject new centre submissions + ownership claims
5. **Blog** — write/edit/publish posts (rich-text editor) + Bulk Import (paste a JSON array)
6. **Job Alerts** — add/edit/publish vacancies + Bulk Import + per-row Preview (works for drafts)
7. **Exam Calendar** — add/edit/publish exams + Bulk Import
8. **Services** — add/edit services directly (bypasses needing a code session for new content) + Bulk Import with duplicate-slug checking against both `data/services.json` and existing DB rows
9. **Analytics** — visitor stats (total/today/online, 30-day trend, top pages, traffic sources, device types)

Auth: real Supabase Auth (not a client-side demo password).
RLS: `supabase/admin-policies.sql`.

**One real orphan file from an old analytics bug:**
`assets/js/analytics.js` exists in the repo but is not linked from any
HTML page — it was an earlier, wrong-column-name tracking script,
superseded by `assets/js/analytics-track.js` (the one actually loaded
on every page via `main.js`). Safe to delete; deleting it changes
nothing live.

## 4. Static page generation — why it exists

The site's dynamic pages render content via JavaScript after load. A
crawler that doesn't fully execute JS sees near-empty HTML — this was
the root cause of a large Ahrefs SEO audit failure (orphan pages, no
outgoing links, missing H1s, thin content, etc). Fix: generate real,
pre-rendered static HTML for the high-traffic content types.

| Generator | Output | Needs live internet? |
|---|---|---|
| `tools/generate-service-pages.py` | `service/<slug>.html` × 93 | No (reads local JSON) |
| `tools/generate-category-pages.py` | `category/<slug>.html` × 6 | No (reads local JSON) |
| `tools/generate-blog-pages.py` | `blog/<slug>.html` × 12 | No (reads local JSON) |
| `tools/generate-job-pages.py` | `jobs/<slug>.html` × 9 | **Yes** — fetches published rows from Supabase `job_alerts` |
| `tools/generate-exam-pages.py` | `exams/<slug>.html`, one per published exam | **Yes** — fetches published rows from Supabase `exam_calendar` |
| `tools/inline-header-footer.py` | bakes header/footer nav into all page shells | No |
| `generate-sitemap.py` (root) | `sitemap.xml` | Yes — also pulls DB-added service/job slugs |
| `tools/submit-indexnow.py` | pings Bing/Yandex with changed URLs | Yes |
| `audit-site.py` (root) | QA report only, writes nothing | No — but needs `pip install beautifulsoup4 lxml` |

**`.github/workflows/regenerate-content.yml`** runs all of the above
in order (jobs → blog → category → service → sitemap → IndexNow →
commit/push), daily at 7 AM IST + manual trigger. This exists because
the primary dev laptop can't run Python locally — GitHub's runners
have real internet access, so job-page generation (which needs live
Supabase data) only fully works there, not in a local/sandboxed
session without network access.

## 5. Supabase — all schema files

Run once each, in this rough dependency order, in the Supabase SQL Editor:

| File | Creates |
|---|---|
| `supabase/schema.sql` | `comments`, `subscribers` |
| `supabase/blog-schema.sql` | `blog_posts` |
| `supabase/job-alerts-schema.sql` | `job_alerts` |
| `supabase/job-alerts-detail-migration.sql` | adds detail columns to `job_alerts` (description, vacancy_breakdown, etc.) |
| `supabase/exam-calendar-schema.sql` | `exam_calendar` |
| `supabase/exam-calendar-detail-migration.sql` | adds detail columns to `exam_calendar` (description, eligibility, exam_pattern, syllabus, selection_process, how_to_apply, application_fee, age_limit, notification_pdf_link) — run this before expecting exam detail pages to have real content |
| `supabase/services-schema.sql` | `services` (admin-added services) |
| `supabase/csc-schema.sql` | `csc_centres` + claims table — **run before** `csc-services-schema.sql` |
| `supabase/csc-services-schema.sql` | adds `services_offered`/`service_mode` columns + admin RLS to the CSC tables |
| `supabase/analytics-schema.sql` | `page_views`, `active_sessions` + 5 RPC functions the Analytics tab calls — column names must match `assets/js/analytics-track.js` exactly (`page_path`, `referrer_host` — a past bug came from a schema that guessed different names) |
| `supabase/admin-policies.sql` | RLS policies enabling the authenticated admin dashboard to read/write everything above |

If any admin tab shows "could not load" or a Postgres "column ... does
not exist" error, the first thing to check is whether the matching
schema file above has actually been run.

## 6. Known orphan/dead files (safe to delete, verified unreferenced)

- `header.html` (repo root) — identical duplicate of `partials/header.html`, not linked from anywhere
- `assets/js/analytics.js` — see § 3
- `data/services.module2-sample.json`, `data/services.module3-identity-documents.json` — see § 2
- `workflows/` (repo root folder) — a stale duplicate of `.github/workflows/regenerate-content.yml` *without* the QA-audit step. GitHub Actions only ever reads `.github/workflows/`, so this root-level copy does nothing except cause confusion about which version is "real." Delete the whole `workflows/` folder; keep `.github/workflows/`.
- `README-CHANGES.txt`, `FILES-TO-DELETE-ON-GITHUB.txt` — one-time upload instructions from past sessions, already actioned or superseded by this doc cleanup
- `project roadmap csc .pdf` (repo root) — old planning document, superseded by this file; keep only if you want it as a historical artifact, it's not read by any code

## 7. Config / infra files

- `CNAME` → `sarkarisewaindia.com`
- `robots.txt` → allows all, disallows `/admin/`, points to `sitemap.xml`
- `manifest.json`, `favicon.ico` → PWA/branding basics
- `google3d97747d4af174a7.html` → Search Console verification, don't delete
- `990cec6ab75587968bc7a43b4721e52c.txt` → IndexNow key file, don't delete

## 8. Not yet built (genuinely open, verified against the code, not guessed)

- **`ads.txt`** — blocked on AdSense approval (needs a real publisher ID first)
- **More blog posts** — 12 exist; no fixed target, add as content-marketing time allows
- **Live Lighthouse audit** — needs a real browser/PageSpeed Insights run against the live URL, not doable from a code session
- **Real-device mobile walkthrough** — hasn't been done since the site grew significantly (wizard, comments, subscribe widget, admin dashboard, exam calendar)
- **Manual helpline/fee spot-check** — verifying a sample of services' phone numbers/fees against current government sources by hand
- **Scaling services from 93 toward a larger catalog** — ongoing, no fixed number committed
- **Related-services curation** — verified now: 91 of 93 services have 4 related services each, 1 has 3, 1 has 5. Fine as-is; only revisit if specific services need better cross-links.

## 2026-09-29 — Service redirect-stub cleanup (Session 3)
- Audited `service/*.html` and identified **83** redirect-only full-name service files (the checklist's earlier 84 count was stale).
- Removed those 83 redirect stubs in one repository-tree commit; canonical short-code service pages were retained.
- Made `scripts/fix_duplicate_service_pairs.py` cleanup-only so it cannot recreate/overwrite redirect stubs.
- Sitemap cleanup for these removed URLs is preserved; no canonical service content was deleted.
- Session 3 cleanup does **not** delete the separate dynamic `service/service.html` shell.
