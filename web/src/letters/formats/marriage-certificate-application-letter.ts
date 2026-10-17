import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Hindu Marriage Act 1955 s.8: state governments make rules for
//   registration of Hindu marriages; omission to register does not affect
//   validity (indiacode; SC orders in Seema v Ashwani Kumar).
// - Seema v Ashwani Kumar (SC, judgment 14 Feb 2006): all marriages to be
//   compulsorily registered; states to frame rules (sci.gov.in; iPleaders).
// - Special Marriage Act 1954: marriage registered by the Marriage Officer
//   (separate notice procedure; not covered by this letter).
// - Registrar, fee, witnesses and time limits are set by state marriage
//   registration rules: not stated as numbers.
export const marriageCertificateApplicationLetter: Letter = {
  slug: "marriage-certificate-application-letter",
  category: "document",
  emoji: "💍",
  title: "Marriage Certificate Application in Hindi 2026: विवाह प्रमाण पत्र आवेदन",
  description: "विवाह पंजीकरण/प्रमाण पत्र के लिए रजिस्ट्रार को आवेदन पत्र (हिंदी/English)। हिंदू विवाह अधिनियम धारा 8, ज़रूरी कागज़, गवाह और ऑनलाइन पंजीकरण।",
  h1: "विवाह पंजीकरण / प्रमाण पत्र के लिए आवेदन पत्र 2026",
  short: { hi: "विवाह प्रमाण पत्र आवेदन", en: "Marriage certificate application" },
  lead: "हो चुकी शादी का पंजीकरण कराकर <strong>विवाह प्रमाण पत्र</strong> लिया जाता है। हिंदू, बौद्ध, जैन और सिख शादियों का पंजीकरण <strong>हिंदू विवाह अधिनियम 1955 की धारा 8</strong> और राज्य के नियमों के तहत <strong>विवाह रजिस्ट्रार</strong> (अक्सर SDM, उप-रजिस्ट्रार, नगर निगम या पंचायत) के यहां होता है। सुप्रीम कोर्ट ने <strong>सीमा बनाम अश्वनी कुमार (2006)</strong> में सभी शादियों का पंजीकरण अनिवार्य करने को कहा था। पति-पत्नी दोनों को गवाहों के साथ आना होता है।",
  facts: [
    ["किसे दें", "विवाह रजिस्ट्रार (राज्य के नियम से तय)"],
    ["कानून", "हिंदू विवाह अधिनियम 1955, धारा 8 + राज्य नियम"],
    ["कौन आएगा", "पति-पत्नी दोनों और गवाह"],
    ["कहां से", "राज्य का विवाह पंजीकरण पोर्टल / e-District / रजिस्ट्रार कार्यालय"],
  ],
  to: "जहां शादी हुई या जहां पति/पत्नी रहते हैं, वहां के <strong>विवाह रजिस्ट्रार</strong> को। अलग धर्म की शादी या कोर्ट मैरिज विशेष विवाह अधिनियम 1954 के <strong>विवाह अधिकारी</strong> के पास होती है, जिसकी प्रक्रिया (30 दिन का नोटिस) अलग है।",
  when: [
    "शादी हो चुकी है और पासपोर्ट, वीज़ा या बैंक के लिए प्रमाण पत्र चाहिए",
    "पत्नी का नाम राशन कार्ड, आधार या सरकारी रिकॉर्ड में जोड़ना है",
    "किसी योजना (जैसे विवाह सहायता) में पंजीकृत विवाह का प्रमाण मांगा गया है",
    "बीमा, पेंशन या नॉमिनी के लिए पति/पत्नी होने का सबूत चाहिए",
  ],
  fields: [
    { key: "office", label: { hi: "रजिस्ट्रार का दफ्तर", en: "Registrar's office" }, required: true, placeholder: { hi: "जैसे: विवाह रजिस्ट्रार / उप-रजिस्ट्रार, तहसील सदर, ज़िला पटना", en: "e.g. Marriage Registrar / Sub-Registrar, Tehsil Sadar, District Patna" } },
    { key: "husband", label: { hi: "पति का नाम, पिता का नाम, जन्म तिथि", en: "Husband's name, father's name, date of birth" }, type: "textarea", required: true },
    { key: "wife", label: { hi: "पत्नी का नाम, पिता का नाम, जन्म तिथि", en: "Wife's name, father's name, date of birth" }, type: "textarea", required: true },
    { key: "dom", label: { hi: "शादी की तारीख", en: "Date of marriage" }, required: true },
    { key: "pom", label: { hi: "शादी का स्थान", en: "Place of marriage" }, required: true, placeholder: { hi: "जैसे: आर्य समाज मंदिर / गांव रामपुर", en: "e.g. Arya Samaj Mandir / village Rampur" } },
    { key: "law", label: { hi: "किस कानून के तहत", en: "Under which law" }, type: "select", options: [
      { hi: "हिंदू विवाह अधिनियम 1955 (धारा 8) और राज्य के विवाह पंजीकरण नियम", en: "Hindu Marriage Act, 1955 (Section 8) and state marriage registration rules" },
      { hi: "राज्य का अनिवार्य विवाह पंजीकरण कानून/नियम", en: "State compulsory registration of marriages Act/rules" },
    ] },
    { key: "witnesses", label: { hi: "गवाहों के नाम और पते", en: "Witnesses' names and addresses" }, type: "textarea", placeholder: { hi: "1. ____\n2. ____", en: "1. ____\n2. ____" } },
    { key: "address", label: { hi: "वर्तमान पता", en: "Present address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: विवाह पंजीकरण एवं विवाह प्रमाण पत्र जारी करने हेतु आवेदन

महोदय/महोदया,

हम, निम्न हस्ताक्षरकर्ता पति-पत्नी, निवेदन करते हैं कि हमारा विवाह दिनांक {{dom}} को {{pom}} में हिंदू रीति-रिवाज से संपन्न हुआ।

पति: {{husband}}
पत्नी: {{wife}}

विवाह के समय दोनों की आयु कानूनी आयु से अधिक थी, विवाह दोनों की सहमति से हुआ, और विवाह के समय किसी का कोई जीवित पति/पत्नी नहीं था।

हम {{law}} के तहत अपने विवाह का पंजीकरण कराना चाहते हैं। विवाह के गवाह:
{{witnesses}}

अतः आपसे प्रार्थना है कि हमारे विवाह का पंजीकरण कर विवाह प्रमाण पत्र जारी करने की कृपा करें। निर्धारित शुल्क देने और निर्धारित तिथि पर गवाहों के साथ उपस्थित होने को हम तैयार हैं।

भवदीय,

(पति के हस्ताक्षर)          (पत्नी के हस्ताक्षर)

पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. पति-पत्नी के आयु प्रमाण (जन्म प्रमाण पत्र/10वीं की मार्कशीट)
2. पति-पत्नी के आधार/पहचान पत्र और पते का प्रमाण
3. शादी का कार्ड / मंदिर-आर्य समाज का प्रमाण पत्र
4. शादी की संयुक्त फोटो और पासपोर्ट साइज़ फोटो
5. गवाहों के पहचान पत्र
6. शपथ पत्र (राज्य के फॉर्मेट में)`,
    en: `To,
{{office}}

Subject: Application for registration of marriage and issue of marriage certificate

Sir/Madam,

We, the undersigned husband and wife, respectfully submit that our marriage was solemnised on {{dom}} at {{pom}} according to Hindu rites and customs.

Husband: {{husband}}
Wife: {{wife}}

At the time of marriage both of us were above the legal age, the marriage took place with the consent of both, and neither of us had a living spouse.

We wish to register our marriage under the {{law}}. Witnesses to the marriage:
{{witnesses}}

We therefore request you kindly to register our marriage and issue a marriage certificate. We are ready to pay the prescribed fee and appear with witnesses on the date fixed.

Yours faithfully,

(Husband's signature)          (Wife's signature)

Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Age proof of husband and wife (birth certificate/Class 10 marksheet)
2. Aadhaar/identity and address proof of both
3. Wedding card / temple or Arya Samaj certificate
4. Joint wedding photograph and passport-size photographs
5. Identity proof of witnesses
6. Affidavit (in the state format)`,
  },
  attach: [
    "पति-पत्नी दोनों का आयु प्रमाण और पहचान पत्र",
    "शादी का कार्ड, मंदिर/आर्य समाज/गुरुद्वारे का प्रमाण पत्र (जो हो)",
    "शादी की संयुक्त फोटो और पासपोर्ट साइज़ फोटो",
    "गवाहों के पहचान पत्र (संख्या राज्य के नियम से)",
    "राज्य के फॉर्मेट में शपथ पत्र; पहले शादी हुई हो तो तलाक आदेश/पति-पत्नी का मृत्यु प्रमाण पत्र",
  ],
  submit: [
    "अपने राज्य के <strong>विवाह पंजीकरण पोर्टल / e-District</strong> पर ऑनलाइन फॉर्म भरें या रजिस्ट्रार कार्यालय से फॉर्म लें; यह पत्र साथ लगाएं।",
    "फीस जमा करें और रजिस्ट्रार के सामने उपस्थिति की तारीख लें।",
    "तय तारीख पर पति-पत्नी गवाहों और मूल कागज़ों के साथ जाएं; हस्ताक्षर के बाद प्रमाण पत्र मिलता है।",
    "देरी हो या आवेदन अटका हो तो राज्य के सेवा का अधिकार कानून के तहत अपील या ज़िला अधिकारी को शिकायत करें।",
  ],
  tips: [
    "कानूनी उम्र: लड़की 18 और लड़का 21 साल; इससे कम उम्र में हुई शादी पर पंजीकरण में दिक्कत होगी।",
    "नाम की स्पेलिंग आधार और पासपोर्ट जैसी रखें; बाद में सुधार कराना मुश्किल है।",
    "देर से पंजीकरण पर कई राज्यों में लेट फीस लगती है; जल्दी कराएं।",
    "दलाल 'घर बैठे सर्टिफिकेट' का दावा करें तो सावधान रहें; रजिस्ट्रार के सामने उपस्थिति ज़रूरी होती है।",
  ],
  notice: "विवाह रजिस्ट्रार कौन है, फीस, गवाहों की संख्या और समय सीमा <strong>हर राज्य के नियम</strong> में अलग है। कोर्ट मैरिज (विशेष विवाह अधिनियम) की प्रक्रिया अलग है; यह पत्र उसके लिए नहीं है।",
  official: [
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "हिंदू विवाह अधिनियम 1955, विशेष विवाह अधिनियम 1954" },
    { href: "https://serviceonline.gov.in/", title: "ServicePlus (कई राज्यों का सेवा पोर्टल)" },
  ],
  related: ["/service/marriage-certificate.html", "/service/passport.html", "/service/ration-card.html"],
  faq: [
    { q: "विवाह प्रमाण पत्र के लिए आवेदन कहां करें?", a: "राज्य द्वारा तय विवाह रजिस्ट्रार (SDM/उप-रजिस्ट्रार/नगर निगम/पंचायत) के यहां। कई राज्यों में ऑनलाइन पोर्टल पर फॉर्म भरकर फिर उपस्थिति के लिए जाना होता है।" },
    { q: "क्या शादी का पंजीकरण ज़रूरी है?", a: "सुप्रीम कोर्ट ने 2006 में सीमा बनाम अश्वनी कुमार में सभी शादियों के अनिवार्य पंजीकरण के निर्देश दिए थे और कई राज्यों ने इसके नियम बनाए हैं। हिंदू विवाह अधिनियम के तहत पंजीकरण न होने से शादी अवैध नहीं होती, पर प्रमाण पत्र कई कामों में ज़रूरी है।" },
    { q: "विवाह पंजीकरण में कितने गवाह लगते हैं?", a: "राज्य के नियम के अनुसार, आम तौर पर दो या तीन। गवाहों के पहचान पत्र साथ ले जाएं।" },
    { q: "शादी के कई साल बाद पंजीकरण हो सकता है?", a: "हां, ज़्यादातर राज्यों में हो सकता है, पर लेट फीस या अतिरिक्त शपथ पत्र लग सकता है। अपने रजिस्ट्रार से पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
