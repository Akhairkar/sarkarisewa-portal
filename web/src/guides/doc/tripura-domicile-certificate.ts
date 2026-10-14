import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - Tripura e-District / Digital Seva portal edistrict.tripura.gov.in
//   (ServicePlus): service "Permanent Resident of Tripura Certificate (PRTC)";
//   Citizen Registration, Track Your Application, Verify your Certificate,
//   FAQ, District Level Contact Details (see tripura-income-certificate.ts).
// - Service description getServiceDesc.html?serviceId=2790014: Revenue
//   Department; G2C; regulatory; registration needed; delivered within 15 days
//   (excluding government holidays); by hand, online, kiosk; enclosures:
//   Common Application Form; residency proof of spouse (citizenship / PRTC of
//   spouse); residency proof of guardian (PRTC of parents, citizenship of
//   parents, land revenue receipt in parents' name); proof of employment with
//   Govt of Tripura (employer certificate based on service record);
//   residency proof of applicant (certified copy of electoral roll, land
//   revenue receipt in the name of applicant or parents, attested copy of a
//   gazetted officer stating the applicant is known to him for the last 10
//   years, or ration card of parents); birth proof (Class 10 admit card,
//   education certificate, school leaving, birth registration certificate);
//   guardian's residential proof (citizenship certificate / PRTC).
// - Common application form PRTC_(PRTC).pdf: addressed to the Sub-Divisional
//   Magistrate; Annexure I guardian's declaration for minor; Annexure II
//   attestation by any gazetted officer; eligibility questions: born in
//   Tripura; residing in Tripura continuously not less than 10 years;
//   parent(s) residing continuously not less than 10 years; parent(s) in Govt
//   of Tripura service on deputation outside / Tripura Bhawans; parent(s) in
//   other state/central govt, PSU or private organisations outside Tripura.
// - Service fees page (resources/homePage/16/html/Final_Rates.html): PRTC
//   service charge APL 5.00, BPL 2.00.
// Left out (not confirmable): validity. The old description's "official fee"
// was replaced with the portal's own figure.
export const tripuraDomicileCertificate: DocGuide = {
  state: { slug: "tripura", hi: "त्रिपुरा" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Tripura Domicile Certificate 2026: Apply & Status",
  description: "त्रिपुरा स्थायी निवास प्रमाण पत्र (PRTC) 2026: e-District पर आवेदन, 10 साल निवास की शर्त, ज़रूरी कागज़, शुल्क ₹5 (APL) / ₹2 (BPL), 15 दिन में SDM से।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "त्रिपुरा PRTC (स्थायी निवास प्रमाण पत्र) 2026: पात्रता, कागज़ और ऑनलाइन आवेदन",
  lead: "त्रिपुरा में डोमिसाइल के लिए <strong>Permanent Resident of Tripura Certificate (PRTC)</strong> बनता है। आवेदन <strong>edistrict.tripura.gov.in</strong> पर, कियोस्क से या हाथ से <strong>सब-डिविज़नल मजिस्ट्रेट (SDM)</strong> कार्यालय में होता है। पोर्टल के अनुसार यह <strong>15 दिन</strong> में मिलता है और शुल्क APL के लिए <strong>₹5</strong> तथा BPL के लिए <strong>₹2</strong> है।",
  facts: [
    ["ऑनलाइन", '<a href="https://edistrict.tripura.gov.in/" target="_blank" rel="noopener nofollow">edistrict.tripura.gov.in</a>'],
    ["जारी करते हैं", "सब-डिविज़नल मजिस्ट्रेट (SDM)"],
    ["समय", "15 दिन (छुट्टियां छोड़कर)"],
    ["शुल्क", "APL ₹5 / BPL ₹2"],
  ],
  sections: [
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      intro: "PRTC के आवेदन फॉर्म में पात्रता के ये सवाल हैं; आपकी स्थिति इनमें से किसी से मेल खानी चाहिए:",
      list: [
        "आवेदक <strong>त्रिपुरा में पैदा</strong> हुआ है",
        "आवेदक <strong>कम से कम 10 साल से लगातार</strong> त्रिपुरा में रह रहा है",
        "आवेदक के माता-पिता <strong>कम से कम 10 साल से लगातार</strong> त्रिपुरा में रह रहे हैं",
        "माता-पिता त्रिपुरा सरकार की नौकरी में हैं और प्रतिनियुक्ति पर राज्य के बाहर या त्रिपुरा भवन में तैनात हैं",
        "माता-पिता दूसरे राज्य/केंद्र सरकार, PSU या निजी संस्था में त्रिपुरा के बाहर काम करते हैं",
      ],
      callout: { kind: "info", html: "आखिरी फैसला SDM कार्यालय जांच के बाद करता है। जाति का सबूत अलग है: <a href=\"/states/tripura-caste-certificate.html\">त्रिपुरा जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "e-District पोर्टल पर PRTC सेवा की सूची के अनुसार (फोटोकॉपी, सत्यापन ज़रूरी नहीं):",
      list: [
        "<strong>Common Application Form</strong> (मूल)",
        "<strong>आवेदक के निवास का सबूत</strong> (कोई एक): मतदाता सूची की प्रमाणित कॉपी, अपने या माता-पिता के नाम <strong>भू-राजस्व (खजाना) की रसीद</strong>, किसी राजपत्रित अधिकारी का सत्यापन कि वह आपको <strong>पिछले 10 साल से जानते हैं</strong>, या माता-पिता का राशन कार्ड",
        "<strong>जन्म का सबूत</strong> (कोई एक): 10वीं का एडमिट कार्ड, शिक्षा प्रमाण पत्र, स्कूल छोड़ने का प्रमाण पत्र या जन्म पंजीकरण प्रमाण पत्र",
        "<strong>माता-पिता/अभिभावक के निवास का सबूत</strong>: उनका PRTC, नागरिकता प्रमाण पत्र या उनके नाम भू-राजस्व रसीद",
        "विवाहित हों तो <strong>पति/पत्नी</strong> का PRTC या नागरिकता प्रमाण (जहां लागू हो)",
        "माता-पिता सरकारी नौकरी में हों तो <strong>नियोक्ता का प्रमाण पत्र</strong> (सेवा रिकॉर्ड के आधार पर)",
      ],
      callout: { kind: "ok", html: "फॉर्म के साथ <strong>Annexure II</strong> (किसी राजपत्रित अधिकारी का सत्यापन) और नाबालिग के लिए <strong>Annexure I</strong> (अभिभावक की घोषणा) भरना होता है। फॉर्म पोर्टल के Download Forms से मिलता है।" },
    },
    {
      id: "online",
      title: "e-District पर आवेदन",
      steps: [
        '<a href="https://edistrict.tripura.gov.in/" target="_blank" rel="noopener nofollow">edistrict.tripura.gov.in</a> खोलें और <strong>Citizen Registration</strong> से अकाउंट बनाएं (ईमेल लिंक और मोबाइल OTP से)।',
        "लॉगिन करके <strong>Apply for Services → View Services</strong> में <strong>Permanent Resident of Tripura Certificate (PRTC)</strong> चुनें।",
        "फॉर्म भरें, अपनी पात्रता वाले सवालों के सही जवाब दें और कागज़ अपलोड करें।",
        "शुल्क (APL ₹5 / BPL ₹2) भरें और आवेदन जमा करें। जमा होने पर SMS आता है।",
        "प्रमाण पत्र हार्ड कॉपी या <strong>e-Copy</strong> (डिजिटल हस्ताक्षर वाली PDF) में चुन सकते हैं।",
      ],
      html: "<p>खुद नहीं भर सकते तो कियोस्क/CSC से, या फॉर्म भरकर हाथ से SDM कार्यालय में जमा करें।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "होमपेज के <strong>Track Your Application</strong> में आवेदन संख्या डालकर स्थिति देखें।",
        "फैसले पर SMS आता है; e-Copy चुनी है तो PDF ईमेल पर भी आती है।",
        "<strong>Verify your Certificate</strong> से प्रमाण पत्र असली है या नहीं, जांच सकते हैं।",
        "15 दिन में फैसला न हो तो अपने SDM कार्यालय या पोर्टल पर दिए ज़िला संपर्क से बात करें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["10 साल के निवास का सबूत नहीं", "पुरानी मतदाता सूची, खजाना रसीद या राजपत्रित अधिकारी का 10 साल वाला सत्यापन लगाएं"],
          ["माता-पिता का PRTC/नागरिकता प्रमाण नहीं", "माता-पिता का PRTC, नागरिकता प्रमाण पत्र या उनके नाम ज़मीन की रसीद लगाएं"],
          ["Annexure II नहीं भरा", "किसी राजपत्रित अधिकारी से सत्यापन करवाकर लगाएं"],
          ["जन्मतिथि का प्रमाण नहीं", "10वीं का एडमिट कार्ड या जन्म पंजीकरण प्रमाण पत्र लगाएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.tripura.gov.in/", title: "Tripura e-District / Digital Seva (ऑनलाइन आवेदन)" },
    { href: "https://edistrict.tripura.gov.in/resources/pdf/PRTC_(PRTC).pdf", title: "PRTC आवेदन फॉर्म (PDF)" },
    { href: "https://edistrict.tripura.gov.in/resources/homePage/16/html/Final_Rates.html", title: "e-District सेवा शुल्क" },
  ],
  faq: [
    { q: "त्रिपुरा में डोमिसाइल प्रमाण पत्र कौन सा है?", a: "Permanent Resident of Tripura Certificate (PRTC)। यह SDM देते हैं और आवेदन edistrict.tripura.gov.in पर होता है।" },
    { q: "PRTC के लिए कितने साल रहना ज़रूरी है?", a: "फॉर्म के अनुसार त्रिपुरा में जन्म, या आवेदक या उसके माता-पिता का कम से कम 10 साल लगातार निवास। माता-पिता के त्रिपुरा सरकार या बाहर नौकरी करने वाले मामलों के लिए भी विकल्प हैं।" },
    { q: "PRTC का शुल्क कितना है?", a: "e-District के शुल्क पेज के अनुसार APL के लिए ₹5 और BPL के लिए ₹2।" },
    { q: "PRTC कितने दिन में मिलता है?", a: "पोर्टल के अनुसार 15 दिन में (सरकारी छुट्टियां छोड़कर)।" },
  ],
  related: [
    { href: "/states/tripura-caste-certificate.html", emoji: "📜", title: "त्रिपुरा जाति प्रमाण पत्र", text: "SC/ST/OBC, e-District पर" },
    { href: "/states/tripura-income-certificate.html", emoji: "💰", title: "त्रिपुरा आय प्रमाण पत्र", text: "e-District पर, 15 दिन" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.tripura.gov.in/", label: "📝 e-District पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
