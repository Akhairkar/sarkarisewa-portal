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
- **Path fix (post-Module-1):** all internal links/fetches use relative paths driven by a per-page `window.SS_ROOT` value ("" at root, "../" one folder deep), rewritten at runtime for header/footer nav links too. This works correctly under a GitHub Pages project URL like `/sarkarisewa-portal/` with no custom domain. **Rule for all future pages:** any page in a first-level folder (`/admin/`, `/category/`, `/service/`, `/support/`) must include `<script>window.SS_ROOT = "../";</script>` right before `main.js`; root-level pages use `window.SS_ROOT = "";`.

**Tech approach:** Plain HTML/CSS/JS, no build step, no framework. Pages are data-driven where possible (categories + service cards render from JSON) so adding new services later mostly means adding JSON, not new code.


## ✅ Module 2 — DONE (Category + Service page templates)

**Built (new files, delivered separately for you to merge into the repo):**
- `/category/category.html` + `/assets/js/category.js` — single reusable category template, not one file per category. Reads the category from the URL query string: `category.html?cat=identity-documents`. Renders hero (icon/title/description/count) + a data-driven grid of service cards, filtered from `services.json` by matching `service.category === cat`.
- `/service/service.html` + `/assets/js/service.js` — single reusable service template. Reads the service from the URL query string: `service.html?id=aadhaar-card`. Renders the full section set from the plan: Official Links, Apply Online, Download Form, Track Status, Helpline, Documents Required, Eligibility, Fees, Timeline, FAQs (as native `<details>` accordions), Related Services. **Every section is optional** — if a service record omits a field, that section is skipped rather than rendered empty, so Module 3+ content can go live incrementally without breaking the template.
- `/assets/js/i18n-helper.js` — shared `t()` helper that picks the right string out of bilingual `{ en, hi }` objects, plus `getLang()`/`onLangChange()`.
- `/assets/css/module2.css` — additive stylesheet (breadcrumb, hero, service-card, section shells, link-list, helpline cards, fees table, timeline, FAQ accordion). Built from the same tokens as `style.css` (primary/saffron/green, Fraunces/Noto Sans/JetBrains Mono, 10px radius, tricolor rule) — link it *after* `style.css`, it does not redeclare `:root` tokens.
- `/data/categories.json` — new file: 6 categories (slug, icon, bilingual name + description) matching the Module 3–6 category plan.
- `/data/services.module2-sample.json` — **reference only, do not overwrite your real `services.json`.** Shows the full extended per-service schema (`officialLinks`, `applyOnline`, `downloadForm`, `trackStatus`, `helpline`, `documentsRequired`, `eligibility`, `fees`, `timeline`, `faqs`, `relatedServices`, plus a `category` slug) with 2 fully-worked example services (Aadhaar, PAN). Merge these new fields into your existing 8 services, or add `category` + the new fields incrementally as Module 3 content is written.

**⚠️ Things to verify/wire up when merging:**
1. **Language toggle key** — `i18n-helper.js` assumes the language toggle saves to `localStorage` under the key `"ss-lang"` (`"en"`/`"hi"`). If Module 1's actual key is named differently, change the one `LANG_KEY` constant at the top of `i18n-helper.js`.
2. **Live language switching** — for the toggle to re-render category/service pages without a full reload, have the toggle's click handler in `main.js` fire `window.dispatchEvent(new CustomEvent("ss:langchange"))` after updating `localStorage`. If that event isn't wired up yet, the pages still work correctly on page load/refresh — they just won't re-render live until reload.
3. **`services.json` needs a `category` field** on each existing entry (matching a slug in `categories.json`) for the category page's filtering to find them.
4. Home page category grid and service cards should be updated to link to `category/category.html?cat=…` and `service/service.html?id=…` respectively, per the new routing convention (query-string based, no per-page static files).

## 🔜 Next modules (planned order)

- **Module 3:** Identity Documents category — full content for all 15 services (Aadhaar, PAN, Voter ID, Passport, Driving Licence, etc.)
- **Module 4:** Government Schemes category — 20 services
- **Module 5:** Finance & Tax + Jobs & Education
- **Module 6:** Utilities + Health
- **Module 7:** Support pages (state-wise services, helpline directory, RTI guide, etc.) + legal pages (Privacy Policy, Disclaimer, Terms) — required for AdSense approval
- **Module 8:** Search page, sitemap.html (HTML + XML), robots.txt, schema markup pass, meta description pass on every page
- **Module 9:** Blog system (simple JSON or Markdown-driven post list)
- **Module 10:** Final QA — broken link check, mobile pass, Lighthouse/SEO audit, AdSense pre-check

## ⚠️ Admin auth — must fix before going live

`/admin/login.html` currently uses a **hardcoded demo password in the JS source** (`admin` / `changeme123`) purely to wire up the UI flow. This is NOT secure — visible in page source, bypassable via devtools. Before real content/admin data lives here, replace with one of:
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
- Path handling for the `/sarkarisewa-portal/` sub-path is already solved — see `SS_ROOT` note above. If a custom domain is added later, `SS_ROOT` can stay `""` everywhere and it'll still work.

## File map (through Module 2)

```
govservices/
├── index.html
├── admin/
│   ├── login.html
│   └── dashboard.html
├── category/
│   └── category.html
├── service/
│   └── service.html
├── assets/
│   ├── css/style.css, module2.css
│   └── js/main.js, home.js, category.js, service.js, i18n-helper.js
├── data/
│   ├── services.json                    (needs `category` field added — see Module 2 notes)
│   ├── services.module2-sample.json     (reference schema, not for production use)
│   ├── categories.json
│   └── lang.json
├── partials/
│   ├── header.html
│   └── footer.html
└── STATUS.md
```
