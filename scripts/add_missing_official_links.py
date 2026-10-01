# -*- coding: utf-8 -*-
import os, sys, glob, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICE_DIR = os.path.join(ROOT, 'service')

STATE_PORTALS = {
    'arunachal': ('https://arunachalpradesh.gov.in/', 'अरुणाचल प्रदेश सरकार आधिकारिक पोर्टल (Arunachal Govt Portal)'),
    'goa': ('https://goaonline.gov.in/', 'गोवा ऑनलाइन आधिकारिक नागरिक पोर्टल (Goa Online)'),
    'hp': ('https://himachal.nic.in/', 'हिमाचल प्रदेश सरकार ई-डिस्ट्रिक्ट पोर्टल (HP e-District)'),
    'himachal': ('https://himachal.nic.in/', 'हिमाचल प्रदेश सरकार पोर्टल (Himachal Portal)'),
    'manipur': ('https://manipur.gov.in/', 'मणिपुर सरकार आधिकारिक पोर्टल (Manipur Govt Portal)'),
    'meghalaya': ('https://meghalaya.gov.in/', 'मेघालय सरकार आधिकारिक पोर्टल (Meghalaya Portal)'),
    'mizoram': ('https://mizoram.gov.in/', 'मिज़ोरम सरकार आधिकारिक पोर्टल (Mizoram Portal)'),
    'nagaland': ('https://nagaland.gov.in/', 'नागालैंड सरकार आधिकारिक पोर्टल (Nagaland Portal)'),
    'sikkim': ('https://sikkim.gov.in/', 'सिक्किम सरकार आधिकारिक पोर्टल (Sikkim Portal)'),
    'tripura': ('https://tripura.gov.in/', 'त्रिपुरा सरकार आधिकारिक पोर्टल (Tripura Portal)'),
    'ladakh': ('https://ladakh.nic.in/', 'लद्दाख यूटी आधिकारिक पोर्टल (Ladakh Portal)'),
    'puducherry': ('https://py.gov.in/', 'पुदुचेरी सरकार आधिकारिक पोर्टल (Puducherry Portal)'),
}

def add_missing_official_links():
    services = glob.glob(os.path.join(SERVICE_DIR, '*.html'))
    healed = 0
    for s in services:
        with open(s, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        if 'http-equiv="refresh"' in c:
            continue
            
        has_gov_link = bool(re.search(r'https?://[a-zA-Z0-9.-]+\.gov\.in|https?://[a-zA-Z0-9.-]+\.nic\.in|officialLinks|officialLink|आधिकारिक लिंक|Primary Source', c, re.IGNORECASE))
        if not has_gov_link:
            fn = os.path.basename(s)
            state_key = fn.split('-')[0]
            url, label = STATE_PORTALS.get(state_key, ('https://serviceonline.gov.in/', 'राष्ट्रीय ई-डिस्ट्रिक्ट पोर्टल (ServicePlus)'))
            
            link_block = f'''
      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">🔗</span> आधिकारिक लिंक</h2>
        <ul class="link-list">
          <li class="link-list__item">
            <span class="link-list__label">{label}</span>
            <a class="link-list__go" href="{url}" target="_blank" rel="noopener">Visit &rarr;</a>
          </li>
        </ul>
      </section>
'''
            if '<div id="service-sections">' in c:
                c = c.replace('<div id="service-sections">', f'<div id="service-sections">\n{link_block}')
            elif '</main>' in c:
                c = c.replace('</main>', f'{link_block}\n</main>')
            elif '<div id="site-footer">' in c:
                c = c.replace('<div id="site-footer">', f'{link_block}\n<div id="site-footer">')
                
            with open(s, 'w', encoding='utf-8') as fp:
                fp.write(c)
            healed += 1
            print(f"Added official link to {fn} -> {url}")
            
    print(f"\nSuccessfully added official links to {healed} service files.")

if __name__ == '__main__':
    add_missing_official_links()
