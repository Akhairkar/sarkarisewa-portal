import re
import os

# Top impression pages from GSC with handcrafted high-CTR titles & descriptions
# Using urgency, FREE, ₹0, direct action keywords
fixes = {
    "service/jan-aushadhi/uttar-pradesh.html": {
        "title": "UP Jan Aushadhi Kendra List 2026 | ₹0 में दवाई (90% छूट)",
        "desc": "उत्तर प्रदेश के सभी Jan Aushadhi Kendra का पता और फोन नंबर। Lucknow, Kanpur, Varanasi में 90% सस्ती दवाई FREE में खोजें। अभी देखें!"
    },
    "service/e-ration-card.html": {
        "title": "E-Ration Card Apply Online 2026 (₹0 फीस) - Direct Link",
        "desc": "E-Ration Card बिल्कुल FREE में ऑनलाइन बनाएं! नई लिस्ट में नाम चेक करें, PDF डाउनलोड करें। APL/BPL स्टेटस और Aadhaar E-KYC लिंक यहाँ।"
    },
    "states/jharkhand-senior-citizen-card.html": {
        "title": "Jharkhand Senior Citizen Card (FREE) | ₹0 में अप्लाई करें",
        "desc": "झारखंड में 60+ उम्र वालों को FREE बस/ट्रेन यात्रा, टैक्स छूट और मेडिकल लाभ! Senior Citizen Card ₹0 में अभी ऑनलाइन बनवाएं।"
    },
    "support/rti-guide.html": {
        "title": "RTI कैसे लगाएं? 2026 Guide (₹10 में सरकारी जवाब पाएं)",
        "desc": "RTI Application सिर्फ ₹10 में फाइल करें! सरकार को 30 दिन में जवाब देना अनिवार्य है। Online RTI Form, Format PDF और Step-by-Step Guide।"
    },
    "service/csc-locator/delhi/delhi.html": {
        "title": "Delhi CSC Center Near Me 2026 (FREE सेवाएं) | पता और नंबर",
        "desc": "दिल्ली के सभी CSC / Jan Seva Kendra का सटीक पता खोजें। Aadhaar, PAN, Passport सब FREE में बनवाएं। नज़दीकी सेंटर अभी खोजें!"
    },
    "index.html": {
        "title": "SarkariSewa India | सभी सरकारी सेवाएं एक जगह (FREE)",
        "desc": "Aadhaar, PAN, Ration Card, Passport, Income Certificate सब कुछ FREE में ऑनलाइन अप्लाई करें। 1000+ सरकारी योजनाओं का Direct Link।"
    },
    "service/csc-locator/karnataka/bengaluru.html": {
        "title": "Bengaluru CSC Center List 2026 | नज़दीकी केंद्र खोजें (FREE)",
        "desc": "Bengaluru के सभी Common Service Centers का पता और फोन नंबर। Aadhaar Update, PAN Card, Passport सब ₹0 में। अभी नज़दीकी CSC खोजें!"
    },
    "service/csc-locator/west-bengal/kolkata.html": {
        "title": "Kolkata CSC Center Near Me 2026 | Address & Phone (FREE)",
        "desc": "Kolkata के सभी CSC Pragya Kendra का सटीक पता खोजें। सरकारी सेवाएं ₹0 में बनवाएं - Aadhaar, Certificate, Banking सब एक जगह!"
    },
    "service/jan-aushadhi/uttarakhand.html": {
        "title": "Uttarakhand Jan Aushadhi Kendra 2026 | 90% सस्ती दवाई (FREE)",
        "desc": "उत्तराखंड में अपने नज़दीक Jan Aushadhi Store खोजें। Dehradun, Haridwar में 90% छूट पर Generic दवाइयां। लिस्ट + फोन नंबर अभी देखें!"
    },
    "service/csc-locator/gujarat/ahmedabad.html": {
        "title": "Ahmedabad CSC Center 2026 | FREE Aadhaar, PAN सेवा (₹0)",
        "desc": "Ahmedabad के सभी CSC Jan Seva Kendra का पता और नंबर। Aadhaar Update, Certificate, Banking सब FREE में! नज़दीकी सेंटर खोजें।"
    },
    "service/csc-locator/haryana/faridabad.html": {
        "title": "Faridabad CSC Center Near Me 2026 | Address (FREE सेवा)",
        "desc": "Faridabad के सभी CSC / Atal Seva Kendra का सटीक पता और फोन नंबर। सरकारी सेवाएं ₹0 में! नज़दीकी केंद्र का Address अभी देखें।"
    },
    "service/jan-aushadhi/rajasthan.html": {
        "title": "Rajasthan Jan Aushadhi Store List 2026 | 90% सस्ती दवाई",
        "desc": "राजस्थान के सभी Jan Aushadhi Kendra का पता। Jaipur, Jodhpur, Udaipur में ₹0 फीस पर 90% सस्ती Generic Medicine खरीदें। अभी खोजें!"
    },
    "service/csc-locator/gujarat/surat.html": {
        "title": "Surat CSC Center List 2026 (FREE) | Address + Phone Number",
        "desc": "Surat के सभी Common Service Center का सटीक पता और फोन नंबर। Aadhaar, PAN, Certificate सब FREE में बनवाएं। नज़दीकी CSC खोजें!"
    },
    "service/csc-locator/maharashtra/mumbai.html": {
        "title": "Mumbai CSC Center Near Me 2026 | नज़दीकी केंद्र (FREE)",
        "desc": "Mumbai के सभी Aaple Sarkar / CSC Center का पता और नंबर। Aadhaar, PAN, Passport सब ₹0 में! Andheri, Thane, Borivali सब का Address।"
    },
    "service/jan-aushadhi/delhi.html": {
        "title": "Delhi Jan Aushadhi Kendra List 2026 | 90% सस्ती दवाई (FREE)",
        "desc": "दिल्ली NCR के सभी Jan Aushadhi Store का पता और नंबर। Generic दवाई 90% सस्ती मिलेगी! Noida, Gurgaon सहित पूरी लिस्ट अभी देखें।"
    },
    "states/telangana-death-certificate.html": {
        "title": "Telangana Death Certificate Online 2026 (FREE Apply ₹0)",
        "desc": "Telangana में Death Certificate ₹0 फीस में ऑनलाइन अप्लाई करें। Insurance Claim के लिए ज़रूरी! MeeSeva Portal से Direct Apply Link।"
    },
    "service/jan-aushadhi/haryana.html": {
        "title": "Haryana Jan Aushadhi Kendra 2026 | 90% छूट वाली दवाई (FREE)",
        "desc": "हरियाणा के सभी PMBJP Store का पता और फोन नंबर। Faridabad, Gurgaon, Hisar में 90% सस्ती दवाई! अभी नज़दीकी केंद्र खोजें।"
    }
}

