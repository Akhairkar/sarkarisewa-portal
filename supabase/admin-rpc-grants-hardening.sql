-- Explicit browser grants for poster management and push RPCs.
-- Apply after daily-posters.sql and push.sql, and after
-- admin-leads-notifications-rls.sql. No rows are modified or deleted.

begin;

-- Daily posters: visitors can only read published rows; admins can manage rows.
alter table public.daily_posters enable row level security;
revoke all on public.daily_posters from public, anon, authenticated;
grant select on public.daily_posters to anon, authenticated;
grant insert, update, delete on public.daily_posters to authenticated;

drop policy if exists "public reads published posters" on public.daily_posters;
drop policy if exists "admin manages posters" on public.daily_posters;
create policy "Visitors read published posters" on public.daily_posters
  for select to anon, authenticated using (status = 'published');
create policy "Admins manage posters" on public.daily_posters
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Poster events are written only by poster_log(), never directly by a browser.
alter table public.poster_events enable row level security;
revoke all on public.poster_events from public, anon, authenticated;
grant select on public.poster_events to authenticated;
drop policy if exists "admin reads poster events" on public.poster_events;
create policy "Admins read poster events" on public.poster_events
  for select to authenticated using (public.is_admin());

-- The sender endpoints require the private PUSH_SEND_KEY checked internally.
-- Remove PostgreSQL's default PUBLIC EXECUTE grant and allow only the anon
-- API role to invoke these key-protected endpoints. The anon API key is public;
-- PUSH_SEND_KEY remains the actual authorization secret.
revoke all on function public.push_save_vapid(text, text, text) from public, authenticated;
revoke all on function public.push_queue(text) from public, authenticated;
revoke all on function public.push_report(text, bigint, int, int, text[]) from public, authenticated;
revoke all on function public.push_pending(text) from public, authenticated;
grant execute on function public.push_save_vapid(text, text, text) to anon;
grant execute on function public.push_queue(text) to anon;
grant execute on function public.push_report(text, bigint, int, int, text[]) to anon;
grant execute on function public.push_pending(text) to anon;

-- Public visitor push operations are intentionally callable by anon and
-- authenticated sessions, but not via the implicit PUBLIC role grant.
revoke all on function public.push_public_key() from public;
revoke all on function public.push_subscribe(text, text, text, text, text) from public;
revoke all on function public.push_unsubscribe(text, text) from public;
grant execute on function public.push_public_key() to anon, authenticated;
grant execute on function public.push_subscribe(text, text, text, text, text) to anon, authenticated;
grant execute on function public.push_unsubscribe(text, text) to anon, authenticated;

commit;
