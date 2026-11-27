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
- [ ] Build the live data-backed partner dashboard and admin approval/activation workflow.
- [ ] Build responsive partner dashboard and lead workflow.
- [ ] Build trusted lead-routing Edge Function (exclusive assignment + atomic quota).
- [ ] Connect only approved service pages using a reusable enquiry component.
- [ ] Build admin partner directory, legacy partner invitation/import and lead controls.
- [ ] Add browser push + in-dashboard notifications.
- [ ] Add performance-based eligibility and premium feature controls.
- [ ] Test RLS with two partner accounts, Admin, anonymous visitor and service-role routing.
- [ ] Obtain explicit approval before any merge or production deployment.

## Migration

File: `supabase/partner-network-foundation.sql`

**Do not run this migration yet.** It is a reviewable, additive draft. The existing Supabase project must be checked for schema exposure settings, roles, existing objects, auth configuration and migration order first. No SQL has been executed against the live database.


### Portal access guard

- `portal-guard.js` keeps the sample dashboard hidden and checks the Supabase Auth session before any portal access state is displayed.
- `public.partner_get_portal_access()` returns only the current user's profile approval state and starter entitlement summary. It never returns lead or customer contact data.
- Only `account_status = active` AND `verification_status = verified` passes the approval gate. Even approved partners see a dashboard-integration notice until real lead data is connected; demo figures are not presented as real.
- This guard depends on the SQL draft being reviewed and deployed. It is not live until Supabase credentials and migrations are configured.
