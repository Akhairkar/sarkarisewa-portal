# -*- coding: utf-8 -*-
"""Audit/cleanup helper for duplicate service URL pairs.

Canonical convention: short state-code filenames are retained when a
short/full-name pair exists. This script is intentionally cleanup-only:
it NEVER recreates redirect stubs or overwrites canonical service pages.
"""
import glob
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICE_DIR = os.path.join(ROOT, "service")

PAIRS = []

# Pair list is intentionally empty after Session 3 cleanup. Canonical pages are
# determined from the current repository rather than a stale hard-coded list.

def remove_stub_urls_from_sitemap():
    path = os.path.join(ROOT, "sitemap.xml")
    if not os.path.exists(path):
        return 0
    with open(path, encoding="utf-8") as f:
        sitemap = f.read()
    removed = 0
    for short_f, full_f in PAIRS:
        pattern = re.compile(
            rf'<url>\s*<loc>https://sarkarisewaindia\.com/service/{re.escape(full_f)}</loc>.*?</url>\s*',
            re.DOTALL,
        )
        sitemap, count = pattern.subn("", sitemap)
        removed += count
    with open(path, "w", encoding="utf-8") as f:
        f.write(sitemap)
    return removed

def update_internal_links():
    targets = (
        glob.glob(os.path.join(ROOT, "category", "*.html"))
        + glob.glob(os.path.join(ROOT, "states", "*.html"))
        + glob.glob(os.path.join(ROOT, "blog", "*.html"))
        + glob.glob(os.path.join(ROOT, "partials", "*.html"))
        + glob.glob(os.path.join(ROOT, "assets", "js", "*.js"))
        + [os.path.join(ROOT, "sitemap.html"), os.path.join(ROOT, "index.html")]
    )
    changed = 0
    for fpath in targets:
        if not os.path.isfile(fpath):
            continue
        with open(fpath, encoding="utf-8", errors="ignore") as f:
            content = f.read()
        original = content
        for short_f, full_f in PAIRS:
            content = content.replace(f"service/{full_f}", f"service/{short_f}")
            content = content.replace(f"../service/{full_f}", f"../service/{short_f}")
            content = content.replace(f'"/{full_f}', f'"/{short_f}')
            content = content.replace(f"'/{full_f}", f"'/{short_f}")
        if content != original:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            changed += 1
    return changed

if __name__ == "__main__":
    print("Cleanup-only duplicate service audit.")
    print("Canonical pages are never overwritten and redirect stubs are never recreated.")
    print(f"Configured pairs: {len(PAIRS)}")
    print(f"Sitemap URL blocks removed: {remove_stub_urls_from_sitemap()}")
    print(f"Files with canonical-link replacements: {update_internal_links()}")
