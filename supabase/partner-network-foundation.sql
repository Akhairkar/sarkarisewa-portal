-- SarkariSewa India — Business Partner Network foundation
-- Phase 1 only. Review and run manually in Supabase SQL Editor after approval.
-- This migration is additive: it does not alter existing CSC, account, service-request,
-- analytics, authentication, or public-site tables.
--
-- Security model:
--   * Partners authenticate with Supabase Auth (email + password at signup).
--   * Public visitors can submit a consent-backed enquiry only through the RPC below.
--   * A partner can read only leads assigned to their own auth user.
--   * Assignment is exclusive (one partner per lead) and must be performed by a
--     trusted server/Edge Function using service_role; never expose service_role.
--   * Every partner starts with 10 free assignments. Quota is charged atomically.
--   * Premium entitlement is a future, admin-controlled extension; no payments here.

create extension if not exists pgcrypto;
create schema if not exists partner_network;

create table if not exists partner_network.partner_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  partner_type text not null check (partner_type in (
    'csc_vle','existing_business','new_business','cyber_cafe','consultant','other'
  )),
  business_name text not null check (length(trim(business_name)) between 2 and 120),
  owner_name text not null check (length(trim(owner_name)) between 2 and 80),
  email text not null,
  phone text not null check (phone ~ '^[6-9][0-9]{9}$'),
  state text not null check (length(trim(state)) between 2 and 60),
  district text not null check (length(trim(district)) between 2 and 60),
  pincode text check (pincode is null or pincode ~ '^[1-9][0-9]{5}$'),
  csc_id text,
  partner_origin text not null default 'self_registration'
    check (partner_origin in ('self_registration','admin_invited','legacy_import')),
  verification_status text not null default 'pending'
    check (verification_status in ('pending','verified','rejected')),
  account_status text not null default 'pending'
    check (account_status in ('pending','active','suspended')),
  profile_completion smallint not null default 0 check (profile_completion between 0 and 100),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists partner_profiles_location_idx
  on partner_network.partner_profiles (lower(state), lower(district), account_status);
create index if not exists partner_profiles_type_idx
  on partner_network.partner_profiles (partner_type, verification_status);

create table if not exists partner_network.partner_services (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_network.partner_profiles(user_id) on delete cascade,
  service_code text not null check (length(service_code) between 2 and 80),
  service_name text not null check (length(service_name) between 2 and 120),
  created_at timestamptz not null default now(),
  unique (partner_id, service_code)
);
create index if not exists partner_services_code_idx
  on partner_network.partner_services (service_code, partner_id);

create table if not exists partner_network.partner_service_areas (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_network.partner_profiles(user_id) on delete cascade,
  state text not null check (length(trim(state)) between 2 and 60),
  district text,
  created_at timestamptz not null default now(),
  unique (partner_id, state, district)
);
create index if not exists partner_service_areas_location_idx
  on partner_network.partner_service_areas (lower(state), lower(coalesce(district,'')));

create table if not exists partner_network.partner_entitlements (
  partner_id uuid primary key references partner_network.partner_profiles(user_id) on delete cascade,
  free_leads_granted integer not null default 10 check (free_leads_granted >= 0),
  free_leads_used integer not null default 0 check (free_leads_used >= 0 and free_leads_used <= free_leads_granted),
  premium_status text not null default 'not_eligible'
    check (premium_status in ('not_eligible','eligible','active','paused')),
  premium_since timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists partner_network.customer_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  page_path text not null check (length(page_path) between 1 and 300),
  service_code text not null check (length(service_code) between 2 and 80),
  service_name text not null check (length(service_name) between 2 and 120),
  state text not null check (length(trim(state)) between 2 and 60),
  district text not null check (length(trim(district)) between 2 and 60),
  customer_name text not null check (length(trim(customer_name)) between 2 and 80),
  customer_phone text not null check (customer_phone ~ '^[6-9][0-9]{9}$'),
  customer_details text check (customer_details is null or length(customer_details) <= 800),
  consent_share boolean not null check (consent_share),
  consent_version text not null check (length(consent_version) between 1 and 40),
  lead_status text not null default 'new'
    check (lead_status in ('new','assigned','in_progress','completed','cancelled','spam')),
  assigned_at timestamptz,
  retention_review_at timestamptz not null default (now() + interval '180 days')
);
create index if not exists customer_leads_routing_idx
  on partner_network.customer_leads (service_code, lower(state), lower(district), created_at);
