-- ============================================================================
-- SarkariSewa Portal — Admin access policies
-- Run this AFTER supabase/schema.sql (adds to it, doesn't replace it).
-- Run once in Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================================
-- Adds admin-only capabilities on top of the public policies already in
-- schema.sql: authenticated users (i.e. someone logged into the admin
-- panel via Supabase Auth) can see ALL comments regardless of status
-- and update their status (moderate), and can view the subscriber list.
-- Public/anonymous visitors still cannot do any of this — only signed-in
-- admin users can.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- comments: admin can read every comment (not just 'visible' ones) and
-- change status (e.g. to hide spam)
-- ----------------------------------------------------------------------------
create policy "Authenticated admin can read all comments"
  on comments for select
  using (auth.role() = 'authenticated');

create policy "Authenticated admin can update comments"
  on comments for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Authenticated admin can delete comments"
  on comments for delete
  using (auth.role() = 'authenticated');

-- ----------------------------------------------------------------------------
-- subscribers: admin can read the list (public site still cannot —
-- there's still no public select policy on this table)
-- ----------------------------------------------------------------------------
create policy "Authenticated admin can read subscribers"
  on subscribers for select
  using (auth.role() = 'authenticated');

-- ============================================================================
-- After running this, the admin dashboard (once you're logged in via
-- Supabase Auth) will be able to see all comments/subscribers, but a
-- normal site visitor's browser session still can't — this is enforced
-- by Postgres itself (Row-Level Security), not just by hiding UI buttons.
-- ============================================================================
