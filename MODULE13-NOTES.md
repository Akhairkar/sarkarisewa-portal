# Module 13 — Discovery Features (DONE)

## 1. "Find Services For You" eligibility wizard
`find-services.html` + `assets/js/find-services.js` + `assets/css/module13.css`

A 3-step, fully client-side wizard (no backend, inspired by the official
myScheme.gov.in flow discussed earlier in planning):
1. **Who are you?** — multi-select from 8 personas (Student, Farmer,
   Senior Citizen, Woman/Girl Child, Job Seeker, Business Owner/
   Self-employed, Salaried Employee, General Citizen)
2. **Which area?** — multi-select from the 6 categories (optional, all
   selected by default)
3. **Results** — filtered `service-card` grid, reusing the same card
   style as search.html/category pages

**How matching works:** each non-"General" persona has a small keyword
list, matched against each service's English name + short description
(lowercased). This is a heuristic, not a guaranteed-accurate eligibility
check — it narrows 92 services down to a relevant shortlist, which is
the actual value proposition; it doesn't claim to determine legal
eligibility. Self-maintaining: new services with matching keywords in
their name/description are picked up automatically, no manual per-service
tagging required. If a combination of filters matches nothing, it falls
back to showing all services in the selected categories with a note,
rather than a dead end.

Linked from the homepage hero ("Not sure what you need? Find services
for you →") for discoverability.

## 2. Downloadable master PDF
`assets/downloads/sarkarisewa-portal-all-services.pdf` — all 92 services,
grouped by category, each with name + description + official link.
8 pages. Generated with reportlab (script not checked into the repo —
one-off). Linked from `sitemap.html`.

**Known limitation — English only.** This sandbox has no Devanagari
font available (checked `fc-list`, searched the filesystem, no network
access to download one), so Hindi text cannot render correctly in a
PDF right now — it would show as blank boxes instead of failing
silently or looking broken. Rather than ship broken/garbled Hindi text,
the PDF is English-only for now, clearly labelled as such in its own
download link text ("Download full service list as PDF (English)").
**To add a Hindi/bilingual version:** provide a Devanagari font file
(e.g. Noto Sans Devanagari .ttf) in a future session, or regenerate
from an environment with internet access to fetch one — the generation
script is straightforward to extend once a font is available.

## Verified before shipping
- `audit-site.py`: 0 issues
- `find-services.js` passes `node -c`
- PDF verified: 8 pages, correct service count (92) extracted via pypdf
- `generate-sitemap.py` re-run — sitemap now has 118 URLs (was 117)
- New i18n keys added: wizard (14 keys) + persona labels (8) + PDF/hero
  link CTAs (3) = 25 new keys, total now 237
