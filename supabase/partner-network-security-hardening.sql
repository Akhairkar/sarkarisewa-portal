-- Partner Network security hardening (test project migration)
-- Restrict trigger-only SECURITY DEFINER helpers to trigger invocation.
revoke all on function partner_network.create_partner_entitlement() from public, anon, authenticated, service_role;
revoke all on function partner_network.charge_free_lead_quota() from public, anon, authenticated, service_role;
revoke all on function partner_network.log_lead_status_change() from public, anon, authenticated, service_role;

alter function partner_network.create_partner_entitlement() set search_path = pg_catalog;
alter function partner_network.charge_free_lead_quota() set search_path = pg_catalog;
alter function partner_network.log_lead_status_change() set search_path = pg_catalog;

-- Cover foreign keys used for joins and referential checks.
create index if not exists admin_action_history_actor_idx
  on partner_network.admin_action_history (actor_user_id);
create index if not exists admin_action_history_target_partner_idx
  on partner_network.admin_action_history (target_partner_id);
create index if not exists admin_lead_action_history_actor_idx
  on partner_network.admin_lead_action_history (actor_user_id);
create index if not exists admin_lead_action_history_lead_idx
  on partner_network.admin_lead_action_history (lead_id);
create index if not exists lead_status_history_partner_idx
  on partner_network.lead_status_history (partner_id);

-- Evaluate auth.uid() once per statement in partner RLS policies.
alter policy partner_profile_read_own on partner_network.partner_profiles
  using (user_id = (select auth.uid()));
alter policy partner_profile_insert_own_pending on partner_network.partner_profiles
  with check (user_id = (select auth.uid()) and partner_origin = 'self_registration'
    and verification_status = 'pending' and account_status = 'pending');
alter policy partner_profile_update_own on partner_network.partner_profiles
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));
alter policy partner_services_read_own on partner_network.partner_services
  using (partner_id = (select auth.uid()));
alter policy partner_services_insert_own on partner_network.partner_services
  with check (partner_id = (select auth.uid()));
alter policy partner_services_delete_own on partner_network.partner_services
  using (partner_id = (select auth.uid()));
alter policy partner_areas_read_own on partner_network.partner_service_areas
  using (partner_id = (select auth.uid()));
alter policy partner_areas_insert_own on partner_network.partner_service_areas
  with check (partner_id = (select auth.uid()));
alter policy partner_areas_delete_own on partner_network.partner_service_areas
  using (partner_id = (select auth.uid()));
alter policy partner_entitlement_read_own on partner_network.partner_entitlements
  using (partner_id = (select auth.uid()));
alter policy partner_assignments_read_own on partner_network.lead_assignments
  using (partner_id = (select auth.uid()));
alter policy partner_history_read_own on partner_network.lead_status_history
  using (partner_id = (select auth.uid()));
alter policy partner_leads_read_assigned on partner_network.customer_leads
  using (exists (
    select 1 from partner_network.lead_assignments a
    where a.lead_id = customer_leads.id and a.partner_id = (select auth.uid())
  ));

-- Exposed SECURITY DEFINER RPCs qualify non-catalog objects explicitly.
alter function public.partner_submit_customer_lead(text,text,text,text,text,text,text,text,boolean,text)
  set search_path = pg_catalog;
alter function public.partner_update_lead_status(uuid,text,text)
  set search_path = pg_catalog;
