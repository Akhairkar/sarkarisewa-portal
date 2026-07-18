unpredictably as traffic grows.
- Row-Level Security in Postgres gives cleaner per-owner data access control for the claim/edit flow.
- No vendor lock-in — standard Postgres, exportable any time.

### Module 17 — CSC Public Directory
- Data sourcing: seed initial CSC data from an official government CSC locator dataset (e.g. data.gov.in) or manual entry — needs deciding when we get here
- `csc/index.html` — browse by **state → district**, reusing the existing `support/state-wise-services.html` browse pattern
- `csc/profile.html?id=...` — individual CSC page: name, address, services offered, hours, contact
- `LocalBusiness` Schema.org markup on every CSC profile page (same dynamic-injection pattern used for `GovernmentService`/`ItemList` in Module 8)
- Add CSC URLs to `generate-sitemap.py`

**Audience-facing UX (confirmed requirements):**
- Clean state/district-wise browsing, listings clearly visible
- **Verified/claimed CSCs only** get: "Request Service" button (lead capture form), "Call Now" (`tel:` link), **WhatsApp button** (`wa.me/` deep link)
- Unverified/unclaimed listings show basic info only — no contact/request buttons — plus a "Is this your CSC? Claim it" prompt

**SEO strategy for CSC pages (programmatic local SEO — same model as JustDial/Sulekha):**
- Real upside: long-tail local search traffic ("CSC centre [district]", "Aadhaar seva kendra near [pincode]"), state/district hub pages drive internal linking/crawl discovery
- Real risk: **thin/duplicate content** — hundreds of near-identical auto-filled pages can drag down the whole site's quality score in Google's eyes, not just fail to rank themselves
- **Mitigation plan:**
  - Unclaimed/unverified listings: keep minimal, `noindex` them until claimed (still visible in the on-site directory, just not sent to Google)
  - Claimed/verified listings: full SEO treatment (`LocalBusiness` schema, indexed, canonical) — and ask the owner for a short unique description at claim time to avoid template duplication

### Module 18 — CSC Claim Flow
- "Is this your CSC? Claim it" button on unclaimed listings
- Claim form → CSC ID verification against government registry → owner phone/email OTP
- Admin approval queue (fraud prevention)
- On approval: listing becomes "Verified ✅", full SEO treatment kicks in

### Module 19 — CSC Owner Dashboard + Free Period
- Claimed-owner dashboard: edit photo, hours, services, description
- **6-month free timer** starts at claim-approval date
- Reminder notification as the free period nears its end

**Owner-facing UX (confirmed requirements) — two clearly separated entry points:**
1. "Claim your CSC listing" — search for their already-listed centre, submit a claim request
