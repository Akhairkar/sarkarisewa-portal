import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - UGC fee refund policy for 2024-25 (UGC letter of 12 June 2024, reported by
//   Careers360 / Deccan Herald; implemented by universities): full refund for
//   cancellation/migration up to 30 Sept 2024; up to 31 Oct 2024 deduction of
//   not more than Rs 1,000 as processing fee; after that the UGC 2018
//   schedule (100% if notice 15+ days before the last date of admission, 90%
//   if less than 15 days before, 80% within 15 days after, 50% 15-30 days
//   after, nil after 30 days). Same structure in 2023 and adopted by many
//   institutions for 2025-26 and (provisionally) 2026-27; no UGC 2026-27
//   circular was found, so the page says "check the current UGC/institution
//   notice" and does not quote 2026 dates as UGC's.
// - UGC (Redress of Grievances of Students) Regulations 2023: Students'
//   Grievance Redressal Committee (SGRC) in every HEI and Ombudsperson at
//   university level; fees and admissions are covered; appeal to the
//   Ombudsperson within 15 days of the SGRC decision. UGC e-Samadhaan portal
//   for complaints.
// - UGC rules also bar institutions from retaining students' original
//   certificates (2018 notification on fee refund and non-retention of
//   certificates).
// Admissions to IITs/NITs/medical seats through JoSAA/MCC and state
// counselling follow their own refund rules; page says so.
export const collegeFeeRefundApplication: Letter = {
  slug: "college-fee-refund-application",
  category: "school",
  emoji: "💸",
  title: "College Fee Refund Application in Hindi 2026: एडमिशन रद्द, फीस वापसी",
  description: "एडमिशन रद्द करने पर कॉलेज/यूनिवर्सिटी से फीस और मूल दस्तावेज़ वापसी का आवेदन पत्र (हिंदी/English)। UGC फीस वापसी नियम, SGRC और e-Samadhaan शिकायत।",
  h1: "एडमिशन रद्द करने पर फीस वापसी आवेदन पत्र 2026 (UGC नियम)",
  short: { hi: "फीस वापसी आवेदन (एडमिशन रद्द)", en: "Fee refund on admission cancellation" },
  lead: "कॉलेज/यूनिवर्सिटी में एडमिशन लेने के बाद सीट छोड़नी हो, तो <strong>प्राचार्य/रजिस्ट्रार</strong> को लिखित में एडमिशन रद्द करने और फीस लौटाने का आवेदन दें। UGC की फीस वापसी नीति (2024-25 वाली) के अनुसार तय तारीख (उस साल <strong>30 सितंबर</strong>) तक सीट छोड़ने पर <strong>पूरी फीस</strong> और उसके बाद एक तय तारीख तक अधिकतम <strong>₹1,000</strong> प्रोसेसिंग फीस काटकर बाकी लौटानी थी। मौजूदा सत्र की तारीखें UGC और अपने संस्थान के नोटिस में देखें। <strong>मूल दस्तावेज़</strong> रोकना UGC नियमों के खिलाफ है।",
  facts: [
    ["किसे दें", "प्राचार्य / रजिस्ट्रार / प्रवेश प्रभारी"],
    ["UGC नियम (2024-25)", "30 सितंबर तक पूरी फीस; फिर 31 अक्टूबर तक ₹1,000 तक कटौती"],
    ["बाद में", "2018 की UGC तालिका: 100% से 0% तक, आखिरी प्रवेश तिथि के हिसाब से"],
    ["शिकायत", "संस्थान की SGRC → ओम्बड्सपर्सन → UGC e-Samadhaan"],
  ],
  to: "जिस कॉलेज में एडमिशन लिया, उसके <strong>प्राचार्य / निदेशक</strong> को; यूनिवर्सिटी के विभाग में हो तो <strong>रजिस्ट्रार</strong> को। फीस कटौती पर विवाद हो तो वही आवेदन संस्थान की <strong>छात्र शिकायत निवारण समिति (SGRC)</strong> को जाता है।",
  when: [
    "दूसरे कॉलेज/कोर्स में दाखिला मिलने पर पहला एडमिशन रद्द करना है",
    "पारिवारिक/आर्थिक कारण से पढ़ाई छोड़नी है और फीस वापस चाहिए",
    "कॉलेज मूल मार्कशीट/TC लौटाने से मना कर रहा है",
    "सीट छोड़ने के बाद भी फीस वापस नहीं आई",
  ],
  fields: [
    { key: "institute", label: { hi: "कॉलेज/यूनिवर्सिटी का नाम और पता", en: "College/university name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "father", label: { hi: "पिता/माता का नाम", en: "Father's / mother's name" } },
    { key: "course", label: { hi: "कोर्स और वर्ष", en: "Course and year" }, required: true, placeholder: { hi: "जैसे: B.Tech (CSE) प्रथम वर्ष, सत्र 2026-27", en: "e.g. B.Tech (CSE) 1st year, session 2026-27" } },
    { key: "admno", label: { hi: "एडमिशन/एनरोलमेंट नंबर", en: "Admission/enrolment number" }, required: true },
    { key: "admdate", label: { hi: "एडमिशन की तारीख", en: "Date of admission" } },
    { key: "amount", label: { hi: "जमा की गई फीस (₹) और रसीद नंबर", en: "Fee paid (Rs) and receipt number" }, required: true, placeholder: { hi: "जैसे: ₹48,500, रसीद नं. 2231", en: "e.g. Rs 48,500, receipt no. 2231" } },
    { key: "reason", label: { hi: "सीट छोड़ने का कारण", en: "Reason for withdrawal" }, type: "textarea", required: true, placeholder: { hi: "जैसे: मुझे दूसरे संस्थान में प्रवेश मिल गया है", en: "e.g. I have got admission in another institution" } },
    { key: "bank", label: { hi: "बैंक खाता (धारक का नाम, बैंक, IFSC, खाते के आखिरी 4 अंक)", en: "Bank account (holder, bank, IFSC, last 4 digits)" }, type: "textarea", hint: { hi: "पूरा खाता नंबर कैंसिल चेक पर दें; पत्र में आखिरी 4 अंक काफी हैं", en: "Give full number on the cancelled cheque; last 4 digits are enough here" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्राचार्य / रजिस्ट्रार महोदय,
{{institute}}

विषय: प्रवेश रद्द करने तथा जमा फीस और मूल दस्तावेज़ वापस करने हेतु आवेदन।

महोदय/महोदया,

मैं, {{name}}, पुत्र/पुत्री {{father}}, ने दिनांक {{admdate}} को आपके संस्थान में {{course}} में प्रवेश लिया था। मेरा एडमिशन/एनरोलमेंट नंबर {{admno}} है। प्रवेश के समय मैंने {{amount}} फीस जमा की थी।

कारण: {{reason}}

अतः मैं इस आवेदन द्वारा अपना प्रवेश रद्द (सीट वापस) कर रहा/रही हूं। आपसे निवेदन है कि:
1. विश्वविद्यालय अनुदान आयोग (UGC) की फीस वापसी नीति और संस्थान के प्रॉस्पेक्टस के अनुसार मेरी जमा फीस नीचे दिए खाते में लौटाई जाए;
2. मेरे सभी मूल दस्तावेज़ (अंकतालिका, TC, माइग्रेशन आदि) तुरंत लौटाए जाएं;
3. यदि कोई राशि काटी जाती है तो उसका लिखित ब्योरा और नियम बताया जाए।

बैंक विवरण: {{bank}}

आवेदन प्राप्त होने की तारीख ही सीट छोड़ने की तारीख मानी जाए, कृपया इसकी पावती दें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न:
1. फीस रसीद की कॉपी
2. प्रवेश पत्र / आईडी कार्ड की कॉपी
3. कैंसिल चेक / बैंक पासबुक की कॉपी
4. मूल दस्तावेज़ जमा करने की रसीद (यदि हो)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Principal / Registrar,
{{institute}}

Subject: Application for cancellation of admission and refund of fee and original documents.

Respected Sir/Madam,

I, {{name}}, son/daughter of {{father}}, took admission in {{course}} in your institution on {{admdate}}. My admission/enrolment number is {{admno}}. At the time of admission I paid a fee of {{amount}}.

Reason: {{reason}}

By this application I hereby withdraw from (cancel) my admission. I request you to:
1. Refund the fee paid by me to the account given below as per the fee refund policy of the University Grants Commission (UGC) and the institution's prospectus;
2. Return all my original documents (marksheet, TC, migration etc.) immediately;
3. Give me a written statement of any amount deducted and the rule under which it is deducted.

Bank details: {{bank}}

Kindly treat the date of receipt of this application as the date of withdrawal and give me an acknowledgement.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures:
1. Copy of fee receipt
2. Copy of admission letter / ID card
3. Cancelled cheque / copy of bank passbook
4. Receipt for original documents deposited (if any)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "फीस जमा की रसीद(ें) की कॉपी",
    "प्रवेश पत्र / एडमिशन स्लिप / ID कार्ड की कॉपी",
    "छात्र या अभिभावक के खाते का कैंसिल चेक या पासबुक की कॉपी",
    "नए संस्थान में प्रवेश का सबूत (अगर कॉलेज मांगे)",
  ],
  submit: [
    "पत्र दो कॉपी में प्रिंट करें, एक जमा करें और दूसरी पर <strong>तारीख वाली रिसीविंग</strong> लें; फीस वापसी की रकम इसी तारीख से तय होती है।",
    "कई संस्थान प्रवेश रद्द करने का ऑनलाइन फॉर्म रखते हैं; वह भी भरें और उसका प्रिंट रखें।",
    "तय समय में फीस/दस्तावेज़ न मिलें तो संस्थान की <strong>छात्र शिकायत निवारण समिति (SGRC)</strong> में यही पत्र और रसीद लगाकर शिकायत करें; फैसले से असंतुष्ट हों तो 15 दिन में यूनिवर्सिटी के <strong>ओम्बड्सपर्सन</strong> के पास अपील करें।",
    'इसके बाद UGC के <a href="https://www.ugc.gov.in/" target="_blank" rel="noopener nofollow">ugc.gov.in</a> पर दिए e-Samadhaan शिकायत पोर्टल पर शिकायत दर्ज कर सकते हैं।',
  ],
  tips: [
    "जितनी जल्दी सीट छोड़ेंगे, उतनी ज़्यादा फीस लौटेगी; फैसला होते ही लिखित आवेदन दें, सिर्फ फोन पर न बताएं।",
    "JoSAA, MCC (NEET) या राज्य काउंसलिंग से मिली सीट पर काउंसलिंग के अपने नियम लागू होते हैं; पहले उनका नोटिस पढ़ें।",
    "हॉस्टल, मेस और सिक्योरिटी डिपॉज़िट की वापसी के नियम अलग हो सकते हैं; पत्र में उन्हें भी अलग से लिखें।",
    "कॉलेज मूल दस्तावेज़ रोककर फीस मांगे तो लिखित में कारण मांगें और SGRC में शिकायत करें।",
  ],
  notice: "UGC के नियम UGC से मान्यता प्राप्त कॉलेज/यूनिवर्सिटी पर लागू होते हैं। हर साल की तारीखें UGC के नोटिस से तय होती हैं; 2026-27 की तारीखें अपने संस्थान और UGC की वेबसाइट पर ज़रूर जांचें।",
  official: [
    { href: "https://www.ugc.gov.in/", title: "विश्वविद्यालय अनुदान आयोग (UGC)", note: "फीस वापसी नोटिस, e-Samadhaan शिकायत" },
  ],
  related: ["/students/"],
  faq: [
    { q: "एडमिशन रद्द करने पर पूरी फीस वापस मिलती है?", a: "UGC की 2024-25 नीति में 30 सितंबर तक सीट छोड़ने पर पूरी फीस और 31 अक्टूबर तक अधिकतम ₹1,000 कटौती के बाद बाकी फीस लौटानी थी। उसके बाद आखिरी प्रवेश तिथि के हिसाब से 100% से 0% तक वापसी होती है। मौजूदा साल की तारीखें UGC/संस्थान के नोटिस में देखें।" },
    { q: "फीस वापसी का आवेदन किसे लिखें?", a: "कॉलेज के प्राचार्य या यूनिवर्सिटी के रजिस्ट्रार को। रिसीविंग ज़रूर लें, क्योंकि रकम सीट छोड़ने की तारीख से तय होती है।" },
    { q: "कॉलेज मूल दस्तावेज़ नहीं लौटा रहा, क्या करें?", a: "UGC के नियमों के अनुसार संस्थान छात्र के मूल प्रमाण पत्र अपने पास नहीं रख सकते। लिखित में मांगें, फिर SGRC और UGC e-Samadhaan पर शिकायत करें।" },
    { q: "कॉलेज फीस न लौटाए तो शिकायत कहां करें?", a: "पहले संस्थान की छात्र शिकायत निवारण समिति (SGRC), फिर यूनिवर्सिटी के ओम्बड्सपर्सन (SGRC के फैसले के 15 दिन के अंदर), और फिर UGC के e-Samadhaan पोर्टल पर।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