count = 0
for filepath, meta in fixes.items():
    if not os.path.exists(filepath):
        print(f"SKIP (not found): {filepath}")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    title = meta['title']
    desc = meta['desc']
    
    # Replace Title
    content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', content, flags=re.IGNORECASE|re.DOTALL)
    
    # Replace Meta Description
    content = re.sub(r'<meta\s+name="description"\s+content="[^"]*"\s*/?\s*>', f'<meta name="description" content="{desc}" />', content, flags=re.IGNORECASE)
    
    # Replace OG and Twitter tags
    content = re.sub(r'<meta\s+property="og:title"\s+content="[^"]*"\s*/?\s*>', f'<meta property="og:title" content="{title}" />', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta\s+property="og:description"\s+content="[^"]*"\s*/?\s*>', f'<meta property="og:description" content="{desc}" />', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta\s+name="twitter:title"\s+content="[^"]*"\s*/?\s*>', f'<meta name="twitter:title" content="{title}" />', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta\s+name="twitter:description"\s+content="[^"]*"\s*/?\s*>', f'<meta name="twitter:description" content="{desc}" />', content, flags=re.IGNORECASE)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    count += 1
    print(f"FIXED: {filepath}")

print(f"\nTotal: {count} pages fixed with high-CTR titles.")
