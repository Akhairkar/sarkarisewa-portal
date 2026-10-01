import os
import glob
import re
from urllib.parse import urlparse, unquote
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.getcwd()
html_files = sorted(glob.glob('**/*.html', recursive=True))
# Exclude node_modules, .git, etc.
html_files = [f for f in html_files if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

print(f"Total HTML files to audit for internal links: {len(html_files)}")

broken_links = []
total_links_checked = 0

for file_path in html_files:
    file_dir = os.path.dirname(file_path)
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()

    # Find all href and src
    # Match href="...", src="..."
    matches = re.findall(r'(?:href|src)=["\']([^"\'#?]+)["\']', content, re.IGNORECASE)
    
    for link in matches:
        link = link.strip()
        if not link or link.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:', 'data:', '#')):
            continue
            
        total_links_checked += 1
        
        # Resolve path
        target_path = os.path.normpath(os.path.join(file_dir, unquote(link)))
        
        if not os.path.exists(target_path):
            broken_links.append({
                "source": file_path,
                "link": link,
                "target_resolved": target_path
            })

print(f"Total internal relative links checked: {total_links_checked}")
print(f"Broken links found: {len(broken_links)}")

# Group broken links by target pattern
target_counts = {}
for b in broken_links:
    t = b["link"]
    target_counts[t] = target_counts.get(t, 0) + 1

sorted_targets = sorted(target_counts.items(), key=lambda x: x[1], reverse=True)
print(f"\nTop 20 most frequent broken link patterns:")
for target, count in sorted_targets[:20]:
    print(f" - {count} occurrences: {target}")
