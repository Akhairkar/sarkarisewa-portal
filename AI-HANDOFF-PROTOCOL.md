# AI Handoff Protocol — READ THIS FIRST

**If you are a Claude session picking up this project for the first
time (new chat, possibly a different device), read this entire file
before touching any code.** It exists specifically so that work can be
split across multiple sessions/devices without one session breaking
what another already built.

---

## Step 1 — Orient yourself, in this exact order

1. Read `PROJECT-ROADMAP.md` top-to-bottom — the "Where things stand"
   section at the top tells you what's done and what's next.
2. Read `STATUS.md` — more granular technical status, design tokens,
   file map.
3. Skim the most recent 2-3 sections at the bottom of `CHANGELOG.md`
   (formerly separate `MODULE*-NOTES.md` files — merged into one file
   to stay under GitHub's web-upload file-count limit) for the most
   recent detailed work.
4. Run `python3 audit-site.py` from the repo root **before making any
   change**, to confirm you're starting from a clean state. If it
   reports issues immediately, something is already broken — flag this
   to the user before doing anything else, don't assume it's fine to
   build on top of.

Do not skip this. Do not assume you already know the project structure
from general knowledge — this is a specific, evolved codebase with
specific conventions documented in these files.

---

## Step 2 — Non-negotiable rules

1. **Never break the existing audit.** Run `python3 audit-site.py`
   after every change, before delivering anything. It checks: broken
   local links/assets, `data-i18n` key coverage in both languages,
   JSON validity, dangling cross-references (`relatedServices`,
   `relatedServiceId`). If it fails, fix it before packaging — don't
   ship a red audit.

2. **Every new/changed `.js` file must pass `node -c file.js`** before
   delivery. Every new/changed `.html` file should parse cleanly with
   BeautifulSoup (`python3 -c "from bs4 import BeautifulSoup; BeautifulSoup(open('f.html'),'lxml')"`).

3. **Never hardcode a count that will go stale.** This bug has
   recurred twice already (Module 10's "100+", Module 13's "80+" after
   the catalog grew to 92). If you show a service/category count
   anywhere, prefer computing it from the actual data file at runtime
   (see `home.js`'s `renderTrustStats()` for the pattern), not typing a
   number into HTML/lang.json.

4. **Never break the bilingual pattern.** Every user-facing string is
   `{"en": "...", "hi": "..."}` in `data/lang.json` (site chrome) or
   inline in `data/services.json`/`data/blog-posts.json` (content).
   Never ship English-only or Hindi-only new UI text.

5. **Follow the existing `SS_ROOT` system exactly** for any new page.
   Root-level pages: `window.SS_ROOT = "";`. One-level-deep pages
   (inside `category/`, `service/`, `blog/`, `support/`, `admin/`):
   `window.SS_ROOT = "../";`. All internal links/fetches use
   `${ROOT}...` — never a hardcoded absolute path, never assume the
   domain (it changed once already, from GitHub Pages to
   sarkarisewaindia.com — code that used relative paths needed zero
   changes; code that hardcoded the old domain needed 165 fixes across
   25 files).

6. **Match the existing `services.json` schema exactly** when adding
   services — see any existing entry for the exact field names/shapes:
   `id`, `slug`, `category`, `name{en,hi}`, `shortDescription{en,hi}`,
   `officialLinks[]`, `helpline` (string OR array of `{label{en,hi},
   phone}` — both forms exist in the data, code handles both, see
   `formatHelpline()` in `support.js` and `helplineBlock()` in
   `service.js`), `dateAdded`, `eligibility[{en,hi}]`,
   `fees[{label{en,hi}, amount{en,hi}}]`, `documentsRequired[{en,hi}]`,
   `faqs[{q{en,hi}, a{en,hi}}]`, `relatedServices[ids]` (must be real
   ids that exist elsewhere in the file — verify this before shipping,
   `audit-site.py` checks it but verify yourself too).

7. **Never invent an official government URL.** If you don't have a
   verified real URL for a service's official link, say so and ask,
   or use `web_search` to verify it — don't guess a plausible-looking
   `.gov.in` URL. A wrong official link actively misdirects real users
   trying to access a government service.

8. **Always update documentation before finishing:**
   - Add a new dated/module-labelled section to `CHANGELOG.md`
     describing what you built and why — **don't create a new
     standalone `*-NOTES.md` file**; that's exactly the file-count
     growth that got consolidated. A genuinely major new feature
     (its own folder, its own SQL schema) can still get one purpose-
     named `.md` if it needs room to breathe (e.g. a future
     `MODULE20-NOTES.md`), but default to appending to `CHANGELOG.md`.
   - Update `STATUS.md`'s file map / next-steps section if it changed
   - Update `PROJECT-ROADMAP.md`'s top summary and the relevant
     module's detail section to (DONE) if you completed it
   - Keep these three in sync with each other — a common failure mode
     in this project has been one doc saying DONE while another still
     says "not started"

9. **Always deliver a zip via `present_files`** at the end of a unit of
   work, from the actual output directory, after verifying the zip's
   contents include the new/changed files (`unzip -l` and grep for the
   files you just touched — this project has had zips silently missing
   files before; always verify, don't assume `zip -r` worked).

10. **Don't silently expand scope.** If the user asks for X and you
    notice Y is also broken, fix Y only if it's small/related and say
    so explicitly — don't do a large unrelated rewrite without flagging
    it first. Several past fixes in this project (dark-mode color
    bugs, stale counts) were found via careful review, not by rewriting
    things wholesale.

---

## Step 3 — Content-scaling goals (for future sessions to know about)

The user has stated two large future goals, not yet started as of this
writing:
- **Grow from 92 to 500+ services.** This means most future sessions
  will be writing service content in batches (see `CHANGELOG.md` § MODULE12-NOTES.md
  and the `Batch 2` section for the established pattern: full
  bilingual entries with eligibility/fees/documents/FAQs, official
  links verified via `web_search`, not guessed).
- **A state-wise scheme directory** — many government schemes are
  state-specific (not central), and none of the current 92 services
  cover state-only schemes. This is a **new, larger category of
  content** — not just "more of the same 6 categories." Needs its own
  planning: a 7th category slug (or a different data structure keyed
  by state), and a decision on how state-specific pages are
  organized/discovered (a new `data/categories.json` entry, a new
  browse pattern similar to `support/state-wise-services.html`, etc.)
  — don't start building this without first re-reading this file's
  Step 1 and confirming with the user how they want it structured,
  since it's architecturally different from adding more services to
  existing categories.

**Real risk at this scale:** thin/duplicate content. State scheme pages
in particular are easy to template-stamp into near-duplicates ("X
scheme (Maharashtra)", "X scheme (Gujarat)"...) which is exactly the
AdSense/SEO risk already discussed in this project's history
(see `CHANGELOG.md` § MODULE12-NOTES.md's "thin content" correction and the AdSense
audit notes). Each new batch should get the same care as Module 12's
content batches — genuine, distinct, useful content per page, not
filled-in templates.

---

## Step 4 — When you're done, tell the user plainly

- What you built
- What you verified (audit results)
- What's still pending
- The zip is ready via `present_files`

Match the tone/format of prior responses in this project: Hinglish,
concise, concrete — not a wall of text. Look at how `CHANGELOG.md`'s sections
files and the conversation itself are written for the expected style.
