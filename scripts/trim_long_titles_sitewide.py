import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = sorted(glob.glob('**/*.html', recursive=True))
all_html = [f for f in all_html if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

print(f"Trimming long titles across {len(all_html)} files...")

fixed_count = 0

for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
    orig = html
    
    tm = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
    if not tm:
        continue
        
    full_title = tm.group(1).strip()
    if len(full_title) <= 65:
        continue
        
    # Extract Brand suffix if present
    brand = " | SarkariSewa India"
    core = full_title
    for b in [" | SarkariSewa India", " - SarkariSewa India", " | SarkariSewa", " — SarkariSewa India", " | SarkariSewa India ब्लॉग"]:
        if b in core:
            core = core.replace(b, "").strip()
            break
            
    # Shorten core title cleanly to ~42 characters max
    if len(core) > 42:
        # Split on colon, dash, or pipe if available
        if ':' in core and len(core.split(':')[0]) <= 42:
            core = core.split(':')[0].strip()
        elif '—' in core and len(core.split('—')[0]) <= 42:
            core = core.split('—')[0].strip()
        elif '-' in core and len(core.split('-')[0]) <= 42:
            core = core.split('-')[0].strip()
        else:
            # Word boundary slice
            core = core[:42].rsplit(' ', 1)[0]
            
    new_title = f"{core}{brand}"
    
    # Replace in <title> and OpenGraph/Twitter meta tags
    html = re.sub(r'<title>.*?</title>', f'<title>{new_title}</title>', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta content=".*?" property="og:title"/>', f'<meta property="og:title" content="{new_title}"/>', html)
    html = re.sub(r'<meta property="og:title" content=".*?"/?>', f'<meta property="og:title" content="{new_title}">', html)
    html = re.sub(r'<meta content=".*?" name="twitter:title"/>', f'<meta name="twitter:title" content="{new_title}"/>', html)
    html = re.sub(r'<meta name="twitter:title" content=".*?"/?>', f'<meta name="twitter:title" content="{new_title}">', html)
    
    if html != orig:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(html)
        fixed_count += 1

print(f"==================================================")
print(f"Trimming complete! Updated {fixed_count} files.")
print(f"==================================================")
