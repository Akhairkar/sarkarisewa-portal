import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Near-duplicate of
// /states/uttarakhand-ration-card.html, so this post takes the "online route,
// checking your card/status, and why applications get stuck" angle and links
// there for the full office process.
// Sources: reused from web/src/guides/doc/uttarakhand-ration-card.ts (checked
// 4 Oct 2026): fcs.uk.gov.in (new card via DSO urban / BDO-GPO rural, Supply
// Inspector verification, ₹5 fee, documents, 5-year validity + 2-month
// renewal window, surrender certificate on transfer), nfsa.gov.in/State/UK
// (RCMS public login for online apply, FEAST "Find RC Details", Know Your
// Ration Entitlement, helpdesk 1800-180-2000 / 1800-180-4188, CM Helpline),
// NFSA 2013 s.3 (AAY 35 kg/household, PHH 5 kg/person) and s.13 (eldest woman
// head), DFPD toll-free 1967. The old page's eligibility points (income limit,
// four-wheeler) and "income certificate" requirement could not be verified
// from the department pages and were dropped.
// Old title was cut off ("2026:"); completed from its h1.

const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
const RCMS = ext("https://rcmspds.uk.gov.in/PublicLogin/frmPublicLogin.aspx", "RCMS उत्तराखंड (Public Login)");
const NFSA = ext("https://nfsa.gov.in/State/UK", "nfsa.gov.in/State/UK");
const FEAST = ext("https://feast.uk.gov.in/FrmFindRcDetails.aspx", "Find RC Details");

