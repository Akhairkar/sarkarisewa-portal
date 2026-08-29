import glob
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html_files = glob.glob('**/*.html', recursive=True)
all_html_files = [f.replace('\\', '/') for f in all_html_files]

# Strict exclusions
admin_root_files = [
    'dashboard.html', 'analytics.html', 'blog.html', 'comments.html',
    'csc.html', 'deadlines.html', 'exams.html', 'jobs.html',
    'services.html', 'subscribers.html', '404.html', 'service/service.html'
]

valid_sitemap_urls = []
base_url = "https://sarkarisewaindia.com"

for fpath in sorted(all_html_files):
    if fpath.startswith('admin/') or fpath.startswith('admin\\') or fpath.startswith('.'):
        continue
    if fpath in admin_root_files:
        continue
        
    priority = "0.6"
    changefreq = "monthly"
    
    if fpath == "index.html":
        priority = "1.0"
        changefreq = "daily"
    elif fpath.startswith("tools/"):
        priority = "0.9"
        changefreq = "weekly"
    elif fpath.startswith("states/") and "/" not in fpath[7:]: # state hubs
        priority = "0.8"
        changefreq = "weekly"
    elif fpath.startswith("service/") and fpath.count('/') == 1: # central services
        priority = "0.8"
        changefreq = "weekly"
    elif fpath.startswith("service/csc-locator/") and fpath.count('/') == 2: # csc state hubs
        priority = "0.8"
        changefreq = "weekly"
    elif fpath.startswith("service/csc-locator/"): # csc district pages
        priority = "0.7"
        changefreq = "monthly"
        
    valid_sitemap_urls.append({
        "loc": f"{base_url}/{fpath}",
        "lastmod": "2026-08-29",
        "changefreq": changefreq,
        "priority": priority
    })

# Build valid XML
sitemap_xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap_xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

for item in valid_sitemap_urls:
    sitemap_xml_content += f"""  <url>
    <loc>{item['loc']}</loc>
    <lastmod>{item['lastmod']}</lastmod>
    <changefreq>{item['changefreq']}</changefreq>
    <priority>{item['priority']}</priority>
  </url>\n"""

sitemap_xml_content += '</urlset>\n'

with open('sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_xml_content)

print(f"✅ Generated 100% valid XML sitemap.xml with {len(valid_sitemap_urls)} public indexable URLs (0 admin links anywhere).")
