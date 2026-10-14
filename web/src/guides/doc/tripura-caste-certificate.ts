import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Tripura e-District / Digital Seva portal edistrict.tripura.gov.in (ServicePlus,
//   last updated 25 June 2026): menu services "ST Certificate", "SC
//   Certificate", "OBC Certificate (State)", "OBC Certificate (Central)";
//   "How to avail Online Service" steps; Citizen Registration; Track Your
//   Application; Verify your Certificate (application reference number +
//   token); FAQ (registration with e-mail verification and mobile OTP; Apply
//   for Services > View Services; Attach Annexure; Common Application Form to
//   print, sign, scan and upload; photo 320x240; SMS at submission and at
//   decision; e-Copy option sends digitally signed PDF by e-mail; Tripura IT
//   (Electronic Service Delivery) Rules 2015 make digital signature equal to
//   ink signature; District Level Contact Details).
// - Service description pages (getServiceDesc.html): Revenue Department;
//   regulatory service; delivery time SC 40 days, ST 15 days, OBC (State) 40
//   days, OBC (Central) 40 days (excluding government holidays); by hand,
//   online or kiosk; enclosure lists (ROR, Common Application Form, PRTC,
//   father's certificate, community certificate from SC/OBC sub-committee,
//   citizenship proof, father-child relationship certificate, age proof,
//   family ration card; OBC Central: average monthly family income
//   certificate, state OBC certificate).
// - Common application forms SC.pdf, ST.pdf, OBCS.pdf, OBCC.pdf (addressed to
//   the Sub-Divisional Magistrate; OBC Central asks for average monthly family
//   income and an income certificate "from DCM/SDM").
// - Service fees page (Final_Rates.html): lists charges for PRTC, marriage
//   certificate, gun licence renewal and RTI only; no charge listed for caste
//   certificates.
// Left out (not confirmable): validity rules, appeal route.
export const tripuraCasteCertificate: DocGuide = {
  state: { slug: "tripura", hi: "त्रिपुरा" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Tripura Caste Certificate 2026: Apply & Status",
  description: "त्रिपुरा जाति प्रमाण पत्र (SC/ST/OBC) 2026: e-District / Digital Seva पोर्टल पर ऑनलाइन आवेदन, SDM, 15 और 40 दिन की समय सीमा, कागज़ों की सूची और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "त्रिपुरा जाति प्रमाण पत्र 2026: e-District पर SC, ST, OBC (राज्य/केंद्र) आवेदन, कागज़ और समय सीमा",
  lead: "त्रिपुरा में SC, ST और OBC प्रमाण पत्र राजस्व विभाग की सेवाएं हैं और इनका आवेदन e-District / Digital Seva पोर्टल (edistrict.tripura.gov.in) पर ऑनलाइन, कियोस्क से या हाथ से जमा करके होता है। आवेदन उपखंड मजिस्ट्रेट (SDM) के नाम होता है। पोर्टल के अनुसार ST प्रमाण पत्र 15 दिन में और SC व OBC (राज्य और केंद्र) प्रमाण पत्र 40 दिन में दिया जाता है (सरकारी छुट्टियां छोड़कर)।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.tripura.gov.in/" target="_blank" rel="noopener nofollow">edistrict.tripura.gov.in</a>'],
    ["आवेदन किसके नाम", "उपखंड मजिस्ट्रेट (SDM)"],
    ["समय सीमा", "ST: 15 दिन; SC/OBC: 40 दिन"],
    ["प्रमाण पत्र", "डिजिटल हस्ताक्षर वाला (e-Copy विकल्प)"],
  ],
  notice: "<strong>केंद्र की नौकरी के लिए OBC:</strong> त्रिपुरा में OBC की दो अलग सेवाएं हैं: \"OBC Certificate (State)\" और \"OBC Certificate (Central)\"। केंद्र वाले के लिए पहले से बना <strong>राज्य का OBC प्रमाण पत्र</strong> और DCM/SDM से बना <strong>परिवार की औसत मासिक आय का प्रमाण पत्र</strong> चाहिए।",
  sections: [
    {
      id: "sevayen",
      title: "कौन सी सेवा किसके लिए, और कितने दिन",
      table: {
        head: ["e-District सेवा", "किसके लिए", "समय सीमा"],
        rows: [
          ["<strong>ST Certificate</strong>", "त्रिपुरा की अनुसूचित जनजातियां", "15 दिन"],
          ["<strong>SC Certificate</strong>", "त्रिपुरा की अनुसूचित जातियां", "40 दिन"],
          ["<strong>OBC Certificate (State)</strong>", "राज्य की OBC सूची: राज्य की नौकरी, दाखिला, योजनाएं", "40 दिन"],
          ["<strong>OBC Certificate (Central)</strong>", "केंद्र सरकार की नौकरी/परीक्षा/दाखिले में OBC आरक्षण", "40 दिन"],
        ],
      },
      callout: { kind: "info", html: "समय सीमा पोर्टल के सेवा विवरण से है और सरकारी छुट्टियां इसमें नहीं गिनी जातीं। केंद्र वाले OBC फॉर्म में परिवार की औसत मासिक आय भी पूछी जाती है, क्योंकि केंद्र की सूची में नॉन-क्रीमी लेयर की शर्त लागू होती है।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (पोर्टल की सूची के अनुसार)",
      intro: "सभी में <strong>Common Application Form</strong> (प्रिंट करके भरा, हस्ताक्षर किया और स्कैन किया), <strong>PRTC</strong> (Permanent Resident of Tripura Certificate), <strong>परिवार का राशन कार्ड</strong> और <strong>उम्र का सबूत</strong> (जन्म प्रमाण पत्र / 10वीं का एडमिट कार्ड / स्कूल लीविंग) लगता है। इसके अलावा:",
      table: {
        head: ["सेवा", "अतिरिक्त कागज़"],
        rows: [
          ["ST", "पिता का ST प्रमाण पत्र (फॉर्म में पिता/भाई/बहन/चाचा जैसे रक्त संबंधी का प्रमाण पत्र भी पूछा गया है), Register of Ordinary Residents (ROR)"],
          ["SC", "पिता का SC प्रमाण पत्र, SC सब-कमेटी का कम्युनिटी सर्टिफिकेट, नागरिकता का सबूत, पिता-संतान संबंध का प्रमाण, ROR"],
          ["OBC (राज्य)", "पिता का OBC प्रमाण पत्र, OBC सब-कमेटी का कम्युनिटी सर्टिफिकेट, ROR"],
          ["OBC (केंद्र)", "राज्य का OBC प्रमाण पत्र, परिवार की औसत मासिक आय का प्रमाण पत्र (DCM/SDM से)"],
        ],
      },
      callout: { kind: "ok", html: "पोर्टल पर फोटो का साइज़ 320x240 पिक्सल (20 से 250 KB) और हस्ताक्षर 320x160 पिक्सल (10 से 100 KB) सुझाया गया है। फोटो छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "e-District पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://edistrict.tripura.gov.in/" target="_blank" rel="noopener nofollow">edistrict.tripura.gov.in</a> पर <strong>Login → Register Yourself</strong> से रजिस्ट्रेशन करें। ईमेल पर आए लिंक से पुष्टि करें और मोबाइल OTP डालें; अकाउंट चालू हो जाएगा।',
        "<strong>Download Forms</strong> से अपनी सेवा का <strong>Common Application Form</strong> प्रिंट करें, भरें, हस्ताक्षर करें और स्कैन कर लें।",
        "लॉगिन करके <strong>Apply for Services → View Services</strong> में SC / ST / OBC (State) / OBC (Central) चुनें।",
        "ऑनलाइन फॉर्म भरें (वेबकैम से या स्कैन करके फोटो लगाएं)। <strong>Service Output Type</strong> में <strong>e-Copy</strong> चुनें तो डिजिटल हस्ताक्षर वाला PDF ईमेल पर आएगा।",
        "<strong>Attach Annexure</strong> में Common Application Form और ऊपर बताए कागज़ अपलोड करके <strong>Submit</strong> करें।",
        "जमा होते ही SMS में <strong>आवेदन संदर्भ संख्या (Application Ref. No.)</strong> आती है; इसे और जमा करने की तारीख लिख लें।",
      ],
    },
    {
      id: "offline",
      title: "कियोस्क या हाथ से आवेदन",
      intro: "पोर्टल के अनुसार ये सेवाएं <strong>ऑनलाइन, कियोस्क या हाथ से (By Hand)</strong> जमा हो सकती हैं। ऑफलाइन जमा करना हो तो Common Application Form भरकर, कागज़ों की फोटोकॉपी के साथ अपने SDM कार्यालय में दें और पावती लें।",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस (बिना लॉगिन):</strong> होमपेज पर <strong>Track Your Application</strong> में आवेदन संदर्भ संख्या और जमा करने की तारीख डालें।",
        "<strong>स्टेटस (लॉगिन करके):</strong> View Status of Application → Track application status।",
        "<strong>सूचना:</strong> फैसला होने पर SMS (और ईमेल दिया हो तो ईमेल) आता है।",
        "<strong>प्रमाण पत्र असली है या नहीं:</strong> होमपेज पर <strong>Verify your Certificate</strong> में आवेदन संदर्भ संख्या और टोकन डालें।",
        "प्रमाण पत्र डिजिटल हस्ताक्षर वाला होता है; त्रिपुरा के 2015 के इलेक्ट्रॉनिक सेवा नियमों के अनुसार यह स्याही वाले हस्ताक्षर के बराबर मान्य है।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "fees",
      title: "फीस",
      intro: "पोर्टल के <strong>Service Fees</strong> पेज पर PRTC, विवाह प्रमाण पत्र, गन लाइसेंस और RTI के शुल्क दिए हैं; जाति प्रमाण पत्र के लिए कोई शुल्क दर्ज नहीं है। कियोस्क अपना सेवा शुल्क ले सकता है, पहले पूछ लें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["PRTC नहीं है", "पहले e-District पर PRTC (स्थायी निवास प्रमाण पत्र) बनवाएं"],
          ["पिता का जाति प्रमाण पत्र नहीं", "SC/OBC में सब-कमेटी का कम्युनिटी सर्टिफिकेट और रक्त संबंधी का प्रमाण पत्र लगाएं"],
          ["केंद्र वाले OBC में राज्य का OBC प्रमाण पत्र नहीं", "पहले \"OBC Certificate (State)\" बनवाएं, फिर Central का आवेदन करें"],
          ["Common Application Form नहीं लगाया", "Download Forms से फॉर्म लेकर, हस्ताक्षर करके, स्कैन करके Attach Annexure में लगाएं"],
          ["समय सीमा निकल गई", "District Level Contact Details में अपने ज़िले के अधिकारी से संपर्क करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पोर्टल के होमपेज पर <strong>Citizen Section → District Level Contact Details</strong> में ज़िले के संबंधित अधिकारियों की सूची है। फॉर्म भरने या तकनीकी दिक्कत के लिए पोर्टल के अनुसार ज़िले के District Project Manager से संपर्क करें।",
    },
  ],
  official: [
    { href: "https://edistrict.tripura.gov.in/", title: "Tripura e-District / Digital Seva पोर्टल" },
    { href: "https://edistrict.tripura.gov.in/resources/pdf/ST.pdf", title: "ST प्रमाण पत्र: Common Application Form (PDF)" },
    { href: "https://edistrict.tripura.gov.in/resources/pdf/SC.pdf", title: "SC प्रमाण पत्र: Common Application Form (PDF)" },
    { href: "https://edistrict.tripura.gov.in/resources/pdf/OBCS.pdf", title: "OBC (State): Common Application Form (PDF)" },
    { href: "https://edistrict.tripura.gov.in/resources/pdf/OBCC.pdf", title: "OBC (Central): Common Application Form (PDF)" },
  ],
  faq: [
    { q: "त्रिपुरा में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.tripura.gov.in पर रजिस्टर करें, Apply for Services → View Services में SC/ST/OBC सेवा चुनें, फॉर्म भरें, Attach Annexure में Common Application Form और कागज़ अपलोड करें और Submit करें। SMS में आवेदन संदर्भ संख्या आएगी।" },
    { q: "त्रिपुरा जाति प्रमाण पत्र कितने दिन में बनता है?", a: "पोर्टल के अनुसार ST प्रमाण पत्र 15 दिन में और SC, OBC (State) और OBC (Central) 40 दिन में, सरकारी छुट्टियां छोड़कर।" },
    { q: "त्रिपुरा में जाति प्रमाण पत्र कौन जारी करता है?", a: "आवेदन फॉर्म उपखंड मजिस्ट्रेट (SDM) के नाम होता है; यह राजस्व विभाग की सेवा है।" },
    { q: "केंद्र सरकार की नौकरी के लिए OBC प्रमाण पत्र कैसे बनेगा?", a: "e-District पर \"OBC Certificate (Central)\" सेवा में आवेदन करें। इसके लिए राज्य का OBC प्रमाण पत्र और DCM/SDM से बना परिवार की औसत मासिक आय का प्रमाण पत्र लगता है।" },
    { q: "जाति प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल के Service Fees पेज पर जाति प्रमाण पत्र के लिए कोई शुल्क दर्ज नहीं है। कियोस्क अपना सेवा शुल्क ले सकता है।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "e-District होमपेज पर Verify your Certificate में आवेदन संदर्भ संख्या और टोकन डालें।" },
  ],
  related: [
    { href: "/states/tripura-income-certificate.html", emoji: "💰", title: "त्रिपुरा आय प्रमाण पत्र", text: "e-District पर, 15 दिन" },
    { href: "/states/tripura-domicile-certificate.html", emoji: "🏠", title: "त्रिपुरा स्थायी निवास प्रमाण पत्र", text: "PRTC" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.tripura.gov.in/", label: "📝 e-District त्रिपुरा पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
