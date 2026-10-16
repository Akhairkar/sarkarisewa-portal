import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 15 Oct 2026): myScheme (api.myscheme.gov.in, slug
// "pm-svanidhi": Ministry of Housing & Urban Affairs; launched 1 Jun 2020;
// loans ₹15,000 (repay 12 months), ₹25,000 (18 months), ₹50,000 (36 months),
// next tranche on timely repayment, no prepayment penalty; 7% interest subsidy
// credited quarterly for standard accounts; digital cashback up to ₹100/month;
// UPI-linked RuPay credit card ₹10,000 initial limit extendable to ₹30,000
// after repaying 2nd tranche; eligibility: CoV/ID card, identified in survey,
// or LoR from ULB/TVC incl. peri-urban vendors; online at
// pmsvanidhi.mohua.gov.in with Aadhaar-linked mobile; toll-free 1800111979,
// 9:30-6:00 Mon-Sat); Cabinet decision 27 Aug 2025 (Business Standard/PTI,
// Vision IAS): restructured, lending period extended to 31 Mar 2030, outlay
// ₹7,332 crore, 1st/2nd tranche raised from ₹10,000/₹20,000, digital
// cashback up to ₹1,600.
export const pmSvanidhi: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम स्वनिधि" },
  ],
  docHi: "पीएम स्वनिधि",
  promo: gstinPromo,
  title: "पीएम स्वनिधि (स्ट्रीट वेंडर ऋण योजना) 2026",
  description: "शहरी स्ट्रीट वेंडरों को बिना जमानत कार्यशील पूंजी ऋण प्रदान करती है, समय पर पुनर्भुगतान पर क्रमिक रूप से उच्च ऋण सीमा के साथ।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम स्वनिधि 2026: रेहड़ी-पटरी वालों को ₹15,000, ₹25,000 और ₹50,000 का बिना गारंटी लोन",
  lead: "पीएम स्वनिधि (PM Street Vendor's AtmaNirbhar Nidhi) आवास एवं शहरी कार्य मंत्रालय की योजना है, जिसमें शहर के रेहड़ी-पटरी और ठेले वालों को काम चलाने के लिए बिना गारंटी लोन मिलता है: पहली बार ₹15,000, समय पर चुकाने पर ₹25,000 और फिर ₹50,000। ब्याज पर 7% सब्सिडी और डिजिटल लेन-देन पर कैशबैक भी मिलता है। अगस्त 2025 में योजना को नए रूप में 31 मार्च 2030 तक बढ़ाया गया।",
  facts: [
    ["लोन", "₹15,000 → ₹25,000 → ₹50,000"],
    ["ब्याज सब्सिडी", "7% सालाना (समय पर किस्त पर)"],
    ["आवेदन", "pmsvanidhi.mohua.gov.in या CSC/बैंक"],
    ["हेल्पलाइन", "1800-11-1979 (सोम-शनि, 9:30-6:00)"],
  ],
  sections: [
    {
      id: "loan",
      title: "कितना लोन, कितने समय में चुकाना",
      table: {
        head: ["किस्त (tranche)", "लोन राशि", "चुकाने का समय"],
        rows: [
          ["पहला लोन", "₹15,000 तक", "12 महीने"],
          ["दूसरा लोन", "₹25,000 तक", "18 महीने"],
          ["तीसरा लोन", "₹50,000 तक", "36 महीने"],
        ],
      },
      html: "<p>अगला लोन तभी मिलता है जब पिछला समय पर या पहले चुका दिया जाए। जल्दी चुकाने पर कोई जुर्माना नहीं है। अगस्त 2025 से पहले पहला लोन ₹10,000 और दूसरा ₹20,000 था।</p>",
    },
    {
      id: "labh",
      title: "दूसरे फायदे",
      list: [
        "<strong>7% ब्याज सब्सिडी:</strong> ब्याज का 7% हिस्सा सरकार हर तिमाही आपके खाते में वापस डालती है, अगर खाता ठीक चल रहा हो (NPA न हो)।",
        "<strong>डिजिटल कैशबैक:</strong> UPI/QR से लेन-देन करने पर कैशबैक (₹100 प्रति माह तक; नए नियमों में कुल ₹1,600 तक)।",
        "<strong>RuPay क्रेडिट कार्ड:</strong> दूसरा लोन समय पर चुकाने वालों को UPI से जुड़ा RuPay क्रेडिट कार्ड, शुरू में ₹10,000 की सीमा, जो ₹30,000 तक बढ़ सकती है।",
        "<strong>बिना जमानत:</strong> लोन पर सरकार की क्रेडिट गारंटी है, इसलिए कोई गिरवी नहीं।",
      ],
    },
    {
      id: "patrata",
      title: "कौन ले सकता है",
      list: [
        "शहरी स्थानीय निकाय (नगर निगम/नगर पालिका) से मिला <strong>वेंडिंग प्रमाण पत्र (CoV) या पहचान पत्र</strong> वाले विक्रेता।",
        "सर्वे में पहचाने गए, पर अभी पहचान पत्र न मिला हो।",
        "सर्वे से छूट गए या बाद में ठेला लगाना शुरू करने वाले, जिन्हें नगर निकाय/टाउन वेंडिंग कमेटी से <strong>सिफारिश पत्र (LoR)</strong> मिला हो।",
        "आसपास के गांव/कस्बे से आकर शहर की सीमा में बेचने वाले, जिन्हें LoR मिला हो।",
      ],
      callout: { kind: "info", html: 'वेंडिंग प्रमाण पत्र/पहचान पत्र कैसे बनता है, यह हमारे <a href="/service/street-vendor-identity-card.html">स्ट्रीट वेंडर पहचान पत्र</a> पेज पर देखें।' },
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "पहले देखें कि आपका <strong>मोबाइल नंबर आधार से जुड़ा</strong> है; e-KYC के लिए OTP उसी पर आएगा।",
        '<a href="https://pmsvanidhi.mohua.gov.in/" target="_blank" rel="noopener nofollow">pmsvanidhi.mohua.gov.in</a> पर "Log In" करके मोबाइल OTP डालें।',
        "विक्रेता की श्रेणी चुनें और <strong>सर्वे संदर्भ संख्या (SRN)</strong> या पहचान पत्र/LoR का विवरण भरें।",
        "फॉर्म भरें, कागज़ अपलोड करें और पसंदीदा बैंक चुनकर सबमिट करें।",
        "बैंक जांच के बाद लोन खाते में डालता है। स्टेटस पोर्टल पर देख सकते हैं।",
      ],
      callout: { kind: "ok", html: 'खुद न कर पाएं तो नगर निगम के कार्यालय, बैंक शाखा या <a href="/tools/csc-locator.html">नज़दीकी CSC</a> से आवेदन करवाएं।' },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड (मोबाइल से जुड़ा)",
        "वेंडिंग प्रमाण पत्र/पहचान पत्र या नगर निकाय का सिफारिश पत्र (LoR)",
        "बैंक खाते का विवरण",
        "वोटर ID, ड्राइविंग लाइसेंस, मनरेगा कार्ड या PAN जैसा कोई दूसरा पहचान पत्र (अगर बैंक मांगे)",
      ],
    },
  ],
  official: [
    { href: "https://pmsvanidhi.mohua.gov.in/", title: "PM SVANidhi पोर्टल: आवेदन और स्टेटस", note: "टोल-फ्री 1800-11-1979" },
    { href: "https://www.myscheme.gov.in/schemes/pm-svanidhi", title: "myScheme: PM SVANidhi" },
    { href: "https://mohua.gov.in/", title: "आवास एवं शहरी कार्य मंत्रालय" },
  ],
  faq: [
    { q: "पीएम स्वनिधि में कितना लोन मिलता है?", a: "पहली बार ₹15,000, समय पर चुकाने के बाद ₹25,000 और फिर ₹50,000। यह सीमा अगस्त 2025 के बदलाव के बाद की है।" },
    { q: "क्या पीएम स्वनिधि योजना अभी चल रही है?", a: "हां। केंद्रीय मंत्रिमंडल ने 27 अगस्त 2025 को योजना को नए रूप में 31 मार्च 2030 तक बढ़ाया।" },
    { q: "ब्याज कितना लगता है?", a: "ब्याज दर बैंक तय करता है, पर समय पर किस्त भरने पर 7% सालाना ब्याज सब्सिडी हर तिमाही खाते में वापस आती है।" },
    { q: "पहचान पत्र नहीं है तो क्या करें?", a: "नगर निगम/नगर पालिका या टाउन वेंडिंग कमेटी से सिफारिश पत्र (LoR) लेकर आवेदन कर सकते हैं।" },
    { q: "पीएम स्वनिधि की हेल्पलाइन क्या है?", a: "टोल-फ्री 1800-11-1979, सोमवार से शनिवार सुबह 9:30 से शाम 6:00 तक (राष्ट्रीय छुट्टियों को छोड़कर)।" },
  ],
  related: [
    { href: "/service/street-vendor-identity-card.html", emoji: "🪪", title: "स्ट्रीट वेंडर पहचान पत्र", text: "वेंडिंग प्रमाण पत्र कैसे बनवाएं" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "₹20 लाख तक कारोबारी लोन" },
    { href: "/service/pm-vishwakarma-yojana.html", emoji: "🔨", title: "पीएम विश्वकर्मा", text: "कारीगरों को लोन और टूलकिट" },
    { href: "/service/pm-jan-dhan-yojana.html", emoji: "🏦", title: "जन धन खाता", text: "बचत खाता खोलें" },
    { href: "/service/e-shram-card.html", emoji: "👷", title: "ई-श्रम कार्ड", text: "असंगठित कामगारों का पंजीकरण" },
  ],
  aside: [
    { href: "https://pmsvanidhi.mohua.gov.in/", label: "🛒 PM SVANidhi पर आवेदन" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
