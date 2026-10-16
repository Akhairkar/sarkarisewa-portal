import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 16 Oct 2026; udyamregistration.gov.in not reachable from
// the sandbox, search-result extract of its homepage used): Udyam portal
// homepage ("free of cost", paperless; entries "For those having registration
// as UAM", "Update/Cancel Udyam Registration", "Print/Verify Udyam
// Certificate", "Beware of fake sites"), Ministry of MSME notification S.O.
// 2119(E) dt 26.06.2020 (Udyam replaces Udyog Aadhaar; no renewal; data
// auto-updated from ITR/GST) and S.O. 1364(E) dt 21.03.2025 (revised limits
// from 01.04.2025) via News On AIR / Tribune; Bajaj Finserv guide on UAM
// migration (UAM number + OTP on registered mobile/email). The exact last
// date of UAM validity differs between sources, so no date is given.
export const udyamMsmeReRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "उद्यम प्रमाण पत्र अपडेट" },
  ],
  docHi: "उद्योग आधार / उद्यम अपडेट",
  promo: gstinPromo,
  title: "उद्योग आधार / उद्यम एमएसएमई नवीनीकरण (Udyam Certificate)",
  description: "पुराने उद्योग आधार (UAM) को उद्यम में बदलें, उद्यम प्रमाण पत्र डाउनलोड करें और विवरण अपडेट करें। नवीनीकरण की ज़रूरत नहीं, पोर्टल पर सब मुफ्त।",
  published: "2024-06-01",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "उद्योग आधार से उद्यम, सर्टिफिकेट डाउनलोड और अपडेट: क्या उद्यम का नवीनीकरण होता है?",
  lead: "उद्यम प्रमाण पत्र का <strong>नवीनीकरण (renewal) नहीं होता</strong>; एक बार बना पंजीकरण स्थायी है। जिनके पास पुराना <strong>उद्योग आधार (UAM)</strong> है, उन्हें उद्यम पोर्टल पर \"UAM\" वाले विकल्प से नया उद्यम पंजीकरण लेना होता है, क्योंकि उद्योग आधार अब मान्य नहीं है। पता, बैंक, काम का प्रकार जैसी जानकारी बदलने पर पोर्टल के \"Update\" विकल्प से मुफ्त में बदलाव करें।",
  facts: [
    ["नवीनीकरण", "ज़रूरी नहीं (पंजीकरण स्थायी)"],
    ["पुराना उद्योग आधार", "उद्यम में बदलना ज़रूरी"],
    ["फीस", "मुफ्त (सरकारी पोर्टल पर)"],
    ["पोर्टल", "udyamregistration.gov.in"],
  ],
  notice: "\"Udyam renewal\" के नाम पर पैसे लेने वाली वेबसाइटें प्राइवेट हैं। सरकारी पोर्टल पर माइग्रेशन, अपडेट और प्रिंट सब मुफ्त है।",
  sections: [
    {
      id: "uam",
      title: "पुराना उद्योग आधार (UAM) उद्यम में कैसे बदलें",
      steps: [
        '<a href="https://udyamregistration.gov.in/" target="_blank" rel="noopener nofollow">udyamregistration.gov.in</a> पर "For those having registration as UAM" चुनें।',
        "अपना उद्योग आधार नंबर डालें और UAM में दर्ज मोबाइल/ईमेल पर आए OTP से सत्यापन करें।",
        "मोबाइल/ईमेल बदल गया हो या याद न हो, तो नए पंजीकरण वाले विकल्प से आधार और PAN के साथ आवेदन करें।",
        "PAN, GSTIN (लागू हो तो), बैंक, निवेश और टर्नओवर की जानकारी भरें और सबमिट करें।",
        "नया उद्यम नंबर (UDYAM-XX-00-0000000) और प्रमाण पत्र मिलेगा। बैंक और ग्राहकों को नया नंबर दें।",
      ],
    },
    {
      id: "update",
      title: "उद्यम पंजीकरण में जानकारी कैसे अपडेट करें",
      steps: [
        "पोर्टल पर \"Update/Cancel Udyam Registration\" विकल्प चुनें।",
        "उद्यम नंबर और पंजीकृत मोबाइल नंबर डालकर OTP से लॉगिन करें।",
        "पता, बैंक खाता, NIC कोड, कर्मचारी, मोबाइल/ईमेल जैसी जानकारी बदलें और फाइनल सबमिट करें।",
        "व्यवसाय बंद हो गया हो तो इसी विकल्प से पंजीकरण रद्द (cancel) किया जा सकता है।",
      ],
      callout: { kind: "info", html: "निवेश और टर्नओवर के आंकड़े आयकर रिटर्न और GST से अपने-आप लिए जाते हैं, इसलिए ITR और GST रिटर्न समय पर भरें। 1 अप्रैल 2025 से सूक्ष्म उद्यम की सीमा ₹2.5 करोड़ निवेश और ₹10 करोड़ टर्नओवर है।" },
    },
    {
      id: "print",
      title: "उद्यम प्रमाण पत्र डाउनलोड/प्रिंट और जांच",
      list: [
        "<strong>प्रिंट:</strong> पोर्टल पर \"Print/Verify\" में \"Print Udyam Certificate\" चुनें, उद्यम नंबर और मोबाइल OTP डालें।",
        "<strong>जांच:</strong> किसी दूसरे का उद्यम नंबर सही है या नहीं, \"Verify Udyam Registration Number\" से देखें।",
        "<strong>उद्यम नंबर भूल गए:</strong> पोर्टल पर \"Forgot Udyam/UAM No.\" विकल्प से पंजीकृत मोबाइल/ईमेल पर पाएं।",
      ],
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "<strong>दोबारा पंजीकरण:</strong> एक PAN पर एक ही उद्यम पंजीकरण होता है। नई यूनिट जोड़नी हो तो उसी पंजीकरण में अपडेट करें।",
        "<strong>PAN-आधार में नाम का फर्क:</strong> नाम मेल न खाए तो सत्यापन अटकता है; पहले PAN या आधार सुधारें।",
        "<strong>फर्जी साइट:</strong> सिर्फ .gov.in वाली साइट इस्तेमाल करें।",
      ],
    },
  ],
  official: [
    { href: "https://udyamregistration.gov.in/", title: "उद्यम पंजीकरण पोर्टल (MSME मंत्रालय)", note: "माइग्रेशन, अपडेट, प्रिंट: मुफ्त" },
    { href: "https://msme.gov.in/", title: "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय" },
  ],
  faq: [
    { q: "क्या उद्यम प्रमाण पत्र का हर साल नवीनीकरण होता है?", a: "नहीं। उद्यम पंजीकरण स्थायी है। सिर्फ जानकारी बदलने पर अपडेट करना होता है।" },
    { q: "क्या पुराना उद्योग आधार अभी चलता है?", a: "नहीं। उद्योग आधार (UAM) की जगह उद्यम पंजीकरण ने ले ली है। पोर्टल के UAM विकल्प से उद्यम में बदलें।" },
    { q: "UAM वाला मोबाइल नंबर बंद है, क्या करें?", a: "नए उद्यम पंजीकरण वाले विकल्प से आधार और PAN के साथ सीधे पंजीकरण करें।" },
    { q: "उद्यम सर्टिफिकेट दोबारा कैसे डाउनलोड करें?", a: "पोर्टल पर Print/Verify में \"Print Udyam Certificate\" चुनकर उद्यम नंबर और OTP से।" },
  ],
  related: [
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम पंजीकरण", text: "नया MSME पंजीकरण" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "बिज़नेस लोन" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🏦", title: "CGTMSE लोन गारंटी", text: "बिना गिरवी लोन" },
    { href: "/service/gst.html", emoji: "🧾", title: "GST", text: "GST पंजीकरण और रिटर्न" },
    { href: "/service/pan-card.html", emoji: "💳", title: "PAN कार्ड", text: "PAN में सुधार" },
  ],
  aside: [
    { href: "https://udyamregistration.gov.in/", label: "🌐 उद्यम पोर्टल (मुफ्त)" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
