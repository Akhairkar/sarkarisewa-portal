import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - nfsa.gov.in/State/AN: Department of Civil Supplies and Consumer Affairs
//   (dircs, 03192-233345); state food department website
//   dcsca.andaman.gov.in; RC count report
//   dcsca.andaman.gov.in/Report/DistrictwiseRCUnitCountNFSA; FPS automation
//   epos.andaman.gov.in; grievance dcsca.andaman.gov.in/Home/Grievance;
//   helpdesk 1967 and 1800-343-3197; schemes Annapurna, AAY, PHH(NFSA);
//   450 FPS; 16,823 NFSA cards (AAY 3,724, PHH 13,099).
// - andamannicobar.gov.in newsletter of the Supply Unit, Little Andaman
//   (Civil Supplies & Consumer Affairs), Feb 2026: categories APL, PHH, AAY;
//   entitlements PHH rice 4 kg + wheat 1 kg per head, AAY rice 31 kg + wheat
//   4 kg per family; NFSA grain free under PMGKAY from 1 Jan 2024; APL rice
//   ₹11.20/kg 4.5 kg per head (2.5 kg for a child under 12), APL wheat ₹9/kg
//   8 kg (up to 3 members) / 12 kg (4+ members); ePoS in all FPS, ONORC,
//   door-to-door eKYC and Aadhaar camps, duplicate units deactivated;
//   helpline 1800 343 3197 / 03192 230337.
// - News (Nicobar Times, via search extracts): e-KYC deadline for AAY/PHH
//   extended to 31 Jan 2025; Aug 2025 notice: e-KYC once every five years,
//   cards unused for six months or duplicates temporarily disabled; e-KYC at
//   the FPS or Room No. 20 of the Directorate, Sri Vijaya Puram; Supply Units
//   on other islands; 2024 camp drive for e-Shram migrant workers without a
//   ration card.
// - nfsa.gov.in Coverage/Salient Features; Mera Ration 2.0 FAQ.
// Left out: an online new-card application (none found; dcsca.andaman.gov.in
// and andaman.gov.in were not reachable from here), an official document
// list, fees and time limits. The old page's "e-District Andaman" apply claim
// was not confirmed.
export const andamanNicobarRationCard: DocGuide = {
  state: { slug: "andaman-nicobar", hi: "अंडमान और निकोबार" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Andaman & Nicobar Islands Ration Card 2026",
  description: "अंडमान और निकोबार राशन कार्ड 2026: AAY, PHH और APL कार्ड पर कितना चावल-गेहूं, नया कार्ड कहां बनता है, e-KYC (हर 5 साल), ONORC और हेल्पलाइन 1800-343-3197।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "अंडमान और निकोबार राशन कार्ड 2026: कार्ड के प्रकार, राशन, e-KYC और हेल्पलाइन",
  lead: "अंडमान और निकोबार द्वीप समूह में राशन कार्ड नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग (Directorate of Civil Supplies & Consumer Affairs), श्री विजयपुरम बनाता है। यहां NFSA के AAY और PHH कार्ड के साथ APL कार्ड भी हैं। बाकी द्वीपों पर विभाग की सप्लाई यूनिट काम देखती हैं।",
  facts: [
    ["NFSA कार्ड", "16,823 (NFSA पोर्टल)"],
    ["राशन दुकानें", "450"],
    ["e-KYC", "हर 5 साल में एक बार"],
    ["हेल्पलाइन", "1800-343-3197, 1967"],
  ],
  notice: "<strong>ध्यान दें:</strong> खबरों में छपे विभाग के अगस्त 2025 के निर्देश के अनुसार हर सदस्य का e-KYC हर 5 साल में करवाना है। 6 महीने तक इस्तेमाल न हुए या डुप्लीकेट कार्ड कुछ समय के लिए बंद किए जा सकते हैं।",
  sections: [
    {
      id: "prakar",
      title: "कार्ड के प्रकार और हर महीने का राशन",
      intro: "NFSA पोर्टल के अनुसार यहां <strong>16,823 NFSA कार्ड</strong> (AAY 3,724 और PHH 13,099) और <strong>450 राशन दुकानें</strong> हैं। विभाग की सप्लाई यूनिट, लिटिल अंडमान के फरवरी 2026 के न्यूज़लेटर में राशन इस तरह लिखा है:",
      table: {
        head: ["कार्ड", "चावल", "गेहूं", "दाम"],
        rows: [
          ["<strong>AAY</strong>", "31 किलो प्रति परिवार", "4 किलो प्रति परिवार", "<strong>मुफ्त</strong> (PMGKAY)"],
          ["<strong>PHH</strong>", "4 किलो प्रति व्यक्ति", "1 किलो प्रति व्यक्ति", "<strong>मुफ्त</strong> (PMGKAY)"],
          ["<strong>APL</strong>", "4.5 किलो प्रति व्यक्ति (12 साल से छोटे बच्चे के लिए 2.5 किलो)", "8 किलो (3 सदस्य तक) / 12 किलो (4 या ज़्यादा)", "चावल ₹11.20/किलो, गेहूं ₹9/किलो"],
        ],
      },
      callout: { kind: "info", html: "AAY को कुल 35 किलो प्रति परिवार और PHH को 5 किलो प्रति व्यक्ति मिलता है, जो NFSA का हक है। केंद्र सरकार के अनुसार यह अनाज <strong>1 जनवरी 2024 से 31 दिसंबर 2028 तक मुफ्त</strong> है। APL की मात्रा और दाम बदल सकते हैं; अपनी राशन दुकान पर लगी सूची देखें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है राशन कार्ड",
      list: [
        "<strong>AAY:</strong> सबसे गरीब परिवार, जिन्हें NFSA के तहत अंत्योदय में चुना गया है।",
        "<strong>PHH:</strong> प्रशासन के मापदंडों से पहचाने गए प्राथमिकता वाले परिवार।",
        "<strong>APL:</strong> बाकी परिवार, जिन्हें कीमत देकर राशन मिलता है।",
        "एक परिवार का <strong>एक ही राशन कार्ड</strong>; किसी सदस्य का नाम दो कार्डों में नहीं हो सकता।",
      ],
      callout: { kind: "ok", html: "खबरों के अनुसार विभाग ने 2024 में e-Shram पोर्टल पर दर्ज उन प्रवासी मज़दूरों के लिए कैंप लगाए जिनके पास राशन कार्ड नहीं था। जिनके पास अपने राज्य का NFSA कार्ड है, वे बिना कार्ड बदले यहीं किसी भी राशन दुकान से राशन ले सकते हैं।" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कहां बनता है",
      steps: [
        "दक्षिण अंडमान (श्री विजयपुरम) में <strong>नागरिक आपूर्ति निदेशालय</strong> और बाकी द्वीपों पर विभाग की <strong>सप्लाई यूनिट</strong> में जाकर नए कार्ड का फॉर्म लें।",
        "मुखिया और हर सदस्य का नाम, उम्र, रिश्ता और आधार नंबर भरें।",
        "परिवार के सभी सदस्यों का <strong>आधार</strong>, निवास का प्रमाण, मुखिया की फोटो और बैंक खाते का विवरण लगाएं। दूसरे राज्य में कार्ड था तो वहां का <strong>सरेंडर सर्टिफिकेट</strong> भी।",
        "फॉर्म जमा करके रसीद लें। जांच के बाद कार्ड बनकर नज़दीकी राशन दुकान से जुड़ता है।",
      ],
      callout: { kind: "warn", html: "13 अक्टूबर 2026 तक हमें यहां नए राशन कार्ड का कोई ऑनलाइन आवेदन पोर्टल नहीं मिला, न ही विभाग की आधिकारिक कागज़ों की सूची। जाने से पहले हेल्पलाइन 03192-230337 पर पूछ लें कि कौन-से कागज़ और फॉर्म चाहिए।" },
    },
    {
      id: "sadasya",
      title: "नाम जोड़ना और हटाना",
      list: [
        "नए सदस्य (बच्चा, शादी के बाद आई बहू) का नाम जोड़ने के लिए उसका <strong>आधार</strong> और जन्म प्रमाण पत्र / पुराने कार्ड से नाम हटने का सबूत लेकर निदेशालय या सप्लाई यूनिट जाएं।",
        "मृत्यु होने पर मृत्यु प्रमाण पत्र के साथ नाम हटवाएं।",
        "5 साल से छोटी उम्र में बने बच्चों के आधार में बायोमेट्रिक अपडेट ज़रूरी है, नहीं तो e-KYC नहीं होगा।",
      ],
    },
    {
      id: "ekyc",
      title: "e-KYC कैसे और कहां करवाएं",
      list: [
        "<strong>राशन दुकान पर:</strong> आधार और राशन कार्ड लेकर जाएं; PoS मशीन पर अंगूठा/उंगली लगाकर e-KYC होती है।",
        "<strong>निदेशालय में:</strong> श्री विजयपुरम में नागरिक आपूर्ति निदेशालय का <strong>कमरा नंबर 20</strong> (खबरों के अनुसार)।",
        "<strong>दूसरे द्वीपों पर:</strong> विभाग की सप्लाई यूनिट; कई जगह घर-घर जाकर e-KYC और आधार कैंप भी लगाए गए हैं।",
        "<strong>One Nation One Ration Card:</strong> सभी राशन दुकानों पर e-PoS मशीनें हैं, इसलिए NFSA कार्ड वाले देश में कहीं भी अपना राशन ले सकते हैं। <strong>Mera Ration ऐप</strong> से कार्ड और हक देख सकते हैं।",
      ],
    },
    {
      id: "helpline",
      title: "हेल्पलाइन और शिकायत",
      list: [
        "<strong>1800-343-3197</strong>: NFSA पोर्टल पर अंडमान और निकोबार का हेल्पडेस्क नंबर",
        "<strong>03192-230337</strong>: विभाग की हेल्पलाइन",
        "<strong>1967</strong>: खाद्य विभाग का टोल-फ्री नंबर",
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://dcsca.andaman.gov.in/Home/Grievance" target="_blank" rel="noopener nofollow">dcsca.andaman.gov.in → Grievance</a> (NFSA पोर्टल पर दिया गया लिंक)',
      ],
    },
  ],
  official: [
    { href: "https://dcsca.andaman.gov.in/", title: "नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, अंडमान और निकोबार" },
    { href: "https://nfsa.gov.in/State/AN", title: "NFSA पोर्टल: अंडमान और निकोबार का पेज (कार्ड, दुकानें, हेल्पलाइन)" },
    { href: "https://nfsa.gov.in/portal/Coverage_Entitlements_NFSA_AA", title: "NFSA: कवरेज और अनाज का हक (केंद्र सरकार)" },
  ],
  faq: [
    { q: "अंडमान और निकोबार में नया राशन कार्ड कैसे बनवाएं?", a: "श्री विजयपुरम में नागरिक आपूर्ति निदेशालय या अपने द्वीप की सप्लाई यूनिट में फॉर्म भरकर जमा करें। हमें इसका ऑनलाइन आवेदन पोर्टल नहीं मिला; कागज़ों के बारे में पहले 03192-230337 पर पूछ लें।" },
    { q: "AAY और PHH कार्ड पर कितना राशन मिलता है?", a: "विभाग के फरवरी 2026 के न्यूज़लेटर के अनुसार AAY पर हर महीने 31 किलो चावल और 4 किलो गेहूं प्रति परिवार, और PHH पर 4 किलो चावल और 1 किलो गेहूं प्रति व्यक्ति, मुफ्त।" },
    { q: "APL कार्ड पर क्या मिलता है?", a: "उसी न्यूज़लेटर के अनुसार APL पर 4.5 किलो चावल प्रति व्यक्ति ₹11.20/किलो और 8 से 12 किलो गेहूं ₹9/किलो। दाम बदल सकते हैं, दुकान की सूची देखें।" },
    { q: "e-KYC कितनी बार करवानी होती है?", a: "खबरों में छपे विभाग के अगस्त 2025 के निर्देश के अनुसार हर 5 साल में एक बार। राशन दुकान पर, या श्री विजयपुरम में निदेशालय के कमरा नंबर 20 में, या सप्लाई यूनिट में करवाएं।" },
    { q: "राशन कार्ड हेल्पलाइन नंबर क्या है?", a: "NFSA पोर्टल के अनुसार 1800-343-3197; विभाग की हेल्पलाइन 03192-230337; और 1967।" },
  ],
  related: [
    { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड: पूरी जानकारी", text: "NFSA, e-KYC, सभी राज्य" },
    { href: "/states/andaman-nicobar-income-certificate.html", emoji: "💰", title: "अंडमान-निकोबार आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/andaman-nicobar-domicile-certificate.html", emoji: "🏠", title: "अंडमान-निकोबार निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/andaman-nicobar-birth-certificate.html", emoji: "👶", title: "अंडमान-निकोबार जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "बायोमेट्रिक और मोबाइल अपडेट" },
    { href: "/service/csc-locator/andaman-nicobar.html", emoji: "📍", title: "अंडमान-निकोबार CSC सेंटर", text: "नज़दीकी केंद्र" },
  ],
  otherStatesTitle: "दूसरे राज्यों में राशन कार्ड",
  aside: [
    { href: "https://dcsca.andaman.gov.in/Home/Grievance", label: "📝 ऑनलाइन शिकायत" },
    { href: "/service/csc-locator/andaman-nicobar.html", label: "📍 नज़दीकी CSC" },
  ],
};
