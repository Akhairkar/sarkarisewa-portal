# 📌 SarkariSewa India — Important SEO Audit & Phased Action Plan

**Tarakh:** 04 September 2026  
**Total Pages Scanned:** 3,156 HTML files  
**Total Affected Pages Identified:** 2,083 pages  
**Strategy:** Phased, safe rollout (Google traffic stabilize rakhne ke liye chhoote batches mein kaam).

---

## 🚫 Critical Policy: Real Dates Only (Zero Misleading Schema)

- **Jobs & Schema Policy:** Kisi bhi page par artificial/fake dates nahi daalni hain. Job application ki jo **asli closing date** hai wahi schema aur table mein rahegi.
- **Current Status of `jobs/`:** Sabhi 19 files unki **real authentic dates** par maintained hain.

---

## ⚠️ Expired Job / Exam Pages Ko Delete Kyun NAHI Karna Chahiye?

User ka sawal: *"jo job listings or exam calenders expire ho gae honge unko delete karna hai page or sitemap dono par isse site pe kuch bura asar padega to fir mat karo rehne do faltu pages nahi rakhna hai site pe or sitemap me par abhi karna sahi rahega kya"*

### Decision: **ABHI DELETE BILKUL NA KAREIN** — Iske 4 Bada Kaaran:

1. **Traffic Drop Ho Jayega (Admit Card & Exam Searches):**
   - Jab job application close hoti hai, tab recruitment khatam nahi hoti!
   - Examples:
     - **SSC CGL 2026:** Form close ho gaya, lekin **Tier-1 Exam 09 se 26 September 2026** ko ho raha hai.
     - **IBPS PO 2026:** Form close ho gaya, lekin **Exam 19-20 October 2026** ko hai.
   - Laakhon candidates Google par *"SSC CGL admit card download"*, *"SSC CGL exam center"*, *"answer key"* search karte hain. Agar page delete kiya to ye saara traffic competitors (SarkariResult vagaira) par chala jaayega.

2. **Google 404 Error Spike:**
   - 19-20 pages ko ek sath delete karne se Google Search Console mein sudden 404 errors badhenge, jisse Google crawler ka domain trust down ho sakta hai (khaaskar jab site abhi 50 se 110 clicks/day par stabilize ho rahi hai).

3. **Broken Internal Links:**
   - Site ke headers, footer, hub pages, aur category pages in job listings ko link karte hain. Delete karne se saare links broken ho jayenge.

4. **SarkariResult / FreeJobAlert Model:**
   - Badi sites kabhi bhi notification page delete nahi karti. Wo usi page par **"Admit Card Released"**, **"Answer Key Released"**, **"Result Declared"** ka update daalti hain.

---

## 📋 Master Roadmap for Future Phases (Low Risk & Batches)

Google traffic (110 clicks/day) ko safe rakhne ke liye future mein in steps ko follow karna hai:

```
[Phase 1] 71 "Index" Literal Fix in Body/FAQ (Low risk, pure content cleanup)
       │
[Phase 2] 36 Cross-State District Leaks in CSC (Low risk, accuracy correction)
       │
[Phase 3] Blog Canonical & Dynamic Shell Post.html Fix (46 posts, Low risk)
       │
[Phase 4] 205 Cannibalization Redirects (50 pairs/week batches, Med risk)
       │
[Phase 5] 1,706 Language Mismatch Fix (lang="en" -> lang="hi", 400/week)
```

---

## 🔍 Detailed Issue Breakdown

### 1. "Index" Literal in Body Text & Schema (71 Files, 637 Occurrences)
- **Scope:**
  - `service/csc-locator/*/index.html` (35 files — 6 body + 5 schema occurrences each = 385)
  - `service/jan-aushadhi/*/index.html` (36 files — 7 body occurrences each = 252)
- **Problem:** FAQs aur headings mein `"Index (Delhi) में निकटतम CSC..."` ya `"Index जिले के सभी..."` likha hai.
- **Solution:** Python script se folder slug ke mapped state name (e.g. `delhi` -> `दिल्ली / Delhi`) se `"Index"` word ko replace karna.
- **Scanner:** `python scripts/scan_index_literal.py`

### 2. Cross-State Geographic Leaks in CSC Hubs (36 Mismatches)
- **Scope:**
  - 1 explicit mismatch: Meerut listed inside Delhi (`service/csc-locator/delhi/index.html`)
  - 5 misplaced district subpages (e.g. Bongaigaon in Telangana, Bhadohi/Rampur in Maharashtra)
  - 30 cross-state fallback links (e.g. Jammu/Kargil appearing in Bihar/Gujarat links)
- **Solution:** Unn specific mismatched `<a>` tags ko state index pages ke grid se surgically remove karna.
- **Scanner:** `python scripts/scan_wrong_geodata.py`

### 3. Blog Canonical & Routing Bugs (46 Posts + dynamic shell)
- **Scope:**
  - `blog/post.html` line 25 hardcoded canonical to self
  - `assets/js/blog-post.js` lines 135-148 setting canonical to dynamic URL `post.html?slug=X`
  - `assets/js/blog.js` line 82 generating links to `post.html?slug=X`
  - `data/blog-posts.json` missing `"isStatic": true`
- **Solution:** Static blog posts (`blog/X.html`) ko primary canonical banana aur dynamic shell conflicts rokna.
- **Scanner:** `python scripts/scan_blog_canonical.py`

### 4. Keyword Cannibalization: `service/` vs `states/` (205 Competing Pairs)
- **Scope:** 205 services exist as full 60KB+ HTML pages in BOTH `service/X.html` AND `states/X.html`.
- **Note:** 83 duplicate pairs were already converted to redirect stubs cleanly earlier.
- **Solution:** `states/X.html` ko primary page rakhna, aur `service/X.html` ko meta refresh redirect stub banana (50 files/week batches).
- **Scanner:** `python scripts/scan_cannibalization.py`

### 5. Language Tag Mismatch (`lang="en"` with Devanagari) (1,706 Pages)
- **Scope:**
  - `service/csc-locator/` (844 pages)
  - `service/jan-aushadhi/` (842 pages)
  - `tools/` (7 pages)
  - Root pages (7 pages)
- **Solution:** Batch-wise `<html lang="en">` ko `<html lang="hi">` mein update karna.
- **Scanner:** `python scripts/scan_lang_mismatch.py`

---

## 🛠 Available Scanner Scripts in `scripts/`

- `scripts/scan_expired_dates.py`
- `scripts/check_job_actual_dates.py`
- `scripts/scan_index_literal.py`
- `scripts/scan_wrong_geodata.py`
- `scripts/scan_blog_canonical.py`
- `scripts/scan_cannibalization.py`
- `scripts/scan_lang_mismatch.py`
- `scripts/master_ci_guard.py`
