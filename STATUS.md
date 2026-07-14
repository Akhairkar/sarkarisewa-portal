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

## 🔜 Next modules (planned order)

- **Module 4:** Government Schemes category — 20 services
- **Module 5:** Finance & Tax + Jobs & Education
- **Module 6:** Utilities + Health
- **Module 7:** Support pages (state-wise services, helpline directory, RTI guide, etc.) + legal pages (Privacy Policy, Disclaimer, Terms) — required for AdSense approval
- **Module 8:** Search page, sitemap.html (HTML + XML), robots.txt, schema markup pass, meta description pass on every page
- **Module 9:** Blog system (simple JSON or Markdown-driven post list)
- **Module 10:** Final QA — broken link check, mobile pass, Lighthouse/SEO audit, AdSense pre-check
- **Module 11 (proposed, discuss before starting):** CSC (Common Service Centre) lead-generation add-on — a service where users submit a request and it's routed as a lead to a partner CSC centre for a commission. Recommended to slot this in *after* Module 7 (legal pages), since a lead-gen/commission model needs clear Privacy Policy/Disclaimer/Terms language about third-party fulfillment.

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

## File map (through Module 3)

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
│   ├── services.json                                  (merge Module 3's 15 records into this)
│   ├── services.module2-sample.json                   (reference schema, not for production use)
│   ├── services.module3-identity-documents.json        (NEW — 15 Identity Documents records)
│   ├── categories.json
│   └── lang.json
├── partials/
│   ├── header.html
│   └── footer.html
├── MODULE3-NOTES.md                                     (NEW — merge instructions for Module 3)
└── STATUS.md
```
