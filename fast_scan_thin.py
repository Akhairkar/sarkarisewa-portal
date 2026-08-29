import os
import glob
import re

all_html = glob.glob('**/*.html', recursive=True)
all_html = [f for f in all_html if not f.startswith('admin') and not f.startswith('.') and not f.startswith('service\\csc-locator')]

print(f"Total HTML files to analyze: {len(all_html)}")

thin_pages = []

for filepath in all_html:
    size = os.path.getsize(filepath)
    if size < 4000: # Under 4KB is suspicious for a guide page
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        # strip tags
        text = re.sub(r'<[^>]+>', ' ', content)
        words = len(text.split())
        if words < 300:
            thin_pages.append((filepath, words, size))

print(f"\nFound {len(thin_pages)} thin pages (< 300 words & < 4KB):")
for p, wc, sz in sorted(thin_pages, key=lambda x: x[1]):
    print(f"  - {p:<45} | Words: {wc:4d} | Size: {sz:6d} bytes")
