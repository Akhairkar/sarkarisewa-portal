# Business Partner Network — isolated development module

**Branch:** `feature/business-partner-network`  
**Production status:** Not deployed. Nothing in this folder is linked from the public site.  
**Main-branch rule:** Do not modify or merge `main` without explicit owner approval.

## Product rules already decided

- Partner types: CSC/VLE, existing businesses, new businesses, cyber cafes, consultants and other eligible service providers.
- Every approved partner category receives **10 free qualified leads once per account**.
- Legacy partners can be invited/imported by Admin, but must claim/activate their own account and verify their details.
- CSC operators are partners, not automatically government-authorized agents. CSC ID verification is a separate check.
- Lead distribution is **exclusive**: one lead is assigned to one eligible partner.
- State, district, service capability, active status and remaining quota are routing criteria.
- Partners see only their own assigned leads. Admin has a separate control surface.
- Premium features are earned through genuine activity, customer outcomes, verification and complaint history; payment alone does not grant a trust badge.
- Browser push is optional. The in-dashboard notification inbox remains the fallback.
- No public-site page, SEO metadata, URL, CSS, AdSense setup or current Admin panel is changed by this module.

## Architecture

This is a database-driven module, not a generated page per partner.

- One partner registration/login flow.
- One partner dashboard template with data scoped to the authenticated user.
- One lead detail/list template.
- One admin partner/lead control surface.
- One private database schema: `partner_network`.
- Public enquiries are accepted through a consent-backed RPC; assignment and quota charging happen on a trusted server/Edge Function.
- Supabase Auth is used for identity. Partner-created passwords are handled by Supabase Auth, never stored in application tables.
- After a confirmed sign-in, the client calls `public.partner_complete_registration`; this SECURITY INVOKER RPC derives the user ID/email from the authenticated JWT and writes only editable profile/service/area fields. Account status, verification, premium and quota values remain database-controlled.
- Existing `csc_centres`, `csc_claims`, `service_requests`, and existing account pages are not rewritten. Legacy migration is an explicit later step.

## Data model

| Table | Purpose |
|---|---|
| `partner_profiles` | Identity, category, location, verification and activation state |
| `partner_services` | Services each partner can actually perform |
| `partner_service_areas` | State/district coverage |
| `partner_entitlements` | 10-lead trial quota and future premium entitlement |
| `customer_leads` | Consent-backed enquiries from service pages |
| `lead_assignments` | Exclusive assignment and partner workflow status |
| `lead_status_history` | Auditable status transitions |

## Security and operational boundaries

1. No service-role key in browser code.
2. No partner can query unassigned leads or another partner's records.
3. Quota is charged transactionally when a trusted service creates an assignment.
4. Only a trusted service can assign leads or alter verification/premium entitlements.
5. Customer phone/name are exposed only to the assigned partner after the customer consents to sharing.
6. Duplicate/rate-limited submissions are rejected by the intake RPC.
7. Retention review is scheduled for 180 days; final deletion/retention policy must be approved before launch.
8. Push subscription endpoints and keys must be protected; browser permission is not assumed.
9. Status changes are constrained and logged. Admin dispute handling is a later phase.

## Build phases

- [x] Create isolated feature branch from current `main`.
- [x] Inspect existing Supabase Auth, CSC and service-request foundations.
- [x] Add additive database foundation migration (not executed).
- [ ] Review migration against the live Supabase schema and current policies.
- [x] Add responsive partner registration/login UI preview (`auth.html`).
- [x] Wire registration, password login and password-reset requests to the Supabase Auth client scaffold.
- [ ] Configure the project URL/publishable key and verify email confirmation + recovery redirects.
- [x] Add the authenticated profile-completion RPC and client onboarding call (SQL draft only; not deployed or live-tested).
- [x] Add authenticated portal gate: checks session + own approval status via a minimal RPC; hides all sample dashboard metrics and lead rows.
- [x] Add live dashboard rendering for approved partners; shows only their assigned leads and provides guarded status actions (requires reviewed SQL deployment).
- [x] Add approved-partner dashboard RPC draft and live renderer for own assigned leads, quota and aggregate counts (SQL draft only; not deployed or runtime-tested).
- [x] Add admin allowlist, partner directory and approve/reject/suspend/reactivate RPC/UI (SQL draft only; no admin seeded or runtime-tested).
- [x] Add service-role-only routing RPC draft and internal Edge Function (exclusive assignment + atomic quota; not deployed or runtime-tested).
- [x] Add one isolated noindex/nofollow demo enquiry page; existing service pages remain untouched.
- [ ] Connect only approved service pages using a reusable enquiry component after separate approval.
- [x] Auto-attempt routing immediately after a public enquiry is inserted (database trigger; unmatched leads remain new for trusted retry).
- [x] Add Admin-only lead directory, customer enquiry details, assignment visibility and audited unmatched-lead retry controls.
- [ ] Add legacy partner invitation/import.
- [ ] Add browser push + in-dashboard notifications.
- [ ] Add performance-based eligibility and premium feature controls.
- [ ] Test RLS with two partner accounts, Admin, anonymous visitor and service-role routing.
- [ ] Verify quota trigger rejects assignments unless partner is both verified and active (enforced in migration draft).
- [ ] Obtain explicit approval before any merge or production deployment.

