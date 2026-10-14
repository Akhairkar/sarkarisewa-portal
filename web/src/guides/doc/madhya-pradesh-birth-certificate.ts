import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - sagar.nic.in/en/service/birth-certificate/ (district service page): MP rules, 21 days, place
//   of occurrence, mpedistrict.gov.in, Lok Sewa Center.
// - mpenagarpalika.gov.in citizen-services birth certificate page (search extract): online form,
//   upload, online payment or printed form at ULB; private hospital discharge card at ward office;
//   government hospital registers directly.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): fee amounts, Lok Seva Guarantee time limits, rural registrar designation, name-addition rule, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const madhyaPradeshBirthCertificate: DocGuide = {
  state: { slug: "madhya-pradesh", hi: "मध्य प्रदेश" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Madhya Pradesh Birth Certificate 2026",
  description: "मध्य प्रदेश जन्म प्रमाण पत्र 2026: MP e-District और लोक सेवा केंद्र, शहर में ULB पोर्टल, 21 दिन की सीमा, देर से पंजीकरण और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "मध्य प्रदेश जन्म प्रमाण पत्र 2026: लोक सेवा केंद्र, नगर निकाय पोर्टल, देर से पंजीकरण",
  lead: "मध्य प्रदेश में जन्म की सूचना जन्म की जगह पर 21 दिन के भीतर देनी होती है। ज़िला सरकारी पेज MP e-District पोर्टल (mpedistrict.gov.in) और लोक सेवा केंद्र बताते हैं। शहरी क्षेत्र में नगर निकाय के एमपी ई-नगर पालिका पोर्टल पर जन्म पंजीकरण का फॉर्म भरकर दस्तावेज़ अपलोड और ऑनलाइन भुगतान किया जा सकता है।",
  facts: [
    ["गांव/कस्बा", "लोक सेवा केंद्र, <a href=\"http://mpedistrict.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">mpedistrict.gov.in</a>"],
    ["शहर", "नगर निकाय: <a href=\"https://www.mpenagarpalika.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">mpenagarpalika.gov.in</a>"],
    ["समय सीमा", "जन्म के 21 दिन के भीतर"],
    ["सरकारी अस्पताल", "जन्म पंजीकरण अस्पताल में ही संभव"],
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
      intro: "सागर, सतना और दूसरे ज़िलों के सरकारी पेज बताते हैं कि हर जन्म को घटना की जगह पर निर्धारित फॉर्म में 21 दिन के भीतर पंजीकृत कराना है।",
      steps: ["<strong>सरकारी अस्पताल में जन्म:</strong> पंजीकरण सीधे अस्पताल में हो जाता है, वार्ड कार्यालय जाने की ज़रूरत नहीं (ई-नगर पालिका पोर्टल का निर्देश)।", "<strong>निजी अस्पताल में जन्म (शहर):</strong> अस्पताल की डिस्चार्ज पर्ची वार्ड कार्यालय में दें।", "<strong>शहर, ऑनलाइन:</strong> <a href=\"https://www.mpenagarpalika.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">ई-नगर पालिका पोर्टल</a> पर जन्म पंजीकरण फॉर्म भरें, स्कैन कागज़ अपलोड करें और भुगतान करें। ऑनलाइन भुगतान न कर सकें तो भरा फॉर्म प्रिंट करके नगर निकाय कार्यालय में दें।", "<strong>गांव/कस्बा:</strong> नज़दीकी लोक सेवा केंद्र (आम तौर पर तहसील कार्यालय के पास) या <a href=\"http://mpedistrict.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">MP e-District</a> से आवेदन कराएं।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>अस्पताल में जन्म:</strong> डिस्चार्ज पर्ची/जन्म रिपोर्ट।", "<strong>घर पर जन्म:</strong> स्थानीय सत्यापन के कागज़; सूची लोक सेवा केंद्र/नगर निकाय से लें।", "<strong>माता-पिता का पहचान प्रमाण।</strong> 2023 के संशोधन में आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> शपथ-पत्र और जन्म का सबूत; अधिकारी की अनुमति या मजिस्ट्रेट का आदेश देरी के हिसाब से लगता है।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म दर्ज हो सकता है और नाम बाद में जुड़ सकता है। मध्य प्रदेश में इसकी समय सीमा और शुल्क हम पक्के तौर पर नहीं देख पाए। अपने रजिस्ट्रार (नगर निकाय/पंचायत) से अभी का नियम पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड:</strong> शहर में ई-नगर पालिका पोर्टल या नगर निकाय कार्यालय से; गांव में लोक सेवा केंद्र/e-District से। केंद्र का <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> भी देखें।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; सबूत के साथ रजिस्ट्रार को आवेदन दें।", "<strong>शिकायत:</strong> मध्य प्रदेश लोक सेवा गारंटी में देरी हो तो पहले उसी कार्यालय में लिखित शिकायत करें, फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर।"],
    },
  ],
  official: [
    { href: "http://mpedistrict.gov.in", title: "MP e-District (ज़िला पेजों में दिया लिंक)" },
    { href: "https://www.mpenagarpalika.gov.in/", title: "एमपी ई-नगर पालिका पोर्टल" },
    { href: "https://sagar.nic.in/en/service/birth-certificate/", title: "सागर ज़िला: जन्म प्रमाण पत्र सेवा पेज" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
  ],
  faq: [
    { q: "मध्य प्रदेश में जन्म पंजीकरण कहां कराएं?", a: "गांव/कस्बे में लोक सेवा केंद्र या MP e-District से, और शहर में नगर निकाय (ई-नगर पालिका पोर्टल या वार्ड कार्यालय) से। सरकारी अस्पताल में जन्म हो तो वहीं पंजीकरण हो जाता है।" },
    { q: "क्या एमपी में जन्म पंजीकरण ऑनलाइन हो सकता है?", a: "शहरी क्षेत्र में ई-नगर पालिका पोर्टल पर फॉर्म भरकर कागज़ अपलोड और भुगतान का विकल्प बताया गया है। ग्रामीण क्षेत्र के लिए ज़िला पेज e-District और लोक सेवा केंद्र बताते हैं।" },
    { q: "एमपी में सरकारी अस्पताल में जन्म हो तो क्या वार्ड कार्यालय जाना पड़ेगा?", a: "ई-नगर पालिका पोर्टल के निर्देश के अनुसार नहीं, जन्म पंजीकरण सीधे अस्पताल में हो सकता है।" },
    { q: "मध्य प्रदेश में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ रजिस्ट्रार (नगर निकाय/पंचायत) कार्यालय जाएं। मध्य प्रदेश में समय सीमा और शुल्क की पुष्टि हम नहीं कर सके, वहीं से पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/madhya-pradesh-death-certificate.html", emoji: "🕊️", title: "मध्य प्रदेश मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/madhya-pradesh-domicile-certificate.html", emoji: "🏠", title: "मध्य प्रदेश निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://www.mpenagarpalika.gov.in/", label: "📝 एमपी ई-नगर पालिका" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
