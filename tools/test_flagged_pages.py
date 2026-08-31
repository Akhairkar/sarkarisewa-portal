# -*- coding: utf-8 -*-
import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

files = [
    'tools/status-troubleshooter.html',
    'tools/savings-comparator.html',
    'tools/signature-resizer.html',
    'tools/self-declaration-builder.html',
    'states/index.html'
]

print(f"{'File':35} | {'Length':7} | {'Header':6} | {'Footer':6} | {'<main>':6} | {'Telegram':8}")
print("-" * 80)

for rel in files:
    fpath = os.path.join(ROOT, rel)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    h_count = len(re.findall(r'<header[^>]*class=["\']site-header["\']', c, re.I))
    f_count = len(re.findall(r'<footer|id=["\']site-footer["\']', c, re.I))
    has_main = '<main' in c
    tg_count = len(re.findall(r't\.me/sarkarisewaindia', c, re.I))
    print(f"{rel:35} | {len(c):6}b | {h_count:6} | {f_count:6} | {str(has_main):6} | {tg_count:8}")
