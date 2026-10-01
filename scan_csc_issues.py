import glob
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("--- SCANNING CSC PAGES FOR BUGS ---")

csc_files = glob.glob('service/csc-locator/**/*.html', recursive=True)
print(f"Total CSC files: {len(csc_files)}")

index_title_files = []
no_csc_found_files = []
noindex_csc_files = []

for f in csc_files:
    f_clean = f.replace('\\', '/')
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    title = m.group(1).strip() if m else ""
    
    if "Index" in title or "index" in title.lower():
        index_title_files.append((f_clean, title))
        
    if "No verified CSC found" in c or "currently updating our database for this location" in c:
        no_csc_found_files.append(f_clean)
        
    if 'noindex' in c.lower() and 'name="robots"' in c.lower():
        noindex_csc_files.append(f_clean)

print(f"\n1. Files with 'Index' in Title: {len(index_title_files)}")
for f, t in index_title_files[:10]:
    print(f"   - {f}: {t}")

print(f"\n2. Files with 'No verified CSC found' text: {len(no_csc_found_files)}")
for f in no_csc_found_files[:10]:
    print(f"   - {f}")

print(f"\n3. Files with 'noindex' in service/csc-locator: {len(noindex_csc_files)}")
for f in noindex_csc_files[:10]:
    print(f"   - {f}")
