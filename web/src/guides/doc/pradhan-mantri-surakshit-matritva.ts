import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB Research backgrounder "Pradhan Mantri
// Surakshit Matritva Abhiyaan: A Decade of Inclusive Maternal Healthcare
// Delivery", 8 June 2026 (static.pib.gov.in/.../2026/jun/doc202668887301.pdf):
// Ministry of Health & Family Welfare; launched 9 June 2016; 9th of every
// month at designated government facilities; 2nd trimester (13-27 weeks) and
// 3rd trimester (28 weeks to delivery); service package (OBGY/CEmONC/BEmONC
// doctor, blood & urine tests, USG, medicines, counselling); 25 high-risk
// categories listed; HRP linked to nearest FRU; MCP card stickers; private
// volunteer doctors, IPledgeFor9 awards; Extended PMSMA from January 2022
// (individual tracking till safe delivery, incentives to woman and ASHA for
// up to three additional visits, SMS alerts); over 7.50 crore women served;
// MMR 130 (2014-16) to 87 (2022-24). mohfw.gov.in press release on Extended
// PMSMA via search extract. Incentive amounts not verified, so not given.
export const pradhanMantriSurakshitMatritva: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "प्रधानमंत्री सुरक्षित मातृत्व अभियान" },
  ],
  docHi: "प्रधानमंत्री सुरक्षित मातृत्व अभियान",
  title: "प्रधानमंत्री सुरक्षित मातृत्व अभियान (PMSMA Antenatal Care)",
  description: "हर महीने की 9 तारीख को गर्भवती महिलाओं की मुफ्त विशेषज्ञ डॉक्टर द्वारा प्रसव पूर्व जांच। प्रधानमंत्री सुरक्षित मातृत्व अभियान (PMSMA) की सेवाएं, 25 जोखिम, विस्तारित PMSMA और कहां जाएं।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "प्रधानमंत्री सुरक्षित मातृत्व अभियान (PMSMA): मुफ्त प्रसवपूर्व जांच, खतरे वाली गर्भावस्था की पहचान",
  lead: "प्रधानमंत्री सुरक्षित मातृत्व अभियान (PMSMA) स्वास्थ्य एवं परिवार कल्याण मंत्रालय का कार्यक्रम है, जो 9 जून 2016 से चल रहा है। इसमें हर महीने की 9 तारीख को तय सरकारी स्वास्थ्य केंद्रों पर दूसरी और तीसरी तिमाही की गर्भवती महिलाओं की मुफ्त, पूरी प्रसवपूर्व जांच होती है, ताकि खतरे वाली गर्भावस्था समय पर पहचानी जाए। 2022 से विस्तारित PMSMA में खतरे वाली गर्भावस्था पर डिलीवरी तक नाम से नज़र रखी जाती है। जून 2026 तक 7.50 करोड़ से ज़्यादा महिलाएं इसका लाभ ले चुकी हैं।",
  facts: [
    ["मंत्रालय", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय"],
    ["शुरुआत", "9 जून 2016"],
    ["जांच का दिन", "हर महीने की 9 तारीख"],
    ["खर्च", "मुफ्त (सरकारी केंद्र पर)"],
  ],
  sections: [
    {
      id: "sevayen",
      title: "PMSMA में कौन-सी सेवाएं मिलती हैं",
      list: [
        "स्त्री रोग विशेषज्ञ (OBGY) या आपात प्रसूति सेवाओं (CEmONC/BEmONC) में प्रशिक्षित डॉक्टर से कम से कम एक पूरी जांच।",
        "खून और पेशाब की ज़रूरी जांचें और अल्ट्रासाउंड।",
        "दवाएं और पोषण, डिलीवरी की योजना और जटिलता की तैयारी पर सलाह।",
        "25 जोखिम कारकों की जांच और खतरे वाली गर्भावस्था को नज़दीकी बड़े अस्पताल (FRU) से जोड़ना।",
        "हर जांच पर मातृ-शिशु सुरक्षा (MCP) कार्ड पर स्थिति बताने वाला स्टिकर।",
      ],
    },
    {
      id: "kaun",
      title: "कौन जांच करवा सकती है",
      list: [
        "<strong>दूसरी तिमाही</strong> (13 से 27 हफ्ते) या <strong>तीसरी तिमाही</strong> (28 हफ्ते से डिलीवरी तक) की गर्भवती महिला।",
        "भारत में रहने वाली भारतीय नागरिक, जो 9 तारीख को तय सरकारी केंद्र पर जा सके।",
        "खतरे वाली गर्भावस्था वाली महिलाओं को प्राथमिकता और आगे की निगरानी।",
        "जिन्होंने नियमित जांच बीच में छोड़ दी, उन्हें भी आने के लिए प्रोत्साहित किया जाता है।",
      ],
      callout: { kind: "info", html: 'जांच कैसे करवाएं, साथ क्या ले जाएं और जांच में क्या होता है: <a href="/service/pmsma-antenatal-checkup.html">PMSMA जांच गाइड</a>।' },
    },
    {
      id: "jokhim",
      title: "25 खतरे वाली स्थितियां (HRP)",
      intro: "PIB के अनुसार इन स्थितियों में गर्भावस्था को खतरे वाली (High-Risk Pregnancy) माना जाता है:",
      list: [
        "HIV, सिफलिस, हेपेटाइटिस B, टीबी, मलेरिया, प्रजनन मार्ग/यौन संक्रमण, तेज़ बुखार",
        "गंभीर खून की कमी (एनीमिया), गर्भ से जुड़ा हाई BP, गर्भ की डायबिटीज़, हाइपोथायरॉइड",
        "पिछला सिज़ेरियन ऑपरेशन, खराब प्रसव इतिहास, पहले मृत बच्चे का जन्म, जन्मजात विकृति",
        "जुड़वां या ज़्यादा बच्चे, बच्चे की धड़कन असामान्य, सिर और कूल्हे की हड्डी का अनुपात ठीक न होना",
        "कम उम्र में गर्भ (किशोरी), कम उम्र या ज़्यादा उम्र में पहली गर्भावस्था, कई बार की गर्भावस्था, छोटा कद, नेगेटिव ब्लड ग्रुप और दूसरी चिकित्सा स्थितियां",
      ],
    },
    {
      id: "vistarit",
      title: "विस्तारित PMSMA (2022 से)",
      list: [
        "जनवरी 2022 से खतरे वाली हर गर्भावस्था पर सुरक्षित डिलीवरी तक <strong>नाम से नज़र</strong>।",
        "9 तारीख के अलावा <strong>अतिरिक्त जांचें</strong> और लगातार निगरानी।",
        "तीन अतिरिक्त जांचों तक महिला और साथ आने वाली <strong>आशा कार्यकर्ता को प्रोत्साहन राशि</strong>। राशि की जानकारी अपनी आशा/ANM से लें।",
        "पंजीकरण और अगली जांच के लिए महिला और आशा दोनों को <strong>SMS</strong>।",
      ],
      callout: { kind: "warn", html: "खून आना, तेज़ सिरदर्द, धुंधला दिखना, सूजन, दौरा, तेज़ बुखार या बच्चे का हिलना कम होना आपात स्थिति है। तुरंत अस्पताल जाएं या 108/102 एम्बुलेंस बुलाएं।" },
    },
    {
      id: "asar",
      title: "10 साल में असर",
      intro: "PIB के 8 जून 2026 के विवरण के अनुसार PMSMA के तहत 7.50 करोड़ से ज़्यादा गर्भवती महिलाओं को जांच सेवाएं मिलीं, और देश में मातृ मृत्यु अनुपात 2014-16 के 130 से घटकर 2022-24 में 87 (प्रति लाख जीवित जन्म) हुआ। निजी डॉक्टर भी <a href=\"https://pmsma.mohfw.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">PMSMA पोर्टल</a> पर रजिस्टर करके 9 तारीख को स्वेच्छा से सेवा देते हैं।",
    },
  ],
  official: [
    { href: "https://pmsma.mohfw.gov.in/", title: "PMSMA पोर्टल, स्वास्थ्य मंत्रालय" },
    { href: "https://mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
    { href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jun/doc202668887301.pdf", title: "PIB: PMSMA के 10 साल (8 जून 2026, PDF)" },
  ],
  faq: [
    { q: "PMSMA क्या है?", a: "स्वास्थ्य मंत्रालय का कार्यक्रम, जिसमें हर महीने की 9 तारीख को तय सरकारी केंद्रों पर दूसरी-तीसरी तिमाही की गर्भवती महिलाओं की मुफ्त, पूरी प्रसवपूर्व जांच होती है।" },
    { q: "क्या PMSMA में पैसे मिलते हैं?", a: "PMSMA मुख्य रूप से मुफ्त जांच सेवा है। विस्तारित PMSMA में खतरे वाली गर्भावस्था की तीन अतिरिक्त जांचों तक महिला और आशा को प्रोत्साहन राशि मिलती है।" },
    { q: "खतरे वाली गर्भावस्था का पता चले तो क्या होता है?", a: "MCP कार्ड पर इसका स्टिकर लगता है, महिला को नज़दीकी बड़े अस्पताल (FRU) से जोड़ा जाता है और डिलीवरी तक अतिरिक्त जांच और निगरानी होती है।" },
    { q: "9 तारीख को छुट्टी हो तो?", a: "ऐसे में सत्र किस दिन होगा, यह राज्य/केंद्र तय करता है, और कुछ राज्यों ने विस्तारित PMSMA में 9 तारीख के अलावा दिन भी तय किए हैं। अपने केंद्र या आशा/ANM से पहले पूछ लें।" },
  ],
  related: [
    { href: "/service/pmsma-antenatal-checkup.html", emoji: "🩺", title: "PMSMA जांच गाइड", text: "9 तारीख को क्या होता है, क्या ले जाएं" },
    { href: "/service/pm-matru-vandana-yojana.html", emoji: "👶", title: "प्रधानमंत्री मातृ वंदना योजना", text: "गर्भवती महिलाओं को नकद लाभ" },
    { href: "/service/janani-suraksha-yojana.html", emoji: "🏥", title: "जननी सुरक्षा योजना", text: "अस्पताल में डिलीवरी पर सहायता" },
    { href: "/service/kilkari-mobile-health-audio.html", emoji: "📞", title: "किलकारी", text: "गर्भावस्था पर मुफ्त फोन संदेश" },
    { href: "/service/abha-health-card.html", emoji: "🆔", title: "ABHA हेल्थ कार्ड", text: "स्वास्थ्य रिकॉर्ड डिजिटल" },
  ],
  aside: [
    { href: "https://pmsma.mohfw.gov.in/", label: "🏥 PMSMA पोर्टल" },
    { href: "/service/pmsma-antenatal-checkup.html", label: "🩺 जांच गाइड" },
  ],
};
