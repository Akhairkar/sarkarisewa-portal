import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old "19th instalment" post (same URL). The
// 19th instalment is long past, so the title now names the next (24th)
// instalment. Overlaps with /service/pm-kisan.html (scheme guide) and
// /blog/pm-kisan-beneficiary-status-check.html (how to read the status page);
// this post takes the "instalment timeline + money not received" angle.
// Sources (checked 16 Oct 2026):
// - Scheme facts (₹6,000/year in 3 instalments of ₹2,000, e-KYC mandatory,
//   helpline 155261 / 011-24300606, toll-free 1800-115-526) reused from the
//   verified guide web/src/guides/doc/pm-kisan.ts (myScheme, pmkisan.gov.in).
// - Instalment dates: newsonair.gov.in (19th: 24 Feb 2025 from Bhagalpur;
//   20th: 2 Aug 2025 from Varanasi; 21st: 19 Nov 2025; 22nd: 13 Mar 2026 from
//   Guwahati, ~₹18,640 crore to ~9.32 crore farmers, also Aaj Tak 11.03.2026);
//   23rd: 20 Jun 2026 from Tarakeswar (Hooghly, West Bengal), ~₹18,880 crore
//   to ~9.44 crore farmers (news reports: Times Bull, India News Network
//   21.06.2026; PIB release not opened, so figures given as "about").
// - 24th: Angel One / LatestLY reports up to late Sep 2026 say no official
//   date announced; October-November is only a projection. No date given.

const PMK = '<a href="https://pmkisan.gov.in/" target="_blank" rel="noopener nofollow">pmkisan.gov.in</a>';

