import type { DocGuide } from "./types";

// Sources (checked 16 Oct 2026; news sites could not be opened directly, facts
// from search extracts of the reports named here):
// - ceomeghalaya.nic.in (home page, fetched 14 Oct 2026 for the voter-ID
//   guide): QD 01.10.2026, house-to-house 30.06-29.07.2026, draft 05.08.2026;
//   revised: claims till 18.09.2026, disposal till 17.10.2026; final roll
//   26.10.2026 (instead of 21.10.2026, originally 07.10.2026); list of 2025
//   electors not in the draft; BLO page blo.html.
// - newsonair.gov.in (30 Sep 2026): ECI extended SIR schedule for Meghalaya.
// - UNI (Aug 2026): draft had 21,69,243 electors; 1,80,402 (7.68%) excluded.
// - newsonair.gov.in (7 Oct 2026): 19,96,297 electors parked for final
//   publication; hearings done in 6,13,512 of 6,51,735 notices (94.14%).
// - UNI (12 Oct 2026): CEO says a special drive for left-out, first-time and
//   young electors is proposed after final publication.
// - PIB 25.07.2026 (PRID 2289473): deletion categories; appeal to DM/DEO then CEO.
// - PIB 29.10.2025 (PRID 2183805): 1950, 1800-11-1950, Book-a-Call with BLO.
// Left out: dates of the post-SIR special drive (not yet announced).
export const meghalayaSirVoterList: DocGuide = {
  state: { slug: "meghalaya", hi: "मेघालय" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "मेघालय", href: "/states/meghalaya.html" },
    { label: "SIR वोटर लिस्ट" },
  ],
  docHi: "SIR वोटर लिस्ट",
  title: "Meghalaya SIR Voter List 2026",
  description: "मेघालय SIR वोटर लिस्ट 2026: अंतिम सूची 26 अक्टूबर 2026 को (तय)। ड्राफ्ट सूची में नाम कैसे देखें, नाम छूटा हो तो Form 6, नोटिस, BLO और 1950।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "मेघालय SIR वोटर लिस्ट 2026: ड्राफ्ट में नाम देखें, अंतिम सूची 26 अक्टूबर",
  lead: "मेघालय में SIR (विशेष गहन पुनरीक्षण) का <strong>तीसरा चरण आखिरी दौर में है</strong>। ड्राफ्ट सूची 5 अगस्त 2026 को छपी, दावे-आपत्ति 18 सितंबर तक लिए गए और निपटारा 17 अक्टूबर तक होना है। CEO मेघालय के संशोधित कार्यक्रम के अनुसार <strong>अंतिम सूची 26 अक्टूबर 2026</strong> को छपेगी।",
  facts: [
    ["चरण", "तीसरा (योग्यता तिथि 1 अक्टूबर 2026)"],
    ["ड्राफ्ट सूची", "5 अगस्त 2026"],
    ["अंतिम सूची", "26 अक्टूबर 2026 (तय)"],
    ["हेल्पलाइन", "1950"],
  ],
  notice: "<strong>अंतिम सूची 26 अक्टूबर 2026 को:</strong> यह तारीख दो बार बढ़ी है (पहले 7 अक्टूबर, फिर 21 अक्टूबर)। सूची छपने के बाद अपना नाम ज़रूर जांचें।",
  sections: [
    {
      id: "tarikh",
      title: "मेघालय SIR की तारीखें (संशोधित)",
      intro: "CEO मेघालय की वेबसाइट के अनुसार SIR की योग्यता तिथि <strong>1 अक्टूबर 2026</strong> है:",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["BLO का घर-घर गणना फॉर्म", "30 जून से 29 जुलाई 2026"],
          ["ड्राफ्ट वोटर लिस्ट", "5 अगस्त 2026"],
          ["दावे और आपत्तियों की आखिरी तारीख", "18 सितंबर 2026 (पहले 4 सितंबर थी)"],
          ["दावे-आपत्ति और नोटिस का निपटारा", "17 अक्टूबर 2026 तक"],
          ["अंतिम वोटर लिस्ट", "<strong>26 अक्टूबर 2026</strong>"],
        ],
      },
      callout: { kind: "info", html: "खबरों के अनुसार ड्राफ्ट सूची में 21,69,243 वोटर थे और लगभग 1.8 लाख नाम ड्राफ्ट में नहीं आए। 7 अक्टूबर तक लगभग 6.5 लाख नोटिसों में से 94% की सुनवाई हो चुकी थी। ताज़ा सूचना <a href=\"https://ceomeghalaya.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceomeghalaya.nic.in</a> पर देखें।" },
    },
    {
      id: "naam-dekhen",
      title: "ड्राफ्ट / अंतिम सूची में नाम कैसे देखें",
      steps: [
        "<a href=\"https://electoralsearch.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in</a> पर EPIC नंबर, नाम-विवरण या मोबाइल नंबर से खोजें। राज्य में <strong>मेघालय</strong> चुनें।",
        "SIR 2026 की ड्राफ्ट सूची CEO मेघालय की वेबसाइट <a href=\"https://ceomeghalaya.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">ceomeghalaya.nic.in</a> पर भी है। 26 अक्टूबर के बाद अंतिम सूची भी वहीं आएगी।",
        "जिनका नाम 2025 की सूची में था पर ड्राफ्ट में नहीं है, उनकी अलग सूची भी CEO वेबसाइट पर है।",
        "नाम मिल जाए तो भाग संख्या और क्रम संख्या लिख लें।",
      ],
    },
    {
      id: "ganana-form",
      title: "गणना फॉर्म, नोटिस और कागज़",
      list: [
        "SIR में BLO ने हर वोटर को दो प्रति में <strong>गणना फॉर्म (Enumeration Form)</strong> दिया। जिनका भरा फॉर्म वापस नहीं मिला, उनका नाम आम तौर पर ड्राफ्ट में नहीं आया।",
        "पुरानी गहन पुनरीक्षण वाली सूची से जिनका या जिनके माता-पिता का मिलान हो गया, उनसे आम तौर पर अलग कागज़ नहीं मांगे जाते।",
        "जिन्हें <strong>नोटिस</strong> मिला है, वे तय तारीख पर ERO/AERO के सामने पहचान, जन्मतिथि/जन्मस्थान और निवास के कागज़ लेकर जाएं। निपटारा 17 अक्टूबर तक होना है।",
      ],
    },
    {
      id: "naam-nahi",
      title: "नाम नहीं है या कट गया, तो क्या करें",
      steps: [
        "दावे-आपत्ति की अवधि (18 सितंबर तक) बीत चुकी है, फिर भी <strong>Form 6</strong> भर सकते हैं: <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">voters.eci.gov.in</a>, Voter Helpline/ECINET ऐप या BLO के ज़रिए। तब नाम अंतिम सूची के बाद वाली सूची में जुड़ेगा।",
        "खबरों के अनुसार CEO मेघालय ने अंतिम सूची के बाद छूटे, पहली बार और युवा वोटरों के लिए <strong>विशेष अभियान</strong> का प्रस्ताव रखा है। तारीखें आने पर CEO वेबसाइट पर देखें।",
        "नाम, उम्र, फोटो या पते में गलती है तो <strong>Form 8</strong> भरें।",
        "ERO के फैसले से असहमत हों तो पहले ज़िला निर्वाचन अधिकारी (DEO) और फिर मुख्य निर्वाचन अधिकारी (CEO) के पास अपील कर सकते हैं।",
      ],
      callout: { kind: "warn", html: "PIB (25 जुलाई 2026) के अनुसार SIR में नाम सिर्फ चार कारणों से हटते हैं: <strong>मृत्यु, स्थायी रूप से कहीं और चले जाना, दो जगह नाम, या बार-बार जाने पर भी न मिलना</strong>।" },
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
        "अपने BLO की जानकारी: <a href=\"https://ceomeghalaya.nic.in/blo.html\" target=\"_blank\" rel=\"noopener nofollow\">ceomeghalaya.nic.in/blo.html</a> या <a href=\"https://electoralsearch.eci.gov.in/pollingstation\" target=\"_blank\" rel=\"noopener nofollow\">electoralsearch.eci.gov.in/pollingstation</a>",
        "ECINET ऐप में <strong>Book-a-Call with BLO</strong> से BLO को कॉल का अनुरोध भेजें।",
        "वोटर हेल्पलाइन <strong>1950</strong>, राष्ट्रीय संपर्क केंद्र <strong>1800-11-1950</strong>।",
      ],
    },
  ],
  official: [
    { href: "https://ceomeghalaya.nic.in/", title: "मुख्य निर्वाचन अधिकारी (CEO), मेघालय", note: "SIR कार्यक्रम, ड्राफ्ट सूची, BLO" },
    { href: "https://electoralsearch.eci.gov.in/", title: "वोटर लिस्ट में नाम खोजें" },
    { href: "https://voters.eci.gov.in/", title: "Voters' Service Portal (ECI)", note: "Form 6, 7, 8" },
    { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2260955", title: "PIB: SIR तीसरे चरण का कार्यक्रम (14 मई 2026)" },
  ],
  faq: [
    { q: "मेघालय में SIR की अंतिम वोटर लिस्ट कब आएगी?", a: "CEO मेघालय के संशोधित कार्यक्रम के अनुसार 26 अक्टूबर 2026 को। पहले यह 7 अक्टूबर और फिर 21 अक्टूबर तय थी।" },
    { q: "ड्राफ्ट सूची में नाम नहीं है, अब क्या करूं?", a: "दावे-आपत्ति की तारीख (18 सितंबर) निकल चुकी है, पर Form 6 अब भी भर सकते हैं। नाम अंतिम सूची के बाद वाली सूची में जुड़ेगा। अंतिम सूची के बाद विशेष अभियान का भी प्रस्ताव है।" },
    { q: "मुझे SIR का नोटिस मिला है, क्या करूं?", a: "नोटिस में लिखी तारीख पर कागज़ों के साथ ERO/AERO के सामने जाएं। निपटारा 17 अक्टूबर 2026 तक होना है।" },
    { q: "2025 की सूची में नाम था पर ड्राफ्ट में नहीं, ऐसे नाम कहां देखें?", a: "CEO मेघालय की वेबसाइट ceomeghalaya.nic.in पर ऐसे नामों की अलग सूची दी गई है।" },
  ],
  related: [
    { href: "/states/meghalaya-voter-id-card.html", emoji: "🗳️", title: "मेघालय वोटर आईडी कार्ड", text: "Form 6, Form 8, e-EPIC" },
    { href: "/service/special-intensive-revision-sir.html", emoji: "📋", title: "SIR क्या है", text: "चरण, नियम और राज्यवार स्थिति" },
    { href: "/service/e-voter-epic-download.html", emoji: "📲", title: "e-EPIC डाउनलोड", text: "डिजिटल वोटर कार्ड" },
    { href: "/service/voter-id-card.html", emoji: "🪪", title: "वोटर आईडी कार्ड", text: "सभी फॉर्म और नियम" },
  ],
  aside: [
    { href: "https://electoralsearch.eci.gov.in/", label: "🔍 सूची में नाम खोजें" },
    { href: "/states/meghalaya-voter-id-card.html", label: "🗳️ मेघालय वोटर आईडी गाइड" },
    { href: "/service/special-intensive-revision-sir.html", label: "📋 SIR की पूरी जानकारी" },
  ],
};
