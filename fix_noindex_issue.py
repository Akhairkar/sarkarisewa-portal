import glob
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 60)
print("🔧 REMOVING ACCIDENTAL NOINDEX FROM CSC & STATE PAGES")
print("=" * 60)

# 1. Process CSC State Hub Pages (e.g. service/csc-locator/uttar-pradesh.html)
csc_state_pages = glob.glob('service/csc-locator/*.html')
fixed_states = 0
for fpath in csc_state_pages:
    fname = os.path.basename(fpath)
    if fname in ['index.html']:
        continue
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    
    # Remove noindex tag if present
    if re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', html, re.IGNORECASE) or \
       re.search(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', html, re.IGNORECASE):
        
        # Replace with index, follow
        html = re.sub(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
        html = re.sub(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
        
        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(html)
        fixed_states += 1

print(f"1. Fixed CSC State Hub Pages: {fixed_states} pages unblocked (index, follow enabled)")

# 2. Process CSC District Pages (e.g. service/csc-locator/maharashtra/nagpur.html)
csc_district_pages = glob.glob('service/csc-locator/*/*.html')
fixed_districts = 0
kept_empty_noindex = 0

for fpath in csc_district_pages:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    centers_count = len(re.findall(r'class=["\'][^"\']*(?:csc-card|center-card|store-card|directory-card)[^"\']*["\']', html))
    
    if centers_count > 0:
        # Should be indexed!
        if re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', html, re.IGNORECASE) or \
           re.search(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', html, re.IGNORECASE):
            
            html = re.sub(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
            html = re.sub(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\'][^>]*>', '<meta name="robots" content="max-image-preview:large, index, follow"/>', html, flags=re.IGNORECASE)
            
            with open(fpath, 'w', encoding='utf-8') as fp:
                fp.write(html)
            fixed_districts += 1
    else:
        # Keep noindex on genuinely empty pages
        if not (re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', html, re.IGNORECASE) or \
                re.search(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', html, re.IGNORECASE)):
            # Add noindex if missing
            html = re.sub(r'(<head[^>]*>)', r'\1\n<meta name="robots" content="noindex, follow"/>', html, count=1, flags=re.IGNORECASE)
            with open(fpath, 'w', encoding='utf-8') as fp:
                fp.write(html)
        kept_empty_noindex += 1

print(f"2. Fixed CSC District Pages with real center data: {fixed_districts} pages unblocked (index, follow enabled)")
print(f"3. Kept noindex for genuinely empty CSC district pages: {kept_empty_noindex} pages")

print("=" * 60)
print(f"🎉 TOTAL PAGES UNBLOCKED & RESTORED TO GOOGLE INDEX: {fixed_states + fixed_districts}")
print("=" * 60)