create index if not exists customer_leads_phone_created_idx
  on partner_network.customer_leads (customer_phone, created_at desc);

create table if not exists partner_network.lead_assignments (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null unique references partner_network.customer_leads(id) on delete restrict,
  partner_id uuid not null references partner_network.partner_profiles(user_id) on delete restrict,
  assigned_at timestamptz not null default now(),
  status text not null default 'offered'
    check (status in ('offered','accepted','rejected','contacted','in_progress','completed','disputed','invalid','expired')),
  quota_charged boolean not null default true,
  partner_note text check (partner_note is null or length(partner_note) <= 500),
  updated_at timestamptz not null default now()
);
create index if not exists lead_assignments_partner_status_idx
  on partner_network.lead_assignments (partner_id, status, assigned_at desc);

create table if not exists partner_network.lead_status_history (
  id bigint generated always as identity primary key,
  assignment_id uuid not null references partner_network.lead_assignments(id) on delete restrict,
  partner_id uuid not null references partner_network.partner_profiles(user_id) on delete restrict,
  old_status text,
  new_status text not null,
  changed_at timestamptz not null default now(),
  note text
);
create index if not exists lead_status_history_assignment_idx
  on partner_network.lead_status_history (assignment_id, changed_at desc);

-- A new profile automatically receives exactly 10 free leads.
create or replace function partner_network.create_partner_entitlement()
returns trigger language plpgsql security definer set search_path = partner_network, public as $$
begin
  insert into partner_network.partner_entitlements (partner_id, free_leads_granted, free_leads_used)
  values (new.user_id, 10, 0)
  on conflict (partner_id) do nothing;
  return new;
end;
$$;

drop trigger if exists partner_profile_entitlement_init on partner_network.partner_profiles;
create trigger partner_profile_entitlement_init
after insert on partner_network.partner_profiles
for each row execute function partner_network.create_partner_entitlement();

-- Assignment and quota charge are one transaction. A trusted server performs the insert.
create or replace function partner_network.charge_free_lead_quota()
returns trigger language plpgsql security definer set search_path = partner_network, public as $$
declare
  v_status text;
  v_verification text;
  v_used integer;
  v_granted integer;
  v_premium text;
begin
  select p.account_status, p.verification_status, e.free_leads_used, e.free_leads_granted, e.premium_status
    into v_status, v_verification, v_used, v_granted, v_premium
  from partner_network.partner_profiles p
  join partner_network.partner_entitlements e on e.partner_id = p.user_id
  where p.user_id = new.partner_id
  for update of e;

  if not found or v_status <> 'active' or v_verification <> 'verified' then
    raise exception 'Partner is not verified and active or has no entitlement';
  end if;

  if v_used < v_granted then
    update partner_network.partner_entitlements
      set free_leads_used = free_leads_used + 1, updated_at = now()
      where partner_id = new.partner_id;
    new.quota_charged := true;
  elsif v_premium = 'active' then
    new.quota_charged := false;
  else
    raise exception 'Free lead quota exhausted';
  end if;
  return new;
end;
$$;

drop trigger if exists lead_assignment_charge_quota on partner_network.lead_assignments;
create trigger lead_assignment_charge_quota
before insert on partner_network.lead_assignments
for each row execute function partner_network.charge_free_lead_quota();

-- Keep a permanent status audit trail and synchronize the lead's broad status.
create or replace function partner_network.log_lead_status_change()
returns trigger language plpgsql security definer set search_path = partner_network, public as $$
begin
  if tg_op = 'INSERT' then
    insert into partner_network.lead_status_history
      (assignment_id, partner_id, old_status, new_status)
    values (new.id, new.partner_id, null, new.status);
  elsif new.status is distinct from old.status then
    insert into partner_network.lead_status_history
      (assignment_id, partner_id, old_status, new_status, note)
    values (new.id, new.partner_id, old.status, new.status, new.partner_note);
  end if;

  update partner_network.customer_leads
    set lead_status = case
      when new.status in ('accepted','contacted') then 'assigned'
      when new.status = 'in_progress' then 'in_progress'
      when new.status = 'completed' then 'completed'
      when new.status in ('invalid','expired') then 'cancelled'
      else lead_status
    end,
    assigned_at = coalesce(assigned_at, new.assigned_at)
    where id = new.lead_id;
  return new;
