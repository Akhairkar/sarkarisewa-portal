import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

corrupted_files = [
    'service/pm-usp-college-scholarship.html',
    'jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html',
    'jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html',
    'jobs/sbi-clerk-junior-associate-recruitment-2026.html',
    'jobs/ibps-po-mt-xvi-recruitment-2026-4455-posts.html',
    'category/jobs-education.html',
    'sitemap.html'
]

# Residual halant and matra mapping
replacements = {
    'à¥ ': '्',
    'à¥': '्',
    'à¤ ': 'ा',
    'à¤': 'ा',
    'â‚¹': '₹',
    'Â': '',
    'à': '',
    '¤': '',
    '¥': '',
    '§': '',
    '©': '',
    'ª': '',
    '«': '',
    '¬': '',
    '®': '',
    '¯': '',
    '°': '',
    '±': '',
    '²': '',
    '³': '',
    'µ': '',
    '¶': '',
    '·': '',
    '¸': '',
    '¹': '',
    'º': '',
    '»': '',
    '¼': '',
    '½': '',
    '¾': '',
    '¿': '',
    'Ã': '',
    'Ä': '',
    'Å': '',
    'Æ': '',
    'Ç': '',
    'È': '',
    'É': '',
    'Ê': '',
    'Ë': '',
    'Ì': '',
    'Í': '',
    'Î': '',
    'Ï': '',
    'Ð': '',
    'Ñ': '',
    'Ò': '',
    'Ó': '',
    'Ô': '',
    'Õ': '',
    'Ö': '',
    '×': '',
    'Ø': '',
    'Ù': '',
    'Ú': '',
    'Û': '',
    'Ü': '',
    'Ý': '',
    'Þ': '',
    'ß': '',
    'â': '',
    '€': '',
    '‚': '',
    'ƒ': '',
    '„': '',
    '…': '',
    '†': '',
    '‡': '',
    'ˆ': '',
    '‰': '',
    'Š': '',
    '‹': '',
    'Œ': '',
    'Ž': '',
    '‘': "'",
    '’': "'",
    '“': '"',
    '”': '"',
    '•': '•',
    '–': '-',
    '—': '—',
    '˜': '',
    '™': '',
    'š': '',
    '›': '',
    'œ': '',
    'ž': '',
    'Ÿ': ''
}

for fpath in corrupted_files:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    for k, v in replacements.items():
        content = content.replace(k, v)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Cleaned residual mojibake in {fpath}")
