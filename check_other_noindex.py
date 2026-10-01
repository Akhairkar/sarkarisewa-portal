import glob
import os
import re

all_html = glob.glob('**/*.html', recursive=True)
all_html = [f.replace('\\', '/') for f in all_html if not f.startswith('admin') and not f.startswith('.')]

others = []
for fpath in all_html:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    if re.search(r'<meta\s+[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex[^"\']*["\']', content, re.IGNORECASE) or \
       re.search(r'<meta\s+[^>]*content=["\'][^"\']*noindex[^"\']*["\'][^>]*name=["\']robots["\']', content, re.IGNORECASE):
        if not fpath.startswith('service/csc-locator/'):
            others.append(fpath)

print("Other noindex pages:")
for p in others:
    print(" -", p)
