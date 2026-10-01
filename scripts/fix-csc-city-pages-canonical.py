#!/usr/bin/env python3
"""
tools/fix-csc-city-pages-canonical.py

Fixes the SAME critical bug found and hand-fixed earlier on
service/csc-locator/west-bengal/kolkata.html — but it turns out 101
different CSC-locator city pages (the "thick"/rich template used for
major cities: state capitals, Patna, Kolkata, Durgapur, Dehradun, etc.)
all have the exact same bug, byte-for-byte identical except the city
name in the <title> and <h1>:

  - canonical, meta description, og:title/description/url,
    twitter:title/description, and the JSON-LD schema were ALL
    copy-pasted from the completely unrelated jan-aushadhi-store-locator
    page (PM Jan Aushadhi generic medicine stores) instead of being
    about the CSC center page itself.
  - <body data-slug="jan-aushadhi-store-locator"> — same wrong page
    identifier, used by the site's JS for comments/subscribe/i18n.
  - The breadcrumb's "CSC Locator" link is missing one "../" level
    (href="../../tools/csc-locator.html" instead of
    "../../../tools/csc-locator.html") so it 404s.

This is very likely a major contributor to the "high impressions, 0
clicks" pattern from the SEO audit: Google was showing a Jan Aushadhi
snippet for a CSC-center search query, so people either didn't click
(irrelevant-looking result) or bounced immediately.

<title> was NOT touched — it's already correct and unique per city
(e.g. "Patna CSC Center Near Me (2026) | 5 Lakhs+ Locations"), so this
script only fixes the surrounding meta/schema to match it.

WHAT IT DOES, per file:
  1. Rebuilds canonical / meta description / OG / Twitter tags around
     the real city + state (parsed from the page's own, correct
     <h1>CSC Centers in <City>, <State></h1>).
  2. Rebuilds the JSON-LD as a @graph: GovernmentService about CSC in
     that city, a correct BreadcrumbList (Home > CSC Locator > State >
     City), and a FAQPage built from the 3 FAQs already on the page
     (parsed, not invented).
  3. Fixes <body data-slug="...">.
  4. Fixes the broken "CSC Locator" breadcrumb link depth.

Only touches the specific 101 files that have the bug (matched by their
literal wrong canonical URL) — nothing else in the repo. Idempotent.

HOW TO RUN
----------
    python3 tools/fix-csc-city-pages-canonical.py [--dry-run]

Run from the repo root.
"""
import argparse
import glob
import json
import re

WRONG_CANONICAL = "https://sarkarisewaindia.com/service/jan-aushadhi-store-locator.html"

STATE_SLUG_FIX = {
    "andaman & nicobar": "andaman-and-nicobar",
    "andaman and nicobar": "andaman-and-nicobar",
}


def slugify_state(state_name):
    key = state_name.lower().strip()
    if key in STATE_SLUG_FIX:
        return STATE_SLUG_FIX[key]
    return (
        state_name.lower()
        .replace(" & ", "-and-")
        .replace(" ", "-")
        .replace(".", "")
    )


def extract_faqs(html):
    return re.findall(r'<strong>Q:\s*([^<]+)</strong><p[^>]*>([^<]+)</p>', html)


