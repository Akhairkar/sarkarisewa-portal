import os

filepath = "generate_web_stories.py"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

new_story = """    {
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
"""

# Insert right after `STORIES = [`
content = content.replace("STORIES = [", "STORIES = [\n" + new_story)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Added Lakhpati Didi story to generate_web_stories.py")
