import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Fix 1: updates/*.html relative paths
update_files = sorted(glob.glob('updates/*.html'))
print(f"Auditing {len(update_files)} update files...")

update_fixed = 0
for uf in update_files:
    with open(uf, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    orig_html = html
    # replace ../../ with ../ for root folders
    html = re.sub(r'href=["\']\.\./\.\./(tools|states|category|jobs|exams|blog|support|index\.html|search\.html)', r'href="../\1', html)
    html = re.sub(r'src=["\']\.\./\.\./assets/', r'src="../assets/', html)
    html = re.sub(r'href=["\']\.\./\.\./assets/', r'href="../assets/', html)
    
    if html != orig_html:
        with open(uf, 'w', encoding='utf-8') as fp:
            fp.write(html)
        update_fixed += 1

print(f"Fixed navigation links in {update_fixed} update files.")

# Fix 2: csc locator state filenames mismatch in sidebars
csc_files = sorted(glob.glob('service/csc-locator/**/*.html', recursive=True))
print(f"Auditing {len(csc_files)} CSC files...")

csc_fixed = 0
for cf in csc_files:
    with open(cf, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    orig_html = html
    html = html.replace('../jammu-and-kashmir.html', '../jammu-kashmir.html')
    html = html.replace('../andaman-and-nicobar.html', '../andaman-nicobar.html')
    html = html.replace('../dadra-and-nagar-haveli.html', '../dadra-nagar-haveli.html')
    html = html.replace('../../tools/', '../../../tools/')
    html = html.replace('../../service/', '../../../service/')
    
    if html != orig_html:
        with open(cf, 'w', encoding='utf-8') as fp:
            fp.write(html)
        csc_fixed += 1

print(f"Fixed relative paths in {csc_fixed} CSC district files.")

# Fix 3: partials/footer.html and any other partials
for pf in glob.glob('partials/*.html'):
    with open(pf, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    orig_html = html
    html = html.replace('href="states/index.html"', 'href="/states/index.html"')
    html = html.replace('href="tools/index.html"', 'href="/tools/index.html"')
    if html != orig_html:
        with open(pf, 'w', encoding='utf-8') as fp:
            fp.write(html)
        print(f"Fixed partial: {pf}")

print("Done fixing link patterns!")
