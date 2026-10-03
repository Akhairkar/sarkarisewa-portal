// Site-wide navigation and the "Ye bhi dekhein" (explore) cards.
// Hub URLs point at existing pages until the new hubs are built.

export const SITE = {
  name: "SarkariSewa India",
  url: "https://sarkarisewaindia.com",
  tagline: "सरकारी काम, आसान भाषा में",
};

export const NAV = [
  { href: "/", label: "होम", icon: "home" },
  { href: "/category/identity-documents.html", label: "दस्तावेज़", icon: "doc" },
  { href: "/jobs/index.html", label: "Students", icon: "cap" },
  { href: "/tools/index.html", label: "Tools", icon: "tool" },
  { href: "/services/gstin-verification/", label: "Services", icon: "star" },
] as const;

export const TOP_NAV = [
  { href: "/category/identity-documents.html", label: "दस्तावेज़" },
  { href: "/jobs/index.html", label: "Jobs" },
  { href: "/exams/index.html", label: "Exams" },
  { href: "/category/government-schemes.html", label: "Yojana" },
  { href: "/tools/index.html", label: "Tools" },
  { href: "/tools/csc-locator.html", label: "CSC Near Me" },
  { href: "/services/gstin-verification/", label: "Paid Services" },
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
      { href: "/category/identity-documents.html", label: "सभी दस्तावेज़" },
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
