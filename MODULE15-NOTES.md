# Module 15 — Comments / Q&A on Service Pages (DONE)

## Built
- **Comments section** added to every service page (`service/service.html`),
  below "Related Services": a post form (name + message) and a list of
  existing comments, newest first.
- **`assets/js/comments.js`** — loads/posts comments via the shared
  `getSupabaseClient()` from `supabase-client.js` (Module 14), reading/
  writing the `comments` table from `supabase/schema.sql`.
- **`assets/css/module15.css`** — comment form + comment list styling.
- **16 new `lang.json` keys** for all comment UI text (total now 253).

## How it works
- Each comment is tied to a `service_id` (the `id`/`slug` from the URL's
  `?id=` param — same identifier `service.js` already uses).
- Only `status = 'visible'` comments are fetched and shown (matches the
  RLS `select` policy from Module 14's schema).
- New comments are inserted with `status: 'visible'` by default — there's
  no moderation queue yet. If spam becomes a problem, the simplest fix is
  changing the default insert status to `'flagged'` in `comments.js` and
  adding an admin review view (a natural fit for a future Module 14.5/17
  admin-dashboard update), without needing to touch the database schema.
- Name is capped at 80 characters, message at 2000 — enforced both in the
  browser (`maxlength`) and server-side by the RLS insert policy, so a
  request that bypasses the UI still can't insert an oversized row.
- All user-submitted content (`name`, `message`) is HTML-escaped before
  being inserted into the page, preventing stored XSS via the comment form.
- If Supabase isn't configured (shouldn't happen now, but kept as a
  graceful fallback), the section shows a "not available" message and
  hides the form, rather than showing a broken UI or throwing errors.

## Verified before shipping
- `audit-site.py`: 0 issues
- All JS files pass `node -c`
- Insert payload in `comments.js` matches the RLS `with check` constraint
  in `supabase/schema.sql` exactly (status/length limits), so posting
  won't silently fail against the database's own rules

## Not done in this pass
- No moderation/admin UI for hiding inappropate comments — currently
  would need to be done directly in Supabase's Table Editor (find the
  row, change `status` to `'hidden'` or delete it). A dashboard view for
  this is a reasonable addition whenever the admin panel gets its next
  update.
- No reply/threading — flat list only, matching the scope discussed
  (engagement + freshness signal + long-tail keyword capture), not a
  full forum system.
