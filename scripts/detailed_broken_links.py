import os
import glob
import re
from urllib.parse import unquote
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.getcwd()
html_files = sorted(glob.glob('**/*.html', recursive=True))
html_files = [f for f in html_files if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

broken_by_file = {}
for file_path in html_files:
    file_dir = os.path.dirname(file_path)
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()

    matches = re.findall(r'(?:href|src)=["\']([^"\'#?]+)["\']', content, re.IGNORECASE)
    for link in matches:
        link = link.strip()
        if not link or link.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:', 'data:', '#')):
            continue
            
        target_path = os.path.normpath(os.path.join(file_dir, unquote(link)))
        if not os.path.exists(target_path):
            if link not in broken_by_file:
                broken_by_file[link] = []
            broken_by_file[link].append((file_path, target_path))

print(f"Unique broken link patterns: {len(broken_by_file)}")
for link, sources in sorted(broken_by_file.items(), key=lambda x: len(x[1]), reverse=True)[:25]:
    sample_src = sources[0][0]
    sample_tgt = sources[0][1]
    print(f"Pattern: '{link}' (Count: {len(sources)})")
    print(f"   Sample source: {sample_src}")
    print(f"   Resolved target: {sample_tgt}")
