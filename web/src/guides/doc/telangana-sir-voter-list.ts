import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; CEO/ECI sites not reachable from the sandbox):
// - pib.gov.in PRID 2260955 (14 May 2026): Telangana in SIR Phase III; original
//   plan H2H to 24.07.2026, draft 31.07.2026, final 01.10.2026 (UNI 16 May 2026).
// - Deccan Chronicle (Jun 2026): SIR in Telangana from 25.06.2026; Siasat /
//   Deccan Chronicle (Jul-Aug 2026): enumeration extended to 03.08, then 10.08.2026.
// - Organiser / The News Minute (17 Aug 2026): draft rolls for all 119 ACs
//   published 17.08.2026 (about 2.65 crore electors), claims till 16.09.2026;
//   73,39,235 of 3,38,26,448 electors marked ASDD, who must file Form 6 with the
//   declaration for inclusion.
// - Deccan Chronicle, The South First, Sakshi Post, Siasat (Sep-Oct 2026): ECI
//   revised schedule on the CEO's request: claims and objections till
//   07.10.2026 (after three extensions), disposal till 05.11.2026, final roll
//   09.11.2026. CEO office: electors not responding to notices will not be in
//   the final roll (news report).
// - ECI PN ECI/PN/120/2026 (via telangana-voter-id-card.ts): Form 6 declaration
//   applies only during SIR. pib.gov.in PRID 2289473: deletion grounds, appeals.
// Left out: live counts of pending hearings (change daily).
export const telanganaSirVoterList: DocGuide = {
  state: { slug: "telangana", hi: "तेलंगाना" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "तेलंगाना", href: "/states/telangana.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Telangana SIR Voter List 2026",
  description: "तेलंगाना SIR वोटर लिस्ट 2026: ड्राफ्ट सूची 17 अगस्त को छपी, दावे-आपत्ति 7 अक्टूबर को बंद, अंतिम सूची 9 नवंबर 2026 को। नाम देखें, नोटिस और फॉर्म 6।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "तेलंगाना SIR वोटर लिस्ट 2026: ड्राफ्ट सूची में नाम, नोटिस की सुनवाई और अंतिम सूची (9 नवंबर)",
  lead: "तेलंगाना में मतदाता सूची का विशेष गहन पुनरीक्षण (SIR) तीसरे चरण में <strong>अभी चल रहा है</strong>। ड्राफ्ट सूची 17 अगस्त 2026 को छपी और दावे-आपत्ति की अवधि 7 अक्टूबर को खत्म हो गई। अब नोटिस की सुनवाई और निपटारा 5 नवंबर तक चलेगा और <strong>अंतिम सूची 9 नवंबर 2026</strong> को छपनी तय है। नोटिस मिला है तो तय तारीख पर कागज़ ज़रूर दें।",
  facts: [
    ["SIR चरण", "तीसरा (चल रहा है)"],
    ["दावे-आपत्ति", "7 अक्टूबर 2026 को बंद"],
    ["अंतिम सूची", "9 नवंबर 2026 (तय)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>नोटिस मिला है?</strong> CEO कार्यालय के हवाले से समाचारों के अनुसार जो मतदाता तय समय में नोटिस का जवाब नहीं देंगे, उनका नाम अंतिम सूची में नहीं आएगा। सुनवाई की तारीख पर अपने कागज़ लेकर ज़रूर जाएं या BLO को दें।",
  sections: [
    {
      id: "sthiti",
      title: "तेलंगाना में SIR की स्थिति और तारीखें",
      intro: "चुनाव आयोग ने 14 मई 2026 को तेलंगाना को SIR के तीसरे चरण में रखा। पहले अंतिम सूची 1 अक्टूबर 2026 को आनी थी, पर CEO तेलंगाना के अनुरोध पर आयोग ने कई बार तारीखें बढ़ाईं। ताज़ा कार्यक्रम:",
      table: {
        head: ["काम", "तारीख"],
        rows: [
          ["BLO का घर-घर सर्वे (गणना फॉर्म)", "25 जून से 10 अगस्त 2026 (बढ़ाई गई तारीख)"],
          ["ड्राफ्ट सूची", "17 अगस्त 2026 (सभी 119 विधानसभा क्षेत्र)"],
          ["दावे-आपत्ति", "17 अगस्त से 7 अक्टूबर 2026 (पहले 16 सितंबर तक थी)"],
          ["नोटिस, सुनवाई और निपटारा", "5 नवंबर 2026 तक"],
          ["<strong>अंतिम सूची</strong>", "<strong>9 नवंबर 2026</strong> (तय)"],
        ],
      },
      callout: {
        kind: "info",
        html: "समाचार रिपोर्टों के अनुसार ड्राफ्ट के समय 3,38,26,448 मतदाताओं में से 73,39,235 को \"अनुपस्थित, शिफ्ट, मृत या डुप्लीकेट\" (ASDD) माना गया। इनमें से जो योग्य हैं, उन्हें घोषणा पत्र के साथ फॉर्म 6 भरना था। आगे तारीख बदले तो CEO तेलंगाना की वेबसाइट पर देखें।",
      },
    },
    {
      id: "naam-dekhen",
      title: "SIR वाली वोटर लिस्ट में अपना नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें। EPIC (वोटर कार्ड) नंबर से, या नाम, रिश्तेदार का नाम, उम्र और ज़िला भरकर खोजें। मोबाइल नंबर से खोजने का विकल्प भी है।",
        "नाम मिल जाए तो भाग (part) संख्या, क्रम संख्या और मतदान केंद्र नोट कर लें।",
        "पूरी सूची (विधानसभा क्षेत्र और भाग के हिसाब से PDF) राज्य के मुख्य निर्वाचन अधिकारी (CEO) की वेबसाइट <a href=\"https://ceotelangana.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceotelangana.nic.in</a> पर मिलती है। छपी सूची BLO, ERO कार्यालय और मतदान केंद्र पर भी देखी जा सकती है।",
        "<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> या ECINET ऐप पर लॉगिन करके भी नाम खोज सकते हैं और अपने BLO का नाम-नंबर देख सकते हैं। दिक्कत हो तो <strong>1950</strong> पर कॉल करें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म और नोटिस की सुनवाई",
      intro: "तेलंगाना में गणना फॉर्म (EF) भरने और जमा करने का समय 10 अगस्त 2026 को खत्म हो गया। अब नया गणना फॉर्म नहीं भरा जाता। इस समय सबसे ज़रूरी काम <strong>नोटिस की सुनवाई</strong> है।",
      list: [
        "जिनका मिलान पुरानी (पिछली गहन पुनरीक्षण वाली) सूची से नहीं हुआ, उन्हें ERO ने नोटिस भेजकर पहचान, जन्म या निवास के कागज़ मांगे हैं।",
        "नोटिस मिलने पर BLO घर आकर कागज़ ले सकता है; सुनवाई में परिवार का कोई वयस्क सदस्य आपकी ओर से जा सकता है।",
        "सुनवाई और फैसले 5 नवंबर 2026 तक होने हैं। अपना नोटिस और जमा किए कागज़ों की पावती संभाल कर रखें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "ड्राफ्ट सूची में नाम नहीं है तो क्या करें",
      intro: "SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम (डुप्लीकेट), या बार-बार जाने पर भी न मिलना</strong>। दावे-आपत्ति की अवधि (7 अक्टूबर) खत्म हो चुकी है, फिर भी ये रास्ते खुले हैं:",
      steps: [
        "पहले <a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर और नाम, दोनों तरह से खोजें।",
        "7 अक्टूबर तक फॉर्म 6 (घोषणा पत्र के साथ) दे चुके हैं तो उसका रेफरेंस नंबर से स्टेटस देखें और सुनवाई के नोटिस का इंतज़ार करें।",
        "फॉर्म नहीं दिया था तो अब भी <strong>फॉर्म 6</strong> भर सकते हैं (<a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>, ECINET ऐप या BLO)। पर समय सीमा के बाद दिया फॉर्म इस SIR की 9 नवंबर वाली अंतिम सूची में नहीं, बाद के अपडेट में जुड़ेगा।",
        "नाम में गलती है तो <strong>फॉर्म 8</strong>; किसी मृत या बाहर गए व्यक्ति का नाम हटवाना हो तो <strong>फॉर्म 7</strong>।",
        "ERO के फैसले (नाम हटाने या दावा खारिज करने) से असहमत हों तो पहली अपील ज़िला मजिस्ट्रेट (DM) / ज़िला निर्वाचन अधिकारी के पास और दूसरी अपील राज्य के मुख्य निर्वाचन अधिकारी (CEO) के पास होती है।",
      ],
      callout: {
        kind: "warn",
        html: "चुनाव आयोग के अनुसार फॉर्म 6 के साथ लगने वाला अलग घोषणा पत्र सिर्फ SIR के दौरान लागू है; SIR खत्म होने के बाद सामान्य फॉर्म 6 ही चलेगा।",
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
      href: "https://ceotelangana.nic.in/",
      title: "मुख्य निर्वाचन अधिकारी, तेलंगाना",
      note: "ड्राफ्ट/अंतिम मतदाता सूची, ताज़ा SIR कार्यक्रम",
    },
    {
      href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955",
      title: "SIR तीसरा चरण: राज्यवार कार्यक्रम (PIB, 14 मई 2026)",
    },
    { href: "https://www.eci.gov.in/", title: "भारत निर्वाचन आयोग (ECI)", note: "हेल्पलाइन 1950" },
  ],
  faq: [
    {
      q: "तेलंगाना में SIR की अंतिम वोटर लिस्ट कब आएगी?",
      a: "ताज़ा कार्यक्रम के अनुसार 9 नवंबर 2026 को। दावे-आपत्ति का निपटारा 5 नवंबर तक होना है। तारीख बदले तो CEO तेलंगाना की वेबसाइट पर देखें।",
    },
    {
      q: "क्या अब भी दावा या आपत्ति दे सकते हैं?",
      a: "SIR के दावे-आपत्ति की अवधि 7 अक्टूबर 2026 को खत्म हो गई। अब दिया गया फॉर्म 6 सामान्य तरीके से निपटेगा और नाम बाद के अपडेट में जुड़ेगा।",
    },
    {
      q: "नोटिस मिला है, क्या करूं?",
      a: "नोटिस में लिखी तारीख पर पहचान/जन्म/निवास के कागज़ ERO या BLO को दें। जवाब न देने पर नाम अंतिम सूची में नहीं आएगा। खुद न जा सकें तो परिवार का कोई वयस्क सदस्य जा सकता है।",
    },
    {
      q: "ड्राफ्ट सूची में नाम कैसे देखें?",
      a: "electoralsearch.eci.gov.in पर EPIC नंबर या नाम-विवरण से खोजें, या ceotelangana.nic.in पर विधानसभा-वार सूची देखें।",
    },
    {
      q: "शिकायत कहां करें?",
      a: "1950 पर कॉल करें, voters.eci.gov.in पर शिकायत दर्ज करें, या अपने ERO/ज़िला निर्वाचन अधिकारी कार्यालय में जाएं।",
    },
  ],
  related: [
    {
      href: "/states/telangana-voter-id-card.html",
      emoji: "🗳️",
      title: "तेलंगाना वोटर आईडी कार्ड",
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
    { href: "/states/telangana-voter-id-card.html", label: "🗳️ तेलंगाना वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "🔎 SIR क्या है" },
  ],
};
