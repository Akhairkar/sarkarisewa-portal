-- Applied 2026-10-18: centres can ask for customer leads on the claim form
-- (claim-your-csc) and accept the lead rules. Admin requests page suggests
-- these centres first.
alter table public.csc_claims add column if not exists leads_opt_in boolean not null default false;
alter table public.csc_claims add column if not exists leads_rules_version text;
comment on column public.csc_claims.leads_opt_in is 'Centre asked for customer leads on the claim form and accepted the lead rules (leads_rules_version).';
