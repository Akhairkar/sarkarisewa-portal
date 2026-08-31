# -*- coding: utf-8 -*-
import os, glob, re

upgraded_files = (
    glob.glob('states/*-sir-voter-list.html') +
    glob.glob('service/mpbcdc-*.html') +
    glob.glob('mpbcdc-*.html') +
    [
        'service/special-intensive-revision-sir.html', 'special-intensive-revision-sir.html',
        'service/ayushman-bharat.html',
        'service/pm-kisan.html',
        'service/pm-surya-ghar-muft-bijli.html',
        'service/pm-vishwakarma-yojana.html',
        'service/e-shram-card.html'
    ]
)

print('=====================================================================================')
print(f'AUDITING {len(upgraded_files)} UPGRADED PAGES FOR QUALITY, SEO & VISIBILITY')
print('=====================================================================================')

all_pass = True

for fpath in upgraded_files:
    if not os.path.isfile(fpath):
        print(f'[FAIL] File not found: {fpath}')
        all_pass = False
        continue
    with open(fpath, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    size_kb = len(content.encode('utf-8')) / 1024
    word_count = len(re.findall(r'\w+', content))
    faq_count = len(re.findall(r'<details\b', content))
    
    errors = []
    
    # Word count check (> 3,000 words)
    if word_count < 3000:
        errors.append(f'Low word count: {word_count}')
        
    # FAQs check (>= 6 FAQs)
    if faq_count < 6:
        errors.append(f'Low FAQ count: {faq_count}')
        
    # Contrast bug 1: background: var(--color-primary) with white text
    for line in content.splitlines():
        if 'background: var(--color-primary)' in line and ('color: #ffffff' in line or 'color: #fff' in line or 'color: white' in line):
            errors.append('Contrast bug: var(--color-primary) with white text')
            break

    # Contrast bug 2: light background with var(--color-primary) text
    for line in content.splitlines():
        if ('background: #eef2f6' in line or 'background: #f8fafc' in line) and 'var(--color-primary)' in line:
            errors.append('Contrast bug: light bg with var(--color-primary) text')
            break

    if errors:
        print(f'[FAIL] {fpath}: {errors}')
        all_pass = False
    else:
        print(f'[PASS] {fpath:<45} | {size_kb:5.1f} KB | {word_count:5d} words | {faq_count:2d} FAQs')

print('=====================================================================================')
if all_pass:
    print('AUDIT COMPLETE: 100% OF UPGRADED FILES PASSED ALL AUDITS!')
else:
    print('AUDIT FAILED: FIX ISSUES BEFORE PUSHING.')
print('=====================================================================================')
