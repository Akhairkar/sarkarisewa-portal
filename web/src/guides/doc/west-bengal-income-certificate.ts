import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - murshidabad.gov.in "Income Certificate" citizen service page (NIC district
//   site): apply at the BDO office for rural areas and at the SDO office for
//   municipality areas; online on the e-District portal
//   (https://edistrict.wb.gov.in).
// - anagrasarkalyan.gov.in (Backward Classes Welfare Dept): separate EWS
//   certificate guidelines (BCW and P&AR) and "Introduction of online
//   submission of application of EWS certificate and issuance digitally
//   signed EWS certificate" (334-BCW/MR-52/2019, listed 19.03.2024); OBC
//   affidavit asks for parents' annual income from salary and other sources
//   (non-creamy layer is part of the OBC certificate, not the income
//   certificate); link to Bangla Sahayata Kendra (bsk.wb.gov.in).
// Not usable: edistrict.wb.gov.in and wb.gov.in were not reachable from our
// checker. Third-party sites (housing.com, thecurrentindia.com) give a
// "three months" validity, a 7-day time limit and a no-fee claim; none of
// these could be confirmed on an official page, so they are left out.
// Left out: fee, time limit, validity period, document list from the portal,
// helpline number.
export const westBengalIncomeCertificate: DocGuide = {
  state: { slug: "west-bengal", hi: "पश्चिम बंगाल" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "West Bengal Income Certificate 2026: Apply Online",
  description: "पश्चिम बंगाल आय प्रमाण पत्र 2026: e-District West Bengal पर ऑनलाइन या BDO (गांव) / SDO (शहर) कार्यालय में आवेदन। ज़रूरी कागज़, EWS से फर्क, स्टेटस और सावधानियां।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "पश्चिम बंगाल आय प्रमाण पत्र 2026: e-District पर आवेदन, BDO/SDO कार्यालय, कागज़ और स्टेटस",
  lead: "पश्चिम बंगाल में आय प्रमाण पत्र के लिए <strong>गांव (ब्लॉक) में BDO कार्यालय</strong> और <strong>नगरपालिका क्षेत्र में SDO कार्यालय</strong> में आवेदन होता है। ऑनलाइन आवेदन e-District पोर्टल (edistrict.wb.gov.in) पर भी किया जा सकता है। फीस, समय सीमा और वैधता हम किसी सरकारी पेज पर पक्की नहीं कर पाए, इसलिए आवेदन के समय कार्यालय या पोर्टल पर ज़रूर देखें।",
  facts: [
    ["ऑनलाइन", '<a href="https://edistrict.wb.gov.in/" target="_blank" rel="noopener nofollow">edistrict.wb.gov.in</a>'],
    ["गांव", "BDO कार्यालय"],
    ["शहर", "SDO कार्यालय"],
    ["EWS", "अलग प्रमाण पत्र (पिछड़ा वर्ग कल्याण विभाग)"],
  ],
  notice: "<strong>ध्यान दें:</strong> इंटरनेट पर पश्चिम बंगाल के आय प्रमाण पत्र की वैधता \"3 महीने\" या फीस \"शून्य\" जैसी बातें लिखी मिलती हैं, लेकिन ये हमें किसी सरकारी पेज पर नहीं मिलीं। जिस योजना या संस्था के लिए प्रमाण पत्र चाहिए, उससे पूछ लें कि कितना पुराना प्रमाण पत्र चलेगा।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है। यह छात्रवृत्ति, फीस माफी, सरकारी योजनाओं और कुछ दाखिलों में मांगा जाता है। ध्यान रखें कि ये अलग प्रमाण पत्र हैं:",
      table: {
        head: ["प्रमाण पत्र", "कब चाहिए"],
        rows: [
          ["<strong>आय प्रमाण पत्र</strong>", "योजना, छात्रवृत्ति या फॉर्म में जहां \"Income Certificate\" मांगा गया हो"],
          ["<strong>EWS प्रमाण पत्र</strong>", "सामान्य वर्ग के आर्थिक रूप से कमजोर लोगों का आरक्षण। पिछड़ा वर्ग कल्याण विभाग ने इसके लिए ऑनलाइन आवेदन और डिजिटल हस्ताक्षर वाला प्रमाण पत्र शुरू किया है"],
          ["<strong>OBC (नॉन-क्रीमी लेयर)</strong>", "OBC आरक्षण। माता-पिता की आय और नौकरी की जानकारी OBC प्रमाण पत्र के शपथ-पत्र में ही दी जाती है"],
        ],
      },
      callout: { kind: "info", html: "OBC/SC/ST प्रमाण पत्र के लिए देखें: <a href=\"/states/west-bengal-caste-certificate.html\">पश्चिम बंगाल जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kahan",
      title: "आवेदन कहां करें",
      table: {
        head: ["आप कहां रहते हैं", "कहां आवेदन करें"],
        rows: [
          ["गांव / ब्लॉक क्षेत्र", "अपने ब्लॉक का BDO कार्यालय"],
          ["नगरपालिका / शहरी क्षेत्र", "अपने अनुमंडल (Sub-Division) का SDO कार्यालय"],
          ["कहीं से भी, ऑनलाइन", '<a href="https://edistrict.wb.gov.in/" target="_blank" rel="noopener nofollow">e-District पश्चिम बंगाल</a>'],
        ],
      },
      html: "<p>ऑनलाइन आवेदन में दिक्कत हो तो नज़दीकी <a href=\"https://bsk.wb.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">बांग्ला सहायता केंद्र (BSK)</a> की मदद ले सकते हैं; वहां कोई शुल्क मांगा जाए तो रसीद लें।</p>",
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "e-District पोर्टल का दस्तावेज़-सूची वाला पेज हम खोल नहीं पाए। आम तौर पर आय प्रमाण पत्र में ये बातें साबित करनी होती हैं, इसलिए ये कागज़ साथ रखें और फॉर्म में जो मांगा जाए वही लगाएं:",
      list: [
        "<strong>पहचान:</strong> आधार, मतदाता पहचान पत्र या कोई सरकारी फोटो पहचान पत्र।",
        "<strong>पता/निवास:</strong> राशन कार्ड, मतदाता पहचान पत्र, बिजली बिल या ज़मीन का कागज़।",
        "<strong>आय का सबूत:</strong> नौकरी हो तो वेतन प्रमाण पत्र/सैलरी स्लिप; आयकर रिटर्न हो तो उसकी कॉपी; खेती या मज़दूरी हो तो ज़मीन के कागज़ या स्थानीय जनप्रतिनिधि (प्रधान/पार्षद) का प्रमाण पत्र, अगर कार्यालय मांगे।",
        "<strong>फोटो:</strong> हाल की पासपोर्ट साइज़ फोटो।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन साफ़ और छोटे साइज़ में रखें। फोटो/PDF छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें। आय सच-सच लिखें; जांच में गलत निकली तो प्रमाण पत्र रद्द हो सकता है।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (सामान्य तरीका)",
      steps: [
        '<a href="https://edistrict.wb.gov.in/" target="_blank" rel="noopener nofollow">edistrict.wb.gov.in</a> खोलें और मोबाइल नंबर से नागरिक के रूप में रजिस्टर/लॉगिन करें।',
        "सेवाओं की सूची में <strong>Income Certificate</strong> चुनें।",
        "फॉर्म में परिवार और आय की जानकारी भरें, फिर मांगे गए कागज़ अपलोड करें।",
        "आवेदन जमा करके <strong>आवेदन संख्या / पावती</strong> संभालकर रखें।",
        "जांच के बाद BDO/SDO कार्यालय से फैसला होता है; स्थिति पोर्टल पर आवेदन संख्या से देखें।",
      ],
      callout: { kind: "warn", html: "पोर्टल के मेन्यू के नाम बदल सकते हैं। अगर ऑनलाइन फॉर्म न खुले, तो सीधे BDO/SDO कार्यालय में आवेदन करें; दोनों तरीके मान्य हैं।" },
    },
    {
      id: "samay",
      title: "फीस, समय सीमा और वैधता",
      list: [
        "<strong>फीस:</strong> किसी सरकारी पेज पर हमें इस सेवा की फीस नहीं मिली। कार्यालय या पोर्टल पर जो शुल्क दिखे वही दें और रसीद लें।",
        "<strong>समय सीमा:</strong> पक्की जानकारी नहीं मिली। देर हो तो BDO/SDO कार्यालय से लिखित स्थिति मांगें।",
        "<strong>वैधता:</strong> राज्य का कोई लिखित नियम हमें नहीं मिला। ज़्यादातर योजनाएं और संस्थान हाल का (आम तौर पर चालू वित्त वर्ष का) आय प्रमाण पत्र मांगते हैं; अपनी योजना की शर्त पढ़ें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र",
      list: [
        "<strong>स्टेटस:</strong> e-District पोर्टल पर आवेदन संख्या से।",
        "<strong>ऑफलाइन आवेदन:</strong> जहां आवेदन दिया था (BDO/SDO कार्यालय), वहीं से रसीद दिखाकर स्थिति पूछें और प्रमाण पत्र लें।",
      ],
      html: '<p>DigiLocker में आय प्रमाण पत्र दिखता हो तो वहां से भी इस्तेमाल कर सकते हैं: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई सबूत नहीं लगाया", "वेतन प्रमाण पत्र, ITR, ज़मीन के कागज़ या स्थानीय जनप्रतिनिधि का प्रमाण पत्र लगाएं"],
          ["गलत कार्यालय चुना", "गांव हैं तो BDO, नगरपालिका क्षेत्र हैं तो SDO"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवाया", "EWS के लिए अलग EWS प्रमाण पत्र बनवाएं"],
          ["धुंधले स्कैन", "साफ़ स्कैन दोबारा लगाएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://edistrict.wb.gov.in/", title: "e-District पश्चिम बंगाल (ऑनलाइन आवेदन)" },
    { href: "https://murshidabad.gov.in/?p=2861", title: "ज़िला मुर्शिदाबाद: आय प्रमाण पत्र (BDO/SDO, e-District)" },
    { href: "https://bsk.wb.gov.in/", title: "बांग्ला सहायता केंद्र (BSK)" },
    { href: "https://anagrasarkalyan.gov.in/", title: "पिछड़ा वर्ग कल्याण विभाग (EWS/OBC दिशानिर्देश)" },
  ],
  faq: [
    { q: "पश्चिम बंगाल में आय प्रमाण पत्र कहां बनता है?", a: "गांव (ब्लॉक) में रहने वाले BDO कार्यालय में और नगरपालिका क्षेत्र वाले SDO कार्यालय में आवेदन करते हैं। ऑनलाइन आवेदन e-District पोर्टल edistrict.wb.gov.in पर भी होता है।" },
    { q: "पश्चिम बंगाल आय प्रमाण पत्र कितने समय तक मान्य है?", a: "राज्य का कोई लिखित वैधता नियम हमें सरकारी पेज पर नहीं मिला। जिस योजना या संस्था में लगाना है, उसकी शर्त देखें; ज़्यादातर हाल का प्रमाण पत्र मांगते हैं।" },
    { q: "क्या आय प्रमाण पत्र की कोई फीस है?", a: "किसी सरकारी पेज पर हमें इसकी फीस नहीं मिली। कार्यालय या पोर्टल पर जो शुल्क दिखे वही दें और रसीद ज़रूर लें।" },
    { q: "क्या EWS आरक्षण के लिए आय प्रमाण पत्र चलेगा?", a: "नहीं। EWS के लिए अलग EWS प्रमाण पत्र बनता है, जिसके लिए पिछड़ा वर्ग कल्याण विभाग ने ऑनलाइन आवेदन और डिजिटल हस्ताक्षर वाला प्रमाण पत्र शुरू किया है।" },
    { q: "ऑनलाइन आवेदन में दिक्कत हो तो कहां जाएं?", a: "नज़दीकी बांग्ला सहायता केंद्र (BSK) में मदद लें, या सीधे अपने BDO/SDO कार्यालय में ऑफलाइन आवेदन दें।" },
  ],
  related: [
    { href: "/states/west-bengal-caste-certificate.html", emoji: "📜", title: "पश्चिम बंगाल जाति प्रमाण पत्र", text: "SC/ST/OBC, नई OBC सूची" },
    { href: "/states/west-bengal-domicile-certificate.html", emoji: "🏠", title: "पश्चिम बंगाल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.wb.gov.in/", label: "📝 e-District पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
