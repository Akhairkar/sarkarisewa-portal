import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Reserve Bank – Integrated Ombudsman Scheme, 2026 (RB-IOS 2026), in force
//   from 1 Jul 2026, replacing RB-IOS 2021 (RBI text reproduced by banks, e.g.
//   Standard Chartered, Meghalaya Rural Bank; news: Angel One, Vision IAS):
//   complainant must first complain to the regulated entity (bank/NBFC/PPI/
//   CIC); may approach the Ombudsman if no reply within 30 days (or a longer
//   timeline set by RBI/NPCI/card network) or if dissatisfied; filing window
//   90 days after the response period ends or the last communication from the
//   entity, whichever is later (bank-issued salient features: Axis, Muthoot,
//   Hinduja Leyland; Indian Cooperative). Free. Filing: cms.rbi.org.in, email
//   crpc@rbi.org.in, or physically to the Centralised Receipt and Processing
//   Centre, RBI, Chandigarh. Helpline 14448.
// - Banks must display grievance redressal / nodal officer details at branches
//   and on their websites (RBI customer service instructions).
// The 90-day window is from secondary summaries of RB-IOS 2026; the page asks
// readers to complain promptly rather than relying on the last day.
export const bankComplaintLetter: Letter = {
  slug: "bank-complaint-letter",
  category: "bank",
  emoji: "📢",
  title: "Bank Complaint Letter in Hindi 2026: बैंक मैनेजर को शिकायत पत्र",
  description: "बैंक शाखा प्रबंधक को शिकायत पत्र का तैयार फॉर्मेट (हिंदी/English)। गलत चार्ज, खराब सेवा, देरी पर शिकायत; 30 दिन बाद RBI लोकपाल (cms.rbi.org.in) का रास्ता।",
  h1: "बैंक मैनेजर को शिकायत पत्र 2026: भरें, प्रिंट करें और भेजें",
  short: { hi: "बैंक शिकायत पत्र", en: "Bank complaint letter" },
  lead: "बैंक में गलत चार्ज कटे, काम में देरी हो, कर्मचारी बुरा व्यवहार करें या कोई सेवा न मिले, तो पहले <strong>शाखा प्रबंधक</strong> को लिखित शिकायत दें। RBI के नए <strong>एकीकृत लोकपाल योजना 2026</strong> (1 जुलाई 2026 से लागू) के अनुसार लोकपाल के पास जाने से पहले बैंक में शिकायत ज़रूरी है। बैंक <strong>30 दिन</strong> में जवाब न दे या जवाब ठीक न लगे, तो <strong>cms.rbi.org.in</strong> पर मुफ्त शिकायत करें।",
  facts: [
    ["पहले किसे", "शाखा प्रबंधक, फिर बैंक के शिकायत/नोडल अधिकारी"],
    ["बैंक का समय", "30 दिन"],
    ["फिर कहां", "RBI लोकपाल: cms.rbi.org.in (मुफ्त)"],
    ["RBI हेल्पलाइन", "14448"],
  ],
  to: "जिस ब्रांच से शिकायत है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। हल न हो तो बैंक के <strong>क्षेत्रीय कार्यालय/नोडल अधिकारी</strong> को (उनका नाम-पता ब्रांच के नोटिस बोर्ड और बैंक की वेबसाइट पर होता है)।",
  when: [
    "खाते से बिना कारण चार्ज/पेनल्टी कटी",
    "आवेदन (KYC, नॉमिनी, कार्ड, लोन) पर लंबे समय से कार्रवाई नहीं",
    "कर्मचारी ने काम करने से मना किया या बुरा व्यवहार किया",
    "पेंशन/सब्सिडी जमा होने में गड़बड़ी या पैसा निकालने में दिक्कत",
    "ATM से पैसा नहीं निकला पर खाते से कट गया",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "category", label: { hi: "शिकायत किस बारे में", en: "Complaint about" }, type: "select", required: true, options: [
      { hi: "खाते से गलत/बिना सूचना चार्ज कटना", en: "wrong/unintimated charges debited to my account" },
      { hi: "आवेदन पर कार्रवाई में देरी", en: "delay in action on my request" },
      { hi: "कर्मचारी का दुर्व्यवहार/सेवा देने से मना करना", en: "misbehaviour/refusal of service by staff" },
      { hi: "ATM/डिजिटल लेन-देन में राशि कटना पर न मिलना", en: "amount debited in ATM/digital transaction but not received" },
      { hi: "पेंशन/सब्सिडी/जमा राशि न दिखना", en: "pension/subsidy/deposit not credited" },
      { hi: "अन्य", en: "other" },
    ] },
    { key: "details", label: { hi: "पूरी बात (कब, क्या हुआ, कितनी राशि)", en: "Details (when, what, amount)" }, type: "textarea", required: true, placeholder: { hi: "तारीख, राशि, किससे बात हुई, पहले की शिकायत संख्या", en: "Dates, amount, whom you met, earlier complaint no." } },
    { key: "relief", label: { hi: "आप क्या चाहते हैं", en: "Relief sought" }, type: "textarea", required: true, placeholder: { hi: "जैसे: गलत कटा ₹590 वापस किया जाए", en: "e.g. refund of wrongly debited Rs 590" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: {{category}} के संबंध में शिकायत

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। मैं निम्न शिकायत आपके ध्यान में लाना चाहता/चाहती हूं:

{{details}}

इससे मुझे आर्थिक नुकसान और परेशानी हुई है। अतः आपसे निवेदन है कि: {{relief}}

कृपया इस शिकायत को बैंक की शिकायत निवारण व्यवस्था में दर्ज करें, मुझे शिकायत संख्या दें, और 30 दिन के अंदर लिखित जवाब दें। यदि तय समय में समाधान नहीं होता है, तो मैं रिज़र्व बैंक – एकीकृत लोकपाल योजना के तहत RBI लोकपाल के पास शिकायत करने के लिए बाध्य रहूंगा/रहूंगी।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: संबंधित स्टेटमेंट/रसीद/SMS की कॉपी`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Complaint regarding {{category}}

Sir/Madam,

I, {{name}}, hold account no. ____________________ (last 4 digits {{acct}}) at your branch. I wish to bring the following complaint to your notice:

{{details}}

This has caused me financial loss and inconvenience. I therefore request: {{relief}}

Kindly register this complaint in the bank's grievance redressal system, give me a complaint number, and send a written reply within 30 days. If the matter is not resolved within this time, I will be constrained to approach the RBI Ombudsman under the Reserve Bank – Integrated Ombudsman Scheme.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Copies of relevant statement/receipts/SMS`,
  },
  attach: [
    "जिस लेन-देन/चार्ज की शिकायत है, उसका स्टेटमेंट या SMS",
    "पहले दिए आवेदन/शिकायत की रिसीविंग की कॉपी",
    "कोई रसीद, ईमेल या पत्र जो बात साबित करे",
  ],
  submit: [
    "पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें, हस्ताक्षर करें और ब्रांच में दें। कॉपी पर मुहर-तारीख वाली <strong>रिसीविंग</strong> लें, या रजिस्टर्ड डाक/स्पीड पोस्ट से भेजें। बैंक की वेबसाइट/ईमेल/हेल्पलाइन पर भी शिकायत दर्ज करके नंबर ले सकते हैं।",
    "जवाब न मिले तो बैंक के क्षेत्रीय कार्यालय या नोडल अधिकारी को इसी पत्र की कॉपी के साथ लिखें।",
    '<strong>30 दिन</strong> में जवाब न मिले या जवाब ठीक न लगे, तो <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर RBI लोकपाल को शिकायत करें। ईमेल crpc@rbi.org.in या डाक से RBI के केंद्रीकृत प्राप्ति एवं प्रसंस्करण केंद्र (CRPC), चंडीगढ़ को भी भेज सकते हैं। मदद: 14448।',
    "नई योजना (2026) में लोकपाल शिकायत की समय-सीमा पहले से कम बताई गई है (बैंक का समय खत्म होने या आखिरी जवाब के बाद लगभग 90 दिन); इसलिए देर न करें और ताज़ा नियम RBI वेबसाइट पर देखें।",
  ],
  tips: [
    "एक पत्र में एक ही शिकायत रखें और तारीख, राशि, शिकायत संख्या साफ लिखें।",
    "गुस्से वाली भाषा न लिखें; तथ्य और मांग साफ हो तो जल्दी हल होता है।",
    "लोकपाल के पास जाने से पहले बैंक में लिखित शिकायत का सबूत (रिसीविंग/शिकायत संख्या) ज़रूर रखें; इसके बिना लोकपाल शिकायत नहीं लेता।",
    "पत्र में PIN, OTP, CVV या पासवर्ड कभी न लिखें।",
  ],
  official: [
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "लोकपाल शिकायत, हेल्पलाइन 14448" },
    { href: "https://rbi.org.in/", title: "भारतीय रिज़र्व बैंक", note: "एकीकृत लोकपाल योजना 2026 का पूरा पाठ" },
  ],
  related: ["/service/consumer-grievance-redressal.html", "/service/pm-jan-dhan-yojana.html", "/support/helpline-directory.html"],
  faq: [
    { q: "बैंक मैनेजर को शिकायत पत्र कैसे लिखें?", a: "'सेवा में, शाखा प्रबंधक' लिखकर बैंक और ब्रांच का नाम दें, विषय में शिकायत का मुद्दा, फिर तारीख, राशि और पूरी बात लिखें, साफ मांग रखें और 30 दिन में जवाब मांगें। सबूत की कॉपी लगाएं और रिसीविंग लें।" },
    { q: "बैंक शिकायत न सुने तो कहां जाएं?", a: "30 दिन में जवाब न मिले या जवाब ठीक न लगे, तो RBI लोकपाल को cms.rbi.org.in पर मुफ्त शिकायत करें। हेल्पलाइन 14448 है।" },
    { q: "RBI लोकपाल में शिकायत की कोई फीस है?", a: "नहीं, RBI लोकपाल में शिकायत मुफ्त है और वकील की ज़रूरत नहीं।" },
    { q: "RBI लोकपाल में शिकायत कितने दिन में करनी होती है?", a: "1 जुलाई 2026 से लागू नई योजना में, बैंक के 30 दिन पूरे होने या बैंक के आखिरी जवाब के बाद लगभग 90 दिन के अंदर (कई बैंकों की प्रकाशित जानकारी के अनुसार)। देर न करें और RBI वेबसाइट पर ताज़ा नियम देखें।" },
    { q: "क्या सीधे RBI को शिकायत कर सकते हैं?", a: "नहीं। पहले बैंक में लिखित शिकायत ज़रूरी है; बिना इसके या 30 दिन से पहले (जवाब न आने पर) की गई शिकायत लोकपाल नहीं लेता।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
