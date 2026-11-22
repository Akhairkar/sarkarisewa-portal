-- Analytics RLS hardening migration
-- Review before applying in Supabase SQL Editor. This migration changes only
-- database privileges and policies; it does not delete or rewrite analytics.
-- It is intentionally idempotent.
--
-- Security boundary: anonymous sessions are not authenticated identities.
-- The session_id is an untrusted client-generated identifier, not proof of
-- ownership. This migration narrows what anonymous clients can mutate, but
-- does not make client-side analytics tamper-proof.

begin;

alter table public.page_views enable row level security;
revoke all on public.page_views from public, anon, authenticated;
grant insert on public.page_views to anon;
grant select on public.page_views to authenticated;

alter table public.active_sessions enable row level security;
revoke all on public.active_sessions from public, anon, authenticated;
grant insert on public.active_sessions to anon;
grant update (page_path, last_seen) on public.active_sessions to anon;
grant select on public.active_sessions to authenticated;

drop policy if exists "Anonymous visitors can upsert their own session" on public.active_sessions;
create policy "Anonymous visitors can upsert their own session"
  on public.active_sessions for insert to anon
  with check (
    auth.role() = 'anon'
    and page_path ~ '^/'
    and length(page_path) <= 500
    and last_seen >= now() - interval '5 minutes'
    and last_seen <= now() + interval '2 minutes'
  );

drop policy if exists "Anonymous visitors can update their own session" on public.active_sessions;
create policy "Anonymous visitors can update their own session"
  on public.active_sessions for update to anon
  using (auth.role() = 'anon')
  with check (
    auth.role() = 'anon'
    and page_path ~ '^/'
    and length(page_path) <= 500
    and last_seen >= now() - interval '5 minutes'
    and last_seen <= now() + interval '2 minutes'
  );

drop policy if exists "Authenticated admin can read active_sessions" on public.active_sessions;
create policy "Authenticated admin can read active_sessions"
  on public.active_sessions for select to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

commit;
