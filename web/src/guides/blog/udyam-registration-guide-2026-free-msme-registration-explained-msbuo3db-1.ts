import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/udyam-registration.html, so this post takes the explainer angle for
// small shop owners: do I need it, common myths (GST, fee, renewal), what it
// really gives, and links to the guide for the step-by-step.
// Sources (checked 16 Oct 2026), reused from web/src/guides/doc/udyam-registration.ts
// and udyam-msme-re-registration.ts: Udyam portal homepage extract (free,
// paperless, Udyam Assist Platform for informal micro enterprises, "Beware of
// fake sites"); MSME notification S.O. 1364(E) dt 21.03.2025, effective
// 01.04.2025 (micro ₹2.5 cr / ₹10 cr; small ₹25 cr / ₹100 cr; medium ₹125 cr /
// ₹500 cr), superseding S.O. 2119(E) 2020 (no renewal; ITR/GST auto-update;
// export turnover excluded). The old page still showed the 2020 limits
// (₹1 cr / ₹5 cr etc.); corrected. "Patent/trademark fee subsidy" claim of the
// old page not re-verified, left out.
// Old title was cut off ("MSME के लिए मुफ़्त"); completed from its h1.

const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
const PORTAL = ext("https://udyamregistration.gov.in/", "udyamregistration.gov.in");

