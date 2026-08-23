#!/usr/bin/env python3
"""
Google Web Stories Generator for SarkariSewaIndia.com
Generates AMP-based visual stories that appear in Google Discover.
Usage: python generate_web_story.py
"""
import os
import json
from datetime import datetime

SITE_URL = "https://sarkarisewaindia.com"
STORIES_DIR = "web-stories"
LOGO_URL = f"{SITE_URL}/assets/img/favicon-32.png"

# --- STORY DATA ---
# Each story has: slug, title, description, pages (list of slides)
# Each slide: heading, text, bg_color, emoji
STORIES = [
    {
        "slug": "mpbcdc-loan-schemes-maharashtra",
        "title": "MPBCDC Loans 2026: Get Up to ₹5 Lakhs (Mahatma Phule Corp)",
        "titleHi": "MPBCDC Loans 2026: महात्मा फुले निगम से ₹5 लाख तक का लोन",
        "description": "Maharashtra Scheduled Caste youth can get business loans up to 5 lakhs under MPBCDC Direct Loan Scheme.",
        "descHi": "महाराष्ट्र के अनुसूचित जाति के युवा MPBCDC डायरेक्ट लोन योजना के तहत ₹5 लाख तक का बिजनेस लोन प्राप्त कर सकते हैं।",
        "category": "Schemes",
        "cta_url": f"{SITE_URL}/mpbcdc-yojana.html",
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

    {
        "slug": "lakhpati-didi-yojana-2026-benefits-story",
        "title": "Lakhpati Didi Yojana 2026: Earn ₹1 Lakh/Year",
        "titleHi": "Lakhpati Didi Yojana 2026: हर साल ₹1 लाख कैसे कमाएं?",
        "description": "Step by step guide to Lakhpati Didi Yojana. Learn how SHG women can start a business and earn ₹1 Lakh per year.",
        "descHi": "लखपति दीदी योजना की पूरी जानकारी। जानें कैसे SHG महिलाएं अपना बिजनेस शुरू करके साल का ₹1 लाख कमा सकती हैं।",
        "category": "Schemes",
        "cta_url": f"{SITE_URL}/blog/lakhpati-didi-yojana-2026-benefits.html",
        "cta_text": "Read Full Guide 👉",
        "pages": [
            {"heading": "क्या है लखपति दीदी योजना?", "text": "भारत सरकार की शानदार पहल! अब ग्रामीण महिलाएं स्वयं सहायता समूह (SHG) से जुड़कर हर साल ₹1 लाख या उससे अधिक कमा सकती हैं।", "bg": "#D32F2F", "emoji": "👩‍🌾"},
            {"heading": "किसे मिलेगा लाभ?", "text": "अगर आप गाँव में रहती हैं और DAY-NRLM के तहत किसी मान्यता प्राप्त SHG (स्वयं सहायता समूह) की सक्रिय सदस्य हैं, तो आप पात्र हैं!", "bg": "#1976D2", "emoji": "✅"},
            {"heading": "फ्री स्किल ट्रेनिंग (Training)", "text": "सरकार आपको ड्रोन उड़ाने (Namo Drone Didi), एलईडी बल्ब बनाने, सिलाई और खेती के आधुनिक तरीकों की फ्री ट्रेनिंग देगी।", "bg": "#388E3C", "emoji": "🛠️"},
            {"heading": "लोन और बैंक लिंकेज", "text": "अपना खुद का बिजनेस शुरू करने के लिए सरकार आपको बैंक से आसान और सस्ता लोन (Credit) दिलाने में पूरी मदद करेगी।", "bg": "#F57C00", "emoji": "💰"},
            {"heading": "आवेदन कैसे करें?", "text": "इसके लिए कोई अलग ऑनलाइन फॉर्म नहीं है। बस अपने गाँव के SHG लीडर या ब्लॉक ऑफिस (BDO) से संपर्क करें और अपना नाम दें।", "bg": "#7B1FA2", "emoji": "📝"},
            {"heading": "पूरी जानकारी यहाँ पढ़ें", "text": "जरूरी डाक्यूमेंट्स, ट्रेनिंग की लिस्ट और पूरा प्रोसेस जानने के लिए हमारी डिटेल गाइड पढ़ें!", "bg": "#455A64", "emoji": "👇"}
        ]
    },

    # ===== JAN AUSHADHI STORIES =====
    {
        "slug": "jan-aushadhi-sasti-dawai-2026",
        "title": "Jan Aushadhi Kendra: 90% Sasti Dawai Kahan Milegi? 2026",
        "titleHi": "जन औषधि केंद्र: 90% सस्ती दवा कहाँ मिलेगी? 2026",
        "description": "Find Jan Aushadhi Kendra near you. Get medicines at 50-90% cheaper than branded. 15000+ stores across India.",
        "descHi": "अपने पास जन औषधि केंद्र खोजें। ब्रांडेड से 50-90% सस्ती दवाइयां पाएं। पूरे भारत में 15000+ स्टोर।",
        "category": "Health",
        "cta_url": f"{SITE_URL}/service/jan-aushadhi-store-locator.html",
        "cta_text": "Find Store Near Me →",
        "pages": [
            {"heading": "क्या आप जानते हैं?", "text": "भारत में 15,000+ सरकारी दवा की दुकानें हैं जहाँ दवा 90% तक सस्ती मिलती है!", "bg": "#0D7377", "emoji": "💊"},
            {"heading": "जन औषधि केंद्र", "text": "प्रधानमंत्री भारतीय जन औषधि परियोजना (PMBJP) — सरकार की सबसे बड़ी सस्ती दवा योजना", "bg": "#14919B", "emoji": "🏥"},
            {"heading": "कितनी सस्ती?", "text": "ब्रांडेड दवा ₹500 → जन औषधि में सिर्फ ₹50! वही दवा, वही असर, 90% कम दाम", "bg": "#0D7377", "emoji": "💰"},
            {"heading": "क्या कोई भी ले सकता है?", "text": "हाँ! कोई ID नहीं चाहिए, कोई कार्ड नहीं चाहिए। बस जाओ और खरीदो।", "bg": "#146B3A", "emoji": "✅"},
            {"heading": "कैसे खोजें?", "text": "Google पर 'Jan Aushadhi near me' सर्च करें या हमारी वेबसाइट पर राज्य चुनें", "bg": "#D97F2B", "emoji": "📍"},
            {"heading": "2000+ दवाइयां उपलब्ध", "text": "दर्द, बुखार, BP, Sugar, विटामिन — सब कुछ मिलता है!", "bg": "#10243E", "emoji": "📋"},
            {"heading": "अभी खोजें!", "text": "SarkariSewa India पर अपने राज्य का नजदीकी जन औषधि केंद्र खोजें", "bg": "#0D7377", "emoji": "🔍"},
        ]
    },
    {
        "slug": "jan-aushadhi-kendra-kaise-khole-2026",
        "title": "Jan Aushadhi Kendra Kaise Khole 2026 — ₹5 Lakh Incentive",
        "titleHi": "जन औषधि केंद्र कैसे खोलें 2026 — ₹5 लाख इन्सेंटिव",
        "description": "Open your own Jan Aushadhi Kendra franchise. Government gives up to ₹5 Lakh incentive. Full process inside.",
        "descHi": "अपना खुद का जन औषधि केंद्र खोलें। सरकार देती है ₹5 लाख तक इन्सेंटिव। पूरी प्रक्रिया अंदर।",
        "category": "Business",
        "cta_url": f"{SITE_URL}/service/jan-aushadhi-store-locator.html",
        "cta_text": "Apply Now →",
        "pages": [
            {"heading": "खुद का बिज़नेस चाहिए?", "text": "सरकार दे रही है ₹5 लाख तक — जन औषधि केंद्र खोलें!", "bg": "#8B0000", "emoji": "🏪"},
            {"heading": "कौन खोल सकता है?", "text": "कोई भी! फार्मासिस्ट, NGO, ट्रस्ट, व्यक्ति — बस एक शर्त: पंजीकृत फार्मासिस्ट रखना होगा", "bg": "#10243E", "emoji": "👨‍⚕️"},
            {"heading": "कितनी जगह चाहिए?", "text": "सिर्फ 120 sq. ft. — एक छोटी दुकान भी काफी है!", "bg": "#146B3A", "emoji": "📐"},
            {"heading": "सरकारी मदद", "text": "₹5 लाख तक इन्सेंटिव + महिलाओं, SC/ST, दिव्यांगों को अतिरिक्त छूट", "bg": "#D97F2B", "emoji": "💸"},
            {"heading": "आवेदन शुल्क", "text": "सिर्फ ₹5,000 — ऑनलाइन अप्लाई करें janaushadhi.gov.in पर", "bg": "#1C3A5E", "emoji": "📝"},
            {"heading": "कितनी कमाई?", "text": "20% मार्जिन + सरकारी इन्सेंटिव = महीने में ₹25,000-₹80,000 तक!", "bg": "#0D7377", "emoji": "📈"},
            {"heading": "पूरी जानकारी यहाँ", "text": "SarkariSewa India पर पात्रता, दस्तावेज़ और प्रक्रिया सब पढ़ें", "bg": "#10243E", "emoji": "🏛️"},
        ]
    },
    # ===== CSC LOCATOR STORIES =====
    {
        "slug": "nearest-csc-center-kaise-khoje-2026",
        "title": "Nearest CSC Center Kaise Khoje 2026 — 5 Lakh+ Centers",
        "titleHi": "नजदीकी CSC सेंटर कैसे खोजें 2026 — 5 लाख+ सेंटर",
        "description": "Find your nearest Common Service Center (CSC) in 10 seconds. 5 Lakh+ centers across India. Free locator tool!",
        "descHi": "अपना नजदीकी जन सेवा केंद्र (CSC) 10 सेकंड में खोजें। पूरे भारत में 5 लाख+ सेंटर। फ्री लोकेटर टूल!",
        "category": "Utilities",
        "cta_url": f"{SITE_URL}/tools/csc-locator.html",
        "cta_text": "Find CSC Near Me →",
        "pages": [
            {"heading": "CSC सेंटर खोजें", "text": "सरकारी काम करवाना है? नजदीकी CSC सेंटर पर सब कुछ होता है!", "bg": "#10243E", "emoji": "📍"},
            {"heading": "CSC क्या है?", "text": "Common Service Centre — गाँव-गाँव में सरकार की डिजिटल दुकान। आधार, PAN, पासपोर्ट, बीमा सब!", "bg": "#146B3A", "emoji": "🏛️"},
            {"heading": "5 लाख+ सेंटर", "text": "भारत के हर जिले, हर तहसील, हर गाँव में CSC सेंटर हैं", "bg": "#D97F2B", "emoji": "🗺️"},
            {"heading": "क्या-क्या होता है?", "text": "आधार अपडेट, PAN कार्ड, पासपोर्ट, बैंकिंग, बीमा, बिजली बिल — 300+ सेवाएं!", "bg": "#1C3A5E", "emoji": "📋"},
            {"heading": "कैसे खोजें?", "text": "हमारी वेबसाइट पर राज्य और जिला चुनें — तुरंत पता, फोन नंबर मिलेगा", "bg": "#0D7377", "emoji": "🔍"},
            {"heading": "हमारे पास पूरा डेटा है!", "text": "लाखों CSC सेंटर्स का पता + VLE नाम + मोबाइल नंबर — सबसे बड़ा डेटाबेस!", "bg": "#8B0000", "emoji": "📊"},
            {"heading": "अभी खोजें — फ्री!", "text": "SarkariSewa India पर अपना नजदीकी CSC सेंटर 10 सेकंड में खोजें", "bg": "#10243E", "emoji": "⚡"},
        ]
    },
    {
        "slug": "csc-center-se-kya-kya-hota-hai-2026",
        "title": "CSC Center Se Kya Kya Hota Hai? 300+ Services List 2026",
        "titleHi": "CSC सेंटर से क्या-क्या होता है? 300+ सेवाएं 2026",
        "description": "Complete list of 300+ services available at CSC Centers. Aadhaar, PAN, Passport, Insurance, Banking — all in one place!",
        "descHi": "CSC सेंटर पर उपलब्ध 300+ सेवाओं की पूरी लिस्ट। आधार, PAN, पासपोर्ट, बीमा, बैंकिंग — सब एक जगह!",
        "category": "Utilities",
        "cta_url": f"{SITE_URL}/tools/csc-locator.html",
        "cta_text": "Find CSC & Services →",
        "pages": [
            {"heading": "CSC = Mini सरकारी Office", "text": "क्या आप जानते हैं? CSC सेंटर पर 300+ सरकारी काम होते हैं!", "bg": "#10243E", "emoji": "🏢"},
            {"heading": "1. पहचान पत्र", "text": "आधार कार्ड बनवाना/अपडेट, PAN कार्ड, वोटर ID, पासपोर्ट — सब CSC पर!", "bg": "#146B3A", "emoji": "🪪"},
            {"heading": "2. बैंकिंग सेवाएं", "text": "बैंक खाता खोलना, पैसे जमा/निकासी, बीमा, पेंशन — बिना बैंक जाए!", "bg": "#D97F2B", "emoji": "🏦"},
            {"heading": "3. सरकारी योजनाएं", "text": "PM Kisan, आयुष्मान भारत, PM आवास, श्रमिक कार्ड — सब का रजिस्ट्रेशन यहीं!", "bg": "#1C3A5E", "emoji": "📜"},
            {"heading": "4. शिक्षा और परीक्षा", "text": "स्कॉलरशिप, एडमिशन फॉर्म, सर्टिफिकेट वेरिफिकेशन — छात्रों के लिए ज़रूरी!", "bg": "#0D7377", "emoji": "🎓"},
            {"heading": "5. बिल और रिचार्ज", "text": "बिजली बिल, पानी बिल, गैस बुकिंग, मोबाइल रिचार्ज — रोज़मर्रा के काम!", "bg": "#8B0000", "emoji": "⚡"},
            {"heading": "नजदीकी CSC खोजें!", "text": "SarkariSewa India पर लाखों CSC सेंटर का डेटा — अभी अपना नजदीकी खोजें", "bg": "#10243E", "emoji": "📍"},
        ]
    },
    {
        "slug": "pm-kisan-status-check-2026",
        "title": "PM Kisan Status Check 2026 — 5 Easy Steps",
        "titleHi": "PM किसान स्टेटस चेक 2026 — 5 आसान स्टेप्स",
        "description": "Check your PM Kisan 18th Installment status in just 5 simple steps. Direct link inside!",
        "descHi": "PM किसान 18वीं किस्त का स्टेटस सिर्फ 5 आसान स्टेप्स में चेक करें। डायरेक्ट लिंक अंदर!",
        "category": "Government Schemes",
        "cta_url": f"{SITE_URL}/service/pm-kisan.html",
        "cta_text": "Check Status Now →",
        "pages": [
            {"heading": "PM Kisan Status", "text": "18वीं किस्त आ गई? ऐसे चेक करें अपना स्टेटस", "bg": "#10243E", "emoji": "🌾"},
            {"heading": "Step 1", "text": "pmkisan.gov.in पर जाएं और 'Beneficiary Status' पर क्लिक करें", "bg": "#1C3A5E", "emoji": "🌐"},
            {"heading": "Step 2", "text": "अपना आधार नंबर या मोबाइल नंबर दर्ज करें", "bg": "#146B3A", "emoji": "📱"},
            {"heading": "Step 3", "text": "'Get Data' बटन पर क्लिक करें", "bg": "#D97F2B", "emoji": "🔍"},
            {"heading": "Step 4", "text": "आपकी सभी किस्तों की जानकारी स्क्रीन पर दिखेगी", "bg": "#10243E", "emoji": "✅"},
            {"heading": "Step 5", "text": "₹2000 नहीं आया? e-KYC करवाएं — ये सबसे बड़ी वजह है!", "bg": "#8B0000", "emoji": "⚠️"},
            {"heading": "पूरी जानकारी यहां", "text": "SarkariSewa India पर सभी सरकारी सेवाओं की जानकारी पाएं", "bg": "#10243E", "emoji": "🏛️"},
        ]
    },
    {
        "slug": "ration-card-ekyc-kaise-kare-2026",
        "title": "Ration Card e-KYC Kaise Kare 2026 — Step by Step",
        "titleHi": "राशन कार्ड e-KYC कैसे करें 2026 — स्टेप बाय स्टेप",
        "description": "Ration Card e-KYC is now mandatory! Learn how to complete it online in 5 minutes before your card gets suspended.",
        "descHi": "राशन कार्ड e-KYC अब अनिवार्य है! 5 मिनट में ऑनलाइन कैसे करें — वरना कार्ड सस्पेंड हो जाएगा।",
        "category": "Identity Documents",
        "cta_url": f"{SITE_URL}/service/ration-card.html",
        "cta_text": "Full Guide →",
        "pages": [
            {"heading": "⚠️ राशन कार्ड e-KYC", "text": "2026 में e-KYC अनिवार्य! नहीं किया तो राशन बंद हो जाएगा", "bg": "#8B0000", "emoji": "⚠️"},
            {"heading": "e-KYC क्या है?", "text": "आधार से राशन कार्ड को लिंक करना — ताकि फर्जी कार्ड बंद हों", "bg": "#10243E", "emoji": "🔗"},
            {"heading": "Online कैसे करें", "text": "Mera Ration ऐप डाउनलोड करें या नजदीकी CSC सेंटर जाएं", "bg": "#146B3A", "emoji": "📲"},
            {"heading": "ज़रूरी दस्तावेज़", "text": "आधार कार्ड + राशन कार्ड + मोबाइल नंबर (आधार से लिंक्ड)", "bg": "#D97F2B", "emoji": "📋"},
            {"heading": "कितना समय लगता है?", "text": "सिर्फ 5 मिनट! OTP आएगा, वेरिफाई करें, हो गया ✅", "bg": "#1C3A5E", "emoji": "⏱️"},
            {"heading": "Last Date", "text": "जल्दी करें — सरकार ने डेडलाइन बढ़ाई है पर कभी भी बंद हो सकती है", "bg": "#8B0000", "emoji": "📅"},
            {"heading": "पूरी जानकारी", "text": "SarkariSewa India पर स्टेप-बाय-स्टेप गाइड पढ़ें", "bg": "#10243E", "emoji": "🏛️"},
        ]
    },
    {
        "slug": "ayushman-card-download-2026",
        "title": "Ayushman Card Download 2026 — Free ₹5 Lakh Health Cover",
        "titleHi": "आयुष्मान कार्ड डाउनलोड 2026 — ₹5 लाख मुफ्त इलाज",
        "description": "Download your Ayushman Bharat Health Card online. Get free treatment up to ₹5 Lakh per year at any empanelled hospital.",
        "descHi": "आयुष्मान भारत हेल्थ कार्ड ऑनलाइन डाउनलोड करें। किसी भी सूचीबद्ध अस्पताल में ₹5 लाख तक मुफ्त इलाज पाएं।",
        "category": "Health",
        "cta_url": f"{SITE_URL}/service/ayushman-bharat-card.html",
        "cta_text": "Download Card →",
        "pages": [
            {"heading": "आयुष्मान भारत कार्ड", "text": "₹5 लाख तक मुफ्त इलाज — क्या आपके पास ये कार्ड है?", "bg": "#10243E", "emoji": "🏥"},
            {"heading": "कौन बनवा सकता है?", "text": "BPL परिवार, श्रमिक, किसान — SECC 2011 लिस्ट में नाम होना चाहिए", "bg": "#146B3A", "emoji": "👨‍👩‍👧‍👦"},
            {"heading": "ऐसे चेक करें पात्रता", "text": "pmjay.gov.in पर जाएं → 'Am I Eligible' पर क्लिक करें → मोबाइल नंबर डालें", "bg": "#1C3A5E", "emoji": "✅"},
            {"heading": "कार्ड कैसे बनवाएं?", "text": "नजदीकी CSC सेंटर जाएं या Ayushman App से ऑनलाइन अप्लाई करें", "bg": "#D97F2B", "emoji": "📲"},
            {"heading": "फायदे देखिए", "text": "1500+ बीमारियों का इलाज मुफ्त — सर्जरी, दवाई, भर्ती सब कुछ!", "bg": "#146B3A", "emoji": "💊"},
            {"heading": "डाउनलोड कैसे करें?", "text": "beneficiary.nha.gov.in से OTP वेरिफाई करके PDF डाउनलोड करें", "bg": "#10243E", "emoji": "📥"},
            {"heading": "पूरी गाइड पढ़ें", "text": "SarkariSewa India पर स्टेप-बाय-स्टेप प्रोसेस देखें", "bg": "#10243E", "emoji": "🏛️"},
        ]
    }
]


def generate_story_html(story):
    """Generate a valid AMP Web Story HTML file."""
    
    now = datetime.now().strftime("%Y-%m-%dT%H:%M:%S+05:30")
    
    # Build amp-story-page elements
    pages_html = ""
    for i, page in enumerate(story["pages"]):
        is_last = i == len(story["pages"]) - 1
        cta_html = ""
        if is_last:
            cta_html = f'''
            <amp-story-cta-layer>
              <a href="{story['cta_url']}" class="cta-btn">{story['cta_text']}</a>
            </amp-story-cta-layer>'''
        
        pages_html += f'''
    <amp-story-page id="page-{i+1}" auto-advance-after="7s">
      <amp-story-grid-layer template="fill">
        <div class="bg-fill" style="background: {page['bg']};"></div>
      </amp-story-grid-layer>
      <amp-story-grid-layer template="vertical" class="center-content">
        <div class="emoji-icon">{page['emoji']}</div>
        <h2 class="slide-heading">{page['heading']}</h2>
        <p class="slide-text">{page['text']}</p>
      </amp-story-grid-layer>{cta_html}
    </amp-story-page>
'''

    html = f'''<!DOCTYPE html>
<html ⚡>
<head>
  <meta charset="utf-8">
  <title>{story['title']}</title>
  <meta name="description" content="{story['description']}">
  <link rel="canonical" href="{SITE_URL}/web-stories/{story['slug']}.html">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <meta name="robots" content="max-image-preview:large">

  <!-- Open Graph -->
  <meta property="og:title" content="{story['title']}">
  <meta property="og:description" content="{story['description']}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{SITE_URL}/web-stories/{story['slug']}.html">

  <!-- AMP Boilerplate (REQUIRED) -->
  <style amp-boilerplate>body{{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}}@-webkit-keyframes -amp-start{{from{{visibility:hidden}}to{{visibility:visible}}}}@-moz-keyframes -amp-start{{from{{visibility:hidden}}to{{visibility:visible}}}}@keyframes -amp-start{{from{{visibility:hidden}}to{{visibility:visible}}}}</style><noscript><style amp-boilerplate>body{{-webkit-animation:none;-moz-animation:none;animation:none}}</style></noscript>

  <!-- AMP Runtime -->
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "{story['title']}",
    "description": "{story['description']}",
    "url": "{SITE_URL}/web-stories/{story['slug']}.html",
    "datePublished": "{now}",
    "dateModified": "{now}",
    "publisher": {{
      "@type": "Organization",
      "name": "SarkariSewa India",
      "logo": {{
        "@type": "ImageObject",
        "url": "{LOGO_URL}"
      }}
    }}
  }}
  </script>

  <style amp-custom>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    .bg-fill {{ width: 100%; height: 100%; }}
    .center-content {{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      text-align: center;
    }}
    .emoji-icon {{
      font-size: 4rem;
      margin-bottom: 16px;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    }}
    .slide-heading {{
      color: #fff;
      font-family: 'Noto Sans Devanagari', 'Noto Sans', sans-serif;
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 12px;
      text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    }}
    .slide-text {{
      color: rgba(255,255,255,0.92);
      font-family: 'Noto Sans Devanagari', 'Noto Sans', sans-serif;
      font-size: 1.15rem;
      line-height: 1.6;
      max-width: 90%;
      text-shadow: 0 1px 4px rgba(0,0,0,0.4);
    }}
    .cta-btn {{
      display: inline-block;
      background: #D97F2B;
      color: #fff;
      padding: 14px 28px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.1rem;
      font-family: 'Noto Sans', sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }}
  </style>
</head>
<body>
  <amp-story
    standalone
    title="{story['titleHi']}"
    publisher="SarkariSewa India"
    publisher-logo-src="{LOGO_URL}"
    poster-portrait-src="{SITE_URL}/assets/img/og-image.png"
  >
{pages_html}
  </amp-story>
</body>
</html>'''
    
    return html


def generate_stories_sitemap(stories):
    """Generate a sitemap specifically for web stories."""
    now = datetime.now().strftime("%Y-%m-%dT%H:%M:%S+05:30")
    urls = ""
    for s in stories:
        urls += f"""  <url>
    <loc>{SITE_URL}/web-stories/{s['slug']}.html</loc>
    <lastmod>{now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
"""
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}</urlset>'''


def generate_stories_index(stories):
    """Generate an index page listing all web stories."""
    cards = ""
    for s in stories:
        cards += f'''
      <a href="{s['slug']}.html" class="story-card" style="background: linear-gradient(135deg, {s['pages'][0]['bg']}, {s['pages'][1]['bg']}); text-decoration: none; color: #fff; padding: 24px; border-radius: 16px; display: flex; flex-direction: column; justify-content: flex-end; min-height: 280px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.2s;">
        <span style="font-size: 2.5rem; margin-bottom: 8px;">{s['pages'][0]['emoji']}</span>
        <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 4px;">{s['titleHi']}</h3>
        <p style="font-size: 0.85rem; opacity: 0.85;">{s['descHi'][:80]}...</p>
      </a>'''

    return f'''<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Stories — SarkariSewa India</title>
  <meta name="description" content="सरकारी सेवाओं की विजुअल स्टोरीज — PM Kisan, Ration Card, Ayushman Bharat और बहुत कुछ।">
  <link rel="canonical" href="{SITE_URL}/web-stories/">
  <meta name="robots" content="max-image-preview:large">
  <link rel="stylesheet" href="../assets/css/style.css">
  <style>
    .stories-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; padding: 20px 0; }}
    .story-card:hover {{ transform: translateY(-4px); }}
    .stories-hero {{ text-align: center; padding: 40px 16px 20px; }}
    .stories-hero h1 {{ font-size: 2rem; margin-bottom: 8px; color: var(--color-text); }}
    .stories-hero p {{ color: var(--color-text-muted); font-size: 1.05rem; }}
  </style>
