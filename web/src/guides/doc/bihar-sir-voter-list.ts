import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - pib.gov.in PRID 2289473 (25 Jul 2026): SIR Phase I in Bihar before the 2025
//   Assembly election; four deletion grounds; appeal DM -> CEO.
// - ECI press notes (copies on ica.tripura.gov.in, governancenow.com): enumeration
//   24.06-25.07.2025, draft 01.08.2025 (7.24 crore electors), claims and
//   objections 01.08-01.09.2025.
// - etvbharat.com, morungexpress.com (30 Sep 2025): final roll 30.09.2025,
//   about 7.42 crore electors.
// - ceoelection.bihar.gov.in (as cited in sibling bihar-voter-id-card.ts): SIR
//   Final eRoll w.r.t. 01.07.2025, Search Electoral Roll, Know Your BLO.
// Left out: exact SIR document list (described generally).
export const biharSirVoterList: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "बिहार", href: "/states/bihar.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Bihar SIR Voter List 2026: Name Check, Eligibility & Documents",
  description: "बिहार SIR वोटर लिस्ट: पहला चरण 2025 में पूरा, अंतिम सूची 30 सितंबर 2025 को छपी। नाम कैसे देखें, नाम कटा हो तो Form 6, BLO और 1950 हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "बिहार SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें, नाम कटा हो तो क्या करें",
  lead: "मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) सबसे पहले <strong>बिहार में 2025</strong> में हुआ और <strong>अंतिम मतदाता सूची 30 सितंबर 2025</strong> को छपी। अब बिहार में SIR नहीं चल रहा। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO बिहार की वेबसाइट पर देखें; नाम न हो तो Form 6 भरकर नाम जुड़वाएं।",
  facts: [
    ["चरण", "पहला चरण (2025, पूरा)"],
    ["योग्यता तिथि", "1 जुलाई 2025"],
    ["अंतिम सूची", "30 सितंबर 2025"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>SIR पूरा:</strong> बिहार में SIR 2025 के विधानसभा चुनाव से पहले पूरा हुआ। अब नाम जोड़ना, सुधार और नाम हटाना सामान्य तरीके से Form 6, 8 और 7 से होता है।",
  sections: [
    {
      id: "sthiti",
      title: "बिहार में SIR की तारीखें (2025)",
      intro: "<a href=\"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289473\" target=\"_blank\" rel=\"noopener nofollow\">PIB, 25 जुलाई 2026</a> के अनुसार SIR का पहला चरण बिहार में 2025 के विधानसभा चुनाव से पहले हुआ। चुनाव आयोग के प्रेस नोट और खबरों के अनुसार तारीखें:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "24 जून से 25 जुलाई 2025"],
          ["ड्राफ्ट मतदाता सूची", "1 अगस्त 2025"],
          ["दावे-आपत्ति", "1 अगस्त से 1 सितंबर 2025"],
          ["अंतिम मतदाता सूची", "30 सितंबर 2025 (करीब 7.42 करोड़ मतदाता)"],
        ],
      },
      callout: {
        kind: "info",
        html: "SIR की अंतिम सूची (योग्यता तिथि 01.07.2025) CEO बिहार की वेबसाइट पर है। उसके बाद नए नाम हर तिमाही की सामान्य अपडेट में जुड़ते हैं, इसलिए ताज़ा सूची में भी नाम देखें।",
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
        "पूरी सूची (PDF) और अपने BLO की जानकारी मुख्य निर्वाचन अधिकारी (CEO) बिहार की वेबसाइट <a href=\"https://ceoelection.bihar.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoelection.bihar.gov.in</a> पर मिलती है।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) और कागज़",
      list: [
        "SIR के समय BLO हर घर में <strong>दो प्रति में गणना फॉर्म (Enumeration Form)</strong> लेकर आए थे। इसमें नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और फोटो भरी गई।",
        "पिछली गहन पुनरीक्षण वाली पुरानी सूची में अपना या माता-पिता का नाम हो तो उसका विवरण भरना था। जिनका मिलान नहीं हुआ, उन्हें ERO ने नोटिस देकर पहचान, जन्म या निवास के कागज़ मांगे।",
        "जिनका गणना फॉर्म जमा नहीं हुआ, उनका नाम ड्राफ्ट सूची में नहीं आया। ऐसे लोग अब Form 6 से नाम जुड़वा सकते हैं।",
        "SIR अब पूरा हो चुका है, इसलिए गणना फॉर्म अब नहीं भरा जाता। नाम जोड़ने, सुधार और हटाने का काम सामान्य फॉर्म (6, 8, 7) से होता है।",
      ],
    },
    {
      id: "naam-nahi",
      title: "सूची में नाम नहीं है तो क्या करें",
      steps: [
        "<strong>Form 6</strong> भरें: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर, या अपने BLO/ERO कार्यालय के ज़रिए।",
        "मतदाता सूची साल में चार बार (1 जनवरी, 1 अप्रैल, 1 जुलाई, 1 अक्टूबर की योग्यता तिथि से) अपडेट होती है। जांच के बाद नाम अगले अपडेट में जुड़ता है।",
        "किसी गलत नाम (मृत, शिफ्ट, डुप्लीकेट) पर आपत्ति के लिए <strong>Form 7</strong>, और अपनी जानकारी में सुधार के लिए <strong>Form 8</strong> भरें।",
        "मदद के लिए अपने BLO से मिलें या <strong>1950</strong> पर कॉल करें।",
        "SIR में कटे नाम पर ERO के फैसले से असहमत हों तो पहले ज़िला मजिस्ट्रेट/ज़िला निर्वाचन अधिकारी और फिर CEO के पास अपील का रास्ता है।",
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
    { href: "https://ceoelection.bihar.gov.in/", title: "मुख्य निर्वाचन अधिकारी, बिहार", note: "SIR Final eRoll, Know Your BLO" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289473", title: "SIR के चरण और नाम हटाने के नियम (PIB, 25 जुलाई 2026)" },
  ],
  faq: [
    { q: "बिहार की SIR अंतिम सूची कब आई?", a: "30 सितंबर 2025 को। ड्राफ्ट सूची 1 अगस्त 2025 को आई थी और दावे-आपत्ति 1 सितंबर 2025 तक लिए गए।" },
    { q: "क्या बिहार में अभी SIR चल रहा है?", a: "नहीं। बिहार में SIR 2025 में पूरा हो चुका है। अब नाम जुड़वाने के लिए सामान्य Form 6 भरें।" },
    {
      q: "SIR में मेरा नाम कट गया, अब क्या करूं?",
      a: "Form 6 भरें (voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए)। ERO के फैसले से असहमत हैं तो पहले ज़िला मजिस्ट्रेट और फिर CEO के पास अपील हो सकती है।",
    },
    { q: "क्या SIR या नाम जुड़वाने की कोई फीस है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/bihar-voter-id-card.html", emoji: "🗳️", title: "बिहार वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/bihar-voter-id-card.html", label: "🗳️ बिहार वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
