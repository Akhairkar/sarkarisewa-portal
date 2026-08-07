-- ============================================================================
-- SarkariSewa Portal — Exam Calendar table (Notification Date / Last Date to
-- Apply / Exam Date tracker, managed live from the admin dashboard's
-- "Exam Calendar" tab)
-- Run this ONCE in Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================================
-- Status (Upcoming / Open / Closed) is NOT stored — it is computed on the
-- fly from today's date vs notification_date / last_date, the same way
-- job_alerts computes "Closed" from last_date. This means status is always
-- correct without anyone having to edit it manually.
-- ============================================================================

create table if not exists exam_calendar (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  exam_name_en text not null,
  exam_name_hi text,
  organisation_en text,
  organisation_hi text,
  category text,                 -- central | state | banking | railway | ssc | upsc | police | defence | other
  notification_date date,
  last_date date not null,       -- last date to apply
  exam_date date,
  official_link text not null,
  status text not null default 'draft',   -- 'draft' | 'published' (admin workflow only)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint exam_calendar_status_check check (status in ('draft', 'published'))
);

create index if not exists exam_calendar_status_idx on exam_calendar (status);
create index if not exists exam_calendar_last_date_idx on exam_calendar (last_date);

alter table exam_calendar enable row level security;

-- Public site (/exams/index.html) only ever reads status = 'published'.
drop policy if exists "Public can read published exam_calendar" on exam_calendar;
create policy "Public can read published exam_calendar"
  on exam_calendar for select
  using (status = 'published');

-- Only the logged-in admin can see drafts and create/edit/delete exams.
drop policy if exists "Authenticated admin can read all exam_calendar" on exam_calendar;
create policy "Authenticated admin can read all exam_calendar"
  on exam_calendar for select
  using (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can insert exam_calendar" on exam_calendar;
create policy "Authenticated admin can insert exam_calendar"
  on exam_calendar for insert
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can update exam_calendar" on exam_calendar;
create policy "Authenticated admin can update exam_calendar"
  on exam_calendar for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can delete exam_calendar" on exam_calendar;
create policy "Authenticated admin can delete exam_calendar"
  on exam_calendar for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- After running this, add exams from the admin dashboard's "Exam Calendar"
-- tab — mark one "Published" and it appears on /exams/index.html immediately,
-- with status (Upcoming/Open/Closed) worked out automatically from its dates.
-- Filters by category (Central/State/Banking/Railway/SSC/UPSC/Police/Defence)
-- are NOT built yet — pending for a later session.
-- ============================================================================
