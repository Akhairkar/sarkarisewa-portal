import os
import glob
import re
import json

files = sorted(glob.glob('service/csc-locator/**/*.html', recursive=True) + glob.glob('service/csc-locator/*.html'))
files = list(set(files)) # unique

print(f"Total CSC locator files found: {len(files)}")

has_faq_schema = 0
missing_faq_schema = 0
missing_list = []

for f in files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    if '"FAQPage"' in content or '"@type": "FAQPage"' in content or '"@type":"FAQPage"' in content:
        has_faq_schema += 1
    else:
        missing_faq_schema += 1
        missing_list.append(f)

print(f"Has FAQPage Schema: {has_faq_schema}")
print(f"Missing FAQPage Schema: {missing_faq_schema}")
print(f"Sample 10 missing:")
for m in missing_list[:10]:
    print(" -", m)
