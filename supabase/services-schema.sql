-- ============================================================================
-- services-schema.sql — Session 1 of the Services Bulk-Import feature.
-- Run this ONCE in Supabase Dashboard → SQL Editor.
-- ============================================================================
-- The existing 106 services in data/services.json are NOT touched by this
-- — they keep working exactly as before. This table is for NEW services
-- added later from the admin dashboard's upcoming "Services" tab (Session
-- 2). Every page that lists or looks up services (home, category, search,
-- service detail, find-services wizard, state/helpline support pages,
-- related-service links on blog posts, and the sitemap) now merges
-- data/services.json with this table via assets/js/services-data.js, so a
-- new service added here shows up everywhere automatically — same as the
-- JSON ones — with no visible difference to a visitor.
-- ============================================================================

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null,
  name_en text not null,
  name_hi text,
  short_description_en text,
  short_description_hi text,
  official_links jsonb default '[]'::jsonb,       -- [{"label":{"en":"..","hi":".."},"url":".."}]
  helpline text,
  date_added date default current_date,
  eligibility jsonb default '[]'::jsonb,           -- [{"en":"..","hi":".."}]
  documents_required jsonb default '[]'::jsonb,    -- [{"en":"..","hi":".."}]
  faqs jsonb default '[]'::jsonb,                  -- [{"q":{"en":"..","hi":".."},"a":{"en":"..","hi":".."}}]
  related_services jsonb default '[]'::jsonb,      -- ["slug-1","slug-2"] — can point at JSON or DB services
  status text not null default 'draft',            -- 'draft' | 'published'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint services_status_check check (status in ('draft', 'published'))
);

create index if not exists services_status_idx on services (status);
create index if not exists services_category_idx on services (category);
create index if not exists services_slug_idx on services (slug);

alter table services enable row level security;

drop policy if exists "Public can read published services" on services;
create policy "Public can read published services"
  on services for select
  using (status = 'published');

drop policy if exists "Authenticated admin can read all services" on services;
create policy "Authenticated admin can read all services"
  on services for select
  using (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can insert services" on services;
create policy "Authenticated admin can insert services"
  on services for insert
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can update services" on services;
create policy "Authenticated admin can update services"
  on services for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can delete services" on services;
create policy "Authenticated admin can delete services"
  on services for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- After this + Session 1's site-wide code is deployed, you can test it by
-- inserting one row by hand here and setting status = 'published' — it
-- should immediately show up on the category page, search, sitemap, etc.
-- The proper add-in-bulk admin UI for this table comes in Session 2.
-- ============================================================================
