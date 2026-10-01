import glob
import re

files = [
    'service/pm-usp-college-scholarship.html',
    'jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html',
    'jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html',
    'jobs/sbi-clerk-junior-associate-recruitment-2026.html',
    'jobs/ibps-po-mt-xvi-recruitment-2026-4455-posts.html',
    'category/jobs-education.html',
    'sitemap.html'
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        c = f.read()

    # Strip all C1 control characters (0x80 - 0x9F)
    c = re.sub(r'[\u0080-\u009f]', '', c)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(c)

    print(f"Purged control characters from {fpath}")
