import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - National Food Security Act, 2013 (indiacode) and nfsa.gov.in (as in the
//   repo ration-card guide, checked 15 Oct 2026): coverage up to 75% rural /
//   50% urban population; states identify eligible households and issue
//   cards; AAY 35 kg per family per month, priority household 5 kg per person
//   per month; foodgrains free under PMGKAY from 1.1.2024 to 31.12.2028; state
//   toll-free helpline 1967 in most states; nfsa.gov.in links state portals.
// - NFSA s.13: the eldest woman (18+) of the household is the head of the
//   household for issue of the ration card.
// - Eligibility criteria, forms, fees and time limits are fixed by each
//   state, and many states issue new NFSA cards only when quota is available,
//   so the page gives none of these.
export const newRationCardApplicationLetter: Letter = {
  slug: "new-ration-card-application-letter",
  category: "social",
  emoji: "🍚",
  title: "New Ration Card Application Letter in Hindi 2026: नया राशन कार्ड आवेदन पत्र",
  description: "नया राशन कार्ड बनवाने का आवेदन पत्र (हिंदी/English): परिवार के सदस्य, आय, पता भरें। किसे दें, कौन से कागज़ लगें, ऑनलाइन तरीका, हेल्पलाइन 1967।",
  h1: "नया राशन कार्ड बनवाने का आवेदन पत्र 2026: भरें और प्रिंट करें",
  short: { hi: "नया राशन कार्ड आवेदन पत्र", en: "New ration card application" },
  lead: "राशन कार्ड राज्य का <strong>खाद्य एवं नागरिक आपूर्ति विभाग</strong> बनाता है। कई राज्यों में आवेदन राज्य के खाद्य पोर्टल या CSC से ऑनलाइन होता है; बाकी जगह यह आवेदन <strong>प्रखंड/तहसील आपूर्ति अधिकारी या ज़िला आपूर्ति अधिकारी (DSO)</strong> को राज्य के फॉर्म के साथ दिया जाता है। NFSA में पात्र परिवार को प्राथमिकता कार्ड पर <strong>5 किलो अनाज प्रति व्यक्ति</strong> और अंत्योदय कार्ड पर <strong>35 किलो प्रति परिवार</strong> हर महीने मुफ्त मिलता है। कार्ड परिवार की सबसे बड़ी (18+) महिला के नाम पर बनता है।",
  facts: [
    ["किसे दें", "प्रखंड/तहसील आपूर्ति अधिकारी या DSO (राज्य अनुसार)"],
    ["अनाज", "प्राथमिकता: 5 किलो/व्यक्ति; अंत्योदय: 35 किलो/परिवार (मुफ्त)"],
    ["मुखिया", "घर की सबसे बड़ी 18+ महिला (NFSA धारा 13)"],
    ["हेल्पलाइन", "1967 (ज़्यादातर राज्यों में)"],
  ],
  to: "अपने इलाके के <strong>प्रखंड/तहसील आपूर्ति अधिकारी</strong>, <strong>खाद्य आपूर्ति निरीक्षक</strong> या <strong>ज़िला आपूर्ति अधिकारी (DSO)</strong> को; शहरों में कहीं-कहीं <strong>राशनिंग/सर्कल कार्यालय</strong>। आपके राज्य में कौन सा दफ्तर है, यह राज्य के खाद्य पोर्टल या 1967 से पता करें।",
  when: [
    "परिवार के पास अभी तक कोई राशन कार्ड नहीं है",
    "शादी के बाद या बंटवारे के बाद अलग परिवार का नया कार्ड बनवाना है",
    "दूसरे राज्य/ज़िले से आकर बसे हैं और पुराना कार्ड सरेंडर कर दिया है",
    "ऑनलाइन आवेदन के साथ लिखित आवेदन भी देना है",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर का नाम और पता", en: "Office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: प्रखंड आपूर्ति पदाधिकारी, फुलवारी शरीफ, पटना", en: "e.g. Block Supply Officer, Phulwari Sharif, Patna" } },
    { key: "name", label: { hi: "मुखिया का नाम (घर की सबसे बड़ी महिला)", en: "Head of family (eldest woman)" }, required: true },
    { key: "relation", label: { hi: "पति/पिता का नाम", en: "Husband's/father's name" }, required: true },
    { key: "address", label: { hi: "पूरा पता", en: "Full address" }, type: "textarea", required: true, placeholder: { hi: "मकान नं., गांव/मोहल्ला, वार्ड, पंचायत, प्रखंड, ज़िला, पिन", en: "House no., village/locality, ward, panchayat, block, district, PIN" } },
    { key: "members", label: { hi: "परिवार के सदस्य (नाम, उम्र, संबंध)", en: "Family members (name, age, relation)" }, type: "textarea", required: true, placeholder: { hi: "1. सीता देवी, 38, स्वयं\n2. रामू, 42, पति\n3. पिंकी, 12, बेटी", en: "1. Sita Devi, 38, self\n2. Ramu, 42, husband\n3. Pinki, 12, daughter" } },
    { key: "income", label: { hi: "परिवार की सालाना आय और काम", en: "Annual family income and occupation" }, required: true, placeholder: { hi: "जैसे: लगभग ₹60,000, मज़दूरी", en: "e.g. about Rs 60,000, daily wage labour" } },
    { key: "category", label: { hi: "किस कार्ड के लिए", en: "Card applied for" }, type: "select", options: [
      { hi: "NFSA प्राथमिकता परिवार (PHH) राशन कार्ड", en: "NFSA Priority Household (PHH) ration card" },
      { hi: "अंत्योदय अन्न योजना (AAY) राशन कार्ड", en: "Antyodaya Anna Yojana (AAY) ration card" },
      { hi: "राज्य के नियम अनुसार पात्र श्रेणी का राशन कार्ड", en: "ration card of the eligible category as per state rules" },
    ] },
    { key: "nocard", label: { hi: "पहले कोई राशन कार्ड?", en: "Any earlier ration card?" }, type: "select", options: [
      { hi: "परिवार के किसी सदस्य का नाम किसी अन्य राशन कार्ड में नहीं है", en: "No member of the family is on any other ration card" },
      { hi: "पुराना कार्ड सरेंडर/नाम कटवाने का प्रमाण पत्र संलग्न है", en: "Surrender/deletion certificate of the old card is enclosed" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: नया राशन कार्ड बनवाने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पति/पिता {{relation}}, निम्नलिखित पते की स्थायी निवासी हूं:
{{address}}

मेरे परिवार का अभी तक कोई राशन कार्ड नहीं बना है। {{nocard}}। परिवार की सालाना आय और काम: {{income}}।

मेरे परिवार के सदस्यों का विवरण इस प्रकार है:
{{members}}

अतः आपसे निवेदन है कि जांच कर मेरे परिवार का {{category}} बनाने की कृपा करें, ताकि हमें राष्ट्रीय खाद्य सुरक्षा अधिनियम के तहत अनाज मिल सके। राज्य का निर्धारित आवेदन फॉर्म और सभी आवश्यक दस्तावेज़ संलग्न हैं।

मैं घोषणा करती हूं कि ऊपर दी गई जानकारी सही है। गलत पाए जाने पर मैं कानूनी कार्यवाही के लिए ज़िम्मेदार रहूंगी।

भवदीया,

(हस्ताक्षर/अंगूठा निशान)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. राज्य का राशन कार्ड आवेदन फॉर्म
2. परिवार के सभी सदस्यों के आधार कार्ड की कॉपी
3. निवास प्रमाण पत्र/पते का प्रमाण
4. आय प्रमाण पत्र (यदि मांगा जाए)
5. मुखिया के बैंक पासबुक की कॉपी और पासपोर्ट साइज़ फोटो`,
    en: `To,
{{office}}

Subject: Application for a new ration card

Sir/Madam,

I, {{name}}, wife/daughter of {{relation}}, am a permanent resident of the following address:
{{address}}

No ration card has been issued to my family so far. {{nocard}}. Annual family income and occupation: {{income}}.

Details of my family members are as follows:
{{members}}

I therefore request you to kindly verify and issue a {{category}} to my family, so that we can receive foodgrains under the National Food Security Act. The prescribed state application form and all required documents are enclosed.

I declare that the information given above is true. If it is found false, I will be liable for legal action.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. State ration card application form
2. Copies of Aadhaar cards of all family members
3. Residence certificate/address proof
4. Income certificate (if required)
5. Copy of head of family's bank passbook and passport-size photograph`,
  },
  attach: [
    "राज्य का राशन कार्ड आवेदन फॉर्म (दफ्तर या राज्य के खाद्य पोर्टल से)",
    "परिवार के सभी सदस्यों का आधार कार्ड",
    "पते का प्रमाण (निवास प्रमाण पत्र, बिजली बिल, किरायानामा आदि, राज्य के नियम अनुसार)",
    "आय प्रमाण पत्र, जाति प्रमाण पत्र (अगर राज्य मांगे); मुखिया का बैंक खाता और फोटो",
    "पहले किसी कार्ड में नाम था तो वहां से नाम कटवाने/सरेंडर का प्रमाण पत्र",
  ],
  submit: [
    "पहले अपने राज्य का खाद्य पोर्टल देखें (लिंक <a href=\"https://nfsa.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">nfsa.gov.in</a> पर); ऑनलाइन आवेदन हो तो वहीं या <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> से करें।",
    "ऑफलाइन हो तो राज्य का फॉर्म भरें, यह पत्र और कागज़ लगाकर आपूर्ति कार्यालय में जमा करें और <strong>रसीद/आवेदन संख्या</strong> लें।",
    "जांच के लिए आपूर्ति निरीक्षक/कर्मचारी घर आ सकते हैं; उस समय कागज़ तैयार रखें।",
    "देरी हो या आवेदन बिना कारण खारिज हो तो <strong>1967</strong> या राज्य की खाद्य हेल्पलाइन पर शिकायत करें; फिर ज़िला शिकायत निवारण अधिकारी (DGRO) को लिखें।",
  ],
  tips: [
    "एक व्यक्ति का नाम सिर्फ एक राशन कार्ड में हो सकता है; पुराने कार्ड से नाम कटवाए बिना नया आवेदन खारिज हो सकता है।",
    "कार्ड घर की सबसे बड़ी (18+) महिला के नाम पर बनता है; महिला न हो तो सबसे बड़ा पुरुष मुखिया होता है।",
    "आय और संपत्ति की सही जानकारी दें; गलत जानकारी पर कार्ड रद्द और वसूली हो सकती है।",
    "राशन कार्ड बनवाने के लिए दलाल को पैसा न दें; सरकारी फीस (अगर हो) की ही रसीद लें।",
  ],
  notice: "पात्रता (आय सीमा, किसे अंत्योदय कार्ड मिलेगा), फॉर्म, फीस और समय-सीमा हर राज्य में अलग है, और कई राज्यों में नए NFSA कार्ड सीमित कोटे के हिसाब से बनते हैं। अपने राज्य के खाद्य विभाग से पक्का करें।",
  official: [
    { href: "https://nfsa.gov.in/", title: "NFSA पोर्टल", note: "राज्यों के खाद्य विभाग के पोर्टल के लिंक" },
    { href: "https://dfpd.gov.in/", title: "खाद्य एवं सार्वजनिक वितरण विभाग, भारत सरकार" },
  ],
  related: ["/service/ration-card.html", "/service/pm-garib-kalyan-anna-yojana.html"],
  faq: [
    { q: "नया राशन कार्ड बनवाने का आवेदन किसे दें?", a: "अपने राज्य के खाद्य आपूर्ति विभाग के प्रखंड/तहसील आपूर्ति अधिकारी या ज़िला आपूर्ति अधिकारी को। कई राज्यों में आवेदन खाद्य पोर्टल या CSC से ऑनलाइन होता है।" },
    { q: "राशन कार्ड के लिए कौन से कागज़ चाहिए?", a: "आम तौर पर परिवार के सभी सदस्यों का आधार, पते का प्रमाण, मुखिया का बैंक खाता और फोटो। कुछ राज्य आय या जाति प्रमाण पत्र भी मांगते हैं।" },
    { q: "राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA प्राथमिकता कार्ड पर हर व्यक्ति को 5 किलो और अंत्योदय कार्ड पर पूरे परिवार को 35 किलो अनाज हर महीने। PMGKAY के तहत यह अनाज 31 दिसंबर 2028 तक मुफ्त है।" },
    { q: "राशन कार्ड बनने में कितना समय लगता है?", a: "यह राज्य के नियम और जांच पर निर्भर है; कई राज्यों ने सेवा का अधिकार कानून में समय तय किया है। देरी हो तो 1967 पर शिकायत करें।" },
    { q: "क्या किराए के घर में रहने वाले का राशन कार्ड बनता है?", a: "हां, ज़्यादातर राज्यों में किरायानामा या दूसरे पते के प्रमाण पर बनता है, बशर्ते परिवार पात्र हो और किसी और कार्ड में नाम न हो।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
