import glob
import re
import json
import os
import sys
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

service_files = [f for f in glob.glob('service/*.html') if os.path.basename(f) != 'service.html']
print(f"=== AUDITING {len(service_files)} SERVICE PAGES POST-UPGRADE ===")

thin_count = 0
missing_grid = 0
missing_faq_schema = 0
missing_official_link = 0

sample_checks = ["pan-card.html", "passport.html", "voter-id-card.html", "ration-card.html", "pm-kisan.html", "cg-income-certificate.html", "br-income-certificate.html"]

for fpath in service_files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()
        
    soup = BeautifulSoup(html, 'html.parser')
    text = soup.get_text(separator=' ', strip=True)
    words = len(text.split())
    
    if words < 120:
        thin_count += 1
        
    # Check related services grid
    grid = soup.find(class_='related-services-grid')
    if not grid or len(grid.find_all('a')) < 2:
        missing_grid += 1
        
    # Check FAQ Schema
    schema_tags = soup.find_all('script', attrs={'type': 'application/ld+json'})
    has_faq_schema = False
    for s in schema_tags:
        if s.string and 'FAQPage' in s.string:
            try:
                parsed = json.loads(s.string)
                has_faq_schema = True
            except:
                pass
    if not has_faq_schema:
        missing_faq_schema += 1
        
    # Check Official Link
    if not ('आधिकारिक लिंक' in html or 'Official Portal' in html or 'link-list' in html):
        missing_official_link += 1

print(f"1. Thin Pages (< 120 words): {thin_count}")
print(f"2. Pages Missing Related Grid: {missing_grid}")
print(f"3. Pages Missing FAQPage Schema: {missing_faq_schema}")
print(f"4. Pages Missing Official Link Section: {missing_official_link}")

print("\n--- SAMPLE PAGE DETAIL CHECKS ---")
for sample in sample_checks:
    sp = os.path.join('service', sample)
    if os.path.exists(sp):
        with open(sp, 'r', encoding='utf-8') as fp:
            s_html = fp.read()
        soup = BeautifulSoup(s_html, 'html.parser')
        s_words = len(soup.get_text(separator=' ', strip=True).split())
        s_cards = len(soup.find_all(class_='related-card'))
        s_faqs = len(soup.find_all('details'))
        has_faq_s = 'FAQPage' in s_html
        print(f"✔️ {sample:<30} | Words: {s_words:4d} | Related Cards: {s_cards} | FAQs: {s_faqs} | FAQ Schema: {has_faq_s}")

print("\nAll checks completed.")
