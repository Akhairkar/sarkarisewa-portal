-- Analytics RLS hardening migration
-- Apply in Supabase SQL Editor only after reviewing this migration.
-- Does not delete or rewrite existing analytics rows.
--
-- Anonymous visitors cannot read or directly mutate active_sessions.
-- A narrowly scoped SECURITY DEFINER RPC validates inputs and uses server
-- time. Session IDs remain client-generated, untrusted telemetry identifiers;
-- this does not provide cryptographic visitor identity or bot-proof analytics.

begin;

alter table public.page_views enable row level security;
revoke all on public.page_views from public, anon, authenticated;
grant insert on public.page_views to anon;
grant select on public.page_views to authenticated;

alter table public.active_sessions enable row level security;
revoke all on public.active_sessions from public, anon, authenticated;
grant select on public.active_sessions to authenticated;

drop policy if exists "Anonymous visitors can upsert their own session" on public.active_sessions;
drop policy if exists "Anonymous visitors can update their own session" on public.active_sessions;
drop policy if exists "Authenticated admin can read active_sessions" on public.active_sessions;
create policy "Authenticated admin can read active_sessions"
  on public.active_sessions for select to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

create or replace function public.analytics_heartbeat(p_session_id text, p_page_path text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.role() <> 'anon' then
    raise exception 'Anonymous analytics role required';
  end if;
  if p_session_id is null or length(p_session_id) < 8 or length(p_session_id) > 100
     or p_session_id !~ '^[A-Za-z0-9-]+$' then
    raise exception 'Invalid analytics session identifier';
  end if;
  if p_page_path is null or p_page_path !~ '^/' or length(p_page_path) > 500 then
    raise exception 'Invalid analytics page path';
  end if;

  insert into public.active_sessions (session_id, page_path, last_seen)
  values (p_session_id, p_page_path, now())
  on conflict (session_id) do update
    set page_path = excluded.page_path,
        last_seen = now();
end;
$$;
revoke all on function public.analytics_heartbeat(text, text) from public, anon, authenticated;
grant execute on function public.analytics_heartbeat(text, text) to anon;

commit;
