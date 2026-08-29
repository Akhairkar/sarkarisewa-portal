import os
import glob
from bs4 import BeautifulSoup

all_html = glob.glob('**/*.html', recursive=True)
# exclude node_modules, admin, git, test
all_html = [f for f in all_html if not f.startswith('admin') and not f.startswith('.')]

print(f"Total HTML files to analyze: {len(all_html)}")

thin_pages = []

for filepath in all_html:
    size = os.path.getsize(filepath)
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    text = soup.get_text(separator=' ', strip=True)
    word_count = len(text.split())
    
    # Check if page lacks body content or is very thin
    if word_count < 250 and not filepath.startswith('service/csc-locator'):
        thin_pages.append((filepath, word_count, size))

print(f"\nFound {len(thin_pages)} thin pages (< 250 words):")
for p, wc, sz in sorted(thin_pages, key=lambda x: x[1]):
    print(f"  - {p:<45} | Words: {wc:4d} | Size: {sz:6d} bytes")
