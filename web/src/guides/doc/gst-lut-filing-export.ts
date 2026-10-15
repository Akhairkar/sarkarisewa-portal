import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; gst.gov.in and tutorial.gst.gov.in not
// reachable from the sandbox, search-result extracts used): Notification
// 37/2017-Central Tax dated 04.10.2017 / Rule 96A CGST Rules via gstgyaan.com
// (LUT not available to a person prosecuted under CGST/IGST/existing laws
// where tax evaded exceeds ₹250 lakh; such persons furnish a bond with bank
// guarantee); GSTN advisory on LUT for FY 2026-27 enabled on the portal via
// a2ztaxcorp.net, taxonation.com, studycafe.in (Form GST RFD-11, Services >
// User Services > Furnish Letter of Undertaking (LUT), financial-year
// dropdown, upload of earlier offline LUT); taxaj.com (signing with DSC or
// EVC); cleartax.in (one LUT per financial year, no portal fee). No exact
// deadline is stated: sources differ (before 1 April vs before the first
// export), so the page says "before exporting, ideally before the year
// starts". Helpline 1800-103-4786 is GSTN's published helpdesk number.
export const gstLutFilingExport: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "GST LUT फाइलिंग" },
  ],
  docHi: "GST LUT फाइलिंग",
  title: "जीएसटी एलयूटी लेटर ऑफ अंडरटेकिंग (GST LUT Filing)",
  description: "बिना जीएसटी चुकाए निर्यात और एसईजेड आपूर्ति हेतु हर वित्त वर्ष के लिए Form GST RFD-11 (LUT) GST पोर्टल पर भरें। कौन भर सकता है, स्टेप, DSC/EVC से साइन और आम गलतियां।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "GST LUT (Letter of Undertaking): बिना IGST चुकाए एक्सपोर्ट के लिए Form RFD-11 कैसे भरें",
  lead: "LUT (Letter of Undertaking) एक वचन-पत्र है जो GST में रजिस्टर्ड निर्यातक Form GST RFD-11 में GST पोर्टल पर भरता है। इसके बाद वह माल या सेवा का निर्यात, और SEZ को सप्लाई, IGST चुकाए बिना (zero-rated) कर सकता है, और बाद में रिफंड के झंझट से बचता है। LUT एक वित्त वर्ष के लिए मान्य होता है, इसलिए हर साल नया भरना पड़ता है; पोर्टल पर इसकी कोई फीस नहीं है।",
  facts: [
    ["फॉर्म", "GST RFD-11 (Rule 96A)"],
    ["कहां", '<a href="https://www.gst.gov.in/" target="_blank" rel="noopener nofollow">gst.gov.in</a> → Services → User Services'],
    ["मान्यता", "एक वित्त वर्ष (1 अप्रैल से 31 मार्च)"],
    ["फीस", "पोर्टल पर कोई फीस नहीं"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "LUT क्या है और कब चाहिए",
      intro: "निर्यात और SEZ को सप्लाई \"zero-rated\" होती है। इसके दो तरीके हैं:",
      table: {
        head: ["तरीका", "क्या होता है"],
        rows: [
          ["<strong>LUT भरकर, बिना IGST</strong>", "बिल पर IGST नहीं लगता। पैसा टैक्स में फंसता नहीं। बचे हुए इनपुट टैक्स क्रेडिट का रिफंड अलग से मांग सकते हैं।"],
          ["IGST चुकाकर", "पहले IGST भरें, फिर उसका रिफंड लें। इसमें पूंजी कुछ समय के लिए फंसी रहती है।"],
        ],
      },
      callout: { kind: "info", html: "LUT के तहत निर्यात करते समय इनवॉइस पर लिखा जाता है कि सप्लाई \"LUT के तहत बिना IGST भुगतान के\" निर्यात/SEZ के लिए है। सटीक शब्द अपने CA या GST पोर्टल की गाइड से मिला लें।" },
    },
    {
      id: "kaun",
      title: "कौन LUT भर सकता है",
      list: [
        "GST में रजिस्टर्ड हर व्यक्ति जो माल/सेवा का निर्यात करता है या SEZ यूनिट/डेवलपर को सप्लाई करता है।",
        "<strong>अपवाद:</strong> जिस पर GST या पुराने टैक्स कानूनों में ऐसे मामले में मुकदमा (prosecution) चला हो जहां टैक्स चोरी <strong>₹250 लाख से ज़्यादा</strong> हो। ऐसे व्यक्ति को LUT की जगह बैंक गारंटी वाला <strong>बॉन्ड</strong> देना होता है।",
      ],
    },
    {
      id: "steps",
      title: "GST पोर्टल पर LUT भरने के स्टेप",
      steps: [
        '<a href="https://www.gst.gov.in/" target="_blank" rel="noopener nofollow">gst.gov.in</a> पर अपने GSTIN के यूज़रनेम-पासवर्ड से लॉगिन करें।',
        "<strong>Services → User Services → Furnish Letter of Undertaking (LUT)</strong> चुनें।",
        "<strong>वित्त वर्ष</strong> चुनें (जैसे 2026-27)। पिछले साल कागज़ पर (ऑफलाइन) LUT दिया था तो उसकी कॉपी अपलोड करने का विकल्प भी यहीं है।",
        "मांगी गई घोषणाओं (declarations) पर टिक करें और ज़रूरी विवरण भरें।",
        "अधिकृत हस्ताक्षरकर्ता (authorised signatory) चुनें, जगह भरें और फॉर्म <strong>Preview</strong> करके जांचें।",
        "<strong>DSC या EVC</strong> से साइन करके सबमिट करें। ARN मिलेगा; LUT की PDF डाउनलोड करके रखें।",
      ],
      callout: { kind: "ok", html: "जमा किया गया LUT इसी मेन्यू में बाद में भी देखा और डाउनलोड किया जा सकता है। इसकी कॉपी और ARN अपने एक्सपोर्ट रिकॉर्ड के साथ रखें।" },
    },
    {
      id: "kab",
      title: "कब भरें",
      list: [
        "LUT <strong>हर वित्त वर्ष</strong> के लिए अलग भरना होता है। 2025-26 वाला LUT 31 मार्च 2026 को खत्म हो गया; 2026-27 के लिए नया चाहिए।",
        "उस साल का <strong>पहला निर्यात/SEZ सप्लाई करने से पहले</strong> भरें। सबसे सुरक्षित है कि नया वित्त वर्ष शुरू होने से पहले ही भर दें।",
        "बिना वैध LUT के IGST के बिना निर्यात किया, तो विभाग टैक्स और ब्याज मांग सकता है।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "पिछले साल का LUT इस साल के लिए चलता मान लेना।",
        "गलत वित्त वर्ष चुन लेना। सबमिट से पहले Preview ज़रूर देखें।",
        "DSC की वैधता खत्म होना या अधिकृत हस्ताक्षरकर्ता पोर्टल पर अपडेट न होना।",
        "इनवॉइस पर LUT वाला उल्लेख न करना, या LUT होते हुए भी IGST जोड़ देना।",
      ],
    },
  ],
  official: [
    { href: "https://www.gst.gov.in/", title: "GST पोर्टल (GSTN)", note: "Services → User Services → Furnish Letter of Undertaking (LUT)" },
    { href: "https://cbic-gst.gov.in/", title: "CBIC GST (नियम, नोटिफिकेशन, सर्कुलर)" },
    { href: "tel:18001034786", title: "GST हेल्पडेस्क", note: "1800-103-4786" },
  ],
  faq: [
    { q: "LUT क्या है?", a: "Letter of Undertaking एक वचन-पत्र है जिसे Form GST RFD-11 में भरकर रजिस्टर्ड निर्यातक बिना IGST चुकाए माल/सेवा का निर्यात या SEZ को सप्लाई कर सकता है।" },
    { q: "क्या LUT हर साल भरना पड़ता है?", a: "हां। LUT एक वित्त वर्ष के लिए मान्य होता है, इसलिए हर नए वित्त वर्ष के लिए GST पोर्टल पर नया LUT भरें।" },
    { q: "LUT भरने की फीस कितनी है?", a: "GST पोर्टल पर LUT भरने की कोई सरकारी फीस नहीं है। CA या कंसल्टेंट से भरवाएं तो उनकी फीस अलग होती है।" },
    { q: "कौन LUT नहीं भर सकता?", a: "जिस पर GST/पुराने कानूनों में ₹250 लाख से ज़्यादा की टैक्स चोरी के मामले में मुकदमा चला हो। उसे बैंक गारंटी वाला बॉन्ड देना होता है।" },
    { q: "LUT पर साइन कैसे होता है?", a: "अधिकृत हस्ताक्षरकर्ता DSC (डिजिटल सिग्नेचर) या EVC (OTP) से साइन करके सबमिट करता है। कंपनी और LLP के लिए आमतौर पर DSC ज़रूरी होता है।" },
  ],
  related: [
    { href: "/service/gst.html", emoji: "🧾", title: "GST पंजीकरण", text: "GSTIN कैसे लें" },
    { href: "/gst/", emoji: "🔎", title: "GSTIN जांच", text: "GST नंबर सही है या नहीं" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "MSME प्रमाण पत्र" },
    { href: "/service/income-tax-return-filing.html", emoji: "📑", title: "ITR फाइलिंग", text: "आयकर रिटर्न कैसे भरें" },
  ],
  aside: [
    { href: "https://www.gst.gov.in/", label: "🧾 GST पोर्टल खोलें" },
  ],
};
