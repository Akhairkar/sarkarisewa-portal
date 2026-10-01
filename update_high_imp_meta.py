import os
import re

targets = [
    {
        "file": "states/uttarakhand-ration-card.html",
        "title": "Uttarakhand Ration Card List 2026: Check Name & Download PDF [100% Free]",
        "desc": "✅ उत्तराखंड की नई राशन कार्ड सूची (Ration Card List 2026) जारी! FCS पोर्टल से घर बैठे अपना नाम चेक करें और नया राशन कार्ड ऑनलाइन अप्लाई करें।"
    },
    {
        "file": "service/jan-aushadhi/uttar-pradesh.html",
        "title": "Jan Aushadhi Kendra in Uttar Pradesh: Find PMBJP Store Near Me",
        "desc": "📍 Looking for cheap medicines? Find the exact address & contact details of all Pradhan Mantri Jan Aushadhi Kendras in UP. Search stores near you!"
    },
    {
        "file": "states/jharkhand-senior-citizen-card.html",
        "title": "Jharkhand Senior Citizen Card (2026): Apply Online & Get Certificate Fast",
        "desc": "✅ झारखंड में सीनियर सिटीजन कार्ड (Senior Citizen Certificate) कैसे बनवाएं? Pragya Kendra (JharSewa) से ऑनलाइन आवेदन, ज़रूरी दस्तावेज़ और फायदे जानें।"
    },
    {
        "file": "support/rti-guide.html",
        "title": "How to File RTI Online in India (2026): Step-by-Step Guide & Form",
        "desc": "📝 Want to file an RTI but don't know how? Read our ultimate step-by-step guide to filing an RTI online in India. Get format, fees, and tracking info."
    },
    {
        "file": "states/assam-senior-citizen-card.html",
        "title": "Assam Senior Citizen Card (2026) [Direct Link]: Apply Online at Sewa Setu",
        "desc": "✅ असम में सीनियर सिटीजन कार्ड के लिए ऑनलाइन आवेदन कैसे करें? Sewa Setu पोर्टल से अप्लाई करने का पूरा तरीका, फीस, और दस्तावेज़ (PFC/CSC) की जानकारी।"
    },
    {
        "file": "states/telangana-death-certificate.html",
        "title": "Telangana Death Certificate Apply Online 2026 [Direct Download Link]",
        "desc": "✅ How to apply for a Death Certificate in Telangana? Step-by-step process via Meeseva, required documents, fees, and delayed registration rules explained."
    },
    {
        "file": "states/west-bengal-voter-id-card.html",
        "title": "West Bengal Voter ID Card 2026: Check Voter List & Apply Online (New Form 6)",
        "desc": "✅ पश्चिम बंगाल में नया वोटर आईडी (Voter ID) कैसे बनाएं? ECI पोर्टल से ऑनलाइन फॉर्म 6 भरें, वोटर लिस्ट में नाम चेक करें और एप्लीकेशन स्टेटस जानें।"
    },
    {
        "file": "states/jharkhand-caste-certificate.html",
        "title": "Jharkhand Caste Certificate (SC/ST/OBC) 2026: Apply Online via JharSewa",
        "desc": "✅ झारखंड में जाति प्रमाण पत्र (Caste Certificate) कैसे बनाएं? JharSewa पोर्टल से ऑनलाइन फॉर्म भरने, दस्तावेज़ अपलोड करने और स्टेटस चेक करने का सही तरीका।"
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
    
    # Replace Meta Description (handling both name="description" and content="..." order)
    content = re.sub(r'<meta[^>]*name="description"[^>]*>', f'<meta name="description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*content="[^"]*"[^>]*name="description"[^>]*>', f'<meta name="description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)
    
    # Replace OG and Twitter tags if present
    content = re.sub(r'<meta[^>]*property="og:title"[^>]*>', f'<meta property="og:title" content="{t["title"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*property="og:description"[^>]*>', f'<meta property="og:description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*name="twitter:title"[^>]*>', f'<meta name="twitter:title" content="{t["title"]}"/>', content, flags=re.IGNORECASE)
    content = re.sub(r'<meta[^>]*name="twitter:description"[^>]*>', f'<meta name="twitter:description" content="{t["desc"]}"/>', content, flags=re.IGNORECASE)

    # In states, we also have <h1 class="service-hero__title">
    # No need to touch H1, keeping it as is gives good variety (Title Tag vs H1).

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated {filepath}")
