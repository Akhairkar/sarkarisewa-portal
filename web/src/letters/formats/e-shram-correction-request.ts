import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - eshram.gov.in (home, /help, /grievance) and e-Shram FAQ (beta.eshram.gov.in
//   /faqs): login with UAN/Aadhaar-linked mobile and OTP; workers can
//   self-update details (address, contact, bank details, occupation) on the
//   portal or through CSCs; "e-Shram registrants are advised to update their
//   profile"; helpdesk 14434 / 1800-889-6811, 9 AM-6 PM daily incl. Sundays;
//   grievance section on the portal.
// - PIB backgrounder "5 Years of e-Shram Portal" (25 Aug 2026): registration
//   free at CSC/State Seva Kendra; Aadhaar eKYC based; 12-digit UAN.
// - Name, date of birth, gender and photo come from Aadhaar eKYC; the usual
//   route is to correct Aadhaar first (UIDAI limits: name twice, DOB and gender
//   once) and then redo eKYC on e-Shram. This last step is from secondary
//   guides, so the page tells readers to confirm with the helpdesk.
export const eShramCorrectionRequest: Letter = {
  slug: "e-shram-correction-request",
  category: "social",
  emoji: "🪪",
  title: "e-Shram Card Correction Request in Hindi 2026: ई-श्रम कार्ड सुधार आवेदन",
  description: "ई-श्रम कार्ड में मोबाइल, पता, बैंक खाता, काम या नाम-जन्म तिथि सुधारने का तरीका और CSC/हेल्पडेस्क को तैयार अनुरोध पत्र (हिंदी/English)। हेल्पलाइन 14434।",
  h1: "ई-श्रम कार्ड में सुधार कैसे करें: तरीका और अनुरोध पत्र 2026",
  short: { hi: "ई-श्रम कार्ड सुधार अनुरोध", en: "e-Shram correction request" },
  lead: "ई-श्रम कार्ड में <strong>मोबाइल नंबर, पता, बैंक खाता और काम (occupation)</strong> खुद <strong>eshram.gov.in</strong> पर UAN/आधार से जुड़े मोबाइल और OTP से लॉगिन करके 'Update Profile' से बदल सकते हैं, या नज़दीकी <strong>CSC</strong> से मुफ्त करवा सकते हैं। <strong>नाम, जन्म तिथि, लिंग और फोटो</strong> आधार e-KYC से आते हैं; इन्हें आम तौर पर पहले आधार में सुधारना पड़ता है, फिर ई-श्रम में दोबारा e-KYC। खुद न हो पाए तो यह लिखित अनुरोध CSC या ज़िला श्रम कार्यालय को दें, और ई-श्रम हेल्पडेस्क <strong>14434</strong> पर शिकायत दर्ज करें।",
  facts: [
    ["खुद सुधारें", "eshram.gov.in पर लॉगिन (UAN/मोबाइल + OTP) > Update Profile"],
    ["मदद", "नज़दीकी CSC; पंजीकरण/सुधार मुफ्त"],
    ["नाम/जन्म तिथि", "पहले आधार में सुधार, फिर ई-श्रम में e-KYC"],
    ["हेल्पडेस्क", "14434 / 1800-889-6811 (सुबह 9-शाम 6, रविवार सहित)"],
  ],
  to: "नज़दीकी <strong>कॉमन सर्विस सेंटर (CSC) संचालक</strong> को, या ज़िले के <strong>श्रम अधिकारी / ई-श्रम नोडल अधिकारी</strong> को। ऑनलाइन शिकायत के लिए eshram.gov.in का शिकायत (Grievance) सेक्शन।",
  when: [
    "पुराना मोबाइल नंबर बंद हो गया और OTP नहीं आता",
    "बैंक खाता गलत दर्ज है या बदल गया है",
    "पता या काम (occupation) बदल गया है",
    "कार्ड पर नाम, जन्म तिथि या फोटो गलत है",
  ],
  fields: [
    { key: "office", label: { hi: "किसे भेज रहे हैं (CSC/श्रम कार्यालय)", en: "Addressed to (CSC/labour office)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: CSC संचालक, ग्राम पंचायत भवन, ___ / ज़िला श्रम अधिकारी, ___", en: "e.g. CSC operator, Gram Panchayat Bhawan / District Labour Officer" } },
    { key: "name", label: { hi: "मज़दूर का नाम (आधार के अनुसार)", en: "Worker's name (as per Aadhaar)" }, required: true },
    { key: "uan", label: { hi: "ई-श्रम UAN (12 अंक)", en: "e-Shram UAN (12 digits)" }, required: true, hint: { hi: "ई-श्रम कार्ड पर लिखा होता है", en: "Printed on the e-Shram card" } },
    { key: "aadhaar", label: { hi: "आधार के आखिरी 4 अंक", en: "Last 4 digits of Aadhaar" }, type: "number", hint: { hi: "पूरा आधार नंबर न लिखें", en: "Do not write full Aadhaar" } },
    { key: "field", label: { hi: "क्या सुधारना है", en: "What to correct" }, type: "select", required: true, options: [
      { hi: "मोबाइल नंबर", en: "mobile number" },
      { hi: "बैंक खाते का विवरण", en: "bank account details" },
      { hi: "पता", en: "address" },
      { hi: "काम/व्यवसाय (occupation)", en: "occupation" },
      { hi: "नाम/जन्म तिथि/लिंग/फोटो (आधार में सुधार हो चुका है, दोबारा e-KYC करनी है)", en: "name/date of birth/gender/photo (corrected in Aadhaar, eKYC to be redone)" },
      { hi: "शिक्षा/आय/अन्य जानकारी", en: "education/income/other details" },
    ] },
    { key: "wrong", label: { hi: "अभी क्या गलत दर्ज है", en: "Present (wrong) entry" }, required: true },
    { key: "right", label: { hi: "सही जानकारी", en: "Correct entry" }, required: true, hint: { hi: "बैंक खाता हो तो पूरा नंबर प्रिंट के बाद हाथ से लिखें", en: "For bank account, write full number by hand on the printout" } },
    { key: "phone", label: { hi: "चालू मोबाइल नंबर", en: "Active mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "पता", en: "Address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: ई-श्रम पंजीकरण (UAN {{uan}}) में {{field}} सुधारने हेतु अनुरोध

महोदय/महोदया,

मैं, {{name}}, असंगठित क्षेत्र का श्रमिक हूं और ई-श्रम पोर्टल पर पंजीकृत हूं। मेरा UAN {{uan}} है (आधार के अंतिम 4 अंक: {{aadhaar}})।

मेरे ई-श्रम पंजीकरण में {{field}} गलत/पुराना दर्ज है:

अभी दर्ज जानकारी: {{wrong}}
सही जानकारी: {{right}}

कृपया ई-श्रम पोर्टल पर मेरी प्रोफाइल में यह सुधार करने में मदद करें, ताकि मुझे ई-श्रम से जुड़ी योजनाओं का लाभ सही खाते/जानकारी पर मिल सके। सुधार के बाद मुझे नया ई-श्रम कार्ड दें या उसकी सूचना ऊपर दिए मोबाइल नंबर पर दें।

सुधार के समर्थन में ज़रूरी कागज़ संलग्न हैं। मैं घोषणा करता/करती हूं कि दी गई जानकारी सही है।

धन्यवाद।

प्रार्थी/प्रार्थिनी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: ई-श्रम कार्ड की कॉपी, आधार की कॉपी, सुधार का प्रमाण (जैसे बैंक पासबुक/नया आधार)`,
    en: `To,
{{office}}

Subject: Request for correction of {{field}} in e-Shram registration (UAN {{uan}})

Sir/Madam,

I, {{name}}, am an unorganised sector worker registered on the e-Shram portal. My UAN is {{uan}} (last 4 digits of Aadhaar: {{aadhaar}}).

My {{field}} is wrongly/outdatedly recorded in my e-Shram registration:

Present entry: {{wrong}}
Correct entry: {{right}}

Kindly help me make this correction in my profile on the e-Shram portal, so that I receive the benefits of schemes linked to e-Shram on the correct account/details. After correction, kindly give me the updated e-Shram card or inform me on the mobile number given above.

Supporting documents are enclosed. I declare that the information given is true.

Thank you.

Yours faithfully,

(Signature/Thumb impression)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Copy of e-Shram card, copy of Aadhaar, proof of correction (e.g. bank passbook/updated Aadhaar)`,
  },
  attach: [
    "ई-श्रम कार्ड (UAN) की कॉपी",
    "आधार कार्ड की कॉपी; नाम/जन्म तिथि सुधार के लिए सुधरा हुआ आधार",
    "बैंक खाता बदलना हो तो पासबुक के पहले पेज या कैंसिल चेक की कॉपी (खाता आपके नाम का हो)",
    "मोबाइल बदलना हो तो नया मोबाइल साथ रखें (उस पर OTP आएगा); बेहतर है पहले आधार में भी वही नंबर जुड़वा लें",
  ],
  submit: [
    '<strong>खुद करें:</strong> <a href="https://eshram.gov.in/" target="_blank" rel="noopener nofollow">eshram.gov.in</a> पर "Already Registered? Login / Update" से UAN या आधार से जुड़ा मोबाइल डालें, OTP से लॉगिन करें, \'Update Profile\' में बदलाव करके सेव करें और नया कार्ड डाउनलोड करें।',
    "<strong>नाम/जन्म तिथि/फोटो गलत है:</strong> पहले आधार केंद्र पर आधार में सुधार करवाएं, फिर ई-श्रम प्रोफाइल में दोबारा e-KYC करें।",
    '<strong>खुद न हो पाए:</strong> यह पत्र और कागज़ लेकर नज़दीकी <a href="/tools/csc-locator.html">CSC</a> जाएं; ई-श्रम पंजीकरण/सुधार मुफ्त है।',
    "<strong>फिर भी न हो:</strong> ई-श्रम हेल्पडेस्क <strong>14434</strong> या 1800-889-6811 (सुबह 9 से शाम 6, रविवार सहित) पर कॉल करें, या पोर्टल के शिकायत (Grievance) सेक्शन में शिकायत दर्ज करके नंबर लिख लें।",
    "ज़्यादा दिन तक हल न हो तो यह पत्र ज़िला श्रम कार्यालय में देकर पावती लें।",
  ],
  tips: [
    "ई-श्रम में सुधार या कार्ड बनवाने के लिए कोई फीस नहीं; पैसे मांगे जाएं तो मना करें।",
    "अपना OTP सिर्फ खुद पोर्टल पर डालें; फोन पर किसी को न बताएं।",
    "बैंक खाता आधार से जुड़ा (seeded) हो, तो योजनाओं का पैसा आने में दिक्कत कम होती है।",
    "पत्र में पूरा आधार नंबर न लिखें; आखिरी 4 अंक काफी हैं, कॉपी साथ लगाएं।",
  ],
  notice: "ई-श्रम में ज़्यादातर सुधार ऑनलाइन ही होते हैं। यह पत्र CSC या श्रम कार्यालय से मदद मांगने और रिकॉर्ड रखने के लिए है।",
  official: [
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल", note: "लॉगिन, प्रोफाइल अपडेट, शिकायत; हेल्पडेस्क 14434" },
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar (UIDAI)", note: "आधार में सुधार" },
  ],
  related: ["/service/e-shram-card.html", "/service/aadhaar-card.html", "/service/labour-card-construction-workers.html", "/service/pm-shram-yogi-maandhan.html"],
  faq: [
    { q: "ई-श्रम कार्ड में मोबाइल नंबर कैसे बदलें?", a: "eshram.gov.in पर UAN/आधार से लॉगिन करके प्रोफाइल में नया नंबर डालें और OTP से पक्का करें। पुराने नंबर पर OTP न आए तो CSC जाएं या हेल्पडेस्क 14434 पर बात करें।" },
    { q: "ई-श्रम कार्ड में नाम या जन्म तिथि गलत है, क्या करें?", a: "ये जानकारी आधार e-KYC से आती है। आम तौर पर पहले आधार में सुधार करवाना पड़ता है, फिर ई-श्रम प्रोफाइल में दोबारा e-KYC। पक्का तरीका हेल्पडेस्क 14434 से पूछें।" },
    { q: "ई-श्रम में बैंक खाता कैसे बदलें?", a: "लॉगिन करके प्रोफाइल के बैंक विवरण में नया खाता नंबर और IFSC डालें और सेव करें। खाता आपके नाम का और चालू होना चाहिए।" },
    { q: "क्या ई-श्रम सुधार का पैसा लगता है?", a: "नहीं। PIB के अनुसार ई-श्रम पंजीकरण मुफ्त है, और पोर्टल पर खुद अपडेट करना भी मुफ्त है।" },
    { q: "ई-श्रम हेल्पलाइन नंबर क्या है?", a: "14434 या 1800-889-6811, सुबह 9 से शाम 6 बजे तक, रविवार सहित (eshram.gov.in के अनुसार)।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
