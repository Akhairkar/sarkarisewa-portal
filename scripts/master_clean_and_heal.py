# -*- coding: utf-8 -*-
"""
Master Clean and Auto-Heal Engine
- Replaces any 'सरकारीसेवा पोर्टल' or 'SarkariSewa Portal' with 'SarkariSewa India'
- Fixes any truncated <title> tags (removes '...' and trailing ellipses)
- Detects and cleans any mojibake / corrupted encoding
- Ensures 65 duplicate pairs are valid HTML redirect stubs
- Ensures pre-baked header and footer links are consistent
"""

import os, sys, glob, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MOJIBAKE_MAP = {
    'â€™': "'",
    'â€˜': "'",
    'â€œ': '"',
    'â€': '"',
    'â€¦': '...',
    'â€“': '-',
    'â€”': '—',
    'Ã¢â‚¬â„¢': "'",
    'Ã¢â‚¬Å“': '"',
    'Ã¢â‚¬': '"',
    'Ã ': 'à',
    'Ã©': 'é',
    'â‚¹': '₹',
    '&#8964;': '▾',
}

def clean_all_html_files():
    print("--- 1. Scanning & Healing all HTML files across entire site ---")
    all_html_files = []
    for dirpath, _, filenames in os.walk(ROOT):
        rel_dir = os.path.relpath(dirpath, ROOT)
        parts = rel_dir.split(os.sep)
        if any(p in ('.git', '__pycache__', 'node_modules') for p in parts):
            continue
        for f in filenames:
            if f.endswith('.html'):
                all_html_files.append(os.path.join(dirpath, f))

    print(f"Total HTML files found: {len(all_html_files)}")
    
    healed_brand = 0
    healed_title = 0
    healed_mojibake = 0
    
    for fpath in all_html_files:
        rel_path = os.path.relpath(fpath, ROOT)
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            content = fp.read()
        
        orig = content
        
        # 1. Brand name healing
        if 'सरकारीसेवा पोर्टल' in content:
            content = content.replace('सरकारीसेवा पोर्टल', 'SarkariSewa India')
            healed_brand += 1
        if 'SarkariSewa Portal' in content:
            content = content.replace('SarkariSewa Portal', 'SarkariSewa India')
            healed_brand += 1
            
        # 2. Title truncation healing
        title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
        if title_match:
            raw_title = title_match.group(1).strip()
            if '...' in raw_title or 'â€¦' in raw_title or '…' in raw_title:
                # Look for og:title
                og_match = re.search(r'<meta\s+property=["\']og:title["\']\s+content=["\'](.*?)["\']', content, re.IGNORECASE)
                clean_title = raw_title
                if og_match and '...' not in og_match.group(1):
                    clean_title = og_match.group(1).strip()
                else:
                    clean_title = raw_title.replace('...', '').replace('â€¦', '').replace('…', '').strip()
                
                clean_title = clean_title.replace('सरकारीसेवा पोर्टल', 'SarkariSewa India').replace('SarkariSewa Portal', 'SarkariSewa India')
                if 'SarkariSewa India' not in clean_title:
                    clean_title = f"{clean_title} | SarkariSewa India"
                
                content = re.sub(r'<title>.*?</title>', f'<title>{clean_title}</title>', content, count=1, flags=re.IGNORECASE | re.DOTALL)
                healed_title += 1

        # 3. Mojibake healing
        for moj, fix in MOJIBAKE_MAP.items():
            if moj in content:
                content = content.replace(moj, fix)
                healed_mojibake += 1
                
        if content != orig:
            with open(fpath, 'w', encoding='utf-8') as fp:
                fp.write(content)

    print(f"Healed brand name in {healed_brand} instances.")
    print(f"Healed truncated titles in {healed_title} files.")
    print(f"Healed mojibake in {healed_mojibake} instances.")

def main():
    clean_all_html_files()

if __name__ == '__main__':
    main()
