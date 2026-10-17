import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Bharatiya Nagarik Suraksha Sanhita 2023 (in force 1 July 2024), s.173
//   (reproductions on courtbook.in, vidhijudicial.com, lexibal.com; SCC Online
//   blog 17.01.2026): s.173(1) information of a cognizable offence may be
//   given orally or electronically, irrespective of the area where the
//   offence was committed (zero FIR); e-information to be signed within 3
//   days; s.173(2) free copy to the informant; s.173(3) preliminary enquiry
//   within 14 days for offences punishable 3 to 7 years (with DSP-rank
//   permission); s.173(4) a person aggrieved by refusal to record may send
//   the substance of the information, in writing and by post, to the
//   Superintendent of Police, who may investigate himself or direct a
//   subordinate, failing which an application may be made to the Magistrate.
// - BNSS s.175(3): Magistrate may order investigation on an application
//   supported by an affidavit, after considering the application made to the
//   SP under s.173(4) and hearing the police officer (Supreme Court, Om
//   Prakash Ambadkar v. State of Maharashtra, 2025 INSC 139; LiveLaw,
//   Verdictum reports).
// - Supreme Court, Lalita Kumari v. Govt. of U.P. (2013): registration of FIR
//   is mandatory when information discloses a cognizable offence.
// - Bharatiya Nyaya Sanhita 2023 s.199: public servant failing to record
//   information about specified offences (sexual offences against women,
//   acid attack etc.) is punishable.
export const firNotRegisteredComplaintSp: Letter = {
  slug: "fir-not-registered-complaint-sp",
  category: "police",
  emoji: "⚖️",
  title: "FIR Not Registered Complaint to SP in Hindi 2026: BNSS 173(4) आवेदन",
  description: "थाना FIR न लिखे तो पुलिस अधीक्षक (SP) को BNSS धारा 173(4) के तहत शिकायत पत्र (हिंदी/English)। डाक से कैसे भेजें, फिर मजिस्ट्रेट (धारा 175(3)) का रास्ता।",
  h1: "थाने में FIR दर्ज न होने पर SP को शिकायत पत्र 2026 (BNSS धारा 173(4))",
  short: { hi: "FIR न लिखे तो SP को शिकायत", en: "FIR refused: complaint to SP" },
  lead: "संज्ञेय अपराध (जैसे चोरी, मारपीट, धोखाधड़ी) की सूचना देने पर भी थाना FIR न लिखे, तो नए कानून <strong>भारतीय नागरिक सुरक्षा संहिता (BNSS) 2023 की धारा 173(4)</strong> के तहत आप पूरी घटना <strong>लिखित में, डाक से</strong> ज़िले के <strong>पुलिस अधीक्षक (SP)</strong> को भेज सकते हैं। SP संतुष्ट हों तो खुद जांच करेंगे या किसी अधिकारी से जांच कराएंगे। इसके बाद भी कार्रवाई न हो तो <strong>धारा 175(3)</strong> के तहत शपथ पत्र के साथ मजिस्ट्रेट के पास आवेदन किया जा सकता है।",
  facts: [
    ["कानून", "BNSS 2023 धारा 173(4) (1 जुलाई 2024 से लागू)"],
    ["किसे भेजें", "ज़िले के पुलिस अधीक्षक (SP) / वरिष्ठ पुलिस अधीक्षक; कमिश्नरेट में DCP"],
    ["कैसे भेजें", "लिखित में, डाक से (रजिस्टर्ड/स्पीड पोस्ट); रसीद संभालें"],
    ["अगला कदम", "धारा 175(3): SP को भेजे आवेदन की कॉपी और शपथ पत्र के साथ मजिस्ट्रेट को आवेदन"],
  ],
  to: "जिस ज़िले का थाना है, उसके <strong>पुलिस अधीक्षक (SP) / वरिष्ठ पुलिस अधीक्षक (SSP)</strong> को। जिन शहरों में पुलिस कमिश्नर प्रणाली है, वहां संबंधित ज़ोन के <strong>पुलिस उपायुक्त (DCP)</strong> या पुलिस आयुक्त को।",
  when: [
    "थाने ने संज्ञेय अपराध की शिकायत लेकर भी FIR दर्ज नहीं की",
    "थाने ने 'इलाका हमारा नहीं' कहकर लौटा दिया (BNSS में ज़ीरो FIR का प्रावधान है)",
    "सिर्फ आवेदन की रिसीविंग दी, पर FIR नंबर नहीं दिया",
    "प्रारंभिक जांच के नाम पर 14 दिन से ज़्यादा टाला जा रहा है",
  ],
  fields: [
    { key: "office", label: { hi: "SP दफ्तर का पता", en: "SP office address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: पुलिस अधीक्षक, ज़िला मुज़फ्फरपुर, बिहार", en: "e.g. Superintendent of Police, Muzaffarpur, Bihar" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "station", label: { hi: "थाने का नाम", en: "Police station" }, required: true },
    { key: "visit", label: { hi: "थाने कब गए और क्या हुआ", en: "When you went to the station and what happened" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 10/10/2026 को लिखित शिकायत दी, थाना प्रभारी ने FIR लिखने से मना किया; 12/10/2026 को फिर गए", en: "e.g. Gave written complaint on 10/10/2026; SHO refused to register FIR; went again on 12/10/2026" } },
    { key: "incident", label: { hi: "घटना का पूरा विवरण", en: "Full details of the incident" }, type: "textarea", required: true, placeholder: { hi: "कब, कहां, किसने, क्या किया; कितना नुकसान; गवाह कौन हैं", en: "When, where, who, what was done; loss caused; witnesses" } },
    { key: "accused", label: { hi: "आरोपी का नाम/पता (पता हो तो)", en: "Accused name/address (if known)" }, placeholder: { hi: "जैसे: अज्ञात / राम सिंह पुत्र ___, ग्राम ___", en: "e.g. unknown / Ram Singh s/o ___, village ___" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: भारतीय नागरिक सुरक्षा संहिता 2023 की धारा 173(4) के तहत शिकायत – थाना {{station}} द्वारा FIR दर्ज न करने के संबंध में।

महोदय,

मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, निवासी {{address}}, आपके समक्ष निम्नलिखित संज्ञेय अपराध की सूचना धारा 173(4) BNSS के तहत लिखित रूप में डाक द्वारा प्रस्तुत कर रहा/रही हूं।

घटना का विवरण:
{{incident}}

आरोपी: {{accused}}

थाने में की गई कोशिश:
{{visit}}

उपरोक्त घटना से स्पष्ट रूप से संज्ञेय अपराध बनता है, फिर भी थाना {{station}} द्वारा धारा 173(1) BNSS के तहत मेरी सूचना दर्ज नहीं की गई। माननीय सर्वोच्च न्यायालय ने ललिता कुमारी बनाम उत्तर प्रदेश सरकार (2013) में स्पष्ट किया है कि संज्ञेय अपराध की सूचना पर FIR दर्ज करना अनिवार्य है।

अतः आपसे निवेदन है कि:
1. धारा 173(4) BNSS के तहत स्वयं जांच करें या किसी अधीनस्थ अधिकारी को जांच का निर्देश दें;
2. संबंधित थाने को मेरी FIR दर्ज कर उसकी निःशुल्क प्रति (धारा 173(2)) देने का निर्देश दें;
3. मुझे की गई कार्रवाई की लिखित सूचना दें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न:
1. थाने में दी गई शिकायत की कॉपी (रिसीविंग हो तो)
2. घटना से जुड़े सबूत (फोटो, मेडिकल, बिल, स्क्रीनशॉट आदि) की कॉपी
3. पहचान पत्र की कॉपी

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint under Section 173(4) of the Bharatiya Nagarik Suraksha Sanhita, 2023 – refusal of {{station}} police station to register FIR.

Sir,

I, {{name}}, son/daughter/wife of {{father}}, resident of {{address}}, hereby send you, in writing and by post under Section 173(4) BNSS, the substance of information about the following cognizable offence.

Details of the incident:
{{incident}}

Accused: {{accused}}

Attempts made at the police station:
{{visit}}

The above facts clearly disclose a cognizable offence, yet {{station}} police station did not record my information under Section 173(1) BNSS. The Hon'ble Supreme Court in Lalita Kumari v. Government of U.P. (2013) has held that registration of an FIR is mandatory when the information discloses a cognizable offence.

I therefore request you to:
1. Investigate the case yourself or direct a subordinate officer to investigate under Section 173(4) BNSS;
2. Direct the police station to register my FIR and give me a free copy (Section 173(2));
3. Inform me in writing of the action taken.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures:
1. Copy of the complaint given at the police station (with receipt, if any)
2. Copies of evidence (photos, medical report, bills, screenshots etc.)
3. Copy of identity proof

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "थाने में दी गई लिखित शिकायत की कॉपी, जिस पर रिसीविंग/मुहर हो",
    "सबूत: फोटो, वीडियो, मेडिकल रिपोर्ट, बिल, बैंक स्टेटमेंट, स्क्रीनशॉट (मूल नहीं, कॉपी)",
    "गवाहों के नाम और मोबाइल नंबर",
    "अपने पहचान पत्र की कॉपी",
  ],
  submit: [
    "पत्र प्रिंट करके हस्ताक्षर करें, सबूतों की कॉपी लगाएं और <strong>रजिस्टर्ड डाक / स्पीड पोस्ट</strong> से SP दफ्तर भेजें (धारा 173(4) में डाक से भेजना लिखा है)। चाहें तो एक कॉपी SP दफ्तर में हाथ से देकर रिसीविंग भी लें।",
    "डाक की रसीद और ट्रैकिंग का प्रिंट संभाल कर रखें; यही आगे मजिस्ट्रेट के पास सबूत बनेगा।",
    "कई राज्यों में SP/पुलिस का ऑनलाइन शिकायत पोर्टल या ईमेल भी है; उस पर भी भेज सकते हैं, पर डाक वाला रास्ता न छोड़ें।",
    "उचित समय में कार्रवाई न हो तो <strong>धारा 175(3) BNSS</strong> के तहत SP को भेजे आवेदन की कॉपी और <strong>शपथ पत्र</strong> के साथ क्षेत्र के न्यायिक मजिस्ट्रेट के पास आवेदन करें; इसके लिए वकील या ज़िला विधिक सेवा प्राधिकरण (DLSA) की मुफ्त कानूनी सहायता ले सकते हैं।",
  ],
  tips: [
    "घटना तारीख, समय, जगह और नाम के साथ क्रम से लिखें; अंदाज़े और गुस्से वाली भाषा से बचें।",
    "झूठी या बढ़ा-चढ़ाकर लिखी शिकायत खुद आपके खिलाफ अपराध बन सकती है।",
    "संज्ञेय अपराध में थाना 'इलाका हमारा नहीं' कहकर मना नहीं कर सकता; ज़ीरो FIR दर्ज होकर सही थाने भेजी जाती है।",
    "3 से 7 साल की सज़ा वाले अपराधों में पुलिस 14 दिन की प्रारंभिक जांच कर सकती है; उसके बाद फैसला लिखित में मांगें।",
    "तुरंत खतरा हो तो पत्र का इंतज़ार न करें, 112 पर कॉल करें।",
  ],
  notice: "यह पत्र कानूनी सलाह नहीं है। गंभीर मामलों (जान का खतरा, बड़ी रकम, महिला/बच्चों से जुड़े अपराध) में वकील या ज़िला विधिक सेवा प्राधिकरण (DLSA) से मुफ्त कानूनी मदद लें।",
  official: [
    { href: "https://www.indiacode.nic.in/", title: "India Code (BNSS 2023 का आधिकारिक पाठ)" },
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (गृह मंत्रालय)", note: "राज्य पुलिस के सिटिजन पोर्टल" },
    { href: "https://nalsa.gov.in/", title: "NALSA (मुफ्त कानूनी सहायता)", note: "हेल्पलाइन 15100" },
  ],
  related: ["/support/helpline-directory.html", "/support/rti-guide.html"],
  faq: [
    { q: "थाना FIR न लिखे तो क्या करें?", a: "BNSS धारा 173(4) के तहत घटना का पूरा विवरण लिखित में डाक से ज़िले के पुलिस अधीक्षक (SP) को भेजें। SP खुद जांच कर सकते हैं या किसी अधिकारी को जांच का आदेश दे सकते हैं।" },
    { q: "SP भी कार्रवाई न करे तो?", a: "BNSS धारा 175(3) के तहत क्षेत्र के न्यायिक मजिस्ट्रेट के पास आवेदन करें। साथ में SP को भेजे आवेदन की कॉपी (डाक रसीद सहित) और शपथ पत्र लगाना होता है। मजिस्ट्रेट पुलिस का पक्ष सुनकर जांच का आदेश दे सकते हैं।" },
    { q: "क्या दूसरे इलाके के थाने में FIR हो सकती है?", a: "हां। BNSS धारा 173(1) के अनुसार सूचना 'अपराध किसी भी इलाके में हुआ हो' दी जा सकती है; इसे ज़ीरो FIR कहते हैं, जो बाद में सही थाने को भेजी जाती है।" },
    { q: "क्या ऑनलाइन FIR (e-FIR) हो सकती है?", a: "BNSS में इलेक्ट्रॉनिक सूचना का प्रावधान है; ऐसी सूचना पर 3 दिन के अंदर थाने जाकर हस्ताक्षर करने होते हैं। कई राज्य कुछ मामलों (जैसे वाहन/मोबाइल चोरी) में e-FIR लेते हैं।" },
    { q: "FIR दर्ज न करने पर पुलिस पर कार्रवाई होती है?", a: "महिलाओं के विरुद्ध यौन अपराध, एसिड अटैक जैसे कुछ अपराधों में सूचना दर्ज न करना BNS धारा 199 के तहत अपराध है। बाकी मामलों में SP या मजिस्ट्रेट से शिकायत कर सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
