# Partner Network — isolated test runbook

This checklist applies only to the Supabase test project `sarkarisewa-partner-test`
and the feature branch `feature/business-partner-network`.

## Safety boundaries

- Never use production Supabase credentials or production customer data.
- Keep the Supabase service-role key server-side; never put it in `partner-network/config.js`.
- Do not add an Admin membership until the intended test user's Auth UUID has been independently verified and the project owner explicitly authorizes it.
- Do not merge or deploy this branch as part of testing.
- Use two distinct test email addresses and synthetic names/mobile numbers. Do not use real customer enquiries.

## Setup before account tests

1. In the test project's Supabase dashboard, confirm the project URL and public publishable/anon key.
2. Add only those public values to `partner-network/config.js` on this feature branch.
3. Configure Auth email confirmation and recovery URLs for the isolated preview origin.
4. Confirm the Auth email provider can deliver confirmation messages.
5. Create a Cloudflare Turnstile widget for the exact isolated preview hostname; add its site key to `partner-network/config.js` as `turnstileSiteKey`.
6. Set Edge Function secrets `TURNSTILE_SECRET_KEY` and `ALLOWED_ORIGINS` (exact comma-separated HTTPS origins) in the test project. `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` must remain server-side.
7. Deploy `partner-submit-enquiry` only to the test project. Its function-specific `verify_jwt = false` setting is intentional: the function itself enforces exact Origin allowlisting and Turnstile hostname verification. The gateway still requires the public `apikey` header.
8. Confirm direct calls to `partner_submit_customer_lead` fail for `anon` and `authenticated`; only `service_role` may execute it.
9. Keep the Admin allowlist empty until the owner verifies the intended Admin Auth UUID and approves a separate test-only allowlist action.

## Partner account test matrix

Create two separate accounts through the partner signup page, using synthetic test data.

| Test | Partner A | Partner B | Expected result |
|---|---|---|---|
| Signup | Unique test email | Different test email | Separate Auth UUIDs |
| Profile | Own business/location/services | Different business/location/services | No cross-account profile access |
| Initial entitlement | 10 free leads | 10 free leads | One starter entitlement per account |
| Pending access | Before approval | Before approval | Portal remains gated |
| Approval | Test-only trusted approval | Test-only trusted approval | Only active + verified accounts enter portal |
| Assigned lead | Assigned only to A | Not assigned to B | B cannot view A's customer data |
| Status change | Valid transition | Attempt A's assignment ID | B receives not-found/denied response |
| Notifications | A sees A's notification | B sees only B's | No cross-partner notification visibility |
| Mark read | Mark A's notification | Attempt A's notification ID | B cannot alter A's notification |
| Suspension | Suspend A | B remains active | A cannot change status or access active portal data |

## Lead routing scenarios

Use only synthetic data and the standalone noindex demo enquiry page.

1. Submit a service/state/district combination matching only Partner A. Confirm one exclusive assignment to A, one quota charge, and one notification.
2. Submit a combination matching only Partner B. Confirm the same behavior for B.
3. Submit a combination matching both. Confirm district-exact match preference, then balancing behavior for the recent seven-day assignment count.
4. Submit a combination matching neither. Confirm the lead remains `new` and is not exposed to either partner.
5. Retry an unmatched lead through the Admin-only operation after Admin authorization is deliberately configured in the test project.
6. Confirm duplicate submissions within 24 hours are suppressed and the per-phone and global intake limits behave as documented.

## Quota scenarios

- Verify each newly registered partner receives exactly 10 free leads once.
- Assign leads until the free quota reaches 10 used; the next assignment must fail unless premium entitlement is active.
- Verify a rejected, pending, suspended or unverified partner cannot receive an assignment.
- Verify an active premium partner can receive an assignment after the free quota is exhausted without incrementing the free-lead counter.

## Current blockers / not yet tested

- Supabase connector tools available in this workflow do not expose Auth user creation/invitation or email verification actions. Accounts must be created through the test project's Auth signup flow.
- No test Auth users, partner profiles, leads or assignments have been seeded.
- Admin allowlist is intentionally empty. Do not bypass this with a guessed UUID or direct client write.
- Browser-based signup, email confirmation, partner isolation, lead routing, notification delivery and quota behavior remain end-to-end tests, not yet passed.
- Security Advisor's remaining SECURITY DEFINER findings include the intentionally public consent-backed intake RPC and authenticated RPCs guarded internally by partner/Admin authorization checks. Review those functions before any production release.


## Repeatable browser-auth source regression checks

Run this from the repository root with Node.js 18 or newer:

```sh
node --test partner-network/auth-source.test.mjs
```

The test file checks source-level invariants for public-only browser configuration, signup metadata, profile completion RPC usage, login/recovery APIs, session/profile gating, pending/rejected/suspended account restrictions, and the demo page's Edge Function gateway path.

These are static regression checks. They do not execute Supabase Auth, send email, create accounts, prove RLS isolation, or replace the two-account browser test matrix above. A passing result must not be described as an end-to-end or penetration test.
