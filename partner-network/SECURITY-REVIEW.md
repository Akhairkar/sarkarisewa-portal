# Partner Network — Security Review

Review date: 2026-11-27  
Scope: `feature/business-partner-network` and isolated Supabase project `sarkarisewa-partner-test` (`lmmpfflyqonhndagkxdu`).  
This is a source and database-metadata review, not a penetration test or end-to-end runtime certification.

## Verified database controls

- All 11 tables in `partner_network` have RLS enabled.
- `partner_network` schema usage is denied to `anon` and granted to `authenticated` / `service_role`.
- Neither `anon` nor `authenticated` can CREATE objects in `public` or `partner_network`; this reduces search-path object-shadowing risk.
- Direct table access to the three private admin tables (`admin_memberships`, `admin_action_history`, `admin_lead_action_history`) and `partner_notifications` is denied to `anon` and `authenticated`. These are RPC/trigger-only tables.
- Customer leads, assignments, history, entitlements and profiles have authenticated SELECT grants constrained by own-partner RLS policies. Service/anon direct table writes are not granted.
- Partner services and service areas permit authenticated INSERT/DELETE only with own-`partner_id` policies.
- The admin allowlist currently contains **0** rows.
- `partner_submit_customer_lead` is executable only by `service_role`; `anon` and `authenticated` execution checks both returned false.
- `partner_route_customer_lead` is executable only by `service_role`; internal routing and trigger functions have no API-role EXECUTE grants.
- Trigger-only SECURITY DEFINER functions have EXECUTE revoked from public, anon, authenticated and service_role.
- The public registration-completion RPC is SECURITY INVOKER and derives the account identity from `auth.uid()`.

## SECURITY DEFINER RPC review

The Security Advisor reports 10 authenticated-callable SECURITY DEFINER functions. Each was inspected in the test database:

| RPC | Authorization / data boundary | Review |
|---|---|---|
| `partner_admin_is_authorized` | Returns only whether `auth.uid()` has an active allowlist membership | Expected; UI uses it as an authorization pre-check |
| `partner_admin_get_overview` | Requires non-null `auth.uid()` and active Admin membership | Guard present |
| `partner_admin_get_leads` | Requires non-null `auth.uid()` and active Admin membership; limit capped at 200 | Guard and bounds present |
| `partner_admin_review_partner` | Requires active Admin membership; validates target and decision | Guard present |
| `partner_admin_retry_lead` | Requires active Admin membership; only retries a lead in `new` state | Guard present |
| `partner_get_portal_access` | Requires `auth.uid()`; returns only that user's profile/entitlement state | Ownership boundary present |
| `partner_get_dashboard_data` | Requires `auth.uid()` and active + verified profile; queries assignments for that user | Ownership/status boundary present |
| `partner_get_notifications` | Requires `auth.uid()` and active + verified profile; filters notifications by that user | Ownership/status boundary present |
| `partner_mark_notification_read` | Requires `auth.uid()` and active + verified profile; updates only matching notification owned by that user | Ownership/status boundary present |
| `partner_update_lead_status` | Requires `auth.uid()`, active + verified profile, assignment ownership and valid status transition | Ownership/status boundary present |

All reviewed SECURITY DEFINER functions have a pinned `search_path` (`pg_catalog` for public RPCs). Table and function references in privileged routines are schema-qualified. The `public` and `partner_network` schemas are not CREATE-writable by anon/authenticated.

The 10 Advisor warnings are therefore **not treated as proof of a vulnerability**: these RPCs intentionally need elevated database access to operate on private-schema tables, and the reviewed functions enforce identity/ownership/Admin checks. Keep these warnings visible and re-review whenever a function body or grant changes. Do not blanket-revoke authenticated EXECUTE: the portal and Admin UI depend on these RPCs.

## Advisor findings retained intentionally

- Four `rls_enabled_no_policy` INFO findings: `admin_action_history`, `admin_lead_action_history`, `admin_memberships`, `partner_notifications`. These tables are intentionally inaccessible directly to anon/authenticated; their trusted RPC/trigger paths are the access boundary.
- Ten `authenticated_security_definer_function_executable` WARN findings listed above. These are reviewed privileged RPCs, not blanket-public access; anon EXECUTE is false for all ten.

## Remaining release blockers

- No test Auth users, partner profiles, customer leads or assignments exist; cross-account isolation and business flows have not been exercised end-to-end.
- No browser tests or live Deno Edge Function tests have been run.
- Turnstile keys, gateway secrets and the Edge Function deployment are not configured.
- Admin allowlist remains empty; do not add an Admin until the intended test Auth UUID is independently verified and separately approved.
- Confirm the exact effective function grants again after every migration change. In particular, the original foundation SQL contains the earlier public-intake grant; the later gateway-only hardening migration must remain in the applied migration chain so the final effective grant stays service-role-only.

## Safety boundary

This review and its checks apply only to the isolated test project and feature branch. No production Supabase project, production website, `main` branch, merge or deployment was changed.


## Follow-up: profile column-level authorization check

The initial concern about the own-profile UPDATE policy was checked against actual PostgreSQL column privileges.

- Authenticated users can update only the intended editable profile fields: `business_name`, `owner_name`, `phone`, `state`, `district`, `pincode`, and `csc_id`.
- Authenticated users cannot update `user_id`, `partner_type`, `email`, `partner_origin`, `verification_status`, `account_status`, `profile_completion`, or timestamps.
- The only non-internal trigger on `partner_profiles` is the AFTER INSERT entitlement initializer; no profile UPDATE trigger was found.
- Therefore, the own-row UPDATE policy does not currently allow a partner to self-approve or change account status through direct table UPDATE. This specific concern is **not a confirmed vulnerability**.
- Keep column-level UPDATE grants narrow. Any future editable profile field must be explicitly reviewed before granting UPDATE.

## Additional RLS observations

- `customer_leads` SELECT policy exposes only leads with an assignment whose `partner_id = auth.uid()`.
- `lead_assignments`, `lead_status_history`, and `partner_entitlements` SELECT policies scope rows to the current partner.
- `partner_profiles` INSERT policy requires own `user_id`, `partner_origin='self_registration'`, and pending verification/account status.
- `partner_services` and `partner_service_areas` INSERT/DELETE policies require `partner_id = auth.uid()`; neither table grants authenticated UPDATE.
- The `partner_network` schema has USAGE for authenticated/service_role and no USAGE for anon. Neither anon nor authenticated can CREATE in this schema or public.
