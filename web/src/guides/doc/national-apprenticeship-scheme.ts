import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme API entry "National Apprenticeship
// Promotion Scheme-2" (MSDE; NAPS launched 19 Aug 2016; NAPS-2 central sector
// scheme under Skill India; target 46 lakh apprentices FY2022-23 to 2025-26;
// Govt share 25% of stipend up to ₹1,500/month per apprentice by DBT; no
// support for Central/State Govt departments, PSUs and public sector banks;
// designated trade 1 yr for ITI pass, 2 yrs for freshers; optional trades
// 6/9/12 months; min age 14 (18 in hazardous trades), max 35 at registration
// for stipend support; Aadhaar e-KYC on apprenticeshipindia.gov.in; NAPS-2
// guidelines 25 Aug 2023); PIB 28 Jul 2025 (8,52,376 apprentices under
// NAPS-2 on 30 Jun 2025); Apprenticeship (Amendment) Rules 2025, G.S.R.
// 610(E) published 11 Sep 2025, as quoted in DGT office memo 15 Sep 2025 and
// news reports (minimum stipend ₹6,800 to ₹12,300 a month; class 5-9 ₹6,800,
// class 10 ₹8,200, graduate ₹12,300; +10% in 2nd year, +15% more in 3rd).
// Intermediate category rates not given because sources differed; any
// extension of NAPS-2 beyond 2025-26 not confirmed.
export const nationalApprenticeshipScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS)" },
  ],
  docHi: "राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS)",
  title: "राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS) 2026",
  description: "उद्योग में नौकरी-पर-प्रशिक्षण शिक्षुता को प्रोत्साहित करती है, सरकार शिक्षुओं के वजीफे का 25% (₹1,500 महीना तक) सीधे शिक्षु के बैंक खाते में देती है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "NAPS अप्रेंटिसशिप योजना 2026: स्टाइपेंड कितना, कौन कर सकता है, apprenticeshipindia.gov.in पर रजिस्ट्रेशन",
  lead: "राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS-2) कौशल विकास एवं उद्यमशीलता मंत्रालय (MSDE) की योजना है, जिसमें युवा किसी कंपनी/संस्था में काम करते हुए ट्रेनिंग (अप्रेंटिसशिप) लेते हैं और हर महीने स्टाइपेंड पाते हैं। स्टाइपेंड कंपनी देती है, और सरकार उसमें से 25% (अधिकतम <strong>₹1,500 महीना</strong>) सीधे अप्रेंटिस के बैंक खाते में DBT से भेजती है। रजिस्ट्रेशन <strong>apprenticeshipindia.gov.in</strong> पर आधार e-KYC से होता है।",
  facts: [
    ["पोर्टल", '<a href="https://www.apprenticeshipindia.gov.in/" target="_blank" rel="noopener nofollow">apprenticeshipindia.gov.in</a>'],
    ["सरकार का हिस्सा", "स्टाइपेंड का 25%, अधिकतम ₹1,500 महीना (DBT)"],
    ["न्यूनतम स्टाइपेंड", "₹6,800 से ₹12,300 महीना (11 सितंबर 2025 से)"],
    ["उम्र", "कम से कम 14 साल; सरकारी मदद के लिए रजिस्ट्रेशन के समय 35 साल तक"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "NAPS योजना क्या है",
      intro: "NAPS 19 अगस्त 2016 को शुरू हुई थी; अभी इसका दूसरा चरण NAPS-2 चल रहा है, जो स्किल इंडिया कार्यक्रम का हिस्सा है। अप्रेंटिसशिप अप्रेंटिस अधिनियम, 1961 के तहत होती है। 30 जून 2025 तक NAPS-2 में 8.5 लाख से ज़्यादा अप्रेंटिस ट्रेनिंग ले रहे थे।",
      list: [
        "<strong>काम पर ट्रेनिंग:</strong> कंपनी/फैक्ट्री/दुकान/सेवा संस्था में असली काम सीखते हैं।",
        "<strong>स्टाइपेंड:</strong> हर महीने तय न्यूनतम दर से कम नहीं; सरकार का हिस्सा सीधे खाते में।",
        "<strong>प्रमाण पत्र:</strong> ट्रेनिंग पूरी होने पर अप्रेंटिसशिप सर्टिफिकेट, जो नौकरी में काम आता है।",
      ],
    },
    {
      id: "stipend",
      title: "न्यूनतम स्टाइपेंड कितना है (11 सितंबर 2025 से)",
      intro: "अप्रेंटिसशिप (संशोधन) नियम, 2025 से न्यूनतम स्टाइपेंड बढ़ाया गया। कंपनी इससे ज़्यादा भी दे सकती है।",
      table: {
        head: ["योग्यता", "न्यूनतम स्टाइपेंड (महीना)"],
        rows: [
          ["कक्षा 5 से 9 पास", "₹6,800"],
          ["कक्षा 10 पास", "₹8,200"],
          ["12वीं, ITI/सर्टिफिकेट, डिप्लोमा", "₹8,200 और ₹12,300 के बीच (श्रेणी के अनुसार; पोर्टल पर देखें)"],
          ["ग्रेजुएट / डिग्री अप्रेंटिस", "₹12,300"],
        ],
      },
      callout: { kind: "info", html: "दूसरे साल न्यूनतम स्टाइपेंड 10% और तीसरे साल 15% और बढ़ता है। 11 सितंबर 2025 को जो अप्रेंटिस ट्रेनिंग में थे, उन्हें भी उस तारीख से नई दर मिलती है।" },
    },
    {
      id: "trade",
      title: "ट्रेड और ट्रेनिंग की अवधि",
      table: {
        head: ["ट्रेड का प्रकार", "अवधि"],
        rows: [
          ["Designated Trade (सरकार द्वारा तय), ITI पास", "आम तौर पर 1 साल"],
          ["Designated Trade, फ्रेशर / बिना ITI", "आम तौर पर 2 साल (बेसिक ट्रेनिंग सहित)"],
          ["Optional Trade (कंपनी द्वारा तय)", "6, 9 या 12 महीने; शुरू में कम से कम 2 हफ्ते की बेसिक ट्रेनिंग"],
        ],
      },
    },
    {
      id: "registration",
      title: "अप्रेंटिसशिप के लिए रजिस्ट्रेशन कैसे करें",
      steps: [
        '<a href="https://www.apprenticeshipindia.gov.in/" target="_blank" rel="noopener nofollow">apprenticeshipindia.gov.in</a> पर <strong>Login/Register</strong> में <strong>Candidate</strong> चुनें।',
        "मोबाइल नंबर और ईमेल से रजिस्टर करें; मोबाइल OTP ज़रूरी है।",
        "<strong>आधार नंबर डालकर e-KYC</strong> पूरा करें। इसके बिना रजिस्ट्रेशन पूरा नहीं होता और कंपनी कॉन्ट्रैक्ट जारी नहीं कर सकती।",
        "प्रोफाइल में पढ़ाई/ITI की जानकारी भरें और पोर्टल पर दिख रही अप्रेंटिसशिप के लिए आवेदन करें।",
        "कंपनी चुनती है तो पोर्टल पर अप्रेंटिसशिप कॉन्ट्रैक्ट बनता है। सरकारी हिस्सा पाने के लिए बैंक खाता आधार से जुड़ा (DBT चालू) होना चाहिए।",
      ],
      callout: { kind: "warn", html: "<strong>ध्यान दें:</strong> केंद्र/राज्य सरकार के विभागों, सरकारी कंपनियों (PSU) और सरकारी बैंकों में अप्रेंटिसशिप पर NAPS-2 से सरकारी हिस्सा नहीं मिलता; वहां पूरा स्टाइपेंड संस्था देती है।" },
    },
    {
      id: "kaun",
      title: "कौन अप्रेंटिस बन सकता है",
      list: [
        "कम से कम 14 साल उम्र; खतरनाक उद्योगों वाले ट्रेड में कम से कम 18 साल।",
        "सरकारी स्टाइपेंड सहायता के लिए रजिस्ट्रेशन के समय अधिकतम उम्र 35 साल।",
        "कक्षा 5 पास से लेकर ITI, डिप्लोमा, ग्रेजुएट तक; PMKVY, DDU-GKY जैसी ट्रेनिंग वाले युवा भी।",
      ],
    },
  ],
  official: [
    { href: "https://www.apprenticeshipindia.gov.in/", title: "अप्रेंटिसशिप पोर्टल (रजिस्ट्रेशन, कंपनियां, कॉन्ट्रैक्ट)" },
    { href: "https://www.myscheme.gov.in/schemes/naps", title: "myScheme पर NAPS-2" },
    { href: "https://www.msde.gov.in/", title: "कौशल विकास एवं उद्यमशीलता मंत्रालय" },
  ],
  faq: [
    { q: "NAPS में सरकार कितना पैसा देती है?", a: "सरकार स्टाइपेंड का 25% देती है, अधिकतम ₹1,500 प्रति अप्रेंटिस प्रति महीना, जो DBT से सीधे अप्रेंटिस के बैंक खाते में आता है। बाकी स्टाइपेंड कंपनी देती है।" },
    { q: "अप्रेंटिस का न्यूनतम स्टाइपेंड कितना है?", a: "11 सितंबर 2025 से न्यूनतम स्टाइपेंड योग्यता के हिसाब से ₹6,800 (कक्षा 5-9 पास) से ₹12,300 (ग्रेजुएट) महीना है।" },
    { q: "NAPS की अधिकतम उम्र क्या है?", a: "सरकारी स्टाइपेंड सहायता के लिए रजिस्ट्रेशन के समय उम्र 35 साल तक होनी चाहिए। न्यूनतम उम्र 14 साल (खतरनाक ट्रेड में 18 साल) है।" },
    { q: "NAPS और NATS में क्या फर्क है?", a: "NAPS कौशल विकास मंत्रालय की योजना है (ITI, 5वीं-12वीं पास, ग्रेजुएट आदि)। NATS शिक्षा मंत्रालय की योजना है, जो इंजीनियरिंग/डिप्लोमा/ग्रेजुएट युवाओं के लिए अलग पोर्टल पर चलती है।" },
  ],
  related: [
    { href: "/service/pm-internship-scheme.html", emoji: "🏢", title: "पीएम इंटर्नशिप योजना", text: "बड़ी कंपनियों में इंटर्नशिप" },
    { href: "/service/pm-kaushal-vikas-yojana.html", emoji: "🛠️", title: "पीएम कौशल विकास योजना", text: "मुफ्त स्किल ट्रेनिंग" },
    { href: "/service/ncs-national-career-service.html", emoji: "💼", title: "नेशनल करियर सर्विस", text: "नौकरी खोजें और रजिस्टर करें" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन रजिस्ट्रेशन में मदद" },
  ],
  aside: [
    { href: "https://www.apprenticeshipindia.gov.in/", label: "🛠️ अप्रेंटिसशिप पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
