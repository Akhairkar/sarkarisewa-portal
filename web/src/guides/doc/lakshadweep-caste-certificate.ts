import type { DocGuide } from "./types";

// Sources (checked 13-14 Oct 2026):
// - lakshadweep.gov.in/department-of-revenue/ (last updated Oct 2026):
//   Revenue Department headquartered at Kavaratti, headed by the Additional
//   District Magistrate (ADM); Deputy Collectors / BDOs posted in the Revenue
//   Sub-Divisions of each island; issues Caste, income and nativity
//   certificates "through both online and offline platforms"; Scheduled Tribe
//   (ST) Certificate, Nativity, One and Same, Domicile/Residence, Income
//   (Individual/Family), Resident ID card etc. available through the National
//   Government Service Portal https://serviceonline.gov.in; contact
//   Collectorate, Revenue Bhavan, Kavaratti 682555, addl.dm-lk[at]nic[dot]in,
//   04896-262384, 04896-263440.
// - lakshadweep.gov.in/service/revenue-servicen/: ST Certificate and other
//   revenue services linked to https://serviceonline.gov.in.
// - serviceonline.gov.in home page (ServicePlus): Registration, Login, Track
//   Application.
// - services.india.gov.in listing "apply for st certificate lakshadweep" (search
//   extract).
// - Constitution (Scheduled Tribes) (Union Territories) Order (Amendment) Act, 2008:
//   children of island inhabitants born on the mainland count if they settle
//   permanently in the islands (prsindia.org bill summary, 2007 bill).
// - Constitution (Scheduled Tribes) (Union Territories) Order, 1951, Part on
//   Lakshadweep: inhabitants of the Laccadive, Minicoy and Amindivi Islands
//   who, and both of whose parents, were born in those islands. No Scheduled
//   Castes order exists for Lakshadweep.
// Left out (not confirmable): fee, time limit, validity, document list, the
// exact signing officer, an OBC service. The old description's "Lakshadweep
// e-Portal", "document list" and "official fee" were dropped.
export const lakshadweepCasteCertificate: DocGuide = {
  state: { slug: "lakshadweep", hi: "लक्षद्वीप" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Lakshadweep Caste Certificate 2026: Apply & Status",
  description: "लक्षद्वीप ST (अनुसूचित जनजाति) प्रमाण पत्र 2026: राष्ट्रीय सेवा पोर्टल serviceonline.gov.in पर आवेदन, कौन पात्र है, राजस्व विभाग से मदद और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "लक्षद्वीप जाति प्रमाण पत्र 2026: ST प्रमाण पत्र के लिए serviceonline.gov.in पर आवेदन और स्टेटस",
  lead: "लक्षद्वीप में जाति प्रमाण पत्र का मतलब आम तौर पर <strong>अनुसूचित जनजाति (ST) प्रमाण पत्र</strong> है, क्योंकि यहां अनुसूचित जातियों (SC) की कोई सूची अधिसूचित नहीं है। लक्षद्वीप प्रशासन का राजस्व विभाग यह प्रमाण पत्र देता है, और विभाग के अनुसार ST प्रमाण पत्र का आवेदन राष्ट्रीय सेवा पोर्टल <strong>serviceonline.gov.in</strong> (ServicePlus) पर होता है। हर द्वीप के राजस्व उप-मंडल में डिप्टी कलेक्टर/BDO तैनात हैं, जहां ऑफलाइन मदद मिलती है।",
  facts: [
    ["पोर्टल", '<a href="https://serviceonline.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.gov.in</a>'],
    ["विभाग", "राजस्व विभाग, कलेक्ट्रेट, कवरत्ती"],
    ["द्वीप पर", "डिप्टी कलेक्टर / BDO (राजस्व उप-मंडल)"],
    ["संपर्क", "04896-262384, 04896-263440"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "लक्षद्वीप में ST प्रमाण पत्र किसे मिलता है",
      list: [
        "संविधान (अनुसूचित जनजातियां) (संघ राज्य क्षेत्र) आदेश, 1951 के अनुसार लक्षद्वीप में ST वे लोग हैं जो <strong>लक्कादीव, मिनिकॉय और अमिनदीवी द्वीपों के निवासी हैं और जिनका तथा जिनके माता-पिता दोनों का जन्म इन्हीं द्वीपों में हुआ</strong>। 2008 के संशोधन कानून के बाद ऐसे निवासियों के वे बच्चे भी इसमें आते हैं जिनका जन्म भारत की मुख्य भूमि पर हुआ, अगर वे स्थायी रूप से द्वीपों में बस जाएं।",
        "यानी यहां ST होना किसी एक जाति के नाम से नहीं, बल्कि द्वीपों में अपने और माता-पिता के जन्म से तय होता है। इसलिए आवेदन में अपने और माता-पिता के जन्म का सबूत सबसे ज़रूरी है।",
        "लक्षद्वीप के लिए अनुसूचित जातियों (SC) की कोई सूची अधिसूचित नहीं है। बाहर से आए व्यक्ति को SC/OBC के लिए अपने मूल राज्य का प्रमाण पत्र देखना होगा।",
      ],
      callout: { kind: "info", html: "राजस्व विभाग की ऑनलाइन सेवा सूची में <strong>Nativity Certificate</strong>, <strong>Domicile/Residence Certificate</strong> और <strong>Resident ID Card</strong> भी अलग सेवाएं हैं। कई कामों में ST प्रमाण पत्र के साथ इनमें से कोई एक भी मांगा जाता है।" },
    },
    {
      id: "online",
      title: "serviceonline.gov.in पर आवेदन",
      steps: [
        '<a href="https://serviceonline.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.gov.in</a> खोलें। लक्षद्वीप प्रशासन की वेबसाइट पर राजस्व सेवाओं के सामने यही लिंक दिया गया है।',
        "पहली बार हैं तो <strong>Registration</strong> से अकाउंट बनाएं, फिर Login ID और पासवर्ड से लॉगिन करें।",
        "सेवाओं में लक्षद्वीप की <strong>ST Certificate</strong> सेवा चुनें।",
        "फॉर्म भरें और पोर्टल पर मांगे गए कागज़ अपलोड करें; फीस दिखे तो भरें।",
        "आवेदन जमा करके पावती/आवेदन संख्या संभाल कर रखें।",
      ],
      html: "<p>ServicePlus पर कई राज्यों की सेवाएं हैं। सही सेवा चुनते समय ध्यान रखें कि वह लक्षद्वीप की हो।</p>",
    },
    {
      id: "kagaz",
      title: "आम तौर पर कौन से कागज़ तैयार रखें",
      intro: "कागज़ों की आधिकारिक सूची पोर्टल पर आवेदन फॉर्म में ही दिखती है। पात्रता जन्म से जुड़ी है, इसलिए ये कागज़ काम आते हैं:",
      list: [
        "आवेदक का जन्म प्रमाण पत्र (द्वीप में जन्म का सबूत)।",
        "माता और पिता दोनों के जन्म का सबूत, या उनके पुराने ST प्रमाण पत्र।",
        "पहचान पत्र (जैसे आधार) और Resident ID Card, अगर हो।",
        "आवेदक की फोटो।",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है, सिर्फ तैयारी के लिए है। पोर्टल या द्वीप का राजस्व कार्यालय जो कागज़ मांगे, वही मान्य है।" },
    },
    {
      id: "offline",
      title: "द्वीप पर राजस्व कार्यालय से मदद",
      intro: "राजस्व विभाग के अनुसार प्रमाण पत्र ऑनलाइन और ऑफलाइन दोनों तरह दिए जाते हैं। हर द्वीप के राजस्व उप-मंडल में <strong>डिप्टी कलेक्टर / खंड विकास अधिकारी (BDO)</strong> तैनात हैं; ऑनलाइन फॉर्म में दिक्कत हो तो वहीं संपर्क करें। विभाग का मुख्यालय कवरत्ती में है और इसके प्रमुख अपर ज़िला मजिस्ट्रेट (ADM) हैं।",
    },
    {
      id: "status",
      title: "फीस, समय सीमा और स्टेटस",
      list: [
        "<strong>स्टेटस:</strong> serviceonline.gov.in के होमपेज पर <strong>Track Application</strong> से, या लॉगिन करके अपने आवेदन देखें।",
        "<strong>फीस और समय सीमा:</strong> लक्षद्वीप के राजस्व विभाग के पेज पर इनका ब्योरा नहीं है। पोर्टल पर आवेदन के समय फीस दिखेगी; समय सीमा अपने राजस्व कार्यालय से पूछें।",
        "<strong>वैधता:</strong> विभाग के पेज पर वैधता नहीं लिखी। नौकरी या दाखिले के फॉर्म में किसी खास तारीख के बाद का प्रमाण पत्र मांगा गया हो, तो उसी हिसाब से बनवाएं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["माता-पिता के जन्म का सबूत नहीं", "माता-पिता का जन्म प्रमाण पत्र, उनका पुराना ST प्रमाण पत्र या दूसरे रिकॉर्ड लगाएं"],
          ["गलत राज्य की सेवा चुनी", "ServicePlus पर लक्षद्वीप की ST Certificate सेवा ही चुनें"],
          ["धुंधले स्कैन", "साफ, सीधे स्कैन छोटी फाइल में अपलोड करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पहले अपने द्वीप के डिप्टी कलेक्टर/BDO कार्यालय से संपर्क करें। मुख्यालय: कलेक्ट्रेट, राजस्व भवन, कवरत्ती 682555; फोन 04896-262384, 04896-263440; ईमेल addl.dm-lk[at]nic[dot]in (ये संपर्क राजस्व विभाग के आधिकारिक पेज पर दिए हैं)।",
    },
  ],
  official: [
    { href: "https://serviceonline.gov.in/", title: "राष्ट्रीय सेवा पोर्टल ServicePlus (आवेदन, Track Application)" },
    { href: "https://lakshadweep.gov.in/department-of-revenue/", title: "लक्षद्वीप राजस्व विभाग: सेवाएं और संपर्क" },
    { href: "https://lakshadweep.gov.in/service/revenue-servicen/", title: "लक्षद्वीप राजस्व सेवाओं के लिंक" },
  ],
  faq: [
    { q: "लक्षद्वीप में ST प्रमाण पत्र कहां बनता है?", a: "लक्षद्वीप राजस्व विभाग के अनुसार ST प्रमाण पत्र का आवेदन राष्ट्रीय सेवा पोर्टल serviceonline.gov.in पर होता है। ऑफलाइन मदद अपने द्वीप के डिप्टी कलेक्टर/BDO कार्यालय से मिलती है।" },
    { q: "लक्षद्वीप में ST कौन माना जाता है?", a: "संविधान (अनुसूचित जनजातियां) (संघ राज्य क्षेत्र) आदेश, 1951 के अनुसार लक्कादीव, मिनिकॉय और अमिनदीवी द्वीपों के वे निवासी जिनका और जिनके माता-पिता दोनों का जन्म इन्हीं द्वीपों में हुआ 2008 के संशोधन कानून के बाद ऐसे निवासियों के वे बच्चे भी इसमें आते हैं जिनका जन्म भारत की मुख्य भूमि पर हुआ, अगर वे स्थायी रूप से द्वीपों में बस जाएं।" },
    { q: "क्या लक्षद्वीप में SC प्रमाण पत्र बनता है?", a: "लक्षद्वीप के लिए अनुसूचित जातियों की कोई सूची अधिसूचित नहीं है। बाहर से आए लोगों को अपने मूल राज्य का प्रमाण पत्र देखना होगा।" },
    { q: "आवेदन का स्टेटस कैसे देखें?", a: "serviceonline.gov.in के होमपेज पर Track Application से, या लॉगिन करके अपने आवेदन की स्थिति देखें।" },
  ],
  related: [
    { href: "/states/lakshadweep-income-certificate.html", emoji: "💰", title: "लक्षद्वीप आय प्रमाण पत्र", text: "Individual और Family" },
    { href: "/states/lakshadweep-domicile-certificate.html", emoji: "🏠", title: "लक्षद्वीप निवास प्रमाण पत्र", text: "Domicile / Nativity" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://serviceonline.gov.in/", label: "📝 serviceonline.gov.in पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
