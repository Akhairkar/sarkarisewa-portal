# -*- coding: utf-8 -*-
import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

all_html = []
for root, dirs, files in os.walk(ROOT):
    if '.git' in dirs: dirs.remove('.git')
    for f in files:
        if f.endswith('.html'):
            all_html.append(os.path.join(root, f))

for fpath in all_html:
    rel = os.path.relpath(fpath, ROOT).replace('\\', '/')
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'http-equiv="refresh"' in c and len(c) < 1500: continue
    h_tags = len(re.findall(r'<header[^>]*class=["\'][^"\']*site-header[^"\']*["\']', c, re.I))
    h_divs = len(re.findall(r'<div[^>]*id=["\']site-header["\']', c, re.I))
    if h_tags > 1 or h_divs > 1 or (h_tags == 0 and h_divs == 0):
        print(f"{rel:50} -> tags: {h_tags}, divs: {h_divs}")
