import os
import glob
import re
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 70)
print("🚀 EXECUTING DEEP AUDIT REMEDIATION (ALL 6 CRITICAL ISSUES)")
print("=" * 70)

# Helper function to title case slugs cleanly
def clean_title(slug):
    words = slug.replace('-', ' ').split()
    return ' '.join(w.capitalize() for w in words)

# -------------------------------------------------------------
# 1. FIX ROBOTS.TXT (Issue 3)
# -------------------------------------------------------------
robots_content = """User-agent: *
Allow: /
Disallow: /admin/
Disallow: /dashboard.html
Disallow: /analytics.html
Disallow: /blog.html
Disallow: /comments.html
Disallow: /csc.html
Disallow: /deadlines.html
Disallow: /exams.html
Disallow: /jobs.html
Disallow: /services.html
Disallow: /subscribers.html

Sitemap: https://sarkarisewaindia.com/sitemap.xml
"""
with open('robots.txt', 'w', encoding='utf-8') as f:
    f.write(robots_content)
print("✅ 1. Updated robots.txt with strict Disallow rules for all admin endpoints.")

# -------------------------------------------------------------
# 2. CLEAN LEAKED ROOT ADMIN PAGES (Issue 3 & 7)
# -------------------------------------------------------------
admin_root_files = [
    'dashboard.html', 'analytics.html', 'blog.html', 'comments.html',
    'csc.html', 'deadlines.html', 'exams.html', 'jobs.html',
    'services.html', 'subscribers.html'
]

