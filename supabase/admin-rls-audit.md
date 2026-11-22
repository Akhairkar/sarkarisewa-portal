# Admin data access / RLS audit

Audit date: 2026-11-22
Repository branch: `admin-panel-upgrade-2026-11-22`

## Scope and limitations

This is a source-code review of the SQL migration files listed below and the matching admin pages. It is **not** a live Supabase policy/privilege inspection. No SQL in this document or the related migrations has been applied to the Supabase project. Live database state, existing grants, deployed functions, and production behavior remain unverified.

Reviewed:
- `supabase/admin-activity-logs.sql`
- `supabase/content-change-requests.sql`
- `supabase/content-change-requests-hardening.sql`
- `supabase/premium-memberships.sql`
- `supabase/revenue-reports.sql`
- `supabase/analytics-schema.sql`
- `supabase/analytics-rls-hardening.sql`
- Admin pages: Activity Logs, Content Review Queue, Premium Membership, Revenue & AdSense, API & Payment Operations.

## Findings

| Table / surface | Intended browser access | Source-level assessment |
|---|---|---|
| `admin_activity_logs` | Admin SELECT + INSERT only | RLS checks trusted `app_metadata.role = admin`; INSERT binds `actor_id` to `auth.uid()` and checks optional email against JWT. No UPDATE/DELETE grant or policy. |
| `content_change_requests` | Admin SELECT + INSERT + limited review UPDATE | RLS is admin-only. A broad table-level UPDATE grant was identified and narrowed: authenticated clients now receive UPDATE only on `status`, `admin_note`, `reviewed_by`, `reviewed_at`, and `updated_at`. Proposal payload, page path, change type, creator and creation timestamp are not client-updatable through normal table privileges. |
| `premium_memberships` | Admin SELECT only | Browser grants are read-only; no browser INSERT/UPDATE/DELETE policy or grant is defined. Population is intended for a trusted server-side importer. |
| `adsense_daily_reports` | Admin SELECT only | Browser grants are read-only; RLS checks trusted admin role. Importer credentials must remain server-side. |
| `premium_payment_reports` | Admin SELECT only | Browser grants are read-only; RLS checks trusted admin role. This is a reporting mirror, not a direct Razorpay connection. |
| `page_views` | Anonymous INSERT; admin SELECT | Anonymous receives INSERT only; authenticated receives SELECT and RLS checks admin role. No browser UPDATE/DELETE grant is defined. |
| `active_sessions` | Admin SELECT; anonymous heartbeat through RPC | Direct table access is revoked from anon/authenticated except authenticated SELECT. Anonymous heartbeat uses a constrained SECURITY DEFINER RPC with input validation and server time. Session IDs remain untrusted telemetry identifiers; this is not bot-proof identity. |

## Legacy admin module access review

The following admin scripts were also inspected for their browser-side access gate and table access pattern:

| Admin module | Tables read / updated | Browser-side gate |
|---|---|---|
| CSC | `csc_claims`, `csc_leads`, `csc_feedback` | Added `adminGuard()` before data access and mutations. |
| Seva Sahayak | `sahayak_providers`, `sahayak_leads`, `csc_status_votes` | Added `adminGuard()` before data access and status updates. |
| Solar leads | `solar_leads` | Added `adminGuard()` before data access and status updates. |
| Requests | `service_requests`, `csc_claims`, `service_interest` | Existing script already calls `adminGuard()`. |
| RC reports | `rc_reports` | Added `adminGuard()` before reading report data. |
| Subscribers | `subscribers` | Existing page already calls `adminGuard()`. |

These browser-side checks prevent an unauthorised session from using the admin UI, but they are **not a substitute for database RLS**. The source set inspected here does not contain authoritative table-creation / policy migrations for all of these legacy tables. Their live RLS policies and grants therefore remain **unverified**. In particular, verify that public submission endpoints retain only the intended INSERT permissions, that public users cannot SELECT customer records, and that only trusted admins or server-side service-role code can update review/status fields.

## Additional legacy-table grant hardening

A new migration, `supabase/admin-module-rls-hardening.sql`, narrows browser privileges for the tables used by legacy admin modules:

| Table | Browser permissions after migration | Notes |
|---|---|---|
| `csc_claims` | Authenticated SELECT; column-limited UPDATE | Public claim INSERT is not revoked. Admin UI update columns were matched against CSC and Requests scripts. DELETE is revoked because no admin UI delete action exists. |
| `sahayak_providers` | Authenticated SELECT; UPDATE only `status` and `approved_at` | Public signup INSERT remains unchanged. |
| `service_requests` | Authenticated SELECT + DELETE; UPDATE only workflow/assignment/review fields | Public submissions continue through the existing SECURITY DEFINER submit function. |
| `solar_leads` | Authenticated SELECT; UPDATE only `status` | Public INSERT is not revoked. Explicit admin SELECT/UPDATE policies are added. Existing legacy policies must still be inspected in the live database; permissive RLS policies combine with OR semantics. |
| `rc_reports` | Authenticated SELECT only; no direct browser writes | Intended Worker writes continue through the existing SECURITY DEFINER logging function. |

The migration deliberately does not change `subscribers`, `csc_leads`, `csc_feedback`, `csc_status_votes`, or `sahayak_leads` grants because their public INSERT / admin SELECT flows need a separate exact grant review. It also does not create missing tables or alter any records.

## Changes made in this audit

1. Added `adminGuard()` to the CSC, Sahayak, Solar Leads, and RC Reports browser modules before any protected reads or writes.
2. Added `admin-module-rls-hardening.sql` with least-privilege column grants for CSC claims, Sahayak providers, service requests, and solar leads, plus read-only browser access for RC reports.
3. Updated `content-change-requests.sql` so fresh schema setup grants UPDATE only on review-decision fields.
4. Added `admin-leads-notifications-rls.sql` for subscriber, CSC/Sahayak lead, status-vote and push campaign grants.
5. Added `admin-rpc-grants-hardening.sql` to explicitly scope poster table privileges and push RPC execution grants.
6. Added `admin-definer-searchpath-hardening.sql` to revoke untrusted schema CREATE and pin SECURITY DEFINER search paths.
7. Added `content-change-requests-hardening.sql` as a transaction-wrapped migration for an existing deployment. It resets browser table privileges and re-grants only SELECT, INSERT, and the five permitted UPDATE columns. It does not change or delete rows.

## Subscriber, lead and notification grant hardening

Added `supabase/admin-leads-notifications-rls.sql`:

| Table | Browser permissions after migration |
|---|---|
| `subscribers` | Public INSERT; admin-only SELECT; no browser UPDATE/DELETE |
| `csc_leads` | Visitor INSERT on event columns; admin-only SELECT |
| `csc_feedback` | Visitor INSERT on feedback columns; admin-only SELECT |
| `sahayak_leads` | Visitor INSERT on lead columns; admin-only SELECT |
| `csc_status_votes` | Visitor INSERT on vote columns; admin-only SELECT |
| `push_campaigns` | Admin SELECT; admin INSERT of campaign content; admin UPDATE of status only |
| `push_subscriptions`, `push_config` | No direct browser table access; existing RPC interfaces remain the access path |

The push sender's SECURITY DEFINER RPCs remain the intended server-side path for delivery counts and subscription cleanup. Public subscriber and lead submission policies are retained/recreated. The migration does not change or delete rows.

Important: subscriber signup still has table-level INSERT because the repository's subscriber schema has evolved beyond the original base columns and the exact set of public signup fields is not fully established from the checked-in base schema. This does not grant public read/update/delete. A future schema inventory can narrow INSERT to explicit columns once every signup/Telegram flow is mapped.

## Poster and push RPC privilege hardening

Added `supabase/admin-rpc-grants-hardening.sql`:

- `daily_posters`: explicit SELECT for anon/authenticated, explicit INSERT/UPDATE/DELETE for authenticated, with RLS limiting writes to admins and reads to published rows.
- `poster_events`: authenticated SELECT only for admins; no direct browser INSERT/UPDATE/DELETE. Event writes remain through `poster_log()`.
- Push sender RPCs (`push_save_vapid`, `push_queue`, `push_report`, `push_pending`): removes implicit PUBLIC and authenticated EXECUTE, then grants EXECUTE only to the anon API role. Each function still validates the private `PUSH_SEND_KEY`; the Supabase anon key is not that secret.
- Visitor push RPCs (`push_public_key`, `push_subscribe`, `push_unsubscribe`): removes implicit PUBLIC EXECUTE and explicitly grants anon/authenticated execution.