end;
$$;

drop trigger if exists lead_assignment_audit on partner_network.lead_assignments;
create trigger lead_assignment_audit
after insert or update of status on partner_network.lead_assignments
for each row execute function partner_network.log_lead_status_change();

-- Public enquiry intake. It stores contact details only after explicit consent.
-- Returns the new lead UUID; returns NULL for duplicate/rate-limited requests.
create or replace function public.partner_submit_customer_lead(
  p_page_path text,
  p_service_code text,
  p_service_name text,
  p_state text,
  p_district text,
  p_customer_name text,
  p_customer_phone text,
  p_customer_details text,
  p_consent_share boolean,
  p_consent_version text
) returns uuid
language plpgsql security definer
set search_path = partner_network, public, pg_temp
as $$
declare
  v_phone text := right(regexp_replace(coalesce(p_customer_phone,''), '\D', '', 'g'), 10);
  v_name text := left(trim(coalesce(p_customer_name,'')), 80);
  v_lead_id uuid;
begin
  if not coalesce(p_consent_share,false)
    or v_phone !~ '^[6-9][0-9]{9}$'
    or length(v_name) < 2
    or length(trim(coalesce(p_state,''))) < 2
    or length(trim(coalesce(p_district,''))) < 2
    or length(trim(coalesce(p_service_code,''))) < 2
    or length(trim(coalesce(p_service_name,''))) < 2
    or coalesce(p_consent_version,'') = '' then
    raise exception 'Invalid enquiry or missing consent';
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_phone, 0));

  if exists (
    select 1 from partner_network.customer_leads
    where customer_phone = v_phone
      and service_code = left(trim(p_service_code),80)
      and created_at > now() - interval '24 hours'
  ) then
    return null;
  end if;

  if (select count(*) from partner_network.customer_leads
      where customer_phone = v_phone and created_at > now() - interval '24 hours') >= 3 then
    return null;
  end if;

  if (select count(*) from partner_network.customer_leads
      where created_at > now() - interval '10 minutes') >= 100 then
    return null;
  end if;

  insert into partner_network.customer_leads (
    page_path, service_code, service_name, state, district,
    customer_name, customer_phone, customer_details,
    consent_share, consent_version
  ) values (
    left(trim(p_page_path),300), left(trim(p_service_code),80), left(trim(p_service_name),120),
    left(trim(p_state),60), left(trim(p_district),60), v_name, v_phone,
    nullif(left(trim(coalesce(p_customer_details,'')),800),''),
    true, left(trim(p_consent_version),40)
  ) returning id into v_lead_id;

  return v_lead_id;
end;
$$;

revoke all on function public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text) from public;
grant execute on function public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text) to anon, authenticated;

-- Partner status updates are constrained to their own assigned lead.
create or replace function public.partner_update_lead_status(
  p_assignment_id uuid,
  p_new_status text,
  p_note text default null
) returns boolean
language plpgsql security definer
set search_path = partner_network, public, pg_temp
as $$
declare
  v_current text;
  v_partner uuid := auth.uid();
begin
  if v_partner is null then raise exception 'Authentication required'; end if;
  if p_new_status not in ('accepted','rejected','contacted','in_progress','completed','disputed') then
    raise exception 'Invalid status';
  end if;

  select status into v_current
  from partner_network.lead_assignments
  where id = p_assignment_id and partner_id = v_partner
  for update;

  if not found then raise exception 'Lead not found'; end if;

  if not (
    (v_current = 'offered' and p_new_status in ('accepted','rejected'))
    or (v_current = 'accepted' and p_new_status in ('contacted','in_progress','disputed'))
    or (v_current = 'contacted' and p_new_status in ('in_progress','disputed'))
    or (v_current = 'in_progress' and p_new_status in ('completed','disputed'))
  ) then
    raise exception 'Invalid status transition';
  end if;

  update partner_network.lead_assignments
    set status = p_new_status, partner_note = nullif(left(trim(coalesce(p_note,'')),500),''),
        updated_at = now()
    where id = p_assignment_id and partner_id = v_partner;
  return true;