def fix_file(path, dry_run):
    with open(path, encoding="utf-8") as f:
        html = f.read()
    original = html

    if WRONG_CANONICAL not in html:
        return False  # already fixed / not affected

    h1_m = re.search(r'<h1[^>]*>CSC Centers in ([^,]+), ([^<]+)</h1>', html)
    if not h1_m:
        print(f"[SKIP - no H1 match] {path}")
        return False
    city, state_name = h1_m.group(1).strip(), h1_m.group(2).strip()

    parts = path.split("/")
    state_slug = parts[2]  # service/csc-locator/<state_slug>/<file>.html
    file_slug = parts[3][:-5]

    canonical_url = f"https://sarkarisewaindia.com/service/csc-locator/{state_slug}/{file_slug}.html"
    title_m = re.search(r"<title>([^<]*)</title>", html)
    title = title_m.group(1) if title_m else f"{city} CSC Center Near Me (2026)"
    desc = (
        f"{city}, {state_name} mein CSC / Jan Seva Kendra ka address, phone number "
        f"aur maps link dhoondhein. Aadhaar, PAN, Passport seva ke liye nearest "
        f"verified center abhi dekhein."
    )

    # --- meta block ---
    old_meta_re = re.compile(
        r'<link rel="canonical"[^>]*/>\s*'
        r'<meta name="description"[^>]*/>\s*'
        r'<meta property="og:title"[^>]*/>\s*'
        r'<meta property="og:description"[^>]*/>\s*'
        r'<meta property="og:type"[^>]*/>\s*'
        r'<meta property="og:url"[^>]*/>\s*'
        r'<meta property="og:image"[^>]*>\s*'
        r'<meta name="twitter:card"[^>]*>\s*'
        r'<meta name="twitter:title"[^>]*/>\s*'
        r'<meta name="twitter:description"[^>]*/>',
        re.S,
    )
    new_meta = (
        f'<link rel="canonical" href="{canonical_url}" />\n'
        f'  <meta name="description" content="{desc}" />\n'
        f'  <meta property="og:title" content="{title}" />\n'
        f'  <meta property="og:description" content="{desc}" />\n'
        f'  <meta property="og:type" content="article" />\n'
        f'  <meta property="og:url" content="{canonical_url}" />\n'
        f'  <meta property="og:image" content="https://sarkarisewaindia.com/assets/img/og-image.png">\n'
        f'  <meta name="twitter:card" content="summary_large_image">\n'
        f'  <meta name="twitter:title" content="{title}" />\n'
        f'  <meta name="twitter:description" content="{desc}" />'
    )
    html, n = old_meta_re.subn(new_meta, html, count=1)
    if n != 1:
        print(f"[SKIP - meta block regex didn't match] {path}")
        return False

    # --- JSON-LD ---
    faqs = extract_faqs(html)
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "GovernmentService",
                "name": f"CSC / Jan Seva Kendra in {city}, {state_name}",
                "description": f"{city}, {state_name} mein Common Service Centre (CSC) / Jan Seva Kendra ki verified list - Aadhaar, PAN, Passport aur anya sarkari sevaon ke liye.",
                "url": canonical_url,
                "serviceType": "Common Service Centre (CSC) Locator",
                "areaServed": {
                    "@type": "City",
                    "name": city,
                    "containedInPlace": {"@type": "State", "name": state_name},
                },
                "provider": {
                    "@type": "GovernmentOrganization",
                    "name": "Common Services Centre (CSC), Ministry of Electronics & IT, Government of India",
                },
                "sameAs": ["https://csc.gov.in", "https://india.gov.in"],
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://sarkarisewaindia.com/index.html"},
                    {"@type": "ListItem", "position": 2, "name": "CSC Locator", "item": "https://sarkarisewaindia.com/tools/csc-locator.html"},
                    {"@type": "ListItem", "position": 3, "name": state_name, "item": f"https://sarkarisewaindia.com/service/csc-locator/{state_slug}.html"},
                    {"@type": "ListItem", "position": 4, "name": city, "item": canonical_url},
                ],
            },
        ],
    }
    if faqs:
        schema["@graph"].append({
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": q.strip(), "acceptedAnswer": {"@type": "Answer", "text": a.strip()}}
                for q, a in faqs
            ],
        })
    schema_re = re.compile(r'<script type="application/ld\+json"[^>]*>\s*\{.*?\}\s*</script>', re.S)
    new_schema_tag = '<script type="application/ld+json">' + json.dumps(schema, ensure_ascii=False, indent=2) + "</script>"
    html, n = schema_re.subn(lambda m: new_schema_tag, html, count=1)
    if n != 1:
        print(f"[SKIP - schema regex didn't match] {path}")
        return False

    # --- body data-slug ---
    html = html.replace(
        '<body data-slug="jan-aushadhi-store-locator">',
        f'<body data-slug="csc-{state_slug}-{file_slug}">',
        1,
    )

    # --- broken breadcrumb link depth ---
    html = html.replace(
        'href="../../tools/csc-locator.html"',
        'href="../../../tools/csc-locator.html"',
    )

    if html != original:
        if not dry_run:
            with open(path, "w", encoding="utf-8") as f:
                f.write(html)
        return True
    return False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    files = [
        f for f in glob.glob("service/csc-locator/*/*.html")
        if WRONG_CANONICAL in open(f, encoding="utf-8").read()
    ]
    print(f"Found {len(files)} files with the bug")

    changed = 0
    for f in sorted(files):
        if fix_file(f, args.dry_run):
            changed += 1

    print()
    print(f"{'DRY RUN — ' if args.dry_run else ''}Done. Fixed: {changed}/{len(files)}")


if __name__ == "__main__":
    main()
