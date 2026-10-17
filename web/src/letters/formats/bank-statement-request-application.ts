import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - No separate RBI rule fixes a fee or time for account statements; banks
//   set charges for duplicate/branch statements in their board-approved
//   schedule of service charges (RBI Master Circular on Customer Service in
//   Banks: charges must be reasonable and disclosed). So no amount is given.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026):
//   complaint to the bank first; Ombudsman via cms.rbi.org.in if no reply in
//   30 days or reply unsatisfactory; free; helpline 14448.
// Online statements (net banking / e-statement by email) are offered by most
// banks; described generally without naming a bank.
export const bankStatementRequestApplication: Letter = {
  slug: "bank-statement-request-application",
  category: "bank",
  emoji: "🧾",
  title: "Bank Statement Request Application in Hindi 2026: बैंक स्टेटमेंट आवेदन पत्र",
  description: "बैंक स्टेटमेंट या पासबुक एंट्री के लिए तैयार आवेदन पत्र (हिंदी/English)। अवधि, उद्देश्य और मुहर लगी कॉपी कैसे मांगें; ऑनलाइन स्टेटमेंट और चार्ज की जानकारी।",
  h1: "बैंक स्टेटमेंट / पासबुक एंट्री के लिए आवेदन पत्र 2026",
  short: { hi: "बैंक स्टेटमेंट आवेदन", en: "Bank statement request" },
  lead: "लोन, वीज़ा, ITR, छात्रवृत्ति या किसी योजना के लिए अक्सर बैंक स्टेटमेंट चाहिए होता है। इसके लिए <strong>होम ब्रांच के शाखा प्रबंधक</strong> को आवेदन दें और साफ लिखें कि <strong>किस तारीख से किस तारीख तक</strong> का और किस काम के लिए चाहिए। ज़्यादातर बैंक नेट बैंकिंग/ऐप से PDF स्टेटमेंट मुफ्त देते हैं; ब्रांच से मुहर लगी कॉपी का चार्ज बैंक की <strong>सेवा शुल्क सूची</strong> के अनुसार लगता है।",
  facts: [
    ["किसे दें", "होम ब्रांच के शाखा प्रबंधक को"],
    ["क्या लिखें", "अवधि (तारीख से तारीख तक) और उद्देश्य"],
    ["चार्ज", "बैंक की सेवा शुल्क सूची के अनुसार; ऑनलाइन PDF अक्सर मुफ्त"],
    ["शिकायत", "30 दिन में हल न हो तो RBI लोकपाल: cms.rbi.org.in"],
  ],
  to: "जिस ब्रांच में खाता है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। किसी भी ब्रांच से भी स्टेटमेंट मिल सकता है, पर होम ब्रांच में काम आसान रहता है।",
  when: [
    "लोन, क्रेडिट कार्ड या किराये के मकान के लिए आय का प्रमाण देना हो",
    "वीज़ा, पासपोर्ट या छात्रवृत्ति के लिए स्टेटमेंट मांगा गया हो",
    "आयकर रिटर्न (ITR) या किसी विवाद/कोर्ट के मामले में लेन-देन दिखाने हों",
    "पासबुक भर गई, खो गई या लंबे समय से एंट्री नहीं हुई",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "from", label: { hi: "किस तारीख से", en: "From date" }, required: true, placeholder: { hi: "जैसे: 01/04/2025", en: "e.g. 01/04/2025" } },
    { key: "to", label: { hi: "किस तारीख तक", en: "To date" }, required: true, placeholder: { hi: "जैसे: 31/03/2026", en: "e.g. 31/03/2026" } },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, type: "select", required: true, options: [
      { hi: "लोन आवेदन", en: "loan application" },
      { hi: "वीज़ा/पासपोर्ट", en: "visa/passport" },
      { hi: "आयकर रिटर्न", en: "income tax return" },
      { hi: "छात्रवृत्ति/सरकारी योजना", en: "scholarship/government scheme" },
      { hi: "व्यक्तिगत रिकॉर्ड", en: "personal record" },
    ] },
    { key: "mode", label: { hi: "स्टेटमेंट कैसे चाहिए", en: "How you want it" }, type: "select", required: true, options: [
      { hi: "बैंक की मुहर और अधिकारी के हस्ताक्षर के साथ प्रिंट कॉपी", en: "printed copy with bank stamp and officer's signature" },
      { hi: "मेरे पंजीकृत ईमेल पर PDF", en: "PDF on my registered email" },
      { hi: "पासबुक में सभी बाकी एंट्री प्रिंट करें / नई पासबुक जारी करें", en: "update all pending entries in passbook / issue a new passbook" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: खाते का स्टेटमेंट उपलब्ध कराने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। मुझे {{purpose}} के लिए अपने खाते का दिनांक {{from}} से {{to}} तक का स्टेटमेंट चाहिए।

कृपया यह स्टेटमेंट इस रूप में उपलब्ध कराएं: {{mode}}।

इसके लिए जो शुल्क लागू हो, वह मेरे खाते से काट लिया जाए।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Request for statement of account

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. I require the statement of my account for the period from {{from}} to {{to}} for the purpose of {{purpose}}.

Kindly provide the statement as follows: {{mode}}.

Applicable charges, if any, may be debited to my account.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "पासबुक या पहचान पत्र (आधार/पैन) दिखाने के लिए साथ ले जाएं",
    "किसी और की ओर से मांग रहे हों तो खाताधारक का हस्ताक्षर किया अधिकार पत्र और दोनों के पहचान पत्र (बैंक के नियम अनुसार)",
  ],
  submit: [
    "पहले नेट बैंकिंग/मोबाइल ऐप में 'Account Statement' देखें; PDF अक्सर तुरंत और मुफ्त मिल जाता है। पासबुक एंट्री के लिए ब्रांच की पासबुक प्रिंटिंग मशीन भी काम आती है।",
    "मुहर लगी कॉपी चाहिए तो पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें, हस्ताक्षर करके ब्रांच में दें।",
    "स्टेटमेंट के हर पेज पर बैंक की मुहर और अधिकारी के हस्ताक्षर देख लें (लोन/वीज़ा में यही मांगा जाता है)।",
    'बार-बार मना किया जाए तो लिखित शिकायत करें; 30 दिन में हल न हो तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "तारीख साफ लिखें (दिन/महीना/साल); 'पिछले 6 महीने' जैसा लिखने से गलत अवधि का स्टेटमेंट मिल सकता है।",
    "ईमेल वाला PDF अक्सर पासवर्ड से खुलता है; पासवर्ड का तरीका बैंक के ईमेल में लिखा होता है।",
    "पत्र में कार्ड नंबर, PIN, OTP या नेट बैंकिंग पासवर्ड कभी न लिखें।",
    "अनजान व्यक्ति या 'एजेंट' को स्टेटमेंट न दें; इसमें आपके सभी लेन-देन होते हैं।",
  ],
  official: [
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "बैंक से हल न हो तो लोकपाल शिकायत" },
  ],
  related: ["/service/income-tax-return-filing.html", "/service/pm-mudra-yojana.html", "/service/national-scholarship-portal.html"],
  faq: [
    { q: "बैंक स्टेटमेंट के लिए आवेदन कैसे लिखें?", a: "शाखा प्रबंधक को संबोधित करें, खाता नंबर, किस तारीख से किस तारीख तक का स्टेटमेंट चाहिए और किस काम के लिए, यह लिखें। मुहर लगी कॉपी चाहिए तो वह भी लिखें।" },
    { q: "बैंक स्टेटमेंट का कितना चार्ज लगता है?", a: "हर बैंक अपनी सेवा शुल्क सूची के अनुसार लेता है। नेट बैंकिंग/ऐप से डाउनलोड किया PDF और ईमेल स्टेटमेंट आम तौर पर मुफ्त होता है।" },
    { q: "क्या ऑनलाइन डाउनलोड किया स्टेटमेंट लोन के लिए चलेगा?", a: "कई जगह चलता है, पर कुछ बैंक/दूतावास ब्रांच की मुहर और हस्ताक्षर वाली कॉपी मांगते हैं। जहां देना है, उनसे पूछ लें।" },
    { q: "पासबुक खो गई है, एंट्री कैसे देखें?", a: "स्टेटमेंट से सारे लेन-देन मिल जाते हैं। नई पासबुक के लिए अलग आवेदन देना होता है; उसका चार्ज बैंक के नियम से लगता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
