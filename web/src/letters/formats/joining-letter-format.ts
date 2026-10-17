import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - A joining report (kaaryabhaar grahan) is an office practice, not a statute:
//   the appointee reports to the appointing/controlling officer quoting the
//   appointment order and the date and forenoon/afternoon of joining; the
//   office then verifies documents and medical fitness as stated in the
//   appointment letter. Conditions (probation, documents, medical) come from
//   each appointment order, so the page tells readers to follow it.
// - EPFO (epfindia.gov.in; repo EPFO guide): an employee joining an
//   EPF-covered establishment gives Form 11 (declaration) with existing UAN so
//   the old PF account is linked; one UAN for life.
export const joiningLetterFormat: Letter = {
  slug: "joining-letter-format",
  category: "job",
  emoji: "🤝",
  title: "Joining Letter / Joining Report Format in Hindi 2026: कार्यभार ग्रहण पत्र",
  description: "नई नौकरी (सरकारी/प्राइवेट) में जॉइनिंग रिपोर्ट/कार्यभार ग्रहण पत्र का तैयार फॉर्मेट हिंदी/English में। नियुक्ति पत्र संख्या, तारीख भरें और प्रिंट करें।",
  h1: "जॉइनिंग लेटर / ज्वाइनिंग रिपोर्ट फॉर्मेट 2026: कार्यभार ग्रहण पत्र",
  short: { hi: "जॉइनिंग रिपोर्ट/लेटर", en: "Joining report/letter" },
  lead: "नियुक्ति पत्र (appointment letter) मिलने के बाद तय तारीख को दफ्तर पहुंचकर <strong>जॉइनिंग रिपोर्ट</strong> (कार्यभार ग्रहण प्रतिवेदन) दी जाती है। इसमें <strong>नियुक्ति आदेश की संख्या और तारीख</strong>, पद, और आपने किस तारीख को <strong>पूर्वाह्न (सुबह) या अपराह्न (दोपहर बाद)</strong> कार्यभार लिया, यह लिखा जाता है। यही तारीख आगे वरिष्ठता, वेतन और प्रोबेशन की गिनती में काम आती है। सरकारी नौकरी में यह <strong>नियुक्ति करने वाले/नियंत्रक अधिकारी</strong> को और प्राइवेट नौकरी में <strong>HR</strong> को दी जाती है।",
  facts: [
    ["किसे दें", "नियुक्ति/नियंत्रक अधिकारी (सरकारी) या HR (प्राइवेट)"],
    ["कब दें", "नियुक्ति पत्र में दी गई तारीख तक"],
    ["ज़रूरी बात", "आदेश संख्या/तारीख + जॉइनिंग की तारीख, पूर्वाह्न/अपराह्न"],
    ["PF", "पहले से UAN हो तो वही दें (एक UAN)"],
  ],
  to: "सरकारी नौकरी में नियुक्ति आदेश में लिखे <strong>अधिकारी</strong> (जैसे जिला शिक्षा अधिकारी, प्रधानाचार्य, कार्यालय प्रमुख) को; प्राइवेट नौकरी में <strong>HR मैनेजर</strong> या रिपोर्टिंग मैनेजर को।",
  when: [
    "सरकारी नौकरी के नियुक्ति पत्र के बाद पहली बार दफ्तर/स्कूल में जॉइन करना हो",
    "प्राइवेट कंपनी में ऑफर/नियुक्ति स्वीकार करके जॉइन करना हो",
    "तबादले (transfer) के बाद नए दफ्तर में कार्यभार लेना हो",
    "प्रमोशन के बाद नए पद पर कार्यभार ग्रहण करना हो",
  ],
  fields: [
    { key: "officer", label: { hi: "अधिकारी/HR का पद", en: "Officer/HR designation" }, required: true, placeholder: { hi: "जैसे: जिला शिक्षा अधिकारी / HR मैनेजर", en: "e.g. District Education Officer / HR Manager" } },
    { key: "office", label: { hi: "दफ्तर/कंपनी का नाम और पता", en: "Office/company name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" } },
    { key: "post", label: { hi: "पद का नाम", en: "Post" }, required: true, placeholder: { hi: "जैसे: सहायक अध्यापक / जूनियर क्लर्क", en: "e.g. Assistant Teacher / Junior Clerk" } },
    { key: "order", label: { hi: "नियुक्ति/तबादला आदेश संख्या और तारीख", en: "Appointment/transfer order no. and date" }, required: true, placeholder: { hi: "जैसे: पत्रांक 245/स्था./2026, दिनांक 01/10/2026", en: "e.g. Letter No. 245/Estt./2026 dated 01/10/2026" } },
    { key: "type", label: { hi: "किस आधार पर जॉइनिंग", en: "Joining on" }, type: "select", options: [
      { hi: "नई नियुक्ति", en: "fresh appointment" },
      { hi: "तबादला (स्थानांतरण)", en: "transfer" },
      { hi: "पदोन्नति (प्रमोशन)", en: "promotion" },
    ] },
    { key: "joindate", label: { hi: "कार्यभार ग्रहण की तारीख", en: "Date of joining" }, type: "date", required: true },
    { key: "session", label: { hi: "समय", en: "Time" }, type: "select", options: [
      { hi: "पूर्वाह्न (सुबह)", en: "forenoon" },
      { hi: "अपराह्न (दोपहर बाद)", en: "afternoon" },
    ] },
    { key: "address", label: { hi: "आपका पता और मोबाइल", en: "Your address and mobile" }, type: "textarea", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{officer}},
{{office}}

विषय: {{post}} पद पर कार्यभार ग्रहण (जॉइनिंग) रिपोर्ट

संदर्भ: आदेश संख्या {{order}}

महोदय/महोदया,

उपर्युक्त संदर्भित आदेश के अनुपालन में, मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, {{type}} के आधार पर {{post}} के पद पर आज दिनांक {{joindate}} को {{session}} में अपना कार्यभार ग्रहण कर रहा/रही हूं।

नियुक्ति पत्र में मांगे गए सभी मूल प्रमाण पत्र सत्यापन हेतु प्रस्तुत हैं और उनकी स्व-प्रमाणित प्रतियां संलग्न हैं। कार्यालय द्वारा बताई गई अन्य औपचारिकताएं मैं निर्धारित समय में पूरी कर दूंगा/दूंगी।

कृपया मेरी जॉइनिंग स्वीकार कर आगे की आवश्यक कार्यवाही करने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर)
{{name}}
पद: {{post}}
पता/मोबाइल: {{address}}

दिनांक: {{date}}

संलग्न:
1. नियुक्ति/तबादला आदेश की प्रति
2. शैक्षणिक/अन्य प्रमाण पत्रों की स्व-प्रमाणित प्रतियां
3. पहचान पत्र और पासपोर्ट साइज़ फोटो`,
    en: `To,
{{officer}},
{{office}}

Subject: Joining report for the post of {{post}}

Reference: Order No. {{order}}

Sir/Madam,

In compliance with the order referred to above, I, {{name}}, son/daughter/wife of {{father}}, hereby report for duty and assume charge of the post of {{post}} on {{type}} today, {{joindate}}, in the {{session}}.

The original certificates required in the appointment letter are produced for verification, and self-attested copies are enclosed. I will complete any other formalities required by the office within the prescribed time.

Kindly accept my joining and take further necessary action.

Yours faithfully,

(Signature)
{{name}}
Post: {{post}}
Address/Mobile: {{address}}

Date: {{date}}

Enclosures:
1. Copy of appointment/transfer order
2. Self-attested copies of educational/other certificates
3. Identity proof and passport-size photographs`,
  },
  attach: [
    "नियुक्ति/तबादला/पदोन्नति आदेश की कॉपी",
    "नियुक्ति पत्र में मांगे गए मूल प्रमाण पत्र (दिखाने के लिए) और उनकी स्व-प्रमाणित कॉपी",
    "पहचान पत्र, पासपोर्ट साइज़ फोटो, बैंक खाते का विवरण",
    "पहले से PF वाली नौकरी की हो तो UAN; मेडिकल/चरित्र प्रमाण पत्र अगर नियुक्ति पत्र में मांगे गए हों",
  ],
  submit: [
    "नियुक्ति पत्र में दी गई तारीख तक (या उससे पहले) दफ्तर पहुंचें; देर हो रही हो तो पहले लिखित में समय बढ़ाने का अनुरोध दें।",
    "जॉइनिंग रिपोर्ट की दो कॉपी ले जाएं; एक पर दफ्तर की मुहर और रिसीविंग लेकर अपने पास रखें।",
    "प्राइवेट कंपनी में PF वाली नौकरी हो तो HR को पुराना UAN दें, ताकि नया PF खाता उसी UAN से जुड़े।",
    "सरकारी नौकरी में कार्यभार ग्रहण के बाद दफ्तर से जॉइनिंग स्वीकृति आदेश की कॉपी मांग लें।",
  ],
  tips: [
    "आदेश संख्या और तारीख ठीक वैसी ही लिखें जैसी नियुक्ति पत्र में है।",
    "पूर्वाह्न/अपराह्न ज़रूर लिखें; सरकारी सेवा में इससे वेतन और वरिष्ठता की तारीख तय होती है।",
    "मूल प्रमाण पत्र दिखाकर वापस लें; दफ्तर में सिर्फ कॉपी जमा करें, जब तक नियम अलग न कहे।",
    "नौकरी के लिए किसी को पैसे न दें; फर्जी नियुक्ति पत्र से सावधान रहें और आदेश दफ्तर से पक्का करें।",
  ],
  official: [
    { href: "https://www.epfindia.gov.in/", title: "EPFO", note: "UAN और PF खाता" },
    { href: "https://www.ncs.gov.in/", title: "National Career Service", note: "नौकरी खोज (भारत सरकार)" },
  ],
  related: ["/service/epfo.html", "/service/ncs-national-career-service.html", "/service/employment-exchange-registration.html"],
  faq: [
    { q: "जॉइनिंग रिपोर्ट और जॉइनिंग लेटर में क्या फर्क है?", a: "जॉइनिंग लेटर अक्सर कंपनी की ओर से दिया जाता है; जॉइनिंग रिपोर्ट (कार्यभार ग्रहण पत्र) कर्मचारी खुद लिखकर देता है कि उसने किस तारीख को काम शुरू किया।" },
    { q: "जॉइनिंग रिपोर्ट में पूर्वाह्न/अपराह्न क्यों लिखते हैं?", a: "सरकारी सेवा में सुबह जॉइन करने पर उसी दिन से सेवा गिनी जाती है; दोपहर बाद जॉइन करने पर गिनती अक्सर अगले दिन से होती है। इसलिए यह साफ लिखा जाता है।" },
    { q: "तय तारीख पर जॉइन न कर पाऊं तो क्या करूं?", a: "तारीख से पहले नियुक्ति अधिकारी/HR को कारण के साथ लिखित आवेदन देकर जॉइनिंग का समय बढ़ाने का अनुरोध करें और उसकी मंज़ूरी लिखित में लें।" },
    { q: "नई नौकरी में PF के लिए नया UAN बनेगा?", a: "नहीं, एक व्यक्ति का एक ही UAN रहता है। नई कंपनी को पुराना UAN दें ताकि नया PF खाता उसी से जुड़ जाए।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
