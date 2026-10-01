import re, os

fixes = {
    "service/ration-card.html": {
        "title": "E-Ration Card Apply Online 2026 (₹0 फीस) - Direct Link",
        "desc": "E-Ration Card बिल्कुल FREE में ऑनलाइन बनाएं! नई लिस्ट में नाम चेक करें, PDF डाउनलोड करें। APL/BPL स्टेटस और Aadhaar E-KYC लिंक यहाँ।"
    },
    "service/csc-locator/assam/guwahati.html": {
        "title": "Guwahati CSC Center Near Me 2026 | Address (FREE सेवा)",
        "desc": "Guwahati के सभी CSC / Pragya Kendra का सटीक पता और फोन नंबर। सरकारी सेवाएं ₹0 में! Aadhaar, PAN, Certificate अभी बनवाएं।"
    },
    "service/jan-aushadhi-store-locator.html": {
        "title": "Jan Aushadhi Kendra Near Me 2026 | 90% सस्ती दवाई (FREE खोजें)",
        "desc": "अपने नज़दीक का Jan Aushadhi Store खोजें! 10,000+ PMBJP Kendra का पता और फोन नंबर। Generic दवाइयां 90% सस्ती। अभी Search करें!"
    },
    "service/csc-locator/uttarakhand/dehradun.html": {
        "title": "Dehradun CSC Center List 2026 | नज़दीकी केंद्र (FREE)",
        "desc": "Dehradun के सभी CSC / Jan Seva Kendra का पता और नंबर। Aadhaar, PAN, Certificate ₹0 में बनवाएं। सटीक Address अभी देखें!"
    }
}

count = 0
for filepath, meta in fixes.items():
    if not os.path.exists(filepath):
        print(f"SKIP: {filepath}")
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

print(f"Total: {count} more pages fixed.")
