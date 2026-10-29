-- Seva Sahayak: people who help with government forms (online filing,
-- submitting papers at the office) list themselves for free; visitors of the
-- service guides contact them. SarkariSewa only connects the two and gives
-- no guarantee. Visitors and providers can only insert; admins read and
-- approve. Approved providers are public through sahayak_public.

create table if not exists public.sahayak_providers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business_name text,
  phone text not null,
  whatsapp text,
  state text not null,
  district text not null,
  area text,
  services text[] not null,
  meets_in_person boolean not null default false,
  online_work boolean not null default true,
  experience_years smallint,
  about text,
  consent_public boolean not null,
  agreed_rules boolean not null,
  status text not null default 'pending',
  admin_note text,
  created_at timestamptz not null default now(),
  approved_at timestamptz,
  constraint sahayak_status check (status in ('pending', 'approved', 'rejected')),
  constraint sahayak_phone check (phone ~ '^[6-9][0-9]{9}$' and (whatsapp is null or whatsapp ~ '^[6-9][0-9]{9}$')),
  constraint sahayak_text check (
    length(name) between 2 and 80 and coalesce(length(business_name), 0) <= 100
    and state ~ '^[a-z-]{3,40}$' and length(district) between 2 and 60
    and coalesce(length(area), 0) <= 120 and coalesce(length(about), 0) <= 600
    and coalesce(length(admin_note), 0) <= 300
    and cardinality(services) between 1 and 25
    and (experience_years is null or experience_years between 0 and 60)),
  constraint sahayak_consent check (consent_public and agreed_rules)
);
create index if not exists sahayak_providers_place on public.sahayak_providers (state, district) where status = 'approved';

create table if not exists public.sahayak_leads (
  id bigint generated always as identity primary key,
  kind text not null,                -- request (visitor form), call, whatsapp (button clicks)
  provider_id uuid references public.sahayak_providers(id) on delete set null,
  state text not null,
  district text,
  service text,
  name text,
  phone text,
  message text,
  consent boolean not null default false,
  page text,
  created_at timestamptz not null default now(),
  constraint sahayak_leads_kind check (kind in ('request', 'call', 'whatsapp')),
  constraint sahayak_leads_text check (
    state ~ '^[a-z-]{3,40}$' and coalesce(length(district), 0) <= 60 and coalesce(length(service), 0) <= 40
    and coalesce(length(name), 0) <= 60 and coalesce(length(message), 0) <= 300 and coalesce(length(page), 0) <= 200),
  constraint sahayak_leads_request check (
    kind <> 'request' or (consent and phone ~ '^[6-9][0-9]{9}$' and length(name) >= 2 and length(district) >= 2))
);

-- Spam guard: at most 5 provider sign-ups per phone, 5 help requests per phone a day.
create or replace function public.sahayak_limit() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_table_name = 'sahayak_providers' then
    if (select count(*) from public.sahayak_providers where phone = new.phone) >= 5 then
      raise exception 'too many sign-ups';
    end if;
  elsif new.kind = 'request' then
    if (select count(*) from public.sahayak_leads where phone = new.phone and created_at > now() - interval '1 day') >= 5 then
      raise exception 'too many requests';
    end if;
  end if;
  return new;
end $$;
drop trigger if exists sahayak_providers_limit on public.sahayak_providers;
create trigger sahayak_providers_limit before insert on public.sahayak_providers for each row execute function public.sahayak_limit();
drop trigger if exists sahayak_leads_limit on public.sahayak_leads;
create trigger sahayak_leads_limit before insert on public.sahayak_leads for each row execute function public.sahayak_limit();

alter table public.sahayak_providers enable row level security;
alter table public.sahayak_leads enable row level security;
revoke all on public.sahayak_providers, public.sahayak_leads from anon, authenticated;
grant insert (name, business_name, phone, whatsapp, state, district, area, services, meets_in_person,
  online_work, experience_years, about, consent_public, agreed_rules) on public.sahayak_providers to anon, authenticated;
grant insert (kind, provider_id, state, district, service, name, phone, message, consent, page)
  on public.sahayak_leads to anon, authenticated;
grant select, update on public.sahayak_providers to authenticated;
grant select on public.sahayak_leads to authenticated;
create policy "anyone can sign up as sahayak" on public.sahayak_providers for insert to anon, authenticated with check (true);
create policy "admin reads sahayak" on public.sahayak_providers for select to authenticated using ((select is_admin()));
create policy "admin updates sahayak" on public.sahayak_providers for update to authenticated using ((select is_admin())) with check ((select is_admin()));
create policy "anyone can send sahayak lead" on public.sahayak_leads for insert to anon, authenticated with check (true);
create policy "admin reads sahayak leads" on public.sahayak_leads for select to authenticated using ((select is_admin()));

-- Public list of approved providers (no admin note, no sign-up details).
create or replace view public.sahayak_public as
  select id, name, business_name, phone, whatsapp, state, district, area, services,
         meets_in_person, online_work, experience_years, about, approved_at
  from public.sahayak_providers where status = 'approved';
grant select on public.sahayak_public to anon, authenticated;

-- A simple view is updatable and new views get every privilege by default:
-- visitors may only read it.
revoke insert, update, delete, truncate, references, trigger on public.sahayak_public from anon, authenticated;
