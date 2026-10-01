==============================================================================
SarkariSewa Portal — CSC module session — what's in this zip & what's next
==============================================================================

WHAT'S IN THIS ZIP (upload these 5 files to GitHub, same folder paths):

  csc/index.html                    -> replaces csc/index.html
  assets/js/csc-directory.js        -> replaces assets/js/csc-directory.js
  data/lang.json                    -> replaces data/lang.json
  assets/css/module17.css           -> replaces assets/css/module17.css
  tools/generate-csc-pages.py       -> NEW file, add to tools/ folder

The first 4 add a search box to csc/index.html (search by name/area/pincode
— so a VLE who gets a message from you can find their own listing without
scrolling through 543 entries).

tools/generate-csc-pages.py is NOT run yet — it's the module for turning
each CSC centre into its own static, SEO-indexable HTML page. Ready to run
whenever you decide to (see the big docstring at the top of that file for
full instructions). It works for any state, not just Maharashtra.

sql-to-run-in-supabase/RUN-THIS-export_query.sql is the ONE thing still
pending — run it in Supabase SQL Editor and export the result as CSV, then
send that CSV back so I can build the personalized claim links + WhatsApp
message templates for reaching out to the 543 VLEs.

==============================================================================
STATUS RECAP — everything done this project so far
==============================================================================

1. SEO structural fixes (state pages, service pages, legacy shell redirects,
   broken outbound links) — already pushed to GitHub in earlier batches.
2. GA4 wired up with your real Measurement ID — confirmed working
   (Realtime showed "1 active user").
3. 543 Maharashtra CSC centres imported into Supabase as 'unclaimed'
   listings.
4. csc/index.html now has a name/area/pincode search box.
5. generate-csc-pages.py module built and ready (adds thin-content
   protection — every generated page will have real informational content,
   not just a name+address).

==============================================================================
WHAT'S LEFT / NEXT STEPS (in the order that makes sense to do them)
==============================================================================

STEP 1 — Run the export query (sql-to-run-in-supabase file in this zip) in
         Supabase SQL Editor, export results as CSV, send it back here.
         -> I'll turn it into personalized claim links + a WhatsApp/SMS
            message template so VLEs know their listing exists at all.

STEP 2 — Decide when to run tools/generate-csc-pages.py (turns all 543
         centres into indexable static pages). Can be now, or once you've
         got more states' data in, your call — the module works either way
         and is safe to re-run any time.
         -> Once you run it, tell me — I'll wire it into:
              - generate-sitemap.py (so the 543+ pages get submitted to
                Google)
              - the GitHub Actions daily workflow (so future centres,
                claimed or newly added, get their static page automatically
                — no manual HTML editing needed going forward)
              - assets/js/csc-directory.js card links (point at the new
                static pages instead of the old ?id= dynamic route)
              - csc/profile.html + csc-profile.js (same noindex + redirect
                pattern already used for service/state/blog pages)

STEP 3 — Once live, resubmit sitemap.xml in Google Search Console so the
         new pages get crawled.

STEP 4 — Send the WhatsApp/SMS outreach to the 543 VLEs (Step 1's output)
         — this is your actual distribution channel while SEO is still
         building up (new sites typically take 2–4 months to gain organic
         traction in a competitive niche like this one, so outreach now
         matters more than waiting on Google alone).
==============================================================================
