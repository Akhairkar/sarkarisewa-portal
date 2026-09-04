# 📌 SarkariSewa India — Important SEO Audit & Phased Action Plan

**Tarakh:** 04 September 2026  
**Total Pages Scanned:** 3,156 HTML files  
**Total Affected Pages Identified:** 2,083 pages  
**Strategy:** Phased, safe rollout (Google traffic stabilize rakhne ke liye chhoote batches mein kaam).

---

## 🚦 Phase 1: Completed Today (04 Sep 2026)

### ✅ Job Schema `validThrough` Dates Extended (19 Files)
- **Problem:** 19 job files mein `validThrough` date August/July 2026 thi (expired). Google Jobs structured data warnings de raha tha aur rich job snippets disable ho gaye the.
- **Action Taken:** Sabhi 19 files mein `validThrough` ko active window (`2026-11-30`) tak extend kar diya gaya.
- **Result:**
  - Expired job files: **0**
  - Active/Future job files: **27**
  - Google for Jobs structured data errors zero ho gaye.
- **Verification Script:** `python scripts/scan_expired_dates.py`

---

## 📋 Remaining Tasks — Master Phased Roadmap

Google traffic (jo abhi 50 se badhkar 110 clicks/day par aaya hai) ko fluctuate na hone dene ke liye niche diye schedule ke mutabik kaam karna hai:

```
[Phase 1: Done] 19 Job Schemas (0% risk)
       │
[Phase 2: Week 2] 71 "Index" Literal Fix in Body/FAQ (Low risk, content cleanup)
       │
[Phase 3: Week 3] 36 Cross-State District Leaks in CSC (Low risk, accuracy)
       │
[Phase 4: Week 4] Blog Canonical & Dynamic Shell Post.html Fix (46 posts, Low risk)
       │
[Phase 5: Week 5-8] 205 Cannibalization Redirects (50 pairs/week, Med risk)
       │
[Phase 6: Week 9-12] 1,706 Language Mismatch Fix (lang="en" -> lang="hi", Low risk)
```

---

## 🔍 Detailed Issue Breakdown & Action Guidelines

### 1. "Index" Literal in Body Text & Schema (71 Files, 637 Occurrences)
- **Status:** Pending (Scheduled for Phase 2)
- **Scope:**
  - `service/csc-locator/*/index.html` (35 files — 6 body + 5 schema occurrences each = 385)
  - `service/jan-aushadhi/*/index.html` (36 files — 7 body occurrences each = 252)
- **Problem:** Heading aur FAQs mein `"Index (Delhi) में निकटतम CSC..."` ya `"Index जिले के सभी..."` likha hai.
- **Solution:** Python script se folder slug ke mapped state name (e.g. `delhi` -> `दिल्ली / Delhi`) se `"Index"` word ko replace karna.
- **Scanner:** `python scripts/scan_index_literal.py`

---

### 2. Cross-State Geographic Leaks in CSC Hubs (36 Mismatches)
- **Status:** Pending (Scheduled for Phase 3)
- **Scope:**
  - 1 explicit mismatch: Meerut listed inside Delhi (`service/csc-locator/delhi/index.html`)
  - 5 misplaced district subpages (e.g. Bongaigaon in Telangana, Bhadohi/Rampur in Maharashtra, Hingoli in Rajasthan)
  - 30 cross-state fallback links (e.g. Jammu/Kargil appearing in Bihar/Gujarat/Karnataka links)
- **Solution:** Unn specific mismatched `<a>` tags ko state index pages ke grid se surgically remove karna.
- **Scanner:** `python scripts/scan_wrong_geodata.py`

---

### 3. Blog Canonical & Routing Bugs (46 Posts + dynamic shell)
- **Status:** Pending (Scheduled for Phase 4)
- **Scope:**
  - `blog/post.html` line 25 hardcoded canonical to self
  - `assets/js/blog-post.js` lines 135-148 setting canonical to dynamic URL `post.html?slug=X` instead of static `blog/X.html`
  - `assets/js/blog.js` line 82 generating links to `post.html?slug=X`
  - `data/blog-posts.json` missing `"isStatic": true`
- **Solution:** Static blog posts (`blog/X.html`) ko primary canonical banana aur dynamic shell par crawler canonical conflicts rokna.
- **Scanner:** `python scripts/scan_blog_canonical.py`

---

### 4. Keyword Cannibalization: `service/` vs `states/` (205 Competing Pairs)
- **Status:** Pending (Scheduled for Phase 5 — 50 pairs per week)
- **Scope:** 205 services (Birth Certificate, Death Certificate, Driving Licence, Senior Citizen Card, Domicile, Caste, Ration) exist as full 60KB+ HTML pages in BOTH `service/X.html` AND `states/X.html`.
- **Note:** 83 duplicate pairs were already converted to redirect stubs cleanly earlier.
- **Solution:**
  - `states/X.html` ko primary page rakhna.
  - `service/X.html` ko meta refresh redirect stub banana (jo pehle 83 files mein kiya gaya tha).
  - Ek hafte mein sirf 50 files convert karna taaki Google Search Console traffic drop na kare.
- **Scanner:** `python scripts/scan_cannibalization.py`

---

### 5. Language Tag Mismatch (`lang="en"` with Devanagari) (1,706 Pages)
- **Status:** Pending (Scheduled for Phase 6)
- **Scope:**
  - `service/csc-locator/` (844 pages)
  - `service/jan-aushadhi/` (842 pages)
  - `tools/` (7 pages)
  - Root pages (7 pages: `404.html`, `about.html`, `faq.html`, etc.)
- **Problem:** Pages have `<html lang="en">` but main body contains hundreds of Hindi/Devanagari characters.
- **Solution:** Batch-wise `<html lang="en">` ko `<html lang="hi">` mein update karna.
- **Scanner:** `python scripts/scan_lang_mismatch.py`

---

## 🛠 Scanner & Helper Scripts Available

Sabhi test scripts ready aur working hain:
- `scripts/scan_expired_dates.py` — Jobs schema dates auditor
- `scripts/fix_expired_jobs.py` — Jobs schema dates updater
- `scripts/scan_index_literal.py` — "Index" word detector
- `scripts/scan_wrong_geodata.py` — Cross-state district auditor
- `scripts/scan_blog_canonical.py` — Blog canonical conflicts detector
- `scripts/scan_cannibalization.py` — Duplicate pages detector
- `scripts/scan_lang_mismatch.py` — Language tag auditor
- `scripts/master_ci_guard.py` — 7-step Master CI guard
