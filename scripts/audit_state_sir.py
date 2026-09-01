# -*- coding: utf-8 -*-
import os
import glob
import re
import json
import sys

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATES_DIR = os.path.join(ROOT, 'states')
files = sorted(glob.glob(os.path.join(STATES_DIR, '*-sir-voter-list.html')))

results = []
all_passed = True

print('=' * 85)
print(f'STARTING IN-DEPTH AUDIT OF {len(files)} STATE SIR VOTER LIST PAGES')
print('=' * 85)

required_css = [
    '../assets/css/style.css',
    '../assets/css/module2.css',
    '../assets/css/module7.css',
    '../assets/css/module15.css',
    '../assets/css/module16.css',
    '../assets/css/share-widget.css'
]

required_js = [
    '../assets/js/main.js',
    '../assets/js/consent.js',
    '../assets/js/i18n-helper.js',
    '../assets/js/supabase-client.js',
    '../assets/js/services-data.js',
    '../assets/js/share-widget.js',
    '../assets/js/service-template.js'
]

for filepath in files:
    filename = os.path.basename(filepath)
    slug = filename.replace('.html', '')
    state_slug = slug.replace('-sir-voter-list', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    errors = []
    warnings = []

    # 1. Size & Word count
    size_kb = len(content.encode('utf-8')) / 1024
    words = len(content.split())
    if size_kb < 15:
        errors.append(f'File size too small ({size_kb:.1f} KB)')
    if words < 1000:
        errors.append(f'Word count too low ({words} words)')

    # 2. Template artifacts
    leaks = re.findall(r'\{\{[^\[\\}]+\}\}', content)
    if leaks:
        errors.append(f'Template leakage detected: {leaks[:3]}')
    if 'undefined' in content:
        errors.append('Word "undefined" found in content')

    # 3. Canonical and Titles
    canonical_match = re.search(r'<link rel="canonical" href="([^"]+)"/>', content)
    if not canonical_match:
        errors.append('Missing canonical link')
    else:
        expected_canonical = f'https://sarkarisewaindia.com/states/{filename}'
        if canonical_match.group(1) != expected_canonical:
            errors.append(f'Canonical mismatch: expected {expected_canonical}, got {canonical_match.group(1)}')

    title_match = re.search(r'<title>(.*?)</title>', content)
    if not title_match:
        errors.append('Missing <title>')
    elif len(title_match.group(1)) < 20:
        errors.append(f'Title too short: {title_match.group(1)}')

    desc_match = re.search(r'<meta name="description" content="(.*?)"/>', content)
    if not desc_match:
        errors.append('Missing meta description')
    elif len(desc_match.group(1)) < 40:
        errors.append(f'Meta description too short ({len(desc_match.group(1))} chars)')

    # 4. JSON-LD Schema Validation
    schema_match = re.search(r'<script type="application/ld\+json" id="service-schema">(.*?)</script>', content, re.DOTALL)
    if not schema_match:
        errors.append('Missing service-schema JSON-LD block')
    else:
        schema_raw = schema_match.group(1).strip()
        try:
            schema_json = json.loads(schema_raw)
            if '@graph' not in schema_json:
                errors.append('JSON-LD schema missing @graph')
            else:
                types = [item.get('@type') for item in schema_json['@graph']]
                if 'GovernmentService' not in types:
                    errors.append('Schema missing GovernmentService')
                if 'BreadcrumbList' not in types:
                    errors.append('Schema missing BreadcrumbList')
                if 'FAQPage' not in types:
                    errors.append('Schema missing FAQPage')
        except json.JSONDecodeError as e:
            errors.append(f'JSON-LD Schema JSONDecodeError: {str(e)}')

    # 5. Core Layout & Assets
    if '<script>window.SS_ROOT = "../";</script>' not in content:
        errors.append('Missing window.SS_ROOT declaration')
    if '<div id="site-header"></div>' not in content:
        errors.append('Missing #site-header placeholder')
    if '<div id="site-footer"></div>' not in content:
        errors.append('Missing #site-footer placeholder')

    for css in required_css:
        if css not in content:
            errors.append(f'Missing required CSS: {css}')
    for js in required_js:
        if js not in content:
            errors.append(f'Missing required JS: {js}')

    # 6. Interactive District Selector & DOM elements
    required_ids = [
        'districtSearchInput',
        'districtDetailCard',
        'selectedDistrictName',
        'selectedDistrictAC',
        'acListText',
        'districtChipsContainer'
    ]
    for dom_id in required_ids:
        if f'id="{dom_id}"' not in content:
            errors.append(f'Missing DOM element id="{dom_id}"')

    # Count district chips
    chip_matches = re.findall(r'<button type="button" class="[^"]*dist-chip[^"]*"', content)
    if len(chip_matches) == 0:
        errors.append('No district chips found!')
    elif len(chip_matches) < 2:
        warnings.append(f'Only {len(chip_matches)} district chips found')

    onclicks = re.findall(r'onclick="(showDistrict\([^"]+\))"', content)
    if len(onclicks) != len(chip_matches):
        errors.append(f'Mismatch in onclick handlers: {len(onclicks)} onclicks vs {len(chip_matches)} chips')

    # 7. Check 6 Problem Solvers
    prob_boxes = re.findall(r'<div class="prob-box"', content)
    if len(prob_boxes) != 6:
        errors.append(f'Expected 6 problem solver boxes, found {len(prob_boxes)}')

    # 8. Check 4 Form Action cards
    form_cards = re.findall(r'<div class="voter-action-card">', content)
    if len(form_cards) != 4:
        errors.append(f'Expected 4 voter action cards, found {len(form_cards)}')

    status = 'PASS' if not errors else 'FAIL'
    if errors:
        all_passed = False
    
    print(f'[{status:4}] {filename:<36} | {size_kb:>4.1f} KB | {words:>4} words | {len(chip_matches):>2} districts')
    if errors:
        for err in errors:
            print(f'   [ERROR] {err}')
    if warnings:
        for warn in warnings:
            print(f'   [WARN]  {warn}')

print('=' * 85)
if all_passed:
    print('AUDIT COMPLETE: ALL 30 STATE SIR PAGES PASSED 100% OF VALIDATION TESTS!')
else:
    print('AUDIT COMPLETE: SOME PAGES FAILED VALIDATION!')
print('=' * 85)
