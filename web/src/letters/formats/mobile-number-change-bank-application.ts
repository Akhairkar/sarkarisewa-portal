import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - RBI circular "Customer Protection – Limiting Liability of Customers in
//   Unauthorised Electronic Banking Transactions" (6 Jul 2017, rbi.org.in
//   Id=11040): banks must ask customers to mandatorily register for SMS alerts
//   (and email where available) for electronic banking transactions; customer
//   liability depends on how fast an unauthorised transaction is reported,
//   which is why a working registered mobile matters.
// - The procedure to change the registered mobile (branch form, ATM, net
//   banking) is set by each bank; RBI does not prescribe one form or fee, so
//   the page says "bank ke niyam".
// - Aadhaar mobile update is separate and done at an Aadhaar centre
//   (uidai.gov.in / myaadhaar.uidai.gov.in), see /service/aadhaar-mobile-update.
// - Reserve Bank Integrated Ombudsman Scheme 2026 (from 1 Jul 2026):
//   cms.rbi.org.in, 14448, after complaining to the bank first.
export const mobileNumberChangeBankApplication: Letter = {
  slug: "mobile-number-change-bank-application",
  category: "bank",
  emoji: "📱",
  title: "Bank Mobile Number Change Application in Hindi 2026: मोबाइल नंबर बदलने का आवेदन",
  description: "बैंक खाते में रजिस्टर्ड मोबाइल नंबर बदलने/जोड़ने का तैयार आवेदन पत्र (हिंदी/English)। पुराना नंबर बंद हो तो क्या करें, कौन से कागज़ लगें, ठगी से बचाव।",
  h1: "बैंक में मोबाइल नंबर बदलने का आवेदन पत्र 2026",
  short: { hi: "बैंक में मोबाइल नंबर बदलने का आवेदन", en: "Bank mobile number change" },
  lead: "बैंक खाते में दर्ज (registered) मोबाइल नंबर पर ही OTP, लेन-देन के SMS और UPI चलते हैं। नंबर बदलना हो या पुराना सिम बंद हो गया हो, तो <strong>होम ब्रांच के शाखा प्रबंधक</strong> को लिखित आवेदन दें और पहचान पत्र दिखाएं। कुछ बैंक ATM या नेट बैंकिंग से भी नंबर बदलने देते हैं। RBI के नियम से बैंक लेन-देन के SMS अलर्ट के लिए मोबाइल नंबर दर्ज करवाते हैं, इसलिए चालू नंबर रखना आपकी सुरक्षा के लिए ज़रूरी है।",
  facts: [
    ["किसे दें", "होम ब्रांच के शाखा प्रबंधक को"],
    ["साथ ले जाएं", "मूल पहचान पत्र, पासबुक और नया मोबाइल"],
    ["फीस", "बैंक के नियम अनुसार; आम तौर पर कोई चार्ज नहीं (बैंक से पूछें)"],
    ["आधार का नंबर", "अलग से आधार केंद्र पर बदलता है"],
  ],
  to: "जिस ब्रांच में खाता है, उसके <strong>शाखा प्रबंधक (Branch Manager)</strong> को। सुरक्षा के कारण ज़्यादातर बैंक खाताधारक को खुद ब्रांच बुलाते हैं।",
  when: [
    "पुराना सिम खो गया, बंद हो गया या नंबर बदल लिया",
    "खाते में अभी तक कोई मोबाइल नंबर दर्ज नहीं है",
    "OTP और लेन-देन के SMS नहीं आ रहे",
    "UPI ऐप चलाने के लिए बैंक में नया नंबर जोड़ना है",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक का नाम", en: "Bank name" }, required: true },
    { key: "branch", label: { hi: "ब्रांच का नाम और पता", en: "Branch name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "खाताधारक का नाम", en: "Account holder name" }, required: true },
    { key: "acct", label: { hi: "खाता संख्या के आखिरी 4 अंक", en: "Last 4 digits of account number" }, type: "number", required: true, hint: { hi: "पूरा खाता नंबर प्रिंट के बाद हाथ से लिखें", en: "Write the full number by hand on the printout" } },
    { key: "request", label: { hi: "क्या करवाना है", en: "Request" }, type: "select", required: true, options: [
      { hi: "पंजीकृत मोबाइल नंबर बदलना", en: "change of registered mobile number" },
      { hi: "खाते में नया मोबाइल नंबर जोड़ना (अभी कोई नंबर दर्ज नहीं है)", en: "registration of a mobile number (no number registered at present)" },
    ] },
    { key: "oldno", label: { hi: "पुराना नंबर (हो तो)", en: "Old number (if any)" }, type: "tel", placeholder: { hi: "न हो तो खाली छोड़ें", en: "Leave blank if none" } },
    { key: "newno", label: { hi: "नया मोबाइल नंबर", en: "New mobile number" }, type: "tel", required: true, hint: { hi: "नंबर अपने नाम का और चालू हो", en: "Should be active and preferably in your name" } },
    { key: "why", label: { hi: "कारण", en: "Reason" }, type: "select", required: true, options: [
      { hi: "पुराना सिम खो गया/बंद हो गया है", en: "my old SIM has been lost/deactivated" },
      { hi: "मैंने नया नंबर ले लिया है", en: "I have taken a new number" },
      { hi: "अभी तक खाते में नंबर दर्ज नहीं था", en: "no number was registered with the account" },
    ] },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}},
{{branch}}

विषय: खाते में पंजीकृत मोबाइल नंबर बदलने/दर्ज करने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, आपकी शाखा में बचत खाता संख्या ____________________ (अंतिम 4 अंक {{acct}}) का खाताधारक/खाताधारिका हूं। मेरा अनुरोध है: {{request}}।

पुराना मोबाइल नंबर: {{oldno}}
नया मोबाइल नंबर: {{newno}}

कारण: {{why}}। कृपया मेरे खाते, ATM/डेबिट कार्ड, नेट/मोबाइल बैंकिंग और SMS अलर्ट के लिए ऊपर दिया नया नंबर दर्ज करें और पुराना नंबर हटा दें।

मैं पुष्टि करता/करती हूं कि नया नंबर मेरे उपयोग में है और इस अनुरोध के कारण होने वाले किसी भी लेन-देन की जानकारी मुझे इसी नंबर पर दी जाए।

धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर – बैंक में दर्ज नमूना हस्ताक्षर जैसे)
नाम: {{name}}
पता: {{address}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: पहचान पत्र की स्व-प्रमाणित कॉपी, पासबुक के पहले पेज की कॉपी`,
    en: `To,
The Branch Manager,
{{bank}},
{{branch}}

Subject: Request for change/registration of mobile number in my account

Sir/Madam,

I, {{name}}, hold savings account no. ____________________ (last 4 digits {{acct}}) at your branch. My request is: {{request}}.

Old mobile number: {{oldno}}
New mobile number: {{newno}}

Reason: {{why}}. Kindly register the new number above for my account, ATM/debit card, net/mobile banking and SMS alerts, and remove the old number.

I confirm that the new number is in my use and that all alerts may be sent to this number.

Thank you.

Yours faithfully,

(Signature – as per specimen signature with the bank)
Name: {{name}}
Address: {{address}}

Place: {{place}}
Date: {{date}}

Enclosures: Self-attested copy of ID proof, copy of passbook first page`,
  },
  attach: [
    "पहचान पत्र (आधार/पैन/वोटर ID) की स्व-प्रमाणित कॉपी; मूल साथ ले जाएं",
    "पासबुक के पहले पेज की कॉपी",
    "नया मोबाइल साथ रखें; कई बैंक उसी समय OTP भेजकर नंबर जांचते हैं",
  ],
  submit: [
    "पत्र प्रिंट करें, पूरा खाता नंबर हाथ से लिखें और बैंक में दर्ज जैसे हस्ताक्षर करें।",
    "खुद ब्रांच जाएं; किसी और के हाथ भेजने पर बैंक आम तौर पर नंबर नहीं बदलता।",
    "जमा करके कॉपी पर <strong>रिसीविंग</strong> लें। नंबर बदलते ही नए नंबर पर SMS आता है; न आए तो ब्रांच से पूछें।",
    "नंबर बदलने के बाद UPI ऐप में दोबारा रजिस्टर करें।",
    'देरी हो तो लिखित शिकायत करें; 30 दिन में हल न हो तो RBI लोकपाल को <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">cms.rbi.org.in</a> पर मुफ्त शिकायत करें (हेल्पलाइन 14448)।',
  ],
  tips: [
    "पुराना सिम खोया हो तो पहले मोबाइल कंपनी से उसे बंद करवाएं, ताकि किसी और के हाथ OTP न जाए।",
    "'बैंक से बोल रहा हूं, नंबर अपडेट करना है' वाले फोन पर OTP या कार्ड की जानकारी न दें। नंबर बदलना ब्रांच/आधिकारिक ऐप से ही करें।",
    "बैंक का नंबर और आधार का नंबर अलग-अलग जगह बदलते हैं; दोनों एक जैसे रखें तो सब्सिडी और e-KYC में आसानी होती है।",
    "पत्र में PIN, OTP या पूरा कार्ड नंबर न लिखें।",
  ],
  notice: "कई बैंक मोबाइल नंबर बदलने के लिए अपना फॉर्म भरवाते हैं और खाताधारक को खुद आने को कहते हैं। ऐसा हो तो यह पत्र साथ लगा दें।",
  official: [
    { href: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040", title: "RBI: SMS अलर्ट और अनधिकृत लेन-देन पर ग्राहक की ज़िम्मेदारी (2017)" },
    { href: "https://uidai.gov.in/", title: "UIDAI", note: "आधार में मोबाइल नंबर अपडेट अलग से" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (CMS)" },
  ],
  related: ["/service/aadhaar-mobile-update.html", "/service/upi-payments.html", "/service/pm-jan-dhan-yojana.html"],
  faq: [
    { q: "बैंक में मोबाइल नंबर कैसे बदलें?", a: "होम ब्रांच में शाखा प्रबंधक को आवेदन या बैंक का फॉर्म दें, पहचान पत्र दिखाएं। कुछ बैंक ATM या नेट बैंकिंग से भी नंबर बदलने देते हैं।" },
    { q: "पुराना नंबर बंद है, OTP नहीं आता, क्या करें?", a: "ऐसे में ब्रांच जाना ही रास्ता है। पहचान पत्र और पासबुक लेकर जाएं; बैंक आपकी पहचान जांचकर नया नंबर दर्ज करता है।" },
    { q: "क्या आधार में नंबर बदलने से बैंक में भी बदल जाता है?", a: "नहीं। आधार का नंबर आधार केंद्र पर और बैंक का नंबर बैंक में अलग-अलग बदलना पड़ता है।" },
    { q: "नंबर बदलने में कितना समय लगता है?", a: "कई बैंकों में उसी दिन या 1-2 कार्य दिवस में। नए नंबर पर पुष्टि का SMS आता है।" },
    { q: "क्या किसी और के नाम का सिम दर्ज करवा सकते हैं?", a: "बैंक के नियम पर निर्भर है; कई बैंक परिवार के सदस्य का नंबर स्वीकार करते हैं, पर सुरक्षा के लिए अपने नाम का नंबर बेहतर है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
