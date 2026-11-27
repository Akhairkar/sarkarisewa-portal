# Partner Network — Test Plan and Release Gate

Environment: isolated Supabase test project `sarkarisewa-partner-test`  
Branch: `feature/business-partner-network`  
Status: preparation only; no synthetic Auth users or customer records have been created.

## 1. Test identities

Create two ordinary partner accounts through the demo Auth UI using two test email addresses controlled by the project owner.

- Partner A: CSC/VLE or another supported category; service/location set A.
- Partner B: a different account; service/location set B.
- Admin: do not create or allowlist an Admin until the exact Auth UUID is independently verified and explicitly approved.

Do not insert rows directly into `auth.users`. Do not use production accounts or production Supabase.

## 2. Signup and profile authorization

For each partner account:

1. Sign up through `partner-network/auth.html`.
2. Complete email confirmation using the test mailbox.
3. Complete registration/profile details.
4. Confirm profile is pending and portal access remains blocked until approval.
5. Attempt to update own editable fields (business name, owner name, phone, state, district, pincode, CSC ID).
6. Confirm the account cannot update protected columns: `partner_type`, `partner_origin`, `verification_status`, `account_status`, `profile_completion`, `user_id`, or timestamps.
7. Confirm Partner A cannot read or mutate Partner B's profile, services, service areas, entitlements, assignments, lead history, or notifications.

Expected: only own editable fields can change; protected fields and other partner data remain inaccessible.

## 3. Admin authorization

1. With no allowlist membership, sign in and open Admin Control Center.
2. Confirm the Admin UI remains blocked and Admin RPCs return unauthorized.
3. Verify the allowlist still has zero rows.
4. Only after explicit owner approval and independent UUID verification, add one test Admin through a reviewed migration.
5. Confirm that Admin can review partners and view leads; ordinary Partner A/B accounts cannot call Admin RPCs successfully.
6. Confirm each review/retry action writes an audit record.

Expected: no Admin access before allowlisting; every privileged operation is actor-checked and audited.

## 4. Lead intake and routing

1. Configure Turnstile test site/secret keys and the Edge Function secrets in the isolated project.
2. Deploy only `partner-submit-enquiry` to the test project.
3. Submit a valid enquiry with consent and a service/location matching Partner A.
4. Confirm a lead is created and routed to an eligible partner, with only one assignment.
5. Confirm the assigned partner sees customer contact details; the other partner sees no lead or PII.
6. Submit with missing/invalid Turnstile token, wrong Origin, mismatched hostname, invalid consent, malformed phone, and duplicate phone/service data.
7. Confirm requests are rejected or safely deduplicated and raw database errors/secrets are never returned.

Expected: intake is server-gated; routing is exclusive; customer PII is visible only to the assigned partner and Admin.

## 5. Quota, notifications and status transitions

1. Verify each newly registered eligible partner receives exactly 10 free leads.
2. Route leads and verify quota decreases once per assignment, never twice on retry.
3. Verify assignment creates one notification only.
4. Verify notification contains service/location context but no customer name, phone, or enquiry details.
5. Mark a notification read and confirm only its owner can do so.
6. Test allowed lead status transitions and reject invalid transitions or attempts by a non-owning partner.
7. Verify premium entitlement behavior only with explicit test fixtures; do not grant real paid entitlements.

Expected: quota is charged once, notifications are unique and private, status updates enforce assignment ownership.

## 6. Abuse and negative tests

- Anonymous call to every authenticated RPC.
- Authenticated call to the intake RPC directly (must fail).
- Authenticated call to service-role-only lead routing RPC (must fail).
- Partner A submits Partner B's assignment or notification UUID (must fail).
- Partner attempts to set own account/verification status to active/verified (must fail).
- Duplicate and concurrent intake requests for the same phone/service.
- Requests from an unapproved Origin or with a Turnstile hostname mismatch.

## 7. Release gates

Do not merge or deploy to production until:

- Two-partner isolation tests pass.
- Admin authorization tests pass with a separately approved test Admin.
- Intake gateway and Turnstile negative tests pass.
- Quota, routing, notification and status transition tests pass.
- Security Advisor is reviewed after the final migrations.
- Browser tests and Edge Function runtime tests are recorded.
- Production changes are separately and explicitly approved.

## Current limitations

- No test Auth accounts, partners, leads, assignments or notifications currently exist.
- No browser/Deno end-to-end tests have been run.
- Turnstile credentials and Edge Function secrets are not configured.
- This document is a test procedure, not evidence that the tests have passed.
