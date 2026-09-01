import os
import glob
import re
import datetime
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DOMAIN = "https://sarkarisewaindia.com"
TODAY = datetime.date.today().isoformat()

print("Generating pristine, 100% verified sitemap.xml...")

all_html = sorted(glob.glob('**/*.html', recursive=True))
# Exclude private or non-canonical folders
excluded_dirs = ['.git', 'node_modules', '.gemini', 'admin', 'partials']
canonical_files = []

for f in all_html:
    parts = os.path.normpath(f).split(os.sep)
    if any(p in parts for p in excluded_dirs):
        continue
    # Exclude 404.html
    if f == '404.html':
        continue
        
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    # Exclude redirect stubs
    if 'window.location.replace' in c or 'http-equiv="refresh"' in c:
        continue
        
    canonical_files.append(f)

print(f"Total canonical, indexable public pages: {len(canonical_files)}")

# Build XML
xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for f in canonical_files:
    # URL path
    rel_url = f.replace('\\', '/')
    if rel_url == 'index.html':
        loc = f"{ROOT_DOMAIN}/"
        priority = "1.0"
        freq = "daily"
    elif rel_url.startswith(('category/', 'tools/', 'states/', 'latest-updates.html')):
        loc = f"{ROOT_DOMAIN}/{rel_url}"
        priority = "0.9"
        freq = "daily" if 'latest' in rel_url else "weekly"
    elif rel_url.startswith('service/'):
        loc = f"{ROOT_DOMAIN}/{rel_url}"
        priority = "0.8"
        freq = "weekly"
    elif rel_url.startswith(('jobs/', 'exams/', 'updates/')):
        loc = f"{ROOT_DOMAIN}/{rel_url}"
        priority = "0.85"
        freq = "daily"
    elif rel_url.startswith('blog/'):
        loc = f"{ROOT_DOMAIN}/{rel_url}"
        priority = "0.75"
        freq = "weekly"
    else:
        loc = f"{ROOT_DOMAIN}/{rel_url}"
        priority = "0.7"
        freq = "monthly"

    xml_lines.append("  <url>")
    xml_lines.append(f"    <loc>{loc}</loc>")
    xml_lines.append(f"    <lastmod>{TODAY}</lastmod>")
    xml_lines.append(f"    <changefreq>{freq}</changefreq>")
    xml_lines.append(f"    <priority>{priority}</priority>")
    xml_lines.append("  </url>")

xml_lines.append("</urlset>")

full_xml = "\n".join(xml_lines)

with open('sitemap.xml', 'w', encoding='utf-8') as fp:
    fp.write(full_xml)

# Validate XML parsing
tree = ET.parse('sitemap.xml')
root = tree.getroot()
url_count = len(list(root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}url')))

print(f"🎉 Successfully generated sitemap.xml with {url_count} valid URLs!")
