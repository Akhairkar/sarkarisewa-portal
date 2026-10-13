import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; edistrict.up.gov.in and esathi.up.gov.in do not
// open from our checker, so we used search extracts of the portal's own pages
// and district NIC pages):
// - edistrict.up.gov.in/edistrictup/ (e-District UP, NIC UP State Unit) site
//   map: Caste Certificate, Income Certificate, Domicile Certificate services;
//   FAQ (contact/eDistrictFAQ.htm): certificate verification by application
//   number and certificate ID; download link of the digitally signed
//   certificate sent to the registered citizen account; if a certificate does
//   not verify, contact the district administration / approving authority.
// - esathi.up.gov.in/citizenservices/login/login.aspx: e-Sathi citizen login.
// - edistrict.up.gov.in .../new_online_service_pdf/Domicile_Certificate.pdf
//   (same portal, Revenue Department): citizen login > e-Sathi integrated
//   services > Lekhpal inspection > approval; download from portal or
//   DigiLocker. (Caste/income checklists were not in search results.)
// - District NIC service pages: mirzapur.nic.in, farrukhabad.nic.in,
//   gorakhpur.nic.in, varanasi.nic.in, ghaziabad.nic.in (apply on
//   edistrict.up.gov.in, at Common Service Centre / Jan Seva Kendra or tehsil;
//   certificates integrated with DigiLocker; helpdesk 0522-2304706,
//   edistrict@nic.in).
// - indiacode.nic.in: Uttar Pradesh Janhit Guarantee Adhiniyam, 2011 (Act 3
//   of 2011): notified services, designated officer, time limit, first and
//   second appeal, penalty.
// - Patrika (Gonda) report: caste and income certificates signed by the
//   Tehsildar, domicile by the SDM, under the Janhit Guarantee Act.
// - jansunwai.up.nic.in (IGRS Jansunwai-Samadhan): online complaint, status,
//   reminder.
// Left out (no current official page we could open): the fee amount (a 2018
// district page said Rs 20, guides say Rs 15/30), the time limit in days for
// caste certificates, validity rules, and the e-District menu names for the
// OBC central-format certificate.
export const uttarPradeshCasteCertificate: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Uttar Pradesh Caste Certificate 2026",
  description: "उत्तर प्रदेश जाति प्रमाण पत्र (Caste Certificate) 2026: e-District UP / e-Sathi या जन सेवा केंद्र से आवेदन, ज़रूरी कागज़, स्टेटस, डाउनलोड और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "उत्तर प्रदेश जाति प्रमाण पत्र 2026: e-District UP पर आवेदन, कागज़, स्टेटस और सत्यापन",
  lead: "उत्तर प्रदेश में जाति प्रमाण पत्र राजस्व विभाग की सेवा है और <strong>e-District UP</strong> (edistrict.up.gov.in) से बनता है। आवेदन खुद <strong>e-Sathi</strong> सिटिजन लॉगिन से, या नज़दीकी जन सेवा केंद्र (CSC) या तहसील से होता है। लेखपाल की जांच के बाद प्रमाण पत्र <strong>तहसीलदार</strong> के डिजिटल हस्ताक्षर से जारी होता है और पोर्टल व DigiLocker से डाउनलोड होता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.up.gov.in/edistrictup/" target="_blank" rel="noopener nofollow">edistrict.up.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (लेखपाल की जांच के बाद)"],
    ["आवेदन कहां", "e-Sathi लॉगिन / जन सेवा केंद्र / तहसील"],
    ["फीस", "आवेदन के समय पोर्टल/केंद्र पर दिखती है"],
  ],
  notice: "<strong>सावधान:</strong> जाति प्रमाण पत्र केवल सरकारी पोर्टल या अधिकृत जन सेवा केंद्र से बनवाएं। \"घर बैठे जल्दी बनवा देंगे\" कहने वाले बिचौलियों को आधार या OTP न दें। तैयार प्रमाण पत्र को पोर्टल पर आवेदन संख्या और प्रमाण पत्र संख्या से जांचा जा सकता है।",
  sections: [
    {
      id: "kya-hai",
      title: "जाति प्रमाण पत्र किस काम आता है",
      intro: "जाति प्रमाण पत्र इस बात का सरकारी सबूत है कि आप अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) या अन्य पिछड़ा वर्ग (OBC) से हैं। इसकी ज़रूरत पड़ती है:",
      list: [
        "सरकारी नौकरी और भर्ती परीक्षा में <strong>आरक्षण और उम्र में छूट</strong> के लिए",
        "स्कूल-कॉलेज में <strong>दाखिला</strong> और <strong>छात्रवृत्ति</strong> के लिए",
        "SC/ST/OBC वर्ग की <strong>सरकारी योजनाओं</strong> के लिए",
      ],
      callout: { kind: "info", html: "<strong>राज्य और केंद्र का फर्क:</strong> उत्तर प्रदेश सरकार की नौकरी या दाखिले में राज्य की सूची वाला प्रमाण पत्र चलता है। केंद्र सरकार की नौकरी/परीक्षा में OBC आरक्षण के लिए <strong>केंद्र के प्रारूप</strong> वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र मांगा जाता है, और आपकी जाति <strong>केंद्रीय OBC सूची</strong> में होनी चाहिए। भर्ती विज्ञापन में लिखा प्रारूप देखकर ही आवेदन करें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "जिला NIC पृष्ठों और जन सेवा केंद्रों पर आम तौर पर ये कागज़ मांगे जाते हैं (पोर्टल पर फॉर्म भरते समय सूची एक बार देख लें):",
      list: [
        "<strong>स्व-घोषणा पत्र</strong> (प्रारूप पोर्टल/केंद्र पर मिलता है), जिसमें अपनी और पिता की जाति लिखी हो",
        "<strong>ग्राम प्रधान या वार्ड सदस्य/पार्षद का जाति संबंधी पत्र</strong> (कई जिलों में मांगा जाता है)",
        "<strong>राशन कार्ड</strong> की कॉपी या दूसरा पते का प्रमाण",
        "<strong>आधार कार्ड</strong> और पासपोर्ट साइज़ फोटो",
        "परिवार में पहले बना जाति प्रमाण पत्र (पिता/भाई-बहन का) हो तो उसकी कॉपी: जांच में यही सबसे ज़्यादा काम आता है",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन साफ और छोटी फाइल में रखें। फोटो/PDF छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें। स्व-घोषणा के नियम: <a href=\"/affidavit/self-declaration.html\">स्व-घोषणा पत्र</a>।" },
    },
    {
      id: "online",
      title: "खुद ऑनलाइन आवेदन (e-Sathi)",
      steps: [
        '<a href="https://edistrict.up.gov.in/edistrictup/" target="_blank" rel="noopener nofollow">edistrict.up.gov.in</a> खोलें और <strong>सिटिजन लॉगिन (e-Sathi)</strong> चुनें। "ई-डिस्ट्रिक्ट लॉगिन" अधिकारियों और जन सेवा केंद्र संचालकों के लिए है, आम नागरिक के लिए नहीं।',
        "पहली बार हैं तो मोबाइल नंबर से <strong>नया पंजीकरण</strong> करें और लॉगिन करें।",
        "सेवाओं की सूची में <strong>जाति प्रमाण पत्र</strong> चुनें, फॉर्म भरें और कागज़ अपलोड करें।",
        "पोर्टल पर जो शुल्क दिखे उसका ऑनलाइन भुगतान करें और आवेदन संख्या नोट कर लें।",
        "आवेदन तहसील जाता है, लेखपाल जांच करते हैं, फिर तहसीलदार मंज़ूरी देते हैं। मंज़ूरी के बाद डिजिटल हस्ताक्षर वाले प्रमाण पत्र का डाउनलोड लिंक आपके e-Sathi खाते में आता है।",
      ],
    },
    {
      id: "offline",
      title: "जन सेवा केंद्र (CSC) या तहसील से",
      intro: "अगर ऑनलाइन करना मुश्किल हो तो नज़दीकी <strong>जन सेवा केंद्र</strong> या अपनी <strong>तहसील</strong> के केंद्र पर जाएं। फॉर्म, फोटो, स्व-घोषणा और कागज़ों की कॉपी साथ ले जाएं। केंद्र संचालक ऑनलाइन आवेदन करके रसीद देगा; उस पर आवेदन संख्या होती है। केंद्र पर सरकारी शुल्क के ऊपर सेवा शुल्क लग सकता है, पहले पूछ लें और रसीद ज़रूर लें। नज़दीकी केंद्र: <a href=\"/service/csc-locator/uttar-pradesh.html\">उत्तर प्रदेश CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील",
      list: [
        "<strong>कानून:</strong> प्रमाण पत्र सेवाएं <strong>उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011</strong> के तहत आती हैं। इस कानून में हर अधिसूचित सेवा के लिए पदाभिहित अधिकारी, तय समय सीमा, <strong>प्रथम अपील</strong> और <strong>द्वितीय अपील</strong> की व्यवस्था है।",
        "<strong>समय:</strong> जाति प्रमाण पत्र के लिए तय दिनों की संख्या हमें किसी मौजूदा सरकारी पेज पर नहीं मिली। आवेदन की रसीद पर या पोर्टल पर दिखने वाली तारीख देखें।",
        "<strong>फीस:</strong> शुल्क आवेदन/भुगतान के समय पोर्टल पर दिखता है। जन सेवा केंद्र का सेवा शुल्क अलग हो सकता है।",
        "<strong>शिकायत:</strong> समय पर प्रमाण पत्र न मिले या बेवजह खारिज हो तो तहसील/उपजिलाधिकारी कार्यालय में प्रथम अपील करें, या <a href=\"https://jansunwai.up.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">जनसुनवाई (IGRS) पोर्टल</a> पर शिकायत दर्ज करें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> e-District UP पोर्टल पर आवेदन संख्या डालकर आवेदन की स्थिति देखें, या e-Sathi खाते में लॉगिन करें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद e-Sathi खाते के लिंक से, या <strong>DigiLocker</strong> से (e-District UP के प्रमाण पत्र DigiLocker से जुड़े हैं)।",
        "<strong>सत्यापन:</strong> पोर्टल पर <strong>प्रमाण पत्र सत्यापन</strong> में आवेदन संख्या और प्रमाण पत्र संख्या डालें। पोर्टल के FAQ के अनुसार प्रमाण पत्र ऑनलाइन सत्यापित न हो तो मूल प्रमाण पत्र लेकर जिला प्रशासन/जारी करने वाले अधिकारी से संपर्क करें।",
      ],
      html: '<p>DigiLocker से प्रमाण पत्र निकालने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "ncl",
      title: "वैधता और OBC नॉन-क्रीमी लेयर",
      list: [
        "<strong>जाति:</strong> किसी की जाति नहीं बदलती, पर उत्तर प्रदेश के लिए प्रमाण पत्र की वैधता अवधि का कोई मौजूदा सरकारी आदेश हमें नहीं मिला। भर्ती या दाखिले में कई बार किसी तय तारीख के बाद बना प्रमाण पत्र मांगा जाता है; विज्ञापन/सूचना ध्यान से पढ़ें।",
        "<strong>OBC नॉन-क्रीमी लेयर:</strong> OBC आरक्षण क्रीमी लेयर में न आने पर ही मिलता है। परिवार की आय या पद बदलने से स्थिति बदल सकती है, इसलिए भर्ती में अक्सर हाल के वित्तीय वर्ष का प्रमाण पत्र मांगा जाता है।",
        "<strong>केंद्र की नौकरी:</strong> केंद्र के प्रारूप वाला OBC प्रमाण पत्र अलग होता है। जन सेवा केंद्र या तहसील में बताएं कि प्रमाण पत्र केंद्र सरकार की नौकरी के लिए चाहिए।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जाति का कोई पुराना रिकॉर्ड नहीं", "पिता/भाई-बहन का जाति प्रमाण पत्र, स्कूल रिकॉर्ड या प्रधान/पार्षद का पत्र लगाएं"],
          ["लेखपाल की जांच में पता नहीं मिला", "जांच के समय घर पर रहें; फॉर्म में मोबाइल नंबर सही दें"],
          ["गलत तहसील में आवेदन", "जहां आप रहते हैं उसी तहसील का पता लिखें"],
          ["नाम या पिता का नाम कागज़ों में अलग", "आधार, राशन कार्ड और स्कूल रिकॉर्ड में एक जैसा नाम रखें; ज़रूरत हो तो पहले सुधार करवाएं"],
          ["केंद्र की नौकरी में राज्य वाला प्रमाण पत्र", "केंद्र के प्रारूप वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "जिला NIC पृष्ठों पर e-District UP हेल्पडेस्क <strong>0522-2304706</strong> और ईमेल <strong>edistrict@nic.in</strong> (तकनीकी मदद) दिए गए हैं। आवेदन से जुड़ी बात के लिए पहले अपनी तहसील या उसी जन सेवा केंद्र से संपर्क करें जहां आवेदन किया था। शिकायत <a href=\"https://jansunwai.up.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">जनसुनवाई पोर्टल</a> पर दर्ज होती है।",
    },
  ],
  official: [
    { href: "https://edistrict.up.gov.in/edistrictup/", title: "e-District UP (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://esathi.up.gov.in/citizenservices/login/login.aspx", title: "e-Sathi सिटिजन लॉगिन" },
    { href: "https://jansunwai.up.nic.in/", title: "जनसुनवाई-समाधान (IGRS) शिकायत पोर्टल" },
    { href: "https://www.indiacode.nic.in/handle/123456789/19960", title: "उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011 (India Code)" },
  ],
  faq: [
    { q: "उत्तर प्रदेश में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.up.gov.in पर सिटिजन लॉगिन (e-Sathi) से पंजीकरण करें, जाति प्रमाण पत्र सेवा चुनें, फॉर्म भरें, कागज़ अपलोड करें और पोर्टल पर दिखा शुल्क भरें। जन सेवा केंद्र या तहसील से भी आवेदन होता है।" },
    { q: "UP में जाति प्रमाण पत्र कौन जारी करता है?", a: "लेखपाल की जांच रिपोर्ट के बाद तहसीलदार के डिजिटल हस्ताक्षर से जाति प्रमाण पत्र जारी होता है।" },
    { q: "UP जाति प्रमाण पत्र कितने दिन में बनता है?", a: "सेवा उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011 के तहत आती है, जिसमें समय सीमा तय होती है। दिनों की संख्या हमें किसी मौजूदा सरकारी पेज पर नहीं मिली; रसीद या पोर्टल पर दिखने वाली तारीख देखें। देरी हो तो प्रथम अपील या जनसुनवाई पोर्टल पर शिकायत करें।" },
    { q: "जाति प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "e-District UP पोर्टल के प्रमाण पत्र सत्यापन विकल्प में आवेदन संख्या और प्रमाण पत्र संख्या डालें। सत्यापन न हो तो मूल प्रमाण पत्र लेकर जिला प्रशासन/जारी करने वाले अधिकारी से संपर्क करें।" },
    { q: "केंद्र सरकार की नौकरी के लिए कौन सा OBC प्रमाण पत्र चाहिए?", a: "केंद्र के प्रारूप वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र, और जाति केंद्रीय OBC सूची में होनी चाहिए। राज्य वाला प्रमाण पत्र केंद्र की भर्ती में अक्सर नहीं माना जाता; विज्ञापन में दिया प्रारूप देखें।" },
  ],
  related: [
    { href: "/states/uttar-pradesh-income-certificate.html", emoji: "💰", title: "उत्तर प्रदेश आय प्रमाण पत्र", text: "e-District UP पर आवेदन" },
    { href: "/states/uttar-pradesh-domicile-certificate.html", emoji: "🏠", title: "उत्तर प्रदेश निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.up.gov.in/edistrictup/", label: "📝 e-District UP पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
