-- ============================================================================
-- SarkariSewa Portal — Module 17b: CSC services/mode fields + admin approval
-- Run this AFTER supabase/csc-schema.sql (adds to it, doesn't replace it).
-- Run once in Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================================
-- Adds:
--   1. services_offered + service_mode columns (what a centre does, and
--      whether online/offline/both) to csc_centres and claims.
--   2. Admin RLS policies (same "auth.role() = 'authenticated'" pattern as
--      supabase/admin-policies.sql) so the logged-in admin dashboard can see
--      pending rows and approve/reject them with a button — not just you
--      manually editing rows in the Table Editor anymore.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. New columns
-- ----------------------------------------------------------------------------
alter table csc_centres add column if not exists services_offered text[];
alter table csc_centres add column if not exists service_mode text; -- 'online' | 'offline' | 'both'
alter table csc_centres add constraint csc_centres_service_mode_check
  check (service_mode is null or service_mode in ('online', 'offline', 'both'));

alter table claims add column if not exists services_offered text[];
alter table claims add column if not exists service_mode text;
alter table claims add constraint claims_service_mode_check
  check (service_mode is null or service_mode in ('online', 'offline', 'both'));

-- ----------------------------------------------------------------------------
-- 2. Admin policies — lets the admin dashboard (Supabase Auth login) see
--    pending/rejected rows too (public site still only sees
--    unclaimed/verified, unchanged from csc-schema.sql) and update status.
-- ----------------------------------------------------------------------------
create policy "Authenticated admin can read all csc_centres"
  on csc_centres for select
  using (auth.role() = 'authenticated');

create policy "Authenticated admin can update csc_centres"
  on csc_centres for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "Authenticated admin can read all claims"
  on claims for select
  using (auth.role() = 'authenticated');

create policy "Authenticated admin can update claims"
  on claims for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ============================================================================
-- After running this, log into /admin/dashboard.html — you'll see a new
-- "CSC Listings" tab with two lists:
--   - "New centre submissions" (csc_centres rows with status = 'pending')
--     — a Verify button just flips that row's status to 'verified'.
--   - "Claims on existing centres" (claims rows with status = 'pending')
--     — a Verify button copies the claim's details onto the matching
--       csc_centres row, sets that row to 'verified', and marks the claim
--       'approved'. This happens automatically now — you no longer need to
--       manually copy fields between tables in the Table Editor.
-- Both lists also have a Reject button (sets status = 'rejected' — hidden
-- from the public site, kept in the database for your records).
-- ============================================================================
