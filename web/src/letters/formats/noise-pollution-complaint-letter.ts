import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Noise Pollution (Regulation and Control) Rules 2000 (as amended; text at
//   ueppcb.uk.gov.in, elaw.in): r.2(c) "authority" = DM / Police
//   Commissioner / officer not below DSP or other designated officer;
//   r.5(1) loudspeaker / public address system only with written
//   permission; r.5(2) not between 10 pm and 6 am except closed premises
//   (auditoria, community/banquet halls etc.); r.5(3) state may allow till
//   midnight on up to 15 days a year for cultural/religious/festive
//   occasions; r.7 any person may complain to the authority when noise
//   exceeds the ambient standard by 10 dB(A) or more. Schedule ambient
//   limits (residential 55 dB(A) day / 45 night) - from Schedule, widely
//   reproduced by pollution control boards.
// - Bharatiya Nagarik Suraksha Sanhita 2023 s.152: Executive Magistrate may
//   pass conditional order to remove public nuisance (successor of CrPC
//   s.133; Delhi High Court order 2026 cites s.152).
// - ERSS emergency number 112 for police.
// BNS section numbers for nuisance are left out to avoid mis-citation.
export const noisePollutionComplaintLetter: Letter = {
  slug: "noise-pollution-complaint-letter",
  category: "complaint",
  emoji: "🔊",
  title: "Noise Pollution Complaint Letter in Hindi 2026: लाउडस्पीकर शिकायत",
  description: "रात में लाउडस्पीकर/DJ या लगातार शोर की शिकायत का तैयार पत्र (हिंदी/English) थाने या SDM के लिए। ध्वनि प्रदूषण नियम 2000: रात 10 से सुबह 6 बजे तक मनाही।",
  h1: "ध्वनि प्रदूषण शिकायत पत्र 2026: लाउडस्पीकर/DJ के शोर पर पुलिस/SDM को आवेदन",
  short: { hi: "शोर/लाउडस्पीकर शिकायत", en: "Noise complaint" },
  lead: "ध्वनि प्रदूषण (विनियमन और नियंत्रण) नियम 2000 के <strong>नियम 5</strong> के अनुसार लाउडस्पीकर/DJ बजाने के लिए लिखित अनुमति ज़रूरी है और <strong>रात 10 बजे से सुबह 6 बजे</strong> तक खुले में बजाना मना है (बंद हॉल को छोड़कर; त्योहारों पर राज्य साल में ज़्यादा से ज़्यादा 15 दिन रात 12 बजे तक छूट दे सकता है)। शिकायत <strong>थाना प्रभारी</strong>, <strong>SDM</strong> या ज़िले के तय अधिकारी को की जाती है; तुरंत शोर हो रहा हो तो <strong>112</strong> पर कॉल करें।",
  facts: [
    ["नियम", "ध्वनि प्रदूषण नियम 2000, नियम 5 और 7"],
    ["मनाही का समय", "रात 10 बजे से सुबह 6 बजे (खुले में लाउडस्पीकर)"],
    ["किसे दें", "थाना प्रभारी, SDM/ज़िलाधिकारी या तय अधिकारी"],
    ["तुरंत मदद", '<a href="tel:112">112</a> (पुलिस आपात सेवा)'],
  ],
  to: "अपने इलाके के <strong>थाना प्रभारी (SHO)</strong> को, और लगातार चलने वाले शोर (फैक्ट्री, जनरेटर, मैरिज हॉल, दुकान) के लिए <strong>उपखंड अधिकारी (SDM)/ज़िलाधिकारी</strong> को। नियम में ज़िलाधिकारी, पुलिस कमिश्नर या DSP स्तर के अधिकारी को \"प्राधिकारी\" माना गया है; कई शहरों में राज्य प्रदूषण नियंत्रण बोर्ड भी शिकायत लेता है।",
  when: [
    "रात 10 बजे के बाद लाउडस्पीकर/DJ बज रहा है",
    "बिना अनुमति के रोज़ तेज़ आवाज़ में लाउडस्पीकर",
    "पास की फैक्ट्री, जनरेटर, आटा चक्की या दुकान से लगातार शोर",
    "अस्पताल/स्कूल के पास (साइलेंस ज़ोन) में शोर",
  ],
  fields: [
    { key: "authority", label: { hi: "किसे भेज रहे हैं", en: "Addressed to" }, type: "select", required: true, options: [
      { hi: "थाना प्रभारी", en: "The Station House Officer" },
      { hi: "उपखंड अधिकारी (SDM)", en: "The Sub-Divisional Magistrate" },
      { hi: "ज़िलाधिकारी", en: "The District Magistrate" },
    ] },
    { key: "office", label: { hi: "थाना/दफ्तर का नाम और ज़िला", en: "Police station / office and district" }, required: true, placeholder: { hi: "जैसे: थाना कोतवाली, अलीगढ़", en: "e.g. Kotwali PS, Aligarh" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "source", label: { hi: "शोर कहां से (जगह/व्यक्ति/संस्था)", en: "Source of noise (place/person/establishment)" }, required: true, placeholder: { hi: "जैसे: गली नं. 4 का ___ मैरिज हॉल", en: "e.g. ___ marriage hall, Lane 4" } },
    { key: "type", label: { hi: "शोर का प्रकार", en: "Type of noise" }, type: "select", required: true, options: [
      { hi: "लाउडस्पीकर/DJ", en: "loudspeaker/DJ" },
      { hi: "जनरेटर/मशीन/फैक्ट्री", en: "generator/machine/factory" },
      { hi: "पटाखे/बैंड-बाजा", en: "firecrackers/band" },
      { hi: "वाहन के प्रेशर हॉर्न/मॉडिफाइड साइलेंसर", en: "pressure horns/modified silencers" },
    ] },
    { key: "timing", label: { hi: "कब-कब (दिन, समय)", en: "When (days, time)" }, required: true, placeholder: { hi: "जैसे: रोज़ रात 10 से 1 बजे तक, पिछले 2 हफ्तों से", en: "e.g. daily 10 pm to 1 am, for 2 weeks" } },
    { key: "effect", label: { hi: "आप पर असर", en: "Effect on you" }, type: "textarea", placeholder: { hi: "घर में बुज़ुर्ग हृदय रोगी हैं, बच्चों की परीक्षा है, नींद नहीं आती", en: "Elderly heart patient at home, children's exams, unable to sleep" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{authority}},
{{office}}

विषय: {{source}} द्वारा ध्वनि प्रदूषण ({{type}}) पर रोक लगाने हेतु शिकायत

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, आपका ध्यान इस ओर दिलाना चाहता/चाहती हूं कि {{source}} द्वारा {{type}} से अत्यधिक शोर किया जा रहा है।

समय: {{timing}}

इससे हमारे परिवार और पड़ोसियों पर गंभीर असर पड़ रहा है:
{{effect}}

ध्वनि प्रदूषण (विनियमन और नियंत्रण) नियम 2000 के नियम 5 के अनुसार लाउडस्पीकर/पब्लिक एड्रेस सिस्टम बिना लिखित अनुमति के नहीं बजाया जा सकता और रात 10 बजे से सुबह 6 बजे तक (बंद परिसर को छोड़कर) इसका उपयोग वर्जित है। आवासीय क्षेत्र में शोर की तय सीमा का भी पालन होना चाहिए।

अतः आपसे निवेदन है कि:
1. मौके की जांच कराकर शोर तुरंत बंद/नियंत्रित कराया जाए;
2. बिना अनुमति या तय समय के बाद लाउडस्पीकर बजाने वालों पर नियम के अनुसार कार्रवाई की जाए;
3. आगे यह समस्या न हो, इसके लिए स्थायी निर्देश दिए जाएं।

मेरी पहचान गोपनीय रखने की कृपा करें।

प्रार्थी,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: वीडियो/रिकॉर्डिंग (पेन ड्राइव/लिंक), पड़ोसियों के हस्ताक्षर (यदि हों)`,
    en: `To,
{{authority}},
{{office}}

Subject: Complaint for stopping noise pollution ({{type}}) by {{source}}

Sir/Madam,

I, {{name}}, resident of {{address}}, wish to bring to your notice that excessive noise is being created by {{source}} through {{type}}.

Timing: {{timing}}

This is seriously affecting my family and neighbours:
{{effect}}

As per Rule 5 of the Noise Pollution (Regulation and Control) Rules, 2000, a loudspeaker / public address system cannot be used without written permission, and its use between 10 pm and 6 am (except in closed premises) is prohibited. The prescribed noise limits for residential areas must also be followed.

I therefore request you to:
1. Get the spot inspected and stop/control the noise immediately;
2. Take action as per rules against those using loudspeakers without permission or after the permitted time;
3. Issue standing directions so that the problem does not recur.

Kindly keep my identity confidential.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: video/recordings (pen drive/link), signatures of neighbours (if any)`,
  },
  attach: [
    "शोर के वीडियो/रिकॉर्डिंग, जिनमें तारीख और समय दिखे",
    "पड़ोसियों के नाम और हस्ताक्षर (सामूहिक शिकायत ज़्यादा असर करती है)",
    "पहले की 112 कॉल या शिकायत का नंबर, अगर हो",
  ],
  submit: [
    "शोर अभी चल रहा हो तो <strong>112</strong> पर कॉल करें; पुलिस मौके पर आकर बंद करा सकती है। कॉल का समय नोट कर लें।",
    "बार-बार की समस्या के लिए यह पत्र थाने में दें और रिसीविंग लें; कॉपी SDM/ज़िलाधिकारी को भी भेजें।",
    "फैक्ट्री/मशीन के लगातार शोर में राज्य प्रदूषण नियंत्रण बोर्ड के क्षेत्रीय दफ्तर को भी शिकायत कर सकते हैं।",
    "कार्रवाई न हो तो SDM/कार्यकारी मजिस्ट्रेट से BNSS की धारा 152 के तहत सार्वजनिक उपद्रव हटाने के आदेश की मांग की जा सकती है।",
  ],
  tips: [
    "दिन-तारीख-समय का रिकॉर्ड रखें; \"रोज़ शोर होता है\" से ज़्यादा असरदार \"1 से 14 अक्टूबर, रोज़ रात 10:30 से 1 बजे\" है।",
    "बहस या झगड़ा न करें; सीधे पुलिस/प्रशासन से शिकायत करें।",
    "धार्मिक/सामाजिक मामला हो तो भाषा संयमित रखें; बात सिर्फ समय और आवाज़ की हो।",
    "त्योहार के दिनों में राज्य ने रात 12 बजे तक की छूट दी हो सकती है; ऐसे दिन की शिकायत में यह ध्यान रखें।",
  ],
  official: [
    { href: "https://cpcb.nic.in/", title: "केंद्रीय प्रदूषण नियंत्रण बोर्ड (CPCB)", note: "ध्वनि मानक और नियम" },
  ],
  related: ["/support/helpline-directory.html"],
  faq: [
    { q: "रात में लाउडस्पीकर कितने बजे तक बजा सकते हैं?", a: "ध्वनि प्रदूषण नियम 2000 के अनुसार रात 10 बजे से सुबह 6 बजे तक खुले में लाउडस्पीकर मना है। राज्य सरकार त्योहार/सांस्कृतिक अवसर पर साल में ज़्यादा से ज़्यादा 15 दिन रात 12 बजे तक छूट दे सकती है।" },
    { q: "शोर की शिकायत कहां करें?", a: "तुरंत 112 पर, और लिखित में थाना प्रभारी, SDM या ज़िलाधिकारी को। लगातार औद्योगिक शोर के लिए राज्य प्रदूषण नियंत्रण बोर्ड को भी।" },
    { q: "रिहायशी इलाके में शोर की सीमा कितनी है?", a: "नियमों की अनुसूची में आवासीय क्षेत्र के लिए दिन में 55 dB(A) और रात में 45 dB(A) तय है।" },
    { q: "क्या लाउडस्पीकर के लिए अनुमति ज़रूरी है?", a: "हां, नियम 5(1) के अनुसार लाउडस्पीकर या पब्लिक एड्रेस सिस्टम के लिए प्राधिकारी की लिखित अनुमति ज़रूरी है।" },
    { q: "क्या शिकायत गुमनाम रह सकती है?", a: "112 पर कॉल में अपना नाम न बताने का अनुरोध कर सकते हैं। लिखित शिकायत में नाम ज़रूरी है, पर पत्र में पहचान गोपनीय रखने की मांग लिख सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
