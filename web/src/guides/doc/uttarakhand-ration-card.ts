import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026): fcs.uk.gov.in (Issuance of new Ration Card,
// Modification in Ration Card, Renewal or Duplicate, Transfer / Surrender
// Ration Card pages — urban DSO / rural BDO-GPO process, Supply Inspector
// verification, fee ₹5, supporting documents, 5-year validity and 2-month
// renewal window; home page: NFSA (AAY+PHH) and State Food Yojana; Contact
// Us: Commissioner 0135-2780765), nfsa.gov.in/State/UK (online apply link
// rcmspds.uk.gov.in public login, FEAST "Find RC details", Know Your Ration
// Entitlement report, CM Helpline grievance system, helpdesk 1800-180-2000 and
// 1800-180-4188, 13,82,647 ration cards: AAY 1,83,233, PHH 11,99,414; 8,859
// FPS), indiacode.gov.in (NFSA 2013 s.3: PHH 5 kg/person, AAY 35 kg/household;
// s.13: eldest woman 18+ is head of household), dfpd.gov.in (toll-free 1967).
// The state RCMS/FEAST/Dhaanyapurti portals were not reachable from here, so
// their menu names beyond the NFSA links are not described. Old page's
// "Apuni Sarkar" and Devbhoomi CSC claims could not be verified and were dropped.
export const uttarakhandRationCard: DocGuide = {
  state: { slug: "uttarakhand", hi: "उत्तराखंड" },
  doc: "ration-card",
  docHi: "राशन कार्ड",
  title: "Uttarakhand Ration Card 2026: Apply & Status | SarkariSewa India",
  description: "उत्तराखंड राशन कार्ड 2026: AAY, PHH (NFSA) और राज्य खाद्य योजना, नए कार्ड का आवेदन (शहर में DSO, गांव में BDO), ₹5 फीस, ज़रूरी कागज़, नाम जोड़ना, ट्रांसफर/सरेंडर, रिन्यूअल और ऑनलाइन RCMS/FEAST पर कार्ड की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "उत्तराखंड राशन कार्ड 2026: नया कार्ड, ज़रूरी कागज़, नाम जोड़ना, ट्रांसफर और ऑनलाइन जानकारी",
  lead: "उत्तराखंड में राशन कार्ड खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग बनाता है। शहर में ज़िला पूर्ति कार्यालय (DSO) और गांव में खंड विकास (BDO) कार्यालय में मुफ्त फॉर्म भरकर आवेदन होता है; पूर्ति निरीक्षक घर जाकर जांच करता है और कार्ड की फीस ₹5 है। ऑनलाइन आवेदन के लिए राष्ट्रीय खाद्य सुरक्षा पोर्टल राज्य के RCMS पोर्टल (rcmspds.uk.gov.in) का लिंक देता है।",
  facts: [
    ["फीस", "₹5 (नया, संशोधन, डुप्लीकेट, सरेंडर)"],
    ["कार्ड की अवधि", "5 साल; खत्म होने के बाद 2 महीने में रिन्यूअल"],
    ["राज्य में कार्ड", "13.83 लाख (AAY 1.83 लाख, PHH 11.99 लाख)"],
    ["हेल्पलाइन", "1800-180-2000, 1800-180-4188"],
  ],
  sections: [
    {
      id: "prakar",
      title: "उत्तराखंड में राशन कार्ड के प्रकार",
      intro: "विभाग के अनुसार राज्य में राष्ट्रीय खाद्य सुरक्षा योजना (NFSA: AAY + PHH) और राज्य खाद्य योजना (SFY) चलती है।",
      table: {
        head: ["कार्ड", "किसके लिए", "अनाज (NFSA कानून के अनुसार)"],
        rows: [
          ["<strong>अंत्योदय अन्न योजना (AAY)</strong>", "सबसे गरीब परिवार", "<strong>35 किलो प्रति परिवार</strong> हर महीने"],
          ["<strong>प्राथमिक परिवार (PHH)</strong>", "राज्य द्वारा चिह्नित पात्र परिवार", "<strong>5 किलो प्रति व्यक्ति</strong> हर महीने"],
          ["<strong>राज्य खाद्य योजना (SFY)</strong>", "NFSA से बाहर के परिवार, राज्य योजना के तहत", "राज्य सरकार के आवंटन के अनुसार"],
        ],
      },
      callout: { kind: "info", html: 'आपके कार्ड पर इस महीने कितना अनाज मिलेगा, यह NFSA पोर्टल के उत्तराखंड पेज पर <strong>"Know Your Ration Entitlement"</strong> रिपोर्ट (FEAST उत्तराखंड) में देख सकते हैं।' },
    },
    {
      id: "kagaz",
      title: "नए राशन कार्ड के लिए ज़रूरी कागज़",
      intro: "विभाग की वेबसाइट पर दी गई सूची (जिस पर लागू हो):",
      list: [
        "<strong>पते का प्रमाण:</strong> पानी, बिजली या टेलीफोन का बिल",
        "<strong>किराए पर रहते हैं तो</strong> किराए की रसीद",
        "<strong>दूसरे शहर/ग्राम पंचायत से आए हैं तो</strong> पुराने इलाके का <strong>सरेंडर सर्टिफिकेट</strong> और पिछले निवास का राशन कार्ड",
        "<strong>सरकारी/अर्ध-सरकारी कर्मचारी:</strong> संस्था प्रमुख से पता और परिवार के सदस्यों की संख्या का प्रमाण",
        "<strong>पंजीकृत औद्योगिक संस्थान के कर्मचारी:</strong> संस्था प्रमुख/रिपोर्टिंग अधिकारी से पता और सदस्यों की संख्या का प्रमाण",
        "<strong>शहर में पढ़ रहे छात्र:</strong> संस्था प्रमुख से पढ़ाई और रहने के पते का प्रमाण",
        "परिवार के मुखिया का फोटो (कार्ड पर लगता है)",
      ],
      callout: { kind: "warn", html: "राष्ट्रीय खाद्य सुरक्षा कानून की धारा 13 के अनुसार NFSA राशन कार्ड में परिवार की <strong>18 साल या उससे बड़ी सबसे बुज़ुर्ग महिला</strong> परिवार की मुखिया होती है। ऐसी महिला न हो तो सबसे बड़ा पुरुष सदस्य मुखिया होता है।" },
    },
    {
      id: "avedan",
      title: "नया राशन कार्ड कैसे बनवाएं",
      table: {
        head: ["कदम", "शहर (Urban)", "गांव (Rural)"],
        rows: [
          ["1. फॉर्म", "ज़िला पूर्ति कार्यालय (DSO) के काउंटर पर मुफ्त; विभाग की वेबसाइट से भी डाउनलोड", "खंड विकास कार्यालय (BDO) में मुफ्त; वेबसाइट से भी डाउनलोड"],
          ["2. जमा", "कागज़ लगाकर DSO कार्यालय के लिपिक को", "BDO कार्यालय में ग्राम पंचायत अधिकारी (GPO) को"],
          ["3. पावती", "लिपिक जांचकर पावती देता है और आवेदन पूर्ति निरीक्षक (SI) को भेजता है", "GPO जांचकर पावती देता है"],
          ["4. जांच", "SI कागज़ जांचता है और घर जाकर सत्यापन करता है", "घर जाकर विवरण का सत्यापन"],
          ["5. कार्ड", "मंज़ूरी के बाद कार्ड बनता है, यूनिट तय होती हैं, मुखिया का फोटो लगता है और नज़दीकी राशन दुकान (FPS) से जोड़ा जाता है", "GPO कार्ड बनाता है और नज़दीकी FPS से जोड़ता है"],
          ["6. डिलीवरी", "पावती दिखाने पर लिपिक कार्ड देता है", "पावती दिखाने पर GPO कार्ड देता है"],
        ],
      },
      callout: { kind: "ok", html: '<strong>ऑनलाइन आवेदन:</strong> NFSA पोर्टल के उत्तराखंड पेज पर "Don\'t have Ration Card in Uttarakhand? Apply here online" के साथ राज्य के RCMS पोर्टल का <a href="https://rcmspds.uk.gov.in/PublicLogin/frmPublicLogin.aspx" target="_blank" rel="noopener nofollow">Public Login</a> लिंक दिया है। ऑनलाइन फॉर्म में दिक्कत हो तो <a href="/service/csc-locator/uttarakhand.html">नज़दीकी CSC</a> की मदद लें।' },
    },
    {
      id: "badlav",
      title: "नाम जोड़ना-हटाना, पता बदलना, रिन्यूअल और ट्रांसफर",
      table: {
        head: ["काम", "क्या करें", "फीस"],
        rows: [
          ["<strong>सदस्य जोड़ना/हटाना या विवरण बदलना</strong>", "फॉर्म और कागज़ शहर में DSO के लिपिक को, गांव में GPO को दें। नया सदस्य (बच्चा) जोड़ने के लिए <strong>जन्म प्रमाण पत्र</strong>; पता बदलने पर पते का प्रमाण। SI/GPO रजिस्टर से मिलान कर ज़रूरत हो तो घर आकर जांच करता है।", "₹5"],
          ["<strong>रिन्यूअल या डुप्लीकेट</strong>", "प्रक्रिया नए कार्ड जैसी; पुराना कार्ड फॉर्म के साथ लगाएं। कार्ड <strong>5 साल</strong> के लिए होता है; खत्म होने के <strong>2 महीने</strong> में रिन्यू न किया तो रजिस्टर से नाम हट जाता है।", "₹5"],
          ["<strong>उसी शहर/पंचायत में दुकान बदलना</strong>", "DSO/GPO को आवेदन; SI/GPO रजिस्टर में FPS बदलकर नया कार्ड देता है।", "₹5"],
          ["<strong>दूसरे शहर/पंचायत में जाना</strong>", "पुराने इलाके के DSO (गांव में GPO) को कार्ड सौंपकर <strong>सरेंडर सर्टिफिकेट</strong> लें, फिर नए इलाके में उसी के साथ नया कार्ड बनवाएं।", "₹5"],
        ],
      },
    },
    {
      id: "online-jankari",
      title: "कार्ड की जानकारी ऑनलाइन कहां देखें",
      list: [
        '<strong>राशन कार्ड का विवरण:</strong> FEAST उत्तराखंड का <a href="https://feast.uk.gov.in/FrmFindRcDetails.aspx" target="_blank" rel="noopener nofollow">Find RC Details</a> पेज (NFSA पोर्टल पर दिया लिंक)।',
        '<strong>ज़िलेवार कार्ड संख्या, राशन दुकान (FPS) की सूची और हक:</strong> <a href="https://nfsa.gov.in/State/UK" target="_blank" rel="noopener nofollow">nfsa.gov.in/State/UK</a> पर "District-wise RC Count", "Fair Price Shop Details" और "Know Your Ration Entitlement" रिपोर्ट।',
        '<strong>दुकान पर ऑनलाइन बिक्री का रिकॉर्ड:</strong> <a href="https://uk.dhaanyapurti.nic.in/" target="_blank" rel="noopener nofollow">uk.dhaanyapurti.nic.in</a> (Web Based Online FPS Sale)।',
      ],
      callout: { kind: "info", html: "ये राज्य पोर्टल कभी-कभी धीमे खुलते हैं या बाहर से नहीं खुलते; ऐसे में थोड़ी देर बाद दोबारा कोशिश करें या DSO/BDO कार्यालय से पूछें।" },
    },
    {
      id: "shikayat",
      title: "राशन न मिले या दुकानदार कम दे तो शिकायत",
      steps: [
        "<strong>राज्य हेल्पडेस्क:</strong> <a href=\"tel:18001802000\">1800-180-2000</a> या <a href=\"tel:18001804188\">1800-180-4188</a> (NFSA पोर्टल पर दिए उत्तराखंड के नंबर)।",
        '<strong>ऑनलाइन शिकायत:</strong> PDS शिकायतों के लिए राज्य की व्यवस्था <a href="https://cmhelpline.uk.gov.in/" target="_blank" rel="noopener nofollow">CM हेल्पलाइन उत्तराखंड</a> है।',
        "<strong>ज़िला स्तर:</strong> अपने ज़िला पूर्ति अधिकारी (DSO) से मिलें। राज्य स्तर पर आयुक्त, खाद्य एवं नागरिक आपूर्ति, देहरादून: 0135-2780765।",
        "<strong>केंद्र सरकार:</strong> खाद्य एवं सार्वजनिक वितरण विभाग का टोल-फ्री नंबर <a href=\"tel:1967\">1967</a>।",
      ],
    },
  ],
  official: [
    { href: "https://fcs.uk.gov.in/", title: "खाद्य, नागरिक आपूर्ति एवं उपभोक्ता मामले विभाग, उत्तराखंड" },
    { href: "https://fcs.uk.gov.in/issuance-of-new-ration-card/", title: "नया राशन कार्ड: प्रक्रिया, फीस और कागज़" },
    { href: "https://rcmspds.uk.gov.in/", title: "RCMS उत्तराखंड: ऑनलाइन आवेदन (Public Login)" },
    { href: "https://nfsa.gov.in/State/UK", title: "NFSA पोर्टल: उत्तराखंड की रिपोर्ट और लिंक" },
    { href: "https://cmhelpline.uk.gov.in/", title: "CM हेल्पलाइन उत्तराखंड (शिकायत)" },
    { href: "tel:18001802000", title: "उत्तराखंड PDS हेल्पडेस्क", note: "1800-180-2000, 1800-180-4188" },
  ],
  faq: [
    { q: "उत्तराखंड में नया राशन कार्ड कैसे बनवाएं?", a: "शहर में ज़िला पूर्ति कार्यालय (DSO) और गांव में BDO कार्यालय से मुफ्त फॉर्म लें (वेबसाइट से भी डाउनलोड होता है), कागज़ लगाकर जमा करें और पावती लें। पूर्ति निरीक्षक/GPO घर आकर जांच करता है; मंज़ूरी के बाद पावती दिखाकर कार्ड लें। फीस ₹5 है। ऑनलाइन आवेदन के लिए RCMS पोर्टल (rcmspds.uk.gov.in) का Public Login है।" },
    { q: "उत्तराखंड राशन कार्ड बनवाने की फीस कितनी है?", a: "विभाग की वेबसाइट के अनुसार नया कार्ड, संशोधन, रिन्यूअल/डुप्लीकेट और ट्रांसफर/सरेंडर, हर सेवा की फीस ₹5 है। फॉर्म मुफ्त मिलता है।" },
    { q: "राशन कार्ड में बच्चे का नाम कैसे जोड़ें?", a: "संशोधन का फॉर्म भरकर बच्चे के जन्म प्रमाण पत्र के साथ शहर में DSO के लिपिक को या गांव में GPO को जमा करें। जांच के बाद रजिस्टर और कार्ड में नाम जुड़ जाता है। फीस ₹5।" },
    { q: "उत्तराखंड में राशन कार्ड कितने साल के लिए होता है?", a: "विभाग के अनुसार कार्ड 5 साल के लिए होता है। अवधि खत्म होने के बाद 2 महीने में रिन्यू न किया तो कार्ड की एंट्री रजिस्टर से हटा दी जाती है।" },
    { q: "दूसरे ज़िले में शिफ्ट होने पर राशन कार्ड का क्या करें?", a: "पुराने इलाके के DSO (गांव में GPO) को कार्ड सौंपकर सरेंडर सर्टिफिकेट लें और नए इलाके में उसी सर्टिफिकेट के साथ नए कार्ड का आवेदन करें।" },
    { q: "AAY और PHH कार्ड पर कितना राशन मिलता है?", a: "राष्ट्रीय खाद्य सुरक्षा कानून के अनुसार AAY परिवार को 35 किलो प्रति परिवार और PHH को 5 किलो प्रति व्यक्ति हर महीने अनाज मिलता है। अपना हक NFSA पोर्टल की Know Your Ration Entitlement रिपोर्ट में देखें।" },
    { q: "राशन न मिलने की शिकायत कहां करें?", a: "उत्तराखंड PDS हेल्पडेस्क 1800-180-2000 / 1800-180-4188, CM हेल्पलाइन (cmhelpline.uk.gov.in), अपना ज़िला पूर्ति अधिकारी, या केंद्र का टोल-फ्री 1967।" },
  ],
  related: [
    { href: "/states/uttarakhand-income-certificate.html", emoji: "💰", title: "उत्तराखंड आय प्रमाण पत्र", text: "योजनाओं के लिए आय का प्रमाण" },
    { href: "/states/uttarakhand-domicile-certificate.html", emoji: "🏠", title: "उत्तराखंड स्थायी निवास", text: "निवास प्रमाण पत्र" },
    { href: "/states/uttarakhand-caste-certificate.html", emoji: "🪪", title: "उत्तराखंड जाति प्रमाण पत्र", text: "SC/ST/OBC प्रमाण पत्र" },
    { href: "/states/uttarakhand-birth-certificate.html", emoji: "👶", title: "उत्तराखंड जन्म प्रमाण पत्र", text: "बच्चे का नाम जोड़ने के लिए" },
    { href: "/states/uttarakhand-senior-citizen-card.html", emoji: "👴", title: "उत्तराखंड सीनियर सिटीजन कार्ड", text: "60+ पहचान पत्र और पेंशन" },
    { href: "/service/csc-locator/uttarakhand.html", emoji: "📍", title: "उत्तराखंड CSC सेंटर", text: "ज़िलेवार नज़दीकी केंद्र" },
  ],
  aside: [
    { href: "https://rcmspds.uk.gov.in/PublicLogin/frmPublicLogin.aspx", label: "📝 ऑनलाइन आवेदन (RCMS)" },
    { href: "/service/csc-locator/uttarakhand.html", label: "📍 नज़दीकी CSC" },
  ],
};
