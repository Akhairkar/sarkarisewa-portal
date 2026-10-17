import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Caste (SC/ST/OBC) certificates are issued by the state revenue
//   authority notified as competent (DM/ADM/SDM/Tehsildar etc.), after
//   local enquiry; caste must be in the state list (and in the Central list
//   for central jobs/admissions). Applications via state e-District/CSC.
// - OBC non-creamy layer: DoPT order 13 Sep 2017 raised the creamy layer
//   ceiling to Rs 8 lakh a year (still Rs 8 lakh per reports of 2026);
//   salary and agricultural income excluded per DoPT clarification.
// - Kumari Madhuri Patil v Addl. Commissioner (SC, 1994): caste certificates
//   are verified by state scrutiny committees; mentioned only generally.
// - Site guide /service/caste-certificate.html for state-wise routes.
// Fees, formats and time limits differ by state: not stated.
export const casteCertificateApplicationLetter: Letter = {
  slug: "caste-certificate-application-letter",
  category: "document",
  emoji: "📜",
  title: "Caste Certificate Application in Hindi 2026: जाति प्रमाण पत्र आवेदन पत्र",
  description: "SC/ST/OBC जाति प्रमाण पत्र के लिए तहसीलदार/SDM को आवेदन पत्र (हिंदी/English)। ज़रूरी कागज़, OBC नॉन-क्रीमी लेयर, ऑनलाइन आवेदन और देरी पर शिकायत।",
  h1: "जाति प्रमाण पत्र के लिए आवेदन पत्र 2026 (SC/ST/OBC)",
  short: { hi: "जाति प्रमाण पत्र आवेदन", en: "Caste certificate application" },
  lead: "SC, ST या OBC जाति प्रमाण पत्र राज्य सरकार का राजस्व विभाग बनाता है: आम तौर पर <strong>तहसीलदार, SDM या ज़िला अधिकारी</strong> जांच के बाद। आवेदन ज़्यादातर राज्यों में <strong>e-District पोर्टल, CSC या तहसील</strong> से होता है। केंद्र की नौकरी या दाखिले के लिए OBC प्रमाण पत्र में <strong>नॉन-क्रीमी लेयर</strong> लिखा होना चाहिए; इसकी आय सीमा DoPT के 2017 के आदेश से <strong>₹8 लाख सालाना</strong> है।",
  facts: [
    ["किसे दें", "तहसीलदार / SDM (राज्य द्वारा तय सक्षम अधिकारी)"],
    ["कहां से", "e-District पोर्टल, CSC या तहसील"],
    ["OBC-NCL आय सीमा", "₹8 लाख/साल (DoPT, 2017)"],
    ["जांच", "लेखपाल/पटवारी रिपोर्ट; बाद में स्क्रूटिनी कमेटी जांच कर सकती है"],
  ],
  to: "अपने निवास की तहसील के <strong>तहसीलदार</strong> या राज्य द्वारा तय सक्षम अधिकारी (SDM/उप-ज़िलाधिकारी/अंचल अधिकारी) को। जाति प्रमाण पत्र आम तौर पर उसी राज्य से बनता है जहां परिवार मूल रूप से रहता है।",
  when: [
    "स्कूल-कॉलेज दाखिले या छात्रवृत्ति में आरक्षण का लाभ लेना है",
    "सरकारी नौकरी के फॉर्म में SC/ST/OBC प्रमाण पत्र मांगा गया है",
    "केंद्र की नौकरी/दाखिले के लिए OBC नॉन-क्रीमी लेयर प्रमाण पत्र चाहिए",
    "किसी योजना (आवास, ऋण, छात्रवृत्ति) में जाति का प्रमाण ज़रूरी है",
  ],
  fields: [
    { key: "office", label: { hi: "तहसील/दफ्तर का नाम", en: "Tehsil / office" }, required: true, placeholder: { hi: "जैसे: तहसील बिहारशरीफ, ज़िला नालंदा, बिहार", en: "e.g. Tehsil Biharsharif, District Nalanda, Bihar" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता का नाम", en: "Father's name" }, required: true },
    { key: "address", label: { hi: "पूरा पता", en: "Full address" }, type: "textarea", required: true },
    { key: "category", label: { hi: "वर्ग", en: "Category" }, type: "select", required: true, options: [
      { hi: "अनुसूचित जाति (SC)", en: "Scheduled Caste (SC)" },
      { hi: "अनुसूचित जनजाति (ST)", en: "Scheduled Tribe (ST)" },
      { hi: "अन्य पिछड़ा वर्ग (OBC), नॉन-क्रीमी लेयर", en: "Other Backward Class (OBC), non-creamy layer" },
      { hi: "अन्य पिछड़ा वर्ग (OBC), राज्य सूची", en: "Other Backward Class (OBC), state list" },
    ] },
    { key: "caste", label: { hi: "जाति / उपजाति का नाम", en: "Caste / sub-caste" }, required: true, placeholder: { hi: "जैसा सरकारी सूची में लिखा है", en: "As written in the government list" } },
    { key: "since", label: { hi: "परिवार कब से यहां रह रहा है", en: "Family residing here since" }, placeholder: { hi: "जैसे: पीढ़ियों से / 1985 से", en: "e.g. for generations / since 1985" } },
    { key: "proof", label: { hi: "जाति का सबूत", en: "Proof of caste" }, type: "textarea", placeholder: { hi: "जैसे: पिता का जाति प्रमाण पत्र, खतौनी/पुराना राजस्व रिकॉर्ड", en: "e.g. father's caste certificate, old land/revenue record" } },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, placeholder: { hi: "जैसे: कॉलेज दाखिला / सरकारी नौकरी", en: "e.g. college admission / government job" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान तहसीलदार महोदय,
{{office}}

विषय: जाति प्रमाण पत्र जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पुत्री श्री {{father}}, निवासी {{address}}, आपकी तहसील का स्थायी निवासी हूं। मेरा परिवार {{since}} यहीं निवास करता है।

मैं {{caste}} जाति से हूं, जो {{category}} वर्ग में आती है। इसके समर्थन में निम्न कागज़ों की प्रतियां संलग्न हैं:
{{proof}}

मुझे {{purpose}} के लिए जाति प्रमाण पत्र की आवश्यकता है। मैं घोषणा करता/करती हूं कि ऊपर दी गई जानकारी सही है; गलत पाए जाने पर प्रमाण पत्र रद्द करने और कानूनी कार्रवाई के लिए मैं स्वयं ज़िम्मेदार रहूंगा/रहूंगी।

अतः आपसे प्रार्थना है कि आवश्यक जांच कराकर मुझे जाति प्रमाण पत्र जारी करने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. आधार कार्ड की प्रति
2. निवास का प्रमाण (राशन कार्ड/वोटर ID)
3. पिता/परिवार के सदस्य का जाति प्रमाण पत्र या पुराना राजस्व रिकॉर्ड
4. स्व-घोषणा/शपथ पत्र
5. OBC-NCL के लिए परिवार की आय का विवरण
6. पासपोर्ट साइज़ फोटो`,
    en: `To,
The Tehsildar,
{{office}}

Subject: Application for issue of caste certificate

Sir/Madam,

I, {{name}}, son/daughter of Shri {{father}}, resident of {{address}}, am a permanent resident of your tehsil. My family has been residing here {{since}}.

I belong to the {{caste}} caste, which falls under the {{category}} category. Copies of the following documents are enclosed in support:
{{proof}}

I need a caste certificate for {{purpose}}. I declare that the above information is true; if it is found false, I shall be responsible for cancellation of the certificate and any legal action.

I therefore request you kindly to get the necessary enquiry done and issue me a caste certificate.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of Aadhaar card
2. Proof of residence (ration card/voter ID)
3. Caste certificate of father/family member or old revenue record
4. Self-declaration/affidavit
5. Family income details (for OBC-NCL)
6. Passport-size photograph`,
  },
  attach: [
    "आधार कार्ड और निवास का प्रमाण",
    "पिता, भाई-बहन या किसी करीबी रिश्तेदार का जाति प्रमाण पत्र (सबसे मज़बूत सबूत)",
    "पुराना राजस्व रिकॉर्ड, स्कूल रिकॉर्ड जिसमें जाति लिखी हो",
    "OBC नॉन-क्रीमी लेयर के लिए माता-पिता की आय और पद का विवरण",
    "स्व-घोषणा या शपथ पत्र (राज्य के फॉर्मेट में)",
  ],
  submit: [
    "अपने राज्य के <strong>e-District / सेवा पोर्टल</strong> पर देखें; ज़्यादातर राज्यों में जाति प्रमाण पत्र का ऑनलाइन आवेदन होता है।",
    "ऑनलाइन न कर पाएं तो <strong>CSC या तहसील</strong> में पत्र और कागज़ जमा करें और आवेदन नंबर वाली रसीद लें।",
    "लेखपाल/पटवारी/राजस्व निरीक्षक जांच करते हैं; पड़ोसी या पंचायत से पुष्टि हो सकती है।",
    "तय समय में प्रमाण पत्र न मिले तो राज्य के <strong>सेवा का अधिकार (RTS)</strong> कानून के तहत अपील, CM हेल्पलाइन या ज़िला अधिकारी को शिकायत करें। आवेदन खारिज हो तो लिखित कारण मांगें और उसी के आधार पर SDM/DM को अपील करें।",
  ],
  tips: [
    "जाति का नाम ठीक वैसा लिखें जैसा राज्य/केंद्र की सूची में है; उपनाम (सरनेम) से जाति साबित नहीं होती।",
    "केंद्र सरकार की नौकरी के लिए OBC प्रमाण पत्र केंद्र के फॉर्मेट में और नॉन-क्रीमी लेयर वाला होना चाहिए; राज्य वाला अक्सर नहीं चलता।",
    "दूसरे राज्य में जाकर बसे हों तो आरक्षण का लाभ आम तौर पर मूल राज्य के प्रमाण पत्र से ही मिलता है।",
    "झूठा जाति प्रमाण पत्र गंभीर अपराध है; नौकरी/दाखिला रद्द हो सकता है।",
  ],
  notice: "जाति प्रमाण पत्र का फॉर्म, सक्षम अधिकारी, फीस और समय सीमा <strong>हर राज्य में अलग</strong> है। OBC-NCL प्रमाण पत्र की वैधता भी संस्था और राज्य के हिसाब से अलग मानी जाती है; नौकरी/दाखिले की अधिसूचना पढ़ें।",
  official: [
    { href: "https://serviceonline.gov.in/", title: "ServicePlus (कई राज्यों का सेवा पोर्टल)" },
    { href: "https://ncbc.nic.in/", title: "राष्ट्रीय पिछड़ा वर्ग आयोग (NCBC)", note: "केंद्रीय OBC सूची" },
    { href: "https://socialjustice.gov.in/", title: "सामाजिक न्याय और अधिकारिता मंत्रालय" },
  ],
  related: ["/service/caste-certificate.html", "/service/income-certificate.html", "/students/"],
  faq: [
    { q: "जाति प्रमाण पत्र का आवेदन किसे दें?", a: "अपनी तहसील के तहसीलदार या राज्य द्वारा तय सक्षम अधिकारी (SDM/अंचल अधिकारी) को। ज़्यादातर राज्यों में e-District पोर्टल या CSC से ऑनलाइन आवेदन होता है।" },
    { q: "OBC नॉन-क्रीमी लेयर की आय सीमा कितनी है?", a: "DoPT के 13 सितंबर 2017 के आदेश से ₹8 लाख सालाना। वेतन और खेती की आय इसकी गणना में अलग तरीके से देखी जाती है; नियम DoPT के आदेशों में हैं।" },
    { q: "जाति प्रमाण पत्र के लिए सबसे ज़रूरी कागज़ क्या है?", a: "पिता या किसी करीबी रिश्तेदार का जारी जाति प्रमाण पत्र, या पुराना राजस्व/स्कूल रिकॉर्ड जिसमें जाति लिखी हो। साथ में आधार और निवास का प्रमाण।" },
    { q: "जाति प्रमाण पत्र कितने दिन में बनता है?", a: "राज्य के सेवा का अधिकार कानून में तय दिनों में; हर राज्य में अलग। रसीद पर तय तारीख देखें और देरी हो तो अपील करें।" },
    { q: "क्या दूसरे राज्य में जाति प्रमाण पत्र बन सकता है?", a: "आम तौर पर आरक्षण का लाभ उसी राज्य में मिलता है जिसके आप मूल निवासी हैं। दूसरे राज्य में बसे लोग अक्सर मूल राज्य के प्रमाण पत्र के आधार पर ही प्रमाण पत्र पाते हैं; नियम राज्य के हिसाब से अलग हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
