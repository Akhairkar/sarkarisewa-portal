# SarkariSewa Portal — Build Status

> इस file को हर module के बाद अपडेट किया जाएगा।
> अगली chat में सिर्फ अपनी GitHub repo का link + यह file paste कर दें, आगे वहीं से जारी रहेगा।

## ✅ Module 1 — DONE (Foundation)

**Live at:** https://akhairkar.github.io/sarkarisewa-portal/

**Built:**

- Reusable HTML page template system (header + footer loaded as partials via JS include, not copy-pasted into every page)
- `/index.html` — Home page (hero, search bar, category grid, latest services, "why this portal")
- `/admin/login.html` + `/admin/dashboard.html` — visible staff login (linked in footer, NOT hidden), demo-level auth only
- Dark / light theme toggle (saved in localStorage)
- Hindi / English language toggle (saved in localStorage, driven by `/data/lang.json`)
- Design system: `/assets/css/style.css` (colors, type, spacing tokens — see "Design tokens" below)
- Data files: `/data/services.json` (8 sample services with real official govt links), `/data/lang.json` (all UI strings, en + hi)
- Mobile-responsive nav, accessible focus states
- **Path fix (post-Module-1):** all internal links/fetches use relative paths driven by a per-page `window.SS_ROOT` value ("" at root, "../" one folder deep), rewritten at runtime for header/footer nav links too. **Rule for all future pages:** any page in a first-level folder (`/admin/`, `/category/`, `/service/`, `/support/`) must include `<script>window.SS_ROOT = "../";</script>` right before `main.js`; root-level pages use `window.SS_ROOT = "";`.

**Tech approach:** Plain HTML/CSS/JS, no build step, no framework. Pages are data-driven where possible (categories + service cards render from JSON) so adding new services later mostly means adding JSON, not new code.

## ✅ Module 2 — DONE (Category + Service page templates)

**Built (new files, delivered separately for you to merge into the repo):**

- `/category/category.html` + `/assets/js/category.js` — single reusable category template (`category.html?cat=identity-documents`), renders hero + data-driven grid of service cards filtered from `services.json` by `category`.
- `/service/service.html` + `/assets/js/service.js` — single reusable service template (`service.html?id=aadhaar-card`). Renders Official Links, Apply Online, Download Form, Track Status, Helpline, Documents Required, Eligibility, Fees, Timeline, FAQs, Related Services. **Every section is optional** — missing fields are skipped rather than rendered empty.
- `/assets/js/i18n-helper.js` — shared `t()` helper for bilingual `{ en, hi }` objects, plus `getLang()`/`onLangChange()`.
- `/assets/css/module2.css` — additive stylesheet, link after `style.css`.
- `/data/categories.json` — 6 categories (slug, icon, bilingual name + description).
- `/data/services.module2-sample.json` — reference-only schema sample (Aadhaar, PAN worked examples).

**⚠️ Verify/wire-up items (carried over, confirm before Module 4):**

1. Confirm `i18n-helper.js`'s `LANG_KEY` matches your actual localStorage key.
2. Wire up `window.dispatchEvent(new CustomEvent("ss:langchange"))` in `main.js`'s toggle handler for live re-render (works fine on reload even without this).
3. Your real `services.json` entries need a `category` field matching a `categories.json` slug.
4. Home page category grid / service cards should link via `category.html?cat=…` / `service.html?id=…`.

## ✅ Module 3 — DONE (Identity Documents category — full content, 15 services)

**Built (new file, delivered separately — see `MODULE3-NOTES.md` for merge steps):**

- `/data/services.module3-identity-documents.json` — **15 fully-worked service records** for the `identity-documents` category, using the complete Module 2 schema (`officialLinks`, `applyOnline`, `downloadForm`, `trackStatus`, `helpline`, `documentsRequired`, `eligibility`, `fees`, `timeline`, `faqs`, `relatedServices`):
  1. Aadhaar Card
  2. PAN Card
  3. Voter ID Card (EPIC)
  4. Passport
  5. Driving Licence
  6. Birth Certificate
  7. Death Certificate
  8. Ration Card
  9. Domicile / Residence Certificate
  10. Caste Certificate
  11. Income Certificate
  12. Marriage Certificate
  13. Disability Certificate (UDID)
  14. Senior Citizen Certificate / Card
  15. Legal Heir Certificate

