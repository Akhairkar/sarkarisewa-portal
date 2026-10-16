import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - ECI/PN/086/2026 (14 May 2026; PIB PRID 2260955): Nagaland QD 01.10.2026,
//   notice phase to 18.11.2026, final roll 22.11.2026.
// - ceo.nagaland.gov.in (home, /sir_2026, know-your-blo; fetched 14 Oct 2026
//   for the voter-ID guide): 1950; SIR draft roll 2026; list of 2025 electors
//   not in the draft; district helpdesk numbers.
// - CEO Nagaland press note 20.09.2026: enumeration 16.08-14.09.2026; claims
//   and objections 20.09-20.10.2026 with Form 6 + prescribed Declaration;
//   multiple entries retained at one place only.
// - Morung Express / ThePrint (Sep 2026): draft roll about 12 lakh electors
//   (pre-SIR 13,57,208); 1,57,752 flagged absent/shifted/dead/duplicate, not
//   automatically final deletions; claims on Forms 6, 7, 8 via BLO/AERO/ERO or
//   voters.eci.gov.in / ECINET; those turning 18 by 01.10.2026 can apply.
//   (One DPRO notice gives the claims start as 29.09; end date 20.10 agreed.)
// - PIB 25.07.2026 (PRID 2289473): deletion categories; appeal to DM/DEO then CEO.
// - PIB 29.10.2025 (PRID 2183805): 1800-11-1950, Book-a-Call with BLO.
// Left out: exact list of documents for notices.
export const nagalandSirVoterList: DocGuide = {
  state: { slug: "nagaland", hi: "नागालैंड" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नागालैंड", href: "/states/nagaland.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Nagaland SIR Voter List 2026",
  description: "नागालैंड SIR वोटर लिस्ट 2026: दावे-आपत्ति 20 अक्टूबर तक, अंतिम सूची 22 नवंबर को। ड्राफ्ट सूची में नाम देखें, Form 6 और घोषणा पत्र, Know Your BLO, 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "नागालैंड SIR वोटर लिस्ट 2026: ड्राफ्ट में नाम देखें, दावे 20 अक्टूबर तक",
  lead: "नागालैंड में SIR (विशेष गहन पुनरीक्षण) का <strong>तीसरा चरण अभी चल रहा है</strong>। ड्राफ्ट वोटर लिस्ट 20 सितंबर 2026 को छपी और <strong>दावे-आपत्ति 20 अक्टूबर 2026 तक</strong> दिए जा सकते हैं। आयोग के कार्यक्रम में <strong>अंतिम सूची 22 नवंबर 2026</strong> को है। ड्राफ्ट में नाम नहीं है तो 20 अक्टूबर से पहले Form 6 और घोषणा पत्र जमा करें।",
  facts: [
    ["चरण", "तीसरा (योग्यता तिथि 1 अक्टूबर 2026)"],
    ["दावे-आपत्ति", "20 अक्टूबर 2026 तक"],
    ["अंतिम सूची", "22 नवंबर 2026 (तय)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>आखिरी मौका:</strong> नागालैंड में दावे और आपत्तियां <strong>20 अक्टूबर 2026</strong> तक ही दी जा सकती हैं। ड्राफ्ट सूची में अपना और परिवार का नाम आज ही जांचें।",
  sections: [
    {
      id: "tarikh",
      title: "नागालैंड SIR की तारीखें",
      intro: "ECI के 14 मई 2026 के प्रेस नोट और CEO नागालैंड के 20 सितंबर 2026 के प्रेस नोट के अनुसार (योग्यता तिथि <strong>1 अक्टूबर 2026</strong>):",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["BLO का घर-घर गणना चरण", "16 अगस्त से 14 सितंबर 2026"],
          ["ड्राफ्ट वोटर लिस्ट", "20 सितंबर 2026"],
          ["दावे और आपत्तियां", "<strong>20 सितंबर से 20 अक्टूबर 2026</strong>"],
          ["नोटिस और निपटारा", "18 नवंबर 2026 तक"],
          ["अंतिम वोटर लिस्ट", "<strong>22 नवंबर 2026</strong>"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार ड्राफ्ट सूची में लगभग 12 लाख वोटर हैं (SIR से पहले 13,57,208 थे)। लगभग 1.58 लाख वोटर अनुपस्थित, शिफ्ट, मृत या डुप्लीकेट माने गए, पर अधिकारियों के अनुसार यह अपने-आप अंतिम रूप से नाम कटना नहीं है।" },
    },
    {
      id: "naam-dekhen",
      title: "ड्राफ्ट सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर, नाम-विवरण या मोबाइल नंबर से खोजें। राज्य में <strong>नागालैंड</strong> चुनें।",
        "SIR 2026 की ड्राफ्ट सूची <a href=\"https://ceo.nagaland.gov.in/sir_2026\" target=\"_blank\" rel=\"noopener nofollow\">ceo.nagaland.gov.in/sir_2026</a> पर है।",
        "उसी पेज पर उन लोगों की सूची भी है जिनका नाम 2025 की सूची में था पर ड्राफ्ट में नहीं आया।",
        "नाम मिल जाए तो भाग संख्या और क्रम संख्या लिख लें।",
      ],
    },
    {
      id: "naam-nahi",
      title: "ड्राफ्ट में नाम नहीं है, तो क्या करें",
      steps: [
        "<strong>20 अक्टूबर 2026 से पहले</strong> <strong>Form 6</strong> और उसके साथ तय <strong>घोषणा पत्र (Declaration Form)</strong> भरें। जो समय पर गणना फॉर्म नहीं दे पाए, वे भी यही करें।",
        "फॉर्म BLO, AERO या ERO को दें, या ऑनलाइन <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a> और ECINET ऐप पर भरें।",
        "जो 1 अक्टूबर 2026 तक 18 साल के हो गए हैं, वे भी Form 6 और घोषणा पत्र से नाम जुड़वा सकते हैं।",
        "ड्राफ्ट में किसी गलत नाम पर आपत्ति के लिए <strong>Form 7</strong> और अपनी जानकारी में गलती के लिए <strong>Form 8</strong> भरें।",
        "20 अक्टूबर के बाद भी Form 6 भर सकते हैं, पर तब नाम 22 नवंबर की अंतिम सूची में नहीं, बाद की सूची में जुड़ेगा।",
      ],
      callout: { kind: "warn", html: "CEO नागालैंड के अनुसार जिनका नाम कई जगह दर्ज था, उनका नाम <strong>सिर्फ एक जगह</strong> रखा जाएगा। PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ मृत्यु, स्थायी रूप से कहीं और चले जाने, दो जगह नाम, या बार-बार जाने पर भी न मिलने पर हटते हैं। ERO के फैसले के खिलाफ DEO और फिर CEO के पास अपील हो सकती है।" },
    },
    {
      id: "notice",
      title: "नोटिस मिले तो",
      list: [
        "पुरानी गहन पुनरीक्षण वाली सूची से जिनका या जिनके माता-पिता का मिलान हो गया, उनसे आम तौर पर अलग कागज़ नहीं मांगे जाते।",
        "जिनका मिलान नहीं हुआ, उन्हें ERO नोटिस भेजता है। नोटिस में बताए पहचान, जन्मतिथि/जन्मस्थान और निवास के कागज़ तय तारीख पर दें।",
        "नोटिस और निपटारे का काम 18 नवंबर 2026 तक चलेगा।",
      ],
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
        "अपना BLO जानें: <a href=\"https://ceo.nagaland.gov.in/know-your-blo\" target=\"_blank\" rel=\"noopener nofollow\">ceo.nagaland.gov.in/know-your-blo</a> या <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a>",
        "वोटर हेल्पलाइन <strong>1950</strong> (टोल-फ्री)। CEO नागालैंड ने SIR के लिए ज़िला हेल्पडेस्क नंबरों की सूची भी वेबसाइट पर दी है।",
        "ECINET ऐप में <strong>Book-a-Call with BLO</strong> से BLO को कॉल का अनुरोध भेजें। राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong>।",
      ],
    },
  ],
  official: [
    { href: "https://ceo.nagaland.gov.in/sir_2026", title: "CEO नागालैंड: SIR 2026", note: "ड्राफ्ट सूची, छूटे नामों की सूची" },
    { href: "https://ceo.nagaland.gov.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), नागालैंड" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
  ],
  faq: [
    { q: "नागालैंड में SIR के दावे-आपत्ति की आखिरी तारीख क्या है?", a: "20 अक्टूबर 2026। इससे पहले Form 6 और घोषणा पत्र BLO/AERO/ERO को या voters.eci.gov.in पर जमा करें।" },
    { q: "नागालैंड की SIR अंतिम सूची कब आएगी?", a: "ECI कार्यक्रम के अनुसार 22 नवंबर 2026 को। नोटिस और निपटारा 18 नवंबर तक होगा।" },
    { q: "मैंने गणना फॉर्म नहीं दिया था, अब क्या करूं?", a: "20 अक्टूबर से पहले Form 6 और घोषणा पत्र भरें, ताकि नाम अंतिम सूची में आ सके।" },
    { q: "मेरा नाम दो जगह था, क्या दोनों कट जाएंगे?", a: "नहीं। CEO नागालैंड के अनुसार कई जगह दर्ज नाम सिर्फ एक जगह रखा जाएगा। जहां आप रहते हैं वहां का नाम रहे, यह BLO से पक्का कर लें।" },
  ],
  related: [
    { href: "/states/nagaland-voter-id-card.html", emoji: "🗳️", title: "नागालैंड वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", label: "📝 Form 6 भरें" },
    { href: "/states/nagaland-voter-id-card.html", label: "🗳️ नागालैंड वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
