import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/pm-vishwakarma-yojana.html and /service/pm-vishwakarma-yojana-apply.html,
// so this post takes the "₹15,000 toolkit: what it is, when it comes, and
// common problems" angle and links there for full details.
// Sources (checked 16 Oct 2026):
// - Scheme facts reused from web/src/guides/doc/pm-vishwakarma-yojana.ts and
//   pm-vishwakarma-yojana-apply.ts (myScheme "pmv", india.gov.in spotlight,
//   PIB 3-year release reports 17 Sep 2026: MSME ministry, 18 trades, 18+,
//   one per family, no PMEGP/PM SVANidhi/Mudra loan in 5 years, CSC-only
//   registration with Aadhaar biometric, 3-stage verification, ₹500/day
//   stipend, Basic Training 5-7 days, toolkit up to ₹15,000 e-voucher,
//   loans ₹1 lakh + ₹2 lakh at 5%, scheme to FY 2027-28).
// - Toolkit: Rajya Sabha answer PQ 266 (2 Dec 2024, rsdebate.nic.in):
//   toolkit delivered to the beneficiary's doorstep, e-voucher redeemed at
//   delivery. Sources differ on whether the voucher is issued at the start or
//   after completion of basic training, so the page says "linked to basic
//   training". Voucher is e-RUPI, only for tools, not cash (IIFL explainer,
//   scheme summaries).
// Old title was cut off ("टूलकिट योजना और"); completed from its h1.
// Old page said you can apply online yourself; registration is via CSC only.

const ext = (href: string, text: string) => `<a href="${href}" target="_blank" rel="noopener nofollow">${text}</a>`;
const PORTAL = ext("https://pmvishwakarma.gov.in/", "pmvishwakarma.gov.in");

