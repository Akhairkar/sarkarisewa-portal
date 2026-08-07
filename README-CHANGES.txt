THE REAL ROOT CAUSE (found this time, fixed properly)
=========================================================
Two separate problems were stacked on top of each other:

1) TABS KEPT DISAPPEARING — because every fix so far was delivered as a
   PATCH that you had to hand-merge into your live admin/dashboard.html.
   Hand-merging code across multiple rounds is exactly how one tab keeps
   getting lost while another gets added — it's not really a code bug,
   it's a merge-process bug. Fixed by delivering the COMPLETE, already-
   merged file this time — just replace the whole file, no merging.

2) THE SQL KEPT ERRORING ("column path does not exist", "cannot change
   return type") — because I had been guessing column names instead of
   reading your project's actual, already-working tracking script,
   assets/js/analytics-track.js (loaded on EVERY page automatically by
   main.js — this is your real Module 18 analytics, already live). It
   writes to columns named `page_path` and `referrer_host`. My schema
   guessed `path` and `referrer`. That mismatch was the entire problem
   the whole time. Fixed by rewriting the schema to match the real
   script exactly, and deleting the extra, wrong, redundant
   assets/js/analytics.js file (and its manual <script> tag on
   jobs/index.html) that I had mistakenly added earlier — you don't need
   it, analytics-track.js already covers every page.

WHAT'S IN THIS ZIP — replace these 5 files at the same paths
=================================================================
  admin/dashboard.html          Full file, 7 tabs: Overview, Comments,
                                 Subscribers, CSC Listings, Blog (+ Bulk
                                 Import), Job Alerts (+ Bulk Import),
                                 Analytics. Nothing removed, only added.

  supabase/analytics-schema.sql RUN THIS in Supabase SQL Editor (new
                                 query tab, paste, Run). Matches the real
                                 analytics-track.js column names now.

  jobs/index.html                Removed the wrong extra analytics.js
                                 script tag (not needed, was wrong anyway).

  STATUS.md, CHANGELOG.md        Updated so any future session (or a
                                 different AI) reads the TRUE current
                                 state first, instead of stale notes that
                                 caused this whole mess to repeat. This is
                                 the important one for preventing a repeat.

ALSO DELETE FROM YOUR REPO
=============================
  assets/js/analytics.js   <- wrong, redundant, delete it. The real one
                              (assets/js/analytics-track.js) is untouched
                              and already correct — don't delete that one.

AFTER UPLOADING
================
1. Run supabase/analytics-schema.sql (fresh query tab).
2. Open /admin/dashboard.html — confirm all 7 tabs are there.
3. Try the Blog tab's new Bulk Import box with a couple of test posts.
4. Give it a day and check the Analytics tab shows real visitor numbers.

If ANYTHING looks wrong after this, please paste/screenshot the exact
error rather than re-describing the symptom — that's what let this
specific column-name bug hide for 3 rounds.
