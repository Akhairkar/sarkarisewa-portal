import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - ECI/PN/086/2026 = PIB PRID 2260955 (14 May 2026), Annexure-I: Arunachal QD
//   01.07.2026, H2H 15.06-14.07.2026, draft 21.07.2026, claims 21.07-20.08.2026,
//   final 22.09.2026 (same as sibling arunachal-pradesh-voter-id-card.ts).
// - ceoarunachal.nic.in (home page, as cited in the voter-ID guide): "SIR Final
//   Roll 2026 (without photo)"; toll-free 03601950 / 18003453170.
// - uniindia.com, morungexpress.com (22 Sep 2026): final roll published with
//   6,96,026 electors vs 8,87,505 before SIR.
// - pib.gov.in PRID 2289473 (25 Jul 2026): four deletion grounds; appeals.
// Left out: exact enumeration-form document list (described generally).
export const arunachalPradeshSirVoterList: DocGuide = {
  state: { slug: "arunachal-pradesh", hi: "अरुणाचल प्रदेश" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "अरुणाचल प्रदेश", href: "/states/arunachal-pradesh.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Arunachal Pradesh SIR Voter List 2026",
  description: "अरुणाचल प्रदेश SIR वोटर लिस्ट 2026: अंतिम सूची 22 सितंबर 2026 को छपी। नाम कैसे देखें, नाम कटा हो तो Form 6, BLO और 1950 हेल्पलाइन की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "अरुणाचल प्रदेश SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें",
  lead: "अरुणाचल प्रदेश में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) तीसरे चरण में पूरा हो चुका है और <strong>अंतिम मतदाता सूची 22 सितंबर 2026</strong> को छपी है। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO अरुणाचल की वेबसाइट पर देखें। नाम नहीं है तो Form 6 भरकर नाम जुड़वाएं।",
  facts: [
    ["चरण", "तीसरा चरण (पूरा)"],
    ["योग्यता तिथि", "1 जुलाई 2026"],
    ["अंतिम सूची", "22 सितंबर 2026"],
    ["हेल्पलाइन", "1950 / 03601950"],
  ],
  notice: "<strong>SIR पूरा:</strong> अरुणाचल प्रदेश की SIR अंतिम मतदाता सूची 22 सितंबर 2026 को प्रकाशित हुई। सबसे पहले इस सूची में अपना और परिवार का नाम जांचें।",
  sections: [
    {
      id: "sthiti",
      title: "अरुणाचल प्रदेश में SIR की तारीखें",
      intro: "<a href=\"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955\" target=\"_blank\" rel=\"noopener nofollow\">ECI आदेश, 14 मई 2026</a> (SIR तीसरा चरण) के अनुसार अरुणाचल प्रदेश का कार्यक्रम:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "15 जून से 14 जुलाई 2026"],
          ["ड्राफ्ट मतदाता सूची", "21 जुलाई 2026"],
          ["दावे-आपत्ति", "21 जुलाई से 20 अगस्त 2026"],
          ["अंतिम मतदाता सूची", "22 सितंबर 2026 (छप चुकी)"],
        ],
      },
      callout: {
        kind: "info",
        html: "खबरों (UNI, 22 सितंबर 2026) के अनुसार अंतिम सूची में करीब 6.96 लाख मतदाता हैं, जबकि SIR से पहले यह संख्या करीब 8.87 लाख थी। इसलिए अपना और परिवार का नाम ज़रूर जांचें। CEO की वेबसाइट पर \"SIR Final Roll 2026\" लिंक से सूची (PDF) भी मिलती है।",
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
        "पूरी सूची (PDF) और अपने BLO की जानकारी मुख्य निर्वाचन अधिकारी (CEO) अरुणाचल प्रदेश की वेबसाइट <a href=\"https://ceoarunachal.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoarunachal.nic.in</a> पर मिलती है।",
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
    { href: "https://ceoarunachal.nic.in/", title: "मुख्य निर्वाचन अधिकारी, अरुणाचल प्रदेश", note: "SIR Final Roll 2026, BLO जानकारी" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)" },
  ],
  faq: [
    {
      q: "अरुणाचल प्रदेश की SIR अंतिम सूची कब आई?",
      a: "22 सितंबर 2026 को। ड्राफ्ट सूची 21 जुलाई 2026 को आई थी और दावे-आपत्ति 21 जुलाई से 20 अगस्त 2026 तक लिए गए।",
    },
    {
      q: "SIR के बाद मेरा नाम कट गया, अब क्या करूं?",
      a: "Form 6 भरें (voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए)। ERO के फैसले से असहमत हैं तो पहले ज़िला निर्वाचन अधिकारी (DEO) और फिर CEO के पास अपील हो सकती है।",
    },
    { q: "अरुणाचल CEO का हेल्पलाइन नंबर क्या है?", a: "वोटर हेल्पलाइन 1950 है; CEO अरुणाचल की वेबसाइट पर टोल-फ्री 03601950 और 18003453170 भी दिए गए हैं।" },
    { q: "क्या SIR या नाम जुड़वाने की कोई फीस है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/arunachal-pradesh-voter-id-card.html", emoji: "🗳️", title: "अरुणाचल प्रदेश वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/arunachal-pradesh-voter-id-card.html", label: "🗳️ अरुणाचल प्रदेश वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
