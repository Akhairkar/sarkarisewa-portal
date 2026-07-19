# Module 11 — Design & Branding Fixes (DONE)

## 1. Dark-mode invisible-text bug — systemic fix
Root cause: `--color-primary` was overloaded — used both as heading/text
color (intentionally flips to near-white in dark mode) **and** as a solid
button background (paired with white text). Fixed by introducing three
new fixed tokens that never flip with theme:
```
--color-brand: #10243E        /* solid navy button background */
--color-brand-text: #FFFFFF   /* text on brand backgrounds */
--color-brand-hover: #1C3A5E  /* hover state background */
```
**8 instances found and fixed in total** (5 originally flagged in the
roadmap + 3 more found during this pass):
- `.search-form button` + its `:hover` state
- `.btn-primary` + its `:hover` state
- `.admin-card button` + its `:hover` state
- RTI guide step-number badge (module7.css)
- `.chip--active` filter chip on search.html (module8.css)
- `.mobile-nav` background (newly found — same bug, white nav-link text
  on a background that went near-white in dark mode)
- `.btn--primary` (Apply/Start Application CTA on service pages) — a
  related but distinct contrast issue: white text on the *saffron*
  accent, which is lighter in dark mode than light mode. Fixed by
  switching to navy text on saffron, which reads well in both themes
  rather than chasing the flipping accent color.

Also fixed the **hero search bar blending into its own section** in dark
mode: `.hero` and `.search-form` both used `--color-surface`. `.hero` now
uses `--color-bg` (matches the page, like every other section) so the
search-form card visibly stands out on top of it — the same
surface-vs-bg pattern already used correctly everywhere else on the
site — plus a stronger 2px border and shadow for extra visibility.

## 2. Favicon & app icons
Generated programmatically (`gen_favicon.py`, not checked into the repo —
one-off script) to exactly match the existing header brand mark: tricolor
(saffron/white/green) rounded square with a navy serif "S".
- `favicon.ico` (16/32/48 multi-size) — at repo root for the implicit
  browser fetch convention
- `assets/img/favicon-16.png`, `favicon-32.png`, `favicon-48.png`
- `assets/img/apple-touch-icon.png` (180×180)
- `assets/img/android-chrome-192.png`, `android-chrome-512.png`
- `manifest.json` (repo root) — PWA-ready, references the two Android icons
- Wired into all 20 HTML pages (including admin) via a small script that
  inserted the `<link>`/`<meta>` block right after each page's viewport
  meta tag, with the correct `../` prefix for subfolder pages.

## 3. Social share image (`og:image`)
`assets/img/og-image.png` (1200×630, standard OG size) — generated to
match the brand: navy background with a subtle gradient, the tricolor
rule at the top (site's own signature element), the brand mark + site
name, a headline, and the same trust-stat numbers now on the homepage.
`<meta property="og:image">` + `<meta name="twitter:card">` added to
every page (same script pass as the favicon wiring).

## 4. Ad-space reservation
`.ad-slot` — a fixed-height placeholder (250px desktop / 100px mobile)
with a dashed border and an "Advertisement" label, so real ads (a later
module) drop in without causing layout shift (Core Web Vitals). Added to:
- Homepage — between "Latest Updates" and "From the Blog"
- Category pages — after the service grid
- Service pages — between the main content sections and "Related Services"

## 5. Homepage trust stats
New strip directly under the hero, on a solid navy (`--color-brand`)
background: **80+ Services · 6 Categories · EN/हिं Bilingual · Always
free to use**. Reinforces credibility for new visitors and — later —
for CSC owners deciding whether to trust the platform enough to claim a
listing.

## 6. "Latest Updates" — real fix (was mislabeled, not actually "latest")
- Added a `dateAdded` field to **all 80 services** in `services.json`
  (previously didn't exist at all — the section just showed the last 6
  array entries, which was arbitrary, not actually "latest" by any
  criterion). Dates spread across the site's real build timeline
  (Nov 2025 → Jul 2026, matching array/module order).
- `home.js` now sorts by real `dateAdded`, shows **12** (was 6), and caps
  at 2 services per category on the first pass so one recently-touched
  category can't dominate the section — remaining slots fill from the
  rest by recency.
- Added a **"View all 80+ services →"** link under the grid, pointing to
  `search.html`, so the homepage doesn't need to grow indefinitely to
  satisfy people who want to browse everything.

## Verified before shipping
- `audit-site.py`: 0 broken links/assets, 0 i18n gaps, all JSON valid, no
  dangling cross-references
- All modified/new JS passes `node -c`
- Manually re-swept every remaining `color: #fff` / white-text rule in
  every CSS file to confirm none pair with a theme-flipping background —
  this is how the 3 extra bugs (hover states + mobile-nav) were found
  beyond the 5 originally logged in the roadmap
