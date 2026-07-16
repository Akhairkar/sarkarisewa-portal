# Module 5 — Finance & Tax (more) + Jobs & Education (Merge Notes)

## What's in this zip

```
data/services.json   ← REPLACE your existing file completely (60 services total)
MODULE5-NOTES.md      ← this file
```

Full replacement again — this file already contains everything: your
existing 38 services **plus** 22 new ones, for a combined total of
**60 services**. Just overwrite `data/services.json`, no manual merging.

## Category totals after this module

| Category | Count | Status |
|---|---|---|
| Identity Documents | 15 | ✅ complete (Module 3) |
| Government Schemes | 20 | ✅ complete (Module 4) |
| Finance & Tax | 10 | ✅ complete (this module) |
| Jobs & Education | 15 | ✅ complete (this module) |
| Utilities | 0 | 🔜 Module 6 |
| Health | 0 | 🔜 Module 6 |

## 7 new Finance & Tax services

1. Income Tax Return (ITR) Filing — `income-tax-return-filing`
2. Aadhaar-PAN Linking — `aadhaar-pan-linking`
3. National Pension System (NPS) — `national-pension-system`
4. Public Provident Fund (PPF) — `public-provident-fund`
5. Free Annual Credit Report & Score — `credit-score-report`
6. Bank Locker Nomination & Rules — `bank-locker-nomination`
7. UPI Registration — `upi-payments`

Combined with existing `gst`, `epfo`, `digilocker` → **10 total** in
Finance & Tax.

## 15 new Jobs & Education services

1. National Scholarship Portal — `national-scholarship-portal`
2. SSC Recruitment — `ssc-recruitment`
3. UPSC Civil Services Examination — `upsc-civil-services`
4. IBPS Bank Recruitment (PO/Clerk) — `ibps-bank-recruitment`
5. Employment Exchange / NCS Registration — `employment-exchange-registration`
6. PM Kaushal Vikas Yojana (PMKVY) — `pm-kaushal-vikas-yojana`
7. RTE School Admission — `school-admission-rte`
8. JEE / NEET Registration — `jee-neet-registration`
9. National Apprenticeship Promotion Scheme — `national-apprenticeship-scheme`
10. Academic Bank of Credits (ABC) — `academic-bank-of-credits`
11. e-Shram Card — `e-shram-card`
12. DIKSHA (National Digital Learning Platform) — `diksha-online-learning`
13. PM Internship Scheme — `pm-internship-scheme`
14. PM POSHAN (Mid-Day Meal Scheme) — `midday-meal-scheme`
15. SWAYAM Online Courses — `swayam-online-courses`

This is a fresh category (`jobs-education`) with **15 total**, matching
the plan.

## Validated before packaging

- No duplicate slugs/ids anywhere across all 60 services.
- Every `relatedServices` cross-link (including cross-category ones, e.g.
  jobs-education services linking back to identity-documents or
  government-schemes services) was checked against the full 60-service set
  — **zero broken links**.
- Same confirmed-working schema throughout (`officialLinks`, `applyOnline`
  with `note`/`steps`, `helpline`, `documentsRequired`, `eligibility`,
  `fees` as `{label, amount}`, `timeline` as `{step, duration}`, `faqs`) —
  no code changes needed in `service.js`/`category.js`/`home.js`.

## Things worth knowing

1. **UPSC/SSC/IBPS/JEE-NEET are recurring exam cycles**, not always-open
   application windows — the `applyOnline.note` on each explains that you
   apply during the notified window for each specific exam, rather than
   linking to one fixed "apply now" form (there isn't one that's always
   valid).
2. **RTE admission and Mid-Day Meal (PM POSHAN)** have state-level
   variation in exact portal names/timing, similar to some Module 3
   services — the linked portals are the national ones; state-specific
   links can be added later if you want to target specific states.
3. **e-Shram overlaps conceptually** with PM Shram Yogi Maandhan and PM
   Suraksha Bima Yojana (all serve unorganised workers) — cross-linked via
   `relatedServices` so users can navigate between them.

## After replacing, verify

1. `category.html?cat=finance-tax` → 10 cards.
2. `category.html?cat=jobs-education` → 15 cards.
3. Spot-check a couple of new service pages, e.g.
   `service.html?id=upsc-civil-services` and `service.html?id=e-shram-card`.
4. Homepage "नवीनतम अपडेट" will now show the last 6 Jobs & Education
   entries (since they're appended at the end) — expected behaviour.

## Next module

Per the original plan: **Module 6 — Utilities + Health** (10 services
each). Let me know when you're ready.
