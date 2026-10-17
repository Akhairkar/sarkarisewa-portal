import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Constitution of India, Article 243G and the Eleventh Schedule (73rd
//   Amendment): panchayats may be entrusted with drinking water, rural roads,
//   drains, sanitation, rural electrification incl. street lights etc.;
//   actual powers and funds are given by each State's Panchayati Raj Act.
// - Ministry of Panchayati Raj, eGramSwaraj (egramswaraj.gov.in): Gram
//   Panchayat Development Plan (GPDP), works and expenditure of each
//   panchayat are uploaded and can be viewed by citizens; GPDP is prepared
//   and approved in the Gram Sabha.
// - Practice reports (CGNet Swara, 2013-2026) show broken handpumps are
//   handled either by the panchayat or by the State PHED / Jal Nigam, with
//   escalation to the Block Development Officer / Janpad CEO; the page tells
//   readers to copy both and does not name a fixed agency.
// - Escalation chain (Panchayat Secretary → BDO → District Panchayat Raj
//   Officer / CEO Zila Parishad → District Magistrate) varies by state in
//   designation; given generally.
export const gramPanchayatApplicationSarpanch: Letter = {
  slug: "gram-panchayat-application-sarpanch",
  category: "municipal",
  emoji: "🌾",
  title: "Gram Panchayat Application in Hindi 2026: सरपंच/ग्राम प्रधान को पत्र",
  description: "हैंडपंप, नाली, सड़क, स्ट्रीट लाइट जैसे गांव के काम के लिए सरपंच/ग्राम प्रधान को आवेदन पत्र (हिंदी/English)। ग्राम सभा, eGramSwaraj और BDO तक शिकायत।",
  h1: "ग्राम पंचायत / सरपंच को आवेदन पत्र 2026: हैंडपंप, नाली, सड़क के लिए",
  short: { hi: "सरपंच/ग्राम प्रधान को आवेदन", en: "Application to Sarpanch" },
  lead: "गांव में <strong>हैंडपंप/पानी, नाली, खड़ंजा-सड़क, सफाई, स्ट्रीट लाइट</strong> जैसे काम संविधान की <strong>11वीं अनुसूची</strong> के तहत ग्राम पंचायत के ज़िम्मे दिए जा सकते हैं; किस काम का पैसा और अधिकार पंचायत के पास है, यह राज्य का पंचायती राज कानून तय करता है। काम के लिए <strong>सरपंच/ग्राम प्रधान</strong> और <strong>पंचायत सचिव</strong> को लिखित आवेदन दें और <strong>ग्राम सभा</strong> में मांग उठाएं, ताकि वह पंचायत की विकास योजना (GPDP) में जुड़े। पंचायत के काम और खर्च <strong>eGramSwaraj</strong> पोर्टल पर देखे जा सकते हैं।",
  facts: [
    ["किसे दें", "सरपंच / ग्राम प्रधान और ग्राम पंचायत सचिव"],
    ["कहां उठाएं", "ग्राम सभा की बैठक (विकास योजना GPDP यहीं बनती है)"],
    ["पंचायत का हिसाब", '<a href="https://egramswaraj.gov.in/" target="_blank" rel="noopener nofollow">egramswaraj.gov.in</a>'],
    ["सुनवाई न हो तो", "खंड विकास अधिकारी (BDO) → ज़िला पंचायत राज अधिकारी / CEO ज़िला परिषद"],
  ],
  to: "अपने गांव के <strong>सरपंच / ग्राम प्रधान / मुखिया</strong> को, कॉपी <strong>ग्राम पंचायत सचिव (ग्राम सेवक/पंचायत सेक्रेटरी)</strong> को। हैंडपंप/पाइप पानी की ज़िम्मेदारी कई राज्यों में <strong>जल निगम / PHED</strong> की है; तब कॉपी उनके अवर अभियंता को भी दें।",
  when: [
    "गांव/मोहल्ले का हैंडपंप खराब है या पानी की टंकी/नल नहीं चल रहा",
    "नाली टूटी या जाम है, गंदा पानी रास्ते में भर रहा है",
    "गली का खड़ंजा/सीसी रोड टूटा है या रास्ता नहीं बना",
    "स्ट्रीट लाइट खराब है, कूड़ा नहीं उठता या सामुदायिक शौचालय बंद है",
  ],
  fields: [
    { key: "panchayat", label: { hi: "ग्राम पंचायत, ब्लॉक और ज़िला", en: "Gram panchayat, block and district" }, required: true, placeholder: { hi: "जैसे: ग्राम पंचायत रामपुर, ब्लॉक सदर, ज़िला सीतापुर", en: "e.g. Gram Panchayat Rampur, Sadar block, Sitapur district" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's / husband's name" } },
    { key: "ward", label: { hi: "वार्ड / मोहल्ला / टोला", en: "Ward / hamlet" }, required: true },
    { key: "work", label: { hi: "किस काम के लिए", en: "Work needed" }, type: "select", required: true, options: [
      { hi: "खराब हैंडपंप की मरम्मत / नया हैंडपंप लगवाना", en: "repair of the broken handpump / installation of a new handpump" },
      { hi: "टूटी/जाम नाली की मरम्मत और सफाई", en: "repair and cleaning of the broken/choked drain" },
      { hi: "गली का खड़ंजा / सीसी सड़क बनवाना या मरम्मत", en: "construction or repair of the lane (brick/CC road)" },
      { hi: "स्ट्रीट लाइट लगवाना / ठीक करवाना", en: "installation/repair of street lights" },
      { hi: "कूड़ा उठवाना और सफाई की व्यवस्था", en: "garbage collection and cleaning arrangements" },
    ] },
    { key: "location", label: { hi: "सही जगह (किसके घर के पास, लैंडमार्क)", en: "Exact location (near whose house, landmark)" }, required: true },
    { key: "problem", label: { hi: "समस्या का विवरण (कब से, कितने परिवार प्रभावित)", en: "Problem details (since when, families affected)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 2 महीने से हैंडपंप खराब, 25 परिवारों को 1 किमी दूर से पानी लाना पड़ रहा है", en: "e.g. Handpump broken for 2 months; 25 families fetch water from 1 km away" } },
    { key: "earlier", label: { hi: "पहले कब शिकायत की (अगर की हो)", en: "Earlier complaint (if any)" }, placeholder: { hi: "जैसे: 10/09/2026 को सचिव को मौखिक रूप से बताया", en: "e.g. Told the secretary orally on 10/09/2026" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान (गांव)", en: "Place (village)" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान सरपंच / ग्राम प्रधान महोदय,
{{panchayat}}

विषय: {{ward}} में {{work}} हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, ग्राम पंचायत के {{ward}} का/की निवासी हूं। आपका ध्यान हमारे क्षेत्र की इस समस्या की ओर दिलाना चाहता/चाहती हूं:

स्थान: {{location}}

समस्या:
{{problem}}

पहले की गई शिकायत: {{earlier}}

इस समस्या से गांव के लोगों, खासकर बच्चों, महिलाओं और बुज़ुर्गों को बहुत परेशानी हो रही है।

अतः आपसे निवेदन है कि {{work}} का काम जल्द से जल्द कराने की कृपा करें। यदि यह काम पंचायत की वर्तमान निधि से तुरंत संभव न हो, तो कृपया इसे अगली ग्राम सभा में रखकर ग्राम पंचायत विकास योजना (GPDP) में शामिल करें, या संबंधित विभाग को भेजें, और मुझे की गई कार्रवाई की जानकारी दें।

हम सभी ग्रामवासी इस काम में पूरा सहयोग देंगे।

प्रार्थी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
मोबाइल: {{phone}}

प्रतिलिपि: ग्राम पंचायत सचिव, {{panchayat}}

संलग्न: समस्या की फोटो, प्रभावित ग्रामवासियों के नाम व हस्ताक्षर

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Sarpanch / Gram Pradhan,
{{panchayat}}

Subject: Application for {{work}} in {{ward}}.

Respected Sir/Madam,

I, {{name}}, son/daughter/wife of {{father}}, am a resident of {{ward}} of the gram panchayat. I wish to draw your attention to the following problem in our area:

Location: {{location}}

Problem:
{{problem}}

Earlier complaint: {{earlier}}

This problem is causing great hardship to the villagers, especially children, women and the elderly.

I therefore request you to kindly get the work of {{work}} done at the earliest. If it is not immediately possible from the panchayat's present funds, kindly place it before the next Gram Sabha for inclusion in the Gram Panchayat Development Plan (GPDP), or forward it to the concerned department, and inform me of the action taken.

All of us villagers will fully cooperate in this work.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Copy to: Secretary, Gram Panchayat, {{panchayat}}

Enclosures: photos of the problem, names and signatures of affected villagers

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "समस्या की फोटो (टूटा हैंडपंप, जाम नाली, टूटी सड़क) तारीख के साथ",
    "प्रभावित परिवारों के नाम, हस्ताक्षर/अंगूठा (सामूहिक आवेदन ज़्यादा असर करता है)",
    "पहले दी गई शिकायत की रिसीविंग या शिकायत संख्या, अगर हो",
  ],
  submit: [
    "पत्र की दो कॉपी बनाएं: सरपंच/प्रधान या पंचायत सचिव को दें और दूसरी पर तारीख वाली रिसीविंग लें (पंचायत भवन में आवक रजिस्टर में दर्ज करवाएं)।",
    "अगली <strong>ग्राम सभा</strong> की बैठक में खुद जाकर मांग रखें और कार्यवाही में दर्ज करवाएं; ग्राम पंचायत की विकास योजना वहीं मंज़ूर होती है।",
    'पंचायत ने कौन-से काम मंज़ूर किए और कितना खर्च हुआ, यह <a href="https://egramswaraj.gov.in/" target="_blank" rel="noopener nofollow">eGramSwaraj</a> पर पंचायत चुनकर देखें।',
    "सुनवाई न हो तो कॉपी के साथ <strong>खंड विकास अधिकारी (BDO)</strong> को, फिर ज़िला पंचायत राज अधिकारी / CEO ज़िला परिषद या ज़िलाधिकारी को लिखें; राज्य की CM हेल्पलाइन पर भी शिकायत कर सकते हैं।",
  ],
  tips: [
    "एक पत्र में एक ही काम लिखें; कई काम हों तो अलग-अलग आवेदन दें।",
    "जगह बिल्कुल साफ लिखें (किसके घर के सामने, कौन-सा हैंडपंप), ताकि जांच में आसानी हो।",
    "पंचायत से लिखित जवाब न मिले तो RTI से अपने आवेदन पर कार्रवाई और पंचायत के कामों का हिसाब मांग सकते हैं।",
    "पीने के पानी की लाइन/नल जल योजना की शिकायत जल जीवन मिशन के तहत जल निगम/PHED को भी दें।",
  ],
  official: [
    { href: "https://egramswaraj.gov.in/", title: "eGramSwaraj (पंचायती राज मंत्रालय)", note: "पंचायत की योजना, काम और खर्च" },
    { href: "https://panchayat.gov.in/", title: "पंचायती राज मंत्रालय" },
  ],
  related: ["/service/national-water-grid-jal-jeevan.html", "/service/swachh-bharat-sanitation-complaint.html", "/service/pm-gram-sadak-yojana.html", "/support/rti-guide.html"],
  faq: [
    { q: "ग्राम प्रधान को आवेदन कैसे लिखें?", a: "'सेवा में, श्रीमान ग्राम प्रधान/सरपंच' से शुरू करें, विषय में काम लिखें (जैसे हैंडपंप मरम्मत), फिर जगह, समस्या, कितने लोग प्रभावित और आपका निवेदन लिखें। ऊपर फॉर्म भरकर तैयार पत्र प्रिंट करें।" },
    { q: "सरपंच काम न करे तो शिकायत कहां करें?", a: "खंड विकास अधिकारी (BDO) को, फिर ज़िला पंचायत राज अधिकारी या CEO ज़िला परिषद और ज़िलाधिकारी को। राज्य की CM हेल्पलाइन/जन शिकायत पोर्टल भी है।" },
    { q: "पंचायत का खर्च और काम कैसे देखें?", a: "eGramSwaraj पोर्टल (egramswaraj.gov.in) पर राज्य, ज़िला, ब्लॉक और पंचायत चुनकर विकास योजना, मंज़ूर काम और खर्च देख सकते हैं। RTI से भी जानकारी मांग सकते हैं।" },
    { q: "खराब हैंडपंप किसकी ज़िम्मेदारी है?", a: "यह राज्य पर निर्भर है: कई राज्यों में ग्राम पंचायत, और कई में जल निगम/PHED हैंडपंप ठीक करता है। पत्र सरपंच को दें और कॉपी PHED/जल निगम के अवर अभियंता को भी भेजें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
