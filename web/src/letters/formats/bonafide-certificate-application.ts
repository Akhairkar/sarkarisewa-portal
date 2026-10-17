import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - A bonafide (study) certificate is issued by the school/college itself on
//   its letterhead; no national law fixes its format, fee or timeline, so
//   the page gives none.
// - National Scholarship Portal (scholarships.gov.in) and institute notices
//   (e.g. Karunya University, NIT Karnataka, NIT Silchar scholarship
//   instructions): for NSP scholarships the student downloads the bonafide
//   certificate in the portal's prescribed format after registration, gets
//   it signed/stamped by the institute and uploads it. Hence the notice
//   telling readers to use the scheme's own format where one exists.
export const bonafideCertificateApplication: Letter = {
  slug: "bonafide-certificate-application",
  category: "school",
  emoji: "🎓",
  title: "Bonafide Certificate Application in Hindi 2026: बोनाफाइड प्रमाण पत्र",
  description: "स्कूल/कॉलेज से बोनाफाइड (अध्ययन) प्रमाण पत्र मांगने का प्रार्थना पत्र, हिंदी/English में। स्कॉलरशिप, बैंक खाता, पास के लिए; भरें और प्रिंट करें।",
  h1: "बोनाफाइड सर्टिफिकेट के लिए प्रार्थना पत्र 2026",
  short: { hi: "बोनाफाइड प्रमाण पत्र आवेदन", en: "Bonafide certificate application" },
  lead: "<strong>बोनाफाइड प्रमाण पत्र</strong> (Bonafide / Study Certificate) यह साबित करता है कि आप इस समय उस स्कूल/कॉलेज के नियमित छात्र हैं। यह स्कूल के <strong>प्रधानाचार्य</strong> या कॉलेज के <strong>प्राचार्य/रजिस्ट्रार</strong> से अपने लेटरहेड पर मिलता है। स्कॉलरशिप, बैंक खाता, बस/रेल पास, हॉस्टल, इंटर्नशिप या प्रतियोगी परीक्षा के लिए इसे मांगा जाता है। पत्र में <strong>उद्देश्य (purpose)</strong> साफ लिखें, क्योंकि सर्टिफिकेट पर भी वही लिखा जाता है।",
  facts: [
    ["किसे दें", "प्रधानाचार्य / कॉलेज प्राचार्य या रजिस्ट्रार"],
    ["क्या साबित करता है", "आप इस सत्र में नियमित छात्र हैं"],
    ["फीस और समय", "संस्था के नियम से; ऑफिस में पूछें"],
    ["स्कॉलरशिप में", "NSP जैसे पोर्टल का अपना फॉर्मेट होता है"],
  ],
  to: "स्कूल में <strong>प्रधानाचार्य/प्रधानाध्यापक</strong> को; कॉलेज/विश्वविद्यालय में <strong>प्राचार्य</strong>, <strong>रजिस्ट्रार</strong> या विभागाध्यक्ष (HOD) को, जैसा संस्था का नियम हो।",
  when: [
    "स्कॉलरशिप (राज्य या राष्ट्रीय छात्रवृत्ति पोर्टल) के आवेदन में",
    "बैंक में छात्र खाता खोलने या एजुकेशन लोन के लिए",
    "बस/रेल पास, हॉस्टल या लाइब्रेरी सदस्यता के लिए",
    "इंटर्नशिप, खेल प्रतियोगिता या प्रतियोगी परीक्षा के फॉर्म में",
  ],
  fields: [
    { key: "to", label: { hi: "किसे लिख रहे हैं", en: "Addressed to" }, type: "select", options: [
      { hi: "प्रधानाचार्य", en: "The Principal" },
      { hi: "रजिस्ट्रार", en: "The Registrar" },
      { hi: "विभागाध्यक्ष", en: "The Head of Department" },
    ] },
    { key: "school", label: { hi: "स्कूल/कॉलेज का नाम और पता", en: "School/college name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "father", label: { hi: "पिता/माता का नाम", en: "Father's/mother's name" }, required: true },
    { key: "class", label: { hi: "कक्षा/कोर्स और वर्ष", en: "Class/course and year" }, required: true, placeholder: { hi: "जैसे: B.Sc. द्वितीय वर्ष / कक्षा 11 (विज्ञान)", en: "e.g. B.Sc. 2nd year / Class 11 (Science)" } },
    { key: "roll", label: { hi: "रोल/नामांकन नंबर", en: "Roll/enrolment no." }, required: true },
    { key: "session", label: { hi: "सत्र", en: "Session" }, placeholder: { hi: "जैसे: 2026-27", en: "e.g. 2026-27" } },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, type: "select", options: [
      { hi: "छात्रवृत्ति (स्कॉलरशिप) आवेदन", en: "scholarship application" },
      { hi: "बैंक खाता खोलने", en: "opening a bank account" },
      { hi: "शिक्षा ऋण (एजुकेशन लोन)", en: "education loan" },
      { hi: "बस/रेलवे पास बनवाने", en: "bus/railway pass" },
      { hi: "पासपोर्ट/अन्य सरकारी आवेदन", en: "passport/other government application" },
      { hi: "इंटर्नशिप/प्रतियोगिता", en: "internship/competition" },
    ] },
    { key: "extra", label: { hi: "और जानकारी (चाहें तो)", en: "Additional details (optional)" }, type: "textarea", placeholder: { hi: "जैसे: प्रमाण पत्र पर जन्म तिथि और पता भी लिखें", en: "e.g. Please mention date of birth and address on the certificate" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{school}}

विषय: बोनाफाइड (अध्ययन) प्रमाण पत्र जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री {{father}}, आपके संस्थान में {{class}} का नियमित छात्र/छात्रा हूं।
रोल/नामांकन नंबर: {{roll}}
सत्र: {{session}}

मुझे {{purpose}} के लिए बोनाफाइड प्रमाण पत्र की आवश्यकता है।

{{extra}}

अतः आपसे प्रार्थना है कि मुझे बोनाफाइड प्रमाण पत्र जल्द से जल्द जारी करने की कृपा करें। इसके लिए कोई फीस या फॉर्म ज़रूरी हो तो मैं उसे जमा कर दूंगा/दूंगी।

धन्यवाद।

आपका आज्ञाकारी शिष्य/आपकी आज्ञाकारी शिष्या,

(हस्ताक्षर)
नाम: {{name}}
कक्षा/कोर्स: {{class}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: पहचान पत्र (आई-कार्ड) और इस सत्र की फीस रसीद की कॉपी`,
    en: `To,
{{to}},
{{school}}

Subject: Application for issue of Bonafide (Study) Certificate

Respected Sir/Madam,

I, {{name}}, son/daughter of {{father}}, am a regular student of {{class}} in your institution.
Roll/enrolment no.: {{roll}}
Session: {{session}}

I need a bonafide certificate for the purpose of {{purpose}}.

{{extra}}

I therefore request you kindly to issue me a bonafide certificate at the earliest. If any fee or form is required for this, I will submit it.

Thanking you.

Yours obediently,

(Signature)
Name: {{name}}
Class/course: {{class}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosed: copy of student ID card and fee receipt for this session`,
  },
  attach: [
    "स्कूल/कॉलेज के आई-कार्ड की कॉपी",
    "इस सत्र की फीस रसीद की कॉपी",
    "जिस योजना/बैंक के लिए चाहिए, उसका तय फॉर्मेट (अगर है) — उसी पर हस्ताक्षर-मुहर कराएं",
  ],
  submit: [
    "पत्र प्रिंट करके हस्ताक्षर करें और स्कूल ऑफिस/कॉलेज के अकादमिक सेक्शन में जमा करें।",
    "स्कॉलरशिप या बैंक का अपना फॉर्मेट हो तो वह भी साथ दें; संस्था उसी पर मुहर और हस्ताक्षर करती है।",
    "प्रमाण पत्र मिलने पर नाम, कोर्स, सत्र, जन्म तिथि और उद्देश्य जांच लें; मुहर और तारीख होनी चाहिए।",
    "कई कॉलेज ERP/स्टूडेंट पोर्टल पर ऑनलाइन बोनाफाइड देते हैं; ऑफिस से पूछ लें।",
  ],
  tips: [
    "उद्देश्य साफ लिखें; बैंक के लिए बना सर्टिफिकेट स्कॉलरशिप में नहीं चलता, और उल्टा भी।",
    "बोनाफाइड केवल मौजूदा सत्र के लिए मान्य माना जाता है; पुराना सर्टिफिकेट नए सत्र में न लगाएं।",
    "स्कॉलरशिप पोर्टल पर अपलोड करने से पहले साफ स्कैन करें और फाइल का साइज़ पोर्टल के नियम के अनुसार रखें।",
    "पिता/माता का नाम और जन्म तिथि स्कूल रिकॉर्ड से मिलाकर लिखें।",
  ],
  notice: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) समेत कई स्कॉलरशिप में बोनाफाइड का <strong>तय फॉर्मेट पोर्टल से डाउनलोड</strong> होता है, जिस पर संस्था हस्ताक्षर-मुहर करती है। वहां यह पत्र सिर्फ संस्था से अनुरोध के लिए है; सर्टिफिकेट पोर्टल वाले फॉर्मेट में ही लगाएं।",
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "स्कॉलरशिप और बोनाफाइड फॉर्मेट" },
  ],
  related: ["/students/", "/service/national-scholarship-portal.html", "/service/post-matric-scholarship-obc-ebc.html"],
  faq: [
    { q: "बोनाफाइड सर्टिफिकेट क्या होता है?", a: "यह स्कूल/कॉलेज का लिखित प्रमाण है कि आप इस समय वहां के नियमित छात्र हैं। इसमें नाम, कक्षा/कोर्स, सत्र और उद्देश्य लिखा होता है।" },
    { q: "बोनाफाइड सर्टिफिकेट कौन देता है?", a: "स्कूल में प्रधानाचार्य, कॉलेज में प्राचार्य, रजिस्ट्रार या विभागाध्यक्ष, संस्था के नियम के अनुसार।" },
    { q: "बोनाफाइड सर्टिफिकेट कितने दिन में मिलता है?", a: "कोई एक तय समय नहीं है; ज़्यादातर संस्थान कुछ दिन में दे देते हैं। अपने ऑफिस से समय और फीस पूछ लें।" },
    { q: "स्कॉलरशिप के लिए कौन सा बोनाफाइड फॉर्मेट लगेगा?", a: "NSP और कई राज्य पोर्टल अपना फॉर्मेट देते हैं, जिसे डाउनलोड करके संस्था से हस्ताक्षर-मुहर कराकर अपलोड करना होता है।" },
    { q: "बोनाफाइड और कैरेक्टर सर्टिफिकेट में क्या अंतर है?", a: "बोनाफाइड बताता है कि आप अभी छात्र हैं; कैरेक्टर (चरित्र) सर्टिफिकेट आपके आचरण के बारे में होता है और अक्सर संस्था छोड़ते समय मिलता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
