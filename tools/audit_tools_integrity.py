# -*- coding: utf-8 -*-
import subprocess, os, sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tools_dir = os.path.join(ROOT, 'tools')

tool_files = [f for f in os.listdir(tools_dir) if f.endswith('.html')]

print("AUDITING TOOLS DIRECTORY INTEGRITY:")
for f in tool_files:
    fpath = os.path.join(tools_dir, f)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    # Check if empty widget or broken breadcrumb comments exist
    empty_widget = '<!-- INTERACTIVE CALCULATOR WIDGET -->\n<!-- BREADCRUMB -->' in content or '<!-- INTERACTIVE CALCULATOR WIDGET -->\r\n<!-- BREADCRUMB -->' in content
    print(f"  {f:35} | size={len(content):6d} chars | has_empty_widget_glitch={empty_widget}")
