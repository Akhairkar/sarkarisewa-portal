-- CSCs that do not answer lead offers: the admin can pause leads for a
-- centre, and a request remembers which centres let it go (no reply or no)
-- so it is offered to the next one.
alter table public.csc_claims add column if not exists leads_paused boolean not null default false;
alter table public.service_requests add column if not exists skipped_claim_ids uuid[] not null default '{}';
