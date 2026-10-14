import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - informatics.nic.in/article/357 (NIC): Unified Birth and Death Registration System in AP,
//   rural and urban local bodies, CDMA.
// - mospi.gov.in 9.3 'Agencies for Registration of Births and Deaths in States/UTs': Panchayat
//   Secretary listed as rural registrar for Andhra Pradesh.
// - services.india.gov.in 'Apply for Birth Certificate - CDMA, Andhra Pradesh' listing.
// - Deccan Herald / PTI (Jan and Mar 2025): Mana Mitra WhatsApp 9552300009, birth certificate download.
// - AP district pages (kadapa, eastgodavari, krishna .ap.gov.in): doctor's certificate; late registration via MeeSeva.
// - Registration of Births and Deaths Act 1969 (sections 13 and 14, as summarised on
//   panchayatwiki.lsgkerala.gov.in and in Kerala/Karnataka/Census-hosted rules texts): 21 days;
//   late fee within 30 days; written permission 30 days to 1 year; magistrate order after 1 year.
// - 2023 amendment (in force 1 Oct 2023): birth certificate as single proof of date and place of
//   birth for births on or after that date (news reports of the MHA notification: Business Standard,
//   Free Press Journal, OrissaPOST). Aug 2026: Births and Deaths (Amendment) Bill 2026 cleared
//   Parliament (Lok Sabha 31 Jul, Rajya Sabha 4 Aug; IANS/Pioneer/Moneylife reports); assent and
//   commencement not confirmed, so the page says so.
// - crsorgi.gov.in (national Civil Registration System portal).
// Left out (not confirmable on an official page we could open): fee amount (a district page shows Rs 30 but it could not be matched to a current order), MeeSeva portal URL, ward-secretariat role, name-addition fee/time, late-fee amounts, certificate-copy fees, time limits and helpline numbers unless stated above; 
export const andhraPradeshBirthCertificate: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  doc: "birth-certificate",
  docHi: "जन्म प्रमाण पत्र",
  title: "Andhra Pradesh Birth Certificate 2026",
  description: "आंध्र प्रदेश जन्म प्रमाण पत्र 2026: कहां पंजीकरण होता है, 21 दिन की समय सीमा, देर से पंजीकरण के नियम, डाउनलोड और 2023 का नया नियम।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "आंध्र प्रदेश जन्म प्रमाण पत्र 2026: कहां पंजीकरण कराएं, कितने दिन में, सर्टिफिकेट कैसे मिले",
  lead: "आंध्र प्रदेश में जन्म का पंजीकरण स्थानीय रजिस्ट्रार के पास होता है: गांव में पंचायत सचिव और शहर में नगरपालिका/नगर निगम का कार्यालय। जन्म के 21 दिन के भीतर पंजीकरण मुफ्त है। देर से पंजीकरण के लिए ज़िला सरकारी पेजों में MeeSeva का रास्ता बताया गया है। 1 अक्टूबर 2023 के बाद जन्मे बच्चों के लिए यही सर्टिफिकेट जन्म तिथि का एकमात्र प्रमाण है।",
  facts: [
    ["कहां", "ग्राम पंचायत (पंचायत सचिव) / नगरपालिका या नगर निगम कार्यालय"],
    ["समय सीमा", "जन्म के 21 दिन के भीतर, मुफ्त"],
    ["देर से पंजीकरण", "ज़िला पेजों के अनुसार MeeSeva से; नियम नीचे"],
    ["डाउनलोड", "MeeSeva / नगर निकाय कार्यालय; WhatsApp 'Mana Mitra' 9552300009 (नीचे देखें)"],
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
      intro: "राज्य में जन्म-मृत्यु पंजीकरण की कम्प्यूटर प्रणाली (UBD) ग्रामीण और शहरी स्थानीय निकायों, दोनों में चलती है। ग्रामीण क्षेत्र के रजिस्ट्रार के तौर पर भारत सरकार की सूची में आंध्र प्रदेश के पंचायत सचिव दर्ज हैं।",
      steps: ["<strong>अस्पताल में जन्म हुआ हो:</strong> अस्पताल से जन्म रिपोर्ट/डिस्चार्ज पर्ची लें और पूछें कि सूचना रजिस्ट्रार को भेज दी गई है या नहीं।", "<strong>घर पर जन्म हुआ हो:</strong> अपनी ग्राम पंचायत या नगरपालिका/नगर निगम कार्यालय में आवेदन करें। ज़िला सरकारी पेज डॉक्टर का प्रमाण पत्र मांगते हैं।", "<strong>21 दिन बाद:</strong> ज़िला पेजों के अनुसार देर से पंजीकरण MeeSeva से होता है। अपने पास का MeeSeva केंद्र या नगर निकाय कार्यालय पूछें।", "पावती की पर्ची और पंजीकरण संख्या संभालकर रखें; सर्टिफिकेट इसी से निकलता है।"],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: ["<strong>अस्पताल में जन्म:</strong> अस्पताल की जन्म रिपोर्ट/डिस्चार्ज पर्ची (अस्पताल खुद रजिस्ट्रार को सूचना भेजता है)।", "<strong>घर पर जन्म:</strong> कार्यालय जो स्थानीय सत्यापन मांगे (जैसे वार्ड सदस्य/आंगनवाड़ी का पत्र या माता-पिता का शपथ-पत्र)। हर राज्य और कार्यालय की सूची थोड़ी अलग होती है।", "<strong>माता-पिता का पहचान प्रमाण</strong> (आधार, मतदाता पहचान पत्र आदि) और पते का प्रमाण। 2023 के संशोधन में माता-पिता और सूचना देने वाले का आधार नंबर देने का प्रावधान है।", "<strong>देर से पंजीकरण:</strong> शपथ-पत्र, \"जन्म का रिकॉर्ड उपलब्ध नहीं\" का प्रमाण और जन्म का कोई सबूत (स्कूल रिकॉर्ड, टीकाकरण कार्ड आदि)। ठीक सूची रजिस्ट्रार से लें।"],
    },
    {
      id: "naam",
      title: "बच्चे का नाम जोड़ना",
      html: "<p>बिना नाम के भी जन्म पंजीकृत हो सकता है। नाम बाद में रजिस्ट्रार के पास जुड़वाया जाता है। इसकी समय सीमा और शुल्क राज्य के जन्म-मृत्यु पंजीकरण नियमों से तय होते हैं और हम उनकी पुष्टि नहीं कर सके। अपने रजिस्ट्रार कार्यालय से अभी का नियम पूछें और पंजीकरण संख्या साथ ले जाएं।</p>",
    },
    {
      id: "download",
      title: "सर्टिफिकेट डाउनलोड, सुधार और शिकायत",
      list: ["<strong>डाउनलोड:</strong> सेवा सूची में MeeSeva (CDMA) का 'जन्म प्रमाण पत्र' आवेदन दर्ज है। मार्च 2025 की समाचार रिपोर्ट के अनुसार सरकार की WhatsApp सेवा 'Mana Mitra' (9552300009) से जन्म प्रमाण पत्र जैसे दस्तावेज़ डाउनलोड हो सकते हैं। मेन्यू बदल सकता है, WhatsApp पर 'Hi' भेजकर देखें।", "<strong>गलती सुधार:</strong> रजिस्टर की गलती अधिनियम की धारा 15 के तहत ठीक कराई जा सकती है। रजिस्ट्रार कार्यालय में सबूत के साथ आवेदन दें।", "<strong>शिकायत:</strong> पहले रजिस्ट्रार कार्यालय/नगर आयुक्त को लिखित में दें; हल न हो तो <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत करें।"],
    },
  ],
  official: [
    { href: "https://crsorgi.gov.in/", title: "CRS: केंद्र का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://services.india.gov.in/service/detail/apply-for-birth-certificate-cdma-andhra-pradesh", title: "भारत सरकार सेवा सूची: जन्म प्रमाण पत्र (CDMA, आंध्र प्रदेश)" },
    { href: "https://informatics.nic.in/article/357", title: "NIC: आंध्र प्रदेश की UBD प्रणाली" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS (शिकायत)" },
  ],
  faq: [
    { q: "आंध्र प्रदेश में जन्म पंजीकरण कौन करता है?", a: "गांव में पंचायत सचिव (भारत सरकार की सूची में ग्रामीण रजिस्ट्रार) और शहर में नगरपालिका/नगर निगम का जन्म-मृत्यु पंजीकरण कार्यालय।" },
    { q: "आंध्र प्रदेश में जन्म प्रमाण पत्र WhatsApp से मिल सकता है?", a: "मार्च 2025 की समाचार रिपोर्ट के अनुसार सरकारी WhatsApp सेवा 'Mana Mitra' (9552300009) से जन्म प्रमाण पत्र डाउनलोड करने की सुविधा बताई गई थी। मौजूदा मेन्यू WhatsApp पर देखकर पक्का करें।" },
    { q: "देर से जन्म पंजीकरण कहां होता है?", a: "ज़िला सरकारी पेजों के अनुसार देर से पंजीकरण MeeSeva के रास्ते होता है। शुल्क और ज़रूरी कागज़ की ताज़ा सूची MeeSeva केंद्र या नगर निकाय कार्यालय से लें।" },
    { q: "आंध्र प्रदेश में बच्चे का जन्म कितने दिन में पंजीकृत कराना चाहिए?", a: "जन्म के 21 दिन के भीतर। इस समय सीमा में पंजीकरण मुफ्त है। इसके बाद देरी के हिसाब से विलंब शुल्क, अधिकारी की अनुमति या मजिस्ट्रेट का आदेश लगता है।" },
    { q: "क्या जन्म प्रमाण पत्र अब जन्म की तारीख का एकमात्र प्रमाण है?", a: "1 अक्टूबर 2023 या उसके बाद जन्मे बच्चों के लिए हां: दाखिला, ड्राइविंग लाइसेंस, मतदाता सूची, आधार, विवाह पंजीकरण और सरकारी नौकरी में यही प्रमाण माना जाएगा (संशोधन अधिनियम 2023)।" },
    { q: "जन्म पंजीकरण के बाद नाम न चढ़ा हो तो क्या करें?", a: "पंजीकरण संख्या के साथ अपने रजिस्ट्रार (पंचायत/नगर निकाय) कार्यालय जाएं। नाम जोड़ने की समय सीमा और शुल्क राज्य के नियमों से तय होते हैं, इसलिए वहीं से अभी का नियम पूछ लें।" },
  ],
  related: [
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/states/andhra-pradesh-death-certificate.html", emoji: "🕊️", title: "आंध्र प्रदेश मृत्यु प्रमाण पत्र", text: "पंजीकरण और सर्टिफिकेट" },
    { href: "/states/andhra-pradesh-domicile-certificate.html", emoji: "🏠", title: "आंध्र प्रदेश निवास प्रमाण पत्र", text: "निवास/डोमिसाइल" },
    { href: "/affidavit/date-of-birth.html", emoji: "✍️", title: "जन्म तिथि का एफिडेविट", text: "कब काम आता है, नमूना" },
    { href: "/affidavit/name-change.html", emoji: "📝", title: "नाम बदलने का एफिडेविट", text: "नमूना और प्रक्रिया" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जन्म प्रमाण पत्र",
  aside: [
    { href: "https://services.india.gov.in/service/detail/apply-for-birth-certificate-cdma-andhra-pradesh", label: "📝 सेवा सूची में जन्म प्रमाण पत्र" },
    { href: "/affidavit/date-of-birth.html", label: "✍️ जन्म तिथि का एफिडेविट" },
  ],
};
