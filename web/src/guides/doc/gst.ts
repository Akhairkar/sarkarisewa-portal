import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; gst.gov.in not reachable from the sandbox,
// search-result extracts used): GST Council newsletter October 2025
// (gstcouncil.gov.in/sites/default/files/2025-11/october_issue_0.pdf) and
// tallysolutions.com / taxguru.in summaries of Notification on Rule 9A/14A
// CGST Rules (simplified registration from 1 Nov 2025 for applicants whose
// B2B output tax is up to ₹2.5 lakh a month: option in FORM GST REG-01,
// Aadhaar authentication of primary authorised signatory and one
// promoter/partner, grant within 3 working days, one registration per PAN per
// State under this option, exit by REG-32). Thresholds (s.22 CGST Act and
// Notification 10/2019-CT: ₹40 lakh goods / ₹20 lakh services, ₹20/₹10 lakh in
// special category States), compulsory registration cases (s.24), Rule 9
// timelines (7 working days; 30 days where physical verification) and nil fee
// are from the Act/Rules as published on cbic-gst.gov.in. Old page gave no
// numbers; GSTN helpdesk 1800-103-4786.
export const gst: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "GST पंजीकरण" },
  ],
  docHi: "GST पंजीकरण",
  title: "जीएसटी पंजीकरण 2026",
  description: "वस्तु एवं सेवा कर पंजीकरण और फाइलिंग पोर्टल। जीएसटी पंजीकरण के लिए आधिकारिक लिंक, ज़रूरी दस्तावेज़, पात्रता और आवेदन प्रक्रिया की पूरी जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "GST पंजीकरण (GST Registration): किसे ज़रूरी, कागज़, REG-01 भरने के स्टेप और नया 3 दिन वाला नियम",
  lead: "GST पंजीकरण gst.gov.in पर Form GST REG-01 भरकर मुफ्त होता है। सामान्य राज्यों में सिर्फ माल बेचने वाले का सालाना टर्नओवर ₹40 लाख और सेवा देने वाले का ₹20 लाख पार होने पर पंजीकरण ज़रूरी है (कुछ विशेष श्रेणी राज्यों में ₹20 लाख / ₹10 लाख)। अंतर-राज्यीय माल बिक्री, ई-कॉमर्स पर बिक्री जैसे कुछ मामलों में टर्नओवर कम होने पर भी पंजीकरण लेना पड़ता है। 1 नवंबर 2025 से छोटे B2B कारोबार के लिए 3 कार्य दिवस में पंजीकरण का सरल विकल्प भी है।",
  facts: [
    ["पोर्टल", '<a href="https://www.gst.gov.in/" target="_blank" rel="noopener nofollow">gst.gov.in</a>'],
    ["फॉर्म", "GST REG-01 (सामान्य करदाता)"],
    ["फीस", "कोई सरकारी फीस नहीं"],
    ["हेल्पडेस्क", "1800-103-4786 (GSTN)"],
  ],
  sections: [
    {
      id: "kise-zaruri",
      title: "GST पंजीकरण किसे लेना ज़रूरी है",
      table: {
        head: ["स्थिति", "पंजीकरण"],
        rows: [
          ["सिर्फ माल बेचना, सालाना टर्नओवर ₹40 लाख से ज़्यादा (सामान्य राज्य)", "ज़रूरी"],
          ["सेवा देना (या माल + सेवा), टर्नओवर ₹20 लाख से ज़्यादा (सामान्य राज्य)", "ज़रूरी"],
          ["विशेष श्रेणी राज्य (जैसे पूर्वोत्तर के कुछ राज्य)", "सीमा कम: माल ₹20 लाख, सेवा ₹10 लाख (राज्य के अनुसार)"],
          ["दूसरे राज्य में माल बेचना (inter-state supply of goods)", "टर्नओवर कितना भी हो, ज़रूरी"],
          ["Amazon/Flipkart जैसे ई-कॉमर्स पर माल बेचना", "आमतौर पर ज़रूरी"],
          ["रिवर्स चार्ज में टैक्स भरने वाले, कैज़ुअल टैक्सेबल पर्सन, ई-कॉमर्स ऑपरेटर", "ज़रूरी"],
          ["सीमा से कम टर्नओवर", "स्वेच्छा से (voluntary) ले सकते हैं"],
        ],
      },
      callout: { kind: "info", html: "टर्नओवर में पूरे देश में एक ही PAN पर हुई कुल बिक्री (टैक्स वाली, बिना टैक्स वाली और निर्यात) गिनी जाती है। संदेह हो तो CA से सलाह लें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "PAN (व्यक्ति/फर्म/कंपनी का)",
        "मालिक/पार्टनर/डायरेक्टर का आधार, फोटो और मोबाइल-ईमेल",
        "कारोबार का प्रमाण: पार्टनरशिप डीड, कंपनी का सर्टिफिकेट ऑफ इनकॉर्पोरेशन आदि (प्रोप्राइटर के लिए ज़रूरी नहीं)",
        "कारोबार की जगह का प्रमाण: बिजली बिल/प्रॉपर्टी टैक्स रसीद, और किराए पर हो तो किराया-नामा या मालिक का सहमति पत्र",
        "बैंक खाते का विवरण (पासबुक/कैंसिल चेक/स्टेटमेंट)",
        "अधिकृत हस्ताक्षरकर्ता का ऑथराइज़ेशन लेटर/बोर्ड रेज़ोल्यूशन (प्रोप्राइटर के अलावा)",
      ],
    },
    {
      id: "steps",
      title: "REG-01 भरने के स्टेप",
      steps: [
        '<a href="https://www.gst.gov.in/" target="_blank" rel="noopener nofollow">gst.gov.in</a> पर <strong>Services → Registration → New Registration</strong> चुनें।',
        "<strong>Part A:</strong> Taxpayer चुनें, राज्य, ज़िला, कारोबार का नाम, PAN, ईमेल और मोबाइल डालें। OTP से सत्यापन के बाद <strong>TRN</strong> मिलता है।",
        "TRN से लॉगिन करके <strong>Part B</strong> भरें: कारोबार, प्रमोटर, अधिकृत हस्ताक्षरकर्ता, कारोबार की जगह, माल/सेवा (HSN/SAC), बैंक और कागज़ अपलोड।",
        "आधार प्रमाणीकरण (Aadhaar authentication) का विकल्प चुनें। लिंक पर OTP से प्रमाणीकरण करें। कुछ मामलों में GST सुविधा केंद्र पर बायोमेट्रिक/फोटो सत्यापन के लिए बुलाया जा सकता है।",
        "DSC या EVC से सबमिट करें। <strong>ARN</strong> मिलता है; इसी से <strong>Services → Registration → Track Application Status</strong> में स्टेटस देखें।",
        "मंज़ूरी पर <strong>GSTIN</strong> और <strong>REG-06</strong> सर्टिफिकेट पोर्टल पर मिलता है। अधिकारी कुछ पूछें (REG-03) तो तय समय में REG-04 में जवाब दें।",
      ],
    },
    {
      id: "samay",
      title: "पंजीकरण में कितना समय लगता है",
      table: {
        head: ["मामला", "समय"],
        rows: [
          ["आधार प्रमाणीकरण सफल, कोई जांच नहीं", "आमतौर पर 7 कार्य दिवस"],
          ["जगह की भौतिक जांच (physical verification) ज़रूरी", "30 दिन तक"],
          ["<strong>नया सरल विकल्प (Rule 14A)</strong>: B2B बिक्री पर हर महीने का आउटपुट टैक्स ₹2.5 लाख तक", "3 कार्य दिवस में (1 नवंबर 2025 से)"],
        ],
      },
      list: [
        "Rule 14A का विकल्प REG-01 में ही एक सवाल के रूप में चुनना होता है।",
        "इसमें मुख्य अधिकृत हस्ताक्षरकर्ता और कम से कम एक प्रमोटर/पार्टनर का आधार प्रमाणीकरण ज़रूरी है।",
        "इस विकल्प में एक राज्य में एक PAN पर एक ही पंजीकरण मिलता है। बाद में बाहर निकलने के लिए REG-32 भरना होता है।",
      ],
    },
    {
      id: "baad-me",
      title: "पंजीकरण के बाद",
      list: [
        "हर महीने/तिमाही <strong>GSTR-1</strong> और <strong>GSTR-3B</strong> रिटर्न भरें, बिक्री न हो तो भी nil रिटर्न।",
        "छोटे कारोबारी चाहें तो <strong>कंपोज़िशन स्कीम</strong> चुन सकते हैं (सीमा और शर्तें पोर्टल पर देखें)।",
        "GSTIN दुकान/दफ्तर के नाम-बोर्ड पर लिखना और पंजीकरण सर्टिफिकेट दिखाई देने वाली जगह लगाना ज़रूरी है।",
        "कारोबार बंद हो तो <strong>REG-16</strong> से पंजीकरण रद्द कराएं, वरना रिटर्न न भरने पर लेट फीस बनती रहती है।",
      ],
      callout: { kind: "warn", html: "GST पंजीकरण के नाम पर फोन/मैसेज से पैसे मांगने वालों से सावधान रहें। पोर्टल पर पंजीकरण की कोई सरकारी फीस नहीं है। किसी को अपना OTP न दें।" },
    },
  ],
  official: [
    { href: "https://www.gst.gov.in/", title: "GST पोर्टल (GSTN)", note: "नया पंजीकरण, स्टेटस, रिटर्न" },
    { href: "https://cbic-gst.gov.in/", title: "CBIC GST", note: "कानून, नियम, नोटिफिकेशन" },
    { href: "https://www.gstcouncil.gov.in/", title: "GST काउंसिल" },
    { href: "tel:18001034786", title: "GST हेल्पडेस्क", note: "1800-103-4786" },
  ],
  faq: [
    { q: "GST पंजीकरण की फीस कितनी है?", a: "gst.gov.in पर पंजीकरण की कोई सरकारी फीस नहीं है। CA/कंसल्टेंट से कराएं तो उनकी फीस अलग है।" },
    { q: "कितने टर्नओवर पर GST लेना ज़रूरी है?", a: "सामान्य राज्यों में सिर्फ माल बेचने पर ₹40 लाख और सेवा देने पर ₹20 लाख सालाना टर्नओवर पार होने पर। कुछ विशेष श्रेणी राज्यों में यह सीमा ₹20 लाख और ₹10 लाख है।" },
    { q: "क्या कम टर्नओवर में भी GST लेना पड़ सकता है?", a: "हां। दूसरे राज्य में माल बेचने, ई-कॉमर्स पर माल बेचने, रिवर्स चार्ज में टैक्स भरने जैसे मामलों में टर्नओवर कम होने पर भी पंजीकरण ज़रूरी है।" },
    { q: "GST नंबर कितने दिन में मिलता है?", a: "आधार प्रमाणीकरण हो जाए और कोई जांच न हो तो आमतौर पर 7 कार्य दिवस में; भौतिक जांच हो तो 30 दिन तक। छोटे B2B कारोबार नए Rule 14A विकल्प में 3 कार्य दिवस में पंजीकरण पा सकते हैं।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "gst.gov.in पर Services → Registration → Track Application Status में ARN डालकर।" },
  ],
  related: [
    { href: "/service/gst-lut-filing-export.html", emoji: "🚢", title: "GST LUT फाइलिंग", text: "बिना IGST निर्यात" },
    { href: "/gst/", emoji: "🔎", title: "GSTIN जांच", text: "GST नंबर सही है या नहीं" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "MSME प्रमाण पत्र" },
    { href: "/service/pan-card.html", emoji: "💳", title: "पैन कार्ड", text: "नया PAN और सुधार" },
    { href: "/service/income-tax-return-filing.html", emoji: "📑", title: "ITR फाइलिंग", text: "आयकर रिटर्न" },
  ],
  aside: [
    { href: "https://www.gst.gov.in/", label: "🧾 GST पोर्टल खोलें" },
    { href: "/gst/", label: "🔎 GSTIN जांचें" },
  ],
};
