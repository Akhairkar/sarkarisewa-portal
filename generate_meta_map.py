import json
import os

states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh", 
    "Chandigarh", "Puducherry", "Andaman & Nicobar", "Lakshadweep", "Dadra & Nagar Haveli"
]

def slugify(name):
    return name.lower().replace(" & ", "-").replace(" ", "-")

# Clickbait Templates for each service
templates = {
    "income-certificate": {
        "titles": [
            "🚨 {state} Income Certificate 2026: Apply Online [100% Free Guide]",
            "(Urgent) How to get {state} Income Certificate Fast - Direct Link",
            "{state} Income Certificate Online Form 2026: Status & Download PDF"
        ],
        "descs": [
            "🚨 स्कॉलरशिप या सरकारी योजना के लिए आय प्रमाण पत्र ज़रूरी है! {state} में Income Certificate मुफ्त (Free) में ऑनलाइन कैसे बनाएं? यहाँ देखें।",
            "🔥 Urgent: Apply for your {state} Income Certificate online in 5 minutes! Direct portal link, exact fees, and required documents list.",
            "✅ {state} आय प्रमाण पत्र (Income Certificate) का नया फॉर्म भरें। घर बैठे मोबाइल से अप्लाई करने का 100% सही तरीका और स्टेटस चेक लिंक।"
        ]
    },
    "domicile-certificate": {
        "titles": [
            "🚨 {state} Domicile Certificate 2026 [Direct Link]: Apply Online Now",
            "(Free Form) {state} Domicile / Residence Certificate Apply Step-by-Step",
            "{state} मूल निवास प्रमाण पत्र 2026: Online Apply & Download PDF"
        ],
        "descs": [
            "🚨 सरकारी नौकरी के लिए मूल निवास प्रमाण पत्र (Domicile) अनिवार्य है! {state} में घर बैठे 100% Free ऑनलाइन अप्लाई कैसे करें, पूरी जानकारी।",
            "🔥 Urgent: Need a {state} Domicile Certificate? Get direct application link, required documents, and offline CSC process right here.",
            "✅ {state} Residence Certificate (मूल निवास) ऑनलाइन आवेदन शुरू! जानें कितनी फीस लगेगी और 7 दिनों में सर्टिफिकेट कैसे प्राप्त करें।"
        ]
    },
    "caste-certificate": {
        "titles": [
            "🚨 {state} Caste Certificate (SC/ST/OBC) 2026: Apply Online [Free]",
            "[Urgent] {state} Caste Certificate Direct Link - Status & Download",
            "{state} जाति प्रमाण पत्र (Caste Certificate) 2026: नया फॉर्म भरें"
        ],
        "descs": [
            "🚨 स्कॉलरशिप और नौकरी में आरक्षण के लिए {state} Caste Certificate तुरंत बनवाएं! 100% Free ऑनलाइन आवेदन का तरीका और दस्तावेज़ की लिस्ट।",
            "🔥 {state} SC/ST/OBC Certificate Apply Online! Get exact portal link, validation rules, and step-by-step PDF guide for fast approval.",
            "✅ {state} में जाति प्रमाण पत्र (Caste Certificate) कैसे बनाएं? घर बैठे मोबाइल से फॉर्म भरने और स्टेटस चेक करने की पूरी प्रोसेस यहाँ है।"
        ]
    },
    "birth-certificate": {
        "titles": [
            "🚨 {state} Birth Certificate Apply Online 2026 [100% Free Process]",
            "(Urgent) How to Download {state} Birth Certificate Online (Direct Link)",
            "{state} जन्म प्रमाण पत्र (Birth Certificate) 2026: ऑनलाइन रजिस्ट्रेशन"
        ],
        "descs": [
            "🚨 21 दिन के अंदर बच्चों का जन्म प्रमाण पत्र (Birth Certificate) फ्री में बनवाएं! {state} में ऑनलाइन आवेदन, फीस और ज़रूरी कागज़ात की पूरी लिस्ट।",
            "🔥 Lost your {state} Birth Certificate? Learn how to search, download PDF, or apply for a duplicate copy online instantly.",
            "✅ {state} में जन्म प्रमाण पत्र (Birth Certificate) कैसे बनाएं? CRS पोर्टल से ऑनलाइन फॉर्म भरने का सबसे आसान और 100% सही तरीका।"
        ]
    },
    "death-certificate": {
        "titles": [
            "🚨 {state} Death Certificate Apply Online 2026 [Instant Download Link]",
            "(Urgent) {state} Death Certificate Registration - Fees & Process",
            "{state} मृत्यु प्रमाण पत्र 2026: Online Apply & Status Check"
        ],
        "descs": [
            "🚨 Urgent: {state} में मृत्यु प्रमाण पत्र (Death Certificate) 21 दिनों के भीतर फ्री में कैसे बनवाएं? बीमा क्लेम के लिए ज़रूरी दस्तावेज़ और डायरेक्ट लिंक।",
            "🔥 Step-by-step guide to applying for a {state} Death Certificate online. Check application status and download PDF copy instantly.",
            "✅ {state} में मृत्यु प्रमाण पत्र (Death Certificate) के लिए ऑनलाइन आवेदन कैसे करें? CRS पोर्टल और CSC की पूरी जानकारी। (100% Free Guide)"
        ]
    },
    "voter-id-card": {
        "titles": [
            "🚨 {state} Voter ID Card 2026 [Direct Link]: Apply Online & Check List",
            "(Free Form 6) {state} Voter ID Registration - Download PDF",
            "{state} वोटर आईडी कार्ड 2026: नई लिस्ट में नाम देखें [Urgent]"
        ],
        "descs": [
            "🚨 चुनाव से पहले वोटर लिस्ट में नाम चेक करें! {state} का नया Voter ID (Form 6) 100% Free में घर बैठे ऑनलाइन बनाएं। ECI डायरेक्ट लिंक।",
            "🔥 Urgent: Apply for a new {state} Voter ID card online via NVSP/Voter Helpline! Find out how to correct name, address, or download e-EPIC.",
            "✅ {state} वोटर लिस्ट (Voter List 2026) जारी! अपना नाम चेक करें और पुराने वोटर आईडी को आधार से लिंक करने का सही तरीका जानें।"
        ]
    },
    "senior-citizen-card": {
        "titles": [
            "🚨 {state} Senior Citizen Card (2026) Online Apply [100% Free]",
            "(Urgent) {state} Senior Citizen Certificate: Big Discounts & Benefits",
            "{state} सीनियर सिटीजन कार्ड 2026: अभी ऑनलाइन अप्लाई करें"
        ],
        "descs": [
            "🚨 60+ उम्र वालों के लिए खुशखबरी! {state} में सीनियर सिटीजन कार्ड से पाएं टैक्स छूट, रेल/बस में फ्री यात्रा और मेडिकल लाभ। अप्लाई करने का सीधा लिंक।",
            "🔥 {state} Senior Citizen Card Application 2026: Know the eligibility, documents required, and step-by-step process to get your card fast.",
            "✅ (100% Free) {state} में सीनियर सिटीजन कार्ड (Senior Citizen Certificate) कैसे बनवाएं? ऑनलाइन फॉर्म और फायदों की पूरी लिस्ट यहाँ देखें।"
        ]
    },
    "driving-licence": {
        "titles": [
            "🚨 {state} Driving Licence Apply Online 2026 [Direct RTO Link]",
            "(Urgent) {state} Driving/Learning Licence: Exact Fees & Status",
            "{state} ड्राइविंग लाइसेंस 2026: Parivahan Sewa 100% Free Guide"
        ],
        "descs": [
            "🚨 बिना एजेंट के घर बैठे {state} ड्राइविंग लाइसेंस (DL) बनाएं! Parivahan Sewa पोर्टल से RTO फीस, ज़रूरी दस्तावेज़ और ऑनलाइन टेस्ट की पूरी जानकारी।",
            "🔥 Urgent: Need a Learning Licence in {state}? Apply online today! Check your DL dispatch status and exact application fees here.",
            "✅ {state} में ड्राइविंग लाइसेंस (Driving Licence) के लिए 100% Free ऑनलाइन आवेदन गाइड! RTO के चक्कर काटने से बचें।"
        ]
    },
    "ration-card": {
        "titles": [
            "🚨 (Free Ration) {state} Ration Card List 2026: Check Name Now!",
            "[Urgent] {state} Ration Card Online Apply - Direct E-KYC Link",
            "{state} राशन कार्ड 2026: नई लिस्ट, ऑनलाइन आवेदन और E-KYC"
        ],
        "descs": [
            "🚨 अभी चेक करें! {state} की नई राशन कार्ड सूची (Ration Card List 2026) जारी! फ्री राशन, नया ऑनलाइन फॉर्म और PDF डाउनलोड डायरेक्ट लिंक।",
            "🔥 Urgent: {state} Ration Card Aadhaar E-KYC is mandatory! Find out how to link your Aadhaar, apply for a new card, or add a family member's name.",
            "✅ {state} में नया राशन कार्ड (Ration Card) कैसे बनवाएं? APL/BPL लिस्ट में नाम देखने का 100% सही तरीका और ज़रूरी दस्तावेज़।"
        ]
    }
}

meta_map = {}

for state in states:
    slug = slugify(state)
    for service, temp in templates.items():
        file_name = f"{slug}-{service}.html"
        
        # Pick a deterministic template based on state name length to keep it consistent
        idx = len(state)
        
        title = temp['titles'][idx % len(temp['titles'])].format(state=state)
        desc = temp['descs'][idx % len(temp['descs'])].format(state=state)
        
        meta_map[file_name] = {
            "title": title,
            "description": desc
        }

# Write to JSON file
with open("meta_map.json", "w", encoding="utf-8") as f:
    json.dump(meta_map, f, ensure_ascii=False, indent=4)

print(f"Generated meta_map.json with {len(meta_map)} highly optimized title/desc pairs.")
