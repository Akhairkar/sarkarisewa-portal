import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/kisan-credit-card.html (web/src/guides/doc/kisan-credit-card.ts), so
// this post takes the "how the interest subvention actually works, with a
// worked example" angle and links there for documents and the full process.
// Facts reused from kisan-credit-card.ts (checked 15 Oct 2026): MISS 7% on
// short-term crop loans up to ₹3 lakh, 1.5% subvention to lenders, 3% prompt
// repayment incentive -> effective 4%; allied activities (animal husbandry,
// fisheries) benefit up to ₹2 lakh; RBI collateral-free agri loans up to
// ₹2 lakh from 1 Jan 2025; tie-up KCC loans collateral waived up to ₹3 lakh;
// RBI KCC Directions 2026 effective for loans from 1 Jan 2027.
// Checked 16 Oct 2026 (business-standard.com, tribuneindia.com Feb 2025;
// civilsdaily.com, utkarsh.com, compass.rauias.com May 2025): Budget 2025-26
// announced raising the MISS cap to ₹5 lakh; the Cabinet (28 May 2025)
// continued MISS for FY 2025-26 with the existing structure; no confirmed
// notification of the ₹5 lakh cap or of FY 2026-27 continuation found, so both
// are described as "ask your bank". The example below is arithmetic only.

