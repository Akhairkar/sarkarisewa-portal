# Module 7 — Support pages + Legal pages

Aapki `module 7.md` file zip me nahi mili (na root me, na kisi folder me) —
lagta hai jis chat me wo banai thi, wahan se export/zip karte waqt reh gayi.
Isliye maine `STATUS.md` aur `MODULE6-NOTES.md` ke "What's left" section se
Module 7 ka original scope reconstruct kiya:

> Support pages (state-wise services directory, helpline directory, RTI
> guide) + legal pages (Privacy Policy, Disclaimer, Terms — needed before
> AdSense/any monetisation)

## Jo pehle se ban chuka tha

- `privacy-policy.html` — content pura tha, **lekin 2 cheezein missing thi
  jo maine fix ki**:
  1. Ye file `assets/css/module7.css` link kar rahi thi jo exist hi nahi
     karti thi — matlab ye page abhi tak completely unstyled tha.
  2. Iske saare `data-i18n="privacy_*"` attributes `data/lang.json` me
     define nahi the — matlab language toggle is page par kaam nahi karta
     tha, text hamesha hardcoded English/blank dikhta.

## Bonus bug fix (isi kaam ke dauraan mila)

`assets/css/module2.css` (category.html, service.html) `var(--primary)`,
`var(--saffron)`, `var(--green)`, `var(--surface)` use karta hai — lekin
`style.css` me ye tokens sirf `--color-primary`, `--color-accent-saffron`
naam se define the, `--primary` naam se nahi. Matlab category aur service
pages ke cards/hero ka rang kabhi sahi render hi nahi ho raha tha (unset/
transparent). Maine `style.css` ke `:root` aur `[data-theme="dark"]` me
alias variables add kar diye (`--primary: var(--color-primary);` etc.) —
ek jagah fix, sab jagah kaam karega. **Isse category/service pages ke
visuals turant better dikhenge**, isko bhi verify kar lena.

## Naya bana (Module 7 complete)

```
disclaimer.html                          (NEW — legal page)
terms.html                               (NEW — legal page)
support/index.html                       (NEW — Support hub)
support/state-wise-services.html         (NEW — data-driven from services.json)
support/helpline-directory.html          (NEW — searchable table, data-driven)
support/rti-guide.html                   (NEW — static step-by-step guide)
assets/css/module7.css                   (NEW — styles for all pages above)
assets/js/support.js                     (NEW — powers helpline directory + state page)
```

**Modified files:**

```
data/lang.json         — added 97 new keys (en+hi) for privacy (missing
                          ones), disclaimer, terms, support hub, state page,
                          helpline directory, RTI guide, footer support links
assets/css/style.css   — added --primary/--saffron/--green/--surface aliases
                          (bug fix above) + footer-grid widened to 5 columns
partials/header.html   — added "Support" link to desktop nav (it only
                          existed in mobile-nav before — inconsistency found
                          while wiring up support/index.html)
partials/footer.html   — added a new "Support" column linking to the 3 new
                          support pages
```

## What each new page does

- **State-wise Services** (`support/state-wise-services.html`) — shows all
  28 states + 8 UTs as a reference grid, plus a data-driven list of every
  service whose `note` field flags it as state/municipal-issued (Birth
  Certificate, Ration Card, Domicile, Caste, Income, Marriage Certificate,
  Senior Citizen Card, Legal Heir Certificate, Electricity/Water/Property
  Tax — 12 services from `services.json`, no hardcoded/guessed state URLs).
- **Helpline Directory** (`support/helpline-directory.html`) — reads all 80
  records in `services.json` and renders a live-searchable, category-
  filterable table of every helpline number already in your data. No new
  data file needed.
- **RTI Guide** (`support/rti-guide.html`) — static 6-step guide, links out
  to the real central RTI portal (rtionline.gov.in).
- **Support hub** (`support/index.html`) — 3 cards linking to the above.

## After merging, verify in this order

1. `privacy-policy.html` → should now be fully styled + language toggle
   should switch every line instantly.
2. `disclaimer.html`, `terms.html` → same styling, same language toggle.
3. `support/index.html` → 3 cards visible, links work.
4. `support/helpline-directory.html` → table populated with 80 rows; type
   in the search box (e.g. "pan") and switch the category dropdown to
   confirm filtering works; flip language toggle.
5. `support/state-wise-services.html` → state grid + 12 service cards
   populated; each card links to its real `service/service.html?id=...`
   page.
6. `support/rti-guide.html` → 6 numbered steps render correctly.
7. Header (desktop, not just mobile) and footer on every page now show a
   working "Support" link.
8. **Bonus check:** open `category/category.html?cat=identity-documents`
   and `service/service.html?id=aadhaar-card` again — the alias-variable
   fix means colors/cards should look noticeably more "finished" than
   before, not broken/transparent.

## What's left (per your original plan)

- **Module 8:** Search page, sitemap.html (HTML + XML), robots.txt, schema
  markup pass, meta description pass on every page
- **Module 9:** Blog system
- **Module 10:** Final QA — broken link check, mobile pass, Lighthouse/SEO
  audit, AdSense pre-check
- **Module 11 (your CSC lead-gen idea):** still recommended after Module 7,
  since it needs the legal pages in place — which are now done.

Note: footer also links to `about.html`, `contact.html`, `sitemap.html` and
`faq.html`, none of which exist yet. These were never part of Module 7's
scope (sitemap is explicitly Module 8) — flagging so those links don't
surprise you as 404s; not fixed here to stay within Module 7's scope.
