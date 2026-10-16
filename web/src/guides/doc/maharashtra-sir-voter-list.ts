import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - PIB 14.05.2026 (PRID 2260955) / ECI/PN/086/2026: Maharashtra in SIR Phase
//   III, qualifying date 01.10.2026.
// - Deccan Herald / ETV Bharat (4 Aug 2026): BLO house visits extended to
//   17.08.2026.
// - Free Press Journal (Aug/Sep 2026): draft roll published 31.08.2026 in all
//   288 ACs, 7,71,65,562 electors (78.86%); about 2.06 crore names not in it.
// - ETV Bharat (19 Aug 2026): earlier final roll date 04.11.2026.
// - newsonair.gov.in / ThePrint (26 Sep 2026): claims deadline 30.09 -> 12.10.2026,
//   final roll 16.11.2026.
// - Punekar News / OrissaPOST (12-13 Oct 2026): claims and objections extended
//   again, 12.10 -> 26.10.2026, at the CEO's request; notice stage and disposal
//   by 10.11.2026; final roll still 16.11.2026.
// - Deccan Chronicle / ThePrint (Oct 2026): 6,24,054 forms received
//   31.08-04.10.2026.
// - PIB 25.07.2026 (PRID 2289473): deletion categories; appeal to DM then CEO.
// - PIB 29.10.2025 (PRID 2183805): 1950, 1800-11-1950, Book-a-Call with BLO.
// - ceoelection.maharashtra.gov.in: CEO site (as in maharashtra-voter-id-card.ts).
// Left out: exact Phase III document list; start date of enumeration.
export const maharashtraSirVoterList: DocGuide = {
  state: { slug: "maharashtra", hi: "महाराष्ट्र" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "महाराष्ट्र", href: "/states/maharashtra.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Maharashtra SIR Voter List 2026",
  description: "महाराष्ट्र SIR वोटर लिस्ट 2026: दावे-आपत्ति अब 26 अक्टूबर तक, अंतिम सूची 16 नवंबर को। ड्राफ्ट सूची में नाम देखें, Form 6 और घोषणा पत्र, BLO और 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "महाराष्ट्र SIR वोटर लिस्ट 2026: ड्राफ्ट में नाम देखें, दावे 26 अक्टूबर तक",
  lead: "महाराष्ट्र में SIR (विशेष गहन पुनरीक्षण) का <strong>तीसरा चरण अभी चल रहा है</strong>। ड्राफ्ट वोटर लिस्ट 31 अगस्त 2026 को छपी। खबरों के अनुसार दावे और आपत्तियां अब <strong>26 अक्टूबर 2026 तक</strong> दी जा सकती हैं और <strong>अंतिम सूची 16 नवंबर 2026</strong> को छपेगी। ड्राफ्ट में नाम नहीं है तो 26 अक्टूबर से पहले Form 6 और घोषणा पत्र जमा करें।",
  facts: [
    ["चरण", "तीसरा (योग्यता तिथि 1 अक्टूबर 2026)"],
    ["दावे-आपत्ति", "26 अक्टूबर 2026 तक"],
    ["अंतिम सूची", "16 नवंबर 2026 (तय)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>अभी समय है:</strong> महाराष्ट्र में दावे-आपत्ति की आखिरी तारीख दो बार बढ़कर <strong>26 अक्टूबर 2026</strong> हुई है। ड्राफ्ट सूची में अपना और परिवार का नाम आज ही जांचें।",
  sections: [
    {
      id: "tarikh",
      title: "महाराष्ट्र SIR की तारीखें",
      intro: "चुनाव आयोग के 14 मई 2026 के आदेश से महाराष्ट्र SIR के तीसरे चरण में है। तारीखें कई बार बदलीं; नीचे की तारीखें आकाशवाणी (26 सितंबर 2026) और अक्टूबर 2026 की खबरों के अनुसार हैं।",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["BLO का घर-घर गणना फॉर्म", "17 अगस्त 2026 तक (बढ़ाई गई)"],
          ["ड्राफ्ट वोटर लिस्ट", "31 अगस्त 2026 (सभी 288 विधानसभा क्षेत्र)"],
          ["दावे और आपत्तियां", "<strong>26 अक्टूबर 2026 तक</strong> (पहले 30 सितंबर, फिर 12 अक्टूबर थी)"],
          ["नोटिस, सुनवाई और निपटारा", "10 नवंबर 2026 तक"],
          ["अंतिम वोटर लिस्ट", "<strong>16 नवंबर 2026</strong> (पहले 4 नवंबर तय थी)"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार ड्राफ्ट सूची में <strong>7,71,65,562</strong> वोटर (पुरानी सूची के लगभग 78.86%) हैं, यानी लगभग 2 करोड़ नाम ड्राफ्ट में नहीं आए। तारीखें फिर बदल सकती हैं; ताज़ा सूचना <a href=\"https://ceoelection.maharashtra.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoelection.maharashtra.gov.in</a> पर देखें।" },
    },
    {
      id: "naam-dekhen",
      title: "ड्राफ्ट सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC नंबर से, नाम-पिता का नाम-उम्र भरकर, या मोबाइल नंबर से खोजें। राज्य में <strong>महाराष्ट्र</strong> चुनें।",
        "CEO महाराष्ट्र की वेबसाइट <a href=\"https://ceoelection.maharashtra.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceoelection.maharashtra.gov.in</a> पर भी नाम-विवरण से ड्राफ्ट सूची में खोज सकते हैं।",
        "नाम मिल जाए तो भाग संख्या (Part No.) और क्रम संख्या लिख लें। परिवार के हर सदस्य का नाम अलग से जांचें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म और कागज़",
      list: [
        "SIR में BLO ने हर वोटर को दो प्रति में <strong>गणना फॉर्म (Enumeration Form)</strong> दिया। जिनका भरा फॉर्म वापस नहीं मिला, उनका नाम आम तौर पर ड्राफ्ट में नहीं आया।",
        "पुरानी गहन पुनरीक्षण वाली सूची से जिनका या जिनके माता-पिता का मिलान हो गया, उनसे आम तौर पर अलग कागज़ नहीं मांगे जाते।",
        "जिनका मिलान नहीं हुआ, उन्हें ERO <strong>नोटिस</strong> भेजता है। नोटिस में बताए पहचान, जन्मतिथि/जन्मस्थान और निवास के कागज़ तय तारीख पर दें।",
        "कौन से कागज़ मान्य हैं, यह नोटिस में या BLO/ERO से पूछ लें। नकली कागज़ देना अपराध है।",
      ],
    },
    {
      id: "naam-nahi",
      title: "ड्राफ्ट में नाम नहीं है, तो क्या करें",
      steps: [
        "<strong>26 अक्टूबर 2026 से पहले</strong> <strong>Form 6</strong> और उसके साथ तय <strong>घोषणा पत्र (Declaration)</strong> भरें: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>, Voter Helpline/ECINET ऐप पर, या BLO को देकर।",
        "आवेदन का Reference Number या BLO की पावती संभालकर रखें।",
        "किसी गलत नाम (मृत, हमेशा के लिए कहीं और गए, दो जगह दर्ज) पर आपत्ति के लिए <strong>Form 7</strong> और अपने नाम-पते की गलती के लिए <strong>Form 8</strong> भरें।",
        "26 अक्टूबर के बाद भी Form 6 भर सकते हैं, पर तब नाम 16 नवंबर की अंतिम सूची में नहीं, बाद की सूची में जुड़ेगा।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला मजिस्ट्रेट (DM) और फिर मुख्य निर्वाचन अधिकारी (CEO) के पास अपील कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना</strong>। हटाने से पहले BLO की जांच ज़रूरी है।" },
    },
    {
      id: "savdhani",
      title: "सावधानियां",
      list: [
        "SIR, गणना फॉर्म या Form 6/7/8 की <strong>कोई फीस नहीं</strong> है।",
        "BLO खुद आपके घर आता है। BLO की पहचान पूछें; शक हो तो 1950 पर पुष्टि करें।",
        "मोबाइल पर आया <strong>OTP किसी को न बताएं</strong>।",
        "\"नाम कट जाएगा\" कहकर पैसे मांगने वालों से बचें और शिकायत करें।",
      ],
    },
    {
      id: "madad",
      title: "BLO और हेल्पलाइन",
      list: [
        "अपना बूथ और BLO: <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a>",
        "ECINET ऐप में <strong>Book-a-Call with BLO</strong> से BLO को कॉल का अनुरोध भेजें।",
        "वोटर हेल्पलाइन <strong>1950</strong> (STD कोड के साथ), राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong>।",
      ],
    },
  ],
  official: [
    { href: "https://ceoelection.maharashtra.gov.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), महाराष्ट्र", note: "SIR सूचना, ड्राफ्ट सूची में नाम खोज" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "PIB: SIR तीसरे चरण का कार्यक्रम (14 मई 2026)" },
  ],
  faq: [
    { q: "महाराष्ट्र में SIR के दावे-आपत्ति की आखिरी तारीख क्या है?", a: "अक्टूबर 2026 की खबरों के अनुसार आयोग ने इसे 12 अक्टूबर से बढ़ाकर 26 अक्टूबर 2026 कर दिया है। पहले यह 30 सितंबर थी।" },
    { q: "महाराष्ट्र की SIR अंतिम वोटर लिस्ट कब आएगी?", a: "16 नवंबर 2026 को (तय)। नोटिस और निपटारे का काम 10 नवंबर तक पूरा होना है।" },
    { q: "ड्राफ्ट सूची में नाम नहीं है, क्या करूं?", a: "26 अक्टूबर से पहले Form 6 और घोषणा पत्र voters.eci.gov.in, ऐप या BLO के ज़रिए जमा करें, ताकि नाम अंतिम सूची में आ सके।" },
    { q: "मुझे SIR का नोटिस मिला है, क्या करूं?", a: "नोटिस में लिखी तारीख पर पहचान, जन्मतिथि और निवास के कागज़ लेकर ERO/AERO के सामने जाएं या BLO को दें।" },
  ],
  related: [
    { href: "/states/maharashtra-voter-id-card.html", emoji: "🗳️", title: "महाराष्ट्र वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", label: "📝 Form 6 भरें" },
    { href: "/states/maharashtra-voter-id-card.html", label: "🗳️ महाराष्ट्र वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
