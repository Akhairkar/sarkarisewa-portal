import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB Research backgrounder "PM Vidyalaxmi
// Scheme: Promoting Educational Inclusion in India", 29 July 2026
// (static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/
// doc2026729936401.pdf): Cabinet approval 6 Nov 2024; collateral-free,
// guarantor-free loans for merit admission to 1,425 QHEIs (top 100 NIRF,
// top 200 State/UT govt HEIs in NIRF, all remaining central govt HEIs);
// no management/NRI quota; no upper cap on loan amount; 75% credit guarantee
// up to ₹7.5 lakh; 3% interest subvention on loans up to ₹10 lakh during
// moratorium for family income up to ₹8 lakh, max 1 lakh students/year; not
// with other scholarship/fee reimbursement/interest subvention; PM-USP CSIS
// full interest subvention for income up to ₹4.5 lakh (technical/professional,
// NAAC/NBA) also run via the portal; interest capped at bank EBLR + 0.5%;
// repayment up to 15 years after moratorium (course + 1 year); benefits only
// once; subsidy credited via PM Vidyalaxmi Digital Rupee (CBDC) wallet;
// portal pmvidyalaxmi.co.in; outlay ₹3,600 crore 2024-25 to 2030-31;
// FY 2025-26: 1,10,667 PM-Vidyalaxmi applications, 70,852 sanctioned.
export const pmVidyalaxmiScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम विद्यालक्ष्मी योजना" },
  ],
  docHi: "पीएम विद्यालक्ष्मी योजना",
  title: "पीएम विद्यालक्ष्मी योजना 2026",
  description: "टॉप 1,425 उच्च शिक्षा संस्थानों में मेरिट से दाखिले पर बिना गारंटी, बिना जमानत एजुकेशन लोन; ₹8 लाख तक आय पर ₹10 लाख तक के लोन पर 3% ब्याज छूट। पात्रता, पोर्टल और आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम विद्यालक्ष्मी योजना: बिना गारंटी एजुकेशन लोन और 3% ब्याज छूट",
  lead: "पीएम विद्यालक्ष्मी शिक्षा मंत्रालय की योजना है, जिसमें देश के चुने हुए 1,425 गुणवत्ता उच्च शिक्षा संस्थानों (QHEI) में अपनी मेरिट से दाखिला पाने वाले छात्र बिना जमानत (collateral) और बिना गारंटर के बैंक से एजुकेशन लोन ले सकते हैं। लोन की कोई ऊपरी सीमा नहीं है; ₹7.5 लाख तक के लोन पर सरकार बैंक को 75% गारंटी देती है। जिन परिवारों की सालाना आय ₹8 लाख तक है, उन्हें ₹10 लाख तक के लोन पर पढ़ाई के दौरान 3% ब्याज छूट मिल सकती है। आवेदन pmvidyalaxmi.co.in पोर्टल पर होता है।",
  facts: [
    ["किसके लिए", "1,425 QHEI में मेरिट से दाखिला"],
    ["लोन", "बिना जमानत, बिना गारंटर; ऊपरी सीमा नहीं"],
    ["ब्याज छूट", "आय ₹8 लाख तक: ₹10 लाख तक के लोन पर 3%"],
    ["पोर्टल", '<a href="https://pmvidyalaxmi.co.in/" target="_blank" rel="noopener nofollow">pmvidyalaxmi.co.in</a>'],
  ],
  sections: [
    {
      id: "labh",
      title: "योजना में क्या मिलता है",
      list: [
        "<strong>बिना जमानत, बिना गारंटर लोन:</strong> लोन की रकम कोर्स फीस, हॉस्टल/मेस, किताबें, ठीक-ठाक लैपटॉप और पढ़ाई के दौरान रहने के उचित खर्च के हिसाब से तय होती है। हर आय वर्ग के छात्र आवेदन कर सकते हैं।",
        "<strong>सरकारी क्रेडिट गारंटी:</strong> ₹7.5 लाख तक के लोन पर बैंक को 75% गारंटी केंद्र सरकार देती है।",
        "<strong>ब्याज की सीमा:</strong> बैंक इस लोन पर अपनी EBLR + 0.5% से ज़्यादा ब्याज नहीं ले सकता।",
        "<strong>लंबी अदायगी:</strong> कोर्स की अवधि + 1 साल की मोहलत (moratorium) के बाद 15 साल तक में लोन चुकाना।",
        "<strong>टैक्स छूट:</strong> चुकाए गए ब्याज पर आयकर की धारा 80E के तहत छूट।",
      ],
    },
    {
      id: "byaj-chhoot",
      title: "ब्याज छूट: PM-विद्यालक्ष्मी और CSIS",
      table: {
        head: ["", "PM-विद्यालक्ष्मी", "PM-USP CSIS"],
        rows: [
          ["परिवार की आय", "₹8 लाख तक", "₹4.5 लाख तक"],
          ["ब्याज छूट", "मोहलत अवधि में 3%", "मोहलत अवधि में पूरा ब्याज"],
          ["लोन जिस पर छूट", "₹10 लाख तक", "₹10 लाख तक"],
          ["कोर्स", "QHEI के सभी डिग्री/डिप्लोमा कोर्स", "मान्यता प्राप्त तकनीकी/प्रोफेशनल कोर्स"],
          ["सीमा", "हर साल 1 लाख नए छात्र", "कोई सीमा नहीं"],
        ],
      },
      callout: { kind: "warn", html: "जो छात्र कोई दूसरी केंद्र/राज्य छात्रवृत्ति, फीस प्रतिपूर्ति या ब्याज छूट योजना ले रहे हैं, उन्हें ब्याज छूट नहीं मिलती। ब्याज छूट और गारंटी जीवन में <strong>सिर्फ एक बार</strong> (UG, PG या इंटीग्रेटेड में से एक कोर्स) मिलती है।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "प्रवेश परीक्षा/मेरिट से <strong>चुने हुए QHEI</strong> में दाखिला। मैनेजमेंट कोटा या NRI कोटा वाले दाखिले पर यह लाभ नहीं।",
        "QHEI सूची: NIRF की ताज़ा रैंकिंग में टॉप 100 संस्थान, राज्य/UT सरकार के टॉप 200 संस्थान और केंद्र सरकार के बाकी सभी उच्च शिक्षा संस्थान। जुलाई 2026 तक 1,425 संस्थान। सूची NIRF के साथ अपडेट होती है।",
        "विदेशी संस्थान, उनके भारतीय कैंपस और भारतीय संस्थानों के विदेशी कैंपस शामिल नहीं।",
        "आधार से रजिस्ट्रेशन ज़रूरी। दूसरे साल से ब्याज छूट जारी रखने के लिए पढ़ाई में संतोषजनक प्रदर्शन चाहिए; कोर्स बीच में छोड़ने या निष्कासन पर लाभ बंद।",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://pmvidyalaxmi.co.in/" target="_blank" rel="noopener nofollow">pmvidyalaxmi.co.in</a> पर छात्र के रूप में रजिस्टर करें और आधार से सत्यापन करें।',
        "पोर्टल पर देखें कि आपका संस्थान QHEI सूची में है या नहीं।",
        "साझा एजुकेशन लोन फॉर्म (Common Education Loan Application) भरें और बैंक चुनें।",
        "दाखिले का पत्र, फीस का ब्यौरा, पहचान/पते के कागज़ और आय प्रमाण पत्र (ब्याज छूट के लिए) अपलोड करें।",
        "पोर्टल पर आवेदन का स्टेटस देखें। लोन मिलने के बाद ब्याज छूट के लिए पोर्टल पर ही दावा करें; छूट की रकम PM-विद्यालक्ष्मी डिजिटल रुपी (CBDC) वॉलेट से लोन खाते में जाती है।",
      ],
      callout: { kind: "info", html: "शिकायत भी इसी पोर्टल पर दर्ज और ट्रैक होती है। बैंक लोन से मना करे तो पोर्टल पर शिकायत करें।" },
    },
    {
      id: "aankde",
      title: "अब तक कितने लोगों को मिला",
      intro: "PIB के 29 जुलाई 2026 के विवरण के अनुसार वित्त वर्ष 2025-26 में पोर्टल पर PM-विद्यालक्ष्मी लोन के 1,10,667 आवेदन आए, जिनमें से 70,852 मंज़ूर हुए और 67,728 लोन बांटे जा चुके थे। योजना का बजट 2024-25 से 2030-31 के लिए ₹3,600 करोड़ है।",
    },
  ],
  official: [
    { href: "https://pmvidyalaxmi.co.in/", title: "PM-विद्यालक्ष्मी पोर्टल", note: "लोन आवेदन, स्टेटस, ब्याज छूट, शिकायत" },
    { href: "https://www.education.gov.in/", title: "शिक्षा मंत्रालय" },
    { href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc2026729936401.pdf", title: "PIB: PM Vidyalaxmi Scheme (29 जुलाई 2026, PDF)" },
  ],
  faq: [
    { q: "पीएम विद्यालक्ष्मी में कितना लोन मिलता है?", a: "लोन की कोई ऊपरी सीमा नहीं है। रकम संस्थान की फीस और पढ़ाई के उचित खर्च के हिसाब से बैंक तय करता है। ₹7.5 लाख तक के लोन पर सरकार 75% गारंटी देती है।" },
    { q: "ब्याज में कितनी छूट मिलती है?", a: "परिवार की सालाना आय ₹8 लाख तक हो तो ₹10 लाख तक के लोन पर मोहलत अवधि (कोर्स + 1 साल) में 3% ब्याज छूट। आय ₹4.5 लाख तक हो और कोर्स तकनीकी/प्रोफेशनल हो तो CSIS के तहत मोहलत अवधि का पूरा ब्याज माफ हो सकता है।" },
    { q: "क्या हर कॉलेज के लिए यह लोन मिलता है?", a: "नहीं, सिर्फ QHEI सूची के संस्थानों (जुलाई 2026 तक 1,425) में मेरिट से दाखिले पर। सूची पोर्टल पर देखें।" },
    { q: "क्या जमानत या गारंटर देना होगा?", a: "नहीं, इस योजना में लोन बिना जमानत और बिना गारंटर के मिलता है।" },
    { q: "लोन कब और कितने समय में चुकाना होता है?", a: "कोर्स पूरा होने के बाद 1 साल की मोहलत के बाद 15 साल तक में।" },
  ],
  related: [
    { href: "/service/vidya-lakshmi-education-loan.html", emoji: "🏦", title: "विद्या लक्ष्मी एजुकेशन लोन", text: "एजुकेशन लोन पोर्टल की जानकारी" },
    { href: "/service/pm-usp-college-scholarship.html", emoji: "📘", title: "PM-USP कॉलेज छात्रवृत्ति", text: "₹12,000-₹20,000 सालाना" },
    { href: "/service/pragati-scholarship-girl-students.html", emoji: "👩‍🎓", title: "AICTE प्रगति छात्रवृत्ति", text: "तकनीकी पढ़ाई वाली छात्राओं के लिए" },
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "NSP पर छात्रवृत्तियां" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://pmvidyalaxmi.co.in/", label: "🏦 PM-विद्यालक्ष्मी पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
