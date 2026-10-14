import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - Tripura e-District / Digital Seva portal edistrict.tripura.gov.in (ServicePlus,
//   last updated 25 June 2026): "Income Certificate" service; online-service
//   steps; Citizen Registration; Track Your Application; Verify your
//   Certificate; FAQ (registration with e-mail link and mobile OTP; Apply for
//   Services > View Services; Attach Annexure; Common Application Form; photo
//   320x240; SMS at submission and decision; e-Copy digitally signed PDF by
//   e-mail; Tripura IT (Electronic Service Delivery) Rules 2015; District Level
//   Contact Details / District Project Managers).
// - Service description getServiceDesc.html?serviceId=2920015: Revenue
//   Department; regulatory; registration needed; delivered within 15 days
//   (excluding government holidays); by hand, online, kiosk; enclosures:
//   family ration card, PRTC (or citizenship certificate), photo ID (Aadhaar,
//   PAN, bank passbook, passport, voter ID, driving licence), DDO certificate /
//   pay slip from employer, Common Application Form, other.
// - Common application form IC.pdf: addressed to the Sub-Divisional
//   Magistrate; monthly income from pension/salary, business, agriculture,
//   other sources and monthly total; APL/BPL; Aadhaar; questions on ration
//   card, PRTC/CRC, photo ID, government employee; service output hard copy or
//   e-copy.
// - Service fees page (Final_Rates.html): no charge listed for the income
//   certificate (lists only PRTC, marriage certificate, gun licence renewal,
//   RTI).
// Left out (not confirmable): validity period. Old description said "fee ₹20";
// not on the official fee page, so the description was rewritten.
export const tripuraIncomeCertificate: DocGuide = {
  state: { slug: "tripura", hi: "त्रिपुरा" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Tripura Income Certificate 2026: Apply Online",
  description: "त्रिपुरा आय प्रमाण पत्र 2026: e-District / Digital Seva पोर्टल पर ऑनलाइन आवेदन, SDM, 15 दिन की समय सीमा, PRTC और राशन कार्ड समेत कागज़, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "त्रिपुरा आय प्रमाण पत्र 2026: e-District पर आवेदन, कागज़, 15 दिन की समय सीमा और स्टेटस",
  lead: "त्रिपुरा में आय प्रमाण पत्र राजस्व विभाग की सेवा है। आवेदन e-District / Digital Seva पोर्टल (edistrict.tripura.gov.in) पर ऑनलाइन, कियोस्क से या हाथ से जमा करके होता है और फॉर्म उपखंड मजिस्ट्रेट (SDM) के नाम होता है। पोर्टल के अनुसार प्रमाण पत्र 15 दिन में (सरकारी छुट्टियां छोड़कर) मिलता है। फॉर्म में पेंशन/वेतन, व्यापार, खेती और दूसरे स्रोतों से होने वाली मासिक आय अलग-अलग लिखनी होती है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.tripura.gov.in/" target="_blank" rel="noopener nofollow">edistrict.tripura.gov.in</a>'],
    ["आवेदन किसके नाम", "उपखंड मजिस्ट्रेट (SDM)"],
    ["समय सीमा", "15 दिन (छुट्टियां छोड़कर)"],
    ["फीस", "पोर्टल की फीस सूची में दर्ज नहीं"],
  ],
  notice: "<strong>नौकरी करते हैं?</strong> पोर्टल की कागज़-सूची में सरकारी/निजी कर्मचारी के लिए <strong>DDO सर्टिफिकेट या नियोक्ता की वेतन पर्ची</strong> मांगी गई है। फॉर्म में यह भी पूछा जाता है कि आप सरकारी कर्मचारी हैं या नहीं।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में मांगा जाता है। त्रिपुरा में केंद्र वाले OBC प्रमाण पत्र के लिए भी DCM/SDM से बना <strong>परिवार की औसत मासिक आय का प्रमाण पत्र</strong> लगता है।",
      callout: { kind: "info", html: "SC/ST/OBC प्रमाण पत्र के लिए देखें: <a href=\"/states/tripura-caste-certificate.html\">त्रिपुरा जाति प्रमाण पत्र गाइड</a>। EWS आरक्षण के लिए आय और संपत्ति वाला अलग EWS प्रमाण पत्र होता है।" },
    },
    {
      id: "aay",
      title: "फॉर्म में आय कैसे भरें",
      list: [
        "<strong>मासिक आय, स्रोत के हिसाब से:</strong> पेंशन/वेतन, व्यापार, खेती और दूसरे स्रोत, चारों के खाने अनिवार्य हैं (जिस स्रोत से आय नहीं है वहां 0 लिखें)।",
        "<strong>कुल मासिक आय</strong> अलग से लिखी जाती है।",
        "<strong>आर्थिक स्थिति:</strong> APL या BPL चुनें; आधार नंबर भी भरें।",
      ],
      callout: { kind: "warn", html: "फॉर्म के अंत में घोषणा होती है कि सारी जानकारी सही है। आय कम या गलत न लिखें। स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (पोर्टल की सूची के अनुसार)",
      list: [
        "<strong>परिवार का राशन कार्ड</strong> (फोटोकॉपी)",
        "<strong>PRTC</strong> (Permanent Resident of Tripura Certificate) या नागरिकता प्रमाण पत्र",
        "<strong>फोटो पहचान पत्र:</strong> आधार / PAN / बैंक पासबुक / पासपोर्ट / वोटर ID / ड्राइविंग लाइसेंस",
        "<strong>नौकरी हो तो:</strong> DDO सर्टिफिकेट या नियोक्ता की वेतन पर्ची",
        "<strong>Common Application Form</strong>: Download Forms से प्रिंट करके भरें, हस्ताक्षर करें और स्कैन करके लगाएं",
        "कोई और सहायक कागज़ (जैसे खेती या व्यापार की आय का सबूत), अगर हो",
      ],
      callout: { kind: "ok", html: "पोर्टल पर फोटो 320x240 पिक्सल (20 से 250 KB) और हस्ताक्षर 320x160 पिक्सल (10 से 100 KB) सुझाए गए हैं। साइज़ ठीक करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "e-District पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://edistrict.tripura.gov.in/" target="_blank" rel="noopener nofollow">edistrict.tripura.gov.in</a> पर <strong>Login → Register Yourself</strong> से रजिस्ट्रेशन करें; ईमेल लिंक और मोबाइल OTP से अकाउंट चालू करें।',
        "<strong>Download Forms</strong> से आय प्रमाण पत्र का Common Application Form प्रिंट करके भरें, हस्ताक्षर करें और स्कैन करें।",
        "लॉगिन करके <strong>Apply for Services → View Services → Income Certificate</strong> चुनें।",
        "फॉर्म भरें, फोटो लगाएं और <strong>Service Output Type</strong> में <strong>e-Copy</strong> चुनें ताकि डिजिटल हस्ताक्षर वाला PDF ईमेल पर आए।",
        "<strong>Attach Annexure</strong> में ऊपर बताए कागज़ अपलोड करके <strong>Submit</strong> करें।",
        "SMS में आई <strong>आवेदन संदर्भ संख्या</strong> और जमा करने की तारीख लिख लें।",
      ],
    },
    {
      id: "offline",
      title: "कियोस्क या हाथ से आवेदन",
      intro: "पोर्टल के अनुसार आवेदन <strong>ऑनलाइन, कियोस्क या हाथ से</strong> जमा हो सकता है। ऑफलाइन के लिए Common Application Form भरकर कागज़ों की फोटोकॉपी के साथ अपने SDM कार्यालय में दें और पावती लें। कियोस्क अपना सेवा शुल्क ले सकता है, पहले पूछ लें।",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस (बिना लॉगिन):</strong> होमपेज पर <strong>Track Your Application</strong> में आवेदन संदर्भ संख्या और जमा करने की तारीख डालें।",
        "<strong>सूचना:</strong> फैसला होने पर SMS और (ईमेल दिया हो तो) ईमेल आता है। e-Copy चुना हो तो डिजिटल हस्ताक्षर वाला PDF ईमेल पर मिलता है।",
        "<strong>सत्यापन:</strong> होमपेज पर <strong>Verify your Certificate</strong> में आवेदन संदर्भ संख्या और टोकन डालें।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "फीस और वैधता",
      intro: "पोर्टल के <strong>Service Fees</strong> पेज पर आय प्रमाण पत्र का कोई शुल्क दर्ज नहीं है। आय प्रमाण पत्र की वैधता अवधि पोर्टल पर नहीं लिखी है; छात्रवृत्ति/योजना के नियम में देखें कि कितना पुराना प्रमाण पत्र मान्य है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["PRTC नहीं है", "पहले e-District पर PRTC बनवाएं या नागरिकता प्रमाण पत्र लगाएं"],
          ["नौकरी है पर DDO सर्टिफिकेट/वेतन पर्ची नहीं", "अपने कार्यालय के DDO से सर्टिफिकेट या वेतन पर्ची लें"],
          ["Common Application Form नहीं लगाया", "फॉर्म प्रिंट करके हस्ताक्षर करें, स्कैन करके Attach Annexure में लगाएं"],
          ["फोटो अपलोड नहीं हो रही", "फोटो 320x240 पिक्सल और 250 KB से छोटी करें"],
          ["15 दिन बीत गए", "District Level Contact Details में अपने ज़िले के अधिकारी से संपर्क करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पोर्टल के होमपेज पर <strong>Citizen Section → District Level Contact Details</strong> में ज़िले के अधिकारियों की सूची है। फॉर्म भरने या तकनीकी दिक्कत के लिए ज़िले के District Project Manager से संपर्क करें।",
    },
  ],
  official: [
    { href: "https://edistrict.tripura.gov.in/", title: "Tripura e-District / Digital Seva पोर्टल" },
    { href: "https://edistrict.tripura.gov.in/resources/pdf/IC.pdf", title: "आय प्रमाण पत्र: Common Application Form (PDF)" },
    { href: "https://edistrict.tripura.gov.in/resources/pdf/Tripura_ESD_Rules_2015.pdf", title: "त्रिपुरा इलेक्ट्रॉनिक सेवा प्रदाय नियम 2015 (PDF)" },
  ],
  faq: [
    { q: "त्रिपुरा में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.tripura.gov.in पर रजिस्टर करें, Apply for Services → View Services → Income Certificate चुनें, फॉर्म भरें, Attach Annexure में Common Application Form, राशन कार्ड, PRTC, पहचान पत्र (और नौकरी हो तो DDO सर्टिफिकेट) अपलोड करके Submit करें।" },
    { q: "त्रिपुरा आय प्रमाण पत्र कितने दिन में बनता है?", a: "पोर्टल के सेवा विवरण के अनुसार 15 दिन में, सरकारी छुट्टियां छोड़कर।" },
    { q: "त्रिपुरा आय प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल के Service Fees पेज पर आय प्रमाण पत्र का कोई शुल्क दर्ज नहीं है। कियोस्क अपना सेवा शुल्क ले सकता है।" },
    { q: "आय प्रमाण पत्र कौन जारी करता है?", a: "आवेदन फॉर्म उपखंड मजिस्ट्रेट (SDM) के नाम होता है; यह राजस्व विभाग की सेवा है।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "e-District होमपेज पर Verify your Certificate में आवेदन संदर्भ संख्या और टोकन डालें।" },
  ],
  related: [
    { href: "/states/tripura-caste-certificate.html", emoji: "📜", title: "त्रिपुरा जाति प्रमाण पत्र", text: "SC/ST/OBC, e-District पर" },
    { href: "/states/tripura-domicile-certificate.html", emoji: "🏠", title: "त्रिपुरा स्थायी निवास प्रमाण पत्र", text: "PRTC" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.tripura.gov.in/", label: "📝 e-District त्रिपुरा पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
