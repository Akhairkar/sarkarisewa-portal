import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - lakshadweep.gov.in/department-of-revenue/ (opened directly): Revenue
//   Department at Kavaratti headed by the ADM; Deputy Collectors / BDOs in the
//   Revenue Sub-Divisions of each island; certificates issued "through both
//   online and offline platforms"; available through the National Government
//   Service Portal https://serviceonline.gov.in: ST Certificate, Nativity
//   Certificate, One and Same Certificate, Domicile/Residence Certificate,
//   Income Certificates, Resident ID card and others; contact Collectorate,
//   Revenue Bhavan, Kavaratti 682555, addl.dm-lk[at]nic[dot]in, 04896-262384,
//   04896-263440.
// - lakshadweep.gov.in/service/revenue-servicen/ (last updated 14 Oct 2026):
//   "Domicile/Residential Certificate", "Nativity Certificate", "Resident ID
//   Card" each linked to serviceonline.gov.in.
// - Searches found only non-official guides (wikiprocedure.com, 1acre.in) for
//   documents, eligibility and the in-person route; none of that is used as
//   fact.
// Left out (not confirmable): residence period, document list, fee, time
// limit, validity, signing officer. The old description's "Lakshadweep
// e-Portal" and "official fee" were dropped.
export const lakshadweepDomicileCertificate: DocGuide = {
  state: { slug: "lakshadweep", hi: "लक्षद्वीप" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Lakshadweep Domicile Certificate 2026",
  description: "लक्षद्वीप डोमिसाइल / रेज़िडेंस और नेटिविटी प्रमाण पत्र 2026: serviceonline.gov.in पर आवेदन, राजस्व विभाग, द्वीप पर डिप्टी कलेक्टर/BDO कार्यालय और संपर्क।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "लक्षद्वीप डोमिसाइल (निवास) प्रमाण पत्र 2026: ऑनलाइन आवेदन और मदद",
  lead: "लक्षद्वीप में <strong>Domicile/Residence Certificate</strong> (निवास प्रमाण पत्र) और <strong>Nativity Certificate</strong> (मूल निवासी प्रमाण पत्र) प्रशासन का राजस्व विभाग देता है। विभाग के अनुसार दोनों का आवेदन राष्ट्रीय सेवा पोर्टल <strong>serviceonline.gov.in</strong> (ServicePlus) पर होता है। ऑनलाइन में दिक्कत हो तो अपने द्वीप के राजस्व उप-मंडल में डिप्टी कलेक्टर/BDO कार्यालय से मदद लें।",
  facts: [
    ["प्रमाण पत्र", "Domicile/Residence, Nativity"],
    ["ऑनलाइन", '<a href="https://serviceonline.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.gov.in</a>'],
    ["विभाग", "राजस्व विभाग, कवरत्ती"],
    ["द्वीप पर", "डिप्टी कलेक्टर / BDO (राजस्व उप-मंडल)"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "कौन सा प्रमाण पत्र चाहिए",
      list: [
        "<strong>Domicile/Residence Certificate:</strong> यह बताता है कि आप लक्षद्वीप के निवासी हैं। दाखिले, भर्ती और योजनाओं में निवास के सबूत के लिए मांगा जाता है।",
        "<strong>Nativity Certificate:</strong> यह मूल निवासी (native) होने का प्रमाण है। कुछ भर्तियां और योजनाएं यही मांगती हैं।",
        "<strong>Resident ID Card:</strong> राजस्व विभाग की सूची में यह भी एक अलग सेवा है।",
      ],
      callout: { kind: "info", html: "भर्ती या दाखिले के फॉर्म में साफ देखें कि Domicile मांगा है या Nativity। ST होने का सबूत अलग है: <a href=\"/states/lakshadweep-caste-certificate.html\">लक्षद्वीप ST प्रमाण पत्र</a>।" },
    },
    {
      id: "online",
      title: "serviceonline.gov.in पर आवेदन",
      steps: [
        '<a href="https://serviceonline.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.gov.in</a> खोलें। लक्षद्वीप प्रशासन की वेबसाइट पर राजस्व सेवाओं के सामने यही लिंक दिया गया है।',
        "पहली बार हैं तो <strong>Registration</strong> से अकाउंट बनाएं, फिर लॉगिन करें।",
        "लक्षद्वीप की <strong>Domicile/Residence Certificate</strong> या <strong>Nativity Certificate</strong> सेवा चुनें।",
        "फॉर्म भरें और पोर्टल पर मांगे गए कागज़ अपलोड करें; फीस दिखे तो भरें।",
        "आवेदन जमा करके आवेदन संख्या संभाल कर रखें और <strong>Track Application</strong> से स्थिति देखें।",
      ],
      html: "<p>ServicePlus पर कई राज्यों की सेवाएं हैं। सेवा चुनते समय ध्यान रखें कि वह लक्षद्वीप की हो।</p>",
    },
    {
      id: "kagaz",
      title: "कागज़ पहले से तैयार रखें",
      intro: "आधिकारिक सूची हमें किसी खुले पेज पर नहीं मिली; पोर्टल पर सेवा चुनने के बाद सूची दिखती है। आम तौर पर ये कागज़ काम आते हैं:",
      list: [
        "आधार कार्ड और पासपोर्ट साइज़ फोटो",
        "जन्म प्रमाण पत्र या 10वीं का प्रमाण पत्र (जन्मतिथि के लिए)",
        "राशन कार्ड या दूसरा पते का सबूत",
        "माता-पिता के निवास/नेटिविटी के कागज़, अगर हों",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है, सिर्फ तैयारी के लिए है। पोर्टल या डिप्टी कलेक्टर/BDO कार्यालय जो मांगे, वही मान्य है।" },
    },
    {
      id: "offline",
      title: "द्वीप पर कार्यालय और संपर्क",
      intro: "राजस्व विभाग के अनुसार प्रमाण पत्र ऑनलाइन और ऑफलाइन दोनों तरह दिए जाते हैं। हर द्वीप के राजस्व उप-मंडल में <strong>डिप्टी कलेक्टर / खंड विकास अधिकारी (BDO)</strong> तैनात हैं।",
      list: [
        "मुख्यालय: कलेक्ट्रेट, राजस्व भवन, कवरत्ती 682555",
        "फोन: 04896-262384, 04896-263440",
        "ईमेल: addl.dm-lk[at]nic[dot]in",
        "<strong>फीस, समय सीमा, निवास की अवधि और वैधता</strong> किसी आधिकारिक पेज पर हमें नहीं मिली; आवेदन से पहले कार्यालय से पूछ लें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत राज्य की सेवा चुनी", "serviceonline.gov.in पर लक्षद्वीप की सेवा ही चुनें"],
          ["Domicile की जगह Nativity (या उल्टा) चाहिए था", "फॉर्म/विज्ञापन में मांगा गया प्रमाण पत्र देखकर सही सेवा में आवेदन करें"],
          ["कागज़ धुंधले या अधूरे", "साफ स्कैन कॉपी दोबारा अपलोड करें"],
          ["नाम/जन्मतिथि कागज़ों में अलग", "आधार, जन्म प्रमाण और राशन कार्ड में एक जैसी जानकारी कराएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://serviceonline.gov.in/", title: "serviceonline.gov.in (ServicePlus): ऑनलाइन आवेदन" },
    { href: "https://lakshadweep.gov.in/service/revenue-servicen/", title: "लक्षद्वीप राजस्व सेवाएं: Domicile, Nativity" },
    { href: "https://lakshadweep.gov.in/department-of-revenue/", title: "लक्षद्वीप राजस्व विभाग: सेवाएं और संपर्क" },
  ],
  faq: [
    { q: "लक्षद्वीप डोमिसाइल प्रमाण पत्र कहां बनता है?", a: "राजस्व विभाग के अनुसार serviceonline.gov.in पर Domicile/Residence Certificate सेवा में आवेदन होता है। ऑफलाइन मदद के लिए अपने द्वीप के डिप्टी कलेक्टर/BDO कार्यालय जाएं।" },
    { q: "Domicile और Nativity Certificate में क्या फर्क है?", a: "Domicile/Residence निवास बताता है, Nativity मूल निवासी होना। दोनों अलग सेवाएं हैं; जिस काम के लिए चाहिए उसके फॉर्म में लिखा प्रमाण पत्र ही बनवाएं।" },
    { q: "फीस और समय सीमा कितनी है?", a: "किसी आधिकारिक पेज पर हमें इनका ब्योरा नहीं मिला। आवेदन करते समय पोर्टल पर जो शुल्क दिखे वही मान्य है; समय के लिए कार्यालय से पूछें।" },
    { q: "मदद के लिए किससे संपर्क करें?", a: "कलेक्ट्रेट, राजस्व भवन, कवरत्ती: फोन 04896-262384, 04896-263440।" },
  ],
  related: [
    { href: "/states/lakshadweep-caste-certificate.html", emoji: "📜", title: "लक्षद्वीप जाति (ST) प्रमाण पत्र", text: "serviceonline.gov.in पर आवेदन" },
    { href: "/states/lakshadweep-income-certificate.html", emoji: "💰", title: "लक्षद्वीप आय प्रमाण पत्र", text: "Individual और Family" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://serviceonline.gov.in/", label: "📝 serviceonline पर आवेदन" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
