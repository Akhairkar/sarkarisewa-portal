// Site-wide navigation and the "Ye bhi dekhein" (explore) cards.
// Hub URLs point at existing pages until the new hubs are built.

export const SITE = {
  name: "SarkariSewa India",
  url: "https://sarkarisewaindia.com",
  tagline: "सरकारी काम, आसान भाषा में",
};

export const NAV = [
  { href: "/", label: "होम", icon: "home" },
  { href: "/documents/", label: "दस्तावेज़", icon: "doc" },
  { href: "/jobs/index.html", label: "Students", icon: "cap" },
  { href: "/tools/index.html", label: "Tools", icon: "tool" },
  { href: "/paid-services/", label: "Services", icon: "star" },
] as const;

export const TOP_NAV = [
  { href: "/documents/", label: "दस्तावेज़" },
  { href: "/jobs/index.html", label: "Jobs" },
  { href: "/exams/index.html", label: "Exams" },
  { href: "/category/government-schemes.html", label: "Yojana" },
  { href: "/tools/index.html", label: "Tools" },
  { href: "/tools/csc-locator.html", label: "CSC Near Me" },
  { href: "/paid-services/", label: "Paid Services" },
] as const;

export type Card = { href: string; emoji: string; title: string; text: string; badge?: string; tags?: string[] };

