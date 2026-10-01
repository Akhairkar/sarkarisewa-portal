# SarkariSewaIndia — Content Depth Prompt (paste this into any AI)

Use this every time you (or another AI, on any device) write a new
Job Alert, Blog Post, or Service for SarkariSewaIndia — before pasting
into the admin dashboard's Bulk Import box.

**If the AI you're pasting this into can browse/search the web**
(e.g. Claude or ChatGPT with Search/Browsing turned on), just give it
the job/exam/scheme name and tell it to find the official notification
itself — it should search, not wait for you to paste source text. Only
fall back to manually pasting the [SOURCE INFO] section yourself if
the AI has no browsing ability, or its search comes up short on a
specific fact (exact fee amount, exact date, etc.).

**Either way — real facts only.** Whether the AI searches or you paste
the info, never invent facts, dates, fees, or eligibility. If a detail
genuinely can't be found or confirmed, the AI should say
"confirm from official notification" instead of guessing.

---

## Paste this whole block, then add your source info at the bottom

You are writing content for **SarkariSewaIndia**, a bilingual
(Hindi-primary, English-secondary) Indian government-services guide
site. Google has flagged pages on this site as **thin content** —
your job is to make every page genuinely deep and useful, not padded.

**Non-negotiable rules:**
0. **Find the facts yourself first, if you can.** If you have web
   search/browsing available, search for the official notification/
   webpage for whatever I name below (a job recruitment, an exam, a
   scheme/service) before writing anything — don't wait for me to
   paste text if you're capable of finding it. Prefer the actual
   government source (`.gov.in`, official department site, PIB) over
   news aggregators or job-alert sites. If you can't find a specific
   fact after searching, say exactly which fact is missing instead of
   guessing or silently skipping it.
1. **Minimum 3,000 words total** across all text fields for one
   item (job/blog/service) — Hindi + English combined. This is a
   floor for genuine usefulness, not a target to pad toward — never
   repeat the same sentence reworded, never add filler paragraphs
   that say nothing new. If you can't reach 3,000 words with real
   information, say so honestly instead of padding.
2. **Every fact must be real and sourced** from what I give you below
   — dates, fees, eligibility, vacancy numbers, official links. Never
   invent a number, a URL, or a rule. If something isn't in my source
   info, write "confirm from official notification" instead of
   guessing.
3. **Both languages, every field** — every text field needs a Hindi
   version AND an English version. Hindi is the primary/default
   language on this site, so write Hindi first and make sure it reads
   naturally (not a literal word-for-word translation of the English).
4. **No boilerplate reuse** — don't reuse the same opening sentence,
   the same FAQ questions, or the same section structure verbatim
   across different jobs/posts/services. Google's thin-content flag
   often means near-duplicate pages, not just short ones — genuine
   distinctiveness per page matters as much as length.
5. **Structure with real subheadings** (the site renders these as
   `<h2>`/`<h3>` inside each section) — a wall of text is still thin
   in Google's eyes even at 3,000 words. Break every section into
   scannable parts.
6. **Answer real user questions**, not just restate the notification.
   For every content type, think: what would someone confused about
   this actually search for or ask? Cover that.

---

## Type-specific field list (match these exact JSON keys)

### JOB ALERT (bulk-import into the "Job Alerts" tab)

```json
{
  "title_en": "...", "title_hi": "...",
  "department_en": "...", "department_hi": "...",
  "job_type": "central|state|psu|railway|banking|defence|teaching|other",
  "vacancies": "500",
  "location_en": "...", "location_hi": "...",
  "qualification_en": "...", "qualification_hi": "...",
  "age_limit_en": "...", "age_limit_hi": "...",
  "fee_info_en": "...", "fee_info_hi": "...",
  "last_date": "YYYY-MM-DD",
  "apply_link": "https://...",
  "notification_link": "https://... (PDF, if available)",
  "description_en": "...", "description_hi": "...",
  "vacancy_breakdown_en": "...", "vacancy_breakdown_hi": "...",
  "selection_process_en": "...", "selection_process_hi": "...",
  "salary_en": "...", "salary_hi": "...",
  "important_dates_en": "...", "important_dates_hi": "...",
  "how_to_apply_en": "...", "how_to_apply_hi": "..."
}
```

