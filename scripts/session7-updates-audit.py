#!/usr/bin/env python3
"""Read-only SEO/content audit for generated update articles."""

from pathlib import Path
import json, re
from datetime import datetime

ROOT = Path(__file__).resolve().parents[1]
UPDATES = ROOT / "updates"
DATA = ROOT / "data" / "latest-updates.json"

def main():
    files = sorted(UPDATES.glob("*.html"))
    data = {x.get("slug"): x for x in json.loads(DATA.read_text(encoding="utf-8"))} if DATA.exists() else {}
    issues = []
    for p in files:
        c = p.read_text(encoding="utf-8", errors="ignore")
        slug = p.stem
        title = re.search(r"<title>(.*?)</title>", c, re.I|re.S)
        canon = re.search(r'<link[^>]+rel="canonical"[^>]+href="([^"]+)"', c, re.I)
        if not title:
            issues.append((p.name, "missing title"))
        elif len(re.sub("<[^>]+>","",title.group(1)).strip()) > 65:
            issues.append((p.name, "title > 65 chars"))
        expected=f"https://sarkarisewaindia.com/updates/{slug}.html"
        if not canon or canon.group(1) != expected:
            issues.append((p.name, "canonical mismatch"))
        if '"@type": "NewsArticle"' not in c:
            issues.append((p.name, "missing NewsArticle schema"))
        if '"@type": "FAQPage"' in c:
            issues.append((p.name, "generic FAQ schema present; review before keeping"))
        if slug in data and data[slug].get("source_url") and data[slug]["source_url"] not in c:
            issues.append((p.name, "source URL missing from page"))
    print(f"Update pages checked: {len(files)}")
    print(f"Issues found: {len(issues)}")
    for path, issue in issues[:100]:
        print(f" - {path}: {issue}")

if __name__ == "__main__":
    main()
