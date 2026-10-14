import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - serviceonline.bihar.gov.in (search extract of the portal's service form page): 'Online
//   Application for Birth/Death Certificate (From CRS)'; apply only at the office of your
//   jurisdiction (Panchayat, Block cum Circle, Sub-Division, District, Division); separate forms
//   for 30 days to 1 year and after 1 year.
// - pmc.bihar.gov.in/birth-certificate.aspx (Patna Municipal Corporation): free within 21 days,
//   Rs 10 from 21 to 30 days.
// - nalanda.nic.in, saran.nic.in service pages: home-birth documents (ward councillor/Anganwadi
//   letter, ID, address proof), notary affidavit for 21-30 days.
// - rtpsappeal.bihar.gov.in (from the Bihar income certificate guide).
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): RTPS time limit and fee for the birth service, rural registrar designation, name-addition rule, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const biharBirthCertificate: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Bihar Birth Certificate 2026: Apply & Status",
  description: "बिहार जन्म प्रमाण पत्र 2026: RTPS पोर्टल की CRS वाली सेवा, 21 दिन की समय सीमा, ज़रूरी कागज़, देर से पंजीकरण और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "बिहार जन्म प्रमाण पत्र 2026: RTPS पर आवेदन, कागज़, देर से पंजीकरण और सर्टिफिकेट",
  lead: "बिहार में जन्म पंजीकरण अपने क्षेत्र के कार्यालय (पंचायत, प्रखंड-सह-अंचल, अनुमंडल, जिला या नगर निकाय) में होता है। RTPS पोर्टल (serviceonline.bihar.gov.in) पर 'जन्म/मृत्यु प्रमाण पत्र के लिए ऑनलाइन आवेदन (CRS से)' सेवा दर्ज है और बताया गया है कि आवेदन अपने क्षेत्र के कार्यालय में ही दें। 21 दिन के भीतर पंजीकरण मुफ्त है।",
  facts: [
    ["पोर्टल", "<a href=\"https://serviceonline.bihar.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">serviceonline.bihar.gov.in</a> (RTPS) और <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a>"],
    ["कहां", "अपने क्षेत्र का कार्यालय: पंचायत / प्रखंड / अनुमंडल / जिला / नगर निकाय"],
    ["समय सीमा", "जन्म के 21 दिन के भीतर, मुफ्त"],
    ["देर से पंजीकरण", "30 दिन से 1 साल और 1 साल के बाद के लिए अलग फॉर्म"],
  ],
  sections: [
    {
      id: "kab",
      title: "कब तक पंजीकरण कराएं, देर होने पर क्या",
      intro: "जन्म की सूचना <strong>21 दिन के भीतर</strong> स्थानीय रजिस्ट्रार को देनी होती है। पंजीकरण उसी जगह होता है जहां जन्म हुआ। देर होने पर प्रक्रिया लंबी हो जाती है:",
      table: {"head": ["जन्म के बाद", "क्या लगेगा"], "rows": [["जन्म के <strong>21 दिन के भीतर</strong>", "पंजीकरण मुफ्त। कानून (जन्म-मृत्यु पंजीकरण अधिनियम 1969) में यही समय सीमा है"], ["21 से 30 दिन", "विलंब शुल्क देकर पंजीकरण"], ["30 दिन से 1 साल", "निर्धारित अधिकारी की लिखित अनुमति और शुल्क"], ["1 साल के बाद", "मजिस्ट्रेट का आदेश और शुल्क"]]},
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
      intro: "RTPS पोर्टल की सेवा-सूची में जन्म प्रमाण पत्र का आवेदन CRS से जुड़ा है। पोर्टल का निर्देश है कि आवेदन सिर्फ अपने अधिकार क्षेत्र के कार्यालय में दिया जाए।",
      steps: ["<strong>अस्पताल में जन्म:</strong> सरकारी या निजी अस्पताल से जन्म रिपोर्ट लें। कई अस्पताल खुद CRS पर पंजीकरण करते हैं; पहले अस्पताल से पूछें।", "<strong>घर पर जन्म, या अस्पताल ने पंजीकरण नहीं किया:</strong> <a href=\"https://serviceonline.bihar.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">serviceonline.bihar.gov.in</a> पर जन्म प्रमाण पत्र की सेवा खोलें, या अपने पंचायत/प्रखंड/नगर निकाय कार्यालय से आवेदन कराएं।", "<strong>पटना शहर:</strong> पटना नगर निगम की साइट pmc.bihar.gov.in पर जन्म-मृत्यु पंजीकरण का अलग पेज और फॉर्म है।", "आवेदन के बाद पावती और आवेदन संख्या संभालकर रखें।"],
      html: "<p>पटना नगर निगम की साइट के अनुसार 21 दिन में पंजीकरण निःशुल्क है और 21 से 30 दिन में ₹10 विलंब शुल्क लगता है। यह सिर्फ पटना नगर निगम का आंकड़ा है; दूसरे जिलों में अपने कार्यालय से पूछें।</p>",
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>अस्पताल में जन्म:</strong> अस्पताल का प्रमाण पत्र/जन्म रिपोर्ट।", "<strong>घर पर जन्म:</strong> जिला पेजों में वार्ड पार्षद या आंगनवाड़ी सेविका की अनुशंसा का पत्र और पहचान-पते का प्रमाण बताया गया है।", "<strong>21 से 30 दिन:</strong> जिला पेजों के अनुसार नोटरी शपथ-पत्र भी लगता है।", "<strong>माता-पिता का पहचान प्रमाण</strong> (आधार, मतदाता पहचान पत्र आदि) और पते का प्रमाण (राशन कार्ड, बिजली बिल आदि)।", "<strong>30 दिन के बाद:</strong> RTPS पोर्टल पर 30 दिन से 1 साल और 1 साल के बाद के लिए अलग आवेदन फॉर्म हैं। ठीक कागज़ की सूची फॉर्म में देखें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म पंजीकृत हो सकता है और नाम बाद में जुड़ सकता है। बिहार में इसकी समय सीमा और शुल्क के नियम हम पक्के तौर पर नहीं देख पाए। रजिस्ट्रार कार्यालय से अभी का नियम पूछें और पंजीकरण संख्या साथ ले जाएं।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड:</strong> पंजीकरण के बाद सर्टिफिकेट CRS पोर्टल <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">crsorgi.gov.in</a> या RTPS पोर्टल से मिलता है, या उसी कार्यालय से जहां आवेदन दिया था।", "<strong>गलती सुधार:</strong> रजिस्टर की गलती अधिनियम की धारा 15 के तहत ठीक हो सकती है; रजिस्ट्रार कार्यालय में सबूत के साथ आवेदन दें।", "<strong>शिकायत और अपील:</strong> RTPS की सेवाओं में देरी या गलत अस्वीकृति पर <a href=\"https://rtpsappeal.bihar.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">RTPS अपील पोर्टल</a> पर अपील करें। नगर निकाय के मामले में नगर आयुक्त कार्यालय को लिखित दें।"],
    },
  ],
  official: [
    { href: "https://serviceonline.bihar.gov.in/", title: "RTPS बिहार (जन्म/मृत्यु प्रमाण पत्र सेवा)" },
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://www.pmc.bihar.gov.in/birth-certificate.aspx", title: "पटना नगर निगम: जन्म-मृत्यु पंजीकरण" },
    { href: "https://rtpsappeal.bihar.gov.in", title: "RTPS अपील पोर्टल" },
  ],
  faq: [
    { q: "बिहार में जन्म प्रमाण पत्र के लिए कहां आवेदन करें?", a: "अपने क्षेत्र के कार्यालय में: पंचायत, प्रखंड-सह-अंचल, अनुमंडल, जिला या नगर निकाय। RTPS पोर्टल (serviceonline.bihar.gov.in) पर 'जन्म/मृत्यु प्रमाण पत्र के लिए ऑनलाइन आवेदन (CRS से)' सेवा दर्ज है, और वहीं निर्देश है कि आवेदन अपने अधिकार क्षेत्र के कार्यालय में दें।" },
    { q: "बिहार में घर पर जन्म हो तो कौन से कागज़ लगते हैं?", a: "जिला सरकारी पेजों के अनुसार वार्ड पार्षद या आंगनवाड़ी सेविका की अनुशंसा का पत्र, माता-पिता का पहचान प्रमाण और पते का प्रमाण। 21 से 30 दिन में नोटरी शपथ-पत्र भी लगता है।" },
    { q: "पटना में 21 दिन के बाद जन्म पंजीकरण का शुल्क कितना है?", a: "पटना नगर निगम की साइट के अनुसार 21 से 30 दिन में ₹10 विलंब शुल्क है। 30 दिन के बाद के लिए अलग फॉर्म और अनुमति लगती है। दूसरे जिलों का शुल्क हम पुष्टि नहीं कर सके।" },
    { q: "बिहार में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ अपने रजिस्ट्रार कार्यालय (पंचायत/प्रखंड/नगर निकाय) जाएं। नाम जोड़ने की समय सीमा और शुल्क राज्य के नियमों पर निर्भर है, इसलिए वहीं से पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/bihar-death-certificate.html", emoji: "🕊️", title: "बिहार मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/bihar-domicile-certificate.html", emoji: "🏠", title: "बिहार निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://serviceonline.bihar.gov.in/", label: "📝 RTPS बिहार पोर्टल" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
