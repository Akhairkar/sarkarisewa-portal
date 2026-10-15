import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): PIB backgrounder "National Action for
// Mechanised Sanitation Ecosystem (NAMASTE)" 2 Sep 2025
// (static.pib.gov.in — launched July 2023 by MoSJE and MoHUA; all 4800+ ULBs;
// three years up to 2025-26, outlay ₹349.70 crore; components: profiling of
// sewer/septic tank workers (SSWs), safety training and PPE kits, safety
// devices to ERSUs, AB-PMJAY enrolment with premium paid through NAMASTE for
// those not covered, capital subsidy via NSKFDC / Swachhata Udyami Yojana,
// skill training for manual scavengers with ₹3,000 monthly stipend; waste
// pickers added and Waste Picker Enumeration App launched June 2025; 84,902
// SSWs validated by Aug 2025); myScheme API entry "NAMASTE - ERSU Formation
// and Functionalisation" (Department of Social Justice & Empowerment;
// emergency sanitation helpline 14420; guidelines at socialjustice.gov.in/
// schemes/37). Reports in 2026 of a proposed extension to 2030-31 and to
// rural areas could not be confirmed from an official release, so the page
// only says the approved period ran to 2025-26. Subsidy amounts per project
// not stated.
export const namasteSchemeSewerWorkers: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "नमस्ते योजना" },
  ],
  docHi: "नमस्ते योजना",
  title: "नमस्ते योजना - सफाई मित्र सुरक्षा (NAMASTE Scheme)",
  description: "सीवर एवं सेप्टिक टैंक की यांत्रिक सफाई व सफाई कर्मचारियों का ₹5 लाख स्वास्थ्य बीमा। नमस्ते योजना - सफाई मित्र सुरक्षा (NAMASTE Scheme) के लिए आधिकारिक...",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "नमस्ते (NAMASTE) योजना: सीवर-सेप्टिक टैंक सफाई कर्मियों के लिए सुरक्षा किट, आयुष्मान कार्ड और स्वरोज़गार मदद",
  lead: "NAMASTE (National Action for Mechanised Sanitation Ecosystem) योजना सामाजिक न्याय एवं अधिकारिता मंत्रालय और आवास एवं शहरी कार्य मंत्रालय ने जुलाई 2023 में शुरू की। इसका मकसद है कि कोई भी सफाई कर्मी बिना सुरक्षा के सीवर या सेप्टिक टैंक में न उतरे और सफाई मशीनों से हो। पहचाने गए सीवर/सेप्टिक टैंक कर्मियों को प्रशिक्षण, PPE किट, आयुष्मान भारत (PM-JAY) का ₹5 लाख तक का स्वास्थ्य बीमा और मशीन/वाहन खरीदने के लिए सब्सिडी मिलती है।",
  facts: [
    ["मंत्रालय", "सामाजिक न्याय एवं अधिकारिता (MoSJE) और आवास एवं शहरी कार्य (MoHUA)"],
    ["किसके लिए", "सीवर/सेप्टिक टैंक सफाई कर्मी; 2025 से कचरा बीनने वाले भी"],
    ["स्वास्थ्य बीमा", "आयुष्मान भारत PM-JAY, ₹5 लाख प्रति परिवार प्रति साल"],
    ["सीवर इमरजेंसी हेल्पलाइन", "14420"],
  ],
  notice: "<strong>ध्यान दें:</strong> इस योजना में अलग से ऑनलाइन फॉर्म भरने का कोई आम पोर्टल नहीं है। सफाई कर्मियों की पहचान (profiling) आपकी <strong>नगर निगम/नगर पालिका (ULB)</strong> के कैंप में होती है।",
  sections: [
    {
      id: "laabh",
      title: "योजना में क्या-क्या मिलता है",
      list: [
        "<strong>पहचान और रिकॉर्ड (profiling):</strong> नगर निकाय कैंप लगाकर सीवर/सेप्टिक टैंक कर्मियों की जानकारी दर्ज करते हैं। अगस्त 2025 तक 84,902 कर्मियों का सत्यापन हो चुका था।",
        "<strong>सुरक्षा प्रशिक्षण और PPE किट:</strong> काम के दौरान सुरक्षा का प्रशिक्षण और सुरक्षा उपकरण (मास्क, सूट, हेलमेट आदि)।",
        "<strong>आयुष्मान कार्ड:</strong> पहचाने गए कर्मी और उनके परिवार को आयुष्मान भारत PM-JAY में जोड़ा जाता है; जो पहले से नहीं जुड़े, उनका प्रीमियम NAMASTE से भरा जाता है।",
        "<strong>स्वरोज़गार के लिए सब्सिडी:</strong> राष्ट्रीय सफाई कर्मचारी वित्त एवं विकास निगम (NSKFDC) की स्वच्छता उद्यमी योजना के ज़रिये सफाई मशीन और वाहन खरीदने पर पूंजी सब्सिडी, ताकि कर्मी खुद \"सैनिप्रेन्योर\" बन सकें।",
        "<strong>हाथ से मैला उठाने वाले (manual scavengers):</strong> पहचाने गए कर्मियों और उनके आश्रितों को स्वरोज़गार के लिए पूंजी सब्सिडी और 2 साल तक कौशल प्रशिक्षण, जिसमें ₹3,000 महीना स्टाइपेंड।",
      ],
    },
    {
      id: "kaun",
      title: "कौन जुड़ सकता है",
      list: [
        "शहरों में सीवर और सेप्टिक टैंक की सफाई करने वाले कर्मी (सरकारी, ठेके या निजी, सभी)।",
        "हाथ से मैला उठाने वाले पहचाने गए कर्मी और उनके आश्रित (स्वरोज़गार/प्रशिक्षण वाले लाभों के लिए)।",
        "<strong>कचरा बीनने वाले (waste pickers):</strong> जून 2025 में इन्हें भी योजना में शामिल किया गया और इनकी गिनती के लिए Waste Picker Enumeration App शुरू हुआ।",
      ],
    },
    {
      id: "kaise-jude",
      title: "योजना से कैसे जुड़ें",
      steps: [
        "अपनी <strong>नगर निगम/नगर पालिका</strong> के स्वच्छता/स्वास्थ्य विभाग में पूछें कि NAMASTE प्रोफाइलिंग कैंप कब लगेगा।",
        "कैंप में आधार कार्ड, बैंक खाता विवरण, मोबाइल नंबर और फोटो लेकर जाएं और अपना विवरण दर्ज करवाएं।",
        "सत्यापन के बाद प्रशिक्षण और PPE किट के लिए बुलाया जाता है; आयुष्मान कार्ड बनवाने में भी मदद मिलती है।",
        "मशीन/वाहन के लिए कर्ज़-सब्सिडी चाहिए तो नगर निकाय या NSKFDC से जुड़े बैंक/एजेंसी से आवेदन की जानकारी लें।",
      ],
      callout: { kind: "warn", html: "<strong>बिना सुरक्षा के सीवर में न उतरें।</strong> सीवर/सेप्टिक टैंक की इमरजेंसी सफाई के लिए नागरिक <strong>14420</strong> पर नगर निकाय की इमरजेंसी रिस्पॉन्स सैनिटेशन यूनिट (ERSU) को बुला सकते हैं।" },
    },
    {
      id: "avadhi",
      title: "योजना की अवधि",
      intro: "PIB के अनुसार योजना देश के 4,800 से ज़्यादा शहरी स्थानीय निकायों में 2025-26 तक तीन साल के लिए ₹349.70 करोड़ के बजट से मंज़ूर हुई थी। आगे बढ़ाने और गांवों तक फैलाने की खबरें आई हैं, लेकिन इसकी आधिकारिक पुष्टि हमें नहीं मिली; ताज़ा स्थिति मंत्रालय की वेबसाइट पर देखें।",
    },
  ],
  official: [
    { href: "https://socialjustice.gov.in/schemes/37", title: "सामाजिक न्याय एवं अधिकारिता मंत्रालय: NAMASTE दिशानिर्देश" },
    { href: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc2025910632601.pdf", title: "PIB: NAMASTE योजना की जानकारी (सितंबर 2025, PDF)" },
    { href: "https://www.myscheme.gov.in/schemes/namaste-ersufaf", title: "myScheme: NAMASTE (ERSU)" },
  ],
  faq: [
    { q: "NAMASTE योजना का पूरा नाम क्या है?", a: "National Action for Mechanised Sanitation Ecosystem। इसे सामाजिक न्याय एवं अधिकारिता मंत्रालय और आवास एवं शहरी कार्य मंत्रालय ने जुलाई 2023 में शुरू किया।" },
    { q: "क्या NAMASTE योजना में ₹5 लाख का बीमा मिलता है?", a: "हां, पहचाने गए सीवर/सेप्टिक टैंक कर्मियों और उनके परिवार को आयुष्मान भारत PM-JAY में जोड़ा जाता है, जिसमें प्रति परिवार साल में ₹5 लाख तक मुफ्त इलाज होता है।" },
    { q: "NAMASTE योजना में आवेदन कहां करें?", a: "अपने नगर निगम/नगर पालिका से संपर्क करें। वे प्रोफाइलिंग कैंप लगाकर कर्मियों का रिकॉर्ड बनाते हैं; आम लोगों के लिए अलग ऑनलाइन आवेदन पोर्टल नहीं है।" },
    { q: "14420 नंबर किस काम का है?", a: "यह सीवर/सेप्टिक टैंक की इमरजेंसी सफाई के लिए नागरिक हेल्पलाइन है, जिससे नगर निकाय की इमरजेंसी रिस्पॉन्स सैनिटेशन यूनिट को बुलाया जाता है।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत PM-JAY", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/e-shram-card.html", emoji: "🪪", title: "ई-श्रम कार्ड", text: "असंगठित मज़दूरों का पंजीकरण" },
    { href: "/service/swachh-bharat-sanitation-complaint.html", emoji: "🧹", title: "स्वच्छता शिकायत", text: "सफाई से जुड़ी शिकायत दर्ज करें" },
    { href: "/service/stand-up-india.html", emoji: "💼", title: "स्टैंड-अप इंडिया", text: "SC/ST और महिलाओं के लिए कर्ज़" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "आयुष्मान कार्ड बनवाने के लिए" },
  ],
  aside: [
    { href: "https://socialjustice.gov.in/schemes/37", label: "📄 NAMASTE दिशानिर्देश" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
