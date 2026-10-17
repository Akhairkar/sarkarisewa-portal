import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - A migration certificate is issued by the board or university the student
//   passed from, so that another board/university can admit the student;
//   fee, form and processing time are set by each board/university (no
//   national fee), so the page gives none.
// - CBSE: from the 2025 exam cycle CBSE stopped issuing physical migration
//   certificates for Classes 10 and 12; a digitally signed certificate is
//   uploaded to DigiLocker after results and is to be accepted by
//   institutions; a hard copy, if still needed, is requested through CBSE's
//   Duplicate Academic Document System (DADS) (Careers360 report Oct 2025
//   quoting the CBSE notice). Fee for a DADS hard copy could not be confirmed
//   and is left out.
// - Universities usually route the request through the college principal,
//   with marksheet copies and a fee; many now take it online on their portal.
export const migrationCertificateApplication: Letter = {
  slug: "migration-certificate-application",
  category: "school",
  emoji: "🎓",
  title: "Migration Certificate Application in Hindi 2026: माइग्रेशन सर्टिफिकेट",
  description: "बोर्ड या यूनिवर्सिटी से माइग्रेशन सर्टिफिकेट के लिए आवेदन पत्र (हिंदी/English)। प्रधानाचार्य/रजिस्ट्रार को लिखें; CBSE का माइग्रेशन DigiLocker पर।",
  h1: "माइग्रेशन सर्टिफिकेट के लिए आवेदन पत्र 2026 (बोर्ड/यूनिवर्सिटी)",
  short: { hi: "माइग्रेशन सर्टिफिकेट आवेदन", en: "Migration certificate application" },
  lead: "दूसरे बोर्ड या दूसरी यूनिवर्सिटी में दाखिला लेने पर <strong>माइग्रेशन सर्टिफिकेट</strong> मांगा जाता है। यह वही बोर्ड/यूनिवर्सिटी जारी करता है जहां से आपने परीक्षा पास की है; आवेदन आम तौर पर <strong>स्कूल/कॉलेज के प्रधानाचार्य</strong> के ज़रिए या सीधे <strong>रजिस्ट्रार/क्षेत्रीय कार्यालय</strong> को जाता है। <strong>CBSE</strong> 2025 से कक्षा 10 और 12 का माइग्रेशन सर्टिफिकेट डिजिटल रूप में <strong>DigiLocker</strong> पर देता है। फीस हर बोर्ड/यूनिवर्सिटी की अलग है।",
  facts: [
    ["कौन जारी करता है", "जिस बोर्ड/यूनिवर्सिटी से परीक्षा पास की"],
    ["किसे दें", "प्रधानाचार्य (अग्रसारण के लिए) / रजिस्ट्रार / क्षेत्रीय अधिकारी"],
    ["CBSE", "डिजिटल माइग्रेशन DigiLocker पर; हार्ड कॉपी DADS से"],
    ["फीस", "बोर्ड/यूनिवर्सिटी के नियम से; कार्यालय/वेबसाइट पर देखें"],
  ],
  to: "स्कूल/कॉलेज से अग्रसारित करवाना हो तो <strong>प्रधानाचार्य/प्राचार्य</strong> को; सीधे भेजना हो तो <strong>रजिस्ट्रार (यूनिवर्सिटी)</strong> या बोर्ड के <strong>सचिव/क्षेत्रीय अधिकारी</strong> को। पत्र में दोनों के लिए जगह है, ऊपर 'किसे' वाले खाने में सही पद लिखें।",
  when: [
    "स्टेट बोर्ड से CBSE/ICSE या दूसरे राज्य के बोर्ड में जाना है (या उल्टा)",
    "12वीं के बाद दूसरी यूनिवर्सिटी के कॉलेज में दाखिला लिया है",
    "ग्रेजुएशन के बाद दूसरी यूनिवर्सिटी में PG के लिए माइग्रेशन चाहिए",
    "पहले मिला माइग्रेशन सर्टिफिकेट खो गया है (डुप्लीकेट)",
  ],
  fields: [
    { key: "to", label: { hi: "किसे (पद, संस्थान और पता)", en: "Addressed to (designation, institution, address)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: रजिस्ट्रार, छत्रपति शाहूजी महाराज विश्वविद्यालय, कानपुर", en: "e.g. The Registrar, CSJM University, Kanpur" } },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम (मार्कशीट जैसा)", en: "Student's name (as on marksheet)" }, required: true },
    { key: "father", label: { hi: "पिता/माता का नाम", en: "Father's / mother's name" } },
    { key: "exam", label: { hi: "पास की गई परीक्षा", en: "Examination passed" }, required: true, placeholder: { hi: "जैसे: कक्षा 12 (2026) / B.A. (2026)", en: "e.g. Class 12 (2026) / B.A. (2026)" } },
    { key: "roll", label: { hi: "रोल नंबर", en: "Roll number" }, required: true },
    { key: "enrol", label: { hi: "नामांकन / रजिस्ट्रेशन संख्या", en: "Enrolment / registration number" } },
    { key: "college", label: { hi: "जिस स्कूल/कॉलेज से पढ़ाई की", en: "School/college studied at" } },
    { key: "newinst", label: { hi: "नया बोर्ड/यूनिवर्सिटी/संस्थान (जहां दाखिला लिया)", en: "New board/university/institution (admitted to)" }, placeholder: { hi: "जैसे: दिल्ली विश्वविद्यालय", en: "e.g. University of Delhi" } },
    { key: "kind", label: { hi: "आवेदन का प्रकार", en: "Type of request" }, type: "select", options: [
      { hi: "माइग्रेशन सर्टिफिकेट (पहली बार)", en: "migration certificate (first issue)" },
      { hi: "डुप्लीकेट माइग्रेशन सर्टिफिकेट (मूल खो जाने पर)", en: "duplicate migration certificate (original lost)" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "address", label: { hi: "पत्र भेजने का पता", en: "Postal address" }, type: "textarea" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}}

विषय: {{kind}} जारी करने हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री {{father}}, ने {{college}} से {{exam}} की परीक्षा उत्तीर्ण की है। मेरा रोल नंबर {{roll}} और नामांकन/रजिस्ट्रेशन संख्या {{enrol}} है।

मैंने आगे की पढ़ाई के लिए {{newinst}} में प्रवेश लिया है, जहां प्रवेश की पुष्टि के लिए माइग्रेशन सर्टिफिकेट जमा करना अनिवार्य है।

अतः आपसे निवेदन है कि मुझे {{kind}} जारी करने की कृपा करें। निर्धारित शुल्क और आवश्यक कागज़ इस आवेदन के साथ संलग्न हैं। प्रमाण पत्र तैयार होने पर कृपया सूचित करें या नीचे दिए पते पर भेजें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}
पता: {{address}}

संलग्न:
1. अंकतालिका और प्रमाण पत्र की स्व-प्रमाणित कॉपी
2. नामांकन/रजिस्ट्रेशन कार्ड की कॉपी
3. शुल्क जमा की रसीद / ड्राफ्ट
4. नए संस्थान का प्रवेश पत्र/फीस रसीद (यदि मांगी जाए)
5. डुप्लीकेट के लिए: खोने की सूचना/शपथ पत्र

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{to}}

Subject: Application for issue of {{kind}}.

Respected Sir/Madam,

I, {{name}}, son/daughter of {{father}}, have passed the {{exam}} examination from {{college}}. My roll number is {{roll}} and my enrolment/registration number is {{enrol}}.

I have taken admission in {{newinst}} for further studies, where submission of a migration certificate is compulsory to confirm my admission.

I therefore request you to kindly issue me a {{kind}}. The prescribed fee and required documents are enclosed with this application. Please inform me when the certificate is ready or send it to the address given below.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}
Address: {{address}}

