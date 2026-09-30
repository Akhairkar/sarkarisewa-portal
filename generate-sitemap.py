#!/usr/bin/env python3
"""Generate a complete public sitemap from the actual static HTML tree.

Rules:
- include existing HTML files only
- exclude admin/private/partials, 404 and dynamic fallback shells
- exclude noindex pages
- exclude pages whose canonical is not their own URL
- keep index.html mapped to the domain root
"""
from pathlib import Path
from datetime import date
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent
BASE = "https://sarkarisewaindia.com"
TODAY = date.today().isoformat()
EXCLUDED_PREFIXES = ("admin/", "private/", "partials/", ".")
EXCLUDED_FILES = {"404.html", "service/service.html", "category/category.html",
                  "blog/post.html", "jobs/post.html", "exams/exam.html"}

def canonical(html):
    m = re.search(r'<link\s+[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"\']+)', html, re.I)
    return m.group(1).rstrip("/") if m else None

def noindex(html):
    return bool(re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex', html, re.I))

def expected_url(rel):
    return BASE if rel == "index.html" else BASE + "/" + rel

def priority(rel):
    if rel == "index.html": return ("1.0", "daily")
    if rel.startswith("tools/"): return ("0.9", "weekly")
    if rel.startswith("service/"): return ("0.8", "weekly")
    if rel.startswith(("jobs/", "exams/", "updates/")): return ("0.85", "daily")
    if rel.startswith(("blog/", "states/")): return ("0.75", "weekly")
    if rel.startswith("category/"): return ("0.7", "weekly")
    return ("0.6", "monthly")

urls = []
for path in sorted(ROOT.rglob("*.html")):
    rel = path.relative_to(ROOT).as_posix()
    if rel in EXCLUDED_FILES or rel.startswith(EXCLUDED_PREFIXES):
        continue
    html = path.read_text(encoding="utf-8", errors="ignore")
    if noindex(html):
        continue
    c = canonical(html)
    if c and c != expected_url(rel).rstrip("/"):
        continue
    # A page without canonical is not submitted; repair_v3 should add one first.
    if not c:
        continue
    pr, freq = priority(rel)
    urls.append((expected_url(rel), pr, freq))

lines = ['<?xml version="1.0" encoding="UTF-8"?>',
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for loc, pr, freq in urls:
    lines += ["  <url>", f"    <loc>{loc}</loc>", f"    <lastmod>{TODAY}</lastmod>",
              f"    <changefreq>{freq}</changefreq>", f"    <priority>{pr}</priority>", "  </url>"]
lines.append("</urlset>")
out = "\n".join(lines) + "\n"
(ROOT / "sitemap.xml").write_text(out, encoding="utf-8")
ET.parse(ROOT / "sitemap.xml")
print(f"Wrote {len(urls)} complete public indexable URLs to sitemap.xml")
