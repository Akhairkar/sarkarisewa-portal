-- SarkariSewa India — Security Hardening Migration
-- Run once in Supabase SQL Editor.
-- IMPORTANT: before running, set your own Supabase Auth user's app_metadata.role = 'admin'
-- in Supabase Dashboard (Authentication -> Users -> user -> metadata), or use the
-- SQL/API mechanism provided by your auth setup. Do NOT use user_metadata for this.
--
-- This migration closes the critical flaw where ANY authenticated user received
-- admin-level read/write access.

-- Helper: admin means a JWT app_metadata role explicitly set to "admin".
-- app_metadata is server-controlled; normal users must not be able to change it.
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

-- comments
drop policy if exists "Authenticated admin can read all comments" on public.comments;
drop policy if exists "Authenticated admin can update comments" on public.comments;
drop policy if exists "Authenticated admin can delete comments" on public.comments;
create policy "Admin can read all comments" on public.comments for select
  using (public.is_admin());
create policy "Admin can update comments" on public.comments for update
  using (public.is_admin()) with check (public.is_admin());
create policy "Admin can delete comments" on public.comments for delete
  using (public.is_admin());

-- subscribers
drop policy if exists "Authenticated admin can read subscribers" on public.subscribers;
create policy "Admin can read subscribers" on public.subscribers for select
  using (public.is_admin());

-- CSC centres
drop policy if exists "Allow authenticated full access to CSC centres" on public.csc_centres;
create policy "Admin full access to CSC centres" on public.csc_centres for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- CSC claims
drop policy if exists "Allow admin select on csc_claims" on public.csc_claims;
drop policy if exists "Allow admin update on csc_claims" on public.csc_claims;
drop policy if exists "Allow admin delete on csc_claims" on public.csc_claims;
create policy "Admin select csc_claims" on public.csc_claims for select
  to authenticated using (public.is_admin());
create policy "Admin update csc_claims" on public.csc_claims for update
  to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "Admin delete csc_claims" on public.csc_claims for delete
  to authenticated using (public.is_admin());

-- Content management tables
drop policy if exists "Authenticated admin can read all blog_posts" on public.blog_posts;
drop policy if exists "Authenticated admin can insert blog_posts" on public.blog_posts;
drop policy if exists "Authenticated admin can update blog_posts" on public.blog_posts;
drop policy if exists "Authenticated admin can delete blog_posts" on public.blog_posts;
create policy "Admin read all blog_posts" on public.blog_posts for select
  using (public.is_admin());
create policy "Admin insert blog_posts" on public.blog_posts for insert
  with check (public.is_admin());
create policy "Admin update blog_posts" on public.blog_posts for update
  using (public.is_admin()) with check (public.is_admin());
create policy "Admin delete blog_posts" on public.blog_posts for delete
  using (public.is_admin());

drop policy if exists "Authenticated admin can read all job_alerts" on public.job_alerts;
drop policy if exists "Authenticated admin can insert job_alerts" on public.job_alerts;
drop policy if exists "Authenticated admin can update job_alerts" on public.job_alerts;
drop policy if exists "Authenticated admin can delete job_alerts" on public.job_alerts;
create policy "Admin read all job_alerts" on public.job_alerts for select
  using (public.is_admin());
create policy "Admin insert job_alerts" on public.job_alerts for insert
  with check (public.is_admin());
create policy "Admin update job_alerts" on public.job_alerts for update
  using (public.is_admin()) with check (public.is_admin());
create policy "Admin delete job_alerts" on public.job_alerts for delete
  using (public.is_admin());

drop policy if exists "Authenticated admin can read all exam_calendar" on public.exam_calendar;
drop policy if exists "Authenticated admin can insert exam_calendar" on public.exam_calendar;
drop policy if exists "Authenticated admin can update exam_calendar" on public.exam_calendar;
drop policy if exists "Authenticated admin can delete exam_calendar" on public.exam_calendar;
create policy "Admin read all exam_calendar" on public.exam_calendar for select
  using (public.is_admin());
create policy "Admin insert exam_calendar" on public.exam_calendar for insert
  with check (public.is_admin());
create policy "Admin update exam_calendar" on public.exam_calendar for update
  using (public.is_admin()) with check (public.is_admin());
create policy "Admin delete exam_calendar" on public.exam_calendar for delete
  using (public.is_admin());

drop policy if exists "Authenticated admin can read all services" on public.services;
drop policy if exists "Authenticated admin can insert services" on public.services;
drop policy if exists "Authenticated admin can update services" on public.services;
drop policy if exists "Authenticated admin can delete services" on public.services;
create policy "Admin read all services" on public.services for select
  using (public.is_admin());
create policy "Admin insert services" on public.services for insert
  with check (public.is_admin());
create policy "Admin update services" on public.services for update
  using (public.is_admin()) with check (public.is_admin());
create policy "Admin delete services" on public.services for delete
  using (public.is_admin());

-- Analytics: authenticated users must not be able to read visitor analytics.
drop policy if exists "Authenticated admin can read page_views" on public.page_views;
create policy "Admin can read page_views" on public.page_views for select
  using (public.is_admin());
drop policy if exists "Authenticated admin can read active_sessions" on public.active_sessions;
create policy "Admin can read active_sessions" on public.active_sessions for select
  using (public.is_admin());

revoke all on function public.analytics_summary() from authenticated;
revoke all on function public.analytics_top_pages(int) from authenticated;
revoke all on function public.analytics_traffic_sources() from authenticated;
revoke all on function public.analytics_device_types() from authenticated;
revoke all on function public.analytics_daily_views(int) from authenticated;
grant execute on function public.analytics_summary() to authenticated;
grant execute on function public.analytics_top_pages(int) to authenticated;
grant execute on function public.analytics_traffic_sources() to authenticated;
grant execute on function public.analytics_device_types() to authenticated;
grant execute on function public.analytics_daily_views(int) to authenticated;

-- Final note: public/anon insert/read policies are intentionally retained.
-- This migration only replaces authenticated-admin access with explicit admin access.
