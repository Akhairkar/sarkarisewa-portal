import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; meraparivar.haryana.gov.in not reachable from
// the sandbox, search-result extracts used): cleartax.in and anantamias.com
// guides (Haryana Parivar Pehchan Authority, Mera Parivar portal
// meraparivar.haryana.gov.in, 8-digit Family ID, 9-character temporary ID
// starting with "T" for families outside Haryana applying for a state
// service, free creation/update, self mode or assisted mode via CSC/Saral
// Kendra; field-wise verified/not-verified status, verified fields locked);
// The Tribune (new online mechanism to correct PPP data; ADCs given power to
// update income after document verification; free help desks in districts;
// Hisar case of irregular PPP issue by some CSC owners; BPL benefits lost due
// to data errors); Punjab Kesari/IANS 19 May 2026 (CM Nayab Singh Saini:
// complete income verification through Gram Sabhas on priority). No official
// helpline number could be confirmed, so none is given.
export const hrParivarPehchanPatra: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "हरियाणा", href: "/states/haryana.html" },
    { label: "परिवार पहचान पत्र" },
  ],
  docHi: "परिवार पहचान पत्र",
  title: "परिवार पहचान पत्र (फैमिली आईडी / PPP)",
  description: "हरियाणा की 8-अंकों की फैमिली आईडी (परिवार पहचान पत्र), जिसमें हर सदस्य का विवरण दर्ज होता है। नई आईडी बनाना, सदस्य जोड़ना, आय/मोबाइल सुधार, आय सत्यापन और फैमिली आईडी नंबर खोजना।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "हरियाणा परिवार पहचान पत्र (Family ID / PPP): नई आईडी, सुधार और आय सत्यापन",
  lead: "परिवार पहचान पत्र (PPP) हरियाणा सरकार का पारिवारिक डेटाबेस है, जिसमें हर परिवार को 8 अंकों की फैमिली आईडी मिलती है और सभी सदस्यों का विवरण (आधार, उम्र, आय, बैंक, मोबाइल) दर्ज होता है। राज्य की ज़्यादातर योजनाएं, पेंशन, राशन (BPL) और प्रमाण पत्र इसी से जुड़े हैं। आईडी बनाना और सुधार करना मुफ्त है; यह मेरा परिवार पोर्टल (meraparivar.haryana.gov.in) पर खुद या CSC/सरल केंद्र से होता है।",
  facts: [
    ["विभाग", "हरियाणा परिवार पहचान प्राधिकरण (HPPA)"],
    ["पोर्टल", '<a href="https://meraparivar.haryana.gov.in/" target="_blank" rel="noopener nofollow">meraparivar.haryana.gov.in</a>'],
    ["आईडी", "8 अंक; राज्य से बाहर के परिवारों को \"T\" से शुरू होने वाली अस्थायी आईडी"],
    ["फीस", "बनाना और अपडेट करना मुफ्त"],
  ],
  sections: [
    {
      id: "kyon",
      title: "फैमिली आईडी किस काम आती है",
      list: [
        "बुढ़ापा, विधवा, दिव्यांग पेंशन जैसी सामाजिक सुरक्षा योजनाएं",
        "BPL/AAY राशन कार्ड (आय PPP में सत्यापित आय के आधार पर तय होती है)",
        "आय, जाति, निवास जैसे प्रमाण पत्र और सरल पोर्टल की सेवाएं",
        "छात्रवृत्ति, नौकरी में आवेदन और अन्य राज्य योजनाएं",
      ],
      callout: { kind: "warn", html: "PPP में गलत आय या गलत सदस्य दर्ज होने से BPL कार्ड और पेंशन कट सकती है। अपने परिवार का डेटा समय-समय पर जांचते रहें।" },
    },
    {
      id: "nayi-id",
      title: "नई फैमिली आईडी कैसे बनवाएं",
      steps: [
        '<a href="https://meraparivar.haryana.gov.in/" target="_blank" rel="noopener nofollow">meraparivar.haryana.gov.in</a> पर नया परिवार पंजीकरण (Family registration) चुनें, या नज़दीकी CSC / सरल केंद्र जाएं।',
        "परिवार के मुखिया का आधार और मोबाइल डालकर OTP से सत्यापन करें।",
        "हर सदस्य का आधार, नाम, जन्मतिथि, रिश्ता, शिक्षा, नौकरी/आय और बैंक विवरण भरें।",
        "ज़रूरी कागज़ अपलोड करें और फॉर्म सबमिट करें। पावती पर लिखा नंबर संभालें।",
        "सत्यापन के बाद 8 अंकों की फैमिली आईडी जारी होती है, जिसे पोर्टल से देखा/डाउनलोड किया जा सकता है।",
      ],
    },
    {
      id: "sudhar",
      title: "सदस्य जोड़ना, हटाना या जानकारी सुधारना",
      list: [
        "मोबाइल नंबर, पता, सदस्य जोड़ना/हटाना, बैंक विवरण जैसे बदलाव <strong>खुद (self mode)</strong> पोर्टल पर या <strong>CSC/सरल केंद्र (assisted mode)</strong> से कर सकते हैं।",
        "हर जानकारी के आगे \"सत्यापित\" या \"असत्यापित\" लिखा आता है। सत्यापित जानकारी लॉक हो जाती है; उसे बदलने के लिए तय प्रक्रिया और अधिकारी की मंज़ूरी चाहिए।",
        "असत्यापित जानकारी मुखिया को सुधार या कागज़ के लिए लौटाई जाती है। समय पर कागज़ लगाएं।",
        "डेटा की गलतियां सुधारने के लिए सरकार ने ऑनलाइन व्यवस्था शुरू की है, और ज़िलों में मुफ्त हेल्प डेस्क व समाधान शिविर भी लगते हैं।",
      ],
    },
    {
      id: "aay",
      title: "आय गलत दर्ज है तो",
      steps: [
        "पोर्टल पर अपनी फैमिली आईडी से देखें कि आय \"सत्यापित\" है या नहीं और कितनी दर्ज है।",
        "गलत आय के लिए पोर्टल पर आय सुधार/शिकायत का विकल्प चुनें, या CSC/सरल केंद्र से आवेदन कराएं।",
        "आय का सबूत (जैसे वेतन पर्ची, आय प्रमाण पत्र, अन्य कागज़) लगाएं।",
        "खबरों के अनुसार कागज़ों की जांच के बाद आय अपडेट करने का अधिकार अतिरिक्त उपायुक्त (ADC) को दिया गया है। मई 2026 में मुख्यमंत्री ने ग्राम सभाओं के ज़रिये आय सत्यापन जल्द पूरा करने के निर्देश दिए।",
      ],
    },
  ],
  official: [
    { href: "https://meraparivar.haryana.gov.in/", title: "मेरा परिवार पोर्टल (परिवार पहचान पत्र)", note: "नई आईडी, अपडेट, आय सुधार, स्टेटस" },
  ],
  faq: [
    { q: "परिवार पहचान पत्र बनवाने की फीस कितनी है?", a: "PPP बनाना और अपडेट करना मुफ्त है। कोई CSC संचालक ज़्यादा पैसे मांगे तो ज़िला प्रशासन से शिकायत करें।" },
    { q: "फैमिली आईडी कितने अंकों की होती है?", a: "हरियाणा के परिवारों को 8 अंकों की फैमिली आईडी मिलती है। राज्य से बाहर रहने वाले परिवार, जो किसी हरियाणा सेवा के लिए आवेदन करते हैं, उन्हें \"T\" से शुरू होने वाली 9 अक्षरों की अस्थायी आईडी मिलती है।" },
    { q: "फैमिली आईडी में आय गलत है, क्या करूं?", a: "मेरा परिवार पोर्टल पर आय सुधार के लिए आवेदन करें या CSC/सरल केंद्र जाएं और आय के कागज़ लगाएं। सत्यापन के बाद अधिकारी आय अपडेट करते हैं।" },
    { q: "शादी के बाद बहू का नाम कैसे जोड़ें?", a: "पहले उसे पुराने परिवार की आईडी से अलग करवाया जाता है, फिर पति के परिवार में जोड़ा जाता है। यह पोर्टल या CSC पर सदस्य जोड़ने/हटाने के विकल्प से होता है; विवाह प्रमाण पत्र तैयार रखें।" },
    { q: "क्या फैमिली आईडी के बिना हरियाणा की पेंशन मिलेगी?", a: "राज्य की ज़्यादातर योजनाएं अब PPP डेटा से जुड़ी हैं, इसलिए पहले फैमिली आईडी बनवाना और उसमें सही जानकारी सत्यापित कराना ज़रूरी है।" },
  ],
  related: [
    { href: "/service/hr-income-certificate.html", emoji: "📄", title: "हरियाणा आय प्रमाण पत्र", text: "सरल पोर्टल से" },
    { href: "/service/hr-ration-card.html", emoji: "🍚", title: "हरियाणा राशन कार्ड", text: "BPL/AAY कार्ड" },
    { href: "/states/haryana-senior-citizen-card.html", emoji: "🧓", title: "हरियाणा बुढ़ापा पेंशन", text: "पात्रता और आवेदन" },
    { href: "/service/hr-caste-certificate.html", emoji: "🪪", title: "हरियाणा जाति प्रमाण पत्र", text: "कैसे बनवाएं" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "PPP अपडेट में मदद" },
  ],
  aside: [
    { href: "https://meraparivar.haryana.gov.in/", label: "👨‍👩‍👧 मेरा परिवार पोर्टल" },
    { href: "/states/haryana.html", label: "📍 हरियाणा की सभी सेवाएं" },
  ],
};
