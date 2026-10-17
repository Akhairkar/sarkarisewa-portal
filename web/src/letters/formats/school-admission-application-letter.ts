import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same as /service/school-admission-rte):
// - Right of Children to Free and Compulsory Education Act 2009
//   (indiacode.nic.in): s.3 free and compulsory elementary education 6-14
//   years; s.13 no capitation fee and no screening procedure for admission;
//   s.14 no child to be denied admission for lack of age proof; s.15 no
//   denial of admission if sought after the start of the academic year
//   (within the extended period); s.5 a child may seek transfer and the head
//   teacher shall issue the transfer certificate immediately, delay in
//   issuing TC is not a ground to delay or deny admission elsewhere.
// - s.12(1)(c) 25% weaker-section seats in private unaided schools are filled
//   through state RTE portals (separate letter: rte-admission-complaint).
// Age cut-off for Class 1 and admission calendars are fixed by each state /
// board; the page tells readers to check the school/state notice.
export const schoolAdmissionApplicationLetter: Letter = {
  slug: "school-admission-application-letter",
  category: "school",
  emoji: "🏫",
  title: "School Admission Application Letter in Hindi 2026: स्कूल प्रवेश आवेदन",
  description: "स्कूल में दाखिले के लिए प्रधानाचार्य को आवेदन पत्र (हिंदी/English)। नई कक्षा या बीच सत्र में ट्रांसफर पर दाखिला; RTE के तहत उम्र प्रमाण न होने पर भी प्रवेश।",
  h1: "स्कूल में दाखिले के लिए आवेदन पत्र 2026: प्रधानाचार्य को लिखें",
  short: { hi: "स्कूल प्रवेश आवेदन पत्र", en: "School admission application" },
  lead: "बच्चे के दाखिले के लिए अभिभावक की ओर से <strong>स्कूल के प्रधानाचार्य</strong> को यह पत्र दिया जाता है, खासकर जब स्कूल का अपना प्रवेश फॉर्म न हो, बीच सत्र में शहर बदला हो या सीट के लिए लिखित निवेदन चाहिए। <strong>शिक्षा का अधिकार (RTE) अधिनियम 2009</strong> के तहत 6 से 14 साल के बच्चे को सरकारी स्कूल में मुफ्त प्रवेश मिलता है; <strong>उम्र का प्रमाण न होने</strong> (धारा 14) या <strong>सत्र शुरू होने के बाद</strong> आने (धारा 15) पर प्रवेश से मना नहीं किया जा सकता।",
  facts: [
    ["किसे दें", "स्कूल के प्रधानाचार्य / प्रधानाध्यापक"],
    ["कानून", "RTE अधिनियम 2009: धारा 13, 14, 15"],
    ["कैपिटेशन/टेस्ट", "प्राथमिक कक्षाओं में कैपिटेशन फीस और बच्चे/माता-पिता का स्क्रीनिंग टेस्ट मना (धारा 13)"],
    ["शिकायत", "ब्लॉक/ज़िला शिक्षा अधिकारी; बाल अधिकार आयोग (SCPCR)"],
  ],
  to: "जिस स्कूल में दाखिला चाहिए उसके <strong>प्रधानाचार्य / प्रधानाध्यापक</strong> को। सरकारी स्कूल में मना करने पर <strong>खंड शिक्षा अधिकारी (BEO) / ज़िला शिक्षा अधिकारी</strong> को इसकी कॉपी दें।",
  when: [
    "नए सत्र में बच्चे का पहली बार या अगली कक्षा में दाखिला कराना है",
    "शहर/घर बदलने से बीच सत्र में नए स्कूल में प्रवेश चाहिए",
    "स्कूल ने जन्म प्रमाण पत्र या TC न होने पर प्रवेश टाल दिया है",
    "स्कूल छोड़ चुके बच्चे को उम्र के हिसाब से कक्षा में फिर से दाखिला दिलाना है",
  ],
  fields: [
    { key: "school", label: { hi: "स्कूल का नाम और पता", en: "School name and address" }, type: "textarea", required: true },
    { key: "parent", label: { hi: "अभिभावक का नाम", en: "Parent/guardian's name" }, required: true },
    { key: "relation", label: { hi: "बच्चे से रिश्ता", en: "Relation to child" }, type: "select", options: [
      { hi: "पिता", en: "father" }, { hi: "माता", en: "mother" }, { hi: "अभिभावक", en: "guardian" },
    ] },
    { key: "child", label: { hi: "बच्चे का नाम", en: "Child's name" }, required: true },
    { key: "dob", label: { hi: "बच्चे की जन्म तिथि", en: "Child's date of birth" }, placeholder: { hi: "जैसे: 12/05/2020", en: "e.g. 12/05/2020" } },
    { key: "class", label: { hi: "किस कक्षा में दाखिला", en: "Class for admission" }, required: true, placeholder: { hi: "जैसे: कक्षा 1", en: "e.g. Class 1" } },
    { key: "prev", label: { hi: "पिछला स्कूल और कक्षा (अगर हो)", en: "Previous school and class (if any)" }, placeholder: { hi: "जैसे: सरस्वती विद्या मंदिर, गोंडा – कक्षा 3 पास", en: "e.g. Saraswati Vidya Mandir, Gonda – passed Class 3" } },
    { key: "reason", label: { hi: "दाखिले का कारण", en: "Reason for admission" }, type: "textarea", placeholder: { hi: "जैसे: नौकरी के कारण हम इस मोहल्ले में आ गए हैं; स्कूल घर से पास है", en: "e.g. We have moved to this locality due to my job; the school is near our home" } },
    { key: "address", label: { hi: "घर का पता", en: "Home address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया,
{{school}}

विषय: {{child}} को {{class}} में प्रवेश देने हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{parent}}, अपने बच्चे {{child}} (जन्म तिथि: {{dob}}) का/की {{relation}} हूं और उसका दाखिला आपके विद्यालय की {{class}} में कराना चाहता/चाहती हूं।

पिछली पढ़ाई: {{prev}}

कारण: {{reason}}

अतः आपसे निवेदन है कि मेरे बच्चे को {{class}} में प्रवेश देने की कृपा करें। विद्यालय के नियमों के अनुसार आवश्यक कागज़ मैं संलग्न कर रहा/रही हूं; यदि कोई कागज़ (जैसे जन्म प्रमाण पत्र या स्थानांतरण प्रमाण पत्र) अभी उपलब्ध नहीं है तो उसे शीघ्र जमा कर दूंगा/दूंगी। शिक्षा का अधिकार अधिनियम 2009 की धारा 14 और 15 के अनुसार इस कारण प्रवेश न रोका जाए।

मैं विद्यालय के सभी नियमों का पालन करने का आश्वासन देता/देती हूं।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{parent}}
पता: {{address}}
मोबाइल: {{phone}}

संलग्न:
1. जन्म प्रमाण पत्र / आयु का कोई प्रमाण (उपलब्ध हो तो)
2. पिछले स्कूल का स्थानांतरण प्रमाण पत्र (TC) और अंकतालिका (यदि हो)
3. बच्चे और अभिभावक के आधार की कॉपी, पासपोर्ट फोटो
4. पते का प्रमाण

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Principal,
{{school}}

Subject: Application for admission of {{child}} in {{class}}.

Respected Sir/Madam,

I, {{parent}}, am the {{relation}} of {{child}} (date of birth: {{dob}}) and wish to get my child admitted to {{class}} in your school.

Previous schooling: {{prev}}

Reason: {{reason}}

I therefore request you to kindly grant admission to my child in {{class}}. I am enclosing the documents required under the school's rules; if any document (such as the birth certificate or transfer certificate) is not yet available, I will submit it soon. As per Sections 14 and 15 of the Right of Children to Free and Compulsory Education Act, 2009, admission may kindly not be withheld for this reason.

I assure you that we will follow all the rules of the school.

Yours faithfully,

(Signature)
Name: {{parent}}
Address: {{address}}
Mobile: {{phone}}

Enclosures:
1. Birth certificate / any proof of age (if available)
2. Transfer certificate (TC) and marksheet of previous school (if any)
3. Copies of Aadhaar of child and parent, passport photographs
4. Address proof

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "जन्म प्रमाण पत्र या आयु का कोई और प्रमाण (अस्पताल का रिकॉर्ड, आंगनवाड़ी रिकॉर्ड, माता-पिता का शपथ पत्र)",
    "पिछले स्कूल की TC और अंकतालिका (अगर बच्चा पहले पढ़ चुका है)",
    "बच्चे और अभिभावक के आधार/पहचान पत्र की कॉपी, 2-4 पासपोर्ट फोटो",
    "पते का प्रमाण; जाति/आय प्रमाण पत्र सिर्फ तब जब किसी योजना/कोटे का लाभ लेना हो",
  ],
  submit: [
    "पहले स्कूल से पूछें कि उसका अपना प्रवेश फॉर्म है या नहीं; हो तो फॉर्म के साथ यह पत्र लगाएं।",
    "पत्र और कागज़ों की कॉपी स्कूल कार्यालय में जमा करें और एक कॉपी पर रिसीविंग लें।",
    "प्राइवेट स्कूल की 25% RTE सीट के लिए आवेदन राज्य के RTE पोर्टल से होता है, सीधे स्कूल से नहीं।",
    "सरकारी स्कूल प्रवेश न दे या कागज़ के नाम पर टाले, तो रिसीविंग के साथ खंड/ज़िला शिक्षा अधिकारी को लिखें; फिर राज्य बाल अधिकार संरक्षण आयोग (SCPCR) में शिकायत कर सकते हैं।",
  ],
  tips: [
    "कक्षा 1 के लिए न्यूनतम उम्र राज्य/बोर्ड तय करता है; पहले स्कूल का नोटिस देखें।",
    "पुराने स्कूल ने TC देर से दी हो तो भी प्रवेश रोका नहीं जाना चाहिए (RTE धारा 5); TC मांगने का पत्र अलग से दें।",
    "प्राथमिक स्तर (कक्षा 1-8) में बच्चे या माता-पिता का इंटरव्यू/टेस्ट लेना RTE धारा 13 में मना है।",
    "फीस/डोनेशन की कोई मांग लिखित रसीद के बिना न दें।",
  ],
  official: [
    { href: "https://www.indiacode.nic.in/", title: "India Code (RTE अधिनियम 2009 का पाठ)" },
    { href: "https://dsel.education.gov.in/", title: "स्कूल शिक्षा एवं साक्षरता विभाग, भारत सरकार" },
  ],
  related: ["/service/school-admission-rte.html", "/students/", "/digilocker/apaar-id.html"],
  faq: [
    { q: "स्कूल में दाखिले के लिए आवेदन किसे लिखें?", a: "स्कूल के प्रधानाचार्य को। पत्र में बच्चे का नाम, जन्म तिथि, कक्षा, पिछला स्कूल और अपना पता-मोबाइल लिखें।" },
    { q: "जन्म प्रमाण पत्र न हो तो क्या दाखिला नहीं मिलेगा?", a: "RTE अधिनियम की धारा 14 के अनुसार उम्र का प्रमाण न होने पर प्रारंभिक शिक्षा में प्रवेश से मना नहीं किया जा सकता। अस्पताल/आंगनवाड़ी रिकॉर्ड या माता-पिता का शपथ पत्र दिया जा सकता है।" },
    { q: "बीच सत्र में स्कूल में दाखिला हो सकता है?", a: "हां। RTE की धारा 15 के अनुसार सत्र शुरू होने के बाद आए बच्चे को भी तय बढ़ी हुई अवधि में प्रवेश देना होता है; बाद में आने पर भी पढ़ाई पूरी कराने की व्यवस्था होती है।" },
    { q: "प्राइवेट स्कूल में मुफ्त सीट (RTE 25%) के लिए यही पत्र चलेगा?", a: "नहीं। 25% सीटों पर दाखिला राज्य के RTE पोर्टल पर ऑनलाइन आवेदन और लॉटरी से होता है। दाखिला न मिलने पर हमारा RTE शिकायत पत्र इस्तेमाल करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
