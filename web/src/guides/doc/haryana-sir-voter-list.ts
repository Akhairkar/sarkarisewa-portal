import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - pib.gov.in PRID 2260955 (14 May 2026): Haryana in SIR Phase III, QD 01.07.2026.
// - newsonair.gov.in (14 Jul 2026): H2H extended to 24 Jul; draft 31 Jul 2026.
// - theprint.in, etvbharat.com (31 Jul-1 Aug 2026): draft published; 1,72,72,627
//   of about 2.06 crore electors submitted forms.
// - uniindia.com (7 Oct 2026), newsbytesapp.com: claims extended from 30 Aug to
//   30 Sep; notices/disposal to 28 Oct; final roll 6 Nov 2026.
// - ceoharyana.gov.in (as cited in sibling haryana-voter-id-card.ts): Know Your
//   BLO, 2002 IR searchable PDFs.
// Note: sibling haryana-voter-id-card.ts still says final roll 3 Oct 2026
// (superseded). The order moving it to 6 Nov was not seen directly; only news.
// Left out: exact SIR document list (described generally).
export const haryanaSirVoterList: DocGuide = {
  state: { slug: "haryana", hi: "हरियाणा" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "हरियाणा", href: "/states/haryana.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Haryana SIR Voter List 2026",
  description: "हरियाणा SIR वोटर लिस्ट 2026: ड्राफ्ट सूची 31 जुलाई को आई, अंतिम सूची 6 नवंबर 2026 को छपनी है। नाम कैसे देखें, नोटिस मिले तो क्या करें, Form 6, BLO, 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "हरियाणा SIR वोटर लिस्ट 2026: नाम जांच, नोटिस और अंतिम सूची की तारीख",
  lead: "हरियाणा में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) <strong>तीसरे चरण में अभी चल रहा है</strong>। ड्राफ्ट सूची 31 जुलाई 2026 को आई, दावे-आपत्ति 30 सितंबर तक लिए गए और ताज़ा खबरों के अनुसार <strong>अंतिम मतदाता सूची 6 नवंबर 2026</strong> को छपनी है। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO हरियाणा की वेबसाइट पर देखें।",
  facts: [
    ["चरण", "तीसरा चरण (जारी)"],
    ["ड्राफ्ट सूची", "31 जुलाई 2026"],
    ["सुनवाई/निपटारा", "28 अक्टूबर 2026 तक"],
    ["अंतिम सूची", "6 नवंबर 2026 (तय)"],
  ],
  notice: "<strong>तारीख बदली:</strong> पहले अंतिम सूची 3 अक्टूबर 2026 को छपनी थी। ताज़ा खबरों (UNI, 7 अक्टूबर 2026) के अनुसार नोटिस और दावों का निपटारा 28 अक्टूबर तक चलेगा और अंतिम सूची <strong>6 नवंबर 2026</strong> को छपेगी। नोटिस मिला है तो सुनवाई की तारीख पर कागज़ ज़रूर दें। ताज़ा तारीख CEO हरियाणा की वेबसाइट पर देखें।",
  sections: [
    {
      id: "sthiti",
      title: "हरियाणा में SIR की तारीखें",
      intro: "<a href=\"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955\" target=\"_blank\" rel=\"noopener nofollow\">ECI आदेश, 14 मई 2026</a> के अनुसार हरियाणा SIR के तीसरे चरण में है और योग्यता तिथि <strong>1 जुलाई 2026</strong> है। आयोग ने कार्यक्रम कई बार बढ़ाया। आकाशवाणी और UNI की खबरों में छपी ताज़ा तारीखें:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "24 जुलाई 2026 तक (बढ़ाकर)"],
          ["ड्राफ्ट मतदाता सूची", "31 जुलाई 2026"],
          ["दावे-आपत्ति", "31 जुलाई से 30 सितंबर 2026 (30 अगस्त से बढ़ाकर)"],
          ["नोटिस, सुनवाई और निपटारा", "28 अक्टूबर 2026 तक"],
          ["अंतिम मतदाता सूची", "6 नवंबर 2026 (तय)"],
        ],
      },
      callout: {
        kind: "info",
        html: "खबरों के अनुसार हरियाणा के करीब 2.06 करोड़ में से 1.72 करोड़ मतदाताओं ने गणना फॉर्म जमा किए। CEO हरियाणा की वेबसाइट पर 2002 की गहन पुनरीक्षण वाली पुरानी सूची भी खोजी जा सकती है, जिससे अपना या माता-पिता का नाम मिलाया जाता है।",
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
        "पूरी सूची (PDF) और अपने BLO की जानकारी मुख्य निर्वाचन अधिकारी (CEO) हरियाणा की वेबसाइट <a href=\"https://ceoharyana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoharyana.gov.in</a> पर मिलती है।",
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
        "हरियाणा में दावे-आपत्ति की अवधि 30 सितंबर 2026 को खत्म हो चुकी है। अब भरा Form 6 भी मान्य है, पर नाम SIR की अंतिम सूची के बाद वाली अपडेट में जुड़ेगा।",
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
    { href: "https://ceoharyana.gov.in/", title: "मुख्य निर्वाचन अधिकारी, हरियाणा", note: "ड्राफ्ट सूची, Know Your BLO, 2002 की सूची" },
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)" },
  ],
  faq: [
    {
      q: "हरियाणा की SIR अंतिम सूची कब आएगी?",
      a: "ताज़ा खबरों (UNI, 7 अक्टूबर 2026) के अनुसार 6 नवंबर 2026 को। पहले यह तारीख 3 अक्टूबर थी। ceoharyana.gov.in पर ताज़ा तारीख देखें।",
    },
    {
      q: "मुझे ERO का नोटिस मिला है, क्या करूं?",
      a: "नोटिस में दी गई तारीख पर पहचान, जन्म या निवास के कागज़ BLO या ERO को दें। नोटिस और सुनवाई का काम 28 अक्टूबर 2026 तक चलना है।",
    },
    {
      q: "ड्राफ्ट सूची में नाम नहीं है, क्या अब भी नाम जुड़ सकता है?",
      a: "हां। Form 6 भरें (voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए)। दावे-आपत्ति की अवधि बीत गई है, इसलिए नाम अंतिम सूची के बाद वाली अपडेट में जुड़ेगा।",
    },
    { q: "क्या SIR या नाम जुड़वाने की कोई फीस है?", a: "नहीं। गणना फॉर्म और Form 6/7/8 मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।" },
    { q: "शिकायत कहां करें?", a: "1950 हेल्पलाइन पर, voters.eci.gov.in की शिकायत सेवा में, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में।" },
  ],
  related: [
    { href: "/states/haryana-voter-id-card.html", emoji: "🗳️", title: "हरियाणा वोटर आईडी कार्ड", text: "Form 6, सुधार, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "🔎", title: "SIR क्या है", text: "सभी चरण और राज्य" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "पूरी जानकारी" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/haryana-voter-id-card.html", label: "🗳️ हरियाणा वोटर आईडी" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
