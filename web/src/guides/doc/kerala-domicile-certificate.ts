import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - edistrict.kerala.gov.in FAQ (generalService.htm?event=faq), "Revenue
//   certificates issued through e-District":
//   * validity: Domicile Certificate life long; Nativity Certificate life
//     long; Residence Certificate special purpose;
//   * supporting documents: Domicile Certificate - Aadhaar card, affidavit,
//     birth certificate, election ID card, ID proof, ration card, school
//     certificate of parents; Nativity Certificate - affidavit, birth
//     certificate, ration card, school certificate, school certificate of
//     parents;
//   * time limit: Domicile Certificate 3 working days; Nativity Certificate
//     5 working days; Residence Certificate 3 working days;
//   * failed payments refunded in 7-10 working days; "Transaction History".
// - Reused from kerala-income-certificate.ts (same portal, checked
//   13 Oct 2026): services through Akshaya / Common Service Centres and the
//   online portal; Aadhaar-linked one-time registration; "Track Application",
//   "Certificate verification"; upload limit 100 KB per page, 10 pages;
//   contact edistrict.ksitm@kerala.gov.in, 0471 2525444 (KSITM).
// Left out (not confirmable on an official page we could open): fee, the
// issuing officer for each certificate, the legal definition / residence
// period for domicile and nativity.
export const keralaDomicileCertificate: DocGuide = {
  state: { slug: "kerala", hi: "केरल" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Kerala Domicile Certificate 2026: Apply & Status",
  description: "केरल डोमिसाइल, नेटिविटी और रेज़िडेंस प्रमाण पत्र 2026: e-District Kerala / अक्षय केंद्र से आवेदन, ज़रूरी कागज़, 3-5 कार्य दिवस, आजीवन वैधता और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "केरल डोमिसाइल प्रमाण पत्र 2026: e-District पर आवेदन, कागज़, समय सीमा और वैधता",
  lead: "केरल में निवास से जुड़े तीन अलग प्रमाण पत्र e-District Kerala पोर्टल से बनते हैं: <strong>Domicile</strong>, <strong>Nativity</strong> और <strong>Residence Certificate</strong>। आवेदन खुद पोर्टल पर या अक्षय केंद्र से होता है। e-District के अनुसार Domicile Certificate 3 कार्य दिवस में बनता है और <strong>आजीवन मान्य</strong> रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.kerala.gov.in/" target="_blank" rel="noopener nofollow">edistrict.kerala.gov.in</a>'],
    ["ऑफलाइन", "अक्षय केंद्र / CSC"],
    ["समय सीमा", "3 कार्य दिवस (Domicile)"],
    ["वैधता", "आजीवन (Domicile, Nativity)"],
  ],
  notice: "<strong>सही प्रमाण पत्र चुनें:</strong> दाखिले, भर्ती या योजना के फॉर्म में जो नाम लिखा हो (Domicile, Nativity या Residence), वही प्रमाण पत्र बनवाएं। ये तीनों अलग सेवाएं हैं और इनके कागज़ व वैधता अलग हैं।",
  sections: [
    {
      id: "teen",
      title: "Domicile, Nativity और Residence: तीनों की तुलना",
      table: {
        head: ["प्रमाण पत्र", "समय सीमा", "वैधता"],
        rows: [
          ["<strong>Domicile Certificate</strong>", "3 कार्य दिवस", "आजीवन"],
          ["<strong>Nativity Certificate</strong>", "5 कार्य दिवस", "आजीवन"],
          ["<strong>Residence Certificate</strong>", "3 कार्य दिवस", "खास काम के लिए (Special Purpose)"],
        ],
      },
      callout: { kind: "info", html: "Special Purpose का मतलब है कि Residence Certificate उसी काम के लिए है जिसके लिए बनवाया गया; दूसरे काम के लिए नया बनवाना पड़ सकता है। जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/kerala-caste-certificate.html\">केरल जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      table: {
        head: ["प्रमाण पत्र", "e-District FAQ में बताए कागज़"],
        rows: [
          ["Domicile", "आधार कार्ड, शपथ पत्र (Affidavit), जन्म प्रमाण पत्र, वोटर कार्ड, पहचान पत्र, राशन कार्ड, <strong>माता-पिता का स्कूल प्रमाण पत्र</strong>"],
          ["Nativity", "शपथ पत्र, जन्म प्रमाण पत्र, राशन कार्ड, स्कूल प्रमाण पत्र, माता-पिता का स्कूल प्रमाण पत्र"],
        ],
      },
      callout: { kind: "ok", html: "पोर्टल पर हर पेज <strong>100 KB</strong> तक और कुल 10 पेज तक अपलोड होते हैं। कागज़ छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "e-District Kerala पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://edistrict.kerala.gov.in/" target="_blank" rel="noopener nofollow">edistrict.kerala.gov.in</a> पर एक बार पंजीकरण करें (आधार से जुड़ा यूज़र बनता है)।',
        "लॉगिन करके प्रमाण पत्रों की सूची में <strong>Domicile Certificate</strong> (या Nativity / Residence) चुनें।",
        "फॉर्म भरें, ऊपर बताए कागज़ अपलोड करें और ऑनलाइन शुल्क भरें।",
        "जमा होने के बाद <strong>Transaction History</strong> में तारीख चुनकर देखें कि आवेदन नंबर बना या नहीं। नंबर न दिखे तो आवेदन जमा नहीं हुआ; दोबारा करें। कटा पैसा 7-10 कार्य दिवस में लौटता है।",
      ],
      html: "<p>खुद आवेदन न कर पाएं तो नज़दीकी <strong>अक्षय केंद्र</strong> या कॉमन सर्विस सेंटर पर कागज़ लेकर जाएं। केंद्र का सेवा शुल्क पहले पूछ लें।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> पोर्टल पर <strong>Track Application</strong> में आवेदन नंबर डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद अपने लॉगिन से प्रमाण पत्र डाउनलोड करें; अक्षय केंद्र से आवेदन किया हो तो वहीं से प्रिंट लें।",
        "<strong>सत्यापन:</strong> पोर्टल के <strong>Certificate verification</strong> विकल्प से कोई भी संस्था प्रमाण पत्र जांच सकती है।",
        "<strong>मदद:</strong> edistrict.ksitm@kerala.gov.in, फोन 0471 2525444 (KSITM)।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["माता-पिता का स्कूल प्रमाण पत्र नहीं लगाया", "Domicile और Nativity दोनों में यह सूची में है; जो उपलब्ध हो वह लगाएं"],
          ["शपथ पत्र नहीं", "तय फॉर्मेट में शपथ पत्र अपलोड करें"],
          ["गलत प्रमाण पत्र चुना", "फॉर्म/विज्ञापन में जो प्रमाण पत्र मांगा है वही चुनें"],
          ["फाइल बड़ी या धुंधली", "हर पेज 100 KB से कम और साफ स्कैन रखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.kerala.gov.in/", title: "e-District Kerala (आवेदन, Track Application, Certificate verification)" },
    { href: "https://edistrict.kerala.gov.in/generalService.htm?event=faq", title: "e-District FAQ: कागज़, समय सीमा और वैधता" },
  ],
  faq: [
    { q: "केरल डोमिसाइल प्रमाण पत्र कितने दिन में बनता है?", a: "e-District FAQ के अनुसार 3 कार्य दिवस में।" },
    { q: "केरल डोमिसाइल प्रमाण पत्र कब तक मान्य है?", a: "आजीवन। Nativity Certificate भी आजीवन मान्य है; Residence Certificate सिर्फ उस खास काम के लिए है।" },
    { q: "डोमिसाइल के लिए कौन से कागज़ चाहिए?", a: "आधार, शपथ पत्र, जन्म प्रमाण पत्र, वोटर कार्ड, पहचान पत्र, राशन कार्ड और माता-पिता का स्कूल प्रमाण पत्र।" },
    { q: "Domicile और Nativity में से कौन सा बनवाऊं?", a: "जिस फॉर्म या भर्ती के लिए चाहिए, उसमें जो नाम लिखा है वही बनवाएं। दोनों अलग सेवाएं हैं।" },
  ],
  related: [
    { href: "/states/kerala-caste-certificate.html", emoji: "📜", title: "केरल जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/kerala-income-certificate.html", emoji: "💰", title: "केरल आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/kerala-employment-exchange.html", emoji: "💼", title: "केरल रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.kerala.gov.in/", label: "📝 e-District पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
