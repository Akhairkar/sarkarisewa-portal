-- ============================================================================
-- SarkariSewa Portal — Deadlines table (Government Deadline & Notification Hub)
-- Managed live from the admin dashboard's "Deadlines" tab.
-- Run this ONCE in Supabase Dashboard → SQL Editor → New query → paste → Run
-- ============================================================================
-- Mirrors the job_alerts / exam_calendar pattern already used on this site:
-- the admin fills a form and clicks Publish, and it appears immediately on
-- /tools/deadline-calendar.html and gets its own SEO detail page at
-- /tools/deadline-detail.html?slug=... (no code deploy needed per deadline).
--
-- Status shown on cards (Closing Today / X Days Left / Upcoming / Expired)
-- is NEVER stored here — it is always computed client-side from today's
-- date vs deadline_date, so it can never go stale.
-- ============================================================================

create table if not exists deadlines (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,

  -- Core content
  title_en text not null,
  title_hi text,
  category text not null default 'other',        -- scheme | jobs | exam | scholarship | education | tax | ekyc | banking | farmer | pension | documents | certificates | housing | business | other
  deadline_type text not null default 'other',    -- application | registration | correction | document_submission | payment | ekyc | renewal | admission | exam_date | result | other
  state text not null default 'all-india',        -- all-india | maharashtra | madhya-pradesh | rajasthan | uttar-pradesh | bihar | gujarat | karnataka | delhi | other

  deadline_date date not null,

  -- SEO fields — the admin controls these directly per the request that
  -- title/description not be left to guesswork or a generic template.
  seo_title_en text,
  seo_title_hi text,
  seo_desc_en text,
  seo_desc_hi text,

  -- Detail-page content (all optional — a section only renders if filled)
  description_en text,
  description_hi text,
  eligibility_en text,
  eligibility_hi text,
  documents_en text,
  documents_hi text,
  how_to_apply_en text,
  how_to_apply_hi text,
  important_dates_en text,     -- free text, one line per date, e.g. "Start: 1 Aug 2026\nLast Date: 23 Aug 2026"
  important_dates_hi text,
  what_if_missed_en text,
  what_if_missed_hi text,

  -- FAQ — plain text, one Q/A pair per block, format:
  --   Q: question text
  --   A: answer text
  -- (blank line between pairs). Parsed client-side into FAQPage schema.
  faq_en text,
  faq_hi text,

  -- Trust / source system (Section 13 of the spec)
  official_url text,
  source_name text,
  last_verified date,

  -- Related Government Services (optional, admin-curated). One entry per
  -- line, format: slug|Display Name (English)|Display Name (Hindi)
  -- e.g.  pm-kisan|PM-KISAN Scheme|पीएम-किसान योजना
  -- Links to /service/<slug>.html. Leave blank to skip this section
  -- entirely rather than show a guessed/broken link.
  related_services text,

  -- Deadline-extension history (Section 18 of the spec) — filled in only
  -- when an admin marks an existing deadline as extended.
  previous_deadline_date date,
  extension_reason_en text,
  extension_reason_hi text,

  status text not null default 'draft',   -- 'draft' | 'published'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint deadlines_status_check check (status in ('draft', 'published'))
);

create index if not exists deadlines_status_idx on deadlines (status);
create index if not exists deadlines_deadline_date_idx on deadlines (deadline_date);
create index if not exists deadlines_category_idx on deadlines (category);
create index if not exists deadlines_state_idx on deadlines (state);

alter table deadlines enable row level security;

-- Public site (deadline-calendar.html, deadline-detail.html) only ever
-- reads status = 'published'.
drop policy if exists "Public can read published deadlines" on deadlines;
create policy "Public can read published deadlines"
  on deadlines for select
  using (status = 'published');

-- Only the logged-in admin can see drafts and create/edit/delete deadlines.
drop policy if exists "Authenticated admin can read all deadlines" on deadlines;
create policy "Authenticated admin can read all deadlines"
  on deadlines for select
  using (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can insert deadlines" on deadlines;
create policy "Authenticated admin can insert deadlines"
  on deadlines for insert
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can update deadlines" on deadlines;
create policy "Authenticated admin can update deadlines"
  on deadlines for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated admin can delete deadlines" on deadlines;
create policy "Authenticated admin can delete deadlines"
  on deadlines for delete
  using (auth.role() = 'authenticated');

-- ============================================================================
-- MIGRATION — run this instead if you already ran an earlier version of
-- this file (i.e. the "deadlines" table already exists). Safe to run
-- multiple times.
-- ============================================================================
alter table deadlines add column if not exists related_services text;

-- ============================================================================
-- After running this, add deadlines from the admin dashboard's "Deadlines"
-- tab — mark one "Published" and it appears on /tools/deadline-calendar.html
-- immediately, with its own SEO page at
-- /tools/deadline-detail.html?slug=your-slug.
-- Expired deadlines are NOT deleted or hidden — they stay listed (marked
-- "Expired") so the page keeps its SEO value and track record.
-- ============================================================================
