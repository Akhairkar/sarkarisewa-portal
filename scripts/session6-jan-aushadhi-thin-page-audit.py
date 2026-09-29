#!/usr/bin/env python3
"""Read-only audit for Jan Aushadhi district indexing consistency."""

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "service" / "jan-aushadhi"
MIN_INDEXABLE_STORES = 5

def store_count(html):
    m = re.search(r'"numberOfItems"\s*:\s*(\d+)', html)
    return int(m.group(1)) if m else 0

def has_noindex(html):
    return bool(re.search(r'<meta\s+name=["\']robots["\'][^>]*noindex', html, re.I))

def main():
    thin = []
    inconsistent = []
    district_total = 0
    nested_indexes = 0

    for p in BASE.glob("*/*.html"):
        if p.name == "index.html":
            nested_indexes += 1
            html = p.read_text(encoding="utf-8", errors="ignore")
            if not has_noindex(html):
                inconsistent.append((str(p.relative_to(ROOT)), "nested state index is not noindex"))
            continue

        district_total += 1
        html = p.read_text(encoding="utf-8", errors="ignore")
        count = store_count(html)
        noindex = has_noindex(html)

        if count < MIN_INDEXABLE_STORES:
            thin.append((str(p.relative_to(ROOT)), count, noindex))
            if not noindex:
                inconsistent.append((str(p.relative_to(ROOT)), f"{count} stores but indexable"))

    print(f"District pages checked: {district_total}")
    print(f"Nested state index pages checked: {nested_indexes}")
    print(f"Thin district pages (<{MIN_INDEXABLE_STORES} stores): {len(thin)}")
    print(f"Indexing inconsistencies: {len(inconsistent)}")

    if thin:
        print("\nTHIN PAGES:")
        for path, count, noindex in thin:
            print(f"  {path} | stores={count} | noindex={noindex}")

    if inconsistent:
        print("\nINCONSISTENCIES:")
        for path, reason in inconsistent:
            print(f"  {path} | {reason}")

if __name__ == "__main__":
    main()
