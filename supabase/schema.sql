-- ============================================================================
-- SarkariSewa Portal — Module 14 Supabase Schema
-- Run this once in Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================================
-- Covers: comments (Module 15) + subscribers (Module 16).
-- CSC tables (owners, csc_centres, claims, leads) come later in Module 17+
-- and will be a separate SQL file added at that point.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Table: comments
-- One row per comment on a service page (Module 15).
-- ----------------------------------------------------------------------------
create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  service_id text not null,               -- matches services.json's "id" field
  name text not null,
  message text not null,
  created_at timestamptz not null default now(),
  status text not null default 'visible'  -- 'visible' | 'flagged' | 'hidden'
);

create index if not exists comments_service_id_idx on comments (service_id);

alter table comments enable row level security;

-- Anyone can read visible comments (public site, no login required)
create policy "Public can read visible comments"
  on comments for select
  using (status = 'visible');

-- Anyone can post a new comment (starts as 'visible'; add moderation later
-- if spam becomes a problem — e.g. require a Supabase Edge Function check
-- before insert, or switch default status to 'flagged' for review first)
create policy "Anyone can insert a comment"
  on comments for insert
  with check (status = 'visible' and length(message) <= 2000 and length(name) <= 80);

-- ----------------------------------------------------------------------------
-- Table: subscribers
-- Email/WhatsApp opt-in for update notifications (Module 16).
-- ----------------------------------------------------------------------------
create table if not exists subscribers (
  id uuid primary key default gen_random_uuid(),
  email text,
  phone text,
  whatsapp_opted_in boolean not null default false,
  service_id text,                        -- null = general site updates, not tied to one service
  created_at timestamptz not null default now(),
  constraint at_least_one_contact check (email is not null or phone is not null)
);

create index if not exists subscribers_service_id_idx on subscribers (service_id);

alter table subscribers enable row level security;

-- No public read policy — subscriber contact info is never exposed to the
-- public site. Only insert is allowed from the browser.
create policy "Anyone can subscribe"
  on subscribers for insert
  with check (true);

-- ============================================================================
-- After running this:
-- 1. Go to Table Editor in the Supabase dashboard — you should see both
--    tables listed with the columns above.
-- 2. Go to Settings → API and copy your Project URL + anon public key —
--    these go into assets/js/supabase-client.js (see that file's comments).
-- ============================================================================
