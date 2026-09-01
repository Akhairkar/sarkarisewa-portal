import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

root_files = sorted(glob.glob('*.html'))
print(f"Auditing {len(root_files)} root HTML files...")

missing_canon = []
missing_desc = []
missing_schema = []

for rf in root_files:
    with open(rf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    
    if '<link rel="canonical"' not in c and "<link rel='canonical'" not in c:
        missing_canon.append(rf)
        
    if '<meta name="description"' not in c and '<meta content=' not in c and '<meta property="og:description"' not in c:
        missing_desc.append(rf)
        
    if 'application/ld+json' not in c:
        missing_schema.append(rf)

print(f"Missing Canonical ({len(missing_canon)}): {missing_canon}")
print(f"Missing Meta Description ({len(missing_desc)}): {missing_desc}")
print(f"Missing JSON-LD Schema ({len(missing_schema)}): {missing_schema}")
