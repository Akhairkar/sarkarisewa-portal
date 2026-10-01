# Working on this codebase — read this first

If you're an AI session (or a person) picking this project up — new
chat, possibly a different device — read this before touching any
code. It exists so work can be split across sessions without one
session breaking what another already built.

## Step 1 — Orient yourself

1. Read `STATUS.md` top to bottom — it's the single source of truth
   for what's built, and it's kept in sync with the actual code (not
   assumed from memory of past sessions).
2. Run `python3 audit-site.py` from the repo root **before making any
   change**, to confirm you're starting from a clean state. If it
   reports issues immediately, something is already broken — flag
   this before doing anything else, don't build on top of it.
3. **Don't trust a doc's claim that something "isn't built yet" without
   checking the actual repo first.** This has gone wrong before —
   entire features (a 20-state scheme directory, an Exam Calendar
   module with its own admin tab and Supabase table) existed fully in
   code with zero mention in any doc. `grep`/`find` the codebase for
   related filenames before telling the user something doesn't exist.

## Step 2 — Non-negotiable rules

1. **Never break the existing audit.** Run `python3 audit-site.py`
   after every change, before delivering anything. It checks broken
   local links/assets, `data-i18n` key coverage in both languages,
   JSON validity, and dangling cross-references (`relatedServices`,
   `relatedServiceId`). Don't ship a red audit.

2. **Every changed `.js` file must pass `node --check file.js`.**
   Every changed `.html` file should parse cleanly with BeautifulSoup.

3. **Never hardcode a count that will go stale.** Compute service/
   category counts from the actual data file at runtime (see
   `home.js`'s `renderTrustStats()`) — never type a number into
   HTML/`lang.json`.

4. **Never break the bilingual pattern.** Every user-facing string is
   `{"en": "...", "hi": "..."}` in `data/lang.json` (site chrome) or
   inline in content JSON files. Never ship English-only or
   Hindi-only new UI text.

5. **Follow the `SS_ROOT` system exactly** for any new page.
   Root-level pages: `window.SS_ROOT = "";`. One-level-deep pages
   (`category/`, `service/`, `blog/`, `jobs/`, `support/`, `admin/`,
   `states/`, `csc/`, `exams/`): `window.SS_ROOT = "../";`. All
   internal links/fetches use `${ROOT}...` — never a hardcoded
   absolute path, never assume the domain.

6. **Match `data/services.json`'s existing schema exactly** when
   adding services — see any existing entry for exact field
   names/shapes. `relatedServices` ids must exist elsewhere in the
   file — `audit-site.py` checks this, but verify yourself too.

7. **Never invent an official government URL.** If you don't have a
   verified real URL, say so and ask, or use `web_search` to verify
   it — don't guess a plausible-looking `.gov.in` URL.

8. **Always update `STATUS.md` before finishing** if you added,
   removed, or changed a feature — this is the one doc, keep it
   accurate. Don't create a new standalone `*-NOTES.md` file per
   change; that pattern is exactly what caused doc sprawl before
   (this repo used to carry 8 overlapping doc files that
   contradicted each other and got consolidated into 3: this file,
   `STATUS.md`, and `README.md`).

9. **Always deliver a complete, already-merged file for anything
   interconnected** (especially `admin/dashboard.html`) — never a
   diff/fragment the user has to hand-splice in. Hand-merging across
   sessions is what caused tabs to silently disappear in the past
   (one session's patch dropping another's addition) — not really a
   code bug, a merge-process bug. Deliver whole files.

10. **Always deliver zips via the actual output/present-files
    mechanism**, and verify the zip's contents (`unzip -l` + grep for
    the files you just touched) before delivering — zips have
    silently missed files before.

11. **Don't silently expand scope.** If you notice something else is
    broken while working on the user's actual request, fix it only if
    it's small/related and say so explicitly — flag anything larger
    first instead of doing an unrelated rewrite.

12. **This project can't run Python locally** (old laptop) — that's
    why `.github/workflows/regenerate-content.yml` exists. Anything
    needing live execution (fetching from Supabase, running
    `audit-site.py`) either needs to go through that GitHub Action or
    be run in a sandboxed session with network access — a fix
    described as "done" that was never actually executed against
    live data isn't done yet.

## Step 3 — When you're done, tell the user plainly

- What you built/fixed
- What you verified (`audit-site.py` output, etc.)
- What's still pending
- Where the deliverable is

Match the tone of prior work in this project: Hinglish, concise,
concrete — not a wall of text.