export const pmKisan19thInstallmentBeneficiaryStatusCheck: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "पीएम किसान किस्त स्टेटस" },
  ],
  docHi: "पीएम किसान किस्त",
  title: "पीएम किसान 24वीं किस्त: जारी होने की तिथि, DBT स्टेटस व e-KYC गाइड",
  description: "पीएम किसान की 23वीं किस्त 20 जून 2026 को आई; 24वीं की तारीख अभी घोषित नहीं। किस्त का DBT स्टेटस, e-KYC, बैंक NPCI मैपिंग और लैंड सीडिंग कैसे जांचें।",
  published: "2026-08-23",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "पीएम किसान किस्त: अब तक कौन सी किस्त आई, 24वीं कब, और पैसा न आए तो क्या करें",
  lead: "पीएम किसान की 19वीं किस्त फरवरी 2025 में आ चुकी है। अब तक की आखिरी किस्त 23वीं है, जो 20 जून 2026 को जारी हुई। 24वीं किस्त की तारीख हमारी जांच (16 अक्टूबर 2026) तक सरकार ने घोषित नहीं की थी; सोशल मीडिया पर बताई जा रही तारीखें सिर्फ अनुमान हैं। किस्त तभी आती है जब e-KYC, ज़मीन का सत्यापन (land seeding) और आधार से जुड़ा बैंक खाता तीनों ठीक हों।",
  facts: [
    ["आखिरी किस्त", "23वीं, 20 जून 2026"],
    ["अगली किस्त", "24वीं: तारीख अभी घोषित नहीं"],
    ["हर किस्त", "₹2,000 (साल में 3 किस्तें, कुल ₹6,000)"],
    ["हेल्पलाइन", "155261 / 011-24300606"],
  ],
  sections: [
    {
      id: "kist-list",
      title: "हाल की किस्तें कब आईं",
      intro: "किस्तें लगभग हर चार महीने पर आती हैं, पर हर बार की तारीख सरकार अलग से घोषित करती है। हाल की किस्तें (समाचार/आकाशवाणी की रिपोर्ट के अनुसार):",
      table: {
        head: ["किस्त", "तारीख", "ध्यान दें"],
        rows: [
          ["19वीं", "24 फरवरी 2025", "भागलपुर (बिहार) से जारी"],
          ["20वीं", "2 अगस्त 2025", "वाराणसी से जारी"],
          ["21वीं", "19 नवंबर 2025", ""],
          ["22वीं", "13 मार्च 2026", "गुवाहाटी से; लगभग 9.32 करोड़ किसानों को"],
          ["23वीं", "20 जून 2026", "तारकेश्वर (हुगली, पश्चिम बंगाल) से; लगभग 9.44 करोड़ किसानों को"],
          ["24वीं", "घोषित नहीं", "चार महीने के क्रम से अक्टूबर-नवंबर 2026 का अनुमान है, पक्की तारीख नहीं"],
        ],
      },
      callout: { kind: "warn", html: "\"24वीं किस्त इस तारीख को पक्की\" जैसे मैसेज और लिंक पर भरोसा न करें। किस्त के नाम पर OTP या पैसे मांगने वाले ठग होते हैं। तारीख सरकार की घोषणा या " + PMK + " से ही मानें।" },
    },
    {
      id: "check",
      title: "मेरी किस्त आई या नहीं: 3 जगह देखें",
      list: [
        `<strong>पोर्टल:</strong> ${PMK} पर <strong>Know Your Status</strong> में पंजीकरण संख्या डालकर हर किस्त की स्थिति देखें। पंजीकरण संख्या याद नहीं तो उसी पेज पर मोबाइल/आधार से निकालें।`,
        "<strong>बैंक:</strong> पासबुक एंट्री या बैंक SMS में PM-KISAN/DBT वाली ₹2,000 की जमा देखें।",
        "<strong>CSC या कृषि कार्यालय:</strong> खुद न देख सकें तो नज़दीकी CSC या ब्लॉक कृषि अधिकारी से स्टेटस निकलवाएं।",
      ],
      html: "स्टेटस पेज की हर लाइन का मतलब समझने के लिए: <a href=\"/blog/pm-kisan-beneficiary-status-check.html\">PM-KISAN लाभार्थी स्टेटस कैसे पढ़ें</a>।",
    },
    {
      id: "rukne-ke-karan",
      title: "किस्त रुकने के 4 आम कारण और उपाय",
      table: {
        head: ["स्टेटस में क्या दिखे", "मतलब", "क्या करें"],
        rows: [
          ["e-KYC: No / Pending", "आधार से पहचान की पुष्टि नहीं हुई", "पोर्टल या PM-KISAN ऐप पर आधार OTP से, या CSC पर अंगूठा लगाकर e-KYC करें"],
          ["Land Seeding: No", "ज़मीन का रिकॉर्ड राज्य ने सत्यापित नहीं किया", "पटवारी/लेखपाल, तहसील या ब्लॉक कृषि कार्यालय में खतौनी/ज़मीन के कागज़ के साथ संपर्क करें"],
          ["Aadhaar Bank Seeding / NPCI: No", "DBT के लिए बैंक खाता आधार से (NPCI मैपर पर) नहीं जुड़ा", "बैंक में आधार सीडिंग और DBT चालू कराएं; चाहें तो इंडिया पोस्ट पेमेंट्स बैंक में आधार से जुड़ा खाता खुलवा सकते हैं"],
          ["Payment failed / खाता बंद", "पैसा भेजा गया पर खाते में नहीं पहुंचा", "बैंक में खाता चालू कराएं (KYC पूरी करें), फिर हेल्पलाइन या कृषि कार्यालय को बताएं"],
        ],
      },
      callout: { kind: "info", html: "कमी ठीक होने के बाद पिछली रुकी किस्त कब मिलेगी, यह राज्य के सत्यापन पर निर्भर है। सुधार के बाद अगली किस्त के समय स्टेटस फिर से देखें।" },
    },
    {
      id: "ekyc",
      title: "e-KYC कैसे करें",
      steps: [
        `${PMK} खोलें और <strong>e-KYC</strong> विकल्प चुनें (या PM-KISAN मोबाइल ऐप खोलें)।`,
        "आधार नंबर डालें; आधार से जुड़े मोबाइल पर आया OTP भरें।",
        "मोबाइल आधार से नहीं जुड़ा है तो नज़दीकी CSC पर बायोमेट्रिक (अंगूठा) से e-KYC कराएं।",
        "पूरा होने के बाद Know Your Status में e-KYC के आगे Yes दिखना चाहिए।",
      ],
    },
    {
      id: "shikayat",
      title: "फिर भी पैसा न आए तो शिकायत",
      list: [
        "<strong>हेल्पलाइन:</strong> 155261 या 011-24300606; टोल-फ्री 1800-115-526।",
        "<strong>ईमेल:</strong> pmkisan-ict@gov.in",
        "<strong>पोर्टल:</strong> pmkisan.gov.in पर Help Desk / शिकायत दर्ज करें और शिकायत नंबर संभालें।",
        "<strong>ज़िले में:</strong> ब्लॉक/ज़िला कृषि अधिकारी, जो राज्य की ओर से सत्यापन करते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल", note: "Know Your Status, e-KYC, लाभार्थी सूची" },
    { href: "https://www.myscheme.gov.in/schemes/pm-kisan", title: "myScheme: PM-KISAN" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
  ],
  faq: [
    { q: "पीएम किसान की 24वीं किस्त कब आएगी?", a: "16 अक्टूबर 2026 तक सरकार ने 24वीं किस्त की तारीख घोषित नहीं की थी। पिछली किस्त 20 जून 2026 को आई थी; चार महीने के क्रम से अक्टूबर-नवंबर का अनुमान है, पर यह पक्का नहीं है।" },
    { q: "मुझे 19वीं किस्त नहीं मिली थी, क्या अब मिलेगी?", a: "यह इस पर निर्भर है कि किस्त किस कारण रुकी थी और राज्य ने आपका रिकॉर्ड कब सत्यापित किया। Know Your Status में पुरानी किस्तों की स्थिति देखें और कारण (e-KYC, land seeding, बैंक) ठीक कराकर कृषि कार्यालय से पूछें।" },
    { q: "e-KYC के बिना किस्त आएगी?", a: "नहीं। पंजीकृत किसानों के लिए e-KYC अनिवार्य है; इसके बिना किस्त रुक सकती है।" },
    { q: "स्टेटस में सब Yes है फिर भी पैसा नहीं दिखा?", a: "पहले बैंक पासबुक देखें, क्योंकि पैसा उस खाते में जाता है जो आधार से DBT के लिए जुड़ा है, यह आपका दूसरा खाता भी हो सकता है। फिर भी न मिले तो हेल्पलाइन 155261 पर बात करें।" },
    { q: "क्या किस्त की राशि बढ़कर ज़्यादा हो गई है?", a: "नहीं। हर किस्त ₹2,000 की है और साल में कुल ₹6,000 मिलते हैं। राशि बढ़ने की कोई सरकारी घोषणा हमें नहीं मिली।" },
  ],
  related: [
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान: पूरी गाइड", text: "पात्रता, पंजीकरण, दस्तावेज़" },
    { href: "/blog/pm-kisan-beneficiary-status-check.html", emoji: "🔎", title: "लाभार्थी स्टेटस कैसे पढ़ें", text: "हर लाइन का मतलब" },
    { href: "/service/farmer-id-card-agristack.html", emoji: "🪪", title: "फार्मर ID (AgriStack)", text: "किसान की डिजिटल पहचान" },
    { href: "/service/pm-kisan-maan-dhan-yojana.html", emoji: "🧓", title: "पीएम किसान मानधन", text: "किसानों को ₹3,000 मासिक पेंशन" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "e-KYC और स्टेटस में मदद" },
  ],
  aside: [
    { href: "https://pmkisan.gov.in/", label: "🌾 PM-KISAN पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