export const kisanCreditCardInterestRatesEligibilityHowToApplyMsbuoxbc0: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "KCC ब्याज दर" },
  ],
  docHi: "KCC ब्याज दर",
  title: "किसान क्रेडिट कार्ड (KCC): ब्याज दर, पात्रता और आवेदन प्रक्रिया",
  description: "KCC की ब्याज सबवेंशन असल में कैसे काम करती है, फसल किसानों के अलावा और कौन इसका इस्तेमाल कर सकता है, और बैंक से आवेदन के सटीक कदम।",
  published: "2026-08-02",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "KCC पर 4% ब्याज असल में कैसे मिलता है: सबवेंशन, समय पर चुकाना और कौन पात्र",
  lead: "किसान क्रेडिट कार्ड पर बैंक आम तौर पर <strong>7%</strong> सालाना ब्याज लेता है, क्योंकि केंद्र सरकार की संशोधित ब्याज छूट योजना (MISS) में बैंक को ₹3 लाख तक के फसल लोन पर 1.5% की भरपाई मिलती है। अगर किसान लोन <strong>समय पर चुका दे</strong>, तो सरकार 3% और छूट (प्रॉम्प्ट रीपेमेंट इंसेंटिव) देती है, और असल ब्याज <strong>4%</strong> रह जाता है। देर से चुकाने पर यह 3% नहीं मिलता। पशुपालन और मछली पालन वाले भी KCC ले सकते हैं।",
  facts: [
    ["सामान्य ब्याज", "7% (₹3 लाख तक के फसल लोन)"],
    ["समय पर चुकाने पर", "असल ब्याज 4%"],
    ["पशुपालन/मछली पालन", "छूट ₹2 लाख तक"],
    ["बिना गारंटी", "₹2 लाख तक के कृषि लोन"],
  ],
  sections: [
    {
      id: "kaise",
      title: "ब्याज छूट कैसे काम करती है",
      steps: [
        "बैंक आपको KCC पर तय सीमा तक पैसा देता है और ₹3 लाख तक के फसल लोन पर 7% ब्याज लगाता है।",
        "सरकार बैंक को 1.5% की भरपाई सीधे देती है; इसी वजह से बैंक 7% पर लोन दे पाता है।",
        "आप लोन तय तारीख तक (आम तौर पर फसल कटने के बाद, लोन लेने के एक साल के अंदर) चुका देते हैं।",
        "तब सरकार 3% प्रोत्साहन आपके लोन खाते में देती है। कुल असर: आपका ब्याज 4%।",
      ],
      callout: { kind: "warn", html: "₹3 लाख से ऊपर के हिस्से पर, और समय निकलने के बाद, बैंक अपनी सामान्य दर से ब्याज ले सकता है। अपनी चुकाने की तारीख KCC खाता खोलते समय लिखवा लें।" },
    },
    {
      id: "udaharan",
      title: "उदाहरण: ₹1 लाख का फसल लोन, एक साल",
      table: {
        head: ["स्थिति", "ब्याज दर", "एक साल का ब्याज (लगभग)"],
        rows: [
          ["समय पर पूरा चुकाया", "4%", "₹4,000"],
          ["समय पर नहीं चुकाया", "7% या बैंक की सामान्य दर", "₹7,000 या ज़्यादा"],
        ],
      },
      html: "<p>KCC एक चालू खाते (cash credit) जैसा है: ब्याज सिर्फ उतनी रकम पर लगता है जितनी निकाली और जितने दिन रखी। ज़रूरत न हो तो पूरी सीमा न निकालें।</p>",
    },
    {
      id: "kaun",
      title: "फसल किसानों के अलावा कौन KCC ले सकता है",
      list: [
        "<strong>बटाईदार, किरायेदार किसान और मौखिक पट्टेदार</strong> (बैंक खेती का कोई प्रमाण मांग सकता है)",
        "<strong>स्वयं सहायता समूह (SHG) और संयुक्त देयता समूह (JLG)</strong> के किसान",
        "<strong>पशुपालक</strong> (डेयरी, मुर्गी, बकरी पालन आदि) और <strong>मछली पालने वाले</strong>: इनके कामों पर ब्याज छूट ₹2 लाख तक",
      ],
      callout: { kind: "info", html: "कागज़, फॉर्म और पूरा आवेदन तरीका: <a href=\"/service/kisan-credit-card.html\">किसान क्रेडिट कार्ड गाइड</a>।" },
    },
    {
      id: "avedan",
      title: "आवेदन के कदम (संक्षेप में)",
      steps: [
        "जिस बैंक में खाता है, उसकी शाखा (या ग्रामीण/सहकारी बैंक) में KCC फॉर्म लें। PM-KISAN लाभार्थी <a href=\"https://pmkisan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmkisan.gov.in</a> से एक पन्ने का KCC फॉर्म डाउनलोड कर सकते हैं।",
        "आधार, फोटो, ज़मीन के कागज़ या खेती का प्रमाण और फसल की जानकारी लगाएं।",
        "बैंक ज़मीन और फसल के हिसाब से सीमा तय करके KCC खाता और RuPay कार्ड देता है।",
      ],
    },
    {
      id: "nayi-baat",
      title: "₹5 लाख की सीमा और नए नियम",
      list: [
        "बजट 2025-26 में ब्याज छूट वाले लोन की सीमा ₹3 लाख से ₹5 लाख करने की घोषणा हुई थी, पर मई 2025 में कैबिनेट ने योजना 2025-26 के लिए पुराने ढांचे के साथ जारी रखी। ₹5 लाख लागू होने की पक्की सूचना हमें नहीं मिली; अपने बैंक से पूछें।",
        "RBI के नए KCC निर्देश 2026, 1 जनवरी 2027 से लिए जाने वाले लोन पर लागू होंगे; बिना गारंटी ₹2 लाख की सीमा वही है।",
      ],
    },
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल", note: "KCC फॉर्म डाउनलोड" },
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक (KCC के नियम)" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत पोर्टल", note: "बैंक गलत गारंटी या शुल्क मांगे तो" },
  ],
  faq: [
    { q: "KCC पर 4% ब्याज कब मिलता है?", a: "जब ₹3 लाख तक का फसल लोन तय समय पर चुका दिया जाए। तब 7% में से 3% प्रोत्साहन मिलता है और असल ब्याज 4% रहता है।" },
    { q: "देर से चुकाने पर क्या होता है?", a: "3% का प्रोत्साहन नहीं मिलता, ब्याज 7% या बैंक की सामान्य दर से लग सकता है और क्रेडिट स्कोर खराब होता है।" },
    { q: "क्या पशुपालक KCC ले सकते हैं?", a: "हां। पशुपालन और मछली पालन के लिए भी KCC बनता है; इन कामों पर ब्याज छूट ₹2 लाख तक मिलती है।" },
    { q: "KCC की ब्याज छूट सीमा ₹5 लाख हुई है क्या?", a: "बजट 2025-26 में घोषणा हुई थी, पर लागू होने की पक्की सूचना नहीं मिली। अपने बैंक से मौजूदा सीमा पूछें।" },
    { q: "क्या KCC के लिए ज़मीन गिरवी रखनी पड़ती है?", a: "₹2 लाख तक के कृषि लोन पर नहीं (RBI, 1 जनवरी 2025 से)। फसल बिक्री के टाई-अप वाले KCC लोन में बैंक ₹3 लाख तक गारंटी छोड़ सकता है।" },
  ],
  related: [
    { href: "/service/kisan-credit-card.html", emoji: "💳", title: "किसान क्रेडिट कार्ड गाइड", text: "कागज़, पात्रता, आवेदन" },
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान", text: "सालाना ₹6,000 की सहायता" },
    { href: "/service/pm-fasal-bima-yojana.html", emoji: "🌧️", title: "प्रधानमंत्री फसल बीमा योजना", text: "फसल नुकसान का बीमा" },
    { href: "/service/credit-score-report.html", emoji: "📈", title: "क्रेडिट स्कोर", text: "CIBIL रिपोर्ट देखें" },
  ],
  aside: [
    { href: "/service/kisan-credit-card.html", label: "💳 पूरी KCC गाइड" },
    { href: "https://pmkisan.gov.in/", label: "🌾 PM-KISAN पोर्टल" },
  ],
};
