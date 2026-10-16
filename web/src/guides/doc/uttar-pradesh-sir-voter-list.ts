import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; CEO/ECI sites not reachable from the sandbox):
// - pib.gov.in PRID 2186480 (04 Nov 2025) and PRID 2202341 (11 Dec 2025): UP in
//   SIR Phase II (order 27.10.2025); enumeration extended to 26.12.2025.
// - Deccan Herald / Scroll (Dec 2025), ETV Bharat (6 Jan 2026): draft roll
//   06.01.2026 with qualifying date 01.01.2026; enumeration forms from 12.55
//   crore of 15.44 crore electors; claims and objections till 06.02.2026.
// - newsonair.gov.in, ETV Bharat, The Wire (6 Feb 2026): claims and objections
//   extended to 06.03.2026 (fourth extension, on parties' request per CEO Navdeep
//   Rinwa); disposal by 27.03.2026; final roll 10.04.2026.
// - newsonair.gov.in / IANS (10 Apr 2026, via uttar-pradesh-voter-id-card.ts):
//   final roll published 10.04.2026 with 13.39 crore electors.
// - pib.gov.in PRID 2289473: deletion grounds, appeals. ECI letter 01.10.2026
//   (via our voter-ID guides): post-SIR special drive.
// Left out: district-wise deletions, dates of the post-SIR special drive.
export const uttarPradeshSirVoterList: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उत्तर प्रदेश", href: "/states/uttar-pradesh.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Uttar Pradesh SIR Voter List 2026",
  description: "उत्तर प्रदेश SIR वोटर लिस्ट 2026: अंतिम सूची 10 अप्रैल 2026 को छपी। नाम कैसे देखें, नाम कटा हो तो फॉर्म 6, BLO और हेल्पलाइन 1950 की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "उत्तर प्रदेश SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें और नाम न हो तो क्या करें",
  lead: "उत्तर प्रदेश में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) दूसरे चरण में हुआ और <strong>पूरा हो चुका है</strong>। <strong>अंतिम मतदाता सूची 10 अप्रैल 2026</strong> को छपी, जिसमें करीब 13.39 करोड़ मतदाता हैं। SIR में बहुत से नाम कटे हैं, इसलिए अपना और परिवार का नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर ज़रूर देखें; नाम नहीं है तो फॉर्म 6 भरें।",
  facts: [
    ["SIR चरण", "दूसरा (अक्टूबर 2025 का आदेश)"],
    ["अंतिम सूची", "10 अप्रैल 2026 को छपी"],
    ["नाम न हो तो", "फॉर्म 6 (कोई फीस नहीं)"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "sthiti",
      title: "उत्तर प्रदेश में SIR की स्थिति और तारीखें",
      intro: "चुनाव आयोग के 27 अक्टूबर 2025 के आदेश से उत्तर प्रदेश SIR के दूसरे चरण में शामिल हुआ। यहां आयोग ने चार बार तारीखें बढ़ाईं। प्रक्रिया अप्रैल 2026 में पूरी हो गई।",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "नवंबर 2025 से 26 दिसंबर 2025 तक (बढ़ाई गई तारीख)"],
          ["ड्राफ्ट सूची", "6 जनवरी 2026 (योग्यता तिथि 1 जनवरी 2026)"],
          ["दावे-आपत्ति", "6 जनवरी से 6 मार्च 2026 (पहले 6 फरवरी तक थी)"],
          ["दावे-आपत्ति का निपटारा", "27 मार्च 2026 तक"],
          ["<strong>अंतिम सूची</strong>", "<strong>10 अप्रैल 2026</strong> (करीब 13.39 करोड़ मतदाता)"],
        ],
      },
      callout: {
        kind: "info",
        html: "समाचार रिपोर्टों के अनुसार SIR से पहले राज्य में 15.44 करोड़ मतदाता थे और गणना फॉर्म 12.55 करोड़ लोगों के ही जमा हुए। इसलिए कई परिवारों में किसी न किसी का नाम छूट सकता है; हर सदस्य का नाम अलग-अलग खोजें।",
      },
    },
    {
      id: "naam-dekhen",
      title: "SIR वाली वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "पूरी सूची (विधानसभा क्षेत्र और भाग के हिसाब से PDF) राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट <a href=\"https://ceouttarpradesh.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceouttarpradesh.nic.in</a> पर मिलती है। छपी सूची BLO, ERO कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) क्या था",
      intro: "उत्तर प्रदेश में SIR के दौरान BLO हर घर गए और हर वोटर को दो प्रति में <strong>गणना फॉर्म (EF)</strong> दिया। अब यह चरण खत्म हो चुका है, इसलिए अब नया गणना फॉर्म नहीं भरा जाता। जिनका नाम छूट गया, उनके लिए अब <strong>फॉर्म 6</strong> का रास्ता है (नीचे देखें)।",
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
      href: "https://ceouttarpradesh.nic.in/",
      title: "मुख्य निर्वाचन अधिकारी, उत्तर प्रदेश",
      note: "विधानसभा-वार मतदाता सूची PDF, नाम खोज",
    },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "उत्तर प्रदेश में SIR की अंतिम वोटर लिस्ट कब आई?",
      a: "10 अप्रैल 2026 को। इसमें करीब 13.39 करोड़ मतदाता हैं। SIR अब पूरा हो चुका है।",
    },
    {
      q: "UP की SIR सूची में अपना नाम कैसे देखें?",
      a: "electoralsearch.eci.gov.in पर EPIC नंबर या नाम-विवरण से खोजें। विधानसभा-वार सूची ceouttarpradesh.nic.in पर भी है।",
    },
    {
      q: "अंतिम सूची में नाम नहीं है, अब क्या करूं?",
      a: "फॉर्म 6 भरें: voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए। फॉर्म 6 पूरे साल भरा जा सकता है और इसकी कोई फीस नहीं है।",
    },
    {
      q: "मैं दूसरे राज्य में काम करता हूं, नाम कहां जुड़वाऊं?",
      a: "नाम वहीं जुड़ता है जहां आप आम तौर पर रहते हैं, और एक ही जगह होना चाहिए। अगर आप स्थायी रूप से दूसरे राज्य में रहते हैं तो वहां फॉर्म 8 (शिफ्टिंग) या फॉर्म 6 भरें।",
    },
    {
      q: "नाम कटने के फैसले से असहमत हूं, कहां अपील करूं?",
      a: "पहली अपील ज़िला मजिस्ट्रेट (DM) / ज़िला निर्वाचन अधिकारी के पास और दूसरी अपील मुख्य निर्वाचन अधिकारी, उत्तर प्रदेश के पास। मदद के लिए 1950 पर कॉल करें।",
    },
  ],
  related: [
    {
      href: "/states/uttar-pradesh-voter-id-card.html",
      emoji: "🗳️",
      title: "उत्तर प्रदेश वोटर आईडी कार्ड",
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
    { href: "/states/uttar-pradesh-voter-id-card.html", label: "🗳️ उत्तर प्रदेश वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
