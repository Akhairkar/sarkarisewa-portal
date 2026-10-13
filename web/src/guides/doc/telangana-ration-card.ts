import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/TS: Consumer Affairs, Food and Civil Supplies
//   Department; website civilsupplies.telangana.gov.in; helpdesk
//   1800-4250-0333 and 1967; schemes AAY and PHH; 17,338 FPS; NFSA cards
//   56,56,419 (AAY 5,66,775, PHH 50,89,644); district-wise RC report on
//   epds.telangana.gov.in/FoodSecurityAct/reports/.
// - newsonair.gov.in (All India Radio, Mar 2025): free fine rice through
//   ration shops, 6 kg per person per month from 1 April 2025, launched by the
//   Chief Minister at Huzurnagar on 30 Mar 2025; The News Minute / Deccan
//   Chronicle: about 3 crore people (about 85% of the population) covered.
// - UNI / The South First (2 Jul 2025): statewide distribution of new ration
//   cards from 14 Jul 2025 (Tirumalagiri, Tungaturthi); Deccan Chronicle:
//   applications on Mee Seva, and Praja Palana applicants could also apply.
//   Siasat (2025): 1.51 lakh new cards and 13.73 lakh names added to existing
//   cards in the 2025 drive.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0; free grain
//   1.1.2024–31.12.2028 per GoI notification of 04.12.2023.
// Left out: state eligibility limits (income/land), whether new applications
// are open right now, fees (a ₹30 MeeSeva fee appears only on aggregator
// sites), the total of all state food security cards. Telangana government
// sites did not open from here.
export const telanganaRationCard: DocGuide = {
  state: { slug: "telangana", hi: "तेलंगाना" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Telangana Ration Card 2026: Apply & Status",
  description: "तेलंगाना राशन कार्ड (खाद्य सुरक्षा कार्ड) 2026: MeeSeva से आवेदन, नए कार्ड का वितरण, हर व्यक्ति 6 किलो मुफ्त बारीक चावल, सदस्य जोड़ना, e-KYC और हेल्पलाइन 1967 / 1800-4250-0333।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "तेलंगाना राशन कार्ड 2026: आवेदन, नाम जोड़ना, मुफ्त बारीक चावल और e-KYC",
  lead: "तेलंगाना में राशन कार्ड को खाद्य सुरक्षा कार्ड (Food Security Card) कहा जाता है और इसे उपभोक्ता मामले, खाद्य एवं नागरिक आपूर्ति विभाग देता है। अप्रैल 2025 से कार्ड वालों को हर व्यक्ति 6 किलो बारीक चावल (सन्न बिय्यम) मुफ्त मिलता है। नए कार्ड और नाम जोड़ने के आवेदन MeeSeva केंद्र से होते हैं; 2025 में नए कार्ड बांटे गए।",
  facts: [
    ["चावल", "6 किलो बारीक चावल/व्यक्ति, मुफ्त"],
    ["NFSA कार्ड", "56.56 लाख (AAY + PHH)"],
    ["राशन दुकानें", "17,338"],
    ["हेल्पलाइन", "1967, 1800-4250-0333"],
  ],
  notice: "<strong>ध्यान दें:</strong> राशन आधार आधारित PoS मशीन पर मिलता है। परिवार के हर सदस्य का आधार कार्ड से जुड़ा और <strong>e-KYC पूरा</strong> हो, नहीं तो उस सदस्य का चावल रुक सकता है।",
  sections: [
    {
      id: "prakar",
      title: "तेलंगाना में राशन कार्ड और कितना चावल",
      intro: "NFSA पोर्टल के अनुसार राज्य में NFSA के <strong>56,56,419 कार्ड</strong> और <strong>17,338 राशन दुकानें</strong> हैं। राज्य सरकार NFSA के अलावा अपने खर्च पर और परिवारों को भी खाद्य सुरक्षा कार्ड देती है; मुफ्त बारीक चावल योजना करीब <strong>3 करोड़ लोगों</strong> तक पहुंचती है।",
      table: {
        head: ["श्रेणी", "NFSA कार्ड", "हर महीने"],
        rows: [
          ["<strong>अंत्योदय (AAY)</strong>", "5,66,775", "NFSA में <strong>35 किलो प्रति परिवार</strong>"],
          ["<strong>प्राथमिकता परिवार (PHH)</strong>", "50,89,644", "NFSA में <strong>5 किलो प्रति व्यक्ति</strong>"],
          ["<strong>राज्य का खाद्य सुरक्षा कार्ड</strong>", "NFSA से बाहर", "राज्य की योजना के अनुसार"],
        ],
      },
      callout: { kind: "ok", html: "ऑल इंडिया रेडियो (newsonair) के अनुसार मुख्यमंत्री ने 30 मार्च 2025 (उगादी) को हुज़ूरनगर से योजना शुरू की: <strong>1 अप्रैल 2025 से हर पात्र व्यक्ति को 6 किलो बारीक चावल हर महीने मुफ्त</strong>, पहले मिलने वाले मोटे चावल की जगह।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है खाद्य सुरक्षा कार्ड",
      list: [
        "राज्य सरकार की आय और ज़मीन जैसी शर्तें पूरी करने वाले गरीब परिवार। शर्तें आवेदन के समय MeeSeva या तहसील (मंडल) कार्यालय से पूछें।",
        "एक परिवार का <strong>एक ही कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
        "NFSA के अनुसार कार्ड में परिवार की <strong>सबसे बड़ी महिला सदस्य</strong> (18 साल या ज़्यादा) मुखिया मानी जाती है।",
      ],
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड: आवेदन कैसे होता है",
      steps: [
        "परिवार के सभी सदस्यों का <strong>आधार</strong>, मोबाइल नंबर और आय से जुड़े कागज़ तैयार रखें।",
        "नज़दीकी <strong>MeeSeva केंद्र</strong> जाएं और नए खाद्य सुरक्षा कार्ड का आवेदन दें। 2025 में प्रजा पालना (Praja Palana) में आवेदन दे चुके लोग भी MeeSeva से आवेदन कर सकते थे।",
        "आवेदन की <strong>पावती (acknowledgement)</strong> संभालें।",
        "मंडल/नगर स्तर पर जांच के बाद कार्ड मंज़ूर होता है। जुलाई 2025 में राज्य भर में नए कार्ड का वितरण 14 जुलाई से शुरू हुआ था।",
      ],
      callout: { kind: "warn", html: "अभी नए आवेदन लिए जा रहे हैं या नहीं, इसकी सरकारी सूचना हमें 13 अक्टूबर 2026 को नहीं मिली। MeeSeva केंद्र या मंडल राजस्व कार्यालय में पूछकर ही जाएं, और किसी एजेंट को पैसे न दें।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना और हटाना",
      list: [
        "<strong>नया सदस्य जोड़ना:</strong> MeeSeva केंद्र से आवेदन; नए सदस्य का आधार ज़रूरी। खबरों के अनुसार 2025 के अभियान में मौजूदा कार्डों में <strong>13.73 लाख नाम</strong> जोड़े गए।",
        "<strong>सदस्य हटाना:</strong> मृत्यु या शादी के बाद नाम हटाने का आवेदन।",
        "बच्चे के लिए जन्म प्रमाण पत्र और शादी के बाद आई सदस्य के लिए पुराने कार्ड से नाम हटने का प्रमाण साथ रखें।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC, पोर्टेबिलिटी और Mera Ration ऐप",
      list: [
        "<strong>e-KYC:</strong> आधार के बायोमेट्रिक से हर सदस्य की पहचान मिलाई जाती है; राशन दुकान की PoS मशीन पर होता है।",
        "<strong>One Nation One Ration Card:</strong> NFSA कार्ड (AAY/PHH) से दूसरे राज्य की e-PoS दुकान से भी NFSA का हिस्सा ले सकते हैं।",
        "<strong>Mera Ration ऐप</strong> (केंद्र सरकार): NFSA कार्ड का विवरण, हक, लेन-देन और नज़दीकी दुकान।",
        '<strong>ज़िलेवार कार्ड रिपोर्ट:</strong> <a href="https://epds.telangana.gov.in/FoodSecurityAct/reports/" target="_blank" rel="noopener nofollow">epds.telangana.gov.in</a> (NFSA पोर्टल पर इसका लिंक है)।',
      ],
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["PoS पर अंगूठा मेल नहीं खा रहा (एरर 300)", "उंगली साफ करके या दूसरी उंगली से; बार-बार हो तो आधार केंद्र पर बायोमेट्रिक अपडेट"],
          ["आधार रद्द / निलंबित / गलत (996 / 997 / 998)", "आधार केंद्र जाएं और कार्ड में दर्ज आधार नंबर सुधरवाएं"],
          ["बारीक चावल कम मिला या दुकान ने मना किया", "1967 या 1800-4250-0333 पर शिकायत"],
          ["आवेदन की स्थिति पता नहीं", "पावती लेकर MeeSeva केंद्र या मंडल कार्यालय से पूछें"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1967</strong>: टोल-फ्री नंबर",
        "<strong>1800-4250-0333</strong>: NFSA पोर्टल पर तेलंगाना का हेल्पडेस्क",
        "राशन दुकान से जुड़ी शिकायत मंडल/ज़िला नागरिक आपूर्ति कार्यालय में लिखित में भी दे सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://civilsupplies.telangana.gov.in/", title: "उपभोक्ता मामले, खाद्य एवं नागरिक आपूर्ति विभाग, तेलंगाना" },
    { href: "https://epds.telangana.gov.in/FoodSecurityAct/", title: "ePDS तेलंगाना: खाद्य सुरक्षा कार्ड रिपोर्ट" },
    { href: "https://nfsa.gov.in/State/TS", title: "NFSA पोर्टल: तेलंगाना का पेज (योजनाएं, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "तेलंगाना में नया राशन कार्ड कैसे बनवाएं?", a: "नज़दीकी MeeSeva केंद्र में सभी सदस्यों के आधार और आय के कागज़ के साथ नए खाद्य सुरक्षा कार्ड का आवेदन दें और पावती संभालें। अभी आवेदन खुले हैं या नहीं, पहले MeeSeva या मंडल कार्यालय से पूछ लें।" },
    { q: "तेलंगाना में राशन कार्ड पर कितना चावल मिलता है?", a: "1 अप्रैल 2025 से हर पात्र व्यक्ति को हर महीने 6 किलो बारीक चावल मुफ्त मिलता है। NFSA के तहत AAY कार्ड का हक 35 किलो प्रति परिवार है।" },
    { q: "तेलंगाना राशन कार्ड में नाम कैसे जोड़ें?", a: "MeeSeva केंद्र से सदस्य जोड़ने का आवेदन दें; नए सदस्य का आधार ज़रूरी है। 2025 के अभियान में 13 लाख से ज़्यादा नाम जोड़े गए थे।" },
    { q: "तेलंगाना राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "टोल-फ्री 1967 और NFSA पोर्टल पर दिया गया हेल्पडेस्क 1800-4250-0333।" },
    { q: "क्या तेलंगाना का राशन कार्ड दूसरे राज्य में चलेगा?", a: "NFSA (AAY/PHH) कार्ड पर One Nation One Ration Card के तहत दूसरे राज्य की e-PoS दुकान से NFSA का हिस्सा मिल सकता है।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/telangana-income-certificate.html", emoji: "💰", title: "तेलंगाना आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/telangana-domicile-certificate.html", emoji: "🏠", title: "तेलंगाना निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/telangana-labour-card.html", emoji: "👷", title: "तेलंगाना लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/states/andhra-pradesh-ration-card.html", emoji: "📋", title: "आंध्र प्रदेश राशन कार्ड", text: "पड़ोसी राज्य का तरीका" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://civilsupplies.telangana.gov.in/", label: "🏛️ नागरिक आपूर्ति विभाग तेलंगाना" },
    { href: "https://nfsa.gov.in/State/TS", label: "📊 NFSA: तेलंगाना का पेज" },
  ],
};
