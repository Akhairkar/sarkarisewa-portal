import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - ddd.gov.in/service/revenu-services/ (UT Administration of DNH & DD,
//   "Revenue Department", opened directly): service list starts with
//   "Domicile Certificate", then Income, Heir Ship, Caste, OBC, NCL, EWS
//   certificates and land-record forms, each with a link to
//   https://sugam.dddgov.in/; office Revenue Department, Daman; phone 2230698.
// - dnh.gov.in/service/avanika-revenu/: Mamlatdar Office, Silvassa (DNH).
// - ddd.gov.in home page: link to pgportal.gov.in (CPGRAMS).
// - Searches found only non-official wiki pages (wikiprocedure.com) on the
//   residence period, documents, validity and time; none of that is used.
// Left out (not confirmable; sugam.dddgov.in is blocked from our checker and
// no official charter for this certificate was found): residence period,
// document list, fee, time limit, validity, the signing officer. The old
// description's "e-Services Daman" and "official fee" were dropped.
export const dadraNagarHaveliDamanDiuDomicileCertificate: DocGuide = {
  state: { slug: "dadra-nagar-haveli-daman-diu", hi: "दादरा और नगर हवेली एवं दमण और दीव" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Dadra & Nagar Haveli and Daman & Diu Domicile Certificate 2026: Apply & Status",
  description: "दादरा और नगर हवेली एवं दमण और दीव डोमिसाइल प्रमाण पत्र 2026: राजस्व विभाग के SUGAM पोर्टल (sugam.dddgov.in) पर आवेदन, कागज़ों की तैयारी और मामलतदार कार्यालय से मदद।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "दादरा और नगर हवेली एवं दमण और दीव डोमिसाइल प्रमाण पत्र 2026: SUGAM पर आवेदन",
  lead: "दादरा और नगर हवेली एवं दमण और दीव (DNH & DD) में डोमिसाइल प्रमाण पत्र (Domicile Certificate) राजस्व विभाग की सेवा है। संघ प्रदेश प्रशासन की वेबसाइट (ddd.gov.in) पर इसके आवेदन का रास्ता <strong>SUGAM पोर्टल (sugam.dddgov.in)</strong> बताया गया है। निवास की अवधि, कागज़ों की सूची, फीस और समय सीमा किसी आधिकारिक पेज पर हमें नहीं मिली, इसलिए ये आवेदन के समय पोर्टल पर या मामलतदार कार्यालय से देखें।",
  facts: [
    ["पोर्टल", '<a href="https://sugam.dddgov.in/" target="_blank" rel="noopener nofollow">sugam.dddgov.in</a>'],
    ["विभाग", "राजस्व विभाग, DNH & DD"],
    ["ऑफलाइन मदद", "अपने ज़िले का मामलतदार कार्यालय"],
    ["शिकायत", '<a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">pgportal.gov.in</a>'],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "डोमिसाइल प्रमाण पत्र किस काम आता है",
      intro: "यह इस बात का सबूत है कि आप दादरा और नगर हवेली, दमण या दीव के निवासी हैं। संघ प्रदेश के कोटे वाले दाखिले, स्थानीय भर्तियों और कई योजनाओं में यह मांगा जाता है।",
      callout: { kind: "info", html: "यह सभी वर्गों के लिए है। आरक्षण के लिए <a href=\"/states/dadra-nagar-haveli-daman-diu-caste-certificate.html\">जाति प्रमाण पत्र</a> अलग से बनता है, जो भी इसी SUGAM पोर्टल पर है।" },
    },
    {
      id: "online",
      title: "SUGAM पोर्टल पर आवेदन",
      steps: [
        '<a href="https://sugam.dddgov.in/" target="_blank" rel="noopener nofollow">sugam.dddgov.in</a> खोलें। यही लिंक संघ प्रदेश प्रशासन की वेबसाइट पर राजस्व विभाग की <strong>Domicile Certificate</strong> सेवा के सामने दिया गया है।',
        "पोर्टल पर अपना अकाउंट बनाकर लॉगिन करें और <strong>Domicile Certificate</strong> सेवा चुनें।",
        "फॉर्म भरें और पोर्टल जो कागज़ मांगे, उनकी स्कैन कॉपी अपलोड करें।",
        "कोई शुल्क दिखे तो भरें, आवेदन जमा करें और आवेदन संख्या नोट कर लें।",
      ],
      html: "<p>SUGAM पोर्टल हमारी जांच के समय यहां से नहीं खुल सका, इसलिए मेन्यू के नाम थोड़े अलग हो सकते हैं।</p>",
    },
    {
      id: "kagaz",
      title: "कागज़ पहले से तैयार रखें",
      intro: "आधिकारिक सूची हमें नहीं मिली। आम तौर पर निवास साबित करने के लिए ये कागज़ काम आते हैं, इन्हें तैयार रखें:",
      list: [
        "आधार कार्ड और पासपोर्ट साइज़ फोटो",
        "जन्म प्रमाण पत्र या स्कूल छोड़ने का प्रमाण पत्र (LC)",
        "राशन कार्ड, वोटर कार्ड या बिजली बिल जैसा पते का सबूत",
        "लंबे निवास के लिए पुराने कागज़: स्कूल रिकॉर्ड, ज़मीन/मकान के कागज़, पुराना राशन कार्ड",
        "18 साल से कम के बच्चों के लिए माता-पिता का निवास प्रमाण",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है, सिर्फ तैयारी के लिए है। SUGAM पोर्टल या मामलतदार कार्यालय जो कागज़ मांगे, वही मान्य है।" },
    },
    {
      id: "offline",
      title: "मामलतदार कार्यालय से मदद",
      intro: "ऑनलाइन फॉर्म भरने में दिक्कत हो तो अपने ज़िले (दमण, दीव, या दादरा और नगर हवेली में सिलवासा) के <strong>मामलतदार कार्यालय</strong> या पास के CSC से मदद लें। CSC पर सेवा शुल्क लगे तो पहले पूछ लें। प्रशासन की वेबसाइट के राजस्व विभाग पेज पर दमण के लिए फोन नंबर 2230698 दिया है।",
      list: [
        "<strong>फीस, समय सीमा और वैधता:</strong> इनका ब्योरा आधिकारिक पेज पर नहीं है। आवेदन करते समय पोर्टल पर या कार्यालय से पूछें।",
        "आवेदन बहुत दिन अटके तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pgportal.gov.in</a> (CPGRAMS) पर शिकायत कर सकते हैं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["निवास का पुराना सबूत नहीं", "पुराना राशन कार्ड, स्कूल रिकॉर्ड या ज़मीन/किराये के पुराने कागज़ जोड़ें"],
          ["नाम/पता कागज़ों में अलग-अलग", "आधार, राशन कार्ड और वोटर कार्ड में एक जैसी जानकारी कराएं"],
          ["गलत ज़िला चुना", "जिस ज़िले (दमण, दीव या DNH) में रहते हैं, वही चुनें"],
          ["अपलोड साफ नहीं", "कागज़ की साफ स्कैन कॉपी दोबारा लगाएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://sugam.dddgov.in/", title: "SUGAM पोर्टल (राजस्व विभाग की ऑनलाइन सेवाएं)" },
    { href: "https://ddd.gov.in/service/revenu-services/", title: "राजस्व विभाग की सेवाएं (DNH & DD प्रशासन)" },
    { href: "https://ddd.gov.in/", title: "DNH & DD संघ प्रदेश प्रशासन" },
  ],
  faq: [
    { q: "DNH & DD में डोमिसाइल प्रमाण पत्र कहां से बनता है?", a: "संघ प्रदेश प्रशासन की वेबसाइट के अनुसार राजस्व विभाग की Domicile Certificate सेवा SUGAM पोर्टल (sugam.dddgov.in) पर है। मदद के लिए अपने ज़िले के मामलतदार कार्यालय जाएं।" },
    { q: "कितने साल रहने पर डोमिसाइल मिलता है?", a: "यह शर्त किसी आधिकारिक पेज पर हमें नहीं मिली। आवेदन से पहले मामलतदार कार्यालय से पूछें, और जिस दाखिले या भर्ती के लिए चाहिए उसके नियम भी पढ़ें।" },
    { q: "फीस कितनी है?", a: "आधिकारिक पेज पर फीस नहीं लिखी है। SUGAM पर आवेदन करते समय जो शुल्क दिखे वही मान्य है।" },
    { q: "आवेदन अटक जाए तो शिकायत कहां करें?", a: "पहले मामलतदार कार्यालय से संपर्क करें। फिर भी हल न हो तो pgportal.gov.in (CPGRAMS) पर शिकायत करें।" },
  ],
  related: [
    { href: "/states/dadra-nagar-haveli-daman-diu-caste-certificate.html", emoji: "📜", title: "DNH & DD जाति प्रमाण पत्र", text: "Caste, OBC और NCL" },
    { href: "/states/dadra-nagar-haveli-daman-diu-income-certificate.html", emoji: "💰", title: "DNH & DD आय प्रमाण पत्र", text: "SUGAM पोर्टल पर" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://sugam.dddgov.in/", label: "📝 SUGAM पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
