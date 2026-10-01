-- ============================================================================
-- SarkariSewa Portal — Exam Calendar detail-content migration
-- Run ONCE in Supabase Dashboard → SQL Editor → New query → paste → Run
-- (run AFTER supabase/exam-calendar-schema.sql — this adds columns to the
-- table that script creates)
-- ============================================================================
-- Why this exists: exam_calendar originally stored only name/org/dates/link
-- — enough for a listing card, but not enough for a real, indexable page.
-- Every exam card linked straight to the official government site with no
-- internal detail page at all, which is a big part of why Google flagged
-- this site for thin/unindexed content. This migration adds the same kind
-- of depth fields job_alerts already has, so tools/generate-exam-pages.py
-- can build a real static page per exam.
-- ============================================================================

alter table exam_calendar add column if not exists description_en text;
alter table exam_calendar add column if not exists description_hi text;
alter table exam_calendar add column if not exists eligibility_en text;
alter table exam_calendar add column if not exists eligibility_hi text;
alter table exam_calendar add column if not exists age_limit_en text;
alter table exam_calendar add column if not exists age_limit_hi text;
alter table exam_calendar add column if not exists exam_pattern_en text;
alter table exam_calendar add column if not exists exam_pattern_hi text;
alter table exam_calendar add column if not exists syllabus_en text;
alter table exam_calendar add column if not exists syllabus_hi text;
alter table exam_calendar add column if not exists selection_process_en text;
alter table exam_calendar add column if not exists selection_process_hi text;
alter table exam_calendar add column if not exists how_to_apply_en text;
alter table exam_calendar add column if not exists how_to_apply_hi text;
alter table exam_calendar add column if not exists application_fee_en text;
alter table exam_calendar add column if not exists application_fee_hi text;
alter table exam_calendar add column if not exists notification_pdf_link text;

-- ============================================================================
-- None of these are NOT NULL — existing rows keep working with the listing
-- card even if left blank. But leaving them blank on a NEW exam is exactly
-- the thin-content problem this migration exists to fix — always fill them
-- when adding an exam from now on (see content-depth-prompt.md, EXAM block).
-- ============================================================================
