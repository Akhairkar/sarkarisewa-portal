import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Government hospitals are run by state health departments; complaints go
//   to the Medical Superintendent / CMS of the hospital and to the district
//   Chief Medical Officer (CMO / CMHO / Civil Surgeon; name differs by state).
// - Janani Shishu Suraksha Karyakram (NHM / MoHFW; Tripura govt scheme
//   summary): free drugs and consumables, diagnostics, diet, blood and
//   transport for pregnant women and sick infants at public facilities, no
//   user charges.
// - NHM Free Drugs Service Initiative (MoHFW): support to states for free
//   essential medicines in public facilities (lists set by each state).
// - Ayushman Bharat PM-JAY (NHA "Adhikar Patra"): toll-free 14555 for
//   service-delivery grievances; online CGRMS (link moved, so page points
//   to nha.gov.in / pmjay.gov.in homepage); three-tier grievance committees.
// State health helplines (often 104) differ; page says so.
export const hospitalComplaintLetter: Letter = {
  slug: "hospital-complaint-letter",
  category: "complaint",
  emoji: "🏥",
  title: "Government Hospital Complaint Letter in Hindi 2026: अस्पताल शिकायत",
  description: "सरकारी अस्पताल में इलाज न मिलने, दवा बाहर से मंगाने, पैसे मांगने या बुरे व्यवहार की शिकायत का पत्र (हिंदी/English) अधीक्षक/CMO के लिए।",
  h1: "सरकारी अस्पताल शिकायत पत्र 2026: अधीक्षक/CMO को ऐसे लिखें",
  short: { hi: "सरकारी अस्पताल शिकायत", en: "Govt hospital complaint" },
  lead: "सरकारी अस्पताल में डॉक्टर न मिलें, मुफ्त मिलने वाली दवा/जांच बाहर से मंगाई जाए, भर्ती या इलाज के लिए पैसे मांगे जाएं या स्टाफ बुरा व्यवहार करे, तो अस्पताल के <strong>चिकित्सा अधीक्षक (Medical Superintendent)</strong> और ज़िले के <strong>मुख्य चिकित्सा अधिकारी (CMO/सिविल सर्जन)</strong> को लिखित शिकायत करें। गर्भवती महिलाओं और बीमार नवजात को <strong>जननी शिशु सुरक्षा कार्यक्रम (JSSK)</strong> में दवा, जांच, खाना, खून और आने-जाने की सुविधा मुफ्त है। आयुष्मान कार्ड के इलाज में दिक्कत हो तो <strong>14555</strong> पर भी शिकायत करें।",
  facts: [
    ["किसे दें", "चिकित्सा अधीक्षक; ज़िले के CMO/सिविल सर्जन"],
    ["मुफ्त सुविधा (JSSK)", "गर्भवती व बीमार नवजात: दवा, जांच, खाना, खून, वाहन"],
    ["आयुष्मान कार्ड", '<a href="tel:14555">14555</a> (PM-JAY शिकायत, टोल-फ्री)'],
    ["आगे", "राज्य स्वास्थ्य विभाग, CPGRAMS/राज्य शिकायत पोर्टल"],
  ],
  to: "जिस अस्पताल की शिकायत है, उसके <strong>चिकित्सा अधीक्षक / मुख्य चिकित्सा अधीक्षक (CMS)</strong> को; ज़िला अस्पताल या PHC/CHC के लिए ज़िले के <strong>मुख्य चिकित्सा अधिकारी (CMO) / CMHO / सिविल सर्जन</strong> को (पद का नाम राज्य के हिसाब से अलग)। मेडिकल कॉलेज अस्पताल के लिए प्रिंसिपल/अधीक्षक को।",
  when: [
    "OPD/इमरजेंसी में डॉक्टर नहीं मिले या मरीज़ को लौटा दिया",
    "अस्पताल में मिलने वाली दवा या जांच बाहर से कराने को कहा",
    "भर्ती, ऑपरेशन या डिलीवरी के लिए पैसे मांगे गए",
    "गंदगी, बिस्तर/पानी/शौचालय की कमी",
    "स्टाफ ने बुरा व्यवहार किया",
  ],
  fields: [
    { key: "to", label: { hi: "किसे (पद)", en: "Addressed to" }, type: "select", required: true, options: [
      { hi: "चिकित्सा अधीक्षक", en: "The Medical Superintendent" },
      { hi: "मुख्य चिकित्सा अधिकारी (CMO)", en: "The Chief Medical Officer" },
      { hi: "सिविल सर्जन", en: "The Civil Surgeon" },
    ] },
    { key: "hospital", label: { hi: "अस्पताल/दफ्तर का नाम और ज़िला", en: "Hospital / office and district" }, required: true, placeholder: { hi: "जैसे: ज़िला अस्पताल, सीतापुर", en: "e.g. District Hospital, Sitapur" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "patient", label: { hi: "मरीज़ का नाम, उम्र और आपसे रिश्ता", en: "Patient's name, age, relation" }, required: true, placeholder: { hi: "जैसे: सुनीता देवी, 26 वर्ष, पत्नी", en: "e.g. Sunita Devi, 26, wife" } },
    { key: "regno", label: { hi: "OPD/भर्ती पर्ची नंबर, वार्ड", en: "OPD / admission slip no., ward" } },
    { key: "visit", label: { hi: "तारीख और समय", en: "Date and time" }, required: true },
    { key: "issue", label: { hi: "मुख्य शिकायत", en: "Main complaint" }, type: "select", required: true, options: [
      { hi: "इलाज/भर्ती से मना किया गया या डॉक्टर उपलब्ध नहीं थे", en: "treatment/admission was refused or doctors were not available" },
      { hi: "मुफ्त मिलने वाली दवा/जांच बाहर से कराने को कहा गया", en: "we were asked to buy free medicines/tests from outside" },
      { hi: "इलाज/डिलीवरी के लिए पैसे मांगे गए", en: "money was demanded for treatment/delivery" },
      { hi: "स्टाफ का दुर्व्यवहार", en: "misbehaviour by staff" },
      { hi: "साफ-सफाई और बुनियादी सुविधाओं की कमी", en: "lack of cleanliness and basic facilities" },
    ] },
    { key: "details", label: { hi: "क्या हुआ (किसने, कहां, कितने पैसे)", en: "What happened (who, where, how much)" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{hospital}}

विषय: अस्पताल में मरीज़ {{patient}} के इलाज में लापरवाही के संबंध में शिकायत

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, आपका ध्यान इस ओर दिलाना चाहता/चाहती हूं कि दिनांक {{visit}} को मैं अपने मरीज़ {{patient}} (पर्ची/भर्ती संख्या: {{regno}}) को लेकर {{hospital}} आया/आई था/थी।

शिकायत: {{issue}}।

विवरण:
{{details}}

सरकारी अस्पताल में मरीज़ को समय पर इलाज और सरकार द्वारा तय मुफ्त दवा/जांच मिलना उसका हक है। उपरोक्त घटना से मरीज़ और परिवार को भारी परेशानी हुई।

अतः आपसे निवेदन है कि:
1. मामले की जांच कराकर ज़िम्मेदार कर्मचारियों पर उचित कार्रवाई की जाए;
2. मरीज़ का इलाज/दवा/जांच नियम के अनुसार अस्पताल में ही मुफ्त कराई जाए;
3. यदि गलत तरीके से पैसे लिए गए हैं तो वापस दिलाए जाएं;
4. की गई कार्रवाई की सूचना मुझे दी जाए।

प्रार्थी,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: OPD/भर्ती पर्ची, बाहर से खरीदी दवा/जांच के बिल, अन्य सबूत`,
    en: `To,
{{to}},
{{hospital}}

Subject: Complaint regarding negligence in treatment of patient {{patient}}

Sir/Madam,

I, {{name}}, resident of {{address}}, wish to bring to your notice that on {{visit}} I brought my patient {{patient}} (slip/admission no.: {{regno}}) to {{hospital}}.

Complaint: {{issue}}.

Details:
{{details}}

Timely treatment and the free medicines/tests notified by the government are a patient's right in a government hospital. The above incident caused great hardship to the patient and family.

I therefore request you to:
1. Get the matter inquired into and take appropriate action against the staff responsible;
2. Ensure the patient's treatment/medicines/tests are provided free in the hospital as per rules;
3. Get any money wrongly taken refunded;
4. Inform me of the action taken.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: OPD/admission slip, bills of medicines/tests bought outside, other evidence`,
  },
  attach: [
    "OPD पर्ची, भर्ती/डिस्चार्ज पेपर की कॉपी",
    "बाहर से खरीदी दवा या कराई जांच के बिल",
    "पैसे मांगने/देने का कोई सबूत, गवाहों के नाम",
    "आयुष्मान कार्ड की कॉपी (अगर उसी से इलाज होना था)",
  ],
  submit: [
    "अस्पताल में अधीक्षक के दफ्तर में पत्र दें और रिसीविंग लें; कई अस्पतालों में शिकायत पेटी/हेल्प डेस्क भी होती है।",
    "कॉपी ज़िले के CMO/सिविल सर्जन दफ्तर में दें या डाक से भेजें।",
    "आयुष्मान भारत (PM-JAY) कार्ड पर इलाज से मना किया गया या पैसे मांगे गए तो <strong>14555</strong> पर शिकायत करें।",
    "राज्य की स्वास्थ्य हेल्पलाइन (कई राज्यों में 104) या राज्य शिकायत पोर्टल पर भी दर्ज करा सकते हैं; हल न हो तो राज्य स्वास्थ्य विभाग के निदेशक/सचिव को लिखें।",
  ],
  tips: [
    "इमरजेंसी में पहले इलाज कराएं; शिकायत बाद में भी हो सकती है।",
    "पर्ची और बिल संभालकर रखें; बाहर से खरीदी दवा का बिल सबसे पक्का सबूत है।",
    "डॉक्टर/स्टाफ का नाम न पता हो तो समय, वार्ड और ड्यूटी का ब्योरा लिखें।",
    "इलाज में गंभीर लापरवाही (चिकित्सीय) का आरोप हो तो राज्य मेडिकल काउंसिल और ज़रूरत हो तो पुलिस/अदालत का रास्ता अलग है; पहले जानकार से सलाह लें।",
  ],
  official: [
    { href: "https://nha.gov.in/", title: "राष्ट्रीय स्वास्थ्य प्राधिकरण (आयुष्मान भारत PM-JAY)", note: "शिकायत हेल्पलाइन 14555" },
    { href: "https://nhm.gov.in/", title: "राष्ट्रीय स्वास्थ्य मिशन", note: "JSSK और मुफ्त दवा योजना" },
  ],
  related: ["/service/ayushman-bharat.html", "/service/janani-suraksha-yojana.html"],
  faq: [
    { q: "सरकारी अस्पताल की शिकायत कहां करें?", a: "अस्पताल के चिकित्सा अधीक्षक को और ज़िले के CMO/सिविल सर्जन को लिखित में। राज्य की स्वास्थ्य हेल्पलाइन और शिकायत पोर्टल पर भी कर सकते हैं।" },
    { q: "सरकारी अस्पताल में दवा बाहर से लिखी जाए तो?", a: "ज़्यादातर राज्यों में ज़रूरी दवाओं की सूची अस्पताल में मुफ्त मिलती है। बाहर से दवा लिखी जाए तो बिल संभालें और अधीक्षक/CMO को शिकायत करें।" },
    { q: "डिलीवरी के लिए पैसे मांगे जाएं तो?", a: "जननी शिशु सुरक्षा कार्यक्रम (JSSK) में सरकारी अस्पताल में डिलीवरी, दवा, जांच, खाना, खून और आने-जाने का वाहन मुफ्त है। पैसे मांगने की शिकायत अधीक्षक/CMO को करें।" },
    { q: "आयुष्मान कार्ड से इलाज से मना करें तो?", a: "PM-JAY की टोल-फ्री हेल्पलाइन 14555 पर शिकायत करें; राज्य की आयुष्मान हेल्पलाइन/ज़िला शिकायत समिति भी है।" },
    { q: "शिकायत पर कार्रवाई न हो तो?", a: "राज्य स्वास्थ्य विभाग के निदेशक को लिखें, राज्य शिकायत पोर्टल या CPGRAMS पर शिकायत करें, और RTI से अपनी शिकायत पर हुई कार्रवाई पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
