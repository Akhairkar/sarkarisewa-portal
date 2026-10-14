import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - jharsewa.jharkhand.gov.in (JharSewa / e-Nagrik Seva on ServicePlus) home
//   page: "Issue of Local Resident Certificate" under certificate services;
//   apply online, through a kiosk / Pragya Kendra or in person; "Track
//   Application Status Report"; "Verify your Certificate" (reference number +
//   token).
// - ServiceWiseRequirements.pdf ("Prerequisite for Applying"): "Local Resident
//   Certificate by Circle Officer" and "Issue of Local Resident Certificate"
//   are services of the Department of Personnel, Administrative Reforms and
//   Rajbhasha; documents: residential proof, self declaration by self or
//   parents (for minors), letter of pledge, documents in evidence of the claim
//   for local resident, enclosure for Tatkal (Tatkal applications only); modes:
//   online registration, CSC (Pragya Kendra), Jan Suvidha Kendra, approved
//   private kiosk.
// - ServicePlus national service list (viewAllServiceList.html on the same
//   server): Jharkhand "Issue of Local Resident Certificate" Statutory 30 days;
//   "Local Resident Certificate by Circle Officer" Statutory 30 days (also a
//   version for areas outside ULB/RLB, 30 days); "Local Resident Certificate by
//   Sub Divisional Officer" (area outside ULB/RLB) Not Defined.
// - Helpline reused from jharkhand-income-certificate.ts: JAP-IT 0651-2401581 /
//   2401040.
// Left out (not confirmable on an official page we could open): the current
// legal definition of "local resident" (the 1932 khatiyan bill's status could
// not be confirmed from an official source), fee, validity, appeal officers.
export const jharkhandDomicileCertificate: DocGuide = {
  state: { slug: "jharkhand", hi: "झारखंड" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Jharkhand Domicile Certificate 2026: Apply & Status",
  description: "झारखंड स्थानीय निवासी प्रमाण पत्र 2026: JharSewa पर आवेदन, अंचल अधिकारी, ज़रूरी कागज़ (स्व-घोषणा, शपथ पत्र, निवास का प्रमाण), 30 दिन की समय सीमा, तत्काल, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "झारखंड स्थानीय निवासी (डोमिसाइल) प्रमाण पत्र 2026: JharSewa पर आवेदन, कागज़ और समय सीमा",
  lead: "झारखंड में डोमिसाइल को <strong>स्थानीय निवासी प्रमाण पत्र (Local Resident Certificate)</strong> कहते हैं। आवेदन JharSewa पोर्टल (jharsewa.jharkhand.gov.in) पर या प्रज्ञा केंद्र / जन सुविधा केंद्र से होता है और प्रमाण पत्र <strong>अंचल अधिकारी (CO)</strong> के स्तर से बनता है। सेवा-सूची में इसकी समय सीमा 30 दिन है।",
  facts: [
    ["पोर्टल", '<a href="https://jharsewa.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">jharsewa.jharkhand.gov.in</a>'],
    ["जारी करते हैं", "अंचल अधिकारी (CO)"],
    ["समय सीमा", "30 दिन"],
    ["ऑफलाइन", "प्रज्ञा केंद्र / जन सुविधा केंद्र"],
  ],
  notice: "<strong>ध्यान दें:</strong> \"स्थानीय निवासी\" कौन है, यह राज्य सरकार की स्थानीय नीति से तय होता है, और इस पर बहस व बदलाव होते रहे हैं। आवेदन करते समय पोर्टल पर दिखने वाली शर्तें और अपने अंचल कार्यालय की सलाह मानें। भर्ती या दाखिले के लिए उनकी सूचना में लिखी शर्त भी पढ़ें।",
  sections: [
    {
      id: "kya-hai",
      title: "स्थानीय निवासी प्रमाण पत्र किस काम आता है",
      intro: "यह प्रमाण पत्र बताता है कि आप झारखंड के स्थानीय निवासी हैं। राज्य की भर्तियों, दाखिलों (जैसे काउंसलिंग) और राज्य की योजनाओं में स्थानीय उम्मीदवार का लाभ लेने के लिए यह मांगा जाता है।",
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लिए है। जाति प्रमाण पत्र अलग बनता है, और उसमें भी स्थायी निवास का प्रमाण मांगा जाता है: <a href=\"/states/jharkhand-caste-certificate.html\">झारखंड जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (JharSewa की सूची)",
      list: [
        "<strong>निवास का प्रमाण (Residential Proof)</strong>",
        "<strong>स्व-घोषणा पत्र</strong>: खुद का, या नाबालिग हो तो माता-पिता का",
        "<strong>शपथ/वचन पत्र (Letter of Pledge)</strong>",
        "<strong>स्थानीय निवासी होने के दावे के सबूत</strong>: आपके पास जो हों, उदाहरण के लिए ज़मीन के पुराने कागज़ (खतियान/रसीद), परिवार के पुराने रिकॉर्ड, स्कूल रिकॉर्ड",
        "<strong>तत्काल वाला संलग्नक</strong>: सिर्फ तब, जब तत्काल आवेदन कर रहे हों",
      ],
      callout: { kind: "warn", html: "दावे के सबूत जितने पुराने और पक्के होंगे, जांच उतनी आसान होगी। स्व-घोषणा कैसे लिखें: <a href=\"/affidavit/self-declaration.html\">स्व-घोषणा पत्र</a>।" },
    },
    {
      id: "online",
      title: "JharSewa पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://jharsewa.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">jharsewa.jharkhand.gov.in</a> खोलें और रजिस्टर करके लॉगिन करें।',
        "सेवाओं में <strong>Issue of Local Resident Certificate</strong> चुनें। जल्दी चाहिए तो तत्काल विकल्प देखें।",
        "फॉर्म में नाम, माता-पिता का नाम, पूरा पता (गांव, पंचायत, अंचल, ज़िला) और स्थानीय होने का आधार भरें।",
        "ऊपर दिए कागज़ अपलोड करें और आवेदन जमा करें।",
        "<strong>पावती</strong> डाउनलोड करें; उसमें संदर्भ संख्या (reference number) होती है।",
      ],
      html: "<p>खुद आवेदन न कर पाएं तो नज़दीकी <strong>प्रज्ञा केंद्र (CSC)</strong>, <strong>जन सुविधा केंद्र</strong> या मान्य कियोस्क से आवेदन कराएं। वहां का सेवा शुल्क पहले पूछ लें।</p>",
    },
    {
      id: "samay",
      title: "समय सीमा",
      table: {
        head: ["सेवा (ServicePlus सूची)", "समय सीमा"],
        rows: [
          ["Issue of Local Resident Certificate", "30 दिन"],
          ["Local Resident Certificate by Circle Officer", "30 दिन"],
          ["Local Resident Certificate by Sub Divisional Officer (ULB/RLB से बाहर का क्षेत्र)", "तय नहीं (Not Defined)"],
        ],
      },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होम पेज पर <strong>Track Application Status</strong> में संदर्भ संख्या डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद अपने लॉगिन से प्रमाण पत्र डाउनलोड करें; केंद्र से आवेदन किया हो तो वहीं से प्रिंट लें।",
        "<strong>सत्यापन:</strong> <strong>Verify your Certificate</strong> में संदर्भ संख्या और टोकन डालकर प्रमाण पत्र जांचा जा सकता है।",
        "<strong>मदद:</strong> JAP-IT, फोन 0651-2401581 / 2401040।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["स्थानीय होने के दावे का सबूत कमज़ोर", "ज़मीन के पुराने कागज़, परिवार के पुराने प्रमाण पत्र या स्कूल रिकॉर्ड जोड़ें"],
          ["स्व-घोषणा या शपथ पत्र नहीं लगाया", "दोनों कागज़ ज़रूर अपलोड करें"],
          ["गलत अंचल में आवेदन", "उसी अंचल में आवेदन करें जहां आपका स्थायी घर/ज़मीन है"],
          ["जांच में जानकारी मेल नहीं खाई", "फॉर्म में वही नाम-पता लिखें जो कागज़ों में है"],
        ],
      },
    },
  ],
  official: [
    { href: "https://jharsewa.jharkhand.gov.in/", title: "JharSewa (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://jharsewa.jharkhand.gov.in/resources/pdf/20/ServiceWiseRequirements.pdf", title: "सेवा के अनुसार ज़रूरी कागज़ (PDF)" },
    { href: "https://jharsewa.jharkhand.gov.in/resources/pdf/20/ServiceWiseRequirements_Hindi.pdf", title: "सेवा के अनुसार ज़रूरी कागज़, हिंदी (PDF)" },
  ],
  faq: [
    { q: "झारखंड में स्थानीय निवासी प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "jharsewa.jharkhand.gov.in पर रजिस्टर करें, Issue of Local Resident Certificate चुनें, फॉर्म भरें, निवास का प्रमाण, स्व-घोषणा, वचन पत्र और दावे के सबूत अपलोड करें और पावती रखें।" },
    { q: "कितने दिन में बनता है?", a: "ServicePlus सेवा-सूची में 30 दिन। जल्दी के लिए तत्काल विकल्प है।" },
    { q: "कौन जारी करता है?", a: "अंचल अधिकारी (CO)। कुछ क्षेत्रों के लिए अनुमंडल पदाधिकारी (SDO) के स्तर की सेवा भी है।" },
    { q: "स्थानीय निवासी कौन माना जाता है?", a: "यह राज्य सरकार की स्थानीय नीति से तय होता है। आवेदन के समय पोर्टल की शर्तें और अंचल कार्यालय की सलाह देखें, और भर्ती/दाखिले की सूचना में दी शर्त भी पढ़ें।" },
  ],
  related: [
    { href: "/states/jharkhand-caste-certificate.html", emoji: "📜", title: "झारखंड जाति प्रमाण पत्र", text: "SC/ST/OBC/BC प्रमाण पत्र" },
    { href: "/states/jharkhand-income-certificate.html", emoji: "💰", title: "झारखंड आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/jharkhand-employment-exchange.html", emoji: "💼", title: "झारखंड रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://jharsewa.jharkhand.gov.in/", label: "📝 JharSewa पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
