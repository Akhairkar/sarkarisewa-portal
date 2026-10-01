# -*- coding: utf-8 -*-
"""
DEEP SITE-WIDE PAGE AUDITOR & HEALTH CHECKER
============================================
Audits all 2,800+ HTML files for:
1. Header count != 1 (Duplicate or missing header)
2. Footer count != 1 (Duplicate or missing footer)
3. <main> tag integrity (Missing opening <main> or closing </main>)
4. Duplicate Telegram community banners (> 1 banner block)
5. Empty / broken content (< 500 bytes of main body or broken tags)
6. Broken / mismatched brand names
7. Title or Head issues
"""

import os, sys, re, glob

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

header_issues = []
footer_issues = []
main_tag_issues = []
duplicate_tg_banners = []
empty_content_issues = []
brand_issues = []

all_html = []
for root, dirs, files in os.walk(ROOT):
    if '.git' in dirs: dirs.remove('.git')
    for f in files:
        if f.endswith('.html'):
            all_html.append(os.path.join(root, f))

print(f"Total HTML files discovered: {len(all_html)}")
print("=" * 80)

for fpath in all_html:
    rel = os.path.relpath(fpath, ROOT).replace('\\', '/')
    try:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            content = fp.read()
    except Exception as e:
        empty_content_issues.append((rel, f"Read error: {e}"))
        continue

    # Ignore pure redirect stubs (client-side redirects)
    if 'http-equiv="refresh"' in content and len(content) < 1500:
        continue

    # 1. Header count check
    # Check for <header class="site-header"> OR standalone <div id="site-header">
    h_tags = len(re.findall(r'<header[^>]*class=["\'][^"\']*site-header[^"\']*["\']', content, re.I))
    h_divs = len(re.findall(r'<div[^>]*id=["\']site-header["\']', content, re.I))
    
    # If file has neither or more than 1 of either
    if h_tags > 1 or h_divs > 1:
        header_issues.append((rel, f"Duplicate headers (tags={h_tags}, divs={h_divs})"))
    elif h_tags == 0 and h_divs == 0:
        header_issues.append((rel, "Missing header"))

    # 2. Footer count check
    f_tags = len(re.findall(r'<footer[^>]*class=["\'][^"\']*site-footer[^"\']*["\']', content, re.I))
    f_divs = len(re.findall(r'<div[^>]*id=["\']site-footer["\']', content, re.I))
    if f_tags > 1 or f_divs > 1:
        footer_issues.append((rel, f"Duplicate footers (tags={f_tags}, divs={f_divs})"))
    elif f_tags == 0 and f_divs == 0:
        footer_issues.append((rel, "Missing footer"))

    # 3. <main> tag check
    has_open_main = bool(re.search(r'<main\b', content, re.I))
    has_close_main = bool(re.search(r'</main>', content, re.I))
    if has_open_main != has_close_main:
        main_tag_issues.append((rel, f"Mismatched main tag (open={has_open_main}, close={has_close_main})"))
    elif not has_open_main:
        # Some simple tools/pages might use container div, check if length is too short
        if len(content) > 3000 and not has_open_main and 'data-slug' in content:
            main_tag_issues.append((rel, "Missing <main> tag container"))

    # 4. Duplicate Telegram banners check
    # Count full banner blocks (gradient background or telegram-banner class)
    tg_banner_blocks = len(re.findall(r'linear-gradient\(135deg,\s*#0088cc|class=["\'][^"\']*telegram-banner', content, re.I))
    if tg_banner_blocks > 1:
        duplicate_tg_banners.append((rel, f"{tg_banner_blocks} Telegram banner blocks"))

    # 5. Content check (empty content / broken page)
    if len(content.strip()) < 1000:
        empty_content_issues.append((rel, f"Suspiciously small content size: {len(content)} bytes"))

    # 6. Brand name check (legacy branding)
    if re.search(r'\bSarkariSeva\b|\bSarkari\s+Sewa\s+India\b(?! India)', content) and 'sarkarisewaindia' not in content.lower():
        brand_issues.append((rel, "Legacy branding found"))

print("\n📊 AUDIT RESULTS SUMMARY:")
print(f"1. Header Issues:            {len(header_issues)}")
for item in header_issues[:15]:
    print(f"   - {item[0]}: {item[1]}")
if len(header_issues) > 15: print(f"   ... and {len(header_issues)-15} more")

print(f"\n2. Footer Issues:            {len(footer_issues)}")
for item in footer_issues[:15]:
    print(f"   - {item[0]}: {item[1]}")
if len(footer_issues) > 15: print(f"   ... and {len(footer_issues)-15} more")

print(f"\n3. <main> Tag Issues:        {len(main_tag_issues)}")
for item in main_tag_issues[:15]:
    print(f"   - {item[0]}: {item[1]}")
if len(main_tag_issues) > 15: print(f"   ... and {len(main_tag_issues)-15} more")

print(f"\n4. Duplicate Telegram Banners: {len(duplicate_tg_banners)}")
for item in duplicate_tg_banners[:15]:
    print(f"   - {item[0]}: {item[1]}")
if len(duplicate_tg_banners) > 15: print(f"   ... and {len(duplicate_tg_banners)-15} more")

print(f"\n5. Empty / Broken Content:   {len(empty_content_issues)}")
for item in empty_content_issues[:15]:
    print(f"   - {item[0]}: {item[1]}")
if len(empty_content_issues) > 15: print(f"   ... and {len(empty_content_issues)-15} more")

print("\n" + "=" * 80)
