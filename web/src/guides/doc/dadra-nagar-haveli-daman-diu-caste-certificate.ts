import type { DocGuide } from "./types";

// Sources (checked 13-14 Oct 2026):
// - ddd.gov.in/service/revenu-services/ (UT Administration of DNH & DD,
//   "Revenue Department", last updated 11 Sep 2025): services Domicile,
//   Income, Heir Ship, Caste, OBC, "NCL (OBC Renewal)", EWS certificates,
//   RoR forms etc., each linked to https://sugam.dddgov.in/; office location
//   Revenue Department, Daman; phone 2230698.
// - dnh.gov.in/service/avanika-revenu/: revenue land-record services from
//   the Mamlatdar Office, Silvassa (Dadra and Nagar Haveli).
// - ddd.gov.in home page: links to pgportal.gov.in (CPGRAMS) for grievances.
// - Search extracts of institutional admission notices list the Mamlatdar
//   (Daman / Diu) as the income-certificate authority for DD/DNH; used only
//   as a hedge in the text, not as a fact.
// Left out (not confirmable; sugam.dddgov.in could not be opened from here and
// no current charter for these certificates was found on ddd.gov.in,
// dnh.gov.in or diu.gov.in): fee, time limit, document list, validity, the
// exact issuing officer and status steps. The old description's "e-Services
// Daman" and "official fee" were dropped.
export const dadraNagarHaveliDamanDiuCasteCertificate: DocGuide = {
  state: { slug: "dadra-nagar-haveli-daman-diu", hi: "दादरा और नगर हवेली एवं दमण और दीव" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Dadra & Nagar Haveli and Daman & Diu Caste Certificate 2026: Apply & Status",
  description: "दादरा और नगर हवेली एवं दमण और दीव जाति प्रमाण पत्र 2026: राजस्व विभाग के SUGAM पोर्टल पर Caste, OBC और NCL (OBC Renewal) प्रमाण पत्र का आवेदन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "दादरा और नगर हवेली एवं दमण और दीव जाति प्रमाण पत्र 2026: SUGAM पोर्टल पर Caste, OBC और NCL",
  lead: "दादरा और नगर हवेली एवं दमण और दीव (DNH & DD) में जाति प्रमाण पत्र राजस्व विभाग की सेवा है। प्रशासन की वेबसाइट (ddd.gov.in) पर राजस्व विभाग की सूची में <strong>Caste Certificate</strong>, <strong>OBC Certificate</strong> और <strong>NCL (OBC Renewal) Certificate</strong> तीनों के लिए आवेदन का रास्ता <strong>SUGAM पोर्टल (sugam.dddgov.in)</strong> बताया गया है। फीस, समय सीमा और कागज़ों की सूची आधिकारिक पेज पर नहीं दी गई है, इसलिए वे आवेदन के समय पोर्टल या मामलतदार कार्यालय से देखें।",
  facts: [
    ["पोर्टल", '<a href="https://sugam.dddgov.in/" target="_blank" rel="noopener nofollow">sugam.dddgov.in</a>'],
    ["विभाग", "राजस्व विभाग, संघ प्रदेश प्रशासन"],
    ["सेवाएं", "Caste, OBC, NCL (OBC Renewal), EWS"],
    ["ऑफलाइन मदद", "अपने ज़िले का मामलतदार कार्यालय"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "कौन सा प्रमाण पत्र किस काम के लिए",
      intro: "राजस्व विभाग की सेवा सूची में जाति से जुड़े ये प्रमाण पत्र अलग-अलग दिए गए हैं। जो आपसे मांगा गया है वही चुनें:",
      table: {
        head: ["सेवा (SUGAM पर)", "कब चाहिए"],
        rows: [
          ["<strong>Caste Certificate</strong>", "SC/ST होने का प्रमाण: पढ़ाई, नौकरी, छात्रवृत्ति और योजनाएं"],
          ["<strong>OBC Certificate</strong>", "अन्य पिछड़ा वर्ग (OBC) होने का प्रमाण"],
          ["<strong>NCL (OBC Renewal) Certificate</strong>", "OBC आरक्षण में नॉन-क्रीमी लेयर का प्रमाण; नाम से साफ है कि इसे समय-समय पर नया कराना होता है"],
          ["<strong>EWS Certificate</strong>", "आर्थिक रूप से कमजोर वर्ग (EWS) का आरक्षण; यह जाति प्रमाण पत्र नहीं है"],
        ],
      },
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी या परीक्षा में OBC आरक्षण के लिए आम तौर पर <strong>केंद्र के प्रारूप में OBC (नॉन-क्रीमी लेयर)</strong> प्रमाण पत्र मांगा जाता है, और वह भर्ती के विज्ञापन में दी गई तारीख तक का होना चाहिए। आवेदन करते समय बताएं कि प्रमाण पत्र किस काम के लिए है।" },
    },
    {
      id: "online",
      title: "SUGAM पोर्टल पर आवेदन",
      steps: [
        '<a href="https://sugam.dddgov.in/" target="_blank" rel="noopener nofollow">sugam.dddgov.in</a> खोलें। यही लिंक संघ प्रदेश प्रशासन की वेबसाइट पर राजस्व विभाग की सेवाओं के सामने दिया गया है।',
        "अपना अकाउंट बनाकर लॉगिन करें।",
        "राजस्व विभाग की सेवाओं में <strong>Caste Certificate</strong>, <strong>OBC Certificate</strong> या <strong>NCL (OBC Renewal) Certificate</strong> चुनें।",
        "फॉर्म भरें, पोर्टल पर मांगे गए कागज़ अपलोड करें और फीस दिखे तो भरें।",
        "आवेदन जमा करके पावती/आवेदन संख्या संभाल कर रखें; इसी से आगे स्टेटस देखें।",
      ],
      html: "<p>SUGAM पोर्टल हमारी जांच के समय यहां से नहीं खुल सका, इसलिए मेन्यू के नाम थोड़े अलग हो सकते हैं। पोर्टल का पता प्रशासन की आधिकारिक वेबसाइट के राजस्व सेवा पेज से लिया गया है।</p>",
    },
    {
      id: "kagaz",
      title: "आम तौर पर कौन से कागज़ तैयार रखें",
      intro: "कागज़ों की आधिकारिक सूची SUGAM पर आवेदन फॉर्म में ही दिखती है। जाति प्रमाण पत्र के लिए आम तौर पर ये चीज़ें काम आती हैं; जितनी आपके पास हों, स्कैन करके रखें:",
      list: [
        "आवेदक की फोटो और पहचान पत्र (जैसे आधार)।",
        "निवास का प्रमाण (जैसे राशन कार्ड, बिजली बिल या निवास प्रमाण पत्र)।",
        "जन्म प्रमाण पत्र या स्कूल छोड़ने का प्रमाण पत्र, जिसमें जाति लिखी हो।",
        "पिता या परिवार के किसी सदस्य का पहले बना जाति प्रमाण पत्र (अगर हो)।",
        "OBC नॉन-क्रीमी लेयर के लिए: माता-पिता की आय और नौकरी/पद का प्रमाण।",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है, सिर्फ तैयारी के लिए है। पोर्टल या मामलतदार कार्यालय जो कागज़ मांगे, वही मान्य है।" },
    },
    {
      id: "offline",
      title: "मामलतदार कार्यालय से मदद",
      intro: "ऑनलाइन फॉर्म भरने में दिक्कत हो तो अपने ज़िले (दमण, दीव या दादरा और नगर हवेली/सिलवासा) के <strong>मामलतदार कार्यालय</strong> या पास के कॉमन सर्विस सेंटर (CSC) से मदद लें। कई संस्थानों की सूचनाओं में दमण और दीव के लिए प्रमाण पत्र देने वाले अधिकारी के रूप में मामलतदार का नाम आता है, पर आपके आवेदन पर कौन अधिकारी हस्ताक्षर करेगा, यह पोर्टल पर देखें। CSC पर सेवा शुल्क लगे तो पहले पूछ लें।",
    },
    {
      id: "samay",
      title: "फीस, समय सीमा, वैधता और स्टेटस",
      list: [
        "<strong>फीस और समय सीमा:</strong> राजस्व विभाग के आधिकारिक पेज पर इनका ब्योरा नहीं है। SUGAM पर आवेदन करते समय फीस दिखेगी; समय सीमा के लिए मामलतदार कार्यालय से पूछें।",
        "<strong>स्टेटस:</strong> SUGAM पर लॉगिन करके अपनी आवेदन संख्या से स्थिति देखें।",
        "<strong>वैधता:</strong> जाति प्रमाण पत्र में जाति आम तौर पर नहीं बदलती, पर OBC के नॉन-क्रीमी लेयर के लिए पोर्टल पर अलग <strong>NCL (OBC Renewal)</strong> सेवा है। नौकरी या दाखिले के फॉर्म में जितना नया NCL मांगा गया हो, उसी हिसाब से नवीनीकरण कराएं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत सेवा चुनी", "SC/ST के लिए Caste Certificate, OBC के लिए OBC Certificate, NCL के लिए NCL (OBC Renewal) चुनें"],
          ["जाति का पुराना सबूत नहीं", "स्कूल का रिकॉर्ड, पिता/परिवार का जाति प्रमाण पत्र या दूसरे पुराने कागज़ लगाएं"],
          ["धुंधले स्कैन", "साफ, सीधे स्कैन छोटी फाइल में अपलोड करें"],
          ["EWS के लिए जाति प्रमाण पत्र लगाया", "EWS के लिए अलग EWS Certificate सेवा चुनें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद और शिकायत",
      intro: "पहले अपने मामलतदार कार्यालय से संपर्क करें। प्रशासन की वेबसाइट के राजस्व विभाग पेज पर दमण के लिए फोन नंबर 2230698 दिया है। आवेदन बहुत दिन अटके तो केंद्र सरकार के शिकायत पोर्टल <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pgportal.gov.in</a> (CPGRAMS) पर शिकायत कर सकते हैं, जिसका लिंक प्रशासन की वेबसाइट पर है।",
    },
  ],
  official: [
    { href: "https://sugam.dddgov.in/", title: "SUGAM पोर्टल (राजस्व विभाग की ऑनलाइन सेवाएं)" },
    { href: "https://ddd.gov.in/service/revenu-services/", title: "राजस्व विभाग की सेवाएं (ddd.gov.in)" },
    { href: "https://ddd.gov.in/", title: "संघ प्रदेश दादरा और नगर हवेली एवं दमण और दीव प्रशासन" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS शिकायत पोर्टल" },
  ],
  faq: [
    { q: "DNH & DD में जाति प्रमाण पत्र कहां से बनता है?", a: "संघ प्रदेश प्रशासन की वेबसाइट के अनुसार राजस्व विभाग की Caste, OBC और NCL (OBC Renewal) सेवाएं SUGAM पोर्टल (sugam.dddgov.in) पर हैं। मदद के लिए अपने ज़िले के मामलतदार कार्यालय जाएं।" },
    { q: "OBC और NCL प्रमाण पत्र में क्या फर्क है?", a: "OBC प्रमाण पत्र बताता है कि आप अन्य पिछड़ा वर्ग से हैं। NCL (नॉन-क्रीमी लेयर) प्रमाण पत्र बताता है कि आपका परिवार क्रीमी लेयर में नहीं है, जो आरक्षण के लिए ज़रूरी है। SUGAM पर इसके नवीनीकरण के लिए NCL (OBC Renewal) सेवा है।" },
    { q: "जाति प्रमाण पत्र की फीस और समय सीमा क्या है?", a: "राजस्व विभाग के आधिकारिक पेज पर फीस और समय सीमा नहीं लिखी है। SUGAM पर आवेदन के समय फीस दिखेगी; समय सीमा मामलतदार कार्यालय से पूछें।" },
    { q: "EWS प्रमाण पत्र कहां बनेगा?", a: "राजस्व विभाग की सेवा सूची में EWS Certificate भी SUGAM पोर्टल पर है। यह जाति प्रमाण पत्र से अलग सेवा है।" },
  ],
  related: [
    { href: "/states/dadra-nagar-haveli-daman-diu-income-certificate.html", emoji: "💰", title: "DNH & DD आय प्रमाण पत्र", text: "SUGAM पोर्टल पर आवेदन" },
    { href: "/states/dadra-nagar-haveli-daman-diu-domicile-certificate.html", emoji: "🏠", title: "DNH & DD निवास प्रमाण पत्र", text: "Domicile Certificate" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://sugam.dddgov.in/", label: "📝 SUGAM पोर्टल पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
