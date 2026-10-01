# Deadline Calendar — SEO Notes

Scope: only the Deadline Calendar / Deadline Hub feature built on 2026-08-20
(`tools/deadline-calendar.html`, `tools/deadline-detail.html`, and
`admin/deadlines.html`). Your separate tools-wide SEO audit is not part of
this file.

## Pages

| Page | Type | Indexable |
|---|---|---|
| `/tools/deadline-calendar.html` | Static listing page (filters/search/calendar), content loads client-side from Supabase | Yes |
| `/tools/deadline-detail.html?slug=X` | One SEO page per deadline, dynamically rendered | Yes, once published |
| `/admin/deadlines.html` | Admin-only tool | `<meta name="robots" content="noindex, nofollow">` already set |

## Metadata

- **Listing page** (`deadline-calendar.html`): title/description already
  fixed to real text in this session (was previously stuck on a generic
  fallback due to a JS bug — same bug class covered in your separate tools
  audit, but this specific page's fix is part of this feature).
- **Detail page** (`deadline-detail.html`): title, meta description, and
  canonical URL are all written by whatever the admin enters in the
  **SEO Title / SEO Description** fields on `/admin/deadlines.html` for
  that specific deadline — nothing here is templated or auto-generated.
  Keep titles under ~70 characters and descriptions under ~160.

## Structured data (JSON-LD)

Implemented in `assets/js/deadline-detail.js`:
- `WebPage` — always
- `BreadcrumbList` — always (Home → Deadline Calendar → this deadline)
- `FAQPage` — only when the admin's FAQ field actually has `Q:`/`A:` pairs
  (parsed at render time; empty field = no FAQ schema, so no fake/empty
  FAQ rich results)
- `Event` — only when `deadline_type = exam_date`, since that's the one
  category where an Event schema genuinely applies

`deadline-calendar.html` carries a `BreadcrumbList` + `WebPage` schema block
in its `<head>`.

## Internal linking

- Each detail page links back to the listing page ("← Back to Deadline
  Calendar") and shows up to 4 "Other deadlines in this category."
- The listing page links out to every published detail page via
  "Check Details →" on each card.
- Not yet added: links *into* the deadline calendar from other tool pages
  (e.g. a "Related Tools" card pointing here from Income Tax Calculator,
  ITR Penalty Calculator, etc.) — worth doing once there's real published
  content to point to.

## What's pending / not built here

- **Sitemap**: `sitemap.xml` was not touched. Detail-page URLs aren't in it
  yet — add manually per published deadline, or request indexing via
  Search Console for priority ones.
- **Category/state landing pages** (`/deadlines/scholarship.html`,
  `/deadlines/maharashtra.html`, etc. from the original spec, sections
  25–26) — not built. Only build these once there's enough real published
  data per category/state to avoid thin pages.
- **"Closing Soon" standalone landing page** (`/deadlines/closing-soon.html`
  from the original spec, section 24) — not built; the same view already
  exists as a filter (`Within 7 Days`) on the main listing page. Worth
  promoting to its own URL later if it's worth targeting as a keyword on
  its own.
- **GitHub Actions auto-discovery / auto-page-generation** — intentionally
  skipped per your instruction in favor of the manual admin panel. See
  `deadline-calendar.md` for the safe path if you want it added later.

## Content quality guardrails already in the code

- Status badges (Closing Today / Expired / etc.) are computed live, never
  stored — so a page can never show a stale "3 Days Left" that's actually
  wrong.
- Expired deadlines stay published and listed (moved to an "Expired /
  Past Deadlines" section) instead of being deleted, so their SEO value
  and any earned rankings/backlinks aren't thrown away.
- FAQ schema only renders when real Q/A content exists — no placeholder or
  auto-generated FAQ is ever shown as structured data.
