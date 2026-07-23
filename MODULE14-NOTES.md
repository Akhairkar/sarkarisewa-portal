# Module 14 — Backend Foundation (Supabase) — IN PROGRESS

## What's built and ready
1. **`supabase/schema.sql`** — SQL schema for `comments` (Module 15) and
   `subscribers` (Module 16) tables, with Row-Level Security policies:
   - `comments`: public can read `status = 'visible'` rows; anyone can
     insert a new comment (capped at 2000 chars message / 80 chars name)
   - `subscribers`: insert-only from the public site — contact info is
     never readable from the browser, only writable
2. **`assets/js/supabase-client.js`** — a lazy-loading connection wrapper.
   Loads the Supabase JS SDK from a CDN only when actually needed (so
   pages that don't use the backend pay zero extra cost), and exposes
   `getSupabaseClient()` for Module 15/16 code to call.

## What you need to do (can't be done from this sandbox — no internet access here)
1. Create a free Supabase account + project at supabase.com (steps given
   in chat — name, region, DB password)
2. Copy your **Project URL** and **anon public key** from
   Settings → API
3. Paste `supabase/schema.sql`'s contents into the Supabase SQL Editor
   and run it once — creates both tables with RLS already configured
4. Send me the Project URL + anon key, and I'll fill them into
   `assets/js/supabase-client.js` (same pattern as the GA4 Measurement
   ID in Module 10.5 — replacing two placeholder constants)

## Why Supabase (recap from planning)
Relational data (comments ↔ service, subscriber ↔ service), predictable
flat pricing, Row-Level Security for clean per-row access control, no
vendor lock-in (standard Postgres). Full reasoning in `PROJECT-ROADMAP.md`.

## Not yet done
- Actual project connection (waiting on your Project URL + anon key)
- Module 15 (comments UI on service pages) and Module 16 (subscribe
  form) — both build on top of this foundation once it's connected
- CSC-specific tables (owners, csc_centres, claims, leads) — deferred to
  Module 17+ as planned, will be a separate SQL file added at that point
