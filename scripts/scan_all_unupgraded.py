# -*- coding: utf-8 -*-
import os, sys, glob, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def scan_all_remaining_pages():
    print("=" * 90)
    print("COMPREHENSIVE AUDIT: IDENTIFYING ALL REMAINING UN-UPGRADED PAGES")
    print("=" * 90)
    
    # 1. State Service Pages in states/
    state_service_pages = glob.glob(os.path.join(ROOT, 'states', '*.html'))
    from upgrade_all_state_hub_pages import STATES_CONFIG
    main_hub_slugs = set(STATES_CONFIG.keys()) | {'index', 'hp', 'arunachal'}
    
    thin_state_services = []
    for p in state_service_pages:
        fn = os.path.basename(p)
        slug = fn.replace('.html', '')
        if slug in main_hub_slugs or '-sir-voter-list' in fn:
            continue
        with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        faqs = len(re.findall(r'<details\b', c))
        words = len(re.findall(r'\w+', c))
        if faqs < 6 or words < 6000:
            thin_state_services.append((fn, faqs, words, os.path.getsize(p)//1024))
            
    print(f"\n1. THIN STATE CERTIFICATE & SCHEME PAGES IN states/: {len(thin_state_services)} pages")
    print("   (Examples: haryana-employment-exchange.html, gujarat-domicile-certificate.html, jharkhand-ration-card.html)")
    for fn, fq, w, sz in thin_state_services[:10]:
        print(f"   - states/{fn:40} | FAQs: {fq:2} | Words: {w:5} | Size: {sz:3} KB")
        
    # 2. Jan Aushadhi Pages in service/jan-aushadhi/
    ja_pages = glob.glob(os.path.join(ROOT, 'service', 'jan-aushadhi', '**', '*.html'), recursive=True)
    thin_ja = []
    for p in ja_pages:
        rel = os.path.relpath(p, ROOT)
        with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        faqs = len(re.findall(r'<details\b', c))
        words = len(re.findall(r'\w+', c))
        if faqs < 6:
            thin_ja.append((rel, faqs, words, os.path.getsize(p)//1024))
            
    print(f"\n2. JAN AUSHADHI KENDRA PAGES (service/jan-aushadhi/): {len(thin_ja)} pages")
    print("   (Examples: service/jan-aushadhi/delhi/new-delhi.html, gujarat.html, assam/sivasagar.html)")
    for rel, fq, w, sz in thin_ja[:10]:
        print(f"   - {rel:50} | FAQs: {fq:2} | Words: {w:5} | Size: {sz:3} KB")

    # 3. CSC Locator District Pages (service/csc-locator/)
    csc_pages = glob.glob(os.path.join(ROOT, 'service', 'csc-locator', '**', '*.html'), recursive=True)
    thin_csc = []
    for p in csc_pages:
        rel = os.path.relpath(p, ROOT)
        if rel in ('service/csc-locator/index.html', 'service/csc-locator.html'):
            continue
        with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        faqs = len(re.findall(r'<details\b', c))
        words = len(re.findall(r'\w+', c))
        if faqs < 6:
            thin_csc.append((rel, faqs, words, os.path.getsize(p)//1024))
            
    print(f"\n3. CSC LOCATOR DISTRICT & STATE PAGES (service/csc-locator/): {len(thin_csc)} pages")
    print("   (Examples: karnataka/bengaluru.html, assam/guwahati.html, gujarat/ahmedabad.html)")
    for rel, fq, w, sz in thin_csc[:10]:
        print(f"   - {rel:50} | FAQs: {fq:2} | Words: {w:5} | Size: {sz:3} KB")

    # 4. Support & Standalone Utility Guides (support/, root)
    support_pages = glob.glob(os.path.join(ROOT, 'support', '*.html'))
    thin_supp = []
    for p in support_pages:
        rel = os.path.relpath(p, ROOT)
        with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        faqs = len(re.findall(r'<details\b', c))
        words = len(re.findall(r'\w+', c))
        if faqs < 6:
            thin_supp.append((rel, faqs, words, os.path.getsize(p)//1024))
    print(f"\n4. SUPPORT & GUIDANCE PAGES (support/): {len(thin_supp)} pages")
    for rel, fq, w, sz in thin_supp:
        print(f"   - {rel:50} | FAQs: {fq:2} | Words: {w:5} | Size: {sz:3} KB")

if __name__ == '__main__':
    scan_all_remaining_pages()