export const udyamRegistrationGuide2026FreeMsmeRegistrationExplainedMsbuo3db1: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "उद्यम पंजीकरण समझें" },
  ],
  docHi: "उद्यम पंजीकरण",
  title: "उद्यम पंजीकरण गाइड 2026: MSME के लिए मुफ़्त रजिस्ट्रेशन कैसे करें",
  description: "छोटे व्यवसाय मालिकों के लिए उद्यम पंजीकरण की पूरी जानकारी: 2025 से लागू नई MSME सीमाएं, GST और फीस से जुड़े भ्रम, मुफ्त रजिस्ट्रेशन और असली फ़ायदे।",
  published: "2026-08-02",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "उद्यम पंजीकरण 2026: किसे करवाना चाहिए, आम भ्रम और मुफ्त में कैसे करें",
  lead: "उद्यम पंजीकरण MSME मंत्रालय का मुफ्त ऑनलाइन पंजीकरण है, जो साबित करता है कि आपका व्यवसाय सूक्ष्म, लघु या मध्यम उद्यम है। किराना दुकान, छोटी फैक्ट्री, सर्विस का काम, सब इसमें आ सकते हैं। यह सिर्फ udyamregistration.gov.in पर आधार और PAN से होता है, इसकी कोई फीस नहीं है और नवीनीकरण भी नहीं करना पड़ता। 1 अप्रैल 2025 से सूक्ष्म उद्यम की सीमा ₹2.5 करोड़ निवेश और ₹10 करोड़ टर्नओवर है।",
  facts: [
    ["फीस", "मुफ्त (सरकारी पोर्टल पर)"],
    ["पोर्टल", PORTAL],
    ["सूक्ष्म उद्यम (2025 से)", "निवेश ₹2.5 करोड़ तक, टर्नओवर ₹10 करोड़ तक"],
    ["नवीनीकरण", "ज़रूरत नहीं"],
  ],
  notice: "\"Udyam Registration\" नाम से कई प्राइवेट वेबसाइटें फीस लेती हैं। सरकारी पोर्टल पर पंजीकरण मुफ्त है।",
  sections: [
    {
      id: "kise",
      title: "किसे उद्यम पंजीकरण करवाना चाहिए",
      list: [
        "जो <strong>बैंक से बिज़नेस लोन</strong> (मुद्रा, CGTMSE गारंटी वाला लोन) लेना चाहते हैं; बैंक अक्सर उद्यम प्रमाण पत्र मांगते हैं।",
        "जो <strong>सरकारी खरीद/टेंडर</strong> (GeM) में सामान या सेवा बेचना चाहते हैं।",
        "जो किसी बड़ी कंपनी को माल देते हैं और <strong>भुगतान में देरी</strong> होती है।",
        "जो केंद्र या राज्य की MSME योजनाओं और सब्सिडी का लाभ लेना चाहते हैं।",
      ],
      callout: { kind: "info", html: "उद्यम पंजीकरण कानूनन सबके लिए अनिवार्य नहीं है, पर ऊपर के फायदे इसी से मिलते हैं। मुफ्त है, इसलिए छोटे व्यवसाय के लिए करा लेना फायदेमंद है।" },
    },
    {
      id: "seema",
      title: "नई MSME सीमाएं (1 अप्रैल 2025 से)",
      table: {
        head: ["श्रेणी", "प्लांट/मशीनरी में निवेश", "सालाना टर्नओवर"],
        rows: [
          ["सूक्ष्म (Micro)", "₹2.5 करोड़ तक", "₹10 करोड़ तक"],
          ["लघु (Small)", "₹25 करोड़ तक", "₹100 करोड़ तक"],
          ["मध्यम (Medium)", "₹125 करोड़ तक", "₹500 करोड़ तक"],
        ],
      },
      html: "<p>दोनों सीमाएं देखी जाती हैं; कोई एक भी पार हो तो अगली श्रेणी लगती है। निर्यात का टर्नओवर नहीं जुड़ता। पुराने लेखों में दिखने वाली ₹1 करोड़/₹5 करोड़ वाली सीमा अब लागू नहीं है।</p>",
    },
    {
      id: "bhram",
      title: "आम भ्रम और सच",
      table: {
        head: ["भ्रम", "सच"],
        rows: [
          ["GST नंबर के बिना उद्यम नहीं बनता", "जिन पर GST लागू नहीं, वे बिना GSTIN पंजीकरण कर सकते हैं। जिनके पास PAN भी नहीं, ऐसे अनौपचारिक सूक्ष्म उद्यम Udyam Assist Platform (UAP) से पंजीकरण करा सकते हैं।"],
          ["इसके लिए ₹1,000-₹2,000 फीस लगती है", "सरकारी पोर्टल पर कोई फीस नहीं। फीस लेने वाली साइटें प्राइवेट हैं।"],
          ["हर साल नवीनीकरण करना पड़ता है", "नहीं। प्रमाण पत्र स्थायी है; निवेश/टर्नओवर ITR और GST से अपने-आप अपडेट होते हैं। पता या काम बदले तो पोर्टल पर अपडेट करें।"],
          ["पंजीकरण से तुरंत लोन मिल जाता है", "नहीं। लोन बैंक अपनी जांच से देता है; उद्यम प्रमाण पत्र सिर्फ MSME होने का सबूत है।"],
          ["पुराना उद्योग आधार (UAM) चल जाएगा", "UAM अब मान्य नहीं; पोर्टल पर UAM वाले विकल्प से उद्यम में बदलें।"],
        ],
      },
    },
    {
      id: "kaise",
      title: "पंजीकरण छोटे में",
      steps: [
        `${PORTAL} पर \"For New Entrepreneurs who are not Registered yet as MSME\" चुनें।`,
        "आधार नंबर और नाम डालकर OTP से सत्यापन करें, फिर PAN सत्यापित करें।",
        "व्यवसाय का नाम, पता, बैंक विवरण, काम (NIC कोड), कर्मचारी, निवेश और टर्नओवर भरें।",
        "फाइनल OTP से सबमिट करें; उद्यम नंबर मिलता है और प्रमाण पत्र पोर्टल से डाउनलोड होता है। कोई दस्तावेज़ अपलोड नहीं करना होता।",
      ],
      callout: { kind: "ok", html: "हर स्टेप विस्तार से: <a href=\"/service/udyam-registration.html\">उद्यम पंजीकरण गाइड</a>। ऑनलाइन में दिक्कत हो तो <a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> पर मदद लें।" },
    },
  ],
  official: [
    { href: "https://udyamregistration.gov.in/", title: "उद्यम पंजीकरण पोर्टल (MSME मंत्रालय)", note: "पंजीकरण मुफ्त है" },
    { href: "https://msme.gov.in/", title: "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय" },
  ],
  faq: [
    { q: "क्या किराना दुकान का उद्यम पंजीकरण हो सकता है?", a: "हां, खुदरा और थोक व्यापार भी उद्यम पंजीकरण करा सकते हैं।" },
    { q: "उद्यम पंजीकरण की फीस कितनी है?", a: "कोई फीस नहीं। सरकारी पोर्टल udyamregistration.gov.in पर यह मुफ्त है।" },
    { q: "सूक्ष्म उद्यम की सीमा अब क्या है?", a: "1 अप्रैल 2025 से प्लांट/मशीनरी में ₹2.5 करोड़ तक निवेश और ₹10 करोड़ तक सालाना टर्नओवर।" },
    { q: "प्रमाण पत्र में कोई कागज़ अपलोड करना पड़ता है?", a: "नहीं, पंजीकरण बिना कागज़ के आधार, PAN और आपकी दी गई जानकारी पर होता है। गलत जानकारी देने पर ज़िम्मेदारी आपकी है।" },
  ],
  related: [
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम पंजीकरण गाइड", text: "स्टेप-बाय-स्टेप" },
    { href: "/service/udyam-msme-re-registration.html", emoji: "🔄", title: "उद्योग आधार से उद्यम", text: "UAM माइग्रेशन और अपडेट" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "बिज़नेस लोन" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🏦", title: "CGTMSE लोन गारंटी", text: "बिना गिरवी लोन" },
    { href: "/service/gst.html", emoji: "🧾", title: "GST", text: "GST पंजीकरण और रिटर्न" },
  ],
  aside: [
    { href: "https://udyamregistration.gov.in/", label: "🌐 उद्यम पोर्टल (मुफ्त)" },
    { href: "/service/udyam-registration.html", label: "📘 पूरी गाइड" },
  ],
};
