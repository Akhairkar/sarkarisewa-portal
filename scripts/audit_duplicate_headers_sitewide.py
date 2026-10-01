# -*- coding: utf-8 -*-
import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

duplicate_header_files = []
multiple_telegram_files = []

for root, dirs, files in os.walk(ROOT):
    if '.git' in dirs: dirs.remove('.git')
    for f in files:
        if f.endswith('.html'):
            fpath = os.path.join(root, f)
            rel = os.path.relpath(fpath, ROOT).replace('\\', '/')
            try:
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
            except:
                continue
                
            # Count site-headers
            header_count = len(re.findall(r'<header[^>]*class=["\'][^"\']*site-header[^"\']*["\']', content, re.I))
            if header_count > 1:
                duplicate_header_files.append((rel, header_count))
                
            # Count telegram banners
            tg_count = len(re.findall(r't\.me/sarkarisewaindia', content, re.I))
            if tg_count > 2:
                multiple_telegram_files.append((rel, tg_count))

print("AUDIT SUMMARY:")
print(f"Files with duplicate <header class='site-header'> (>1): {len(duplicate_header_files)}")
for f, cnt in duplicate_header_files:
    print(f"  {f} -> {cnt} headers")

print(f"\nFiles with excessive Telegram links (>2): {len(multiple_telegram_files)}")
for f, cnt in multiple_telegram_files[:20]:
    print(f"  {f} -> {cnt} links")
