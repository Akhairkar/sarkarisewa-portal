import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - edistrict.odisha.gov.in (e-District Odisha on ServicePlus) home page,
//   Revenue & Disaster Management Department, "Issuance of Residence
//   Certificate": issued to a person residing continuously for at least one
//   year within the concerned Tahasil, relaxed for transferred government
//   employees and women married within the past one year; ORTPSA service;
//   delivered in 10 working days; no Government Service charge; documents
//   (any one or more): electricity bill, copy of RoR, EPIC, Aadhaar, landline
//   bill, water bill, ration card, holding tax receipt, lease agreement with
//   house owner, certificate from employer, bank passbook first page, extract
//   of latest voter list, NREGA job card, others.
// - Resident-Certificate-Sop.pdf on the portal: registration with e-mail and
//   mobile OTP, apply, attach annexure (any one mandatory), acknowledgement,
//   SMS with reference number, "Check Your Application Status", download from
//   "Track Application Status".
// - Odisha Miscellaneous Certificates Rules, 2017 (igrodisha.gov.in PDF):
//   Tahasildar / Additional Tahasildar competent; Form No. 1 application;
//   one year continuous residence in the village/town of the Tahasil, or RoR of
//   the residential plot owned by self/parents/ancestors, otherwise other
//   address proof; court fee stamp Rs 3 (online fee by electronic mode); time
//   limit 15 days; validity one year from issue; clerical-error correction;
//   appeal to Sub-Divisional Officer, then Collector, then RDC within 30 days;
//   certificate format states "native of the district ... in the State of
//   Odisha / in the State of ..." and residing since (month/year).
// - Helplines reused from odisha-income-certificate.ts (portal FAQ): toll free
//   1800-121-8242, Sanjog 155335.
// Left out: CSC service charge (not stated), recruitment-specific domicile
// rules.
export const odishaDomicileCertificate: DocGuide = {
  state: { slug: "odisha", hi: "ओडिशा" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Odisha Domicile Certificate 2026: Apply & Status",
  description: "ओडिशा निवास (Resident) प्रमाण पत्र 2026: e-District Odisha पर आवेदन, 1 साल लगातार निवास की शर्त, ज़रूरी कागज़, 10 कार्य दिवस, कोई सरकारी शुल्क नहीं, 1 साल वैधता और अपील।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "ओडिशा निवास (Resident) प्रमाण पत्र 2026: शर्त, कागज़, ऑनलाइन आवेदन और वैधता",
  lead: "ओडिशा में निवास प्रमाण पत्र (Resident Certificate) तहसीलदार या अतिरिक्त तहसीलदार देते हैं। यह उस व्यक्ति को मिलता है जो उस तहसील में कम से कम 1 साल से लगातार रह रहा हो, या वहां के रिहायशी प्लॉट का RoR (खतियान) दिखा सके। आवेदन e-District Odisha पोर्टल या CSC से होता है, कोई सरकारी शुल्क नहीं है और प्रमाण पत्र जारी होने से 1 साल तक मान्य रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.odisha.gov.in/" target="_blank" rel="noopener nofollow">edistrict.odisha.gov.in</a>'],
    ["शर्त", "तहसील में 1 साल लगातार निवास या RoR"],
    ["समय सीमा", "10 कार्य दिवस (ORTPSA)"],
    ["वैधता", "जारी होने से 1 साल"],
  ],
  notice: "<strong>ध्यान दें:</strong> ओडिशा का निवास प्रमाण पत्र सिर्फ <strong>1 साल</strong> मान्य है (ओडिशा विविध प्रमाण पत्र नियम, 2017)। दाखिले या भर्ती के फॉर्म से पहले देख लें कि आपका प्रमाण पत्र पुराना तो नहीं हो गया।",
  sections: [
    {
      id: "kya-hai",
      title: "निवास प्रमाण पत्र क्या है",
      intro: "यह प्रमाण पत्र बताता है कि आप या आपका परिवार किस गांव/शहर, थाना, तहसील और ज़िले में किस महीने-साल से रह रहे हैं। इसमें यह भी लिखा जाता है कि आप मूल रूप से ओडिशा के किस ज़िले के हैं, या मूल रूप से किसी दूसरे राज्य के हैं। प्रमाण पत्र में उस काम (purpose) का नाम भी लिखा जाता है जिसके लिए यह बना है।",
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लिए है। SC/ST/SEBC का प्रमाण पत्र अलग से बनता है: <a href=\"/states/odisha-caste-certificate.html\">ओडिशा जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है (शर्त)",
      list: [
        "आप उस तहसील के गांव या शहर में <strong>कम से कम 1 साल से लगातार</strong> रह रहे हों, <strong>या</strong>",
        "आप जिस रिहायशी प्लॉट पर रहते हैं उसका <strong>RoR (Record of Rights)</strong> आपके, माता-पिता या पूर्वजों के नाम हो।",
        "e-District पोर्टल के अनुसार 1 साल की शर्त में <strong>तबादले पर आए सरकारी कर्मचारियों</strong> और <strong>पिछले 1 साल में शादी होकर आई महिलाओं</strong> को छूट दी जा सकती है।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "पोर्टल पर इनमें से <strong>कम से कम एक</strong> कागज़ अपलोड करना ज़रूरी है (जितने हों, उतने लगाना बेहतर):",
      list: [
        "<strong>RoR (खतियान) की कॉपी</strong>",
        "<strong>वोटर कार्ड (EPIC)</strong> या <strong>ताज़ा वोटर लिस्ट का अंश</strong>",
        "<strong>आधार कार्ड</strong> या <strong>राशन कार्ड</strong>",
        "बिजली, पानी या लैंडलाइन टेलीफोन का बिल, होल्डिंग टैक्स की रसीद",
        "मकान मालिक के साथ किराया/लीज़ एग्रीमेंट",
        "बैंक पासबुक का पहला पेज, NREGA जॉब कार्ड, या नियोक्ता (employer) का प्रमाण पत्र",
      ],
      callout: { kind: "ok", html: "फॉर्म में यह ज़रूर लिखना होता है कि आप <strong>किस महीने और साल से</strong> उस पते पर रह रहे हैं। कागज़ छोटे करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "e-District Odisha पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://edistrict.odisha.gov.in/" target="_blank" rel="noopener nofollow">edistrict.odisha.gov.in</a> खोलें और <strong>Register Yourself</strong> से अकाउंट बनाएं (ईमेल और मोबाइल पर OTP आता है)।',
        "लॉगिन करके <strong>Revenue & Disaster Management Department → Issuance of Residence Certificate</strong> चुनें।",
        "फॉर्म में स्थायी और मौजूदा पता, उद्देश्य (purpose) और निवास कब से है, यह भरें।",
        "ऊपर दी गई सूची में से कम से कम एक कागज़ <strong>Annexure</strong> में जोड़ें और आवेदन जमा करें।",
        "पावती (Acknowledgement) इनबॉक्स से डाउनलोड करें। आवेदन संदर्भ संख्या SMS से भी आती है।",
      ],
      html: "<p>खुद आवेदन न कर पाएं तो नज़दीकी <strong>कॉमन सर्विस सेंटर (CSC)</strong> से आवेदन कराएं। CSC का सेवा शुल्क पहले पूछ लें।</p>",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील",
      table: {
        head: ["बात", "जानकारी"],
        rows: [
          ["जारी करते हैं", "तहसीलदार / अतिरिक्त तहसीलदार"],
          ["समय सीमा", "e-District पर ORTPSA के तहत 10 कार्य दिवस (नियम 2017 में 15 दिन)"],
          ["सरकारी शुल्क", "पोर्टल के अनुसार कोई सरकारी शुल्क नहीं"],
          ["वैधता", "जारी होने की तारीख से 1 साल"],
          ["अपील", "आदेश के 30 दिन के भीतर उप-जिलाधिकारी (Sub-Collector/SDO) के पास"],
        ],
      },
      html: "<p>प्रमाण पत्र में लिपिकीय गलती (नाम, पता की टाइपिंग) हो तो जारी करने वाले राजस्व अधिकारी उसे सुधारकर नया प्रमाण पत्र दे सकते हैं।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और मदद",
      list: [
        "<strong>स्टेटस:</strong> पोर्टल पर <strong>Check Your Application Status</strong> में संदर्भ संख्या डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी का SMS आने पर <strong>Track Application Status</strong> से प्रमाण पत्र डाउनलोड करें।",
        "<strong>मदद:</strong> e-District टोल फ्री 1800-121-8242 या संजोग हेल्पलाइन 155335।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["1 साल का निवास साबित नहीं हुआ", "पुराना बिजली बिल, किराया एग्रीमेंट या वोटर लिस्ट जैसे साल भर पुराने कागज़ लगाएं"],
          ["गलत तहसील में आवेदन", "जिस तहसील में आप रहते हैं, उसी में आवेदन करें"],
          ["कोई कागज़ अपलोड नहीं", "सूची में से कम से कम एक कागज़ ज़रूर जोड़ें"],
          ["\"कब से रह रहे हैं\" का कॉलम खाली या कागज़ों से अलग", "महीना-साल वही लिखें जो आपके कागज़ों से मेल खाए"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.odisha.gov.in/", title: "e-District Odisha (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://edistrict.odisha.gov.in/resources/homePage/21/sop/Resident-Certificate-Sop.pdf", title: "निवास प्रमाण पत्र की SOP (PDF)" },
    { href: "https://www.igrodisha.gov.in/pdf/OMC_Rules_2017.pdf", title: "ओडिशा विविध प्रमाण पत्र नियम, 2017 (PDF): शर्त, फॉर्म, वैधता, अपील" },
  ],
  faq: [
    { q: "ओडिशा में निवास प्रमाण पत्र के लिए कितने साल रहना ज़रूरी है?", a: "उस तहसील में कम से कम 1 साल लगातार। या फिर आप जिस रिहायशी प्लॉट पर रहते हैं उसका RoR आपके, माता-पिता या पूर्वजों के नाम हो।" },
    { q: "ओडिशा निवास प्रमाण पत्र की फीस कितनी है?", a: "e-District पोर्टल के अनुसार कोई सरकारी शुल्क नहीं है। CSC अपना सेवा शुल्क ले सकता है।" },
    { q: "कितने दिन में बनता है?", a: "ORTPSA के तहत 10 कार्य दिवस में।" },
    { q: "निवास प्रमाण पत्र कितने समय तक मान्य है?", a: "जारी होने की तारीख से 1 साल।" },
    { q: "आवेदन खारिज हो जाए तो?", a: "आदेश के 30 दिन के भीतर उप-जिलाधिकारी के पास अपील कर सकते हैं, या कमी दूर करके दोबारा आवेदन करें।" },
  ],
  related: [
    { href: "/states/odisha-caste-certificate.html", emoji: "📜", title: "ओडिशा जाति प्रमाण पत्र", text: "SC/ST/SEBC प्रमाण पत्र" },
    { href: "/states/odisha-income-certificate.html", emoji: "💰", title: "ओडिशा आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/odisha-employment-exchange.html", emoji: "💼", title: "ओडिशा रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.odisha.gov.in/", label: "📝 e-District पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
