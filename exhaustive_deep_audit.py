import os
import glob
import re
import json
import xml.etree.ElementTree as ET
import sys
from bs4 import BeautifulSoup
from urllib.parse import urlparse

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 80)
print("🔬 STARTING EXHAUSTIVE MULTI-DIMENSIONAL DEEP AUDIT (2,750+ PAGES)")
print("=" * 80)

# Collect all files
all_html_files = [f.replace('\\', '/') for f in glob.glob('**/*.html', recursive=True)]
all_html_files = [f for f in all_html_files if not f.startswith('.')]
public_html_files = [f for f in all_html_files if not f.startswith('admin/') and not f in ['dashboard.html', 'analytics.html', 'blog.html', 'comments.html', 'csc.html', 'deadlines.html', 'exams.html', 'jobs.html', 'services.html', 'subscribers.html', '404.html']]

print(f"Total HTML files on disk: {len(all_html_files)}")
print(f"Total Public indexable pages: {len(public_html_files)}")

findings = {
    "sitemap_errors": [],
    "sitemap_missing_files": [],
    "sitemap_orphan_urls": [],
    "noindex_public_pages": [],
    "canonical_errors": [],
    "title_semantic_bugs": [],
    "desc_semantic_bugs": [],
    "desc_length_bugs": [],
    "mojibake_encoding_bugs": [],
    "broken_internal_links": [],
    "empty_href_links": [],
    "json_ld_schema_syntax_errors": [],
    "schema_semantic_errors": [],
    "negative_fallback_texts": [],
    "template_placeholder_leaks": []
}

# -----------------------------------------------------------------------------
# 1. SITEMAP & INDEXABILITY AUDIT
# -----------------------------------------------------------------------------
print("\n[Stage 1/6] Auditing Sitemap XML & Indexability...")

sitemap_urls_set = set()
try:
    tree = ET.parse('sitemap.xml')
    root = tree.getroot()
    for u in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
        loc = u.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text.strip()
        sitemap_urls_set.add(loc)
        
        # Check if URL maps to a real file on disk
        parsed = urlparse(loc)
        rel_path = parsed.path.lstrip('/')
        if rel_path == "": rel_path = "index.html"
        
        if not os.path.exists(rel_path):
            findings["sitemap_orphan_urls"].append((loc, rel_path))
except Exception as e:
    findings["sitemap_errors"].append(str(e))

# Check public pages missing from sitemap
for pf in public_html_files:
    expected_url = f"https://sarkarisewaindia.com/{pf}"
    if pf == "index.html": expected_url = "https://sarkarisewaindia.com/index.html"
    if expected_url not in sitemap_urls_set:
        findings["sitemap_missing_files"].append(pf)

# -----------------------------------------------------------------------------
# 2. METADATA, TITLES, DESCRIPTIONS & ENCODING AUDIT
# -----------------------------------------------------------------------------
print("[Stage 2/6] Auditing Titles, Meta Descriptions, Placeholders & Encoding...")

semantic_bad_words = ['index', 'undefined', 'null', 'nan', 'test', '[state]', '[district]', '{title}', 'lorem', 'todo']

for fpath in all_html_files:
    is_admin = fpath.startswith('admin/') or fpath in ['dashboard.html', 'analytics.html', 'blog.html', 'comments.html', 'csc.html', 'deadlines.html', 'exams.html', 'jobs.html', 'services.html', 'subscribers.html', '404.html']
    
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        
    soup = BeautifulSoup(content, 'html.parser')
    
    # Check noindex on public pages
    if not is_admin:
        robots = soup.find('meta', attrs={'name': 'robots'}) or soup.find('meta', attrs={'content': re.compile(r'noindex', re.I)})
        if robots and 'noindex' in str(robots.get('content', '')).lower():
            findings["noindex_public_pages"].append(fpath)

    # Check Title
    title_tag = soup.find('title')
    if not title_tag or not title_tag.string:
        if not is_admin:
            findings["title_semantic_bugs"].append((fpath, "Missing <title> tag"))
    else:
        title_str = title_tag.string.strip()
        # Semantic checks
        if not is_admin:
            for bw in ['undefined', 'null', 'nan', '[state]', '[district]', '{title}', 'lorem']:
                if bw in title_str.lower():
                    findings["title_semantic_bugs"].append((fpath, f"Contains placeholder/bug word '{bw}': {title_str}"))
            if '2026 2026' in title_str or '2027 2027' in title_str:
                findings["title_semantic_bugs"].append((fpath, f"Duplicate year: {title_str}"))
            if '<span' in title_str or '&amp;amp;' in title_str or '...' in title_str:
                findings["title_semantic_bugs"].append((fpath, f"HTML / Glitch artifact: {title_str}"))
            if title_str.lower().startswith('index '):
                findings["title_semantic_bugs"].append((fpath, f"Title starts with 'Index': {title_str}"))

    # Check Meta Description
    desc_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'content': True, 'name': 'Description'})
    if not desc_tag or not desc_tag.get('content'):
        if not is_admin:
            findings["desc_semantic_bugs"].append((fpath, "Missing meta description"))
    else:
        desc_str = desc_tag.get('content', '').strip()
        if not is_admin:
            for bw in ['undefined', 'null', 'nan', '[state]', '[district]', '{title}', 'lorem']:
                if bw in desc_str.lower():
                    findings["desc_semantic_bugs"].append((fpath, f"Contains placeholder/bug word '{bw}'"))
            if len(desc_str) > 165:
                findings["desc_length_bugs"].append((fpath, len(desc_str), desc_str[:60] + "..."))
            if len(desc_str) < 50:
                findings["desc_length_bugs"].append((fpath, len(desc_str), "Too short (<50 chars)"))

    # Check Canonical Tag
    canonical_tag = soup.find('link', attrs={'rel': 'canonical'})
    if not canonical_tag or not canonical_tag.get('href'):
        if not is_admin:
            findings["canonical_errors"].append((fpath, "Missing canonical tag"))
    else:
        c_href = canonical_tag.get('href', '').strip()
        if not c_href.startswith('https://sarkarisewaindia.com/'):
            findings["canonical_errors"].append((fpath, f"Invalid domain in canonical: {c_href}"))

    # Check Mojibake Encoding
    if re.search(r'[à-ÿ]{3,}', content) or '\u008d' in content or 'â€™' in content or 'Ã©' in content:
        findings["mojibake_encoding_bugs"].append(fpath)

    # Check Negative / Broken Fallback texts
    if "No verified CSC found" in content or "currently updating our database for this location" in content or "Fetching nearest centers securely..." in content:
        findings["negative_fallback_texts"].append(fpath)

    # Check Template Placeholder Leaks
    if "{{ " in content or "{{" in content or "[State]" in content or "[District]" in content:
        # ignore normal curly braces in script / css
        clean_text = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL)
        clean_text = re.sub(r'<style.*?</style>', '', clean_text, flags=re.DOTALL)
        if "{{ " in clean_text or "[State]" in clean_text:
            findings["template_placeholder_leaks"].append(fpath)

