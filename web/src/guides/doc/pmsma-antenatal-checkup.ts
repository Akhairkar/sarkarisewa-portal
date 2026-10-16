import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB Research backgrounder "Pradhan Mantri
// Surakshit Matritva Abhiyaan: A Decade of Inclusive Maternal Healthcare
// Delivery", 8 June 2026 (static.pib.gov.in/.../2026/jun/doc202668887301.pdf):
// launched 9 June 2016; free comprehensive ANC on the 9th of every month at
// designated government facilities for women in 2nd trimester (13-27 weeks)
// or 3rd trimester (28 weeks till delivery); at least one check by OBGY /
// CEmONC/BEmONC-trained doctor; blood & urine tests, ultrasonography,
// medicines, counselling; screening for 25 high-risk factors, HRP linked to
// nearest FRU; stickers on MCP card; private doctors volunteer via portal;
// Extended PMSMA (Jan 2022): HRP women individually tracked, incentives to
// woman and ASHA for up to three additional visits, SMS alerts; over 7.50
// crore women served; MMR 130 (2014-16) to 87 (2022-24). mohfw.gov.in press
// release on Extended PMSMA (additional sessions beyond the 9th, via search
// extract). Incentive amounts were not verified, so none is given.
export const pmsmaAntenatalCheckup: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "PMSMA जांच (9 तारीख)" },
  ],
  docHi: "PMSMA जांच (9 तारीख)",
  title: "प्रधानमंत्री सुरक्षित मातृत्व अभियान (PMSMA)",
  description: "सरकारी स्वास्थ्य सुविधाओं में हर महीने की 9 तारीख को गर्भवती महिलाओं की मुफ्त प्रसवपूर्व जांच (विशेषज्ञ परामर्श, खून-पेशाब जांच, अल्ट्रासाउंड)। कौन जाए, क्या ले जाएं और जांच में क्या होता है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "PMSMA: हर महीने की 9 तारीख को गर्भवती महिलाओं की मुफ्त जांच, क्या होता है और क्या ले जाएं",
  lead: "प्रधानमंत्री सुरक्षित मातृत्व अभियान (PMSMA) में हर महीने की <strong>9 तारीख</strong> को तय सरकारी अस्पतालों और स्वास्थ्य केंद्रों पर गर्भवती महिलाओं की मुफ्त, पूरी प्रसवपूर्व जांच (ANC) होती है। यह गर्भ के चौथे से नौवें महीने (दूसरी और तीसरी तिमाही) वाली महिलाओं के लिए है। जांच में स्त्री रोग विशेषज्ञ या प्रशिक्षित डॉक्टर देखते हैं, खून-पेशाब की जांच, अल्ट्रासाउंड और दवाएं मिलती हैं, और खतरे वाली गर्भावस्था की पहचान होती है। कोई फीस या रजिस्ट्रेशन फॉर्म नहीं है।",
  facts: [
    ["कब", "हर महीने की 9 तारीख"],
    ["कौन", "दूसरी-तीसरी तिमाही की गर्भवती (13वें हफ्ते से डिलीवरी तक)"],
    ["कहां", "तय सरकारी अस्पताल/स्वास्थ्य केंद्र"],
    ["खर्च", "मुफ्त"],
  ],
  sections: [
    {
      id: "jaanch",
      title: "9 तारीख की जांच में क्या होता है",
      list: [
        "<strong>डॉक्टर की जांच:</strong> कम से कम एक बार स्त्री रोग विशेषज्ञ (OBGY) या आपात प्रसूति सेवाओं में प्रशिक्षित डॉक्टर से पूरी जांच।",
        "<strong>लैब जांच:</strong> खून और पेशाब की ज़रूरी जांचें (जैसे हीमोग्लोबिन, शुगर, पेशाब में प्रोटीन)।",
        "<strong>अल्ट्रासाउंड</strong> (सोनोग्राफी), जहां ज़रूरत हो।",
        "<strong>दवाएं</strong>, जैसे आयरन और कैल्शियम, और ज़रूरत के हिसाब से इलाज।",
        "<strong>सलाह:</strong> खान-पान, डिलीवरी की योजना और खतरे के लक्षण पहचानने पर।",
        "<strong>खतरे की पहचान:</strong> 25 तरह के जोखिम (जैसे गंभीर खून की कमी, हाई BP, गर्भ की डायबिटीज़, जुड़वां बच्चे, पिछला ऑपरेशन) जांचे जाते हैं।",
      ],
      callout: { kind: "info", html: "जांच के बाद <strong>मातृ-शिशु सुरक्षा (MCP) कार्ड</strong> पर स्टिकर लगता है जो बताता है कि गर्भावस्था सामान्य है या खतरे वाली। खतरे वाली गर्भावस्था को नज़दीकी बड़े अस्पताल (FRU) से जोड़ा जाता है ताकि डिलीवरी सुरक्षित हो।" },
    },
    {
      id: "kaise",
      title: "जांच कैसे करवाएं",
      steps: [
        "अपनी <strong>आशा दीदी या ANM</strong> से पूछें कि आपके इलाके में PMSMA जांच किस अस्पताल/केंद्र पर होती है।",
        "9 तारीख को सुबह जल्दी पहुंचें। अगर 9 तारीख को रविवार या छुट्टी हो तो अगले कामकाजी दिन पर सत्र होता है या नहीं, यह पहले पूछ लें।",
        "पर्ची/रजिस्ट्रेशन काउंटर पर बताएं कि PMSMA जांच के लिए आई हैं।",
        "डॉक्टर की जांच, लैब जांच और ज़रूरत पड़े तो अल्ट्रासाउंड करवाएं।",
        "दवाएं लें और अगली जांच/डिलीवरी की तारीख और जगह MCP कार्ड पर लिखवाएं।",
      ],
    },
    {
      id: "saath",
      title: "साथ क्या ले जाएं",
      list: [
        "मातृ-शिशु सुरक्षा (MCP) कार्ड, अगर बन चुका है",
        "पिछली जांचों की रिपोर्ट और अल्ट्रासाउंड",
        "आधार या कोई पहचान पत्र (अस्पताल में पंजीकरण के लिए)",
        "चल रही दवाओं की पर्ची",
        "पानी और हल्का नाश्ता; खाली पेट जांच बताई गई हो तो उसी हिसाब से",
      ],
    },
    {
      id: "khatra",
      title: "खतरे वाली गर्भावस्था: विस्तारित PMSMA",
      intro: "जनवरी 2022 से विस्तारित PMSMA (Extended PMSMA) में जिन महिलाओं की गर्भावस्था खतरे वाली पाई जाती है, उन पर नाम से नज़र रखी जाती है:",
      list: [
        "9 तारीख के अलावा अतिरिक्त जांचें, ताकि डिलीवरी तक लगातार निगरानी हो।",
        "तीन अतिरिक्त जांचों तक महिला और साथ आने वाली आशा को प्रोत्साहन राशि मिलती है (राशि राज्य/केंद्र के नियम अनुसार)।",
        "पंजीकरण और अगली जांच के लिए महिला और आशा को SMS आते हैं।",
      ],
      callout: { kind: "warn", html: "खून आना, तेज़ सिरदर्द, धुंधला दिखना, पैरों-चेहरे पर सूजन, दौरा, तेज़ बुखार या बच्चे का हिलना कम होना: 9 तारीख का इंतज़ार न करें, तुरंत अस्पताल जाएं या <strong>108/102</strong> एम्बुलेंस बुलाएं।" },
    },
    {
      id: "doctor",
      title: "निजी डॉक्टर कैसे जुड़ें",
      intro: 'निजी क्षेत्र के स्त्री रोग विशेषज्ञ, रेडियोलॉजिस्ट और फिज़िशियन महीने की 9 तारीख को सरकारी केंद्रों पर स्वेच्छा से सेवा दे सकते हैं। रजिस्ट्रेशन <a href="https://pmsma.mohfw.gov.in/" target="_blank" rel="noopener nofollow">pmsma.mohfw.gov.in</a> पोर्टल पर होता है।',
    },
  ],
  official: [
    { href: "https://pmsma.mohfw.gov.in/", title: "PMSMA पोर्टल, स्वास्थ्य मंत्रालय" },
    { href: "https://mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
    { href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jun/doc202668887301.pdf", title: "PIB: PMSMA के 10 साल (8 जून 2026, PDF)" },
  ],
  faq: [
    { q: "PMSMA जांच कब होती है?", a: "हर महीने की 9 तारीख को तय सरकारी स्वास्थ्य केंद्रों पर। खतरे वाली गर्भावस्था में विस्तारित PMSMA के तहत अतिरिक्त जांचें भी होती हैं।" },
    { q: "क्या इसके लिए पैसे लगते हैं?", a: "नहीं, सरकारी केंद्र पर PMSMA की जांच, ज़रूरी लैब जांच, अल्ट्रासाउंड और दवाएं मुफ्त हैं।" },
    { q: "किस महीने में जांच करवानी चाहिए?", a: "PMSMA गर्भ के दूसरे (13-27 हफ्ते) और तीसरे (28 हफ्ते से डिलीवरी तक) तिमाही वाली महिलाओं के लिए है। पहली तिमाही की नियमित ANC जांच अपने नज़दीकी केंद्र पर करवाएं।" },
    { q: "क्या कोई फॉर्म भरना होता है?", a: "अलग से कोई आवेदन नहीं है। 9 तारीख को तय केंद्र पर जाकर सामान्य पर्ची बनवानी होती है। MCP कार्ड और पुरानी रिपोर्ट साथ ले जाएं।" },
    { q: "क्या PMSMA से पैसे मिलते हैं?", a: "सामान्य PMSMA जांच मुफ्त सेवा है, नकद योजना नहीं। खतरे वाली गर्भावस्था में अतिरिक्त जांच पर प्रोत्साहन मिलता है। पहले बच्चे पर नकद लाभ के लिए प्रधानमंत्री मातृ वंदना योजना और संस्थागत प्रसव के लिए जननी सुरक्षा योजना देखें।" },
  ],
  related: [
    { href: "/service/pradhan-mantri-surakshit-matritva.html", emoji: "🤰", title: "PMSMA योजना की पूरी जानकारी", text: "खतरे वाली गर्भावस्था और विस्तारित PMSMA" },
    { href: "/service/pm-matru-vandana-yojana.html", emoji: "👶", title: "प्रधानमंत्री मातृ वंदना योजना", text: "गर्भवती महिलाओं को नकद लाभ" },
    { href: "/service/janani-suraksha-yojana.html", emoji: "🏥", title: "जननी सुरक्षा योजना", text: "अस्पताल में डिलीवरी पर सहायता" },
    { href: "/service/abha-health-card.html", emoji: "🆔", title: "ABHA हेल्थ कार्ड", text: "स्वास्थ्य रिकॉर्ड डिजिटल" },
    { href: "/service/kilkari-mobile-health-audio.html", emoji: "📞", title: "किलकारी", text: "गर्भावस्था पर मुफ्त फोन संदेश" },
  ],
  aside: [
    { href: "https://pmsma.mohfw.gov.in/", label: "🏥 PMSMA पोर्टल" },
    { href: "/service/pm-matru-vandana-yojana.html", label: "👶 मातृ वंदना योजना" },
  ],
};