**⚠️ Things to know before/while merging:**

1. **Central-government services** (Aadhaar, PAN, Voter ID, Passport, Driving Licence) link directly to real national portals (UIDAI, NSDL/UTIITSL, NVSP, Passport Seva, Parivahan/Sarathi) — safe as-is.
2. **State-issued services** (Birth/Death Certificate, Ration Card, Domicile, Caste, Income, Marriage, Senior Citizen Card, Legal Heir Certificate) link to **national directory portals** (crsorgi.gov.in, nfsa.gov.in, edistrict.gov.in) because the exact application portal varies by state. Each such record carries an extra bilingual `"note"` field flagging this — decide whether to surface it as a disclaimer on the service page. **Tell me your target state(s) and I'll swap in exact state links in a follow-up.**
3. Helpline numbers, fees, and processing-day estimates should be spot-checked before going fully live — these change periodically via government notification.
4. No HTML/JS changes were needed — Module 2's optional-section rendering means this is a pure data merge into `services.json`.

## ✅ Module 4 — DONE (Government Schemes category — 20 services)

**Built (see `MODULE4-NOTES.md` for merge steps):** full replacement of `data/services.json` — 20 Government Schemes services added (PM Awas Yojana, PM Ujjwala Yojana, PM Jan Dhan Yojana, and others), combined total 38 services at this point.

## ✅ Module 5 — DONE (Finance & Tax + Jobs & Education — 22 services)

**Built (see `MODULE5-NOTES.md` for merge steps):** full replacement of `data/services.json` — Finance & Tax completed to 10 services, Jobs & Education completed to 15 services, combined total 60 services at this point.

## ✅ Module 6 — DONE (Utilities + Health — 20 services)

**Built (see `MODULE6-NOTES.md` for merge steps):** full replacement of `data/services.json` — 10 Utilities + 10 Health services added. **All 6 planned categories now complete, 80 services total.**

## ✅ Module 7 — DONE (Support pages + Legal pages)

**Built (new files, delivered separately — see `MODULE7-NOTES.md` for merge steps):**

- `privacy-policy.html` — was already partially built; finished by adding its missing `assets/css/module7.css` styling and its missing `lang.json` translation keys (page was unstyled and non-bilingual before).
- `disclaimer.html`, `terms.html` — new legal pages, same structure as Privacy Policy.
- `support/index.html` — new Support hub linking to the 3 pages below.
- `support/state-wise-services.html` — reference grid of all states/UTs + data-driven list of every service whose application portal varies by state (pulled from the existing `note` field in `services.json`, no invented links).
- `support/helpline-directory.html` — live search + category filter over all 80 services' helpline numbers.
- `support/rti-guide.html` — static 6-step guide to filing an RTI request.
- `assets/css/module7.css`, `assets/js/support.js` — styling and data-rendering for all of the above.

**⚠️ Bonus bug fix (found while building this module):** `module2.css` referenced `--primary`/`--saffron`/`--green`/`--surface`, but `style.css` only defined `--color-primary` etc. — meaning category/service page cards were rendering with unset colors. Fixed by adding alias variables in `style.css`'s `:root` and `[data-theme="dark"]`.

**Also fixed:** `partials/header.html` desktop nav was missing the "Support" link that mobile-nav already had; `partials/footer.html` now has a Support column linking to all 3 new support pages.

## ✅ Module 8 — DONE (Search + Sitemap.xml + Robots.txt + Schema markup)

**Built (see `MODULE8-NOTES.md` for full details):**

- `search.html` + `assets/js/search.js` — **the actual missing piece**: the homepage search form and its JSON-LD `SearchAction` had pointed to `search.html` since Module 1, but the page never existed, so every search was a 404. Now live keyword + category-chip search across all 80 services.
- `robots.txt` + `sitemap.xml` (99 URLs) — machine-readable sitemap generated by `generate-sitemap.py`; re-run that script after any future services update.
- Dynamic Schema.org JSON-LD (`GovernmentService`/`ItemList` + `BreadcrumbList`) and dynamic meta description/OG tags/canonical, injected per-record on category and service pages (previously static placeholder text on every page).
- Search icon added to header nav (desktop + mobile) — previously only reachable from the homepage.
- `assets/css/module8.css`.

