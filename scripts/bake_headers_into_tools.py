# -*- coding: utf-8 -*-
"""
PRE-BAKE STANDARD HEADER & FOOTER INTO CITIZEN TOOLS
"""

import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Extract baked header and footer template from tools/csc-locator.html
with open(os.path.join(ROOT, 'tools', 'csc-locator.html'), 'r', encoding='utf-8', errors='ignore') as fp:
    csc_content = fp.read()

header_match = re.search(r'(<div id=["\']site-header["\'][^>]*>.*?</div>\s*</div>)', csc_content, re.DOTALL)
if not header_match:
    # Try site-header to closing div
    header_match = re.search(r'(<div id=["\']site-header["\'][^>]*>.*?</header>\s*</div>)', csc_content, re.DOTALL)
    
baked_header = header_match.group(1) if header_match else None

# Footer template
footer_match = re.search(r'(<footer class=["\']site-footer["\'][^>]*>.*?</footer>)', csc_content, re.DOTALL)
baked_footer = footer_match.group(1) if footer_match else None

print("Baked Header found:", bool(baked_header), "Length:", len(baked_header) if baked_header else 0)
print("Baked Footer found:", bool(baked_footer), "Length:", len(baked_footer) if baked_footer else 0)

target_tools = [
    'tools/eligibility-checker.html',
    'tools/document-checklist.html',
    'tools/status-troubleshooter.html'
]

for rel in target_tools:
    fpath = os.path.join(ROOT, rel)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    # Replace <div id="site-header"></div> with baked_header
    if '<div id="site-header"></div>' in c and baked_header:
        c = c.replace('<div id="site-header"></div>', baked_header)
        
    # Replace <div id="site-footer"></div> with <div id="site-footer">\n' + baked_footer + '\n</div>
    if '<div id="site-footer"></div>' in c and baked_footer:
        c = c.replace('<div id="site-footer"></div>', f'<div id="site-footer">\n{baked_footer}\n</div>')
        
    with open(fpath, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print(f"Updated {rel} with baked header & footer!")
