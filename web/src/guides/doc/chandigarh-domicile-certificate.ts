import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026, opened directly):
// - chandigarhdistrict.nic.in "Right to Service" page: Department of
//   Personnel, Chandigarh Administration notification
//   No. 28/67/1-IH(11)-2019/14032 dated 13.09.2019 under the Punjab Right to
//   Service Act 2011 (and 2014 amendment) as extended to UT Chandigarh.
//   * Sr. 18 (DC office): "Residence certificate", 45 days, designated officer
//     Tehsildar (Revenue), first appeal Additional Deputy Commissioner, second
//     appeal Deputy Commissioner.
//   * Sr. 28 (Certificate Branch of SDM Office): "Permanent Residence
//     certificate", 40 days (letter to area Patwari/Tehsildar (Revenue) within
//     5 days; Tehsildar (R) verification report within 30 days; certificate
//     within 5 days); designated officer SDA (Sub Divisional Assistant) of the
//     area, first appeal SDM of the area, second appeal Deputy Commissioner.
// - chandigarhdistrict.nic.in/service/residence-certificate/ (district
//   service page, updated Jun 2025): "Click here to Register" and "Click here
//   to Apply" links to the e-District portal chdservices.gov.in
//   (PortalUser/RegisterOnline.aspx, Administration/Login.aspx).
// - Tribune (2022, search extract, already used in chandigarh-income-
//   certificate.ts): Sampark Centres for forms/submission.
// Left out (not confirmable on an official page we could open): residence
// period, fee, document checklist, validity, helpline.
export const chandigarhDomicileCertificate: DocGuide = {
  state: { slug: "chandigarh", hi: "चंडीगढ़" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Chandigarh Domicile Certificate 2026",
  description: "चंडीगढ़ रेज़िडेंस और परमानेंट रेज़िडेंस सर्टिफिकेट 2026: e-District पोर्टल chdservices.gov.in पर आवेदन, तहसीलदार/SDM ऑफिस, सेवा का अधिकार की समय सीमा और अपील।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "चंडीगढ़ निवास (Residence / Permanent Residence) प्रमाण पत्र 2026: आवेदन, समय सीमा और अपील",
  lead: "चंडीगढ़ प्रशासन की सेवा का अधिकार अधिसूचना में निवास के दो प्रमाण पत्र हैं: <strong>Residence Certificate</strong> (तहसीलदार राजस्व, 45 दिन) और <strong>Permanent Residence Certificate</strong> (SDM ऑफिस की सर्टिफिकेट ब्रांच, 40 दिन)। ज़िला प्रशासन की वेबसाइट पर Residence Certificate का आवेदन e-District पोर्टल <strong>chdservices.gov.in</strong> से जोड़ा गया है।",
  facts: [
    ["ऑनलाइन", '<a href="https://chandigarhdistrict.nic.in/service/residence-certificate/" target="_blank" rel="noopener nofollow">chdservices.gov.in (ज़िला पेज से)</a>'],
    ["Residence Certificate", "तहसीलदार (राजस्व), 45 दिन"],
    ["Permanent Residence", "SDM ऑफिस, 40 दिन"],
    ["जांच", "पटवारी / तहसीलदार (राजस्व)"],
  ],
  notice: "<strong>सही प्रमाण पत्र चुनें:</strong> जिस भर्ती, दाखिले या योजना के लिए चाहिए, उसके नियम में देखें कि \"Residence\" मांगा है या \"Permanent Residence\"। चंडीगढ़ में कितने साल रहने पर कौन सा प्रमाण पत्र बनता है, यह शर्त हमें किसी खुलने वाले सरकारी पेज पर नहीं मिली; आवेदन से पहले संपर्क केंद्र या SDM ऑफिस से पूछ लें।",
  sections: [
    {
      id: "do-praman",
      title: "दो प्रमाण पत्र: कौन देता है, कितने दिन में",
      intro: "चंडीगढ़ प्रशासन की 13.09.2019 की सेवा का अधिकार अधिसूचना (पंजाब सेवा का अधिकार अधिनियम, 2011 जैसा चंडीगढ़ पर लागू) के अनुसार:",
      table: {
        head: ["", "Residence Certificate", "Permanent Residence Certificate"],
        rows: [
          ["दफ्तर", "डिप्टी कमिश्नर ऑफिस", "SDM ऑफिस की सर्टिफिकेट ब्रांच"],
          ["फैसला करने वाले अधिकारी", "तहसीलदार (राजस्व)", "क्षेत्र के SDA (सब डिवीज़नल असिस्टेंट)"],
          ["समय सीमा", "45 दिन", "40 दिन"],
          ["पहली अपील", "अतिरिक्त डिप्टी कमिश्नर", "क्षेत्र के SDM"],
          ["दूसरी अपील", "डिप्टी कमिश्नर", "डिप्टी कमिश्नर"],
        ],
      },
      callout: { kind: "info", html: "Permanent Residence Certificate में पहले 5 दिन में क्षेत्र के पटवारी/तहसीलदार (राजस्व) को जांच के लिए पत्र जाता है, 30 दिन में जांच रिपोर्ट आती है और फिर 5 दिन में प्रमाण पत्र जारी होता है।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "चंडीगढ़ प्रशासन की आधिकारिक कागज़-सूची हमें नहीं मिली। फॉर्म में जो मांगा जाए वही लगाएं; आम तौर पर ये पास रखें:",
      list: [
        "<strong>फोटो</strong> और <strong>आधार कार्ड</strong>",
        "<strong>चंडीगढ़ के पते का सबूत</strong>: बिजली/पानी का बिल, किरायानामा या मकान के कागज़",
        "<strong>लंबे निवास के पुराने सबूत</strong>: पुराना राशन कार्ड, वोटर लिस्ट में नाम, स्कूल के प्रमाण पत्र",
        "<strong>जन्म प्रमाण पत्र</strong> और <strong>शपथ-पत्र</strong>, अगर मांगा जाए",
      ],
    },
    {
      id: "online",
      title: "आवेदन कैसे करें",
      steps: [
        'ज़िला प्रशासन के <a href="https://chandigarhdistrict.nic.in/service/residence-certificate/" target="_blank" rel="noopener nofollow">Residence Certificate पेज</a> पर <strong>Click here to Register</strong> से e-District पोर्टल (chdservices.gov.in) पर रजिस्टर करें।',
        "<strong>Click here to Apply</strong> से लॉगिन करके निवास प्रमाण पत्र का फॉर्म भरें और कागज़ अपलोड करें।",
        "आवेदन संख्या नोट करें। पटवारी/तहसीलदार (राजस्व) की जांच के समय कागज़ मांगे जाएं तो तुरंत दें।",
        "खुद ऑनलाइन न कर पाएं तो नज़दीकी <strong>संपर्क (Sampark) केंद्र</strong> पर मूल कागज़ लेकर जाएं और रसीद लें।",
      ],
    },
    {
      id: "appeal",
      title: "समय पर न मिले तो अपील",
      intro: "तय दिनों (45 या 40) में प्रमाण पत्र न मिले या बिना ठोस वजह आवेदन खारिज हो, तो सेवा का अधिकार कानून के तहत पहली अपील करें: Residence Certificate में <strong>अतिरिक्त डिप्टी कमिश्नर</strong> के पास, Permanent Residence में <strong>क्षेत्र के SDM</strong> के पास। उसके बाद दूसरी अपील <strong>डिप्टी कमिश्नर</strong> के पास होती है। अधिसूचना ज़िला वेबसाइट के <a href=\"https://chandigarhdistrict.nic.in/right-to-service/\" target=\"_blank\" rel=\"noopener nofollow\">Right to Service</a> पेज पर है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["पते का सबूत किसी और के नाम पर", "किरायानामा या मकान मालिक की NOC लगाएं"],
          ["लंबे निवास का पुराना सबूत नहीं", "पुराना राशन कार्ड, पुरानी वोटर लिस्ट या स्कूल रिकॉर्ड लगाएं"],
          ["पटवारी/तहसीलदार की जांच में घर पर नहीं मिले", "आवेदन संख्या के साथ तहसील/SDM ऑफिस में संपर्क करें"],
          ["गलत प्रमाण पत्र के लिए आवेदन", "भर्ती/दाखिले के नियम देखकर सही प्रमाण पत्र के लिए आवेदन करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://chandigarhdistrict.nic.in/service/residence-certificate/", title: "ज़िला प्रशासन चंडीगढ़: Residence Certificate (रजिस्टर / आवेदन लिंक)" },
    { href: "https://chandigarhdistrict.nic.in/right-to-service/", title: "चंडीगढ़ सेवा का अधिकार अधिसूचना (समय सीमा, अधिकारी, अपील)" },
    { href: "https://chandigarhdistrict.nic.in/", title: "ज़िला प्रशासन, चंडीगढ़" },
  ],
  faq: [
    { q: "चंडीगढ़ में निवास प्रमाण पत्र कौन जारी करता है?", a: "सेवा का अधिकार अधिसूचना के अनुसार Residence Certificate तहसीलदार (राजस्व) देते हैं, और Permanent Residence Certificate SDM ऑफिस की सर्टिफिकेट ब्रांच से क्षेत्र के SDA जारी करते हैं।" },
    { q: "कितने दिन में बनता है?", a: "Residence Certificate 45 दिन और Permanent Residence Certificate 40 दिन में (सेवा का अधिकार के तहत तय समय)।" },
    { q: "ऑनलाइन आवेदन कहां होता है?", a: "ज़िला प्रशासन की वेबसाइट के Residence Certificate पेज पर e-District पोर्टल chdservices.gov.in के रजिस्टर और आवेदन लिंक दिए गए हैं। संपर्क केंद्र से भी मदद ले सकते हैं।" },
    { q: "फीस कितनी है?", a: "हमें शुल्क की राशि किसी आधिकारिक पेज पर नहीं मिली। आवेदन के समय पोर्टल या संपर्क केंद्र पर पूछ लें।" },
  ],
  related: [
    { href: "/states/chandigarh-caste-certificate.html", emoji: "📜", title: "चंडीगढ़ जाति प्रमाण पत्र", text: "SC/OBC, SDM ऑफिस" },
    { href: "/states/chandigarh-income-certificate.html", emoji: "💰", title: "चंडीगढ़ आय प्रमाण पत्र", text: "तहसीलदार (राजस्व)" },
    { href: "/states/chandigarh-employment-exchange.html", emoji: "💼", title: "चंडीगढ़ रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://chandigarhdistrict.nic.in/service/residence-certificate/", label: "📝 आवेदन लिंक (ज़िला पेज)" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
