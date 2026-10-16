import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old generic blog post (same URL). Related to
// /service/aadhaar-card.html and /service/aadhaar-mobile-update.html (which
// mention status only briefly), so this post is a how-to for one situation:
// checking an update request and what each status means.
// Sources (checked 16 Oct 2026; uidai.gov.in not reachable from the sandbox):
// - Reused from web/src/guides/doc/aadhaar-card.ts and aadhaar-mobile-update.ts
//   (UIDAI fee document and OMs): helpline 1947; myAadhaar portal; enrolment
//   slip has EID; update slip has URN/SRN; demographic update ₹75 at centres;
//   online document (POI/POA) update free on myAadhaar till 14.06.2027.
// - Search extracts (Axis Bank, SMFG India Credit, L&T Finance explainers
//   describing the myAadhaar "Check Enrolment & Update Status" option): EID
//   for new enrolment, URN (14 digits) for updates, SRN for online service
//   requests; rejected request does not affect the existing Aadhaar; a fresh
//   request gets a new URN. Processing times quoted by these sites vary
//   (7-90 days) and are not official, so no fixed time is given.
// Old title was cut off ("ऑनलाइन कैसे"); completed.

const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
const MYAADHAAR = ext("https://myaadhaar.uidai.gov.in/", "myaadhaar.uidai.gov.in");

