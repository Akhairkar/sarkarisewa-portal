import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

folders = ['category', 'jobs', 'exams', 'blog']
for folder in folders:
    files = sorted(glob.glob(f'{folder}/*.html'))
    print(f"\nFolder: {folder}/ ({len(files)} files)")
    
    missing_hdr = [f for f in files if 'site-header' not in open(f, encoding='utf-8', errors='ignore').read()]
    missing_ftr = [f for f in files if 'site-footer' not in open(f, encoding='utf-8', errors='ignore').read()]
    missing_sch = [f for f in files if 'application/ld+json' not in open(f, encoding='utf-8', errors='ignore').read()]
    
    print(f" - Missing Header: {len(missing_hdr)}")
    print(f" - Missing Footer: {len(missing_ftr)}")
    print(f" - Missing Schema: {len(missing_sch)}")
