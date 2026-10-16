import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - PIB 14.05.2026 (PRID 2260955) / ECI/PN/086/2026: Karnataka in SIR Phase
//   III, qualifying date 01.10.2026, house-to-house from 30.06.2026, original
//   final roll 07.10.2026.
// - newsonair.gov.in (15 Jul 2026): enumeration to 08.08.2026, final roll
//   19.10.2026.
// - UNI / The News Minute / Deccan Chronicle (7-11 Aug 2026): second extension:
//   enumeration to 17.08.2026, draft 24.08.2026, claims and objections
//   24.08-23.09.2026, notice phase and disposal till 22.10.2026, final roll
//   27.10.2026. No later change found in search on 16 Oct 2026.
// - ETV Bharat / Siasat / Outlook (Aug 2026): draft roll about 4.46 crore
//   electors; about 1.08 crore names not in the draft; CEO Anbukumar: rejected
//   claimants can apply again with Form 6.
// - Deccan Chronicle (Oct 2026): appeal to DM/DC within 15 days of ERO order.
// - PIB 25.07.2026 (PRID 2289473): deletion categories; appeal to DM then CEO.
// - PIB 29.10.2025 (PRID 2183805): 1950, 1800-11-1950, Book-a-Call with BLO.
// - ceo.karnataka.gov.in: CEO site (as in karnataka-voter-id-card.ts).
// Left out: exact Phase III document list (not confirmed from a primary source).
export const karnatakaSirVoterList: DocGuide = {
  state: { slug: "karnataka", hi: "कर्नाटक" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "कर्नाटक", href: "/states/karnataka.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Karnataka SIR Voter List 2026",
  description: "कर्नाटक SIR वोटर लिस्ट 2026: अंतिम सूची 27 अक्टूबर को (तय), ड्राफ्ट सूची में नाम कैसे देखें, नाम छूटा हो तो Form 6, नोटिस और BLO की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "कर्नाटक SIR वोटर लिस्ट 2026: ड्राफ्ट में नाम देखें, अंतिम सूची 27 अक्टूबर",
  lead: "कर्नाटक में SIR (विशेष गहन पुनरीक्षण) का <strong>तीसरा चरण अभी चल रहा है</strong>। ड्राफ्ट वोटर लिस्ट 24 अगस्त 2026 को छपी और दावे-आपत्ति 23 सितंबर तक लिए गए। अभी नोटिस और सुनवाई का काम 22 अक्टूबर तक चल रहा है, और अगस्त में घोषित कार्यक्रम के अनुसार <strong>अंतिम सूची 27 अक्टूबर 2026</strong> को छपेगी।",
  facts: [
    ["चरण", "तीसरा (योग्यता तिथि 1 अक्टूबर 2026)"],
    ["ड्राफ्ट सूची", "24 अगस्त 2026"],
    ["अंतिम सूची", "27 अक्टूबर 2026 (तय)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>27 अक्टूबर से पहले:</strong> ड्राफ्ट सूची में अपना और परिवार का नाम ज़रूर जांचें। नोटिस मिला हो तो तय तारीख पर कागज़ों के साथ ERO/AERO के सामने जाएं।",
  sections: [
    {
      id: "tarikh",
      title: "कर्नाटक SIR की तारीखें",
      intro: "चुनाव आयोग के 14 मई 2026 के आदेश से कर्नाटक SIR के तीसरे चरण में है। घर-घर गणना की तारीख दो बार बढ़ी (पहले 8 अगस्त, फिर 17 अगस्त)। नीचे की तारीखें अगस्त 2026 में घोषित संशोधित कार्यक्रम (खबरों के अनुसार) की हैं।",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["BLO का घर-घर गणना फॉर्म", "30 जून से 17 अगस्त 2026 (बढ़ाई गई)"],
          ["ड्राफ्ट वोटर लिस्ट", "24 अगस्त 2026"],
          ["दावे और आपत्तियां", "24 अगस्त से 23 सितंबर 2026"],
          ["नोटिस, सुनवाई और निपटारा", "22 अक्टूबर 2026 तक"],
          ["अंतिम वोटर लिस्ट", "<strong>27 अक्टूबर 2026</strong> (पहले 7 अक्टूबर, फिर 19 अक्टूबर तय थी)"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार ड्राफ्ट सूची में लगभग <strong>4.46 करोड़</strong> वोटर हैं और लगभग 1.08 करोड़ नाम ड्राफ्ट में नहीं आए। तारीख फिर बदल सकती है; ताज़ा सूचना <a href=\"https://ceo.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.karnataka.gov.in</a> पर देखें।" },
    },
    {
      id: "naam-dekhen",
      title: "ड्राफ्ट / अंतिम सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC नंबर से, नाम-पिता का नाम-उम्र भरकर, या मोबाइल नंबर से खोजें। राज्य में <strong>कर्नाटक</strong> चुनें।",
        "नाम मिल जाए तो भाग संख्या (Part No.) और क्रम संख्या लिख लें।",
        "पूरे बूथ की सूची CEO कर्नाटक की वेबसाइट <a href=\"https://ceo.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.karnataka.gov.in</a> पर और BLO के पास मिलती है।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म और कागज़",
      list: [
        "SIR में BLO ने हर वोटर को दो प्रति में <strong>गणना फॉर्म (Enumeration Form)</strong> दिया। भरा फॉर्म BLO को दिया और दूसरी प्रति पर पावती ली गई। पावती संभालकर रखें।",
        "पुरानी गहन पुनरीक्षण वाली सूची से जिनका या जिनके माता-पिता का मिलान हो गया, उनसे आम तौर पर अलग कागज़ नहीं मांगे जाते।",
        "जिनका मिलान नहीं हुआ, उन्हें ERO <strong>नोटिस</strong> भेजता है। नोटिस में बताए पहचान, जन्मतिथि/जन्मस्थान और निवास के कागज़ तय तारीख तक दें।",
        "कौन से कागज़ मान्य हैं, यह नोटिस में या BLO/ERO से पूछ लें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "नाम नहीं है या कट गया, तो क्या करें",
      steps: [
        "दावे-आपत्ति की अवधि (23 सितंबर तक) बीत गई है, फिर भी <strong>Form 6</strong> भरकर नाम जुड़वाने का आवेदन कर सकते हैं: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>, Voter Helpline/ECINET ऐप या BLO के ज़रिए।",
        "खबरों के अनुसार CEO ने कहा है कि जिनका दावा खारिज हुआ, वे भी दोबारा Form 6 भर सकते हैं।",
        "देर से भरे Form 6 पर नाम 27 अक्टूबर की अंतिम सूची में न आए तो बाद की सूची में जुड़ता है।",
        "ERO के आदेश से असहमत हों तो आदेश के 15 दिन के भीतर ज़िला मजिस्ट्रेट/डिप्टी कमिश्नर के पास पहली अपील, और फिर CEO के पास दूसरी अपील कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना</strong>। किसी गलत नाम पर आपत्ति के लिए Form 7 है।" },
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
    { href: "https://ceo.karnataka.gov.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), कर्नाटक", note: "SIR सूचना, वोटर लिस्ट" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "PIB: SIR तीसरे चरण का कार्यक्रम (14 मई 2026)" },
  ],
  faq: [
    { q: "कर्नाटक की SIR अंतिम वोटर लिस्ट कब आएगी?", a: "अगस्त 2026 में घोषित संशोधित कार्यक्रम के अनुसार 27 अक्टूबर 2026 को। पहले यह 7 अक्टूबर और फिर 19 अक्टूबर तय थी। ताज़ा तारीख CEO कर्नाटक की वेबसाइट पर देखें।" },
    { q: "ड्राफ्ट सूची में नाम नहीं है, अब क्या करूं?", a: "Form 6 भरें (voters.eci.gov.in, ऐप या BLO से)। दावे-आपत्ति की अवधि बीत चुकी है, इसलिए नाम अंतिम सूची के बाद वाली सूची में जुड़ सकता है।" },
    { q: "मुझे SIR का नोटिस मिला है, क्या करूं?", a: "नोटिस में लिखी तारीख पर पहचान, जन्मतिथि और निवास के कागज़ लेकर ERO/AERO के सामने जाएं। नोटिस और निपटारे का काम 22 अक्टूबर 2026 तक है।" },
    { q: "ERO के फैसले से असहमत हूं, कहां अपील करूं?", a: "आदेश के 15 दिन के भीतर ज़िला मजिस्ट्रेट/डिप्टी कमिश्नर के पास, और उसके बाद मुख्य निर्वाचन अधिकारी (CEO) के पास।" },
  ],
  related: [
    { href: "/states/karnataka-voter-id-card.html", emoji: "🗳️", title: "कर्नाटक वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/karnataka-voter-id-card.html", label: "🗳️ कर्नाटक वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
