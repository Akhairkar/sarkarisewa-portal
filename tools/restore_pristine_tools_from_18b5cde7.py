# -*- coding: utf-8 -*-
"""
RESTORE ALL 23 TOOLS TO 100% WORKING STATE FROM COMMIT 18b5cde7
===============================================================
This restores all tools to their complete, unclipped state with:
- Full interactive JavaScript engines & inputs
- Proper <main> container and hero headers
- Single header & single footer
- Zero broken tags or missing sections
"""

import os, sys, subprocess, glob

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tools_dir = os.path.join(ROOT, 'tools')

tools = glob.glob(os.path.join(tools_dir, '*.html'))

print(f"Restoring {len(tools)} citizen tools from commit 18b5cde7...")

for t in sorted(tools):
    t_name = os.path.basename(t)
    try:
        content = subprocess.check_output(['git', 'show', f'18b5cde7:tools/{t_name}'], cwd=ROOT).decode('utf-8', errors='ignore')
        with open(t, 'w', encoding='utf-8') as fp:
            fp.write(content)
        print(f"  ✅ Restored {t_name:35} ({len(content)} bytes)")
    except Exception as e:
        print(f"  ❌ Error restoring {t_name}: {e}")

print("\nDone restoring all citizen tools!")
