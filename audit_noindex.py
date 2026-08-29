import glob
import os
import re
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

all_html = glob.glob('**/*.html', recursive=True)
all_html = [f.replace('\\', '/') for f in all_html if not f.startswith('admin') and not f.startswith('.')]

print(f"Total HTML files to inspect: {len(all_html)}")

noindex_files = []

for fpath in all_html:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    # Check for noindex in meta tags
    if re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', content, re.IGNORECASE) or \
       re.search(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', content, re.IGNORECASE):
        
        # Analyze file content
        has_centers = len(re.findall(r'class=["\'][^"\']*(?:csc-card|center-card|store-card|directory-card)[^"\']*["\']', content))
        has_district_links = len(re.findall(r'href=["\'][^"\']*\.html["\']', content))
        
        noindex_files.append({
            "path": fpath,
            "centers": has_centers,
            "links": has_district_links,
            "is_csc_district": fpath.startswith('service/csc-locator/') and fpath.count('/') == 3,
            "is_csc_state": fpath.startswith('service/csc-locator/') and fpath.count('/') == 2,
            "is_state_hub": fpath.startswith('states/')
        })

print(f"\nTotal files with 'noindex' tag: {len(noindex_files)}")

csc_districts_with_data = [f for f in noindex_files if f['is_csc_district'] and f['centers'] > 0]
csc_districts_empty = [f for f in noindex_files if f['is_csc_district'] and f['centers'] == 0]
csc_states = [f for f in noindex_files if f['is_csc_state']]
state_hubs = [f for f in noindex_files if f['is_state_hub']]
others = [f for f in noindex_files if not f['is_csc_district'] and not f['is_csc_state'] and not f['is_state_hub']]

print(f"- CSC District Pages with real center data (>0 centers) but marked NOINDEX: {len(csc_districts_with_data)}")
print(f"- CSC District Pages with 0 centers (genuinely empty): {len(csc_districts_empty)}")
print(f"- CSC State Hub Pages marked NOINDEX: {len(csc_states)}")
print(f"- States Module Pages marked NOINDEX: {len(state_hubs)}")
print(f"- Other pages marked NOINDEX: {len(others)}")

