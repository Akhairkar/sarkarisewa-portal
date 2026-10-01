# -*- coding: utf-8 -*-
import subprocess, glob, os, sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tools = glob.glob(os.path.join(ROOT, 'tools', '*.html'))

print(f"{'Tool':35} | {'18b5cde7':15} | {'b596ce21':15} | {'Current':15}")
print("-" * 85)

for t in sorted(tools):
    t_name = os.path.basename(t)
    
    # 18b5cde7
    try:
        d1 = subprocess.check_output(['git', 'show', f'18b5cde7:tools/{t_name}'], cwd=ROOT).decode('utf-8', errors='ignore')
        s1 = f"{len(d1)}b (main:{'<main' in d1})"
    except:
        s1 = "N/A"
        
    # b596ce21
    try:
        d2 = subprocess.check_output(['git', 'show', f'b596ce21:tools/{t_name}'], cwd=ROOT).decode('utf-8', errors='ignore')
        s2 = f"{len(d2)}b (main:{'<main' in d2})"
    except:
        s2 = "N/A"
        
    # current
    with open(t, 'r', encoding='utf-8', errors='ignore') as fp:
        dc = fp.read()
    sc = f"{len(dc)}b (main:{'<main' in dc})"
    
    print(f"{t_name:35} | {s1:15} | {s2:15} | {sc:15}")
