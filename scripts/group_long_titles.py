import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = sorted(glob.glob('**/*.html', recursive=True))
all_html = [f for f in all_html if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

long_titles = []
for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    tm = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    if tm:
        t = tm.group(1).strip()
        if len(t) > 70:
            long_titles.append((f, len(t), t))

print(f"Total titles > 70 chars: {len(long_titles)}")
# Group by directory
dirs = {}
for f, l, t in long_titles:
    d = os.path.dirname(f) or '.'
    dirs[d] = dirs.get(d, 0) + 1

for d, count in sorted(dirs.items(), key=lambda x: x[1], reverse=True):
    print(f" - {d}: {count} files")

print("\nSample titles from each directory:")
for d in dirs:
    sample = [item for item in long_titles if (os.path.dirname(item[0]) or '.') == d][0]
    print(f"[{d}] ({sample[1]} chars): {sample[2]}")
