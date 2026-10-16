import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - PIB 14.05.2026 (PRID 2260955) / ECI/PN/086/2026: Jharkhand in SIR Phase III,
//   qualifying date 01.10.2026, house-to-house 30.06-29.07.2026, draft
//   05.08.2026 (original final roll 07.10.2026).
// - Daily Pioneer (Sep 2026): claims and objections closed 30.09.2026 (after
//   extensions).
// - ThePrint / ETV Bharat (Aug 2026): draft roll 05.08.2026; about 63 lakh
//   notices for hearing; CEO: no voter removed without verification.
// - The Hans India / NewKerala (IANS, ~8-11 Oct 2026): CEO K. Ravi Kumar's
//   revised schedule: notices (non-mapping, logical discrepancies) disposed by
//   22.10.2026; document/BLO verification by 31.10.2026; Forms 6/6A/7/8
//   digitised by 31.10.2026; door-to-door for left-out eligible citizens
//   01-12.11.2026; final roll 30.11.2026 (was 19.10.2026). Draft had about 2.21
//   crore electors (2.64 crore before; 43.61 lakh not carried into the draft).
// - PIB 25.07.2026 (PRID 2289473): deletion categories; appeal to DM then CEO.
// - PIB 29.10.2025 (PRID 2183805): 1950, 1800-11-1950, Book-a-Call with BLO.
// - ceo.jharkhand.gov.in: CEO site (as in jharkhand-voter-id-card.ts).
// Left out: exact Phase III document list (not confirmed from a primary source).
export const jharkhandSirVoterList: DocGuide = {
  state: { slug: "jharkhand", hi: "झारखंड" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "झारखंड", href: "/states/jharkhand.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Jharkhand SIR Voter List 2026",
  description: "झारखंड SIR वोटर लिस्ट 2026: अंतिम सूची अब 30 नवंबर को, ड्राफ्ट सूची में नाम कैसे देखें, नोटिस मिले तो क्या करें, Form 6 और BLO की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "झारखंड SIR वोटर लिस्ट 2026: ड्राफ्ट में नाम देखें, नोटिस और अंतिम सूची की तारीख",
  lead: "झारखंड में SIR (विशेष गहन पुनरीक्षण) का <strong>तीसरा चरण अभी चल रहा है</strong>। ड्राफ्ट वोटर लिस्ट 5 अगस्त 2026 को छपी और दावे-आपत्ति 30 सितंबर को बंद हो चुके हैं। अब नोटिस और सुनवाई चल रही है, और खबरों के अनुसार CEO के संशोधित कार्यक्रम में <strong>अंतिम सूची 30 नवंबर 2026</strong> को छपेगी (पहले 19 अक्टूबर तय थी)।",
  facts: [
    ["चरण", "तीसरा (योग्यता तिथि 1 अक्टूबर 2026)"],
    ["ड्राफ्ट सूची", "5 अगस्त 2026"],
    ["अंतिम सूची", "30 नवंबर 2026 (संशोधित)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>नोटिस मिला है?</strong> झारखंड में जिनका मिलान पुरानी सूची से नहीं हुआ, उन्हें सुनवाई के नोटिस भेजे गए हैं। तय तारीख पर कागज़ों के साथ ERO/AERO के सामने जाएं या BLO को कागज़ दें।",
  sections: [
    {
      id: "tarikh",
      title: "झारखंड SIR की तारीखें",
      intro: "चुनाव आयोग के 14 मई 2026 के आदेश से झारखंड SIR के तीसरे चरण में है। बाद में तारीखें कई बार बढ़ीं; नीचे की तारीखें आयोग के कार्यक्रम और अक्टूबर 2026 की खबरों में छपे CEO के संशोधित कार्यक्रम से हैं।",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["BLO का घर-घर गणना फॉर्म", "30 जून से 29 जुलाई 2026 (ECI कार्यक्रम)"],
          ["ड्राफ्ट वोटर लिस्ट", "5 अगस्त 2026"],
          ["दावे और आपत्तियां", "30 सितंबर 2026 को बंद"],
          ["नोटिस (मिलान न होना / गड़बड़ी) का निपटारा", "22 अक्टूबर 2026 तक"],
          ["कागज़ों और BLO की घर-घर जांच", "31 अक्टूबर 2026 तक"],
          ["छूटे योग्य लोगों के लिए घर-घर जांच", "1 से 12 नवंबर 2026"],
          ["अंतिम वोटर लिस्ट", "<strong>30 नवंबर 2026</strong> (पहले 7 अक्टूबर, फिर 19 अक्टूबर तय थी)"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार ड्राफ्ट सूची में लगभग <strong>2.21 करोड़</strong> वोटर हैं, जबकि SIR से पहले लगभग 2.64 करोड़ थे। तारीखें फिर बदल सकती हैं; ताज़ा सूचना <a href=\"https://ceo.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.jharkhand.gov.in</a> पर देखें।" },
    },
    {
      id: "naam-dekhen",
      title: "ड्राफ्ट / अंतिम सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> खोलें।",
        "EPIC नंबर से, नाम-पिता का नाम-उम्र भरकर, या मोबाइल नंबर से खोजें। राज्य में <strong>झारखंड</strong> चुनें।",
        "नाम मिल जाए तो उसका भाग संख्या (Part No.) और क्रम संख्या लिख लें।",
        "पूरे बूथ की सूची (PDF) CEO झारखंड की वेबसाइट <a href=\"https://ceo.jharkhand.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceo.jharkhand.gov.in</a> पर देखी जा सकती है। BLO के पास भी छपी सूची होती है।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म और कागज़",
      list: [
        "SIR में BLO ने हर वोटर को दो प्रति में <strong>गणना फॉर्म (Enumeration Form)</strong> दिया। भरा फॉर्म BLO को दिया और दूसरी प्रति पर पावती ली गई। पावती संभालकर रखें।",
        "गणना के समय आम तौर पर कागज़ नहीं मांगे गए। पुरानी गहन पुनरीक्षण वाली सूची से जिनका या जिनके माता-पिता का मिलान हो गया, उनसे अलग कागज़ आम तौर पर नहीं मांगे जाते।",
        "जिनका मिलान नहीं हुआ या जानकारी में गड़बड़ी मिली, उन्हें <strong>नोटिस</strong> भेजा गया। नोटिस में बताए पहचान, जन्मतिथि/जन्मस्थान और निवास के कागज़ तय तारीख तक दें।",
        "कौन से कागज़ मान्य हैं, यह नोटिस में या BLO/ERO से पूछ लें। नकली कागज़ देना अपराध है।",
      ],
    },
    {
      id: "naam-nahi",
      title: "नाम नहीं है या कट गया, तो क्या करें",
      steps: [
        "दावे-आपत्ति का समय (30 सितंबर तक) निकल चुका है, फिर भी <strong>Form 6</strong> भरकर नाम जुड़वाने का आवेदन कर सकते हैं: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>, Voter Helpline/ECINET ऐप या BLO के ज़रिए।",
        "खबरों के अनुसार 1 से 12 नवंबर 2026 तक BLO उन योग्य लोगों के घर जाएंगे जिनका नाम अभी सूची में नहीं है। उस समय घर पर रहें या BLO से संपर्क करें।",
        "देर से भरे Form 6 पर नाम 30 नवंबर की अंतिम सूची में न आए तो बाद की सूची में जुड़ता है।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला मजिस्ट्रेट (DM) और फिर मुख्य निर्वाचन अधिकारी (CEO) के पास अपील कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना</strong>। हटाने से पहले जांच ज़रूरी है।" },
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
    { href: "https://ceo.jharkhand.gov.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), झारखंड", note: "SIR सूचना, वोटर लिस्ट" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "PIB: SIR तीसरे चरण का कार्यक्रम (14 मई 2026)" },
  ],
  faq: [
    { q: "झारखंड की SIR अंतिम वोटर लिस्ट कब आएगी?", a: "अक्टूबर 2026 की खबरों के अनुसार CEO के संशोधित कार्यक्रम में अंतिम सूची 30 नवंबर 2026 को छपेगी। पहले यह 7 अक्टूबर और फिर 19 अक्टूबर तय थी।" },
    { q: "दावे-आपत्ति की तारीख निकल गई, अब नाम कैसे जुड़ेगा?", a: "Form 6 अब भी भर सकते हैं (ऑनलाइन या BLO से)। 1 से 12 नवंबर तक BLO छूटे योग्य लोगों के घर जांच भी करेंगे। नाम अंतिम सूची में न आए तो बाद की सूची में जुड़ेगा।" },
    { q: "मुझे SIR का नोटिस मिला है, क्या करूं?", a: "नोटिस में लिखी तारीख पर पहचान, जन्मतिथि और निवास के कागज़ लेकर ERO/AERO के सामने जाएं या BLO को दें। खबरों के अनुसार नोटिस का निपटारा 22 अक्टूबर 2026 तक होना है।" },
    { q: "SIR में मेरा नाम क्यों कट सकता है?", a: "सिर्फ मृत्यु, स्थायी रूप से कहीं और चले जाने, दो जगह नाम होने या बार-बार जाने पर भी न मिलने पर। फैसले के खिलाफ DM और फिर CEO के पास अपील हो सकती है।" },
  ],
  related: [
    { href: "/states/jharkhand-voter-id-card.html", emoji: "🗳️", title: "झारखंड वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/jharkhand-voter-id-card.html", label: "🗳️ झारखंड वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