end;
$$;
revoke all on function public.partner_update_lead_status(uuid,text,text) from public;
grant execute on function public.partner_update_lead_status(uuid,text,text) to authenticated;

-- RLS: private schema tables are not exposed through PostgREST by default.
-- Explicit grants and policies below are intentionally narrow.
alter table partner_network.partner_profiles enable row level security;
alter table partner_network.partner_services enable row level security;
alter table partner_network.partner_service_areas enable row level security;
alter table partner_network.partner_entitlements enable row level security;
alter table partner_network.customer_leads enable row level security;
alter table partner_network.lead_assignments enable row level security;
alter table partner_network.lead_status_history enable row level security;

revoke all on all tables in schema partner_network from public, anon, authenticated;
revoke all on all sequences in schema partner_network from public, anon, authenticated;
grant usage on schema partner_network to authenticated;
grant usage on schema partner_network to service_role;
grant all privileges on all tables in schema partner_network to service_role;
grant usage, select on all sequences in schema partner_network to service_role;

grant select on partner_network.partner_profiles to authenticated;
grant insert (user_id, partner_type, business_name, owner_name, email, phone, state, district, pincode, csc_id)
  on partner_network.partner_profiles to authenticated;
grant update (business_name, owner_name, phone, state, district, pincode, csc_id)
  on partner_network.partner_profiles to authenticated;

grant select, insert, delete on partner_network.partner_services to authenticated;
grant select, insert, delete on partner_network.partner_service_areas to authenticated;
grant select on partner_network.partner_entitlements to authenticated;
grant select on partner_network.customer_leads to authenticated;
grant select on partner_network.lead_assignments to authenticated;
grant select on partner_network.lead_status_history to authenticated;

create policy partner_profile_read_own on partner_network.partner_profiles
  for select to authenticated using (user_id = auth.uid());
create policy partner_profile_insert_own_pending on partner_network.partner_profiles
  for insert to authenticated with check (
    user_id = auth.uid() and partner_origin = 'self_registration'
    and verification_status = 'pending' and account_status = 'pending'
  );
create policy partner_profile_update_own on partner_network.partner_profiles
  for update to authenticated using (user_id = auth.uid())
  with check (user_id = auth.uid());

create policy partner_services_read_own on partner_network.partner_services
  for select to authenticated using (partner_id = auth.uid());
create policy partner_services_insert_own on partner_network.partner_services
  for insert to authenticated with check (partner_id = auth.uid());
create policy partner_services_delete_own on partner_network.partner_services
  for delete to authenticated using (partner_id = auth.uid());

create policy partner_areas_read_own on partner_network.partner_service_areas
  for select to authenticated using (partner_id = auth.uid());
create policy partner_areas_insert_own on partner_network.partner_service_areas
  for insert to authenticated with check (partner_id = auth.uid());
create policy partner_areas_delete_own on partner_network.partner_service_areas
  for delete to authenticated using (partner_id = auth.uid());

create policy partner_entitlement_read_own on partner_network.partner_entitlements
  for select to authenticated using (partner_id = auth.uid());

create policy partner_leads_read_assigned on partner_network.customer_leads
  for select to authenticated using (
    exists (
      select 1 from partner_network.lead_assignments a
      where a.lead_id = customer_leads.id and a.partner_id = auth.uid()
    )
  );
create policy partner_assignments_read_own on partner_network.lead_assignments
  for select to authenticated using (partner_id = auth.uid());
create policy partner_history_read_own on partner_network.lead_status_history
  for select to authenticated using (partner_id = auth.uid());

-- No direct browser writes to leads, assignments, quotas, verification, premium status,
-- or audit history. Trusted Edge Functions/admin tools will perform those operations.
comment on schema partner_network is
  'Private business partner network; expose only through reviewed RPCs and trusted server functions.';