// Attention cards shown on every page. Order = priority. Pages can exclude
// themselves by href; the component shows the first N that remain.
export const EXPLORE: Card[] = [
  { href: "/services/gstin-verification/", emoji: "🧾", title: "GST नंबर असली है या नकली?", text: "किसी भी GSTIN की पूरी जानकारी तुरंत देखें", badge: "₹20" },
  { href: "/jobs/index.html", emoji: "🎯", title: "आपके लिए सरकारी नौकरी", text: "नई भर्तियां, योग्यता और आखिरी तारीख", badge: "NEW" },
  { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam के लिए आपकी उम्र", text: "किसी भी तारीख पर सही उम्र निकालें" },
  { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC सेंटर", text: "अपने ज़िले के जन सेवा केंद्र खोजें" },
  { href: "/service/jan-aushadhi-store-locator.html", emoji: "💊", title: "50-80% सस्ती दवा", text: "पास का जन औषधि केंद्र ढूंढें" },
  { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो/PDF छोटा करें", text: "फॉर्म के साइज़ में तुरंत, फ्री" },
  { href: "/deadline-calendar.html", emoji: "📅", title: "आखिरी तारीख कैलेंडर", text: "फॉर्म, टैक्स और योजना की डेडलाइन" },
  { href: "/tools/income-tax-calculator.html", emoji: "🧮", title: "Income Tax Calculator", text: "नई vs पुरानी व्यवस्था, कौन सस्ती?" },
];

export const FOOTER = [
  {
    title: "दस्तावेज़",
    links: [
      { href: "/documents/", label: "सभी दस्तावेज़" },
      { href: "/service/aadhaar-card.html", label: "Aadhaar" },
      { href: "/states/index.html", label: "राज्य अनुसार सेवाएं" },
      { href: "/support/helpline-directory.html", label: "Helpline नंबर" },
    ],
  },
  {
    title: "Students",
    links: [
      { href: "/jobs/index.html", label: "सरकारी नौकरी" },
      { href: "/exams/index.html", label: "Exam Calendar" },
      { href: "/tools/age-calculator.html", label: "Age Calculator" },
      { href: "/tools/document-compressor.html", label: "Photo/PDF Resizer" },
    ],
  },
  {
    title: "SarkariSewa",
    links: [
      { href: "/about.html", label: "हमारे बारे में" },
      { href: "/contact.html", label: "संपर्क करें" },
      { href: "/privacy-policy.html", label: "Privacy Policy" },
      { href: "/disclaimer.html", label: "Disclaimer" },
    ],
  },
];

// 36 states/UTs: slug used in /states/<slug>-<doc>.html and Hindi name.
export const STATES: { slug: string; name: string; hi: string }[] = [
  { slug: "andhra-pradesh", name: "Andhra Pradesh", hi: "आंध्र प्रदेश" },
  { slug: "arunachal-pradesh", name: "Arunachal Pradesh", hi: "अरुणाचल प्रदेश" },
  { slug: "assam", name: "Assam", hi: "असम" },
  { slug: "bihar", name: "Bihar", hi: "बिहार" },
  { slug: "chhattisgarh", name: "Chhattisgarh", hi: "छत्तीसगढ़" },
  { slug: "goa", name: "Goa", hi: "गोवा" },
  { slug: "gujarat", name: "Gujarat", hi: "गुजरात" },
  { slug: "haryana", name: "Haryana", hi: "हरियाणा" },
  { slug: "himachal-pradesh", name: "Himachal Pradesh", hi: "हिमाचल प्रदेश" },
  { slug: "jharkhand", name: "Jharkhand", hi: "झारखंड" },
  { slug: "karnataka", name: "Karnataka", hi: "कर्नाटक" },
  { slug: "kerala", name: "Kerala", hi: "केरल" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", hi: "मध्य प्रदेश" },
  { slug: "maharashtra", name: "Maharashtra", hi: "महाराष्ट्र" },
  { slug: "manipur", name: "Manipur", hi: "मणिपुर" },
  { slug: "meghalaya", name: "Meghalaya", hi: "मेघालय" },
  { slug: "mizoram", name: "Mizoram", hi: "मिज़ोरम" },
  { slug: "nagaland", name: "Nagaland", hi: "नागालैंड" },
  { slug: "odisha", name: "Odisha", hi: "ओडिशा" },
  { slug: "punjab", name: "Punjab", hi: "पंजाब" },
  { slug: "rajasthan", name: "Rajasthan", hi: "राजस्थान" },
  { slug: "sikkim", name: "Sikkim", hi: "सिक्किम" },
  { slug: "tamil-nadu", name: "Tamil Nadu", hi: "तमिलनाडु" },
  { slug: "telangana", name: "Telangana", hi: "तेलंगाना" },
  { slug: "tripura", name: "Tripura", hi: "त्रिपुरा" },
  { slug: "uttar-pradesh", name: "Uttar Pradesh", hi: "उत्तर प्रदेश" },
  { slug: "uttarakhand", name: "Uttarakhand", hi: "उत्तराखंड" },
  { slug: "west-bengal", name: "West Bengal", hi: "पश्चिम बंगाल" },
  { slug: "andaman-nicobar", name: "Andaman & Nicobar", hi: "अंडमान-निकोबार" },
  { slug: "chandigarh", name: "Chandigarh", hi: "चंडीगढ़" },
  { slug: "dadra-nagar-haveli-daman-diu", name: "Dadra & Nagar Haveli and Daman & Diu", hi: "दादरा नगर हवेली, दमन-दीव" },
  { slug: "delhi", name: "Delhi", hi: "दिल्ली" },
  { slug: "jammu-kashmir", name: "Jammu & Kashmir", hi: "जम्मू-कश्मीर" },
  { slug: "ladakh", name: "Ladakh", hi: "लद्दाख" },
  { slug: "lakshadweep", name: "Lakshadweep", hi: "लक्षद्वीप" },
  { slug: "puducherry", name: "Puducherry", hi: "पुडुचेरी" },
];

// Most-searched tasks (from GSC, Oct 2026). Shown on the homepage.
export const POPULAR_TASKS: Card[] = [
  { href: "/service/senior-citizen-card.html", emoji: "👴", title: "सीनियर सिटीजन कार्ड", text: "राज्य अनुसार आवेदन, पेंशन, 70+ आयुष्मान" },
  { href: "/documents/#labour-card", emoji: "👷", title: "लेबर कार्ड", text: "निर्माण मज़दूर पंजीकरण, डाउनलोड" },
  { href: "/service/ration-card.html", emoji: "🍚", title: "राशन कार्ड", text: "नया कार्ड, लिस्ट में नाम, e-KYC" },
  { href: "/special-intensive-revision-sir.html", emoji: "🗳️", title: "वोटर लिस्ट / SIR", text: "लिस्ट में नाम देखें, नया वोटर ID" },
  { href: "/documents/#employment-exchange", emoji: "💼", title: "रोज़गार कार्यालय कार्ड", text: "Employment exchange पंजीकरण" },
  { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र", text: "आवेदन और डाउनलोड" },
  { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
  { href: "/service/udid-disability-card-download.html", emoji: "♿", title: "UDID / दिव्यांग कार्ड", text: "आवेदन, स्टेटस, डाउनलोड" },
  { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का कार्ड" },
];

// Documents that have a page for every state at /states/<state>-<slug>.html
export const DOCS: { slug: string; emoji: string; title: string; text: string; national?: string }[] = [
  { slug: "senior-citizen-card", emoji: "👴", title: "सीनियर सिटीजन कार्ड", text: "60+ पहचान पत्र, पेंशन और 70+ आयुष्मान", national: "/service/senior-citizen-card.html" },
  { slug: "labour-card", emoji: "👷", title: "लेबर कार्ड (BOCW)", text: "निर्माण मज़दूर पंजीकरण और योजनाएं" },
  { slug: "ration-card", emoji: "🍚", title: "राशन कार्ड", text: "नया कार्ड, नाम जोड़ना, e-KYC", national: "/service/ration-card.html" },
  { slug: "voter-id-card", emoji: "🗳️", title: "वोटर ID कार्ड", text: "नया कार्ड, सुधार, डाउनलोड", national: "/service/voter-id-card.html" },
  { slug: "sir-voter-list", emoji: "📋", title: "SIR वोटर लिस्ट", text: "लिस्ट में अपना नाम देखें" },
  { slug: "employment-exchange", emoji: "💼", title: "रोज़गार कार्यालय कार्ड", text: "Employment exchange पंजीकरण" },
  { slug: "birth-certificate", emoji: "👶", title: "जन्म प्रमाण पत्र", text: "आवेदन, सुधार, डाउनलोड", national: "/service/birth-certificate.html" },
  { slug: "death-certificate", emoji: "🕊️", title: "मृत्यु प्रमाण पत्र", text: "आवेदन और डाउनलोड", national: "/service/death-certificate.html" },
  { slug: "caste-certificate", emoji: "📜", title: "जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र", national: "/service/caste-certificate.html" },
  { slug: "income-certificate", emoji: "💰", title: "आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए", national: "/service/income-certificate.html" },
  { slug: "domicile-certificate", emoji: "🏠", title: "निवास / डोमिसाइल प्रमाण पत्र", text: "राज्य का स्थायी निवासी प्रमाण", national: "/service/domicile-certificate.html" },
  { slug: "driving-licence", emoji: "🚗", title: "ड्राइविंग लाइसेंस", text: "लर्निंग, पक्का लाइसेंस, रिन्यूअल", national: "/service/driving-licence.html" },
];

export const NATIONAL_DOCS: Card[] = [
  { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "नया, अपडेट, डाउनलोड" },
  { href: "/service/pan-card.html", emoji: "💳", title: "PAN कार्ड", text: "नया PAN, सुधार, आधार लिंक" },
  { href: "/service/passport.html", emoji: "🛂", title: "पासपोर्ट", text: "आवेदन, फीस, अपॉइंटमेंट" },
  { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
  { href: "/service/e-shram-card.html", emoji: "🪪", title: "e-Shram कार्ड", text: "असंगठित मज़दूरों का कार्ड" },
  { href: "/service/udid-disability-card-download.html", emoji: "♿", title: "UDID कार्ड", text: "दिव्यांग पहचान पत्र" },
];

export type PaidService = {
  href: string; emoji: string; title: string; text: string; price: string; unit: string;
  live: boolean; points: string[];
};

// Paid services. The GSTIN page keeps its existing payment flow.
export const PAID_SERVICES: PaidService[] = [
  {
    href: "/services/gstin-verification/", emoji: "🧾", title: "GSTIN Verification", price: "₹20", unit: "प्रति GSTIN", live: true,
    text: "किसी भी GST नंबर की जानकारी साफ रिपोर्ट में: असली है या नहीं, चालू है या बंद।",
    points: ["Legal name और trade name", "Active / Cancelled स्टेटस", "पंजीकरण की तारीख और राज्य", "PDF रिपोर्ट डाउनलोड"],
  },
  {
    href: "/private/rc-challan/", emoji: "🚗", title: "RC e-Challan Report", price: "₹49", unit: "प्रति गाड़ी", live: false,
    text: "गाड़ी नंबर डालें और सभी pending traffic challan एक रिपोर्ट में देखें।",
    points: ["Pending challan की गिनती", "Challan नंबर, तारीख, राशि", "Offence और राज्य", "एक से ज़्यादा challan एक साथ"],
  },
];
