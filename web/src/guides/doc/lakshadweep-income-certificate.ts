import type { DocGuide } from "./types";

// Sources (checked 13-14 Oct 2026):
// - lakshadweep.gov.in/department-of-revenue/ (last updated Oct 2026):
//   Revenue Department at Kavaratti headed by the ADM; Deputy Collectors /
//   BDOs in the Revenue Sub-Divisions of each island; certificates issued
//   "through both online and offline platforms"; Income Certificate
//   (Individual) and Income Certificate (Family) available through the
//   National Government Service Portal https://serviceonline.gov.in; contact
//   Collectorate, Revenue Bhavan, Kavaratti 682555, addl.dm-lk[at]nic[dot]in,
//   04896-262384, 04896-263440.
// - lakshadweep.gov.in/service/revenue-servicen/: "Income Certificate
//   Individual" and "Income Certificate Family" linked to serviceonline.gov.in.
// - serviceonline.gov.in home page (ServicePlus): Registration, Login, Track
//   Application.
// Left out (not confirmable): fee, time limit, validity, document list, the
// exact signing officer, EWS rules. The old description's "e-District
// Lakshadweep Portal" and "शुल्क ₹20" could not be confirmed and were removed.
export const lakshadweepIncomeCertificate: DocGuide = {
  state: { slug: "lakshadweep", hi: "लक्षद्वीप" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Lakshadweep Income Certificate 2026: Apply Online",
  description: "लक्षद्वीप आय प्रमाण पत्र 2026: Individual और Family आय प्रमाण पत्र का आवेदन राष्ट्रीय सेवा पोर्टल serviceonline.gov.in पर, स्टेटस और राजस्व विभाग से मदद।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "लक्षद्वीप आय प्रमाण पत्र 2026: Individual या Family, serviceonline.gov.in पर आवेदन और स्टेटस",
  lead: "लक्षद्वीप में आय प्रमाण पत्र प्रशासन का राजस्व विभाग देता है। विभाग के अनुसार <strong>Income Certificate (Individual)</strong> और <strong>Income Certificate (Family)</strong> दोनों का आवेदन राष्ट्रीय सेवा पोर्टल <strong>serviceonline.gov.in</strong> (ServicePlus) पर होता है। ऑनलाइन में दिक्कत हो तो अपने द्वीप के राजस्व उप-मंडल में डिप्टी कलेक्टर/BDO कार्यालय से मदद लें।",
  facts: [
    ["पोर्टल", '<a href="https://serviceonline.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.gov.in</a>'],
    ["प्रकार", "Individual (व्यक्तिगत) और Family (परिवार)"],
    ["द्वीप पर", "डिप्टी कलेक्टर / BDO (राजस्व उप-मंडल)"],
    ["संपर्क", "04896-262384, 04896-263440"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "Individual या Family: कौन सा आय प्रमाण पत्र चाहिए",
      table: {
        head: ["सेवा", "कब चुनें"],
        rows: [
          ["<strong>Income Certificate (Individual)</strong>", "जब सिर्फ आवेदक की अपनी आय का प्रमाण मांगा गया हो"],
          ["<strong>Income Certificate (Family)</strong>", "जब परिवार की कुल आय मांगी गई हो, जैसे ज़्यादातर छात्रवृत्ति और कल्याण योजनाओं में"],
        ],
      },
      callout: { kind: "info", html: "फॉर्म या विज्ञापन में साफ लिखा होता है कि आवेदक की आय चाहिए या परिवार की। उसी के हिसाब से सेवा चुनें; गलत प्रकार का प्रमाण पत्र लौटाया जा सकता है। EWS आरक्षण के लिए साधारण आय प्रमाण पत्र नहीं, तय प्रारूप वाला Income & Asset Certificate चाहिए; इसके लिए राजस्व कार्यालय से पूछें।" },
    },
    {
      id: "online",
      title: "serviceonline.gov.in पर आवेदन",
      steps: [
        '<a href="https://serviceonline.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.gov.in</a> खोलें। लक्षद्वीप प्रशासन की वेबसाइट पर राजस्व सेवाओं के सामने यही लिंक दिया गया है।',
        "पहली बार हैं तो <strong>Registration</strong> से अकाउंट बनाएं, फिर Login ID और पासवर्ड से लॉगिन करें।",
        "लक्षद्वीप की <strong>Income Certificate (Individual)</strong> या <strong>Income Certificate (Family)</strong> सेवा चुनें।",
        "फॉर्म भरें, आय का ब्योरा दें और पोर्टल पर मांगे गए कागज़ अपलोड करें; फीस दिखे तो भरें।",
        "आवेदन जमा करके पावती/आवेदन संख्या संभाल कर रखें।",
      ],
      html: "<p>ServicePlus पर कई राज्यों की सेवाएं हैं। सही सेवा चुनते समय ध्यान रखें कि वह लक्षद्वीप की हो।</p>",
    },
    {
      id: "kagaz",
      title: "आम तौर पर कौन से कागज़ तैयार रखें",
      intro: "कागज़ों की आधिकारिक सूची पोर्टल पर आवेदन फॉर्म में ही दिखती है। आम तौर पर ये चीज़ें काम आती हैं:",
      list: [
        "आवेदक की फोटो और पहचान पत्र (जैसे आधार), और Resident ID Card अगर हो।",
        "राशन कार्ड (Family प्रमाण पत्र में परिवार के सदस्यों के लिए)।",
        "आय का सबूत: नौकरी वालों के लिए वेतन पर्ची/वेतन प्रमाण पत्र, दूसरों के लिए आयकर रिटर्न या आय बताने वाला शपथ-पत्र, अगर पोर्टल मांगे।",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है, सिर्फ तैयारी के लिए है। पोर्टल या द्वीप का राजस्व कार्यालय जो कागज़ मांगे, वही मान्य है। शपथ-पत्र के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट</a>।" },
    },
    {
      id: "offline",
      title: "द्वीप पर राजस्व कार्यालय से मदद",
      intro: "राजस्व विभाग के अनुसार प्रमाण पत्र ऑनलाइन और ऑफलाइन दोनों तरह दिए जाते हैं। हर द्वीप के राजस्व उप-मंडल में <strong>डिप्टी कलेक्टर / खंड विकास अधिकारी (BDO)</strong> तैनात हैं; ऑनलाइन फॉर्म में दिक्कत हो तो वहीं संपर्क करें।",
    },
    {
      id: "status",
      title: "फीस, समय सीमा, वैधता और स्टेटस",
      list: [
        "<strong>स्टेटस:</strong> serviceonline.gov.in के होमपेज पर <strong>Track Application</strong> से, या लॉगिन करके अपने आवेदन देखें।",
        "<strong>फीस और समय सीमा:</strong> राजस्व विभाग के पेज पर इनका ब्योरा नहीं है। पोर्टल पर आवेदन के समय फीस दिखेगी; समय सीमा अपने राजस्व कार्यालय से पूछें।",
        "<strong>वैधता:</strong> विभाग के पेज पर वैधता अवधि नहीं लिखी। आय हर साल बदल सकती है, इसलिए छात्रवृत्ति या योजना के फॉर्म में जितना नया प्रमाण पत्र मांगा जाए, उसी हिसाब से नया बनवाएं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["Individual की जगह Family (या उल्टा) चुना", "फॉर्म/विज्ञापन में जो मांगा है वही प्रकार चुनें"],
          ["आय का सबूत नहीं", "वेतन पर्ची, ITR या पोर्टल पर मांगा गया शपथ-पत्र लगाएं"],
          ["गलत राज्य की सेवा चुनी", "ServicePlus पर लक्षद्वीप की सेवा ही चुनें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पहले अपने द्वीप के डिप्टी कलेक्टर/BDO कार्यालय से संपर्क करें। मुख्यालय: कलेक्ट्रेट, राजस्व भवन, कवरत्ती 682555; फोन 04896-262384, 04896-263440; ईमेल addl.dm-lk[at]nic[dot]in (ये संपर्क राजस्व विभाग के आधिकारिक पेज पर दिए हैं)।",
    },
  ],
  official: [
    { href: "https://serviceonline.gov.in/", title: "राष्ट्रीय सेवा पोर्टल ServicePlus (आवेदन, Track Application)" },
    { href: "https://lakshadweep.gov.in/department-of-revenue/", title: "लक्षद्वीप राजस्व विभाग: सेवाएं और संपर्क" },
    { href: "https://lakshadweep.gov.in/service/revenue-servicen/", title: "लक्षद्वीप राजस्व सेवाओं के लिंक" },
  ],
  faq: [
    { q: "लक्षद्वीप में आय प्रमाण पत्र ऑनलाइन कहां बनता है?", a: "लक्षद्वीप राजस्व विभाग के अनुसार Income Certificate (Individual) और (Family) का आवेदन राष्ट्रीय सेवा पोर्टल serviceonline.gov.in पर होता है।" },
    { q: "Individual और Family आय प्रमाण पत्र में क्या फर्क है?", a: "Individual में सिर्फ आवेदक की आय लिखी जाती है, Family में परिवार की कुल आय। छात्रवृत्ति और योजनाओं में आम तौर पर परिवार की आय मांगी जाती है; फॉर्म में लिखी शर्त देखें।" },
    { q: "आय प्रमाण पत्र की फीस और समय सीमा क्या है?", a: "राजस्व विभाग के पेज पर फीस और समय सीमा नहीं लिखी है। पोर्टल पर आवेदन के समय फीस दिखेगी; समय सीमा अपने द्वीप के राजस्व कार्यालय से पूछें।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "serviceonline.gov.in के होमपेज पर Track Application से, या लॉगिन करके।" },
  ],
  related: [
    { href: "/states/lakshadweep-caste-certificate.html", emoji: "📜", title: "लक्षद्वीप जाति (ST) प्रमाण पत्र", text: "serviceonline.gov.in पर आवेदन" },
    { href: "/states/lakshadweep-domicile-certificate.html", emoji: "🏠", title: "लक्षद्वीप निवास प्रमाण पत्र", text: "Domicile / Nativity" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://serviceonline.gov.in/", label: "📝 serviceonline.gov.in पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
