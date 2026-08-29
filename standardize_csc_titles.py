import os
import glob
import re
from bs4 import BeautifulSoup

csc_files = glob.glob('service/csc-locator/*/*.html')
print(f"Total CSC district files to standardize: {len(csc_files)}")

def clean_name(slug):
    return slug.replace('-', ' ').title()

updated_count = 0

for fpath in csc_files:
    parts = fpath.replace('\\', '/').split('/')
    state_slug = parts[2]
    district_slug = parts[3].replace('.html', '')
    
    state_name = clean_name(state_slug)
    district_name = clean_name(district_slug)
    
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # Count real static center cards in HTML
    # Centers are in <div class="csc-card"> or <div class="center-card"> or similar
    center_matches = re.findall(r'class=["\'][^"\']*(?:csc-card|center-card|store-card|directory-card)[^"\']*["\']', html)
    real_count = len(center_matches)

    # Standardize Title
    if real_count > 0:
        title = f"{district_name} ({state_name}) CSC Center List 2026 | ({real_count} Centers)"
    else:
        title = f"{district_name} ({state_name}) CSC Center List 2026 | Jan Seva Kendra"

    if len(title) > 65:
        # shorten
        if real_count > 0:
            title = f"{district_name} CSC Center List 2026 | {state_name} ({real_count} Centers)"
        else:
            title = f"{district_name} CSC Center List 2026 | {state_name} Jan Seva Kendra"

    # Standardize Meta Description (145-155 chars)
    if real_count > 0:
        desc = f"{district_name} ({state_name}) ke verified {real_count} CSC Digital Seva Kendra ki complete list 2026. Address, phone number aur Google Maps navigation direct yahan dekhein."
    else:
        desc = f"{district_name} ({state_name}) ke verified CSC Jan Seva Kendra ka address, contact number aur Google Maps location. Online services aur government schemes guide."

    # Keep desc under 160 chars
    if len(desc) > 158:
        desc = desc[:155].rsplit(' ', 1)[0] + "."

    # Inject Title
    title_tag = f"<title>{title}</title>"
    if re.search(r'<title>.*?</title>', html, re.IGNORECASE | re.DOTALL):
        html = re.sub(r'<title>.*?</title>', title_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)
    else:
        html = re.sub(r'(<head.*?>)', r'\1\n' + title_tag, html, count=1, flags=re.IGNORECASE)

    # Inject Meta Description
    desc_tag = f'<meta name="description" content="{desc}"/>'
    if re.search(r'<meta\s+name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)
    elif re.search(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<title>.*?</title>)', r'\1\n' + desc_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)

    # OpenGraph tags
    og_title = f'<meta property="og:title" content="{title}"/>'
    og_desc = f'<meta property="og:description" content="{desc}"/>'
    html = re.sub(r'<meta\s+property=["\']og:title["\'][^>]*>', og_title, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+property=["\']og:description["\'][^>]*>', og_desc, html, count=1, flags=re.IGNORECASE)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(html)
    updated_count += 1

print(f"Standardized titles and descriptions for {updated_count} CSC district pages.")
