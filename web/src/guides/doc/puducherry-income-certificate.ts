import type { DocGuide } from "./types";

// Sources (checked 13-14 Oct 2026):
// - revenue.py.gov.in/downloads/EODB/EODB-Income Certificate.pdf: online
//   procedure on https://edistrict.py.gov.in (register/login, Department of
//   Revenue and Disaster Management, Income Certificate), "No fee is required
//   to be paid for obtaining Income Certificate", VAO -> Revenue Inspector ->
//   Deputy Tahsildar/Tahsildar, SMS/message on approval and download after
//   login, "Track application" with application number, upload list (Aadhaar
//   optional, photo, salary slip or Form 16, ration card, TC, EPIC etc.).
// - revenue.py.gov.in forms page: DR&DM "Application for Caste/Community,
//   Residence, Income Certificate" (Tamil form addressed to the Tahsildar, with
//   a table of family members, relationship, occupation and monthly income,
//   and a declaration).
// - revenue.py.gov.in citizen charter page: "Revision of Citizen Charter of
//   DR&DM is under process", previous charter: income certificate, applicant
//   resident of Pondicherry, salary/income proof, Tahsildar/Deputy Tahsildar,
//   10 days, remedy Deputy Collector (Revenue).
// - revenue.py.gov.in/downloads/EWS certificate - Instructions.pdf (DRDM memo
//   No. 2587/DRDM/C2/EWS/2019): Income & Asset Certificate for EWS, family
//   gross annual income below Rs 8 lakh (all sources, previous financial
//   year), asset exclusions, family definition, issued by Tahsildar or Deputy
//   Tahsildar-cum-Executive Magistrate after field enquiry.
// - Gazette Extraordinary No. 58 (18 July 2023), G.O. Ms. No. 11, DRDM: Aadhaar
//   for online certificates and alternatives.
// - py.gov.in: e-District and Public Grievance links.
// Left out (not confirmable): a fixed validity period for the income
// certificate, a current RTS time limit (charter under revision), helpline.
// Old description said fee Rs 20; the DRDM procedure says no fee, so it was
// rewritten.
export const puducherryIncomeCertificate: DocGuide = {
  state: { slug: "puducherry", hi: "पुदुचेरी" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Puducherry Income Certificate 2026: Apply Online",
  description: "पुदुचेरी आय प्रमाण पत्र 2026: e-District Puducherry पर ऑनलाइन आवेदन, कोई सरकारी शुल्क नहीं, ज़रूरी दस्तावेज़, जांच की प्रक्रिया, स्टेटस और EWS प्रमाण पत्र।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "पुदुचेरी आय प्रमाण पत्र 2026: e-District पर आवेदन, कागज़, जांच और स्टेटस",
  lead: "पुदुचेरी में आय प्रमाण पत्र राजस्व एवं आपदा प्रबंधन विभाग (DRDM) देता है। आवेदन edistrict.py.gov.in पर ऑनलाइन या अपने तालुक/उप-तालुक कार्यालय में होता है, और विभाग के अनुसार इसका <strong>कोई शुल्क नहीं</strong> है। गांव के VAO और राजस्व निरीक्षक की जांच के बाद तहसीलदार या उप-तहसीलदार प्रमाण पत्र मंज़ूर करते हैं, जिसे फिर पोर्टल से डाउनलोड किया जाता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.py.gov.in/" target="_blank" rel="noopener nofollow">edistrict.py.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार / उप-तहसीलदार"],
    ["फीस", "कोई शुल्क नहीं (DRDM की प्रक्रिया पुस्तिका)"],
    ["आय का सबूत", "वेतन पर्ची या Form 16, परिवार की आय का ब्योरा"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है, और कौन सा चाहिए",
      table: {
        head: ["प्रमाण पत्र", "कब चाहिए"],
        rows: [
          ["<strong>आय प्रमाण पत्र</strong>", "छात्रवृत्ति, फीस में छूट, कल्याण योजनाएं और दूसरे कामों में परिवार की आय का सबूत"],
          ["<strong>EWS आय और संपत्ति प्रमाण पत्र</strong>", "आर्थिक रूप से कमजोर वर्ग (EWS) के 10% आरक्षण के लिए; यह अलग प्रारूप में बनता है"],
          ["<strong>नॉन-क्रीमी लेयर वाला OBC प्रमाण पत्र</strong>", "OBC आरक्षण के लिए; यह जाति प्रमाण पत्र की सेवा है, आय प्रमाण पत्र नहीं"],
        ],
      },
      callout: { kind: "info", html: "EWS आरक्षण के लिए साधारण आय प्रमाण पत्र नहीं चलता। उसके लिए <strong>Income & Asset Certificate</strong> तय प्रारूप में बनता है (नीचे देखें)।" },
    },
    {
      id: "aay",
      title: "आय कैसे लिखी जाती है",
      list: [
        "राजस्व विभाग के आवेदन फॉर्म (तमिल में) में परिवार के हर सदस्य का नाम, उम्र, रिश्ता, काम और <strong>मासिक आय</strong> लिखनी होती है।",
        "फॉर्म में अपने घर (अपना/किराये का) और परिवार की सालाना आय का ब्योरा भी देना होता है, और अंत में यह घोषणा करनी होती है कि दी गई जानकारी सही है; गलत जानकारी पर कार्रवाई हो सकती है।",
        "नौकरी करने वाले सदस्यों के लिए वेतन पर्ची या Form 16 लगाएं। खेती, मज़दूरी या छोटे काम की आय सही-सही लिखें; VAO गांव में इसकी जांच करते हैं।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "राजस्व विभाग की ऑनलाइन प्रक्रिया पुस्तिका में ये कागज़ बताए गए हैं (कई वैकल्पिक हैं):",
      list: [
        "आवेदक की फोटो।",
        "आय का प्रमाण: <strong>वेतन पर्ची या Form 16</strong>।",
        "आधार कार्ड (सूची में वैकल्पिक, पर ऑनलाइन आवेदन के लिए 2023 की अधिसूचना में आधार नंबर या प्रमाणीकरण ज़रूरी बताया गया है)।",
        "परिवार का राशन कार्ड (वैकल्पिक)।",
        "मतदाता पहचान पत्र (EPIC) (वैकल्पिक)।",
        "स्थानांतरण प्रमाण पत्र (TC) और जन्म प्रमाण पत्र (वैकल्पिक, उम्र के सबूत के लिए)।",
        "माता-पिता के पिछले पते का ब्योरा और सबूत, और कोई दूसरा सहायक कागज़।",
      ],
      callout: { kind: "ok", html: "<strong>आधार नहीं है?</strong> 2023 की अधिसूचना के अनुसार आधार नामांकन पर्ची के साथ बैंक/डाकघर पासबुक (फोटो वाली), पैन, पासपोर्ट, राशन कार्ड, वोटर ID या ड्राइविंग लाइसेंस में से कोई एक देकर भी आवेदन हो सकता है।" },
    },
    {
      id: "online",
      title: "e-District पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://edistrict.py.gov.in/" target="_blank" rel="noopener nofollow">edistrict.py.gov.in</a> खोलें। पहली बार हैं तो नया यूज़र बनकर यूज़रनेम और पासवर्ड बनाएं, फिर लॉगिन करें।',
        "विभागों की सूची में <strong>Department of Revenue and Disaster Management</strong> चुनें।",
        "प्रमाण पत्र में <strong>Income Certificate</strong> चुनें।",
        "फॉर्म के सभी अनिवार्य खाने भरें और कागज़ अपलोड करें।",
        "<strong>Save</strong> और <strong>Submit</strong> करें और पावती (Acknowledgement) रखें। इसमें आवेदन संख्या होती है।",
        "कोई शुल्क नहीं देना है। मंज़ूरी का संदेश आने पर फिर लॉगिन करके प्रमाण पत्र डाउनलोड करें।",
      ],
    },
    {
      id: "offline",
      title: "तालुक कार्यालय या CSC से",
      intro: "राजस्व विभाग की वेबसाइट पर निवास, जाति और आय प्रमाण पत्र का <strong>एक ही आवेदन फॉर्म</strong> (तमिल में, तहसीलदार के नाम) डाउनलोड के लिए रखा है। इसे भरकर अपने तालुक या उप-तालुक कार्यालय में दे सकते हैं। ऑनलाइन फॉर्म भरने में दिक्कत हो तो पास के कॉमन सर्विस सेंटर (CSC) की मदद लें; वहां कोई सेवा शुल्क लगे तो पहले पूछ लें।",
    },
    {
      id: "samay",
      title: "जांच, समय सीमा और अपील",
      steps: [
        "आपके राजस्व गांव के <strong>ग्राम प्रशासनिक अधिकारी (VAO)</strong> अपलोड किए कागज़ जांचते हैं; कुछ कम हो तो मांगते हैं, फिर रिपोर्ट के साथ राजस्व निरीक्षक को भेजते हैं।",
        "<strong>राजस्व निरीक्षक (RI)</strong> रिपोर्ट जांचकर, ज़रूरत हो तो आपसे पूछकर, आवेदन उप-तहसीलदार/तहसीलदार को भेजते हैं।",
        "<strong>उप-तहसीलदार/तहसीलदार</strong> रिपोर्ट देखकर आवेदन मंज़ूर या खारिज करते हैं।",
      ],
      html: "<p><strong>समय सीमा:</strong> विभाग के पिछले नागरिक चार्टर में आय प्रमाण पत्र के लिए 10 दिन लिखे थे और देरी पर उप/डिप्टी कलेक्टर (राजस्व) के पास जाने का रास्ता बताया गया था। वेबसाइट के अनुसार यह चार्टर अभी संशोधित हो रहा है, इसलिए नई समय सीमा के लिए तालुक कार्यालय से पूछें।</p>",
      callout: { kind: "warn", html: "आवेदन बहुत दिन अटका रहे या बिना ठोस वजह खारिज हो, तो अपने क्षेत्र के <strong>उप/डिप्टी कलेक्टर (राजस्व)</strong> से संपर्क करें, या <a href=\"https://py.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">py.gov.in</a> के Public Grievance लिंक से शिकायत करें।" },
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> e-District पर लॉगिन करें, <strong>Track application</strong> पर क्लिक करें और आवेदन संख्या डालें। आवेदन किस स्तर पर है, यह दिखेगा।",
        "<strong>डाउनलोड:</strong> मंज़ूरी का संदेश मिलने पर लॉगिन करके प्रमाण पत्र डाउनलोड करें और प्रिंट रखें।",
      ],
    },
    {
      id: "ews",
      title: "EWS आय और संपत्ति प्रमाण पत्र",
      list: [
        "जो लोग SC, ST या OBC आरक्षण में नहीं आते और जिनके <strong>परिवार की कुल सालाना आय ₹8 लाख से कम</strong> है (पिछले वित्तीय वर्ष की, वेतन, खेती, व्यवसाय आदि सब मिलाकर), वे EWS में आ सकते हैं।",
        "आय कम होने पर भी EWS नहीं मिलेगा अगर परिवार के पास 5 एकड़ या ज़्यादा खेती की ज़मीन, 1000 वर्ग फुट या बड़ा फ्लैट, अधिसूचित नगरपालिका में 100 वर्ग गज या बड़ा प्लॉट, या दूसरी जगह 200 वर्ग गज या बड़ा प्लॉट हो।",
        "यहां <strong>परिवार</strong> में आवेदक, माता-पिता, 18 साल से कम उम्र के भाई-बहन, पति/पत्नी और 18 साल से कम उम्र के बच्चे गिने जाते हैं। अलग-अलग जगह की संपत्ति जोड़ी जाती है।",
        "यह प्रमाण पत्र तहसीलदार या उप-तहसीलदार-सह-कार्यकारी मजिस्ट्रेट, स्थल जांच के बाद, तय प्रारूप में देते हैं।",
      ],
    },
    {
      id: "validity",
      title: "वैधता: नया कब बनवाएं",
      intro: "राजस्व विभाग के जो पेज हमने देखे, उनमें आय प्रमाण पत्र की कोई तय वैधता अवधि नहीं लिखी है। आय हर साल बदल सकती है, इसलिए छात्रवृत्ति, दाखिले या योजना के फॉर्म में जितना नया प्रमाण पत्र मांगा गया हो (जैसे चालू वित्तीय वर्ष का), उसी हिसाब से नया बनवाएं।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का सबूत नहीं लगाया", "वेतन पर्ची/Form 16 लगाएं; नौकरी नहीं है तो परिवार की आय का सही ब्योरा और उपलब्ध कागज़ दें"],
          ["VAO ने और कागज़ मांगे", "पोर्टल पर देखते रहें और मांगे गए कागज़ जल्दी जमा करें"],
          ["आधार प्रमाणीकरण नहीं हुआ", "आधार OTP या आइरिस/चेहरे से प्रमाणीकरण कराएं, या नामांकन पर्ची के साथ मान्य पहचान पत्र दें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र लगाया", "EWS के लिए अलग Income & Asset Certificate बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पहले अपने गांव के VAO या तालुक/उप-तालुक कार्यालय से संपर्क करें। इस सेवा का अलग हेल्पलाइन नंबर हमें आधिकारिक पेज पर नहीं मिला, इसलिए किसी अनौपचारिक नंबर पर अपने कागज़ न भेजें।",
    },
  ],
  official: [
    { href: "https://edistrict.py.gov.in/", title: "e-District Puducherry (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://revenue.py.gov.in/", title: "राजस्व एवं आपदा प्रबंधन विभाग, पुदुचेरी" },
    { href: "https://revenue.py.gov.in/downloads/EODB/EODB-Income%20Certificate.pdf", title: "आय प्रमाण पत्र आवेदन की प्रक्रिया (PDF)" },
    { href: "https://revenue.py.gov.in/forms.html", title: "आवेदन फॉर्म: जाति, निवास, आय प्रमाण पत्र" },
    { href: "https://py.gov.in/", title: "पुदुचेरी सरकार का पोर्टल (Public Grievance लिंक)" },
  ],
  faq: [
    { q: "पुदुचेरी में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.py.gov.in पर रजिस्टर/लॉगिन करें, Department of Revenue and Disaster Management में Income Certificate चुनें, फॉर्म भरें, वेतन पर्ची/Form 16 और दूसरे कागज़ अपलोड करें, Submit करें और पावती रखें। मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड करें।" },
    { q: "पुदुचेरी आय प्रमाण पत्र की फीस कितनी है?", a: "राजस्व विभाग की प्रक्रिया पुस्तिका के अनुसार आय प्रमाण पत्र के लिए कोई शुल्क नहीं है। CSC पर सेवा शुल्क लगे तो पहले पूछ लें।" },
    { q: "आय प्रमाण पत्र कौन देता है?", a: "आपके तालुक के तहसीलदार या उप-तालुक के उप-तहसीलदार। पहले गांव के VAO और राजस्व निरीक्षक आवेदन की जांच करते हैं।" },
    { q: "पुदुचेरी आय प्रमाण पत्र कितने दिन में बनता है?", a: "विभाग के पिछले नागरिक चार्टर में 10 दिन लिखे थे। चार्टर अभी संशोधित हो रहा है, इसलिए नई समय सीमा तालुक कार्यालय से पूछें और e-District पर Track application से स्टेटस देखते रहें।" },
    { q: "EWS के लिए कौन सा प्रमाण पत्र चाहिए?", a: "EWS आरक्षण के लिए अलग Income & Asset Certificate बनता है। परिवार की सालाना आय ₹8 लाख से कम हो और तय सीमा से ज़्यादा ज़मीन/मकान/प्लॉट न हो। इसे तहसीलदार या उप-तहसीलदार स्थल जांच के बाद देते हैं।" },
  ],
  related: [
    { href: "/states/puducherry-caste-certificate.html", emoji: "📜", title: "पुदुचेरी जाति प्रमाण पत्र", text: "स्थायी प्रमाण पत्र, कट-ऑफ तारीख" },
    { href: "/states/puducherry-domicile-certificate.html", emoji: "🏠", title: "पुदुचेरी निवास प्रमाण पत्र", text: "Residence / Nativity" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.py.gov.in/", label: "📝 e-District Puducherry पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
