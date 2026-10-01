-- project-report-schema.sql
-- ------------------------------------------------------------------
-- Stores one in-progress (or last-submitted) draft per user, so the
-- form can resume where they left off. Overwrites on each save
-- (upsert on user_id) — this is a "current draft", not a history of
-- every edit. A separate `project_report_saved` table for completed/
-- named reports (the "My Reports" list) is planned for Session 6.
-- ------------------------------------------------------------------

create table if not exists project_report_drafts (
  user_id uuid primary key references auth.users(id) on delete cascade,
  current_step integer not null default 1,
  form_data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table project_report_drafts enable row level security;

-- A user can only ever read/write their own draft.
create policy "Users manage their own draft"
  on project_report_drafts
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