-- Authenticated, idempotent partner onboarding.
-- SECURITY INVOKER is intentional: this function does not bypass RLS or table grants.
-- It accepts editable profile fields, but derives the account identity from auth.uid()
-- and the email claim. Verification/account/premium/quota fields are never client inputs.
create or replace function public.partner_complete_registration(
  p_partner_type text,
  p_business_name text,
  p_owner_name text,
  p_phone text,
  p_state text,
  p_district text,
  p_service_code text
) returns text
language plpgsql
security invoker
set search_path = pg_catalog
as $$
declare
  v_user_id uuid := auth.uid();
  v_email text := lower(trim(coalesce(auth.jwt() ->> 'email', '')));
  v_phone text := regexp_replace(coalesce(p_phone, ''), '[^0-9]', '', 'g');
  v_service_name text;
  v_account_status text;
begin
  if v_user_id is null then
    raise exception 'Authentication required';
  end if;

  if v_email = ''
    or p_partner_type not in ('csc_vle','existing_business','new_business','cyber_cafe','consultant','other')
    or length(trim(coalesce(p_business_name,''))) not between 2 and 120
    or length(trim(coalesce(p_owner_name,''))) not between 2 and 80
    or v_phone !~ '^[6-9][0-9]{9}$'
    or length(trim(coalesce(p_state,''))) not between 2 and 60
    or length(trim(coalesce(p_district,''))) not between 2 and 60 then
    raise exception 'Please provide valid partner profile details';
  end if;

  v_service_name := case p_service_code
    when 'govt_form_assistance' then 'Government form assistance'
    when 'pan_tax_gst' then 'PAN / Tax / GST services'
    when 'business_registration' then 'Business registration'
    when 'insurance_vehicle' then 'Insurance / Vehicle services'
    when 'digital_documentation' then 'Digital documentation'
    when 'multiple_services' then 'Multiple services'
    else null
  end;

  if v_service_name is null then
    raise exception 'Unsupported primary service';
  end if;

  insert into partner_network.partner_profiles (
    user_id, partner_type, business_name, owner_name, email, phone, state, district
  ) values (
    v_user_id, p_partner_type, trim(p_business_name), trim(p_owner_name),
    v_email, v_phone, trim(p_state), trim(p_district)
  )
  on conflict (user_id) do update set
    business_name = excluded.business_name,
    owner_name = excluded.owner_name,
    phone = excluded.phone,
    state = excluded.state,
    district = excluded.district
  returning account_status into v_account_status;

  insert into partner_network.partner_services (partner_id, service_code, service_name)
  values (v_user_id, p_service_code, v_service_name)
  on conflict (partner_id, service_code) do nothing;

  insert into partner_network.partner_service_areas (partner_id, state, district)
  values (v_user_id, trim(p_state), trim(p_district))
  on conflict (partner_id, state, district) do nothing;

  return v_account_status;
end;
$$;

revoke all on function public.partner_complete_registration(text,text,text,text,text,text,text) from public, anon;
grant execute on function public.partner_complete_registration(text,text,text,text,text,text,text) to authenticated;
comment on function public.partner_complete_registration(text,text,text,text,text,text,text) is
  'Creates or updates only the signed-in partner profile and primary service/area; never activates or verifies the account.';


-- Minimal portal gate RPC. It returns only the signed-in partner's approval
-- state and starter quota; customer leads and contact details are never returned.
create or replace function public.partner_get_portal_access()
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_user_id uuid := auth.uid();
  v_profile record;
  v_entitlement record;
begin
  if v_user_id is null then
    raise exception 'Authentication required';
  end if;

  select p.account_status, p.verification_status, p.business_name, p.owner_name
    into v_profile
  from partner_network.partner_profiles p
  where p.user_id = v_user_id;

  if not found then
    return jsonb_build_object('profile_exists', false);
  end if;

  select e.free_leads_granted, e.free_leads_used, e.premium_status
    into v_entitlement
  from partner_network.partner_entitlements e
  where e.partner_id = v_user_id;

  return jsonb_build_object(
    'profile_exists', true,
    'account_status', v_profile.account_status,
    'verification_status', v_profile.verification_status,
    'business_name', v_profile.business_name,
    'owner_name', v_profile.owner_name,
    'free_leads_granted', coalesce(v_entitlement.free_leads_granted, 10),
    'free_leads_used', coalesce(v_entitlement.free_leads_used, 0),
    'premium_status', coalesce(v_entitlement.premium_status, 'not_eligible')
  );
