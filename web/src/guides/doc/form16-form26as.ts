import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): renumbering under the Income-tax Act, 2025
// and Income-tax Rules, 2026 effective 1 April 2026 (Form 16 -> Form 130
// under section 395 / Rule 215; Form 16A -> Form 131; Form 26AS -> Form 168;
// earlier years keep the old names) as reported by Free Press Journal,
// 5paisa, Shriram Life, Taxguru; first Form 130 for tax year 2026-27 expected
// in 2027. Form 16 for FY 2025-26 due by 15 June 2026 under Rule 31 of the
// 1961 Rules. 26AS access via incometax.gov.in e-filing (TRACES) and AIS.
// Exact title of Form 168 differs between sources, so it is described only
// as the replacement of 26AS.
export const form16Form26as: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "फॉर्म 16 / 26AS" },
  ],
  docHi: "फॉर्म 16 / 26AS",
  title: "फॉर्म 16 / फॉर्म 26AS 2026",
  description: "फॉर्म 16 आपके नियोक्ता का TDS प्रमाण पत्र है; फॉर्म 26AS आपका समेकित कर क्रेडिट विवरण है। कहां से डाउनलोड करें, मिलान कैसे करें और 2026 से नए नंबर (फॉर्म 130, 168)।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "फॉर्म 16 और फॉर्म 26AS: डाउनलोड, मिलान और 2026 के नए फॉर्म नंबर",
  lead: "फॉर्म 16 नियोक्ता की ओर से दिया गया सैलरी पर कटे TDS का प्रमाण पत्र है, और फॉर्म 26AS आयकर पोर्टल पर आपके PAN पर जमा सारे TDS/TCS और टैक्स का विवरण। रिटर्न भरने से पहले दोनों का मिलान करें। नए आयकर अधिनियम 2025 के तहत टैक्स वर्ष 2026-27 से फॉर्म 16 का नाम <strong>फॉर्म 130</strong> और 26AS का <strong>फॉर्म 168</strong> हो गया है; 2025-26 तक के लिए पुराने नाम ही चलेंगे।",
  facts: [
    ["फॉर्म 16 कौन देता है", "नियोक्ता (TRACES से बना)"],
    ["फॉर्म 16 (2025-26)", "15 जून 2026 तक"],
    ["26AS कहां", "आयकर ई-फाइलिंग पोर्टल (TRACES)"],
    ["2026-27 से नए नाम", "फॉर्म 130 (16), फॉर्म 168 (26AS)"],
  ],
  sections: [
    {
      id: "antar",
      title: "फॉर्म 16 और 26AS में फर्क",
      table: {
        head: ["", "फॉर्म 16", "फॉर्म 26AS"],
        rows: [
          ["क्या है", "सैलरी पर कटे TDS का प्रमाण पत्र", "PAN पर जमा सारे TDS/TCS, एडवांस/सेल्फ-असेसमेंट टैक्स का विवरण"],
          ["कौन देता है", "नियोक्ता", "आयकर विभाग (पोर्टल पर)"],
          ["कब", "वित्त वर्ष के बाद, 15 जून तक", "साल भर अपडेट होता है"],
          ["भाग", "भाग A (TDS जमा का विवरण), भाग B (वेतन और कटौतियां)", "कई भाग: TDS, TCS, टैक्स भुगतान, रिफंड आदि"],
        ],
      },
    },
    {
      id: "naye-number",
      title: "2026 से नए फॉर्म नंबर",
      list: [
        "आयकर अधिनियम 2025 और आयकर नियम 2026, <strong>1 अप्रैल 2026</strong> से लागू हुए।",
        "<strong>फॉर्म 16 → फॉर्म 130</strong>, फॉर्म 16A → फॉर्म 131, <strong>फॉर्म 26AS → फॉर्म 168</strong>।",
        "टैक्स वर्ष 2026-27 का पहला फॉर्म 130 साल खत्म होने के बाद, 2027 में मिलेगा।",
        "वित्त वर्ष 2025-26 या पहले के लिए फॉर्म 16 और 26AS ही इस्तेमाल होंगे।",
      ],
    },
    {
      id: "download",
      title: "कैसे डाउनलोड करें",
      steps: [
        "<strong>फॉर्म 16:</strong> अपने नियोक्ता/HR से लें; कई कंपनियां इसे HR पोर्टल या ईमेल पर देती हैं। नियोक्ता इसे TRACES से बनाता है, कर्मचारी खुद TRACES से फॉर्म 16 नहीं निकाल सकता।",
        "<strong>फॉर्म 26AS:</strong> <a href=\"https://www.incometax.gov.in/iec/foportal/\" target=\"_blank\" rel=\"noopener nofollow\">आयकर ई-फाइलिंग पोर्टल</a> पर PAN से लॉगिन करें।",
        "e-File → Income Tax Returns → View Form 26AS चुनें; TRACES वेबसाइट पर जाने की सहमति दें।",
        "वर्ष चुनकर HTML/PDF में देखें या डाउनलोड करें। PDF का पासवर्ड आम तौर पर आपकी जन्मतिथि (DDMMYYYY) होती है।",
        "साथ में <strong>AIS</strong> (वार्षिक सूचना विवरण) भी देखें, जिसमें ब्याज, डिविडेंड, शेयर आदि की जानकारी होती है।",
      ],
    },
    {
      id: "milan",
      title: "रिटर्न से पहले मिलान करें",
      list: [
        "फॉर्म 16 के भाग A का TDS, 26AS में नियोक्ता के TAN के सामने दिखे TDS से मिलना चाहिए।",
        "26AS में बैंक ब्याज पर कटा TDS भी दिखेगा; वह ब्याज आय रिटर्न में ज़रूर दिखाएं।",
        "<strong>TDS 26AS में नहीं दिख रहा:</strong> कटौती करने वाले (नियोक्ता/बैंक) से TDS रिटर्न सही PAN के साथ भरने या सुधारने को कहें।",
        "गलत आय/लेनदेन दिखे तो AIS में फीडबैक दें।",
      ],
      callout: { kind: "warn", html: "रिटर्न में वही TDS क्रेडिट मिलता है जो 26AS में दिखता है। फर्क होने पर रिफंड रुक सकता है या नोटिस आ सकता है।" },
    },
  ],
  official: [
    { href: "https://www.incometax.gov.in/iec/foportal/", title: "आयकर ई-फाइलिंग पोर्टल", note: "26AS, AIS, रिटर्न" },
    { href: "https://www.tdscpc.gov.in/", title: "TRACES (TDS केंद्र)" },
    { href: "https://www.incometaxindia.gov.in/", title: "आयकर विभाग", note: "नया अधिनियम और नियम" },
  ],
  faq: [
    { q: "फॉर्म 16 कब तक मिल जाना चाहिए?", a: "वित्त वर्ष 2025-26 के लिए नियोक्ता को 15 जून 2026 तक फॉर्म 16 देना था। टैक्स वर्ष 2026-27 से यह फॉर्म 130 कहलाएगा।" },
    { q: "क्या फॉर्म 16 अब फॉर्म 130 हो गया है?", a: "हां, आयकर अधिनियम 2025 के तहत टैक्स वर्ष 2026-27 से फॉर्म 16 का नया नंबर फॉर्म 130 है। पुराने वर्षों के लिए फॉर्म 16 ही रहेगा।" },
    { q: "फॉर्म 26AS कहां से डाउनलोड करें?", a: "आयकर ई-फाइलिंग पोर्टल पर लॉगिन करके e-File → Income Tax Returns → View Form 26AS से, जो TRACES पर खुलता है।" },
    { q: "नियोक्ता ने TDS काटा पर 26AS में नहीं दिख रहा, क्या करूं?", a: "नियोक्ता से पूछें कि TDS रिटर्न सही PAN के साथ भरा गया या नहीं। सुधार के बाद 26AS में दिखने लगेगा।" },
    { q: "क्या बिना फॉर्म 16 के रिटर्न भर सकते हैं?", a: "हां, सैलरी स्लिप और 26AS/AIS से आय और TDS का हिसाब लेकर रिटर्न भर सकते हैं।" },
  ],
  related: [
    { href: "/service/income-tax-return-filing.html", emoji: "🧾", title: "ITR फाइलिंग", text: "रिटर्न भरने की जानकारी" },
    { href: "/service/ais-annual-information-statement.html", emoji: "📊", title: "AIS", text: "वार्षिक सूचना विवरण" },
    { href: "/service/form-15g-15h-submission.html", emoji: "📄", title: "फॉर्म 121 (15G/15H)", text: "ब्याज पर TDS से बचाव" },
    { href: "/service/tds-refund-status.html", emoji: "💸", title: "TDS रिफंड स्टेटस", text: "रिफंड कब आएगा" },
    { href: "/tools/income-tax-calculator.html", emoji: "🧮", title: "इनकम टैक्स कैलकुलेटर", text: "टैक्स का हिसाब" },
  ],
  aside: [
    { href: "https://www.incometax.gov.in/iec/foportal/", label: "🧾 आयकर पोर्टल" },
    { href: "/tools/income-tax-calculator.html", label: "🧮 टैक्स कैलकुलेटर" },
  ],
};