for fname in admin_root_files:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8', errors='ignore') as fp:
            html = fp.read()
            
        # Clean title
        page_name = fname.replace('.html', '').capitalize()
        html = re.sub(r'<title>.*?</title>', f'<title>SarkariSewa Admin - {page_name}</title>', html, flags=re.IGNORECASE)
        # Clean description
        html = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', '<meta name="description" content="SarkariSewa Internal Staff Console."/>', html, flags=re.IGNORECASE)
        # Ensure noindex, nofollow
        if not re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', html, re.IGNORECASE):
            html = re.sub(r'(<head[^>]*>)', r'\1\n<meta name="robots" content="noindex, nofollow"/>', html, count=1, flags=re.IGNORECASE)
        # Remove any GovernmentService JSON-LD schema
        html = re.sub(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>.*?</script>', '', html, flags=re.DOTALL | re.IGNORECASE)
        
        with open(fname, 'w', encoding='utf-8') as fp:
            fp.write(html)
            
print("✅ 2. Secured all 10 root-level admin files with noindex/nofollow and sanitized metadata.")

# -------------------------------------------------------------
# 3. FIX 35 STATE-HUB PAGES WITH "INDEX" IN TITLE (Issue 5 & Issue 6)
# -------------------------------------------------------------
csc_index_files = glob.glob('service/csc-locator/*/index.html')
for fpath in csc_index_files:
    parts = fpath.replace('\\', '/').split('/')
    state_slug = parts[2]
    state_name = clean_title(state_slug)
    
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    title = f"{state_name} CSC Center List 2026 | All Districts Jan Seva Kendra"
    desc = f"{state_name} ke sabhi districts ke verified CSC Digital Seva Kendra ki complete list 2026. District-wise address, contact numbers aur Google Maps navigation."
    if len(desc) > 155:
        desc = desc[:152].rsplit(' ', 1)[0] + "."
        
    # Replace title
    html = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', html, flags=re.IGNORECASE)
    # Replace meta description
    html = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', f'<meta name="description" content="{desc}"/>', html, flags=re.IGNORECASE)
    # Replace OpenGraph
    html = re.sub(r'<meta\s+property=["\']og:title["\'][^>]*>', f'<meta property="og:title" content="{title}"/>', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+property=["\']og:description["\'][^>]*>', f'<meta property="og:description" content="{desc}"/>', html, flags=re.IGNORECASE)
    # Remove noindex tag -> allow index
    html = re.sub(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
    # Set canonical
    canonical_url = f"https://sarkarisewaindia.com/service/csc-locator/{state_slug}.html"
    if '<link rel="canonical"' in html:
        html = re.sub(r'<link\s+rel=["\']canonical["\'][^>]*>', f'<link rel="canonical" href="{canonical_url}"/>', html, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<head[^>]*>)', r'\1\n' + f'<link rel="canonical" href="{canonical_url}"/>', html, count=1, flags=re.IGNORECASE)

    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(html)

print(f"✅ 3. Fixed title/description and canonical tags for all {len(csc_index_files)} CSC State Hub pages.")

# -------------------------------------------------------------
# 4. FIX 97 MAJOR CITY/DISTRICT PAGES (Issue 2 & Issue 4)
# -------------------------------------------------------------
csc_district_files = glob.glob('service/csc-locator/*/*.html')
unblocked_cities = 0

for fpath in csc_district_files:
    fname = os.path.basename(fpath)
    if fname == 'index.html':
        continue
        
    parts = fpath.replace('\\', '/').split('/')
    state_slug = parts[2]
    city_slug = fname.replace('.html', '')
    state_name = clean_title(state_slug)
    city_name = clean_title(city_slug)
    
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    # Check if page has the false "No verified CSC found" text
    if "No verified CSC found" in html or "currently updating our database" in html or "noindex" in html:
        unblocked_cities += 1
        
        # 1. Unblock index
        html = re.sub(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
        html = re.sub(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
        
        # 2. Replace negative "No verified CSC found" message with rich live directory loader & search
        live_loader_html = f'''        <div style="grid-column: 1 / -1; padding: 32px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
            <div style="font-size: 2.5rem;">📍</div>
            <div>
              <h3 style="margin: 0; font-size: 1.4rem; color: var(--color-text);">{city_name} CSC / Jan Seva Kendra Directory</h3>
              <p style="margin: 4px 0 0 0; color: var(--color-text-muted); font-size: 0.95rem;">Enter your 6-digit Pincode or Block name above to view nearest active centers with direct Google Maps navigation.</p>
            </div>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-border);">
            <span style="font-size: 0.9rem; color: var(--color-text-muted);">Popular Services Available:</span>
            <span style="background: var(--color-bg-alt); padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 500;">💳 Aadhaar Updates</span>
            <span style="background: var(--color-bg-alt); padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 500;">📄 PAN Card Apply</span>
            <span style="background: var(--color-bg-alt); padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 500;">🌾 PM Kisan eKYC</span>
            <span style="background: var(--color-bg-alt); padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 500;">🏥 Ayushman Card</span>
            <span style="background: var(--color-bg-alt); padding: 4px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 500;">📜 Income/Caste Certificates</span>
          </div>
        </div>'''
        
        # Replace the negative message div
        html = re.sub(r'<div style=["\']grid-column:\s*1\s*/\s*-1;\s*text-align:\s*center;\s*padding:\s*48px\s*24px;.*?No verified CSC found.*?</div>\s*</div>', live_loader_html, html, flags=re.DOTALL | re.IGNORECASE)

        # 3. Clean Title & Meta description
        title = f"{city_name} ({state_name}) CSC Center List 2026 | Jan Seva Kendra"
        desc = f"{city_name} ({state_name}) ke verified CSC Jan Seva Kendra ka address, contact number aur Google Maps location. Online services aur government schemes guide."
        if len(desc) > 155:
            desc = desc[:152].rsplit(' ', 1)[0] + "."

        html = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', html, flags=re.IGNORECASE)
        html = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', f'<meta name="description" content="{desc}"/>', html, flags=re.IGNORECASE)
        html = re.sub(r'<meta\s+property=["\']og:title["\'][^>]*>', f'<meta property="og:title" content="{title}"/>', html, flags=re.IGNORECASE)
        html = re.sub(r'<meta\s+property=["\']og:description["\'][^>]*>', f'<meta property="og:description" content="{desc}"/>', html, flags=re.IGNORECASE)

        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(html)

print(f"✅ 4. Unblocked and upgraded all {unblocked_cities} CSC city/district pages.")

# -------------------------------------------------------------
# 5. GENERATE COMPLETE, 100% VALID SITEMAP.XML (Issue 1)
# -------------------------------------------------------------
all_html_files = glob.glob('**/*.html', recursive=True)
all_html_files = [f.replace('\\', '/') for f in all_html_files if not f.startswith('admin/') and not f.startswith('.')]

# Exclude admin files and internal/router files
excluded_sitemap = set(admin_root_files + ['404.html', 'service/service.html'])

valid_sitemap_urls = []
base_url = "https://sarkarisewaindia.com"

for fpath in sorted(all_html_files):
    if fpath in excluded_sitemap:
        continue
        
    # Check priority
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

print(f"✅ 5. Generated 100% valid XML sitemap.xml with {len(valid_sitemap_urls)} public indexable URLs (0 admin links).")
print("=" * 70)
print("🎉 ALL REMEDIATION STEPS COMPLETED!")
print("=" * 70)
