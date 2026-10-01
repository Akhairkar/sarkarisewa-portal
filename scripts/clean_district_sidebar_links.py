import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Fix 1: Jan Aushadhi district links in CSC locator pages
csc_files = sorted(glob.glob('service/csc-locator/**/*.html', recursive=True))
print(f"Auditing {len(csc_files)} CSC files for Jan Aushadhi links...")

fixed_ja_count = 0
for cf in csc_files:
    file_dir = os.path.dirname(cf)
    with open(cf, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    orig = html
    
    # Replace andaman-and-nicobar with andaman-nicobar in jan-aushadhi links
    html = html.replace('/jan-aushadhi/andaman-and-nicobar/', '/jan-aushadhi/andaman-nicobar/')
    
    # Check all jan-aushadhi links in this file
    ja_links = re.findall(r'href=["\']([^"\']*jan-aushadhi/[^"\']*)["\']', html)
    for jl in ja_links:
        resolved = os.path.normpath(os.path.join(file_dir, jl))
        if not os.path.exists(resolved):
            # Fallback to state jan aushadhi page
            # e.g. ../../../service/jan-aushadhi/andhra-pradesh.html
            parts = jl.split('/')
            # find state name in parts
            state_name = ""
            for i, p in enumerate(parts):
                if p == 'jan-aushadhi' and i + 1 < len(parts):
                    state_name = parts[i+1]
                    break
            if state_name:
                state_name_clean = state_name.replace('.html', '')
                # check if state hub exists
                state_hub_rel = f"../../../service/jan-aushadhi/{state_name_clean}.html"
                if os.path.exists(os.path.normpath(os.path.join(file_dir, state_hub_rel))):
                    html = html.replace(jl, state_hub_rel)
                    
    if html != orig:
        with open(cf, 'w', encoding='utf-8') as fp:
            fp.write(html)
        fixed_ja_count += 1

print(f"Fixed Jan Aushadhi links in {fixed_ja_count} CSC files.")

# Fix 2: csc-locator index files district links
for idx_file in glob.glob('service/csc-locator/*/index.html'):
    state_dir = os.path.dirname(idx_file)
    state_name = os.path.basename(state_dir)
    with open(idx_file, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    orig = html
    
    # Find all href="dist.html" and ensure dist.html exists in that state_dir
    dist_links = re.findall(r'href=["\']([a-zA-Z0-9\-]+\.html)["\']', html)
    for dl in dist_links:
        if dl != 'index.html' and not os.path.exists(os.path.join(state_dir, dl)):
            # Remove link or fix
            html = html.replace(f'href="{dl}"', f'href="../{state_name}.html"')
            
    if html != orig:
        with open(idx_file, 'w', encoding='utf-8') as fp:
            fp.write(html)
        print(f"Cleaned invalid district links in {idx_file}")

print("Done cleaning district sidebar and index links!")
