import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI circular "Responsible Lending Conduct – Release of Movable /
//   Immovable Property Documents on Repayment / Settlement of Personal Loans"
//   (13 Sep 2023, effective 1 Dec 2023): banks, NBFCs, cooperative banks,
//   RRBs, SFBs and ARCs must release all original documents and remove
//   charges registered with any registry within 30 days of full repayment or
//   settlement; borrower may collect from the servicing branch or another
//   office where documents are kept; for delay attributable to the lender,
//   Rs 5,000 per day compensation; if documents are lost/damaged, lender
//   helps get duplicates and bears cost, with 30 more days (penalty after 60
//   days). (Reported by Business Today, Moneylife, Zerodha Varsity.)
// - Vehicle loan: hypothecation is removed at the RTO by Form 35 (Central
//   Motor Vehicles Rules) using the lender's NOC, applied on Parivahan/Vahan.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026):
//   cms.rbi.org.in, 14448, after complaining to the lender first.
export const loanClosureNocRequestLetter: Letter = {
  slug: "loan-closure-noc-request-letter",
  category: "bank",
  emoji: "📃",
  title: "Loan Closure NOC Request Letter in Hindi 2026: लोन बंद होने पर NOC आवेदन",
  description: "लोन पूरा चुकाने के बाद NOC और मूल कागज़ लौटाने का तैयार पत्र (हिंदी/English)। RBI नियम: 30 दिन में कागज़ वापस, देरी पर ₹5,000 प्रतिदिन मुआवज़ा।",
  h1: "लोन क्लोज़र NOC और मूल दस्तावेज़ वापसी के लिए आवेदन पत्र 2026",
  short: { hi: "लोन क्लोज़र NOC आवेदन", en: "Loan closure NOC request" },
  lead: "लोन की आखिरी किस्त भरने के बाद बैंक/NBFC से <strong>NOC (अनापत्ति प्रमाण पत्र)</strong> और गिरवी रखे <strong>मूल कागज़</strong> (जैसे मकान की रजिस्ट्री) वापस लेना ज़रूरी है। RBI के नियम (1 दिसंबर 2023 से) के अनुसार लोन पूरा चुकाने के <strong>30 दिन के अंदर</strong> सभी मूल कागज़ लौटाने और रजिस्ट्री में दर्ज चार्ज हटाने होते हैं; ऋणदाता की वजह से देरी हो तो <strong>₹5,000 प्रति दिन</strong> मुआवज़ा देना होता है। यह पत्र लोन वाली ब्रांच के शाखा प्रबंधक को दें।",
  facts: [
    ["किसे दें", "जिस ब्रांच/ऑफिस से लोन लिया, उसके प्रबंधक को"],
    ["कागज़ वापसी", "पूरा भुगतान होने के 30 दिन में (RBI)"],
    ["देरी पर", "₹5,000 प्रति दिन मुआवज़ा (ऋणदाता की गलती हो तो)"],
    ["शिकायत", "हल न हो तो RBI लोकपाल: cms.rbi.org.in / 14448"],
  ],
  to: "जिस बैंक/NBFC ब्रांच से लोन चल रहा था, उसके <strong>शाखा प्रबंधक</strong> को। RBI नियम के अनुसार आप कागज़ उसी ब्रांच से या जहां कागज़ रखे हैं उस दफ्तर से लेने का विकल्प चुन सकते हैं।",
  when: [
    "होम लोन, प्रॉपर्टी पर लोन, गोल्ड लोन या पर्सनल लोन पूरा चुका दिया",
    "वाहन लोन (बाइक/कार/ट्रैक्टर) पूरा हुआ और RC से हाइपोथिकेशन हटवाना है",
    "लोन का सेटलमेंट (OTS) हो गया और 'No Dues' प्रमाण चाहिए",
    "किस्तें पूरी होने के बाद भी NOC/कागज़ नहीं मिले",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक/NBFC का नाम", en: "Bank/NBFC name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "उधारकर्ता का नाम", en: "Borrower name" }, required: true },
    { key: "loantype", label: { hi: "लोन का प्रकार", en: "Loan type" }, type: "select", required: true, options: [
      { hi: "होम लोन", en: "home loan" },
      { hi: "संपत्ति पर लोन", en: "loan against property" },
      { hi: "वाहन लोन", en: "vehicle loan" },
      { hi: "पर्सनल लोन", en: "personal loan" },
      { hi: "गोल्ड लोन", en: "gold loan" },
      { hi: "किसान क्रेडिट कार्ड/कृषि लोन", en: "Kisan Credit Card/agriculture loan" },
    ] },
    { key: "loanno", label: { hi: "लोन खाता संख्या", en: "Loan account number" }, required: true, hint: { hi: "लोन खाता नंबर गोपनीय नहीं है, पूरा लिख सकते हैं", en: "Full loan account number is fine" } },
    { key: "closed", label: { hi: "लोन पूरा चुकाने की तारीख", en: "Date of full repayment" }, required: true, placeholder: { hi: "जैसे: 30/09/2026", en: "e.g. 30/09/2026" } },
    { key: "docs", label: { hi: "बैंक के पास रखे मूल कागज़/गिरवी", en: "Original documents/security held" }, type: "textarea", placeholder: { hi: "जैसे: मकान की रजिस्ट्री (विक्रय पत्र), पुरानी चेन ऑफ डीड; वाहन RC पर हाइपोथिकेशन", en: "e.g. sale deed, chain documents; hypothecation on vehicle RC" } },
    { key: "vehicle", label: { hi: "वाहन नंबर (वाहन लोन हो तो)", en: "Vehicle number (if vehicle loan)" }, placeholder: { hi: "जैसे: UP32 AB 1234", en: "e.g. UP32 AB 1234" } },
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

