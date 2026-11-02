-- Web push notifications (browser notifications), two separate topics:
--   yojana : government schemes (button on the senior citizen guides)
--   naukri : jobs and exams (button on the job pages)
-- A browser that subscribed on a scheme page gets only scheme notifications;
-- one that subscribed on a job page gets only job notifications (both only if
-- the visitor pressed both buttons).
--
-- No personal data: a push subscription is a random browser address given by
-- Google/Mozilla/Apple/Microsoft, no name, no phone number.
--
-- Who can do what:
--   visitors (anon)  : push_subscribe / push_unsubscribe / push_public_key
--   admin            : write notifications (push_campaigns), push_stats()
--   sender (GitHub)  : push_queue / push_report / push_save_vapid, only with
--                      the send key whose sha256 is stored in push_config.
--                      The key itself is a GitHub secret (PUSH_SEND_KEY) and
--                      is registered once in the SQL editor:
--                        select public.push_set_key('<same text as the secret>');
--
-- Safe to run more than once.

create table if not exists public.push_subscriptions (
  id bigint generated always as identity primary key,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  topics text[] not null default '{}',
  page text,
  active boolean not null default true,
  failures smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists push_subscriptions_topics on public.push_subscriptions using gin (topics) where active;
alter table public.push_subscriptions enable row level security;
revoke all on public.push_subscriptions from anon, authenticated;

create table if not exists public.push_campaigns (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  created_by uuid default auth.uid(),
  topic text not null,
  title text not null,
  body text not null,
  url text not null,
  status text not null default 'queued',
  sent_count int not null default 0,
  failed_count int not null default 0,
  started_at timestamptz,
  finished_at timestamptz,
  constraint push_campaign_topic check (topic in ('yojana', 'naukri')),
  constraint push_campaign_status check (status in ('queued', 'sending', 'sent', 'cancelled')),
  constraint push_campaign_text check (length(title) between 5 and 70 and length(body) between 5 and 200),
  constraint push_campaign_url check (url ~ '^/[A-Za-z0-9/_.#?=&%-]*$' and length(url) <= 300)
);
alter table public.push_campaigns enable row level security;
revoke all on public.push_campaigns from anon;
grant select, insert, update on public.push_campaigns to authenticated;
drop policy if exists push_campaigns_admin_read on public.push_campaigns;
create policy push_campaigns_admin_read on public.push_campaigns for select to authenticated using (public.is_admin());
drop policy if exists push_campaigns_admin_insert on public.push_campaigns;
create policy push_campaigns_admin_insert on public.push_campaigns for insert to authenticated
  with check (public.is_admin() and status = 'queued' and sent_count = 0 and failed_count = 0);
drop policy if exists push_campaigns_admin_cancel on public.push_campaigns;
create policy push_campaigns_admin_cancel on public.push_campaigns for update to authenticated
  using (public.is_admin() and status = 'queued') with check (public.is_admin() and status = 'cancelled');

-- At most 2 notifications per topic per day (India time), so nobody is spammed.
create or replace function public.push_campaign_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from public.push_campaigns
      where topic = new.topic and status <> 'cancelled'
        and (created_at at time zone 'Asia/Kolkata')::date = (now() at time zone 'Asia/Kolkata')::date) >= 2 then
    raise exception 'आज इस विषय (%) की 2 सूचनाएं जा चुकी हैं। कल भेजें।', new.topic;
  end if;
  return new;
end $$;
drop trigger if exists push_campaign_limit on public.push_campaigns;
create trigger push_campaign_limit before insert on public.push_campaigns
  for each row execute function public.push_campaign_limit();

-- Private settings: VAPID keys and the hash of the send key. No one but the
-- functions below can read it.
create table if not exists public.push_config (
  id smallint primary key default 1 check (id = 1),
  vapid_public text,
  vapid_private text,
  send_key_hash text
);
insert into public.push_config (id) values (1) on conflict do nothing;
alter table public.push_config enable row level security;
revoke all on public.push_config from anon, authenticated;

create or replace function public.push_key_ok(p_key text) returns boolean
language sql stable security definer set search_path = public, extensions as $$
  select p_key is not null and length(p_key) >= 24
    and exists (select 1 from public.push_config
                where send_key_hash = encode(extensions.digest(p_key, 'sha256'), 'hex'));
$$;
revoke execute on function public.push_key_ok(text) from public, anon, authenticated;

-- Run once in the SQL editor (it cannot be called from the website).
create or replace function public.push_set_key(p_key text) returns text
language plpgsql security definer set search_path = public, extensions as $$
begin
  if p_key is null or length(p_key) < 24 then raise exception 'key must be at least 24 characters'; end if;
  update public.push_config set send_key_hash = encode(extensions.digest(p_key, 'sha256'), 'hex') where id = 1;
  return 'send key saved';
end $$;
revoke execute on function public.push_set_key(text) from public, anon, authenticated;

-- Visitors ------------------------------------------------------------------

create or replace function public.push_public_key() returns text
language sql stable security definer set search_path = public as $$
  select vapid_public from public.push_config where id = 1;
$$;

