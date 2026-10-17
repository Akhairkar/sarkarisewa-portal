import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same facts as /service/national-scholarship-portal):
// - scholarships.gov.in (NSP, AY 2026-27 portal open from 1 June 2026): OTR
//   (One Time Registration) number from Aadhaar required since AY 2024-25;
//   every application is verified first by the institute (Institute Nodal
//   Officer, "L1") and then at district/state/ministry level ("L2") before
//   payment by DBT through PFMS. Example: PM-USP CSSS renewal closing
//   31-10-2026, institute verification 15-11-2026, L2 30-11-2026.
// - scholarships.gov.in/nsphelpdesk: helpdesk@nsp.gov.in, 0120-6619540
//   (8 AM-8 PM), PFMS toll-free 1800 118 111.
// - Last dates differ scheme-wise and state portals have their own process,
//   so the page does not list other dates or amounts.
export const scholarshipApplicationLetter: Letter = {
  slug: "scholarship-application-letter",
  category: "school",
  emoji: "📚",
  title: "Scholarship Application Letter in Hindi 2026: छात्रवृत्ति आवेदन पत्र",
  description: "प्रधानाचार्य/प्राचार्य को छात्रवृत्ति के लिए आवेदन पत्र (हिंदी/English): NSP या राज्य पोर्टल पर आवेदन का सत्यापन, बोनाफाइड और ज़रूरी कागज़ के लिए।",
  h1: "छात्रवृत्ति के लिए प्रधानाचार्य को आवेदन पत्र 2026 (NSP सत्यापन)",
  short: { hi: "छात्रवृत्ति आवेदन पत्र", en: "Scholarship application" },
  lead: "सरकारी स्कॉलरशिप का आवेदन आज ज़्यादातर <strong>NSP (scholarships.gov.in)</strong> या राज्य के स्कॉलरशिप पोर्टल पर ऑनलाइन होता है, पर पैसा तभी आता है जब आपका <strong>स्कूल/कॉलेज आवेदन का सत्यापन (L1)</strong> तय तारीख तक कर दे। यह पत्र प्रधानाचार्य/प्राचार्य से आवेदन जांचकर आगे भेजने, या स्कॉलरशिप के लिए बोनाफाइड व ज़रूरी प्रमाण देने का निवेदन है। NSP पर आवेदन से पहले आधार से <strong>OTR नंबर</strong> बनाना ज़रूरी है।",
  facts: [
    ["किसे दें", "प्रधानाचार्य / प्राचार्य (स्कॉलरशिप नोडल अधिकारी के ज़रिए)"],
    ["पोर्टल", '<a href="https://scholarships.gov.in/" target="_blank" rel="noopener nofollow">scholarships.gov.in</a> या राज्य पोर्टल'],
    ["समय सीमा", "हर योजना की अलग; संस्थान सत्यापन की आखिरी तारीख पोर्टल पर देखें"],
    ["NSP हेल्पडेस्क", "0120-6619540, helpdesk@nsp.gov.in"],
  ],
  to: "अपने स्कूल के <strong>प्रधानाचार्य</strong> या कॉलेज के <strong>प्राचार्य</strong> को। संस्थान में स्कॉलरशिप का काम <strong>संस्थान नोडल अधिकारी (INO)</strong> देखते हैं; पत्र उनके ज़रिए भी दे सकते हैं।",
  when: [
    "NSP/राज्य पोर्टल पर आवेदन कर दिया, अब संस्थान से सत्यापन (verification) करवाना है",
    "आवेदन के लिए संस्थान से बोनाफाइड, फीस का ब्योरा या प्रमाणित कागज़ चाहिए",
    "स्कॉलरशिप के लिए संस्थान का अग्रसारण (forwarding) पत्र चाहिए",
    "आवेदन में गलती है और संस्थान से 'defect' लगवाकर सुधारना है",
  ],
  fields: [
    { key: "institute", label: { hi: "स्कूल/कॉलेज का नाम और पता", en: "School/college name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "father", label: { hi: "पिता/माता का नाम", en: "Father's / mother's name" } },
    { key: "class", label: { hi: "कक्षा / कोर्स और वर्ष", en: "Class / course and year" }, required: true, placeholder: { hi: "जैसे: B.Sc. प्रथम वर्ष", en: "e.g. B.Sc. 1st year" } },
    { key: "roll", label: { hi: "रोल नंबर / नामांकन संख्या", en: "Roll no. / enrolment no." }, required: true },
    { key: "scheme", label: { hi: "स्कॉलरशिप योजना का नाम", en: "Scholarship scheme" }, required: true, placeholder: { hi: "जैसे: पोस्ट मैट्रिक स्कॉलरशिप (SC) / PM-USP", en: "e.g. Post Matric Scholarship (SC) / PM-USP" } },
    { key: "appid", label: { hi: "आवेदन ID / OTR नंबर", en: "Application ID / OTR number" }, placeholder: { hi: "पोर्टल पर मिली आवेदन संख्या", en: "Application number from the portal" } },
    { key: "request", label: { hi: "आप क्या चाहते हैं", en: "What you are asking for" }, type: "select", required: true, options: [
      { hi: "पोर्टल पर मेरे आवेदन का संस्थान स्तर पर सत्यापन (verification) कर आगे भेजा जाए", en: "my application be verified at institute level on the portal and forwarded" },
      { hi: "स्कॉलरशिप आवेदन के लिए मुझे बोनाफाइड प्रमाण पत्र और फीस का ब्योरा दिया जाए", en: "I be given a bonafide certificate and fee details for my scholarship application" },
      { hi: "मेरे आवेदन में हुई गलती सुधारने के लिए उसे वापस (defect/return) किया जाए", en: "my application be returned (marked defective) so that I can correct a mistake" },
      { hi: "मेरा स्कॉलरशिप आवेदन पत्र अग्रसारित (forward) कर संबंधित विभाग को भेजा जाए", en: "my scholarship application be forwarded to the concerned department" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रधानाचार्य / प्राचार्य महोदय,
{{institute}}

विषय: {{scheme}} छात्रवृत्ति आवेदन के संबंध में।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री {{father}}, आपके संस्थान में {{class}} का/की नियमित छात्र/छात्रा हूं। मेरा रोल नंबर / नामांकन संख्या {{roll}} है।

मैंने {{scheme}} छात्रवृत्ति के लिए ऑनलाइन आवेदन किया है, जिसकी आवेदन ID / OTR नंबर {{appid}} है। इस छात्रवृत्ति का भुगतान संस्थान द्वारा सत्यापन के बाद ही होता है, और सत्यापन की अंतिम तिथि निकलने पर मेरा आवेदन रद्द हो सकता है।

मेरे परिवार की आर्थिक स्थिति ठीक नहीं है और यह छात्रवृत्ति मेरी पढ़ाई जारी रखने के लिए बहुत आवश्यक है।

अतः आपसे निवेदन है कि {{request}}। आवेदन के साथ लगे सभी कागज़ सही हैं; किसी अन्य कागज़ की आवश्यकता हो तो मैं तुरंत जमा कर दूंगा/दूंगी।

आपका/आपकी आज्ञाकारी शिष्य/शिष्या,

(हस्ताक्षर)
नाम: {{name}}
कक्षा/कोर्स: {{class}}
मोबाइल: {{phone}}

संलग्न:
1. ऑनलाइन आवेदन का प्रिंट आउट
2. आय, जाति/श्रेणी और निवास प्रमाण पत्र की कॉपी (जो योजना में लागू हों)
3. पिछली कक्षा की अंकतालिका, फीस रसीद और आधार से जुड़े बैंक खाते की पासबुक की कॉपी

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Principal,
{{institute}}

Subject: Regarding my application for {{scheme}} scholarship.

Respected Sir/Madam,

I, {{name}}, son/daughter of {{father}}, am a regular student of {{class}} in your institution. My roll number / enrolment number is {{roll}}.

I have applied online for the {{scheme}} scholarship; my application ID / OTR number is {{appid}}. The scholarship is paid only after verification by the institution, and my application may be rejected if the last date for verification passes.

My family's financial condition is weak and this scholarship is essential for continuing my studies.

I therefore request that {{request}}. All documents attached to my application are genuine; if any other document is needed, I will submit it immediately.

Yours obediently,

(Signature)
Name: {{name}}
Class/Course: {{class}}
Mobile: {{phone}}

Enclosures:
1. Printout of the online application
2. Copies of income, caste/category and domicile certificates (as applicable to the scheme)
3. Copies of previous marksheet, fee receipt and passbook of the Aadhaar-linked bank account

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "ऑनलाइन आवेदन का प्रिंट (आवेदन ID के साथ)",
    "आय, जाति/श्रेणी, निवास प्रमाण पत्र की कॉपी (जिस योजना में ज़रूरी हो)",
    "पिछली कक्षा की अंकतालिका, फीस रसीद, बैंक पासबुक के पहले पन्ने की कॉपी",
    "आधार कार्ड की कॉपी (OTR और भुगतान के लिए खाते में आधार सीडिंग ज़रूरी)",
  ],
  submit: [
    "ऑनलाइन आवेदन पूरा करके उसका प्रिंट निकालें और इस पत्र के साथ नत्थी करें।",
    "संस्थान के स्कॉलरशिप नोडल अधिकारी/कार्यालय में जमा करें और रिसीविंग लें।",
    "कुछ दिन बाद पोर्टल पर स्टेटस देखें: \"Verified by Institute\" दिखना चाहिए; आवेदन लौटाया गया हो तो सुधारकर दोबारा जमा करें।",
    "संस्थान सत्यापन न करे तो ज़िला कल्याण/शिक्षा अधिकारी को लिखें; NSP हेल्पडेस्क 0120-6619540 पर भी बताएं।",
  ],
  tips: [
    "संस्थान सत्यापन की आखिरी तारीख छात्र की आखिरी तारीख के कुछ दिन बाद होती है; पत्र जल्दी दें।",
    "बैंक खाता छात्र के अपने नाम और आधार से जुड़ा (NPCI मैप्ड) हो, वरना पैसा अटक सकता है।",
    "पोर्टल पर भरी जानकारी (नाम, अंक, फीस) संस्थान के रिकॉर्ड से मिलनी चाहिए।",
    "एक ही साल में दो सरकारी स्कॉलरशिप के नियम योजना के हिसाब से अलग हैं; गलत जानकारी पर आवेदन रद्द हो सकता है।",
  ],
  official: [
    { href: "https://scholarships.gov.in/", title: "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)", note: "आवेदन, स्टेटस, OTR" },
    { href: "https://pfms.nic.in/", title: "PFMS", note: "भुगतान की स्थिति" },
  ],
  related: ["/service/national-scholarship-portal.html", "/students/", "/service/post-matric-scholarship-obc-ebc.html"],
  faq: [
    { q: "स्कॉलरशिप के लिए प्रधानाचार्य को आवेदन कैसे लिखें?", a: "पत्र में अपना नाम, कक्षा, रोल नंबर, योजना का नाम और ऑनलाइन आवेदन ID लिखें और साफ बताएं कि आपको सत्यापन, बोनाफाइड या अग्रसारण क्या चाहिए। ऊपर का फॉर्म भरकर तैयार पत्र प्रिंट कर लें।" },
    { q: "NSP पर आवेदन के बाद क्या करना होता है?", a: "आवेदन पहले आपके संस्थान (L1) से सत्यापित होता है, फिर ज़िला/राज्य/विभाग (L2) स्तर पर, उसके बाद PFMS से खाते में भुगतान आता है। संस्थान सत्यापन तय तारीख तक होना ज़रूरी है।" },
    { q: "OTR नंबर क्या है?", a: "NSP पर आवेदन से पहले आधार से बनने वाला 14 अंकों का वन टाइम रजिस्ट्रेशन नंबर, जो पूरी पढ़ाई के दौरान एक ही रहता है।" },
    { q: "संस्थान सत्यापन न करे तो क्या करें?", a: "रिसीविंग वाली कॉपी के साथ प्रधानाचार्य से मिलें, फिर ज़िला कल्याण/शिक्षा अधिकारी को लिखें और NSP हेल्पडेस्क (0120-6619540, helpdesk@nsp.gov.in) पर शिकायत करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
