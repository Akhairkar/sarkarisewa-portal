import re
import os

updates = [
    {
        "file": "states/ladakh-ration-card.html",
        "title": "Ladakh Ration Card List 2026: लद्दाख राशन कार्ड Apply Online",
        "desc": "Ladakh Food & Civil Supplies राशन कार्ड नई लिस्ट (Smart Card) में अपना नाम कैसे चेक करें? नया राशन कार्ड ऑनलाइन अप्लाई प्रोसेस, documents और e-KYC।"
    },
    {
        "file": "states/ladakh-income-certificate.html",
        "title": "Ladakh Income Certificate Apply Online: आय प्रमाण पत्र",
        "desc": "Ladakh e-Services पोर्टल से आय प्रमाण पत्र (Income Certificate) ऑनलाइन कैसे बनवाएं? Fees, required documents, फॉर्म फॉर्मेट और status चेक करने का तरीका।"
    },
    {
        "file": "states/ladakh-birth-certificate.html",
        "title": "Ladakh Birth Certificate Apply Online: जन्म प्रमाण पत्र PDF",
        "desc": "Ladakh में जन्म प्रमाण पत्र (Birth Certificate) ऑनलाइन कैसे अप्लाई करें? Registration process, late fee penalty और PDF सर्टिफिकेट डाउनलोड की जानकारी।"
    },
    {
        "file": "states/kerala-ration-card.html",
        "title": "Kerala Ration Card List 2026: Civil Supplies Apply Online",
        "desc": "Kerala Civil Supplies (PDS) राशन कार्ड नई लिस्ट में नाम कैसे देखें? नया राशन कार्ड ऑनलाइन अप्लाई, documents और e-KYC (Aadhaar seeding) का official प्रोसेस।"
    },
    {
        "file": "states/kerala-income-certificate.html",
        "title": "Kerala Income Certificate Apply Online: e-District Kerala",
        "desc": "e-District Kerala पोर्टल से Income Certificate (आय प्रमाण पत्र) ऑनलाइन कैसे बनवाएं? \u20b915 fees, required documents, फॉर्म और status चेक करने का आसान तरीका।"
    },
    {
        "file": "states/kerala-birth-certificate.html",
        "title": "Kerala Birth Certificate Apply Online: Sevana Portal PDF",
        "desc": "Kerala (Sevana Portal) में जन्म प्रमाण पत्र (Birth Certificate) ऑनलाइन कैसे अप्लाई करें? Registration, late fees और PDF सर्टिफिकेट डाउनलोड।"
    },
    {
        "file": "states/kerala.html",
        "title": "Kerala Sarkari Yojana List 2026: e-District Services & Schemes",
        "desc": "Kerala सरकार की सभी नई सरकारी योजनाएं, LIFE Mission, e-District Kerala सेवाएं और ऑनलाइन फॉर्म यहाँ देखें। Kerala govt jobs और scholarship की पूरी जानकारी।"
    },
    {
        "file": "states/karnataka-ration-card.html",
        "title": "Karnataka Ration Card List 2026: Ahara Karnataka Apply Online",
        "desc": "Ahara Karnataka (ahara.kar.nic.in) राशन कार्ड नई लिस्ट में नाम कैसे देखें? नया BPL/APL राशन कार्ड ऑनलाइन अप्लाई, documents और e-KYC का official प्रोसेस।"
    },
    {
        "file": "states/karnataka-income-certificate.html",
        "title": "Karnataka Income Certificate Apply: Nadakacheri Portal",
        "desc": "Nadakacheri Karnataka पोर्टल से Income Certificate ऑनलाइन कैसे बनवाएं? \u20b925 fee, required documents, application form और status चेक करने का तरीका।"
    },
    {
        "file": "states/karnataka-birth-certificate.html",
        "title": "Karnataka Birth Certificate Apply Online: eJanMa Portal",
        "desc": "Karnataka (eJanMa) पोर्टल पर जन्म प्रमाण पत्र (Birth Certificate) कैसे अप्लाई करें? Registration process, late fees और PDF सर्टिफिकेट डाउनलोड करने की जानकारी।"
    }
]

for item in updates:
    path = item['file']
    if not os.path.exists(path): continue
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = re.sub(r'<title>.*?</title>', f'<title>{item["title"]}</title>', html, flags=re.IGNORECASE|re.DOTALL)
    
    if re.search(r'<meta[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'(<meta[^>]*name=["\']description["\'][^>]*content=["\'])(.*?)(["\'][^>]*>)', 
                      rf'\g<1>{item["desc"]}\g<3>', html, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<head[^>]*>)', rf'\1\n  <meta name="description" content="{item["desc"]}">', html, flags=re.IGNORECASE)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)

print("Applied 10 optimizations for Batch 11 (Hindi Included)")
