import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; CEO/ECI sites not reachable from the sandbox):
// - pib.gov.in PRID 2186480 (04 Nov 2025): Rajasthan in SIR Phase II (ECI order
//   27.10.2025); enumeration from 04.11.2025.
// - Deccan Herald / PTI (Jan 2026): Phase II draft rolls 16.12.2025, claims and
//   objections 16.12.2025-15.01.2026, extended to 19.01.2026 for Rajasthan, Goa,
//   Lakshadweep, Puducherry and West Bengal.
// - Business Standard (22 Feb 2026) / Madhyamam / National Herald: Rajasthan
//   final roll published 21.02.2026, 5,15,19,929 electors in 199 ACs, net
//   +10,48,605 over the draft; appeal to District Collector within 15 days and
//   to the CEO within 30 days.
// - pib.gov.in PRID 2289473 (25 Jul 2026): deletion grounds. ECI PN
//   ECI/PN/120/2026 and ECI letter 01.10.2026 (via rajasthan-voter-id-card.ts):
//   SIR declaration only during SIR; post-SIR special drive.
// Left out: enumeration end date for Rajasthan (extensions differed by state),
// dates of the post-SIR special drive.
export const rajasthanSirVoterList: DocGuide = {
  state: { slug: "rajasthan", hi: "राजस्थान" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राजस्थान", href: "/states/rajasthan.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Rajasthan SIR Voter List 2026",
  description: "राजस्थान SIR वोटर लिस्ट 2026: अंतिम सूची 21 फरवरी 2026 को छपी। नाम कैसे देखें, नाम कटा हो तो फॉर्म 6, अपील, BLO और हेल्पलाइन 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "राजस्थान SIR वोटर लिस्ट 2026: अंतिम सूची में नाम कैसे देखें और नाम न हो तो क्या करें",
  lead: "राजस्थान में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) दूसरे चरण में हुआ और <strong>पूरा हो चुका है</strong>। <strong>अंतिम मतदाता सूची 21 फरवरी 2026</strong> को छपी, जिसमें 5,15,19,929 मतदाता हैं। अपना नाम <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> या CEO राजस्थान की वेबसाइट पर देखें; नाम नहीं है तो फॉर्म 6 भरकर दोबारा जुड़वाएं।",
  facts: [
    ["SIR चरण", "दूसरा (अक्टूबर 2025 का आदेश)"],
    ["अंतिम सूची", "21 फरवरी 2026 को छपी"],
    ["नाम न हो तो", "फॉर्म 6 (कोई फीस नहीं)"],
    ["हेल्पलाइन", "1950"],
  ],
  sections: [
    {
      id: "sthiti",
      title: "राजस्थान में SIR की स्थिति और तारीखें",
      intro: "चुनाव आयोग के 27 अक्टूबर 2025 के आदेश से राजस्थान SIR के दूसरे चरण में शामिल हुआ। यह प्रक्रिया फरवरी 2026 में पूरी हो गई। अब SIR का कोई फॉर्म बाकी नहीं है; नया नाम, सुधार और नाम हटाना सामान्य फॉर्म 6, 8 और 7 से होता है।",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "4 नवंबर 2025 से"],
          ["ड्राफ्ट सूची", "16 दिसंबर 2025"],
          ["दावे-आपत्ति", "16 दिसंबर 2025 से 19 जनवरी 2026 (पहले 15 जनवरी तक थी)"],
          [
            "<strong>अंतिम सूची</strong>",
            "<strong>21 फरवरी 2026</strong> (5,15,19,929 मतदाता, 199 विधानसभा क्षेत्र)",
          ],
        ],
      },
      callout: {
        kind: "info",
        html: "समाचार रिपोर्टों के अनुसार ड्राफ्ट के बाद अंतिम सूची में 10,48,605 मतदाता बढ़े। नाम हटाने के फैसले के खिलाफ ज़िला कलेक्टर (DM) के पास 15 दिन में और उसके बाद CEO के पास 30 दिन में अपील की जा सकती है।",
      },
    },
    {
      id: "naam-dekhen",
      title: "SIR वाली वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "पूरी सूची (विधानसभा क्षेत्र और भाग के हिसाब से PDF) राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट <a href=\"https://ceorajasthan.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceorajasthan.nic.in</a> पर मिलती है। छपी सूची BLO, ERO कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म (Enumeration Form) क्या था",
      intro: "राजस्थान में SIR के दौरान BLO हर घर गए और हर वोटर को दो प्रति में <strong>गणना फॉर्म (EF)</strong> दिया। अब यह चरण खत्म हो चुका है, इसलिए अब नया गणना फॉर्म नहीं भरा जाता। जिनका नाम छूट गया, उनके लिए अब <strong>फॉर्म 6</strong> का रास्ता है (नीचे देखें)।",
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
      href: "https://ceorajasthan.nic.in/",
      title: "मुख्य निर्वाचन अधिकारी, राजस्थान",
      note: "अंतिम मतदाता सूची, BLO जानकारी",
    },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "राजस्थान में SIR की अंतिम वोटर लिस्ट कब आई?",
      a: "21 फरवरी 2026 को। इसमें 5,15,19,929 मतदाता हैं। SIR अब पूरा हो चुका है।",
    },
    {
      q: "राजस्थान की SIR सूची में अपना नाम कैसे देखें?",
      a: "electoralsearch.eci.gov.in पर EPIC नंबर या नाम-विवरण से खोजें। पूरी सूची ceorajasthan.nic.in पर और BLO/ERO कार्यालय में भी देखी जा सकती है।",
    },
    {
      q: "अंतिम सूची में नाम नहीं है, अब क्या करूं?",
      a: "फॉर्म 6 भरें: voters.eci.gov.in, ECINET ऐप या BLO के ज़रिए। फॉर्म 6 पूरे साल भरा जा सकता है और इसकी कोई फीस नहीं है।",
    },
    {
      q: "नाम कटने के फैसले के खिलाफ अपील कितने दिन में करनी है?",
      a: "समाचार रिपोर्टों के अनुसार ज़िला कलेक्टर (DM) के पास 15 दिन में पहली अपील और उसके बाद मुख्य निर्वाचन अधिकारी के पास 30 दिन में दूसरी अपील। समय निकल गया हो तो फॉर्म 6 से नया नाम जुड़वाएं।",
    },
  ],
  related: [
    {
      href: "/states/rajasthan-voter-id-card.html",
      emoji: "🗳️",
      title: "राजस्थान वोटर आईडी कार्ड",
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
    { href: "/states/rajasthan-voter-id-card.html", label: "🗳️ राजस्थान वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
