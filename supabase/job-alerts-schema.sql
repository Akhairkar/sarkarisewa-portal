-- ============================================================================
-- SarkariSewa Portal — Job Alerts table (structured govt vacancy alerts,
-- managed live from the admin dashboard's "Job Alerts" tab)
-- Run this ONCE in Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================================
-- Unlike blog posts, job alerts are structured records (post name,
-- department, vacancies, last date, apply link) rather than free-form
-- articles, and they naturally expire on their own last_date. The public
-- /jobs/index.html page reads only status = 'published' rows here.
-- ============================================================================

create table if not exists job_alerts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title_en text not null,
  title_hi text,
  department_en text,
  department_hi text,
  qualification_en text,
  qualification_hi text,
  location_en text,
  location_hi text,
  vacancies text,
  age_limit_en text,
  age_limit_hi text,
  fee_info_en text,
  fee_info_hi text,
  job_type text,               -- central | state | psu | railway | banking | defence | teaching | other
  last_date date not null,
  apply_link text not null,
  notification_link text,
  status text not null default 'draft',   -- 'draft' | 'published'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint job_alerts_status_check check (status in ('draft', 'published'))
);

create index if not exists job_alerts_status_idx on job_alerts (status);
create index if not exists job_alerts_last_date_idx on job_alerts (last_date);

alter table job_alerts enable row level security;

-- Public site (/jobs/index.html) only ever reads status = 'published'.
drop policy if exists "Public can read published job_alerts" on job_alerts;
create policy "Public can read published job_alerts"
  on job_alerts for select
  using (status = 'published');

-- Only the logged-in admin can see drafts and create/edit/delete alerts.
drop policy if exists "Authenticated admin can read all job_alerts" on job_alerts;
create policy "Authenticated admin can read all job_alerts"
  on job_alerts for select
  using (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can insert job_alerts" on job_alerts;
create policy "Authenticated admin can insert job_alerts"
  on job_alerts for insert
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can update job_alerts" on job_alerts;
create policy "Authenticated admin can update job_alerts"
  on job_alerts for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can delete job_alerts" on job_alerts;
create policy "Authenticated admin can delete job_alerts"
  on job_alerts for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- After running this, add job alerts from the admin dashboard's "Job Alerts"
-- tab — mark one "Published" and it appears on /jobs/index.html immediately.
-- Alerts past their last_date are still shown but marked "Closed" so the
-- page stays useful as a track record, not just active listings.
-- ============================================================================
