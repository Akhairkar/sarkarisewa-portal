# -*- coding: utf-8 -*-
import os, glob

all_html = glob.glob('states/*.html') + glob.glob('service/*.html') + glob.glob('*.html') + glob.glob('tools/*.py')
fixed_files = []

for fpath in all_html:
    if not os.path.isfile(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        txt = f.read()
    orig = txt
    
    # Replace background: var(--color-primary) when used with white text
    txt = txt.replace('background: var(--color-brand); color: #ffffff;', 'background: var(--color-brand); color: #ffffff;')
    txt = txt.replace('background: var(--color-brand); color: #fff;', 'background: var(--color-brand); color: #fff;')
    txt = txt.replace('background: var(--color-brand); color: #ffffff;', 'background: var(--color-brand); color: #ffffff;')
    txt = txt.replace('background: var(--color-brand);', 'background: var(--color-brand);')
    
    # Ensure prob-box has high contrast color: var(--color-text)
    # Ensure stat-badge-box has color: var(--color-text)
    
    if txt != orig:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(txt)
        fixed_files.append(fpath)

print(f'Fixed dark mode contrast in {len(fixed_files)} files:')
for f in fixed_files:
    print(' -', f)
