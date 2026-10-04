import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, crumbs, cards, NOT_ADVICE, SOON, ext } from "./common";

// /rent-agreement/tenant-police-verification.html. Sources (checked 4 Oct 2026):
// - Delhi: delhipolice.gov.in home page service tile "Domestic Help/Tenant
//   Registration" -> cctns.delhipolice.gov.in/citizenservices/ (Citizen Login,
//   Create an account; page says to call 112 for immediate help); Delhi Police
//   Citizen's Charter (delhipolice.gov.in/doc/Citizen_Charter.pdf) item 6(e)
//   "Tenant Verification ... The owners of the house are required to inform
//   local police whenever they keep a tenant. Tenant Verification form can be
//   downloaded from website" and the advice to landlords not to let out premises
//   without checking the tenant's antecedents.
// - Maharashtra: mahapolice.gov.in/instruction-regarding-tenants/ ("भाडेकरुबाबत
//   सुचना") and its form uploads/instruction_for_tenants/ApplicationForm.pdf
//   (addressed to the police station in-charge; landlord, premises, tenant,
//   agent, rental period; tenant photo, ID such as driving licence/Aadhaar/
//   election card/passport copy, employer details and employer letter; signed
//   by landlord and tenant).
// - Uttar Pradesh: uppolice.gov.in citizen services menu: "Tenant/PG
//   Verification" on cctnsup.gov.in/citizenportal (login).
// - Haryana: haryanapolice.gov.in/CitizenServiceFee.aspx ("List of 29 Citizen
//   Services available on 'HarSamay24*7' Citizen Portal"): item 9 Tenant
//   Verification (if resident of other District/State and after receiving the
//   verification from other District/State) - HarSamay, eSaral portals &
//   JanSahayak App - 21 days - Rs. 50; item 23 Stranger Verification (if
//   resident of Haryana) - 5 days - Rs. 50; item 3 Domestic Help Verification.
const DP = "https://cctns.delhipolice.gov.in/citizenservices/";
const MH_FORM = "https://www.mahapolice.gov.in/uploads/instruction_for_tenants/ApplicationForm.pdf";
const UP = "https://uppolice.gov.in/";
const HR = "https://haryanapolice.gov.in/CitizenServiceFee.aspx";

