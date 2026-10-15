import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026; digitalgujarat.gov.in and surat.gujarat.gov.in
// do not open from our checker, so facts come from Gujarat district NIC pages):
// - ahmedabad.nic.in/service/domicile-certificate/: apply via
//   digitalgujarat.gov.in Citizen Service; Mamlatdar Office, Jan Seva Kendra;
//   Digital Gujarat help number 18002335500.
// - morbi.nic.in/service/domicile-certificate/: proofs needed: Panchnamu,
//   Talati certificate, applicant's statement, birth certificate (domicile by
//   birth), proof of parent's job/business, police station NOC, character
//   certificate, affidavit, last 10 years residence proof, identity proof,
//   resident proof; Jan Seva Kendra at Taluka Seva Sadan / taluka Mamlatdar.
// - jamnagar.nic.in/service/certificate/: ATVT / Jan Seva Kendra at Mamlatdar
//   / Panchayat (TDO) offices issue Domicile Certificate; also online.
// - vadodara.nic.in/service/residence-certificate/: Jan Seva Kendra (single
//   window), digitalgujarat.gov.in.
// - kachchh.nic.in/form/application-for-domicile-certificate/: application
//   form PDF (dated 04/09/2018).
// Left out (no current official page we could open): fee (old page said
// Rs 15-30), time limit (old page said 14 days), validity, a formal rule text
// on the residence period (the Morbi list asks for 10 years' residence proof;
// news reports of Gujarat High Court cases on the 10-year condition were seen
// only in search results). Old description promised an "official fee"; it was
// rewritten.
export const gujaratDomicileCertificate: DocGuide = {
  state: { slug: "gujarat", hi: "गुजरात" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Gujarat Domicile Certificate 2026: Apply & Status",
  description: "गुजरात डोमिसाइल (अधिवास) प्रमाण पत्र 2026: Digital Gujarat या मामलतदार कार्यालय के जन सेवा केंद्र से आवेदन, 10 साल निवास का सबूत, तलाटी प्रमाण पत्र और कागज़।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "गुजरात डोमिसाइल (निवास) प्रमाण पत्र 2026: Digital Gujarat पर आवेदन, कागज़ और स्टेटस",
  lead: "गुजरात में डोमिसाइल प्रमाण पत्र तालुका <strong>मामलतदार</strong> कार्यालय से जारी होता है। आवेदन <strong>Digital Gujarat</strong> पोर्टल (digitalgujarat.gov.in) पर ऑनलाइन, या मामलतदार कार्यालय / तालुका सेवा सदन के <strong>जन सेवा केंद्र (ATVT)</strong> पर होता है। ज़िला पेजों के अनुसार पिछले <strong>10 साल के निवास का सबूत</strong>, तलाटी का प्रमाण पत्र और पंचनामा जैसे कागज़ लगते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a>'],
    ["कहां", "जन सेवा केंद्र (मामलतदार कार्यालय) / ऑनलाइन"],
    ["निवास का सबूत", "पिछले 10 साल का"],
    ["हेल्पडेस्क", "1800 233 5500"],
  ],
  notice: "<strong>ध्यान दें:</strong> फीस और प्रमाण पत्र मिलने की समय-सीमा हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली, इसलिए हम यहां नहीं लिख रहे। आवेदन के समय Digital Gujarat पोर्टल या जन सेवा केंद्र पर जो शुल्क दिखे वही दें और रसीद लें।",
  sections: [
    {
      id: "kya-hai",
      title: "डोमिसाइल प्रमाण पत्र क्या है और कहां काम आता है",
      intro: "यह इस बात का सबूत है कि आप गुजरात के निवासी हैं। आम तौर पर इसकी ज़रूरत पड़ती है:",
      list: [
        "गुजरात के कॉलेजों में <strong>राज्य कोटे</strong> के दाखिले के लिए (जैसे मेडिकल, इंजीनियरिंग की प्रवेश प्रक्रिया)",
        "गुजरात की <strong>सरकारी भर्तियों</strong> में राज्य के निवासी होने का दावा करने के लिए",
        "राज्य की उन योजनाओं में जहां <strong>गुजरात का निवासी</strong> होना शर्त है",
      ],
      callout: { kind: "info", html: "डोमिसाइल प्रमाण पत्र सभी वर्गों के लिए है। आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/gujarat-caste-certificate.html\">गुजरात जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "जो व्यक्ति <strong>गुजरात में पैदा हुआ</strong> हो (जन्म प्रमाण पत्र से), <strong>या</strong>",
        "जो गुजरात में रह रहा हो और <strong>पिछले 10 साल के निवास का सबूत</strong> दे सके",
        "आवेदन उसी तालुका में करें जहां आप अभी रहते हैं",
      ],
      callout: { kind: "warn", html: "ज़िला पेज पर कागज़ों की सूची में \"पिछले 10 साल के निवास का सबूत\" मांगा गया है। दाखिले या भर्ती की संस्था के अपने नियम भी हो सकते हैं (जैसे गुजरात से पढ़ाई या माता-पिता का निवास), इसलिए जिस काम के लिए प्रमाण पत्र चाहिए उसकी सूचना (notification) भी पढ़ें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "मोरबी ज़िले के सरकारी पेज पर दी गई सूची के अनुसार ये कागज़ लगते हैं (आपके मामले में जो लागू हों):",
      list: [
        "<strong>पहचान का सबूत</strong> (जैसे आधार कार्ड, वोटर कार्ड) और <strong>निवास का सबूत</strong> (जैसे राशन कार्ड, बिजली बिल)",
        "<strong>पिछले 10 साल के निवास का सबूत</strong>: पुराना राशन कार्ड, स्कूल रिकॉर्ड, वोटर लिस्ट, किराये/संपत्ति के कागज़",
        "<strong>जन्म प्रमाण पत्र</strong>: अगर गुजरात में जन्म के आधार पर आवेदन कर रहे हैं",
        "<strong>तलाटी का प्रमाण पत्र</strong> और <strong>पंचनामा</strong>",
        "<strong>शपथ पत्र (Affidavit)</strong> और आवेदक का बयान",
        "<strong>माता-पिता की नौकरी/व्यवसाय का सबूत</strong>, जहां लागू हो",
        "<strong>पुलिस स्टेशन का अनापत्ति प्रमाण पत्र (NOC)</strong> और <strong>चरित्र प्रमाण पत्र</strong>, अगर मांगा जाए",
        "आवेदक की <strong>फोटो</strong>",
      ],
    },
    {
      id: "online",
      title: "Digital Gujarat पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a> खोलें और मोबाइल नंबर से रजिस्टर/लॉगिन करें।',
        "<strong>Citizen Services</strong> में <strong>Domicile Certificate</strong> सेवा चुनें।",
        "फॉर्म में नाम, माता-पिता का नाम, पूरा पता और गुजरात में रहने की अवधि सही भरें।",
        "ऊपर बताए कागज़ स्कैन करके अपलोड करें और पोर्टल पर दिखा शुल्क भरें।",
        "आवेदन जमा करने पर मिला <strong>आवेदन नंबर</strong> लिख लें; इसी से स्टेटस देखें।",
      ],
    },
    {
      id: "offline",
      title: "जन सेवा केंद्र से आवेदन",
      intro: "खुद ऑनलाइन न कर पाएं तो अपने तालुका के <strong>मामलतदार कार्यालय / तालुका सेवा सदन</strong> में बने <strong>जन सेवा केंद्र (ATVT)</strong> पर सभी मूल कागज़ और फोटोकॉपी लेकर जाएं। जामनगर ज़िले के अनुसार ये सेवाएं मामलतदार और पंचायत (TDO) कार्यालयों पर भी दी जाती हैं। आवेदन के बाद पावती पर लिखा आवेदन नंबर ज़रूर लें।",
      list: [
        "तलाटी का प्रमाण पत्र और पंचनामा पहले से बनवा लें, इससे आवेदन जल्दी आगे बढ़ता है।",
        "कच्छ ज़िले की वेबसाइट पर डोमिसाइल का आवेदन पत्र (PDF) भी रखा गया है; केंद्र पर मौजूदा फॉर्म ही भरें।",
        "मदद के लिए Digital Gujarat हेल्पडेस्क <strong>1800 233 5500</strong> पर फोन करें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और प्रमाण पत्र",
      list: [
        "Digital Gujarat पर लॉगिन करके अपने आवेदन की स्थिति देखें; केंद्र से आवेदन किया है तो आवेदन नंबर लेकर वहीं पूछें।",
        "जांच के दौरान तलाटी या मामलतदार कार्यालय कोई कागज़ मांगे तो जल्दी जमा करें, वरना आवेदन लौट सकता है।",
        "प्रमाण पत्र मिलने पर नाम, पता और पिता का नाम जांच लें और इसकी कुछ फोटोकॉपी व PDF संभाल कर रखें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["10 साल का निवास साबित नहीं हुआ", "पुराना राशन कार्ड, स्कूल रिकॉर्ड, पुरानी वोटर लिस्ट या किराये/संपत्ति के पुराने कागज़ जोड़ें"],
          ["तलाटी प्रमाण पत्र या पंचनामा नहीं लगा", "पहले तलाटी से प्रमाण पत्र और पंचनामा बनवाएं, फिर आवेदन करें"],
          ["नाम/पता कागज़ों में अलग-अलग", "आधार, राशन कार्ड और वोटर कार्ड में एक जैसी जानकारी कराएं"],
          ["गलत तालुका में आवेदन", "उसी तालुका के मामलतदार कार्यालय में आवेदन करें जहां आप रहते हैं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://www.digitalgujarat.gov.in/", title: "Digital Gujarat पोर्टल (ऑनलाइन आवेदन)" },
    { href: "https://ahmedabad.nic.in/service/domicile-certificate/", title: "Domicile Certificate (ज़िला अहमदाबाद)" },
    { href: "https://morbi.nic.in/service/domicile-certificate/", title: "Domicile Certificate: ज़रूरी कागज़ (ज़िला मोरबी)" },
    { href: "https://jamnagar.nic.in/service/certificate/", title: "जन सेवा केंद्र के प्रमाण पत्र (ज़िला जामनगर)" },
  ],
  faq: [
    { q: "गुजरात डोमिसाइल प्रमाण पत्र कौन जारी करता है?", a: "तालुका का मामलतदार कार्यालय। आवेदन Digital Gujarat पोर्टल पर या मामलतदार कार्यालय के जन सेवा केंद्र पर होता है।" },
    { q: "गुजरात डोमिसाइल के लिए कितने साल का निवास चाहिए?", a: "ज़िला पेज पर कागज़ों में पिछले 10 साल के निवास का सबूत मांगा गया है। गुजरात में जन्मे लोग जन्म प्रमाण पत्र लगा सकते हैं। जिस दाखिले या भर्ती के लिए चाहिए, उसके नियम भी पढ़ें।" },
    { q: "गुजरात डोमिसाइल के लिए कौन से कागज़ चाहिए?", a: "पहचान और निवास का सबूत, पिछले 10 साल के निवास का सबूत, तलाटी का प्रमाण पत्र, पंचनामा, शपथ पत्र, फोटो, और ज़रूरत हो तो जन्म प्रमाण पत्र, माता-पिता की नौकरी का सबूत, पुलिस NOC और चरित्र प्रमाण पत्र।" },
    { q: "डोमिसाइल की फीस कितनी है?", a: "फीस हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली। आवेदन के समय पोर्टल या जन सेवा केंद्र पर जो शुल्क दिखे वही दें और रसीद लें।" },
    { q: "मदद के लिए कहां फोन करें?", a: "Digital Gujarat हेल्पडेस्क 1800 233 5500 पर, या अपने तालुका के मामलतदार कार्यालय में।" },
  ],
  related: [
    { href: "/states/gujarat-caste-certificate.html", emoji: "📜", title: "गुजरात जाति प्रमाण पत्र", text: "SC/ST, SEBC, नॉन-क्रीमी लेयर" },
    { href: "/states/gujarat-income-certificate.html", emoji: "💰", title: "गुजरात आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/gujarat-birth-certificate.html", emoji: "👶", title: "गुजरात जन्म प्रमाण पत्र", text: "जन्म के आधार पर डोमिसाइल के लिए" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://www.digitalgujarat.gov.in/", label: "📝 Digital Gujarat पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
