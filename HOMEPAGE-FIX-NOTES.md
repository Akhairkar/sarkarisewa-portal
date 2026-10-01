# Homepage Fix — Replace 3 Files (not a merge this time)

## Root cause (full chain)

The site broke because Module 1 (old) and Module 2 (new) used two different
data schemas that were never reconciled, plus a language-system mismatch:

1. **`home.js`** (Module 1) expected categories to live *inside*
   `services.json` (`data.categories`) and used snake_case service fields
   (`official_links`, `s[lang].title`).
2. **`category.js` / `service.js`** (Module 2) expected categories in a
   *separate* `categories.json` file, and camelCase service fields
   (`officialLinks`, `name: {en, hi}`, `shortDescription: {en, hi}`).
3. Because categories moved to their own file in Module 2 but `home.js` was
   never updated, `data.categories` was `undefined` on the homepage →
   `.map()` threw an error → the whole script stopped → **both** the
   category grid and the "latest updates" grid rendered empty. This was the
   exact symptom you saw.
4. Separately, **`i18n-helper.js`** was reading its own invented
   localStorage key (`"ss-lang"`) and listening for its own invented event
   (`"ss:langchange"`) — neither of which `core.js` (your real language
   toggle) ever writes or fires. `core.js` actually uses key `"ss_lang"`
   and fires `"ss:language-changed"` with `e.detail.lang`. This meant
   `category.js` / `service.js` were silently disconnected from the real
   language toggle even where they didn't crash.
5. Module 3's JSON also had a few field-name mismatches against what
   `service.js` actually reads (`helpline[].number` vs `.phone`,
   `downloadForm.label` vs `.formName`, plain-text `fees`/`timeline` vs the
   `{label, amount}` / `{step, duration}` shapes it expects). All fixed in
   the new `services.json` below.

## What's in this zip — 3 files, all **replace**, don't merge

```
data/
├── services.json      ← REPLACE your existing file completely (20 services total)
└── categories.json     ← same content you already have; included for completeness
assets/js/
├── home.js             ← REPLACE your existing file completely
└── i18n-helper.js      ← REPLACE your existing file completely
```

### `data/services.json`
Contains all services in **one consistent schema**, the same one
`category.js`/`service.js` already use:

- The 5 still-relevant old services from Module 1 (`pm-kisan`,
  `ayushman-bharat`, `gst`, `epfo`, `digilocker`), converted to the new schema.
- **`aadhaar-card`, `pan-card` and `passport` from your old file were
  dropped** — Module 3 already provides much richer, fully-correct versions
  of these exact same 3 slugs (with fees, timeline, FAQs, etc.). Keeping
  both would have created duplicate slugs, and `service.js` only ever finds
  the *first* match — silently hiding the better version.
- All 15 Identity Documents services from Module 3, with the field-name
  fixes described above.
- **Total: 20 services.**

### `assets/js/home.js`
Now fetches `services.json` **and** `categories.json` separately (matching
what `category.js`/`service.js` already do), computes each category's
service count live (instead of a hardcoded number that goes stale), and
uses `t()` / `getLang()` from `i18n-helper.js` instead of the old
snake_case field access.

### `assets/js/i18n-helper.js`
Now reads the real `"ss_lang"` key and listens for the real
`"ss:language-changed"` event that `core.js` fires — so `category.js`,
`service.js`, and `home.js` all correctly re-render when you flip the
language toggle, instead of being silently stuck.

## ⚠️ One thing to check yourself: script load order

`home.js` now calls `t()` and `getLang()`, which live in `i18n-helper.js`.
Open `index.html` and make sure the `<script>` tags are in this order
(i18n-helper **before** home.js, both **after** core.js):

```html
<script>window.SS_ROOT = "";</script>
<script src="assets/js/main.js"></script>        <!-- core.js -->
<script src="assets/js/i18n-helper.js"></script>  <!-- add this if missing -->
<script src="assets/js/home.js"></script>
```

If `i18n-helper.js` isn't already linked on `index.html` (only Module 2's
`category.html`/`service.html` may have had it), that's the one manual
addition needed — everything else is drop-in replacement.

## After replacing, verify

1. Open `index.html` → category grid and latest-updates grid should now
   populate.
2. Click the language toggle → both grids should switch language without
   a page reload.
3. Click into a category card → `category.html?cat=identity-documents`
   should list services.
4. Click into a service → `service.html?id=aadhaar-card` should show all
   sections (official links, apply online, fees, timeline, FAQs, etc.)

## Still untested: `category.js`

I haven't seen `assets/js/category.js` yet, so I can't 100% guarantee the
category listing page is bug-free — it was written in the same Module 2
batch as `service.js`, so it *should* already expect the camelCase schema
correctly, and the `i18n-helper.js` fix above should resolve its language
sync too. If `category.html` still misbehaves after this fix, send me
`category.js` and I'll do the same trace-and-fix on it.