## ✅ Module 9 — DONE (Blog System)

**Built (see `MODULE9-NOTES.md` for full details):**

- `data/blog-posts.json` — 5 bilingual seed posts, cross-linked to real `services.json` ids (verified, not assumed)
- `blog/index.html` + `assets/js/blog.js` — post list
- `blog/post.html` + `assets/js/blog-post.js` — single post template, dynamic meta + `BlogPosting`/`BreadcrumbList` schema
- `assets/css/module9.css`
- Header nav "Blog" link (desktop + mobile)
- Homepage "From the Blog" section (latest 3 posts)
- `generate-sitemap.py` updated — now emits 105 URLs (was 99)
- 12 new `lang.json` keys (total now 199)

## ✅ Module 10 — DONE (Final QA & Launch Prep)

**Built (see `MODULE10-NOTES.md` for full details):**

- `404.html` (GitHub Pages auto-serves this at repo root) + `assets/css/module10.css`
- Site-wide skip-to-content accessibility link (in `partials/header.html` + auto-tagging in `main.js`)
- `audit-site.py` — permanent, reusable QA script (broken links, i18n coverage, JSON validity, dangling cross-references). Run before every future deploy.
- **Real content bug fixed:** homepage claimed "100+" services in 3 places (meta description, og:description, `hero_sub` EN+HI) while the actual count is 80 — now consistent everywhere
- **SEO fix:** homepage meta description trimmed from 163 to 132 characters (was over Google's ~160-char limit)
- Explicitly deferred to Module 11 (per your instruction): favicon/manifest, dark mode bug, og:image, ad-space, trust stats

**⚠️ Sequence change (your instruction):** originally planned to publish right after Module 10 — **changed to publish after Module 11 instead**, so branding/design fixes (especially the dark mode bug) ship before the site goes live.

## ✅ Module 10.5 — DONE (Analytics & Tracking Setup)
- `assets/js/consent.js` — DPDP-compliant cookie consent banner (opt-in, GA4 does not load until Accept is clicked), wired onto all 18 pages that load `main.js`
- GA4 confirmed live and tracking (verified via Realtime report: page_view, session_start, scroll, user_engagement events all firing correctly)
- Privacy Policy updated with a new "Cookies" section explaining the consent-gated analytics cookie

## ✅ Module 11 — DONE (Design & Branding Fixes)

**Built (see `MODULE11-NOTES.md` for full details):**

- **Dark-mode invisible-text bug fixed — 8 instances total** (the 5 originally flagged, plus 3 more found during a full CSS sweep: button hover states + `.mobile-nav`). New fixed tokens `--color-brand` / `--color-brand-text` / `--color-brand-hover` that never flip with theme.
- Hero search bar no longer blends into its own section in dark mode (`.hero` now matches page background like every other section; `.search-form` card now visibly pops on top of it)
- Favicon + app icons (16/32/48/180/192/512) + `manifest.json`, matching the existing brand mark, wired into all 20 HTML pages
- `og:image` (1200×630 branded social-share card) + `twitter:card`, on every page
- Ad-space reserved (`.ad-slot`, fixed-height, no layout shift) on homepage, category pages, and service pages
- Homepage trust-stats strip: "80+ Services · 6 Categories · Bilingual · Free"
- "Latest Updates" fixed: added a real `dateAdded` field to all 80 services (previously didn't exist — the section wasn't actually showing "latest" anything), now sorts by it, shows 12 with category diversity, plus a "View all 80+ services →" link

## ✅ Module 12 — DONE (Per-Service Content + Catalog Expansion)

**Correction to an earlier claim:** a prior "thin content on all 80 services" finding was wrong — it came from checking a JSON field name (`blocks`) that never existed; the real fields are `eligibility`/`fees`/`documentsRequired`/`faqs`. The actual gap was 20 services (15 Identity Documents + 5 stragglers: pm-kisan, ayushman-bharat, gst, epfo, digilocker), now filled with full bilingual content.

- **12 new high-priority services added** (80 → 92 total) based on a user-provided gap analysis, after checking for duplicates against the existing catalog: aadhaar-mobile-update, character-certificate, police-clearance-certificate, pm-vishwakarma-yojana, tds-refund-status, form16-form26as, kisan-credit-card, sovereign-gold-bond, lpg-subsidy-pahal, esic, udyam-registration, labour-card-construction-workers
- **Admin dashboard rebuilt** — was a static Module 1 placeholder showing stale hardcoded numbers ("8 services", "7 categories"); now dynamically loads and displays live stats from the actual data files (service/category/blog counts, content completeness, latest additions). Clearly labelled read-only until Module 14's backend exists.
- See `MODULE12-NOTES.md` for full details.

## ✅ Module 13 — DONE (Discovery Features)

- **"Find Services For You" wizard** (`find-services.html`) — 3-step client-side eligibility helper: persona selection (8 personas) → category filter → matching results, using keyword-based matching against service name/description. Linked from the homepage hero.
- **Downloadable master PDF** (`assets/downloads/sarkarisewa-portal-all-services.pdf`) — all 92 services grouped by category, linked from `sitemap.html`. **English-only for now** — this environment has no Devanagari font available to render Hindi text in a PDF; see `MODULE13-NOTES.md` for how to add a bilingual version later.
- Sitemap regenerated — now 118 URLs.

## 🔧 Also done — GitHub Actions automation
Two workflows added under `.github/workflows/`:
- `audit.yml` — runs `audit-site.py` automatically on every push, shows ✅/❌ on the commit
- `regenerate-sitemap.yml` — auto-regenerates and commits `sitemap.xml` whenever a data file changes, so it's never forgotten
See `AUTOMATION-NOTES.md`.

## ✅ Module 14 — DONE (Backend Foundation)
Supabase connected, `comments` + `subscribers` tables live with RLS. See `MODULE14-NOTES.md`.

## ✅ Module 15 — DONE (Comments / Q&A)
Comment form + list on every service page. See `MODULE15-NOTES.md`.

## ✅ Module 16 — DONE (Email / WhatsApp Subscribe)
Subscribe widget on service pages + homepage. See `MODULE16-NOTES.md`.

## 🔜 Next: AdSense-Readiness Audit Phase (CSC on hold)
Per your instruction, CSC (Modules 17–21) is on hold. Next up instead:
- **Content depth:** expand Related Services (currently 67/92 services stuck at exactly 2), add 10–15 more blog posts (only 5 exist), revisit Common Issues/Summary box sections deferred from Module 12
- **Technical checklist:** live-site Lighthouse audit, fresh mobile pass (site has grown a lot since Module 10's check), `ads.txt`, manual AdSense content-policy read-through, spot-check real helpline/fee accuracy
- **Admin panel:** now genuinely buildable with real CRUD since Supabase exists — no longer blocked like it was back in Module 12
See `PROJECT-ROADMAP.md`'s "AdSense-Readiness Audit Phase" section for the full breakdown.
- **Modules 17–21 (CSC):** ON HOLD until the above phase is worked through

## ⚠️ Admin auth — must fix before going live

`/admin/login.html` currently uses a **hardcoded demo password in the JS source** (`admin` / `changeme123`) purely to wire up the UI flow. This is NOT secure. Before real content/admin data lives here, replace with one of:

- Netlify Identity (free, easiest with Netlify hosting)
- A small serverless function + hashed password + real session cookie
- A headless CMS login (Decap CMS / similar)

## Design tokens (for consistency in future modules)

- **Colors:** primary `#10243E` (deep indigo), saffron accent `#D97F2B`, green accent `#146B3A`, bg `#F5F3ED`, surface `#FFFFFF`. Dark mode variants in `:root[data-theme="dark"]` in style.css.
- **Type:** Fraunces (headings), Noto Sans + Noto Sans Devanagari (body, bilingual), JetBrains Mono (numbers/codes/helplines)
- **Signature element:** "tricolor rule" — 3px saffron/white/green bar used only at major structural boundaries (below header, above footer, card hover) — do not overuse elsewhere.
- **Grid/spacing:** `.container` max-width 1180px; cards use `var(--radius)` = 10px, `var(--shadow-card)`.

## How to run locally

Partials (`header.html`/`footer.html`) and JSON data load via `fetch()`, which browsers block on `file://` URLs. You need a local server:

```
cd sarkarisewa-portal
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Deployment

- **Repo:** https://github.com/akhairkar/sarkarisewa-portal (public)
- **Live URL:** https://akhairkar.github.io/sarkarisewa-portal/
- GitHub Pages → Settings → Pages → Source: branch + `/ (root)`
- Path handling for the `/sarkarisewa-portal/` sub-path is already solved — see `SS_ROOT` note above.

## File map (current, through Module 16)

```
sarkarisewa-portal/
├── index.html
├── search.html                                          (Module 8)
├── find-services.html                                   (Module 13 — eligibility wizard)
├── sitemap.html
├── about.html
├── contact.html
├── faq.html
├── privacy-policy.html
├── disclaimer.html
├── terms.html
├── 404.html                                              (Module 10)
├── robots.txt                                            (Module 8)
├── sitemap.xml                                           (auto-generated — see generate-sitemap.py)
├── manifest.json                                         (Module 11 — PWA/favicon)
├── favicon.ico                                           (Module 11)
├── audit-site.py                                         (Module 10 — run before every deploy)
├── generate-sitemap.py                                   (Module 8 — run after adding services/posts)
│
├── admin/
│   ├── login.html                                        (⚠ client-side demo login, see "Admin auth" note)
│   └── dashboard.html                                    (Module 12 — live read-only stats, no CRUD yet)
│
├── category/
│   └── category.html
├── service/
│   └── service.html                                      (+ Comments + Subscribe widget, Modules 15–16)
├── blog/                                                  (Module 9)
│   ├── index.html
│   └── post.html
├── support/
│   ├── index.html
│   ├── state-wise-services.html
│   ├── helpline-directory.html
│   └── rti-guide.html
│
├── supabase/                                              (Module 14)
│   └── schema.sql                                        (comments + subscribers tables, RLS policies)
│
├── .github/workflows/                                     (automation, see AUTOMATION-NOTES.md)
│   ├── audit.yml                                         (auto-runs audit-site.py on every push)
│   └── regenerate-sitemap.yml                            (auto-regenerates sitemap.xml on data changes)
│
├── assets/
│   ├── css/
│   │   ├── style.css                                     (base — includes --color-brand tokens, Module 11)
│   │   ├── module2.css, module7.css, module8.css, module9.css
│   │   ├── module10.css, module13.css, module15.css, module16.css
│   ├── js/
│   │   ├── main.js, i18n-helper.js, consent.js           (site-wide: theme/lang, cookie consent + GA4 gate)
│   │   ├── home.js, category.js, service.js, support.js, sitemap.js
│   │   ├── search.js, blog.js, blog-post.js
│   │   ├── find-services.js                              (Module 13)
│   │   ├── supabase-client.js                            (Module 14 — shared DB connection)
│   │   ├── comments.js                                   (Module 15)
│   │   └── subscribe.js                                  (Module 16)
│   ├── img/                                               (Module 11 — favicons, apple-touch-icon, og-image.png)
│   └── downloads/
│       └── sarkarisewa-portal-all-services.pdf            (Module 13 — English only, see MODULE13-NOTES.md)
│
├── data/
│   ├── services.json                                     (92 services — all 6 categories, full content)
│   ├── categories.json                                   (6 categories)
│   ├── blog-posts.json                                   (5 posts)
│   ├── lang.json                                         (266 keys, en + hi)
│   ├── services.module2-sample.json                      (reference schema, not for production use)
│   └── services.module3-identity-documents.json          (reference — Module 3, already merged)
│
├── partials/
│   ├── header.html
│   └── footer.html
│
└── Module notes: MODULE3–MODULE16-NOTES.md, AUTOMATION-NOTES.md,
    CATEGORY-FIX-NOTES.md, HOMEPAGE-FIX-NOTES.md, MASTER-FIX-CHECKLIST.md,
    PROJECT-ROADMAP.md, README.md, STATUS.md (this file)
```

**Note:** `services.module2-sample.json` and `services.module3-identity-documents.json`
are historical reference files from early modules, already merged into
`services.json` — safe to ignore/delete, kept only for history.

