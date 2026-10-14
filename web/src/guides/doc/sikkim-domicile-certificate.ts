import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - Sikkim GO single sign-on portal sso.sikkim.gov.in (login page, opened
//   directly): linked service sub-portals include incomecertificate, sc, st,
//   obc, primitivetribe, marriagecertificate, unmarriedcertificate,
//   statequota and others; no Certificate of Identification (COI) or
//   residential/domicile certificate service is linked on 14 Oct 2026.
// - mangan.nic.in/service/certificate-of-identification/ (North District /
//   Mangan, page last updated 03.01.2019): COI documents: SSC/COI of guardian;
//   copy of parcha of applicant/guardian; proof of age (birth certificate,
//   school certificate, electoral identity card, age certificate);
//   unmarried certificate (three months validity) for unmarried women;
//   marriage certificate for married women from outside the state; death
//   certificate of guardian (if dead); photos: applicant 4, guardian 1;
//   dealing officer Additional District Collector; CA Section; 30 days;
//   phone 03592-234234.
// - mangan.nic.in/?p=2861 "Residence Certificate" (same district, 2019):
//   issued mainly for (I) higher education of children outside the state,
//   (II) recruitment in Army, (III) contractors' enlistment; application on
//   plain paper at the Single Window with SSC/COI of father (or SSC/COI for
//   contractors), date of birth certificate (for I and II), address proof if
//   residing elsewhere (EPIC, ration card), 2 photos; dealing officer DC; OS /
//   LDC; 1 hour.
// - Search extracts of non-official guides (1acre, wikiprocedure, vikaspedia
//   West Sikkim 2023) were not used as facts.
// Left out (not confirmable on a current official page): fee, online route,
// validity, whether other districts follow the same lists today. The old
// description's "ServicePlus Sikkim" and "official fee" were dropped.
export const sikkimDomicileCertificate: DocGuide = {
  state: { slug: "sikkim", hi: "सिक्किम" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Sikkim Domicile Certificate 2026: Apply & Status",
  description: "सिक्किम में डोमिसाइल की जगह COI (Certificate of Identification) और Residential Certificate: कौन से कागज़, ज़िला कलेक्टर कार्यालय की सिंगल विंडो और समय।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "सिक्किम COI और निवास (Residential) प्रमाण पत्र 2026: कागज़ और आवेदन",
  lead: "सिक्किम में अलग से 'डोमिसाइल' प्रमाण पत्र नहीं, बल्कि दो कागज़ चलते हैं: <strong>Certificate of Identification (COI)</strong>, जो सिक्किम सब्जेक्ट परिवारों के लोगों की पहचान का प्रमाण है, और <strong>Residential Certificate</strong>, जो राज्य के बाहर पढ़ाई, सेना भर्ती या ठेकेदार पंजीकरण के लिए दिया जाता है। दोनों ज़िले के <strong>डिस्ट्रिक्ट एडमिनिस्ट्रेटिव सेंटर</strong> (कलेक्टर कार्यालय) से बनते हैं; Sikkim GO पोर्टल पर हमें इनकी ऑनलाइन सेवा नहीं मिली।",
  facts: [
    ["मुख्य कागज़", "COI / Residential Certificate"],
    ["COI", "अतिरिक्त ज़िला कलेक्टर, 30 दिन"],
    ["Residential", "ज़िला कलेक्टर, सिंगल विंडो"],
    ["आधार कागज़", "पिता/अभिभावक का SSC या COI"],
  ],
  notice: "<strong>ध्यान दें:</strong> नीचे की कागज़ों की सूची और समय मंगन (उत्तर सिक्किम) ज़िले के आधिकारिक पेज से है, जो 2019 में अपडेट हुआ था। आपके ज़िले में सूची थोड़ी अलग हो सकती है; आवेदन से पहले कलेक्टर कार्यालय की सिंगल विंडो पर पूछ लें।",
  sections: [
    {
      id: "kya-hai",
      title: "COI और Residential Certificate में फर्क",
      table: {
        head: ["कागज़", "किसके लिए / कहां काम आता है"],
        rows: [
          ["<strong>Certificate of Identification (COI)</strong>", "जिनके परिवार का नाम सिक्किम सब्जेक्ट रजिस्टर में है या पिता/अभिभावक के पास SSC/COI है; राज्य की सरकारी नौकरी, ज़मीन के लेन-देन और सरकारी सेवाओं में मांगा जाता है"],
          ["<strong>Residential Certificate</strong>", "ज़िला पेज के अनुसार तीन कामों के लिए: (1) बच्चों की राज्य के बाहर उच्च शिक्षा, (2) सेना में भर्ती, (3) ठेकेदारों का पंजीकरण (Enlistment)"],
        ],
      },
      callout: { kind: "info", html: "SSC का मतलब है Sikkim Subject Certificate। जाति प्रमाण पत्र अलग है और Sikkim GO पोर्टल पर ऑनलाइन बनता है: <a href=\"/states/sikkim-caste-certificate.html\">सिक्किम जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "coi",
      title: "COI के लिए कागज़",
      intro: "मंगन ज़िले के पेज के अनुसार:",
      list: [
        "पिता/अभिभावक का <strong>SSC या COI</strong>",
        "आवेदक या अभिभावक के <strong>पर्चा (ज़मीन का कागज़)</strong> की कॉपी",
        "<strong>उम्र का प्रमाण:</strong> जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र, वोटर ID या आयु प्रमाण पत्र",
        "अविवाहित महिला: <strong>अविवाहित प्रमाण पत्र</strong> (3 महीने तक मान्य)",
        "राज्य के बाहर से शादी करके आई महिला: <strong>विवाह प्रमाण पत्र</strong>",
        "अभिभावक की मृत्यु हो गई हो: उनका <strong>मृत्यु प्रमाण पत्र</strong>",
        "पासपोर्ट साइज़ फोटो: आवेदक की 4, अभिभावक की 1",
      ],
      html: "<p>COI का काम <strong>अतिरिक्त ज़िला कलेक्टर (ADC)</strong> देखते हैं और ज़िला पेज पर समय <strong>30 दिन</strong> लिखा है। अविवाहित प्रमाण पत्र Sikkim GO पोर्टल (unmarriedcertificate सेवा) पर बनता है।</p>",
    },
    {
      id: "residential",
      title: "Residential Certificate के लिए कागज़",
      intro: "मंगन ज़िले के पेज के अनुसार आवेदन <strong>सादे कागज़</strong> पर लिखकर कलेक्टर कार्यालय की <strong>सिंगल विंडो</strong> पर जमा होता है:",
      table: {
        head: ["किस काम के लिए", "कागज़"],
        rows: [
          ["बच्चों की राज्य के बाहर उच्च शिक्षा", "आवेदन, पिता का SSC/COI, जन्म प्रमाण पत्र, कहीं और रहते हों तो पते का प्रमाण (वोटर ID या राशन कार्ड), 2 फोटो"],
          ["सेना में भर्ती", "ऊपर जैसे ही कागज़"],
          ["ठेकेदार पंजीकरण", "आवेदन, SSC/COI, पते का प्रमाण (वोटर ID या राशन कार्ड), 2 फोटो"],
        ],
      },
      html: "<p>ज़िला पेज पर यह प्रमाण पत्र <strong>ज़िला कलेक्टर (DC)</strong> के नाम से और समय <strong>1 घंटा</strong> लिखा है। फीस किसी आधिकारिक पेज पर हमें नहीं मिली।</p>",
    },
    {
      id: "kaise",
      title: "आवेदन कैसे करें",
      steps: [
        "अपने ज़िले के <strong>डिस्ट्रिक्ट एडमिनिस्ट्रेटिव सेंटर</strong> (कलेक्टर कार्यालय) की सिंगल विंडो पर जाएं।",
        "COI के लिए फॉर्म मांगें; Residential Certificate के लिए सादे कागज़ पर आवेदन लिखें।",
        "ऊपर दिए कागज़ों की फोटोकॉपी लगाएं और मूल कागज़ जांच के लिए साथ रखें।",
        "जमा करने की पावती लें और बताई गई तारीख पर प्रमाण पत्र लें।",
      ],
      html: "<p>मंगन (उत्तर सिक्किम) ADC कार्यालय का फोन: 03592-234234 (ज़िला पेज)।</p>",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पिता/अभिभावक का SSC या COI नहीं लगा", "परिवार के SSC/COI की कॉपी लगाएं; न हो तो सिंगल विंडो पर पूछें कि कौन सा रिकॉर्ड चलेगा"],
          ["अविवाहित प्रमाण पत्र 3 महीने से पुराना", "नया अविवाहित प्रमाण पत्र बनवाएं"],
          ["बाहर से शादी करके आई महिला का विवाह प्रमाण पत्र नहीं", "विवाह प्रमाण पत्र बनवाकर लगाएं"],
          ["उम्र या पते के कागज़ में नाम अलग", "सभी कागज़ों में एक जैसा नाम कराएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://mangan.nic.in/service/certificate-of-identification/", title: "Certificate of Identification: कागज़ और समय (ज़िला मंगन)" },
    { href: "https://mangan.nic.in/?p=2861", title: "Residence Certificate: कागज़ और समय (ज़िला मंगन)" },
    { href: "https://sso.sikkim.gov.in/", title: "Sikkim GO (राज्य की ऑनलाइन सेवाएं)" },
  ],
  faq: [
    { q: "सिक्किम में डोमिसाइल प्रमाण पत्र किसे कहते हैं?", a: "सिक्किम में स्थायी निवासी की पहचान के लिए Certificate of Identification (COI) चलता है। राज्य के बाहर पढ़ाई, सेना भर्ती या ठेकेदार पंजीकरण के लिए अलग Residential Certificate मिलता है।" },
    { q: "COI कौन देता है और कितने दिन लगते हैं?", a: "मंगन ज़िले के पेज के अनुसार अतिरिक्त ज़िला कलेक्टर, और समय 30 दिन।" },
    { q: "COI के लिए सबसे ज़रूरी कागज़ क्या है?", a: "पिता/अभिभावक का SSC या COI और पर्चा (ज़मीन का कागज़), साथ में उम्र का प्रमाण और फोटो।" },
    { q: "क्या COI ऑनलाइन बनता है?", a: "14 अक्टूबर 2026 को Sikkim GO पोर्टल पर हमें COI या Residential Certificate की ऑनलाइन सेवा नहीं मिली। अपने ज़िले के कलेक्टर कार्यालय की सिंगल विंडो पर आवेदन करें।" },
  ],
  related: [
    { href: "/states/sikkim-caste-certificate.html", emoji: "📜", title: "सिक्किम जाति प्रमाण पत्र", text: "SC/ST/OBC, Sikkim GO पर" },
    { href: "/states/sikkim-income-certificate.html", emoji: "💰", title: "सिक्किम आय प्रमाण पत्र", text: "Sikkim GO पर ऑनलाइन" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://mangan.nic.in/service/certificate-of-identification/", label: "📋 COI के कागज़" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
