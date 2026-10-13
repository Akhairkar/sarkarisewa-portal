-- "Get it done from home through a verified CSC" requests (state guides) and
-- the yes/no interest count behind them. Visitors write only through the two
-- functions below; only admins read or change the rows (admin/requests.html).
-- A request is kept only with explicit consent to share the number with a
-- CSC operator for that one task (consent_version records the wording shown).

create table if not exists public.service_interest (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  page text check (page is null or length(page) <= 200),
  state text check (state is null or length(state) <= 60),
  service text check (service is null or length(service) <= 100),
  choice text not null check (choice in ('yes','no'))
);
alter table public.service_interest enable row level security;
create policy "admin reads service interest" on public.service_interest for select to authenticated using ((select is_admin()));
revoke all on public.service_interest from anon;

create table if not exists public.service_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz,
  page text check (page is null or length(page) <= 200),
  state text check (state is null or length(state) <= 60),
  district text not null check (length(district) between 2 and 60),
  service text check (service is null or length(service) <= 100),
  details text check (details is null or length(details) <= 400),
  name text not null check (length(name) between 2 and 60),
  phone text not null check (phone ~ '^[6-9][0-9]{9}$'),
  consent_share boolean not null check (consent_share),
  consent_version text not null,
  status text not null default 'new' check (status in ('new','contacted','assigned','done','cancelled','spam')),
  assigned_to text check (assigned_to is null or length(assigned_to) <= 120),
  admin_notes text check (admin_notes is null or length(admin_notes) <= 1000)
);
create index if not exists service_requests_phone_time on public.service_requests (phone, created_at desc);
alter table public.service_requests enable row level security;
create policy "admin reads service requests" on public.service_requests for select to authenticated using ((select is_admin()));
create policy "admin updates service requests" on public.service_requests for update to authenticated using ((select is_admin())) with check ((select is_admin()));
create policy "admin deletes service requests" on public.service_requests for delete to authenticated using ((select is_admin()));
revoke all on public.service_requests from anon;

create or replace function public.service_interest_log(p_page text, p_state text, p_service text, p_choice text)
returns void language plpgsql security definer set search_path = public as $$
begin
  if p_choice not in ('yes','no') then return; end if;
  insert into service_interest(page, state, service, choice)
  values (left(p_page, 200), left(p_state, 60), left(p_service, 100), p_choice);
end $$;
revoke all on function public.service_interest_log(text, text, text, text) from public;
grant execute on function public.service_interest_log(text, text, text, text) to anon, authenticated;

-- Returns 'ok', 'dup' (same number and task in the last day), 'limit'
-- (3 requests from one number in a day), 'busy' (too many requests overall)
-- or 'invalid'.
create or replace function public.service_request_submit(
  p_page text, p_state text, p_district text, p_service text, p_details text,
  p_name text, p_phone text, p_consent boolean, p_consent_version text)
returns text language plpgsql security definer set search_path = public as $$
declare ph text := right(regexp_replace(coalesce(p_phone, ''), '\D', '', 'g'), 10);
begin
  if not coalesce(p_consent, false) or ph !~ '^[6-9][0-9]{9}$'
     or length(trim(coalesce(p_name, ''))) < 2 or length(trim(coalesce(p_district, ''))) < 2
     or coalesce(p_consent_version, '') = '' then
    return 'invalid';
  end if;
  if (select count(*) from service_requests where created_at > now() - interval '10 minutes') >= 60 then return 'busy'; end if;
  if exists (select 1 from service_requests where phone = ph and coalesce(service, '') = coalesce(left(trim(p_service), 100), '') and created_at > now() - interval '1 day') then return 'dup'; end if;
  if (select count(*) from service_requests where phone = ph and created_at > now() - interval '1 day') >= 3 then return 'limit'; end if;
  insert into service_requests(page, state, district, service, details, name, phone, consent_share, consent_version)
  values (left(p_page, 200), left(p_state, 60), left(trim(p_district), 60), nullif(left(trim(p_service), 100), ''),
          nullif(left(trim(p_details), 400), ''), left(trim(p_name), 60), ph, true, left(p_consent_version, 40));
  return 'ok';
end $$;
revoke all on function public.service_request_submit(text, text, text, text, text, text, text, boolean, text) from public;
grant execute on function public.service_request_submit(text, text, text, text, text, text, text, boolean, text) to anon, authenticated;
