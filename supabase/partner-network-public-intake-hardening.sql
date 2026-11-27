-- Harden public customer enquiry intake against concurrent duplicate and rate-limit bypass.
-- Database-level limits are not IP-based; edge/network-layer controls remain a separate task.

create or replace function public.partner_submit_customer_lead(
  p_page_path text, p_service_code text, p_service_name text,
  p_state text, p_district text, p_customer_name text,
  p_customer_phone text, p_customer_details text,
  p_consent_share boolean, p_consent_version text
)
returns uuid
language plpgsql
security definer
set search_path = pg_catalog
as $function$
declare
  v_phone text := right(regexp_replace(coalesce(p_customer_phone,''), '\D', '', 'g'), 10);
  v_name text := left(trim(coalesce(p_customer_name,'')), 80);
  v_path text := left(trim(coalesce(p_page_path,'')),300);
  v_code text := left(trim(coalesce(p_service_code,'')),80);
  v_service text := left(trim(coalesce(p_service_name,'')),120);
  v_state text := left(trim(coalesce(p_state,'')),60);
  v_district text := left(trim(coalesce(p_district,'')),60);
  v_version text := left(trim(coalesce(p_consent_version,'')),40);
  v_lead_id uuid;
begin
  if not coalesce(p_consent_share,false)
    or v_phone !~ '^[6-9][0-9]{9}$'
    or length(v_name) < 2
    or length(v_path) < 1
    or left(v_path,1) <> '/'
    or v_path like '%://%'
    or length(v_state) < 2
    or length(v_district) < 2
    or length(v_code) < 2
    or v_code !~ '^[a-zA-Z0-9_-]+$'
    or length(v_service) < 2
    or length(v_version) < 1 then
    raise exception 'Invalid enquiry or missing consent';
  end if;

  perform pg_advisory_xact_lock(hashtextextended('partner-lead-phone:' || v_phone, 0));

  if exists (
    select 1 from partner_network.customer_leads
    where customer_phone=v_phone and service_code=v_code
      and created_at > now() - interval '24 hours'
  ) then return null; end if;

  if (
    select count(*) from partner_network.customer_leads
    where customer_phone=v_phone and created_at > now() - interval '24 hours'
  ) >= 3 then return null; end if;

  -- Serialize the global cap check so concurrent distinct phones cannot all
  -- pass the same threshold at once.
  perform pg_advisory_xact_lock(731942, 1107);
  if (
    select count(*) from partner_network.customer_leads
    where created_at > now() - interval '10 minutes'
  ) >= 100 then return null; end if;

  insert into partner_network.customer_leads (
    page_path,service_code,service_name,state,district,
    customer_name,customer_phone,customer_details,
    consent_share,consent_version
  ) values (
    v_path,v_code,v_service,v_state,v_district,
    v_name,v_phone,
    nullif(left(trim(coalesce(p_customer_details,'')),800),''),
    true,v_version
  ) returning id into v_lead_id;
  return v_lead_id;
end;
$function$;

revoke all on function public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text) from public;
grant execute on function public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text) to anon, authenticated;
