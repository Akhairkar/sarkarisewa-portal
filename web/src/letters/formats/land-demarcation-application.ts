import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Demarcation (seemankan / paimaish / napjokh) of a survey number or plot
//   is done under each state's land revenue law on application to the
//   Tehsildar/revenue officer, with a fee set by the state.
// - MP Land Revenue Code 1959 s.129 (MP High Court orders 2023-2025):
//   Tehsildar, on a party's application, deputes a Revenue Inspector /
//   Nagar Sarvekshak to demarcate and fix boundary marks; confirms after
//   hearing interested parties incl. neighbours (s.129(4)); appeal to SDO
//   (s.129(5)).
// - UP Revenue Code 2006 has a chapter on fixation and demarcation of
//   boundaries (section numbers not verified here, so not cited).
// - Fees, forms and online options differ by state: not stated.
export const landDemarcationApplication: Letter = {
  slug: "land-demarcation-application",
  category: "land",
  emoji: "📐",
  title: "Land Demarcation Application in Hindi 2026: ज़मीन नापजोख/सीमांकन आवेदन",
  description: "ज़मीन की नापजोख/सीमांकन (पैमाइश) के लिए तहसीलदार को आवेदन पत्र (हिंदी/English)। पड़ोसियों को नोटिस, फीस, कागज़ और रिपोर्ट पर आपत्ति/अपील।",
  h1: "ज़मीन की नापजोख / सीमांकन (Demarcation) का आवेदन पत्र 2026",
  short: { hi: "ज़मीन सीमांकन आवेदन", en: "Land demarcation application" },
  lead: "अपनी ज़मीन की सही सीमा जानने, मेड़/मुंडेर का झगड़ा सुलझाने या कब्ज़ा साबित करने के लिए <strong>तहसीलदार</strong> को <strong>सीमांकन (नापजोख/पैमाइश)</strong> का आवेदन दिया जाता है। राजस्व निरीक्षक/लेखपाल/सर्वेयर नक्शे के आधार पर मौके पर नाप करते हैं, पड़ोसी खातेदारों को सूचना दी जाती है और सीमा के निशान लगाए जाते हैं। उदाहरण: मध्य प्रदेश भू-राजस्व संहिता की <strong>धारा 129</strong> में तहसीलदार सीमांकन कराते हैं और उसके खिलाफ SDO को आवेदन होता है। फीस और प्रक्रिया राज्य के नियम से तय है।",
  facts: [
    ["किसे दें", "तहसीलदार (राजस्व विभाग)"],
    ["कौन नापेगा", "राजस्व निरीक्षक / लेखपाल / पटवारी / सर्वेयर"],
    ["पड़ोसी", "सीमा से लगे खातेदारों को सूचना"],
    ["असहमति", "रिपोर्ट पर आपत्ति; राज्य कानून में तय अपील (जैसे MP: SDO)"],
  ],
  to: "जिस तहसील में ज़मीन है, वहां के <strong>तहसीलदार</strong> को (कुछ राज्यों में अंचल अधिकारी, सर्किल ऑफिसर या भू-अभिलेख अधिकारी)। कई राज्यों में सीमांकन का आवेदन राजस्व पोर्टल पर ऑनलाइन भी होता है।",
  when: [
    "पड़ोसी से मेड़/सीमा को लेकर झगड़ा है",
    "प्लॉट/खेत पर कब्ज़े की शिकायत करनी है और सीमा साबित करनी है",
    "ज़मीन बेचने, खरीदने, बाउंड्री बनाने या मकान बनाने से पहले",
    "चकबंदी या बंटवारे के बाद मौके पर हिस्सा तय करना है",
  ],
  fields: [
    { key: "office", label: { hi: "तहसील और ज़िला", en: "Tehsil and district" }, required: true, placeholder: { hi: "जैसे: तहसील गोविंदपुरा, ज़िला भोपाल", en: "e.g. Tehsil Govindpura, District Bhopal" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "village", label: { hi: "गांव और पटवारी हल्का", en: "Village and patwari halka" }, required: true },
    { key: "khasra", label: { hi: "खसरा/सर्वे संख्या और रकबा", en: "Khasra/survey no. and area" }, required: true },
    { key: "neighbours", label: { hi: "सीमा से लगे खातेदार (चारों दिशा)", en: "Adjoining landholders (all sides)" }, type: "textarea", placeholder: { hi: "पूर्व: ___, पश्चिम: ___, उत्तर: ___, दक्षिण: ___", en: "East: ___, West: ___, North: ___, South: ___" } },
    { key: "reason", label: { hi: "सीमांकन क्यों चाहिए", en: "Reason for demarcation" }, type: "select", required: true, options: [
      { hi: "पड़ोसी से सीमा विवाद है", en: "boundary dispute with neighbour" },
      { hi: "ज़मीन पर अतिक्रमण/कब्ज़े की आशंका है", en: "suspected encroachment on the land" },
      { hi: "बाउंड्री/निर्माण से पहले सही सीमा जाननी है", en: "need correct boundary before fencing/construction" },
      { hi: "बिक्री/खरीद या बंटवारे के लिए", en: "for sale/purchase or partition" },
    ] },
    { key: "details", label: { hi: "अतिरिक्त जानकारी", en: "Additional details" }, type: "textarea" },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान तहसीलदार महोदय,
{{office}}

विषय: भूमि के सीमांकन (नापजोख/पैमाइश) हेतु आवेदन

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पत्नी श्री {{father}}, निवासी {{address}}, ग्राम {{village}} स्थित भूमि खसरा/सर्वे संख्या {{khasra}} का अभिलेखीय भूमिस्वामी/खातेदार हूं।

सीमांकन का कारण: {{reason}}। {{details}}

उक्त भूमि से लगे खातेदार इस प्रकार हैं:
{{neighbours}}

अतः आपसे प्रार्थना है कि राज्य के भू-राजस्व कानून और नियमों के अनुसार राजस्व निरीक्षक/लेखपाल/सर्वेयर द्वारा सीमा से लगे खातेदारों को सूचना देकर मौके पर मेरी भूमि का सीमांकन कराया जाए, सीमा चिह्न लगाए जाएं और सीमांकन रिपोर्ट/पंचनामा की प्रति मुझे दी जाए। निर्धारित शुल्क जमा करने को मैं तैयार हूं।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. खसरा/खतौनी/B-1 की नकल
2. भू-नक्शा/शजरा की नकल
3. बैनामा/रजिस्ट्री की प्रति
4. सीमांकन शुल्क की रसीद
5. पहचान पत्र`,
    en: `To,
The Tehsildar,
{{office}}

Subject: Application for demarcation (measurement) of land

Sir/Madam,

I, {{name}}, son/wife of Shri {{father}}, resident of {{address}}, am the recorded owner/holder of land bearing khasra/survey no. {{khasra}} in village {{village}}.

Reason for demarcation: {{reason}}. {{details}}

The adjoining landholders are:
{{neighbours}}

I therefore request you kindly to get my land demarcated on the spot by the Revenue Inspector/Lekhpal/Surveyor under the state land revenue law and rules after notice to the adjoining landholders, have boundary marks fixed, and give me a copy of the demarcation report/panchnama. I am ready to deposit the prescribed fee.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of khasra/khatauni/record of rights
2. Copy of village map (naksha/shajra)
3. Copy of sale deed/registry
4. Receipt of demarcation fee
5. Identity proof`,
  },
  attach: [
    "ताज़ा खसरा-खतौनी/B-1/7-12/RTC की नकल",
    "गांव का नक्शा (भू-नक्शा/शजरा/टिप्पण) जिसमें आपका खसरा दिखे",
    "बैनामा/रजिस्ट्री, बंटवारे या चकबंदी के कागज़",
    "सीमांकन शुल्क की रसीद (राज्य के नियम से)",
  ],
  submit: [
    "राज्य के राजस्व पोर्टल पर ऑनलाइन सीमांकन आवेदन है या नहीं, देखें; नहीं तो तहसील में पत्र और शुल्क जमा करें और रसीद/प्रकरण संख्या लें।",
    "तहसीलदार राजस्व निरीक्षक/लेखपाल को सीमांकन के लिए भेजते हैं; तारीख की सूचना आपको और पड़ोसियों को मिलती है।",
    "तय दिन मौके पर मौजूद रहें, गवाह साथ रखें; नाप के बाद पंचनामा पर हस्ताक्षर करें और रिपोर्ट की कॉपी लें।",
    "रिपोर्ट से असहमत हों तो उसी प्रकरण में लिखित आपत्ति दें; अंतिम आदेश के खिलाफ राज्य कानून में तय अधिकारी (जैसे MP में SDO) को आवेदन/अपील करें।",
    "देरी हो तो जनसुनवाई/CM हेल्पलाइन या ज़िला कलेक्टर को शिकायत करें।",
  ],
  tips: [
    "सीमांकन नक्शे और रिकॉर्ड के आधार पर होता है; पहले अपनी खतौनी और नक्शा सही करवा लें।",
    "पड़ोसियों के नाम-पते सही लिखें, ताकि नोटिस न लौटे और बाद में आपत्ति न हो।",
    "सीमांकन के बाद पक्के निशान (पत्थर/मुंडेर) लगवाएं और रिपोर्ट संभालें।",
    "सीमांकन से मालिकाना हक तय नहीं होता; हक का विवाद हो तो अदालत जाना होगा।",
  ],
  notice: "सीमांकन की धारा, फीस, समय और अपील का रास्ता <strong>हर राज्य के भू-राजस्व कानून</strong> में अलग है। धारा 129 वाला उदाहरण <strong>मध्य प्रदेश</strong> का है।",
  official: [
    { href: "https://dilrmp.gov.in/", title: "DILRMP (भूमि संसाधन विभाग)", note: "राज्यों के भू-अभिलेख पोर्टल" },
    { href: "https://upbhulekh.gov.in/", title: "UP Bhulekh", note: "उत्तर प्रदेश की ऑनलाइन खतौनी" },
  ],
  related: ["/service/ka-bhoomi-rtc.html", "/service/mh-712-extract.html", "/service/tn-patta-chitta.html"],
  faq: [
    { q: "ज़मीन की नापजोख के लिए आवेदन किसे दें?", a: "जिस तहसील में ज़मीन है, वहां के तहसीलदार को। कई राज्यों में राजस्व पोर्टल पर ऑनलाइन आवेदन भी होता है।" },
    { q: "सीमांकन की फीस कितनी है?", a: "राज्य के नियम से तय होती है और ज़मीन के क्षेत्र/प्रकार पर अलग हो सकती है। तहसील से पूछकर सरकारी रसीद पर ही जमा करें।" },
    { q: "क्या सीमांकन के समय पड़ोसियों को बुलाया जाता है?", a: "हां, सीमा से लगे खातेदारों को सूचना दी जाती है ताकि वे मौके पर आकर अपनी बात रख सकें।" },
    { q: "सीमांकन रिपोर्ट से सहमत न हों तो?", a: "उसी प्रकरण में लिखित आपत्ति दें। अंतिम आदेश पर राज्य कानून में अपील/पुनरीक्षण होता है, जैसे मध्य प्रदेश में धारा 129(5) में SDO को।" },
    { q: "सीमांकन से कब्ज़ा हट जाता है?", a: "सीमांकन सिर्फ सही सीमा बताता है। कब्ज़ा हटवाने के लिए रिपोर्ट के साथ तहसीलदार/SDM, पुलिस या अदालत में अलग कार्रवाई करनी होती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
