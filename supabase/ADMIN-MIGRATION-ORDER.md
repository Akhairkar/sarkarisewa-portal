# Supabase Migration Order — Admin Upgrade

This guide is a dependency map for the SQL files in this repository. It is based on source-file inspection only; it is **not** confirmation of the live Supabase schema, grants, policies, or migration history.

## Critical rules

1. Do not run every `.sql` file alphabetically, and do not rerun historical setup files blindly.
2. First inspect the target project's existing tables, columns, policies, function signatures, and grants. The live project may already contain later versions or manual changes.
3. Take a database backup/export before applying permission migrations.
4. Apply one reviewed migration at a time and verify its postconditions before continuing. Do not combine unrelated modules into one large SQL Editor execution.
5. Never apply these files to production merely because they are present in this branch. The admin upgrade branch has not been deployed and these SQL files have not been applied by this work.

## Recommended dependency order

The following is a **conditional order** for a project that is missing the corresponding objects. Skip base files whose objects are already present and reconcile differences first.

### A. Shared identity and content foundations

1. `schema.sql` — creates `comments`, `subscribers`, and `customers`.
2. `admin-policies.sql` — adds the legacy comments/subscribers admin policies. Run after `schema.sql`; it is a historical setup script and its CREATE POLICY statements are not safe to rerun without checking/dropping existing policies.
3. `security-hardening.sql` — defines `public.is_admin()` and hardens policies on comments, subscribers, CSC, content tables, and analytics. Requires its referenced tables to exist.
4. Relevant feature schemas only when needed: `services-schema.sql`, `blog-schema.sql`, `job-alerts-schema.sql`, `sahayak.sql`, `csc-claims-public.sql`, `csc-status-votes.sql`, `service-requests.sql` and their explicitly named follow-up migrations. Check each file's prerequisites and current live object definitions first.

### B. Analytics — preserve the newer INVOKER posture

1. `security-hardening.sql` may create the legacy Analytics RPCs as `SECURITY DEFINER`.
2. Then run the updated `analytics-schema.sql`, which recreates the five dashboard Analytics RPCs as `SECURITY INVOKER` and creates the constrained `analytics_heartbeat()` RPC.
3. Then run `analytics-rls-hardening.sql` to enforce the narrow heartbeat/table grants.
4. Do **not** rerun `security-hardening.sql` after step 2: it recreates the five Analytics RPCs as `SECURITY DEFINER` and can undo the newer function posture. If security-hardening must be rerun for another reason, rerun and verify `analytics-schema.sql` and `analytics-rls-hardening.sql` afterwards.
5. Verify that the browser tracker uses `analytics_heartbeat()`, that anonymous direct access to `active_sessions` is revoked, and that Analytics RPCs remain INVOKER. The migration files alone do not prove the live database state.

### C. Leads, admin modules, posters, and push

1. Ensure the relevant base schemas exist first: `schema.sql`, `csc-claims-public.sql`, `csc-status-votes.sql`, `sahayak.sql`, `daily-posters.sql`, and `push.sql`.
2. Run `admin-module-rls-hardening.sql` only after confirming `csc_claims`, `sahayak_providers`, `service_requests`, `solar_leads`, and `rc_reports` exist with the expected columns. This migration intentionally narrows column-level browser grants.
3. Run `admin-leads-notifications-rls.sql` after the subscriber, CSC lead/feedback, Sahayak lead, status-vote, and push base objects exist. It replaces selected policies and grants.
4. Run `admin-rpc-grants-hardening.sql` after `daily-posters.sql`, `push.sql`, `admin-leads-notifications-rls.sql`, and the `public.is_admin()` helper from `security-hardening.sql`.
5. Run `admin-definer-searchpath-hardening.sql` only after all functions it alters exist: push functions, service request/interest functions, `poster_log()`, `csc_status_votes_limit()`, `search_stats(int)`, and `is_admin()`.

**Do not rerun base files after their hardening migrations without reviewing policy/grant effects.** For example, `daily-posters.sql` creates permissive poster policies; the hardened version replaces those named policies. Reapplying a base file can fail on duplicate policy names or restore a broader permission posture.

### D. New admin reporting tables and queues

These are additive modules; create each table before applying any separate hardening file for it:

- `admin-activity-logs.sql` — activity log table and admin-only policies.
- `content-change-requests.sql` then `content-change-requests-hardening.sql` — proposal queue first, limited decision-column grants second.
- `premium-memberships.sql` — read-only membership reporting table.
- `revenue-reports.sql` — AdSense and payment reporting mirrors.

Do not assume these reporting tables are populated by existing payment or AdSense providers. Importers/integrations must be independently implemented and verified.

## Known order-sensitive conflicts and caveats

- **Analytics RPC privilege posture:** `security-hardening.sql` creates five Analytics functions as DEFINER; updated `analytics-schema.sql` recreates them as INVOKER. The latter must be the final definition.
- **Poster policies:** `daily-posters.sql` uses the policy names `public reads published posters` and `admin manages posters`; `admin-rpc-grants-hardening.sql` drops those exact names and replaces them with admin-gated policies. Apply hardening after the base file.
- **Search stats:** `search-queries.sql` creates `search_stats(int)`; `admin-definer-searchpath-hardening.sql` alters its search_path. Run the search-path migration after the function exists.
- **Service request RPC:** `admin-definer-searchpath-hardening.sql` expects the exact nine-argument `service_request_submit(...)` signature. Confirm the live function signature before applying; historical v2/v3/v4 scripts may replace or evolve the function.
- **Legacy table drift:** the repository has a documented `csc_centres` versus `csc_centers` naming discrepancy. Do not resolve it by guessing or renaming live tables.
- **Legacy RLS:** browser-side `adminGuard()` is not a substitute for database RLS. The live RLS/grants for some legacy tables and Worker-written tables still require verification. Do not blindly add policies that could break public forms or trusted Workers.
- **Public schema CREATE revoke:** `admin-definer-searchpath-hardening.sql` revokes CREATE on `public` from PUBLIC/anon/authenticated. Check deployment tooling and any legitimate application workflow that expects those roles to create objects before applying.
- **Historical scripts:** `admin-policies.sql`, `daily-posters.sql`, and several feature setup files contain non-idempotent CREATE POLICY statements. Treat them as one-time setup scripts unless the target database has been inspected.

## Post-migration verification checklist

- [ ] Confirm exact live tables/columns and function signatures before applying.
- [ ] Confirm RLS is enabled on each protected table.
- [ ] Inspect effective table and column grants for anon/authenticated.
- [ ] Inspect every policy on each table; permissive policies combine with OR.
- [ ] Confirm normal authenticated users cannot read admin data.
- [ ] Confirm public form INSERTs and Worker write paths still work.
- [ ] Confirm Analytics RPCs are INVOKER and heartbeat is callable only by anon.
- [ ] Confirm SECURITY DEFINER functions have the intended fixed search_path.
- [ ] Run smoke tests for admin pages and public forms after migrations.
- [ ] Record the applied migration order and timestamp outside this repository.

## Current status

This file documents source-level dependencies only. No Supabase SQL was executed, no live database grants or RLS policies were queried, and no production site or database was changed by this audit.
