import os
import re

targets = [
    {
        "file": "states/uttarakhand-ration-card.html",
        "title": "(Free Ration) Uttarakhand Ration Card List 2026: Check Name Now!",
        "desc": "🚨 अभी चेक करें! उत्तराखंड राशन कार्ड सूची (Ration Card List) में अपना नाम देखें। फ्री राशन, नया ऑनलाइन फॉर्म और PDF डाउनलोड डायरेक्ट लिंक।"
    },
    {
        "file": "service/jan-aushadhi/uttar-pradesh.html",
        "title": "UP Jan Aushadhi Kendra List: 90% कम में खरीदें दवाएं",
        "desc": "🚨 बाजार से 90% सस्ती दवाएं! उत्तर प्रदेश (UP) में अपने नज़दीकी जन औषधि केंद्र का पूरा पता और डायरेक्टरी अभी चेक करें और हजारों रुपये बचाएं।"
    },
    {
        "file": "states/jharkhand-senior-citizen-card.html",
        "title": "Jharkhand Senior Citizen Card (2026) Online Apply [100% Free]",
        "desc": "🚨 60+ उम्र वालों के लिए खुशखबरी! झारखंड में सीनियर सिटीजन कार्ड (JharSewa) से पाएं ढेरों फायदे। ऑनलाइन अप्लाई करने का सीधा लिंक यहाँ है।"
    },
    {
        "file": "support/rti-guide.html",
        "title": "(Urgent) How to File RTI Online in India 2026: Get Govt Info Fast",
        "desc": "🚨 सरकारी विभागों से कोई भी जानकारी निकलवाएं सिर्फ ₹10 में! RTI Online File करने का 100% सही और आसान तरीका (Step-by-Step Guide)।"
    },
    {
        "file": "states/assam-senior-citizen-card.html",
        "title": "Assam Senior Citizen Card Apply Online [Direct Sewa Setu Link]",
        "desc": "🚨 असम के बुजुर्गों के लिए बड़ी खबर! Sewa Setu से Senior Citizen Card के लिए घर बैठे मुफ्त (Free) में आवेदन करें। तुरंत अप्रूवल और फायदे जानें।"
    },
    {
        "file": "states/telangana-death-certificate.html",
        "title": "Telangana Death Certificate (2026): Apply Meeseva [Instant Download]",
        "desc": "🚨 Urgent: How to get a Death Certificate in Telangana within 24 hours? Direct Meeseva portal link, exact fees, and required documents list."
    },
    {
        "file": "states/west-bengal-voter-id-card.html",
        "title": "West Bengal Voter ID 2026 [Direct Link]: Apply Online & Check List",
        "desc": "🚨 चुनाव से पहले वोटर लिस्ट में नाम चेक करें! पश्चिम बंगाल (WB) का नया Voter ID (Form 6) 100% Free में घर बैठे ऑनलाइन बनाएं।"
    },
    {
        "file": "states/jharkhand-caste-certificate.html",
        "title": "Jharkhand Caste Certificate (SC/ST/OBC) Online [JharSewa Link]",
        "desc": "🚨 स्कॉलरशिप या नौकरी के लिए जाति प्रमाण पत्र (Caste Certificate) ज़रूरी है! JharSewa पोर्टल से झारखंड में इसे मुफ्त (Free) में अप्लाई करें।"
    }
]

for t in targets:
    filepath = t['file']
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} - Not found")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Replace Title
    content = re.sub(r'<title>.*?</title>', f'<title>{t["title"]}</title>', content, flags=re.IGNORECASE|re.DOTALL)
    
    # Replace Meta Description
    content = re.sub(r'<meta[^>]*name="description"[^>]*>', f'<meta name="description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*content="[^"]*"[^>]*name="description"[^>]*>', f'<meta name="description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)
    
    # Replace OG and Twitter tags if present
    content = re.sub(r'<meta[^>]*property="og:title"[^>]*>', f'<meta property="og:title" content="{t["title"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*property="og:description"[^>]*>', f'<meta property="og:description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*name="twitter:title"[^>]*>', f'<meta name="twitter:title" content="{t["title"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*name="twitter:description"[^>]*>', f'<meta name="twitter:description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Applied URGENCY metadata to {filepath}")
