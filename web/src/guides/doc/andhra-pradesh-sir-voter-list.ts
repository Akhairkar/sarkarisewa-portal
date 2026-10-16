import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - pib.gov.in PRID 2260955 (14 May 2026; ECI/PN/086/2026): SIR Phase III in
//   16 States + 3 UTs incl. Andhra Pradesh; qualifying date 01.07.2026.
// - newsonair.gov.in (14 Jul 2026): H2H extended to 24 Jul; draft 31 Jul;
//   claims & objections 31 Jul to 30 Aug 2026.
// - newsonair.gov.in and telanganatoday.com (30 Sep 2026): notice phase and
//   disposal of claims/objections to 10 Oct; final roll moved to 16 Oct 2026.
// - telanganatoday.com / newkerala.com (31 Jul 2026, quoting CEO AP): draft
//   roll 31 Jul 2026; 3.71 crore of 4.16 crore electors returned forms.
// - pib.gov.in PRID 2289473 (25 Jul 2026): four deletion grounds; appeal to
//   DM and then CEO.
// - ECI Press Note ECI/PN/120/2026 (26 Sep 2026): Form 6 declaration only
//   during SIR (as cited in the sibling voter-ID guides).
// - ceoandhra.nic.in: CEO site (roll search, BLO details).
// Not confirmed at time of writing: whether the final roll actually came out
// on 16 Oct 2026; exact SIR document list (described generally).
export const andhraPradeshSirVoterList: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "आंध्र प्रदेश", href: "/states/andhra-pradesh.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Andhra Pradesh SIR Voter List 2026",
  description: "आंध्र प्रदेश SIR वोटर लिस्ट 2026: तीसरे चरण की तारीखें, ड्राफ्ट और अंतिम सूची (16 अक्टूबर 2026) में नाम कैसे देखें, नाम छूटे तो Form 6, BLO और 1950 हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "आंध्र प्रदेश SIR वोटर लिस्ट 2026: अंतिम सूची, नाम जांच और नाम छूटे तो क्या करें",
  lead: "आंध्र प्रदेश मतदाता सूची के विशेष गहन पुनरीक्षण (SIR) के <strong>तीसरे चरण</strong> में है। ड्राफ्ट सूची 31 जुलाई 2026 को छपी थी और चुनाव आयोग के बढ़ाए कार्यक्रम के अनुसार <strong>अंतिम मतदाता सूची 16 अक्टूबर 2026</strong> को छपनी है। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO आंध्र प्रदेश की वेबसाइट पर देखें; नाम न हो तो Form 6 भरें।",
  facts: [
    ["चरण", "तीसरा चरण (14 मई 2026 को घोषित)"],
    ["योग्यता तिथि", "1 जुलाई 2026"],
    ["अंतिम सूची", "16 अक्टूबर 2026 (तय)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>ताज़ा स्थिति (16 अक्टूबर 2026):</strong> आकाशवाणी समाचार (30 सितंबर 2026) के अनुसार आयोग ने दावे-आपत्ति का निपटारा 10 अक्टूबर तक बढ़ाया और अंतिम सूची की तारीख 16 अक्टूबर 2026 तय की। तारीख पहले भी कई बार बदली है, इसलिए <a href=\"https://ceoandhra.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoandhra.nic.in</a> पर ज़रूर देखें कि अंतिम सूची छप गई है या नहीं।",
  sections: [
    {
      id: "sthiti",
      title: "आंध्र प्रदेश में SIR की तारीखें",
      intro: "<a href=\"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955\" target=\"_blank\" rel=\"noopener nofollow\">ECI आदेश, 14 मई 2026</a> के अनुसार आंध्र प्रदेश SIR के तीसरे चरण में है। बाद में आयोग ने कार्यक्रम कई बार बढ़ाया। आकाशवाणी और अखबारों में छपी ताज़ा तारीखें:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "24 जुलाई 2026 तक (बढ़ाकर)"],
          ["ड्राफ्ट मतदाता सूची", "31 जुलाई 2026"],
          ["दावे-आपत्ति", "31 जुलाई 2026 से (बाद में बढ़ाया गया)"],
          ["नोटिस, सुनवाई और दावों का निपटारा", "10 अक्टूबर 2026 तक"],
          ["अंतिम मतदाता सूची", "16 अक्टूबर 2026 (तय)"],
        ],
      },
      callout: { kind: "info", html: "CEO आंध्र प्रदेश के हवाले से छपी खबरों (31 जुलाई 2026) के अनुसार राज्य के करीब 4.16 करोड़ में से 3.71 करोड़ मतदाताओं ने गणना फॉर्म जमा किए। जिनका फॉर्म नहीं आया, उनके नाम ड्राफ्ट सूची में नहीं आए।" },
    },
    {
      id: "naam-jaanch",
      title: "SIR सूची में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC (वोटर कार्ड) नंबर डालकर खोजें, या नाम, उम्र, ज़िला और विधानसभा क्षेत्र भरकर, या मोबाइल नंबर से खोजें।",
        "नाम दिखे तो भाग संख्या, क्रम संख्या और मतदान केंद्र लिख लें।",
        "नाम न दिखे तो एक बार नाम की स्पेलिंग बदलकर खोजें। फिर भी न मिले तो नीचे दिए तरीके से Form 6 भरें।",
        "पूरी सूची (PDF) और BLO की जानकारी <a href=\"https://ceoandhra.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoandhra.nic.in</a> पर मिलती है।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) और कागज़",
      list: [
        "SIR में BLO हर घर में <strong>दो प्रति में गणना फॉर्म</strong> देते हैं। इसमें नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और फोटो भरनी होती है।",
        "पिछली गहन पुनरीक्षण वाली पुरानी सूची में अपना या माता-पिता का नाम हो तो उसका विवरण भरना होता है। इससे मिलान आसान होता है।",
        "जिनका मिलान नहीं हो पाता, उन्हें ERO नोटिस देकर पहचान, जन्म या निवास के कागज़ मांगता है। नोटिस मिले तो तय तारीख तक कागज़ दें।",
        "भरा फॉर्म BLO को देने पर दूसरी प्रति पर <strong>पावती</strong> ज़रूर लें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "सूची में नाम नहीं है तो क्या करें",
      steps: [
        "<strong>Form 6</strong> भरें: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर, या BLO के ज़रिए। SIR के दौरान Form 6 के साथ एक <strong>घोषणा पत्र</strong> भी लगता है।",
        "दावे-आपत्ति का समय खत्म होने के बाद भी Form 6 भरा जा सकता है; नाम अगले अपडेट में जुड़ता है (मतदाता सूची साल में चार बार अपडेट होती है)।",
        "किसी गलत नाम (मृत, शिफ्ट, डुप्लीकेट) पर आपत्ति के लिए <strong>Form 7</strong>, और अपनी जानकारी में सुधार के लिए <strong>Form 8</strong> भरें।",
        "मदद के लिए अपने BLO से मिलें या <strong>1950</strong> पर कॉल करें।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला मजिस्ट्रेट/ज़िला निर्वाचन अधिकारी और फिर CEO के पास अपील कर सकते हैं।",
      ],
      callout: { kind: "info", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना</strong>।" },
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "SIR का गणना फॉर्म और Form 6/7/8 <strong>मुफ्त</strong> हैं। कोई पैसे मांगे तो न दें और 1950 पर शिकायत करें।",
        "गणना फॉर्म के लिए BLO खुद घर आते हैं। BLO की पहचान पूछ सकते हैं।",
        "OTP किसी को न बताएं, न फोन पर न घर आए व्यक्ति को।",
        "यह SarkariSewa India की निजी जानकारी वाली वेबसाइट है, सरकारी नहीं। आधिकारिक सूची और तारीख CEO वेबसाइट पर ही देखें।",
      ],
    },
  ],
  official: [
    { href: "https://ceoandhra.nic.in/", title: "मुख्य निर्वाचन अधिकारी, आंध्र प्रदेश", note: "SIR सूची, BLO जानकारी" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)" },
  ],
  faq: [
    { q: "आंध्र प्रदेश की SIR अंतिम सूची कब आएगी?", a: "चुनाव आयोग के 30 सितंबर 2026 के बढ़ाए कार्यक्रम के अनुसार अंतिम मतदाता सूची 16 अक्टूबर 2026 को छपनी है। छपी है या नहीं, यह ceoandhra.nic.in पर देखें।" },
    { q: "ड्राफ्ट सूची कब छपी थी?", a: "31 जुलाई 2026 को।" },
    { q: "SIR सूची में नाम नहीं है, क्या मैं अब भी वोटर बन सकता हूं?", a: "हां। Form 6 भरें (voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए)। जांच के बाद नाम अगली अपडेट सूची में जुड़ जाएगा।" },
    { q: "क्या SIR के लिए कोई फीस लगती है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/andhra-pradesh-voter-id-card.html", emoji: "🗳️", title: "आंध्र प्रदेश वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/andhra-pradesh-voter-id-card.html", label: "🗳️ आंध्र प्रदेश वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
