# Module 10 — Final QA & Launch Prep (DONE)

## Built

1. **`404.html`** — real page, not just a placeholder. GitHub Pages
   auto-serves a root-level `404.html` for any unmatched URL, so this
   works without extra config once the repo is published. Has `noindex`,
   links back to Home and Search, and a commented hook for the Module
   10.5 GA4 "page not found" event so broken-link tracking can be wired
   in later without restructuring this page.

2. **Skip-to-content link** — added to `partials/header.html` (so it's
   site-wide automatically), targets `#main-content`. `main.js` now
   auto-tags whichever `<main>` element exists on the current page with
   `id="main-content"` on load, so no per-page HTML edits were needed.
   Deliberately styled with a **fixed navy background**, not
   `var(--color-primary)` — using that variable would have created a
   *sixth* instance of the dark-mode invisible-text bug already flagged
   for Module 11, so this was written to avoid the bug rather than fixed
   after the fact.

3. **`assets/css/module10.css`** — 404 page styling.

4. **`audit-site.py`** (repo root) — a permanent, reusable QA script.
   Run before every future deploy:
   ```
   pip install beautifulsoup4 lxml
   python3 audit-site.py
   ```
   Checks: broken local links/assets, `data-i18n` key coverage against
   `lang.json`, JSON validity of all data files, and dangling
   `relatedServices`/`relatedServiceId` cross-references (the exact bug
   class that caused problems in Module 7). Exits non-zero on failure,
   so it can be wired into CI later if wanted.

5. **Content accuracy fix (real bug found):** the homepage claimed
   **"100+" services** in three places — `index.html`'s meta description,
   its `og:description`, and the `hero_sub` i18n key (both EN and HI) —
   while `about.html` and `search.html` correctly said "80+" (the actual
   count in `services.json`). All three now say **80+**, consistent with
   the rest of the site.

6. **SEO fix:** homepage meta description was 163 characters (over
   Google's ~160-char display limit before truncation). Trimmed to 132
   characters, same information, no different phone/meaning.

## Verified (audit-site.py output)
- 0 broken links/assets
- 0 pages with missing i18n keys (in either language)
- All 4 core JSON files parse correctly
- 0 dangling `relatedServices`/`relatedServiceId` references

## Explicitly deferred to Module 11 (per your instruction — Module 11 happens before publish, not after)
- Favicon / manifest.json (still missing — flagged, not fixed here)
- Dark mode search-bar/button-text bug (5 existing instances, unfixed)
- `og:image` for social previews
- Ad-space reservation
- Homepage trust stats

## Not fully done in this module (needs live/manual verification, not something code can check)
- Mobile responsiveness: layout already uses CSS Grid `auto-fill`/`minmax`
  throughout (service/blog/category grids), which is inherently
  responsive without needing many breakpoints — but an actual on-device
  pass is still worth doing once the site is live.
- Full Lighthouse run — best done against the live/published URL rather
  than a local file, since some scores (especially performance) depend
  on real network conditions.
- Final helpline-number/fee accuracy — the "100+/80+" mismatch was the
  one factual error `audit-site.py`-style tooling could catch; verifying
  every phone number/fee against the source department is manual work,
  not something an automated pass finds.

## Addendum — real bug found after publish check (state-wise-services.html)
A screenshot of the **live, already-published site**
(`akhairkar.github.io/sarkarisewa-portal`) surfaced a genuine bug the
link/i18n audit couldn't catch, because it wasn't a broken link or
missing translation — it was a **dead interactive element**:

- The 35 state/UT buttons on `support/state-wise-services.html` were
  rendered as plain `<div class="state-card">` elements — visually
  identical to buttons (border, background, padding) but with **no
  click handler, no `href`, nothing** wired to them at all. Clicking any
  state did literally nothing, which is exactly the "click karne pe kuch
  nahi khulta" behaviour reported.
- **Fixed:** state cards are now real `<button>` elements. Clicking one
  marks it visually selected, shows a "Selected state: X" label, and
  smooth-scrolls down to the "Services that vary by state" list below —
  matching what the page's own intro text already told users to expect.
- `assets/css/module7.css` — `.state-card` given proper button-reset
  styling, hover/focus/active states, and a `.state-card--active`
  selected style.
- 1 new `lang.json` key (`state_selected_prefix`) — total now 205.
- This is the kind of bug that only shows up by actually clicking
  through the live site, not from static link/i18n auditing — worth
  keeping in mind for Module 11's design pass too.
