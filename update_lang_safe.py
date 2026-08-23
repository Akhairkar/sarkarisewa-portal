import json

lang_file = "data/lang.json"
with open(lang_file, "r", encoding="utf-8") as f:
    lang_data = json.load(f)

# Update English keys
lang_data["en"]["hero_title"] = "Search Government Schemes & Services. Understand them in minutes."
lang_data["en"]["hero_sub"] = "Get step-by-step guides, eligibility criteria, required documents, and official application links for 160+ Indian government schemes and certificates – in Hindi and English."
lang_data["en"]["hero_cta"] = "Browse All Government Schemes & Services"
lang_data["en"]["categories_title"] = "Browse Government Services by Category"
lang_data["en"]["latest_title"] = "Latest Government Schemes & Updates"

# Update Hindi keys
lang_data["hi"]["hero_title"] = "कोई भी सरकारी योजना या सेवा खोजें। मिनटों में समझें।"
lang_data["hi"]["hero_sub"] = "160+ भारतीय सरकारी योजनाओं, सेवाओं, और प्रमाणपत्रों के लिए स्टेप-बाय-स्टेप गाइड, पात्रता, आवश्यक दस्तावेज़ और आधिकारिक लिंक खोजें – हिंदी और अंग्रेजी में।"
lang_data["hi"]["hero_cta"] = "सभी सरकारी योजनाएं और सेवाएं ब्राउज़ करें"
lang_data["hi"]["categories_title"] = "श्रेणी के अनुसार सरकारी सेवाएं ब्राउज़ करें"
lang_data["hi"]["latest_title"] = "नवीनतम सरकारी योजनाएं और अपडेट"

with open(lang_file, "w", encoding="utf-8") as f:
    json.dump(lang_data, f, ensure_ascii=False, indent=2)

print("Safely updated lang.json")
