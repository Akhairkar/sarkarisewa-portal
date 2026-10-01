# -*- coding: utf-8 -*-
"""
FIX CSC LOCATOR DISTRICT PAGES SYNTAX & CLOSING TAGS
===================================================
1. Inserts </main> before <div id="site-footer"> if missing
2. Replaces literal '\\n' with actual newline
"""

import os, sys, re, glob

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
csc_files = glob.glob(os.path.join(ROOT, 'service', 'csc-locator', '*', '*.html'))

print(f"Found {len(csc_files)} CSC district files to audit...")

fixed = 0
for fpath in csc_files:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    orig = c
    
    # 1. Fix literal \n
    c = c.replace(r'\n</body>', '\n</body>')
    c = c.replace(r'\n</html>', '\n</html>')
    
    # 2. Fix missing </main>
    if '<main' in c and '</main>' not in c:
        # Insert </main> right before <div id="site-footer"> or <footer
        if '<div id="site-footer">' in c:
            c = c.replace('<div id="site-footer">', '</main>\n\n<div id="site-footer">')
        elif '<footer' in c:
            c = re.sub(r'(\s*<footer)', r'\n</main>\n\1', c, count=1)
            
    if c != orig:
        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(c)
        fixed += 1

print(f"✅ Fixed syntax & <main> tags in {fixed} CSC district files!")
