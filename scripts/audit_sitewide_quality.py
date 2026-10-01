import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = sorted(glob.glob('**/*.html', recursive=True))
all_html = [f for f in all_html if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

print(f"Total HTML files to audit: {len(all_html)}")

long_titles = []
missing_header = []
missing_footer = []
missing_schema = []
darkmode_risks = []

for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    # Check 1: Title length
    tm = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    if tm:
        t = tm.group(1).strip()
        if len(t) > 70:
            long_titles.append((f, len(t), t))
            
    # Check 2: Pre-baked header
    if 'site-header' not in c and 'header-inner' not in c and '404.html' not in f:
        missing_header.append(f)
        
    # Check 3: Pre-baked footer
    if 'site-footer' not in c and 'footer-inner' not in c and '404.html' not in f:
        missing_footer.append(f)
        
    # Check 4: JSON-LD Schema
    if 'application/ld+json' not in c:
        missing_schema.append(f)
        
    # Check 5: Dark mode risk (inline white background without dark mode css variable)
    if 'background:#fff;' in c or 'background: #ffffff;' in c or 'background-color:#ffffff' in c:
        # Check if it's in a main container or content card
        if '<div style="background:#fff' in c or '<section style="background:#fff' in c:
            darkmode_risks.append(f)

print(f"\n--- Sitewide Quality Audit Results ---")
print(f"1. Titles > 70 chars: {len(long_titles)}")
print(f"2. Missing Pre-baked Header: {len(missing_header)}")
print(f"3. Missing Pre-baked Footer: {len(missing_footer)}")
print(f"4. Missing JSON-LD Schema: {len(missing_schema)}")
print(f"5. Hardcoded Light Background Risks: {len(darkmode_risks)}")

if long_titles:
    print("\nSample 5 Long Titles:")
    for f, l, t in long_titles[:5]:
        print(f" - [{l} chars] {f}: {t}")

if missing_header:
    print("\nSample 5 Missing Headers:")
    for f in missing_header[:5]:
        print(f" - {f}")
