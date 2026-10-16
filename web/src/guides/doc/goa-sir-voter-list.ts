import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - pib.gov.in PRID 2289473 (25 Jul 2026): Goa in SIR Phase II; deletion grounds.
// - ceogoa.nic.in press note on final publication (PDF/SIR2026, 21 Feb 2026):
//   QD 01.01.2026, draft 16.12.2025 (10,84,992), final 21.02.2026 (10,57,566).
// - thegoan.net: SIR began October 2025 (11,85,034 electors before SIR).
// - ceogoa.nic.in (as cited in sibling goa-voter-id-card.ts): supplements
//   01-Apr/01-Jul/01-Oct-2026; special drive after SIR; ECI/PN/120/2026.
// Left out: exact SIR document list (described generally).
export const goaSirVoterList: DocGuide = {
  state: { slug: "goa", hi: "गोवा" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "गोवा", href: "/states/goa.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Goa SIR Voter List 2026: Name Check, Eligibility & Documents",
  description: "गोवा SIR वोटर लिस्ट 2026: अंतिम सूची 21 फरवरी 2026 को छपी (10.57 लाख मतदाता)। नाम कैसे देखें, नाम कटा हो तो Form 6, BLO और 1950 हेल्पलाइन।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "गोवा SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें",
  lead: "गोवा में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) <strong>दूसरे चरण</strong> में पूरा हुआ और <strong>अंतिम मतदाता सूची 21 फरवरी 2026</strong> को छपी। अब गोवा में SIR नहीं चल रहा। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO गोवा की वेबसाइट पर देखें; नाम न हो तो Form 6 भरें।",
  facts: [
    ["चरण", "दूसरा चरण (पूरा)"],
    ["योग्यता तिथि", "1 जनवरी 2026"],
    ["अंतिम सूची", "21 फरवरी 2026"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>SIR पूरा:</strong> गोवा की SIR अंतिम सूची 21 फरवरी 2026 को छपी। उसके बाद जुड़े नए नाम 1 अप्रैल, 1 जुलाई और 1 अक्टूबर 2026 के <strong>सप्लीमेंट</strong> में हैं, जो CEO गोवा की वेबसाइट पर हैं।",
  sections: [
    {
      id: "sthiti",
      title: "गोवा में SIR की तारीखें",
      intro: "CEO गोवा के प्रेस नोट (21 फरवरी 2026) के अनुसार:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["SIR शुरू", "अक्टूबर 2025 (दूसरा चरण)"],
          ["ड्राफ्ट मतदाता सूची", "16 दिसंबर 2025 (करीब 10.85 लाख मतदाता)"],
          ["अंतिम मतदाता सूची", "21 फरवरी 2026 (10,57,566 मतदाता)"],
        ],
      },
      callout: {
        kind: "info",
        html: "SIR के बाद चुनाव आयोग ने छूटे हुए और नए (युवा) वोटरों के लिए खास अभियान चलाने को कहा है। CEO गोवा ने BLO को छूटे मतदाताओं के घर जाने का निर्देश दिया है। नाम कट गया है तो Form 6 से दोबारा जुड़वाया जा सकता है।",
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
        "पूरी सूची (PDF) और अपने BLO की जानकारी मुख्य निर्वाचन अधिकारी (CEO) गोवा की वेबसाइट <a href=\"https://ceogoa.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceogoa.nic.in</a> पर मिलती है।",
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
    { href: "https://ceogoa.nic.in/", title: "मुख्य निर्वाचन अधिकारी, गोवा", note: "SIR 2026 अंतिम सूची, सप्लीमेंट, BLO सूची" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289473", title: "SIR के चरण और नाम हटाने के नियम (PIB, 25 जुलाई 2026)" },
  ],
  faq: [
    { q: "गोवा की SIR अंतिम सूची कब आई?", a: "21 फरवरी 2026 को। ड्राफ्ट सूची 16 दिसंबर 2025 को आई थी।" },
    { q: "क्या गोवा में अभी SIR चल रहा है?", a: "नहीं। SIR पूरा हो चुका है। अब नाम जुड़वाने के लिए सामान्य Form 6 भरें; नए नाम तिमाही सप्लीमेंट में आते हैं।" },
    {
      q: "SIR में मेरा नाम कट गया, अब क्या करूं?",
      a: "Form 6 भरें (voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए)। ERO के फैसले से असहमत हैं तो पहले ज़िला निर्वाचन अधिकारी और फिर CEO के पास अपील हो सकती है।",
    },
    { q: "क्या SIR या नाम जुड़वाने की कोई फीस है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/goa-voter-id-card.html", emoji: "🗳️", title: "गोवा वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/goa-voter-id-card.html", label: "🗳️ गोवा वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