## Migration

File: `supabase/partner-network-foundation.sql`

**Do not run this migration yet.** It is a reviewable, additive draft. The existing Supabase project must be checked for schema exposure settings, roles, existing objects, auth configuration and migration order first. No SQL has been executed against the live database.


### Portal access guard

- `portal-guard.js` keeps the sample dashboard hidden and checks the Supabase Auth session before any portal access state is displayed.
- `public.partner_get_portal_access()` returns only the current user's profile approval state and starter entitlement summary. It never returns lead or customer contact data.
- Only `account_status = active` AND `verification_status = verified` passes the approval gate. Even approved partners see a dashboard-integration notice until real lead data is connected; demo figures are not presented as real.
- This guard depends on the SQL draft being reviewed and deployed. It is not live until Supabase credentials and migrations are configured.


### Admin control center

- Open the isolated admin page at `partner-network/admin.html` on the feature branch.
- `admin.js` requires Supabase Auth sign-in and then checks `public.partner_admin_is_authorized()`. A valid partner login alone is not sufficient.
- `partner_admin_get_overview()` returns a capped directory of the latest 200 partner profiles and entitlement summaries; it does not return customer leads.
- `partner_admin_review_partner()` supports approve, reject, suspend and verified-partner reactivation, with an admin action audit row.
- `partner_network.admin_memberships` is a closed allowlist. No public or authenticated client write is granted. The first owner must be added manually in the trusted Supabase SQL Editor after deployment and after independently verifying the intended Auth user UUID. No admin identity is pre-seeded by this branch.
- Admin UI and RPCs are implementation drafts only. They have not been runtime-tested and no SQL has been executed.


### Trusted lead routing

- Internal SQL function: `partner_network.route_new_customer_lead(uuid)`. It locks the new lead, selects one eligible partner with matching service and state/district, prefers exact district coverage, then balances the partner's recent seven-day assignment count. It is called automatically by the customer-lead AFTER INSERT trigger.
- Candidate eligibility requires both active account and verified status, plus available free quota or active premium entitlement. The existing assignment trigger performs the quota charge in the same transaction as the exclusive assignment.
- Trusted retry SQL RPC: `public.partner_route_customer_lead(uuid)`. It rejects non-service-role callers and retries an unmatched lead. Edge Function: `supabase/functions/partner-route-lead/index.ts`; it accepts POST with a lead UUID and requires the exact server-side service-role bearer secret. The secret is read only from Edge Function environment and is never embedded in frontend code.
- No browser or anonymous caller can invoke the trusted routing/retry RPC directly. The Edge Function is not yet deployed; automatic first-attempt routing is performed by the database trigger and does not require a browser call. Do not expose the service-role key to make this work.
- No SQL has been run and no function has been deployed.


### Isolated customer enquiry demo

- Demo page: `partner-network/demo-enquiry.html` (feature branch only).
- The page has `noindex,nofollow`, is not linked from existing service pages, and does not edit any current public service page, title, metadata, canonical, URL, CSS or sitemap.
- The form requires explicit consent before sending customer contact details to the public intake RPC. It validates mobile format and uses only the public Supabase publishable/anon key from `config.js`.
- Successful submission creates a lead through `public.partner_submit_customer_lead`. A database AFTER INSERT trigger immediately attempts exclusive routing; the lead remains `new` if no eligible partner is available. The UI confirms matching was attempted without promising an assignment.
- To test after approved setup: review/deploy the SQL migration, configure the public Supabase URL and publishable key in `config.js`, then open this page on the feature branch. No production site changes are made by this commit.
- Existing service pages must remain untouched until the owner explicitly approves a later integration.


### Admin lead operations

- The Admin Control Center now has a separate Customer Enquiries panel.
- `public.partner_admin_get_leads(status, limit)` returns up to 200 recent leads with assignment and assigned-partner summary, only after the Admin allowlist check.
- `public.partner_admin_retry_lead(lead_id)` permits an allowlisted Admin to retry only a lead still in `new` state. The result is written to `partner_network.admin_lead_action_history`.
- Customer name, phone and enquiry details are visible only in this Admin-only RPC and to the partner who owns an assignment through the partner dashboard RPC.
- Admin page changes are still feature-branch drafts; SQL has not been executed and the UI has not been runtime-tested.
