import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Not a tool page:
// the generator itself lives at /project-report/index.html (free, per its own
// page); this post explains what a bank project report contains and how to
// use one. Old claims not carried over: "bank-approved format of SBI/PNB/HDFC",
// Word/CMA export, "3x approval chance".
// Sources (checked 16 Oct 2026):
// - PMEGP (KVIC nodal agency; kviconline.gov.in not opened from here,
//   consistent secondary sources: ltfinance.com, cashfree.com, lendingkart.com,
//   iifl.com 2026): max project cost ₹50 lakh manufacturing / ₹20 lakh
//   service; own contribution 10% general, 5% special category; margin money
//   subsidy general 15% urban / 25% rural, special 25% urban / 35% rural;
//   bank loan = balance; EDP training and Class VIII condition for larger
//   projects (given only generally).
// - PM Mudra: reused from web/src/guides/doc/pm-mudra-yojana.ts (myScheme;
//   Shishu ≤₹50,000, Kishore ₹50,000-5 lakh, Tarun ₹5-10 lakh, Tarun Plus
//   ≤₹20 lakh; udyamimitra.in).
// - CGTMSE: reused from doc/cgstmse-loan-guarantee.ts (cover up to ₹10 crore
//   from 1 Apr 2025).

export const freeProjectReportGeneratorCreateBankReadyReportsInMinutesMsfh9bu60: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "प्रोजेक्ट रिपोर्ट" },
  ],
  docHi: "प्रोजेक्ट रिपोर्ट",
  title: "फ्री प्रोजेक्ट रिपोर्ट जनरेटर: मिनटों में बैंक-रेडी रिपोर्ट बनाएं",
  description: "PMEGP, मुद्रा या दूसरे बिज़नेस लोन के लिए प्रोजेक्ट रिपोर्ट में क्या-क्या होता है, सब्सिडी और अपना हिस्सा कैसे गिनें, और फ्री जनरेटर से रिपोर्ट कैसे बनाएं।",
  published: "2026-08-05",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "बैंक लोन के लिए प्रोजेक्ट रिपोर्ट: इसमें क्या होता है और फ्री में कैसे बनाएं",
  lead: "प्रोजेक्ट रिपोर्ट (DPR) एक दस्तावेज़ है जिसमें आपका काम, कुल लागत, पैसा कहां से आएगा, और अगले कुछ सालों की कमाई-खर्च का अनुमान लिखा होता है। बैंक इसी से तय करता है कि लोन चुकाया जा सकेगा या नहीं। PMEGP और बड़े मुद्रा लोन में यह ज़रूरी होती है। साइट का <a href=\"/project-report/index.html\">फ्री प्रोजेक्ट रिपोर्ट जनरेटर</a> लागत, सब्सिडी, EMI और DSCR जैसी गणनाएं अपने-आप करता है; पर आंकड़े आपके असली कोटेशन और अनुमान पर आधारित होने चाहिए।",
  facts: [
    ["किसके लिए", "PMEGP, मुद्रा, दूसरे MSME लोन"],
    ["PMEGP अधिकतम लागत", "विनिर्माण ₹50 लाख, सेवा ₹20 लाख"],
    ["मुद्रा अधिकतम", "₹20 लाख (तरुण प्लस)"],
    ["जनरेटर", '<a href="/project-report/index.html">फ्री, बिना पंजीकरण</a>'],
  ],
  sections: [
    {
      id: "hissa",
      title: "प्रोजेक्ट रिपोर्ट में क्या-क्या होता है",
      list: [
        "<strong>आवेदक की जानकारी:</strong> नाम, पता, शिक्षा, अनुभव, Udyam/GST नंबर (हो तो)।",
        "<strong>काम का विवरण:</strong> क्या बनाएंगे या कौन सी सेवा देंगे, जगह, ग्राहक कौन होंगे।",
        "<strong>प्रोजेक्ट की लागत:</strong> मशीनरी, फर्नीचर, शेड/दुकान का काम और कार्यशील पूंजी (कच्चा माल, वेतन, किराया)।",
        "<strong>पैसे का स्रोत:</strong> अपना हिस्सा, बैंक लोन और सब्सिडी (अगर योजना में है)।",
        "<strong>कमाई-खर्च का अनुमान:</strong> 3 से 5 साल की बिक्री, खर्च, लाभ और नकदी प्रवाह (cash flow)।",
        "<strong>लोन चुकाने की क्षमता:</strong> EMI तालिका, DSCR (कमाई से किस्त कितनी आसानी से चुकेगी) और ब्रेक-ईवन (कितनी बिक्री पर नुकसान खत्म)।",
      ],
    },
    {
      id: "pmegp",
      title: "PMEGP में पैसा कैसे बंटता है",
      intro: "PMEGP (प्रधानमंत्री रोज़गार सृजन कार्यक्रम) में बैंक लोन के साथ सरकार मार्जिन मनी सब्सिडी देती है। आम तौर पर बताई जाने वाली दरें:",
      table: {
        head: ["वर्ग", "अपना हिस्सा", "सब्सिडी (शहर)", "सब्सिडी (गांव)"],
        rows: [
          ["सामान्य", "10%", "15%", "25%"],
          ["विशेष (SC/ST, OBC, महिला, अल्पसंख्यक, दिव्यांग, पूर्व सैनिक आदि)", "5%", "25%", "35%"],
        ],
      },
      html: "<p><strong>उदाहरण:</strong> गांव में विशेष वर्ग का ₹10 लाख का प्रोजेक्ट: अपना हिस्सा ₹50,000, सब्सिडी ₹3.5 लाख, बाकी ₹6 लाख (और सब्सिडी की रकम सहित पूरा लोन) बैंक देता है। सब्सिडी आम तौर पर बैंक में तय अवधि के लिए जमा रहती है और शर्तें पूरी होने पर लोन में समायोजित होती है।</p>",
      callout: { kind: "warn", html: "बड़े प्रोजेक्ट में न्यूनतम 8वीं पास और EDP प्रशिक्षण जैसी शर्तें हैं। आवेदन से पहले <a href=\"https://www.kviconline.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">kviconline.gov.in</a> पर ताज़ा दिशानिर्देश देखें; दरें बदल सकती हैं।" },
    },
    {
      id: "kaise",
      title: "जनरेटर से रिपोर्ट कैसे बनाएं",
      steps: [
        "पहले मशीनरी, सामान और दुकान/शेड के काम के <strong>लिखित कोटेशन</strong> इकट्ठा करें।",
        "<a href=\"/project-report/index.html\">प्रोजेक्ट रिपोर्ट जनरेटर</a> खोलें और काम का नाम, जगह, कुल लागत और वर्ग भरें।",
        "बिक्री, कच्चे माल, वेतन और किराये का महीने का अनुमान डालें। अनुमान अपने इलाके के बाज़ार के हिसाब से रखें।",
        "नतीजे में सब्सिडी, बैंक लोन, EMI, DSCR और ब्रेक-ईवन देखें। DSCR बहुत कम आए तो लागत या लोन घटाकर दोबारा देखें।",
        "रिपोर्ट डाउनलोड/प्रिंट करें और बैंक या PMEGP पोर्टल के आवेदन के साथ लगाएं। बैंक अपने फॉर्मेट में अतिरिक्त जानकारी मांग सकता है।",
      ],
    },
    {
      id: "galti",
      title: "रिपोर्ट रिजेक्ट होने के आम कारण",
      list: [
        "बिक्री का अनुमान बहुत ज़्यादा, जो इलाके के बाज़ार से मेल नहीं खाता।",
        "मशीनरी का कोटेशन नहीं, या कोटेशन और रिपोर्ट की रकम अलग।",
        "कार्यशील पूंजी (कच्चा माल, शुरुआती खर्च) जोड़ना भूल जाना।",
        "योजना की शर्तें न देखना, जैसे PMEGP में अधिकतम लागत या मुद्रा में लोन की श्रेणी।",
        "पुराना लोन बकाया या खराब क्रेडिट स्कोर। आवेदन से पहले <a href=\"/service/credit-score-report.html\">क्रेडिट स्कोर</a> देख लें।",
      ],
      callout: { kind: "info", html: "प्रोजेक्ट रिपोर्ट बनवाने के लिए किसी एजेंट को बड़ी रकम न दें, और \"लोन पक्का\" जैसे वादों पर भरोसा न करें। लोन का फैसला सिर्फ बैंक करता है।" },
    },
  ],
  official: [
    { href: "https://www.kviconline.gov.in/", title: "KVIC: PMEGP ऑनलाइन आवेदन और दिशानिर्देश" },
    { href: "https://www.udyamimitra.in/", title: "Udyami Mitra (SIDBI)", note: "मुद्रा और दूसरे MSME लोन के लिए आवेदन" },
    { href: "https://www.mudra.org.in/", title: "MUDRA" },
    { href: "https://udyamregistration.gov.in/", title: "Udyam पंजीकरण", note: "मुफ्त MSME पंजीकरण" },
  ],
  faq: [
    { q: "क्या प्रोजेक्ट रिपोर्ट जनरेटर सच में फ्री है?", a: "हां, साइट का प्रोजेक्ट रिपोर्ट जनरेटर अभी मुफ्त है और बिना पंजीकरण चलता है। यह एक निजी टूल है; बैंक की मंज़ूरी की गारंटी नहीं देता।" },
    { q: "PMEGP में कितनी सब्सिडी मिलती है?", a: "आम तौर पर सामान्य वर्ग को शहर में 15% और गांव में 25%, विशेष वर्ग को शहर में 25% और गांव में 35% प्रोजेक्ट लागत पर। अपना हिस्सा सामान्य 10%, विशेष 5%।" },
    { q: "PMEGP में अधिकतम कितने का प्रोजेक्ट हो सकता है?", a: "विनिर्माण (manufacturing) में ₹50 लाख और सेवा/व्यापार में ₹20 लाख तक।" },
    { q: "मुद्रा लोन के लिए प्रोजेक्ट रिपोर्ट चाहिए?", a: "छोटे शिशु लोन में अक्सर साधारण बिज़नेस प्लान काफी होता है; किशोर और तरुण जैसे बड़े लोन में बैंक आम तौर पर प्रोजेक्ट रिपोर्ट मांगता है।" },
    { q: "DSCR क्या है?", a: "Debt Service Coverage Ratio: आपकी कमाई से साल की किस्तें कितनी बार चुक सकती हैं। 1 से ज़्यादा होना ज़रूरी है; बैंक आम तौर पर इससे काफी ऊपर चाहते हैं।" },
  ],
  related: [
    { href: "/project-report/index.html", emoji: "📊", title: "प्रोजेक्ट रिपोर्ट जनरेटर", text: "फ्री, सब्सिडी और DSCR की गणना" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "पीएम मुद्रा योजना", text: "₹20 लाख तक बिज़नेस लोन" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "Udyam पंजीकरण", text: "मुफ्त MSME पंजीकरण" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🛡️", title: "CGTMSE लोन गारंटी", text: "बिना जमानत लोन" },
    { href: "/service/credit-score-report.html", emoji: "📈", title: "क्रेडिट स्कोर", text: "लोन से पहले देखें" },
  ],
  aside: [
    { href: "/project-report/index.html", label: "📊 रिपोर्ट बनाएं (फ्री)" },
    { href: "/service/pm-mudra-yojana.html", label: "💼 मुद्रा लोन" },
  ],
};