export const uttarakhandRationCardOnlineApply2026EligibilityDocumentsStatusCheckGuiMso6bb5s0: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "उत्तराखंड राशन कार्ड ऑनलाइन" },
  ],
  docHi: "उत्तराखंड राशन कार्ड ऑनलाइन",
  title: "उत्तराखंड राशन कार्ड ऑनलाइन आवेदन 2026: पात्रता, दस्तावेज और स्टेटस चेक गाइड",
  description: "उत्तराखंड राशन कार्ड का ऑनलाइन आवेदन (RCMS), कार्ड की जानकारी और हक ऑनलाइन कैसे देखें, ज़रूरी कागज़, ₹5 फीस और आवेदन अटकने के आम कारण।",
  published: "2026-08-10",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "उत्तराखंड राशन कार्ड ऑनलाइन 2026: आवेदन, कार्ड की जानकारी कैसे देखें और अटकने पर क्या करें",
  lead: "उत्तराखंड में राशन कार्ड का ऑनलाइन आवेदन राज्य के RCMS पोर्टल (rcmspds.uk.gov.in) के Public Login से होता है, जिसका लिंक NFSA पोर्टल के उत्तराखंड पेज पर है। चाहें तो शहर में ज़िला पूर्ति कार्यालय (DSO) और गांव में BDO कार्यालय में फॉर्म जमा कर सकते हैं। दोनों तरीकों में पूर्ति निरीक्षक/ग्राम पंचायत अधिकारी घर आकर जांच करता है, और फीस सिर्फ ₹5 है। बने कार्ड की जानकारी FEAST उत्तराखंड के \"Find RC Details\" पेज पर दिखती है।",
  facts: [
    ["ऑनलाइन आवेदन", RCMS],
    ["फीस", "₹5"],
    ["कार्ड की जानकारी", `FEAST: ${FEAST}`],
    ["हेल्पलाइन", "1800-180-2000, 1800-180-4188"],
  ],
  sections: [
    {
      id: "online",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        `${NFSA} खोलें; वहां \"Don't have Ration Card in Uttarakhand? Apply here online\" के पास ${RCMS} का लिंक है।`,
        "Public Login में मोबाइल नंबर से खाता बनाएं/लॉगिन करें।",
        "नए राशन कार्ड का फॉर्म भरें। परिवार के हर सदस्य का नाम और जन्म तिथि आधार के अनुसार लिखें। मुखिया परिवार की 18 साल से बड़ी सबसे बुज़ुर्ग महिला होती है।",
        "पते का प्रमाण और बाकी कागज़ अपलोड करें, फॉर्म जमा करें और आवेदन संख्या संभालें।",
        "इसके बाद पूर्ति निरीक्षक (शहर) या ग्राम पंचायत अधिकारी (गांव) घर आकर जांच करता है; मंज़ूरी पर कार्ड नज़दीकी राशन दुकान (FPS) से जोड़ा जाता है।",
      ],
      callout: { kind: "info", html: "राज्य के पोर्टल कभी-कभी धीमे खुलते हैं। ऑनलाइन न हो पाए तो नज़दीकी <a href=\"/service/csc-locator/uttarakhand.html\">CSC</a> या सीधे DSO/BDO कार्यालय जाएं; वहां फॉर्म मुफ्त मिलता है। ऑफिस वाली पूरी प्रक्रिया: <a href=\"/states/uttarakhand-ration-card.html\">उत्तराखंड राशन कार्ड गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "परिवार के सदस्यों के आधार",
        "पते का प्रमाण: पानी, बिजली या टेलीफोन का बिल; किराये पर हैं तो किराये की रसीद",
        "दूसरे शहर/पंचायत से आए हैं तो पुराने इलाके का <strong>सरेंडर सर्टिफिकेट</strong>",
        "सरकारी/औद्योगिक संस्था के कर्मचारी या छात्र: संस्था प्रमुख से पते और सदस्यों का प्रमाण",
        "परिवार की मुखिया का फोटो",
      ],
    },
    {
      id: "prakar",
      title: "कौन सा कार्ड, कितना अनाज",
      table: {
        head: ["कार्ड", "किसके लिए", "अनाज (NFSA कानून)"],
        rows: [
          ["अंत्योदय (AAY)", "सबसे गरीब परिवार", "35 किलो प्रति परिवार/महीना"],
          ["प्राथमिक परिवार (PHH)", "राज्य द्वारा चिह्नित पात्र परिवार", "5 किलो प्रति व्यक्ति/महीना"],
          ["राज्य खाद्य योजना (SFY)", "NFSA से बाहर के परिवार", "राज्य के आवंटन के अनुसार"],
        ],
      },
      html: "<p>किस श्रेणी में कार्ड बनेगा, यह जांच के बाद विभाग तय करता है। अपना मौजूदा हक NFSA पोर्टल की \"Know Your Ration Entitlement\" रिपोर्ट में देखें।</p>",
    },
    {
      id: "status",
      title: "कार्ड और आवेदन की जानकारी कैसे देखें",
      list: [
        `<strong>बना हुआ कार्ड:</strong> FEAST उत्तराखंड के ${FEAST} पेज पर राशन कार्ड नंबर से विवरण।`,
        "<strong>आवेदन की स्थिति:</strong> RCMS Public Login में उसी मोबाइल से लॉगिन करके; ऑफलाइन आवेदन में पावती लेकर DSO/BDO कार्यालय से।",
        `<strong>ज़िलेवार राशन दुकानें और हक:</strong> ${NFSA} की रिपोर्ट।`,
      ],
    },
    {
      id: "atka",
      title: "आवेदन अटकने या रिजेक्ट होने के आम कारण",
      table: {
        head: ["कारण", "क्या करें"],
        rows: [
          ["किसी सदस्य का नाम पहले से दूसरे कार्ड में है", "पुराने कार्ड से नाम हटवाएं या सरेंडर सर्टिफिकेट लें, फिर आवेदन करें।"],
          ["नाम/जन्म तिथि आधार से मेल नहीं खाती", "आधार के अनुसार सही करें; ज़रूरत हो तो पहले आधार में सुधार कराएं।"],
          ["पते का प्रमाण अधूरा या दूसरे पते का", "मौजूदा पते का बिल या किराये की रसीद लगाएं।"],
          ["जांच के समय घर पर कोई नहीं मिला", "DSO/BDO कार्यालय में पावती लेकर फिर से जांच की तारीख पूछें।"],
          ["पुराना कार्ड 5 साल बाद रिन्यू नहीं हुआ", "अवधि खत्म होने के 2 महीने के अंदर रिन्यू न करने पर नाम रजिस्टर से हट जाता है; रिन्यूअल का आवेदन (₹5) करें।"],
        ],
      },
      callout: { kind: "warn", html: "राशन कार्ड बनवाने के नाम पर ₹5 से ज़्यादा मांगने वाले से सावधान रहें। शिकायत: 1800-180-2000 / 1800-180-4188, <a href=\"https://cmhelpline.uk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CM हेल्पलाइन उत्तराखंड</a> या केंद्र का टोल-फ्री 1967।" },
    },
  ],
  official: [
    { href: "https://rcmspds.uk.gov.in/", title: "RCMS उत्तराखंड: ऑनलाइन आवेदन (Public Login)" },
    { href: "https://nfsa.gov.in/State/UK", title: "NFSA पोर्टल: उत्तराखंड की रिपोर्ट और लिंक" },
    { href: "https://fcs.uk.gov.in/", title: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, उत्तराखंड" },
    { href: "https://cmhelpline.uk.gov.in/", title: "CM हेल्पलाइन उत्तराखंड (शिकायत)" },
  ],
  faq: [
    { q: "क्या उत्तराखंड में राशन कार्ड ऑनलाइन बनता है?", a: "हां, RCMS पोर्टल (rcmspds.uk.gov.in) के Public Login से आवेदन होता है। उसके बाद भी घर पर जांच होती है।" },
    { q: "राशन कार्ड की फीस कितनी है?", a: "विभाग के अनुसार ₹5; फॉर्म मुफ्त है।" },
    { q: "राशन कार्ड बनने में कितना समय लगता है?", a: "विभाग ने कोई एक तय समय नहीं बताया है; यह जांच पर निर्भर है। देर हो तो पावती लेकर DSO/BDO कार्यालय में पूछें या हेल्पलाइन पर कॉल करें।" },
    { q: "अपना राशन कार्ड नंबर कैसे देखें?", a: "FEAST उत्तराखंड के Find RC Details पेज पर, या अपनी राशन दुकान/DSO कार्यालय से।" },
  ],
  related: [
    { href: "/states/uttarakhand-ration-card.html", emoji: "🍚", title: "उत्तराखंड राशन कार्ड गाइड", text: "ऑफिस प्रक्रिया, बदलाव, ट्रांसफर" },
    { href: "/service/ration-card.html", emoji: "🧾", title: "राशन कार्ड (सभी राज्य)", text: "NFSA, वन नेशन वन राशन कार्ड" },
    { href: "/states/uttarakhand-income-certificate.html", emoji: "💰", title: "उत्तराखंड आय प्रमाण पत्र", text: "योजनाओं के लिए" },
    { href: "/states/uttarakhand-birth-certificate.html", emoji: "👶", title: "उत्तराखंड जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/service/csc-locator/uttarakhand.html", emoji: "📍", title: "उत्तराखंड CSC सेंटर", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://rcmspds.uk.gov.in/PublicLogin/frmPublicLogin.aspx", label: "📝 ऑनलाइन आवेदन (RCMS)" },
    { href: "/states/uttarakhand-ration-card.html", label: "📘 पूरी गाइड" },
  ],
};