end;
$$;

revoke all on function public.partner_get_portal_access() from public, anon;
grant execute on function public.partner_get_portal_access() to authenticated;
comment on function public.partner_get_portal_access() is
  'Returns only the current authenticated partner approval state and entitlement summary for the portal gate.';

-- Live partner dashboard RPC. Customer details are returned only to the
-- authenticated partner who owns the exclusive assignment, and only after approval.
create or replace function public.partner_get_dashboard_data()
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_user_id uuid := auth.uid();
  v_profile record;
  v_entitlement record;
  v_total integer;
  v_offered integer;
  v_accepted integer;
  v_active integer;
  v_completed integer;
  v_leads jsonb;
begin
  if v_user_id is null then raise exception 'Authentication required'; end if;

  select p.account_status, p.verification_status, p.business_name, p.owner_name,
         p.partner_type, p.state, p.district, p.phone
    into v_profile
  from partner_network.partner_profiles p
  where p.user_id = v_user_id;

  if not found then raise exception 'Partner profile not found'; end if;
  if v_profile.account_status <> 'active' or v_profile.verification_status <> 'verified' then
    raise exception 'Partner approval required';
  end if;

  select e.free_leads_granted, e.free_leads_used, e.premium_status
    into v_entitlement
  from partner_network.partner_entitlements e
  where e.partner_id = v_user_id;

  select count(*)::integer,
         count(*) filter (where status = 'offered')::integer,
         count(*) filter (where status in ('accepted','contacted'))::integer,
         count(*) filter (where status = 'in_progress')::integer,
         count(*) filter (where status = 'completed')::integer
    into v_total, v_offered, v_accepted, v_active, v_completed
  from partner_network.lead_assignments
  where partner_id = v_user_id;

  select coalesce(jsonb_agg(jsonb_build_object(
    'assignment_id', x.id,
    'lead_id', x.lead_id,
    'assigned_at', x.assigned_at,
    'status', x.status,
    'service_name', x.service_name,
    'state', x.state,
    'district', x.district,
    'customer_name', x.customer_name,
    'customer_phone', x.customer_phone,
    'customer_details', x.customer_details
  ) order by x.assigned_at desc), '[]'::jsonb)
    into v_leads
  from (
    select a.id, a.lead_id, a.assigned_at, a.status,
           l.service_name, l.state, l.district, l.customer_name,
           l.customer_phone, l.customer_details
    from partner_network.lead_assignments a
    join partner_network.customer_leads l on l.id = a.lead_id
    where a.partner_id = v_user_id
    order by a.assigned_at desc
    limit 50
  ) x;

  return jsonb_build_object(
    'profile', jsonb_build_object(
      'business_name', v_profile.business_name,
      'owner_name', v_profile.owner_name,
      'partner_type', v_profile.partner_type,
      'state', v_profile.state,
      'district', v_profile.district,
      'phone', v_profile.phone
    ),
    'entitlement', jsonb_build_object(
      'free_leads_granted', coalesce(v_entitlement.free_leads_granted, 10),
      'free_leads_used', coalesce(v_entitlement.free_leads_used, 0),
      'free_leads_remaining', greatest(coalesce(v_entitlement.free_leads_granted, 10) - coalesce(v_entitlement.free_leads_used, 0), 0),
      'premium_status', coalesce(v_entitlement.premium_status, 'not_eligible')
    ),
    'stats', jsonb_build_object(
      'total', coalesce(v_total, 0),
      'offered', coalesce(v_offered, 0),
      'accepted', coalesce(v_accepted, 0),
      'in_progress', coalesce(v_active, 0),
      'completed', coalesce(v_completed, 0)
    ),
    'leads', v_leads
  );
end;
$$;

