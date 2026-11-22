-- Admin module least-privilege hardening.
-- Apply only after confirming the listed tables exist in the target Supabase project.
-- This migration does not delete or rewrite rows and preserves public form INSERT
-- flows; it narrows browser UPDATE/DELETE privileges to the fields/actions used
-- by the authenticated admin UI. RLS remains the row-level authorization layer.

begin;

-- CSC claims: public claim submission remains INSERT-only. Admin UI updates
-- only these fields (including the pause flag used by Requests).
revoke update, delete on table public.csc_claims from public, anon, authenticated;
grant select on table public.csc_claims to authenticated;
grant update (
  admin_notes, photo_url, updated_at, edit_code_hash,
  status, approved_at, reviewed_at, profile_url, profile_generated_at,
  public_phone, public_whatsapp, rejection_reason, leads_paused
) on table public.csc_claims to authenticated;

-- Sahayak: public provider signup / lead INSERT privileges are unchanged.
-- Admin UI only changes approval state and approval timestamp.
revoke update on table public.sahayak_providers from public, anon, authenticated;
grant select on table public.sahayak_providers to authenticated;
grant update (status, approved_at) on table public.sahayak_providers to authenticated;

-- Service requests: retain admin delete (the UI has an explicit delete action),
-- but restrict updates to fields actually written by admin-requests.js.
revoke update, delete on table public.service_requests from public, anon, authenticated;
grant select, delete on table public.service_requests to authenticated;
grant update (
  updated_at, csc_claim_id, csc_told_at, assigned_to, status,
  csc_accepted_at, customer_told_at, admin_notes, skipped_claim_ids, feedback
) on table public.service_requests to authenticated;

-- Solar leads: public lead submission remains unchanged. Admin can read rows
-- and change only the workflow status.
revoke update on table public.solar_leads from public, anon, authenticated;
grant select on table public.solar_leads to authenticated;
grant update (status) on table public.solar_leads to authenticated;
alter table public.solar_leads enable row level security;
drop policy if exists solar_leads_admin_select on public.solar_leads;
create policy solar_leads_admin_select on public.solar_leads
  for select to authenticated using (public.is_admin());
drop policy if exists solar_leads_admin_update on public.solar_leads;
create policy solar_leads_admin_update on public.solar_leads
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

-- RC reports are written by the trusted Worker through its SECURITY DEFINER
-- logging function. The browser admin page is read-only.
revoke all on table public.rc_reports from public, anon, authenticated;
grant select on table public.rc_reports to authenticated;
alter table public.rc_reports enable row level security;
drop policy if exists rc_reports_admin_select on public.rc_reports;
create policy rc_reports_admin_select on public.rc_reports
  for select to authenticated using (public.is_admin());

commit;
