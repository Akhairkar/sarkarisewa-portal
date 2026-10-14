import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - birthdeath.odisha.gov.in (portal opens via script, so facts are from search extracts of its
//   'Apply For Birth Certificate' page): Apply Certificate, 7 working days, status/download.
// - odishaonline.gov.in birth certificate page and blogodishaone.odisha.gov.in guide (search
//   extracts): registration number required, applicant parent/guardian, ULB/NAC approval, digitally
//   signed certificate; contact health office if no registration number.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): fee amounts, rural registrar designation, name-addition rule, late-registration fees, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const odishaBirthCertificate: DocGuide = {
  state: { slug: "odisha", hi: "ओडिशा" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Odisha Birth Certificate 2026: Apply & Status",
  description: "ओडिशा जन्म प्रमाण पत्र 2026: Birth and Death Odisha पोर्टल, OdishaOne, 7 कार्य दिवस, नगर निकाय से अनुमोदन, 21 दिन की सीमा और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "ओडिशा जन्म प्रमाण पत्र 2026: Birth and Death Odisha पोर्टल पर आवेदन और डाउनलोड",
  lead: "ओडिशा का अपना 'Birth and Death Odisha' पोर्टल (birthdeath.odisha.gov.in) है जिसमें 'Apply Certificate' विकल्प है। पोर्टल के अनुसार आवेदन की प्रक्रिया में 7 कार्य दिवस लगते हैं, और स्थिति देखने व सर्टिफिकेट डाउनलोड का विकल्प भी वहीं है। आवेदक बच्चे के माता-पिता या अभिभावक होने चाहिए और बच्चे का पंजीकरण नंबर चाहिए। जन्म की सूचना 21 दिन में देनी है।",
  facts: [
    ["पोर्टल", "<a href=\"https://www.birthdeath.odisha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">birthdeath.odisha.gov.in</a> और OdishaOne"],
    ["समय", "आवेदन प्रक्रिया 7 कार्य दिवस (पोर्टल पेज)"],
    ["ज़रूरी", "बच्चे का पंजीकरण नंबर; आवेदक माता-पिता/अभिभावक"],
    ["अनुमोदन", "नगर निकाय (ULB/NAC) के बाद डिजिटल हस्ताक्षर वाला सर्टिफिकेट"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब तक पंजीकरण कराएं, देर होने पर क्या",
      intro: "जन्म की सूचना <strong>21 दिन के भीतर</strong> स्थानीय रजिस्ट्रार को देनी होती है। पंजीकरण उसी जगह होता है जहां जन्म हुआ। देर होने पर प्रक्रिया लंबी हो जाती है:",
      table: {"head": ["जन्म के बाद", "क्या लगेगा"], "rows": [["जन्म के <strong>21 दिन के भीतर</strong>", "पंजीकरण मुफ्त। कानून (जन्म-मृत्यु पंजीकरण अधिनियम 1969) में यही समय सीमा है"], ["21 से 30 दिन", "विलंब शुल्क देकर पंजीकरण"], ["30 दिन से 1 साल", "निर्धारित अधिकारी की लिखित अनुमति और शुल्क"], ["1 से 2 साल", "DM/SDM या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और शुल्क (1 अक्टूबर 2026 से)"], ["2 साल के बाद", "प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश और शुल्क"]]},
      callout: {"kind": "warn", "html": "<strong>1 अक्टूबर 2026 से नया नियम:</strong> जन्म और मृत्यु पंजीकरण (संशोधन) अधिनियम, 2026 लागू हो गया है। अब 1 से 2 साल की देरी पर ज़िला मजिस्ट्रेट (DM), उपखंड मजिस्ट्रेट (SDM) या DM द्वारा अधिकृत कार्यकारी मजिस्ट्रेट का आदेश और 2 साल से ज़्यादा की देरी पर प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश लगता है। देर से पंजीकरण से पहले अपने रजिस्ट्रार से शुल्क और कागज़ पूछ लें।"},
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
      intro: "Odisha के पोर्टल और OdishaOne की मार्गदर्शिका के अनुसार जन्म पंजीकृत होने के बाद उसका सर्टिफिकेट ऑनलाइन निकाला जाता है। पंजीकरण नंबर न हो तो स्वास्थ्य कार्यालय से संपर्क करने को कहा गया है।",
      steps: ["जन्म पहले अस्पताल या नगर निकाय/ग्राम पंचायत में पंजीकृत कराएं और <strong>पंजीकरण संख्या</strong> लें।", "<a href=\"https://www.birthdeath.odisha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">birthdeath.odisha.gov.in</a> पर 'Apply Certificate' चुनें, या OdishaOne नागरिक सेवा पोर्टल पर जन्म-मृत्यु सेवा खोलें।", "जिला, नगर निकाय/नगर पालिका/ग्राम पंचायत और पंजीकरण संख्या डालकर रिकॉर्ड निकालें और आवेदन भेजें।", "नगर निकाय/नगर पालिका कार्यालय के अनुमोदन के बाद डिजिटल हस्ताक्षर वाला सर्टिफिकेट प्रिंट/डाउनलोड करें।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>बच्चे का जन्म पंजीकरण नंबर</strong> (सबसे ज़रूरी)।", "आवेदक <strong>माता-पिता या अभिभावक</strong> हों।", "<strong>अस्पताल में जन्म:</strong> अस्पताल की रिपोर्ट। पंजीकरण नंबर न होने पर स्वास्थ्य कार्यालय से संपर्क करें।", "<strong>माता-पिता का पहचान प्रमाण।</strong> 2023 के संशोधन में आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> ठीक सूची और शुल्क स्थानीय रजिस्ट्रार (नगर निकाय/ग्राम पंचायत) से लें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म दर्ज हो सकता है और नाम बाद में जुड़ सकता है। ओडिशा में इसकी समय सीमा और शुल्क हम पक्के तौर पर नहीं देख पाए। रजिस्ट्रार कार्यालय से अभी का नियम पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>स्थिति और डाउनलोड:</strong> Birth and Death Odisha पोर्टल के डाउनलोड/स्थिति सेक्शन में आवेदन देखें।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; सबूत के साथ रजिस्ट्रार को आवेदन दें।", "<strong>शिकायत:</strong> पहले अनुमोदन करने वाले नगर निकाय/ब्लॉक कार्यालय में, फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर लिखित शिकायत करें।"],
    },
  ],
  official: [
    { href: "https://www.birthdeath.odisha.gov.in/", title: "Birth and Death Odisha पोर्टल" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (शिकायत)" },
  ],
  faq: [
    { q: "ओडिशा में जन्म प्रमाण पत्र ऑनलाइन कैसे निकालें?", a: "Birth and Death Odisha पोर्टल (birthdeath.odisha.gov.in) पर 'Apply Certificate' से या OdishaOne पोर्टल पर, बच्चे का पंजीकरण नंबर डालकर। आवेदक बच्चे के माता-पिता या अभिभावक होने चाहिए।" },
    { q: "ओडिशा में सर्टिफिकेट मिलने में कितना समय लगता है?", a: "पोर्टल पेज के अनुसार आवेदन प्रक्रिया में 7 कार्य दिवस लगते हैं। नगर निकाय के अनुमोदन के बाद सर्टिफिकेट मिलता है।" },
    { q: "पंजीकरण नंबर नहीं है तो क्या करें?", a: "OdishaOne की मार्गदर्शिका के अनुसार स्वास्थ्य कार्यालय से संपर्क करें; अस्पताल में जन्म हुआ हो तो अस्पताल से पंजीकरण की स्थिति पूछें।" },
    { q: "ओडिशा में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ रजिस्ट्रार (नगर निकाय/ग्राम पंचायत) कार्यालय जाएं। ओडिशा में समय सीमा और शुल्क की पुष्टि हम नहीं कर सके, वहीं से पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/odisha-death-certificate.html", emoji: "🕊️", title: "ओडिशा मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/odisha-domicile-certificate.html", emoji: "🏠", title: "ओडिशा निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://www.birthdeath.odisha.gov.in/", label: "📝 Birth and Death Odisha" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