export const trackAadhaarUpdateStatusOnline: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "आधार अपडेट स्टेटस" },
  ],
  docHi: "आधार अपडेट स्टेटस",
  title: "अपने आधार अपडेट की स्थिति ऑनलाइन कैसे ट्रैक करें",
  description: "आधार अपडेट का अनुरोध किया है और स्थिति नहीं पता? पर्ची के URN/SRN से myAadhaar पर स्टेटस कैसे देखें, हर स्टेटस का मतलब और रिजेक्ट होने पर क्या करें।",
  published: "2026-06-02",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "आधार अपडेट स्टेटस कैसे देखें: URN/SRN से चेक, स्टेटस का मतलब और रिजेक्ट होने पर क्या करें",
  lead: "आधार में नाम, पता, जन्म तिथि, मोबाइल या फोटो बदलवाने पर एक पर्ची या SMS मिलता है, जिस पर अनुरोध संख्या (URN या SRN) लिखी होती है। इसी नंबर से myaadhaar.uidai.gov.in पर \"Check Enrolment & Update Status\" में स्टेटस मुफ्त में दिखता है। नया आधार बनवाया है तो पर्ची की नामांकन संख्या (EID) से देखें। दिक्कत हो तो UIDAI हेल्पलाइन 1947 पर बात करें।",
  facts: [
    ["कहां देखें", MYAADHAAR],
    ["अपडेट का नंबर", "URN / SRN (पर्ची या SMS पर)"],
    ["नए आधार का नंबर", "EID (नामांकन पर्ची पर)"],
    ["हेल्पलाइन", "1947"],
  ],
  sections: [
    {
      id: "number",
      title: "कौन सा नंबर कहां मिलेगा",
      table: {
        head: ["आपने क्या किया", "नंबर", "कहां लिखा होता है"],
        rows: [
          ["आधार केंद्र पर अपडेट (नाम, पता, मोबाइल, बायोमेट्रिक)", "URN (Update Request Number)", "केंद्र की पर्ची (Acknowledgement) पर"],
          ["myAadhaar पर ऑनलाइन पता/दस्तावेज़ अपडेट", "SRN (Service Request Number), बाद में URN", "स्क्रीन पर, ईमेल/SMS में; Acknowledgement डाउनलोड करें"],
          ["नया आधार नामांकन", "EID (Enrolment ID), तारीख-समय के साथ", "नामांकन पर्ची पर"],
        ],
      },
      callout: { kind: "info", html: "पर्ची खो गई? अनुरोध के समय आया SMS देखें। myAadhaar में लॉग-इन करने पर भी पिछले अनुरोधों का इतिहास (Update Request History) दिख सकता है।" },
    },
    {
      id: "steps",
      title: "स्टेटस कैसे देखें",
      steps: [
        `${MYAADHAAR} खोलें।`,
        "<strong>Check Enrolment & Update Status</strong> (या \"Check Aadhaar Update Status\") विकल्प चुनें।",
        "URN/SRN या EID डालें, कैप्चा भरें और <strong>Submit</strong> करें।",
        "स्टेटस दिखेगा। पूरा होने पर नया आधार myAadhaar से डाउनलोड करें; छपा हुआ आधार डाक से अलग आता है।",
      ],
    },
    {
      id: "matlab",
      title: "स्टेटस का मतलब",
      table: {
        head: ["स्टेटस", "मतलब", "क्या करें"],
        rows: [
          ["In progress / Under process", "अनुरोध जांच में है", "इंतज़ार करें। कुछ दिन से कुछ हफ्ते लग सकते हैं; कोई तय दिन नहीं है।"],
          ["Completed / Update successful", "आधार में बदलाव हो गया", "myAadhaar से नया e-Aadhaar डाउनलोड करें और बैंक/दूसरी जगह नई जानकारी दें।"],
          ["Rejected", "अनुरोध नहीं माना गया (आम वजह: दस्तावेज़ पर नाम/पता मेल नहीं खाता, फोटो धुंधली, गलत दस्तावेज़)", "कारण पढ़ें, सही और साफ दस्तावेज़ से नया अनुरोध करें। नए अनुरोध का नया URN बनेगा। पुराना आधार चलता रहता है।"],
        ],
      },
    },
    {
      id: "dikkat",
      title: "आम दिक्कतें",
      list: [
        "<strong>\"Invalid URN\" दिख रहा:</strong> नंबर दोबारा पर्ची से मिलाकर डालें। ऑनलाइन अनुरोध में पहले SRN मिलता है; उसी से देखें।",
        "<strong>बहुत दिनों से In progress:</strong> 1947 पर कॉल करें या UIDAI की शिकायत सेवा में URN के साथ शिकायत दर्ज करें।",
        "<strong>रिजेक्ट हुआ, फीस कटी:</strong> रिजेक्ट अनुरोध की फीस आमतौर पर वापस नहीं होती; नया अनुरोध सावधानी से करें।",
        "<strong>मोबाइल अपडेट के बाद OTP नहीं आ रहा:</strong> जब तक स्टेटस पूरा न हो, नया नंबर काम नहीं करता। मोबाइल अपडेट के लिए देखें: <a href=\"/service/aadhaar-mobile-update.html\">आधार में मोबाइल नंबर अपडेट</a>।",
      ],
      callout: { kind: "ok", html: "myAadhaar पर पहचान/पते के दस्तावेज़ ऑनलाइन अपडेट करना 14 जून 2027 तक मुफ्त है; आधार केंद्र पर नाम/पता जैसे बदलाव की फीस ₹75 है। फीस और नियम: <a href=\"/service/aadhaar-card.html\">आधार कार्ड गाइड</a>।" },
    },
  ],
  official: [
    { href: "https://myaadhaar.uidai.gov.in/", title: "myAadhaar पोर्टल", note: "अपडेट स्टेटस, e-Aadhaar डाउनलोड" },
    { href: "https://uidai.gov.in/", title: "UIDAI आधिकारिक वेबसाइट", note: "हेल्पलाइन 1947" },
  ],
  faq: [
    { q: "आधार अपडेट स्टेटस देखने में पैसे लगते हैं?", a: "नहीं, myAadhaar पर स्टेटस देखना मुफ्त है।" },
    { q: "URN और SRN में क्या फर्क है?", a: "URN आधार केंद्र या अपडेट अनुरोध की संख्या है; SRN ऑनलाइन सेवा अनुरोध की संख्या है। ऑनलाइन अपडेट में पहले SRN मिलता है।" },
    { q: "अपडेट होने में कितने दिन लगते हैं?", a: "UIDAI कोई एक तय समय नहीं बताता; आमतौर पर कुछ दिन से कुछ हफ्ते। ज़्यादा देर हो तो 1947 पर पूछें।" },
    { q: "रिजेक्ट होने पर पुराना आधार बंद हो जाता है?", a: "नहीं, पुराना आधार पहले जैसा चलता रहता है। सिर्फ बदलाव नहीं हुआ।" },
  ],
  related: [
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड गाइड", text: "नामांकन, अपडेट, फीस" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल अपडेट", text: "OTP न आए तो" },
    { href: "/service/aadhaar-pan-linking.html", emoji: "🔗", title: "आधार-पैन लिंकिंग", text: "स्टेटस और फीस" },
    { href: "/service/digilocker.html", emoji: "🗂️", title: "DigiLocker", text: "आधार फोन में रखें" },
  ],
  aside: [
    { href: "https://myaadhaar.uidai.gov.in/", label: "🆔 myAadhaar खोलें" },
    { href: "/service/aadhaar-card.html", label: "📘 आधार कार्ड गाइड" },
  ],
};
