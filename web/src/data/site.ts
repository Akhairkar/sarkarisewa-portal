// Site-wide navigation, explore cards and hub data, in Hindi and English.
import type { Text } from "../i18n";

export const SITE = {
  name: "SarkariSewa India",
  url: "https://sarkarisewaindia.com",
};

export const NAV = [
  { href: "/", label: { hi: "होम", en: "Home" }, icon: "home" },
  { href: "/documents/", label: { hi: "दस्तावेज़", en: "Documents" }, icon: "doc" },
  { href: "/students/", label: "Students", icon: "cap" },
  { href: "/tools/", label: "Tools", icon: "tool" },
  { href: "/paid-services/", label: "Services", icon: "star" },
] as const;

export const TOP_NAV: { href: string; label: Text }[] = [
  { href: "/documents/", label: { hi: "दस्तावेज़", en: "Documents" } },
  { href: "/students/", label: "Students" },
  { href: "/yojana/", label: { hi: "Yojana", en: "Schemes" } },
  { href: "/tools/", label: "Tools" },
  { href: "/near-me/", label: "Near Me" },
  { href: "/states/", label: { hi: "राज्य", en: "States" } },
  { href: "/paid-services/", label: "Paid Services" },
];

export type Card = { href: string; emoji: string; title: Text; text: Text; badge?: string };

// Attention cards shown on every page. Order = priority. Pages can exclude
// themselves by href; the component shows the first N that remain.
export const EXPLORE: Card[] = [
  { href: "/services/gstin-verification/", emoji: "🧾", title: { hi: "GST नंबर असली है या नकली?", en: "Is this GST number real?" }, text: { hi: "किसी भी GSTIN की पूरी जानकारी तुरंत देखें", en: "Instant details of any GSTIN" }, badge: "₹20" },
  { href: "/jobs/index.html", emoji: "🎯", title: { hi: "आपके लिए सरकारी नौकरी", en: "Government jobs for you" }, text: { hi: "नई भर्तियां, योग्यता और आखिरी तारीख", en: "New vacancies, eligibility, last dates" }, badge: "NEW" },
  { href: "/tools/age-calculator.html", emoji: "⏳", title: { hi: "Exam के लिए आपकी उम्र", en: "Your age for exams" }, text: { hi: "किसी भी तारीख पर सही उम्र निकालें", en: "Exact age on any cut-off date" } },
  { href: "/tools/csc-locator.html", emoji: "📍", title: { hi: "नज़दीकी CSC सेंटर", en: "Nearest CSC centre" }, text: { hi: "अपने ज़िले के जन सेवा केंद्र खोजें", en: "Find Common Service Centres in your district" } },
  { href: "/service/jan-aushadhi-store-locator.html", emoji: "💊", title: { hi: "50-80% सस्ती दवा", en: "Medicines 50-80% cheaper" }, text: { hi: "पास का जन औषधि केंद्र ढूंढें", en: "Find a Jan Aushadhi store near you" } },
  { href: "/tools/document-compressor.html", emoji: "🗜️", title: { hi: "फोटो/PDF छोटा करें", en: "Compress photo / PDF" }, text: { hi: "फॉर्म के साइज़ में तुरंत, फ्री", en: "Resize for any form, free" } },
  { href: "/deadline-calendar.html", emoji: "📅", title: { hi: "आखिरी तारीख कैलेंडर", en: "Deadline calendar" }, text: { hi: "फॉर्म, टैक्स और योजना की डेडलाइन", en: "Form, tax and scheme deadlines" } },
  { href: "/tools/income-tax-calculator.html", emoji: "🧮", title: "Income Tax Calculator", text: { hi: "नई vs पुरानी व्यवस्था, कौन सस्ती?", en: "New vs old regime: which saves more?" } },
];