revoke all on function public.partner_get_dashboard_data() from public, anon;
grant execute on function public.partner_get_dashboard_data() to authenticated;
comment on function public.partner_get_dashboard_data() is
  'Returns the approved partner own profile, quota, aggregate stats and latest 50 exclusively assigned leads.';

-- Admin authorization is an explicit allowlist. No browser/user-facing flow can
-- insert or promote an admin. Bootstrap the first owner manually in Supabase SQL
-- Editor only after verifying that Auth user ID through a trusted process.
create table if not exists partner_network.admin_memberships (
  user_id uuid primary key references auth.users(id) on delete cascade,
  admin_role text not null check (admin_role in ('owner','admin','support')),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists partner_network.admin_action_history (
  id bigint generated always as identity primary key,
  actor_user_id uuid not null references auth.users(id) on delete restrict,
  target_partner_id uuid references partner_network.partner_profiles(user_id) on delete set null,
  action text not null check (action in ('approve','reject','suspend','reactivate')),
  note text check (note is null or length(note) <= 500),
  created_at timestamptz not null default now()
);

alter table partner_network.admin_memberships enable row level security;
alter table partner_network.admin_action_history enable row level security;
revoke all on partner_network.admin_memberships, partner_network.admin_action_history from public, anon, authenticated;
grant all privileges on partner_network.admin_memberships, partner_network.admin_action_history to service_role;

create or replace function public.partner_admin_is_authorized()
returns boolean
language sql
stable
security definer
set search_path = pg_catalog
as $$
  select exists (
    select 1 from partner_network.admin_memberships m
    where m.user_id = auth.uid() and m.is_active = true
  );
$$;
revoke all on function public.partner_admin_is_authorized() from public, anon;
grant execute on function public.partner_admin_is_authorized() to authenticated;

create or replace function public.partner_admin_get_overview()
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_total integer;
  v_pending integer;
  v_active integer;
  v_suspended integer;
  v_partners jsonb;
begin
  if auth.uid() is null or not public.partner_admin_is_authorized() then
    raise exception 'Admin access required';
  end if;

  select count(*)::integer,
         count(*) filter (where account_status = 'pending')::integer,
         count(*) filter (where account_status = 'active' and verification_status = 'verified')::integer,
         count(*) filter (where account_status = 'suspended')::integer
    into v_total, v_pending, v_active, v_suspended
  from partner_network.partner_profiles;

  select coalesce(jsonb_agg(to_jsonb(p) order by p.created_at desc), '[]'::jsonb)
    into v_partners
  from (
    select p.user_id, p.partner_type, p.business_name, p.owner_name, p.email,
           p.phone, p.state, p.district, p.partner_origin, p.verification_status,
           p.account_status, p.created_at,
           coalesce(e.free_leads_granted,10) as free_leads_granted,
           coalesce(e.free_leads_used,0) as free_leads_used,
           coalesce(e.premium_status,'not_eligible') as premium_status
    from partner_network.partner_profiles p
    left join partner_network.partner_entitlements e on e.partner_id = p.user_id
    order by p.created_at desc
    limit 200
  ) p;

  return jsonb_build_object(
    'stats',jsonb_build_object('total',coalesce(v_total,0),'pending',coalesce(v_pending,0),'active',coalesce(v_active,0),'suspended',coalesce(v_suspended,0)),
    'partners',v_partners
  );
end;
$$;
revoke all on function public.partner_admin_get_overview() from public, anon;
grant execute on function public.partner_admin_get_overview() to authenticated;

create or replace function public.partner_admin_review_partner(
  p_partner_id uuid,
  p_decision text,
  p_note text default null
) returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_actor uuid := auth.uid();
  v_verification text;
  v_account text;
begin
  if v_actor is null or not public.partner_admin_is_authorized() then
    raise exception 'Admin access required';
  end if;
  if p_decision not in ('approve','reject','suspend','reactivate') then
    raise exception 'Invalid admin decision';
  end if;

  select verification_status, account_status
    into v_verification, v_account
  from partner_network.partner_profiles
  where user_id = p_partner_id
  for update;
  if not found then raise exception 'Partner not found'; end if;

  if p_decision = 'approve' then
    update partner_network.partner_profiles
      set verification_status='verified', account_status='active', updated_at=now()
      where user_id=p_partner_id;
  elsif p_decision = 'reject' then
    update partner_network.partner_profiles
      set verification_status='rejected', account_status='pending', updated_at=now()
      where user_id=p_partner_id;
  elsif p_decision = 'suspend' then
    update partner_network.partner_profiles
      set account_status='suspended', updated_at=now()
      where user_id=p_partner_id;
  else
    if v_verification <> 'verified' then
      raise exception 'Only verified partners can be reactivated';
    end if;
    update partner_network.partner_profiles
      set account_status='active', updated_at=now()
      where user_id=p_partner_id;
  end if;

  insert into partner_network.admin_action_history(actor_user_id,target_partner_id,action,note)
  values(v_actor,p_partner_id,p_decision,nullif(left(trim(coalesce(p_note,'')),500),''));

  return jsonb_build_object('success',true,'decision',p_decision);
end;
$$;
revoke all on function public.partner_admin_review_partner(uuid,text,text) from public, anon;
grant execute on function public.partner_admin_review_partner(uuid,text,text) to authenticated;

comment on table partner_network.admin_memberships is
  'Admin allowlist. Add first owner manually in trusted Supabase SQL Editor; never expose writes to client roles.';
comment on function public.partner_admin_review_partner(uuid,text,text) is
  'Admin-only partner approval/rejection/suspension/reactivation with immutable action audit.';

-- Trusted lead routing RPC. Only Supabase service_role may call it.
create or replace function public.partner_route_customer_lead(p_lead_id uuid)
returns jsonb language plpgsql security definer set search_path = pg_catalog as $$
declare
  v_lead partner_network.customer_leads%rowtype;
  v_partner_id uuid;
  v_assignment_id uuid;
begin
  if coalesce(auth.role(),'') <> 'service_role' then raise exception 'Trusted routing service required'; end if;
  if p_lead_id is null then raise exception 'Lead ID required'; end if;
  select * into v_lead from partner_network.customer_leads where id=p_lead_id for update;
  if not found then raise exception 'Lead not found'; end if;
  if v_lead.lead_status <> 'new' then return jsonb_build_object('assigned',false,'reason','lead_not_new'); end if;
  select p.user_id into v_partner_id
  from partner_network.partner_profiles p
  join partner_network.partner_entitlements e on e.partner_id=p.user_id
  join partner_network.partner_services s on s.partner_id=p.user_id
  where p.account_status='active' and p.verification_status='verified'
    and s.service_code=v_lead.service_code
    and exists (select 1 from partner_network.partner_service_areas a
      where a.partner_id=p.user_id and lower(trim(a.state))=lower(trim(v_lead.state))
        and (a.district is null or lower(trim(a.district))=lower(trim(v_lead.district))))
    and (e.free_leads_used < e.free_leads_granted or e.premium_status='active')
  order by
    case when exists (select 1 from partner_network.partner_service_areas a
      where a.partner_id=p.user_id and lower(trim(a.state))=lower(trim(v_lead.state))
        and a.district is not null and lower(trim(a.district))=lower(trim(v_lead.district))) then 0 else 1 end,
    (select count(*) from partner_network.lead_assignments la where la.partner_id=p.user_id and la.assigned_at>now()-interval '7 days') asc,
    p.created_at asc
  for update of p,e skip locked limit 1;
  if v_partner_id is null then return jsonb_build_object('assigned',false,'reason','no_eligible_partner'); end if;
  insert into partner_network.lead_assignments(lead_id,partner_id,status) values(p_lead_id,v_partner_id,'offered') returning id into v_assignment_id;
  return jsonb_build_object('assigned',true,'assignment_id',v_assignment_id,'partner_id',v_partner_id);
exception when unique_violation then return jsonb_build_object('assigned',false,'reason','already_assigned');
end; $$;
revoke all on function public.partner_route_customer_lead(uuid) from public,anon,authenticated;
grant execute on function public.partner_route_customer_lead(uuid) to service_role;
comment on function public.partner_route_customer_lead(uuid) is 'Service-role-only exclusive routing by service and state/district. Prefers exact district match, balances recent volume, and atomically charges quota.'
