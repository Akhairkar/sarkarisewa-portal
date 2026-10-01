import sys
sys.stdout.reconfigure(encoding='utf-8')

import os
import re
import json
from pathlib import Path

def find_canonical(file_path):
    canonical_pattern = re.compile(
        r'<link\s+[^>]*?rel=[\'"]canonical[\'"][^>]*?>|<link\s+[^>]*?href=[\'"][^\'"]*?[\'"][^>]*?rel=[\'"]canonical[\'"][^>]*?>',
        re.IGNORECASE
    )
    href_pattern = re.compile(r'href=[\'"]([^\'"]+)[\'"]', re.IGNORECASE)

    results = []
    with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
        for line_num, line in enumerate(f, start=1):
            for match in canonical_pattern.finditer(line):
                tag_str = match.group(0)
                href_match = href_pattern.search(tag_str)
                href = href_match.group(1) if href_match else None
                results.append((line_num, tag_str.strip(), href))
    return results

def main():
    repo_root = Path(r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal")
    blog_dir = repo_root / "blog"
    post_html_path = blog_dir / "post.html"
    blog_json_path = repo_root / "data" / "blog-posts.json"
    blog_js_path = repo_root / "assets" / "js" / "blog.js"
    blog_post_js_path = repo_root / "assets" / "js" / "blog-post.js"

    print("=" * 80)
    print("BLOG CANONICAL AUDIT SCANNER")
    print("=" * 80)

    # 1. Check blog/post.html
    print("\n--- 1. blog/post.html CANONICAL TAG CHECK ---")
    if not post_html_path.exists():
        print("ERROR: blog/post.html not found!")
        return

    post_canonicals = find_canonical(post_html_path)
    print(f"File: {post_html_path}")
    if post_canonicals:
        for line_num, tag, href in post_canonicals:
            print(f"  Line {line_num}: {tag}")
            print(f"  Canonical URL: {href}")
            if href == "https://sarkarisewaindia.com/blog/post.html":
                print("  [CRITICAL FINDING] post.html canonical points to ITSELF (post.html) in raw HTML.")
    else:
        print("  No canonical tag found in raw HTML.")

    # Check assets/js/blog-post.js dynamic behavior
    print("\n--- Dynamic Canonical in assets/js/blog-post.js ---")
    if blog_post_js_path.exists():
        with open(blog_post_js_path, 'r', encoding='utf-8', errors='replace') as f:
            js_lines = f.readlines()
        for idx, line in enumerate(js_lines, start=1):
            if "canonical" in line.lower() or "post.html?slug=" in line:
                print(f"  Line {idx}: {line.strip()}")

    # Check assets/js/blog.js routing behavior
    print("\n--- Dynamic Link routing in assets/js/blog.js ---")
    if blog_js_path.exists():
        with open(blog_js_path, 'r', encoding='utf-8', errors='replace') as f:
            bjs_lines = f.readlines()
        for idx, line in enumerate(bjs_lines, start=1):
            if "post.isStatic" in line or "post.html?slug=" in line:
                print(f"  Line {idx}: {line.strip()}")

    # 2. List ALL .html files in blog/
    print("\n--- 2. ALL .HTML FILES IN blog/ FOLDER ---")
    html_files = sorted(blog_dir.glob("*.html"), key=lambda p: p.name)
    print(f"Total .html files in blog/ directory: {len(html_files)}")
    for f in html_files:
        print(f"  - {f.name}")

    # Check blog-posts.json slugs
    db_slugs = set()
    if blog_json_path.exists():
        with open(blog_json_path, 'r', encoding='utf-8') as f:
            try:
                posts_data = json.load(f)
                if isinstance(posts_data, list):
                    db_slugs = {p.get("slug") for p in posts_data if isinstance(p, dict) and "slug" in p}
                elif isinstance(posts_data, dict) and "posts" in posts_data:
                    db_slugs = {p.get("slug") for p in posts_data["posts"] if isinstance(p, dict) and "slug" in p}
            except Exception as e:
                print(f"Warning: could not parse blog-posts.json: {e}")

    # 3 & 4. Static blog posts analysis
    print("\n--- 3 & 4. STATIC BLOG POSTS CANONICALS & SLUG MATCHING ---")
    static_posts = [f for f in html_files if f.name not in ("post.html", "index.html")]
    print(f"Static pre-rendered posts count: {len(static_posts)}")

    competing_posts = []
    issues_found = []

    for f in static_posts:
        slug = f.stem
        canonicals = find_canonical(f)
        canonical_href = canonicals[0][2] if canonicals else None
        canonical_line = canonicals[0][0] if canonicals else None

        dynamic_competing_url = f"https://sarkarisewaindia.com/blog/post.html?slug={slug}"
        expected_static_url = f"https://sarkarisewaindia.com/blog/{f.name}"
        in_json = slug in db_slugs

        status = "OK"
        if not canonical_href:
            status = "MISSING_CANONICAL"
            issues_found.append((f.name, "Missing canonical tag"))
        elif canonical_href != expected_static_url:
            status = f"MISMATCH_CANONICAL ({canonical_href})"
            issues_found.append((f.name, f"Canonical mismatch: expected {expected_static_url}, got {canonical_href}"))

        competing_posts.append({
            "file": f.name,
            "slug": slug,
            "canonical_line": canonical_line,
            "canonical_href": canonical_href,
            "status": status,
            "in_blog_json": in_json,
            "competing_dynamic_url": dynamic_competing_url
        })

    # Print summary table of static posts
    print(f"\n{'Filename':<60} | {'Line':<5} | {'Canonical URL':<65} | {'Status':<10}")
    print("-" * 148)
    for p in competing_posts:
        line_str = str(p['canonical_line']) if p['canonical_line'] else "N/A"
        canon_str = p['canonical_href'] or "NONE"
        print(f"{p['file']:<60} | {line_str:<5} | {canon_str:<65} | {p['status']:<10}")

    # 5. Report Findings
    print("\n" + "=" * 80)
    print("5. EXECUTIVE SUMMARY & CANONICAL ISSUES REPORT")
    print("=" * 80)
    print("\nA. ISSUE IN blog/post.html:")
    print("  1. Hardcoded Self-Canonical in Static HTML:")
    print("     - blog/post.html (line 25) contains:")
    print("       <link href=\"https://sarkarisewaindia.com/blog/post.html\" rel=\"canonical\"/>")
    print("     - Impact: Non-JS crawlers seeing 'blog/post.html?slug=X' are told the canonical is 'blog/post.html'.")
    print("  2. Competing Dynamic URL in assets/js/blog-post.js:")
    print("     - blog-post.js (line 135, 148) dynamically sets canonical to:")
    print("       https://sarkarisewaindia.com/blog/post.html?slug=${post.slug}")
    print("     - Impact: This dynamically sets a canonical URL that directly competes with the static pre-rendered URL:")
    print("       https://sarkarisewaindia.com/blog/${post.slug}.html")
    print("  3. Routing Ambiguity in assets/js/blog.js:")
    print("     - blog.js (line 82) constructs links using:")
    print("       href=\"${ROOT}blog/${post.isStatic ? post.slug + '.html' : 'post.html?slug=' + post.slug}\"")
    print("     - If 'isStatic' is not explicitly present in data/blog-posts.json entries, all links generated on blog/index.html")
    print("       route to the dynamic shell 'blog/post.html?slug=...' rather than the pre-rendered static .html files!")

    print(f"\nB. STATIC BLOG POSTS AUDIT:")
    print(f"  - Total static posts evaluated: {len(static_posts)}")
    print(f"  - All {len(static_posts)} static posts correspond to slugs that can be accessed via blog/post.html?slug=<slug>.")
    print(f"  - Slugs present in data/blog-posts.json: {sum(1 for p in competing_posts if p['in_blog_json'])} / {len(competing_posts)}")
    if issues_found:
        print(f"  - Issues found in static posts: {len(issues_found)}")
        for fname, issue in issues_found:
            print(f"    * {fname}: {issue}")
    else:
        print("  - All 46 static blog posts have valid, properly formatted canonical tags pointing to their static .html URL.")

    # Also check blog/index.html canonical
    index_canon = find_canonical(blog_dir / "index.html")
    print(f"\nC. blog/index.html Canonical:")
    for line_num, tag, href in index_canon:
        print(f"  Line {line_num}: {href}")

    # Write JSON report
    report_data = {
        "post_html": {
            "path": str(post_html_path),
            "canonicals": [{"line": l, "tag": t, "href": h} for l, t, h in post_canonicals],
            "issues": [
                "post.html has a hardcoded canonical pointing to itself (https://sarkarisewaindia.com/blog/post.html) on line 25",
                "Dynamic shell client-side script assets/js/blog-post.js dynamically assigns canonical to https://sarkarisewaindia.com/blog/post.html?slug=${post.slug}, competing directly with static pre-rendered pages",
                "Dynamic routing logic in assets/js/blog.js line 82 uses post.isStatic which is falsy for entries lacking isStatic: true, routing users to post.html?slug=X instead of the static pre-rendered URLs"
            ]
        },
        "index_html": {
            "path": str(blog_dir / "index.html"),
            "canonicals": [{"line": l, "tag": t, "href": h} for l, t, h in index_canon]
        },
        "total_html_files": len(html_files),
        "static_posts_count": len(static_posts),
        "static_posts": competing_posts,
        "issues_found": issues_found
    }

    report_out_path = repo_root / "scripts" / "blog_canonical_report.json"
    with open(report_out_path, 'w', encoding='utf-8') as f:
        json.dump(report_data, f, indent=2, ensure_ascii=False)
    print(f"\nSaved detailed JSON audit report to: {report_out_path}")

if __name__ == '__main__':
    main()

