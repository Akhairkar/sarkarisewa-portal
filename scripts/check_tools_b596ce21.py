# -*- coding: utf-8 -*-
import subprocess, os, sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tools_dir = os.path.join(ROOT, 'tools')

tool_files = [f for f in os.listdir(tools_dir) if f.endswith('.html')]

print("TOOLS AT COMMIT b596ce21:")
for f in tool_files:
    try:
        content = subprocess.check_output(['git', 'show', f'b596ce21:tools/{f}']).decode('utf-8', errors='ignore')
        has_empty_widget = '<!-- INTERACTIVE CALCULATOR WIDGET -->\n<!-- BREADCRUMB -->' in content or '<!-- INTERACTIVE CALCULATOR WIDGET -->\r\n<!-- BREADCRUMB -->' in content
        print(f"  {f:35} | length={len(content):6d} | has_empty_widget={has_empty_widget}")
    except Exception as e:
        print(f"  {f:35} | error: {e}")
