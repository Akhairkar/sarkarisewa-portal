import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - National Food Security Act 2013 (indiacode.nic.in): s.4(a) every pregnant
//   woman and lactating mother entitled to a free meal during pregnancy and
//   six months after childbirth through the local anganwadi; s.4(b)
//   maternity benefit of not less than Rs 6,000 (PMMVY); s.5(1)(a) children
//   aged 6 months to 6 years entitled to an age-appropriate free meal through
//   the local anganwadi; s.8 food security allowance on non-supply; s.15
//   District Grievance Redressal Officer; s.16 State Food Commission.
// - Supplementary Nutrition (under the ICDS Scheme) Rules 2017 (casemine copy
//   of the notification; Rajya Sabha reply 2018): entitlements under ss.4-6
//   given through the Supplementary Nutrition Programme of Anganwadi Services
//   for 300 days a year; take-home ration for children 6-36 months and for
//   pregnant/lactating women, morning snack and hot cooked meal for children
//   3-6 years; extra nutrition for malnourished children; State/UT
//   responsible for uninterrupted supply (r.9).
// - Anganwadi services are run at block level by the Child Development
//   Project Officer (CDPO) and at district level by the District Programme
//   Officer (DPO) of the Women & Child Development department (names of posts
//   vary slightly by state).
export const anganwadiComplaintLetter: Letter = {
  slug: "anganwadi-complaint-letter",
  category: "complaint",
  emoji: "🍼",
  title: "Anganwadi Complaint Letter in Hindi 2026: पोषाहार न मिलने की शिकायत",
  description: "आंगनवाड़ी से बच्चों, गर्भवती या धात्री महिलाओं को पोषाहार/टेक होम राशन न मिले या केंद्र न खुले तो CDPO को शिकायत पत्र (हिंदी/English)। NFSA धारा 4-5।",
  h1: "आंगनवाड़ी शिकायत पत्र 2026: पोषाहार या सेवा न मिलने पर CDPO को लिखें",
  short: { hi: "आंगनवाड़ी शिकायत पत्र", en: "Anganwadi complaint" },
  lead: "<strong>राष्ट्रीय खाद्य सुरक्षा अधिनियम 2013</strong> की <strong>धारा 4</strong> के तहत गर्भवती और धात्री (दूध पिलाने वाली) महिलाओं को और <strong>धारा 5</strong> के तहत <strong>6 महीने से 6 साल</strong> के बच्चों को स्थानीय आंगनवाड़ी से मुफ्त पोषाहार पाने का कानूनी हक है; नियम के अनुसार यह साल में <strong>300 दिन</strong> मिलना चाहिए। राशन न मिले, कम मिले, केंद्र न खुले या नाम न जोड़ा जाए, तो ब्लॉक के <strong>बाल विकास परियोजना अधिकारी (CDPO)</strong> को यह शिकायत दें।",
  facts: [
    ["कानूनी हक", "NFSA 2013 धारा 4, 5; पूरक पोषण (ICDS) नियम 2017"],
    ["किसे दें", "बाल विकास परियोजना अधिकारी (CDPO), ब्लॉक"],
    ["आगे", "ज़िला कार्यक्रम अधिकारी (DPO) → ज़िला शिकायत निवारण अधिकारी → राज्य खाद्य आयोग"],
    ["न मिलने पर", "धारा 8: खाद्य सुरक्षा भत्ता (राशि राज्य के नियम से)"],
  ],
  to: "आपके ब्लॉक/परियोजना के <strong>बाल विकास परियोजना अधिकारी (CDPO)</strong> को, जो आंगनवाड़ी केंद्रों की निगरानी करते हैं। कार्रवाई न हो तो <strong>ज़िला कार्यक्रम अधिकारी (महिला एवं बाल विकास)</strong> और <strong>ज़िलाधिकारी</strong> को।",
  when: [
    "बच्चे या गर्भवती/धात्री महिला को टेक होम राशन (THR) या पोषाहार नहीं मिल रहा",
    "3 से 6 साल के बच्चों को केंद्र पर नाश्ता/गर्म खाना नहीं मिलता",
    "आंगनवाड़ी केंद्र नियमित नहीं खुलता या हमेशा बंद रहता है",
    "राशन कम, खराब या एक्सपायरी तारीख वाला मिलता है",
    "बच्चे या महिला का नाम केंद्र में दर्ज नहीं किया जा रहा",
  ],
  fields: [
    { key: "office", label: { hi: "CDPO कार्यालय का पता", en: "CDPO office address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: बाल विकास परियोजना अधिकारी, परियोजना सदर, गया", en: "e.g. Child Development Project Officer, Sadar project, Gaya" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "beneficiary", label: { hi: "लाभार्थी कौन", en: "Beneficiary" }, type: "select", required: true, options: [
      { hi: "मेरा बच्चा (6 महीने से 3 साल)", en: "my child (6 months to 3 years)" },
      { hi: "मेरा बच्चा (3 से 6 साल)", en: "my child (3 to 6 years)" },
      { hi: "मैं गर्भवती महिला हूं", en: "myself, a pregnant woman" },
      { hi: "मैं धात्री माता हूं (बच्चा 6 महीने से छोटा)", en: "myself, a lactating mother (child under 6 months)" },
      { hi: "गांव/मोहल्ले के कई लाभार्थी", en: "several beneficiaries of the village/locality" },
    ] },
    { key: "child", label: { hi: "बच्चे का नाम और उम्र (अगर लागू)", en: "Child's name and age (if applicable)" } },
    { key: "centre", label: { hi: "आंगनवाड़ी केंद्र का नाम/कोड और गांव/वार्ड", en: "Anganwadi centre name/code and village/ward" }, required: true },
    { key: "problem", label: { hi: "समस्या", en: "Problem" }, type: "select", required: true, options: [
      { hi: "पोषाहार / टेक होम राशन नहीं मिल रहा है", en: "supplementary nutrition / take-home ration is not being given" },
      { hi: "पोषाहार कम मात्रा में या खराब गुणवत्ता का मिल रहा है", en: "nutrition is given in short quantity or of poor quality" },
      { hi: "आंगनवाड़ी केंद्र नियमित रूप से नहीं खुलता", en: "the anganwadi centre does not open regularly" },
      { hi: "लाभार्थी का नाम केंद्र में दर्ज नहीं किया जा रहा", en: "the beneficiary is not being registered at the centre" },
      { hi: "टीकाकरण/वज़न/स्वास्थ्य जांच की सेवा नहीं मिल रही", en: "immunisation/weighing/health check-up services are not provided" },
    ] },
    { key: "since", label: { hi: "कब से", en: "Since when" }, required: true, placeholder: { hi: "जैसे: जुलाई 2026 से", en: "e.g. since July 2026" } },
    { key: "details", label: { hi: "विवरण", en: "Details" }, type: "textarea", required: true, placeholder: { hi: "किससे शिकायत की, उन्होंने क्या कहा; कितने परिवार प्रभावित", en: "Whom you told, what they said; how many families affected" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: आंगनवाड़ी केंद्र {{centre}} में पोषाहार/सेवाएं न मिलने की शिकायत।

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, आपको सूचित करना चाहती/चाहता हूं कि आंगनवाड़ी केंद्र {{centre}} पर {{problem}}। यह स्थिति {{since}} से है।

लाभार्थी: {{beneficiary}}। बच्चे का नाम/उम्र: {{child}}

विवरण:
{{details}}

राष्ट्रीय खाद्य सुरक्षा अधिनियम 2013 की धारा 4 और 5 तथा पूरक पोषण (ICDS) नियम 2017 के अनुसार गर्भवती/धात्री महिलाओं और 6 माह से 6 वर्ष तक के बच्चों को स्थानीय आंगनवाड़ी से निःशुल्क पोषाहार पाने का कानूनी अधिकार है।

अतः आपसे निवेदन है कि:
1. केंद्र की जांच कराकर नियमित पोषाहार और सेवाएं तुरंत शुरू कराएं;
2. जिन लाभार्थियों का नाम दर्ज नहीं है, उनका नाम दर्ज कराएं;
3. जिस अवधि में पोषाहार नहीं मिला, उसके लिए धारा 8 के तहत नियमानुसार खाद्य सुरक्षा भत्ता दिलाएं;
4. की गई कार्रवाई की सूचना मुझे दें।

भवदीया/भवदीय,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न: लाभार्थी का पहचान पत्र, MCP (जच्चा-बच्चा) कार्ड की कॉपी, अन्य परिवारों के हस्ताक्षर (जो उपलब्ध हों)

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint regarding non-provision of supplementary nutrition/services at anganwadi centre {{centre}}.

Sir/Madam,

I, {{name}}, resident of {{address}}, wish to inform you that at anganwadi centre {{centre}}, {{problem}}. This has been the case {{since}}.

Beneficiary: {{beneficiary}}. Child's name/age: {{child}}

Details:
{{details}}

Under Sections 4 and 5 of the National Food Security Act, 2013 and the Supplementary Nutrition (under ICDS) Rules, 2017, pregnant women, lactating mothers and children aged 6 months to 6 years have a legal right to free nutrition through the local anganwadi.

I therefore request you to:
1. Get the centre inspected and immediately restore regular nutrition and services;
2. Register the beneficiaries whose names have not been entered;
3. Provide food security allowance under Section 8, as per rules, for the period nutrition was not given;
4. Inform me of the action taken.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Enclosures: beneficiary's ID, copy of MCP (Mother and Child Protection) card, signatures of other families (whichever are available)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "लाभार्थी का आधार/पहचान पत्र की कॉपी",
    "MCP (जच्चा-बच्चा सुरक्षा) कार्ड या पंजीकरण का कोई सबूत",
    "केंद्र बंद होने या खराब राशन की फोटो (तारीख सहित)",
    "दूसरे प्रभावित परिवारों के नाम और हस्ताक्षर",
  ],
  submit: [
    "पहले आंगनवाड़ी कार्यकर्ता और सुपरवाइज़र (मुख्य सेविका) से बात करें; ग्राम सभा/ग्राम स्वास्थ्य पोषण दिवस पर भी बात रख सकते हैं।",
    "हल न हो तो यह पत्र CDPO कार्यालय में जमा करें और कॉपी पर रिसीविंग लें, या रजिस्टर्ड डाक से भेजें।",
    "राज्य की CM हेल्पलाइन/जन शिकायत पोर्टल पर भी शिकायत दर्ज कर सकते हैं।",
    "कार्रवाई न हो तो ज़िला कार्यक्रम अधिकारी (DPO) और ज़िलाधिकारी को लिखें; NFSA के तहत <strong>ज़िला शिकायत निवारण अधिकारी</strong> और फिर <strong>राज्य खाद्य आयोग</strong> में शिकायत होती है।",
  ],
  tips: [
    "कार्यकर्ता पर व्यक्तिगत आरोप की जगह तारीखें और तथ्य लिखें; कई बार कमी ऊपर से राशन न आने की होती है, जांच उसी से पता चलेगी।",
    "लाभार्थी का नाम आंगनवाड़ी में दर्ज होना ज़रूरी है; नाम दर्ज कराने के लिए आधार या पहचान का सबूत दें।",
    "गर्भवती महिला PM मातृ वंदना योजना (पहली संतान पर ₹5,000, दूसरी बेटी पर ₹6,000) के लिए भी आंगनवाड़ी से ही आवेदन कर सकती है।",
    "बच्चा बहुत कमज़ोर (कुपोषित) दिखे तो पत्र में ज़रूर लिखें; ऐसे बच्चों को अतिरिक्त पोषण और रेफरल का नियम है।",
  ],
  official: [
    { href: "https://wcd.gov.in/", title: "महिला एवं बाल विकास मंत्रालय", note: "मिशन पोषण 2.0 / आंगनवाड़ी सेवाएं" },
    { href: "https://www.indiacode.nic.in/", title: "India Code (NFSA 2013 का पाठ)" },
  ],
  related: ["/service/pm-matru-vandana-yojana.html", "/service/ration-card.html", "/service/midday-meal-scheme.html"],
  faq: [
    { q: "आंगनवाड़ी की शिकायत कहां करें?", a: "ब्लॉक के बाल विकास परियोजना अधिकारी (CDPO) को लिखित में। उसके बाद ज़िला कार्यक्रम अधिकारी, ज़िलाधिकारी, NFSA के ज़िला शिकायत निवारण अधिकारी और राज्य खाद्य आयोग में।" },
    { q: "आंगनवाड़ी से किसे पोषाहार मिलता है?", a: "6 महीने से 6 साल तक के बच्चों, गर्भवती महिलाओं और बच्चे के जन्म के 6 महीने तक धात्री माताओं को। 6 महीने से 3 साल के बच्चों और महिलाओं को टेक होम राशन, 3 से 6 साल के बच्चों को केंद्र पर नाश्ता और गर्म खाना।" },
    { q: "आंगनवाड़ी से साल में कितने दिन पोषाहार मिलना चाहिए?", a: "पूरक पोषण नियम 2017 के अनुसार साल में 300 दिन।" },
    { q: "पोषाहार न मिले तो क्या पैसा मिलता है?", a: "NFSA की धारा 8 के अनुसार हकदार को भोजन न मिलने पर राज्य सरकार खाद्य सुरक्षा भत्ता देती है। राशि और तरीका राज्य के नियम से तय होते हैं, CDPO कार्यालय से पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
