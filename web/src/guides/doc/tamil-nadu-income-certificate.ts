import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; tnesevai.tn.gov.in did not open from our
// checker, so we used district NIC pages and search extracts):
// - chennai.nic.in/work-flow/ ("Certificate issuing authority", Chennai
//   district): Income Certificate CSC -> VAO -> RI -> Zonal Deputy Tahsildar,
//   based on current address; Agricultural Income Certificate same chain.
// - chennai.nic.in/esevai-test/ (Chennai district e-service list): income
//   certificate attachments (photo, any address proof, self-declaration
//   mandatory; latest salary certificate optional; the list also names a
//   community certificate of a family member); agricultural income certificate
//   (photo, address proof, last one year adangal, self-declaration, chitta;
//   optional lease NOC); OBC certificate takes ITR / payslip / income proof.
// - ariyalur.nic.in, nilgiris.nic.in, kallakurichi.nic.in, pudukkottai.nic.in
//   "TN e-Sevai Portal" pages: citizens can apply / download income, community,
//   nativity, OBC and other revenue certificates at tnesevai.tn.gov.in/Citizen/.
// - Search result for tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml ("Verify
//   Certificate - Tamil Nadu e-District").
// Left out (not confirmable on an official page we could open): the fee (old
// page said Rs 60; third-party sources differ), a time limit in days, the
// validity period, a helpline number.
export const tamilNaduIncomeCertificate: DocGuide = {
  state: { slug: "tamil-nadu", hi: "तमिलनाडु" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Tamil Nadu Income Certificate 2026: Apply Online",
  description: "Tamil Nadu (तमिलनाडु) आय प्रमाण पत्र 2026: TN e-Sevai पोर्टल या e-Sevai केंद्र से आवेदन। कौन अधिकारी देता है, आवश्यक दस्तावेज़, कृषि आय प्रमाण पत्र, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "तमिलनाडु आय प्रमाण पत्र 2026: e-Sevai पर आवेदन, कागज़, कौन देता है और स्टेटस",
  lead: "तमिलनाडु में आय प्रमाण पत्र राजस्व विभाग की सेवा है। आवेदन tnesevai.tn.gov.in पर खुद या किसी <strong>e-Sevai केंद्र</strong> से होता है। गांव के प्रशासनिक अधिकारी (VAO) और राजस्व निरीक्षक (RI) की जांच के बाद <strong>ज़ोनल डिप्टी तहसीलदार</strong> प्रमाण पत्र जारी करते हैं, जिसे पोर्टल से डाउनलोड किया जा सकता है।",
  facts: [
    ["पोर्टल", '<a href="https://tnesevai.tn.gov.in/Citizen/" target="_blank" rel="noopener nofollow">tnesevai.tn.gov.in</a>'],
    ["जारी करते हैं", "ज़ोनल डिप्टी तहसीलदार"],
    ["जांच", "VAO → राजस्व निरीक्षक (RI)"],
    ["आवेदन", "ऑनलाइन या e-Sevai केंद्र"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है, और कौन सा चाहिए",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस छूट और आय पर आधारित योजनाओं में मांगा जाता है। e-Sevai पर आय से जुड़ी अलग सेवाएं हैं:",
      table: {
        head: ["सेवा", "कब चाहिए"],
        rows: [
          ["<strong>Income Certificate</strong>", "छात्रवृत्ति, योजनाएं, दाखिला: परिवार की कुल आय"],
          ["<strong>Agricultural Income Certificate</strong>", "जहां सिर्फ खेती की आय का प्रमाण मांगा गया हो"],
          ["<strong>Other Backward Class (OBC) Certificate</strong>", "केंद्र की नौकरी में OBC आरक्षण (इसमें आय का प्रमाण लगता है); यह आय प्रमाण पत्र नहीं है"],
        ],
      },
      callout: { kind: "info", html: "OBC आरक्षण के लिए <a href=\"/states/tamil-nadu-caste-certificate.html\">तमिलनाडु जाति (Community) प्रमाण पत्र गाइड</a> देखें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (ज़िला प्रशासन की e-Sevai सूची)",
      table: {
        head: ["सेवा", "ज़रूरी", "वैकल्पिक"],
        rows: [
          ["Income Certificate", "फोटो; कोई भी पते का प्रमाण; आवेदक की स्व-घोषणा (सूची में परिवार के सदस्य का Community Certificate भी लिखा है)", "ताज़ा वेतन प्रमाण पत्र (Salary Certificate)"],
          ["Agricultural Income Certificate", "फोटो; पते का प्रमाण; पिछले 1 साल का अडंगल (Adangal); चिट्टा (Chitta); स्व-घोषणा", "पट्टे की ज़मीन हो तो ज़मीन मालिक की NOC"],
        ],
      },
      callout: { kind: "warn", html: "स्व-घोषणा में आय कम या गलत न लिखें; VAO और RI आपकी बताई आय की जांच करते हैं। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://tnesevai.tn.gov.in/Citizen/" target="_blank" rel="noopener nofollow">tnesevai.tn.gov.in/Citizen</a> खोलें और नागरिक (Citizen) के रूप में रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग (Revenue) की सेवाओं में <strong>Income Certificate</strong> चुनें।",
        "आवेदक और परिवार की आय का विवरण भरें।",
        "फोटो, पते का प्रमाण, स्व-घोषणा और (हो तो) वेतन प्रमाण पत्र अपलोड करें।",
        "स्क्रीन पर दिखी फीस भरें और पावती का आवेदन नंबर संभाल कर रखें।",
        "आवेदन VAO → RI → ज़ोनल डिप्टी तहसीलदार तक जाता है। मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "offline",
      title: "e-Sevai केंद्र से आवेदन",
      intro: "पास के <strong>e-Sevai केंद्र</strong> पर कागज़ लेकर जाएं; ऑपरेटर आवेदन ऑनलाइन भरकर पावती देगा। आवेदन आपके <strong>मौजूदा पते</strong> वाले क्षेत्र के अधिकारियों के पास जाता है। केंद्र पर फीस की रसीद ज़रूर लें।",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> e-Sevai पोर्टल पर आवेदन नंबर से स्थिति देखें, या उसी e-Sevai केंद्र पर पूछें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद e-Sevai पोर्टल से खुद डाउनलोड करें।",
        '<strong>सत्यापन:</strong> तमिलनाडु e-District के <a href="https://tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml" target="_blank" rel="noopener nofollow">Verify Certificate</a> पेज पर।',
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
      callout: { kind: "warn", html: "फीस, समय सीमा और वैधता हमें किसी आधिकारिक पेज पर पक्की नहीं मिली, इसलिए हम कोई संख्या नहीं लिख रहे। ज़्यादातर छात्रवृत्ति और योजनाएं <strong>हाल का</strong> आय प्रमाण पत्र मांगती हैं; फॉर्म की शर्त देखकर ज़रूरत हो तो नया बनवाएं।" },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पते का प्रमाण दूसरे क्षेत्र का", "मौजूदा पते का प्रमाण लगाएं"],
          ["आय की स्व-घोषणा नहीं लगाई", "स्व-घोषणा ज़रूरी है; नौकरी हो तो वेतन प्रमाण पत्र भी लगाएं"],
          ["सिर्फ खेती की आय का प्रमाण चाहिए था", "Agricultural Income Certificate सेवा चुनें और अडंगल/चिट्टा लगाएं"],
          ["केंद्र की नौकरी के OBC आरक्षण के लिए आय प्रमाण पत्र लगा दिया", "अलग OBC Certificate सेवा में आवेदन करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://tnesevai.tn.gov.in/Citizen/", title: "TN e-Sevai नागरिक पोर्टल (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://chennai.nic.in/work-flow/", title: "प्रमाण पत्र जारी करने वाले अधिकारी (ज़िला चेन्नई)" },
    { href: "https://tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml", title: "Verify Certificate: तमिलनाडु e-District" },
  ],
  faq: [
    { q: "तमिलनाडु में आय प्रमाण पत्र कहां बनता है?", a: "tnesevai.tn.gov.in पर खुद या किसी e-Sevai केंद्र से।" },
    { q: "आय प्रमाण पत्र कौन जारी करता है?", a: "VAO और राजस्व निरीक्षक (RI) की जांच के बाद ज़ोनल डिप्टी तहसीलदार।" },
    { q: "कौन से कागज़ चाहिए?", a: "फोटो, पते का प्रमाण और आवेदक की स्व-घोषणा; नौकरी हो तो वेतन प्रमाण पत्र।" },
    { q: "किसान को कौन सा प्रमाण पत्र लेना चाहिए?", a: "जहां सिर्फ खेती की आय मांगी गई हो, वहां Agricultural Income Certificate; इसमें पिछले 1 साल का अडंगल और चिट्टा लगता है।" },
    { q: "फीस और वैधता कितनी है?", a: "हमें आधिकारिक पेज पर पक्की जानकारी नहीं मिली। पोर्टल/केंद्र पर दिखी फीस भरें, और योजना की शर्त देखकर तय करें कि नया प्रमाण पत्र चाहिए या नहीं।" },
  ],
  related: [
    { href: "/states/tamil-nadu-caste-certificate.html", emoji: "📜", title: "तमिलनाडु जाति प्रमाण पत्र", text: "Community और OBC प्रमाण पत्र" },
    { href: "/states/tamil-nadu-domicile-certificate.html", emoji: "🏠", title: "तमिलनाडु निवास प्रमाण पत्र", text: "Nativity / Residence" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://tnesevai.tn.gov.in/Citizen/", label: "📝 TN e-Sevai पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
