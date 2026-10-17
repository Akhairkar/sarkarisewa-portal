import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Bharatiya Nagarik Suraksha Sanhita 2023 (in force 1 July 2024;
//   courtbook.in, SCC Online, Taxmann on MHA's NCR Rules 2025): s.173 FIR
//   for cognizable offences, free copy to informant; s.174(1) for
//   non-cognizable offences the officer records the substance in the
//   prescribed book (now a Non-Cognizable Report on CCTNS under the 2025
//   rules) and refers the informant to the Magistrate; s.174(2) police
//   cannot investigate a non-cognizable case without the Magistrate's order.
// - BNSS s.126 (= CrPC s.107): Executive Magistrate may require a person
//   likely to breach the peace to execute a bond for keeping the peace for up
//   to one year. BNSS s.152 (= CrPC s.133): conditional order for removal of
//   public nuisance (prashantkanha.com, vakeel360 comparisons).
// - Bharatiya Nyaya Sanhita 2023 sections used only as examples: s.115
//   voluntarily causing hurt, s.351 criminal intimidation, s.352 intentional
//   insult to provoke breach of peace, s.324 mischief, s.329 criminal
//   trespass, s.270 public nuisance. The letter leaves the choice of sections
//   to the police.
// - Emergency number 112 (ERSS).
export const neighbourNuisancePoliceComplaint: Letter = {
  slug: "neighbour-nuisance-police-complaint",
  category: "police",
  emoji: "🏘️",
  title: "Neighbour Complaint Letter to Police in Hindi 2026: पड़ोसी की शिकायत",
  description: "पड़ोसी गाली-गलौज, धमकी, झगड़ा, रास्ता रोकने या तोड़फोड़ से परेशान करे तो थाना प्रभारी को शिकायत पत्र (हिंदी/English)। NCR/FIR, BNSS धारा 126 का रास्ता।",
  h1: "पड़ोसी द्वारा परेशान करने की शिकायत: थाने में आवेदन पत्र 2026",
  short: { hi: "पड़ोसी की थाने में शिकायत", en: "Neighbour complaint to police" },
  lead: "पड़ोसी बार-बार <strong>गाली-गलौज, धमकी, मारपीट, रास्ता रोकने, कूड़ा/पानी फेंकने या तोड़फोड़</strong> से परेशान करे, तो अपने इलाके के <strong>थाना प्रभारी (SHO)</strong> को लिखित शिकायत दें। मामला संज्ञेय अपराध का हो (जैसे गंभीर चोट) तो <strong>FIR (BNSS धारा 173)</strong> दर्ज होती है; छोटे झगड़े-गाली के ज़्यादातर मामले असंज्ञेय होते हैं, जिनमें पुलिस <strong>NCR (धारा 174)</strong> लिखकर मजिस्ट्रेट के पास भेजती है। लगातार शांति भंग का डर हो तो पुलिस <strong>धारा 126</strong> के तहत SDM (कार्यपालक मजिस्ट्रेट) से पाबंद करवा सकती है।",
  facts: [
    ["किसे दें", "थाना प्रभारी (SHO), स्थानीय थाना"],
    ["संज्ञेय मामला", "FIR, BNSS धारा 173; कॉपी मुफ्त"],
    ["असंज्ञेय मामला", "NCR, BNSS धारा 174; आगे मजिस्ट्रेट के आदेश से जांच"],
    ["तुरंत खतरा", "112 पर कॉल करें"],
  ],
  to: "जिस थाना क्षेत्र में आप रहते हैं, उसके <strong>थाना प्रभारी / SHO</strong> को। कार्रवाई न हो तो कॉपी <strong>क्षेत्राधिकारी (CO/ACP)</strong> या <strong>पुलिस अधीक्षक</strong> को भेजें।",
  when: [
    "पड़ोसी बार-बार गाली देता है, धमकाता है या झगड़ा करता है",
    "घर के सामने रास्ता रोकना, गाड़ी/सामान रखकर आने-जाने में रुकावट",
    "कूड़ा, गंदा पानी फेंकना या घर/गाड़ी को नुकसान पहुंचाना",
    "महिलाओं/बुज़ुर्गों को डराना, घूरना या परेशान करना",
  ],
  fields: [
    { key: "station", label: { hi: "थाने का नाम और ज़िला", en: "Police station and district" }, required: true, placeholder: { hi: "जैसे: थाना कोतवाली, ज़िला बरेली", en: "e.g. Kotwali police station, Bareilly district" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's / husband's name" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "accused", label: { hi: "पड़ोसी का नाम और पता", en: "Neighbour's name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: श्री ___ पुत्र ___, मकान नं. ___ (बगल वाला मकान)", en: "e.g. Mr ___ s/o ___, house no. ___ (next door)" } },
    { key: "kind", label: { hi: "मुख्य परेशानी", en: "Main problem" }, type: "select", required: true, options: [
      { hi: "गाली-गलौज और जान से मारने की धमकी", en: "abuse and threats to kill" },
      { hi: "मारपीट / हाथापाई", en: "assault / physical fight" },
      { hi: "रास्ता रोकना और आने-जाने में रुकावट", en: "blocking the way and obstructing movement" },
      { hi: "घर/सामान को नुकसान पहुंचाना, कूड़ा/गंदा पानी फेंकना", en: "damaging house/property, throwing garbage/dirty water" },
      { hi: "परिवार की महिलाओं/बुज़ुर्गों को परेशान करना", en: "harassing women/elderly members of the family" },
    ] },
    { key: "incidents", label: { hi: "घटनाएं (तारीख, समय, क्या हुआ)", en: "Incidents (date, time, what happened)" }, type: "textarea", required: true, placeholder: { hi: "1. 05/10/2026 रात 9 बजे: गेट के सामने गाली दी, धमकी दी\n2. 12/10/2026: मेरी बाइक का शीशा तोड़ा", en: "1. 05/10/2026, 9 pm: abused and threatened at the gate\n2. 12/10/2026: broke my bike's mirror" } },
    { key: "witness", label: { hi: "गवाह (नाम, मोबाइल)", en: "Witnesses (name, mobile)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
थाना प्रभारी महोदय,
{{station}}

विषय: पड़ोसी {{accused}} द्वारा लगातार परेशान करने के संबंध में शिकायत।

महोदय,

मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, निवासी {{address}}, आपको सूचित करना चाहता/चाहती हूं कि मेरे पड़ोसी {{accused}} द्वारा मुझे और मेरे परिवार को काफी समय से परेशान किया जा रहा है। मुख्य समस्या: {{kind}}।

घटनाओं का विवरण:
{{incidents}}

गवाह: {{witness}}

मैंने कई बार शांति से बात करने की कोशिश की, पर व्यवहार में सुधार नहीं हुआ। इससे मेरे परिवार में डर का माहौल है और किसी भी समय बड़ी घटना होने की आशंका है।

अतः आपसे निवेदन है कि:
1. मेरी शिकायत को कानून के अनुसार दर्ज करें (संज्ञेय अपराध हो तो FIR, अन्यथा NCR) और मुझे उसकी प्रति दें;
2. पड़ोसी को बुलाकर सख्त चेतावनी दें और आवश्यकता हो तो भारतीय नागरिक सुरक्षा संहिता 2023 की धारा 126 के तहत शांति बनाए रखने की कार्यवाही करें;
3. मेरे परिवार की सुरक्षा सुनिश्चित करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न: फोटो/वीडियो/ऑडियो रिकॉर्डिंग की कॉपी (पेन ड्राइव/प्रिंट), मेडिकल रिपोर्ट (यदि चोट हो), गवाहों के नाम

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Station House Officer,
{{station}}

Subject: Complaint regarding continuous harassment by neighbour {{accused}}.

Sir,

I, {{name}}, son/daughter/wife of {{father}}, resident of {{address}}, wish to inform you that my neighbour {{accused}} has been harassing me and my family for a long time. Main problem: {{kind}}.

Details of incidents:
{{incidents}}

Witnesses: {{witness}}

I have tried several times to settle the matter peacefully, but the behaviour has not changed. My family lives in fear and there is an apprehension of a serious incident at any time.

I therefore request you to:
1. Record my complaint as per law (FIR if a cognizable offence is made out, otherwise an NCR) and give me a copy;
2. Call the neighbour and give a strict warning and, if necessary, initiate proceedings for keeping the peace under Section 126 of the Bharatiya Nagarik Suraksha Sanhita, 2023;
3. Ensure the safety of my family.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures: copies of photos/videos/audio recordings (pen drive/print), medical report (if injured), names of witnesses

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "घटनाओं की फोटो, वीडियो या ऑडियो रिकॉर्डिंग (पेन ड्राइव या प्रिंट)",
    "चोट लगी हो तो सरकारी अस्पताल की मेडिकल रिपोर्ट (MLC)",
    "नुकसान का सबूत: टूटे सामान की फोटो, मरम्मत का बिल",
    "गवाहों के नाम-पते और पहले दी गई शिकायतों की कॉपी",
  ],
  submit: [
    "तुरंत झगड़ा या मारपीट हो रही हो तो पहले <strong>112</strong> पर कॉल करें।",
    "पत्र की दो कॉपी लेकर थाने जाएं, एक जमा करें और दूसरी पर मुहर/तारीख वाली रिसीविंग लें; FIR या NCR हो तो उसकी कॉपी/नंबर लें।",
    "कई राज्यों के पुलिस सिटिजन पोर्टल/ऐप पर भी ऑनलाइन शिकायत होती है; उसकी शिकायत संख्या संभालें।",
    "थाना कार्रवाई न करे तो क्षेत्राधिकारी/SP को लिखें; संज्ञेय मामले में FIR न लिखी जाए तो SP को BNSS 173(4) में डाक से शिकायत का रास्ता है। NCR मामले में आप सीधे मजिस्ट्रेट के पास शिकायत कर सकते हैं।",
  ],
  tips: [
    "घटनाएं तारीख-समय के साथ एक डायरी में लिखते रहें; यही बाद में सबसे बड़ा सबूत बनता है।",
    "बदले में गाली या मारपीट न करें, वरना क्रॉस शिकायत में आप भी फंस सकते हैं।",
    "ज़मीन/दीवार/रास्ते की सीमा का विवाद हो तो वह तहसील या सिविल अदालत का मामला भी है; पैमाइश करवाएं।",
    "तेज़ आवाज़ (DJ/लाउडस्पीकर) की परेशानी के लिए हमारा अलग ध्वनि प्रदूषण शिकायत पत्र देखें।",
    "झूठी या बढ़ा-चढ़ाकर लिखी शिकायत खुद आपके खिलाफ जा सकती है।",
  ],
  notice: "यह पत्र कानूनी सलाह नहीं है। गंभीर मामलों में ज़िला विधिक सेवा प्राधिकरण (DLSA) से मुफ्त कानूनी सलाह लें (NALSA हेल्पलाइन 15100)।",
  official: [
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (गृह मंत्रालय)", note: "राज्य पुलिस के सिटिजन पोर्टल" },
    { href: "https://nalsa.gov.in/", title: "NALSA (मुफ्त कानूनी सहायता)", note: "हेल्पलाइन 15100" },
  ],
  related: ["/support/helpline-directory.html", "/support/rti-guide.html"],
  faq: [
    { q: "पड़ोसी परेशान करे तो क्या करें?", a: "घटनाएं तारीख के साथ लिखें, सबूत रखें और थाना प्रभारी को लिखित शिकायत दें। तुरंत खतरा हो तो 112 पर कॉल करें।" },
    { q: "पुलिस NCR क्यों लिखती है, FIR क्यों नहीं?", a: "गाली-गलौज, मामूली मारपीट जैसे कई अपराध असंज्ञेय होते हैं। ऐसे मामलों में BNSS धारा 174 के तहत पुलिस NCR दर्ज करती है और मजिस्ट्रेट के आदेश के बिना जांच नहीं कर सकती। गंभीर चोट, तोड़फोड़ में बड़ा नुकसान जैसे संज्ञेय मामलों में FIR होती है।" },
    { q: "धारा 126 BNSS क्या है?", a: "पुरानी CrPC 107 की जगह आई यह धारा कार्यपालक मजिस्ट्रेट (आम तौर पर SDM) को अधिकार देती है कि शांति भंग की आशंका वाले व्यक्ति से एक साल तक शांति बनाए रखने का बॉन्ड भरवाए। पुलिस इसकी रिपोर्ट भेजती है।" },
    { q: "थाना शिकायत न ले तो?", a: "क्षेत्राधिकारी/पुलिस अधीक्षक को लिखें। संज्ञेय अपराध में FIR न लिखे जाने पर BNSS धारा 173(4) के तहत SP को डाक से शिकायत भेजें, फिर मजिस्ट्रेट के पास जा सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
