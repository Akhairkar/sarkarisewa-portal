-- Shorter "get it done at home" form: only the mobile number is required.
-- Name, district and details are optional; state and task come from the page.
-- Consent is the press of the send button next to a short notice (v2 wording).
alter table public.service_requests alter column name drop not null;
alter table public.service_requests alter column district drop not null;
alter table public.service_requests drop constraint if exists service_requests_name_check;
alter table public.service_requests drop constraint if exists service_requests_district_check;
alter table public.service_requests add constraint service_requests_name_check check (name is null or length(name) between 2 and 60);
alter table public.service_requests add constraint service_requests_district_check check (district is null or length(district) between 2 and 60);

create or replace function public.service_request_submit(
  p_page text, p_state text, p_district text, p_service text, p_details text,
  p_name text, p_phone text, p_consent boolean, p_consent_version text)
returns text language plpgsql security definer set search_path = public as $$
declare
  ph text := right(regexp_replace(coalesce(p_phone, ''), '\D', '', 'g'), 10);
  nm text := nullif(left(trim(coalesce(p_name, '')), 60), '');
  ds text := nullif(left(trim(coalesce(p_district, '')), 60), '');
begin
  if not coalesce(p_consent, false) or ph !~ '^[6-9][0-9]{9}$' or coalesce(p_consent_version, '') = '' then
    return 'invalid';
  end if;
  if length(nm) < 2 then nm := null; end if;
  if length(ds) < 2 then ds := null; end if;
  if (select count(*) from service_requests where created_at > now() - interval '10 minutes') >= 60 then return 'busy'; end if;
  if exists (select 1 from service_requests where phone = ph and coalesce(service, '') = coalesce(left(trim(p_service), 100), '') and created_at > now() - interval '1 day') then return 'dup'; end if;
  if (select count(*) from service_requests where phone = ph and created_at > now() - interval '1 day') >= 3 then return 'limit'; end if;
  insert into service_requests(page, state, district, service, details, name, phone, consent_share, consent_version)
  values (left(p_page, 200), left(p_state, 60), ds, nullif(left(trim(p_service), 100), ''),
          nullif(left(trim(p_details), 400), ''), nm, ph, true, left(p_consent_version, 40));
  return 'ok';
end $$;
revoke all on function public.service_request_submit(text, text, text, text, text, text, text, boolean, text) from public;
grant execute on function public.service_request_submit(text, text, text, text, text, text, text, boolean, text) to anon, authenticated;
