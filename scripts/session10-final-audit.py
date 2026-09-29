#!/usr/bin/env python3
"""Read-only final SEO/quality audit for SarkariSewa India.

Checks static HTML for:
- canonical presence and local target existence
- noindex pages accidentally present in sitemap
- sitemap URLs whose local files are missing
- broken local href/src targets
- update pages using deprecated generic FAQPage schema
- duplicate canonical targets
- tracking script presence on the homepage
This script never changes files.
"""

from pathlib import Path
from collections import Counter
import html
import re
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://sarkarisewaindia.com"

def is_local(url):
    return url.startswith("/") or url.startswith("./") or url.startswith("../")

def local_path(page, url):
    raw = html.unescape(url).split("#", 1)[0].split("?", 1)[0]
    if raw.startswith(BASE):
        raw = raw[len(BASE):] or "/"
    if not is_local(raw):
        return None
    p = (page.parent / raw).resolve() if not raw.startswith("/") else (ROOT / raw.lstrip("/")).resolve()
    try:
        p.relative_to(ROOT.resolve())
    except ValueError:
        return None
    if p.suffix == "":
        p = p / "index.html"
    return p

def main():
    pages = sorted(ROOT.rglob("*.html"))
    issues = []
    canonicals = Counter()
    noindex = set()

    for page in pages:
        c = page.read_text(encoding="utf-8", errors="ignore")
        canon = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)', c, re.I)
        if not canon:
            issues.append((page, "missing canonical"))
        else:
            canonicals[canon.group(1)] += 1
            target = local_path(page, canon.group(1))
            if target and not target.exists():
                issues.append((page, f"canonical target missing: {canon.group(1)}"))

        robots = re.search(r'<meta[^>]+name=["\']robots["\'][^>]+content=["\']([^"\']+)', c, re.I)
        if robots and "noindex" in robots.group(1).lower():
            noindex.add("/" + str(page.relative_to(ROOT)).replace("\\", "/"))

        if page.as_posix().endswith("/updates/" + page.name) and '"@type": "FAQPage"' in c:
            issues.append((page, "FAQPage schema present on update article"))

        for attr in ("href", "src"):
            for u in re.findall(rf'{attr}=["\']([^"\']+)["\']', c, re.I):
                target = local_path(page, u)
                if target and not target.exists():
                    issues.append((page, f"broken {attr}: {u}"))

    for canonical, count in canonicals.items():
        if count > 1:
            # Multiple canonicals are not automatically wrong, but flag for review.
            issues.append((Path(canonical.replace(BASE, "").lstrip("/")), f"canonical target used by {count} pages"))

    sitemap = ROOT / "sitemap.xml"
    if sitemap.exists():
        sm = sitemap.read_text(encoding="utf-8", errors="ignore")
        for u in re.findall(r"<loc>(.*?)</loc>", sm, re.I|re.S):
            path = "/" + u.replace(BASE, "").lstrip("/")
            if path in noindex:
                issues.append((sitemap, f"noindex URL present in sitemap: {path}"))
            target = local_path(sitemap, u)
            if target and not target.exists():
                issues.append((sitemap, f"sitemap target missing: {u}"))

    home = ROOT / "index.html"
    if home.exists():
        hc = home.read_text(encoding="utf-8", errors="ignore")
        if "googletagmanager.com/gtag/js" not in hc and "assets/js/consent.js" not in hc:
            issues.append((home, "analytics loader not found in homepage markup"))

    print(f"HTML pages checked: {len(pages)}")
    print(f"Unique canonical targets: {len(canonicals)}")
    print(f"Noindex HTML pages: {len(noindex)}")
    print(f"Issues found: {len(issues)}")
    for path, issue in issues[:200]:
        print(f" - {path}: {issue}")

if __name__ == "__main__":
    main()
