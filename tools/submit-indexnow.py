#!/usr/bin/env python3
"""
submit-indexnow.py
===================
Session 4 of the Ahrefs SEO fix.

IndexNow is a protocol (backed by Bing, Yandex, Seznam.cz, Naver, and a
few others — not Google, which has its own separate indexing pipeline)
that lets a site push a "hey, this URL changed" ping instead of waiting
for the search engine to notice on its own next crawl. One bulk request
can submit up to 10,000 URLs at once.

Setup (one-time, already done in this commit):
  1. A random key was generated: 990cec6ab75587968bc7a43b4721e52c
  2. That key is hosted as a plain-text file at the site root:
     990cec6ab75587968bc7a43b4721e52c.txt (just the key, nothing else)
     — this is how IndexNow verifies you actually own the domain before
     accepting submissions for it. Make sure this file deploys to
     https://sarkarisewaindia.com/990cec6ab75587968bc7a43b4721e52c.txt
     and returns the key as plain text before running this script.

What this script does:
  Reads sitemap.xml (run generate-sitemap.py first so it's current),
  extracts every <loc> URL, and submits them all in one bulk POST to
  https://api.indexnow.org/indexnow.

Needs internet access to run (same as generate-job-pages.py and
generate-sitemap.py's Supabase calls) — run it locally or in CI, not in
a sandboxed/offline environment.

When to run it:
  - Once, right after this deploy ships, to submit everything at once.
  - After that, only when URLs are added/changed — e.g. right after
    generate-sitemap.py picks up new job alerts, blog posts, or
    services. Wiring this into the same GitHub Action suggested in
    tools/generate-job-pages.py (run both back-to-back) means every
    change gets pushed to IndexNow automatically, no manual step.

Usage:
    python3 tools/submit-indexnow.py
"""
import json
import sys
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
SITEMAP_PATH = REPO_ROOT / "sitemap.xml"
HOST = "sarkarisewaindia.com"
INDEXNOW_KEY = "990cec6ab75587968bc7a43b4721e52c"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"
ENDPOINT = "https://api.indexnow.org/indexnow"
BATCH_SIZE = 10000  # IndexNow's documented max per request


def read_sitemap_urls():
    if not SITEMAP_PATH.exists():
        print(f"ERROR: {SITEMAP_PATH} not found. Run generate-sitemap.py first.", file=sys.stderr)
        sys.exit(1)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    tree = ET.parse(SITEMAP_PATH)
    return [el.text.strip() for el in tree.getroot().findall("sm:url/sm:loc", ns) if el.text]


def submit_batch(urls):
    payload = json.dumps({
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }).encode("utf-8")

    req = urllib.request.Request(
        ENDPOINT,
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status
    except urllib.error.HTTPError as e:
        # IndexNow returns 200/202 on success; 400/403/422/429 mean
        # something's wrong with the key, host, or payload — the body
        # usually explains which.
        body = e.read().decode("utf-8", errors="replace")
        print(f"ERROR {e.code}: {body}", file=sys.stderr)
        return e.code
    except urllib.error.URLError as e:
        print(f"ERROR: could not reach IndexNow ({e}). Needs internet access.", file=sys.stderr)
        sys.exit(1)


def main():
    urls = read_sitemap_urls()
    print(f"Read {len(urls)} URLs from sitemap.xml")
    if not urls:
        print("Nothing to submit.")
        return

    total_submitted = 0
    for i in range(0, len(urls), BATCH_SIZE):
        batch = urls[i:i + BATCH_SIZE]
        status = submit_batch(batch)
        if status in (200, 202):
            total_submitted += len(batch)
            print(f"  Submitted batch of {len(batch)} URLs — status {status} OK")
        else:
            print(f"  Batch of {len(batch)} URLs failed — status {status}")

    print(f"\nDone. {total_submitted}/{len(urls)} URLs submitted to IndexNow "
          f"(Bing, Yandex, and other participating engines).")
    print("Note: this does not include Google — Google doesn't participate "
          "in IndexNow. Use Google Search Console's URL Inspection / "
          "'Request indexing' for that, or just let Google's own crawler "
          "pick up the new sitemap.xml on its normal schedule.")


if __name__ == "__main__":
    main()
