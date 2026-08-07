#!/usr/bin/env python3
"""
audit-site.py — repo-wide QA checks (Module 10).

Run this from the repo root before every deploy:

    pip install beautifulsoup4 lxml
    python3 audit-site.py

Checks:
  1. Every local <a href>, <link href>, <script src>, <img src> resolves
     to a real file (skips partials/header.html and partials/footer.html,
     whose links are root-relative and get rewritten by main.js at runtime
     — that's expected, not a bug).
  2. Every data-i18n / data-i18n-placeholder key used in HTML exists in
     both data/lang.json's "en" and "hi" dictionaries.
  3. All core JSON data files parse without error.
  4. relatedServices (services.json) and relatedServiceId (blog-posts.json)
     references point to ids that actually exist.

Exits with a non-zero status if any check fails, so it can be wired into
a CI step later if you want.
"""
import os
import sys
import json

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("Missing dependency. Run: pip install beautifulsoup4 lxml --break-system-packages")
    sys.exit(1)

ROOT = os.path.dirname(os.path.abspath(__file__))
had_error = False


def find_html_files():
    files = []
    for dirpath, _, filenames in os.walk(ROOT):
        if ".git" in dirpath:
            continue
        for f in filenames:
            if f.endswith(".html"):
                files.append(os.path.join(dirpath, f))
    return sorted(files)


def resolve(base_file, link):
    if link.startswith(("http", "mailto:", "tel:", "#", "javascript:")):
        return None
    base_dir = os.path.dirname(base_file)
    clean = link.split("?")[0].split("#")[0]
    if clean == "":
        return None
    return os.path.normpath(os.path.join(base_dir, clean))


def check_links(html_files):
    global had_error
    print("=== Broken local links/assets ===")
    count = 0
    for hf in html_files:
        with open(hf, encoding="utf-8") as fh:
            soup = BeautifulSoup(fh.read(), "lxml")
        for tag in soup.find_all(["a", "link", "script", "img"]):
            attr = "href" if tag.name in ("a", "link") else "src"
            link = tag.get(attr)
            if not link:
                continue
            target = resolve(hf, link)
            if target is None:
                continue
            if not os.path.exists(target):
                rel_hf = os.path.relpath(hf, ROOT)
                if "partials" in rel_hf:
                    continue  # rewritten at runtime by main.js, not a real bug
                print(f"  {rel_hf}: -> {link}")
                count += 1
    print(f"Total: {count}")
    if count:
        had_error = True
    print()


def check_i18n(html_files, lang):
    global had_error
    print("=== i18n key coverage ===")
    en_keys = set(lang["en"].keys())
    hi_keys = set(lang["hi"].keys())
    issues = 0
    for hf in html_files:
        with open(hf, encoding="utf-8") as fh:
            soup = BeautifulSoup(fh.read(), "lxml")
        used = {t["data-i18n"] for t in soup.find_all(attrs={"data-i18n": True})}
        used |= {t["data-i18n-placeholder"] for t in soup.find_all(attrs={"data-i18n-placeholder": True})}
        missing_en = used - en_keys
        missing_hi = used - hi_keys
        if missing_en or missing_hi:
            print(f"  {os.path.relpath(hf, ROOT)}: missing_en={sorted(missing_en)} missing_hi={sorted(missing_hi)}")
            issues += 1
    print(f"Files with issues: {issues}")
    if issues:
        had_error = True
    print()


def check_json():
    global had_error
    print("=== JSON validity ===")
    for f in ["data/lang.json", "data/services.json", "data/categories.json", "data/blog-posts.json"]:
        path = os.path.join(ROOT, f)
        if not os.path.exists(path):
            continue
        try:
            json.load(open(path, encoding="utf-8"))
            print(f"  {f}: OK")
        except Exception as e:
            print(f"  {f}: BROKEN — {e}")
            had_error = True
    print()


def check_references():
    global had_error
    print("=== Cross-references (relatedServices / relatedServiceId) ===")
    services_path = os.path.join(ROOT, "data/services.json")
    if not os.path.exists(services_path):
        return
    services = json.load(open(services_path, encoding="utf-8"))
    ids = {s["id"] for s in services}

    bad = []
    for s in services:
        for r in s.get("relatedServices", []) or []:
            if r not in ids:
                bad.append((s["id"], "relatedServices", r))
    blog_path = os.path.join(ROOT, "data/blog-posts.json")
    if os.path.exists(blog_path):
        posts = json.load(open(blog_path, encoding="utf-8"))
        for p in posts:
            rid = p.get("relatedServiceId")
            if rid and rid not in ids:
                bad.append((p["slug"], "relatedServiceId", rid))

    if bad:
        for src, field, ref in bad:
            print(f"  {src}: {field} -> '{ref}' does not exist")
        had_error = True
    else:
        print("  No dangling references.")
    print()


def main():
    html_files = find_html_files()
    with open(os.path.join(ROOT, "data/lang.json"), encoding="utf-8") as f:
        lang = json.load(f)

    check_links(html_files)
    check_i18n(html_files, lang)
    check_json()
    check_references()

    if had_error:
        print("❌ Audit found issues — see above.")
        sys.exit(1)
    else:
        print("✅ All checks passed.")


if __name__ == "__main__":
    main()
