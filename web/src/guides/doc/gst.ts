import type { DocGuide } from "./types";

// Sources: CBIC Notification 18/2025-Central Tax (Rules 9A and 14A), GST
// Council notifications 10/2019 and 34/2023, and the GSTN Rule 14A advisory.
// State-specific processing guidance is not treated as a nationwide rule.
// GSTN helpdesk 1800-103-4786.
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
  modified: "2026-11-27",
  verified: "27 नवंबर 2026 (CBIC/GST Council नियम)",
  h1: "GST पंजीकरण (GST Registration): किसे ज़रूरी, कागज़, REG-01 भरने के स्टेप और नया 3 दिन वाला नियम",
  lead: "GST पंजीकरण gst.gov.in पर Form GST REG-01 भरकर मुफ्त होता है। सामान्य राज्यों में exclusive goods suppliers के लिए ₹40 लाख और services या mixed supplies के लिए ₹20 लाख की सीमा लागू है; कुछ राज्यों में सीमा अलग है। Inter-State taxable goods supply और section 24 की दूसरी स्थितियों में threshold से नीचे भी registration लग सकता है। E-commerce पर goods बेचने वाले कुछ छोटे intra-State suppliers को PAN, portal enrolment और अन्य शर्तों के साथ छूट मिल सकती है। Rule 14A में पात्र छोटे taxpayers के लिए 3 working days का विकल्प है।",
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
          ["Amazon/Flipkart जैसे ECO पर goods supply", "आमतौर पर registration; लेकिन eligible छोटे intra-State suppliers Notification 34/2023 के तहत PAN और portal enrolment सहित शर्तें पूरी करके छूट ले सकते हैं"],
          ["रिवर्स चार्ज में टैक्स भरने वाले, कैज़ुअल टैक्सेबल पर्सन, ई-कॉमर्स ऑपरेटर", "ज़रूरी"],
          ["सीमा से कम टर्नओवर", "स्वेच्छा से (voluntary) ले सकते हैं"],
        ],
      },
      callout: { kind: "info", html: "टर्नओवर में पूरे देश में एक ही PAN पर हुई कुल बिक्री (टैक्स वाली, बिना टैक्स वाली और निर्यात) गिनी जाती है। E-commerce छूट केवल निर्धारित शर्तों के साथ intra-State goods suppliers के लिए है; inter-State goods supply की अनुमति नहीं। अपनी स्थिति CA से जांचें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "PAN (व्यक्ति/फर्म/कंपनी का)",
        "मालिक/पार्टनर/डायरेक्टर का आधार, फोटो और मोबाइल-ईमेल",
        "कारोबार का प्रमाण: पार्टनरशिप डीड, कंपनी का सर्टिफिकेट ऑफ इनकॉर्पोरेशन आदि (प्रोप्राइटर के लिए ज़रूरी नहीं)",
        "कारोबार की जगह का प्रमाण: बिजली बिल/प्रॉपर्टी टैक्स रसीद, और किराए पर हो तो किराया-नामा या मालिक का सहमति पत्र",
        "बैंक खाते का विवरण उपलब्ध हो तो दें; नियम 10A के अनुसार पंजीकरण मिलने के 30 दिन के भीतर या पहली GSTR-1/IFF से पहले, जो पहले हो, PAN पर खुले बैंक खाते का विवरण देना होता है।",
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
          ["<strong>Rule 14A</strong>: जिनकी registered persons को supplies पर कुल monthly output tax liability ₹2.5 लाख से अधिक नहीं", "सफल Aadhaar authentication के बाद 3 working days में electronic registration"],
        ],
      },
      list: [
        "Rule 14A का विकल्प FORM GST REG-01 में चुनना होता है। पात्रता का आधार registered persons को की गई supplies पर कुल monthly output tax liability ₹2.5 लाख से अधिक न होना है। Primary Authorised Signatory और कम-से-कम एक Promoter/Partner का Aadhaar authentication जरूरी है; एक PAN पर एक State/UT में इस rule के तहत एक ही registration लिया जा सकता है।",
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
    { href: "https://taxinformation.cbic.gov.in/view-pdf/1010504/ENG/Notifications", title: "CBIC Notification 18/2025-Central Tax", note: "Rules 9A and 14A; 3-working-day registration route" },
    { href: "https://www.gstcouncil.gov.in/sites/default/files/2025-12/newsletter_november_2025.pdf", title: "GST Council November 2025 Newsletter", note: "Rule 14A conditions and Aadhaar authentication" },
    { href: "https://www.gstcouncil.gov.in/en/node/4096", title: "Notification 10/2019-Central Tax", note: "Exclusive goods suppliers की threshold exemption" },
    { href: "https://gstcouncil.gov.in/sites/default/files/2024-05/gst-ct-34-2023.pdf", title: "Notification 34/2023-Central Tax", note: "छोटे intra-State e-commerce goods suppliers की शर्तें" },
    { href: "https://www.gstcouncil.gov.in/", title: "GST काउंसिल" },
    { href: "tel:18001034786", title: "GST हेल्पडेस्क", note: "1800-103-4786" },
  ],
  faq: [
    { q: "GST पंजीकरण की फीस कितनी है?", a: "gst.gov.in पर पंजीकरण की कोई सरकारी फीस नहीं है। CA/कंसल्टेंट से कराएं तो उनकी फीस अलग है।" },
    { q: "कितने टर्नओवर पर GST लेना ज़रूरी है?", a: "सामान्य राज्यों में सिर्फ माल बेचने पर ₹40 लाख और सेवा देने पर ₹20 लाख सालाना टर्नओवर पार होने पर। कुछ विशेष श्रेणी राज्यों में यह सीमा ₹20 लाख और ₹10 लाख है।" },
    { q: "क्या कम टर्नओवर में भी GST लेना पड़ सकता है?", a: "हां। Inter-State taxable goods supply, reverse charge और section 24 की अन्य स्थितियों में compulsory registration हो सकता है। लेकिन eligible छोटे intra-State e-commerce goods suppliers PAN और portal enrolment सहित Notification 34/2023 की शर्तें पूरी करके छूट ले सकते हैं।" },
    { q: "GST नंबर कितने दिन में मिलता है?", a: "सफल Aadhaar authentication के बाद सामान्य Rule 9 प्रक्रिया में 7 working days तक; physical verification या Aadhaar authentication न होने पर 30 days तक लग सकते हैं। पात्र Rule 14A या risk-based Rule 9A applicants को 3 working days में electronic grant का विकल्प है।" },
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
