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

## Changes made in this audit

1. Updated `content-change-requests.sql` so fresh schema setup grants UPDATE only on review-decision fields.
2. Added `content-change-requests-hardening.sql` as a transaction-wrapped migration for an existing deployment. It resets browser table privileges and re-grants only SELECT, INSERT, and the five permitted UPDATE columns. It does not change or delete rows.

## Remaining checks before calling the database secure

- Apply the reviewed migrations in Supabase SQL Editor only after an operator reviews them.
- Inspect actual live table grants, RLS policies, and function privileges in the Supabase project; source files cannot prove what is deployed.
- Test with anon, authenticated non-admin, and authenticated admin sessions after migration.
- Complete a separate inventory of legacy admin data sources, especially `rc_reports`, subscriber/lead tables, CSC/Sahayak/solar requests, push notification tables, and any pre-existing service/API tables. The reviewed migration set does not establish their live RLS posture.
- Confirm trusted server-side importers use service-role credentials only in server environments and validate payment/provider webhooks before writing reporting or membership records.

## Safety boundary

This audit and its migration files affect only the feature branch. No production site deployment, DNS change, live Supabase SQL execution, payment operation, or public-page edit was performed.
