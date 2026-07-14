# Module 3 — Identity Documents (Merge Notes)

This module delivers **full content for all 15 Identity Documents services**, in the extended
schema introduced in Module 2 (`officialLinks`, `applyOnline`, `downloadForm`, `trackStatus`,
`helpline`, `documentsRequired`, `eligibility`, `fees`, `timeline`, `faqs`, `relatedServices`,
plus `category`).

## What's in this zip

```
data/
└── services.module3-identity-documents.json   ← 15 full service records (new file)
MODULE3-NOTES.md                                ← this file
STATUS.md                                        ← updated project status (replace your existing one)
```

## The 15 services included

1. Aadhaar Card (`aadhaar-card`)
2. PAN Card (`pan-card`)
3. Voter ID Card / EPIC (`voter-id-card`)
4. Passport (`passport`)
5. Driving Licence (`driving-licence`)
6. Birth Certificate (`birth-certificate`)
7. Death Certificate (`death-certificate`)
8. Ration Card (`ration-card`)
9. Domicile / Residence Certificate (`domicile-certificate`)
10. Caste Certificate (`caste-certificate`)
11. Income Certificate (`income-certificate`)
12. Marriage Certificate (`marriage-certificate`)
13. Disability Certificate / UDID (`disability-certificate`)
14. Senior Citizen Certificate / Card (`senior-citizen-card`)
15. Legal Heir Certificate (`legal-heir-certificate`)

All 15 are tagged `"category": "identity-documents"`, matching the slug already defined in
your `data/categories.json` from Module 2.

## ⚠️ Important — read before merging

1. **This is a separate file, not a replacement for `services.json`.**
   Open `data/services.module3-identity-documents.json`, copy its 15 objects, and **append them
   into the `services` array inside your real `data/services.json`** (the same file that already
   holds your Module 1 sample services + any Module 2 fields you've merged in).

2. **State-varying services have a `"note"` field.** Aadhaar, PAN, Voter ID, Passport and Driving
   Licence are fully central-government services, so their `officialLinks` / `applyOnline` /
   `trackStatus` links point straight to the real national portals (UIDAI, NSDL/UTIITSL, NVSP,
   Passport Seva, Parivahan/Sarathi) — these are safe to use as-is.

   Birth Certificate, Death Certificate, Ration Card, Domicile Certificate, Caste Certificate,
   Income Certificate, Marriage Certificate, Senior Citizen Card, and Legal Heir Certificate are
   **issued by state/district authorities**, so the exact application portal differs state to
   state. For these, I've linked the **national directories** (crsorgi.gov.in for birth/death,
   nfsa.gov.in for ration card, edistrict.gov.in for the rest) rather than guessing a specific
   state URL — guessing wrong would send your users to a broken or incorrect link. Each of these
   records carries an extra `"note"` field (bilingual) flagging this — your `service.js` template
   doesn't need to render it, but you may want to show it as a small disclaimer banner on
   state-varying service pages. **When you know which state(s) you're targeting first, tell me
   and I'll swap in the exact state portal links.**

3. **Numbers to sanity-check before going live:** helpline numbers, exact fee amounts (₹) and
   processing-day estimates change from time to time by government notification. Treat the
   figures here as "correct as of writing, verify before publishing" — worth a periodic recheck,
   especially fees.

4. **Nothing here required touching your existing HTML/JS files.** Because Module 2's
   `service.html` template renders sections only when a field is present, these 15 records will
   render correctly through your existing template with zero code changes — just add the data.

5. **`relatedServices` cross-links:** some entries reference services outside this batch (e.g.
   `income-certificate`, `domicile-certificate` are referenced by multiple records and are
   included in this same batch, so no dangling links within Module 3).

## Suggested merge steps

1. Unzip this into a scratch folder (not directly into your repo).
2. Open your real `data/services.json`.
3. Copy the 15 objects from `data/services.module3-identity-documents.json` and paste them into
   your `services.json` array (alongside your existing 8 sample services + Module 1 data).
4. Replace your repo's `STATUS.md` with the one in this zip (it has Module 3 marked done and an
   updated file map).
5. Refresh `category.html?cat=identity-documents` and `service.html?id=aadhaar-card` (etc.) to
   confirm all 15 render correctly.
