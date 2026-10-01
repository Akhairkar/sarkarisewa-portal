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

conjunct_fixes = {
    'उच् च': 'उच्च',
    'छात् र': 'छात्र',
    'छात् रवृत्ति': 'छात्रवृत्ति',
    'केंद् र': 'केंद्र',
    'केंद् रीय': 'केंद्रीय',
    'भर् ती': 'भर्ती',
    'योग् यता': 'योग्यता',
    'अधिसूचना': 'अधिसूचना',
    'आवेद् न': 'आवेदन',
    'प्रक्रिफया': 'प्रक्रिया',
    'प्रक्रिय़ा': 'प्रक्रिया',
    'आधिक़ारिक': 'आधिकारिक',
    'ग्रा मीण': 'ग्रामीण',
    'बैंक़': 'बैंक',
    'असिस् टेंट': 'असिस्टेंट',
    'कनि ष्ठ': 'कनिष्ठ',
    'असि स् टेंट': 'असिस्टेंट',
    'ऑफ़िस': 'ऑफिस',
    'असिस्टें ट': 'असिस्टेंट',
    'असिस्टेंट्': 'असिस्टेंट',
    'सहाय़क': 'सहायक',
    'लेखा कार': 'लेखाकार',
    'परी क्षा': 'परीक्षा',
    'पाठ्य़क्रम': 'पाठ्यक्रम',
    'वेतन मान': 'वेतनमान',
    'महत्त्वपूर्ण': 'महत्वपूर्ण'
}

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        c = f.read()
    for k, v in conjunct_fixes.items():
        c = c.replace(k, v)
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(c)

print("Polish completed.")
