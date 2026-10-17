import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - There is no national law or fixed fee for a school/college identity card;
//   each school, board-affiliated school, college or university issues it
//   under its own rules (fee, photo size, police/FIR copy for a lost card).
//   The page therefore gives no fee and tells the reader to ask the office.
// - Lost-card practice: many institutions ask for a written application and
//   sometimes a lost report / self-declaration; on this site the police
//   lost-documents letter and the lost-document affidavit cover that step.
// - APAAR ID (education ministry's "One Nation One Student ID") is a separate
//   digital academic ID, not a replacement for the school/college ID card
//   (see /digilocker/apaar-id on this site).
export const idCardApplicationToPrincipal: Letter = {
  slug: "id-card-application-to-principal",
  category: "school",
  emoji: "🪪",
  title: "ID Card Application to Principal in Hindi 2026: नया/डुप्लीकेट ID कार्ड",
  description: "स्कूल या कॉलेज का ID कार्ड खो जाए, टूट जाए या नया बनवाना हो तो प्रधानाचार्य को आवेदन पत्र (हिंदी/English)। भरें, प्रिंट करें, साथ में क्या लगाएं।",
  h1: "स्कूल/कॉलेज ID कार्ड के लिए प्रधानाचार्य को आवेदन पत्र 2026",
  short: { hi: "ID कार्ड के लिए आवेदन", en: "ID card application" },
  lead: "स्कूल या कॉलेज का पहचान पत्र (ID कार्ड) <strong>संस्थान खुद जारी करता है</strong>, इसलिए आवेदन <strong>प्रधानाचार्य / प्राचार्य</strong> के नाम लिखा जाता है। नया कार्ड न मिला हो, कार्ड खो गया हो, टूट गया हो या उसमें नाम/फोटो गलत हो, तीनों हालात में यही पत्र काम आता है। डुप्लीकेट कार्ड की फीस और ज़रूरी कागज़ हर संस्थान अपने नियम से तय करता है, इसलिए दफ्तर से पूछ लें।",
  facts: [
    ["किसे दें", "प्रधानाचार्य / प्राचार्य (कक्षा अध्यापक या कार्यालय के ज़रिए)"],
    ["फीस", "संस्थान के नियम से; कोई राष्ट्रीय फीस तय नहीं"],
    ["साथ में", "पासपोर्ट फोटो, फीस रसीद/एडमिट कार्ड की कॉपी"],
    ["खो जाने पर", "कई संस्थान खोने की सूचना/स्व-घोषणा मांगते हैं"],
  ],
  to: "अपने स्कूल के <strong>प्रधानाचार्य</strong> या कॉलेज के <strong>प्राचार्य</strong> को। यूनिवर्सिटी में आम तौर पर विभागाध्यक्ष या डीन (छात्र कल्याण) के ज़रिए आवेदन जाता है।",
  when: [
    "दाखिले के बाद अब तक ID कार्ड नहीं मिला",
    "ID कार्ड खो गया या चोरी हो गया (डुप्लीकेट चाहिए)",
    "कार्ड टूट गया, फोटो मिट गई या नाम/कक्षा/पता गलत छपा है",
    "परीक्षा, लाइब्रेरी, बस पास या छात्रावास के लिए ID कार्ड ज़रूरी है",
  ],
  fields: [
    { key: "institute", label: { hi: "स्कूल/कॉलेज का नाम और पता", en: "School/college name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: राजकीय इंटर कॉलेज, सीतापुर", en: "e.g. Government Inter College, Sitapur" } },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "father", label: { hi: "पिता/माता का नाम", en: "Father's / mother's name" } },
    { key: "class", label: { hi: "कक्षा / कोर्स और सेक्शन", en: "Class / course and section" }, required: true, placeholder: { hi: "जैसे: कक्षा 10-B / B.A. द्वितीय वर्ष", en: "e.g. Class 10-B / B.A. 2nd year" } },
    { key: "roll", label: { hi: "रोल नंबर / नामांकन (एडमिशन) संख्या", en: "Roll no. / admission (enrolment) no." }, required: true },
    { key: "reason", label: { hi: "ID कार्ड क्यों चाहिए", en: "Why you need the ID card" }, type: "select", required: true, options: [
      { hi: "दाखिले के बाद अब तक मुझे ID कार्ड नहीं मिला है", en: "I have not received my ID card since admission" },
      { hi: "मेरा ID कार्ड खो गया है, इसलिए डुप्लीकेट ID कार्ड चाहिए", en: "My ID card has been lost, so I need a duplicate ID card" },
      { hi: "मेरा ID कार्ड टूट/खराब हो गया है, इसलिए नया ID कार्ड चाहिए", en: "My ID card is broken/damaged, so I need a new ID card" },
      { hi: "मेरे ID कार्ड में जानकारी गलत छपी है, इसलिए सुधरा हुआ ID कार्ड चाहिए", en: "My ID card has wrong details, so I need a corrected ID card" },
    ] },
    { key: "details", label: { hi: "थोड़ा विवरण (कब, कैसे, क्या गलत)", en: "Short details (when, how, what is wrong)" }, type: "textarea", placeholder: { hi: "जैसे: 10/10/2026 को बस में बैग के साथ खो गया / पिता का नाम गलत छपा है", en: "e.g. Lost with my bag on the bus on 10/10/2026 / father's name printed wrongly" } },
    { key: "phone", label: { hi: "मोबाइल नंबर (अभिभावक का)", en: "Mobile number (parent's)" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रधानाचार्य / प्राचार्य महोदय,
{{institute}}

विषय: पहचान पत्र (ID कार्ड) जारी करने हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री {{father}}, आपके विद्यालय/महाविद्यालय में {{class}} का/की नियमित छात्र/छात्रा हूं। मेरा रोल नंबर / नामांकन संख्या {{roll}} है।

{{reason}}। विवरण: {{details}}

ID कार्ड न होने से मुझे विद्यालय/महाविद्यालय में प्रवेश, पुस्तकालय, परीक्षा और अन्य कामों में कठिनाई हो रही है।

अतः आपसे निवेदन है कि मुझे जल्द से जल्द ID कार्ड जारी करने की कृपा करें। इसके लिए नियम के अनुसार जो भी शुल्क या कागज़ आवश्यक हों, मैं जमा करने को तैयार हूं। यदि खोया हुआ कार्ड बाद में मिल जाता है तो मैं उसे कार्यालय में जमा कर दूंगा/दूंगी।

आपका/आपकी आज्ञाकारी शिष्य/शिष्या,

(हस्ताक्षर)
नाम: {{name}}
कक्षा/कोर्स: {{class}}
रोल नंबर: {{roll}}
मोबाइल: {{phone}}

संलग्न:
1. पासपोर्ट साइज़ फोटो (2)
2. फीस रसीद / एडमिट कार्ड / पुराने ID कार्ड की कॉपी (जो उपलब्ध हो)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Principal,
{{institute}}

Subject: Application for issue of identity (ID) card.

Respected Sir/Madam,

I, {{name}}, son/daughter of {{father}}, am a regular student of {{class}} in your school/college. My roll number / admission number is {{roll}}.

{{reason}}. Details: {{details}}

Without an ID card I am facing difficulty in entering the campus and in using the library, examinations and other facilities.

I therefore request you to kindly issue me an ID card at the earliest. I am ready to deposit any fee or documents required under the rules. If the lost card is found later, I will return it to the office.

Yours obediently,

(Signature)
Name: {{name}}
Class/Course: {{class}}
Roll number: {{roll}}
Mobile: {{phone}}

Enclosures:
1. Passport size photographs (2)
2. Copy of fee receipt / admit card / old ID card (whichever is available)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "2 पासपोर्ट साइज़ फोटो (स्कूल ड्रेस में, अगर स्कूल कहे)",
    "फीस रसीद, एडमिट कार्ड या पुराने ID कार्ड की फोटो कॉपी",
    "कार्ड खोया हो और संस्थान मांगे तो: थाने/ऑनलाइन दी गई गुम होने की सूचना या स्व-घोषणा",
    "डुप्लीकेट कार्ड की फीस (संस्थान के नियम से)",
  ],
  submit: [
    "पत्र प्रिंट करें, छात्र और (स्कूल में) अभिभावक दोनों हस्ताक्षर करें।",
    "कक्षा अध्यापक से आगे बढ़वाकर (फॉरवर्ड) प्रधानाचार्य कार्यालय में जमा करें; कॉलेज में कार्यालय/परीक्षा शाखा में दें।",
    "एक कॉपी पर कार्यालय की रिसीविंग (मुहर/तारीख) ज़रूर लें।",
    "समय पर कार्ड न मिले तो रिसीविंग के साथ प्रधानाचार्य से मिलें; कॉलेज/यूनिवर्सिटी में छात्र शिकायत समिति (SGRC) में भी लिख सकते हैं।",
  ],
  tips: [
    "रोल नंबर और नामांकन संख्या सही लिखें, इन्हीं से रिकॉर्ड मिलाया जाता है।",
    "जानकारी गलत छपी हो तो सही जानकारी का सबूत (जैसे जन्म प्रमाण पत्र/मार्कशीट की कॉपी) साथ दें।",
    "परीक्षा से ठीक पहले आवेदन न करें; कार्ड छपने में समय लगता है।",
    "ID कार्ड पर आधार नंबर पूरा छपवाने की ज़रूरत नहीं है।",
  ],
  related: ["/students/", "/digilocker/apaar-id.html", "/affidavit/lost-document.html"],
  faq: [
    { q: "स्कूल ID कार्ड खो जाए तो क्या करें?", a: "प्रधानाचार्य को डुप्लीकेट ID कार्ड के लिए आवेदन दें, साथ में फोटो और फीस रसीद/एडमिट कार्ड की कॉपी लगाएं। कुछ स्कूल खोने की सूचना या स्व-घोषणा भी मांगते हैं।" },
    { q: "डुप्लीकेट ID कार्ड की फीस कितनी है?", a: "इसकी कोई सरकारी तय फीस नहीं है। हर स्कूल/कॉलेज अपनी फीस रखता है, कार्यालय से पूछ लें।" },
    { q: "ID कार्ड के लिए आवेदन किसे लिखें?", a: "स्कूल में प्रधानाचार्य को और कॉलेज में प्राचार्य को। यूनिवर्सिटी विभाग में विभागाध्यक्ष के ज़रिए भेजें।" },
    { q: "क्या ID कार्ड में गलती सुधर सकती है?", a: "हां। पत्र में 'जानकारी गलत छपी है' चुनें और सही जानकारी का सबूत लगाएं। पुराना कार्ड वापस जमा करना पड़ सकता है।" },
    { q: "क्या APAAR ID से स्कूल ID कार्ड की ज़रूरत खत्म हो जाती है?", a: "नहीं। APAAR ID एक डिजिटल शैक्षणिक पहचान है; स्कूल/कॉलेज परिसर के लिए उनका ID कार्ड अलग से चाहिए होता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
