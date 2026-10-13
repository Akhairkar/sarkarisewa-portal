-- Lead hand-off to a verified CSC, done by the admin through WhatsApp
-- (admin/requests.html): which approved centre got the request, when the
-- centre was told about the task (without the customer's number), when it
-- accepted and was sent the number, when the customer was told, and how it went.
alter table public.service_requests
  add column if not exists csc_claim_id uuid references public.csc_claims(id) on delete set null,
  add column if not exists csc_told_at timestamptz,
  add column if not exists csc_accepted_at timestamptz,
  add column if not exists customer_told_at timestamptz,
  add column if not exists feedback text check (feedback is null or feedback in ('good','complaint','no_response'));
create index if not exists service_requests_csc on public.service_requests (csc_claim_id);
