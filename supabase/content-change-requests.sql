-- Admin-only content change requests. This is a review queue, NOT a publisher.
-- Approved records remain proposals until a separate, trusted publishing workflow exists.
create table if not exists public.content_change_requests (
  id uuid primary key default gen_random_uuid(),
  page_path text not null check (page_path like '/%' and page_path not like '%://%' and length(page_path) <= 500),
  change_type text not null check (change_type in ('content_update','title','meta_description','content_fix')),
  proposed_title text,
  proposed_description text,
  proposed_content text,
  reason text not null check (length(trim(reason)) between 5 and 2000),
  status text not null default 'draft' check (status in ('draft','pending','approved','rejected')),
  admin_note text,
  created_by uuid not null default auth.uid() references auth.users(id),
  reviewed_by uuid references auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint content_change_payload_size check (
    coalesce(length(proposed_title),0) <= 300 and
    coalesce(length(proposed_description),0) <= 1000 and
    coalesce(length(proposed_content),0) <= 50000 and
    coalesce(length(admin_note),0) <= 4000
  )
);
create index if not exists content_change_requests_status_created_idx
  on public.content_change_requests(status, created_at desc);
create index if not exists content_change_requests_path_idx
  on public.content_change_requests(page_path);

alter table public.content_change_requests enable row level security;
revoke all on public.content_change_requests from anon, public;
revoke all on public.content_change_requests from authenticated;
grant select, insert on public.content_change_requests to authenticated;
-- Reviewers may update decision metadata only; proposal content and creator fields stay immutable.
grant update (status, admin_note, reviewed_by, reviewed_at, updated_at)
  on public.content_change_requests to authenticated;

drop policy if exists "Admins can read content change requests" on public.content_change_requests;
create policy "Admins can read content change requests"
  on public.content_change_requests for select to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

drop policy if exists "Admins can create content change requests" on public.content_change_requests;
create policy "Admins can create content change requests"
  on public.content_change_requests for insert to authenticated
  with check (
    coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false)
    and created_by = auth.uid()
  );

drop policy if exists "Admins can update content change requests" on public.content_change_requests;
create policy "Admins can update content change requests"
  on public.content_change_requests for update to authenticated
  using (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false))
  with check (coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false));

-- Deliberately no DELETE policy, no public access, and no publishing trigger.
