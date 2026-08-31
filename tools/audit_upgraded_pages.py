# -*- coding: utf-8 -*-
import os, glob, re

STATE_MAIN_FILES = [
    'states/index.html',
    'states/andaman-nicobar.html', 'states/andhra-pradesh.html', 'states/arunachal-pradesh.html', 'states/arunachal.html',
    'states/assam.html', 'states/bihar.html', 'states/chandigarh.html', 'states/chhattisgarh.html',
    'states/dadra-nagar-haveli-daman-diu.html', 'states/delhi.html', 'states/goa.html', 'states/gujarat.html',
    'states/haryana.html', 'states/himachal-pradesh.html', 'states/hp.html', 'states/jammu-kashmir.html',
    'states/jharkhand.html', 'states/karnataka.html', 'states/kerala.html', 'states/ladakh.html',
    'states/lakshadweep.html', 'states/madhya-pradesh.html', 'states/maharashtra.html', 'states/manipur.html',
    'states/meghalaya.html', 'states/mizoram.html', 'states/nagaland.html', 'states/odisha.html',
    'states/puducherry.html', 'states/punjab.html', 'states/rajasthan.html', 'states/sikkim.html',
    'states/tamil-nadu.html', 'states/telangana.html', 'states/tripura.html', 'states/uttar-pradesh.html',
    'states/uttarakhand.html', 'states/west-bengal.html'
]

upgraded_files = (
    STATE_MAIN_FILES +
    glob.glob('states/*-sir-voter-list.html') +
    glob.glob('service/mpbcdc-*.html') +
    glob.glob('mpbcdc-*.html') +
    glob.glob('tools/*.html') +
    glob.glob('category/*.html') +
    [
        'service/special-intensive-revision-sir.html', 'special-intensive-revision-sir.html',
        'service/ayushman-bharat.html',
        'service/pm-kisan.html',
        'service/pm-surya-ghar-muft-bijli.html',
        'service/pm-vishwakarma-yojana.html',
        'service/e-shram-card.html'
    ]
)
# Deduplicate list while preserving order
upgraded_files = list(dict.fromkeys(upgraded_files))

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
        
    # Boilerplate check
    if 'practical guide for Indian users' in content or 'Detailed preparation checklist' in content:
        errors.append('Contains boilerplate placeholder text')
        
    # Hardcoded Header check
    if '<header class="site-header">' in content:
        errors.append('Contains hardcoded static header')
        
    # Hardcoded Footer check
    if '<footer class="site-footer">' in content:
        errors.append('Contains hardcoded static footer')
        
    # Script check
    if 'main.js' not in content:
        errors.append('Missing main.js template script')
        
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
