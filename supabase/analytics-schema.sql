-- ============================================================================
-- SarkariSewa Portal — Visitor Analytics (Module 18)
-- page_views + active_sessions + RPC functions the admin dashboard's
-- "Analytics" tab calls directly.
-- Run this ONCE in Supabase Dashboard → SQL Editor → New query → paste → Run
--
-- IMPORTANT: column names here MUST match what assets/js/analytics-track.js
-- actually inserts (page_path, referrer_host, traffic_source, device_type,
-- session_id) — a previous attempt at this file guessed different column
-- names (path, referrer) without checking the real tracking script first,
-- which is exactly why every earlier run of "the analytics schema" failed
-- with variations of "column ... does not exist". This version was written
-- by reading analytics-track.js's actual .insert()/.upsert() calls, not by
-- guessing.
--
-- Safe to run repeatedly / on top of any partial previous attempt:
--   - ALTER TABLE ... ADD COLUMN IF NOT EXISTS reconciles the table shape
--     without dropping any data.
--   - Every function is DROP FUNCTION IF EXISTS'd before being recreated,
--     since Postgres refuses to CREATE OR REPLACE a function whose return
--     type changed (error 42P13).
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. page_views — one row per page load on the public site
-- ---------------------------------------------------------------------------
create table if not exists page_views (
  id uuid primary key default gen_random_uuid()
);

alter table page_views add column if not exists page_path text;
alter table page_views add column if not exists referrer_host text;
alter table page_views add column if not exists traffic_source text not null default 'direct';
alter table page_views add column if not exists device_type text not null default 'desktop';
alter table page_views add column if not exists session_id text;
alter table page_views add column if not exists created_at timestamptz not null default now();

update page_views set page_path = '(unknown)' where page_path is null;
alter table page_views alter column page_path set not null;

create index if not exists page_views_created_at_idx on page_views (created_at);
create index if not exists page_views_page_path_idx on page_views (page_path);
create index if not exists page_views_session_idx on page_views (session_id);

alter table page_views enable row level security;

-- The public site can insert its own page view, but can never read any
-- back — and crucially, a row can only be inserted while there is NO
-- logged-in Supabase auth session on the request (matches the client-side
-- check in analytics-track.js: it skips entirely if auth.getSession() has
-- a session). This is what makes "admin's own visits are never counted"
-- true even if the admin forgets to log out while browsing the public site.
drop policy if exists "Anyone can log a page view" on page_views;
drop policy if exists "Only anonymous visits are logged" on page_views;
create policy "Only anonymous visits are logged"
  on page_views for insert
  with check (auth.role() = 'anon');

drop policy if exists "Authenticated admin can read page_views" on page_views;
create policy "Authenticated admin can read page_views"
  on page_views for select
  using (auth.role() = 'authenticated');

-- ---------------------------------------------------------------------------
-- 2. active_sessions — upserted every ~45s while a visitor's tab is open
--    (see HEARTBEAT_MS in analytics-track.js), powers "Online now"
--    (last_seen within 5 minutes)
-- ---------------------------------------------------------------------------
create table if not exists active_sessions (
  session_id text primary key
);

alter table active_sessions add column if not exists page_path text;
alter table active_sessions add column if not exists last_seen timestamptz not null default now();

alter table active_sessions enable row level security;

drop policy if exists "Anonymous visitors can upsert their own session" on active_sessions;
create policy "Anonymous visitors can upsert their own session"
  on active_sessions for insert
  with check (auth.role() = 'anon');

drop policy if exists "Anonymous visitors can update their own session" on active_sessions;
create policy "Anonymous visitors can update their own session"
  on active_sessions for update
  using (auth.role() = 'anon')
  with check (auth.role() = 'anon');

drop policy if exists "Authenticated admin can read active_sessions" on active_sessions;
create policy "Authenticated admin can read active_sessions"
  on active_sessions for select
  using (auth.role() = 'authenticated');

-- ---------------------------------------------------------------------------
-- 3. RPC functions the dashboard's Analytics tab calls directly
-- ---------------------------------------------------------------------------
drop function if exists analytics_summary();
create function analytics_summary()
returns table (total_visitors bigint, today_visitors bigint, online_users bigint, total_views bigint)
language sql
security definer
set search_path = public
as $$
  select
    (select count(distinct session_id) from page_views),
    (select count(distinct session_id) from page_views where created_at >= date_trunc('day', now())),
    (select count(*) from active_sessions where last_seen >= now() - interval '5 minutes'),
    (select count(*) from page_views);
$$;

drop function if exists analytics_top_pages(int);
create function analytics_top_pages(limit_count int default 10)
returns table (page_path text, views bigint)
language sql
security definer
set search_path = public
as $$
  select page_path, count(*) as views
  from page_views
  group by page_path
  order by views desc
  limit limit_count;
$$;

drop function if exists analytics_traffic_sources();
create function analytics_traffic_sources()
returns table (traffic_source text, views bigint)
language sql
security definer
set search_path = public
as $$
  select traffic_source, count(*) as views
  from page_views
  group by traffic_source
  order by views desc;
$$;

drop function if exists analytics_device_types();
create function analytics_device_types()
returns table (device_type text, views bigint)
language sql
security definer
set search_path = public
as $$
  select device_type, count(*) as views
  from page_views
  group by device_type
  order by views desc;
$$;

drop function if exists analytics_daily_views(int);
create function analytics_daily_views(days_count int default 30)
returns table (day date, views bigint)
language sql
security definer
set search_path = public
as $$
  select date(created_at) as day, count(*) as views
  from page_views
  where created_at >= now() - (days_count || ' days')::interval
  group by day
  order by day;
$$;

revoke all on function analytics_summary() from public, anon;
revoke all on function analytics_top_pages(int) from public, anon;
revoke all on function analytics_traffic_sources() from public, anon;
revoke all on function analytics_device_types() from public, anon;
revoke all on function analytics_daily_views(int) from public, anon;
grant execute on function analytics_summary() to authenticated;
grant execute on function analytics_top_pages(int) to authenticated;
grant execute on function analytics_traffic_sources() to authenticated;
grant execute on function analytics_device_types() to authenticated;
grant execute on function analytics_daily_views(int) to authenticated;

-- ============================================================================
-- After running this, the dashboard's "Analytics" tab starts showing real
-- numbers as soon as assets/js/analytics-track.js (already auto-loaded on
-- every page by main.js — nothing to wire up) sends traffic.
-- ============================================================================
