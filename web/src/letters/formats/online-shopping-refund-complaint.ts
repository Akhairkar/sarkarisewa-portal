import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Consumer Protection (E-Commerce) Rules 2020 (Dept of Consumer Affairs;
//   summaries by Lakshmikumaran & Sridharan, IndiaLaw): every e-commerce
//   entity must appoint a Grievance Officer and display contact details;
//   complaints acknowledged within 48 hours and redressed within one month
//   of receipt; no refusal to take back defective / deficient / late /
//   wrong goods or to refund them as per stated policy; no cancellation
//   charges unless the platform bears similar charges.
// - consumerhelpline.gov.in: NCH toll-free 1915 (8 AM-8 PM), WhatsApp
//   8800001915; e-commerce companies are NCH convergence partners.
// - e-jagriti.gov.in: online case before Consumer Commission; Consumer
//   Protection Act 2019 s.69 two-year limitation.
// Rule sub-numbers are not quoted on the page to avoid mis-citation.
export const onlineShoppingRefundComplaint: Letter = {
  slug: "online-shopping-refund-complaint",
  category: "complaint",
  emoji: "📦",
  title: "Online Shopping Refund Complaint Format 2026: रिफंड शिकायत पत्र",
  description: "ऑनलाइन खरीदारी में रिफंड, रिटर्न या गलत सामान की शिकायत का तैयार पत्र (हिंदी/English): Grievance Officer को ईमेल, फिर हेल्पलाइन 1915 और उपभोक्ता आयोग।",
  h1: "ऑनलाइन शॉपिंग रिफंड शिकायत पत्र 2026: कंपनी के Grievance Officer को लिखें",
  short: { hi: "ऑनलाइन रिफंड शिकायत", en: "Online refund complaint" },
  lead: "ऑनलाइन ऑर्डर का पैसा वापस न आए, गलत/खराब सामान आए या रिटर्न न लिया जाए, तो कंपनी के <strong>Grievance Officer</strong> को लिखित शिकायत (ईमेल) करें। उपभोक्ता संरक्षण (ई-कॉमर्स) नियम 2020 के अनुसार हर ई-कॉमर्स कंपनी को शिकायत <strong>48 घंटे में स्वीकार</strong> और <strong>1 महीने में हल</strong> करनी होती है। हल न हो तो <strong>राष्ट्रीय उपभोक्ता हेल्पलाइन 1915</strong> और फिर उपभोक्ता आयोग में जाएं।",
  facts: [
    ["किसे लिखें", "ई-कॉमर्स कंपनी का Grievance Officer (पता वेबसाइट/ऐप पर)"],
    ["कंपनी का समय", "48 घंटे में पावती, 1 महीने में हल"],
    ["हेल्पलाइन", '<a href="tel:1915">1915</a>, WhatsApp 8800001915'],
    ["आगे का रास्ता", 'जिला उपभोक्ता आयोग, <a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener nofollow">e-Jagriti</a> से ऑनलाइन'],
  ],
  to: "ई-कॉमर्स कंपनी के <strong>Grievance Officer (शिकायत अधिकारी)</strong> को। नियम के अनुसार उनका नाम, पद और ईमेल कंपनी की वेबसाइट/ऐप पर (अक्सर \"Contact Us\" या \"Grievance Redressal\" पेज पर) दिखाना ज़रूरी है। सामान किसी दूसरे विक्रेता (seller) का हो तो उसका नाम भी पत्र में लिखें।",
  when: [
    "ऑर्डर कैंसिल या रिटर्न हुआ, लेकिन रिफंड नहीं आया",
    "गलत, टूटा, नकली या इस्तेमाल किया हुआ सामान मिला",
    "\"डिलीवर्ड\" दिखा, पर सामान मिला ही नहीं",
    "रिटर्न/बदलने का अनुरोध बिना कारण ठुकरा दिया गया",
  ],
  fields: [
    { key: "company", label: { hi: "कंपनी का नाम (और Grievance Officer का नाम, अगर पता हो)", en: "Company name (and Grievance Officer's name, if known)" }, required: true, placeholder: { hi: "जैसे: XYZ ऑनलाइन प्रा. लि.", en: "e.g. XYZ Online Pvt Ltd" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "phone", label: { hi: "रजिस्टर्ड मोबाइल नंबर", en: "Registered mobile number" }, type: "tel", required: true },
    { key: "email", label: { hi: "रजिस्टर्ड ईमेल", en: "Registered email" } },
    { key: "orderid", label: { hi: "ऑर्डर ID", en: "Order ID" }, required: true },
    { key: "product", label: { hi: "सामान का नाम और विक्रेता (seller)", en: "Product name and seller" }, required: true },
    { key: "orderdate", label: { hi: "ऑर्डर की तारीख", en: "Order date" }, required: true },
    { key: "amount", label: { hi: "रकम (₹)", en: "Amount (Rs)" }, type: "number", required: true },
    { key: "paymode", label: { hi: "भुगतान का तरीका", en: "Payment mode" }, type: "select", options: [
      { hi: "UPI", en: "UPI" },
      { hi: "डेबिट/क्रेडिट कार्ड", en: "debit/credit card" },
      { hi: "नेट बैंकिंग", en: "net banking" },
      { hi: "कैश ऑन डिलीवरी", en: "cash on delivery" },
      { hi: "वॉलेट", en: "wallet" },
    ] },
    { key: "issue", label: { hi: "समस्या", en: "Issue" }, type: "select", required: true, options: [
      { hi: "ऑर्डर रिटर्न/कैंसिल होने के बाद भी रिफंड नहीं मिला", en: "refund not received even after the order was returned/cancelled" },
      { hi: "गलत या खराब सामान मिला और रिटर्न नहीं लिया जा रहा", en: "wrong or defective product received and return is being refused" },
      { hi: "ऑर्डर \"डिलीवर्ड\" दिखाया गया, पर सामान नहीं मिला", en: "order shown as delivered but not received" },
      { hi: "नकली/इस्तेमाल किया हुआ सामान मिला", en: "fake/used product received" },
    ] },
    { key: "details", label: { hi: "पूरा विवरण और पिछली शिकायत/टिकट नंबर", en: "Details and earlier complaint / ticket no." }, type: "textarea", required: true, placeholder: { hi: "12/09 को पिकअप हुआ, 7 दिन में रिफंड बताया था। टिकट नं. 98765 पर 3 बार बात की...", en: "Picked up on 12/09, refund promised in 7 days. Spoke 3 times on ticket 98765..." } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शिकायत अधिकारी (Grievance Officer),
{{company}}

विषय: ऑर्डर ID {{orderid}} – {{issue}}

महोदय/महोदया,

मैंने दिनांक {{orderdate}} को आपके प्लेटफॉर्म से {{product}} ऑर्डर किया था (ऑर्डर ID: {{orderid}}), जिसके लिए ₹{{amount}} का भुगतान {{paymode}} से किया गया।

शिकायत: {{issue}}।

विवरण:
{{details}}

उपभोक्ता संरक्षण (ई-कॉमर्स) नियम 2020 के अनुसार आपके द्वारा शिकायत 48 घंटे में स्वीकार कर एक महीने के अंदर हल की जानी चाहिए, और खराब/गलत सामान वापस लेने या रिफंड देने से मना नहीं किया जा सकता।

अतः अनुरोध है कि मेरी पूरी रकम ₹{{amount}} मूल भुगतान माध्यम में तुरंत वापस की जाए / सही सामान दिया जाए, और शिकायत संख्या के साथ मुझे लिखित जवाब दिया जाए।

समाधान न होने पर मैं राष्ट्रीय उपभोक्ता हेल्पलाइन (1915) और जिला उपभोक्ता आयोग में शिकायत करने के लिए बाध्य होऊंगा/होऊंगी।

भवदीय,

नाम: {{name}}
रजिस्टर्ड मोबाइल: {{phone}}
ईमेल: {{email}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: ऑर्डर/इनवॉइस, भुगतान का प्रमाण, रिटर्न पिकअप रसीद, फोटो/वीडियो, चैट के स्क्रीनशॉट`,
    en: `To,
The Grievance Officer,
{{company}}

Subject: Order ID {{orderid}} – {{issue}}

Sir/Madam,

On {{orderdate}} I ordered {{product}} on your platform (Order ID: {{orderid}}) and paid Rs {{amount}} by {{paymode}}.

Complaint: {{issue}}.

Details:
{{details}}

Under the Consumer Protection (E-Commerce) Rules, 2020, you are required to acknowledge a complaint within 48 hours and redress it within one month, and you cannot refuse to take back defective/wrong goods or to refund the amount.

I therefore request you to refund the full amount of Rs {{amount}} to the original payment mode immediately / deliver the correct product, and to reply to me in writing with a complaint number.

If the matter is not resolved, I shall be constrained to approach the National Consumer Helpline (1915) and the District Consumer Commission.

Yours faithfully,

Name: {{name}}
Registered mobile: {{phone}}
Email: {{email}}

Place: {{place}}
Date: {{date}}

Enclosures: order/invoice, proof of payment, return pickup receipt, photos/video, chat screenshots`,
  },
  attach: [
    "ऑर्डर का स्क्रीनशॉट और इनवॉइस",
    "भुगतान का प्रमाण (UPI ट्रांज़ैक्शन ID / बैंक स्टेटमेंट)",
    "रिटर्न पिकअप या कैंसिलेशन का मैसेज",
    "गलत/खराब सामान का अनबॉक्सिंग वीडियो या फोटो",
    "कस्टमर केयर चैट/ईमेल और टिकट नंबर",
  ],
  submit: [
    "पहले ऐप/वेबसाइट के हेल्प सेक्शन में शिकायत करें और टिकट नंबर लें।",
    "हल न हो तो यही पत्र कंपनी के <strong>Grievance Officer के ईमेल</strong> पर भेजें (पता वेबसाइट के Contact/Grievance पेज पर)। ईमेल की कॉपी संभालें।",
    "48 घंटे में पावती या एक महीने में हल न मिले तो <strong>राष्ट्रीय उपभोक्ता हेल्पलाइन</strong> पर शिकायत करें: 1915, WhatsApp 8800001915 या consumerhelpline.gov.in। ऑर्डर ID और कंपनी को भेजा पत्र साथ दें।",
    'फिर भी हल न हो तो <a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener nofollow">e-Jagriti</a> से जिला उपभोक्ता आयोग में केस करें।',
    "अगर पैसा कट गया पर ऑर्डर बना ही नहीं, तो अपने बैंक/UPI ऐप में भी शिकायत करें।",
  ],
  tips: [
    "पत्र में कभी पूरा कार्ड नंबर, CVV, PIN या OTP न लिखें; सिर्फ ऑर्डर ID और UPI ट्रांज़ैक्शन ID काफी है।",
    "\"रिफंड के लिए\" कॉल करने वाले किसी नंबर पर भरोसा न करें; असली कंपनी OTP या स्क्रीन शेयर ऐप नहीं मांगती।",
    "कस्टमर केयर का नंबर सिर्फ कंपनी के ऐप/वेबसाइट से लें, गूगल सर्च से नहीं।",
    "महंगा सामान खोलते समय वीडियो बनाएं; गलत सामान के दावे में यह सबसे पक्का सबूत है।",
  ],
  notice: "रिफंड के नाम पर ठगी आम है। कोई भी आपसे OTP, UPI PIN या \"रिफंड लेने के लिए\" QR स्कैन करवाए तो वह ठग है। ठगी हो जाए तो तुरंत 1930 पर कॉल करें।",
  official: [
    { href: "https://consumerhelpline.gov.in/", title: "राष्ट्रीय उपभोक्ता हेल्पलाइन (NCH)", note: "1915 / WhatsApp 8800001915" },
    { href: "https://e-jagriti.gov.in/", title: "e-Jagriti", note: "उपभोक्ता आयोग में ऑनलाइन केस" },
  ],
  related: ["/service/consumer-grievance-redressal.html", "/service/upi-payments.html"],
  faq: [
    { q: "ऑनलाइन रिफंड न आए तो शिकायत कहां करें?", a: "पहले कंपनी के ऐप में, फिर कंपनी के Grievance Officer को ईमेल। हल न हो तो राष्ट्रीय उपभोक्ता हेल्पलाइन 1915 / WhatsApp 8800001915 पर।" },
    { q: "ई-कॉमर्स कंपनी को शिकायत कितने दिन में हल करनी होती है?", a: "उपभोक्ता संरक्षण (ई-कॉमर्स) नियम 2020 के अनुसार 48 घंटे में शिकायत स्वीकार करनी और 1 महीने में हल करनी होती है।" },
    { q: "Grievance Officer का ईमेल कहां मिलेगा?", a: "कंपनी की वेबसाइट या ऐप के \"Contact Us\", \"Grievance Redressal\" या \"Terms\" पेज पर। नियम के अनुसार यह जानकारी दिखाना ज़रूरी है।" },
    { q: "क्या हेल्पलाइन 1915 पैसा वापस दिला सकती है?", a: "हेल्पलाइन शिकायत कंपनी तक पहुंचाकर हल कराने की कोशिश करती है; बहुत से मामले यहीं सुलझ जाते हैं। यह अदालत नहीं है, इसलिए हल न हो तो उपभोक्ता आयोग में केस करना पड़ता है।" },
    { q: "UPI से पैसा कटा पर ऑर्डर नहीं बना, क्या करें?", a: "ऐसे पैसे अक्सर अपने आप वापस आ जाते हैं। न आएं तो UPI ऐप/बैंक में ट्रांज़ैक्शन ID के साथ शिकायत करें, और कंपनी को भी लिखें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
