-- Revenue Center reporting tables.
-- This migration creates read-only reporting tables for the admin browser.
-- Populate AdSense reports through a trusted server-side importer using the
-- AdSense Management API or verified CSV imports. Never put OAuth refresh
-- tokens, service-role keys, or payment secrets in browser code.
create table if not exists public.adsense_daily_reports (
  report_date date primary key,
  estimated_earnings_usd numeric(14,6) not null default 0 check (estimated_earnings_usd >= 0),
  page_views bigint not null default 0 check (page_views >= 0),
  ad_impressions bigint not null default 0 check (ad_impressions >= 0),
  clicks bigint not null default 0 check (clicks >= 0),
  imported_at timestamptz not null default now()
);

create table if not exists public.premium_payment_reports (
  id bigint generated always as identity primary key,
  order_reference text not null unique,
  provider text not null default 'razorpay',
  amount_inr numeric(14,2) not null check (amount_inr >= 0),
  refunded_inr numeric(14,2) not null default 0 check (refunded_inr >= 0 and refunded_inr <= amount_inr),
  status text not null check (status in ('created','pending','captured','failed','refunded','partially_refunded')),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create index if not exists premium_payment_reports_paid_at_idx
  on public.premium_payment_reports (paid_at desc);

alter table public.adsense_daily_reports enable row level security;
alter table public.premium_payment_reports enable row level security;

revoke all on public.adsense_daily_reports from anon, public, authenticated;
revoke all on public.premium_payment_reports from anon, public, authenticated;
grant select on public.adsense_daily_reports to authenticated;
grant select on public.premium_payment_reports to authenticated;

drop policy if exists "Admins can read AdSense reports" on public.adsense_daily_reports;
create policy "Admins can read AdSense reports"
  on public.adsense_daily_reports for select to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

drop policy if exists "Admins can read premium payment reports" on public.premium_payment_reports;
create policy "Admins can read premium payment reports"
  on public.premium_payment_reports for select to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

-- Browser clients intentionally have no write policy. Trusted server-side
-- importers (service role) can write while bypassing RLS; keep keys server-only.
