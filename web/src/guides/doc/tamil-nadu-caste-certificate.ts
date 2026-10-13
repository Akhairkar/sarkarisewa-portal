import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; tnesevai.tn.gov.in did not open from our
// checker, so we used district NIC pages and search extracts):
// - chennai.nic.in/work-flow/ ("Certificate issuing authority", Chennai
//   district): Community Certificate CSC -> VAO -> RI -> Zonal Deputy Tahsildar
//   (if BC/MBC/DNC) / Tahsildar (if SC) / RDO (if ST); if the applicant holds a
//   permanent certificate the application moves directly to ZDT (BC/MBC/DNC
//   only); Other Backward Class (OBC) Certificate CSC -> VAO -> RI -> HQ Deputy
//   Tahsildar -> Tahsildar, based on current address.
// - chennai.nic.in/esevai-test/ (Chennai district e-service list): community
//   certificate attachments (photo, any address proof, community certificate of
//   father or mother or siblings, self-declaration); OBC certificate attachments
//   (photo, address proof, community certificate, self-declaration; optional
//   ITR, proof of income such as payslip / income certificate).
// - ariyalur.nic.in, nilgiris.nic.in, kallakurichi.nic.in, pudukkottai.nic.in
//   "TN e-Sevai Portal" pages: citizens can apply / download revenue
//   certificates (income, community, nativity, OBC, etc.) themselves at
//   tnesevai.tn.gov.in/Citizen/.
// - Search result for tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml ("Verify
//   Certificate - Tamil Nadu e-District").
// Left out (not confirmable on an official page we could open): the fee (old
// page said Rs 60; third-party sources differ), a time limit in days, the
// validity period, a helpline number (district pages list one, but are
// 2018-2020 pages).
export const tamilNaduCasteCertificate: DocGuide = {
  state: { slug: "tamil-nadu", hi: "तमिलनाडु" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Tamil Nadu Caste Certificate 2026: Apply & Status",
  description: "तमिलनाडु जाति (Community) प्रमाण पत्र online apply 2026 at TN e-Sevai. BC/MBC/SC/ST के लिए कौन अधिकारी देता है, केंद्र वाला OBC प्रमाण पत्र, दस्तावेज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "तमिलनाडु जाति (Community) प्रमाण पत्र 2026: e-Sevai पर आवेदन, कौन अधिकारी देता है, कागज़ और OBC प्रमाण पत्र",
  lead: "तमिलनाडु में जाति प्रमाण पत्र को <strong>Community Certificate</strong> कहते हैं। आवेदन tnesevai.tn.gov.in पर खुद या किसी e-Sevai केंद्र से होता है। VAO और राजस्व निरीक्षक (RI) की जांच के बाद BC/MBC/DNC का प्रमाण पत्र <strong>ज़ोनल डिप्टी तहसीलदार</strong>, SC का <strong>तहसीलदार</strong> और ST का <strong>राजस्व मंडल अधिकारी (RDO)</strong> देते हैं। केंद्र की नौकरी के लिए अलग <strong>OBC Certificate</strong> सेवा है।",
  facts: [
    ["पोर्टल", '<a href="https://tnesevai.tn.gov.in/Citizen/" target="_blank" rel="noopener nofollow">tnesevai.tn.gov.in</a>'],
    ["BC / MBC / DNC", "ज़ोनल डिप्टी तहसीलदार"],
    ["SC", "तहसीलदार"],
    ["ST", "राजस्व मंडल अधिकारी (RDO)"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> राज्य की नौकरी, दाखिले और योजनाओं के लिए <strong>Community Certificate</strong> बनता है। केंद्र सरकार की नौकरी/परीक्षा में OBC आरक्षण के लिए e-Sevai पर अलग <strong>Other Backward Class (OBC) Certificate</strong> सेवा है।",
  sections: [
    {
      id: "kya-hai",
      title: "Community Certificate और OBC Certificate में फर्क",
      table: {
        head: ["सेवा", "कब चाहिए", "कौन देता है (VAO और RI की जांच के बाद)"],
        rows: [
          ["<strong>Community Certificate</strong>", "राज्य की नौकरी, दाखिला, छात्रवृत्ति, योजनाएं (BC, MBC, DNC, SC, ST)", "BC/MBC/DNC: ज़ोनल डिप्टी तहसीलदार; SC: तहसीलदार; ST: RDO"],
          ["<strong>Other Backward Class (OBC) Certificate</strong>", "केंद्र सरकार की नौकरी/परीक्षा/संस्थान में OBC आरक्षण", "मुख्यालय डिप्टी तहसीलदार की जांच के बाद तहसीलदार"],
        ],
      },
      callout: { kind: "info", html: "केंद्र की भर्ती में OBC आरक्षण तभी मिलता है जब आपकी जाति <strong>केंद्रीय OBC सूची</strong> में हो और आप <strong>नॉन-क्रीमी लेयर</strong> में हों। इसलिए OBC Certificate के आवेदन में आय का प्रमाण (सैलरी स्लिप, ITR, आय प्रमाण पत्र) भी लगाया जा सकता है। भर्ती विज्ञापन में दिया प्रारूप देखकर ही आवेदन करें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (ज़िला प्रशासन की e-Sevai सूची)",
      table: {
        head: ["सेवा", "ज़रूरी", "वैकल्पिक"],
        rows: [
          ["Community Certificate", "फोटो; कोई भी पते का प्रमाण; <strong>पिता या माता या भाई-बहन का Community Certificate</strong>; आवेदक की स्व-घोषणा", "-"],
          ["OBC Certificate", "फोटो; पते का प्रमाण; Community Certificate; स्व-घोषणा", "आयकर रिटर्न; आय का प्रमाण (सैलरी स्लिप, आय प्रमाण पत्र आदि); कोई और कागज़"],
        ],
      },
      callout: { kind: "ok", html: "<strong>टिप:</strong> परिवार में किसी का पुराना Community Certificate सबसे काम का कागज़ है। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://tnesevai.tn.gov.in/Citizen/" target="_blank" rel="noopener nofollow">tnesevai.tn.gov.in/Citizen</a> खोलें और नागरिक (Citizen) के रूप में रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग (Revenue) की सेवाओं में <strong>Community Certificate</strong> (या केंद्र के लिए <strong>OBC Certificate</strong>) चुनें।",
        "आवेदक का विवरण भरें।",
        "फोटो, पते का प्रमाण, परिवार के सदस्य का Community Certificate और स्व-घोषणा अपलोड करें।",
        "स्क्रीन पर दिखी फीस भरें और पावती में दिया आवेदन नंबर संभाल कर रखें।",
        "आवेदन VAO → RI → डिप्टी तहसीलदार/तहसीलदार/RDO तक जाता है। अगर आपके पास पहले से <strong>स्थायी (permanent) Community Certificate</strong> है तो BC/MBC/DNC का आवेदन सीधे ज़ोनल डिप्टी तहसीलदार तक जाता है।",
      ],
    },
    {
      id: "offline",
      title: "e-Sevai केंद्र से आवेदन",
      intro: "पास के <strong>e-Sevai केंद्र</strong> (कॉमन सर्विस सेंटर) पर कागज़ लेकर जाएं; ऑपरेटर आवेदन ऑनलाइन भरकर पावती देगा। प्रमाण पत्र आपके पते वाले तालुक के अधिकारी जारी करते हैं, इसलिए अपने मौजूदा पते का प्रमाण साथ रखें। केंद्र पर फीस की रसीद ज़रूर लें।",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> e-Sevai पोर्टल पर आवेदन नंबर से स्थिति देखें, या उसी e-Sevai केंद्र पर पूछें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद प्रमाण पत्र e-Sevai पोर्टल से खुद डाउनलोड किया जा सकता है।",
        '<strong>सत्यापन:</strong> तमिलनाडु e-District के <a href="https://tnedistrict.tn.gov.in/tneda/VerifyCerti.xhtml" target="_blank" rel="noopener nofollow">Verify Certificate</a> पेज पर प्रमाण पत्र की जांच होती है।',
      ],
      html: '<p>DigiLocker से प्रमाण पत्र निकालने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
      callout: { kind: "warn", html: "फीस और समय सीमा हमें किसी आधिकारिक पेज पर पक्की नहीं मिली, इसलिए हम कोई राशि नहीं लिख रहे। पोर्टल या e-Sevai केंद्र पर दिखी फीस ही भरें और ज़्यादा मांगे जाने पर रसीद मांगें।" },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["परिवार के किसी सदस्य का Community Certificate नहीं", "पिता, माता या भाई-बहन में से किसी का प्रमाण पत्र खोजें; न हो तो VAO को स्कूल/ज़मीन के पुराने रिकॉर्ड दिखाएं"],
          ["पते का प्रमाण दूसरे तालुक का", "मौजूदा पते का प्रमाण लगाएं; आवेदन उसी तालुक में जाता है"],
          ["केंद्र की नौकरी के लिए Community Certificate लगा दिया", "केंद्र के लिए अलग OBC Certificate सेवा में आवेदन करें"],
          ["नाम या जाति की वर्तनी अलग", "सभी कागज़ों में एक जैसी वर्तनी रखें"],
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
    { q: "तमिलनाडु में जाति प्रमाण पत्र कहां बनता है?", a: "tnesevai.tn.gov.in पर खुद या किसी e-Sevai केंद्र से। सेवा का नाम Community Certificate है।" },
    { q: "Community Certificate कौन जारी करता है?", a: "VAO और राजस्व निरीक्षक की जांच के बाद BC/MBC/DNC के लिए ज़ोनल डिप्टी तहसीलदार, SC के लिए तहसीलदार और ST के लिए राजस्व मंडल अधिकारी (RDO)।" },
    { q: "केंद्र की नौकरी के लिए कौन सा प्रमाण पत्र चाहिए?", a: "e-Sevai पर अलग Other Backward Class (OBC) Certificate सेवा है, जो तहसीलदार देते हैं। इसके लिए Community Certificate भी लगता है।" },
    { q: "Community Certificate के लिए कौन से कागज़ ज़रूरी हैं?", a: "फोटो, पते का प्रमाण, पिता या माता या भाई-बहन का Community Certificate, और आवेदक की स्व-घोषणा।" },
    { q: "फीस कितनी है?", a: "हमें आधिकारिक पेज पर पक्की राशि नहीं मिली। पोर्टल या e-Sevai केंद्र पर दिखी फीस भरें और रसीद लें।" },
  ],
  related: [
    { href: "/states/tamil-nadu-income-certificate.html", emoji: "💰", title: "तमिलनाडु आय प्रमाण पत्र", text: "e-Sevai पर आवेदन" },
    { href: "/states/tamil-nadu-domicile-certificate.html", emoji: "🏠", title: "तमिलनाडु निवास प्रमाण पत्र", text: "Nativity / Residence" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://tnesevai.tn.gov.in/Citizen/", label: "📝 TN e-Sevai पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
