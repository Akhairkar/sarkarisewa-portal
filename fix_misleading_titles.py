import re, os

fixes = {
    "service/jan-aushadhi/uttar-pradesh.html": {
        "title": "UP Jan Aushadhi Kendra List 2026 | ₹4 में BP दवाई (90% छूट)",
        "desc": "उत्तर प्रदेश के सभी Jan Aushadhi Kendra का पता और फोन नंबर। Lucknow, Kanpur, Varanasi में दवाई ₹25 नहीं सिर्फ ₹4! अभी खोजें।"
    },
    "service/jan-aushadhi/uttarakhand.html": {
        "title": "Uttarakhand Jan Aushadhi Kendra 2026 | दवाई 90% सस्ती पाएं",
        "desc": "उत्तराखंड में अपने नज़दीक Jan Aushadhi Store खोजें। Dehradun, Haridwar में Generic दवाई 90% Discount पर! लिस्ट + फोन नंबर अभी देखें।"
    },
    "service/jan-aushadhi/rajasthan.html": {
        "title": "Rajasthan Jan Aushadhi Store 2026 | दवाई ₹25 नहीं सिर्फ ₹4",
        "desc": "राजस्थान के सभी Jan Aushadhi Kendra का पता। Jaipur, Jodhpur, Udaipur में 90% सस्ती Generic Medicine खरीदें। अभी नज़दीकी स्टोर खोजें!"
    },
    "service/jan-aushadhi/delhi.html": {
        "title": "Delhi Jan Aushadhi Kendra 2026 | 90% सस्ती दवाई की लिस्ट",
        "desc": "दिल्ली NCR के सभी Jan Aushadhi Store का पता और नंबर। Generic दवाई 90% Discount पर! Noida, Gurgaon सहित पूरी लिस्ट अभी देखें।"
    },
    "service/jan-aushadhi/haryana.html": {
        "title": "Haryana Jan Aushadhi Kendra 2026 | 90% Discount पर दवाई",
        "desc": "हरियाणा के सभी PMBJP Store का पता और फोन नंबर। Faridabad, Gurgaon, Hisar में 90% सस्ती Generic दवाई! नज़दीकी केंद्र खोजें।"
    },
    "service/jan-aushadhi-store-locator.html": {
        "title": "Jan Aushadhi Kendra Near Me 2026 | 90% सस्ती दवाई खोजें",
        "desc": "अपने नज़दीक का Jan Aushadhi Store खोजें! 10,000+ PMBJP Kendra का पता और फोन नंबर। Generic दवाइयां 90% सस्ती। अभी Search करें!"
    }
}

count = 0
for filepath, meta in fixes.items():
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    title = meta['title']
    desc = meta['desc']
    content = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', content, flags=re.IGNORECASE|re.DOTALL)
    content = re.sub(r'<meta\s+name="description"\s+content="[^"]*"\s*/?\s*>', f'<meta name="description" content="{desc}" />', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta\s+property="og:title"\s+content="[^"]*"\s*/?\s*>', f'<meta property="og:title" content="{title}" />', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta\s+property="og:description"\s+content="[^"]*"\s*/?\s*>', f'<meta property="og:description" content="{desc}" />', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta\s+name="twitter:title"\s+content="[^"]*"\s*/?\s*>', f'<meta name="twitter:title" content="{title}" />', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta\s+name="twitter:description"\s+content="[^"]*"\s*/?\s*>', f'<meta name="twitter:description" content="{desc}" />', content, flags=re.IGNORECASE)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    count += 1
    print(f"FIXED: {filepath}")
print(f"Total: {count} pages fixed.")