export const FOOTER: { title: Text; links: { href: string; label: Text }[] }[] = [
  {
    title: { hi: "दस्तावेज़", en: "Documents" },
    links: [
      { href: "/documents/", label: { hi: "सभी दस्तावेज़", en: "All documents" } },
      { href: "/service/aadhaar-card.html", label: "Aadhaar" },
      { href: "/states/", label: { hi: "राज्य अनुसार सेवाएं", en: "Services by state" } },
      { href: "/support/helpline-directory.html", label: { hi: "Helpline नंबर", en: "Helpline numbers" } },
    ],
  },
  {
    title: "Students",
    links: [
      { href: "/students/", label: "Students hub" },
      { href: "/jobs/index.html", label: { hi: "सरकारी नौकरी", en: "Government jobs" } },
      { href: "/exams/index.html", label: "Exam Calendar" },
      { href: "/tools/age-calculator.html", label: "Age Calculator" },
      { href: "/tools/document-compressor.html", label: "Photo/PDF Resizer" },
    ],
  },
  {
    title: "SarkariSewa",
    links: [
      { href: "/about.html", label: { hi: "हमारे बारे में", en: "About us" } },
      { href: "/contact.html", label: { hi: "संपर्क करें", en: "Contact" } },
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
  { href: "/service/senior-citizen-card.html", emoji: "👴", title: { hi: "सीनियर सिटीजन कार्ड", en: "Senior Citizen Card" }, text: { hi: "राज्य अनुसार आवेदन, पेंशन, 70+ आयुष्मान", en: "State-wise apply, pension, Ayushman 70+" } },
  { href: "/documents/#labour-card", emoji: "👷", title: { hi: "लेबर कार्ड", en: "Labour Card" }, text: { hi: "निर्माण मज़दूर पंजीकरण, डाउनलोड", en: "Construction worker registration, download" } },
  { href: "/service/ration-card.html", emoji: "🍚", title: { hi: "राशन कार्ड", en: "Ration Card" }, text: { hi: "नया कार्ड, लिस्ट में नाम, e-KYC", en: "New card, name in list, e-KYC" } },
  { href: "/special-intensive-revision-sir.html", emoji: "🗳️", title: { hi: "वोटर लिस्ट / SIR", en: "Voter List / SIR" }, text: { hi: "लिस्ट में नाम देखें, नया वोटर ID", en: "Check your name, new voter ID" } },
  { href: "/documents/#employment-exchange", emoji: "💼", title: { hi: "रोज़गार कार्यालय कार्ड", en: "Employment Exchange Card" }, text: { hi: "Employment exchange पंजीकरण", en: "Job-seeker registration" } },
  { href: "/service/birth-certificate.html", emoji: "👶", title: { hi: "जन्म प्रमाण पत्र", en: "Birth Certificate" }, text: { hi: "आवेदन और डाउनलोड", en: "Apply and download" } },
  { href: "/service/caste-certificate.html", emoji: "📜", title: { hi: "जाति प्रमाण पत्र", en: "Caste Certificate" }, text: { hi: "SC/ST/OBC प्रमाण पत्र", en: "SC/ST/OBC certificate" } },
  { href: "/service/udid-disability-card-download.html", emoji: "♿", title: { hi: "UDID / दिव्यांग कार्ड", en: "UDID / Disability Card" }, text: { hi: "आवेदन, स्टेटस, डाउनलोड", en: "Apply, status, download" } },
  { href: "/service/e-shram-card.html", emoji: "🪪", title: { hi: "e-Shram कार्ड", en: "e-Shram Card" }, text: { hi: "असंगठित मज़दूरों का कार्ड", en: "Card for unorganised workers" } },
];

// Documents that have a page for every state at /states/<state>-<slug>.html
export const DOCS: { slug: string; emoji: string; title: Text; text: Text; national?: string }[] = [
  { slug: "senior-citizen-card", emoji: "👴", title: { hi: "सीनियर सिटीजन कार्ड", en: "Senior Citizen Card" }, text: { hi: "60+ पहचान पत्र, पेंशन और 70+ आयुष्मान", en: "60+ ID card, pension, Ayushman 70+" }, national: "/service/senior-citizen-card.html" },
  { slug: "labour-card", emoji: "👷", title: { hi: "लेबर कार्ड (BOCW)", en: "Labour Card (BOCW)" }, text: { hi: "निर्माण मज़दूर पंजीकरण और योजनाएं", en: "Construction worker registration and benefits" } },
  { slug: "ration-card", emoji: "🍚", title: { hi: "राशन कार्ड", en: "Ration Card" }, text: { hi: "नया कार्ड, नाम जोड़ना, e-KYC", en: "New card, add member, e-KYC" }, national: "/service/ration-card.html" },
  { slug: "voter-id-card", emoji: "🗳️", title: { hi: "वोटर ID कार्ड", en: "Voter ID Card" }, text: { hi: "नया कार्ड, सुधार, डाउनलोड", en: "New card, correction, download" }, national: "/service/voter-id-card.html" },
  { slug: "sir-voter-list", emoji: "📋", title: { hi: "SIR वोटर लिस्ट", en: "SIR Voter List" }, text: { hi: "लिस्ट में अपना नाम देखें", en: "Check your name in the list" } },
  { slug: "employment-exchange", emoji: "💼", title: { hi: "रोज़गार कार्यालय कार्ड", en: "Employment Exchange Card" }, text: { hi: "Employment exchange पंजीकरण", en: "Job-seeker registration" } },
  { slug: "birth-certificate", emoji: "👶", title: { hi: "जन्म प्रमाण पत्र", en: "Birth Certificate" }, text: { hi: "आवेदन, सुधार, डाउनलोड", en: "Apply, correct, download" }, national: "/service/birth-certificate.html" },
  { slug: "death-certificate", emoji: "🕊️", title: { hi: "मृत्यु प्रमाण पत्र", en: "Death Certificate" }, text: { hi: "आवेदन और डाउनलोड", en: "Apply and download" }, national: "/service/death-certificate.html" },
  { slug: "caste-certificate", emoji: "📜", title: { hi: "जाति प्रमाण पत्र", en: "Caste Certificate" }, text: { hi: "SC/ST/OBC प्रमाण पत्र", en: "SC/ST/OBC certificate" }, national: "/service/caste-certificate.html" },
  { slug: "income-certificate", emoji: "💰", title: { hi: "आय प्रमाण पत्र", en: "Income Certificate" }, text: { hi: "छात्रवृत्ति और योजनाओं के लिए", en: "For scholarships and schemes" }, national: "/service/income-certificate.html" },
  { slug: "domicile-certificate", emoji: "🏠", title: { hi: "निवास / डोमिसाइल प्रमाण पत्र", en: "Domicile Certificate" }, text: { hi: "राज्य का स्थायी निवासी प्रमाण", en: "Proof of permanent residence" }, national: "/service/domicile-certificate.html" },
  { slug: "driving-licence", emoji: "🚗", title: { hi: "ड्राइविंग लाइसेंस", en: "Driving Licence" }, text: { hi: "लर्निंग, पक्का लाइसेंस, रिन्यूअल", en: "Learner, permanent, renewal" }, national: "/service/driving-licence.html" },
];

export const NATIONAL_DOCS: Card[] = [
  { href: "/service/aadhaar-card.html", emoji: "🆔", title: { hi: "आधार कार्ड", en: "Aadhaar Card" }, text: { hi: "नया, अपडेट, डाउनलोड", en: "New, update, download" } },
  { href: "/service/pan-card.html", emoji: "💳", title: { hi: "PAN कार्ड", en: "PAN Card" }, text: { hi: "नया PAN, सुधार, आधार लिंक", en: "New PAN, correction, Aadhaar link" } },
  { href: "/service/passport.html", emoji: "🛂", title: { hi: "पासपोर्ट", en: "Passport" }, text: { hi: "आवेदन, फीस, अपॉइंटमेंट", en: "Apply, fees, appointment" } },
  { href: "/service/ayushman-bharat.html", emoji: "🏥", title: { hi: "आयुष्मान कार्ड", en: "Ayushman Card" }, text: { hi: "₹5 लाख तक मुफ्त इलाज", en: "Free treatment up to ₹5 lakh" } },
  { href: "/service/e-shram-card.html", emoji: "🪪", title: { hi: "e-Shram कार्ड", en: "e-Shram Card" }, text: { hi: "असंगठित मज़दूरों का कार्ड", en: "Card for unorganised workers" } },
  { href: "/service/udid-disability-card-download.html", emoji: "♿", title: { hi: "UDID कार्ड", en: "UDID Card" }, text: { hi: "दिव्यांग पहचान पत्र", en: "Disability ID card" } },
];

export type PaidService = {
  href: string; emoji: string; title: string; text: Text; price: string; unit: Text;
  live: boolean; points: Text[];
};

// Paid services. The GSTIN page keeps its existing payment flow.
export const PAID_SERVICES: PaidService[] = [
  {
    href: "/services/gstin-verification/", emoji: "🧾", title: "GSTIN Verification", price: "₹20", unit: { hi: "प्रति GSTIN", en: "per GSTIN" }, live: true,
    text: { hi: "किसी भी GST नंबर की जानकारी साफ रिपोर्ट में: असली है या नहीं, चालू है या बंद।", en: "Details of any GST number in a clear report: genuine or not, active or cancelled." },
    points: [
      { hi: "Legal name और trade name", en: "Legal name and trade name" },
      { hi: "Active / Cancelled स्टेटस", en: "Active / Cancelled status" },
      { hi: "पंजीकरण की तारीख और राज्य", en: "Registration date and state" },
      { hi: "PDF रिपोर्ट डाउनलोड", en: "Downloadable PDF report" },
    ],
  },
  {
    href: "/private/rc-challan/", emoji: "🚗", title: "RC e-Challan Report", price: "₹49", unit: { hi: "प्रति गाड़ी", en: "per vehicle" }, live: false,
    text: { hi: "गाड़ी नंबर डालें और सभी pending traffic challan एक रिपोर्ट में देखें।", en: "Enter a vehicle number and see all pending traffic challans in one report." },
    points: [
      { hi: "Pending challan की गिनती", en: "Number of pending challans" },
      { hi: "Challan नंबर, तारीख, राशि", en: "Challan number, date, amount" },
      { hi: "Offence और राज्य", en: "Offence and state" },
      { hi: "एक से ज़्यादा challan एक साथ", en: "Multiple challans together" },
    ],
  },
];

// Trending strip under the homepage hero: bright tiles people click straight
// away. Keep it to what people are searching for right now (GSC) and update it
// as demand changes.
export const TRENDING: { href: string; label: Text; tone: "saffron" | "green" | "blue" | "red" | "purple" | "teal" }[] = [
  { href: "/service/senior-citizen-card.html", label: { hi: "सीनियर सिटीजन कार्ड", en: "Senior Citizen Card" }, tone: "saffron" },
  { href: "/service/ayushman-bharat-vayo-vandana.html", label: { hi: "आयुष्मान वय वंदना 70+", en: "Ayushman Vay Vandana 70+" }, tone: "green" },
  { href: "/documents/#labour-card", label: { hi: "लेबर कार्ड", en: "Labour Card" }, tone: "blue" },
  { href: "/special-intensive-revision-sir.html", label: { hi: "SIR वोटर लिस्ट", en: "SIR Voter List" }, tone: "red" },
  { href: "/service/pm-kisan.html", label: { hi: "PM किसान किस्त", en: "PM Kisan Instalment" }, tone: "green" },
  { href: "/service/mh-ladki-bahin-yojana.html", label: { hi: "लाडकी बहिन योजना", en: "Ladki Bahin Yojana" }, tone: "purple" },
  { href: "/service/jh-maiya-samman-yojana.html", label: { hi: "मैया सम्मान योजना", en: "Maiya Samman Yojana" }, tone: "purple" },
  { href: "/services/gstin-verification/", label: { hi: "GST नंबर चेक ₹20", en: "GST Number Check ₹20" }, tone: "teal" },
  { href: "/exams/index.html", label: { hi: "Exam Calendar 2026", en: "Exam Calendar 2026" }, tone: "blue" },
  { href: "/service/national-scholarship-portal.html", label: { hi: "NSP स्कॉलरशिप", en: "NSP Scholarship" }, tone: "saffron" },
  { href: "/tools/csc-locator.html", label: { hi: "नज़दीकी CSC सेंटर", en: "CSC Near Me" }, tone: "teal" },
  { href: "/service/jan-aushadhi-store-locator.html", label: { hi: "जन औषधि केंद्र", en: "Jan Aushadhi Kendra" }, tone: "red" },
];
