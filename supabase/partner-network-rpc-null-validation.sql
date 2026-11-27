-- Reject NULL and invalid input values in privileged Partner Network RPCs.
-- All routines retain their existing authorization checks and pinned search_path.

create or replace function public.partner_admin_review_partner(
  p_partner_id uuid,
  p_decision text,
  p_note text default null
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $function$
declare
  v_actor uuid := auth.uid();
  v_verification text;
  v_account text;
begin
  if v_actor is null or not public.partner_admin_is_authorized() then
    raise exception 'Admin access required';
  end if;
  if p_partner_id is null then raise exception 'Partner ID required'; end if;
  if p_decision is null or p_decision not in ('approve','reject','suspend','reactivate') then
    raise exception 'Invalid admin decision';
  end if;

  select verification_status, account_status into v_verification, v_account
  from partner_network.partner_profiles where user_id=p_partner_id for update;
  if not found then raise exception 'Partner not found'; end if;

  if p_decision='approve' then
    update partner_network.partner_profiles set verification_status='verified',
      account_status='active', updated_at=now() where user_id=p_partner_id;
  elsif p_decision='reject' then
    update partner_network.partner_profiles set verification_status='rejected',
      account_status='pending', updated_at=now() where user_id=p_partner_id;
  elsif p_decision='suspend' then
    update partner_network.partner_profiles set account_status='suspended',
      updated_at=now() where user_id=p_partner_id;
  else
    if v_verification <> 'verified' then
      raise exception 'Only verified partners can be reactivated';
    end if;
    update partner_network.partner_profiles set account_status='active',
      updated_at=now() where user_id=p_partner_id;
  end if;

  insert into partner_network.admin_action_history(actor_user_id,target_partner_id,action,note)
  values(v_actor,p_partner_id,p_decision,nullif(left(trim(coalesce(p_note,'')),500),''));
  return jsonb_build_object('success',true,'decision',p_decision);
end;
$function$;

create or replace function public.partner_admin_get_leads(
  p_status text default 'all',
  p_limit integer default 100
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $function$
declare v_leads jsonb;
begin
  if auth.uid() is null or not public.partner_admin_is_authorized() then
    raise exception 'Admin access required';
  end if;
  if p_status is null or p_status not in ('all','new','assigned','in_progress','completed','cancelled','spam') then
    raise exception 'Invalid lead status filter';
  end if;
  if p_limit is null or p_limit < 1 or p_limit > 200 then
    raise exception 'Lead limit must be between 1 and 200';
  end if;

  select coalesce(jsonb_agg(to_jsonb(x) order by x.created_at desc),'[]'::jsonb)
  into v_leads
  from (
    select l.id,l.created_at,l.page_path,l.service_code,l.service_name,
      l.state,l.district,l.customer_name,l.customer_phone,l.customer_details,
      l.lead_status,l.assigned_at,a.id as assignment_id,a.status as assignment_status,
      p.business_name as partner_business_name,p.phone as partner_phone
    from partner_network.customer_leads l
    left join partner_network.lead_assignments a on a.lead_id=l.id
    left join partner_network.partner_profiles p on p.user_id=a.partner_id
    where p_status='all' or l.lead_status=p_status
    order by l.created_at desc limit p_limit
  ) x;
  return v_leads;
end;
$function$;

create or replace function public.partner_update_lead_status(
  p_assignment_id uuid, p_new_status text, p_note text default null
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog
as $function$
declare v_current text; v_partner uuid := auth.uid();
begin
  if v_partner is null then raise exception 'Authentication required'; end if;
  if not exists (
    select 1 from partner_network.partner_profiles p
    where p.user_id=v_partner and p.account_status='active'
      and p.verification_status='verified'
  ) then raise exception 'Active verified partner access required'; end if;
  if p_assignment_id is null then raise exception 'Assignment ID required'; end if;
  if p_new_status is null or p_new_status not in
    ('accepted','rejected','contacted','in_progress','completed','disputed') then
    raise exception 'Invalid status';
  end if;

  select a.status into v_current from partner_network.lead_assignments a
  where a.id=p_assignment_id and a.partner_id=v_partner for update;
  if not found then raise exception 'Lead not found'; end if;

  if not (
    (v_current='offered' and p_new_status in ('accepted','rejected'))
    or (v_current='accepted' and p_new_status in ('contacted','in_progress','disputed'))
    or (v_current='contacted' and p_new_status in ('in_progress','disputed'))
    or (v_current='in_progress' and p_new_status in ('completed','disputed'))
  ) then raise exception 'Invalid status transition'; end if;

  update partner_network.lead_assignments set status=p_new_status,
    partner_note=nullif(left(trim(coalesce(p_note,'')),500),''),
    updated_at=now()
  where id=p_assignment_id and partner_id=v_partner;
  return true;
end;
$function$;

revoke all on function public.partner_admin_review_partner(uuid,text,text) from public, anon;
grant execute on function public.partner_admin_review_partner(uuid,text,text) to authenticated;
revoke all on function public.partner_admin_get_leads(text,integer) from public, anon;
grant execute on function public.partner_admin_get_leads(text,integer) to authenticated;
revoke all on function public.partner_update_lead_status(uuid,text,text) from public, anon;
grant execute on function public.partner_update_lead_status(uuid,text,text) to authenticated;
