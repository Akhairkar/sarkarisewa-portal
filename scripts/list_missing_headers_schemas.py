import os
import glob
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = sorted(glob.glob('**/*.html', recursive=True))
all_html = [f for f in all_html if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

missing_hdr = []
missing_sch = []

for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'site-header' not in c and 'header-inner' not in c:
        missing_hdr.append(f)
    if 'application/ld+json' not in c:
        missing_sch.append(f)

print(f"Total Missing Header ({len(missing_hdr)}):")
for f in missing_hdr[:30]:
    print(" -", f)

print(f"\nTotal Missing Schema ({len(missing_sch)}):")
for f in missing_sch[:30]:
    print(" -", f)
