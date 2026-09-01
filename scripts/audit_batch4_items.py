import os
import glob
import re
import json
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("==================================================")
print("BATCH 4 AUDIT: SITEMAP, ROBOTS, SEARCH INDEX, 404 & PWA")
print("==================================================")

# 1. Sitemap Audit
sitemap_path = 'sitemap.xml'
if os.path.exists(sitemap_path):
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    # extract all <loc>
    urls = []
    for elem in root.iter():
        if elem.tag.endswith('loc'):
            urls.append(elem.text.strip())
            
    print(f"\n1. Sitemap URLs: {len(urls)}")
    missing_in_sitemap = 0
    for u in urls:
        # Convert https://sarkarisewaindia.com/foo.html to local file path
        rel_path = u.replace('https://sarkarisewaindia.com/', '').replace('http://sarkarisewaindia.com/', '')
        if rel_path == '' or rel_path.endswith('/'):
            rel_path += 'index.html'
        if not os.path.exists(rel_path):
            missing_in_sitemap += 1
            if missing_in_sitemap <= 5:
                print(f"   ❌ Missing local file for sitemap URL: {u} -> {rel_path}")
                
    print(f"   Missing files for sitemap URLs: {missing_in_sitemap} / {len(urls)}")

# 2. Robots.txt Audit
robots_path = 'robots.txt'
if os.path.exists(robots_path):
    with open(robots_path, 'r', encoding='utf-8') as fp:
        r_text = fp.read()
    print(f"\n2. robots.txt status: Present ({len(r_text.splitlines())} lines)")
    print(f"   Has Sitemap declaration: {'Sitemap:' in r_text}")

# 3. 404 Page Audit
if os.path.exists('404.html'):
    with open('404.html', 'r', encoding='utf-8') as fp:
        c404 = fp.read()
    has_header = 'site-header' in c404 or 'header-inner' in c404
    has_footer = 'site-footer' in c404 or 'footer-inner' in c404
    has_search = 'search' in c404.lower()
    print(f"\n3. 404.html status: Present ({len(c404)} bytes)")
    print(f"   Has Header: {has_header}, Has Footer: {has_footer}, Has Search: {has_search}")

# 4. Search Index & Search JS Audit
print("\n4. Search capabilities audit:")
for s_cand in ['data/search-index.json', 'assets/js/search.js', 'assets/data/search.json']:
    if os.path.exists(s_cand):
        sz = os.path.getsize(s_cand)
        print(f"   Found {s_cand}: {sz} bytes")

print("==================================================")
