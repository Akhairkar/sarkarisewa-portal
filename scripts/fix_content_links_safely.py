# -*- coding: utf-8 -*-
"""
SAFE CONTENT LINK RESOLVER
==========================
Fixes broken internal links in content area ONLY.
Does NOT touch headers, footers, brand names, or layouts.
"""

import os, sys, glob, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Gather all existing files
existing_files = set()
for root, dirs, files in os.walk(ROOT):
    if '.git' in dirs: dirs.remove('.git')
    for f in files:
        f_abs = os.path.join(root, f)
        rel = os.path.relpath(f_abs, ROOT).replace('\\', '/').lower()
        existing_files.add(rel)

# State shortcode mappings
STATE_PREFIX_MAP = {
    'ap-': 'andhra-pradesh-',
    'ar-': 'arunachal-pradesh-',
    'as-': 'assam-',
    'br-': 'bihar-',
    'cg-': 'chhattisgarh-',
    'dl-': 'delhi-',
    'ga-': 'goa-',
    'gj-': 'gujarat-',
    'hr-': 'haryana-',
    'hp-': 'himachal-pradesh-',
    'jh-': 'jharkhand-',
    'ka-': 'karnataka-',
    'kl-': 'kerala-',
    'mp-': 'madhya-pradesh-',
    'mh-': 'maharashtra-',
    'mn-': 'manipur-',
    'ml-': 'meghalaya-',
    'mz-': 'mizoram-',
    'nl-': 'nagaland-',
    'od-': 'odisha-',
    'pb-': 'punjab-',
    'rj-': 'rajasthan-',
    'sk-': 'sikkim-',
    'tn-': 'tamil-nadu-',
    'tg-': 'telangana-',
    'tr-': 'tripura-',
    'up-': 'uttar-pradesh-',
    'uk-': 'uttarakhand-',
    'wb-': 'west-bengal-',
    'an-': 'andaman-nicobar-',
    'ch-': 'chandigarh-',
    'dn-': 'dadra-nagar-haveli-daman-diu-',
    'jk-': 'jammu-kashmir-',
    'la-': 'ladakh-',
    'ld-': 'lakshadweep-',
    'py-': 'puducherry-'
}

def resolve_broken_links_in_file(fpath):
    file_dir = os.path.dirname(fpath)
    rel_file = os.path.relpath(fpath, ROOT).replace('\\', '/')
    
    try:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            content = fp.read()
    except:
        return False
        
    original = content
    
    def replacer(match):
        prefix = match.group(1) # href=" or src="
        href = match.group(2).strip()
        suffix = match.group(3)
        
        if not href or href.startswith('#') or href.startswith('http') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:'):
            return match.group(0)
            
        href_clean = href.split('#')[0].split('?')[0]
        hash_part = href[len(href_clean):]
        if not href_clean:
            return match.group(0)
            
        target_path = os.path.normpath(os.path.join(file_dir, href_clean))
        target_rel = os.path.relpath(target_path, ROOT).replace('\\', '/').lower()
        
        # If target already exists, keep it untouched
        if target_rel in existing_files:
            return match.group(0)
            
        # 1. State shortcodes in states/ directory
        basename = os.path.basename(href_clean)
        for code, full in STATE_PREFIX_MAP.items():
            if basename.startswith(code):
                candidate_name = full + basename[len(code):]
                # Check in states/ directory
                candidate_path = os.path.join(ROOT, 'states', candidate_name)
                candidate_rel = os.path.relpath(candidate_path, ROOT).replace('\\', '/').lower()
                if candidate_rel in existing_files:
                    new_rel = os.path.relpath(candidate_path, file_dir).replace('\\', '/')
                    return f'{prefix}{new_rel}{hash_part}{suffix}'
                    
        # 2. Depth fixes for tools/ and service/
        # Check if target is a known tool
        if 'tools/' in href_clean:
            tool_name = href_clean.split('tools/')[-1]
            candidate_path = os.path.join(ROOT, 'tools', tool_name)
            if os.path.exists(candidate_path):
                new_rel = os.path.relpath(candidate_path, file_dir).replace('\\', '/')
                return f'{prefix}{new_rel}{hash_part}{suffix}'
                
        # 3. Jan Aushadhi & CSC fixes
        if 'jan-aushadhi-store-locator.html' in href_clean or 'jan-aushadhi.html' in href_clean:
            target = os.path.join(ROOT, 'service', 'jan-aushadhi-store-locator.html')
            new_rel = os.path.relpath(target, file_dir).replace('\\', '/')
            return f'{prefix}{new_rel}{hash_part}{suffix}'
            
        if 'csc-locator.html' in href_clean:
            target = os.path.join(ROOT, 'tools', 'csc-locator.html')
            new_rel = os.path.relpath(target, file_dir).replace('\\', '/')
            return f'{prefix}{new_rel}{hash_part}{suffix}'
            
        # 4. Aadhaar / Ayushman service fixes
        if 'service/aadhaar-card-update.html' in href_clean:
            target = os.path.join(ROOT, 'service', 'aadhaar-card.html')
            new_rel = os.path.relpath(target, file_dir).replace('\\', '/')
            return f'{prefix}{new_rel}{hash_part}{suffix}'
            
        if 'service/ayushman-bharat-card.html' in href_clean:
            target = os.path.join(ROOT, 'service', 'ayushman-bharat.html')
            new_rel = os.path.relpath(target, file_dir).replace('\\', '/')
            return f'{prefix}{new_rel}{hash_part}{suffix}'
            
        # 5. Root index.html fix from updates/
        if href_clean == '../../index.html':
            target = os.path.join(ROOT, 'index.html')
            new_rel = os.path.relpath(target, file_dir).replace('\\', '/')
            return f'{prefix}{new_rel}{hash_part}{suffix}'
            
        return match.group(0)

    # Replace href="..." and src="..."
    new_content = re.sub(r'((?:href|src)=["\'])(.*?)(["\'])', replacer, content)
    
    if new_content != original:
        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        return True
    return False

def fix_all():
    print("=" * 90)
    print("SAFELY FIXING BROKEN CONTENT LINKS (HEADER & BRAND UNTOUCHED)")
    print("=" * 90)
    
    all_html = []
    for root, dirs, files in os.walk(ROOT):
        if '.git' in dirs: dirs.remove('.git')
        for f in files:
            if f.endswith('.html'):
                all_html.append(os.path.join(root, f))
                
    modified = 0
    for f in all_html:
        if resolve_broken_links_in_file(f):
            modified += 1
            
    print(f"\n✅ Safely resolved links in {modified} files!")

if __name__ == '__main__':
    fix_all()
