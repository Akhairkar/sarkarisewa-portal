import os
import glob
import re
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Create jammu-kashmir.html and jammu-and-kashmir.html in service/csc-locator/
jk_index = 'service/csc-locator/jammu-and-kashmir/index.html'
if os.path.exists(jk_index):
    with open(jk_index, 'r', encoding='utf-8', errors='ignore') as fp:
        jk_content = fp.read()
    # Adjust relative paths from depth 3 to depth 2 (e.g. ../../../ to ../../)
    jk_content_depth2 = jk_content.replace('../../../', '../../')
    jk_content_depth2 = jk_content_depth2.replace('href="jammu.html"', 'href="jammu-and-kashmir/jammu.html"')
    
    with open('service/csc-locator/jammu-kashmir.html', 'w', encoding='utf-8') as fp:
        fp.write(jk_content_depth2)
    with open('service/csc-locator/jammu-and-kashmir.html', 'w', encoding='utf-8') as fp:
        fp.write(jk_content_depth2)
    print("Created service/csc-locator/jammu-kashmir.html & jammu-and-kashmir.html!")

# 2. Fix broken service target aliases across all html files
ALIAS_MAP = {
    "ayushman-bharat-card.html": "ayushman-bharat.html",
    "income-tax-filing.html": "income-tax-return-filing.html",
    "epfo-services.html": "epfo-uan.html",
    "gst-registration-return.html": "gst-registration.html",
    "pm-awas-yojana-urban.html": "pm-awas-yojana.html",
    "education-loan-vidyalakshmi.html": "vidyalakshmi-education-loan.html",
    "academic-bank-of-credits-abc-id.html": "academic-bank-of-credits.html",
    "electricity-connection-and-bill.html": "electricity-connection-bill.html",
    "fastag-services.html": "fastag-registration.html",
    "bihar-ration-card-apply.html": "br-ration-card.html",
    "delhi-e-ration-card.html": "dl-ration-card.html",
    "maharashtra-smart-ration-card.html": "mh-ration-card.html",
    "rajasthan-bhamashah-ration-card.html": "rj-ration-card.html",
    "up-fcs-ration-card.html": "up-ration-card.html",
    "wb-digital-ration-card.html": "wb-ration-card.html",
    "pm-suraksha-bima.html": "pm-suraksha-bima-yojana.html",
    "pm-jeevan-jyoti-bima.html": "pm-jeevan-jyoti-bima-yojana.html",
    "national-career-service.html": "ncs-national-career-service.html",
    "swayam-learning-portal.html": "swayam-online-courses.html"
}

all_html = glob.glob('**/*.html', recursive=True)
all_html = [f for f in all_html if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

fixed_aliases = 0
for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    orig = c
    for bad, good in ALIAS_MAP.items():
        if bad in c:
            c = c.replace(bad, good)
    if c != orig:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c)
        fixed_aliases += 1

print(f"Fixed broken target aliases in {fixed_aliases} files!")
