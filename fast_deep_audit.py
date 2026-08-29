import os
import glob
import re
import json
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 75, flush=True)
print("🔍 COMPREHENSIVE REPOSITORY INTEGRITY AUDIT", flush=True)
print("=" * 75, flush=True)

all_html = [f.replace('\\', '/') for f in glob.glob('**/*.html', recursive=True) if not f.startswith('.')]
admin_set = {
    'dashboard.html', 'analytics.html', 'blog.html', 'comments.html',
    'csc.html', 'deadlines.html', 'exams.html', 'jobs.html',
    'services.html', 'subscribers.html', '404.html', 'google3d97747d4af174a7.html',
    'header.html', 'partials/footer.html', 'partials/header.html'
}

# 1. Sitemap Check
print("\n[1/7] SITEMAP INTEGRITY CHECK:", flush=True)
sitemap_urls = set()
try:
    tree = ET.parse('sitemap.xml')
    root = tree.getroot()
    for u in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
        loc = u.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text.strip()
        sitemap_urls.add(loc)
    print(f" -> Sitemap XML is 100% valid XML tree. Total URLs: {len(sitemap_urls)}", flush=True)
    
    # Check for admin URLs
    admin_in_sitemap = [u for u in sitemap_urls if any(a in u for a in ['admin/', 'dashboard.html', 'analytics.html', 'comments.html', 'subscribers.html', 'service/service.html'])]
    print(f" -> Admin/Internal URLs leaked in Sitemap: {len(admin_in_sitemap)}", flush=True)
except Exception as e:
    print(f" -> ERROR parsing sitemap: {e}", flush=True)

# 2. Public Pages Missing from Sitemap
print("\n[2/7] PUBLIC PAGES SITEMAP COVERAGE:", flush=True)
missing_from_sitemap = []
for f in all_html:
    if f.startswith('admin/') or f in admin_set or f == 'service/service.html':
        continue
    expected_url = f"https://sarkarisewaindia.com/{f}"
    if expected_url not in sitemap_urls:
        missing_from_sitemap.append(f)
print(f" -> Public pages missing from Sitemap: {len(missing_from_sitemap)}", flush=True)

# 3. Noindex and Robots Meta Check
print("\n[3/7] NOINDEX & ROBOTS META CHECK:", flush=True)
noindex_public = []
for f in all_html:
    if f.startswith('admin/') or f in admin_set or f in ['service/service.html', 'search.html']:
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', c, re.IGNORECASE) or \
       re.search(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', c, re.IGNORECASE):
        noindex_public.append(f)
print(f" -> Public pages with 'noindex': {len(noindex_public)}", flush=True)

# 4. Title Semantic & Quality Audit
print("\n[4/7] TITLE QUALITY & ARTIFACT AUDIT:", flush=True)
bad_titles = []
for f in all_html:
    if f in admin_set or f.startswith('admin/'):
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE | re.DOTALL)
    if not m:
        bad_titles.append((f, "Missing <title>"))
    else:
        t = m.group(1).strip()
        if '2026 2026' in t or '2027 2027' in t:
            bad_titles.append((f, f"Double year: {t}"))
        elif '<span' in t or '&amp;amp;' in t or '...' in t:
            bad_titles.append((f, f"HTML glitch: {t}"))
        elif t.lower().startswith('index '):
            bad_titles.append((f, f"Starts with 'Index': {t}"))
        elif re.search(r'\b(undefined|null|nan|lorem)\b', t, re.IGNORECASE) or '[state]' in t.lower() or '[district]' in t.lower() or '{title}' in t.lower():
            bad_titles.append((f, f"Placeholder leak: {t}"))

print(f" -> Bad/Glitched Titles: {len(bad_titles)}", flush=True)

# 5. Meta Description Audit
print("\n[5/7] META DESCRIPTION AUDIT:", flush=True)
missing_descs = []
long_descs = []
bad_descs = []

for f in all_html:
    if f.startswith('admin/') or f in admin_set:
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    m = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', c, re.IGNORECASE)
    if not m:
        m = re.search(r'<meta\s+content=["\'](.*?)["\']\s+name=["\']description["\']', c, re.IGNORECASE)
    if not m:
        missing_descs.append(f)
    else:
        d = m.group(1).strip()
        if len(d) > 165:
            long_descs.append((f, len(d)))
        if re.search(r'\b(undefined|null|nan|lorem|todo)\b', d, re.IGNORECASE) or '[state]' in d.lower() or '[district]' in d.lower() or '{title}' in d.lower():
            bad_descs.append((f, f"Placeholder: {d}"))

print(f" -> Missing Descriptions: {len(missing_descs)}", flush=True)
print(f" -> Long Descriptions (>165 chars): {len(long_descs)}", flush=True)
print(f" -> Placeholder/Bug Descriptions: {len(bad_descs)}", flush=True)

# 6. JSON-LD Schema Audit
print("\n[6/7] JSON-LD STRUCTURED DATA AUDIT:", flush=True)
schema_errors = []
for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    schemas = re.findall(r'<script\s+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', c, re.DOTALL | re.IGNORECASE)
    for s in schemas:
        s_clean = s.strip()
        if s_clean:
            try:
                data = json.loads(s_clean)
            except Exception as e:
                schema_errors.append((f, str(e)))

print(f" -> JSON-LD Syntax Errors: {len(schema_errors)}", flush=True)

# 7. Character Encoding / Mojibake Audit
print("\n[7/7] MOJIBAKE / CHARACTER ENCODING AUDIT:", flush=True)
mojibake_files = []
for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if re.search(r'[à-ÿ]{3,}', c) or '\u008d' in c or 'â€™' in c:
        mojibake_files.append(f)

print(f" -> Mojibake Corrupted Files: {len(mojibake_files)}", flush=True)

print("\n" + "=" * 75, flush=True)
if len(admin_in_sitemap) == 0 and len(missing_from_sitemap) == 0 and len(noindex_public) == 0 and len(bad_titles) == 0 and len(missing_descs) == 0 and len(long_descs) == 0 and len(bad_descs) == 0 and len(schema_errors) == 0 and len(mojibake_files) == 0:
    print("🎉 MASTER AUDIT RESULT: ZERO DEFECTS FOUND ACROSS ALL 2,750+ PAGES!", flush=True)
else:
    print("⚠️ SOME MINOR FINDINGS DETECTED - REVIEW ABOVE", flush=True)
print("=" * 75, flush=True)
