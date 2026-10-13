import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; revenue.delhi.gov.in and edistrict.delhi.gov.in
// do not open from our checker, so we used search extracts of those pages plus
// the Revenue Department guideline PDFs hosted by DM East):
// - revenue.delhi.gov.in "SC-ST Certificates" and "OBC Certificate" pages
//   (search extracts): certificates issued in 14 days (Service Level Agreement
//   implemented); no fee; approach the SDM of your area / Deputy Commissioner
//   office, or apply online; OBC needs family income proof (ITR / salary slip /
//   Form-16) and non-creamy-layer status.
// - dmeast.delhi.gov.in "Caste Certificate" page with Revenue Department, GNCTD
//   "Guidelines for issuance of SC/ST certificate" and "... OBC certificate"
//   and the two application forms (cdn.s3waas.gov.in PDFs): SC/ST cases I-VI
//   (family in Delhi before 1951 => Delhi State SC certificate; migrated after
//   1951 => Delhi or other-state certificate depending on notification; caste
//   cannot be claimed by marriage; field verification by an officer not below
//   Naib Tehsildar where no paternal relative has a certificate); OBC: Delhi
//   OBC if permanent resident on or before 8 September 1993, caste notified by
//   GNCTD, not creamy layer; OBC (Central) for Government of India posts if the
//   caste is in the central list; migrated after 8.9.1993 => OBC (Central) of
//   the state of origin; self-declaration + Annexure I (creamy layer); upload
//   documents online or self-attested copies at the CSC; hard copy of the
//   self-declaration to SDM/Tehsildar/CSC with the acknowledgement number;
//   names of certificate holders put in public domain; legal action for false
//   information.
// - dmsouth.delhi.gov.in SC/ST certificate citizen-charter page (updated
//   Dec 2022): documents and "Time required - 14 days".
// Left out (not confirmable on a current official page): helpline number,
// appeal officer names, NCL validity period.
export const delhiCasteCertificate: DocGuide = {
  state: { slug: "delhi", hi: "दिल्ली" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Delhi Caste Certificate 2026: Apply & Status",
  description: "दिल्ली जाति प्रमाण पत्र (SC/ST/OBC) 2026: e-District Delhi पर आवेदन, 1951 और 1993 की शर्त, ज़रूरी कागज़, 14 दिन की समय सीमा और OBC (Central)।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "दिल्ली जाति प्रमाण पत्र 2026: SC/ST और OBC के लिए e-District पर आवेदन, 1951/1993 की शर्त और कागज़",
  lead: "दिल्ली में SC/ST और OBC प्रमाण पत्र राजस्व विभाग देता है। आवेदन <strong>e-District Delhi</strong> (edistrict.delhi.gov.in) पर ऑनलाइन या अपने <strong>SDM कार्यालय</strong> से होता है। राजस्व विभाग के अनुसार <strong>कोई फीस नहीं</strong> है और प्रमाण पत्र <strong>14 दिन</strong> में जारी होता है। SC/ST के लिए परिवार के <strong>1951 से पहले</strong> और OBC के लिए <strong>8 सितंबर 1993 या उससे पहले</strong> से दिल्ली में रहने पर दिल्ली का प्रमाण पत्र बनता है; बाद में आए परिवारों के लिए अलग नियम हैं।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.delhi.gov.in/" target="_blank" rel="noopener nofollow">edistrict.delhi.gov.in</a>'],
    ["जारी करते हैं", "SDM कार्यालय (राजस्व विभाग)"],
    ["समय सीमा", "14 दिन"],
    ["फीस", "नहीं (राजस्व विभाग)"],
  ],
  notice: "<strong>ध्यान दें:</strong> राजस्व विभाग के दिशानिर्देशों के अनुसार जिन लोगों को SC/ST प्रमाण पत्र जारी होता है उनका विवरण सार्वजनिक किया जाता है, और गलत जानकारी देकर प्रमाण पत्र लेने पर कानूनी कार्रवाई होती है। शादी करके कोई SC/ST/OBC नहीं बन सकता।",
  sections: [
    {
      id: "kya-hai",
      title: "कौन सा प्रमाण पत्र मिलेगा: दिल्ली का या मूल राज्य का",
      table: {
        head: ["स्थिति", "SC/ST", "OBC"],
        rows: [
          ["परिवार कट-ऑफ तारीख से पहले से दिल्ली में", "1951 से पहले: <strong>दिल्ली राज्य का SC प्रमाण पत्र</strong>", "8 सितंबर 1993 या पहले से: <strong>दिल्ली OBC</strong> (जाति दिल्ली की सूची में हो)"],
          ["परिवार बाद में आकर दिल्ली में बसा", "जाति दिल्ली और मूल राज्य दोनों में SC/ST हो: दिल्ली का; केवल मूल राज्य में हो: <strong>दूसरे राज्य वाला SC/ST प्रमाण पत्र</strong>", "पिता का OBC प्रमाण पत्र मूल राज्य से बना हो: <strong>उस राज्य वाला OBC प्रमाण पत्र</strong>"],
          ["केंद्र सरकार की नौकरी", "ऊपर वाला प्रमाण पत्र ही", "<strong>OBC (Central)</strong>: जाति केंद्रीय OBC सूची में हो; 1993 के बाद आए हों तो मूल राज्य का OBC (Central)"],
        ],
      },
      callout: { kind: "info", html: "OBC प्रमाण पत्र तभी बनता है जब आवेदक <strong>क्रीमी लेयर</strong> में न हो। इसके लिए फॉर्म के साथ नॉन-क्रीमी लेयर की स्व-घोषणा और <strong>Annexure I</strong> भरना होता है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (राजस्व विभाग के दिशानिर्देश)",
      list: [
        "<strong>पहचान का प्रमाण (कोई 1):</strong> आधार, PAN, फोटो वाला राशन कार्ड, मतदाता पहचान पत्र, पासपोर्ट, ड्राइविंग लाइसेंस या कोई सरकारी दस्तावेज़। नाबालिग के लिए स्कूल प्रिंसिपल का पत्र या (5 साल से कम उम्र में) जन्म प्रमाण पत्र भी चलता है।",
        "<strong>वर्तमान और स्थायी पते का प्रमाण (कोई 1-1):</strong> आधार, वोटर कार्ड, पासपोर्ट, राशन कार्ड, पंजीकृत किरायानामा, बैंक पासबुक, बिजली/पानी/गैस/टेलीफोन बिल आदि।",
        "<strong>पिता की ओर के किसी रिश्तेदार का जाति प्रमाण पत्र</strong> (पिता, भाई, बहन, चाचा आदि) और उनसे <strong>रिश्ते का प्रमाण</strong>।",
        "<strong>दिल्ली में निवास का प्रमाण:</strong> 1951 (SC/ST) या 1993 (OBC) से पहले का, या बाद में आए हों तो दिल्ली का जन्म प्रमाण पत्र / दिल्ली के स्कूल की 10वीं की मार्कशीट / पिछले 5 साल के निवास का प्रमाण।",
        "<strong>OBC के लिए:</strong> नॉन-क्रीमी लेयर की स्व-घोषणा, Annexure I, और परिवार की आय का प्रमाण (ITR / सैलरी स्लिप / Form-16)।",
        "<strong>रंगीन पासपोर्ट फोटो</strong> (5 x 4.5 सेमी, सफेद पृष्ठभूमि)।",
      ],
      callout: { kind: "warn", html: "अगर पिता की ओर के किसी रिश्तेदार का प्रमाण पत्र नहीं है, तो <strong>फील्ड वेरिफिकेशन ज़रूरी</strong> होता है, जो कम से कम नायब तहसीलदार स्तर का अधिकारी करता है। ऐसे में पुराने निवास के कागज़ ज़्यादा मज़बूत रखें।" },
    },
    {
      id: "online",
      title: "e-District Delhi पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://edistrict.delhi.gov.in/" target="_blank" rel="noopener nofollow">edistrict.delhi.gov.in</a> खोलें और आधार या e-District रजिस्ट्रेशन से लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में <strong>SC/ST Certificate</strong> या <strong>OBC Certificate</strong> चुनें।",
        "फॉर्म में अपनी श्रेणी (1951/1993 से पहले से दिल्ली में, या बाद में आए) चुनें और रिश्तेदार के प्रमाण पत्र का विवरण भरें।",
        "कागज़ और फोटो अपलोड करें। स्व-घोषणा की स्कैन कॉपी भी अपलोड करें।",
        "सबमिट करके <strong>पावती (Acknowledgement) नंबर</strong> नोट करें। दिशानिर्देशों के अनुसार स्व-घोषणा की <strong>हस्ताक्षरित हार्ड कॉपी</strong> पावती नंबर के साथ SDM/तहसीलदार कार्यालय या CSC में हाथ से या स्पीड/रजिस्टर्ड पोस्ट से जमा करनी होती है।",
      ],
    },
    {
      id: "offline",
      title: "SDM कार्यालय या CSC से",
      intro: "अपने इलाके के <strong>SDM कार्यालय</strong> या जिला उपायुक्त (DM) कार्यालय में, या नागरिक सेवा केंद्र (CSC) पर आवेदन कर सकते हैं। मूल कागज़ों की स्व-सत्यापित कॉपी साथ ले जाएं; ऑनलाइन आवेदन में भी काउंटर पर कुछ कागज़ों की जांच हो सकती है। नज़दीकी केंद्र: <a href=\"/service/csc-locator/delhi.html\">दिल्ली CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और शिकायत",
      list: [
        "<strong>समय:</strong> राजस्व विभाग के पेज के अनुसार SC/ST और OBC प्रमाण पत्र <strong>14 दिन</strong> में जारी होते हैं (सर्विस लेवल एग्रीमेंट लागू)।",
        "<strong>फीस:</strong> राजस्व विभाग के अनुसार कोई फीस नहीं। CSC अपना सेवा शुल्क ले सकता है; पहले पूछें।",
        "<strong>देरी हो तो:</strong> पहले अपने SDM कार्यालय में पावती नंबर के साथ संपर्क करें, फिर जिला उपायुक्त (DM) कार्यालय में।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> e-District Delhi पर पावती नंबर से आवेदन की स्थिति देखें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद e-District Delhi से डिजिटल प्रमाण पत्र डाउनलोड करें; पोर्टल पर हिंदी प्रारूप में प्रमाण पत्र निकालने का विकल्प भी है।",
        "<strong>सार्वजनिक सूची:</strong> राजस्व विभाग के अनुसार जारी SC/ST प्रमाण पत्रों का विवरण सार्वजनिक किया जाता है।",
      ],
      html: '<p>DigiLocker से जुड़ी जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "ncl",
      title: "OBC (Central) और नॉन-क्रीमी लेयर",
      list: [
        "<strong>केंद्र की नौकरी के लिए</strong> दिल्ली में रहने वाला व्यक्ति <strong>OBC (Central)</strong> प्रमाण पत्र ले सकता है, बशर्ते जाति भारत सरकार की केंद्रीय OBC सूची में हो।",
        "जिसके पास पहले से दिल्ली या दूसरे राज्य का OBC प्रमाण पत्र है, वह उसकी कॉपी लगाकर OBC (Central) के लिए आवेदन कर सकता है।",
        "<strong>क्रीमी लेयर</strong> की शर्त भारत सरकार के नियमों से तय होती है और परिवार की आय/पद बदलने पर बदल सकती है। भर्ती में जिस वित्तीय वर्ष का प्रमाण पत्र मांगा गया हो, वही लगाएं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत श्रेणी चुनी (1951/1993 से पहले या बाद)", "परिवार कब से दिल्ली में है, उसके हिसाब से सही श्रेणी चुनें"],
          ["रिश्तेदार से रिश्ते का प्रमाण नहीं", "ऐसा सरकारी कागज़ लगाएं जिसमें दोनों के नाम परिवार के सदस्य के रूप में हों"],
          ["स्व-घोषणा की हार्ड कॉपी जमा नहीं", "पावती नंबर के साथ SDM/तहसीलदार/CSC में जमा करें"],
          ["OBC में आय का प्रमाण नहीं / Annexure I नहीं", "ITR, सैलरी स्लिप या Form-16 और Annexure I लगाएं"],
          ["जाति दिल्ली की सूची में नहीं", "मूल राज्य वाला प्रमाण पत्र (Other State SC/ST या OBC) चुनें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "आवेदन से जुड़ी मदद के लिए अपने इलाके के SDM कार्यालय या जिला उपायुक्त (DM) कार्यालय से संपर्क करें। दिशानिर्देश और फॉर्म राजस्व विभाग और जिलों की वेबसाइट पर मिलते हैं।",
    },
  ],
  official: [
    { href: "https://edistrict.delhi.gov.in/", title: "e-District Delhi (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://revenue.delhi.gov.in/revenue/obc-certificate", title: "राजस्व विभाग: OBC प्रमाण पत्र" },
    { href: "https://revenue.delhi.gov.in/revenue/scst-certificates", title: "राजस्व विभाग: SC/ST प्रमाण पत्र" },
    { href: "https://dmeast.delhi.gov.in/service/caste-certificate/", title: "DM East: दिशानिर्देश और आवेदन फॉर्म (PDF)" },
  ],
  faq: [
    { q: "दिल्ली में जाति प्रमाण पत्र कैसे बनवाएं?", a: "edistrict.delhi.gov.in पर लॉगिन करके SC/ST या OBC Certificate सेवा चुनें, फॉर्म भरें, कागज़ अपलोड करें और पावती नंबर नोट करें। SDM कार्यालय या CSC से भी आवेदन होता है।" },
    { q: "दिल्ली जाति प्रमाण पत्र कितने दिन में बनता है और फीस कितनी है?", a: "राजस्व विभाग के अनुसार 14 दिन में, और कोई फीस नहीं।" },
    { q: "दिल्ली OBC प्रमाण पत्र के लिए 1993 की शर्त क्या है?", a: "दिल्ली OBC प्रमाण पत्र उसे मिलता है जो 8 सितंबर 1993 या उससे पहले से दिल्ली का स्थायी निवासी हो और जिसकी जाति दिल्ली की सूची में हो। बाद में आए परिवार को मूल राज्य वाला OBC प्रमाण पत्र मिलता है, अगर पिता का प्रमाण पत्र वहां से बना हो।" },
    { q: "दूसरे राज्य से आकर दिल्ली में बसे SC परिवार को कौन सा प्रमाण पत्र मिलेगा?", a: "अगर परिवार 1951 के बाद आया और जाति दिल्ली व मूल राज्य दोनों में SC है, तो दिल्ली का प्रमाण पत्र; अगर जाति केवल मूल राज्य में SC है, तो दूसरे राज्य वाला (Other State) SC प्रमाण पत्र।" },
    { q: "केंद्र सरकार की नौकरी के लिए OBC प्रमाण पत्र कौन सा बनवाएं?", a: "OBC (Central)। जाति केंद्रीय OBC सूची में होनी चाहिए और आप क्रीमी लेयर में न हों। 1993 के बाद दिल्ली आए हों तो मूल राज्य का OBC (Central) प्रमाण पत्र।" },
  ],
  related: [
    { href: "/states/delhi-income-certificate.html", emoji: "💰", title: "दिल्ली आय प्रमाण पत्र", text: "e-District Delhi, 14 दिन" },
    { href: "/states/delhi-domicile-certificate.html", emoji: "🏠", title: "दिल्ली निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.delhi.gov.in/", label: "📝 e-District Delhi पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
