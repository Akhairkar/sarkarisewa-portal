-- Least-privilege browser permissions for subscriber, lead and push modules.
-- Run after the base schemas (schema.sql, csc-claims-public.sql,
-- csc-status-votes.sql, sahayak.sql and push.sql) have been installed.
-- No rows are deleted or rewritten. Public submission RPCs and INSERT flows
-- are retained; admin browser writes are restricted to the required columns.

begin;

-- Subscribers: public signup INSERT remains available; only admins can read.
-- The admin page is read-only and exports data locally in the browser.
alter table public.subscribers enable row level security;
revoke update, delete, truncate, references, trigger on public.subscribers from public, anon, authenticated;
grant insert on public.subscribers to anon, authenticated;
grant select on public.subscribers to authenticated;
drop policy if exists "Anyone can subscribe" on public.subscribers;
create policy "Anyone can subscribe" on public.subscribers
  for insert to anon, authenticated with check (true);
drop policy if exists "Admin can read subscribers" on public.subscribers;
drop policy if exists "Authenticated admin can read subscribers" on public.subscribers;
create policy "Admin can read subscribers" on public.subscribers
  for select to authenticated using (public.is_admin());

-- CSC contact/feedback events: visitors may insert; only admins may read.
-- There are no browser update/delete actions for these event tables.
alter table public.csc_leads enable row level security;
revoke all on public.csc_leads from public, anon, authenticated;
grant insert (application_id, action, page) on public.csc_leads to anon, authenticated;
grant select on public.csc_leads to authenticated;
drop policy if exists "anon can log csc lead" on public.csc_leads;
drop policy if exists "admin reads csc leads" on public.csc_leads;
create policy "Visitors can log CSC lead events" on public.csc_leads
  for insert to anon, authenticated
  with check (length(application_id) <= 50 and action in ('call','whatsapp','map','profile') and coalesce(length(page),0) <= 300);
create policy "Admins can read CSC lead events" on public.csc_leads
  for select to authenticated using (public.is_admin());

alter table public.csc_feedback enable row level security;
revoke all on public.csc_feedback from public, anon, authenticated;
grant insert (application_id, mobile, customers, message) on public.csc_feedback to anon, authenticated;
grant select on public.csc_feedback to authenticated;
drop policy if exists "anon can send csc feedback" on public.csc_feedback;
drop policy if exists "admin reads csc feedback" on public.csc_feedback;
create policy "Visitors can submit CSC feedback" on public.csc_feedback
  for insert to anon, authenticated
  with check (length(application_id) <= 50 and length(mobile) between 5 and 20
    and (customers is null or customers between 0 and 10000)
    and coalesce(length(message),0) <= 1000);
create policy "Admins can read CSC feedback" on public.csc_feedback
  for select to authenticated using (public.is_admin());

-- Sahayak leads: preserve visitor INSERT, keep lead/contact data admin-only.
alter table public.sahayak_leads enable row level security;
revoke all on public.sahayak_leads from public, anon, authenticated;
grant insert (kind, provider_id, state, district, service, name, phone, message, consent, page)
  on public.sahayak_leads to anon, authenticated;
grant select on public.sahayak_leads to authenticated;
drop policy if exists "anyone can send sahayak lead" on public.sahayak_leads;
drop policy if exists "admin reads sahayak leads" on public.sahayak_leads;
create policy "Visitors can submit Sahayak leads" on public.sahayak_leads
  for insert to anon, authenticated with check (
    kind in ('request','call','whatsapp')
    and state ~ '^[a-z-]{3,40}$'
    and coalesce(length(district),0) <= 60
    and coalesce(length(service),0) <= 40
    and coalesce(length(name),0) <= 60
    and coalesce(length(message),0) <= 300
    and coalesce(length(page),0) <= 200
    and (kind <> 'request' or (consent and phone ~ '^[6-9][0-9]{9}$'
      and length(name) >= 2 and length(district) >= 2))
  );
create policy "Admins can read Sahayak leads" on public.sahayak_leads
  for select to authenticated using (public.is_admin());

-- CSC status votes: preserve narrow visitor INSERT; admin-only SELECT.
alter table public.csc_status_votes enable row level security;
revoke all on public.csc_status_votes from public, anon, authenticated;
grant insert (centre_key, csc_id, vote, voter, page) on public.csc_status_votes to anon, authenticated;
grant select on public.csc_status_votes to authenticated;
drop policy if exists "visitors add csc status votes" on public.csc_status_votes;
drop policy if exists "admin reads csc status votes" on public.csc_status_votes;
create policy "Visitors can submit CSC status votes" on public.csc_status_votes
  for insert to anon, authenticated with check (
    vote in (1,-1) and length(centre_key) between 8 and 160
    and length(voter) between 16 and 40
    and coalesce(length(csc_id),0) <= 40 and coalesce(length(page),0) <= 200
  );
create policy "Admins can read CSC status votes" on public.csc_status_votes
  for select to authenticated using (public.is_admin());

-- Push campaigns: admin UI can create campaigns and cancel queued ones only.
-- Sender updates are performed by SECURITY DEFINER RPCs using the send key.
alter table public.push_campaigns enable row level security;
revoke all on public.push_campaigns from public, anon, authenticated;
grant select on public.push_campaigns to authenticated;
grant insert (topic, title, body, url) on public.push_campaigns to authenticated;
grant update (status) on public.push_campaigns to authenticated;
drop policy if exists push_campaigns_admin_read on public.push_campaigns;
drop policy if exists push_campaigns_admin_insert on public.push_campaigns;
drop policy if exists push_campaigns_admin_cancel on public.push_campaigns;
create policy push_campaigns_admin_read on public.push_campaigns
  for select to authenticated using (public.is_admin());
create policy push_campaigns_admin_insert on public.push_campaigns
  for insert to authenticated with check (
    public.is_admin() and status = 'queued' and sent_count = 0 and failed_count = 0
  );
create policy push_campaigns_admin_cancel on public.push_campaigns
  for update to authenticated using (public.is_admin() and status = 'queued')
  with check (public.is_admin() and status = 'cancelled');

-- Push subscriptions and configuration remain inaccessible directly from the
-- browser. Visitors interact only through push_subscribe/unsubscribe RPCs.
revoke all on public.push_subscriptions, public.push_config from public, anon, authenticated;

commit;
