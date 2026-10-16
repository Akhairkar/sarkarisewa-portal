import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; CEO/ECI sites not reachable from the sandbox):
// - pib.gov.in PRID 2260955 (14 May 2026): Uttarakhand in SIR Phase III; H2H
//   08.06-07.07.2026, draft 14.07.2026, final scheduled 15.09.2026.
// - ThePrint / The Hans India / NewKerala (PTI, 3-4 Oct 2026), Devdiscourse,
//   The Federal: claims and objections 14.07-13.08.2026; disposal deadline
//   extended by 17 days; final roll published 03.10.2026 with 71.58 lakh
//   electors; 79.6 lakh electors when SIR began on 08.06.2026 (CEO office);
//   left-out electors can still file Form 6 online, offline or at special camps.
// - pib.gov.in PRID 2289473: deletion grounds, appeals. ECI letter 01.10.2026
//   (via our voter-ID guides): post-SIR special drive.
// Left out: draft-roll elector count, district figures, camp dates.
export const uttarakhandSirVoterList: DocGuide = {
  state: { slug: "uttarakhand", hi: "उत्तराखंड" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उत्तराखंड", href: "/states/uttarakhand.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Uttarakhand SIR Voter List 2026",
  description: "उत्तराखंड SIR वोटर लिस्ट 2026: अंतिम सूची 3 अक्टूबर 2026 को छपी। नाम कैसे देखें, नाम कटा हो तो फॉर्म 6, BLO और हेल्पलाइन 1950 की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "उत्तराखंड SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें और नाम न हो तो क्या करें",
  lead: "उत्तराखंड में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) तीसरे चरण में हुआ और <strong>पूरा हो चुका है</strong>। <strong>अंतिम मतदाता सूची 3 अक्टूबर 2026</strong> को छपी, जिसमें करीब 71.58 लाख मतदाता हैं। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO उत्तराखंड की वेबसाइट पर देखें; नाम नहीं है तो फॉर्म 6 भरें।",
  facts: [
    ["SIR चरण", "तीसरा (जून 2026 से)"],
    ["अंतिम सूची", "3 अक्टूबर 2026 को छपी"],
    ["नाम न हो तो", "फॉर्म 6 (कोई फीस नहीं)"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "sthiti",
      title: "उत्तराखंड में SIR की स्थिति और तारीखें",
      intro: "चुनाव आयोग ने 14 मई 2026 को उत्तराखंड को SIR के तीसरे चरण में रखा। अंतिम सूची पहले 15 सितंबर 2026 को आनी थी; दावे-आपत्ति के निपटारे का समय 17 दिन बढ़ने से यह 3 अक्टूबर को छपी।",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "8 जून से 7 जुलाई 2026"],
          ["ड्राफ्ट सूची", "14 जुलाई 2026"],
          ["दावे-आपत्ति", "14 जुलाई से 13 अगस्त 2026"],
          ["<strong>अंतिम सूची</strong>", "<strong>3 अक्टूबर 2026</strong> (करीब 71.58 लाख मतदाता)"],
        ],
      },
      callout: {
        kind: "info",
        html: "CEO कार्यालय के हवाले से समाचार रिपोर्टों के अनुसार SIR शुरू होते समय (8 जून 2026) राज्य में करीब 79.6 लाख मतदाता थे। आयोग ने कहा है कि छूटे हुए लोग अब भी फॉर्म 6 ऑनलाइन, ऑफलाइन या विशेष कैंप में भर सकते हैं।",
      },
    },
    {
      id: "naam-dekhen",
      title: "SIR वाली वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "पूरी सूची (विधानसभा क्षेत्र और भाग के हिसाब से PDF) राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट <a href=\"https://ceo.uk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.uk.gov.in</a> पर मिलती है। छपी सूची BLO, ERO कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) क्या था",
      intro: "उत्तराखंड में SIR के दौरान BLO हर घर गए और हर वोटर को दो प्रति में <strong>गणना फॉर्म (EF)</strong> दिया। अब यह चरण खत्म हो चुका है, इसलिए अब नया गणना फॉर्म नहीं भरा जाता। जिनका नाम छूट गया, उनके लिए अब <strong>फॉर्म 6</strong> का रास्ता है (नीचे देखें)।",
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
      href: "https://ceo.uk.gov.in/",
      title: "मुख्य निर्वाचन अधिकारी, उत्तराखंड",
      note: "मतदाता सूची और BLO जानकारी",
    },
    {
      href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955",
      title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)",
    },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "उत्तराखंड में SIR की अंतिम वोटर लिस्ट कब आई?",
      a: "3 अक्टूबर 2026 को। पहले यह 15 सितंबर को आनी थी। इसमें करीब 71.58 लाख मतदाता हैं।",
    },
    {
      q: "उत्तराखंड की SIR सूची में अपना नाम कैसे देखें?",
      a: "electoralsearch.eci.gov.in पर EPIC नंबर या नाम-विवरण से खोजें, या ceo.uk.gov.in पर मतदाता सूची देखें।",
    },
    {
      q: "अंतिम सूची में नाम नहीं है, अब क्या करूं?",
      a: "फॉर्म 6 भरें: voters.eci.gov.in, ECINET ऐप, BLO या विशेष कैंप में। इसकी कोई फीस नहीं है।",
    },
    {
      q: "पहाड़ से बाहर काम करता हूं, नाम कहां रहेगा?",
      a: "नाम वहीं जुड़ता है जहां आप आम तौर पर रहते हैं, और एक ही जगह होना चाहिए। स्थायी रूप से कहीं और रहते हैं तो वहां फॉर्म 8 (शिफ्टिंग) या फॉर्म 6 भरें।",
    },
    {
      q: "नाम कटने के फैसले से असहमत हूं, कहां अपील करूं?",
      a: "पहली अपील ज़िला मजिस्ट्रेट (DM) / ज़िला निर्वाचन अधिकारी के पास और दूसरी अपील मुख्य निर्वाचन अधिकारी, उत्तराखंड के पास।",
    },
  ],
  related: [
    {
      href: "/states/uttarakhand-voter-id-card.html",
      emoji: "🗳️",
      title: "उत्तराखंड वोटर आईडी कार्ड",
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
    { href: "/states/uttarakhand-voter-id-card.html", label: "🗳️ उत्तराखंड वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
