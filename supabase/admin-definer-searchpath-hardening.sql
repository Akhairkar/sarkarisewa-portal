-- Harden SECURITY DEFINER function name resolution.
-- Apply after the source migrations that create these functions.
-- No table rows or business data are changed.

begin;

-- Browser/API roles need to use public objects, not create objects in the
-- public schema. This prevents search_path object-shadowing attacks.
revoke create on schema public from public, anon, authenticated;
grant usage on schema public to anon, authenticated;

-- Keep trusted application functions' existing public/extension dependencies
-- resolvable while ensuring pg_catalog is searched first. Removing CREATE
-- privileges above prevents untrusted users from planting shadow objects.
alter function public.push_campaign_limit() set search_path = pg_catalog, public, extensions;
alter function public.push_key_ok(text) set search_path = pg_catalog, public, extensions;
alter function public.push_set_key(text) set search_path = pg_catalog, public, extensions;
alter function public.push_public_key() set search_path = pg_catalog, public, extensions;
alter function public.push_subscribe(text, text, text, text, text) set search_path = pg_catalog, public, extensions;
alter function public.push_unsubscribe(text, text) set search_path = pg_catalog, public, extensions;
alter function public.push_stats() set search_path = pg_catalog, public, extensions;
alter function public.push_save_vapid(text, text, text) set search_path = pg_catalog, public, extensions;
alter function public.push_queue(text) set search_path = pg_catalog, public, extensions;
alter function public.push_report(text, bigint, int, int, text[]) set search_path = pg_catalog, public, extensions;
alter function public.push_pending(text) set search_path = pg_catalog, public, extensions;

alter function public.service_interest_log(text, text, text, text) set search_path = pg_catalog, public, extensions;
alter function public.service_request_submit(text, text, text, text, text, text, text, boolean, text) set search_path = pg_catalog, public, extensions;
alter function public.poster_log(uuid, text, text, text, boolean) set search_path = pg_catalog, public, extensions;
alter function public.csc_status_votes_limit() set search_path = pg_catalog, public, extensions;
alter function public.search_stats(int) set search_path = pg_catalog, public, extensions;
alter function public.is_admin() set search_path = pg_catalog, public, auth;

-- The heartbeat already uses an empty search_path and fully-qualified names.
-- Analytics SECURITY INVOKER functions are intentionally not altered here.

commit;
