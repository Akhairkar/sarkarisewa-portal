-- Require an active, verified partner before changing any lead status.
-- This also blocks suspended/rejected accounts from updating older assignments.
create or replace function public.partner_update_lead_status(
  p_assignment_id uuid,
  p_new_status text,
  p_note text default null
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog
as $function$
declare
  v_current text;
  v_partner uuid := auth.uid();
begin
  if v_partner is null then
    raise exception 'Authentication required';
  end if;

  if not exists (
    select 1
    from partner_network.partner_profiles p
    where p.user_id = v_partner
      and p.account_status = 'active'
      and p.verification_status = 'verified'
  ) then
    raise exception 'Active verified partner access required';
  end if;

  if p_new_status not in ('accepted','rejected','contacted','in_progress','completed','disputed') then
    raise exception 'Invalid status';
  end if;

  select a.status into v_current
  from partner_network.lead_assignments a
  where a.id = p_assignment_id
    and a.partner_id = v_partner
  for update;

  if not found then
    raise exception 'Lead not found';
  end if;

  if not (
    (v_current = 'offered' and p_new_status in ('accepted','rejected'))
    or (v_current = 'accepted' and p_new_status in ('contacted','in_progress','disputed'))
    or (v_current = 'contacted' and p_new_status in ('in_progress','disputed'))
    or (v_current = 'in_progress' and p_new_status in ('completed','disputed'))
  ) then
    raise exception 'Invalid status transition';
  end if;

  update partner_network.lead_assignments
  set status = p_new_status,
      partner_note = nullif(left(trim(coalesce(p_note,'')),500),''),
      updated_at = now()
  where id = p_assignment_id
    and partner_id = v_partner;

  return true;
end;
$function$;

revoke all on function public.partner_update_lead_status(uuid,text,text) from public, anon;
grant execute on function public.partner_update_lead_status(uuid,text,text) to authenticated;
