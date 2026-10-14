import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; eunnat.jk.gov.in, jk.gov.in and district
// sites were not reachable from our checker, so we used search-result
// extracts of official pages):
// - eunnat.jk.gov.in (e-Unnat, J&K online services portal) "Newly Launched
//   Services" listing: "Application for Issuance of Income Certificate by
//   Tehsildar", PSGA time 30 days.
// - jansugam.jk.gov.in (ServicePlus, J&K UT instance; opened directly):
//   citizen registration/login, "track application", "Know your
//   Eligibility".
// - J&K Public Services Guarantee Act, 2011: GAD notification (Feb 2026,
//   search extract) fixing timelines and designated officers (Tehsildars) for
//   Revenue Department services under sections 4 and 8 of the Act.
// - Bandipora district (bandipore.nic.in) service page extract: income
//   certificates are provided by the Revenue Department.
// Left out (not confirmable on an official page we could open): fee,
// document list, validity period, helpline number, appeal officer names.
export const jammuKashmirIncomeCertificate: DocGuide = {
  state: { slug: "jammu-kashmir", hi: "जम्मू और कश्मीर" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Jammu & Kashmir Income Certificate 2026: Apply Online",
  description: "जम्मू और कश्मीर आय प्रमाण पत्र 2026: e-Unnat पोर्टल पर ऑनलाइन आवेदन, तहसीलदार से जारी, PSGA के तहत 30 दिन की समय सीमा, कागज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "जम्मू और कश्मीर आय प्रमाण पत्र 2026: e-Unnat पर आवेदन, तहसीलदार, 30 दिन की समय सीमा",
  lead: "जम्मू और कश्मीर में आय प्रमाण पत्र राजस्व विभाग देता है और इसे <strong>तहसीलदार</strong> जारी करते हैं। आवेदन UT सरकार के <strong>e-Unnat</strong> पोर्टल पर ऑनलाइन होता है। e-Unnat की सेवा-सूची के अनुसार लोक सेवा गारंटी अधिनियम (PSGA) में इस सेवा की समय सीमा <strong>30 दिन</strong> है।",
  facts: [
    ["पोर्टल", '<a href="https://eunnat.jk.gov.in/" target="_blank" rel="noopener nofollow">eunnat.jk.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (राजस्व विभाग)"],
    ["समय सीमा", "30 दिन (PSGA)"],
    ["स्टेटस", '<a href="https://jansugam.jk.gov.in/" target="_blank" rel="noopener nofollow">jansugam.jk.gov.in</a>'],
  ],
  notice: "<strong>शुल्क और वैधता:</strong> J&K के आय प्रमाण पत्र की फीस और वैधता हम किसी खुलने वाले सरकारी पेज पर पक्की नहीं कर पाए, इसलिए यहां कोई राशि नहीं लिख रहे। ऑनलाइन फॉर्म में जो शुल्क दिखे वही दें, और जहां प्रमाण पत्र जमा करना है वहां पूछ लें कि कितना पुराना प्रमाण पत्र चलेगा।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। यह छात्रवृत्ति, फीस माफी, आय पर आधारित योजनाओं और कई दाखिलों में मांगा जाता है।",
      callout: { kind: "info", html: "EWS आरक्षण के लिए आम आय प्रमाण पत्र नहीं, बल्कि <strong>आय और संपत्ति प्रमाण पत्र</strong> मांगा जाता है। OBC/दूसरी आरक्षित श्रेणी के लिए <a href=\"/states/jammu-kashmir-caste-certificate.html\">J&K जाति / श्रेणी प्रमाण पत्र गाइड</a> देखें।" },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "e-Unnat की पूरी दस्तावेज़-सूची हम खोल नहीं पाए। आम तौर पर आय प्रमाण पत्र में ये कागज़ मांगे जाते हैं, इसलिए स्कैन करके रखें और फॉर्म में जो मांगा जाए वही लगाएं:",
      list: [
        "<strong>पहचान:</strong> आधार या दूसरा सरकारी पहचान पत्र, फोटो।",
        "<strong>निवास का सबूत</strong> (J&K डोमिसाइल प्रमाण पत्र, राशन कार्ड आदि)।",
        "<strong>आय का सबूत:</strong> वेतन पर्ची, पेंशन, ITR, या खेती/व्यापार की आय का ब्यौरा।",
        "<strong>स्व-घोषणा / शपथ-पत्र</strong>, जिसमें परिवार की सभी स्रोतों की आय लिखी हो।",
      ],
      callout: { kind: "warn", html: "आय सही-सही लिखें; तहसील स्तर पर इसकी जांच होती है। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन",
      steps: [
        '<a href="https://eunnat.jk.gov.in/" target="_blank" rel="noopener nofollow">eunnat.jk.gov.in</a> खोलें और मोबाइल नंबर से रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में <strong>Application for Issuance of Income Certificate by Tehsildar</strong> चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और Submit करें।",
        "<strong>आवेदन संख्या (Application Reference Number)</strong> लिखकर रखें; इसी से स्टेटस देखा जाता है।",
        "तहसीलदार की मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "खुद ऑनलाइन न कर पाएं तो नज़दीकी CSC से आवेदन करवाएं: <a href=\"/service/csc-locator/jammu-kashmir.html\">CSC लोकेटर</a>। फाइल छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "samay",
      title: "समय सीमा और अपील (PSGA)",
      intro: "जम्मू और कश्मीर लोक सेवा गारंटी अधिनियम, 2011 (PSGA) के तहत सरकार हर सेवा के लिए समय सीमा और नामित अधिकारी तय करती है। e-Unnat की सूची में तहसीलदार से आय प्रमाण पत्र की समय सीमा <strong>30 दिन</strong> दी गई है।",
      callout: { kind: "warn", html: "30 दिन में प्रमाण पत्र न मिले या बिना ठोस वजह आवेदन खारिज हो, तो PSGA के तहत अपील कर सकते हैं। अपील किस अधिकारी के पास होगी, यह अपनी तहसील या उपायुक्त (DC) कार्यालय से पूछें; हम इसकी आधिकारिक सूची नहीं खोल पाए।" },
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> e-Unnat पर लॉगिन करके, या ServicePlus J&K (<a href=\"https://jansugam.jk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">jansugam.jk.gov.in</a>) पर <strong>track application</strong> में आवेदन संख्या डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद लॉगिन करके।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई सबूत नहीं लगाया", "वेतन/पेंशन पर्ची, ITR या आय का शपथ-पत्र लगाएं"],
          ["गलत तहसील चुनी", "जहां आप रहते हैं, उसी तहसील की सेवा में आवेदन करें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवा लिया", "EWS का आय और संपत्ति प्रमाण पत्र अलग से बनवाएं"],
          ["आवेदन संख्या खो गई", "लॉगिन करके अपने आवेदन देखें; आगे से संख्या लिखकर रखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://eunnat.jk.gov.in/", title: "e-Unnat J&K (ऑनलाइन सेवाएं)" },
    { href: "https://jansugam.jk.gov.in/", title: "ServicePlus J&K (लॉगिन, track application)" },
  ],
  faq: [
    { q: "जम्मू-कश्मीर में आय प्रमाण पत्र कौन जारी करता है?", a: "राजस्व विभाग के तहसीलदार। e-Unnat पर सेवा का नाम \"Application for Issuance of Income Certificate by Tehsildar\" है।" },
    { q: "J&K आय प्रमाण पत्र कितने दिन में बनता है?", a: "e-Unnat की सेवा-सूची के अनुसार लोक सेवा गारंटी अधिनियम (PSGA) में इसकी समय सीमा 30 दिन है।" },
    { q: "J&K आय प्रमाण पत्र की फीस कितनी है?", a: "हम किसी खुलने वाले सरकारी पेज पर फीस पक्की नहीं कर पाए। ऑनलाइन फॉर्म में जो शुल्क दिखे वही दें; CSC अपना सेवा शुल्क अलग ले सकता है, पहले पूछ लें।" },
    { q: "आवेदन का स्टेटस कहां देखें?", a: "e-Unnat पर लॉगिन करके या jansugam.jk.gov.in पर track application में आवेदन संख्या डालकर।" },
  ],
  related: [
    { href: "/states/jammu-kashmir-caste-certificate.html", emoji: "📜", title: "J&K जाति / श्रेणी प्रमाण पत्र", text: "SC, ST, OBC और दूसरी श्रेणियां" },
    { href: "/states/jammu-kashmir-domicile-certificate.html", emoji: "🏠", title: "J&K डोमिसाइल प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://eunnat.jk.gov.in/", label: "📝 e-Unnat पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
