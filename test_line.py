import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('service/pm-usp-college-scholarship.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'पीएम उच्' in l:
        print(f"Line {i}:", [hex(ord(c)) for c in l if ord(c) > 127])
