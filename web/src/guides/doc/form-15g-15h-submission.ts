import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Income Tax Department Form 121 and its FAQ
// (incometaxindia.gov.in/documents/d/guest/fn-121 and .../form-121-faqs, as
// shown in search extracts; the site blocks direct access from here):
// Form 121 under section 393(6) of the Income-tax Act, 2025 read with
// Rule 211 of the Income-tax Rules, 2026 replaces Forms 15G and 15H from
// 1 April 2026; resident individuals of any age and HUFs; not companies,
// firms or non-residents; PAN mandatory; below 60: nil tax on estimated
// total income AND aggregate of the declared income within the maximum
// amount not chargeable to tax; 60+: nil tax only; separate declaration to
// each payer; payer allots a UIN and reports it in TDS statements. Banks'
// own Form 121 (e.g. DBS, Union Bank, Central Bank, post office). Rebate
// section numbers under the 2025 Act are not quoted. Title updated because
// the old forms no longer apply from tax year 2026-27.
export const form15g15hSubmission: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "फॉर्म 15G/15H (अब फॉर्म 121)" },
  ],
  docHi: "फॉर्म 15G/15H (फॉर्म 121)",
  title: "फॉर्म 15G / 15H अब फॉर्म 121 (TDS Zero Deduction)",
  description: "1 अप्रैल 2026 से फॉर्म 15G और 15H की जगह एक ही फॉर्म 121 आया है। FD/RD ब्याज पर TDS न कटवाने के लिए कौन भर सकता है, शर्तें, कहां जमा करें और आम गलतियां।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "फॉर्म 15G / 15H अब फॉर्म 121: FD ब्याज पर TDS न कटवाने का नया फॉर्म",
  lead: "नया आयकर अधिनियम 2025 और आयकर नियम 2026 लागू होने के बाद <strong>1 अप्रैल 2026 से फॉर्म 15G और 15H की जगह एक ही फॉर्म 121</strong> आ गया है। जिस निवासी व्यक्ति की साल भर की आय पर टैक्स शून्य बनता है, वह बैंक/डाकघर को फॉर्म 121 देकर ब्याज पर TDS न कटवाने का अनुरोध कर सकता है। 60 साल से कम उम्र वालों के लिए एक अतिरिक्त शर्त है; PAN ज़रूरी है।",
  facts: [
    ["नया फॉर्म", "फॉर्म 121 (15G और 15H की जगह)"],
    ["कब से", "1 अप्रैल 2026 (टैक्स वर्ष 2026-27)"],
    ["कौन भर सकता है", "निवासी व्यक्ति (हर उम्र) और HUF"],
    ["ज़रूरी", "PAN; हर भुगतानकर्ता को अलग फॉर्म"],
  ],
  notice: "पुराने 15G/15H सिर्फ 31 मार्च 2026 तक की अवधि के लिए थे। टैक्स वर्ष 2026-27 से बैंक फॉर्म 121 मांगेंगे; अपने बैंक/डाकघर से नया फॉर्म लें।",
  sections: [
    {
      id: "kaun",
      title: "कौन फॉर्म 121 भर सकता है",
      table: {
        head: ["कौन", "शर्त"],
        rows: [
          ["60 साल से कम उम्र का निवासी व्यक्ति, HUF", "(1) पूरे साल की अनुमानित कुल आय पर टैक्स शून्य हो, और (2) जिस आय के लिए फॉर्म दे रहे हैं उसका कुल जोड़ टैक्स-मुक्त अधिकतम सीमा (बेसिक छूट सीमा) से ज़्यादा न हो"],
          ["60 साल या ज़्यादा उम्र का निवासी व्यक्ति", "पूरे साल की अनुमानित कुल आय पर टैक्स शून्य हो"],
          ["कंपनी, फर्म, अनिवासी (NRI)", "फॉर्म 121 नहीं भर सकते"],
        ],
      },
      callout: { kind: "warn", html: "जिसकी आय पर टैक्स बनता है, वह फॉर्म 121 न भरे। गलत घोषणा कानून के तहत दंडनीय है, और बाद में टैक्स ब्याज सहित भरना पड़ सकता है।" },
    },
    {
      id: "kahan",
      title: "किस आय पर काम आता है",
      list: [
        "बैंक, डाकघर या सहकारी बैंक की FD/RD का ब्याज",
        "कंपनी के डिविडेंड, म्यूचुअल फंड यूनिट से आय, किराया जैसी कुछ आय, जहां भुगतानकर्ता TDS काटता है",
        "PF निकासी पर TDS के कुछ मामले (EPFO के नियम देखें)",
      ],
    },
    {
      id: "kaise",
      title: "फॉर्म 121 कैसे जमा करें",
      steps: [
        "जिस बैंक/डाकघर/कंपनी से ब्याज या आय मिलती है, उसी को फॉर्म दें। हर भुगतानकर्ता को <strong>अलग फॉर्म</strong> देना होता है।",
        "कई बैंक नेट बैंकिंग/ऐप में फॉर्म 121 ऑनलाइन जमा करने की सुविधा देते हैं; नहीं तो शाखा से फॉर्म लेकर भरें।",
        "PAN, नाम, पता, उम्र, अनुमानित कुल आय और जिस आय के लिए फॉर्म दे रहे हैं उसका विवरण भरें।",
        "<strong>साल की शुरुआत में ही</strong> जमा करें, क्योंकि TDS ब्याज जमा होते समय कटता है। फॉर्म हर टैक्स वर्ष के लिए नया देना होता है।",
        "भुगतानकर्ता आपके फॉर्म को एक पहचान संख्या (UIN) देता है; पावती संभालें।",
      ],
      callout: { kind: "ok", html: "TDS कट गया हो तो चिंता न करें: आयकर रिटर्न भरकर रिफंड लिया जा सकता है। देखें <a href=\"/service/tds-refund-status.html\">TDS रिफंड स्टेटस</a> और <a href=\"/service/income-tax-return-filing.html\">ITR फाइलिंग</a>।" },
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "<strong>PAN नहीं दिया:</strong> बिना PAN के फॉर्म मान्य नहीं होता और ऊंची दर से TDS कट सकता है।",
        "<strong>सिर्फ एक शाखा में दिया:</strong> दूसरे बैंक या उसी बैंक की दूसरी जमा पर भी ज़रूरत हो तो वहां भी दें।",
        "<strong>आय छिपाई:</strong> दूसरी आय (पेंशन, किराया) जोड़कर ही अनुमानित कुल आय भरें।",
        "<strong>पुराना फॉर्म:</strong> 2026-27 से 15G/15H की जगह फॉर्म 121 ही दें।",
      ],
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/iec/foportal/", title: "आयकर ई-फाइलिंग पोर्टल", note: "रिटर्न, 26AS/AIS, रिफंड" },
    { href: "https://www.incometaxindia.gov.in/", title: "आयकर विभाग", note: "फॉर्म 121 और FAQ" },
  ],
  faq: [
    { q: "क्या फॉर्म 15G और 15H बंद हो गए?", a: "हां, 1 अप्रैल 2026 से आयकर अधिनियम 2025 और आयकर नियम 2026 के तहत दोनों की जगह एक ही फॉर्म 121 है। पुराने फॉर्म पिछले वर्षों के लिए थे।" },
    { q: "फॉर्म 121 कौन भर सकता है?", a: "निवासी व्यक्ति (किसी भी उम्र के) और HUF, जिनकी अनुमानित कुल आय पर टैक्स शून्य है। 60 से कम उम्र वालों के लिए घोषित आय का जोड़ बेसिक छूट सीमा के अंदर होना भी ज़रूरी है। कंपनी, फर्म और NRI नहीं भर सकते।" },
    { q: "वरिष्ठ नागरिक के लिए क्या शर्त है?", a: "60 साल या ज़्यादा उम्र वालों के लिए सिर्फ यह शर्त है कि पूरे साल की अनुमानित आय पर टैक्स शून्य बने।" },
    { q: "फॉर्म 121 कहां जमा करें?", a: "उसी बैंक/डाकघर/कंपनी को जो आपको ब्याज या आय देती है। हर भुगतानकर्ता को अलग फॉर्म दें; कई बैंक इसे नेट बैंकिंग से भी लेते हैं।" },
    { q: "TDS कट गया, अब क्या करें?", a: "आयकर रिटर्न भरें; ज़्यादा कटा TDS रिफंड के रूप में वापस मिल जाता है।" },
  ],
  related: [
    { href: "/service/form16-form26as.html", emoji: "📄", title: "फॉर्म 16 / 26AS", text: "TDS प्रमाण पत्र और टैक्स क्रेडिट" },
    { href: "/service/tds-refund-status.html", emoji: "💸", title: "TDS रिफंड स्टेटस", text: "रिफंड कब आएगा" },
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "रिटर्न भरने की जानकारी" },
    { href: "/service/ais-annual-information-statement.html", emoji: "📊", title: "AIS", text: "ब्याज और TDS का विवरण" },
    { href: "/tools/income-tax-calculator.html", emoji: "🧮", title: "इनकम टैक्स कैलकुलेटर", text: "टैक्स शून्य है या नहीं" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/iec/foportal/", label: "🧾 आयकर पोर्टल" },
    { href: "/tools/income-tax-calculator.html", label: "🧮 टैक्स कैलकुलेटर" },
  ],
};