</head>
<body>
  <script>window.SS_ROOT = "../";</script>
  <div id="site-header"></div>
  <main class="container">
    <div class="stories-hero">
      <h1>📱 Web Stories</h1>
      <p>सरकारी सेवाओं की विजुअल स्टोरीज — स्वाइप करके पढ़ें</p>
    </div>
    <div class="stories-grid">
{cards}
    </div>
  </main>
  <div id="site-footer"></div>
  <script src="../assets/js/main.js?v=2.4" defer></script>
  <script src="../assets/js/i18n-helper.js" defer></script>
</body>
</html>'''


# --- MAIN ---
if __name__ == "__main__":
    os.makedirs(STORIES_DIR, exist_ok=True)
    
    # Generate each story
    for story in STORIES:
        html = generate_story_html(story)
        filepath = os.path.join(STORIES_DIR, f"{story['slug']}.html")
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Created: {filepath}")
    
    # Generate stories sitemap
    sitemap = generate_stories_sitemap(STORIES)
    sitemap_path = os.path.join(STORIES_DIR, "sitemap-stories.xml")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(sitemap)
    print(f"Created: {sitemap_path}")
    
    # Generate stories index
    index_html = generate_stories_index(STORIES)
    index_path = os.path.join(STORIES_DIR, "index.html")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(index_html)
    print(f"Created: {index_path}")
    
    # Add stories sitemap reference to main sitemap
    with open("sitemap.xml", "r", encoding="utf-8") as f:
        main_sitemap = f.read()
    
    story_urls = ""
    for s in STORIES:
        url = f"{SITE_URL}/web-stories/{s['slug']}.html"
        if url not in main_sitemap:
            story_urls += f'''  <url>
    <loc>{url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
'''
    
    # Also add index
    idx_url = f"{SITE_URL}/web-stories/"
    if idx_url not in main_sitemap:
        story_urls += f'''  <url>
    <loc>{idx_url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
'''
    
    if story_urls:
        main_sitemap = main_sitemap.replace("</urlset>", story_urls + "</urlset>")
        with open("sitemap.xml", "w", encoding="utf-8") as f:
            f.write(main_sitemap)
        print("✅ Updated main sitemap.xml with web stories URLs")
    
    print(f"\n🎉 Successfully generated {len(STORIES)} Web Stories!")
    print("Next: git add, commit, push, then submit sitemap in Google Search Console")
