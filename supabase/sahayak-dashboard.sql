-- Seva Sahayak helper dashboard: each approved helper gets a private link
-- (/sahayak/kaam.html#k=<dash_token>) that shows how many visitors contacted
-- them and the help requests assigned to them. Additive: existing columns,
-- policies and grants are unchanged. Visitors still can only insert.

alter table public.sahayak_providers
  add column if not exists dash_token text unique default replace(gen_random_uuid()::text, '-', '');
update public.sahayak_providers set dash_token = replace(gen_random_uuid()::text, '-', '') where dash_token is null;
alter table public.sahayak_providers alter column dash_token set not null;

alter table public.sahayak_leads
  add column if not exists assigned_to uuid references public.sahayak_providers(id) on delete set null,
  add column if not exists assigned_at timestamptz,
  add column if not exists status text not null default 'new';
alter table public.sahayak_leads drop constraint if exists sahayak_leads_status;
alter table public.sahayak_leads add constraint sahayak_leads_status check (status in ('new', 'contacted', 'done', 'no_response'));
create index if not exists sahayak_leads_assigned on public.sahayak_leads (assigned_to) where assigned_to is not null;

-- Admin can assign a request to a helper and change its status.
grant update (assigned_to, assigned_at, status) on public.sahayak_leads to authenticated;
drop policy if exists "admin updates sahayak leads" on public.sahayak_leads;
create policy "admin updates sahayak leads" on public.sahayak_leads for update to authenticated
  using ((select is_admin())) with check ((select is_admin()));

-- A new help request goes straight to the least-busy approved helper of that
-- district who does that service (prefers "meets in person" when the visitor
-- asked for it). No match: it stays unassigned for the admin.
create or replace function public.sahayak_autoassign() returns trigger
language plpgsql security definer set search_path = '' as $$
declare pid uuid;
begin
  if new.kind = 'request' and new.assigned_to is null then
    select p.id into pid from public.sahayak_providers p
    where p.status = 'approved' and p.state = new.state
      and lower(p.district) = lower(coalesce(new.district, ''))
      and (new.service is null or new.service = any (p.services))
    order by (case when coalesce(new.message, '') like '%आमने-सामने%' and p.meets_in_person then 0 else 1 end),
      (select count(*) from public.sahayak_leads l where l.assigned_to = p.id and l.assigned_at > now() - interval '30 days'),
      p.approved_at
    limit 1;
    if pid is not null then new.assigned_to := pid; new.assigned_at := now(); end if;
  end if;
  return new;
end $$;
revoke all on function public.sahayak_autoassign() from public, anon, authenticated;
drop trigger if exists sahayak_leads_z_assign on public.sahayak_leads;
create trigger sahayak_leads_z_assign before insert on public.sahayak_leads for each row execute function public.sahayak_autoassign();

-- What a helper sees: counts and their own assigned requests. The token is
-- the secret (128 random bits); a wrong or unapproved token returns null.
create or replace function public.sahayak_dashboard(p_token text) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare p record;
begin
  if p_token is null or p_token !~ '^[a-f0-9]{32}$' then return null; end if;
  select id, name, business_name, state, district, status, approved_at into p
    from public.sahayak_providers where dash_token = p_token;
  if not found or p.status <> 'approved' then return null; end if;
  return jsonb_build_object(
    'id', p.id, 'name', p.name, 'business', p.business_name, 'state', p.state, 'district', p.district,
    'approved_at', p.approved_at,
    'calls', (select count(*) from public.sahayak_leads l where l.provider_id = p.id and l.kind = 'call'),
    'whatsapp', (select count(*) from public.sahayak_leads l where l.provider_id = p.id and l.kind = 'whatsapp'),
    'contacts30', (select count(*) from public.sahayak_leads l where l.provider_id = p.id and l.kind in ('call', 'whatsapp') and l.created_at > now() - interval '30 days'),
    'assigned', (select count(*) from public.sahayak_leads l where l.assigned_to = p.id),
    'done', (select count(*) from public.sahayak_leads l where l.assigned_to = p.id and l.status = 'done'),
    'requests', coalesce((select jsonb_agg(jsonb_build_object('id', r.id, 'date', r.created_at, 'name', r.name, 'phone', r.phone,
        'district', r.district, 'service', r.service, 'message', r.message, 'status', r.status) order by r.created_at desc)
      from (select * from public.sahayak_leads where assigned_to = p.id order by created_at desc limit 100) r), '[]'::jsonb));
end $$;

create or replace function public.sahayak_set_lead_status(p_token text, p_lead bigint, p_status text) returns boolean
language plpgsql security definer set search_path = '' as $$
declare n int;
begin
  if p_token is null or p_token !~ '^[a-f0-9]{32}$' or p_status not in ('contacted', 'done', 'no_response') then return false; end if;
  update public.sahayak_leads l set status = p_status
   where l.id = p_lead and l.assigned_to = (select id from public.sahayak_providers where dash_token = p_token and status = 'approved');
  get diagnostics n = row_count;
  return n > 0;
end $$;

revoke all on function public.sahayak_dashboard(text), public.sahayak_set_lead_status(text, bigint, text) from public, anon, authenticated;
grant execute on function public.sahayak_dashboard(text), public.sahayak_set_lead_status(text, bigint, text) to anon, authenticated;
