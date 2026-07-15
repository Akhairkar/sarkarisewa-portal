# Category Page Fix — 2 issues found

## Issue 1: `category.js` was missing its entire top half (main bug)

Confirmed from your screenshot: GitHub shows the file's **line 1** is
`servicesInCategory = services.filter(...)`. There's no wrapper function, no
`ROOT`/`catSlug` setup, no DOM element lookups, and no `fetch()` calls
anywhere above it. The variable `services` was never defined, so the script
threw an error and stopped executing the instant the page loaded — which is
why only the static "Services in this category" heading (from
`category.html` itself) showed up, with nothing else rendering at all.

**Fix:** `assets/js/category.js` in this zip is a full rebuild, written to
match `service.js`'s proven fetch/normalize pattern, and using the exact
element IDs from your `category.html`:
- `#breadcrumb`
- `#category-hero`
- `#service-grid` (note: your HTML uses `service-grid`, not `category-grid`
  — the fix uses the correct one)

**Replace your existing `assets/js/category.js` completely with this file.**

## Issue 2: header/footer won't load on `category.html` (separate bug, found along the way)

`category.html` has:
```html
<div id="header-placeholder"></div>
...
<div id="footer-placeholder"></div>
```

But `core.js` (`main.js`) only knows how to inject into these exact IDs:
```js
includePartial("#site-header", ROOT + "partials/header.html")
includePartial("#site-footer", ROOT + "partials/footer.html")
```

`#header-placeholder` and `#site-header` don't match, so on this page the
header/footer partials silently fail to load (that's also why your
screenshot shows no nav bar at the top of the category page).

**Fix — 2 small manual edits in `category/category.html`** (not included as
a full-file replacement since it's just two `id` attributes):

```html
<!-- change this -->
<div id="header-placeholder"></div>
<!-- to this -->
<div id="site-header"></div>
```
```html
<!-- change this -->
<div id="footer-placeholder"></div>
<!-- to this -->
<div id="site-footer"></div>
```

**Also check `service/service.html`** for the same `header-placeholder` /
`footer-placeholder` vs `site-header` / `site-footer` mismatch — it was
likely written by the same template pass, so it may have the identical
issue. If you see a missing nav bar on service pages too, apply the same
2-line fix there.

## After applying both fixes, verify

1. `category.html?cat=identity-documents` → header/nav should now appear,
   and the 15 Identity Documents service cards should render below the hero.
2. Toggle language → hero, breadcrumb and grid should all switch instantly.
3. Try an invalid category, e.g. `category.html?cat=doesnotexist` → should
   show the "Category not found" message instead of a blank/broken page.