export const police: DocGuide = {
  crumbs: crumbs("किरायेदार पुलिस वेरिफिकेशन"),
  docHi: "किरायेदार पुलिस वेरिफिकेशन",
  title: "किरायेदार पुलिस वेरिफिकेशन: राज्यवार तरीका | SarkariSewa India",
  description: "किरायेदार का पुलिस वेरिफिकेशन कैसे कराएं: दिल्ली और UP पुलिस के ऑनलाइन पोर्टल, महाराष्ट्र पुलिस का फॉर्म, हरियाणा में फीस और समय-सीमा, ज़रूरी दस्तावेज़।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "किरायेदार पुलिस वेरिफिकेशन: राज्यवार official तरीका",
  lead: "घर किराए पर देते समय मकान मालिक किरायेदार की जानकारी स्थानीय पुलिस को देता है ताकि पुलिस उसकी पहचान और पृष्ठभूमि जांच सके। दिल्ली पुलिस के नागरिक चार्टर में लिखा है कि किरायेदार रखने पर मकान मालिक को स्थानीय पुलिस को सूचित करना होता है; ऑनलाइन \"Domestic Help/Tenant Registration\" दिल्ली पुलिस की citizen services साइट पर है। उत्तर प्रदेश पुलिस \"Tenant/PG Verification\" अपने citizen portal पर देती है, हरियाणा पुलिस HarSamay/eSaral पोर्टल और JanSahayak App पर ₹50 फीस में, और महाराष्ट्र पुलिस ने थाने में देने का फॉर्म जारी किया है।",
  facts: [
    ["दिल्ली", ext(DP, "cctns.delhipolice.gov.in/citizenservices")],
    ["उत्तर प्रदेश", "UP Police citizen portal: Tenant/PG Verification"],
    ["हरियाणा", "HarSamay / eSaral / JanSahayak App, ₹50"],
    ["महाराष्ट्र", ext(MH_FORM, "भाडेकरू सूचना फॉर्म (PDF)") + ", थाने में"],
  ],
  notice: NOT_ADVICE,
  sections: [
    {
      id: "kyon",
      title: "पुलिस वेरिफिकेशन क्यों और कौन कराता है",
      intro: "यह प्रक्रिया आम तौर पर <strong>मकान मालिक</strong> शुरू करता है, क्योंकि जानकारी उसी के घर के बारे में होती है; किरायेदार दस्तावेज़ और फोटो देता है। दिल्ली पुलिस के नागरिक चार्टर के अनुसार यह जांच इसलिए होती है ताकि संदिग्ध पहचान वाला कोई व्यक्ति किरायेदार बनकर न रहे, और चार्टर मकान मालिकों और प्रॉपर्टी डीलरों को सलाह देता है कि किरायेदार की पृष्ठभूमि जाने बिना जगह किराए पर न दें।",
      list: [
        "एग्रीमेंट साइन होने और शिफ्ट होने के समय ही जानकारी दे दें",
        "किरायेदार बदलने पर नई जानकारी दें",
        "रसीद/आवेदन नंबर संभाल कर रखें; यह आपके पास सबूत रहता है",
        "रेंट एग्रीमेंट की कॉपी साथ रखें; कई फॉर्म में किराए की अवधि पूछी जाती है",
      ],
      callout: SOON,
    },
    {
      id: "delhi",
      title: "दिल्ली: Domestic Help/Tenant Registration",
      steps: [
        `दिल्ली पुलिस की वेबसाइट delhipolice.gov.in पर Services में <strong>\"Domestic Help/Tenant Registration\"</strong> चुनें। यह ${ext(DP, "cctns.delhipolice.gov.in/citizenservices")} खोलता है।`,
        "पहली बार हैं तो <strong>Create an account</strong> से अकाउंट बनाएं, फिर <strong>Citizen Login</strong> करें।",
        "लॉगिन के बाद Tenant Registration का फॉर्म भरें। मकान मालिक, किराए की जगह और किरायेदार की जानकारी, फोटो और पहचान पत्र पहले से तैयार रखें (नीचे दस्तावेज़ों की सूची देखें)।",
        "सबमिट के बाद मिला रजिस्ट्रेशन/रिक्वेस्ट नंबर सेव करें।",
      ],
      callout: { kind: "info", html: "दिल्ली पुलिस का नागरिक चार्टर कहता है कि किरायेदार वेरिफिकेशन फॉर्म delhipolice.gov.in से डाउनलोड भी किया जा सकता है। साइट खुद लिखती है कि तुरंत मदद चाहिए तो <strong>112</strong> पर कॉल करें, क्योंकि ऑनलाइन सेवा पर कार्रवाई में समय लग सकता है। दिल्ली के रेंट एग्रीमेंट नियम: <a href=\"/rent-agreement/\">रेंट एग्रीमेंट गाइड</a>।" },
    },
    {
      id: "maharashtra",
      title: "महाराष्ट्र: थाने में भाडेकरू सूचना फॉर्म",
      intro: `महाराष्ट्र पुलिस की वेबसाइट पर \"भाडेकरूंबद्दल सूचना\" पेज पर एक फॉर्म (${ext(MH_FORM, "ApplicationForm.pdf")}) है जो <strong>ठाणे प्रभारी</strong> (पुलिस स्टेशन इंचार्ज) के नाम है, विषय \"घर भाड्याने देताना पोलीस ठाण्यास कळविण्याची माहिती\"। इसमें ये जानकारी भरी जाती है:`,
      table: {
        head: ["फॉर्म का हिस्सा", "क्या भरना है"],
        rows: [
          ["1. घरमालक", "नाम, पता, फोन/मोबाइल, व्यवसाय"],
          ["2. जगह", "किराए पर दी गई जगह का पता"],
          ["3. भाडेकरू (किरायेदार)", "नाम, उम्र, पिछला पता, मूल गांव का पता, संपर्क नंबर, ई-मेल"],
          ["4. एजेंट (हो तो)", "नाम, पता, मूल गांव का पता, फोन, ई-मेल"],
          ["5. अवधि", "किराए की अवधि"],
          ["6. किरायेदार के कागज़", "पासपोर्ट साइज़ फोटो; पहचान पत्र (ड्राइविंग लाइसेंस, आधार, वोटर कार्ड या पासपोर्ट की कॉपी); जहां काम करता है उस संस्था का नाम-पता-फोन-ई-मेल और वहां काम करने का पत्र"],
        ],
      },
      html: "<p>फॉर्म के आखिर में मकान मालिक और किरायेदार दोनों साइन करते हैं और लिखते हैं कि जानकारी सही है; गलत पाई गई तो कानूनी कार्रवाई हो सकती है। भरा हुआ फॉर्म अपने इलाके के पुलिस स्टेशन में दें और रिसीविंग लें। मुंबई, पुणे जैसे कमिश्नरेट की अपनी ऑनलाइन व्यवस्था हो सकती है; उसे अपने पुलिस कमिश्नरेट की official साइट पर देखें। महाराष्ट्र में एग्रीमेंट का रजिस्ट्रेशन: <a href=\"/rent-agreement/\">रेंट एग्रीमेंट गाइड</a>।</p>",
    },
    {
      id: "uttar-pradesh",
      title: "उत्तर प्रदेश: UP Police citizen portal पर Tenant/PG Verification",
      steps: [
        `${ext(UP, "uppolice.gov.in")} पर <strong>Janhit Sevayen / Citizen Services</strong> मेन्यू खोलें।`,
        "<strong>Tenant/PG Verification</strong> चुनें; यह UP Police के citizen portal (cctnsup.gov.in) के लॉगिन पेज पर ले जाता है।",
        "अकाउंट से लॉगिन करके फॉर्म भरें; किरायेदार की फोटो, पहचान पत्र और पते की जानकारी पहले से तैयार रखें।",
        "आवेदन नंबर सेव करें और पोर्टल पर स्टेटस देखें।",
      ],
      callout: { kind: "info", html: "इसी मेन्यू में Domestic Help Verification, Employee Verification और Character Verification भी हैं। UP में 12 माह तक का किरायानामा सरकारी पोर्टल पर ऑनलाइन बनता है: <a href=\"/rent-agreement/uttar-pradesh.html\">UP किरायानामा गाइड</a>।" },
    },
    {
      id: "haryana",
      title: "हरियाणा: HarSamay, eSaral और JanSahayak App",
      intro: `हरियाणा पुलिस की ${ext(HR, "Timeline and Fee for Citizen Services")} सूची के अनुसार:`,
      table: {
        head: ["सेवा", "कहां", "समय-सीमा (RTS Act)", "फीस"],
        rows: [
          ["Tenant Verification (किरायेदार दूसरे ज़िले/राज्य का हो; उस ज़िले/राज्य से जांच मिलने के बाद)", "HarSamay, eSaral पोर्टल, JanSahayak App", "21 दिन", "₹50"],
          ["Stranger Verification (हरियाणा का निवासी हो)", "HarSamay, eSaral पोर्टल, JanSahayak App", "5 दिन", "₹50"],
          ["Domestic Help Verification (स्थानीय निवासी)", "HarSamay, eSaral पोर्टल, JanSahayak App", "21 दिन", "₹50"],
        ],
      },
      html: "<p>हरियाणा पुलिस की वेबसाइट पर <strong>Citizen Login</strong> से भी citizen services में जाया जाता है। किरायेदार दूसरे राज्य का है तो रिपोर्ट उस राज्य से आने में समय लगता है; इसलिए शिफ्ट होते ही आवेदन करें।</p>",
    },
    {
      id: "dastavez",
      title: "आम तौर पर लगने वाले दस्तावेज़",
      list: [
        "किरायेदार की हाल की पासपोर्ट साइज़ फोटो",
        "किरायेदार का पहचान पत्र (आधार, वोटर कार्ड, ड्राइविंग लाइसेंस या पासपोर्ट; राज्य का फॉर्म देखें)",
        "किरायेदार का स्थायी/मूल पता और पिछला पता",
        "नौकरी/काम की जगह का विवरण (महाराष्ट्र फॉर्म में संस्था का पत्र भी)",
        "मकान मालिक का नाम, पता, मोबाइल",
        "किराए की जगह का पूरा पता और अवधि; रेंट एग्रीमेंट की कॉपी रखना उपयोगी",
      ],
    },
  ],
  official: [
    { href: DP, title: "दिल्ली पुलिस: Citizen Services (Tenant Registration)" },
    { href: "https://delhipolice.gov.in/doc/Citizen_Charter.pdf", title: "दिल्ली पुलिस नागरिक चार्टर (PDF)", note: "Tenant Verification" },
    { href: "https://www.mahapolice.gov.in/instruction-regarding-tenants/", title: "महाराष्ट्र पुलिस: भाडेकरूंबद्दल सूचना", note: "फॉर्म PDF" },
    { href: UP, title: "उत्तर प्रदेश पुलिस", note: "Citizen Services → Tenant/PG Verification" },
    { href: HR, title: "हरियाणा पुलिस: Citizen Services की समय-सीमा और फीस" },
  ],
  faq: [
    { q: "किरायेदार का पुलिस वेरिफिकेशन कौन कराता है?", a: "आम तौर पर मकान मालिक, क्योंकि जानकारी उसके घर और किरायेदार के बारे में दी जाती है। किरायेदार फोटो और पहचान पत्र देता है। दिल्ली पुलिस के नागरिक चार्टर में लिखा है कि किरायेदार रखने पर मकान मालिक को स्थानीय पुलिस को सूचित करना होता है।" },
    { q: "दिल्ली में किरायेदार वेरिफिकेशन ऑनलाइन कैसे करें?", a: "delhipolice.gov.in पर Services में Domestic Help/Tenant Registration चुनें, जो cctns.delhipolice.gov.in/citizenservices खोलता है। अकाउंट बनाकर Citizen Login करें और फॉर्म भरें। दिल्ली पुलिस के नागरिक चार्टर के अनुसार किरायेदार वेरिफिकेशन फॉर्म delhipolice.gov.in से डाउनलोड भी किया जा सकता है।" },
    { q: "हरियाणा में किरायेदार वेरिफिकेशन की फीस कितनी है?", a: "हरियाणा पुलिस की citizen services सूची के अनुसार Tenant Verification (किरायेदार दूसरे ज़िले/राज्य का हो) की फीस ₹50 और समय-सीमा 21 दिन है, और Stranger Verification (हरियाणा का निवासी) की फीस ₹50 और समय-सीमा 5 दिन है। आवेदन HarSamay, eSaral पोर्टल या JanSahayak App से होता है।" },
    { q: "UP में किरायेदार वेरिफिकेशन कहां होता है?", a: "uppolice.gov.in के Janhit Sevayen/Citizen Services मेन्यू में Tenant/PG Verification है, जो UP Police के citizen portal पर लॉगिन के बाद होता है।" },
    { q: "महाराष्ट्र में किरायेदार की जानकारी पुलिस को कैसे दें?", a: "महाराष्ट्र पुलिस की वेबसाइट के भाडेकरूंबद्दल सूचना पेज से फॉर्म डाउनलोड करें, मकान मालिक, जगह, किरायेदार, एजेंट और अवधि की जानकारी भरें, किरायेदार की फोटो, ID और नौकरी का पत्र लगाएं, दोनों साइन करें और अपने पुलिस स्टेशन में जमा करें।" },
    { q: "क्या पुलिस वेरिफिकेशन के बिना रेंट एग्रीमेंट मान्य नहीं होता?", a: "रेंट एग्रीमेंट की वैधता स्टाम्प ड्यूटी, हस्ताक्षर और (जहां ज़रूरी हो) रजिस्ट्रेशन से तय होती है। पुलिस वेरिफिकेशन अलग प्रक्रिया है, पर जिन जगहों पर पुलिस को सूचना देना अपेक्षित है वहां इसे भी पूरा करें।" },
  ],
  related: cards("hub", "format", "maharashtra", "up", "aadhaar", "documents"),
  aside: [
    { href: "/rent-agreement/", label: "🏠 रेंट एग्रीमेंट गाइड" },
    { href: "/rent-agreement/format.html", label: "📝 एग्रीमेंट फॉर्मेट" },
  ],
};
