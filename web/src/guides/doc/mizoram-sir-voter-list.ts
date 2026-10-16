import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - ECI/PN/086/2026 (14 May 2026; PIB PRID 2260955): Mizoram QD 01.07.2026,
//   draft 05.07.2026, final scheduled 06.09.2026.
// - EastMojo / Morung Express / newsonair.gov.in (7-10 Sep 2026): final roll
//   published 07.09.2026 by CEO Garima Gupta: 8,35,869 electors; 39,243 added
//   and 32,280 deleted after scrutiny of claims and objections.
// - ceo.mizoram.gov.in (home and forms page, fetched 14 Oct 2026 for the
//   voter-ID guide): contact centre 1800-334-1950; Final Electoral Roll of SIR
//   2026 published 07.09.2026; Submit Appeal; press notes 01.10 and 07.10.2026
//   (Special Drive from 8 Oct 2026: BLOs list pre-SIR electors missing from the
//   final roll, Form 6, new 18-year-olds, booth level camps).
// - Morung Express / Sentinel Assam (IANS, 8 Oct 2026): special drive launched;
//   BLOs compare pre-SIR and current rolls, house-to-house visits.
// - PIB 25.07.2026 (PRID 2289473): deletion categories; appeal to DM/DEO then CEO.
// - PIB 29.10.2025 (PRID 2183805): 1950, 1800-11-1950, Book-a-Call with BLO.
// Left out: house-to-house dates for Mizoram; end date of the special drive.
export const mizoramSirVoterList: DocGuide = {
  state: { slug: "mizoram", hi: "मिज़ोरम" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "मिज़ोरम", href: "/states/mizoram.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Mizoram SIR Voter List 2026",
  description: "मिज़ोरम SIR वोटर लिस्ट 2026: अंतिम सूची 7 सितंबर 2026 को छपी। नाम कैसे देखें, नाम कटा हो तो अक्टूबर के विशेष अभियान में Form 6, BLO और 1800-334-1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "मिज़ोरम SIR वोटर लिस्ट 2026: अंतिम सूची में नाम देखें और विशेष अभियान",
  lead: "मिज़ोरम में SIR (विशेष गहन पुनरीक्षण) <strong>तीसरे चरण में पूरा हो चुका है</strong>। ड्राफ्ट सूची 5 जुलाई 2026 को और <strong>अंतिम वोटर लिस्ट 7 सितंबर 2026</strong> को छपी, जिसमें लगभग 8.36 लाख वोटर हैं। SIR में छूटे योग्य लोगों का नाम जोड़ने के लिए <strong>8 अक्टूबर 2026 से विशेष अभियान</strong> चल रहा है, जिसमें Form 6 भरा जाता है।",
  facts: [
    ["चरण", "तीसरा (पूरा)"],
    ["अंतिम सूची", "7 सितंबर 2026"],
    ["विशेष अभियान", "8 अक्टूबर 2026 से"],
    ["संपर्क केंद्र", "1800-334-1950"],
  ],
  notice: "<strong>अक्टूबर 2026 विशेष अभियान:</strong> BLO उन लोगों के घर जा रहे हैं जिनका नाम SIR से पहले की सूची में था पर अंतिम सूची में नहीं है। नाम कटा है तो अपने BLO से मिलें या खुद Form 6 भरें।",
  sections: [
    {
      id: "tarikh",
      title: "मिज़ोरम SIR: क्या हुआ और कब",
      intro: "चुनाव आयोग के 14 मई 2026 के कार्यक्रम के अनुसार मिज़ोरम में योग्यता तिथि <strong>1 जुलाई 2026</strong> थी:",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ड्राफ्ट वोटर लिस्ट", "5 जुलाई 2026"],
          ["दावे-आपत्ति और निपटारा", "ड्राफ्ट के बाद, अंतिम सूची से पहले"],
          ["अंतिम वोटर लिस्ट", "<strong>7 सितंबर 2026</strong> (आयोग के कार्यक्रम में 6 सितंबर)"],
          ["छूटे लोगों के लिए विशेष अभियान", "8 अक्टूबर 2026 से"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार अंतिम सूची में <strong>8,35,869</strong> वोटर हैं। दावे-आपत्ति की जांच के बाद 39,243 नाम जुड़े और 32,280 हटे।" },
    },
    {
      id: "naam-dekhen",
      title: "अंतिम सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर, नाम-विवरण या मोबाइल नंबर से खोजें। राज्य में <strong>मिज़ोरम</strong> चुनें।",
        "CEO मिज़ोरम की वेबसाइट <a href=\"https://ceo.mizoram.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.mizoram.gov.in</a> पर \"View Final Roll\" से SIR 2026 की अंतिम सूची देखें।",
        "नाम मिल जाए तो भाग संख्या और क्रम संख्या लिख लें। परिवार के हर सदस्य का नाम अलग से जांचें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "नाम कट गया या छूट गया, तो क्या करें",
      steps: [
        "विशेष अभियान में अपने <strong>BLO</strong> से मिलें। BLO छूटे लोगों की सूची बनाकर घर जा रहे हैं, और बूथ स्तर पर कैंप भी लगते हैं।",
        "खुद भी <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या Voter Helpline/ECINET ऐप पर <strong>Form 6</strong> भर सकते हैं। 18 साल के नए युवा भी इसी फॉर्म से नाम जुड़वाएं।",
        "नाम, उम्र, फोटो या पते में गलती है तो <strong>Form 8</strong> भरें।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला निर्वाचन अधिकारी (DEO) और फिर CEO के पास अपील करें; CEO वेबसाइट पर \"Submit Appeal\" का विकल्प भी है।",
      ],
      callout: { kind: "warn", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना</strong>।" },
    },
    {
      id: "kagaz",
      title: "Form 6 के लिए क्या चाहिए",
      list: [
        "नई पासपोर्ट साइज़ फोटो।",
        "उम्र का प्रमाण, जैसे जन्म प्रमाण पत्र या 10वीं की मार्कशीट।",
        "पते का प्रमाण, जैसे बिजली/पानी का बिल, बैंक पासबुक या किरायानामा।",
        "मोबाइल नंबर। आवेदन के बाद Reference Number संभालकर रखें।",
      ],
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "Form 6/7/8 की <strong>कोई फीस नहीं</strong> है।",
        "अभियान में BLO खुद घर आता है। BLO की पहचान पूछें; शक हो तो हेल्पलाइन पर पुष्टि करें।",
        "मोबाइल पर आया <strong>OTP किसी को न बताएं</strong>।",
        "नाम जुड़वाने के नाम पर पैसे मांगने वालों से बचें और शिकायत करें।",
      ],
    },
    {
      id: "madad",
      title: "BLO और हेल्पलाइन",
      list: [
        "अपना बूथ और BLO: <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a>",
        "राज्य संपर्क केंद्र: <strong>1800-334-1950</strong> (टोल-फ्री)। वोटर हेल्पलाइन <strong>1950</strong>, राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong>।",
        "ECINET ऐप में <strong>Book-a-Call with BLO</strong> से BLO को कॉल का अनुरोध भेजें।",
      ],
    },
  ],
  official: [
    { href: "https://ceo.mizoram.gov.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), मिज़ोरम", note: "SIR अंतिम सूची, प्रेस नोट, अपील" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग" },
  ],
  faq: [
    { q: "क्या मिज़ोरम में SIR अभी चल रहा है?", a: "नहीं। SIR पूरा हो गया है और अंतिम वोटर लिस्ट 7 सितंबर 2026 को छप चुकी है। अभी अक्टूबर 2026 में छूटे लोगों के लिए विशेष अभियान चल रहा है।" },
    { q: "SIR के बाद नाम कट गया, क्या करूं?", a: "विशेष अभियान में BLO से मिलें या voters.eci.gov.in पर Form 6 भरें। ERO के फैसले के खिलाफ DEO और फिर CEO के पास अपील हो सकती है।" },
    { q: "मिज़ोरम की अंतिम सूची में कितने वोटर हैं?", a: "खबरों के अनुसार 7 सितंबर 2026 की अंतिम सूची में 8,35,869 वोटर हैं।" },
    { q: "मिज़ोरम में वोटर लिस्ट की मदद के लिए किस नंबर पर कॉल करें?", a: "राज्य संपर्क केंद्र 1800-334-1950 या वोटर हेल्पलाइन 1950।" },
  ],
  related: [
    { href: "/states/mizoram-voter-id-card.html", emoji: "🗳️", title: "मिज़ोरम वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/mizoram-voter-id-card.html", label: "🗳️ मिज़ोरम वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
