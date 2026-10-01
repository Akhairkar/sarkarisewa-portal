-- ============================================================================
-- job-alerts-detail-migration.sql — adds the extra fields needed for a
-- dedicated detail page per job alert (Part 1 of the Job Detail Pages
-- feature). Safe to run on the existing live job_alerts table — every
-- column uses ADD COLUMN IF NOT EXISTS, nothing is dropped or renamed,
-- and all existing rows just get NULL in the new columns until edited.
-- Run this ONCE in Supabase Dashboard → SQL Editor.
-- ============================================================================

alter table job_alerts add column if not exists description_en text;
alter table job_alerts add column if not exists description_hi text;
alter table job_alerts add column if not exists vacancy_breakdown_en text;
alter table job_alerts add column if not exists vacancy_breakdown_hi text;
alter table job_alerts add column if not exists selection_process_en text;
alter table job_alerts add column if not exists selection_process_hi text;
alter table job_alerts add column if not exists salary_en text;
alter table job_alerts add column if not exists salary_hi text;
alter table job_alerts add column if not exists how_to_apply_en text;
alter table job_alerts add column if not exists how_to_apply_hi text;
alter table job_alerts add column if not exists important_dates_en text;
alter table job_alerts add column if not exists important_dates_hi text;

-- ============================================================================
-- All of the above are optional (nullable) — an admin can publish a job
-- alert with just the original fields and fill these in later, or leave
-- them blank; the detail page only shows a section if it has content.
-- ============================================================================
