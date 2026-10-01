# Connecting sarkarisewaindia.com to GitHub Pages

Domain bought: **sarkarisewaindia.com** (via BigRock).
Site code is ready — `CNAME` file already added to the repo root, and
all 165 internal references across 25 files updated from
`akhairkar.github.io/sarkarisewa-portal` to `sarkarisewaindia.com`.

**Two things left, both outside the code — do these yourself or with
any AI's help, no deep context needed, just follow in order:**

---

## Step 1 — Push this code to GitHub first

Before touching DNS, push this updated project (with the new `CNAME`
file) to the `main` branch of the `sarkarisewa-portal` repo, same as
every previous update.

---

## Step 2 — Add the domain in GitHub repo settings

1. Go to the repo on GitHub → **Settings** tab → **Pages** (left sidebar)
2. Under "Custom domain", type: `sarkarisewaindia.com`
3. Click **Save**
4. GitHub will show a warning like "DNS check unsuccessful" — **this is
   expected right now**, ignore it until Step 3 is done

---

## Step 3 — Set DNS records at BigRock

Log into BigRock → find this domain → **DNS Management** / **DNS Records**
(seen in your screenshots as "DNS Records" button).

Add these **4 A records** (all pointing the root domain to GitHub Pages'
servers):

| Type | Host/Name | Value | TTL |
|---|---|---|---|
| A | @ (or blank) | 185.199.108.153 | Default |
| A | @ (or blank) | 185.199.109.153 | Default |
| A | @ (or blank) | 185.199.110.153 | Default |
| A | @ (or blank) | 185.199.111.153 | Default |

**Also add this CNAME record** (for the `www` version, so both
`sarkarisewaindia.com` and `www.sarkarisewaindia.com` work):

| Type | Host/Name | Value | TTL |
|---|---|---|---|
| CNAME | www | akhairkar.github.io | Default |

If BigRock already has other A records or a CNAME on `@`/`www` from
before (e.g. a "parking page" default), **delete those first**, then add
the ones above — you can't have two A records fighting over the same host.

---

## Step 4 — Wait, then verify

- DNS changes take anywhere from **10 minutes to 24-48 hours** to
  propagate globally (BigRock is usually on the faster end)
- Go back to GitHub repo → Settings → Pages — once DNS is detected
  correctly, the warning disappears and a **"Enforce HTTPS"** checkbox
  becomes available
- **Check "Enforce HTTPS"** once it's available — this makes the site
  load securely (`https://sarkarisewaindia.com`) with a free
  auto-issued SSL certificate from GitHub, no extra cost or setup

---

## Step 5 — After the domain is live, these need a one-time update (can wait, not urgent)

- **Google Search Console** — add a new property for
  `sarkarisewaindia.com`, submit `sitemap.xml` there too (the old
  `akhairkar.github.io` property can stay as-is, no harm, just won't get
  new traffic once the domain switches)
- **GA4** — check the Realtime report loads data from the new domain
  too (should work automatically, same tracking code)
- **Supabase** — no change needed, the anon key/URL aren't tied to a
  specific site domain

---

## If something looks broken after switching

- **Blank page / 404 on custom domain:** almost always means DNS hasn't
  finished propagating yet, or the `CNAME` file didn't get pushed —
  double check both
- **Site loads but styling/images missing:** would mean some file still
  has a hardcoded old-domain reference — this shouldn't happen since all
  165 occurrences were fixed, but if it does, search the repo for
  `akhairkar.github.io` to find and fix any stray leftover