export const pmVishwakarmaYojana2026ToolkitRegistration: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "PM विश्वकर्मा टूलकिट और रजिस्ट्रेशन" },
  ],
  docHi: "PM विश्वकर्मा टूलकिट",
  title: "PM Vishwakarma Yojana 2026: टूलकिट योजना और ऑनलाइन रजिस्ट्रेशन गाइड",
  description: "पीएम विश्वकर्मा योजना में ₹15,000 का टूलकिट ई-वाउचर क्या है, कब और कैसे मिलता है, CSC पर रजिस्ट्रेशन, पात्रता, कागज़ और टूलकिट न मिले तो क्या करें।",
  published: "2026-08-23",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "PM विश्वकर्मा टूलकिट 2026: ₹15,000 का ई-वाउचर कैसे मिलता है, रजिस्ट्रेशन और आम दिक्कतें",
  lead: "पीएम विश्वकर्मा योजना में मंज़ूर कारीगरों को औज़ार खरीदने के लिए ₹15,000 तक का टूलकिट ई-वाउचर मिलता है। यह नकद पैसा नहीं है; इससे सिर्फ तय औज़ार मिलते हैं, जो घर तक पहुंचाए जाते हैं और डिलीवरी के समय वाउचर इस्तेमाल होता है। टूलकिट बुनियादी प्रशिक्षण से जुड़ा है, इसलिए पहले CSC पर रजिस्ट्रेशन, तीन स्तर की जांच और प्रशिक्षण ज़रूरी है।",
  facts: [
    ["टूलकिट", "₹15,000 तक का ई-वाउचर (नकद नहीं)"],
    ["कब मिलता है", "मंज़ूरी के बाद, बुनियादी प्रशिक्षण के साथ"],
    ["रजिस्ट्रेशन", "सिर्फ CSC पर, मुफ्त"],
    ["कौन", "18 पारंपरिक कामों के 18+ कारीगर, परिवार से एक"],
  ],
  sections: [
    {
      id: "toolkit-kya",
      title: "टूलकिट ई-वाउचर क्या है",
      list: [
        "<strong>₹15,000 तक</strong> का डिजिटल वाउचर (e-RUPI), जो आपके काम (जैसे बढ़ई, दर्जी, नाई) के औज़ारों के लिए होता है।",
        "इससे <strong>सिर्फ औज़ार</strong> मिलते हैं। कच्चा माल, दुकान का किराया या मज़दूरी इससे नहीं दी जा सकती, और इसे नकद में नहीं बदला जा सकता।",
        "संसद में सरकार के जवाब (दिसंबर 2024) के अनुसार टूलकिट <strong>लाभार्थी के घर तक पहुंचाया जाता है</strong> और डिलीवरी के समय ही ई-वाउचर इस्तेमाल होता है।",
        "प्रशिक्षण के दिनों का ₹500 रोज़ का भत्ता अलग है, जो बैंक खाते में आता है।",
      ],
    },
    {
      id: "kram",
      title: "रजिस्ट्रेशन से टूलकिट तक का क्रम",
      steps: [
        "<a href=\"/tools/csc-locator.html\">नज़दीकी CSC</a> पर आधार, आधार से जुड़ा मोबाइल, बैंक खाता और राशन कार्ड लेकर जाएं। संचालक आधार बायोमेट्रिक से रजिस्ट्रेशन करता है।",
        "जांच तीन स्तर पर: ग्राम पंचायत/शहरी निकाय → ज़िला कार्यान्वयन समिति → स्क्रीनिंग कमेटी।",
        "मंज़ूरी के बाद पीएम विश्वकर्मा प्रमाण पत्र और ID कार्ड मिलता है।",
        "<strong>बुनियादी प्रशिक्षण</strong> (5-7 दिन) की सूचना आती है; इसमें शामिल हों।",
        "प्रशिक्षण के साथ टूलकिट ई-वाउचर जारी होता है और औज़ार घर पहुंचाए जाते हैं। उसके बाद पहली किस्त के लोन (₹1 लाख तक, 5% ब्याज) का आवेदन हो सकता है।",
      ],
      callout: { kind: "warn", html: "रजिस्ट्रेशन सिर्फ CSC से होता है और <strong>मुफ्त</strong> है। मोबाइल से खुद \"ऑनलाइन फॉर्म\" भरवाने या टूलकिट/लोन दिलाने के नाम पर पैसे मांगने वालों से बचें। पूरी प्रक्रिया: <a href=\"/service/pm-vishwakarma-yojana-apply.html\">पीएम विश्वकर्मा आवेदन गाइड</a>।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "18 पारंपरिक कामों में से किसी में हाथ और औज़ार से काम करने वाला स्वरोज़गार कारीगर (जैसे बढ़ई, लोहार, सुनार, कुम्हार, मोची, राजमिस्त्री, नाई, धोबी, दर्जी, माला बनाने वाले)।",
        "उम्र 18 साल या ज़्यादा; परिवार से सिर्फ एक व्यक्ति।",
        "पिछले 5 साल में PMEGP, PM SVANidhi या मुद्रा से स्वरोज़गार लोन न लिया हो।",
        "आप या परिवार का कोई सदस्य सरकारी नौकरी में न हो।",
      ],
    },
    {
      id: "dikkat",
      title: "टूलकिट से जुड़ी आम दिक्कतें",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["मंज़ूरी के बाद भी टूलकिट नहीं आया", "पहले देखें कि बुनियादी प्रशिक्षण पूरा हुआ या नहीं। फिर प्रशिक्षण केंद्र और CSC से वाउचर की स्थिति पूछें।"],
          ["आवेदन पंचायत/ज़िला स्तर पर अटका", "ग्राम पंचायत या नगर निकाय कार्यालय से संपर्क करें; जांच वहीं से आगे बढ़ती है।"],
          ["रिजेक्ट हो गया", "आम कारण: परिवार से पहले रजिस्ट्रेशन, 5 साल में दूसरी योजना का लोन, या काम 18 में से न होना।"],
          ["कोई टूलकिट के बदले नकद देने की बात करे", "मना करें। वाउचर सिर्फ औज़ारों के लिए है; ऐसी शिकायत पोर्टल पर करें।"],
          ["भत्ता नहीं आया", "बैंक खाता आधार से जुड़ा और चालू हो; प्रशिक्षण केंद्र से हाज़िरी की पुष्टि करें।"],
        ],
      },
      html: `<p>स्टेटस और शिकायत: ${PORTAL} पर लॉगिन करके या उसी CSC से।</p>`,
    },
  ],
  official: [
    { href: "https://pmvishwakarma.gov.in/", title: "पीएम विश्वकर्मा पोर्टल", note: "स्टेटस, संपर्क और शिकायत" },
    { href: "https://www.myscheme.gov.in/schemes/pmv", title: "myScheme: PM Vishwakarma" },
    { href: "https://msme.gov.in/", title: "MSME मंत्रालय" },
  ],
  faq: [
    { q: "क्या ₹15,000 नकद खाते में आते हैं?", a: "नहीं। यह औज़ारों के लिए ई-वाउचर है; औज़ार घर पहुंचाए जाते हैं और डिलीवरी पर वाउचर इस्तेमाल होता है।" },
    { q: "क्या मोबाइल से खुद रजिस्ट्रेशन कर सकते हैं?", a: "नहीं। रजिस्ट्रेशन CSC पर आधार बायोमेट्रिक से होता है। पोर्टल पर लॉगिन करके आप स्टेटस देख सकते हैं।" },
    { q: "टूलकिट कब मिलेगा?", a: "तीन स्तर की जांच में मंज़ूरी और बुनियादी प्रशिक्षण के साथ। प्रशिक्षण में शामिल न होने पर टूलकिट और लोन आगे नहीं बढ़ते।" },
    { q: "क्या रजिस्ट्रेशन में पैसे लगते हैं?", a: "नहीं, रजिस्ट्रेशन मुफ्त है।" },
    { q: "लोन कितना मिलता है?", a: "बिना गारंटी, 5% ब्याज पर पहली किस्त ₹1 लाख तक और शर्तें पूरी करने पर दूसरी किस्त ₹2 लाख तक।" },
  ],
  related: [
    { href: "/service/pm-vishwakarma-yojana.html", emoji: "🛠️", title: "पीएम विश्वकर्मा योजना", text: "18 काम, लाभ, लोन" },
    { href: "/service/pm-vishwakarma-yojana-apply.html", emoji: "📝", title: "CSC पर रजिस्ट्रेशन", text: "कागज़, जांच, स्टेटस" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "छोटे कारोबार का लोन" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "मुफ्त MSME पंजीकरण" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "रजिस्ट्रेशन यहीं होगा" },
  ],
  aside: [
    { href: "https://pmvishwakarma.gov.in/", label: "🛠️ पीएम विश्वकर्मा पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC खोजें" },
  ],
};
