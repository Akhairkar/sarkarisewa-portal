import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/pm-kisan.html (scheme guide), so this post takes the "money not
// received: problems and fixes" angle and links there.
// Sources (checked 16 Oct 2026):
// - PIB release 20 Jun 2026 (static.pib.gov.in ... doc2026620898101.pdf):
//   23rd instalment released from Tarakeswar, Hooghly; over ₹18,880 crore to
//   about 9.44 crore farmers. 22nd instalment 13 Mar 2026 (news reports).
// - 24th instalment: no date announced as of late Sep 2026 (Angel One,
//   Free Press Journal); so no date is given here.
// - e-KYC mandatory, OTP on portal / biometric at CSC; Know Your Status;
//   helpline 155261 / 011-24300606, toll-free 1800-115-526,
//   pmkisan-ict@gov.in: reused from web/src/guides/doc/pm-kisan.ts.
// Old title was cut off mid-sentence ("Land Seeding,"); completed minimally.

const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
const PORTAL = ext("https://pmkisan.gov.in/", "pmkisan.gov.in");

export const pmKisanPaisaKyuNahiAayaAllProblemsSolution: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "PM Kisan पैसा क्यों नहीं आया" },
  ],
  docHi: "PM Kisan पैसा नहीं आया",
  title: "PM Kisan पैसा क्यों नहीं आया? Land Seeding, eKYC, NPCI व FTO समस्याओं का समाधान",
  description: "PM Kisan का ₹2000 क्यों नहीं आया? Land Seeding NO, e-KYC Pending, आधार-बैंक (NPCI) लिंक और FTO जैसी आम समस्याएं, उनका मतलब और ठीक करने का तरीका।",
  published: "2026-08-30",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "PM Kisan का पैसा क्यों नहीं आया? हर समस्या का मतलब और समाधान",
  lead: "PM Kisan की किस्त आमतौर पर इन चार में से किसी एक वजह से रुकती है: e-KYC अधूरी, ज़मीन का सत्यापन (Land Seeding) नहीं हुआ, बैंक खाता आधार से (NPCI पर) नहीं जुड़ा, या भुगतान बैंक में अटक गया। सबसे पहले pmkisan.gov.in पर \"Know Your Status\" खोलें; वहां जो लाइन \"No\" या \"Pending\" दिखे, उसी को ठीक करना है। 23वीं किस्त 20 जून 2026 को जारी हुई थी; 24वीं किस्त की तारीख अभी सरकार ने घोषित नहीं की है।",
  facts: [
    ["आख़िरी जारी किस्त", "23वीं, 20 जून 2026"],
    ["स्टेटस कहां देखें", `${PORTAL} → Know Your Status`],
    ["सबसे आम वजह", "e-KYC अधूरी या आधार-बैंक लिंक नहीं"],
    ["हेल्पलाइन", "155261 / 011-24300606"],
  ],
  sections: [
    {
      id: "status",
      title: "पहले स्टेटस देखें",
      steps: [
        `${PORTAL} खोलें और <strong>Know Your Status</strong> चुनें।`,
        "पंजीकरण संख्या डालें (याद नहीं तो \"Know your registration number\" से मोबाइल या आधार नंबर से निकालें)।",
        "कैप्चा और मोबाइल पर आया OTP भरें।",
        "eKYC Status, Land Seeding, Aadhaar Bank Account Seeding और किस्तवार भुगतान की स्थिति देखें। जो लाइन \"No\" दिखे, नीचे की तालिका में उसका उपाय देखें।",
      ],
      callout: { kind: "info", html: "किस्त जारी होने के दिन ही सबके खाते में पैसा नहीं पहुंचता; कुछ दिन लग सकते हैं। स्टेटस में किस्त \"processed\" दिख रही हो तो एक-दो हफ्ते बैंक खाता देखते रहें।" },
    },
    {
      id: "samasya",
      title: "कौन सी समस्या, उसका मतलब और उपाय",
      table: {
        head: ["स्टेटस में क्या दिखा", "मतलब", "क्या करें"],
        rows: [
          ["eKYC Status: No", "आधार से पहचान की पुष्टि नहीं हुई", "पोर्टल या PM-KISAN ऐप पर आधार OTP से e-KYC करें। आधार से मोबाइल नहीं जुड़ा तो CSC पर बायोमेट्रिक (अंगूठा) e-KYC कराएं।"],
          ["Land Seeding: No", "राज्य सरकार ने आपकी ज़मीन का रिकॉर्ड अभी आपके नाम से मिलाकर सत्यापित नहीं किया", "पटवारी/लेखपाल, तहसील या ब्लॉक कृषि अधिकारी के पास खतौनी/ज़मीन के कागज़ और आधार लेकर जाएं और सत्यापन कराएं। यह काम राज्य के स्तर पर होता है।"],
          ["Aadhaar Bank Account Seeding: No", "आपका बैंक खाता आधार से DBT के लिए (NPCI पर) नहीं जुड़ा", "अपने बैंक जाकर खाते में आधार जोड़ने (DBT/NPCI seeding) का फॉर्म भरें। चाहें तो डाकघर (IPPB) में आधार से जुड़ा नया खाता खुलवा सकते हैं।"],
          ["भुगतान फेल / Account invalid", "खाता बंद है, नाम मेल नहीं खाता या IFSC बदल गया", "बैंक में खाता चालू कराएं; नाम आधार जैसा कराएं। बैंक मर्ज हुआ हो तो नया IFSC पता करें।"],
          ["FTO generated / processed, पर पैसा नहीं आया", "सरकार की ओर से भुगतान का आदेश बन गया है, पैसा बैंक की प्रक्रिया में है", "कुछ दिन इंतज़ार करें, फिर पासबुक/स्टेटमेंट देखें। ज़्यादा देर हो तो स्टेटस का स्क्रीनशॉट लेकर बैंक से पूछें।"],
          ["Rejected / अपात्र", "जांच में आप अपात्र पाए गए (जैसे आयकर दाता, पेंशनर, ज़मीन न होना)", "कारण गलत लगे तो ब्लॉक कृषि अधिकारी से लिखित में पूछें। सच में अपात्र हैं तो योजना छोड़ें; गलत लिया पैसा सरकार वसूल सकती है।"],
        ],
      },
    },
    {
      id: "pichli-kist",
      title: "पिछली किस्तें भी नहीं आईं तो",
      intro: "गड़बड़ी ठीक होने के बाद रुकी हुई किस्तें मिलेंगी या नहीं, यह सरकार की जांच पर निर्भर करता है; इसकी कोई तय गारंटी नहीं है। इसलिए जैसे ही स्टेटस में \"No\" दिखे, तुरंत ठीक कराएं ताकि अगली किस्त न रुके।",
    },
    {
      id: "shikayat",
      title: "सब ठीक है फिर भी पैसा नहीं आया: शिकायत कहां करें",
      list: [
        "<strong>हेल्पलाइन:</strong> 155261 या 011-24300606; टोल-फ्री 1800-115-526।",
        "<strong>ईमेल:</strong> pmkisan-ict@gov.in (पंजीकरण संख्या, आधार के आख़िरी 4 अंक और स्टेटस का स्क्रीनशॉट लिखें)।",
        `<strong>पोर्टल पर शिकायत:</strong> ${PORTAL} पर Help Desk / Grievance विकल्प।`,
        "<strong>ब्लॉक कृषि कार्यालय:</strong> ज़मीन या नाम की गलती का सुधार वहीं से होता है।",
      ],
      callout: { kind: "warn", html: "किस्त दिलाने के नाम पर पैसे या OTP मांगने वाले फोन/लिंक से सावधान रहें। स्टेटस सिर्फ official पोर्टल या PM-KISAN ऐप पर देखें। योजना की पूरी जानकारी: <a href=\"/service/pm-kisan.html\">पीएम किसान सम्मान निधि गाइड</a>।" },
    },
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल: Know Your Status, e-KYC, शिकायत", note: "हेल्पलाइन 155261 / 011-24300606" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
  ],
  faq: [
    { q: "PM Kisan की 24वीं किस्त कब आएगी?", a: "16 अक्टूबर 2026 तक सरकार ने 24वीं किस्त की तारीख घोषित नहीं की है। किस्तें लगभग चार-चार महीने पर आती हैं; 23वीं किस्त 20 जून 2026 को आई थी। तारीख के लिए pmkisan.gov.in या PIB की घोषणा देखें।" },
    { q: "Land Seeding No का मतलब क्या है?", a: "राज्य सरकार ने आपकी ज़मीन के रिकॉर्ड का सत्यापन अभी पूरा नहीं किया है। पटवारी/तहसील या ब्लॉक कृषि अधिकारी से ज़मीन के कागज़ के साथ सत्यापन कराएं।" },
    { q: "e-KYC हो गई, फिर भी पैसा नहीं आया?", a: "स्टेटस में Land Seeding और Aadhaar Bank Account Seeding भी देखें। तीनों \"Yes\" होने पर ही भुगतान होता है।" },
    { q: "बैंक में आधार जुड़ा है, फिर NPCI seeding No क्यों?", a: "खाते में आधार KYC के लिए जुड़ा होना और DBT के लिए NPCI पर जुड़ा होना अलग बातें हैं। बैंक से साफ कहें कि DBT के लिए आधार seeding करनी है।" },
    { q: "क्या दूसरी वेबसाइट से स्टेटस देख सकते हैं?", a: "आधार और मोबाइल जैसी जानकारी सिर्फ official पोर्टल pmkisan.gov.in या PM-KISAN ऐप पर डालें।" },
  ],
  related: [
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान सम्मान निधि", text: "पात्रता, पंजीकरण, e-KYC" },
    { href: "/service/pm-kisan-maan-dhan-yojana.html", emoji: "👴", title: "पीएम किसान मानधन", text: "किसानों की ₹3,000 मासिक पेंशन" },
    { href: "/service/kisan-credit-card.html", emoji: "💳", title: "किसान क्रेडिट कार्ड", text: "सस्ता खेती लोन" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल अपडेट", text: "OTP न आए तो" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "बायोमेट्रिक e-KYC" },
  ],
  aside: [
    { href: "https://pmkisan.gov.in/", label: "🌾 PM-KISAN पोर्टल" },
    { href: "/service/pm-kisan.html", label: "📘 योजना की पूरी गाइड" },
  ],
};
