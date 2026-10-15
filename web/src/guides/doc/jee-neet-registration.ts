import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): jeemain.nta.nic.in homepage (public notices
// up to JEE (Main) 2026 Session 2 results and score cards; no JEE (Main) 2027
// registration notice yet), NTA Examination Calendar 2026-27 as reported by
// vikaspedia.in, careerindia.com, organiser.org, selfstudys.com (released mid
// September 2026; JEE (Main) 2027 Session 1 tentatively 22, 23, 24, 28, 29, 30
// January 2027; dates tentative; nta.ac.in), careers360 / cracku (Session 1
// registration expected late October 2026; Session 2 in April). NEET (UG)
// 2026 was held on 3 May 2026; no NEET (UG) 2027 date was found. neet.nta.nic.in,
// nta.ac.in and jeeadv.ac.in were not reachable from the sandbox. Fees and
// helpline numbers were not confirmed and are left out.
export const jeeNeetRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "छात्र", href: "/students/" },
    { label: "JEE / NEET पंजीकरण" },
  ],
  docHi: "JEE / NEET पंजीकरण",
  title: "जेईई / नीट पंजीकरण 2026",
  description: "इंजीनियरिंग (जेईई मेन/एडवांस्ड) और मेडिकल (नीट) पाठ्यक्रमों में प्रवेश के लिए राष्ट्रीय स्तर की प्रवेश परीक्षाएं। JEE Main 2027 की संभावित तारीखें, पंजीकरण कहां और कैसे करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "JEE Main और NEET पंजीकरण: 2027 की परीक्षा के लिए फॉर्म कब और कहां भरें",
  lead: "JEE Main (इंजीनियरिंग) और NEET-UG (मेडिकल) दोनों परीक्षाएं राष्ट्रीय परीक्षा एजेंसी (NTA) कराती है, जबकि JEE Advanced IIT कराते हैं। NTA के 2026-27 परीक्षा कैलेंडर में JEE Main 2027 का पहला सत्र 22 से 30 जनवरी 2027 के बीच (संभावित) है। 15 अक्टूबर 2026 तक JEE Main 2027 का पंजीकरण शुरू नहीं हुआ था; फॉर्म सिर्फ jeemain.nta.nic.in और neet.nta.nic.in पर भरें।",
  facts: [
    ["परीक्षा एजेंसी", "NTA (शिक्षा मंत्रालय के अधीन)"],
    ["JEE Main 2027 सत्र 1", "22-30 जनवरी 2027 (संभावित)"],
    ["JEE Main वेबसाइट", "jeemain.nta.nic.in"],
    ["NEET-UG वेबसाइट", "neet.nta.nic.in"],
  ],
  notice: "यह निजी सूचना वेबसाइट है। फॉर्म और फीस सिर्फ NTA की आधिकारिक वेबसाइट पर भरें; \"सीट पक्की\" या \"पेपर\" देने वाले लोगों से दूर रहें।",
  sections: [
    {
      id: "pariksha",
      title: "कौन सी परीक्षा किसके लिए",
      table: {
        head: ["परीक्षा", "किसके लिए", "कौन कराता है"],
        rows: [
          ["JEE Main (पेपर 1)", "NIT, IIIT और दूसरे केंद्रीय संस्थानों में B.E./B.Tech; JEE Advanced की पात्रता", "NTA"],
          ["JEE Main (पेपर 2)", "B.Arch और B.Planning", "NTA"],
          ["JEE Advanced", "IIT में दाखिला (JEE Main में चुने गए उम्मीदवार)", "IIT (हर साल एक IIT)"],
          ["NEET-UG", "MBBS, BDS, आयुष (BAMS, BHMS आदि) और नर्सिंग के कई कोर्स", "NTA"],
        ],
      },
    },
    {
      id: "tarikh",
      title: "2027 की परीक्षा: अब तक की जानकारी",
      list: [
        "<strong>JEE Main 2027 सत्र 1:</strong> NTA के 2026-27 कैलेंडर में 22, 23, 24, 28, 29 और 30 जनवरी 2027 (संभावित)। पंजीकरण की सूचना अभी नहीं आई; पिछले सालों में सत्र 1 का फॉर्म अक्टूबर-नवंबर में खुला था।",
        "<strong>JEE Main सत्र 2:</strong> आम तौर पर अप्रैल में होता है; फॉर्म फरवरी-मार्च में खुलता है।",
        "<strong>NEET-UG 2027:</strong> तारीख की घोषणा नहीं मिली। NEET-UG 2026 की परीक्षा 3 मई 2026 को हुई थी, और फॉर्म आम तौर पर फरवरी-मार्च में खुलता है।",
        "<strong>JEE Advanced 2027:</strong> JEE Main के बाद, IIT की वेबसाइट पर अलग पंजीकरण होता है।",
      ],
      callout: { kind: "warn", html: "ये तारीखें NTA ने \"संभावित\" बताई हैं और बदल सकती हैं। अंतिम तारीख, फीस और योग्यता सिर्फ उस परीक्षा की Information Bulletin से मानें।" },
    },
    {
      id: "kaise",
      title: "पंजीकरण कैसे करें",
      steps: [
        "जिस परीक्षा का फॉर्म है उसकी आधिकारिक वेबसाइट खोलें (JEE Main: <a href=\"https://jeemain.nta.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">jeemain.nta.nic.in</a>, NEET: <a href=\"https://neet.nta.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">neet.nta.nic.in</a>) और Information Bulletin पढ़ें।",
        "अपना मोबाइल नंबर और ईमेल डालकर <strong>नया पंजीकरण</strong> करें। यही मोबाइल-ईमेल परीक्षा तक चालू रखें।",
        "फॉर्म में नाम, जन्म तारीख, श्रेणी, 10वीं-12वीं की जानकारी और परीक्षा शहर की पसंद भरें।",
        "फोटो, हस्ताक्षर और श्रेणी/दिव्यांगता प्रमाण पत्र (अगर लागू हो) बुलेटिन में दिए साइज़ में अपलोड करें।",
        "ऑनलाइन फीस भरें और कन्फर्मेशन पेज डाउनलोड करके रखें।",
      ],
      callout: { kind: "ok", html: "फोटो-हस्ताक्षर का साइज़ ठीक करने के लिए हमारा <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> और <a href=\"/tools/signature-resizer.html\">सिग्नेचर रिसाइज़र</a> देखें।" },
    },
    {
      id: "kagaz",
      title: "फॉर्म से पहले तैयार रखें",
      list: [
        "आधार या दूसरा सरकारी पहचान पत्र (नाम और जन्म तारीख 10वीं की मार्कशीट जैसी)",
        "10वीं की मार्कशीट; 12वीं की मार्कशीट या रोल नंबर",
        "हाल की पासपोर्ट साइज़ फोटो और हस्ताक्षर की स्कैन कॉपी",
        "SC/ST/OBC-NCL/EWS या दिव्यांगता प्रमाण पत्र, अगर उस श्रेणी में आवेदन कर रहे हैं (OBC/EWS प्रमाण पत्र ताज़ा होना चाहिए)",
      ],
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "<strong>दो फॉर्म भरना:</strong> एक परीक्षा के लिए एक ही फॉर्म भरें; दो फॉर्म पर कार्रवाई हो सकती है।",
        "<strong>नाम में फर्क:</strong> नाम और जन्म तारीख 10वीं के प्रमाण पत्र जैसी रखें।",
        "<strong>सुधार की खिड़की छूटना:</strong> NTA फॉर्म में सुधार के लिए कुछ दिन देता है; उसी समय गलती ठीक करें।",
        "<strong>फर्जी वेबसाइट:</strong> सिर्फ .nic.in / nta.ac.in वाली साइट पर फीस भरें।",
      ],
    },
  ],
  official: [
    { href: "https://jeemain.nta.nic.in/", title: "JEE (Main) – NTA" },
    { href: "https://neet.nta.nic.in/", title: "NEET (UG) – NTA" },
    { href: "https://nta.ac.in/", title: "राष्ट्रीय परीक्षा एजेंसी (NTA)", note: "परीक्षा कैलेंडर" },
    { href: "https://jeeadv.ac.in/", title: "JEE Advanced (IIT)" },
  ],
  faq: [
    { q: "JEE Main 2027 का फॉर्म कब भरा जाएगा?", a: "15 अक्टूबर 2026 तक NTA ने पंजीकरण की सूचना जारी नहीं की थी। परीक्षा का सत्र 1 जनवरी 2027 (22-30 जनवरी, संभावित) में है, इसलिए फॉर्म उससे पहले खुलेगा। jeemain.nta.nic.in देखते रहें।" },
    { q: "NEET-UG 2027 कब होगा?", a: "NEET-UG 2027 की तारीख अभी घोषित नहीं हुई। 2026 में परीक्षा 3 मई को हुई थी। सूचना neet.nta.nic.in पर आएगी।" },
    { q: "क्या JEE Main और NEET एक ही फॉर्म से भर सकते हैं?", a: "नहीं, दोनों के फॉर्म अलग-अलग वेबसाइट पर अलग फीस के साथ भरे जाते हैं।" },
    { q: "JEE Advanced का फॉर्म कौन भर सकता है?", a: "JEE Main पेपर 1 में तय रैंक तक आने वाले उम्मीदवार। इसका पंजीकरण IIT की JEE Advanced वेबसाइट पर अलग से होता है।" },
    { q: "फॉर्म में गलती हो जाए तो?", a: "NTA हर परीक्षा में सुधार (correction) की खिड़की देता है। उसी अवधि में लॉगिन करके बदलाव करें; बाद में आम तौर पर बदलाव नहीं होता।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "पढ़ाई के लिए छात्रवृत्ति" },
    { href: "/service/caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र", text: "आरक्षित श्रेणी के लिए" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र", text: "EWS और छात्रवृत्ति के लिए" },
    { href: "/service/manodarpan-student-mental-wellness.html", emoji: "🧠", title: "मनोदर्पण", text: "परीक्षा के तनाव में मदद" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो साइज़" },
  ],
  aside: [
    { href: "https://jeemain.nta.nic.in/", label: "📝 JEE Main वेबसाइट" },
    { href: "https://neet.nta.nic.in/", label: "🩺 NEET वेबसाइट" },
  ],
};
