import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; the portals could not be opened from the
// sandbox): Goa Directorate of Higher Education scheme page (Vidya Lakshmi
// portal developed and maintained by Protean eGov Technologies); Ministry of
// Education PIB note (PM-Vidyalaxmi central sector scheme launched 6 Nov 2024);
// PIB Research backgrounder on PM-Vidyalaxmi, 29 Jul 2026 (as summarised in
// pm-vidyalaxmi-scheme.ts: 1,425 QHEIs, collateral/guarantor-free, 75%
// guarantee up to ₹7.5 lakh, 3% interest subvention on loans up to ₹10 lakh
// for family income up to ₹8 lakh; portal pmvidyalaxmi.co.in); Bajaj Finserv
// and other explainers (Common Education Loan Application Form, apply to up
// to three banks, track status). The old page's "40+ banks", "application
// form PDF" and helpline "1800-11-0001 / 1947" were not verified and are
// removed; whether vidyalakshmi.co.in now redirects to the PM-Vidyalaxmi
// portal could not be confirmed, so both are named.
export const vidyaLakshmiEducationLoan: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "विद्या लक्ष्मी शिक्षा ऋण" },
  ],
  docHi: "विद्या लक्ष्मी शिक्षा ऋण",
  title: "विद्या लक्ष्मी पोर्टल शिक्षा ऋण (Vidya Lakshmi Loan)",
  description: "विद्या लक्ष्मी पोर्टल: एक ही फॉर्म (CELAF) से कई बैंकों में एजुकेशन लोन का आवेदन और स्टेटस। पीएम विद्यालक्ष्मी में बिना गारंटी लोन और ब्याज छूट, कागज़ और आवेदन के चरण।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "विद्या लक्ष्मी पोर्टल से एजुकेशन लोन: एक फॉर्म, कई बैंक, और पीएम विद्यालक्ष्मी के फायदे",
  lead: "विद्या लक्ष्मी पोर्टल छात्रों के लिए एजुकेशन लोन का ऑनलाइन प्लेटफॉर्म है, जहां एक ही सामान्य फॉर्म (Common Education Loan Application Form, CELAF) भरकर कई बैंकों में लोन का आवेदन किया जा सकता है और स्टेटस देखा जा सकता है। पोर्टल Protean eGov Technologies चलाती है। नवंबर 2024 से केंद्र सरकार की पीएम विद्यालक्ष्मी योजना के लोन और ब्याज छूट भी इसी प्लेटफॉर्म (pmvidyalaxmi.co.in) से होते हैं। लोन देना या न देना, ब्याज दर और राशि बैंक तय करता है।",
  facts: [
    ["क्या है", "एजुकेशन लोन का एक-जगह आवेदन पोर्टल"],
    ["फॉर्म", "CELAF (एक फॉर्म, कई बैंक)"],
    ["पोर्टल फीस", "पोर्टल पर आवेदन मुफ्त"],
    ["लोन कौन देता है", "बैंक, अपनी नीति के अनुसार"],
  ],
  sections: [
    {
      id: "kaise",
      title: "पोर्टल से आवेदन कैसे करें",
      steps: [
        "पोर्टल (<a href=\"https://www.vidyalakshmi.co.in/\" target=\"_blank\" rel=\"noopener nofollow\">vidyalakshmi.co.in</a> / <a href=\"https://pmvidyalaxmi.co.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmvidyalaxmi.co.in</a>) पर छात्र के ईमेल और मोबाइल से पंजीकरण करें।",
        "लॉगिन करके CELAF फॉर्म भरें: छात्र, माता-पिता/सह-आवेदक, कोर्स, कॉलेज, खर्च और मांगी गई लोन राशि।",
        "बैंक और शाखा चुनें (कई बैंकों में एक साथ आवेदन हो सकता है; संख्या की सीमा पोर्टल पर दिखती है)।",
        "कागज़ अपलोड करें और आवेदन जमा करें। हर बैंक में आवेदन का स्टेटस पोर्टल पर दिखता है।",
        "बैंक संपर्क करके कागज़ों की जांच करता है और लोन मंज़ूर या अस्वीकार करता है।",
      ],
      callout: { kind: "info", html: "पोर्टल पर आवेदन का कोई शुल्क नहीं है। प्रोसेसिंग फीस, ब्याज दर और गारंटी/जमानत की शर्त बैंक की नीति के अनुसार होती है (पीएम विद्यालक्ष्मी में पात्र छात्रों के लिए जमानत नहीं)।" },
    },
    {
      id: "pm-vidyalaxmi",
      title: "पीएम विद्यालक्ष्मी योजना के फायदे",
      intro: "जो छात्र देश के चुने हुए 1,425 गुणवत्ता उच्च शिक्षा संस्थानों (QHEI) में अपनी मेरिट से दाखिला पाते हैं, उन्हें पोर्टल के ज़रिए ये फायदे मिल सकते हैं:",
      list: [
        "<strong>बिना जमानत और बिना गारंटर</strong> एजुकेशन लोन; ₹7.5 लाख तक के लोन पर सरकार बैंक को 75% गारंटी देती है।",
        "<strong>3% ब्याज छूट:</strong> परिवार की सालाना आय ₹8 लाख तक हो तो ₹10 लाख तक के लोन पर पढ़ाई (मोरेटोरियम) के दौरान।",
        "मैनेजमेंट/NRI कोटे के दाखिले इसमें शामिल नहीं।",
      ],
      callout: { kind: "ok", html: "पूरी शर्तें हमारी <a href=\"/service/pm-vidyalaxmi-scheme.html\">पीएम विद्यालक्ष्मी योजना गाइड</a> में देखें।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "छात्र और सह-आवेदक (माता-पिता) का आधार, PAN और फोटो",
        "10वीं, 12वीं और पिछली पढ़ाई की मार्कशीट",
        "दाखिले का पत्र (admission letter) और कॉलेज की फीस का ब्योरा",
        "सह-आवेदक की आय का प्रमाण (सैलरी स्लिप/ITR/आय प्रमाण पत्र)",
        "बैंक पासबुक/स्टेटमेंट; विदेश में पढ़ाई के लिए पासपोर्ट और वीज़ा से जुड़े कागज़",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें",
      list: [
        "<strong>बैंक जवाब नहीं दे रहा:</strong> पोर्टल पर स्टेटस और बैंक की टिप्पणी देखें; फिर चुनी गई शाखा से सीधे संपर्क करें।",
        "<strong>लोन अस्वीकार:</strong> कारण पोर्टल पर दिखता है। कमी दूर करके दूसरे बैंक में आवेदन कर सकते हैं।",
        "<strong>शिकायत:</strong> बैंक की शिकायत व्यवस्था में लिखें; 30 दिन में हल न हो तो RBI लोकपाल (<a href=\"https://cms.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">cms.rbi.org.in</a>)।",
      ],
    },
  ],
  official: [
    { href: "https://www.vidyalakshmi.co.in/", title: "विद्या लक्ष्मी पोर्टल" },
    { href: "https://pmvidyalaxmi.co.in/", title: "पीएम विद्यालक्ष्मी पोर्टल" },
    { href: "https://www.education.gov.in/", title: "शिक्षा मंत्रालय, भारत सरकार" },
  ],
  faq: [
    { q: "विद्या लक्ष्मी पोर्टल क्या है?", a: "एजुकेशन लोन का ऑनलाइन प्लेटफॉर्म, जहां एक ही फॉर्म (CELAF) से कई बैंकों में आवेदन करके स्टेटस देखा जा सकता है।" },
    { q: "क्या विद्या लक्ष्मी पोर्टल लोन देता है?", a: "नहीं, पोर्टल सिर्फ आवेदन का माध्यम है। लोन बैंक देता है, और ब्याज दर व राशि बैंक की नीति से तय होती है।" },
    { q: "क्या आवेदन की कोई फीस है?", a: "पोर्टल पर आवेदन मुफ्त है। बैंक अपनी प्रोसेसिंग फीस ले सकता है।" },
    { q: "बिना गारंटी लोन किसे मिलता है?", a: "पीएम विद्यालक्ष्मी योजना में 1,425 चुने हुए उच्च शिक्षा संस्थानों में मेरिट से दाखिला पाने वाले छात्रों को बिना जमानत और बिना गारंटर लोन मिल सकता है।" },
    { q: "ब्याज में छूट कैसे मिलती है?", a: "पीएम विद्यालक्ष्मी में परिवार की सालाना आय ₹8 लाख तक हो तो ₹10 लाख तक के लोन पर पढ़ाई के दौरान 3% ब्याज छूट मिल सकती है; आवेदन पोर्टल से ही होता है।" },
  ],
  related: [
    { href: "/service/pm-vidyalaxmi-scheme.html", emoji: "🎓", title: "पीएम विद्यालक्ष्मी योजना", text: "बिना गारंटी लोन और ब्याज छूट" },
    { href: "/service/national-scholarship-portal.html", emoji: "📚", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "NSP छात्रवृत्ति" },
    { href: "/service/pm-usp-college-scholarship.html", emoji: "🏫", title: "PM-USP कॉलेज छात्रवृत्ति", text: "कॉलेज छात्रों के लिए" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र", text: "ब्याज छूट के लिए आय का प्रमाण" },
    { href: "/service/pan-card.html", emoji: "🪪", title: "PAN कार्ड", text: "लोन के लिए ज़रूरी" },
  ],
  aside: [
    { href: "https://www.vidyalakshmi.co.in/", label: "🎓 विद्या लक्ष्मी पोर्टल" },
    { href: "https://pmvidyalaxmi.co.in/", label: "🏛️ पीएम विद्यालक्ष्मी पोर्टल" },
  ],
};
