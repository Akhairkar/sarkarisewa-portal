# -*- coding: utf-8 -*-
import os, sys, re
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Gather all existing files (HTML, CSS, JS, Images, JSON, etc.)
existing_files = set()
all_html = []
for root, dirs, files in os.walk(ROOT):
    if '.git' in dirs: dirs.remove('.git')
    for f in files:
        f_abs = os.path.join(root, f)
        rel = os.path.relpath(f_abs, ROOT).replace('\\', '/').lower()
        existing_files.add(rel)
        if f.endswith('.html'):
            all_html.append(f_abs)

broken = []
for f in all_html:
    rel_src = os.path.relpath(f, ROOT).replace('\\', '/')
    src_dir = os.path.dirname(f)
    try:
        with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
            content = fp.read()
    except:
        continue
        
    # Check hrefs and src
    for m in re.finditer(r'(?:href|src)=["\'](.*?)["\']', content, re.IGNORECASE):
        href = m.group(1).strip()
        if not href or href.startswith('#') or href.startswith('http') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:'):
            continue
        href_clean = href.split('#')[0].split('?')[0]
        if not href_clean: continue
        
        target_path = os.path.normpath(os.path.join(src_dir, href_clean))
        target_rel = os.path.relpath(target_path, ROOT).replace('\\', '/').lower()
        
        if target_rel not in existing_files:
            broken.append((href, target_rel, rel_src))

print(f"Total HTML files checked: {len(all_html)}")
print(f"Total REAL broken link/asset occurrences: {len(broken)}")

c = Counter([b[0] for b in broken])
print(f"\nTop 40 Distinct Broken Targets (Total {len(c)} distinct):")
for href, cnt in c.most_common(40):
    sample = next(b[2] for b in broken if b[0] == href)
    print(f"  {href:60} | count={cnt:4d} | from={sample}")
