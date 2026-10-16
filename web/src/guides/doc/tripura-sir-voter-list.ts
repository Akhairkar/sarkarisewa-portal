import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026):
// - ECI/PN/086/2026 (14 May 2026): Tripura in SIR Phase III; original schedule
//   (draft 21.10.2026, final 23.12.2026), now superseded.
// - newsonair.gov.in (10 Sep 2026) "ECI revises schedule of ongoing SIR of
//   electoral rolls in Tripura" (Additional CEO U.J. Mog); The Hans India,
//   Siasat, NewKerala (PTI, 10 Sep 2026): SIR deferred over the 28 Sep 2026
//   Village Committee polls; qualifying date 01.01.2027; H2H 06.11-05.12.2026;
//   draft 12.12.2026; final 15.02.2027. Earlier start had been 05.09.2026.
// - tripura-voter-id-card.ts: no reachable CEO Tripura website found (left out).
// - pib.gov.in PRID 2289473: deletion grounds, appeals.
// Left out: claims/objections end date (not in the reports seen), a UNI
// headline giving 27 Oct (not matched by other reports), CEO website.
export const tripuraSirVoterList: DocGuide = {
  state: { slug: "tripura", hi: "त्रिपुरा" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "त्रिपुरा", href: "/states/tripura.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Tripura SIR Voter List 2026",
  description: "त्रिपुरा SIR वोटर लिस्ट 2026: SIR टला, BLO का घर-घर सर्वे 6 नवंबर से 5 दिसंबर 2026, ड्राफ्ट 12 दिसंबर, अंतिम सूची 15 फरवरी 2027। अभी क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "त्रिपुरा SIR वोटर लिस्ट 2026: नया कार्यक्रम, गणना फॉर्म और अभी क्या करें",
  lead: "त्रिपुरा में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) <strong>अभी शुरू नहीं हुआ है</strong>; ग्राम समिति (Village Committee) चुनाव के कारण इसे टाला गया। नए कार्यक्रम में BLO <strong>6 नवंबर से 5 दिसंबर 2026</strong> तक घर-घर गणना फॉर्म देंगे, ड्राफ्ट सूची 12 दिसंबर 2026 और अंतिम सूची 15 फरवरी 2027 को आएगी। तब तक मौजूदा सूची में अपना नाम जांच लें।",
  facts: [
    ["SIR चरण", "तीसरा (टला हुआ)"],
    ["घर-घर सर्वे", "6 नवंबर से 5 दिसंबर 2026"],
    ["अंतिम सूची", "15 फरवरी 2027 (तय)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>SIR की तारीख बदली:</strong> त्रिपुरा में SIR पहले 5 सितंबर 2026 से शुरू होना था। अब BLO का घर-घर सर्वे <strong>6 नवंबर 2026</strong> से होगा। आगे कोई बदलाव हो तो चुनाव आयोग की घोषणा या 1950 हेल्पलाइन से पुष्टि करें।",
  sections: [
    {
      id: "sthiti",
      title: "त्रिपुरा में SIR का नया कार्यक्रम",
      intro: "चुनाव आयोग ने 14 मई 2026 को त्रिपुरा को SIR के तीसरे चरण में रखा था। 28 सितंबर 2026 को स्वायत्त ज़िला परिषद क्षेत्र में ग्राम समिति चुनाव के कारण आयोग ने कार्यक्रम बदला। आकाशवाणी समाचार (10 सितंबर 2026) के अनुसार नया कार्यक्रम:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["योग्यता तिथि", "1 जनवरी 2027"],
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "6 नवंबर से 5 दिसंबर 2026"],
          ["ड्राफ्ट सूची", "12 दिसंबर 2026"],
          ["<strong>अंतिम सूची</strong>", "<strong>15 फरवरी 2027</strong>"],
        ],
      },
      callout: {
        kind: "info",
        html: "दावे-आपत्ति की आखिरी तारीख ड्राफ्ट सूची छपने के समय घोषित होगी। योग्यता तिथि 1 जनवरी 2027 होने का मतलब है कि जिनकी उम्र 1 जनवरी 2027 को 18 साल पूरी होगी, वे भी इस SIR में नाम जुड़वा सकते हैं।",
      },
    },
    {
      id: "naam-dekhen",
      title: "वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "छपी सूची BLO, निर्वाचक रजिस्ट्रीकरण अधिकारी (ERO) कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) कैसे भरें",
      steps: [
        "<strong>फॉर्म BLO देंगे:</strong> घर-घर सर्वे में BLO हर वोटर को दो प्रति में गणना फॉर्म देंगे। इसके लिए कोई फीस नहीं है। घर पर न हों तो BLO से संपर्क करें; BLO का नाम-नंबर <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> पर मिलता है।",
        "<strong>फॉर्म भरें:</strong> नाम, जन्मतिथि, माता-पिता/पति-पत्नी का नाम और ताज़ा फोटो। पिछली गहन पुनरीक्षण वाली पुरानी सूची में अपना या माता-पिता का नाम हो तो उसका विवरण (विधानसभा क्षेत्र, भाग और क्रम संख्या) भरें।",
        "<strong>जमा करें:</strong> भरा फॉर्म तय तारीख से पहले BLO को लौटाएं और दूसरी प्रति पर पावती लें। जहां सुविधा हो, <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> पर ऑनलाइन भी भर सकते हैं।",
        "<strong>नोटिस मिले तो:</strong> जिनका मिलान पुरानी सूची से नहीं हो पाता, उनसे ERO पहचान/जन्म/निवास के कागज़ मांग सकता है। तय समय में कागज़ BLO या ERO को दें।",
      ],
      callout: {
        kind: "info",
        html: "परिवार में जो सदस्य गुज़र गए हैं या हमेशा के लिए कहीं और चले गए हैं, उनके बारे में BLO को सही जानकारी दें। जो लोग पढ़ाई या नौकरी के लिए बाहर हैं, उनका फॉर्म परिवार वाले BLO से लेकर भरवा सकते हैं।",
      },
    },
    {
      id: "naam-nahi",
      title: "SIR शुरू होने से पहले क्या करें",
      intro: "SIR अभी शुरू नहीं हुआ है, इसलिए अभी गणना फॉर्म नहीं भरा जाता। तब तक ये काम कर लें:",
      steps: [
        "मौजूदा मतदाता सूची में अपना और परिवार का नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर देख लें। EPIC नंबर नोट कर लें।",
        "नाम नहीं है तो अभी भी सामान्य <strong>फॉर्म 6</strong> भर सकते हैं (<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>, ECINET ऐप या BLO)। नाम में गलती या पता बदलना हो तो <strong>फॉर्म 8</strong>।",
        "पहचान, जन्मतिथि और पते के कागज़ (जैसे जन्म प्रमाण पत्र, 10वीं का प्रमाण पत्र, पासपोर्ट, ज़मीन के कागज़) संभाल कर रखें। गणना फॉर्म के साथ एक ताज़ा फोटो भी लगेगी।",
        "जो सदस्य पढ़ाई या काम के लिए बाहर हैं, उन्हें बता दें कि 6 नवंबर से 5 दिसंबर के बीच उनका गणना फॉर्म भरा जाना है।",
        "अपने BLO का नाम-नंबर <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a> पर मतदान केंद्र खोजकर देखें।",
      ],
      callout: {
        kind: "warn",
        html: "SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना</strong>। SIR के बाद ड्राफ्ट सूची में नाम न हो तो दावे-आपत्ति की अवधि में फॉर्म 6 (घोषणा पत्र के साथ) भरें। ERO के फैसले (नाम हटाने या दावा खारिज करने) से असहमत हों तो पहली अपील ज़िला मजिस्ट्रेट (DM) / ज़िला निर्वाचन अधिकारी के पास और दूसरी अपील राज्य के मुख्य निर्वाचन अधिकारी (CEO) के पास होती है।",
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
      href: "https://newsonair.gov.in/eci-revises-schedule-of-ongoing-sir-of-electoral-rolls-in-tripura/",
      title: "ECI ने त्रिपुरा में SIR का कार्यक्रम बदला (आकाशवाणी, 10 सितंबर 2026)",
    },
    {
      href: "https://electoralsearch.eci.gov.in/pollingstation",
      title: "अपना मतदान केंद्र और BLO जानें (ECI)",
    },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "त्रिपुरा में SIR कब होगा?",
      a: "नए कार्यक्रम में BLO का घर-घर सर्वे 6 नवंबर से 5 दिसंबर 2026 तक होगा, ड्राफ्ट सूची 12 दिसंबर 2026 और अंतिम सूची 15 फरवरी 2027 को आएगी।",
    },
    {
      q: "SIR क्यों टला?",
      a: "28 सितंबर 2026 को ग्राम समिति (Village Committee) चुनाव होने थे, इसलिए आयोग ने 5 सितंबर से शुरू होने वाला SIR आगे बढ़ा दिया।",
    },
    {
      q: "क्या अभी गणना फॉर्म भरना है?",
      a: "नहीं। गणना फॉर्म BLO 6 नवंबर 2026 से घर आकर देंगे। अभी नया नाम जोड़ना हो तो सामान्य फॉर्म 6 भरा जा सकता है।",
    },
    {
      q: "SIR के लिए कोई फीस है?",
      a: "नहीं। गणना फॉर्म, फॉर्म 6, 7 या 8 सब मुफ्त हैं। कोई पैसे मांगे तो 1950 पर शिकायत करें।",
    },
  ],
  related: [
    {
      href: "/states/tripura-voter-id-card.html",
      emoji: "🗳️",
      title: "त्रिपुरा वोटर आईडी कार्ड",
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
    { href: "/states/tripura-voter-id-card.html", label: "🗳️ त्रिपुरा वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