Enclosures:
1. Self-attested copies of marksheet and pass certificate
2. Copy of enrolment/registration card
3. Fee receipt / demand draft
4. Admission letter/fee receipt of the new institution (if required)
5. For duplicate: lost report/affidavit

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "अंतिम परीक्षा की अंकतालिका और प्रमाण पत्र की स्व-प्रमाणित कॉपी",
    "नामांकन/रजिस्ट्रेशन कार्ड या संख्या का सबूत",
    "बोर्ड/यूनिवर्सिटी की तय फीस की रसीद या ड्राफ्ट",
    "डुप्लीकेट के लिए: गुम होने की सूचना और शपथ पत्र (अगर नियम में मांगा हो)",
  ],
  submit: [
    "पहले बोर्ड/यूनिवर्सिटी की वेबसाइट देखें: कई जगह माइग्रेशन का आवेदन अब ऑनलाइन होता है; तब यह पत्र साथ में अग्रसारण के लिए काम आता है।",
    "<strong>CBSE के छात्र</strong>: DigiLocker में अपने खाते से डिजिटल माइग्रेशन सर्टिफिकेट डाउनलोड करें; हार्ड कॉपी चाहिए तो CBSE के DADS पोर्टल से आवेदन करें।",
    "ऑफलाइन हो तो पत्र, फीस और कागज़ प्रधानाचार्य/कॉलेज कार्यालय से अग्रसारित करवाकर यूनिवर्सिटी/बोर्ड के काउंटर पर जमा करें, या रजिस्टर्ड डाक से भेजें।",
    "रसीद/आवेदन संख्या संभालें; समय पर न मिले तो उसी के साथ परीक्षा नियंत्रक/रजिस्ट्रार कार्यालय में संपर्क करें। यूनिवर्सिटी में छात्र शिकायत समिति (SGRC) में भी शिकायत कर सकते हैं।",
  ],
  tips: [
    "नाम और रोल नंबर बिल्कुल मार्कशीट जैसा लिखें।",
    "एक ही बोर्ड/यूनिवर्सिटी के अंदर कॉलेज बदलने पर आम तौर पर माइग्रेशन नहीं, ट्रांसफर सर्टिफिकेट (TC) चाहिए।",
    "माइग्रेशन सर्टिफिकेट मूल प्रति नए संस्थान में जमा हो जाती है; पहले उसकी फोटो कॉपी रख लें।",
    "नए संस्थान ने माइग्रेशन जमा करने की आखिरी तारीख दी हो तो उसे पत्र में लिखें।",
  ],
  official: [
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "CBSE का डिजिटल माइग्रेशन सर्टिफिकेट" },
    { href: "https://www.cbse.gov.in/", title: "CBSE", note: "डुप्लीकेट दस्तावेज़ (DADS) की जानकारी" },
  ],
  related: ["/students/", "/digilocker/cbse-marksheet.html", "/digilocker/degree-certificate.html"],
  faq: [
    { q: "माइग्रेशन सर्टिफिकेट के लिए आवेदन किसे लिखें?", a: "जिस बोर्ड/यूनिवर्सिटी से परीक्षा पास की, उसके रजिस्ट्रार/सचिव/क्षेत्रीय अधिकारी को। आम तौर पर आवेदन अपने स्कूल/कॉलेज के प्रधानाचार्य से अग्रसारित करवाकर भेजा जाता है।" },
    { q: "CBSE का माइग्रेशन सर्टिफिकेट कहां से मिलेगा?", a: "CBSE ने 2025 से कक्षा 10 और 12 के लिए छपा माइग्रेशन सर्टिफिकेट देना बंद किया है; डिजिटल हस्ताक्षर वाला सर्टिफिकेट DigiLocker पर मिलता है। हार्ड कॉपी चाहिए तो CBSE के DADS पोर्टल से आवेदन करें।" },
    { q: "माइग्रेशन सर्टिफिकेट की फीस कितनी है?", a: "हर बोर्ड और यूनिवर्सिटी की फीस अलग है और बदलती रहती है। उनकी वेबसाइट या कार्यालय से पुष्टि करें।" },
    { q: "माइग्रेशन और TC में क्या अंतर है?", a: "TC स्कूल/कॉलेज छोड़ने का प्रमाण है। माइग्रेशन सर्टिफिकेट बोर्ड/यूनिवर्सिटी बदलने पर चाहिए, यह बताता है कि पिछली संस्था को आपके जाने पर आपत्ति नहीं है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
