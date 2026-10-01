# -*- coding: utf-8 -*-
import subprocess, sys

sys.stdout.reconfigure(encoding='utf-8')

# Find all commits that modified tools/savings-comparator.html
log = subprocess.check_output(['git', 'log', '--oneline', 'tools/savings-comparator.html']).decode('utf-8', errors='ignore')
commits = [line.split()[0] for line in log.strip().splitlines()]

print("HISTORY OF savings-comparator.html:")
for c in commits:
    content = subprocess.check_output(['git', 'show', f'{c}:tools/savings-comparator.html']).decode('utf-8', errors='ignore')
    has_inputs = 'invest-amount' in content
    has_empty = '<!-- INTERACTIVE CALCULATOR WIDGET -->\n<!-- BREADCRUMB -->' in content or '<!-- INTERACTIVE CALCULATOR WIDGET -->\r\n<!-- BREADCRUMB -->' in content
    print(f"  {c} | len={len(content):5d} | has_inputs={has_inputs} | has_empty_glitch={has_empty}")