# -----------------------------------------------------------------------------
# 3. SCHEMA & STRUCTURED DATA AUDIT
# -----------------------------------------------------------------------------
print("[Stage 3/6] Auditing JSON-LD Schemas...")

for fpath in all_html_files:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        
    soup = BeautifulSoup(content, 'html.parser')
    schema_tags = soup.find_all('script', attrs={'type': 'application/ld+json'})
    
    for s in schema_tags:
        if s.string:
            try:
                data = json.loads(s.string)
                # Semantic check:
                # If on csc page, make sure it doesn't say "Jan Aushadhi"
                if 'csc-locator' in fpath:
                    raw_s = json.dumps(data)
                    if 'Jan Aushadhi' in raw_s and 'Common Service Centre' not in raw_s:
                        findings["schema_semantic_errors"].append((fpath, "CSC page has Jan Aushadhi schema"))
            except Exception as e:
                findings["json_ld_schema_syntax_errors"].append((fpath, str(e)))

# -----------------------------------------------------------------------------
# 4. INTERNAL LINKS INTEGRITY AUDIT
# -----------------------------------------------------------------------------
print("[Stage 4/6] Auditing Internal Link Integrity (Sample 300 pages)...")

# Sample 300 pages to check internal link references
sample_files = public_html_files[:300]
for fpath in sample_files:
    fdir = os.path.dirname(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    soup = BeautifulSoup(content, 'html.parser')
    for a in soup.find_all('a', href=True):
        href = a['href'].strip()
        if href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:') or href.startswith('http'):
            continue
        # Relative link
        clean_href = href.split('?')[0].split('#')[0]
        if not clean_href: continue
        target_path = os.path.normpath(os.path.join(fdir, clean_href)).replace('\\', '/')
        if not os.path.exists(target_path):
            findings["broken_internal_links"].append((fpath, href, target_path))

# -----------------------------------------------------------------------------
# PRINT RESULTS SUMMARY
# -----------------------------------------------------------------------------
print("\n" + "=" * 80)
print("📊 EXHAUSTIVE DEEP AUDIT RESULTS SUMMARY")
print("=" * 80)

print(f"1. Sitemap XML Syntax Errors:          {len(findings['sitemap_errors'])}")
print(f"2. Sitemap Orphan URLs (missing file):  {len(findings['sitemap_orphan_urls'])}")
print(f"3. Public Files Missing from Sitemap:   {len(findings['sitemap_missing_files'])}")
print(f"4. Public Pages with 'noindex':         {len(findings['noindex_public_pages'])}")
print(f"5. Canonical URL Errors:                {len(findings['canonical_errors'])}")
print(f"6. Title Semantic Bugs:                 {len(findings['title_semantic_bugs'])}")
print(f"7. Meta Description Semantic Bugs:      {len(findings['desc_semantic_bugs'])}")
print(f"8. Meta Description Length Issues:      {len(findings['desc_length_bugs'])}")
print(f"9. Mojibake Encoding Corruptions:       {len(findings['mojibake_encoding_bugs'])}")
print(f"10. Negative / Apologetic Fallback Text:{len(findings['negative_fallback_texts'])}")
print(f"11. Template Placeholder Leaks:         {len(findings['template_placeholder_leaks'])}")
print(f"12. JSON-LD Schema Syntax Errors:       {len(findings['json_ld_schema_syntax_errors'])}")
print(f"13. JSON-LD Schema Semantic Errors:     {len(findings['schema_semantic_errors'])}")
print(f"14. Broken Internal Relative Links:     {len(findings['broken_internal_links'])}")

print("\n" + "=" * 80)
print("📋 DETAILED BREAKDOWN OF DETECTED ISSUES:")
print("=" * 80)

for k, v in findings.items():
    if len(v) > 0:
        print(f"\n🔹 {k.upper()} ({len(v)} items):")
        for item in v[:10]:
            print(f"   • {item}")
        if len(v) > 10:
            print(f"   ... and {len(v) - 10} more.")

if all(len(v) == 0 for v in findings.values()):
    print("\n🎉 CONGRATULATIONS! ZERO ISSUES FOUND ACROSS ALL 14 AUDIT CATEGORIES!")
