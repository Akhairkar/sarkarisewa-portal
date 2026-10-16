import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; CEO/ECI sites not reachable from the sandbox):
// - pib.gov.in PRID 2186480 (04 Nov 2025): West Bengal in SIR Phase II (ECI
//   order 27.10.2025); CEO WB press note CEO PN 25 (28.10.2025).
// - Deccan Herald / PTI (Jan 2026): draft roll 16.12.2025; claims and
//   objections extended to 19.01.2026.
// - newsonair.gov.in (10 Feb 2026), LatestLY: final publication extended to
//   28.02.2026.
// - CEO West Bengal "Final Press Note CEO-PN-05-2026" (28.02.2026, search
//   extract): final roll published 28.02.2026 per Supreme Court and ECI orders;
//   6.44 crore electors; 60.06 lakh cases marked "Under Adjudication".
// - newsonair.gov.in (23 and 28 Mar 2026), ETV Bharat, The Week: judicial
//   officers decided the under-adjudication cases; first supplementary list
//   23-24.03.2026, second 28.03.2026; appellate tribunals set up; The Wire on
//   the Supreme Court allowing tribunal-cleared voters.
// - ECI PN ECI/PN/120/2026 (26.09.2026, via west-bengal-voter-id-card.ts): SIR
//   completed in West Bengal. ECI letter 01.10.2026: post-SIR special drive.
// Left out: final tribunal tallies and exact deletion totals (not found /
// sources differ).
export const westBengalSirVoterList: DocGuide = {
  state: { slug: "west-bengal", hi: "पश्चिम बंगाल" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पश्चिम बंगाल", href: "/states/west-bengal.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "West Bengal SIR Voter List 2026",
  description: "पश्चिम बंगाल SIR वोटर लिस्ट 2026: अंतिम सूची 28 फरवरी 2026 को छपी, फिर पूरक सूचियां आईं। नाम कैसे देखें, नाम कटा हो तो फॉर्म 6 और अपील।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "पश्चिम बंगाल SIR वोटर लिस्ट 2026: अंतिम और पूरक सूची में नाम कैसे देखें, नाम न हो तो क्या करें",
  lead: "पश्चिम बंगाल में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) दूसरे चरण में हुआ और चुनाव आयोग के अनुसार <strong>पूरा हो चुका है</strong>। <strong>अंतिम मतदाता सूची 28 फरवरी 2026</strong> को छपी (करीब 6.44 करोड़ मतदाता); करीब 60 लाख नाम \"Under Adjudication\" रखे गए, जिन पर फैसले के बाद मार्च 2026 में पूरक सूचियां आईं। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर देखें; नाम नहीं है तो फॉर्म 6 भरें।",
  facts: [
    ["SIR चरण", "दूसरा (अक्टूबर 2025 का आदेश)"],
    ["अंतिम सूची", "28 फरवरी 2026 को छपी"],
    ["पूरक सूचियां", "23 और 28 मार्च 2026"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "sthiti",
      title: "पश्चिम बंगाल में SIR की स्थिति और तारीखें",
      intro: "चुनाव आयोग के 27 अक्टूबर 2025 के आदेश से पश्चिम बंगाल SIR के दूसरे चरण में शामिल हुआ। अंतिम सूची की तारीख कई बार बदली और सुप्रीम कोर्ट व आयोग के आदेश पर 28 फरवरी 2026 को सूची छपी।",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["ड्राफ्ट सूची", "16 दिसंबर 2025"],
          ["दावे-आपत्ति", "19 जनवरी 2026 तक (बढ़ाई गई तारीख)"],
          ["<strong>अंतिम सूची</strong>", "<strong>28 फरवरी 2026</strong> (करीब 6.44 करोड़ मतदाता)"],
          ["\"Under Adjudication\" नामों की पहली पूरक सूची", "23-24 मार्च 2026"],
          ["दूसरी पूरक सूची", "28 मार्च 2026"],
        ],
      },
      callout: {
        kind: "info",
        html: "CEO पश्चिम बंगाल के प्रेस नोट के अनुसार अंतिम सूची में 60.06 लाख मामले \"Under Adjudication\" (फैसला बाकी) रखे गए थे। इन पर न्यायिक अधिकारियों ने फैसला किया और नाम रखने या हटाने के फैसले पूरक सूचियों में आए। फैसले के खिलाफ अपील के लिए अपीलीय ट्रिब्यूनल बनाए गए। ताज़ा पूरक सूची और प्रेस नोट CEO पश्चिम बंगाल की वेबसाइट पर देखें।",
      },
    },
    {
      id: "naam-dekhen",
      title: "SIR वाली वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "पूरी सूची (विधानसभा क्षेत्र और भाग के हिसाब से PDF) राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट <a href=\"https://ceowestbengal.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceowestbengal.wb.gov.in</a> पर मिलती है। छपी सूची BLO, ERO कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
      callout: {
        kind: "warn",
        html: "अगर आपका नाम अंतिम सूची में \"Under Adjudication\" था, तो पूरक सूची में देखें कि नाम रखा गया या हटाया गया। हटाया गया हो तो अपील या फॉर्म 6 के बारे में अपने BLO/ERO से पूछें।",
      },
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) क्या था",
      intro: "पश्चिम बंगाल में SIR के दौरान BLO हर घर गए और हर वोटर को दो प्रति में <strong>गणना फॉर्म (EF)</strong> दिया। अब यह चरण खत्म हो चुका है, इसलिए अब नया गणना फॉर्म नहीं भरा जाता। जिनका नाम छूट गया, उनके लिए अब <strong>फॉर्म 6</strong> का रास्ता है (नीचे देखें)।",
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
      href: "https://ceowestbengal.wb.gov.in/",
      title: "मुख्य निर्वाचन अधिकारी, पश्चिम बंगाल",
      note: "SIR 2026 प्रेस नोट, अंतिम और पूरक सूचियां",
    },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "पश्चिम बंगाल में SIR की अंतिम वोटर लिस्ट कब आई?",
      a: "28 फरवरी 2026 को। इसमें करीब 6.44 करोड़ मतदाता थे और करीब 60 लाख मामले \"Under Adjudication\" रखे गए थे, जिन पर मार्च 2026 में पूरक सूचियां आईं।",
    },
    {
      q: "\"Under Adjudication\" का क्या मतलब है?",
      a: "मतलब उस नाम पर फैसला बाकी था। न्यायिक अधिकारियों ने कागज़ देखकर तय किया कि नाम रहेगा या हटेगा, और फैसला पूरक सूची में छपा।",
    },
    {
      q: "बंगाल की SIR सूची में अपना नाम कैसे देखें?",
      a: "electoralsearch.eci.gov.in पर EPIC नंबर या नाम-विवरण से खोजें। अंतिम और पूरक सूचियां ceowestbengal.wb.gov.in पर भी मिलती हैं।",
    },
    {
      q: "नाम हट गया है, अब क्या करूं?",
      a: "अगर आप योग्य हैं तो फॉर्म 6 से दोबारा नाम जुड़वाएं (voters.eci.gov.in, ECINET ऐप या BLO)। फैसले को चुनौती देनी हो तो पहले DM/ज़िला निर्वाचन अधिकारी और फिर CEO के पास अपील होती है; SIR के लिए बने ट्रिब्यूनल की ताज़ा स्थिति BLO/ERO से पूछें।",
    },
  ],
  related: [
    {
      href: "/states/west-bengal-voter-id-card.html",
      emoji: "🗳️",
      title: "पश्चिम बंगाल वोटर आईडी कार्ड",
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
    { href: "/states/west-bengal-voter-id-card.html", label: "🗳️ पश्चिम बंगाल वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
