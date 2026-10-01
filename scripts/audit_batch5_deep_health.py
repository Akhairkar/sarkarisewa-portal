import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("==================================================")
print("BATCH 5: DEEP CODE HEALTH, A11Y & ASSETS AUDIT")
print("==================================================")

all_html = sorted(glob.glob('**/*.html', recursive=True))
all_html = [f for f in all_html if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

print(f"Total HTML files to scan: {len(all_html)}")

missing_viewport = []
missing_charset = []
unsafe_target_blank = []
missing_favicon = []
unclosed_script_tags = []

for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    # Check viewport
    if 'name="viewport"' not in c and "name='viewport'" not in c:
        missing_viewport.append(f)
        
    # Check charset
    if 'charset=' not in c.lower():
        missing_charset.append(f)
        
    # Check unsafe target="_blank" without rel="noopener"
    # Find target="_blank" that doesn't have rel=
    matches = re.findall(r'<a\s+[^>]*target=["\']_blank["\'][^>]*>', c, re.IGNORECASE)
    for m in matches:
        if 'rel=' not in m.lower() or ('noopener' not in m.lower() and 'noreferrer' not in m.lower()):
            unsafe_target_blank.append((f, m[:80]))
            break
            
    # Check unclosed script tags count
    open_scripts = len(re.findall(r'<script\b', c, re.IGNORECASE))
    close_scripts = len(re.findall(r'</script>', c, re.IGNORECASE))
    if open_scripts != close_scripts:
        unclosed_script_tags.append((f, open_scripts, close_scripts))

print(f"\n1. Missing Viewport Tag: {len(missing_viewport)}")
print(f"2. Missing Charset Tag: {len(missing_charset)}")
print(f"3. Unsafe target='_blank' links (reverse tabnabbing risk): {len(unsafe_target_blank)}")
print(f"4. Mismatched <script> tags: {len(unclosed_script_tags)}")

# Check PWA manifest icons
print("\n5. PWA & Favicon Assets Check:")
if os.path.exists('manifest.json'):
    with open('manifest.json', 'r', encoding='utf-8') as fp:
        m_json = json.load(fp)
    icons = m_json.get('icons', [])
    for ic in icons:
        src = ic.get('src', '')
        exists = os.path.exists(src.lstrip('/'))
        print(f"   Icon: {src} -> Exists: {exists}")

for fav in ['favicon.ico', 'assets/img/favicon-16.png', 'assets/img/favicon-32.png', 'assets/img/apple-touch-icon.png']:
    print(f"   Asset: {fav} -> Exists: {os.path.exists(fav)}")

print("==================================================")
