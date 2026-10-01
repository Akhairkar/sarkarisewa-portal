import re
import os

updates = [
    {
        "file": "states/bihar-income-certificate.html",
        "title": "Bihar Income Certificate Apply: आय प्रमाण पत्र (RTPS Bihar)",
        "desc": "RTPS Bihar (ServicePlus) पोर्टल से आय प्रमाण पत्र (Income Certificate) ऑनलाइन कैसे बनवाएं? \u20b90 fee, required documents, फॉर्म और status चेक करने का तरीका।"
    },
    {
        "file": "states/bihar-birth-certificate.html",
        "title": "Bihar Birth Certificate Apply Online: जन्म प्रमाण पत्र PDF",
        "desc": "बिहार (Bihar) में जन्म प्रमाण पत्र (Birth Certificate) ऑनलाइन कैसे अप्लाई करें? Registration process, late fees penalty और PDF सर्टिफिकेट डाउनलोड।"
    },
    {
        "file": "states/bihar.html",
        "title": "Bihar Sarkari Yojana List 2026: बिहार सरकारी योजनाएं & RTPS",
        "desc": "बिहार (Bihar) सरकार की सभी नई योजनाएं, उद्यमी योजना, RTPS पोर्टल सेवाएं और ऑनलाइन फॉर्म यहाँ देखें। Bihar govt jobs और scholarship की पूरी जानकारी।"
    },
    {
        "file": "states/assam-ration-card.html",
        "title": "Assam Ration Card List 2026: असम राशन कार्ड Apply Online",
        "desc": "Assam Food & Civil Supplies राशन कार्ड (Smart Card) नई लिस्ट में अपना नाम कैसे चेक करें? नया राशन कार्ड ऑनलाइन अप्लाई प्रोसेस, documents और e-KYC।"
    },
    {
        "file": "states/assam-income-certificate.html",
        "title": "Assam Income Certificate Apply Online: आय प्रमाण पत्र (e-District)",
        "desc": "e-District Assam (Sewasetu) पोर्टल से आय प्रमाण पत्र (Income Certificate) ऑनलाइन कैसे बनवाएं? \u20b930 fee, required documents, फॉर्म और status चेक करें।"
    },
    {
        "file": "states/assam-birth-certificate.html",
        "title": "Assam Birth Certificate Apply Online: जन्म प्रमाण पत्र PDF",
        "desc": "Assam (Sewasetu) पोर्टल पर जन्म प्रमाण पत्र (Birth Certificate) ऑनलाइन कैसे अप्लाई करें? Registration process, late fees और सर्टिफिकेट डाउनलोड की जानकारी।"
    },
    {
        "file": "states/assam.html",
        "title": "Assam Sarkari Yojana List 2026: असम सरकारी योजनाएं (Sewasetu)",
        "desc": "असम (Assam) सरकार की सभी नई सरकारी योजनाएं, Orunodoi Scheme, Sewasetu पोर्टल सेवाएं और ऑनलाइन फॉर्म यहाँ देखें। Govt jobs और scholarship की जानकारी।"
    },
    {
        "file": "states/arunachal-pradesh-ration-card.html",
        "title": "Arunachal Pradesh Ration Card List 2026: राशन कार्ड Apply",
        "desc": "Arunachal Pradesh Food & Civil Supplies राशन कार्ड नई लिस्ट में नाम कैसे देखें? नया राशन कार्ड (APL/BPL) ऑनलाइन अप्लाई, documents और status।"
    },
    {
        "file": "states/arunachal-pradesh-income-certificate.html",
        "title": "Arunachal Pradesh Income Certificate Apply: आय प्रमाण पत्र",
        "desc": "Arunachal e-Services पोर्टल से आय प्रमाण पत्र (Income Certificate) ऑनलाइन कैसे बनवाएं? Fees, required documents, फॉर्म फॉर्मेट और application status।"
    },
    {
        "file": "states/arunachal-pradesh-birth-certificate.html",
        "title": "Arunachal Pradesh Birth Certificate Apply: जन्म प्रमाण पत्र PDF",
        "desc": "Arunachal Pradesh में जन्म प्रमाण पत्र (Birth Certificate) ऑनलाइन कैसे अप्लाई करें? Registration process, late fee penalty और PDF सर्टिफिकेट डाउनलोड।"
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

print("Applied 10 optimizations for Batch 16 (Hindi Included)")
