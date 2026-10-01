import os

filepath = "generate_web_stories.py"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

new_stories = """    {
        "slug": "mpbcdc-loan-schemes-maharashtra",
        "title": "MPBCDC Loans 2026: Get Up to ₹5 Lakhs (Mahatma Phule Corp)",
        "titleHi": "MPBCDC Loans 2026: महात्मा फुले निगम से ₹5 लाख तक का लोन",
        "description": "Maharashtra Scheduled Caste youth can get business loans up to 5 lakhs under MPBCDC Direct Loan Scheme.",
        "descHi": "महाराष्ट्र के अनुसूचित जाति के युवा MPBCDC डायरेक्ट लोन योजना के तहत ₹5 लाख तक का बिजनेस लोन प्राप्त कर सकते हैं।",
        "category": "Schemes",
        "cta_url": f"{SITE_URL}/states/mpbcdc.html",
        "cta_text": "Check Eligibility & Apply 👉",
        "pages": [
            {"heading": "महात्मा फुले निगम लोन योजना", "text": "क्या आप महाराष्ट्र के निवासी हैं और अपना खुद का बिजनेस शुरू करना चाहते हैं? MPBCDC आपके लिए शानदार लोन योजनाएं लाया है!", "bg": "#1A237E", "emoji": "🏢"},
            {"heading": "डायरेक्ट लोन (Direct Loan Scheme)", "text": "छोटे बिजनेस के लिए ₹1 लाख तक का डायरेक्ट लोन प्राप्त करें। ब्याज दर बेहद कम और चुकाने की आसान किश्तें।", "bg": "#004D40", "emoji": "💸"},
            {"heading": "सीड मनी (Seed Money Scheme)", "text": "₹5 लाख तक के प्रोजेक्ट के लिए निगम 20% तक सीड मनी (मार्जिन मनी) देता है। बाकी बैंक से लोन मिलता है।", "bg": "#B71C1C", "emoji": "🌱"},
            {"heading": "महिला समृद्धि योजना", "text": "महिलाओं के सशक्तिकरण के लिए विशेष योजना! 4% ब्याज पर लघु उद्योग शुरू करने के लिए वित्तीय मदद।", "bg": "#880E4F", "emoji": "👩‍💼"},
            {"heading": "पात्रता (Eligibility)", "text": "आवेदक महाराष्ट्र का निवासी हो, अनुसूचित जाति (SC) या नवबौद्ध वर्ग से हो, और पारिवारिक आय ₹3 लाख से कम हो।", "bg": "#E65100", "emoji": "✅"},
            {"heading": "आज ही अप्लाई करें!", "text": "आधार कार्ड, जाति प्रमाण पत्र और प्रोजेक्ट रिपोर्ट के साथ महामंडल की वेबसाइट पर आवेदन करें।", "bg": "#37474F", "emoji": "👇"}
        ]
    },
    {
        "slug": "claim-your-csc-center-free-listing",
        "title": "Boost CSC Income: List Your CSC Center for Free in 2026",
        "titleHi": "CSC VLEs ध्यान दें: अपना CSC Center फ्री में लिस्ट करें",
        "description": "Claim your CSC Center on SarkariSewaIndia. Rank on Google, get more customers and boost your income for free.",
        "descHi": "SarkariSewaIndia पर अपना CSC केंद्र क्लेम करें। गूगल पर रैंक करें, अधिक ग्राहक पाएं और फ्री में अपनी आय बढ़ाएं।",
        "category": "Tools",
        "cta_url": f"{SITE_URL}/claim-your-csc.html",
        "cta_text": "Claim Your CSC Now 👉",
        "pages": [
            {"heading": "CSC Operators के लिए खुशखबरी", "text": "क्या आपके CSC सेंटर पर कम ग्राहक आते हैं? अब अपनी आमदनी बढ़ाने का समय आ गया है!", "bg": "#0D47A1", "emoji": "🚀"},
            {"heading": "Google पर रैंक करें", "text": "जब कोई सर्च करेगा 'CSC Center near me', तो आपका सेंटर गूगल पर सबसे ऊपर दिखेगा!", "bg": "#1B5E20", "emoji": "🔍"},
            {"heading": "फ्री SEO प्रोफाइल बनाएं", "text": "हमारे प्लेटफ़ॉर्म पर अपने सेंटर की फ्री डिजिटल प्रोफाइल बनाएं। आपका मोबाइल नंबर, पता और सेवाएं ऑनलाइन दिखेंगी।", "bg": "#E65100", "emoji": "🌐"},
            {"heading": "12 लाख+ सेंटर्स की लिस्ट", "text": "हम भारत के 12 लाख से ज्यादा CSC सेंटर्स को मैप कर रहे हैं। क्या आपका सेंटर लिस्ट में है?", "bg": "#4A148C", "emoji": "📍"},
            {"heading": "Claim कैसे करें?", "text": "सिर्फ 2 मिनट में! अपना मोबाइल नंबर और लोकेशन डालकर अपनी ओनरशिप (Ownership) क्लेम करें।", "bg": "#006064", "emoji": "⏱️"},
            {"heading": "ट्रैफिक और कमाई बढ़ाएं", "text": "आज ही अपना पेज क्लेम करें और अपने आसपास के ग्राहकों को अपने CSC तक लाएं।", "bg": "#212121", "emoji": "👇"}
        ]
    },
"""

# Insert right after `STORIES = [`
content = content.replace("STORIES = [", "STORIES = [\n" + new_stories)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Added MPBCDC and CSC stories to generate_web_stories.py")
