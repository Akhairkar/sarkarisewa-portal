import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# State official portals mapping
STATE_OFFICIAL_PORTALS = {
    "andaman": "https://edistrict.andaman.gov.in",
    "andhra": "https://ap.meeseva.gov.in",
    "ap": "https://ap.meeseva.gov.in",
    "arunachal": "https://eservice.arunachal.gov.in",
    "assam": "https://sewasetu.assam.gov.in",
    "as": "https://sewasetu.assam.gov.in",
    "bihar": "https://serviceonline.bihar.gov.in",
    "br": "https://serviceonline.bihar.gov.in",
    "chandigarh": "https://chdservices.gov.in",
    "chhattisgarh": "https://edistrict.cgstate.gov.in",
    "cg": "https://edistrict.cgstate.gov.in",
    "delhi": "https://edistrict.delhigovt.nic.in",
    "dl": "https://edistrict.delhigovt.nic.in",
    "goa": "https://goaonline.gov.in",
    "ga": "https://goaonline.gov.in",
    "gujarat": "https://digitalgujarat.gov.in",
    "gj": "https://digitalgujarat.gov.in",
    "haryana": "https://saralharyana.gov.in",
    "hr": "https://saralharyana.gov.in",
    "himachal": "https://edistrict.hp.gov.in",
    "hp": "https://edistrict.hp.gov.in",
    "jammu": "https://jkeservices.jk.gov.in",
    "jk": "https://jkeservices.jk.gov.in",
    "jharkhand": "https://jharsewa.jharkhand.gov.in",
    "jh": "https://jharsewa.jharkhand.gov.in",
    "karnataka": "https://sevasindhu.karnataka.gov.in",
    "ka": "https://sevasindhu.karnataka.gov.in",
    "kerala": "https://edistrict.kerala.gov.in",
    "kl": "https://edistrict.kerala.gov.in",
    "ladakh": "https://edistrict.ladakh.gov.in",
    "lakshadweep": "https://lakshadweep.gov.in",
    "madhya-pradesh": "https://mpedistrict.gov.in",
    "mp": "https://mpedistrict.gov.in",
    "maharashtra": "https://aaplesarkar.mahaonline.gov.in",
    "mh": "https://aaplesarkar.mahaonline.gov.in",
    "manipur": "https://eservicesmanipur.gov.in",
    "mn": "https://eservicesmanipur.gov.in",
    "meghalaya": "https://megedistrict.gov.in",
    "ml": "https://megedistrict.gov.in",
    "mizoram": "https://msegs.mizoram.gov.in",
    "mz": "https://msegs.mizoram.gov.in",
    "nagaland": "https://edistrict.nagaland.gov.in",
    "nl": "https://edistrict.nagaland.gov.in",
    "odisha": "https://edistrict.odisha.gov.in",
    "od": "https://edistrict.odisha.gov.in",
    "puducherry": "https://edistrict.py.gov.in",
    "py": "https://edistrict.py.gov.in",
    "punjab": "https://esewa.punjab.gov.in",
    "pb": "https://esewa.punjab.gov.in",
    "rajasthan": "https://emitra.rajasthan.gov.in",
    "rj": "https://emitra.rajasthan.gov.in",
    "sikkim": "https://services.sikkim.gov.in",
    "sk": "https://services.sikkim.gov.in",
    "tamil-nadu": "https://www.tnesevai.tn.gov.in",
    "tn": "https://www.tnesevai.tn.gov.in",
    "telangana": "https://tg.meeseva.telangana.gov.in",
    "ts": "https://tg.meeseva.telangana.gov.in",
    "tripura": "https://edistrict.tripura.gov.in",
    "tr": "https://edistrict.tripura.gov.in",
    "uttar-pradesh": "https://edistrict.up.gov.in",
    "up": "https://edistrict.up.gov.in",
    "uttarakhand": "https://eservices.uk.gov.in",
    "uk": "https://eservices.uk.gov.in",
    "west-bengal": "https://edistrict.wb.gov.in",
    "wb": "https://edistrict.wb.gov.in"
}

# General Scheme Portals
SCHEME_PORTALS = {
    "pm-kisan": "https://pmkisan.gov.in",
    "ayushman-bharat": "https://pmjay.gov.in",
    "pm-awas": "https://pmaymis.gov.in",
    "e-shram": "https://eshram.gov.in",
    "epfo": "https://unifiedportal-mem.epfindia.gov.in",
    "pan": "https://www.onlineservices.nsdl.com",
    "aadhaar": "https://myaadhaar.uidai.gov.in",
    "voter": "https://voters.eci.gov.in",
    "passport": "https://passportindia.gov.in",
    "driving": "https://parivahan.gov.in",
    "ration": "https://nfsa.gov.in",
    "kisan-credit-card": "https://pmkisan.gov.in",
    "sukanya": "https://www.indiapost.gov.in",
    "nps": "https://enps.nsdl.com",
    "lpg": "https://pmuy.gov.in",
    "scholarship": "https://scholarships.gov.in",
    "digilocker": "https://www.digilocker.gov.in"
}

service_files = sorted(glob.glob('service/*.html'))
print(f"Checking {len(service_files)} service files...")

fixed_count = 0

for sf in service_files:
    fname = os.path.basename(sf)
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        html = fp.read()

    if 'http-equiv="refresh"' in html or fname == 'service.html':
        continue

    # Determine best gov URL
    best_gov_url = "https://india.gov.in"
    prefix = fname.split('-')[0]
    
    if prefix in STATE_OFFICIAL_PORTALS:
        best_gov_url = STATE_OFFICIAL_PORTALS[prefix]
    else:
        for sname, purl in STATE_OFFICIAL_PORTALS.items():
            if fname.startswith(sname + '-'):
                best_gov_url = purl
                break
        else:
            for sname, purl in SCHEME_PORTALS.items():
                if sname in fname:
                    best_gov_url = purl
                    break

    # If href="#" in service-hero__actions or missing gov link
    modified = False
    if 'href="#"' in html:
        html = html.replace('href="#"', f'href="{best_gov_url}"')
        modified = True

    # Check if section "आधिकारिक लिंक" is present
    if 'class="link-list"' not in html and 'आधिकारिक लिंक' not in html:
        official_link_section = f"""
      <section class="service-section">
        <h2 class="service-section__title"><span class="icon">🔗</span> आधिकारिक लिंक</h2>
        <ul class="link-list">
          <li class="link-list__item">
            <span class="link-list__label">आधिकारिक पोर्टल पर जाएं →</span>
            <a class="link-list__go" href="{best_gov_url}" target="_blank" rel="noopener">Visit &rarr;</a>
          </li>
        </ul>
      </section>
"""
        if '<div id="service-sections">' in html:
            html = html.replace('<div id="service-sections">', '<div id="service-sections">\n' + official_link_section)
            modified = True

    if modified:
        with open(sf, 'w', encoding='utf-8') as fp:
            fp.write(html)
        fixed_count += 1

print(f"Fixed official gov links in {fixed_count} service files!")
