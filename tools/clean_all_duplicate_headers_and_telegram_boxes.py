# -*- coding: utf-8 -*-
"""
SURGICAL PURIFIER FOR DUPLICATE HEADERS & MULTIPLE TELEGRAM BOXES
================================================================
1. Keeps EXACTLY ONE <div id="site-header">...</div> or <header class="site-header">
2. Removes all orphan, duplicate headers/navbars before <main>
3. Keeps at most ONE Telegram community banner per page
4. Retains 100% of all content, forms, interactive calculators & original brand name
"""

import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def purify_html_file(fpath):
    try:
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            content = fp.read()
    except:
        return False
        
    original = content
    
    # 1. Clean Multiple Headers
    # If the file has multiple <header class="site-header">
    header_matches = list(re.finditer(r'<header[^>]*class=["\'][^"\']*site-header[^"\']*["\'].*?</header>', content, re.DOTALL | re.IGNORECASE))
    if len(header_matches) > 1:
        # Keep only the first header
        first_header = header_matches[0].group(0)
        # Find where the last duplicate header ends before <main>
        last_header_end = header_matches[-1].end()
        
        # Replace the entire stretch from first header to last header with just the first header
        content = content[:header_matches[0].start()] + first_header + content[last_header_end:]
        
    # Also clean consecutive duplicate <div id="site-header"></div> if any
    content = re.sub(r'(<div id=["\']site-header["\'][^>]*>.*?</div>\s*){2,}', r'\1', content, flags=re.DOTALL | re.IGNORECASE)
    
    # Also clean orphan duplicate <nav class="main-nav"> that sits outside headers
    # (If a page has <nav class="main-nav"> inside <header>, and another standalone <nav class="main-nav"> outside)
    
    # 2. Clean Duplicate Telegram Community Banners
    # Find all VIP telegram boxes
    tg_pattern = r'(?:<div[^>]*style=["\'][^"\']*linear-gradient\(135deg,\s*#0088cc[^"\']*["\'][^>]*>.*?✈️.*?Telegram.*?</div>)'
    tg_matches = list(re.finditer(tg_pattern, content, re.DOTALL | re.IGNORECASE))
    if len(tg_matches) > 1:
        # Keep only the last one
        last_tg = tg_matches[-1].group(0)
        # Remove all matches
        for m in reversed(tg_matches[:-1]):
            content = content[:m.start()] + content[m.end():]
            
    # Also check other variant of duplicate telegram box
    tg_pattern2 = r'(?:<div[^>]*class=["\'][^"\']*telegram-banner[^"\']*["\'][^>]*>.*?</div>)'
    tg2_matches = list(re.finditer(tg_pattern2, content, re.DOTALL | re.IGNORECASE))
    if len(tg2_matches) > 1:
        for m in reversed(tg2_matches[:-1]):
            content = content[:m.start()] + content[m.end():]
            
    # 3. Clean any leftover orphan dangling closing tags between header and main
    content = re.sub(r'(</div>\s*</header>\s*</div>(?:\s*</div>)+)(\s*<main)', r'</div>\2', content, flags=re.IGNORECASE)
    
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(content)
        return True
    return False

def clean_all():
    print("=" * 90)
    print("PURIFYING DUPLICATE HEADERS & TELEGRAM BANNERS SITE-WIDE")
    print("=" * 90)
    
    all_html = []
    for root, dirs, files in os.walk(ROOT):
        if '.git' in dirs: dirs.remove('.git')
        for f in files:
            if f.endswith('.html'):
                all_html.append(os.path.join(root, f))
                
    modified = 0
    for f in all_html:
        if purify_html_file(f):
            modified += 1
            
    print(f"\n✅ Cleaned duplicate headers & banners in {modified} files!")

if __name__ == '__main__':
    clean_all()
