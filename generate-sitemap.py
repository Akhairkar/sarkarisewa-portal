#!/usr/bin/env python3
"""
generate-sitemap.py — regenerate /sitemap.xml from the live data files.

Run this from the repo root any time services.json or categories.json
changes (e.g. after adding a new module of services):

    python3 generate-sitemap.py

It reads data/services.json and data/categories.json, and also pulls
in blog posts from two places:
  1. data/blog-posts.json      — the original hand-written posts
  2. Supabase blog_posts table — posts written from the admin
     dashboard's Blog tab (these never touch git, so this script is
     the only thing that will notice they exist)
and writes a fresh sitemap.xml listing every static page, category
page, service page, and blog post.
"""
import json
import os
import urllib.request
import urllib.error
from datetime import date

ROOT = os.path.dirname(os.path.abspath(__file__))
BASE_URL = "https://sarkarisewaindia.com"
TODAY = date.today().isoformat()

# Same project used by assets/js/supabase-client.js — the anon key is
# safe here too, it only has read access to status='published' rows.
SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

STATIC_PAGES = [
    ("/index.html", "1.0", "weekly"),
    ("/search.html", "0.8", "weekly"),
    ("/find-services.html", "0.8", "monthly"),
    ("/project-report/index.html", "0.9", "monthly"),
    ("/blog/index.html", "0.7", "weekly"),
    ("/jobs/index.html", "0.9", "daily"),
    ("/exams/index.html", "0.9", "daily"),
    ("/csc/index.html", "0.7", "weekly"),
    ("/csc/add.html", "0.5", "monthly"),
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
    ("/states/index.html", "0.7", "weekly"),
    ("/support/rti-guide.html", "0.5", "monthly"),
]


def normalize(data, key):
    if isinstance(data, list):
        return data
    if isinstance(data, dict) and isinstance(data.get(key), list):
        return data[key]
    return []


def fetch_db_blog_slugs():
    """Pull slugs of published posts written from the admin dashboard.
    Network failures (e.g. running this offline) are non-fatal — the
    sitemap still gets written with everything else, just without
    these until the next successful run."""
    url = f"{SUPABASE_URL}/rest/v1/blog_posts?select=slug&status=eq.published"
    req = urllib.request.Request(
        url,
        headers={
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            rows = json.loads(resp.read().decode("utf-8"))
        return [r["slug"] for r in rows if r.get("slug")]
    except (urllib.error.URLError, TimeoutError, ValueError) as err:
        print(f"Warning: could not fetch dashboard-written blog posts ({err}). "
              f"Sitemap will only include data/blog-posts.json entries this run.")
        return []


def fetch_db_job_slugs():
    """Pull slugs of published, not-yet-expired job alerts. Expired ones
    are intentionally left out of the sitemap (still reachable on-site,
    just not worth submitting to search engines once closed)."""
    url = f"{SUPABASE_URL}/rest/v1/job_alerts?select=slug&status=eq.published&last_date=gte.{TODAY}"
    req = urllib.request.Request(
        url,
        headers={
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            rows = json.loads(resp.read().decode("utf-8"))
        return [r["slug"] for r in rows if r.get("slug")]
    except (urllib.error.URLError, TimeoutError, ValueError) as err:
        print(f"Warning: could not fetch job alerts ({err}). "
              f"Sitemap will not include job post URLs this run.")
        return []


def fetch_db_exam_slugs():
    """Pull slugs of published exams — same reasoning as job alerts, but
    exams stay in the sitemap even past their last_date since an exam's
    detail page (pattern, syllabus, past dates) stays useful as reference
    even once applications close, unlike a job vacancy."""
    url = f"{SUPABASE_URL}/rest/v1/exam_calendar?select=slug&status=eq.published"
    req = urllib.request.Request(
        url,
        headers={
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            rows = json.loads(resp.read().decode("utf-8"))
        return [r["slug"] for r in rows if r.get("slug")]
    except (urllib.error.URLError, TimeoutError, ValueError) as err:
        print(f"Warning: could not fetch exams ({err}). "
              f"Sitemap will not include exam URLs this run.")
        return []


def fetch_db_service_slugs():
    """Pull slugs of published services added from the admin dashboard's
    Services tab (Session 2). These live in Supabase, not services.json,
    so this is the only way generate-sitemap.py finds out about them."""
    url = f"{SUPABASE_URL}/rest/v1/services?select=slug&status=eq.published"
    req = urllib.request.Request(
        url,
        headers={
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            rows = json.loads(resp.read().decode("utf-8"))
        return [r["slug"] for r in rows if r.get("slug")]
    except (urllib.error.URLError, TimeoutError, ValueError) as err:
        print(f"Warning: could not fetch dashboard-added services ({err}). "
              f"Sitemap will only include data/services.json entries this run.")
        return []


def fetch_db_csc_slugs():
    """Pull IDs of approved CSC (Common Service Centre) directory listings
    added from the admin dashboard / public claim form."""
    url = f"{SUPABASE_URL}/rest/v1/csc_centres?select=id&status=eq.approved"
    req = urllib.request.Request(
        url,
        headers={
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            rows = json.loads(resp.read().decode("utf-8"))
        return [str(r["id"]) for r in rows if r.get("id") is not None]
    except (urllib.error.URLError, TimeoutError, ValueError) as err:
        print(f"Warning: could not fetch CSC directory listings ({err}). "
              f"Sitemap will not include CSC profile URLs this run.")
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

    json_blog_slugs = {p.get("slug") for p in blog_posts if p.get("slug")}
    db_blog_slugs = set(fetch_db_blog_slugs())
    blog_slugs = json_blog_slugs | db_blog_slugs

    with open(os.path.join(ROOT, "data/states.json"), encoding="utf-8") as f:
        states = normalize(json.load(f), "states")

    urls = []
    for path, priority, freq in STATIC_PAGES:
        urls.append((BASE_URL + path, priority, freq))

    for state in states:
        slug = state.get("slug")
        if slug:
            urls.append((f"{BASE_URL}/states/state.html?state={slug}", "0.6", "monthly"))

    for cat in categories:
        slug = cat.get("slug")
        if slug:
            urls.append((f"{BASE_URL}/category/{slug}.html", "0.7", "weekly"))

    json_service_slugs = set()
    for s in services:
        sid = s.get("slug") or s.get("id")
        if sid:
            json_service_slugs.add(sid)
            urls.append((f"{BASE_URL}/service/{sid}.html", "0.6", "monthly"))

    for sid in sorted(fetch_db_service_slugs()):
        if sid not in json_service_slugs:
            urls.append((f"{BASE_URL}/service/service.html?id={sid}", "0.6", "monthly"))

    for slug in sorted(blog_slugs):
        if slug in json_blog_slugs:
            urls.append((f"{BASE_URL}/blog/{slug}.html", "0.6", "monthly"))
        else:
            urls.append((f"{BASE_URL}/blog/post.html?slug={slug}", "0.6", "monthly"))

    for slug in sorted(fetch_db_job_slugs()):
        urls.append((f"{BASE_URL}/jobs/{slug}.html", "0.8", "daily"))

    for slug in sorted(fetch_db_exam_slugs()):
        urls.append((f"{BASE_URL}/exams/{slug}.html", "0.7", "weekly"))

    for csc_id in sorted(fetch_db_csc_slugs()):
        urls.append((f"{BASE_URL}/csc/profile.html?id={csc_id}", "0.5", "monthly"))

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