The migration does not alter records. It assumes the referenced tables and functions were created by `daily-posters.sql` and `push.sql`.

## SECURITY DEFINER search-path hardening

Added `supabase/admin-definer-searchpath-hardening.sql`:

- Revokes schema-level CREATE on `public` from `PUBLIC`, `anon`, and `authenticated`, while retaining schema USAGE for API roles.
- Pins the search path for the checked-in push, service-request, poster logging and CSC vote trigger SECURITY DEFINER functions to `pg_catalog, public, extensions`.
- The anonymous analytics heartbeat already uses an empty search path and fully-qualified object names, so it is left unchanged.
- This prevents untrusted API roles from creating shadow objects in `public` and places system catalog functions ahead of application schemas.

This migration assumes the listed functions already exist. It does not change rows. Review compatibility with any custom deployment process that legitimately creates objects in `public` as anon/authenticated before applying.

## Additional application-table and RPC review

The following checked-in schema files were reviewed for ownership policies, public access and function execution:

| Surface | Source-level finding |
|---|---|
| `project_report_drafts` | RLS limits all operations to rows where `auth.uid() = user_id`. This is an owner-scoped draft, not an admin-wide table. |
| `customers` | RLS limits INSERT, SELECT and UPDATE to the authenticated user's own `id`; no public SELECT policy is defined. |
| `comments` | Public SELECT is limited to visible comments and public INSERT is constrained by name/message length and initial visible status. Admin moderation policies use `public.is_admin()` in the security-hardening migration. Public visible-on-insert may attract spam; changing moderation behavior is a product decision and was not changed here. |
| `search_queries` | Visitors can INSERT only; admin SELECT is protected by `public.is_admin()`. Input constraints limit query length, 7+ digit runs, result count and clicked path. |
| `search_stats(int)` | SECURITY DEFINER checks `public.is_admin()`; added to the function search-path hardening migration. Its `p_days` input is not range-limited in the current function, so very large ranges may be expensive. |
| `csc_centres` / `csc_nearby` | Public listing access is limited to selected location/contact display columns by the CSC nearby migration; the nearest-centre function is SECURITY INVOKER and bounds coordinates, degree range and result count. The separate `csc_centres` and legacy `csc_centers` spellings appear in different migrations and must be reconciled against the live schema before applying grants. |
| `services`, `blog_posts`, `job_alerts`, `exam_calendar`, `deadlines` | Public read policies are intended for published rows; admin write/read policies check trusted `app_metadata.role`. Existing source migrations do not uniformly define explicit table grants, so actual grants still need live inspection. |

The search-path hardening migration now also pins `public.search_stats(int)` and `public.is_admin()`. The latter is an invoker SQL helper, not a SECURITY DEFINER function; the explicit path simply makes its schema dependencies deterministic.

No additional broad grants or policies were added for these tables because they have user-owned or public-facing workflows, and changing their privileges without verifying the deployed table names, grants and callers could break existing site features.

## Remaining checks before calling the database secure

- Apply the reviewed migrations in Supabase SQL Editor only after an operator reviews them.
- Inspect actual live table grants, RLS policies, and function privileges in the Supabase project; source files cannot prove what is deployed.
- Test with anon, authenticated non-admin, and authenticated admin sessions after migration.
- Complete a separate inventory of legacy admin data sources, especially `rc_reports`, subscriber/lead tables, CSC/Sahayak/solar requests, push notification tables, and any pre-existing service/API tables. The reviewed migration set does not establish their live RLS posture.
- Confirm trusted server-side importers use service-role credentials only in server environments and validate payment/provider webhooks before writing reporting or membership records.

## Safety boundary

This audit and its migration files affect only the feature branch. No production site deployment, DNS change, live Supabase SQL execution, payment operation, or public-page edit was performed.
