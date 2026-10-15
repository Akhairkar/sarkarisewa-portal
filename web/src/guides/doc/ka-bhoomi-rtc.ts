import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; landrecords.karnataka.gov.in,
// rtc.karnataka.gov.in and bhoomi.karnataka.gov.in reset the connection from
// the sandbox, search extracts used): bankbazaar.com "Bhoomi Online",
// ujjivansfb.bank.in "Bhoomi RTC Karnataka", sobha.com, 1acre.in,
// vaultproptech.com, anantamias.com (RTC/Pahani = Record of Rights, Tenancy
// and Crops; view free on landrecords.karnataka.gov.in by district, taluk,
// hobli, village and survey number; digitally signed i-RTC download for ₹10;
// i-RTC accepted by banks/courts/offices; eKYC required for i-RTC user
// accounts from 23 June 2025 per one source; missed-copy reprint option;
// mutation register (MR) status on the same portal). Department: Revenue
// Department, Government of Karnataka (Bhoomi project). The ₹10 fee and the
// eKYC date are from secondary sources and are marked as such.
export const kaBhoomiRtc: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "कर्नाटक", href: "/states/karnataka.html" },
    { label: "भूमि RTC (पहानी)" },
  ],
  docHi: "भूमि RTC (पहानी)",
  title: "भूमि RTC (पहानी / अधिकार अभिलेख)",
  description: "कर्नाटक में कृषि भूमि का डिजिटल स्वामित्व रिकॉर्ड — मालिक का नाम, सर्वे नंबर, फसल और भूमि उपयोग विवरण दिखाता है, महाराष्ट्र के सातबारा उतारा जैसा।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "कर्नाटक भूमि RTC (पहानी): ऑनलाइन कैसे देखें और डिजिटल हस्ताक्षर वाली कॉपी कैसे निकालें",
  lead: "RTC (Record of Rights, Tenancy and Crops), जिसे पहानी भी कहते हैं, कर्नाटक में खेती की ज़मीन का अधिकार अभिलेख है: इसमें मालिक, सर्वे नंबर, क्षेत्रफल, फसल और कर्ज़/बोझ की जानकारी होती है। राजस्व विभाग के भूमि (Bhoomi) पोर्टल landrecords.karnataka.gov.in पर RTC मुफ्त में देखी जा सकती है। बैंक लोन या दफ्तर के काम के लिए डिजिटल हस्ताक्षर वाली i-RTC ऑनलाइन छोटी फीस देकर डाउनलोड होती है।",
  facts: [
    ["विभाग", "राजस्व विभाग, कर्नाटक (भूमि परियोजना)"],
    ["पोर्टल", "landrecords.karnataka.gov.in"],
    ["देखना", "मुफ्त"],
    ["डिजिटल हस्ताक्षर वाली i-RTC", "ऑनलाइन भुगतान पर (स्रोतों के अनुसार ₹10)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "RTC में क्या लिखा होता है",
      list: [
        "<strong>ज़मीन की पहचान:</strong> ज़िला, तालुक, होबली, गांव, सर्वे नंबर और हिस्सा (हिस्सा नंबर)",
        "<strong>मालिक/कब्ज़ेदार:</strong> नाम, हिस्सा और ज़मीन कैसे मिली (खरीद, विरासत आदि)",
        "<strong>क्षेत्रफल और प्रकार:</strong> एकड़-गुंटा, सिंचित/असिंचित, ज़मीन का उपयोग",
        "<strong>फसल:</strong> किस मौसम में कौन सी फसल बोई गई",
        "<strong>बोझ:</strong> बैंक कर्ज़ या दूसरे अधिकार जो ज़मीन पर दर्ज हैं",
      ],
      callout: { kind: "info", html: "यह महाराष्ट्र के 7/12 (सातबारा) जैसा दस्तावेज़ है। RTC मालिकाना हक़ का अकेला पक्का सबूत नहीं है; ज़मीन खरीदने से पहले रजिस्टर्ड दस्तावेज़ और म्यूटेशन रिकॉर्ड भी जांचें।" },
    },
    {
      id: "dekhe",
      title: "RTC ऑनलाइन कैसे देखें",
      steps: [
        "<a href=\"https://landrecords.karnataka.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">landrecords.karnataka.gov.in</a> खोलें और RTC देखने का विकल्प चुनें।",
        "ज़िला, तालुक, होबली और गांव चुनें।",
        "सर्वे नंबर डालें, फिर सरनोक (Surnoc) और हिस्सा नंबर चुनें।",
        "अवधि/साल चुनकर विवरण देखें। यह कॉपी सिर्फ जानकारी के लिए है।",
      ],
    },
    {
      id: "i-rtc",
      title: "डिजिटल हस्ताक्षर वाली i-RTC कैसे निकालें",
      steps: [
        "भूमि पोर्टल पर i-RTC सेवा में मोबाइल नंबर से लॉगिन/रजिस्टर करें। कुछ स्रोतों के अनुसार जून 2025 से i-RTC खाते के लिए eKYC ज़रूरी है।",
        "ज़मीन की जानकारी (ज़िला से सर्वे नंबर तक) भरें।",
        "ऑनलाइन फीस भरें (स्रोतों के अनुसार ₹10 प्रति कॉपी; भुगतान पेज पर राशि देखें)।",
        "डिजिटल हस्ताक्षर वाली RTC डाउनलोड करें और ऑर्डर नंबर संभालें।",
      ],
      callout: { kind: "ok", html: "पैसा कट गया पर कॉपी नहीं निकली तो दोबारा भुगतान न करें; पोर्टल पर छूटी कॉपी (missed copy/reprint) का विकल्प ऑर्डर नंबर से इस्तेमाल करें। ऑनलाइन न हो पाए तो नाडकचेरी या ग्राम वन/कर्नाटक वन केंद्र पर RTC निकलवाएं।" },
    },
    {
      id: "sudhar",
      title: "नाम या जानकारी गलत हो तो",
      list: [
        "<strong>म्यूटेशन (खाता बदलना):</strong> खरीद, विरासत या बंटवारे के बाद नाम बदलवाने के लिए गांव लेखाकार/तालुक कार्यालय में आवेदन करें। म्यूटेशन का स्टेटस भूमि पोर्टल पर देखा जा सकता है।",
        "<strong>लिखने की गलती:</strong> तहसीलदार कार्यालय में आवेदन दें, साथ में सही दस्तावेज़ (रजिस्टर्ड डीड, वारिस प्रमाण पत्र आदि) लगाएं।",
        "<strong>फसल की जानकारी:</strong> फसल सर्वे के आधार पर दर्ज होती है; गलती हो तो गांव लेखाकार से संपर्क करें।",
      ],
      callout: { kind: "warn", html: "\"भूमि\" नाम वाली निजी वेबसाइटों या ऐप पर ज़मीन का रिकॉर्ड डालकर भुगतान न करें। सिर्फ .karnataka.gov.in वाले पोर्टल इस्तेमाल करें।" },
    },
  ],
  official: [
    { href: "https://landrecords.karnataka.gov.in/", title: "भूमि: कर्नाटक भूमि अभिलेख पोर्टल", note: "RTC, म्यूटेशन स्टेटस" },
    { href: "https://www.karnataka.gov.in/", title: "कर्नाटक सरकार" },
  ],
  faq: [
    { q: "कर्नाटक में RTC/पहानी कहां देखें?", a: "राजस्व विभाग के भूमि पोर्टल landrecords.karnataka.gov.in पर ज़िला, तालुक, होबली, गांव और सर्वे नंबर डालकर मुफ्त में।" },
    { q: "बैंक लोन के लिए कौन सी RTC चाहिए?", a: "डिजिटल हस्ताक्षर वाली i-RTC, जो पोर्टल से ऑनलाइन भुगतान करके निकलती है, या नाडकचेरी/तालुक कार्यालय से जारी कॉपी। बैंक से पूछ लें कि वे कौन सी लेते हैं।" },
    { q: "i-RTC की फीस कितनी है?", a: "कई स्रोतों के अनुसार ₹10 प्रति कॉपी। सही राशि भुगतान पेज पर दिखती है।" },
    { q: "RTC और 7/12 में क्या फर्क है?", a: "दोनों खेती की ज़मीन के अधिकार अभिलेख हैं। कर्नाटक में इसे RTC/पहानी और महाराष्ट्र में 7/12 (सातबारा) कहते हैं।" },
    { q: "RTC में नाम कैसे बदलें?", a: "खरीद या विरासत के बाद म्यूटेशन के लिए तालुक कार्यालय/गांव लेखाकार के पास आवेदन करें। म्यूटेशन होने के बाद RTC में नया नाम आता है।" },
  ],
  related: [
    { href: "/states/karnataka.html", emoji: "🗺️", title: "कर्नाटक की सेवाएं", text: "राज्य की सभी गाइड" },
    { href: "/service/ka-caste-income-certificate.html", emoji: "🪪", title: "कर्नाटक जाति एवं आय प्रमाणपत्र", text: "नाडकचेरी से" },
    { href: "/service/kisan-credit-card.html", emoji: "💳", title: "किसान क्रेडिट कार्ड", text: "ज़मीन के कागज़ पर खेती का लोन" },
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान", text: "किसानों को सालाना सहायता" },
    { href: "/service/pm-fasal-bima-yojana.html", emoji: "🌧️", title: "फसल बीमा योजना", text: "फसल नुकसान का बीमा" },
  ],
  aside: [
    { href: "https://landrecords.karnataka.gov.in/", label: "📜 भूमि पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
