# Module 16 — Email / WhatsApp Subscribe (DONE)

## Built
- **`assets/js/subscribe.js`** — a single reusable widget, rendered into
  any `<div id="subscribe-widget">` on the page. Reads an optional
  `data-service-id` attribute to scope the subscription to one service;
  without it, treated as a general site-updates subscription
  (`service_id: null` in the database).
- **`assets/css/module16.css`** — navy card styling matching the
  homepage trust-stats bar, saffron submit button with navy text
  (same dark-mode-safe pattern established in Module 11).
- **Wired onto two pages:**
  - `service/service.html` — per-service widget, right before the
    Comments section, auto-scoped to the current service via the
    `?id=` URL param (same identifier `comments.js`/`service.js` use)
  - `index.html` — general widget, between the blog section and
    "यह पोर्टल क्यों"
- **13 new `lang.json` keys** (total now 266).

## How it works
- Insert-only into the `subscribers` table from Module 14's
  `supabase/schema.sql` — matches its RLS policy exactly (no read
  policy exists, so the site can never display who's subscribed).
- Requires at least an email or a phone number (matches the table's
  `at_least_one_contact` check constraint) — validated client-side
  before the request is even sent.
- WhatsApp opt-in is just a boolean flag stored alongside the contact
  info — actually *sending* WhatsApp messages needs a separate, later
  integration (e.g. a WhatsApp Business API or a Supabase Edge Function
  triggered on new content); this module only captures the opt-in.

## Verified before shipping
- `audit-site.py`: 0 issues
- All JS passes `node -c`
- Insert payload matches Module 14's `subscribers` table constraints

## Not done in this pass
- No actual outbound email/WhatsApp sending yet — this module only
  builds the opt-in capture. Sending update notifications when new
  content is published is a distinct future task (would likely use a
  Supabase Edge Function or a simple scheduled script reading the
  `subscribers` table).
- No unsubscribe mechanism yet — worth adding before actually sending
  any real notifications, so people have a way to opt out.
