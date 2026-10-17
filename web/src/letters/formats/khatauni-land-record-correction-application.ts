import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Land records (khatauni / jamabandi / 7/12 / RTC / patta) are kept under
//   each state's land revenue law; correction applications go to the
//   Tehsildar / revenue officer of the tehsil.
// - Example: UP Revenue Code 2006 s.38 (courtbook.in text; Allahabad HC
//   digest): application to the Tahsildar, enquiry, correction ordered by the
//   SDO (Collector for map corrections); appeal to the Commissioner within
//   30 days; the power does not extend to deciding title disputes; entries
//   made without a competent order can be corrected.
// - Other states: MP Land Revenue Code 1959, Maharashtra LRC 1966, etc. have
//   their own sections: page says "राज्य का भू-राजस्व कानून" without numbers
//   beyond the labelled UP example.
// - Online land record portals: state Bhulekh / Bhoomi / Mahabhumi etc.
//   (site guides /service/mh-712-extract, /service/ka-bhoomi-rtc,
//   /service/tn-patta-chitta).
export const khatauniLandRecordCorrectionApplication: Letter = {
  slug: "khatauni-land-record-correction-application",
  category: "land",
  emoji: "📒",
  title: "Khatauni Correction Application in Hindi 2026: खतौनी/भू-अभिलेख सुधार",
  description: "खसरा-खतौनी या भू-अभिलेख में नाम, पिता का नाम, रकबा (क्षेत्रफल) की गलती सुधारने के लिए तहसीलदार को आवेदन पत्र (हिंदी/English)। कागज़ और अपील।",
  h1: "खसरा-खतौनी / भू-अभिलेख में नाम या रकबा सुधार का आवेदन पत्र 2026",
  short: { hi: "खतौनी सुधार आवेदन", en: "Land record correction" },
  lead: "खतौनी, जमाबंदी, 7/12, RTC या पट्टा जैसे भू-अभिलेख में <strong>नाम की स्पेलिंग, पिता का नाम, हिस्सा या रकबा (क्षेत्रफल)</strong> गलत दर्ज हो तो अपनी <strong>तहसील के तहसीलदार</strong> को सुधार का आवेदन दिया जाता है। राजस्व निरीक्षक/लेखपाल जांच करते हैं और सक्षम अधिकारी आदेश देता है। उदाहरण: उत्तर प्रदेश राजस्व संहिता 2006 की <strong>धारा 38</strong> में आवेदन तहसीलदार को जाता है, आदेश SDM देते हैं और <strong>30 दिन</strong> में कमिश्नर को अपील होती है। सुधार की यह प्रक्रिया मालिकाना हक का विवाद तय नहीं करती।",
  facts: [
    ["किसे दें", "तहसीलदार (राजस्व विभाग)"],
    ["जांच", "लेखपाल/पटवारी/राजस्व निरीक्षक की रिपोर्ट"],
    ["कानून", "राज्य का भू-राजस्व कानून (जैसे UP: धारा 38)"],
    ["हक का विवाद", "राजस्व/सिविल कोर्ट में अलग मुकदमा"],
  ],
  to: "जिस तहसील में ज़मीन है, वहां के <strong>तहसीलदार</strong> को (कुछ राज्यों में अंचल अधिकारी, मामलतदार या राजस्व अधिकारी)। कई राज्यों में यह आवेदन भू-अभिलेख पोर्टल या e-District से ऑनलाइन भी होता है।",
  when: [
    "खतौनी में आपके या पिता के नाम की स्पेलिंग गलत है, या आधार से मेल नहीं खाती",
    "रकबा/हिस्सा कम या ज़्यादा दर्ज हो गया है",
    "गाटा/खसरा नंबर या फसल/भूमि प्रकार गलत लिखा है",
    "PM किसान, फार्मर ID, KCC या बैंक लोन में नाम मेल न खाने से काम अटका है",
  ],
  fields: [
    { key: "office", label: { hi: "तहसील और ज़िला", en: "Tehsil and district" }, required: true, placeholder: { hi: "जैसे: तहसील सदर, ज़िला बस्ती, उत्तर प्रदेश", en: "e.g. Tehsil Sadar, District Basti, Uttar Pradesh" } },
    { key: "name", label: { hi: "आवेदक का नाम (सही)", en: "Applicant's name (correct)" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम (सही)", en: "Father's/husband's name (correct)" }, required: true },
    { key: "village", label: { hi: "गांव, परगना/हल्का", en: "Village, pargana/halka" }, required: true },
    { key: "khata", label: { hi: "खाता/खतौनी संख्या", en: "Khata/khatauni no." }, required: true },
    { key: "khasra", label: { hi: "खसरा/गाटा संख्या और रकबा", en: "Khasra/gata no. and area" }, required: true, placeholder: { hi: "जैसे: गाटा 245, रकबा 0.312 हेक्टेयर", en: "e.g. Gata 245, area 0.312 hectare" } },
    { key: "error", label: { hi: "कौन सी गलती", en: "Type of error" }, type: "select", required: true, options: [
      { hi: "नाम की स्पेलिंग", en: "spelling of name" },
      { hi: "पिता/पति का नाम", en: "father's/husband's name" },
      { hi: "रकबा/हिस्सा", en: "area/share" },
      { hi: "खसरा/गाटा संख्या", en: "khasra/gata number" },
      { hi: "अन्य लिपिकीय गलती", en: "other clerical error" },
    ] },
    { key: "wrong", label: { hi: "अभी क्या दर्ज है", en: "Present (wrong) entry" }, type: "textarea", required: true },
    { key: "right", label: { hi: "सही क्या होना चाहिए", en: "Correct entry" }, type: "textarea", required: true },
    { key: "proof", label: { hi: "सबूत", en: "Supporting documents" }, type: "textarea", required: true, placeholder: { hi: "जैसे: बैनामा/रजिस्ट्री, पुरानी खतौनी, आधार, नामांतरण आदेश", en: "e.g. sale deed, old khatauni, Aadhaar, mutation order" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान तहसीलदार महोदय,
{{office}}

विषय: भू-अभिलेख (खसरा-खतौनी) में {{error}} की त्रुटि सुधार हेतु प्रार्थना पत्र

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पत्नी श्री {{father}}, निवासी {{address}}, ग्राम {{village}} स्थित निम्न भूमि का खातेदार/सह-खातेदार हूं:

खाता/खतौनी संख्या: {{khata}}
खसरा/गाटा संख्या और रकबा: {{khasra}}

उक्त भूमि के अभिलेख में लिपिकीय भूल से निम्न गलती दर्ज हो गई है:
अभी दर्ज: {{wrong}}
सही: {{right}}

सही विवरण के समर्थन में निम्न कागज़ों की प्रतियां संलग्न हैं:
{{proof}}

इस सुधार से किसी अन्य व्यक्ति के अधिकार पर कोई असर नहीं पड़ता और इस भूमि को लेकर कोई विवाद लंबित नहीं है।

अतः आपसे प्रार्थना है कि राजस्व निरीक्षक/लेखपाल से जांच कराकर राज्य के भू-राजस्व कानून के अनुसार अभिलेख में आवश्यक सुधार करने का आदेश देने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. वर्तमान खतौनी/भू-अभिलेख की नकल
2. सबूत के कागज़ (ऊपर लिखे अनुसार)
3. आधार/पहचान पत्र
4. शपथ पत्र (यदि मांगा जाए)`,
    en: `To,
The Tehsildar,
{{office}}

Subject: Application for correction of {{error}} in the land record (khasra-khatauni)

Sir/Madam,

I, {{name}}, son/wife of Shri {{father}}, resident of {{address}}, am the holder/co-holder of the following land in village {{village}}:

Khata/khatauni no.: {{khata}}
Khasra/gata no. and area: {{khasra}}

The following error has been recorded in the land record of this land due to a clerical mistake:
Present entry: {{wrong}}
Correct entry: {{right}}

Copies of the following documents are enclosed in support of the correct details:
{{proof}}

This correction does not affect the rights of any other person and no dispute about this land is pending.

I therefore request you kindly to get the matter enquired into by the Revenue Inspector/Lekhpal and order the necessary correction in the record under the state land revenue law.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of the current khatauni/land record
2. Supporting documents (as listed above)
3. Aadhaar/identity proof
4. Affidavit (if required)`,
  },
  attach: [
    "वर्तमान खतौनी/जमाबंदी/7-12/RTC की नकल (ऑनलाइन निकाली हुई भी)",
    "ज़मीन का मूल कागज़: बैनामा/रजिस्ट्री, विरासत/नामांतरण आदेश, पुरानी खतौनी जिसमें सही दर्ज था",
    "नाम सुधार के लिए आधार, वोटर ID, स्कूल रिकॉर्ड",
    "रकबा सुधार के लिए नक्शा/पैमाइश रिपोर्ट, चकबंदी के कागज़",
  ],
  submit: [
    "अपने राज्य के भू-अभिलेख पोर्टल पर देखें कि सुधार का ऑनलाइन आवेदन है या नहीं; नहीं तो तहसील के जन सुविधा केंद्र/तहसीलदार कार्यालय में पत्र जमा करें और <strong>रसीद/वाद संख्या</strong> लें।",
    "लेखपाल/पटवारी और राजस्व निरीक्षक मौके और रिकॉर्ड की जांच करते हैं; पड़ोसी खातेदारों को नोटिस जा सकता है।",
    "सक्षम अधिकारी (तहसीलदार/SDM) के आदेश के बाद नई खतौनी में सुधार दिखेगा; नकल निकालकर जांचें।",
    "आदेश से असहमत हों तो राज्य कानून में तय समय में अपील करें (UP में धारा 38 के आदेश पर 30 दिन में कमिश्नर); देरी हो तो जनसुनवाई/CM हेल्पलाइन पर शिकायत करें।",
  ],
  tips: [
    "सिर्फ लिपिकीय गलती ही इस आवेदन से सुधरती है; मालिकाना हक या हिस्से का विवाद हो तो राजस्व न्यायालय/सिविल कोर्ट में मुकदमा करना होता है।",
    "नाम बिल्कुल आधार जैसा लिखवाएं, ताकि PM किसान, फार्मर ID और बैंक में दिक्कत न हो।",
    "रकबा सुधार के लिए अक्सर पहले पैमाइश (नापजोख) करानी पड़ती है।",
    "लेखपाल या किसी को रिश्वत न दें; मांगे तो भ्रष्टाचार की शिकायत करें।",
  ],
  notice: "हर राज्य का भू-राजस्व कानून, धारा, फॉर्म और अपील का रास्ता अलग है। ऊपर दिया धारा 38 का उदाहरण <strong>उत्तर प्रदेश</strong> का है; अपने राज्य में तहसील से पूछें।",
  official: [
    { href: "https://upbhulekh.gov.in/", title: "UP Bhulekh", note: "उत्तर प्रदेश की ऑनलाइन खतौनी" },
    { href: "https://dilrmp.gov.in/", title: "DILRMP (भूमि संसाधन विभाग)", note: "राज्यों के भू-अभिलेख पोर्टल के लिंक" },
  ],
  related: ["/service/mh-712-extract.html", "/service/ka-bhoomi-rtc.html", "/service/tn-patta-chitta.html", "/service/farmer-id-card-agristack.html"],
  faq: [
    { q: "खतौनी में नाम सुधार कैसे कराएं?", a: "तहसीलदार को आवेदन दें, साथ में खतौनी की नकल, बैनामा/नामांतरण आदेश और आधार लगाएं। लेखपाल की जांच के बाद सक्षम अधिकारी सुधार का आदेश देता है।" },
    { q: "खतौनी सुधार का आवेदन किसे दें?", a: "जिस तहसील में ज़मीन है, वहां के तहसीलदार को। कुछ राज्यों में भू-अभिलेख पोर्टल पर ऑनलाइन आवेदन भी होता है।" },
    { q: "UP में खतौनी सुधार किस धारा में होता है?", a: "उत्तर प्रदेश राजस्व संहिता 2006 की धारा 38 में। आवेदन तहसीलदार को, आदेश SDM (नक्शे के मामले में कलेक्टर) देते हैं और 30 दिन में कमिश्नर को अपील होती है।" },
    { q: "रकबा गलत दर्ज हो तो क्या करें?", a: "तहसीलदार को सुधार का आवेदन दें; अक्सर पहले पैमाइश/सीमांकन होता है। हिस्से का विवाद हो तो राजस्व न्यायालय में बंटवारे/घोषणा का मुकदमा करना पड़ता है।" },
    { q: "खतौनी सुधार में कितना समय लगता है?", a: "राज्य और मामले पर निर्भर है; कोई एक राष्ट्रीय समय सीमा नहीं है। रसीद/वाद संख्या से स्थिति पूछते रहें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
