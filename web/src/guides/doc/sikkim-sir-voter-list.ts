import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; ceo.sikkim.gov.in not reachable today, facts
// from sikkim-voter-id-card.ts which read it on 14 Oct 2026):
// - pib.gov.in PRID 2260955 / ECI/PN/086/2026 (14 May 2026): Sikkim in SIR
//   Phase III.
// - CEO Sikkim "Press Note for Final Publication 2026": qualifying date
//   01.07.2026; draft 05.07.2026; claims and objections 05.07-04.08.2026 (Forms
//   6, 7, 8); final roll 06.09.2026 on CEO website and at all polling stations;
//   appeals under Sec 24 RP Act 1950 / Rule 27 RER 1960 (DEO first, CEO second).
// - EastMojo, ETV Bharat, Asianet/ANI, Deccan Herald (6-7 Sep 2026): final roll
//   4,18,467 electors vs 4,71,018 before SIR; draft (July) 4,33,294; Sikkim the
//   only state where the final roll is below the draft.
// - ECI letter 01.10.2026 (via our voter-ID guides): post-SIR special drive.
// Left out: house-to-house enumeration dates for Sikkim (not confirmed),
// exclusion break-ups (sources differ).
export const sikkimSirVoterList: DocGuide = {
  state: { slug: "sikkim", hi: "सिक्किम" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सिक्किम", href: "/states/sikkim.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Sikkim SIR Voter List 2026: Online Apply, Eligibility & Documents",
  description: "सिक्किम SIR वोटर लिस्ट 2026: अंतिम सूची 6 सितंबर 2026 को छपी। नाम कैसे देखें, नाम कटा हो तो फॉर्म 6, अपील, BLO और हेल्पलाइन 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "सिक्किम SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें और नाम न हो तो क्या करें",
  lead: "सिक्किम में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) <strong>पूरा हो चुका है</strong>। यह तीसरे चरण में हुआ और <strong>अंतिम मतदाता सूची 6 सितंबर 2026</strong> को छपी, जिसमें 4,18,467 मतदाता हैं। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO सिक्किम की वेबसाइट पर देखें; नाम नहीं है तो फॉर्म 6 भरकर दोबारा जुड़वाएं।",
  facts: [
    ["SIR चरण", "तीसरा (योग्यता तिथि 1 जुलाई 2026)"],
    ["अंतिम सूची", "6 सितंबर 2026 को छपी"],
    ["नाम न हो तो", "फॉर्म 6 (कोई फीस नहीं)"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "sthiti",
      title: "सिक्किम में SIR की स्थिति और तारीखें",
      intro: "चुनाव आयोग ने 14 मई 2026 को सिक्किम को SIR के तीसरे चरण में रखा। CEO सिक्किम के अंतिम प्रकाशन वाले प्रेस नोट के अनुसार प्रक्रिया इस तरह पूरी हुई:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["योग्यता तिथि", "1 जुलाई 2026"],
          ["ड्राफ्ट सूची", "5 जुलाई 2026 (4,33,294 मतदाता)"],
          ["दावे-आपत्ति (फॉर्म 6, 7, 8)", "5 जुलाई से 4 अगस्त 2026"],
          ["<strong>अंतिम सूची</strong>", "<strong>6 सितंबर 2026</strong> (4,18,467 मतदाता)"],
        ],
      },
      callout: {
        kind: "info",
        html: "समाचार रिपोर्टों के अनुसार SIR से पहले सिक्किम में 4,71,018 मतदाता थे; अंतिम सूची में करीब 11% कम हैं। अंतिम सूची CEO वेबसाइट पर और सभी मतदान केंद्रों पर लगाई गई है।",
      },
    },
    {
      id: "naam-dekhen",
      title: "SIR वाली वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "पूरी सूची (विधानसभा क्षेत्र और भाग के हिसाब से PDF) राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट <a href=\"https://ceo.sikkim.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.sikkim.gov.in</a> पर मिलती है। छपी सूची BLO, ERO कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) क्या था",
      intro: "सिक्किम में SIR के दौरान BLO हर घर गए और हर वोटर को दो प्रति में <strong>गणना फॉर्म (EF)</strong> दिया। अब यह चरण खत्म हो चुका है, इसलिए अब नया गणना फॉर्म नहीं भरा जाता। जिनका नाम छूट गया, उनके लिए अब <strong>फॉर्म 6</strong> का रास्ता है (नीचे देखें)।",
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
      href: "https://ceo.sikkim.gov.in/",
      title: "मुख्य निर्वाचन अधिकारी, सिक्किम",
      note: "अंतिम मतदाता सूची (Electoral Rolls), BLO Details",
    },
    { href: "https://ceo.sikkim.gov.in/DeptContent/ListBLO", title: "BLO Details (CEO सिक्किम)" },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "सिक्किम में SIR की अंतिम वोटर लिस्ट कब आई?",
      a: "6 सितंबर 2026 को। इसमें 4,18,467 मतदाता हैं। SIR अब पूरा हो चुका है।",
    },
    {
      q: "सिक्किम की SIR सूची में अपना नाम कैसे देखें?",
      a: "electoralsearch.eci.gov.in पर EPIC नंबर या नाम-विवरण से खोजें। पूरी सूची ceo.sikkim.gov.in पर Electoral Rolls में और मतदान केंद्र पर भी है।",
    },
    {
      q: "अंतिम सूची में नाम नहीं है, अब क्या करूं?",
      a: "फॉर्म 6 भरें: voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए। फॉर्म 6 पूरे साल भरा जा सकता है और इसकी कोई फीस नहीं है।",
    },
    {
      q: "ERO के फैसले के खिलाफ अपील कहां करें?",
      a: "जनप्रतिनिधित्व अधिनियम 1950 की धारा 24 के तहत पहली अपील ज़िला निर्वाचन अधिकारी (DEO) के पास और दूसरी अपील CEO सिक्किम के पास।",
    },
    {
      q: "मेरा BLO कौन है?",
      a: "ceo.sikkim.gov.in पर BLO Details पेज देखें, या electoralsearch.eci.gov.in/pollingstation पर अपना मतदान केंद्र खोजें। 1950 पर कॉल करके भी पूछ सकते हैं।",
    },
  ],
  related: [
    {
      href: "/states/sikkim-voter-id-card.html",
      emoji: "🗳️",
      title: "सिक्किम वोटर आईडी कार्ड",
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
    { href: "/states/sikkim-voter-id-card.html", label: "🗳️ सिक्किम वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
