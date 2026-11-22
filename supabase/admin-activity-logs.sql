-- Admin activity audit log. Apply in Supabase SQL Editor after reviewing.
-- Records admin page access only; no customer payloads or form contents.
create table if not exists public.admin_activity_logs (
  id bigint generated always as identity primary key,
  actor_id uuid not null,
  actor_email text,
  action text not null check (length(action) between 1 and 40),
  resource text not null check (length(resource) between 1 and 120),
  created_at timestamptz not null default now()
);
create index if not exists admin_activity_logs_created_at_idx on public.admin_activity_logs (created_at desc);
create index if not exists admin_activity_logs_actor_idx on public.admin_activity_logs (actor_id, created_at desc);
alter table public.admin_activity_logs enable row level security;
revoke all on public.admin_activity_logs from anon, public;
grant select, insert on public.admin_activity_logs to authenticated;

drop policy if exists "Admins can read activity logs" on public.admin_activity_logs;
create policy "Admins can read activity logs" on public.admin_activity_logs
  for select to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

drop policy if exists "Admins can insert own activity logs" on public.admin_activity_logs;
create policy "Admins can insert own activity logs" on public.admin_activity_logs
  for insert to authenticated
  with check (
    coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false)
    and actor_id = auth.uid()
    and (actor_email is null or actor_email = auth.jwt() ->> 'email')
  );
-- No UPDATE or DELETE grants/policies: client-side admin audit records are append-only.
