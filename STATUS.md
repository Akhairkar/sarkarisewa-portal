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

## 🔜 Next modules (planned order — see `PROJECT-ROADMAP.md` for the full, current 21-module plan)
- **Module 11:** Design & Branding fixes (dark mode search bar/button-text bug — 5 places, favicon/logo/og:image, ad-space reservation, homepage trust stats, "Latest Updates" `dateAdded` fix). **Publish the site right after this module.**
- **Module 10.5 (optional, do around publish time):** GA4, Search Console verification, Microsoft Clarity, cookie consent banner (DPDP-compliant — consent-gated script loading, not just an overlay banner), 404 page tracking
- **Module 12:** Per-service content upgrades (Common Issues/Troubleshooting, structured Summary box, tag-based Matching Services)
- **Module 13:** Downloadable master PDF + "Find Services For You" eligibility wizard
- **Module 14:** Backend Foundation (Supabase) — shared by Modules 15–16 and later CSC modules
- **Module 15:** Comments/Q&A on service pages
- **Module 16:** Email/WhatsApp subscribe
- **Modules 17–21:** CSC Centre Listings (public directory → claim flow → owner dashboard/free period → lead generation → monetization)

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
cd govservices
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Deployment

- **Repo:** https://github.com/akhairkar/sarkarisewa-portal (public)
- **Live URL:** https://akhairkar.github.io/sarkarisewa-portal/
- GitHub Pages → Settings → Pages → Source: branch + `/ (root)`
- Path handling for the `/sarkarisewa-portal/` sub-path is already solved — see `SS_ROOT` note above.

## File map (through Module 7)

```
govservices/
├── index.html
├── privacy-policy.html
├── disclaimer.html                                      (NEW — Module 7)
├── terms.html                                           (NEW — Module 7)
├── admin/
│   ├── login.html
│   └── dashboard.html
├── category/
│   └── category.html
├── service/
│   └── service.html
├── support/                                              (NEW folder — Module 7)
│   ├── index.html
│   ├── state-wise-services.html
│   ├── helpline-directory.html
│   └── rti-guide.html
├── assets/
│   ├── css/style.css, module2.css, module7.css
│   └── js/main.js, home.js, category.js, service.js, i18n-helper.js, support.js
├── data/
│   ├── services.json                                    (80 services — all 6 categories complete)
│   ├── services.module2-sample.json                     (reference schema, not for production use)
│   ├── services.module3-identity-documents.json          (reference — Module 3, already merged)
│   ├── categories.json
│   └── lang.json                                        (135 keys, en + hi)
├── partials/
│   ├── header.html
│   └── footer.html
├── MODULE3-NOTES.md
├── MODULE4-NOTES.md
├── MODULE5-NOTES.md
├── MODULE6-NOTES.md
├── MODULE7-NOTES.md                                      (NEW — merge instructions for Module 7)
└── STATUS.md
```

