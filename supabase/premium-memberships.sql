-- Premium membership reporting schema.
-- The admin browser is read-only. Populate/refresh this table only from a trusted
-- server-side payment verifier using the service role; never expose that key.
create table if not exists public.premium_memberships (
  id bigint generated always as identity primary key,
  member_reference text not null unique,
  member_email text,
  plan_code text not null check (plan_code in ('daily_ad_free','monthly_ad_free')),
  amount_inr numeric(12,2) not null check (amount_inr >= 0),
  status text not null check (status in ('active','expired','cancelled','pending','refunded')),
  starts_at timestamptz,
  expires_at timestamptz,
  payment_reference text,
  updated_at timestamptz not null default now(),
  constraint premium_membership_dates_check check (
    expires_at is null or starts_at is null or expires_at >= starts_at
  )
);

create index if not exists premium_memberships_status_expiry_idx
  on public.premium_memberships (status, expires_at desc);
create index if not exists premium_memberships_updated_idx
  on public.premium_memberships (updated_at desc);

alter table public.premium_memberships enable row level security;
revoke all on public.premium_memberships from anon, public, authenticated;
grant select on public.premium_memberships to authenticated;

drop policy if exists "Admins can read premium memberships" on public.premium_memberships;
create policy "Admins can read premium memberships"
  on public.premium_memberships for select to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

-- No browser INSERT/UPDATE/DELETE policies or grants are intentionally provided.
