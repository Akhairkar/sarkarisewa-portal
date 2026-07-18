# Module 9 — Blog System (DONE)

## Built

1. **`data/blog-posts.json`** — content source, 5 seed posts, bilingual
   (EN/HI). Each post: `slug`, `title`, `excerpt`, `datePublished`,
   `category` (optional, reuses existing category slugs), `relatedServiceId`
   (optional, cross-links to an existing service in `services.json`),
   `tags`, `body` (HTML string per language).
   - All 5 `relatedServiceId` values were checked against `services.json`'s
     actual ids before shipping — Module 7 had 9 dangling
     `relatedServices` references from a similar mistake, so this was
     verified directly rather than assumed correct.

2. **`blog/index.html` + `assets/js/blog.js`** — post list, newest first,
   reusing the same `page-hero`/breadcrumb pattern as `support/index.html`.

3. **`blog/post.html` + `assets/js/blog-post.js`** — single post template
   (`post.html?slug=...`), following the same structure as `service.js`:
   - Dynamic `<title>`, meta description, `og:*` tags, canonical link
   - `BlogPosting` + `BreadcrumbList` JSON-LD, injected per post (same
     pattern as the `GovernmentService`/`ItemList` schema added in Module 8)
   - Renders the related service (if any) as a `.service-card` link back
     into the existing service pages

4. **`assets/css/module9.css`** — blog card grid, single-post typography.
   Load order: `style.css` → `module2.css` → `module7.css` → `module9.css`.

5. **Header nav** — "Blog" link added to both desktop and mobile nav in
   `partials/header.html`, right after "Support".

6. **Homepage "ब्लॉग से / From the Blog" section** — added to `index.html`
   between "नवीनतम अपडेट" and "यह पोर्टल क्यों", showing the latest 3 posts.
   Rendered by `home.js` (now also fetches `blog-posts.json`).

7. **`generate-sitemap.py`** — updated to emit `/blog/index.html` and one
   URL per post from `blog-posts.json`. Re-running it now produces **105
   URLs** (was 99 before this module).

8. **12 new `lang.json` keys** (`nav_blog`, `blog_title`, `blog_intro`,
   `blog_read_more`, `blog_back_to_blog`, `blog_published_on`,
   `blog_related_service`, `blog_empty`, `blog_not_found_title`,
   `blog_not_found_desc`, `homepage_blog_title`,
   `homepage_blog_view_all`) — total is now 199.

## Verified before shipping
- Full link/asset audit — zero broken links
- Every `data-i18n` key used across the whole site resolves in `lang.json`
- All JSON files parse; all new/changed JS files pass `node -c`
- Every `relatedServiceId` in `blog-posts.json` matches a real `services.json` id
