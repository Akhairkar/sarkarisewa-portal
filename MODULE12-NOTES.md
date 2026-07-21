# Module 12 — Per-Service Content Fill (DONE — all 80 services)

## Important correction to my earlier "thin content" claim
When I did the full site checkup before, I checked for a JSON field
called `blocks` and found it on 0 of 80 services, and concluded every
service page was thin. **That check was wrong** — `blocks` is just a
local JavaScript variable name inside `service.js`'s `renderSections()`
function (it aggregates the output of several block-render functions);
it was never meant to be a field in `services.json`. The actual fields
those functions read are `eligibility`, `fees`, `documentsRequired`,
`faqs`, `applyOnline`, `downloadForm`, and `trackStatus`.

Checking those *real* field names instead, the true picture was:
- **60 of 65** services outside "Identity Documents" already had
  eligibility/fees/documents/FAQs content (from earlier modules)
- **Identity Documents (15 services)** had none
- **5 stragglers** in other categories — `pm-kisan`, `ayushman-bharat`,
  `gst`, `epfo`, `digilocker` — also had none (these are the same 5
  whose `helpline` field was a plain string rather than the
  array-of-objects format used elsewhere, suggesting they were seeded
  earlier/differently and never got the full enrichment pass)

So the real gap was **20 services, not 80**. Apologies for the earlier
overstated claim — it came from checking a non-existent field name, not
from actually inspecting the real data.

## What was done
Wrote and merged `eligibility`, `fees`, `documentsRequired`, and `faqs`
(bilingual EN/HI) for all 20 previously-empty services:

**Identity Documents (15):** aadhaar-card, pan-card, voter-id-card,
passport, driving-licence, birth-certificate, death-certificate,
ration-card, domicile-certificate, caste-certificate,
income-certificate, marriage-certificate, disability-certificate,
senior-citizen-card, legal-heir-certificate

**Stragglers (5):** pm-kisan, ayushman-bharat, gst, epfo, digilocker

**Result: all 80 of 80 services now have eligibility, fees, documents,
and FAQ content.** This closes the real AdSense thin-content gap —
every service page now renders far more than just an Official Link and
a Helpline number.

## Verified before shipping
- `audit-site.py`: 0 issues (broken links, i18n coverage, JSON validity,
  dangling cross-references)
- Confirmed the `helpline` field (string vs. array-of-objects, fixed in
  the earlier support.js bug fix) wasn't touched/broken by this pass
- Spot-checked the merged JSON structure matches exactly what
  `service.js`'s block-render functions expect

## Not done in this pass (optional, lower priority now that the gap is closed)
- `applyOnline` / `downloadForm` / `trackStatus` fields — these need
  verified working URLs to specific application/download pages (higher
  risk of linking to a wrong/dead page than the informational fields
  filled here), left for a future pass if wanted
- The original Module 12 roadmap items — Common Issues/Troubleshooting
  section, structured Summary box, tag-based Matching Services — still
  pending, now lower urgency since the core thin-content problem is fixed
