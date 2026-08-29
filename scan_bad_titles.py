import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = glob.glob('**/*.html', recursive=True)
bad_titles = []

for fpath in all_html:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()
    m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE | re.DOTALL)
    if m:
        t = m.group(1).strip()
        if '...' in t or '<span' in t or '2026 2026' in t:
            bad_titles.append((fpath, t))

print(f"Found {len(bad_titles)} files with glitched titles:")
for f, t in bad_titles:
    print(f"  {f}: {t}")
