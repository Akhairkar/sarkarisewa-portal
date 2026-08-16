import json
import os

lang_file = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\sarkarisewa-portal\\data\\lang.json'

with open(lang_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

new_strings = {
    "tools_showcase_title": {"en": "Browse by Tools", "hi": "टूल्स द्वारा ब्राउज़ करें"},
    "tools_showcase_desc": {"en": "Smart calculators and tools to simplify government processes and daily needs.", "hi": "सरकारी प्रक्रियाओं और रोज़मर्रा की ज़रूरतों को आसान बनाने वाले स्मार्ट कैलकुलेटर और टूल्स।"},
    "tools_filter_all": {"en": "All Tools", "hi": "सभी टूल्स"},
    "tool_card_1_title": {"en": "Eligibility Checker", "hi": "पात्रता जांचक"},
    "tool_card_1_desc": {"en": "Check your eligibility for various government schemes.", "hi": "विभिन्न सरकारी योजनाओं के लिए अपनी पात्रता जांचें।"},
    "tool_card_check_now": {"en": "Check Now", "hi": "अभी जांचें"},
    "tool_card_2_title": {"en": "Age Calculator", "hi": "आयु कैलकुलेटर"},
    "tool_card_2_desc": {"en": "Calculate your exact age in years, months and days.", "hi": "वर्षों, महीनों और दिनों में अपनी सटीक आयु की गणना करें।"},
    "tool_card_use_calc": {"en": "Use Calculator", "hi": "कैलकुलेटर इस्तेमाल करें"},
    "tool_card_3_title": {"en": "Income Tax Calculator", "hi": "आयकर कैलकुलेटर"},
    "tool_card_3_desc": {"en": "Estimate your income tax and in-hand salary in seconds.", "hi": "सेकंड में अपने आयकर और इन-हैंड वेतन का अनुमान लगाएं।"},
    "tool_card_calc_now": {"en": "Calculate Now", "hi": "अभी गणना करें"},
    "tool_card_4_title": {"en": "Document Checklist", "hi": "दस्तावेज़ चेकलिस्ट"},
    "tool_card_4_desc": {"en": "Get checklist for various government documents.", "hi": "विभिन्न सरकारी दस्तावेज़ों के लिए चेकलिस्ट प्राप्त करें।"},
    "tool_card_use_checklist": {"en": "Use Checklist", "hi": "चेकलिस्ट का उपयोग करें"},
    "tool_card_5_title": {"en": "EPF Calculator", "hi": "ईपीएफ कैलकुलेटर"},
    "tool_card_5_desc": {"en": "Calculate your Provident Fund maturity amount instantly.", "hi": "अपने भविष्य निधि की परिपक्वता राशि की तुरंत गणना करें।"},
    "tool_card_6_title": {"en": "Gratuity Calculator", "hi": "ग्रेच्युटी कैलकुलेटर"},
    "tool_card_6_desc": {"en": "Estimate your gratuity amount after 5+ years of service.", "hi": "5+ वर्षों की सेवा के बाद अपनी ग्रेच्युटी राशि का अनुमान लगाएं।"},
    "tool_card_7_title": {"en": "CSC Locator", "hi": "सीएससी लोकेटर"},
    "tool_card_7_desc": {"en": "Find your nearest Common Service Centre easily.", "hi": "आसानी से अपने निकटतम जन सेवा केंद्र का पता लगाएं।"},
    "tool_card_find_now": {"en": "Find Now", "hi": "अभी खोजें"},
    "tool_card_8_title": {"en": "Hidden Tax Calculator", "hi": "हिडन टैक्स कैलकुलेटर"},
    "tool_card_8_desc": {"en": "Discover hidden taxes on your daily expenses.", "hi": "अपने दैनिक खर्चों पर छिपे हुए करों की खोज करें।"},
    "tools_banner_title": {"en": "Powerful Tools. Simple Solutions.", "hi": "शक्तिशाली टूल्स। सरल समाधान।"},
    "tools_banner_desc": {"en": "All tools are 100% free to use and mobile friendly. Made for everyday needs and government service users.", "hi": "सभी टूल्स उपयोग करने के लिए 100% मुफ़्त और मोबाइल के अनुकूल हैं। रोज़मर्रा की ज़रूरतों और सरकारी सेवा उपयोगकर्ताओं के लिए बनाए गए हैं।"},
    "tools_banner_cta": {"en": "View All Tools", "hi": "सभी टूल्स देखें"}
}

for key, langs in new_strings.items():
    data["en"][key] = langs["en"]
    data["hi"][key] = langs["hi"]

with open(lang_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Added translation strings to lang.json")
