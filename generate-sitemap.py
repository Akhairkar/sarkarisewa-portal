#!/usr/bin/env python3
"""
generate-sitemap.py — regenerate /sitemap.xml from the live data files.

Run this from the repo root any time services.json or categories.json
changes (e.g. after adding a new module of services):

    python3 generate-sitemap.py

It reads data/services.json and data/categories.json and writes a fresh
sitemap.xml listing every static page, category page, and service page.
"""
import json
import os
from datetime import date

ROOT = os.path.dirname(os.path.abspath(__file__))
BASE_URL = "https://akhairkar.github.io/sarkarisewa-portal"
TODAY = date.today().isoformat()

STATIC_PAGES = [
    ("/index.html", "1.0", "weekly"),
    ("/search.html", "0.8", "weekly"),
    ("/find-services.html", "0.8", "monthly"),
    ("/blog/index.html", "0.7", "weekly"),
    ("/sitemap.html", "0.3", "monthly"),
    ("/about.html", "0.5", "monthly"),
    ("/contact.html", "0.5", "monthly"),
    ("/faq.html", "0.5", "monthly"),
    ("/privacy-policy.html", "0.3", "yearly"),
    ("/disclaimer.html", "0.3", "yearly"),
    ("/terms.html", "0.3", "yearly"),
    ("/support/index.html", "0.6", "monthly"),
    ("/support/state-wise-services.html", "0.5", "monthly"),
    ("/support/helpline-directory.html", "0.5", "monthly"),
    ("/support/rti-guide.html", "0.5", "monthly"),
]


def normalize(data, key):
    if isinstance(data, list):
        return data
    if isinstance(data, dict) and isinstance(data.get(key), list):
        return data[key]
    return []


def main():
    with open(os.path.join(ROOT, "data/services.json"), encoding="utf-8") as f:
        services = normalize(json.load(f), "services")
    with open(os.path.join(ROOT, "data/categories.json"), encoding="utf-8") as f:
        categories = normalize(json.load(f), "categories")
    blog_path = os.path.join(ROOT, "data/blog-posts.json")
    blog_posts = []
    if os.path.exists(blog_path):
        with open(blog_path, encoding="utf-8") as f:
            blog_posts = normalize(json.load(f), "posts")

    urls = []
    for path, priority, freq in STATIC_PAGES:
        urls.append((BASE_URL + path, priority, freq))

    for cat in categories:
        slug = cat.get("slug")
        if slug:
            urls.append((f"{BASE_URL}/category/category.html?cat={slug}", "0.7", "weekly"))

    for s in services:
        sid = s.get("slug") or s.get("id")
        if sid:
            urls.append((f"{BASE_URL}/service/service.html?id={sid}", "0.6", "monthly"))

    for post in blog_posts:
        slug = post.get("slug")
        if slug:
            urls.append((f"{BASE_URL}/blog/post.html?slug={slug}", "0.6", "monthly"))

    lines = ['<?xml version="1.0" encoding="UTF-8"?>']
    lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    for loc, priority, freq in urls:
        loc_escaped = loc.replace("&", "&amp;")
        lines.append("  <url>")
        lines.append(f"    <loc>{loc_escaped}</loc>")
        lines.append(f"    <lastmod>{TODAY}</lastmod>")
        lines.append(f"    <changefreq>{freq}</changefreq>")
        lines.append(f"    <priority>{priority}</priority>")
        lines.append("  </url>")
    lines.append("</urlset>")

    out_path = os.path.join(ROOT, "sitemap.xml")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

    print(f"Wrote {len(urls)} URLs to {out_path}")


if __name__ == "__main__":
    main()
