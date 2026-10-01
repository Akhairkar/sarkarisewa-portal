# -*- coding: utf-8 -*-
import glob, os, re, sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
services = glob.glob(os.path.join(ROOT, 'service', '*.html'))

thin_services = []
upgraded_services = []
redirects = []

for s in services:
    fn = os.path.basename(s)
    with open(s, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'http-equiv="refresh"' in c:
        redirects.append(fn)
        continue
    faqs = len(re.findall(r'<details\b', c))
    words = len(re.findall(r'\w+', c))
    size_kb = len(c.encode('utf-8')) // 1024
    if faqs < 6 or words < 3000:
        thin_services.append((fn, faqs, words, size_kb))
    else:
        upgraded_services.append((fn, faqs, words, size_kb))

print(f"Total in service/: {len(services)}")
print(f"Redirect Stubs: {len(redirects)}")
print(f"Master Upgraded Services (>= 6 FAQs): {len(upgraded_services)}")
print(f"Thin / Remaining Services to Upgrade: {len(thin_services)}")

print("\nSample 30 Remaining Services Candidates for Batch 3:")
for fn, fq, w, sz in thin_services[:30]:
    print(f"  - service/{fn:50} | FAQs: {fq:2} | Words: {w:5} | Size: {sz:3} KB")
