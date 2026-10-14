import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - palnadu.ap.gov.in/service/residence-certificate/ (district administration,
//   page updated 01.05.2026): Residence Certificate is proof of permanent
//   residence in a village / town / ward, issued on the basis of stay at a
//   place or permanent employment; two types, General and Passport; documents:
//   application form, ration card / EPIC / Aadhaar, house tax / telephone /
//   electricity bill, photo (mandatory for Residence Passport); Category B
//   service; apply through the Village/Ward Secretariat; MeeSeva link.
// - westgodavari.ap.gov.in/?p=26069 (district administration): same text, apply
//   through MeeSeva centre, status on ap.meeseva.gov.in.
// - EoDB SOP (vswsonline.ap.gov.in/assets/User-Manuals/EoDB SOP final.pdf,
//   AP Seva portal document, Nov 2022): "Community, Nativity and Date of Birth
//   Certificate (Integrated Certificate)" - Tahsildar (MRO) or RDO; for BC,
//   SC, ST and OC citizens; SLA 30 days; documents SSC marks memo / TC / DOB
//   extract, earlier caste certificate of family (where applicable); VRO field
//   verification, RI, Tahsildar/RDO; track and download on AP Seva; fee Rs 12.
// - apseva.ap.gov.in (reused from andhra-pradesh-income-certificate.ts,
//   checked 13 Oct 2026): AP Seva portal of the village/ward secretariats;
//   status; helpline 1902.
// Left out (not confirmable on an official page we could open): fee and time
// limit for the Residence Certificate itself, validity, the residence-period
// ("local status") rules used in admissions and recruitment.
export const andhraPradeshDomicileCertificate: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Andhra Pradesh Domicile Certificate 2026",
  description: "आंध्र प्रदेश निवास (Residence) प्रमाण पत्र 2026: ग्राम/वार्ड सचिवालय या MeeSeva से आवेदन, ज़रूरी कागज़, Integrated Certificate (मूल निवास) का फर्क और AP Seva पर स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "आंध्र प्रदेश निवास (Residence) प्रमाण पत्र 2026: सचिवालय से आवेदन, कागज़ और स्टेटस",
  lead: "आंध्र प्रदेश में निवास का प्रमाण पत्र <strong>Residence Certificate</strong> कहलाता है। यह किसी गांव, शहर या वार्ड में स्थायी निवास का प्रमाण है और आवेदन ग्राम/वार्ड सचिवालय या MeeSeva केंद्र से होता है। इसके लिए राशन कार्ड, वोटर कार्ड या आधार में से एक और घर टैक्स, टेलीफोन या बिजली बिल में से एक कागज़ चाहिए। छात्रवृत्ति और योजनाओं में जहां मूल निवास (Nativity) मांगा जाता है, वहां अलग से <strong>Integrated Certificate</strong> बनता है।",
  facts: [
    ["आवेदन", "ग्राम/वार्ड सचिवालय या MeeSeva"],
    ["प्रकार", "General और Passport"],
    ["कागज़", "राशन/वोटर/आधार + घर टैक्स/बिजली/फोन बिल"],
    ["स्टेटस", '<a href="https://apseva.ap.gov.in/" target="_blank" rel="noopener nofollow">apseva.ap.gov.in</a>'],
  ],
  notice: "<strong>ध्यान दें:</strong> दाखिले और भर्ती में \"local candidate\" की शर्त उस परीक्षा या भर्ती के अपने नियमों से तय होती है। उसके लिए सूचना-पुस्तिका पढ़ें; सिर्फ Residence Certificate काफी हो, यह ज़रूरी नहीं।",
  sections: [
    {
      id: "kya-hai",
      title: "Residence Certificate और Integrated Certificate में फर्क",
      table: {
        head: ["प्रमाण पत्र", "क्या बताता है", "कब चाहिए"],
        rows: [
          ["<strong>Residence Certificate</strong> (General)", "आप किस गांव/शहर/वार्ड के स्थायी निवासी हैं; रहने या स्थायी नौकरी के आधार पर", "जहां पते/निवास का सरकारी प्रमाण मांगा जाए"],
          ["<strong>Residence Certificate</strong> (Passport)", "वही, पासपोर्ट के काम के लिए; इसमें फोटो अनिवार्य", "पासपोर्ट से जुड़े काम"],
          ["<strong>Integrated Certificate</strong>", "समुदाय (जाति), मूल निवास (Nativity) और जन्मतिथि, तीनों एक साथ", "छात्रवृत्ति, फीस रीइंबर्समेंट, कल्याण योजनाएं"],
        ],
      },
      callout: { kind: "info", html: "Integrated Certificate की पूरी जानकारी: <a href=\"/states/andhra-pradesh-caste-certificate.html\">आंध्र प्रदेश जाति प्रमाण पत्र गाइड</a>। AP Seva की SOP के अनुसार इसकी समय सीमा 30 दिन है और तहसीलदार (MRO) या RDO इसे मंज़ूर करते हैं।" },
    },
    {
      id: "kagaz",
      title: "Residence Certificate के लिए ज़रूरी कागज़",
      intro: "ज़िला प्रशासन (पलनाडु, पश्चिम गोदावरी) की सूची के अनुसार:",
      list: [
        "<strong>आवेदन फॉर्म</strong>",
        "<strong>राशन कार्ड, वोटर कार्ड (EPIC) या आधार कार्ड</strong> (कोई एक)",
        "<strong>घर टैक्स की रसीद, टेलीफोन बिल या बिजली बिल</strong> (कोई एक)",
        "<strong>फोटो</strong>: Passport वाले Residence Certificate में अनिवार्य",
      ],
      callout: { kind: "warn", html: "बिल और कार्ड पर वही पता हो जो आप आवेदन में लिख रहे हैं। पता अलग हो तो पहले आधार या राशन कार्ड में पता ठीक कराएं।" },
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        "अपने <strong>ग्राम सचिवालय या वार्ड सचिवालय</strong> में (या नज़दीकी MeeSeva केंद्र पर) ऊपर दिए कागज़ लेकर जाएं।",
        "<strong>Residence Certificate</strong> चुनें और बताएं कि General चाहिए या Passport के लिए।",
        "फॉर्म भरवाकर कागज़ जमा करें और <strong>रसीद (आवेदन नंबर)</strong> लें।",
        "निवास की जांच होती है; कोई कागज़ मांगा जाए तो जल्दी दें।",
        "मंज़ूरी के बाद प्रमाण पत्र सचिवालय या MeeSeva केंद्र से लें।",
      ],
      html: "<p>ज़िला पेजों पर यह <strong>Category B</strong> सेवा बताई गई है, यानी इसमें जांच के बाद मंज़ूरी मिलती है; प्रमाण पत्र तुरंत काउंटर पर नहीं बनता। फीस और समय सीमा का कोई मौजूदा सरकारी आंकड़ा हमें नहीं मिला, इसलिए सचिवालय में रसीद पर लिखी फीस ही दें।</p>",
    },
    {
      id: "status",
      title: "स्टेटस और मदद",
      list: [
        '<a href="https://apseva.ap.gov.in/" target="_blank" rel="noopener nofollow">apseva.ap.gov.in</a> पर आवेदन नंबर से स्टेटस देखें।',
        "AP Seva हेल्पलाइन: <strong>1902</strong>।",
        "जिस सचिवालय में आवेदन किया, वहां रसीद दिखाकर भी स्थिति पूछ सकते हैं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पते का बिल या टैक्स रसीद नहीं लगाई", "घर टैक्स, बिजली या टेलीफोन बिल में से एक लगाएं"],
          ["कार्ड और बिल में पता अलग", "आधार/राशन कार्ड में पता ठीक कराकर दोबारा आवेदन करें"],
          ["जांच में उस पते पर निवास नहीं मिला", "उसी सचिवालय क्षेत्र में आवेदन करें जहां आप सच में रहते हैं"],
          ["छात्रवृत्ति के लिए Residence Certificate बनवा लिया", "छात्रवृत्ति/फीस रीइंबर्समेंट में आम तौर पर Integrated Certificate मांगा जाता है; फॉर्म की शर्त देखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://apseva.ap.gov.in/", title: "AP Seva (ग्राम/वार्ड सचिवालय पोर्टल): आवेदन और स्टेटस" },
    { href: "https://palnadu.ap.gov.in/service/residence-certificate/", title: "Residence Certificate: कागज़ और प्रक्रिया (ज़िला पलनाडु)" },
    { href: "https://westgodavari.ap.gov.in/?p=26069", title: "Residence Certificate (ज़िला पश्चिम गोदावरी)" },
    { href: "https://vswsonline.ap.gov.in/assets/User-Manuals/EoDB%20SOP%20final.pdf", title: "AP Seva SOP (PDF): Integrated Certificate" },
  ],
  faq: [
    { q: "आंध्र प्रदेश में निवास प्रमाण पत्र कहां बनता है?", a: "अपने ग्राम/वार्ड सचिवालय में या MeeSeva केंद्र पर Residence Certificate के लिए आवेदन करें।" },
    { q: "कौन से कागज़ लगते हैं?", a: "आवेदन फॉर्म, राशन कार्ड/वोटर कार्ड/आधार में से एक, घर टैक्स/टेलीफोन/बिजली बिल में से एक, और Passport वाले प्रमाण पत्र के लिए फोटो।" },
    { q: "Residence Certificate और Integrated Certificate में क्या फर्क है?", a: "Residence Certificate सिर्फ निवास बताता है। Integrated Certificate में जाति, मूल निवास और जन्मतिथि तीनों होते हैं और यह छात्रवृत्ति व योजनाओं में लगता है।" },
    { q: "स्टेटस कैसे देखें?", a: "apseva.ap.gov.in पर आवेदन नंबर से, या हेल्पलाइन 1902 पर पूछें।" },
  ],
  related: [
    { href: "/states/andhra-pradesh-caste-certificate.html", emoji: "📜", title: "आंध्र प्रदेश जाति प्रमाण पत्र", text: "Integrated Certificate" },
    { href: "/states/andhra-pradesh-income-certificate.html", emoji: "💰", title: "आंध्र प्रदेश आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/andhra-pradesh-employment-exchange.html", emoji: "💼", title: "आंध्र प्रदेश रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://apseva.ap.gov.in/", label: "🔍 AP Seva पर स्टेटस" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
