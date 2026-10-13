import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - esewa.punjab.gov.in (Sewa Kendra back-office / e-Sewa Punjab) home page:
//   "Download Certificate" (/certificateDownload), "Verify Certificate"
//   (/certificateVerification), "Track Status" (/trackStatus); call 1100;
//   complaint.sewakendra@gmail.com; m-Sewa app.
// - connect.punjab.gov.in (Connect Punjab citizen portal) bundle: citizen
//   services, SSO login/registration, RTS appeal API
//   (governance.punjab.gov.in/rtsappealapi).
// - Search-result extracts of official pages we could not open from our
//   checker:
//   * punjab.gov.in "Caste certificaate SC" service sheet (Sep 2025): SC caste
//     certificate, Govt. fee NIL, facilitation fee Rs 65, document checklist
//     linked on connect.punjab.gov.in.
//   * dit.punjab.gov.in 24082022.pdf (Punjab Gazette, 2022 RTS service list):
//     SC caste certificate 16 working days, general caste certificate 8
//     working days, Tehsildar designated officer, SDM first appellate
//     authority; two days extra when the service is taken through a Sewa
//     Kendra.
// Left out (not confirmable on an official page we could open): the BC/OBC
// certificate fee, time limit and income limit; validity of caste
// certificates; the full document checklist.
export const punjabCasteCertificate: DocGuide = {
  state: { slug: "punjab", hi: "पंजाब" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Punjab Caste Certificate 2026: Apply & Status",
  description: "पंजाब जाति प्रमाण पत्र (SC/BC Caste Certificate) 2026: सेवा केंद्र / Connect Punjab से आवेदन, तहसीलदार, RTS समय सीमा, ₹65 सुविधा शुल्क (SC), स्टेटस और डाउनलोड।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "पंजाब जाति प्रमाण पत्र 2026: सेवा केंद्र से आवेदन, समय सीमा, शुल्क, स्टेटस और डाउनलोड",
  lead: "पंजाब में जाति प्रमाण पत्र (SC, BC और दूसरी श्रेणियां) <strong>सेवा केंद्र</strong> से या <strong>Connect Punjab</strong> पोर्टल से आवेदन करके बनता है और राजस्व विभाग के <strong>तहसीलदार</strong> जारी करते हैं। सितंबर 2025 की सरकारी सेवा-शीट के अनुसार SC प्रमाण पत्र में <strong>सरकारी फीस शून्य और सुविधा शुल्क ₹65</strong> है। पंजाब के सेवा का अधिकार (RTS) कानून में SC प्रमाण पत्र के लिए 16 कार्य दिवस तय हैं (सेवा केंद्र से 2 दिन ज़्यादा)।",
  facts: [
    ["आवेदन", '<a href="https://connect.punjab.gov.in/" target="_blank" rel="noopener nofollow">connect.punjab.gov.in</a> / सेवा केंद्र'],
    ["जारी करते हैं", "तहसीलदार (अपील: SDM)"],
    ["समय सीमा (SC)", "16 कार्य दिवस (+2 दिन सेवा केंद्र से)"],
    ["शुल्क (SC)", "सरकारी फीस शून्य, सुविधा शुल्क ₹65"],
  ],
  notice: "<strong>सही प्रमाण पत्र चुनें:</strong> राज्य की नौकरी/योजना के लिए पंजाब का SC या BC प्रमाण पत्र चाहिए, जबकि केंद्र सरकार की नौकरी में OBC आरक्षण के लिए केंद्रीय सूची और नॉन-क्रीमी लेयर वाला प्रारूप मांगा जाता है। सेवा केंद्र पर बताएं कि प्रमाण पत्र किस काम के लिए है।",
  sections: [
    {
      id: "kya-hai",
      title: "पंजाब में कौन सा जाति प्रमाण पत्र",
      table: {
        head: ["प्रमाण पत्र", "कब चाहिए"],
        rows: [
          ["<strong>SC (अनुसूचित जाति) प्रमाण पत्र</strong>", "SC आरक्षण, छात्रवृत्ति, फीस माफी, योजनाएं"],
          ["<strong>BC (पिछड़ा वर्ग) प्रमाण पत्र</strong>", "पंजाब की BC सूची के अनुसार आरक्षण; इसमें क्रीमी लेयर/आय की शर्तें लागू होती हैं"],
          ["<strong>OBC (केंद्रीय प्रारूप)</strong>", "केंद्र सरकार की नौकरी/परीक्षा; भर्ती के विज्ञापन का प्रारूप देखें"],
          ["<strong>सामान्य जाति प्रमाण पत्र</strong>", "जहां सिर्फ जाति लिखी चाहिए; RTS सूची में इसकी समय सीमा 8 कार्य दिवस है"],
        ],
      },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "पूरी दस्तावेज़-सूची Connect Punjab की सेवा-चेकलिस्ट में दी जाती है, जिसे हम पूरा नहीं खोल पाए। आम तौर पर ये कागज़ मांगे जाते हैं, इसलिए साथ रखें:",
      list: [
        "<strong>पहचान और पता:</strong> आधार, मतदाता पहचान पत्र या दूसरा सरकारी पहचान पत्र।",
        "<strong>जाति का सबूत:</strong> पिता या परिवार के किसी सदस्य का पहले बना जाति प्रमाण पत्र, स्कूल रिकॉर्ड जिसमें जाति लिखी हो।",
        "<strong>पंजाब में निवास का सबूत</strong>।",
        "<strong>स्व-घोषणा / शपथ-पत्र</strong> और फोटो।",
        "<strong>BC के लिए:</strong> परिवार की आय का ब्यौरा (क्रीमी लेयर की जांच के लिए)।",
      ],
      callout: { kind: "ok", html: "सेवा केंद्र जाने से पहले Connect Punjab पर सेवा की <strong>दस्तावेज़-चेकलिस्ट</strong> देख लें, ताकि एक ही बार में काम हो जाए।" },
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "नज़दीकी <strong>सेवा केंद्र</strong> जाएं, या <a href=\"https://connect.punjab.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">connect.punjab.gov.in</a> पर रजिस्टर/लॉगिन करके नागरिक सेवाओं में जाति प्रमाण पत्र की सेवा चुनें।",
        "अपनी श्रेणी (SC / BC आदि) की सेवा चुनें और फॉर्म भरें।",
        "कागज़ जमा/अपलोड करें और शुल्क दें (SC: सरकारी फीस शून्य, सुविधा शुल्क ₹65)।",
        "<strong>रसीद / आवेदन संख्या</strong> संभालकर रखें; इसी से स्टेटस देखा जाता है।",
        "तहसीलदार की मंज़ूरी के बाद प्रमाण पत्र डाउनलोड करें या सेवा केंद्र से लें।",
      ],
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क और अपील (RTS)",
      table: {
        head: ["सेवा", "समय सीमा", "जारी करने वाले", "पहली अपील"],
        rows: [
          ["SC जाति प्रमाण पत्र", "16 कार्य दिवस", "तहसीलदार", "SDM"],
          ["सामान्य जाति प्रमाण पत्र", "8 कार्य दिवस", "तहसीलदार", "SDM"],
        ],
      },
      html: "<p>ये समय सीमाएं पंजाब सरकार की 2022 की RTS सेवा-सूची (राजपत्र) से हैं; सेवा केंद्र के ज़रिए आवेदन पर 2 दिन ज़्यादा माने जाते हैं। सूची बाद में बदली हो सकती है, इसलिए रसीद पर लिखी तारीख देखें।</p><p><strong>शुल्क:</strong> सितंबर 2025 की सेवा-शीट में SC प्रमाण पत्र के लिए सरकारी फीस शून्य और सुविधा शुल्क ₹65 है। BC प्रमाण पत्र का शुल्क हम पक्का नहीं कर पाए; सेवा केंद्र पर रसीद में लिखा शुल्क ही दें।</p>",
      callout: { kind: "warn", html: "समय सीमा बीत जाए या आवेदन बिना ठोस वजह खारिज हो तो SDM के पास अपील करें। Connect Punjab पर RTS अपील की सुविधा भी दी गई है। शिकायत के लिए पंजाब सरकार की हेल्पलाइन <strong>1100</strong> पर फोन कर सकते हैं (e-Sewa पोर्टल पर दी गई)।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> <a href=\"https://esewa.punjab.gov.in/trackStatus\" target=\"_blank\" rel=\"noopener nofollow\">e-Sewa पर Track Status</a> में आवेदन संख्या डालें।",
        "<strong>डाउनलोड:</strong> <a href=\"https://esewa.punjab.gov.in/certificateDownload\" target=\"_blank\" rel=\"noopener nofollow\">Download Certificate</a> से।",
        "<strong>सत्यापन:</strong> <a href=\"https://esewa.punjab.gov.in/certificateVerification\" target=\"_blank\" rel=\"noopener nofollow\">Verify Certificate</a> से प्रमाण पत्र की जांच करें।",
        "मोबाइल पर <strong>m-Sewa</strong> ऐप भी है।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत श्रेणी की सेवा चुनी", "SC, BC या केंद्रीय OBC, ज़रूरत के हिसाब से सही सेवा चुनें"],
          ["जाति का कोई पुराना सबूत नहीं", "परिवार में किसी का पहले बना जाति प्रमाण पत्र या स्कूल रिकॉर्ड लगाएं"],
          ["BC में आय/क्रीमी लेयर की जानकारी अधूरी", "परिवार की सभी स्रोतों की आय सही-सही लिखें"],
          ["रसीद/आवेदन संख्या खो दी", "सेवा केंद्र से आवेदन का ब्यौरा निकलवाएं; आगे से रसीद संभालकर रखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://connect.punjab.gov.in/", title: "Connect Punjab (नागरिक सेवाएं, RTS अपील)" },
    { href: "https://esewa.punjab.gov.in/", title: "e-Sewa Punjab (स्टेटस, डाउनलोड, सत्यापन)" },
    { href: "https://esewa.punjab.gov.in/trackStatus", title: "आवेदन का स्टेटस" },
    { href: "https://esewa.punjab.gov.in/certificateVerification", title: "प्रमाण पत्र सत्यापन" },
  ],
  faq: [
    { q: "पंजाब में जाति प्रमाण पत्र कहां बनता है?", a: "नज़दीकी सेवा केंद्र से या Connect Punjab पोर्टल पर आवेदन होता है। प्रमाण पत्र राजस्व विभाग के तहसीलदार जारी करते हैं।" },
    { q: "पंजाब SC प्रमाण पत्र कितने दिन में बनता है?", a: "पंजाब की 2022 की RTS सेवा-सूची में SC जाति प्रमाण पत्र के लिए 16 कार्य दिवस तय हैं; सेवा केंद्र से आवेदन पर 2 दिन और माने जाते हैं।" },
    { q: "पंजाब SC प्रमाण पत्र की फीस कितनी है?", a: "सितंबर 2025 की सरकारी सेवा-शीट के अनुसार सरकारी फीस शून्य है और सेवा केंद्र का सुविधा शुल्क ₹65 है।" },
    { q: "प्रमाण पत्र समय पर न मिले तो क्या करें?", a: "RTS सूची के अनुसार पहली अपील SDM के पास होती है। Connect Punjab पर RTS अपील का विकल्प है, और शिकायत के लिए हेल्पलाइन 1100 है।" },
    { q: "पंजाब का जाति प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "esewa.punjab.gov.in पर Verify Certificate से जांच करें।" },
  ],
  related: [
    { href: "/states/punjab-income-certificate.html", emoji: "💰", title: "पंजाब आय प्रमाण पत्र", text: "₹75 शुल्क, 1 साल वैध" },
    { href: "/states/punjab-domicile-certificate.html", emoji: "🏠", title: "पंजाब निवास प्रमाण पत्र", text: "रेज़िडेंस सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://connect.punjab.gov.in/", label: "📝 Connect Punjab पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
