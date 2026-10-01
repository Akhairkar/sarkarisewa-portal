import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Search for Jan Seva Kendra in header and CSS
with open('partials/header.html', 'r', encoding='utf-8', errors='ignore') as fp:
    header_html = fp.read()

print("--- partials/header.html navigation links ---")
for line in header_html.split('\n'):
    if 'jan-seva' in line.lower() or 'csc' in line.lower() or 'kendra' in line.lower() or 'nav' in line.lower():
        print(line)

print("\n--- Searching CSS for header button and Jan Seva Kendra / CSC styling ---")
for css_file in glob.glob('assets/css/*.css'):
    with open(css_file, 'r', encoding='utf-8', errors='ignore') as fp:
        css = fp.read()
    if 'csc' in css.lower() or 'kendra' in css.lower() or 'header' in css.lower():
        matches = re.findall(r'(\.[a-zA-Z0-9_\-\:]+\s*\{[^}]*\})', css)
        for m in matches:
            if 'csc' in m.lower() or 'kendra' in m.lower() or ('header' in m.lower() and 'color' in m.lower()):
                print(f"[{os.path.basename(css_file)}]: {m[:120]}...")
