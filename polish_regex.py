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

    c = re.sub(r'उच्\s+च', 'उच्च', c)
    c = re.sub(r'छात्\s+र', 'छात्र', c)
    c = re.sub(r'केंद्\s+र', 'केंद्र', c)
    c = re.sub(r'भर्\s+ती', 'भर्ती', c)
    c = re.sub(r'योग्\s+यता', 'योग्यता', c)
    c = re.sub(r'आवेद्\s+न', 'आवेदन', c)
    c = re.sub(r'ग्रा\s+मीण', 'ग्रामीण', c)
    c = re.sub(r'असिस्\s+टेंट', 'असिस्टेंट', c)
    c = re.sub(r'कनि\s+ष्ठ', 'कनिष्ठ', c)
    c = re.sub(r'लेखा\s+कार', 'लेखाकार', c)
    c = re.sub(r'परी\s+क्षा', 'परीक्षा', c)
    c = re.sub(r'वेतन\s+मान', 'वेतनमान', c)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(c)

print("Regex polish completed.")
