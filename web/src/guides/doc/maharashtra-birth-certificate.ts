import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=2476 (fetched):
//   Rural Development and Panchayat Raj Department 'Birth Certificate' (जन्म नोंद दाखला): no
//   documents required, 5 days, Gram Sevak, appeals ABDO then BDO; 24x7 call centre 1800 120 8040;
//   track application; barcode verification; third appeal to RTS Commission; note that some
//   services moved to MAITRI (maitri.maharashtra.gov.in).
// - amravati.gov.in service page: Aaple Sarkar Seva Kendra / Taluka Setu Centre.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): urban (municipal corporation) procedure, fee amounts, name-addition rule, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const maharashtraBirthCertificate: DocGuide = {
  state: { slug: "maharashtra", hi: "महाराष्ट्र" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Maharashtra Birth Certificate 2026: Apply & Status",
  description: "महाराष्ट्र जन्म प्रमाण पत्र 2026: Aaple Sarkar पर ग्रामीण जन्म नोंद दाखला (5 दिन, ग्रामसेवक), अपील, 21 दिन की सीमा, देर से पंजीकरण और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "महाराष्ट्र जन्म प्रमाण पत्र 2026: Aaple Sarkar, ग्रामसेवक, समय सीमा और अपील",
  lead: "महाराष्ट्र के Aaple Sarkar पोर्टल पर ग्रामीण विकास एवं पंचायत राज विभाग की 'जन्म नोंद दाखला' (जन्म प्रमाण पत्र) सेवा दर्ज है: समय सीमा 5 दिन, निर्धारित अधिकारी ग्रामसेवक, पहली अपील सहायक गट विकास अधिकारी और दूसरी अपील गट विकास अधिकारी के पास। सेवा के लिए कोई दस्तावेज़ पोर्टल पर अनिवार्य नहीं बताया गया है। शहर में जन्म-मृत्यु पंजीकरण नगर निगम/नगरपालिका करती है।",
  facts: [
    ["पोर्टल", "<a href=\"https://aaplesarkar.mahaonline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">aaplesarkar.mahaonline.gov.in</a>"],
    ["समय सीमा", "5 दिन (ग्रामीण सेवा, पोर्टल सूची)"],
    ["अधिकारी / अपील", "ग्रामसेवक; अपील: सहायक गट विकास अधिकारी, फिर गट विकास अधिकारी"],
    ["कॉल सेंटर", "1800 120 8040 (टोल फ्री, पोर्टल पर दिया)"],
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
      intro: "Aaple Sarkar के अनुसार आवेदन अपने नज़दीकी आपले सरकार सेवा केंद्र (ASSK) या तालुका सेतू केंद्र से कराया जा सकता है (अमरावती ज़िला पेज), या पोर्टल पर खुद फॉर्म भरा जा सकता है। कुछ सेवाएं पोर्टल पर MAITRI पोर्टल (maitri.maharashtra.gov.in) पर भी गई हैं।",
      steps: ["<a href=\"https://aaplesarkar.mahaonline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">aaplesarkar.mahaonline.gov.in</a> पर 'ग्रामीण विकास एवं पंचायत राज विभाग' के तहत 'Birth Certificate' (जन्म नोंद दाखला) चुनें।", "सिटिज़न लॉगिन से आवेदन भरें या नज़दीकी आपले सरकार सेवा केंद्र से भरवाएं और पावती लें।", "पोर्टल के 'Track your Application' में आवेदन संख्या डालकर स्थिति देखें।", "सर्टिफिकेट पर 18 अंकों का बारकोड होता है; 'Verify Your Authenticated Certificate' से उसकी जांच हो सकती है।"],
      html: "<p><strong>शहर में:</strong> नगर निगम/नगरपालिका का जन्म-मृत्यु पंजीकरण विभाग रजिस्ट्रार का काम करता है। उनकी अपनी साइट और शुल्क हम पक्के तौर पर नहीं देख पाए; अपने शहर की नगर निकाय साइट या वार्ड कार्यालय से पूछें।</p>",
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["Aaple Sarkar की ग्रामीण जन्म सेवा में पोर्टल 'कोई दस्तावेज़ आवश्यक नहीं' दिखाता है, पर स्थानीय सत्यापन के लिए ये साथ रखें:", "<strong>अस्पताल की जन्म रिपोर्ट/डिस्चार्ज पर्ची</strong> (अस्पताल में जन्म)।", "<strong>माता-पिता का पहचान और पते का प्रमाण।</strong> 2023 के संशोधन में आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> शपथ-पत्र और जन्म का सबूत; ठीक सूची ग्रामसेवक/ग्रामपंचायत से लें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म दर्ज हो सकता है और नाम बाद में जुड़ सकता है। महाराष्ट्र में इसकी समय सीमा और शुल्क हम पक्के तौर पर नहीं देख पाए। ग्रामसेवक/नगर निकाय से अभी का नियम पूछें।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>स्थिति और सत्यापन:</strong> Aaple Sarkar पर 'Track your Application' और 18 अंकों के बारकोड से 'Verify Your Authenticated Certificate'।", "<strong>गलती सुधार:</strong> धारा 15 के तहत रजिस्टर की गलती ठीक हो सकती है; सबूत के साथ रजिस्ट्रार को आवेदन दें।", "<strong>अपील और शिकायत:</strong> समय पर सेवा न मिले या गलत अस्वीकृति हो तो महाराष्ट्र लोकसेवा हक्क अधिनियम के तहत पहली अपील सहायक गट विकास अधिकारी और दूसरी गट विकास अधिकारी को; तीसरी अपील लोकसेवा हक्क आयोग में। कॉल सेंटर: 1800 120 8040 (टोल फ्री)।"],
    },
  ],
  official: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=2476", title: "Aaple Sarkar: जन्म प्रमाण पत्र सेवा (समय सीमा, अधिकारी, अपील)" },
    { href: "https://aaplesarkar.mahaonline.gov.in/", title: "Aaple Sarkar महाराष्ट्र" },
    { href: "https://maitri.maharashtra.gov.in/", title: "MAITRI पोर्टल (कुछ सेवाएं यहां गई हैं)" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
  ],
  faq: [
    { q: "महाराष्ट्र में ग्रामीण जन्म प्रमाण पत्र कितने दिन में मिलता है?", a: "Aaple Sarkar की सेवा सूची में समय सीमा 5 दिन है और निर्धारित अधिकारी ग्रामसेवक हैं। यह ग्रामीण विकास एवं पंचायत राज विभाग की सेवा है।" },
    { q: "महाराष्ट्र में जन्म प्रमाण पत्र के लिए अपील कहां करें?", a: "पहली अपील सहायक गट विकास अधिकारी के पास, दूसरी गट विकास अधिकारी के पास (Aaple Sarkar सूची के अनुसार)। तीसरी अपील लोकसेवा हक्क आयोग में।" },
    { q: "क्या महाराष्ट्र में जन्म प्रमाण पत्र के लिए दस्तावेज़ ज़रूरी हैं?", a: "Aaple Sarkar पर सेवा के लिए 'कोई दस्तावेज़ आवश्यक नहीं' दिखाया गया है। फिर भी स्थानीय सत्यापन के लिए अस्पताल की रिपोर्ट और माता-पिता का पहचान प्रमाण साथ रखें।" },
    { q: "महाराष्ट्र में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ ग्रामसेवक (ग्रामीण) या नगर निकाय के पंजीकरण विभाग (शहरी) जाएं। महाराष्ट्र में समय सीमा और शुल्क की पुष्टि हम नहीं कर सके, वहीं से पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/maharashtra-death-certificate.html", emoji: "🕊️", title: "महाराष्ट्र मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/maharashtra-domicile-certificate.html", emoji: "🏠", title: "महाराष्ट्र निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://aaplesarkar.mahaonline.gov.in/", label: "📝 Aaple Sarkar पोर्टल" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
