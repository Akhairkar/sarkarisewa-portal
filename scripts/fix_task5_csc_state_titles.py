import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

csc_state_files = sorted(glob.glob('service/csc-locator/*.html'))
print(f"Scanning {len(csc_state_files)} state-level csc-locator files...")

fixed_count = 0
for f in csc_state_files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    m = re.search(r'<title>(.*?)</title>', c, re.DOTALL)
    if m:
        old_title = m.group(1).strip()
        # Look for pattern like "State (State) CSC Center" or "(State) CSC Center...State"
        # or duplicated parenthesis: e.g. "Chandigarh (Chandigarh) CSC Center List 2026"
        # Clean up duplicate names:
        # Regex: r'([A-Za-z\s&]+)\s*\(\1\)\s*CSC Center' -> r'\1 CSC Center'
        new_title = re.sub(r'([A-Za-z\s&]+)\s*\(\1\)\s*CSC Center', r'\1 CSC Center', old_title, flags=re.IGNORECASE)
        # Also check if title has (State) State or State (State)
        new_title = re.sub(r'\(([A-Za-z\s&]+)\)\s*CSC Center.*?\b\1\b', r'\1 CSC Center List 2026 | SarkariSewa India', new_title, flags=re.IGNORECASE)
        
        # Ensure clean standard title: "{State} CSC Center List 2026 | SarkariSewa India"
        if new_title != old_title:
            c = c.replace(m.group(0), f'<title>{new_title}</title>')
            with open(f, 'w', encoding='utf-8') as fp:
                fp.write(c)
            fixed_count += 1
            print(f"Fixed {f}:\n  Old: {old_title}\n  New: {new_title}")

print(f"Task 5 complete! Fixed {fixed_count} files.")
