import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - haryanahealth.gov.in/service/civil-registration-system/ (Health Department Haryana):
//   Haryana Registration of Births and Deaths Rules 2025; who must report; 21 days; Forms 1, 3, 4;
//   free copy at registration; name free within 12 months then Rs 50; name cannot be changed;
//   late fees 21-30 days Rs 10, 31 days-1 year Rs 25, >1 year Rs 50; search Rs 20/year; copy Rs 50.
// - saralharyana.gov.in service 'Application for Delayed Birth/Death Registration' (search result).
// - panchkula.nic.in, hisar.gov.in service pages: link to crsorgi.gov.in; Civil Surgeon office.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): registrar designations by area, SARAL document list and time limit, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const haryanaBirthCertificate: DocGuide = {
  state: { slug: "haryana", hi: "हरियाणा" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Haryana Birth Certificate 2026: Apply & Status",
  description: "हरियाणा जन्म प्रमाण पत्र 2026: 21 दिन की सीमा, विलंब शुल्क (₹10/₹25/₹50), नाम जोड़ने का नियम, SARAL पोर्टल और 2023 का नया नियम, स्वास्थ्य विभाग के नियमों के आधार पर।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "हरियाणा जन्म प्रमाण पत्र 2026: विलंब शुल्क, नाम जोड़ना, SARAL पर आवेदन",
  lead: "हरियाणा में जन्म-मृत्यु पंजीकरण हरियाणा जन्म-मृत्यु पंजीकरण नियम 2025 के तहत होता है। जन्म की सूचना 21 दिन में स्थानीय रजिस्ट्रार को देनी है और उसी समय मुफ्त कॉपी मिलती है। 21 से 30 दिन पर ₹10, 31 दिन से 1 साल पर ₹25 और 1 साल के बाद ₹50 विलंब शुल्क है (स्वास्थ्य विभाग की सूची)। देर से पंजीकरण के लिए SARAL पोर्टल पर आवेदन सेवा दर्ज है।",
  facts: [
    ["समय सीमा", "जन्म के 21 दिन के भीतर (मुफ्त कॉपी)"],
    ["विलंब शुल्क", "21-30 दिन ₹10; 31 दिन-1 साल ₹25; 1 साल बाद ₹50"],
    ["नाम जोड़ना", "12 महीने तक मुफ्त; बाद में ₹50"],
    ["सर्टिफिकेट कॉपी", "₹50 प्रति कॉपी; खोज ₹20 प्रति वर्ष"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब तक पंजीकरण कराएं, देर होने पर क्या",
      intro: "जन्म की सूचना <strong>21 दिन के भीतर</strong> स्थानीय रजिस्ट्रार को देनी होती है। पंजीकरण उसी जगह होता है जहां जन्म हुआ। देर होने पर प्रक्रिया लंबी हो जाती है:",
      table: {"head": ["जन्म के बाद", "क्या लगेगा"], "rows": [["जन्म के <strong>21 दिन के भीतर</strong>", "पंजीकरण के समय सर्टिफिकेट की मुफ्त कॉपी"], ["21 से 30 दिन", "विलंब शुल्क <strong>₹10</strong>"], ["31 दिन से 1 साल", "विलंब शुल्क <strong>₹25</strong>"], ["1 साल के बाद", "विलंब शुल्क <strong>₹50</strong>; साथ में अधिकारी/मजिस्ट्रेट की अनुमति"]]},
      callout: {"kind": "warn", "html": "<strong>अगस्त 2026 का संशोधन:</strong> समाचार रिपोर्टों के अनुसार संसद ने जन्म-मृत्यु पंजीकरण (संशोधन) विधेयक 2026 पारित किया है। इसमें 1 से 2 साल की देरी पर जिला मजिस्ट्रेट/उप-मंडल मजिस्ट्रेट/अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और 2 साल से ज़्यादा की देरी पर प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश लगेगा। यह कब से लागू है, यह हम पक्का नहीं कर सके; देर से पंजीकरण से पहले अपने रजिस्ट्रार से आज का नियम पूछ लें।"},
    },
    {
      id: "kanoon",
      title: "1 अक्टूबर 2023 का नियम: जन्म प्रमाण पत्र क्यों ज़रूरी",
      intro: "जन्म-मृत्यु पंजीकरण (संशोधन) अधिनियम 2023 <strong>1 अक्टूबर 2023</strong> से लागू हुआ। इसके बाद जन्मे बच्चों के लिए जन्म प्रमाण पत्र ही जन्म की तारीख और जगह का एकमात्र प्रमाण माना जाएगा, इन कामों के लिए:",
      list: ["स्कूल/कॉलेज में दाखिला", "ड्राइविंग लाइसेंस", "मतदाता सूची में नाम", "आधार नंबर", "विवाह पंजीकरण", "सरकारी नौकरी में नियुक्ति"],
      callout: {"kind": "info", "html": "यह नियम 1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों पर लागू होता है। इसलिए बच्चे का जन्म पंजीकरण 21 दिन में करा लेना सबसे आसान रास्ता है। केंद्र का पोर्टल: <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>."},
    },
    {
      id: "kahan",
      title: "कहां और कैसे आवेदन करें",
      intro: "हरियाणा स्वास्थ्य विभाग के अनुसार जन्म की सूचना देने की जिम्मेदारी घर के मुखिया (घर पर जन्म), अस्पताल प्रभारी (अस्पताल में जन्म), छात्रावास/जेल/धर्मशाला प्रभारी (वहां जन्म) और लावारिस मिले नवजात के मामले में थाना जांच अधिकारी की है। पंजीकरण जन्म की जगह पर होता है।",
      steps: ["जन्म की सूचना फॉर्म नंबर 1 (जन्म), 3 (मृत्यु) या 4 (मृत जन्म) पर दी जाती है; फॉर्म स्वास्थ्य विभाग की साइट haryanahealth.gov.in पर मिलते हैं।", "<strong>अस्पताल में जन्म:</strong> अस्पताल सूचना भेजता है। पंजीकरण संख्या और सर्टिफिकेट के बारे में पूछें।", "<strong>घर पर जन्म:</strong> फॉर्म 1 भरकर अपने क्षेत्र के रजिस्ट्रार को 21 दिन में दें। जिला पेज (हिसार, पंचकूला आदि) ऑनलाइन रास्ते के रूप में <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> बताते हैं।", "<strong>देर से पंजीकरण:</strong> SARAL पोर्टल पर <a href=\"https://saralharyana.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">saralharyana.gov.in</a> में 'Application for Delayed Birth/Death Registration' सेवा दर्ज है।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>जन्म सूचना फॉर्म 1</strong> (हरियाणा स्वास्थ्य विभाग का फॉर्म)।", "<strong>अस्पताल में जन्म:</strong> अस्पताल की रिपोर्ट/डिस्चार्ज पर्ची।", "<strong>माता-पिता का पहचान और पते का प्रमाण।</strong> 2023 के संशोधन में आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> शपथ-पत्र और जन्म का कोई सबूत; ठीक सूची SARAL सेवा पेज या रजिस्ट्रार से लें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>हरियाणा स्वास्थ्य विभाग के अनुसार जन्म बिना नाम के भी पंजीकृत हो सकता है। बच्चे का नाम <strong>पंजीकरण की तारीख से 12 महीने के भीतर निःशुल्क</strong> दर्ज कराया जा सकता है। 12 महीने बाद नाम दर्ज कराने का शुल्क <strong>₹50</strong> है। एक बार दर्ज नाम बदला नहीं जा सकता, इसलिए वर्तनी ध्यान से लिखवाएं।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड/कॉपी:</strong> स्वास्थ्य विभाग की सूची में सर्टिफिकेट की प्रति ₹50 और रिकॉर्ड खोज ₹20 प्रति वर्ष है। ऑनलाइन कॉपी के लिए <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> देखें।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; रजिस्ट्रार को सबूत के साथ आवेदन दें।", "<strong>शिकायत:</strong> SARAL की सेवा में देरी हो तो हरियाणा सेवा का अधिकार आयोग (haryana-rtsc.gov.in) से अपील की जा सकती है; पहले उसी कार्यालय में लिखित शिकायत करें।"],
    },
  ],
  official: [
    { href: "https://haryanahealth.gov.in/service/civil-registration-system/", title: "हरियाणा स्वास्थ्य विभाग: सिविल रजिस्ट्रेशन सिस्टम, फीस और नाम जोड़ने का नियम" },
    { href: "https://saralharyana.gov.in/", title: "SARAL हरियाणा (देर से पंजीकरण सेवा)" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://haryana-rtsc.gov.in/", title: "हरियाणा सेवा का अधिकार आयोग" },
  ],
  faq: [
    { q: "हरियाणा में जन्म पंजीकरण में देरी का जुर्माना कितना है?", a: "हरियाणा स्वास्थ्य विभाग की फीस सूची के अनुसार 21 से 30 दिन पर ₹10, 31 दिन से 1 साल पर ₹25 और 1 साल के बाद ₹50।" },
    { q: "हरियाणा में बच्चे का नाम बाद में जुड़वाने का शुल्क कितना है?", a: "पंजीकरण से 12 महीने तक निःशुल्क। उसके बाद ₹50। एक बार दर्ज हुआ नाम बदला नहीं जा सकता (स्वास्थ्य विभाग हरियाणा)।" },
    { q: "हरियाणा में जन्म प्रमाण पत्र की कॉपी का शुल्क क्या है?", a: "सूची के अनुसार प्रति कॉपी ₹50 और रिकॉर्ड खोज ₹20 प्रति वर्ष। जन्म पंजीकरण के समय पहली कॉपी मुफ्त मिलती है।" },
    { q: "हरियाणा में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "हरियाणा स्वास्थ्य विभाग के अनुसार पंजीकरण की तारीख से 12 महीने तक नाम दर्ज कराना निःशुल्क है; उसके बाद ₹50 लगता है। एक बार दर्ज हुआ नाम बदला नहीं जा सकता।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/haryana-death-certificate.html", emoji: "🕊️", title: "हरियाणा मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/haryana-domicile-certificate.html", emoji: "🏠", title: "हरियाणा निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://haryanahealth.gov.in/service/civil-registration-system/", label: "📋 स्वास्थ्य विभाग: फीस सूची" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
