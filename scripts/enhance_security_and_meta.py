import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = sorted(glob.glob('**/*.html', recursive=True))
all_html = [f for f in all_html if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini', 'partials'])]

print(f"Enhancing security and meta tags across {len(all_html)} files...")

fixed_viewport = 0
fixed_charset = 0
fixed_rel = 0

for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    orig = html
    
    # 1. Charset
    if 'charset=' not in html.lower():
        head_idx = html.find('<head>')
        if head_idx != -1:
            html = html[:head_idx+6] + '\n  <meta charset="UTF-8">' + html[head_idx+6:]
            fixed_charset += 1
            
    # 2. Viewport
    if 'name="viewport"' not in html and "name='viewport'" not in html:
        head_idx = html.find('<head>')
        if head_idx != -1:
            html = html[:head_idx+6] + '\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">' + html[head_idx+6:]
            fixed_viewport += 1
            
    # 3. Add rel="noopener noreferrer" to target="_blank"
    def fix_blank_link(match):
        tag = match.group(0)
        if 'rel=' not in tag.lower():
            # insert rel before closing >
            return tag[:-1] + ' rel="noopener noreferrer">'
        elif 'noopener' not in tag.lower():
            # append noopener to existing rel
            return re.sub(r'rel=["\']([^"\']*)["\']', r'rel="\1 noopener noreferrer"', tag)
        return tag

    new_html = re.sub(r'<a\s+[^>]*target=["\']_blank["\'][^>]*>', fix_blank_link, html, flags=re.IGNORECASE)
    if new_html != html:
        html = new_html
        fixed_rel += 1
        
    if html != orig:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(html)

print(f"==================================================")
print(f"Fixed Charset: {fixed_charset} files")
print(f"Fixed Viewport: {fixed_viewport} files")
print(f"Fixed External Links Security (rel='noopener noreferrer'): {fixed_rel} files")
print(f"==================================================")
