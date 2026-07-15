# Module 4 — Government Schemes (Merge Notes)

## What's in this zip

```
data/services.json   ← REPLACE your existing file completely (38 services total)
MODULE4-NOTES.md      ← this file
```

This is a **full replacement** of `data/services.json` — it already contains
everything: your existing 20 services (Identity Documents + the 3
Finance & Tax ones) **plus** 18 new Government Schemes services, for a
combined total of **38 services**. You don't need to merge anything by
hand — just overwrite the file.

## The 18 new Government Schemes services

1. PM Awas Yojana (Housing for All) — `pm-awas-yojana`
2. PM Ujjwala Yojana — `pm-ujjwala-yojana`
3. PM Jan Dhan Yojana — `pm-jan-dhan-yojana`
4. Atal Pension Yojana — `atal-pension-yojana`
5. PM Suraksha Bima Yojana — `pm-suraksha-bima-yojana`
6. PM Jeevan Jyoti Bima Yojana — `pm-jeevan-jyoti-bima-yojana`
7. Sukanya Samriddhi Yojana — `sukanya-samriddhi-yojana`
8. PM Mudra Yojana — `pm-mudra-yojana`
9. PM Fasal Bima Yojana — `pm-fasal-bima-yojana`
10. PM Garib Kalyan Anna Yojana — `pm-garib-kalyan-anna-yojana`
11. Stand Up India Scheme — `stand-up-india`
12. PM Vaya Vandana Yojana — `pm-vaya-vandana-yojana`
13. PM SVANidhi (Street Vendor Loans) — `pm-svanidhi`
14. PM Matru Vandana Yojana — `pm-matru-vandana-yojana`
15. National Social Assistance Programme (NSAP) — `national-social-assistance-programme`
16. PM Shram Yogi Maandhan — `pm-shram-yogi-maandhan`
17. Deendayal Antyodaya Yojana – NRLM — `deendayal-antyodaya-yojana-nrlm`
18. PM Gram Sadak Yojana — `pm-gram-sadak-yojana`

Combined with your existing `pm-kisan` and `ayushman-bharat`, the
`government-schemes` category now has all **20** planned services.

## Schema used (matches your confirmed, working `service.js`)

Every service has `officialLinks`, `applyOnline` (with `note`/`steps`),
`helpline` (array of `{label, phone}`), `documentsRequired`, `eligibility`,
`fees` (array of `{label, amount}`), `timeline` (array of `{step, duration}`
— `duration` left blank rather than guessing a wrong number of days, since
most of these are ongoing/annual schemes without a fixed processing time),
and `faqs`. This is the exact schema your `service.js`/`category.js`
already render correctly — no code changes needed.

## Things worth knowing before/while reviewing

1. **Central vs. state execution:** All 18 are central-government schemes
   with real official links (PMAY, PMJDY, PMFBY, NSAP, PMGSY, LIC for
   PMVVY, etc.) — these are safe to use as-is, unlike some Module 3
   services that varied by state.
2. **PMGSY and NSAP have no individual "apply" step** in the traditional
   sense — PMGSY is village-level infrastructure and NSAP is applied for
   via your local Panchayat/Municipal welfare office rather than a fixed
   national portal. The `applyOnline.note` field explains this on each
   service page instead of pointing to a misleading "apply here" link.
3. **Helpline numbers, fees, and eligibility thresholds** (income limits,
   loan amounts, premium values) are current as of writing but are exactly
   the kind of detail that changes with government notifications — worth a
   periodic recheck before/after publishing, same caution as Module 3.
4. **relatedServices cross-links** reference both new Module 4 slugs and
   existing ones (`aadhaar-card`, `ration-card`, `caste-certificate`,
   `senior-citizen-card`, `disability-certificate`, `pan-card`, `gst`) —
   all of these already exist in your merged `services.json`, so no
   dangling links.

## After replacing, verify

1. `category.html?cat=government-schemes` → should now show 20 service
   cards (2 old + 18 new).
2. Pick a few new ones, e.g. `service.html?id=pm-mudra-yojana` and
   `service.html?id=sukanya-samriddhi-yojana` → all sections (official
   links, apply online, fees, timeline, FAQs, related services) should
   render correctly.
3. Homepage "नवीनतम अपडेट" (latest updates) — since it shows the *last 6*
   entries in the array, it will now show 6 of these new Government
   Schemes services instead of Identity Documents ones. That's expected.

## Next module

Per STATUS.md's plan: **Module 5 — Finance & Tax (more) + Jobs & Education**.
Let me know when you're ready and I'll build that one the same way.