create or replace function public.push_subscribe(p_endpoint text, p_p256dh text, p_auth text, p_topic text, p_page text default null)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if p_topic not in ('yojana', 'naukri') then raise exception 'bad topic'; end if;
  -- only the real browser push services, so this list cannot be used to make
  -- the sender call other addresses
  if length(p_endpoint) > 1000 or p_endpoint !~ '^https://(fcm\.googleapis\.com|android\.googleapis\.com|updates\.push\.services\.mozilla\.com|[a-z0-9-]+\.push\.services\.mozilla\.com|web\.push\.apple\.com|[a-z0-9.-]+\.push\.apple\.com|[a-z0-9.-]+\.notify\.windows\.com)/' then
    raise exception 'bad endpoint';
  end if;
  if p_p256dh !~ '^[A-Za-z0-9_=-]{40,200}$' or p_auth !~ '^[A-Za-z0-9_=-]{10,60}$' then raise exception 'bad keys'; end if;
  insert into public.push_subscriptions (endpoint, p256dh, auth, topics, page)
  values (p_endpoint, p_p256dh, p_auth, array[p_topic], left(p_page, 200))
  on conflict (endpoint) do update set
    p256dh = excluded.p256dh, auth = excluded.auth, active = true, failures = 0, updated_at = now(),
    topics = (select array(select distinct t from unnest(push_subscriptions.topics || excluded.topics) t));
  return true;
end $$;

-- p_topic null = stop everything
create or replace function public.push_unsubscribe(p_endpoint text, p_topic text default null)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  update public.push_subscriptions
     set topics = case when p_topic is null then '{}' else array_remove(topics, p_topic) end,
         updated_at = now()
   where endpoint = p_endpoint;
  update public.push_subscriptions set active = false where endpoint = p_endpoint and cardinality(topics) = 0;
  return true;
end $$;

grant execute on function public.push_public_key() to anon, authenticated;
grant execute on function public.push_subscribe(text, text, text, text, text) to anon, authenticated;
grant execute on function public.push_unsubscribe(text, text) to anon, authenticated;

-- Admin ---------------------------------------------------------------------

create or replace function public.push_stats() returns json
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not authorized'; end if;
  return json_build_object(
    'yojana', (select count(*) from public.push_subscriptions where active and 'yojana' = any(topics)),
    'naukri', (select count(*) from public.push_subscriptions where active and 'naukri' = any(topics)),
    'stopped', (select count(*) from public.push_subscriptions where not active),
    'last7', (select count(*) from public.push_subscriptions where created_at > now() - interval '7 days'),
    'ready', (select vapid_public is not null and send_key_hash is not null from public.push_config where id = 1));
end $$;
revoke execute on function public.push_stats() from public, anon;
grant execute on function public.push_stats() to authenticated;

-- Sender (GitHub Action, with the send key) ---------------------------------

create or replace function public.push_save_vapid(p_key text, p_public text, p_private text) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.push_key_ok(p_key) then raise exception 'not authorized'; end if;
  update public.push_config set vapid_public = p_public, vapid_private = p_private
   where id = 1 and vapid_public is null;
  return found;
end $$;

-- Queued notifications with the browsers to send them to; marks them sending.
create or replace function public.push_queue(p_key text) returns json
language plpgsql security definer set search_path = public as $$
declare out json;
begin
  if not public.push_key_ok(p_key) then raise exception 'not authorized'; end if;
  select json_build_object(
    'vapid_public', c.vapid_public, 'vapid_private', c.vapid_private,
    'campaigns', coalesce((
      select json_agg(json_build_object(
        'id', k.id, 'topic', k.topic, 'title', k.title, 'body', k.body, 'url', k.url,
        'subs', coalesce((select json_agg(json_build_object('endpoint', s.endpoint, 'p256dh', s.p256dh, 'auth', s.auth))
                          from public.push_subscriptions s where s.active and k.topic = any(s.topics)), '[]'::json))
        order by k.id)
      from public.push_campaigns k where k.status = 'queued'), '[]'::json))
  into out from public.push_config c where c.id = 1;
  update public.push_campaigns set status = 'sending', started_at = now() where status = 'queued';
  return out;
end $$;

create or replace function public.push_report(p_key text, p_campaign bigint, p_sent int, p_failed int, p_dead text[])
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if not public.push_key_ok(p_key) then raise exception 'not authorized'; end if;
  update public.push_campaigns set status = 'sent', sent_count = p_sent, failed_count = p_failed, finished_at = now()
   where id = p_campaign;
  update public.push_subscriptions set active = false, failures = least(failures + 1, 99), updated_at = now()
   where endpoint = any(coalesce(p_dead, '{}'));
  return true;
end $$;

grant execute on function public.push_save_vapid(text, text, text) to anon;
grant execute on function public.push_queue(text) to anon;
grant execute on function public.push_report(text, bigint, int, int, text[]) to anon;

-- Cheap check before the sender installs anything: queued count, and whether
-- the VAPID keys still have to be made.
create or replace function public.push_pending(p_key text) returns json
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.push_key_ok(p_key) then raise exception 'not authorized'; end if;
  return json_build_object(
    'queued', (select count(*) from public.push_campaigns where status = 'queued'),
    'need_vapid', (select vapid_public is null from public.push_config where id = 1));
end $$;
grant execute on function public.push_pending(text) to anon;
