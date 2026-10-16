import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - PIB 25.07.2026 (PRID 2289473): Phase II (incl. Kerala) October 2025 to April
//   2026; deletion categories and safeguards; appeal to DM then CEO.
// - The News Minute / Onmanorama / Deccan Herald (Dec 2025): ECI extended
//   Kerala's schedule by a week after the SC order (local body polls):
//   enumeration to 18.12.2025, draft roll 23.12.2025, claims and objections
//   23.12.2025-22.01.2026, final roll 21.02.2026 (was 14.02.2026).
// - newsonair.gov.in / Onmanorama / Business Standard (21 Feb 2026): final roll
//   published 21.02.2026 with 2,69,53,644 electors (base roll Oct 2025:
//   2,78,50,855).
// - Business Today / Outlook / Telangana Today (2 Oct 2026): ECI letter of 29
//   Sep 2026 and CEO meeting of 1 Oct 2026: special drive in the 20 States/UTs
//   where SIR is over, BLOs compare pre-SIR and current rolls, visit homes,
//   plain statutory Form 6; about one month.
// - PIB 29.10.2025 (PRID 2183805): 1950, 1800-11-1950, Book-a-Call with BLO.
// - www.ceo.kerala.gov.in: CEO site (as in kerala-voter-id-card.ts).
// Left out: Kerala-specific dates of the October 2026 special drive (not found).
export const keralaSirVoterList: DocGuide = {
  state: { slug: "kerala", hi: "केरल" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "केरल", href: "/states/kerala.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Kerala SIR Voter List 2026",
  description: "केरल SIR वोटर लिस्ट 2026: अंतिम सूची 21 फरवरी 2026 को छपी, अपना नाम कैसे देखें, नाम कट गया हो तो Form 6, विशेष अभियान और BLO की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "केरल SIR वोटर लिस्ट 2026: अंतिम सूची में नाम देखें, नाम कटा हो तो क्या करें",
  lead: "केरल में SIR (विशेष गहन पुनरीक्षण) <strong>दूसरे चरण में पूरा हो चुका है</strong>। ड्राफ्ट सूची 23 दिसंबर 2025 को और <strong>अंतिम वोटर लिस्ट 21 फरवरी 2026</strong> को छपी, जिसमें लगभग 2.69 करोड़ वोटर हैं। अगर आपका नाम अंतिम सूची में नहीं है तो अब <strong>Form 6</strong> भरकर नाम जुड़वाएं; अक्टूबर 2026 में छूटे लोगों के लिए BLO का विशेष अभियान भी चल रहा है।",
  facts: [
    ["चरण", "दूसरा (पूरा)"],
    ["अंतिम सूची", "21 फरवरी 2026"],
    ["नाम छूटा तो", "Form 6"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "tarikh",
      title: "केरल SIR: क्या हुआ और कब",
      intro: "केरल SIR के दूसरे चरण (27 अक्टूबर 2025 के आदेश) में था। स्थानीय निकाय चुनाव के कारण सुप्रीम कोर्ट के निर्देश के बाद आयोग ने केरल का कार्यक्रम एक हफ्ता बढ़ाया था। खबरों के अनुसार तारीखें इस तरह रहीं:",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["BLO का घर-घर गणना फॉर्म", "नवंबर 2025 से 18 दिसंबर 2025 तक"],
          ["ड्राफ्ट वोटर लिस्ट", "23 दिसंबर 2025"],
          ["दावे और आपत्तियां", "23 दिसंबर 2025 से 22 जनवरी 2026"],
          ["अंतिम वोटर लिस्ट", "<strong>21 फरवरी 2026</strong> (पहले 14 फरवरी तय थी)"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार अंतिम सूची में <strong>2,69,53,644</strong> वोटर हैं, जबकि SIR से पहले (अक्टूबर 2025 की सूची में) लगभग 2.78 करोड़ थे।" },
    },
    {
      id: "naam-dekhen",
      title: "अंतिम सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC नंबर से, नाम-पिता का नाम-उम्र भरकर, या मोबाइल नंबर से खोजें। राज्य में <strong>केरल</strong> चुनें।",
        "नाम मिल जाए तो भाग संख्या (Part No.) और क्रम संख्या लिख लें।",
        "पूरे बूथ की सूची CEO केरल की वेबसाइट <a href=\"https://www.ceo.kerala.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.kerala.gov.in</a> पर और BLO के पास मिलती है।",
      ],
    },
    {
      id: "naam-nahi",
      title: "नाम कट गया या छूट गया, तो क्या करें",
      steps: [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या Voter Helpline/ECINET ऐप पर <strong>Form 6</strong> भरें, या BLO को फॉर्म दें। SIR खत्म होने के बाद अब सामान्य Form 6 भरा जाता है।",
        "चुनाव आयोग ने 29 सितंबर 2026 के पत्र से उन सभी राज्यों में <strong>विशेष अभियान</strong> का निर्देश दिया है जहां SIR पूरा हो गया। इसमें BLO SIR से पहले और अब की सूची मिलाकर छूटे लोगों के घर जाते हैं और Form 6 भरवाते हैं। अपने BLO से संपर्क करें।",
        "नाम, उम्र, फोटो या पते में गलती है तो <strong>Form 8</strong> भरें।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला मजिस्ट्रेट/DEO और फिर मुख्य निर्वाचन अधिकारी (CEO) के पास अपील कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटे: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना</strong>। वोटर लिस्ट साल में चार बार (1 जनवरी, 1 अप्रैल, 1 जुलाई, 1 अक्टूबर) अपडेट होती है, इसलिए Form 6 कभी भी भर सकते हैं।" },
    },
    {
      id: "kagaz",
      title: "Form 6 के लिए क्या चाहिए",
      list: [
        "नई पासपोर्ट साइज़ फोटो।",
        "उम्र का प्रमाण, जैसे जन्म प्रमाण पत्र या 10वीं की मार्कशीट।",
        "पते का प्रमाण, जैसे बिजली/पानी का बिल, बैंक पासबुक या किरायानामा।",
        "मोबाइल नंबर, ताकि OTP और आवेदन की सूचना मिल सके। आवेदन के बाद Reference Number संभालकर रखें।",
      ],
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "Form 6/7/8 की <strong>कोई फीस नहीं</strong> है।",
        "विशेष अभियान में BLO खुद घर आता है। BLO की पहचान पूछें; शक हो तो 1950 पर पुष्टि करें।",
        "मोबाइल पर आया <strong>OTP किसी को न बताएं</strong>।",
        "नाम जुड़वाने के नाम पर पैसे मांगने वालों से बचें और शिकायत करें।",
      ],
    },
    {
      id: "madad",
      title: "BLO और हेल्पलाइन",
      list: [
        "अपना बूथ और BLO: <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a>",
        "ECINET ऐप में <strong>Book-a-Call with BLO</strong> से BLO को कॉल का अनुरोध भेजें।",
        "वोटर हेल्पलाइन <strong>1950</strong> (STD कोड के साथ), राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong>।",
      ],
    },
  ],
  official: [
    { href: "https://www.ceo.kerala.gov.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), केरल", note: "वोटर लिस्ट और सूचनाएं" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग" },
  ],
  faq: [
    { q: "क्या केरल में SIR अभी चल रहा है?", a: "नहीं। केरल में SIR दूसरे चरण में पूरा हुआ और अंतिम वोटर लिस्ट 21 फरवरी 2026 को छप चुकी है।" },
    { q: "SIR के बाद मेरा नाम सूची में नहीं है, क्या करूं?", a: "Form 6 भरें (voters.eci.gov.in, ऐप या BLO से)। अक्टूबर 2026 में आयोग के निर्देश पर छूटे लोगों के लिए BLO का विशेष अभियान भी है।" },
    { q: "केरल की अंतिम सूची में कितने वोटर हैं?", a: "खबरों के अनुसार 21 फरवरी 2026 की अंतिम सूची में 2,69,53,644 वोटर हैं।" },
    { q: "SIR में मेरा नाम क्यों कटा होगा?", a: "SIR में नाम सिर्फ मृत्यु, स्थायी रूप से कहीं और चले जाने, दो जगह नाम होने या बार-बार जाने पर भी न मिलने पर हटाए गए। गणना फॉर्म वापस न देने पर भी नाम ड्राफ्ट में नहीं आया।" },
  ],
  related: [
    { href: "/states/kerala-voter-id-card.html", emoji: "🗳️", title: "केरल वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/kerala-voter-id-card.html", label: "🗳️ केरल वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