विषय: {{loantype}} खाता संख्या {{loanno}} बंद होने पर अनापत्ति प्रमाण पत्र (NOC) और मूल दस्तावेज़ लौटाने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा से लिए गए {{loantype}} (खाता संख्या {{loanno}}) का उधारकर्ता हूं। मैंने दिनांक {{closed}} को इस लोन की पूरी राशि चुका दी है और अब मेरी ओर से कोई बकाया नहीं है।

अतः आपसे निवेदन है कि:
1. मुझे लोन पूरा चुकाने का अनापत्ति प्रमाण पत्र (NOC / No Dues Certificate) जारी करें।
2. बैंक के पास रखे मेरे सभी मूल दस्तावेज़ लौटाएं: {{docs}}
3. किसी रजिस्ट्री (जैसे CERSAI, उप-पंजीयक कार्यालय या परिवहन विभाग) में दर्ज चार्ज/हाइपोथिकेशन हटाएं। वाहन संख्या (यदि लागू): {{vehicle}}
4. क्रेडिट ब्यूरो (CIC) को लोन बंद होने की सूचना भेजें।

RBI के परिपत्र दिनांक 13 सितंबर 2023 के अनुसार पूरा भुगतान होने के 30 दिन के अंदर मूल दस्तावेज़ लौटाने और चार्ज हटाने होते हैं। कृपया दस्तावेज़ तैयार होने की सूचना मेरे मोबाइल पर दें; मैं उन्हें इसी शाखा से प्राप्त करूंगा/करूंगी।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: आखिरी भुगतान की रसीद/लोन खाते का स्टेटमेंट, पहचान पत्र की स्व-प्रमाणित कॉपी`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Request for No Objection Certificate (NOC) and return of original documents on closure of {{loantype}} account no. {{loanno}}

Sir/Madam,

I, {{name}}, am the borrower of the {{loantype}} (account no. {{loanno}}) taken from your branch. I repaid the entire loan amount on {{closed}} and nothing is outstanding from my side.

I therefore request you to:
1. Issue me a No Objection Certificate (NOC / No Dues Certificate) for full repayment of the loan.
2. Return all my original documents held by the bank: {{docs}}
3. Remove the charge/hypothecation registered with any registry (such as CERSAI, Sub-Registrar office or the transport department). Vehicle number (if applicable): {{vehicle}}
4. Report the closure of the loan to the credit information companies.

As per the RBI circular dated 13 September 2023, original documents must be released and charges removed within 30 days of full repayment. Kindly inform me on my mobile when the documents are ready; I will collect them from this branch.

Thank you.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Receipt of final payment/loan account statement, self-attested copy of ID proof`,
  },
  attach: [
    "आखिरी किस्त/पूरा भुगतान की रसीद या लोन खाते का स्टेटमेंट",
    "पहचान पत्र की स्व-प्रमाणित कॉपी (कागज़ लेते समय मूल साथ रखें)",
    "बैंक ने कागज़ जमा करते समय कोई रसीद/सूची दी थी, तो उसकी कॉपी",
  ],
  submit: [
    "पत्र प्रिंट करके हस्ताक्षर करें और ब्रांच में देकर कॉपी पर तारीख वाली <strong>रिसीविंग</strong> लें; 30 दिन की गिनती के लिए यही काम आएगी।",
    "मूल कागज़ लेते समय हर कागज़ गिनकर मिलाएं और रिसीविंग पर हस्ताक्षर तभी करें।",
    'वाहन लोन में NOC मिलने के बाद <a href="https://parivahan.gov.in/" target="_blank" rel="noopener nofollow">Parivahan</a> पर RTO में <strong>Form 35</strong> से RC से हाइपोथिकेशन हटवाएं।',
    "1-2 महीने बाद अपनी क्रेडिट रिपोर्ट में देखें कि लोन 'Closed' दिख रहा है।",
    'ऋणदाता 30 दिन में कागज़ न लौटाए या शिकायत का हल न करे, तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448) और ₹5,000 प्रतिदिन मुआवज़े की मांग करें।',
  ],
  tips: [
    "आखिरी किस्त से पहले 'Foreclosure/Closure statement' लेकर पक्का करें कि कोई चार्ज बाकी न रहे।",
    "सेटलमेंट (OTS) वाले लोन में NOC पर 'Settled' लिखा होता है, 'Closed' नहीं; इसका असर क्रेडिट स्कोर पर पड़ता है।",
    "मकान के कागज़ में कोई पन्ना कम या खराब मिले तो उसी समय लिखित में दर्ज करवाएं; RBI नियम से डुप्लीकेट दिलाने का खर्च ऋणदाता का है।",
    "पत्र में ATM PIN, OTP या नेट बैंकिंग पासवर्ड न लिखें।",
  ],
  official: [
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)", note: "देरी पर लोकपाल शिकायत" },
    { href: "https://parivahan.gov.in/", title: "Parivahan Sewa", note: "वाहन RC से हाइपोथिकेशन हटाना (Form 35)" },
  ],
  related: ["/service/credit-score-report.html", "/service/pm-mudra-yojana.html", "/service/kisan-credit-card.html", "/service/vehicle-registration-certificate.html"],
  faq: [
    { q: "लोन बंद होने के कितने दिन में NOC और कागज़ मिलने चाहिए?", a: "RBI के 13 सितंबर 2023 के परिपत्र (1 दिसंबर 2023 से लागू) के अनुसार पूरा भुगतान होने के 30 दिन के अंदर मूल कागज़ लौटाने और रजिस्ट्री में दर्ज चार्ज हटाने होते हैं।" },
    { q: "बैंक कागज़ लौटाने में देर करे तो?", a: "ऋणदाता की वजह से 30 दिन से ज़्यादा देरी पर उसे ₹5,000 प्रति दिन मुआवज़ा देना होता है। लिखित शिकायत करें और हल न हो तो RBI लोकपाल के पास जाएं।" },
    { q: "बैंक ने मूल कागज़ खो दिए तो?", a: "RBI नियम के अनुसार ऋणदाता को डुप्लीकेट/प्रमाणित कॉपी दिलाने में मदद करनी होती है और खर्च उठाना होता है। इसके लिए 30 दिन और मिलते हैं, यानी मुआवज़ा 60 दिन के बाद से गिना जाता है।" },
    { q: "वाहन लोन की NOC के बाद क्या करें?", a: "NOC लेकर Parivahan पर RTO में Form 35 से RC से हाइपोथिकेशन (बैंक का नाम) हटवाएं, नहीं तो वाहन बेचने में दिक्कत होगी।" },
    { q: "क्या NOC देने का चार्ज लगता है?", a: "यह बैंक की सेवा शुल्क सूची पर निर्भर है। कई बैंक NOC मुफ्त देते हैं; कोई चार्ज मांगे तो लिखित में पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
