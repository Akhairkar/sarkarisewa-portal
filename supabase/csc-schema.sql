-- ============================================================================
-- SarkariSewa Portal — Module 17 Supabase Schema (CSC Centre Directory)
-- Run this ONCE in Supabase Dashboard → SQL Editor → New query → paste → Run
-- Run BEFORE supabase/csc-services-schema.sql and supabase/admin-policies.sql
-- (those two add extra columns/policies on top of the tables created here).
-- ============================================================================
-- This file was missing from the project — csc-services-schema.sql and the
-- csc-*.js files all assume these two tables already exist, but nothing in
-- the repo actually created them, so every query against "csc_centres"
-- fails and the public directory shows "Could not load CSC centres right
-- now." Running this script creates the tables the existing JS already
-- expects, so no other files need to change.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Table: csc_centres
-- One row per CSC (Common Service Centre) listing.
-- status: 'unclaimed' (owner hasn't claimed it yet, basic info only) |
--         'verified'  (owner claimed + approved, full card shown) |
--         'pending'   (new submission via add.html, awaiting review) |
--         'rejected'  (reviewed and declined — never shown publicly)
-- ----------------------------------------------------------------------------
create table if not exists csc_centres (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  address text not null,
  state text not null,
  district text,
  pincode text,
  lat double precision,
  lng double precision,
  phone text,
  whatsapp text,
  description text,
  services_offered text[],
  service_mode text,                      -- 'online' | 'offline' | 'both'
  owner_name text,
  owner_phone text,
  owner_email text,
  status text not null default 'pending', -- 'pending' | 'unclaimed' | 'verified' | 'rejected'
  created_at timestamptz not null default now(),
  constraint csc_centres_service_mode_check
    check (service_mode is null or service_mode in ('online', 'offline', 'both')),
  constraint csc_centres_status_check
    check (status in ('pending', 'unclaimed', 'verified', 'rejected'))
);

create index if not exists csc_centres_state_idx on csc_centres (state);
create index if not exists csc_centres_status_idx on csc_centres (status);

alter table csc_centres enable row level security;

-- Public directory + profile pages only ever request status in
-- ('unclaimed', 'verified') — this policy just backs that up at the
-- database level so pending/rejected rows can never leak to anon reads.
create policy "Public can read unclaimed and verified csc_centres"
  on csc_centres for select
  using (status in ('unclaimed', 'verified'));

-- csc-add.js always inserts with status: 'pending' — anon can never
-- self-publish as 'verified'.
create policy "Anyone can submit a new csc centre as pending"
  on csc_centres for insert
  with check (status = 'pending');

-- ----------------------------------------------------------------------------
-- Table: claims
-- A claim on an EXISTING (unclaimed) csc_centres row, submitted via
-- claim.html. Reviewed manually; approving one copies its details onto
-- the matching csc_centres row and flips that row to 'verified'.
-- ----------------------------------------------------------------------------
create table if not exists claims (
  id uuid primary key default gen_random_uuid(),
  csc_centre_id uuid not null references csc_centres (id) on delete cascade,
  owner_name text not null,
  owner_phone text not null,
  owner_email text,
  whatsapp text,
  description text,
  lat double precision,
  lng double precision,
  services_offered text[],
  service_mode text,
  status text not null default 'pending', -- 'pending' | 'approved' | 'rejected'
  created_at timestamptz not null default now(),
  constraint claims_service_mode_check
    check (service_mode is null or service_mode in ('online', 'offline', 'both')),
  constraint claims_status_check
    check (status in ('pending', 'approved', 'rejected'))
);

create index if not exists claims_csc_centre_id_idx on claims (csc_centre_id);

alter table claims enable row level security;

-- csc-claim.js always inserts with status: 'pending'. No public select
-- policy — claims contain the owner's phone/email, so only the admin
-- (via admin-policies.sql's authenticated policy) can read them back.
create policy "Anyone can submit a claim as pending"
  on claims for insert
  with check (status = 'pending');

-- ============================================================================
-- Run order for the CSC feature, start to finish:
--   1. supabase/csc-schema.sql          (this file — creates the tables)
--   2. supabase/csc-services-schema.sql (adds services_offered/service_mode
--                                        — safe to skip if already included
--                                        above, kept for existing installs)
--   3. supabase/admin-policies.sql      (lets the logged-in admin dashboard
--                                        see + approve pending/rejected rows)
--
-- After running this file, Table Editor → csc_centres / claims should show
-- up empty (0 rows) instead of erroring — that's expected. The directory
-- will show "No CSC centres listed yet" until you seed some rows or real
-- submissions come in, per MODULE17-NOTES.md.
-- ============================================================================
