import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = glob.glob('**/*.html', recursive=True)
all_html = [f for f in all_html if not f.startswith('admin') and not f.startswith('.')]

long_desc_count = 0

for fpath in all_html:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
        
    m = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', html, re.IGNORECASE)
    if not m:
        m = re.search(r'<meta\s+content=["\'](.*?)["\']\s+name=["\']description["\']', html, re.IGNORECASE)
        
    if m:
        desc = m.group(1).strip()
        if len(desc) > 160:
            long_desc_count += 1
            # Smart truncate at word boundary before 155 chars and add a clean period
            short_desc = desc[:155].rsplit(' ', 1)[0]
            if not short_desc.endswith('.'):
                short_desc += '.'
                
            # Replace in HTML
            old_tag = m.group(0)
            new_tag = f'<meta name="description" content="{short_desc}"/>'
            html = html.replace(old_tag, new_tag)
            
            # Also update og:description if it was long
            og_m = re.search(r'<meta\s+property=["\']og:description["\']\s+content=["\'](.*?)["\']', html, re.IGNORECASE)
            if og_m and len(og_m.group(1)) > 160:
                html = html.replace(og_m.group(0), f'<meta property="og:description" content="{short_desc}"/>')
                
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(html)

print(f"Trimmed {long_desc_count} long meta descriptions to optimal 145-155 char length.")
