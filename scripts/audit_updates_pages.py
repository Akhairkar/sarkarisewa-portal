import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

update_files = sorted(glob.glob('updates/*.html'))
print(f"Total files in updates/: {len(update_files)}")

long_titles = []
missing_baked_header = []
missing_baked_footer = []
missing_schema = []

for uf in update_files:
    fname = os.path.basename(uf)
    with open(uf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    title_m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    if title_m:
        title = title_m.group(1).strip()
        if len(title) > 65:
            long_titles.append((fname, len(title), title))
            
    if 'class="site-header"' not in c:
        missing_baked_header.append(fname)
        
    if 'class="site-footer"' not in c:
        missing_baked_footer.append(fname)
        
    if 'application/ld+json' not in c:
        missing_schema.append(fname)

print(f"Long titles (> 65 chars): {len(long_titles)} / {len(update_files)}")
print(f"Missing baked header: {len(missing_baked_header)} / {len(update_files)}")
print(f"Missing baked footer: {len(missing_baked_footer)} / {len(update_files)}")
print(f"Missing JSON-LD Schema: {len(missing_schema)} / {len(update_files)}")

if long_titles:
    print("\nSample 5 long titles in updates/:")
    for fname, l, t in long_titles[:5]:
        print(f" - [{l} chars] {fname}: {t}")
