import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; CEO/ECI sites not reachable from the sandbox):
// - pib.gov.in PRID 2260955 (14 May 2026, ECI/PN/086/2026): Punjab in SIR Phase
//   III (qualifying date as in punjab-voter-id-card.ts: 01.10.2026).
// - newsonair.gov.in 25 Jun 2026: SIR enumeration in Punjab starts; 15 Jul 2026
//   "ECI extends schedule for SIR in Punjab by 11 days": H2H till 03.08.2026,
//   final roll 12.10.2026 (instead of 01.10.2026).
// - PTI via ThePrint / Sabrang / ETV Bharat (13 Aug 2026): draft roll
//   13.08.2026 (1,93,94,435 electors); claims and objections 13.08-12.09.2026;
//   disposal till 08.10.2026.
// - newsonair.gov.in, PTI via ThePrint/Outlook/OneIndia (12 Oct 2026): final
//   rolls for all 117 ACs published 12.10.2026: 2,01,00,727 electors (pre-SIR
//   2,14,61,043); 7,97,263 new electors; check on ceopunjab.gov.in,
//   voters.eci.gov.in, DEO/ERO/BLO offices.
// - pib.gov.in PRID 2289473 (25 Jul 2026): deletion grounds; appeal DM then CEO.
//   ECI letter 01.10.2026 (via our voter-ID guides): post-SIR special drive.
// Left out: district-wise figures, dates of the post-SIR special drive.
export const punjabSirVoterList: DocGuide = {
  state: { slug: "punjab", hi: "पंजाब" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पंजाब", href: "/states/punjab.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Punjab SIR Voter List 2026: Name Check, Eligibility & Documents",
  description: "पंजाब SIR वोटर लिस्ट 2026: अंतिम सूची 12 अक्टूबर 2026 को छपी। नाम कैसे देखें, नाम कटा हो तो फॉर्म 6, BLO और हेल्पलाइन 1950 की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "पंजाब SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें और नाम न हो तो क्या करें",
  lead: "पंजाब में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) <strong>पूरा हो चुका है</strong>। सभी 117 विधानसभा क्षेत्रों की <strong>अंतिम मतदाता सूची 12 अक्टूबर 2026</strong> को छपी, जिसमें 2,01,00,727 मतदाता हैं। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO पंजाब की वेबसाइट पर देखें; नाम नहीं है तो फॉर्म 6 भरकर दोबारा जुड़वाएं।",
  facts: [
    ["SIR चरण", "तीसरा (2026)"],
    ["अंतिम सूची", "12 अक्टूबर 2026 को छपी"],
    ["नाम न हो तो", "फॉर्म 6 (कोई फीस नहीं)"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "sthiti",
      title: "पंजाब में SIR की स्थिति और तारीखें",
      intro: "चुनाव आयोग ने 14 मई 2026 को पंजाब को SIR के तीसरे चरण में रखा। घर-घर सर्वे 25 जून 2026 से शुरू हुआ और जुलाई में आयोग ने कार्यक्रम 11 दिन आगे बढ़ाया। अब पूरी प्रक्रिया खत्म हो चुकी है।",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "25 जून से 3 अगस्त 2026 (बढ़ाई गई तारीख)"],
          ["ड्राफ्ट सूची", "13 अगस्त 2026 (1,93,94,435 मतदाता)"],
          ["दावे-आपत्ति", "13 अगस्त से 12 सितंबर 2026"],
          ["सुनवाई और निपटारा", "8 अक्टूबर 2026 तक"],
          ["<strong>अंतिम सूची</strong>", "<strong>12 अक्टूबर 2026</strong> (2,01,00,727 मतदाता)"],
        ],
      },
      callout: {
        kind: "info",
        html: "समाचार रिपोर्टों के अनुसार SIR से पहले पंजाब में 2,14,61,043 मतदाता थे; अंतिम सूची में करीब 13.6 लाख कम हैं, जबकि 7,97,263 नए मतदाता जुड़े। अंतिम सूची CEO पंजाब की वेबसाइट, voters.eci.gov.in और DEO/ERO/BLO कार्यालयों में देखी जा सकती है।",
      },
    },
    {
      id: "naam-dekhen",
      title: "SIR वाली वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "पूरी सूची (विधानसभा क्षेत्र और भाग के हिसाब से PDF) राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट <a href=\"https://www.ceopunjab.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceopunjab.gov.in</a> पर मिलती है। छपी सूची BLO, ERO कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) क्या था",
      intro: "पंजाब में SIR के दौरान BLO हर घर गए और हर वोटर को दो प्रति में <strong>गणना फॉर्म (EF)</strong> दिया। अब यह चरण खत्म हो चुका है, इसलिए अब नया गणना फॉर्म नहीं भरा जाता। जिनका नाम छूट गया, उनके लिए अब <strong>फॉर्म 6</strong> का रास्ता है (नीचे देखें)।",
      list: [
        "गणना फॉर्म में नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम, ताज़ा फोटो और पिछली गहन पुनरीक्षण वाली पुरानी सूची में अपना या माता-पिता का विवरण भरना था।",
        "जिनका मिलान पुरानी सूची से नहीं हुआ, उन्हें ERO ने नोटिस भेजकर पहचान/जन्म/निवास के कागज़ मांगे। नोटिस मिला हो और सुनवाई बाकी हो तो तय तारीख पर कागज़ के साथ ज़रूर जाएं।",
      ],
    },
    {
      id: "naam-nahi",
      title: "अंतिम सूची में नाम नहीं है तो क्या करें",
      intro: "SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना</strong>। अगर आपका नाम गलती से कट गया है, तो घबराएं नहीं: नाम दोबारा जुड़ सकता है।",
      steps: [
        "पहले <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर और नाम, दोनों तरह से खोजें। कई बार नाम मौजूद होता है पर वर्तनी अलग होती है।",
        "नाम नहीं है तो <strong>फॉर्म 6</strong> भरें: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर ऑनलाइन, या BLO/ERO कार्यालय में। फोटो, जन्मतिथि और पते का एक-एक प्रमाण लगेगा। SIR के दावे-आपत्ति के समय वाला अलग घोषणा पत्र अब नहीं लगता, क्योंकि यह अवधि खत्म हो चुकी है; फॉर्म 6 पूरे साल भरा जा सकता है।",
        "नाम है पर नाम, उम्र, फोटो या पता गलत है तो <strong>फॉर्म 8</strong> भरें। किसी मृत या बाहर चले गए व्यक्ति का नाम हटवाना हो तो <strong>फॉर्म 7</strong>।",
        "फॉर्म का <strong>रेफरेंस नंबर</strong> संभाल कर रखें और पोर्टल पर स्टेटस देखते रहें। BLO जांच के लिए घर आ सकते हैं।",
        "ERO के फैसले (नाम हटाने या दावा खारिज करने) से असहमत हों तो पहली अपील ज़िला मजिस्ट्रेट (DM) / ज़िला निर्वाचन अधिकारी के पास और दूसरी अपील राज्य के मुख्य निर्वाचन अधिकारी (CEO) के पास होती है।",
      ],
      callout: {
        kind: "ok",
        html: "SIR पूरा होने के बाद चुनाव आयोग ने 1 अक्टूबर 2026 के पत्र से राज्यों को <strong>छूटे हुए और नए (युवा) वोटरों के लिए खास अभियान</strong> चलाने को कहा है: BLO पुरानी और नई सूची मिलाकर छूटे नामों की पहचान करेंगे, घर जाकर फॉर्म 6 भरवाएंगे और बूथ पर कैंप लगेंगे। अपने BLO से इस अभियान की तारीख पूछ लें।",
      },
    },
    {
      id: "savdhan",
      title: "सावधानियां",
      list: [
        "SIR में गणना फॉर्म, फॉर्म 6, 7 या 8 भरने की <strong>कोई फीस नहीं</strong> है। पैसे मांगने वाले बिचौलियों से बचें।",
        "BLO खुद आपके घर आते हैं। किसी अनजान व्यक्ति को कागज़ या फॉर्म देने से पहले उसकी पहचान पूछें; शक हो तो 1950 पर पूछें।",
        "मोबाइल पर आया <strong>OTP किसी को न बताएं</strong>, फोन पर भी नहीं। \"नाम कट जाएगा\" जैसे कॉल या मैसेज वाले लिंक न खोलें।",
        "फॉर्म में गलत जानकारी देना जनप्रतिनिधित्व अधिनियम 1950 की धारा 31 के तहत अपराध है।",
        "यह SarkariSewa India की निजी जानकारी वाली वेबसाइट है, सरकारी वेबसाइट नहीं। आवेदन सिर्फ चुनाव आयोग के पोर्टल या BLO/ERO के ज़रिए करें।",
      ],
    },
  ],
  official: [
    { href: "https://electoralsearch.eci.gov.in/", title: "मतदाता सूची में नाम खोजें (ECI)" },
    {
      href: "https://voters.eci.gov.in/",
      title: "Voters' Service Portal (ECI)",
      note: "फॉर्म 6/7/8, BLO जानकारी, स्टेटस",
    },
    {
      href: "https://www.ceopunjab.gov.in/",
      title: "मुख्य निर्वाचन अधिकारी, पंजाब",
      note: "अंतिम मतदाता सूची, Know Your BLO",
    },
    {
      href: "https://newsonair.gov.in/punjab-publishes-final-electoral-rolls-for-all-117-assembly-constituencies-after-sir/",
      title: "पंजाब की अंतिम मतदाता सूची प्रकाशित (आकाशवाणी समाचार)",
    },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "पंजाब में SIR की अंतिम वोटर लिस्ट कब आई?",
      a: "12 अक्टूबर 2026 को, सभी 117 विधानसभा क्षेत्रों के लिए। पहले यह 1 अक्टूबर को आनी थी, पर आयोग ने कार्यक्रम 11 दिन बढ़ा दिया था।",
    },
    {
      q: "पंजाब की SIR सूची में अपना नाम कैसे देखें?",
      a: "electoralsearch.eci.gov.in पर EPIC नंबर या नाम-विवरण से खोजें। पूरी सूची ceopunjab.gov.in पर और BLO/ERO कार्यालय में भी देखी जा सकती है।",
    },
    {
      q: "अंतिम सूची में नाम नहीं है, अब क्या करूं?",
      a: "फॉर्म 6 भरें: voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए। फॉर्म 6 पूरे साल भरा जा सकता है और इसकी कोई फीस नहीं है।",
    },
    {
      q: "विदेश में रहता हूं, मेरा नाम कैसे जुड़ेगा?",
      a: "विदेश में रहने वाले भारतीय नागरिक (जिनके पास दूसरे देश की नागरिकता नहीं है) फॉर्म 6A से voters.eci.gov.in पर आवेदन कर सकते हैं।",
    },
    {
      q: "नाम कटने के फैसले से असहमत हूं, कहां अपील करूं?",
      a: "पहली अपील ज़िला मजिस्ट्रेट (DM) / ज़िला निर्वाचन अधिकारी के पास और दूसरी अपील मुख्य निर्वाचन अधिकारी, पंजाब के पास। मदद के लिए 1950 पर कॉल करें।",
    },
  ],
  related: [
    {
      href: "/states/punjab-voter-id-card.html",
      emoji: "🗳️",
      title: "पंजाब वोटर आईडी कार्ड",
      text: "फॉर्म 6, सुधार, e-EPIC",
    },
    {
      href: "/service/special-intensive-revision-sir.html",
      emoji: "🔎",
      title: "SIR क्या है",
      text: "चरण और राज्यवार स्थिति",
    },
    {
      href: "/service/e-voter-epic-download.html",
      emoji: "📲",
      title: "e-EPIC डाउनलोड",
      text: "डिजिटल वोटर कार्ड",
    },
    {
      href: "/service/voter-id-card.html",
      emoji: "📋",
      title: "वोटर आईडी: पूरी जानकारी",
      text: "सभी राज्य",
    },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/punjab-voter-id-card.html", label: "🗳️ पंजाब वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
