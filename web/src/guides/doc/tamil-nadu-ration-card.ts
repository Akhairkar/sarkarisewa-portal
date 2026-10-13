import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/TN: Civil Supplies and Consumer Protection Department;
//   website www.tnpds.gov.in; helpdesk 1967 and 1800-425-5901; schemes AAY and
//   PHH; 34,919 FPS (34,498 co-operative); NFSA cards 1,17,09,090 (AAY
//   18,66,027, PHH 98,43,063); district-wise RC report on tnpds.gov.in.
// - tncsc.tn.gov.in/en/PDS.html (Tamil Nadu Civil Supplies Corporation, seen
//   via search extract; undated): card types PHH, PHH-AAY, NPHH, NPHH-S (sugar
//   option) and NPHH-NC (no commodity); PHH-AAY get 35 kg rice; rice supplied
//   free of cost w.e.f. 01.06.2011; forms for new family cards prescribed by
//   Government and downloadable from the department website.
// - Food & Consumer Protection Dept. Policy Note 2024-25 (cms.tn.gov.in, via
//   search extract): Universal PDS; toor dal, palmolein under Special PDS
//   along with sugar; 2 kg ragi per card in Nilgiris and Dharmapuri.
// - Food Dept. Policy Note 2021-22: five types of smart family cards;
//   commodities only through PoS using the smart family card.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: rice quantity for PHH/NPHH cards beyond the NFSA 5 kg (not on a
// current official page we could open), current total of all family cards,
// an official document list, fees, time limits. tnpds.gov.in, tncsc.tn.gov.in
// and cms.tn.gov.in refused connections from here; the old page's "TNeGA
// e-Sevai" route could not be confirmed.
export const tamilNaduRationCard: DocGuide = {
  state: { slug: "tamil-nadu", hi: "तमिलनाडु" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Tamil Nadu Ration Card 2026: Apply & Status",
  description: "तमिलनाडु राशन कार्ड (स्मार्ट फैमिली कार्ड) 2026: PHH, AAY, NPHH, NPHH-S, NPHH-NC कार्ड, tnpds.gov.in पर आवेदन और स्टेटस, मुफ्त चावल, e-KYC और हेल्पलाइन 1967 / 1800-425-5901।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "तमिलनाडु राशन कार्ड (स्मार्ट फैमिली कार्ड) 2026: प्रकार, आवेदन, स्टेटस और e-KYC",
  lead: "तमिलनाडु में राशन कार्ड को \"स्मार्ट फैमिली कार्ड\" कहते हैं और इसे नागरिक आपूर्ति एवं उपभोक्ता संरक्षण विभाग जारी करता है। राज्य में सार्वभौमिक (Universal) PDS है, यानी NFSA के अलावा दूसरे परिवारों को भी कार्ड मिलता है। नए कार्ड, बदलाव और स्टेटस के लिए विभाग की वेबसाइट tnpds.gov.in है।",
  facts: [
    ["कार्ड के प्रकार", "PHH, PHH-AAY, NPHH, NPHH-S, NPHH-NC"],
    ["NFSA कार्ड", "1.17 करोड़ (AAY + PHH)"],
    ["राशन दुकानें", "34,919"],
    ["हेल्पलाइन", "1967, 1800-425-5901"],
  ],
  notice: "<strong>ध्यान दें:</strong> तमिलनाडु में राशन केवल PoS मशीन पर <strong>स्मार्ट फैमिली कार्ड</strong> से मिलता है। परिवार के हर सदस्य का आधार कार्ड से जुड़ा और e-KYC पूरा हो, तभी राशन बिना रुकावट मिलता है।",
  sections: [
    {
      id: "prakar",
      title: "तमिलनाडु में स्मार्ट फैमिली कार्ड के प्रकार",
      intro: "तमिलनाडु नागरिक आपूर्ति निगम (TNCSC) के अनुसार राज्य में पांच तरह के कार्ड हैं। NFSA पोर्टल के अनुसार इनमें <strong>18,66,027 AAY</strong> और <strong>98,43,063 PHH</strong> कार्ड NFSA के हैं, और राज्य में <strong>34,919 राशन दुकानें</strong> हैं, जिनमें ज़्यादातर सहकारी समितियां चलाती हैं।",
      table: {
        head: ["कार्ड", "किसके लिए", "क्या मिलता है"],
        rows: [
          ["<strong>PHH-AAY</strong>", "अंत्योदय (सबसे गरीब) परिवार, NFSA", "<strong>35 किलो चावल प्रति परिवार</strong> और दूसरी वस्तुएं"],
          ["<strong>PHH</strong>", "प्राथमिकता परिवार, NFSA", "NFSA में <strong>5 किलो प्रति व्यक्ति</strong> और दूसरी वस्तुएं"],
          ["<strong>NPHH</strong>", "गैर-प्राथमिकता परिवार (राज्य का कार्ड)", "चावल समेत वस्तुएं, राज्य की तय मात्रा में"],
          ["<strong>NPHH-S</strong>", "गैर-प्राथमिकता, चावल की जगह चीनी का विकल्प", "चीनी और दूसरी वस्तुएं"],
          ["<strong>NPHH-NC</strong>", "बिना वस्तु वाला कार्ड (No Commodity)", "कोई राशन नहीं"],
        ],
      },
      callout: { kind: "info", html: "TNCSC के अनुसार चावल <strong>1 जून 2011 से मुफ्त</strong> दिया जाता है। विभाग की 2024-25 नीति टिप्पणी के अनुसार विशेष PDS में <strong>तुअर दाल, पामोलिन तेल</strong> और चीनी भी मिलती है; नीलगिरि और धर्मपुरी में चावल की जगह 2 किलो रागी प्रति कार्ड दी जाती है। केंद्र सरकार की अधिसूचना के अनुसार NFSA अनाज <strong>31 दिसंबर 2028 तक मुफ्त</strong> है।" },
    },
    {
      id: "patrata",
      title: "किसे कौन सा कार्ड मिलता है",
      list: [
        "<strong>PHH और PHH-AAY:</strong> NFSA के तहत राज्य सरकार के मापदंडों पर चुने गए परिवार।",
        "<strong>NPHH:</strong> जो परिवार NFSA में नहीं आते, उन्हें भी राज्य का कार्ड मिलता है, क्योंकि राज्य में सार्वभौमिक PDS है।",
        "जो परिवार चावल नहीं लेना चाहते वे <strong>NPHH-S</strong> (चीनी) या <strong>NPHH-NC</strong> (कोई वस्तु नहीं) चुन सकते हैं।",
        "एक परिवार का <strong>एक ही कार्ड</strong>; पुराने पते पर कार्ड हो तो उसे सरेंडर करना होता है।",
      ],
    },
    {
      id: "avedan",
      title: "नया स्मार्ट फैमिली कार्ड: आवेदन",
      steps: [
        '<a href="https://www.tnpds.gov.in/" target="_blank" rel="noopener nofollow">tnpds.gov.in</a> खोलें और नए स्मार्ट कार्ड के आवेदन (Apply New Smart Card) का विकल्प चुनें।',
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और <strong>आधार नंबर</strong> भरें; पता और कार्ड का प्रकार (चावल / चीनी / कोई वस्तु नहीं) चुनें।",
        "मुखिया की फोटो और पते का प्रमाण अपलोड करके आवेदन जमा करें; <strong>संदर्भ नंबर</strong> संभालें।",
        "जांच के बाद कार्ड मंज़ूर होता है और नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      list: [
        "<strong>परिवार के सभी सदस्यों का आधार</strong> और चालू मोबाइल नंबर",
        "तमिलनाडु के पते का प्रमाण",
        "मुखिया की फोटो",
        "पुराने पते का कार्ड हो तो उसके <strong>सरेंडर का प्रमाण</strong>",
      ],
      callout: { kind: "warn", html: "13 अक्टूबर 2026 को tnpds.gov.in हमारी जांच में नहीं खुली, इसलिए फीस, समय-सीमा और कागज़ों की अंतिम सूची यहां नहीं दी है। पोर्टल न खुले तो अपने तालुक के नागरिक आपूर्ति कार्यालय में पूछें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना, हटाना, पता और कार्ड का प्रकार बदलना",
      intro: "ये बदलाव tnpds.gov.in पर लॉगिन करके या तालुक नागरिक आपूर्ति कार्यालय से होते हैं। पोर्टल पर कौन सी सेवा अभी खुली है, वहीं देखें।",
      list: [
        "<strong>नया सदस्य जोड़ना:</strong> बच्चे के लिए जन्म प्रमाण पत्र और नए सदस्य का आधार साथ रखें।",
        "<strong>सदस्य हटाना:</strong> मृत्यु या शादी के बाद नाम हटाने का आवेदन।",
        "<strong>पता बदलना</strong> (नए पते का प्रमाण साथ रखें)।",
        "<strong>कार्ड का प्रकार बदलना:</strong> जैसे NPHH से NPHH-S, या NPHH-NC में बदलना।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और राशन का विवरण",
      list: [
        "<strong>आवेदन का स्टेटस:</strong> tnpds.gov.in पर संदर्भ नंबर से।",
        "<strong>ज़िलेवार कार्ड की गिनती:</strong> tnpds.gov.in की NFSA रिपोर्ट में (NFSA पोर्टल पर इसका लिंक है)।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): NFSA कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान।",
        "<strong>One Nation One Ration Card:</strong> PHH और PHH-AAY कार्ड से दूसरे राज्य की e-PoS दुकान से भी NFSA का हिस्सा ले सकते हैं।",
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["PoS पर अंगूठा/उंगली मेल नहीं खा रही (एरर 300)", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["आधार रद्द / निलंबित / गलत (996 / 997 / 998)", "आधार केंद्र जाएं और कार्ड में दर्ज आधार नंबर सुधरवाएं"],
          ["स्मार्ट कार्ड खो गया", "डुप्लिकेट कार्ड के लिए tnpds.gov.in देखें या तालुक नागरिक आपूर्ति कार्यालय में पूछें"],
          ["राशन कम मिला या दुकान ने मना किया", "1967 या 1800-425-5901 पर शिकायत"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: टोल-फ्री नंबर (NFSA पोर्टल पर तमिलनाडु के लिए दिया गया)",
        "<strong>1800-425-5901</strong>: NFSA पोर्टल पर तमिलनाडु का हेल्पडेस्क",
        "<strong>तालुक नागरिक आपूर्ति कार्यालय:</strong> राशन दुकान से जुड़ी शिकायत लिखित में भी दे सकते हैं",
      ],
    },
  ],
  official: [
    { href: "https://www.tnpds.gov.in/", title: "TNPDS: नागरिक आपूर्ति एवं उपभोक्ता संरक्षण विभाग, तमिलनाडु" },
    { href: "https://www.tncsc.tn.gov.in/", title: "तमिलनाडु नागरिक आपूर्ति निगम (TNCSC)" },
    { href: "https://nfsa.gov.in/State/TN", title: "NFSA पोर्टल: तमिलनाडु का पेज (योजनाएं, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "तमिलनाडु में नया राशन कार्ड कैसे बनवाएं?", a: "tnpds.gov.in पर नए स्मार्ट फैमिली कार्ड का आवेदन करें। सभी सदस्यों का आधार, पते का प्रमाण और मुखिया की फोटो दें, और संदर्भ नंबर संभालें। पोर्टल न खुले तो तालुक नागरिक आपूर्ति कार्यालय जाएं।" },
    { q: "PHH, NPHH, NPHH-S और NPHH-NC कार्ड में क्या फर्क है?", a: "PHH और PHH-AAY NFSA के प्राथमिकता कार्ड हैं। NPHH गैर-प्राथमिकता कार्ड है जिस पर चावल समेत वस्तुएं मिलती हैं; NPHH-S में चावल की जगह चीनी; NPHH-NC पर कोई वस्तु नहीं मिलती।" },
    { q: "तमिलनाडु में राशन कार्ड पर कितना चावल मिलता है?", a: "PHH-AAY कार्ड पर 35 किलो चावल प्रति परिवार मिलता है और NFSA में PHH पर 5 किलो प्रति व्यक्ति। राज्य में चावल 2011 से मुफ्त है। दूसरे कार्डों की मात्रा राज्य तय करता है; अपनी दुकान पर लगी सूची देखें।" },
    { q: "तमिलनाडु राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार 1967 और 1800-425-5901।" },
    { q: "क्या तमिलनाडु का राशन कार्ड दूसरे राज्य में चलेगा?", a: "PHH और PHH-AAY कार्ड पर One Nation One Ration Card के तहत दूसरे राज्य की e-PoS दुकान से NFSA का हिस्सा मिल सकता है। NPHH कार्ड राज्य का कार्ड है, उस पर यह सुविधा नहीं है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/tamil-nadu-income-certificate.html", emoji: "💰", title: "तमिलनाडु आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/tamil-nadu-domicile-certificate.html", emoji: "🏠", title: "तमिलनाडु निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/tamil-nadu-labour-card.html", emoji: "👷", title: "तमिलनाडु लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/kerala-ration-card.html", emoji: "📋", title: "केरल राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://www.tnpds.gov.in/", label: "📝 tnpds.gov.in पर आवेदन" },
    { href: "https://nfsa.gov.in/State/TN", label: "📊 NFSA: तमिलनाडु का पेज" },
  ],
};
