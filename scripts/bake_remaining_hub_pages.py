# -*- coding: utf-8 -*-
import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

HEADER_FILE = os.path.join(ROOT, 'partials', 'header.html')
FOOTER_FILE = os.path.join(ROOT, 'partials', 'footer.html')

with open(HEADER_FILE, 'r', encoding='utf-8') as fp:
    RAW_HEADER = fp.read()
with open(FOOTER_FILE, 'r', encoding='utf-8') as fp:
    RAW_FOOTER = fp.read()

def get_baked_header(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_HEADER)

def get_baked_footer(prefix="../"):
    return re.sub(r'\b(href|src)="(?!(?:https?:|//|#|mailto:|tel:|javascript:))([^"]*)"', rf'\1="{prefix}\2"', RAW_FOOTER)

PAGES_TO_BAKE = [
    ('tools/eligibility-checker.html', '../'),
    ('tools/document-checklist.html', '../'),
    ('tools/status-troubleshooter.html', '../'),
    ('category/index.html', '../'),
    ('states/index.html', '../'),
    ('service/ayushman-bharat.html', '../'),
    ('service/pm-kisan.html', '../'),
    ('service/pm-surya-ghar-muft-bijli.html', '../'),
    ('service/pm-vishwakarma-yojana.html', '../'),
    ('service/e-shram-card.html', '../')
]

def bake_pages():
    for rel_path, prefix in PAGES_TO_BAKE:
        full_path = os.path.join(ROOT, rel_path)
        if not os.path.exists(full_path):
            print(f"File missing: {rel_path}")
            continue
        with open(full_path, 'r', encoding='utf-8') as fp:
            c = fp.read()
            
        b_header = get_baked_header(prefix)
        b_footer = get_baked_footer(prefix)
        
        # Replace empty site-header or existing site-header
        c = re.sub(r'<div id="site-header">.*?</div>', f'<div id="site-header">\n{b_header}\n</div>', c, flags=re.DOTALL)
        c = re.sub(r'<div id="site-footer">.*?</div>', f'<div id="site-footer">\n{b_footer}\n</div>', c, flags=re.DOTALL)
        
        with open(full_path, 'w', encoding='utf-8') as fp:
            fp.write(c)
        print(f"Successfully baked header & footer into {rel_path}")

if __name__ == '__main__':
    bake_pages()
