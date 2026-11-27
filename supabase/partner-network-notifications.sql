-- Partner notification inbox: private, partner-scoped and generated on assignment.
create table if not exists partner_network.partner_notifications (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partner_network.partner_profiles(user_id) on delete cascade,
  assignment_id uuid not null references partner_network.lead_assignments(id) on delete cascade,
  notification_type text not null check (notification_type in ('new_lead_assigned')),
  title text not null check (length(title) between 1 and 120),
  body text not null check (length(body) between 1 and 300),
  created_at timestamptz not null default now(),
  read_at timestamptz,
  constraint partner_notifications_assignment_type_unique unique (assignment_id, notification_type)
);
create index if not exists partner_notifications_partner_created_idx
  on partner_network.partner_notifications(partner_id, created_at desc);
create index if not exists partner_notifications_unread_idx
  on partner_network.partner_notifications(partner_id, created_at desc)
  where read_at is null;

alter table partner_network.partner_notifications enable row level security;
revoke all on partner_network.partner_notifications from public, anon, authenticated;
grant all privileges on partner_network.partner_notifications to service_role;

create or replace function partner_network.notify_partner_on_lead_assignment()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_service text;
  v_district text;
  v_state text;
begin
  select l.service_name, l.district, l.state
    into v_service, v_district, v_state
  from partner_network.customer_leads l
  where l.id = new.lead_id;

  insert into partner_network.partner_notifications(
    partner_id, assignment_id, notification_type, title, body
  )
  values (
    new.partner_id,
    new.id,
    'new_lead_assigned',
    'New service enquiry assigned',
    left(
      'A ' || coalesce(v_service, 'service') ||
      ' enquiry is assigned in ' ||
      coalesce(nullif(v_district,''), 'your area') ||
      case when nullif(v_state,'') is not null then ', ' || v_state else '' end ||
      '. Open My Leads to review it.',
      300
    )
  )
  on conflict (assignment_id, notification_type) do nothing;

  return new;
end;
$$;

revoke all on function partner_network.notify_partner_on_lead_assignment() from public, anon, authenticated, service_role;

drop trigger if exists partner_assignment_notification on partner_network.lead_assignments;
create trigger partner_assignment_notification
after insert on partner_network.lead_assignments
for each row execute function partner_network.notify_partner_on_lead_assignment();

create or replace function public.partner_get_notifications(p_limit integer default 30)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_partner uuid := auth.uid();
  v_rows jsonb;
  v_unread integer;
begin
  if v_partner is null then raise exception 'Authentication required'; end if;
  if p_limit is null or p_limit < 1 or p_limit > 50 then
    raise exception 'Notification limit must be between 1 and 50';
  end if;

  if not exists (
    select 1 from partner_network.partner_profiles p
    where p.user_id = v_partner
      and p.account_status = 'active'
      and p.verification_status = 'verified'
  ) then
    raise exception 'Active verified partner access required';
  end if;

  select count(*)::integer into v_unread
  from partner_network.partner_notifications n
  where n.partner_id = v_partner and n.read_at is null;

  select coalesce(jsonb_agg(to_jsonb(x) order by x.created_at desc), '[]'::jsonb)
    into v_rows
  from (
    select n.id, n.assignment_id, n.notification_type, n.title, n.body,
           n.created_at, n.read_at
    from partner_network.partner_notifications n
    where n.partner_id = v_partner
    order by n.created_at desc
    limit p_limit
  ) x;

  return jsonb_build_object('unread_count', coalesce(v_unread,0), 'notifications', v_rows);
end;
$$;
revoke all on function public.partner_get_notifications(integer) from public, anon;
grant execute on function public.partner_get_notifications(integer) to authenticated;

create or replace function public.partner_mark_notification_read(p_notification_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_partner uuid := auth.uid();
  v_changed integer;
begin
  if v_partner is null then raise exception 'Authentication required'; end if;
  if not exists (
    select 1 from partner_network.partner_profiles p
    where p.user_id = v_partner
      and p.account_status = 'active'
      and p.verification_status = 'verified'
  ) then
    raise exception 'Active verified partner access required';
  end if;

  update partner_network.partner_notifications
  set read_at = coalesce(read_at, now())
  where id = p_notification_id and partner_id = v_partner;
  get diagnostics v_changed = row_count;

  return jsonb_build_object('success', v_changed = 1);
end;
$$;
revoke all on function public.partner_mark_notification_read(uuid) from public, anon;
grant execute on function public.partner_mark_notification_read(uuid) to authenticated;

comment on table partner_network.partner_notifications is
  'Private in-dashboard notifications. Customer name, phone and enquiry details are deliberately excluded.';
