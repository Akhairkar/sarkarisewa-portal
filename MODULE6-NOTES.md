# Module 6 — Utilities + Health (Merge Notes)

## What's in this zip

```
data/services.json   ← REPLACE your existing file completely (80 services total)
MODULE6-NOTES.md      ← this file
```

Full replacement, same as every module since Module 4 — this file already
contains your existing 60 services **plus** 20 new ones (10 Utilities +
10 Health), for a combined total of **80 services**.

## 🎉 All 6 planned categories are now complete

| Category | Count | Status |
|---|---|---|
| Identity Documents | 15 | ✅ complete (Module 3) |
| Government Schemes | 20 | ✅ complete (Module 4) |
| Finance & Tax | 10 | ✅ complete (Module 5) |
| Jobs & Education | 15 | ✅ complete (Module 5) |
| Utilities | 10 | ✅ complete (this module) |
| Health | 10 | ✅ complete (this module) |
| **Total** | **80** | |

## 10 new Utilities services

1. Electricity New Connection & Bill Payment — `electricity-connection-bill`
2. Water Supply Connection & Bill Payment — `water-supply-connection-bill`
3. LPG Cylinder Booking & Refill — `lpg-cylinder-booking`
4. Piped Natural Gas (PNG) Connection — `piped-natural-gas-connection`
5. Municipal Property Tax Payment — `municipal-property-tax`
6. Mobile Number Portability (MNP) — `mobile-number-portability`
7. FASTag Registration — `fastag-registration`
8. Vehicle Registration Certificate (RC) — `vehicle-registration-certificate`
9. Consumer Grievance Redressal (NCH) — `consumer-grievance-redressal`
10. Swachh Bharat Sanitation Complaint — `swachh-bharat-sanitation-complaint`

## 10 new Health services

1. Ayushman Bharat Health Account (ABHA) — `abha-health-id`
2. CoWIN Vaccination Certificate — `cowin-vaccination-certificate`
3. e-Sanjeevani (Telemedicine) — `e-sanjeevani-telemedicine`
4. Organ Donation Registration (NOTTO) — `organ-donation-registration`
5. e-RaktKosh (Blood Donation) — `e-raktkosh-blood-donation`
6. Central Government Health Scheme (CGHS) — `central-govt-health-scheme`
7. Janani Suraksha Yojana (JSY) — `janani-suraksha-yojana`
8. Rashtriya Bal Swasthya Karyakram (RBSK) — `rashtriya-bal-swasthya-karyakram`
9. Mission Indradhanush (Immunization) — `mission-indradhanush`
10. Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) — `pmsma-antenatal-checkup`

## Validated before packaging

- No duplicate slugs/ids across all 80 services.
- Every `relatedServices` cross-link checked against the full 80-service
  set — zero broken links (including cross-category links like
  `abha-health-id` → `ayushman-bharat`, and `fastag-registration` →
  `driving-licence`).
- Same confirmed-working schema throughout — no code changes needed.

## Things worth knowing

1. **Electricity, water supply, property tax** are state/municipal
   subjects (like some Module 3 services) — linked to national directories
   (National Power Portal, e-District) with a `note` field explaining this,
   rather than a specific (and likely wrong) local link.
2. **ABHA vs. Ayushman Bharat (PM-JAY)** are easy to confuse — ABHA is a
   digital health ID (this module), PM-JAY is the health insurance scheme
   (already in your Government Schemes category since Module 1). Both are
   cross-linked to each other via `relatedServices` so users can tell them
   apart.
3. **Janani Suraksha Yojana, RBSK, PMSMA, and Mission Indradhanush** are
   all under the National Health Mission umbrella and cross-reference each
   other — together they cover pregnancy, delivery, child screening, and
   immunization as a connected journey.

## After replacing, verify

1. `category.html?cat=utilities` → 10 cards.
2. `category.html?cat=health` → 10 cards.
3. Spot-check `service.html?id=fastag-registration` and
   `service.html?id=abha-health-id`.
4. All 6 category pages should now be fully populated — this is a good
   point to click through every category once end-to-end.

## What's left (per your original STATUS.md plan)

With all core content categories now complete at 80 services, the
remaining modules are:

- **Module 7:** Support pages (state-wise services directory, helpline
  directory, RTI guide) + legal pages (Privacy Policy, Disclaimer, Terms —
  needed before AdSense/any monetisation)
- **Module 8:** Search page, sitemap, robots.txt, schema markup, meta
  descriptions
- **Module 9:** Blog system
- **Module 10:** Final QA pass
- **Module 11 (your CSC lead-gen idea):** still recommended after Module 7,
  since it needs the legal pages in place first

Let me know when you're ready for Module 7.
