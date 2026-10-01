import json

with open('data/lang.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Collect all keys that need translation / correction
translations_to_fix = {
    # Hinglish -> Proper Devanagari
    "calc_subtitle": "वेतन स्तर (Pay Level) चुनें और बेसिक, डीए (DA 50%+), एचआरए (HRA), टीए और एनपीएस कटौती के साथ तुरंत सटीक इन-हैंड सैलरी देखें।",
    "cpc8_heading": "8वां वेतन आयोग संभावित वेतन अनुमान (8th CPC Projection)",
    "cpc8_sub": "देखें कि 8वें वेतन आयोग में आपका वेतन कितना बढ़ सकता है",
    "cpc8_label_fitment": "फिटमेंट फैक्टर चुनें:",
    "cpc8_metric_basic": "संभावित 8th CPC बेसिक पे",
    "cpc8_metric_gross": "संभावित 8th CPC ग्रॉस सैलरी (0% DA के साथ)",
    "row_total_gross": "कुल ग्रॉस सैलरी (TOTAL GROSS)",
    "row_total_net": "कुल इन-हैंड सैलरी (NET IN-HAND)",
    "row_cghs": "सरकारी स्वास्थ्य योजना (CGHS अनुमान)",
    "th_component": "वेतन घटक / भत्ता",
    "th_formula": "गणना का नियम",
    "metric_sub": "ग्रॉस सैलरी में से NPS और अन्य कटौतियां घटाकर",
    
    # MPBCDC & related Hinglish/English strings in HI
    "dl_hero_title": "MPBCDC डायरेक्ट लोन योजना — ₹1 लाख तक 50% सब्सिडी + 4% ब्याज पर लोन",
    "subsidy_h1": "MPBCDC 50% सब्सिडी योजना — ₹50,000 तक 50% सरकारी अनुदान",
    "cta.report_title": "बैंक लोन के लिए प्रोजेक्ट रिपोर्ट चाहिए?",
    "cta.report_desc": "MPBCDC योजना में बैंक को प्रोजेक्ट रिपोर्ट देनी होती है — हमारा फ्री प्रोजेक्ट रिपोर्ट जनरेटर उपयोग करें, 2 मिनट में तैयार!",
    "faq.a4": "सामान्यतः 18 से 50 वर्ष के नागरिक पात्र हैं। 50 वर्ष से अधिक आयु के लिए सीधे जिला कार्यालय से संपर्क करें — कुछ मामलों में छूट मिल सकती है।",
    "related.subsidy_card": "50% सब्सिडी योजना",
    "related.seed_capital": "सीड कैपिटल योजना",
    "subsidy_related": "संबंधित टूल्स एवं योजनाएं",
    "sc_maharashtra_income-certificate_auth": "तहसीलदार",
    "label_pay_level": "पे लेवल चुनें (ग्रुप एवं ग्रेड पे):",
    "section.documents": "आवश्यक दस्तावेज़ (Required Documents)",
    "section.eligibility": "पात्रता मानदंड (Eligibility Criteria)",
    "section.faq": "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    "section.how_to_apply": "ऑनलाइन आवेदन कैसे करें? (Step-by-Step)",
    "section.related_tools": "संबंधित योजनाएं एवं उपयोगी टूल्स",
    "section.what_is_mpbcdc": "MPBCDC क्या है? (Overview)",
    "table.bank_share": "बैंक का हिस्सा",
    "table.corp_share": "निगम का हिस्सा",
    "table.interest_rate": "ब्याज दर",
    "table.own_contribution": "स्वयं का अंशदान",
    "table.project_cost": "परियोजना लागत सीमा",
    "table.scheme": "योजना का नाम",
    
    # New Nav / Dropdown & Tool Button Keys
    "nav_categories": "श्रेणियां 📁 ▾",
    "nav_updates_support": "अपडेट और सहायता 📢 ▾",
    "nav_image_tools": "फोटो एवं इमेज टूल्स 📸 ▾",
    "nav_state_services_menu": "राज्य सेवाएं 🏛️ ▾",
    "nav_citizen_utilities": "नागरिक उपयोगी टूल्स 🛠️ ▾",
    "nav_financial_calcs": "वित्तीय कैलकुलेटर 💰 ▾",
    
    # Tools sub-items
    "tool_photo_resizer": "🖼️ सरकारी परीक्षा फोटो रिसाइज़र",
    "tool_signature_resizer": "✍️ हस्ताक्षर (Signature) रिसाइज़र",
    "tool_doc_compressor": "📄 दस्तावेज़ कंप्रेसर",
    "tool_csc_locator": "📍 सीएससी / ई-सेवा केंद्र लोकेटर",
    "tool_eligibility_engine": "🎯 सरकारी योजना पात्रता इंजन",
    "tool_doc_checklist": "📋 दस्तावेज़ चेकलिस्ट",
    "tool_self_declaration": "📝 स्व-घोषणा पत्र (Self-Declaration) मेकर",
    "tool_typing_test": "⌨️ टाइपिंग स्पीड टेस्ट",
    "tool_deadline_cal": "📅 योजना अंतिम तिथि कैलेंडर",
    "tool_pan_aadhaar": "🔗 पैन-आधार लिंकिंग समाधान",
    "tool_status_troubleshooter": "🔍 आवेदन स्थिति ट्रबलशूटर",
    "tool_card_clarifier": "💳 सरकारी कार्ड पहचान गाइड",
    "tool_age_calc": "⏳ आयु एवं सेवानिवृत्ति कैलकुलेटर",
    
    # Financial calculators
    "tool_savings_comp": "📊 बचत योजना तुलना (Comparator)",
    "tool_gratuity_calc": "💰 ग्रेच्युटी कैलकुलेटर",
    "tool_epf_calc": "📈 ईपीएफ (EPF) कैलकुलेटर",
    "tool_income_tax_calc": "⚖️ इनकम टैक्स कैलकुलेटर",
    "tool_itr_penalty": "⚖️ लेट आईटीआर पेनल्टी कैलकुलेटर",
    "tool_hra_calc": "🏠 एचआरए (HRA) छूट कैलकुलेटर",
    "tool_7th_pay": "🧮 7वां वेतन आयोग कैलकुलेटर",
    "tool_8th_pay": "🚀 8वां वेतन आयोग अनुमान",
    
    # State hub names
    "state_all_hub": "🗺️ सभी राज्यों का हब",
    "state_up": "📍 उत्तर प्रदेश",
    "state_mh": "📍 महाराष्ट्र",
    "state_br": "📍 बिहार",
    "state_rj": "📍 राजस्थान",
    "state_mp": "📍 मध्य प्रदेश",
    
    # CTA Buttons
    "btn_check_now": "अभी जांचें →",
    "btn_use_calc": "कैलकुलेटर उपयोग करें →",
    "btn_calc_now": "अभी गणना करें →",
    "btn_use_checklist": "चेकलिस्ट देखें →",
    "btn_find_now": "अभी खोजें →",
    "btn_use_generator": "जनरेटर उपयोग करें →",
    "btn_all_tools": "सभी टूल्स ▾",
    "btn_whatsapp_join": "व्हाट्सएप चैनल से जुड़ें"
}

# English counterparts for the new keys
en_counterparts = {
    "nav_categories": "Categories 📁 ▾",
    "nav_updates_support": "Updates & Support 📢 ▾",
    "nav_image_tools": "Image Tools 📸 ▾",
    "nav_state_services_menu": "State Services 🏛️ ▾",
    "nav_citizen_utilities": "Citizen Utilities 🛠️ ▾",
    "nav_financial_calcs": "Financial Calculators 💰 ▾",
    "tool_photo_resizer": "🖼️ Govt Exam Photo Resizer",
    "tool_signature_resizer": "✍️ Signature Resizer",
    "tool_doc_compressor": "📄 Document Compressor",
    "tool_csc_locator": "📍 CSC / e-Seva Locator",
    "tool_eligibility_engine": "🎯 Scheme Eligibility Engine",
    "tool_doc_checklist": "📋 Document Checklist",
    "tool_self_declaration": "📝 Self-Declaration Builder",
    "tool_typing_test": "⌨️ Typing Speed Test",
    "tool_deadline_cal": "📅 Deadline Calendar",
    "tool_pan_aadhaar": "🔗 PAN-Aadhaar Resolver",
    "tool_status_troubleshooter": "🔍 Status Troubleshooter",
    "tool_card_clarifier": "💳 Govt Card Clarifier",
    "tool_age_calc": "⏳ Age & Retirement Calculator",
    "tool_savings_comp": "📊 Savings Scheme Comparator",
    "tool_gratuity_calc": "💰 Gratuity Calculator",
    "tool_epf_calc": "📈 EPF Calculator",
    "tool_income_tax_calc": "⚖️ Income Tax Calculator",
    "tool_itr_penalty": "⚖️ Late Filing Penalty Calculator",
    "tool_hra_calc": "🏠 HRA Exemption Calculator",
    "tool_7th_pay": "🧮 7th Pay Calculator",
    "tool_8th_pay": "🚀 8th Pay Projection",
    "state_all_hub": "🗺️ All States Hub",
    "state_up": "📍 Uttar Pradesh",
    "state_mh": "📍 Maharashtra",
    "state_br": "📍 Bihar",
    "state_rj": "📍 Rajasthan",
    "state_mp": "📍 Madhya Pradesh",
    "btn_check_now": "Check Now →",
    "btn_use_calc": "Use Calculator →",
    "btn_calc_now": "Calculate Now →",
    "btn_use_checklist": "Use Checklist →",
    "btn_find_now": "Find Now →",
    "btn_use_generator": "Use Generator →",
    "btn_all_tools": "All Tools ▾",
    "btn_whatsapp_join": "Join WhatsApp Channel"
}

# Apply to lang.json
for k, v in translations_to_fix.items():
    data['hi'][k] = v

for k, v in en_counterparts.items():
    if k not in data['en']:
        data['en'][k] = v

with open('data/lang.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated data/lang.json with pure Devanagari Hindi & added missing keys successfully.")
