import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - ECI/PN/086/2026 Annexure-I (14 May 2026; PIB PRID 2260955): Manipur QD
//   01.07.2026, house-to-house 30.05-28.06.2026, draft 05.07.2026, claims
//   05.07-04.08.2026, final 06.09.2026 (as in manipur-voter-id-card.ts).
// - Daily Pioneer / Morung Express / Madhyamam (PTI, 6-7 Sep 2026): final roll
//   published 06.09.2026 by CEO Arun Kumar Sinha: 19,60,620 electors in 60 ACs;
//   56,871 added and 30,650 deleted after the draft; 96,985 claims and
//   objections 05.07-04.08.2026; draft had left out 1,58,677 electors.
// - Sentinel Assam (Oct 2026): Manipur statewide campaign so no eligible voter
//   is left out (follows the ECI letter of 29 Sep 2026 on a special drive in
//   States/UTs where SIR is over: BLOs compare pre-SIR and current rolls, visit
//   homes, plain Form 6; Business Today / Outlook 2 Oct 2026).
// - ceomanipur.nic.in (home page, fetched 14 Oct 2026 for the voter-ID guide):
//   1950; "SIR Electoral Roll 2026 without photo as of July 1, 2026"; ASDD
//   lists; SIR 2005 roll search.
// - PIB 25.07.2026 (PRID 2289473): deletion categories; appeal to DM/DEO then CEO.
// - PIB 29.10.2025 (PRID 2183805): 1800-11-1950, Book-a-Call with BLO.
// Left out: end date of the October 2026 campaign (not found).
export const manipurSirVoterList: DocGuide = {
  state: { slug: "manipur", hi: "मणिपुर" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "मणिपुर", href: "/states/manipur.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Manipur SIR Voter List 2026",
  description: "मणिपुर SIR वोटर लिस्ट 2026: अंतिम सूची 6 सितंबर 2026 को छपी। अपना नाम कैसे देखें, नाम कटा हो तो Form 6, अपील, BLO और हेल्पलाइन 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "मणिपुर SIR वोटर लिस्ट 2026: अंतिम सूची में नाम देखें, नाम कटा हो तो क्या करें",
  lead: "मणिपुर में SIR (विशेष गहन पुनरीक्षण) <strong>तीसरे चरण में पूरा हो चुका है</strong>। ड्राफ्ट सूची 5 जुलाई 2026 को और <strong>अंतिम वोटर लिस्ट 6 सितंबर 2026</strong> को छपी, जिसमें लगभग 19.6 लाख वोटर हैं। अंतिम सूची में नाम नहीं है तो अब <strong>Form 6</strong> भरकर नाम जुड़वाएं; छूटे लोगों के लिए BLO का अभियान भी चल रहा है।",
  facts: [
    ["चरण", "तीसरा (पूरा)"],
    ["अंतिम सूची", "6 सितंबर 2026"],
    ["नाम छूटा तो", "Form 6"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "tarikh",
      title: "मणिपुर SIR: क्या हुआ और कब",
      intro: "चुनाव आयोग के 14 मई 2026 के प्रेस नोट के अनुसार मणिपुर में योग्यता तिथि <strong>1 जुलाई 2026</strong> थी:",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["BLO का घर-घर गणना फॉर्म", "30 मई से 28 जून 2026"],
          ["ड्राफ्ट वोटर लिस्ट", "5 जुलाई 2026"],
          ["दावे और आपत्तियां", "5 जुलाई से 4 अगस्त 2026"],
          ["अंतिम वोटर लिस्ट", "<strong>6 सितंबर 2026</strong> (छप चुकी)"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार अंतिम सूची में <strong>19,60,620</strong> वोटर हैं। ड्राफ्ट के बाद 56,871 नाम जुड़े और 30,650 हटे। SIR से पहले लगभग 20.93 लाख वोटर थे।" },
    },
    {
      id: "naam-dekhen",
      title: "अंतिम सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर, नाम-विवरण या मोबाइल नंबर से खोजें। राज्य में <strong>मणिपुर</strong> चुनें।",
        "CEO मणिपुर की वेबसाइट <a href=\"https://ceomanipur.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceomanipur.nic.in</a> पर \"SIR Electoral Roll 2026 without photo as of July 1, 2026\" से भाग-वार सूची देखें।",
        "उसी वेबसाइट पर ASDD (अनुपस्थित, शिफ्ट, मृत, डुप्लीकेट) सूचियां और 2005 की पुरानी गहन पुनरीक्षण सूची में नाम खोजने की सुविधा भी है।",
        "नाम मिल जाए तो भाग संख्या और क्रम संख्या लिख लें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "नाम कट गया या छूट गया, तो क्या करें",
      steps: [
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या Voter Helpline/ECINET ऐप पर <strong>Form 6</strong> भरें, या BLO को फॉर्म दें।",
        "चुनाव आयोग के निर्देश (29 सितंबर 2026) पर SIR पूरा हो चुके राज्यों में छूटे योग्य लोगों के लिए विशेष अभियान चल रहा है, और मणिपुर ने भी राज्यव्यापी अभियान शुरू किया है। इसमें BLO पुरानी और नई सूची मिलाकर छूटे लोगों के घर जाते हैं। अपने BLO से संपर्क करें।",
        "नाम, उम्र, फोटो या पते में गलती है तो <strong>Form 8</strong> भरें।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला निर्वाचन अधिकारी (DEO) और फिर मुख्य निर्वाचन अधिकारी (CEO) के पास अपील कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना</strong>। वोटर लिस्ट साल में चार बार अपडेट होती है, इसलिए Form 6 कभी भी भर सकते हैं।" },
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
        "अभियान में BLO खुद घर आता है। BLO की पहचान पूछें; शक हो तो 1950 पर पुष्टि करें।",
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
        "वोटर हेल्पलाइन <strong>1950</strong> (टोल-फ्री), राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong>।",
      ],
    },
  ],
  official: [
    { href: "https://ceomanipur.nic.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), मणिपुर", note: "SIR 2026 सूची, ASDD सूची" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग" },
  ],
  faq: [
    { q: "क्या मणिपुर में SIR अभी चल रहा है?", a: "नहीं। मणिपुर में SIR पूरा हो गया है और अंतिम वोटर लिस्ट 6 सितंबर 2026 को छप चुकी है।" },
    { q: "SIR के बाद मेरा नाम कट गया, अब क्या करूं?", a: "Form 6 भरें (voters.eci.gov.in, ऐप या BLO से)। छूटे लोगों के लिए BLO का अभियान भी चल रहा है। ERO के फैसले के खिलाफ DEO और फिर CEO के पास अपील हो सकती है।" },
    { q: "मणिपुर की अंतिम सूची में कितने वोटर हैं?", a: "खबरों के अनुसार 6 सितंबर 2026 की अंतिम सूची में 19,60,620 वोटर हैं।" },
    { q: "ASDD सूची क्या है?", a: "अनुपस्थित (Absent), शिफ्ट (Shifted), मृत (Dead) और डुप्लीकेट वोटरों की सूची, जिनके नाम SIR में ड्राफ्ट में नहीं आए। यह CEO मणिपुर की वेबसाइट पर है।" },
  ],
  related: [
    { href: "/states/manipur-voter-id-card.html", emoji: "🗳️", title: "मणिपुर वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/manipur-voter-id-card.html", label: "🗳️ मणिपुर वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
