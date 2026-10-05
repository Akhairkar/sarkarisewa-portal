-- Public listing of approved CSC claims + duplicate guard (2026-10-05).
-- Only fields the operator chose to make public are exposed; owner name,
-- private mobile/email and admin notes stay private (no anon select on the table).
create or replace view public.csc_public_centres with (security_barrier = true) as
select
  application_id, centre_name, centre_type, years_of_operation,
  case when show_address then full_address end as full_address,
  locality, city, district, state, pincode,
  case when show_address then latitude end as latitude,
  case when show_address then longitude end as longitude,
  online_services, offline_services, custom_services,
  case when show_hours then working_hours end as working_hours,
  home_visit, appointment_required, public_phone, public_whatsapp, public_email,
  approved_at
from public.csc_claims
where status = 'approved' and state <> 'Test State';

grant select on public.csc_public_centres to anon, authenticated;

-- One open claim per mobile number: a second submission while one is pending
-- is rejected (stops repeat/spam submissions; old rows are untouched).
create or replace function public.csc_claims_no_duplicate()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if exists (
    select 1 from public.csc_claims c
    where regexp_replace(c.owner_mobile, '\D', '', 'g') = regexp_replace(new.owner_mobile, '\D', '', 'g')
      and c.status in ('pending', 'changes_requested')
  ) then
    raise exception 'DUPLICATE_PENDING_CLAIM' using errcode = 'P0001';
  end if;
  return new;
end $$;

drop trigger if exists csc_claims_no_duplicate on public.csc_claims;
create trigger csc_claims_no_duplicate before insert on public.csc_claims
for each row execute function public.csc_claims_no_duplicate();

-- Contact tracking and VLE feedback (2026-10-05). Visitors' Call/WhatsApp/Map
-- clicks on a listed centre are logged (no personal data); operators can tell
-- us they got customers. Only admins can read either table.
create table if not exists public.csc_leads (
  id bigint generated always as identity primary key,
  application_id varchar(50) not null,
  action varchar(20) not null check (action in ('call','whatsapp','map','profile')),
  page varchar(300),
  created_at timestamptz not null default now()
);
create index if not exists csc_leads_app_idx on public.csc_leads (application_id, created_at desc);
alter table public.csc_leads enable row level security;
create table if not exists public.csc_feedback (
  id bigint generated always as identity primary key,
  application_id varchar(50) not null,
  mobile varchar(20) not null,
  customers integer check (customers between 0 and 10000),
  message varchar(1000),
  created_at timestamptz not null default now()
);
alter table public.csc_feedback enable row level security;
create policy "anon can log csc lead" on public.csc_leads for insert to anon, authenticated with check (length(application_id) <= 50 and coalesce(length(page),0) <= 300);
create policy "admin reads csc leads" on public.csc_leads for select to authenticated using ((select is_admin()));
create policy "anon can send csc feedback" on public.csc_feedback for insert to anon, authenticated with check (length(application_id) <= 50 and length(mobile) between 5 and 20 and coalesce(length(message),0) <= 1000);
create policy "admin reads csc feedback" on public.csc_feedback for select to authenticated using ((select is_admin()));
grant insert on public.csc_leads, public.csc_feedback to anon, authenticated;
grant select on public.csc_leads, public.csc_feedback to authenticated;
