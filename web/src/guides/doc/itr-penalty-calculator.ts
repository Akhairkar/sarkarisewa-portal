import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; incometax.gov.in not opened from the
// sandbox, search extracts used): bankbazaar.com, kissht.com, tax2win.in,
// patronaccounting.com, taxheal.com (AY 2026-27: due date 31 July 2026 for
// individuals/HUF without audit; belated return u/s 139(4) up to 31 Dec 2026;
// s.234F fee ₹5,000, ₹1,000 where total income does not exceed ₹5 lakh; s.234A
// interest on unpaid tax; loss carry-forward restrictions on late returns;
// ITR-U), angelone.in, studycafe.in, careerindia.com (CBDT press release
// 28.09.2026: audit-case ITR due date extended from 31 Oct to 21 Nov 2026,
// tax audit report to 21 Oct 2026; transfer pricing cases 30 Nov 2026).
// Rate of s.234A interest (1% per month or part) is from the Income-tax Act,
// 1961. Non-audit business due dates (31 Aug per some sources) and the
// revised-return deadline differed between sources and were left general.
// The old service page was not a calculator; our calculator is at
// /tools/itr-penalty-calculator.html.
export const itrPenaltyCalculator: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "ITR लेट फीस" },
  ],
  docHi: "ITR लेट फीस",
  title: "ITR लेट फाइलिंग पेनल्टी कैलकुलेटर 2026",
  description: "देर से ITR भरने पर धारा 234F की लेट फीस (₹1,000 या ₹5,000) और 234A का ब्याज कितना लगता है। AY 2026-27 की तारीखें, बिलेटेड रिटर्न 31 दिसंबर 2026 तक और हमारा कैलकुलेटर।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ITR देर से भरने पर पेनल्टी 2026: धारा 234F लेट फीस, 234A ब्याज और आखिरी तारीख",
  lead: "आयकर रिटर्न तय तारीख के बाद भरने पर धारा 234F के तहत लेट फीस लगती है: कुल आय ₹5 लाख तक हो तो ₹1,000, उससे ज़्यादा हो तो ₹5,000। अगर टैक्स बाकी है तो धारा 234A में हर महीने 1% ब्याज अलग से लगता है। वित्त वर्ष 2025-26 (AY 2026-27) का बिलेटेड रिटर्न 31 दिसंबर 2026 तक भरा जा सकता है।",
  facts: [
    ["लेट फीस (234F)", "₹1,000 (आय ₹5 लाख तक) / ₹5,000"],
    ["ब्याज (234A)", "बाकी टैक्स पर 1% प्रति माह"],
    ["सामान्य आखिरी तारीख", "31 जुलाई 2026 (बिना ऑडिट वाले व्यक्ति)"],
    ["बिलेटेड रिटर्न", "31 दिसंबर 2026 तक"],
  ],
  notice: "अपनी फीस और ब्याज का अनुमान लगाने के लिए हमारा <a href=\"/tools/itr-penalty-calculator.html\">ITR लेट फीस कैलकुलेटर</a> इस्तेमाल करें। अंतिम राशि ई-फाइलिंग पोर्टल पर रिटर्न भरते समय ही तय होती है।",
  sections: [
    {
      id: "tarikh",
      title: "AY 2026-27 (वित्त वर्ष 2025-26) की तारीखें",
      table: {
        head: ["किसके लिए", "आखिरी तारीख"],
        rows: [
          ["वेतनभोगी, पेंशनर और बिना ऑडिट वाले व्यक्ति/HUF", "31 जुलाई 2026"],
          ["जिनके खातों का ऑडिट ज़रूरी है (कंपनी, ऑडिट वाले कारोबारी)", "21 नवंबर 2026 (CBDT ने 31 अक्टूबर से बढ़ाई)"],
          ["ट्रांसफर प्राइसिंग वाले मामले", "30 नवंबर 2026"],
          ["बिलेटेड रिटर्न, धारा 139(4)", "31 दिसंबर 2026"],
        ],
      },
      callout: { kind: "info", html: "बिना ऑडिट वाले कारोबार/पेशे के रिटर्न (ITR-3, ITR-4) की तारीख पर अलग-अलग स्रोतों में फर्क मिला। अपनी तारीख <a href=\"https://www.incometax.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">incometax.gov.in</a> पर जांचें।" },
    },
    {
      id: "234f",
      title: "धारा 234F: लेट फीस कितनी",
      table: {
        head: ["स्थिति", "लेट फीस"],
        rows: [
          ["कुल आय ₹5 लाख तक", "₹1,000"],
          ["कुल आय ₹5 लाख से ज़्यादा", "₹5,000"],
          ["आय मूल छूट सीमा से कम और रिटर्न भरना ज़रूरी नहीं था", "आम तौर पर कोई लेट फीस नहीं"],
        ],
      },
      intro: "यह फीस तय तारीख के बाद रिटर्न भरने पर लगती है, चाहे टैक्स बाकी हो या न हो। रिटर्न जमा करने से पहले यह फीस चालान से भरनी होती है।",
    },
    {
      id: "234a",
      title: "धारा 234A: ब्याज",
      list: [
        "अगर रिटर्न देर से भरा और <strong>टैक्स बाकी</strong> है, तो बाकी टैक्स पर <strong>1% प्रति माह</strong> (महीने का हिस्सा भी पूरा महीना गिना जाता है) ब्याज लगता है।",
        "ब्याज तय तारीख के अगले दिन से रिटर्न भरने की तारीख तक गिना जाता है।",
        "TDS या एडवांस टैक्स से पूरा टैक्स पहले ही कट चुका है, तो 234A का ब्याज नहीं बनता; सिर्फ 234F की फीस लगती है।",
        "एडवांस टैक्स कम भरने पर धारा 234B और 234C का ब्याज अलग से लग सकता है।",
      ],
    },
    {
      id: "nuksan",
      title: "देर से रिटर्न के दूसरे नुकसान",
      list: [
        "कारोबार या पूंजीगत लाभ (कैपिटल गेन) का घाटा अगले साल आगे नहीं ले जा सकते (मकान की संपत्ति के घाटे के अलावा)।",
        "रिफंड बनता है तो मिलता है, पर देर से प्रोसेस होता है।",
        "31 दिसंबर 2026 के बाद बिलेटेड रिटर्न नहीं भर सकते; तब सिर्फ शर्तों के साथ अपडेटेड रिटर्न (ITR-U) का रास्ता बचता है, जिसमें अतिरिक्त टैक्स देना होता है।",
      ],
    },
    {
      id: "kaise",
      title: "बिलेटेड रिटर्न कैसे भरें",
      steps: [
        "<a href=\"https://www.incometax.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">incometax.gov.in</a> पर PAN से लॉगिन करें।",
        "e-Pay Tax में जाकर लेट फीस (और बाकी टैक्स व ब्याज) का चालान भरें।",
        "File Income Tax Return में AY 2026-27 चुनें और फाइलिंग सेक्शन में <strong>139(4) Belated</strong> चुनें।",
        "चालान की जानकारी रिटर्न में भरें, रिटर्न जमा करें और आधार OTP से ई-वेरिफाई करें।",
      ],
      callout: { kind: "warn", html: "ई-वेरिफिकेशन 30 दिन के अंदर न किया तो रिटर्न देर से भरा माना जा सकता है। रिटर्न भरते ही वेरिफाई कर दें।" },
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/", title: "आयकर ई-फाइलिंग पोर्टल", note: "रिटर्न, चालान और स्टेटस" },
    { href: "https://incometaxindia.gov.in/", title: "आयकर विभाग: कानून, नियम और प्रेस रिलीज़" },
  ],
  faq: [
    { q: "ITR देर से भरने पर कितनी पेनल्टी लगती है?", a: "धारा 234F में लेट फीस: कुल आय ₹5 लाख तक हो तो ₹1,000, ज़्यादा हो तो ₹5,000। टैक्स बाकी हो तो 234A में 1% प्रति माह ब्याज अलग से।" },
    { q: "AY 2026-27 का बिलेटेड रिटर्न कब तक भर सकते हैं?", a: "31 दिसंबर 2026 तक, धारा 139(4) के तहत, लेट फीस के साथ।" },
    { q: "मेरी आय टैक्स छूट सीमा से कम है, क्या लेट फीस लगेगी?", a: "अगर आपके लिए रिटर्न भरना ज़रूरी नहीं था तो आम तौर पर 234F की फीस नहीं लगती। पोर्टल रिटर्न भरते समय फीस की गणना दिखाता है।" },
    { q: "ऑडिट वाले मामलों की आखिरी तारीख क्या है?", a: "CBDT ने 28 सितंबर 2026 की प्रेस रिलीज़ से AY 2026-27 के ऑडिट वाले मामलों की ITR तारीख 31 अक्टूबर से बढ़ाकर 21 नवंबर 2026 कर दी।" },
    { q: "क्या देर से रिटर्न भरने पर रिफंड मिलेगा?", a: "हां, बिलेटेड रिटर्न पर भी रिफंड मिलता है, पर कुछ घाटे आगे नहीं ले जा सकते।" },
  ],
  related: [
    { href: "/tools/itr-penalty-calculator.html", emoji: "🧮", title: "ITR लेट फीस कैलकुलेटर", text: "फीस और ब्याज का अनुमान" },
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "रिटर्न कैसे भरें" },
    { href: "/service/ais-annual-information-statement.html", emoji: "📊", title: "AIS", text: "आय और TDS की जानकारी" },
    { href: "/service/form16-form26as.html", emoji: "📄", title: "फॉर्म 16 / 26AS", text: "TDS का प्रमाण" },
    { href: "/service/tds-refund-status.html", emoji: "💸", title: "रिफंड स्टेटस", text: "रिफंड कहां अटका है" },
    { href: "/tools/income-tax-calculator.html", emoji: "💰", title: "इनकम टैक्स कैलकुलेटर", text: "टैक्स का अनुमान" },
  ],
  aside: [
    { href: "/tools/itr-penalty-calculator.html", label: "🧮 लेट फीस कैलकुलेटर" },
    { href: "https://www.incometax.gov.in/", label: "📊 ई-फाइलिंग पोर्टल" },
  ],
};
