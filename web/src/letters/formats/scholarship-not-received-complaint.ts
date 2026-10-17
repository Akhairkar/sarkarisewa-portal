import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same as /service/national-scholarship-portal):
// - scholarships.gov.in (NSP): OTR number required from AY 2024-25;
//   application verified first by the institute (L1) and then at the
//   district / state / ministry level (L2) before payment; "Track Your
//   Payment" links to PFMS.
// - scholarships.gov.in/nsphelpdesk: helpdesk@nsp.gov.in, 0120-6619540
//   (8 AM-8 PM except gazetted holidays); PFMS toll-free 1800 118 111,
//   helpdesk-pfms@gov.in.
// - Scholarships are paid by DBT through PFMS; Aadhaar-based payment needs
//   the bank account to be Aadhaar-seeded / NPCI-mapped (NPCI, UIDAI).
// State-portal scholarships (e.g. state post-matric portals) have their own
// helplines and officers; page says so without listing them.
export const scholarshipNotReceivedComplaint: Letter = {
  slug: "scholarship-not-received-complaint",
  category: "social",
  emoji: "🎓",
  title: "Scholarship Not Received Complaint Letter 2026: छात्रवृत्ति शिकायत",
  description: "NSP या राज्य की स्कॉलरशिप खाते में न आए तो कॉलेज/ज़िला कल्याण अधिकारी को शिकायत पत्र (हिंदी/English)। NSP हेल्पडेस्क, PFMS स्टेटस और आधार सीडिंग।",
  h1: "स्कॉलरशिप नहीं आने का शिकायत पत्र 2026: कॉलेज, NSP और विभाग को लिखें",
  short: { hi: "स्कॉलरशिप न आने की शिकायत", en: "Scholarship not received" },
  lead: "NSP (<strong>scholarships.gov.in</strong>) या राज्य पोर्टल पर आवेदन के बाद स्कॉलरशिप खाते में न आए, तो पहले पोर्टल पर देखें कि आवेदन किस स्तर पर रुका है: <strong>संस्थान का सत्यापन (L1)</strong>, <strong>ज़िला/राज्य/विभाग का सत्यापन (L2)</strong> या <strong>PFMS भुगतान</strong>। जिस स्तर पर रुका है, उसी अधिकारी को यह पत्र दें। भुगतान आधार से जुड़े बैंक खाते में DBT से आता है, इसलिए खाते में <strong>आधार सीडिंग</strong> ज़रूर जांचें। NSP हेल्पडेस्क: <strong>0120-6619540</strong>।",
  facts: [
    ["स्थिति देखें", '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a> या राज्य स्कॉलरशिप पोर्टल'],
    ["NSP हेल्पडेस्क", "0120-6619540, helpdesk@nsp.gov.in (सुबह 8 से रात 8)"],
    ["भुगतान (PFMS)", "टोल-फ्री 1800 118 111"],
    ["किसे दें", "कॉलेज/स्कूल का नोडल अधिकारी; ज़िला कल्याण/शिक्षा अधिकारी"],
  ],
  to: "अगर आवेदन संस्थान स्तर पर लंबित है तो <strong>प्रधानाचार्य / संस्थान के स्कॉलरशिप नोडल अधिकारी (INO)</strong> को। ज़िला/राज्य स्तर पर लंबित हो तो <strong>ज़िला समाज कल्याण / अल्पसंख्यक कल्याण / पिछड़ा वर्ग कल्याण / ज़िला शिक्षा अधिकारी</strong> (जो विभाग वह स्कॉलरशिप देता है) को। केंद्रीय योजना में मंत्रालय के स्कॉलरशिप विभाग को भी कॉपी भेज सकते हैं।",
  when: [
    "पोर्टल पर \"Pending at Institute\" या \"Pending at District/State\" बहुत दिन से है",
    "स्टेटस में मंज़ूर/भुगतान दिखता है, पर खाते में पैसा नहीं आया",
    "पिछले साल मिली, इस साल रिन्यूअल के बाद नहीं आई",
    "बिना कारण बताए आवेदन रद्द कर दिया गया",
  ],
  fields: [
    { key: "to", label: { hi: "किसे (पद और दफ्तर/संस्थान)", en: "Addressed to (designation and office/institute)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: प्रधानाचार्य, राजकीय महाविद्यालय, बांदा", en: "e.g. The Principal, Government College, Banda" } },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "guardian", label: { hi: "पिता/माता का नाम", en: "Father's / mother's name" } },
    { key: "course", label: { hi: "कक्षा/कोर्स, वर्ष और रोल/एनरोलमेंट नंबर", en: "Class/course, year, roll/enrolment no." }, required: true, placeholder: { hi: "जैसे: B.A. द्वितीय वर्ष, एनरोलमेंट 2025BA123", en: "e.g. B.A. 2nd year, enrolment 2025BA123" } },
    { key: "institute", label: { hi: "संस्थान का नाम", en: "Institute name" }, required: true },
    { key: "scheme", label: { hi: "स्कॉलरशिप योजना का नाम", en: "Scholarship scheme" }, required: true, placeholder: { hi: "जैसे: पोस्ट मैट्रिक स्कॉलरशिप (OBC)", en: "e.g. Post Matric Scholarship (OBC)" } },
    { key: "year", label: { hi: "शैक्षणिक वर्ष", en: "Academic year" }, required: true, placeholder: { hi: "जैसे: 2025-26", en: "e.g. 2025-26" } },
    { key: "appid", label: { hi: "आवेदन ID / OTR नंबर", en: "Application ID / OTR no." }, required: true },
    { key: "status", label: { hi: "पोर्टल पर अभी क्या स्थिति है", en: "Current status on portal" }, type: "select", required: true, options: [
      { hi: "संस्थान स्तर पर सत्यापन लंबित", en: "pending verification at institute level" },
      { hi: "ज़िला/राज्य/विभाग स्तर पर लंबित", en: "pending at district/state/department level" },
      { hi: "स्वीकृत/भुगतान दिख रहा है पर राशि खाते में नहीं आई", en: "shown as sanctioned/paid but amount not credited" },
      { hi: "बिना स्पष्ट कारण के अस्वीकृत", en: "rejected without a clear reason" },
    ] },
    { key: "bank", label: { hi: "बैंक का नाम और खाते के आखिरी 4 अंक", en: "Bank name and last 4 digits of account" }, required: true, placeholder: { hi: "जैसे: PNB, खाता XXXX5678", en: "e.g. PNB, a/c XXXX5678" }, hint: { hi: "पूरा खाता नंबर, PIN या OTP न लिखें", en: "Do not write full account no., PIN or OTP" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}}

विषय: शैक्षणिक वर्ष {{year}} की {{scheme}} की राशि प्राप्त न होने के संबंध में

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पुत्री {{guardian}}, {{institute}} में {{course}} का/की छात्र/छात्रा हूं। मैंने शैक्षणिक वर्ष {{year}} के लिए {{scheme}} हेतु समय पर ऑनलाइन आवेदन किया था, जिसकी आवेदन ID/OTR संख्या {{appid}} है।

पोर्टल पर मेरे आवेदन की वर्तमान स्थिति: {{status}}। मेरा बैंक खाता: {{bank}}। अब तक छात्रवृत्ति की राशि मेरे खाते में नहीं आई है।

छात्रवृत्ति न मिलने से मेरी फीस और पढ़ाई का खर्च चलाने में कठिनाई हो रही है।

अतः आपसे निवेदन है कि:
1. मेरे आवेदन का सत्यापन/अग्रसारण जल्द से जल्द किया जाए;
2. यदि आवेदन में कोई कमी है तो मुझे लिखित में बताया जाए ताकि मैं उसे सुधार सकूं;
3. राशि रुकी हो तो उसका कारण बताकर भुगतान कराया जाए।

प्रार्थी,

(हस्ताक्षर)
नाम: {{name}}
कोर्स: {{course}}
आवेदन ID: {{appid}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. आवेदन फॉर्म/पावती का प्रिंट
2. पोर्टल स्टेटस का स्क्रीनशॉट
3. बैंक पासबुक के पहले पन्ने की कॉपी
4. फीस रसीद और प्रवेश का प्रमाण`,
    en: `To,
{{to}}

Subject: Non-receipt of {{scheme}} for academic year {{year}}

Sir/Madam,

I, {{name}}, son/daughter of {{guardian}}, am a student of {{course}} at {{institute}}. I applied online on time for {{scheme}} for the academic year {{year}}, application ID/OTR no. {{appid}}.

Current status of my application on the portal: {{status}}. My bank account: {{bank}}. The scholarship amount has not been credited to my account so far.

Non-receipt of the scholarship is making it difficult for me to pay my fees and meet my study expenses.

I therefore request you to:
1. Verify/forward my application at the earliest;
2. Inform me in writing of any deficiency in my application so that I can correct it;
3. If the payment is held up, inform me of the reason and get it released.

Yours faithfully,

(Signature)
Name: {{name}}
Course: {{course}}
Application ID: {{appid}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Printout of application / acknowledgement
2. Screenshot of portal status
3. Copy of first page of bank passbook
4. Fee receipt and proof of admission`,
  },
  attach: [
    "आवेदन फॉर्म/पावती का प्रिंट",
    "पोर्टल पर स्थिति (status) का स्क्रीनशॉट",
    "बैंक पासबुक के पहले पन्ने की कॉपी",
    "फीस रसीद, प्रवेश/बोनाफाइड प्रमाण पत्र",
  ],
  submit: [
    'पोर्टल पर स्थिति देखें: NSP में <a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a> पर लॉगिन करके, और भुगतान के लिए "Track Your Payment" (PFMS) से।',
    "\"Pending at Institute\" हो तो यह पत्र प्रधानाचार्य/नोडल अधिकारी को दें; ज़िला/राज्य स्तर पर लंबित हो तो उस विभाग के ज़िला अधिकारी को।",
    "भुगतान फेल दिखे तो बैंक जाकर खाते में आधार सीडिंग (DBT के लिए NPCI मैपिंग) और KYC कराएं।",
    "NSP हेल्पडेस्क 0120-6619540 या helpdesk@nsp.gov.in पर आवेदन ID के साथ शिकायत करें; भुगतान के लिए PFMS 1800 118 111।",
    "हल न हो तो CPGRAMS (केंद्रीय योजना) या राज्य के शिकायत पोर्टल पर शिकायत करें, या RTI से स्थिति पूछें।",
  ],
  tips: [
    "हर साल रिन्यूअल की आखिरी तारीख न चूकें; देर से रिन्यूअल पर स्कॉलरशिप रुक सकती है।",
    "आवेदन में नाम, जन्मतिथि और बैंक खाता आधार से मेल खाना चाहिए; फर्क होने पर भुगतान फेल होता है।",
    "बैंक खाता छात्र के अपने नाम पर और चालू होना चाहिए।",
    "पत्र में पूरा खाता नंबर, PIN या OTP न लिखें।",
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "आवेदन और स्थिति" },
    { href: "https://scholarships.gov.in/nsphelpdesk", title: "NSP हेल्पडेस्क", note: "0120-6619540" },
  ],
  related: ["/service/national-scholarship-portal.html", "/service/post-matric-scholarship-obc-ebc.html"],
  faq: [
    { q: "स्कॉलरशिप नहीं आई तो कहां शिकायत करें?", a: "पहले पोर्टल पर देखें कि आवेदन किस स्तर पर रुका है। संस्थान स्तर पर रुका हो तो प्रधानाचार्य/नोडल अधिकारी, ज़िला/राज्य स्तर पर हो तो उस विभाग के ज़िला अधिकारी को लिखें। NSP हेल्पडेस्क 0120-6619540 पर भी।" },
    { q: "NSP पर भुगतान की स्थिति कैसे देखें?", a: "scholarships.gov.in पर \"Track Your Payment\" से, जो PFMS पर भुगतान की स्थिति दिखाता है।" },
    { q: "भुगतान \"Failed\" दिखे तो क्या करें?", a: "अक्सर खाते में आधार सीडिंग न होने, खाता बंद होने या नाम में फर्क के कारण होता है। बैंक में आधार सीडिंग/KYC कराएं और विभाग को सूचना दें।" },
    { q: "स्कॉलरशिप आने में कितना समय लगता है?", a: "सत्यापन और फंड जारी होने पर निर्भर है, और योजना/राज्य के हिसाब से अलग होता है। तय समय नहीं है, इसलिए स्थिति नियमित देखते रहें।" },
    { q: "राज्य की स्कॉलरशिप की शिकायत कहां करें?", a: "राज्य स्कॉलरशिप पोर्टल पर दी गई हेल्पलाइन और ज़िले के संबंधित कल्याण अधिकारी को।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
