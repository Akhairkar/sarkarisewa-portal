import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - ladakh.gov.in "Online Citizen Services" listing and service page
//   "Schedule Tribe Certificate" (opened directly): "The concerned Tehsildars
//   in the region are mandated to issue Caste Certificate falling under their
//   jurisdiction"; Revenue Department, Tehsildar Office near DC Office
//   Complex, Leh 194101. The listing has no online application link for caste
//   certificates (domicile has its own portal, domicile.ladakh.gov.in).
// - UNI news report (September, search extract): the Lieutenant Governor of
//   Ladakh empowered Naib-Tehsildars holding independent charge of a tehsil
//   to issue Reserved Category and Income Certificates in their jurisdiction,
//   to help residents of remote areas. We could not open the official order.
// - Central-format notes (2024-25 recruitment annexures): SC/ST/OBC
//   certificates for central jobs/admissions in the Government of India
//   format, from a revenue officer not below Tehsildar.
// Left out (not confirmable on an official page we could open): online
// portal, fee, time limit, document list, validity, appeal officer.
export const ladakhCasteCertificate: DocGuide = {
  state: { slug: "ladakh", hi: "लद्दाख" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Ladakh Caste Certificate 2026: Apply & Status",
  description: "लद्दाख जाति / ST प्रमाण पत्र 2026: तहसीलदार कार्यालय से आवेदन, स्वतंत्र प्रभार वाले नायब तहसीलदार, ज़रूरी कागज़, केंद्रीय प्रारूप और स्टेटस पूछने का तरीका।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "लद्दाख जाति / ST प्रमाण पत्र 2026: तहसील से आवेदन, कागज़ और केंद्रीय प्रारूप",
  lead: "लद्दाख में अनुसूचित जनजाति (ST) समेत जाति प्रमाण पत्र राजस्व विभाग के <strong>तहसीलदार</strong> अपनी तहसील के लोगों के लिए जारी करते हैं (UT प्रशासन की वेबसाइट के अनुसार)। एक समाचार रिपोर्ट के अनुसार उप-राज्यपाल ने तहसील का <strong>स्वतंत्र प्रभार</strong> संभाल रहे <strong>नायब तहसीलदारों</strong> को भी आरक्षित श्रेणी और आय प्रमाण पत्र जारी करने का अधिकार दिया है, ताकि दूर के इलाकों के लोगों को लंबा सफर न करना पड़े।",
  facts: [
    ["जारी करते हैं", "तहसीलदार (स्वतंत्र प्रभार वाले नायब तहसीलदार भी)"],
    ["कहां आवेदन", "अपनी तहसील का कार्यालय"],
    ["ऑनलाइन", "UT वेबसाइट पर ऑनलाइन लिंक नहीं मिला"],
    ["विभाग", "राजस्व विभाग, UT लद्दाख"],
  ],
  notice: "<strong>सही प्रारूप चुनें:</strong> केंद्र सरकार की नौकरी या केंद्रीय संस्थानों में दाखिले के लिए SC/ST/OBC प्रमाण पत्र <strong>भारत सरकार के प्रारूप</strong> में मांगा जाता है, और OBC में केंद्रीय सूची व नॉन-क्रीमी लेयर की शर्त लगती है। तहसील में बताएं कि प्रमाण पत्र किस काम के लिए है।",
  sections: [
    {
      id: "kya-hai",
      title: "कौन जारी करता है और कहां जाएं",
      intro: "UT लद्दाख की वेबसाइट पर \"Schedule Tribe Certificate\" सेवा के बारे में लिखा है कि <strong>क्षेत्र के तहसीलदार अपनी तहसील में आने वाले लोगों का जाति प्रमाण पत्र जारी करते हैं</strong>। इसलिए आवेदन उसी तहसील में दें जहां आपका स्थायी निवास है (लेह ज़िले में या कारगिल ज़िले में)।",
      list: [
        "<strong>लेह:</strong> वेबसाइट पर तहसीलदार कार्यालय का पता \"DC Office Complex के पास, लेह 194101\" दिया है।",
        "<strong>दूर-दराज़ की तहसीलें:</strong> जहां नायब तहसीलदार के पास तहसील का स्वतंत्र प्रभार है, वहां वे भी आरक्षित श्रेणी का प्रमाण पत्र जारी कर सकते हैं (समाचार रिपोर्ट के अनुसार; आधिकारिक आदेश हम नहीं खोल पाए)।",
      ],
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "लद्दाख की आधिकारिक दस्तावेज़-सूची हमें ऑनलाइन नहीं मिली। आम तौर पर ये कागज़ मांगे जाते हैं, इसलिए साथ ले जाएं और तहसील में पूरी सूची पूछ लें:",
      list: [
        "<strong>पहचान:</strong> आधार, मतदाता पहचान पत्र, फोटो।",
        "<strong>लद्दाख में स्थायी निवास का सबूत</strong> (जैसे रेज़िडेंट/डोमिसाइल प्रमाण पत्र, ज़मीन/घर के कागज़)।",
        "<strong>जाति/जनजाति का सबूत:</strong> पिता या परिवार के किसी सदस्य का पहले बना प्रमाण पत्र, या ऐसा रिकॉर्ड जिसमें जाति/जनजाति लिखी हो।",
        "<strong>OBC या आय से जुड़ी श्रेणी के लिए:</strong> परिवार की आय का ब्यौरा।",
      ],
      callout: { kind: "info", html: "लद्दाख का रेज़िडेंट/डोमिसाइल प्रमाण पत्र अलग पोर्टल <a href=\"https://domicile.ladakh.gov.in/login\" target=\"_blank\" rel=\"noopener nofollow\">domicile.ladakh.gov.in</a> पर बनता है। देखें: <a href=\"/states/ladakh-domicile-certificate.html\">लद्दाख डोमिसाइल प्रमाण पत्र</a>।" },
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        "अपनी <strong>तहसील के कार्यालय</strong> (तहसीलदार या स्वतंत्र प्रभार वाले नायब तहसीलदार) में जाएं।",
        "आवेदन फॉर्म लें, भरें और कागज़ों की कॉपी लगाएं। फॉर्म किस श्रेणी (ST, SC, OBC आदि) और किस प्रारूप (UT या केंद्र) का है, यह साफ लिखें।",
        "आवेदन की <strong>रसीद / डायरी नंबर</strong> ज़रूर लें; इसी से आगे पूछताछ होती है।",
        "पटवारी/राजस्व कर्मचारियों की जांच के बाद प्रमाण पत्र तहसील से लें।",
      ],
      callout: { kind: "ok", html: "UT लद्दाख की वेबसाइट की \"Online Citizen Services\" सूची में जाति प्रमाण पत्र का कोई ऑनलाइन आवेदन लिंक नहीं है, इसलिए हम इसे ऑनलाइन सेवा नहीं बता रहे। कोई केंद्र ऑनलाइन आवेदन का दावा करे तो पहले तहसील से पुष्टि करें। नज़दीकी CSC: <a href=\"/service/csc-locator/ladakh.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क और शिकायत",
      intro: "लद्दाख में जाति प्रमाण पत्र की तय समय सीमा, शुल्क और अपील अधिकारी हम किसी खुलने वाले सरकारी पेज पर पक्के नहीं कर पाए, इसलिए यहां कोई संख्या नहीं लिख रहे। रसीद लेते समय पूछें कि प्रमाण पत्र कब तक मिलेगा। देर हो तो लिखित में तहसीलदार से, फिर ज़िले के डिप्टी कमिश्नर कार्यालय में शिकायत करें और पावती रखें।",
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र लेना",
      list: [
        "<strong>स्टेटस:</strong> रसीद/डायरी नंबर लेकर तहसील कार्यालय में पूछें।",
        "<strong>प्रमाण पत्र:</strong> तहसील से लें और उसकी कुछ फोटोकॉपी व स्कैन संभालकर रखें।",
      ],
      html: '<p>DigiLocker के बारे में: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत तहसील में आवेदन", "जहां स्थायी निवास है, उसी तहसील में दें"],
          ["जाति/जनजाति का पुराना सबूत नहीं", "परिवार के किसी सदस्य का प्रमाण पत्र या पुराना सरकारी रिकॉर्ड लगाएं"],
          ["निवास का सबूत नहीं", "रेज़िडेंट/डोमिसाइल प्रमाण पत्र पहले बनवाएं"],
          ["केंद्र की नौकरी के लिए UT प्रारूप ले लिया", "भारत सरकार के प्रारूप में अलग से मांगें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://ladakh.gov.in/service/schedule-tribe-certificate/", title: "UT लद्दाख: Schedule Tribe Certificate (तहसीलदार)" },
    { href: "https://ladakh.gov.in/services/", title: "UT लद्दाख: Online Citizen Services सूची" },
    { href: "https://domicile.ladakh.gov.in/login", title: "लद्दाख डोमिसाइल प्रमाण पत्र पोर्टल" },
  ],
  faq: [
    { q: "लद्दाख में जाति प्रमाण पत्र कौन जारी करता है?", a: "UT लद्दाख की वेबसाइट के अनुसार क्षेत्र के तहसीलदार अपनी तहसील के लोगों का जाति प्रमाण पत्र जारी करते हैं। एक समाचार रिपोर्ट के अनुसार स्वतंत्र प्रभार वाले नायब तहसीलदार भी अब आरक्षित श्रेणी के प्रमाण पत्र जारी कर सकते हैं।" },
    { q: "क्या लद्दाख में जाति प्रमाण पत्र ऑनलाइन बनता है?", a: "UT प्रशासन की वेबसाइट की ऑनलाइन सेवाओं की सूची में जाति प्रमाण पत्र का कोई ऑनलाइन आवेदन लिंक नहीं मिला। आवेदन तहसील कार्यालय में करें।" },
    { q: "लद्दाख जाति प्रमाण पत्र कितने दिन में बनता है और फीस कितनी है?", a: "इसकी आधिकारिक समय सीमा और फीस हम पक्की नहीं कर पाए। रसीद लेते समय तहसील में तारीख और शुल्क पूछें।" },
    { q: "केंद्र सरकार की नौकरी के लिए कौन सा प्रमाण पत्र चाहिए?", a: "भारत सरकार के प्रारूप वाला SC/ST/OBC प्रमाण पत्र, OBC में केंद्रीय सूची और नॉन-क्रीमी लेयर के साथ। भर्ती के विज्ञापन में दिया प्रारूप देखें।" },
  ],
  related: [
    { href: "/states/ladakh-income-certificate.html", emoji: "💰", title: "लद्दाख आय प्रमाण पत्र", text: "तहसील से आवेदन" },
    { href: "/states/ladakh-domicile-certificate.html", emoji: "🏠", title: "लद्दाख डोमिसाइल प्रमाण पत्र", text: "रेज़िडेंट सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://ladakh.gov.in/service/schedule-tribe-certificate/", label: "🏛️ UT लद्दाख: सेवा की जानकारी" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
