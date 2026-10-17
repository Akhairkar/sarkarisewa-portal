import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI circular on Positive Pay System for Cheque Truncation System
//   (25 Sep 2020, effective 1 Jan 2021): available for cheques of Rs 50,000
//   and above; banks may make it mandatory for Rs 5 lakh and above.
// - Number of free cheque leaves and charges for extra cheque books are set
//   by each bank in its schedule of service charges (no uniform RBI amount),
//   so the page gives no number.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026):
//   cms.rbi.org.in, 14448, after complaining to the bank first.
export const chequeBookRequestApplication: Letter = {
  slug: "cheque-book-request-application",
  category: "bank",
  emoji: "📘",
  title: "Cheque Book Request Application in Hindi 2026: चेक बुक के लिए आवेदन",
  description: "बैंक से नई चेक बुक मांगने का तैयार आवेदन पत्र (हिंदी/English)। कितने पन्ने, कहां भेजें, ऑनलाइन/ATM से अनुरोध, चार्ज और Positive Pay की जानकारी।",
  h1: "चेक बुक के लिए आवेदन पत्र 2026: भरें, प्रिंट करें और ब्रांच में दें",
  short: { hi: "चेक बुक आवेदन", en: "Cheque book request" },
  lead: "नई चेक बुक के लिए <strong>होम ब्रांच के शाखा प्रबंधक</strong> को आवेदन दें, या बैंक की ब्रांच में रखी <strong>चेक बुक मांग पर्ची (requisition slip)</strong> भरें, जो पुरानी चेक बुक के अंदर भी होती है। ज़्यादातर बैंक नेट बैंकिंग, मोबाइल ऐप, ATM या SMS से भी चेक बुक भेजते हैं। कितने चेक मुफ्त मिलेंगे और उसके बाद का चार्ज, यह हर बैंक की <strong>सेवा शुल्क सूची</strong> से तय होता है।",
  facts: [
    ["किसे दें", "होम ब्रांच के शाखा प्रबंधक को"],
    ["दूसरे तरीके", "पुरानी चेक बुक की मांग पर्ची, नेट बैंकिंग, ऐप, ATM, SMS"],
    ["चार्ज", "बैंक की सेवा शुल्क सूची के अनुसार"],
    ["बड़े चेक", "₹50,000+ के चेक पर Positive Pay से विवरण पहले से बताएं"],
  ],
  to: "जिस ब्रांच में खाता है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को।",
  when: [
    "खाता खुलने के बाद पहली बार चेक बुक चाहिए",
    "पुरानी चेक बुक खत्म होने वाली है",
    "चेक बुक खो गई या खराब हो गई (खोई चेक बुक के चेक रुकवाना भी ज़रूरी है)",
    "पुराने (non-CTS) चेक की जगह नई चेक बुक चाहिए",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "acctype", label: { hi: "खाते का प्रकार", en: "Account type" }, type: "select", required: true, options: [
      { hi: "बचत खाता", en: "savings account" },
      { hi: "चालू खाता", en: "current account" },
    ] },
    { key: "leaves", label: { hi: "कितने पन्नों की चेक बुक", en: "Cheque leaves" }, type: "select", options: [
      { hi: "10 पन्ने", en: "10 leaves" },
      { hi: "20 पन्ने", en: "20 leaves" },
      { hi: "25 पन्ने", en: "25 leaves" },
      { hi: "50 पन्ने", en: "50 leaves" },
    ], hint: { hi: "बैंक जो विकल्प देता है, वही मिलेगा", en: "Subject to options your bank offers" } },
    { key: "delivery", label: { hi: "चेक बुक कहां चाहिए", en: "Delivery" }, type: "select", required: true, options: [
      { hi: "मेरे पंजीकृत पते पर डाक/कूरियर से भेजें", en: "send it to my registered address by post/courier" },
      { hi: "मैं शाखा से खुद ले लूंगा/लूंगी", en: "I will collect it from the branch" },
    ] },
    { key: "reason", label: { hi: "कारण", en: "Reason" }, type: "select", required: true, options: [
      { hi: "पुरानी चेक बुक के पन्ने खत्म हो गए हैं", en: "the leaves of my previous cheque book are exhausted" },
      { hi: "मुझे पहली बार चेक बुक चाहिए", en: "I need a cheque book for the first time" },
      { hi: "पुरानी चेक बुक खो गई है (उसके चेक रोकने का अनुरोध अलग से दिया है)", en: "my previous cheque book is lost (stop-payment request given separately)" },
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

विषय: नई चेक बुक जारी करने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में {{acctype}} संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। {{reason}}।

अतः कृपया मेरे खाते पर {{leaves}} की नई चेक बुक जारी करें। कृपया {{delivery}}।

इसके लिए जो शुल्क लागू हो, वह मेरे खाते से काट लिया जाए।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर – बैंक में दर्ज नमूना हस्ताक्षर जैसे)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Request for issue of a new cheque book

Sir/Madam,

I, {{name}}, hold {{acctype}} no. ____________________ (last 4 digits {{acct}}) at your branch. I wish to state that {{reason}}.

Kindly issue a new cheque book of {{leaves}} on my account. Please {{delivery}}.

Applicable charges, if any, may be debited to my account.

Thank you.

Yours faithfully,

(Signature – as per specimen signature with the bank)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "पुरानी चेक बुक की मांग पर्ची (requisition slip) हो तो भरकर साथ लगाएं",
    "पासबुक/पहचान पत्र दिखाने के लिए साथ ले जाएं",
  ],
  submit: [
    "पहले देखें: नेट बैंकिंग/ऐप में 'Request Cheque Book', ATM मेनू या बैंक का SMS/मिस्ड कॉल नंबर; अक्सर ब्रांच जाने की ज़रूरत नहीं होती।",
    "ब्रांच में देना हो तो पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें और <strong>वैसे ही हस्ताक्षर करें जैसे बैंक में दर्ज हैं</strong>।",
    "पत्र जमा करके रिसीविंग लें। डाक से आने वाली चेक बुक मिलते ही उसके पन्ने गिन लें।",
    'चेक बुक बार-बार न मिले तो लिखित शिकायत करें; 30 दिन में हल न हो तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "चेक बुक खोई हो तो पहले उसके बचे चेक का 'Stop Payment' करवाएं, फिर नई चेक बुक मांगें।",
    "खाली चेक पर पहले से हस्ताक्षर करके न रखें।",
    "₹50,000 या उससे ज़्यादा का चेक देते समय बैंक के ऐप/नेट बैंकिंग में Positive Pay से चेक का विवरण पहले से बता दें; इससे धोखाधड़ी रुकती है।",
    "हस्ताक्षर बैंक के नमूना हस्ताक्षर से मेल न खाएं तो आवेदन रुक सकता है।",
  ],
  official: [
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "बैंक से हल न हो तो लोकपाल शिकायत" },
  ],
  related: ["/service/pm-jan-dhan-yojana.html", "/service/pm-mudra-yojana.html"],
  faq: [
    { q: "चेक बुक के लिए आवेदन कैसे लिखें?", a: "शाखा प्रबंधक को संबोधित करें, खाता नंबर, खाते का प्रकार, कितने पन्ने और कहां भेजनी है, यह लिखें, और बैंक में दर्ज जैसे हस्ताक्षर करें।" },
    { q: "क्या चेक बुक ऑनलाइन मंगा सकते हैं?", a: "हां, ज़्यादातर बैंक नेट बैंकिंग, मोबाइल ऐप, ATM या SMS से चेक बुक का अनुरोध लेते हैं और पंजीकृत पते पर भेजते हैं।" },
    { q: "चेक बुक का चार्ज कितना है?", a: "हर बैंक साल में कुछ चेक मुफ्त देता है और उसके बाद अपनी सेवा शुल्क सूची के अनुसार चार्ज लेता है। अपने बैंक की सूची देखें।" },
    { q: "जन धन/बेसिक खाते में चेक बुक मिलती है?", a: "यह बैंक की नीति पर निर्भर है। अपनी ब्रांच से पूछें कि आपके खाते पर चेक बुक की सुविधा और शर्तें क्या हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
