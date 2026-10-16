import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 15 Oct 2026, via search extracts; pmvishwakarma.gov.in was
// not reachable from here): india.gov.in spotlight and myScheme "pmv"
// (Ministry of MSME; ₹1 lakh + ₹2 lakh loan tranches at 5% with subvention
// up to 8%; toolkit up to ₹15,000 e-voucher; ₹500/day stipend; Basic
// Training 5-7 days, Advanced 15 days+; second tranche conditions); scheme
// summaries (CSC-only registration with Aadhaar biometric by VLE; three-stage
// verification Gram Panchayat/ULB -> District Implementation Committee ->
// Screening Committee; 18+, one per family, no PMEGP/PM SVANidhi/Mudra loan
// in last 5 years); PIB release reports for 3 years (17 Sep 2026: ~30 lakh
// registered, scheme to FY 2027-28). Helpline numbers conflict between
// sources (NSDC 1800-569-1565 for training vs aggregator numbers), so the
// reader is pointed to the portal's contact page instead.
export const pmVishwakarmaYojanaApply: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम विश्वकर्मा आवेदन" },
  ],
  docHi: "पीएम विश्वकर्मा आवेदन",
  promo: gstinPromo,
  title: "पीएम विश्वकर्मा योजना 2026 (PM Vishwakarma Scheme)",
  description: "18 पारंपरिक कामों के कारीगरों के लिए ₹15,000 टूलकिट व ₹3 लाख 5% लोन। पीएम विश्वकर्मा योजना 2026 में CSC पर रजिस्ट्रेशन, ज़रूरी दस्तावेज़, जांच के चरण और स्टेटस।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम विश्वकर्मा योजना 2026: CSC पर रजिस्ट्रेशन, कागज़, जांच और स्टेटस",
  lead: "पीएम विश्वकर्मा योजना में आवेदन खुद मोबाइल से नहीं होता; नज़दीकी CSC (कॉमन सर्विस सेंटर) पर आधार बायोमेट्रिक से मुफ्त रजिस्ट्रेशन होता है। आवेदन ग्राम पंचायत/शहरी निकाय, ज़िला समिति और स्क्रीनिंग कमेटी तीन जगह जांचा जाता है। मंज़ूरी के बाद कारीगर को प्रमाण पत्र और ID, ₹500 रोज़ भत्ते के साथ प्रशिक्षण, ₹15,000 तक का टूलकिट ई-वाउचर और 5% ब्याज पर बिना गारंटी लोन (पहले ₹1 लाख, फिर ₹2 लाख) मिल सकता है।",
  facts: [
    ["कहां आवेदन", "नज़दीकी CSC (आधार बायोमेट्रिक)"],
    ["फीस", "रजिस्ट्रेशन मुफ्त"],
    ["जांच", "3 स्तर: पंचायत/ULB, ज़िला, स्क्रीनिंग कमेटी"],
    ["पोर्टल", '<a href="https://pmvishwakarma.gov.in/" target="_blank" rel="noopener nofollow">pmvishwakarma.gov.in</a>'],
  ],
  sections: [
    {
      id: "pehle",
      title: "आवेदन से पहले जांच लें",
      list: [
        "आप 18 पारंपरिक कामों (जैसे बढ़ई, लोहार, सुनार, कुम्हार, मोची, राजमिस्त्री, नाई, धोबी, दर्जी, माला बनाने वाले) में से किसी में <strong>हाथ से काम करने वाले स्वरोज़गार कारीगर</strong> हैं।",
        "उम्र <strong>18 साल या ज़्यादा</strong>।",
        "परिवार (पति, पत्नी, अविवाहित बच्चे) से <strong>किसी और ने पहले रजिस्ट्रेशन नहीं</strong> कराया।",
        "पिछले 5 साल में <strong>PMEGP, PM SVANidhi या मुद्रा</strong> से स्वरोज़गार लोन नहीं लिया।",
        "आप या परिवार का कोई सदस्य सरकारी नौकरी में नहीं।",
      ],
    },
    {
      id: "kagaz",
      title: "CSC पर क्या लेकर जाएं",
      list: [
        "<strong>आधार कार्ड</strong> और आधार से जुड़ा चालू मोबाइल नंबर (बायोमेट्रिक के लिए खुद जाना ज़रूरी)",
        "<strong>बैंक खाते</strong> की पासबुक/ब्यौरा",
        "<strong>राशन कार्ड</strong> (परिवार की जानकारी के लिए); राशन कार्ड न हो तो परिवार के सदस्यों के आधार",
        "जाति प्रमाण पत्र (अगर लागू हो) और अपने काम की जानकारी",
      ],
    },
    {
      id: "steps",
      title: "रजिस्ट्रेशन के चरण",
      steps: [
        '<a href="/tools/csc-locator.html">नज़दीकी CSC</a> पर जाएं और पीएम विश्वकर्मा रजिस्ट्रेशन के लिए कहें।',
        "CSC संचालक मोबाइल OTP और आधार बायोमेट्रिक (e-KYC) से आपकी पहचान जांचता है।",
        "फॉर्म में नाम, पता, परिवार, बैंक खाता और अपना काम (18 में से एक) भरा जाता है। सही काम चुनें, बाद में बदलना मुश्किल होता है।",
        "फॉर्म सबमिट होने पर आवेदन संख्या मिलती है; इसकी पावती संभालकर रखें।",
        "<strong>पहला चरण:</strong> ग्राम पंचायत प्रमुख या शहरी निकाय (ULB) आवेदन जांचता है।",
        "<strong>दूसरा चरण:</strong> ज़िला कार्यान्वयन समिति जांच करती है। <strong>तीसरा चरण:</strong> स्क्रीनिंग कमेटी अंतिम मंज़ूरी देती है।",
        "मंज़ूरी के बाद पीएम विश्वकर्मा प्रमाण पत्र और ID कार्ड मिलता है, फिर प्रशिक्षण की सूचना आती है।",
      ],
      callout: { kind: "warn", html: "CSC पर रजिस्ट्रेशन <strong>मुफ्त</strong> है। कोई रजिस्ट्रेशन, टूलकिट या लोन दिलाने के नाम पर पैसे मांगे तो न दें; पोर्टल पर दी गई शिकायत व्यवस्था में शिकायत करें।" },
    },
    {
      id: "baad-mein",
      title: "मंज़ूरी के बाद: प्रशिक्षण, टूलकिट और लोन",
      steps: [
        "<strong>बुनियादी प्रशिक्षण</strong> (5-7 दिन, करीब 40 घंटे) में जाएं; हर दिन का ₹500 भत्ता मिलता है।",
        "प्रशिक्षण की शुरुआत में <strong>₹15,000 तक का टूलकिट ई-वाउचर</strong> मिलता है, जिससे तय जगह से औज़ार मिलते हैं।",
        "प्रशिक्षण के बाद पोर्टल से <strong>पहली किस्त का लोन (₹1 लाख तक, 18 महीने)</strong> का आवेदन बैंक को जाता है। बिना गारंटी, कारीगर के लिए 5% ब्याज।",
        "पहली किस्त ठीक से चुकाने और डिजिटल लेनदेन अपनाने या उन्नत प्रशिक्षण लेने पर <strong>दूसरी किस्त (₹2 लाख तक, 30 महीने)</strong>।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और आम दिक्कतें",
      list: [
        '<strong>स्टेटस:</strong> <a href="https://pmvishwakarma.gov.in/" target="_blank" rel="noopener nofollow">pmvishwakarma.gov.in</a> पर लॉगिन करके या उसी CSC से आवेदन का चरण देखें।',
        "<strong>पंचायत स्तर पर अटका:</strong> ग्राम पंचायत/नगर निकाय कार्यालय से संपर्क करें; जांच वहीं से आगे बढ़ती है।",
        "<strong>रिजेक्ट हुआ:</strong> कारण देखें। आम कारण हैं: परिवार से पहले रजिस्ट्रेशन, 5 साल में दूसरी योजना का लोन, या काम 18 में से न होना।",
        "<strong>टूलकिट या भत्ता नहीं मिला:</strong> प्रशिक्षण केंद्र और पोर्टल की शिकायत व्यवस्था में पूछें; बैंक खाता आधार से जुड़ा हो।",
        "<strong>बैंक लोन नहीं दे रहा:</strong> पोर्टल पर लोन आवेदन का स्टेटस देखें, फिर बैंक शाखा और ज़िला उद्योग केंद्र (DIC) से संपर्क करें।",
      ],
    },
  ],
  official: [
    { href: "https://pmvishwakarma.gov.in/", title: "पीएम विश्वकर्मा पोर्टल", note: "स्टेटस, संपर्क और शिकायत" },
    { href: "https://msme.gov.in/", title: "MSME मंत्रालय" },
    { href: "https://www.myscheme.gov.in/schemes/pmv", title: "myScheme: PM Vishwakarma" },
  ],
  faq: [
    { q: "पीएम विश्वकर्मा का फॉर्म कहां भरें?", a: "नज़दीकी CSC पर। रजिस्ट्रेशन आधार बायोमेट्रिक से होता है, इसलिए आवेदक को खुद जाना होता है। रजिस्ट्रेशन मुफ्त है।" },
    { q: "आवेदन के बाद मंज़ूरी में कितना समय लगता है?", a: "कोई तय समय सरकार ने नहीं बताया है। आवेदन ग्राम पंचायत/ULB, ज़िला कार्यान्वयन समिति और स्क्रीनिंग कमेटी तीनों से पास होना होता है; स्टेटस पोर्टल पर देखें।" },
    { q: "क्या ₹15,000 नकद मिलते हैं?", a: "नहीं, टूलकिट के लिए ₹15,000 तक का ई-वाउचर मिलता है, जिससे औज़ार मिलते हैं। प्रशिक्षण के दिनों का ₹500 प्रति दिन भत्ता अलग है।" },
    { q: "लोन के लिए कुछ गिरवी रखना होगा?", a: "नहीं, लोन बिना गारंटी (collateral-free) है। पहली किस्त ₹1 लाख तक और दूसरी ₹2 लाख तक; कारीगर को 5% ब्याज देना होता है।" },
    { q: "क्या 2026 में भी रजिस्ट्रेशन हो रहा है?", a: "योजना 2027-28 तक के लिए मंज़ूर है। नए रजिस्ट्रेशन खुले हैं या नहीं और आपके काम/ज़िले की स्थिति क्या है, यह नज़दीकी CSC या पोर्टल पर पक्का करें।" },
  ],
  related: [
    { href: "/service/pm-vishwakarma-yojana.html", emoji: "🛠️", title: "पीएम विश्वकर्मा योजना", text: "लाभ, 18 काम और पात्रता" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "छोटे व्यवसाय के लिए लोन" },
    { href: "/service/pm-svanidhi.html", emoji: "🛒", title: "पीएम स्वनिधि", text: "रेहड़ी-पटरी वालों के लिए लोन" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "MSME पंजीकरण" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "रजिस्ट्रेशन यहीं होता है" },
  ],
  aside: [
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC खोजें" },
    { href: "https://pmvishwakarma.gov.in/", label: "🔗 स्टेटस देखें" },
  ],
};