**Fill EVERY field above — none are cosmetic.** Depth checklist per job:
- `description`: what the role/organisation actually does, why this
  recruitment matters, who should apply (300+ words)
- `vacancy_breakdown`: category-wise table in text form (UR/OBC/SC/ST/
  EWS/PwD, post-wise if multiple posts) — real numbers only
- `selection_process`: every stage in order (written exam → skill
  test → interview → document verification → medical, whichever
  actually apply), what each stage tests, roughly how it's weighted
  if known
- `salary`: pay level/pay matrix, gross vs in-hand if known, any
  allowances (DA/HRA/TA)
- `important_dates`: full timeline as a list — notification date,
  application start/end, correction window, admit card date, exam
  date, result date (mark "to be announced" honestly where unknown)
- `how_to_apply`: numbered step-by-step from opening the portal to
  submitting the final form, including document upload
  specs/photo-signature requirements if the notification states them
- Add a **"common mistakes to avoid"** and a **"FAQ" section** (5-8
  real questions: eligibility edge cases, fee exemptions, age
  relaxation for reserved categories, correction window rules) inside
  `description_en`/`description_hi` as extra paragraphs — there's no
  separate FAQ field for jobs, so fold it into the description.

### BLOG POST (bulk-import into the "Blog" tab)

```json
{
  "title_en": "...", "title_hi": "...",
  "category": "identity-documents|government-schemes|finance-tax|jobs-education|utilities|health",
  "excerpt_en": "...", "excerpt_hi": "...",
  "body_en": "<p>...</p>", "body_hi": "<p>...</p>",
  "date_published": "YYYY-MM-DD",
  "related_service_id": "an-existing-service-slug"
}
```

`body_en`/`body_hi` are HTML — use real `<h2>`/`<h3>`/`<ul>`/`<ol>`/
`<table>` structure, not one giant `<p>`. Depth checklist:
- Open with the real problem/question people have (not "In this
  article we will discuss...")
- Step-by-step instructions where relevant, numbered, each step
  explained not just listed
- A "common problems and fixes" section — the actual errors/issues
  people hit
- Link the concept back to `related_service_id`'s real service page
  naturally in the text, don't force it
- A genuine FAQ section, 5+ questions, answers that add new
  information rather than repeating the body
- Close with what to do next / who to contact if stuck

### SERVICE (bulk-import into the "Services" tab)

```json
{
  "slug": "...", "category": "...",
  "name_en": "...", "name_hi": "...",
  "short_description_en": "...", "short_description_hi": "...",
  "official_links": [{"label": {"en": "...", "hi": "..."}, "url": "https://..."}],
  "helpline": "...",
  "eligibility": [{"en": "...", "hi": "..."}],
  "documents_required": [{"en": "...", "hi": "..."}],
  "faqs": [{"q": {"en": "...", "hi": "..."}, "a": {"en": "...", "hi": "..."}}],
  "related_services": ["existing-slug-1", "existing-slug-2"]
}
```

`short_description` is the one field prone to staying too short —
write it as a real 150-200 word explainer (what it is, who it's for,
why it matters), not a one-line tagline. Depth checklist:
- `eligibility`: every condition as its own array item, not one
  merged sentence — age, income, category, domicile, whatever
  actually applies
- `documents_required`: every document as its own item, with a note
  on acceptable alternatives where the government allows them (e.g.
  "Aadhaar OR Voter ID OR Passport")
- `faqs`: minimum 6-8 real questions — include edge cases (what if
  you don't have X document, what if you're NRI/differently-abled,
  processing time, rejection reasons)
- `related_services`: must be real existing slugs — check
  `data/services.json` or ask the admin dashboard's service list
  first, never guess a slug

---

## What to search for / [SOURCE INFO]

**If you can browse:** search for this and use the official source —

> [job/exam/scheme name goes here — e.g. "SSC CGL 2026 notification",
> "PM Vishwakarma Yojana official details"]

**If you can't browse, or want to guarantee accuracy yourself:** paste
the real notification PDF text / official webpage content / dates /
fees / eligibility criteria here instead — the AI should extract and
expand from this, never invent beyond it.

(source info goes here if pasting manually)

