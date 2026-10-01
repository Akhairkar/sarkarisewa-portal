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
SERVICE_DIR = os.path.join(ROOT, 'service')

mpbcdc_files = [
    'mpbcdc-direct-loan-yojana.html',
    'mpbcdc-subsidy-yojana.html',
    'mpbcdc-seed-capital-yojana.html',
    'mpbcdc-yojana.html'
]

print('=' * 85)
print('STARTING COMPREHENSIVE AUDIT OF ALP 4 MOBCDC PAGES (SERVICE & ROOT)')
print('=' * 85)

all_passed = True

for fname in mpbcdc_files:
    for folder, prefix in [(SERVICE_DIR, 'service/'), (ROOT, 'root/')]:
        fpath = os.path.join(folder, fname)
        if not os.path.exists(fpath):
            print(f'[FAIL] {prefix}{fname:<32} | File does not exist!')
            all_passed = False
            continue
            
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        errors = []
        warnings = []
        
        # 1. Size & Word Count
        size_kb = len(content) / 1024
        text_only = re.sub(r'<[w>]+>', ' ', content)
        words = len(text_only.split())
        
        if size_kb < 30.0:
            errors.append(f'File size too small ({size_kb:.1f} KB < 30 KB) - THIN CONTENT DETECTED')
        if words < 1500:
            errors.append(f'Word count too low ({words} words < 1500 words)')
            
        # 2. Template Leakage
        if '{{' in content or '}}' in content:
            errors.append('Unrendered template tags found')
        if 'undefined' in content:
            errors.append('Literal undefined text found')
            
        # 3. SEO Tags
        title_m = re.search(r'<title>(.*?)</title>', content)
        if not title_m or len(title_m.group(1)) < 20:
            errors.append('Missing or too short <title>')
            
        desc_m = re.search(r'<meta name="description" content="(.*?)"', content)
        if not desc_m or len(desc_m.group(1)) < 40:
            errors.append('Missing or too short meta description')
            
        # 4. JSON-LD Schema
        schema_m = re.search(r'<script type="application/ld\+json" id="service-schema">(.*?)</script>', content, re.DOTALL)
        if not schema_m:
            errors.append('Missing JSON-LD schema block')
        else:
            try:
                schema_json = json.loads(schema_m.group(1).strip())
                types = [item.get('@type') for item in schema_json.get('@graph', [])]
                if 'GovernmentService' not in types:
                    errors.append('JSON-LD missing GovernmentService')
                if 'BreadcrumbList' not in types:
                    errors.append('JSON-LD missing BreadcrumbList')
                if 'FAQPage' not in types:
                    errors.append('JSON-LD missing FAQPage')
            except Exception as e:
                errors.append(f'JSON-LD parse error: {str(e)}')
                
        # 5. Interactive 36 Districts
        chips = re.findall(r'class="dist-chip[^"]*"', content)
        if len(chips) != 36:
            errors.append(f'Expected 36 district chips, found {len(chips)}')
            
        onclicks = re.findall(r'onclick="showDistrictOffice\([^"]+\)"', content)
        if len(onclicks) != 36:
            errors.append(f'Expected 36 onclick handlers, found {len(onclicks)}')
            
        for req_id in ['districtSearchInput', 'districtDetailCard', 'selectedDistrictName', 'selectedDistrictOffice', 'selectedDistrictPhone', 'selectedDistrictEmail', 'districtChipsContainer']:
            if f'id="{req_id}"' not in content:
                errors.append(f'Missing interactive element id: {req_id}')
                
        # 6. Visible FAQs (details tag)
        faqs = re.findall(r'<details', content)
        if len(faqs) < 8:
            errors.append(f'Expected at least 8 visible FAQs, found {len(faqs)}')
            
        # 7. Problem Solvers (prob-box)
        probs = re.findall(r'class="prob-box"', content)
        if len(probs) != 6:
            errors.append(f'Expected 6 problem solver boxes, found {len(probs)}')
            
        # 8. Useful Tools Grid
        for tool_link in ['eligibility-checker.html', 'document-checklist.html', 'status-troubleshooter.html', 'project-report']:
            if tool_link not in content:
                errors.append(f'Missing useful tool link: {tool_link}')
                
        # 9. Related Services
        if 'class="service-section"' not in content:
            errors.append('Missing service-section container')
            
        status = 'PASS' if not errors else 'FAIL'
        if errors:
            all_passed = False
            
        print(f'[{status:4}] {prefix}{fname:<32} | {size_kb:>4.1f} KB | {words:>4} words | {len(chips)} districts | {len(faqs)} FAQs')
        if errors:
            for err in errors:
                print(f'   [ERROR] {err}')
        if warnings:
            for warn in warnings:
                print(f'   [WARN]  {warn}')

print('=' * 85)
if all_passed:
    print('AUDIT COMPLETE: ALP 4 MOBCDC PAGES (8 TOTAL FILES) PASSED 100% tests')
else:
    print('AUDIT COMPLETE: ERRORS ENCOUNTERED IN MPBCDC CHECKS!')
print('=' * 85)
