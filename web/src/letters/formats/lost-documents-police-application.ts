import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - digitalpolice.gov.in (MHA Digital Police portal): state police citizen
//   portals provide services such as lost/found article reports, e-FIR and
//   verification in many states (state list).
// - Bharatiya Nyaya Sanhita 2023 s.303 (theft) / s.304 (snatching) and
//   Bharatiya Nagarik Suraksha Sanhita 2023 s.173 (FIR; free copy under
//   s.173(2)) - in force since 1 July 2024; a simple loss is not an offence,
//   so police record it as a lost report / NCR / station diary entry (name
//   differs by state).
// - Duplicate-issue practice: offices (e.g. school boards, RTO, banks,
//   passport) commonly ask for a police lost report and/or an affidavit; the
//   exact requirement varies by issuing office, so the page tells readers to
//   check. See also web/src/pages/affidavit/lost-document.astro.
// - DigiLocker (digilocker.gov.in) holds issued copies of many documents.
export const lostDocumentsPoliceApplication: Letter = {
  slug: "lost-documents-police-application",
  category: "police",
  emoji: "📂",
  title: "Lost Documents Police Application in Hindi 2026: कागज़ात गुम आवेदन",
  description: "आधार, पैन, मार्कशीट, RC, पासबुक जैसे कागज़ात गुम होने पर थाने को आवेदन पत्र (हिंदी/English)। ऑनलाइन लॉस्ट रिपोर्ट, डुप्लीकेट के लिए आगे क्या करें।",
  h1: "दस्तावेज़ गुम होने पर पुलिस को आवेदन पत्र 2026",
  short: { hi: "कागज़ात गुम होने का आवेदन", en: "Lost documents police report" },
  lead: "आधार, पैन, मार्कशीट, ड्राइविंग लाइसेंस, RC, पासबुक या रजिस्ट्री जैसे कागज़ात गुम होने पर जिस इलाके में वे खोए उस <strong>थाने के प्रभारी (SHO)</strong> को आवेदन दें, या राज्य पुलिस के पोर्टल पर <strong>ऑनलाइन लॉस्ट रिपोर्ट</strong> दर्ज करें। सिर्फ गुम होना अपराध नहीं है, इसलिए पुलिस इसे लॉस्ट रिपोर्ट/NCR/रोज़नामचा में दर्ज करती है; चोरी या छीना-झपटी हो तो FIR होती है। यही रिपोर्ट आगे डुप्लीकेट दस्तावेज़ बनवाने में काम आती है।",
  facts: [
    ["किसे दें", "जिस इलाके में कागज़ खोए, उस थाने के प्रभारी (SHO); या राज्य पुलिस का ऑनलाइन पोर्टल"],
    ["क्या मिलेगा", "लॉस्ट रिपोर्ट / NCR / रोज़नामचा एंट्री की कॉपी; चोरी पर FIR (कॉपी मुफ्त)"],
    ["फीस", "कोई फीस नहीं"],
    ["आगे", "जारी करने वाले दफ्तर में डुप्लीकेट का आवेदन; कई जगह शपथ पत्र भी लगता है"],
  ],
  to: "जहां कागज़ात गुम हुए, उस इलाके के <strong>थाना प्रभारी (SHO)</strong> को। जगह पता न हो तो अपने घर के इलाके के थाने में दें। ट्रेन में खोए हों तो <strong>GRP थाने</strong> को।",
  when: [
    "सफर या बाज़ार में बैग/फाइल गुम हो गई जिसमें कागज़ात थे",
    "डुप्लीकेट मार्कशीट, RC, लाइसेंस, पासबुक या पासपोर्ट के लिए पुलिस रिपोर्ट मांगी गई",
    "कागज़ों के गलत इस्तेमाल का डर है और रिकॉर्ड में सूचना दर्ज करानी है",
    "पर्स/बैग चोरी हुआ जिसमें पहचान पत्र और कार्ड थे",
  ],
  fields: [
    { key: "station", label: { hi: "थाने का नाम और ज़िला", en: "Police station and district" }, required: true, placeholder: { hi: "जैसे: थाना सिविल लाइंस, ज़िला प्रयागराज", en: "e.g. Civil Lines Police Station, Prayagraj" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "how", label: { hi: "क्या हुआ", en: "What happened" }, type: "select", options: [
      { hi: "मेरे कागज़ात कहीं गिरकर गुम हो गए", en: "my documents were lost" },
      { hi: "मेरा बैग/पर्स, जिसमें कागज़ात थे, चोरी हो गया", en: "my bag/purse containing the documents was stolen" },
    ] },
    { key: "when", label: { hi: "कब (तारीख, लगभग समय)", en: "When (date, approx. time)" }, required: true },
    { key: "where", label: { hi: "कहां", en: "Where" }, type: "textarea", required: true, placeholder: { hi: "जैसे: बस अड्डे से कचहरी जाते समय ऑटो में", en: "e.g. in an auto from the bus stand to the court" } },
    { key: "docs", label: { hi: "गुम कागज़ात की सूची (हर एक अलग लाइन में)", en: "List of documents lost (one per line)" }, type: "textarea", required: true, placeholder: { hi: "1. 10वीं की मार्कशीट, रोल नं. ___, वर्ष ___\n2. ड्राइविंग लाइसेंस नं. ___\n3. आधार कार्ड (अंतिम 4 अंक ____)", en: "1. Class 10 marksheet, roll no. ___, year ___\n2. Driving licence no. ___\n3. Aadhaar card (last 4 digits ____)" }, hint: { hi: "बैंक कार्ड का पूरा नंबर, PIN या CVV कभी न लिखें; आधार के सिर्फ आखिरी 4 अंक लिखें", en: "Never write a full card number, PIN or CVV; write only the last 4 digits of Aadhaar" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान थाना प्रभारी महोदय,
{{station}}

विषय: आवश्यक दस्तावेज़ गुम होने की सूचना दर्ज करने हेतु आवेदन।

महोदय,

निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, निवासी {{address}}, आपको सूचित करना चाहता/चाहती हूं कि दिनांक व समय {{when}} को {{where}} {{how}}। गुम हुए दस्तावेज़ इस प्रकार हैं:

{{docs}}

मैंने इन्हें हर संभव जगह खोजा, पर ये नहीं मिले। इन दस्तावेज़ों की डुप्लीकेट प्रति बनवाने के लिए पुलिस रिपोर्ट आवश्यक है।

अतः निवेदन है कि मेरी इस सूचना को दर्ज कर मुझे इसकी प्राप्ति/रिपोर्ट की कॉपी देने की कृपा करें। यदि ये दस्तावेज़ किसी को मिलें तो कृपया मुझे सूचित करें। इन दस्तावेज़ों का यदि कोई दुरुपयोग होता है तो उसकी ज़िम्मेदारी मेरी नहीं होगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न: पहचान पत्र की कॉपी, गुम दस्तावेज़ों की फोटोकॉपी (यदि उपलब्ध हो)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Station House Officer,
{{station}}

Subject: Application to record the loss of important documents.

Sir,

I, {{name}}, son/daughter/wife of {{father}}, resident of {{address}}, wish to inform you that on {{when}}, at/while {{where}}, {{how}}. The documents lost are as follows:

{{docs}}

I have searched every possible place, but they have not been found. A police report is required to obtain duplicate copies of these documents.

I therefore request you to record this information and give me an acknowledgement / copy of the report. If anyone finds these documents, kindly inform me. I shall not be responsible for any misuse of these documents.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures: Copy of identity proof, photocopies of the lost documents (if available)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "अपना कोई पहचान पत्र (जो गुम न हुआ हो) की कॉपी",
    "गुम कागज़ों की फोटोकॉपी या फोन में फोटो हो तो उसकी कॉपी (नंबर लिखने में मदद मिलती है)",
  ],
  submit: [
    "पहले अपने राज्य की पुलिस वेबसाइट/ऐप देखें; कई राज्यों में <strong>लॉस्ट आर्टिकल रिपोर्ट</strong> ऑनलाइन दर्ज होती है और तुरंत डाउनलोड हो जाती है।",
    "ऑफलाइन हो तो यह आवेदन थाने में दें और रिपोर्ट/रोज़नामचा नंबर के साथ मुहर लगी कॉपी लें।",
    "चोरी हुई हो तो FIR दर्ज कराएं; FIR दर्ज न हो तो <strong>पुलिस अधीक्षक (SP)</strong> को लिखित शिकायत भेज सकते हैं (BNSS धारा 173(4))।",
    "रिपोर्ट की कॉपी के साथ जारी करने वाले दफ्तर (बोर्ड, RTO, बैंक, पासपोर्ट दफ्तर आदि) में डुप्लीकेट का आवेदन दें; कई दफ्तर शपथ पत्र भी मांगते हैं।",
  ],
  tips: [
    "बैंक कार्ड/पासबुक गुम हो तो पहले बैंक को फोन करके कार्ड ब्लॉक कराएं, फिर पुलिस रिपोर्ट करें।",
    "हर दस्तावेज़ का नंबर, साल और जारी करने वाला दफ्तर लिखें; बाद में डुप्लीकेट में यही काम आता है।",
    "आधार, पैन, DL, RC, मार्कशीट जैसे कई कागज़ DigiLocker से भी मिल जाते हैं; पहले वहां देखें।",
    "आगे के लिए ज़रूरी कागज़ों की स्कैन कॉपी सुरक्षित जगह रखें।",
  ],
  official: [
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (गृह मंत्रालय)", note: "राज्य पुलिस के सिटिजन पोर्टल के लिंक" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "कई दस्तावेज़ों की डिजिटल कॉपी" },
  ],
  related: ["/affidavit/lost-document.html", "/digilocker/aadhaar.html", "/documents/"],
  faq: [
    { q: "कागज़ात गुम होने पर पुलिस में रिपोर्ट कैसे करें?", a: "राज्य पुलिस के पोर्टल पर ऑनलाइन लॉस्ट रिपोर्ट दर्ज करें, या जिस इलाके में कागज़ खोए उस थाने में आवेदन देकर रिपोर्ट की मुहर लगी कॉपी लें। इसकी कोई फीस नहीं है।" },
    { q: "गुम दस्तावेज़ के लिए FIR होती है या NCR?", a: "सिर्फ गुम होना अपराध नहीं है, इसलिए लॉस्ट रिपोर्ट/NCR/रोज़नामचा एंट्री होती है। चोरी या छीना-झपटी हुई हो तो BNS के तहत FIR दर्ज होती है।" },
    { q: "डुप्लीकेट मार्कशीट या RC के लिए क्या चाहिए?", a: "आम तौर पर पुलिस लॉस्ट रिपोर्ट, शपथ पत्र और जारी करने वाले दफ्तर का फॉर्म व शुल्क। सही सूची संबंधित बोर्ड या RTO से पूछें।" },
    { q: "आधार या पैन गुम हो तो भी पुलिस रिपोर्ट ज़रूरी है?", a: "आधार और पैन की डिजिटल कॉपी ऑनलाइन डाउनलोड या दोबारा मंगाई जा सकती है; इसके लिए आम तौर पर पुलिस रिपोर्ट नहीं लगती। फिर भी दुरुपयोग का डर हो तो रिपोर्ट दर्ज करा सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
