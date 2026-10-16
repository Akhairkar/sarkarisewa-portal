import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - pib.gov.in PRID 2260955 (14 May 2026): Delhi in SIR Phase III; ceodelhi.gov.in
//   schedule PDF (15 May 2026): H2H from 30.06.2026 (as cited in sibling
//   delhi-voter-id-card.ts).
// - deccanherald.com, business-standard.com, etvbharat.com (Jul-Aug 2026):
//   enumeration extended three times; draft moved to 31.08.2026.
// - newsonair.gov.in (31 Aug 2026), businesstoday.in, theprint.in: draft roll
//   published 31.08.2026 with 97,53,577 of 1,45,10,299 electors.
// - newsonair.gov.in (28 Sep 2026), ECI/PN/120/2026 (26 Sep 2026): claims and
//   objections extended to 30.10.2026, disposal to 30.11.2026, final roll
//   04.12.2026; BLOs collect documents at home and upload to ECINet.
// - pib.gov.in PRID 2289473 (25 Jul 2026): four deletion grounds; appeals.
// Note: sibling delhi-voter-id-card.ts says draft 05.08.2026 (original
// schedule); the draft actually came out on 31.08.2026.
// Left out: exact SIR document list (described generally).
export const delhiSirVoterList: DocGuide = {
  state: { slug: "delhi", hi: "दिल्ली" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दिल्ली", href: "/states/delhi.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Delhi SIR Voter List 2026: Name Check, Eligibility & Documents",
  description: "दिल्ली SIR वोटर लिस्ट 2026: ड्राफ्ट सूची 31 अगस्त को आई, दावे-आपत्ति 30 अक्टूबर 2026 तक। नाम कैसे देखें, नाम न हो तो Form 6 और घोषणा पत्र, BLO, 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "दिल्ली SIR वोटर लिस्ट 2026: ड्राफ्ट सूची में नाम देखें, 30 अक्टूबर तक दावा करें",
  lead: "दिल्ली में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) <strong>तीसरे चरण में अभी चल रहा है</strong>। ड्राफ्ट सूची 31 अगस्त 2026 को आई और <strong>दावे-आपत्ति की आखिरी तारीख 30 अक्टूबर 2026</strong> है। ड्राफ्ट सूची में अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO दिल्ली की वेबसाइट पर देखें; नाम न हो तो इसी अवधि में Form 6 (घोषणा पत्र के साथ) भरें।",
  facts: [
    ["चरण", "तीसरा चरण (जारी)"],
    ["ड्राफ्ट सूची", "31 अगस्त 2026"],
    ["दावे-आपत्ति", "30 अक्टूबर 2026 तक"],
    ["अंतिम सूची", "4 दिसंबर 2026 (तय)"],
  ],
  notice: "<strong>ज़रूरी:</strong> दिल्ली की ड्राफ्ट सूची में करीब 97.5 लाख नाम हैं, जबकि SIR से पहले करीब 1.45 करोड़ थे। अपना और परिवार का नाम अभी जांचें। नाम न हो तो <strong>30 अक्टूबर 2026</strong> से पहले Form 6 भरें। तारीखें कई बार बढ़ी हैं, इसलिए CEO दिल्ली की वेबसाइट पर ताज़ा तारीख देखें।",
  sections: [
    {
      id: "sthiti",
      title: "दिल्ली में SIR की तारीखें",
      intro: "<a href=\"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955\" target=\"_blank\" rel=\"noopener nofollow\">ECI आदेश, 14 मई 2026</a> के अनुसार दिल्ली SIR के तीसरे चरण में है। आयोग ने कार्यक्रम कई बार बढ़ाया। आकाशवाणी और अखबारों में छपी ताज़ा तारीखें:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "30 जून 2026 से शुरू; कई बार बढ़ाकर अगस्त 2026 तक"],
          ["ड्राफ्ट मतदाता सूची", "31 अगस्त 2026"],
          ["दावे-आपत्ति", "31 अगस्त से 30 अक्टूबर 2026 (30 सितंबर से बढ़ाकर)"],
          ["नोटिस, सुनवाई और निपटारा", "30 नवंबर 2026 तक"],
          ["अंतिम मतदाता सूची", "4 दिसंबर 2026 (तय)"],
        ],
      },
      callout: {
        kind: "warn",
        html: "जिन लोगों को ERO का नोटिस मिला है, उनके घर BLO आकर कागज़ ले सकते हैं और ECINET पर अपलोड करते हैं, ताकि सुनवाई में जाने की ज़रूरत कम हो। सुनवाई में परिवार का कोई वयस्क सदस्य आपकी ओर से जा सकता है।",
      },
    },
    {
      id: "naam-jaanch",
      title: "SIR सूची में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC (वोटर कार्ड) नंबर डालकर खोजें, या नाम, उम्र, ज़िला और विधानसभा क्षेत्र भरकर, या मोबाइल नंबर से खोजें।",
        "नाम दिखे तो भाग संख्या, क्रम संख्या और मतदान केंद्र लिख लें।",
        "नाम न दिखे तो नाम की स्पेलिंग बदलकर दोबारा खोजें। फिर भी न मिले तो नीचे दिए तरीके से Form 6 भरें।",
        "पूरी सूची (PDF) और अपने BLO की जानकारी मुख्य निर्वाचन अधिकारी (CEO) दिल्ली की वेबसाइट <a href=\"https://ceodelhi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceodelhi.gov.in</a> पर मिलती है।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) और कागज़",
      list: [
        "SIR में BLO हर घर में <strong>दो प्रति में गणना फॉर्म (Enumeration Form)</strong> देते हैं। इसमें नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और फोटो भरनी होती है।",
        "पिछली गहन पुनरीक्षण वाली पुरानी सूची में अपना या माता-पिता का नाम हो तो उसका विवरण भरना होता है। इससे मिलान आसान होता है।",
        "जिनका मिलान नहीं हो पाता, उन्हें ERO नोटिस देकर पहचान, जन्म या निवास के कागज़ मांगता है। नोटिस मिले तो तय तारीख तक कागज़ BLO या ERO को दें।",
        "भरा फॉर्म या कागज़ BLO को देने पर <strong>पावती</strong> ज़रूर लें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "सूची में नाम नहीं है तो क्या करें",
      steps: [
        "<strong>Form 6</strong> भरें: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर, या BLO के ज़रिए। SIR के दौरान Form 6 के साथ एक <strong>घोषणा पत्र (Declaration)</strong> भी लगता है।",
        "दिल्ली में दावे-आपत्ति (Form 6, 7, 8) <strong>30 अक्टूबर 2026</strong> तक दिए जा सकते हैं। इसके बाद भरा Form 6 भी मान्य है, पर नाम SIR की अंतिम सूची के बाद वाली अपडेट में जुड़ेगा।",
        "किसी गलत नाम (मृत, शिफ्ट, डुप्लीकेट) पर आपत्ति के लिए <strong>Form 7</strong>, और अपनी जानकारी में सुधार के लिए <strong>Form 8</strong> भरें।",
        "मदद के लिए अपने BLO से मिलें या <strong>1950</strong> पर कॉल करें।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला मजिस्ट्रेट/ज़िला निर्वाचन अधिकारी और फिर CEO के पास अपील कर सकते हैं।",
      ],
      callout: {
        kind: "info",
        html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना</strong>।",
      },
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "गणना फॉर्म और Form 6/7/8 <strong>मुफ्त</strong> हैं। कोई पैसे मांगे तो न दें और 1950 पर शिकायत करें।",
        "SIR में गणना फॉर्म के लिए BLO खुद घर आते हैं। BLO से उनकी पहचान पूछ सकते हैं।",
        "OTP किसी को न बताएं, न फोन पर न घर आए किसी व्यक्ति को।",
        "यह SarkariSewa India की निजी जानकारी वाली वेबसाइट है, सरकारी नहीं। आधिकारिक सूची और तारीखें CEO वेबसाइट पर ही देखें।",
      ],
    },
  ],
  official: [
    { href: "https://ceodelhi.gov.in/", title: "मुख्य निर्वाचन अधिकारी, दिल्ली", note: "ड्राफ्ट सूची, Know Your BLO" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)" },
  ],
  faq: [
    {
      q: "दिल्ली SIR में दावे-आपत्ति की आखिरी तारीख क्या है?",
      a: "30 अक्टूबर 2026। चुनाव आयोग ने इसे 30 सितंबर से बढ़ाया है। दावों का निपटारा 30 नवंबर 2026 तक होगा।",
    },
    {
      q: "दिल्ली की SIR अंतिम सूची कब आएगी?",
      a: "आकाशवाणी (28 सितंबर 2026) के अनुसार अंतिम सूची 4 दिसंबर 2026 को छपनी है। तारीख पहले कई बार बदली है, इसलिए ceodelhi.gov.in पर देखें।",
    },
    { q: "ड्राफ्ट सूची में नाम नहीं है, क्या करूं?", a: "30 अक्टूबर 2026 से पहले Form 6 और घोषणा पत्र भरें: voters.eci.gov.in, ECINET ऐप पर या BLO के ज़रिए।" },
    { q: "क्या SIR या नाम जुड़वाने की कोई फीस है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/delhi-voter-id-card.html", emoji: "🗳️", title: "दिल्ली वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/delhi-voter-id-card.html", label: "🗳️ दिल्ली वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
