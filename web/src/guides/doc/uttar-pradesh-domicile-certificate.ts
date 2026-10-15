import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; edistrict.up.gov.in and esathi.up.gov.in do not
// open from our checker):
// - ghaziabad.nic.in/en/service/caste-certificate/ (district page "Caste/
//   Income/ Domicile/ Ration Card/ Character Certificate", saved copy):
//   domicile certificate delivered through e-District UP and Citizen Service
//   Centres in all 75 districts.
// - kannauj.nic.in "Issued by Revenue Department" (district page, saved copy):
//   domicile certificate requirements: self-certified declaration, copy of
//   ration card / electricity bill, copy of voter ID, academic certificate if
//   educated (the Rs 20 fee on that 2018 page is not used).
// - Facts already verified for uttar-pradesh-income-certificate.ts: e-Sathi
//   citizen login, CSC/Jan Seva Kendra/tehsil, download link in the citizen
//   account, DigiLocker, verification by application number, helpdesk
//   0522-2304706, edistrict@nic.in, jansunwai.up.nic.in, UP Janhit Guarantee
//   Adhiniyam 2011 (indiacode.nic.in).
// - Patrika (Gonda) report (search extract): under the Janhit Guarantee Act
//   residence certificates are issued online and signed by the SDM; first
//   appeal SDM, second DM (used only with attribution).
// Left out (not confirmable on an official page we could open): residence
// period, fee amount, time limit in days, validity. The old description
// promised an "official fee"; it was rewritten.
export const uttarPradeshDomicileCertificate: DocGuide = {
  state: { slug: "uttar-pradesh", hi: "उत्तर प्रदेश" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Uttar Pradesh Domicile Certificate 2026",
  description: "उत्तर प्रदेश निवास प्रमाण पत्र (Domicile) 2026: e-District UP / e-Sathi पर या जन सेवा केंद्र से आवेदन, स्व-घोषणा और राशन/वोटर कार्ड जैसे कागज़, स्टेटस, डाउनलोड और शिकायत।",
  published: "2026-08-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "उत्तर प्रदेश निवास प्रमाण पत्र 2026: e-District पर आवेदन, कागज़ और स्टेटस",
  lead: "उत्तर प्रदेश में निवास (Domicile) प्रमाण पत्र राजस्व विभाग की सेवा है और <strong>e-District UP</strong> से बनता है। आवेदन खुद <strong>e-Sathi</strong> सिटिजन लॉगिन से, या जन सेवा केंद्र (CSC)/तहसील से होता है। ज़िला पेज के अनुसार साथ में स्व-प्रमाणित घोषणा पत्र, राशन कार्ड या बिजली बिल, वोटर कार्ड और पढ़े-लिखे हों तो शैक्षिक प्रमाण पत्र लगता है।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.up.gov.in/edistrictup/" target="_blank" rel="noopener nofollow">edistrict.up.gov.in</a>'],
    ["आवेदन कहां", "e-Sathi लॉगिन / जन सेवा केंद्र / तहसील"],
    ["मुख्य कागज़", "स्व-घोषणा, राशन कार्ड/बिजली बिल, वोटर कार्ड"],
    ["कानून", "उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011"],
  ],
  notice: "<strong>ध्यान दें:</strong> उत्तर प्रदेश में निवास प्रमाण पत्र के लिए कितने साल का निवास ज़रूरी है, यह शर्त हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली। भर्ती या दाखिले के लिए बनवा रहे हैं तो उसके विज्ञापन में निवास की शर्त ज़रूर पढ़ें।",
  sections: [
    {
      id: "kya-hai",
      title: "निवास प्रमाण पत्र कहां काम आता है",
      list: [
        "उत्तर प्रदेश की <strong>सरकारी भर्तियों</strong> और परीक्षाओं में राज्य का निवासी होने का सबूत",
        "दाखिले, काउंसलिंग और छात्रवृत्ति में <strong>राज्य कोटे</strong> के लिए",
        "राज्य की योजनाओं में जहां <strong>उत्तर प्रदेश का निवासी</strong> होना शर्त है",
      ],
      callout: { kind: "info", html: "आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/uttar-pradesh-caste-certificate.html\">उत्तर प्रदेश जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "कन्नौज ज़िला प्रशासन के पेज पर निवास प्रमाण पत्र के लिए ये कागज़ बताए गए हैं:",
      list: [
        "<strong>स्व-प्रमाणित घोषणा पत्र</strong> (तय प्रारूप में)",
        "<strong>राशन कार्ड</strong> या <strong>बिजली बिल</strong> की कॉपी",
        "<strong>वोटर कार्ड</strong> की कॉपी",
        "पढ़े-लिखे हों तो <strong>शैक्षिक प्रमाण पत्र</strong>",
      ],
      html: "<p>ऑनलाइन आवेदन में <strong>फोटो</strong> भी लगती है। काउंटर (CSC/तहसील) पर आवेदन करें तो भरा हुआ फॉर्म, फोटो, स्व-घोषणा और कागज़ों की कॉपी साथ ले जाएं।</p>",
    },
    {
      id: "online",
      title: "खुद ऑनलाइन आवेदन (e-Sathi)",
      steps: [
        '<a href="https://edistrict.up.gov.in/edistrictup/" target="_blank" rel="noopener nofollow">edistrict.up.gov.in</a> खोलें और <strong>सिटिजन लॉगिन (e-Sathi)</strong> चुनें। "ई-डिस्ट्रिक्ट लॉगिन" अधिकारियों और जन सेवा केंद्र संचालकों के लिए है।',
        "पहली बार हैं तो पंजीकरण करें और लॉगिन करें।",
        "सेवाओं में <strong>निवास प्रमाण पत्र</strong> चुनें, फॉर्म में नाम, पिता का नाम, पूरा पता और निवास की अवधि भरें।",
        "फोटो, स्व-घोषणा और ऊपर के कागज़ अपलोड करें और पोर्टल पर दिखा शुल्क भरें।",
        "आवेदन संख्या नोट करें। जांच और मंज़ूरी के बाद डिजिटल हस्ताक्षर वाले प्रमाण पत्र का डाउनलोड लिंक e-Sathi खाते में आता है।",
      ],
      callout: { kind: "ok", html: "खुद न कर पाएं तो नज़दीकी जन सेवा केंद्र (CSC) या तहसील से आवेदन कराएं: <a href=\"/service/csc-locator/uttar-pradesh.html\">CSC लोकेटर</a>। फाइल छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और जांच",
      list: [
        "<strong>स्टेटस:</strong> e-District UP पोर्टल पर आवेदन संख्या से, या e-Sathi खाते में लॉगिन करके।",
        "<strong>डाउनलोड:</strong> e-Sathi खाते के लिंक से या DigiLocker से।",
        "<strong>सत्यापन:</strong> e-District UP पर आवेदन संख्या और प्रमाण पत्र संख्या से प्रमाण पत्र जांचा जा सकता है।",
      ],
      html: '<p>फोन में रखना हो तो: <a href="/digilocker/domicile-certificate.html">DigiLocker में निवास प्रमाण पत्र</a>।</p>',
    },
    {
      id: "appeal",
      title: "देरी हो तो शिकायत और अपील",
      intro: "निवास प्रमाण पत्र <strong>उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011</strong> के तहत तय समय में मिलने वाली सेवा है। पत्रिका (गोंडा) की रिपोर्ट के अनुसार निवास प्रमाण पत्र पर SDM के हस्ताक्षर होते हैं, पहली अपील SDM और दूसरी अपील जिलाधिकारी (DM) के पास होती है। ऑनलाइन शिकायत <a href=\"https://jansunwai.up.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">जनसुनवाई (IGRS) पोर्टल</a> पर दर्ज करें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["स्व-घोषणा नहीं लगी या अधूरी", "तय प्रारूप में स्व-घोषणा भरकर, हस्ताक्षर करके लगाएं"],
          ["पते का सबूत नहीं", "राशन कार्ड, बिजली बिल या वोटर कार्ड की कॉपी लगाएं"],
          ["नाम/पता कागज़ों में अलग", "आधार, राशन कार्ड और वोटर कार्ड में एक जैसी जानकारी कराएं"],
          ["लेखपाल की जांच में पते पर नहीं मिले", "आवेदन संख्या के साथ तहसील में संपर्क करें"],
        ],
      },
    },
    {
      id: "help",
      title: "हेल्पलाइन",
      intro: "ज़िला NIC पेजों पर e-District UP हेल्पडेस्क <strong>0522-2304706</strong> और ईमेल <strong>edistrict@nic.in</strong> दिए गए हैं। आवेदन की बात के लिए पहले अपनी तहसील या उसी जन सेवा केंद्र से संपर्क करें।",
    },
  ],
  official: [
    { href: "https://edistrict.up.gov.in/edistrictup/", title: "e-District उत्तर प्रदेश (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://esathi.up.gov.in/citizenservices/login/login.aspx", title: "e-Sathi सिटिजन लॉगिन" },
    { href: "https://jansunwai.up.nic.in/", title: "जनसुनवाई-समाधान (IGRS) शिकायत पोर्टल" },
    { href: "https://www.indiacode.nic.in/handle/123456789/19960", title: "उत्तर प्रदेश जनहित गारंटी अधिनियम, 2011" },
  ],
  faq: [
    { q: "उत्तर प्रदेश में निवास प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "edistrict.up.gov.in पर सिटिजन लॉगिन (e-Sathi) से पंजीकरण करें, निवास प्रमाण पत्र सेवा चुनें, फॉर्म भरें, फोटो, स्व-घोषणा और राशन कार्ड/बिजली बिल/वोटर कार्ड अपलोड करें और शुल्क भरें।" },
    { q: "निवास प्रमाण पत्र के लिए कौन से कागज़ चाहिए?", a: "ज़िला पेज के अनुसार स्व-प्रमाणित घोषणा पत्र, राशन कार्ड या बिजली बिल, वोटर कार्ड और पढ़े-लिखे हों तो शैक्षिक प्रमाण पत्र।" },
    { q: "फीस कितनी है?", a: "हमें मौजूदा शुल्क किसी खुलने वाले आधिकारिक पेज पर नहीं मिला। ऑनलाइन आवेदन में भुगतान से पहले पोर्टल पर राशि दिखती है; जन सेवा केंद्र पर रसीद ज़रूर लें।" },
    { q: "कितने साल उत्तर प्रदेश में रहने पर निवास प्रमाण पत्र बनता है?", a: "यह शर्त हमें किसी सरकारी पेज पर नहीं मिली। जिस भर्ती या दाखिले के लिए चाहिए, उसके नियम पढ़ें और तहसील से पूछें।" },
  ],
  related: [
    { href: "/states/uttar-pradesh-caste-certificate.html", emoji: "📜", title: "उत्तर प्रदेश जाति प्रमाण पत्र", text: "SC/ST/OBC, e-District पर" },
    { href: "/states/uttar-pradesh-income-certificate.html", emoji: "💰", title: "उत्तर प्रदेश आय प्रमाण पत्र", text: "e-Sathi / जन सेवा केंद्र" },
    { href: "/states/uttar-pradesh-employment-exchange.html", emoji: "💼", title: "उत्तर प्रदेश रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.up.gov.in/edistrictup/", label: "📝 e-District UP पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
