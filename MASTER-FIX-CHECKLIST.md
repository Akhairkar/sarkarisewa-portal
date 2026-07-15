# Master Fix — Replace ALL 7 files listed below

Sorry for the confusion across multiple zips — here's everything in one
place so nothing gets missed. Replace **all 7** of these files in your repo
exactly as they are (don't merge, just overwrite):

```
data/services.json          ← 20 services, unified schema
data/categories.json         ← 6 categories (unchanged content, included for completeness)
assets/js/home.js            ← fixed: fetches categories.json separately, computes counts live
assets/js/i18n-helper.js     ← fixed: uses real "ss_lang" key + real "ss:language-changed" event
assets/js/category.js        ← rebuilt: was missing its entire top half
category/category.html       ← fixed: header-placeholder/footer-placeholder → site-header/site-footer
service/service.html         ← fixed: same id fix as above
```

## Why the homepage looked empty again

Most likely only some of these 7 were applied so far (this fix was split
across 3 separate zips earlier in our conversation, which is an easy way to
lose track). If even one of `services.json`, `categories.json`, `home.js`,
or `i18n-helper.js` is still the old version, the homepage's "श्रेणी अनुसार
देखें" and "नवीनतम अपडेट" sections will stay blank — same symptom as before.

## One more thing to check: `index.html`

`category.html` and `service.html` both had their header/footer container
divs named `header-placeholder` / `footer-placeholder` instead of the
`site-header` / `site-footer` that `main.js` (core.js) actually looks for.
I haven't seen your `index.html` yet — if the homepage is also missing its
top navigation bar in your screenshots (hard to tell from the photos so
far), it may have the same issue. **Please paste the full content of
`index.html`** so I can check it in the same pass and avoid another
back-and-forth.

## After replacing all 7 files, verify in this order

1. `index.html` → header/nav visible, category grid + latest updates both populated
2. `category.html?cat=identity-documents` → header/nav visible, 15 service cards shown
3. `service.html?id=aadhaar-card` → header/nav visible, all detail sections shown
4. Flip the language toggle on each page → everything switches instantly, no reload needed
