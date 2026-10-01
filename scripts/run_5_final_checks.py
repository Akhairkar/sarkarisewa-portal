import os
import glob
import re
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("==================================================")
print("RUNNING 5 FINAL SITE-WIDE AUDIT CHECKS")
print("==================================================")

# CHECK 1: noindex check — sirf admin/ mein hona chahiye, kahin aur nahi
all_html = glob.glob('**/*.html', recursive=True)
noindex_non_admin = []
for f in all_html:
    parts = f.replace('\\', '/').split('/')
    if 'admin' in parts:
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if re.search(r'name=["\']robots["\'][^>]*content=["\'][^"\']*noindex', c, re.I) or re.search(r'content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', c, re.I):
        noindex_non_admin.append(f)

print(f"\n[CHECK 1/5] Non-admin noindex files count: {len(noindex_non_admin)}")
if noindex_non_admin:
    print("Files found:", noindex_non_admin)
else:
    print("✅ Result: 0 (Clean! Sirf admin/ noindex hai)")

# CHECK 2: sitemap valid hai ya nahi
print(f"\n[CHECK 2/5] Sitemap Validation:")
try:
    tree = ET.parse('sitemap.xml')
    root = tree.getroot()
    url_count = len(list(root))
    print(f"✅ Result: valid, urls: {url_count}")
except Exception as e:
    print(f"❌ Sitemap error: {e}")

# CHECK 3: site-wide duplicate title scan (excluding redirect stubs)
print(f"\n[CHECK 3/5] Site-wide Duplicate Title Scan:")
titles = {}
for f in all_html:
    parts = f.replace('\\', '/').split('/')
    if 'admin' in parts or 'partials' in parts:
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    # Skip redirect stubs
    if 'window.location.replace' in c or 'http-equiv="refresh"' in c:
        continue
    m = re.search(r'<title>(.*?)</title>', c, re.DOTALL)
    tt = m.group(1).strip() if m else None
    if tt:
        titles.setdefault(tt, []).append(f)

dup = {k: v for k, v in titles.items() if len(v) > 1}
print(f"duplicate title groups (non-stub content pages): {len(dup)}")
for k, v in sorted(dup.items(), key=lambda x: -len(x[1]))[:15]:
    print(len(v), 'x', k)

# CHECK 4: koi "Index" bug bacha to nahi
print(f"\n[CHECK 4/5] Index literal title check in index.html files:")
index_bugs = []
for f in all_html:
    if not f.endswith('index.html'):
        continue
    parts = f.replace('\\', '/').split('/')
    if 'admin' in parts:
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if '<title>Index ' in c:
        index_bugs.append(f)

print(f"Index literal titles count: {len(index_bugs)}")
if index_bugs:
    print("Files found:", index_bugs)
else:
    print("✅ Result: 0 (Clean! 0 Index literal titles)")

# CHECK 5: koi "Apply Online & Status Check" ab bhi kahin galat jagah to nahi
print(f"\n[CHECK 5/5] Checking '2026: Apply Online & Status Check' outside service/ & states/:")
apply_bugs = []
for f in all_html:
    norm = f.replace('\\', '/')
    if norm.startswith(('service/', 'states/', 'admin/')):
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if '2026: Apply Online & Status Check' in c or 'Apply Online & Status Check' in c:
        apply_bugs.append(f)

print(f"Apply Online mismatch count outside service/ & states/: {len(apply_bugs)}")
if apply_bugs:
    print("Files found:", apply_bugs)
else:
    print("✅ Result: 0 (Clean! Bilkul galat jagah nahi hai)")

print("==================================================")
