# SarkariSewa India — Supabase Security Migration Guide

## Purpose

This guide explains how to run `supabase/security-hardening.sql` safely.

The migration changes admin access from **any authenticated Supabase user** to only users whose Supabase Auth JWT contains:

`app_metadata.role = "admin"`

It does **not** expose the private CSC claims/subscriber data to normal visitors.

---

## Before running

1. Open the SarkariSewa India Supabase project.
2. Make sure you can log in to the Supabase Dashboard.
3. Keep the existing admin email/password available.
4. Do **not** put a `service_role` key in website JavaScript.
5. Take note of the current Auth user that should remain the administrator.

---

## Step 1 — Open SQL Editor

Supabase Dashboard → your project → **SQL Editor** → **New query**.

---

## Step 2 — Open the migration file

Open this repository file:

`supabase/security-hardening.sql`

Copy the **entire file**.

Do not copy only selected sections.

---

## Step 3 — Set the admin role BEFORE testing

The migration checks the JWT value:

`app_metadata.role = "admin"`

The administrator account must therefore have this server-controlled metadata.

In Supabase Dashboard:

**Authentication → Users → select your admin user → Edit user / metadata**

Set:

`app_metadata`

to:

`{"role":"admin"}`

If the Dashboard UI presents metadata as JSON, enter valid JSON exactly in that field.

### Important

Use **app_metadata**, not **user_metadata**.

`app_metadata` is intended for authorization data controlled by the server/admin. Normal users should not be allowed to change their own admin role.

If your Supabase Dashboard version does not provide an interface for editing `app_metadata`, stop at this step and use your project's supported server-side/admin mechanism to set it. Do not put a secret/service-role key into the public website.

---

## Step 4 — Run the migration

Paste the complete contents of:

`supabase/security-hardening.sql`

into SQL Editor.

Click **Run**.

A successful execution should complete without SQL errors.

---

## Re-run / idempotency

The migration can be run a second time (it is idempotent). If the wrong/older version was run the first time, run the corrected migration again.

## Step 5 — Refresh the admin session

After changing `app_metadata`, sign out of the SarkariSewa admin panel and sign in again.

This is important because the authorization check reads the role from the JWT. An old session may still contain the previous token.

---

## Step 6 — Test the admin panel

Log in using the intended administrator account.

Check:

- Admin dashboard opens.
- Comments can be viewed/moderated.
- Subscribers can be viewed.
- CSC claims can be viewed/processed.
- Services/blog/jobs/exam content management still works.
- Analytics still loads.

If one feature fails, **do not disable RLS** and do not change the policies back to `authenticated = admin`. Report the exact error first.

---

## Step 7 — Security test

Use a separate normal Supabase Auth account, or another authenticated account that does **not** have:

`app_metadata.role = "admin"`

That account must not be able to:

- Read subscriber contact information.
- Read private CSC claims.
- Read hidden/unpublished admin data.
- Modify/delete admin-managed records.
- Read visitor analytics.

Public/anonymous website functions such as public service content, verified CSC listings and allowed form submissions should continue according to their existing policies.

---

## Step 8 — Final verification

After testing, confirm:

- [ ] Admin login works.
- [ ] Admin dashboard works.
- [ ] Analytics works.
- [ ] Comments moderation works.
- [ ] Subscriber list is private.
- [ ] CSC claims remain private.
- [ ] Normal authenticated users have no admin access.
- [ ] Public website still works.

---

## If an error appears

Do not delete tables or disable Row Level Security.

Copy the **exact Supabase error message** and send it here. We can correct the migration without weakening the security model.

---

## Rollback warning

This migration intentionally removes broad `authenticated` admin access.

Do **not** manually restore policies such as:

`using (auth.role() = 'authenticated')`

because that makes every authenticated user an administrator.

If rollback is genuinely required, create a controlled rollback migration after identifying the exact failed step.

---

## Current migration file

`supabase/security-hardening.sql`

Run this guide only after confirming the intended admin user's `app_metadata.role` is set to `admin`.
