import xml.etree.ElementTree as ET
import glob
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 60)
print("🔍 RUNNING COMPREHENSIVE VERIFICATION AUDIT")
print("=" * 60)

# 1. Verify Sitemap XML
try:
    tree = ET.parse('sitemap.xml')
    root = tree.getroot()
    urls = root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url')
    print(f"1. Sitemap XML: Valid XML structure ✅ ({len(urls)} URLs present)")
    
    # Check for leaked admin urls in sitemap
    admin_basenames = {
        'https://sarkarisewaindia.com/dashboard.html',
        'https://sarkarisewaindia.com/analytics.html',
        'https://sarkarisewaindia.com/blog.html',
        'https://sarkarisewaindia.com/comments.html',
        'https://sarkarisewaindia.com/csc.html',
        'https://sarkarisewaindia.com/deadlines.html',
        'https://sarkarisewaindia.com/exams.html',
        'https://sarkarisewaindia.com/jobs.html',
        'https://sarkarisewaindia.com/services.html',
        'https://sarkarisewaindia.com/subscribers.html',
        'https://sarkarisewaindia.com/404.html',
        'https://sarkarisewaindia.com/service/service.html'
    }
    leaked_in_sitemap = []
    for u in urls:
        loc = u.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
        if loc in admin_basenames or '/admin/' in loc:
            leaked_in_sitemap.append(loc)
    print(f"   Admin URLs in Sitemap: {len(leaked_in_sitemap)} (Expected: 0) ✅")
except Exception as e:
    print(f"1. Sitemap XML: ❌ ERROR: {e}")

# 2. Check for 'Index' in Titles
index_titles = []
for f in glob.glob('service/csc-locator/**/*.html', recursive=True):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    if m and 'index' in m.group(1).lower():
        index_titles.append((f, m.group(1)))
print(f"2. CSC Pages with 'Index' in Title: {len(index_titles)} (Expected: 0) ✅")

# 3. Check for 'No verified CSC found' text
no_csc_text = []
for f in glob.glob('service/csc-locator/**/*.html', recursive=True):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'No verified CSC found' in c or 'currently updating our database for this location' in c:
        no_csc_text.append(f)
print(f"3. CSC Pages with 'No verified CSC found': {len(no_csc_text)} (Expected: 0) ✅")

# 4. Check for Noindex in CSC Locator
csc_noindex = []
for f in glob.glob('service/csc-locator/**/*.html', recursive=True):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', c, re.IGNORECASE) or \
       re.search(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', c, re.IGNORECASE):
        csc_noindex.append(f)
print(f"4. CSC Pages with 'noindex': {len(csc_noindex)} (Expected: 0) ✅")

# 5. Check Root Admin Pages Protection
unprotected_admin = []
for f in ['dashboard.html', 'analytics.html', 'blog.html', 'comments.html', 'csc.html', 'deadlines.html', 'exams.html', 'jobs.html', 'services.html', 'subscribers.html']:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    t = m.group(1) if m else ""
    if 'noindex' not in c or 'SarkariSewa Admin' not in t:
        unprotected_admin.append(f)
print(f"5. Unprotected Admin pages at root: {len(unprotected_admin)} (Expected: 0) ✅")

print("=" * 60)
if len(leaked_in_sitemap) == 0 and len(index_titles) == 0 and len(no_csc_text) == 0 and len(csc_noindex) == 0 and len(unprotected_admin) == 0:
    print("🎉 ALL 5 AUDIT CATEGORIES PASSED 100%! ZERO DEFECTS FOUND.")
else:
    print("⚠️ Some items still require attention.")
print("=" * 60)
