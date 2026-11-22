-- Narrow Content Review Queue permissions.
-- Safe to apply after content-change-requests.sql; does not alter or delete rows.
-- Admins can create proposals and review them, but cannot rewrite proposal
-- content, target path, change type, creator, or original creation timestamp.

begin;

alter table public.content_change_requests enable row level security;

revoke all on table public.content_change_requests from public, anon, authenticated;
grant select, insert on table public.content_change_requests to authenticated;
grant update (status, admin_note, reviewed_by, reviewed_at, updated_at)
  on table public.content_change_requests to authenticated;

-- Keep the existing admin-only SELECT / INSERT / UPDATE RLS policies.
-- Column privileges provide an additional boundary: even an admin browser
-- session cannot update proposal payload or creator fields through PostgREST.

commit;
