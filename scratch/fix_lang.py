import json

with open("data/lang.json", "r", encoding="utf-8") as f:
    data = json.load(f)

data["hi"]["csc_page_title"] = "नज़दीकी CSC / महा ई-सेवा केंद्र खोजें - सरकारी सेवा"
data["hi"]["csc_h1"] = "नज़दीकी CSC / ई-सेवा केंद्र खोजें"
data["hi"]["csc_desc"] = "अपने नज़दीकी वेरिफाइड CSC, महा ई-सेवा केंद्र या जन सेवा केंद्र खोजें। आधार अपडेट, पैन कार्ड और आय प्रमाण पत्र सेवाओं के लिए।"
data["hi"]["csc_op_title"] = "क्या आप CSC ऑपरेटर या VLE हैं?"
data["hi"]["csc_op_desc"] = "वेरिफाइड बैज पाएं और ज़्यादा स्थानीय नागरिकों को आकर्षित करने के लिए अपना केंद्र यहाँ लिस्ट करें। 100% मुफ़्त।"
data["hi"]["csc_op_btn"] = "वेरिफाई करें और केंद्र लिस्ट करें"
data["hi"]["csc_search_title"] = "लोकेशन से खोजें"
data["hi"]["csc_state"] = "राज्य (State)"
data["hi"]["csc_district"] = "ज़िला (District)"
data["hi"]["csc_pincode"] = "पिनकोड (Pincode)"
data["hi"]["csc_district_ph"] = "उदा. Pune"
data["hi"]["csc_pincode_ph"] = "उदा. 411001"

with open("data/lang.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated lang.json with proper Hindi Unicode.")
