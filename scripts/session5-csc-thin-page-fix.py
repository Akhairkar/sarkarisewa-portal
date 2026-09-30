#!/usr/bin/env python3
"""Session 5 audit helper: identify CSC district pages with fewer than 5 center rows.

The generator uses MIN_INDEXABLE_CENTERS=5 so future regeneration automatically
adds noindex,follow to near-empty district pages. This helper is intentionally
read-only and can be run against the generated static tree before deployment.
"""
import glob
import re

THRESHOLD = 5
ROW_RE = re.compile(r"<tbody>\\s*(.*?)\\s*</tbody>", re.S)
TR_RE = re.compile(r"<tr>")

def main():
    thin = []
    indexable_thin = []
    for path in sorted(glob.glob("service/csc-locator/*/*.html")):
        if path.endswith("/index.html"):
            continue
        with open(path, encoding="utf-8") as f:
            html = f.read()
        m = ROW_RE.search(html)
        count = len(TR_RE.findall(m.group(1))) if m else 0
        if count < THRESHOLD:
            thin.append((path, count))
            if not re.search(r'<meta\s+name=["']robots["'][^>]*noindex', html, re.I):
                indexable_thin.append((path, count))
    print(f"CSC district pages checked: {len(glob.glob('service/csc-locator/*/*.html'))}")
    print(f"Near-empty pages (<{THRESHOLD} centers): {len(thin)}")
    print(f"Indexable near-empty pages (must be 0): {len(indexable_thin)}")
    for path, count in indexable_thin:
        print(f"INDEXABLE {count:>3}  {path}")

if __name__ == "__main__":
    main()
