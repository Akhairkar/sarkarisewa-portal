import type { DocGuide } from "./types";

// Sources (checked 24 Oct 2026; official sites not reachable from the
// sandbox, search-result extracts used): digitalseva.csc.gov.in (G2C and B2C
// e-services; menu groups Government services incl. Election, Aadhaar,
// Passport, PAN; Insurance; Banking incl. DigiPay and Jan Dhan; B2C incl.
// utility bills via BBPS, VLE Bazaar, health, agriculture; Travel; service
// grid incl. Ayushman Bharat, PM-Kisan, PM-SVANidhi, PMFBY, e-Shram; services
// page groups Aadhaar, Banking and Pension, Education, Government, Health,
// Skills, eLegal consultancy, Telemedicine, PMAY), MeitY "List of Services
// offered through CSCs" (2024, incl. Tele-Legal Consultation). Commission
// rates: no official current chart found (blogs disagree), so none are
// given; the page points to the rates shown on the portal.
export const cscServicesList: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "आपके पास", href: "/near-me/" },
    { label: "CSC सेवाओं की सूची" },
  ],
  docHi: "CSC सेवाओं की सूची",
  vle: true,
  title: "CSC सेवाओं की सूची 2026: जन सेवा केंद्र पर कौन से काम होते हैं",
  description: "CSC / जन सेवा केंद्र पर मिलने वाली सरकारी और दूसरी सेवाएं: आधार, PAN, आयुष्मान, PM-Kisan, बैंकिंग, बीमा, बिल भुगतान। VLE की कमाई कैसे होती है।",
  published: "2026-10-24",
  modified: "2026-10-24",
  verified: "24 अक्टूबर 2026",
  h1: "CSC सेवाओं की सूची 2026: जन सेवा केंद्र पर कौन-कौन से काम होते हैं और VLE की कमाई कैसे होती है",
  lead: "CSC (जन सेवा केंद्र) पर <strong>सरकारी सेवाएं (G2C)</strong> जैसे आयुष्मान कार्ड, PM-Kisan, e-Shram, PAN और पासपोर्ट आवेदन, और <strong>दूसरी सेवाएं (B2C)</strong> जैसे बैंकिंग, बीमा, बिल भुगतान और टिकट मिलती हैं। ये सेवाएं CSC के <a href=\"https://digitalseva.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Digital Seva पोर्टल</a> से दी जाती हैं। हर केंद्र पर हर सेवा नहीं होती; कई सेवाओं के लिए VLE को अलग मंज़ूरी लेनी होती है।",
  facts: [
    ["सेवाओं का पोर्टल", "<a href=\"https://digitalseva.csc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">Digital Seva</a>"],
    ["प्रकार", "सरकारी (G2C) और दूसरी (B2C) सेवाएं"],
    ["नज़दीकी केंद्र", "<a href=\"/tools/csc-locator.html\">CSC लोकेटर</a>"],
    ["हेल्पलाइन", "<a href=\"tel:18001213468\">1800-121-3468</a>"],
  ],
  sections: [
    {
      id: "suchi",
      title: "CSC पर मिलने वाली मुख्य सेवाएं",
      table: {
        head: ["श्रेणी", "सेवाएं (उदाहरण)"],
        rows: [
          ["सरकारी योजनाएं", "<a href=\"/service/ayushman-bharat.html\">आयुष्मान कार्ड</a>, <a href=\"/service/pm-kisan.html\">PM-Kisan</a>, <a href=\"/service/e-shram-card.html\">e-Shram</a>, PM-SVANidhi, फसल बीमा (PMFBY), PM आवास योजना"],
          ["पहचान के कागज़", "<a href=\"/service/pan-card.html\">PAN कार्ड</a>, <a href=\"/service/passport.html\">पासपोर्ट</a> आवेदन, वोटर सेवाएं; आधार सेवाएं सिर्फ UIDAI से मंज़ूर केंद्रों पर"],
          ["बैंकिंग और पेंशन", "DigiPay (आधार से पैसे निकालना), बैंक मित्र सेवाएं, जन धन खाता, पेंशन"],
          ["बीमा", "जीवन, स्वास्थ्य, वाहन और दूसरी बीमा पॉलिसी"],
          ["बिल और रिचार्ज", "बिजली, पानी, गैस के बिल (BBPS), मोबाइल/DTH रिचार्ज"],
          ["शिक्षा और कौशल", "ऑनलाइन कोर्स और प्रमाणपत्र, परीक्षा फॉर्म"],
          ["स्वास्थ्य और कानूनी सलाह", "टेलीमेडिसिन, ऑनलाइन कानूनी सलाह"],
          ["राज्य की सेवाएं", "आय, जाति, निवास प्रमाण पत्र आदि (जिन राज्यों में CSC से होते हैं)"],
        ],
      },
      callout: { kind: "info", html: "किसी केंद्र पर कौन सी सेवा है, यह उस केंद्र से पूछकर ही जाएं। अपने ज़िले के केंद्र <a href=\"/tools/csc-locator.html\">CSC लोकेटर</a> से खोजें।" },
    },
    {
      id: "kamai",
      title: "VLE की कमाई कैसे होती है",
      list: [
        "हर सेवा पर VLE को <strong>कमीशन</strong> मिलता है या वह तय <strong>सेवा शुल्क</strong> लेता है। रकम सेवा के हिसाब से अलग होती है और समय-समय पर बदलती है।",
        "हर सेवा की मौजूदा दर Digital Seva पोर्टल पर उस सेवा के पेज पर दिखती है; इंटरनेट पर घूम रहे पुराने \"कमीशन चार्ट\" पर भरोसा न करें।",
        "सबसे ज़्यादा काम आम तौर पर रोज़ की ज़रूरत वाली सेवाओं में होता है: बैंकिंग (पैसे निकालना/भेजना), बिल भुगतान, सरकारी योजनाओं के फॉर्म और प्रमाण पत्र।",
        "ग्राहक का भरोसा ही कमाई है: रेट लिस्ट लगाएं, हर काम की रसीद दें और तय से ज़्यादा पैसे न लें।",
      ],
    },
    {
      id: "vle-tools",
      title: "VLE के लिए हमारे फ्री टूल",
      list: [
        "<a href=\"/tools/document-compressor.html\">फोटो/PDF छोटा करें</a> और <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a>: फॉर्म के साइज़ में फाइल।",
        "<a href=\"/arzi/\">आवेदन पत्र फॉर्मेट</a>: 100 से ज़्यादा अर्ज़ियां भरें और प्रिंट करें।",
        "<a href=\"/status-check/\">स्टेटस चेक</a>: PM-Kisan, राशन, पेंशन जैसी योजनाओं का स्टेटस।",
        "<a href=\"/jobs/index.html\">नई सरकारी भर्तियां</a>: ग्राहकों के ऑनलाइन फॉर्म के लिए तारीखें और योग्यता।",
      ],
    },
  ],
  official: [
    { href: "https://digitalseva.csc.gov.in/", title: "Digital Seva पोर्टल", note: "digitalseva.csc.gov.in" },
    { href: "https://www.csc.gov.in/", title: "CSC e-Governance Services India", note: "csc.gov.in" },
  ],
  faq: [
    { q: "CSC पर कौन-कौन सी सेवाएं मिलती हैं?", a: "आयुष्मान कार्ड, PM-Kisan, e-Shram, PAN और पासपोर्ट आवेदन जैसी सरकारी सेवाएं, और बैंकिंग, बीमा, बिल भुगतान, रिचार्ज जैसी दूसरी सेवाएं। हर केंद्र पर हर सेवा नहीं होती।" },
    { q: "क्या हर CSC पर आधार बनता है?", a: "नहीं। आधार सेवाएं सिर्फ UIDAI से मंज़ूर केंद्रों पर होती हैं। जाने से पहले केंद्र से पूछ लें।" },
    { q: "CSC VLE कितना कमाता है?", a: "कमाई सेवाओं और ग्राहकों की संख्या पर निर्भर है। हर सेवा पर कमीशन या सेवा शुल्क अलग है और बदलता रहता है; मौजूदा दर Digital Seva पोर्टल पर उस सेवा के पेज पर देखें।" },
    { q: "CSC पर ज़्यादा पैसे लिए जाएं तो शिकायत कहां करें?", a: "CSC हेल्पलाइन 1800-121-3468 या helpdesk@csc.gov.in पर। आधार के लिए UIDAI हेल्पलाइन 1947।" },
  ],
  related: [
    { href: "/service/csc-registration-kaise-kare.html", emoji: "🏪", title: "CSC रजिस्ट्रेशन", text: "CSC सेंटर कैसे खोलें" },
    { href: "/service/csc-tec-certificate.html", emoji: "🎓", title: "TEC सर्टिफिकेट", text: "कोर्स, फीस और परीक्षा" },
    { href: "/service/digital-seva-portal-login.html", emoji: "🔐", title: "Digital Seva लॉगिन", text: "पासवर्ड और ID की दिक्कतें" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "अपने ज़िले के केंद्र" },
  ],
  aside: [
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC खोजें" },
    { href: "/claim-your-csc.html", label: "🏪 अपना केंद्र फ्री जोड़ें" },
  ],
};
