import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - National Food Security Act 2013 (indiacode.nic.in): s.3 entitlement
//   5 kg per person per month for priority households, 35 kg per family for
//   AAY; s.14 internal grievance redressal (toll-free call centres,
//   helplines, nodal officers); s.15 District Grievance Redressal Officer
//   (DGRO) hears complaints on non-distribution of entitled foodgrains;
//   appeal against DGRO order to State Food Commission (s.15(3), s.16).
// - PIB (Nov 2023 / Jan 2024): foodgrains free under PMGKAY for NFSA
//   beneficiaries for five years from 1 Jan 2024.
// - State helplines differ (e.g. 1967 in several states, Maharashtra
//   1800-22-4950; mahafood.gov.in, food.wb.gov.in); CAG 2016 found some
//   numbers inactive - page tells reader to check the state number.
export const rationDealerComplaintLetter: Letter = {
  slug: "ration-dealer-complaint-letter",
  category: "complaint",
  emoji: "🌾",
  title: "Ration Dealer Complaint Letter in Hindi 2026: कोटेदार शिकायत पत्र",
  description: "राशन डीलर/कोटेदार कम राशन दे, पैसे मांगे या दुकान न खोले तो जिला आपूर्ति अधिकारी को शिकायत पत्र (हिंदी/English)। NFSA के तहत शिकायत और अपील का रास्ता।",
  h1: "राशन डीलर शिकायत पत्र 2026: कम राशन या पैसे मांगने पर ऐसे करें शिकायत",
  short: { hi: "राशन डीलर शिकायत", en: "Ration dealer complaint" },
  lead: "राशन डीलर (कोटेदार/सस्ते गल्ले की दुकान) कम तौल दे, पैसे वसूले, पर्ची न दे, अंगूठा लगवाकर राशन न दे या दुकान न खोले, तो <strong>जिला आपूर्ति अधिकारी (DSO)</strong> या ज़िले के <strong>शिकायत निवारण अधिकारी</strong> को लिखित शिकायत करें। राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA) 2013 में प्राथमिकता परिवार को <strong>5 किलो प्रति व्यक्ति</strong> और अंत्योदय को <strong>35 किलो प्रति परिवार</strong> हर महीने का हक है, और 1 जनवरी 2024 से यह अनाज <strong>मुफ्त</strong> है। ज़िले में हल न हो तो <strong>राज्य खाद्य आयोग</strong> में अपील होती है।",
  facts: [
    ["किसे दें", "जिला आपूर्ति अधिकारी / ज़िला शिकायत निवारण अधिकारी (NFSA धारा 15)"],
    ["हक (NFSA)", "PHH: 5 किलो/व्यक्ति; अंत्योदय: 35 किलो/परिवार; अनाज मुफ्त"],
    ["हेल्पलाइन", "राज्य की खाद्य विभाग हेल्पलाइन (कई राज्यों में 1967)"],
    ["अपील", "राज्य खाद्य आयोग (NFSA धारा 15-16)"],
  ],
  to: "अपने ज़िले के <strong>जिला आपूर्ति अधिकारी (DSO) / जिला खाद्य एवं आपूर्ति अधिकारी</strong> को, जिन्हें कई राज्यों में NFSA के तहत <strong>जिला शिकायत निवारण अधिकारी</strong> बनाया गया है। कुछ राज्यों में यह ज़िम्मेदारी अपर ज़िलाधिकारी (ADM) की है; शहर में राशनिंग अधिकारी/खाद्य निरीक्षक, गांव में प्रखंड आपूर्ति अधिकारी को भी कॉपी दे सकते हैं।",
  when: [
    "डीलर तय मात्रा से कम राशन दे रहा है या तौल में गड़बड़ी है",
    "मुफ्त राशन के लिए पैसे मांगे जा रहे हैं",
    "मशीन पर अंगूठा लगवाकर राशन नहीं दिया या \"स्टॉक खत्म\" कहा",
    "दुकान समय पर नहीं खुलती या पर्ची/रसीद नहीं दी जाती",
    "खराब, गीला या मिलावटी अनाज दिया गया",
  ],
  fields: [
    { key: "district", label: { hi: "ज़िला (DSO दफ्तर)", en: "District (DSO office)" }, required: true, placeholder: { hi: "जैसे: गया, बिहार", en: "e.g. Gaya, Bihar" } },
    { key: "name", label: { hi: "आपका नाम (कार्ड का मुखिया)", en: "Your name (card head)" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "card", label: { hi: "राशन कार्ड नंबर", en: "Ration card number" }, required: true },
    { key: "cardtype", label: { hi: "कार्ड का प्रकार", en: "Card type" }, type: "select", options: [
      { hi: "प्राथमिकता परिवार (PHH)", en: "Priority Household (PHH)" },
      { hi: "अंत्योदय अन्न योजना (AAY)", en: "Antyodaya Anna Yojana (AAY)" },
      { hi: "राज्य योजना का कार्ड", en: "State scheme card" },
    ] },
    { key: "members", label: { hi: "कार्ड में सदस्यों की संख्या", en: "Members on card" }, type: "number" },
    { key: "dealer", label: { hi: "डीलर/दुकान का नाम, दुकान संख्या और गांव/वार्ड", en: "Dealer / shop name, FPS no. and village/ward" }, required: true },
    { key: "issue", label: { hi: "मुख्य शिकायत", en: "Main complaint" }, type: "select", required: true, options: [
      { hi: "तय मात्रा से कम राशन दिया जा रहा है", en: "less than the entitled quantity is being given" },
      { hi: "मुफ्त राशन के बदले पैसे मांगे जा रहे हैं", en: "money is being demanded for free ration" },
      { hi: "अंगूठा लगवाकर भी राशन नहीं दिया गया", en: "ration was not given even after biometric authentication" },
      { hi: "दुकान समय पर नहीं खुलती और पर्ची नहीं दी जाती", en: "shop does not open on time and no receipt is given" },
      { hi: "खराब/मिलावटी अनाज दिया गया", en: "poor quality / adulterated grain was given" },
    ] },
    { key: "details", label: { hi: "विवरण (किस महीने, कितना मिला, कितना हक था)", en: "Details (which month, how much given vs entitled)" }, type: "textarea", required: true, placeholder: { hi: "सितंबर 2026: 5 सदस्य, हक 25 किलो, दिया 20 किलो। अक्टूबर: ₹50 मांगे...", en: "Sept 2026: 5 members, entitled 25 kg, given 20 kg. Oct: Rs 50 demanded..." } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
जिला आपूर्ति अधिकारी / जिला शिकायत निवारण अधिकारी,
{{district}}

विषय: राशन डीलर {{dealer}} के विरुद्ध शिकायत – {{issue}}

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, राशन कार्ड संख्या {{card}} ({{cardtype}}, कुल {{members}} सदस्य) का धारक हूं। मेरा कार्ड उचित मूल्य की दुकान {{dealer}} से जुड़ा है।

शिकायत: {{issue}}।

विवरण:
{{details}}

राष्ट्रीय खाद्य सुरक्षा अधिनियम 2013 के तहत मेरे परिवार को हर महीने तय मात्रा में अनाज पाने का कानूनी हक है, जो प्रधानमंत्री गरीब कल्याण अन्न योजना के तहत मुफ्त दिया जाना है। डीलर का यह व्यवहार इस हक का उल्लंघन है।

अतः आपसे निवेदन है कि:
1. मामले की जांच कराकर डीलर के विरुद्ध नियम के अनुसार कार्रवाई की जाए;
2. मेरे परिवार को बकाया/पूरा राशन दिलवाया जाए;
3. की गई कार्रवाई की सूचना मुझे दी जाए।

शिकायत करने के कारण मुझे या मेरे परिवार को परेशान न किया जाए, इसका भी ध्यान रखने की कृपा करें।

प्रार्थी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
राशन कार्ड संख्या: {{card}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. राशन कार्ड की कॉपी
2. राशन पर्ची/ePoS रसीद या SMS (यदि हो)
3. गवाहों के नाम/हस्ताक्षर (यदि हों)`,
    en: `To,
The District Supply Officer / District Grievance Redressal Officer,
{{district}}

Subject: Complaint against ration dealer {{dealer}} – {{issue}}

Sir/Madam,

I, {{name}}, resident of {{address}}, hold ration card no. {{card}} ({{cardtype}}, {{members}} members). My card is attached to the fair price shop {{dealer}}.

Complaint: {{issue}}.

Details:
{{details}}

Under the National Food Security Act, 2013, my family is legally entitled to a fixed quantity of foodgrains every month, which is to be given free of cost under the Pradhan Mantri Garib Kalyan Anna Yojana. The dealer's conduct violates this entitlement.

I therefore request you to:
1. Get the matter inquired into and take action against the dealer as per rules;
2. Ensure that my family receives the full / pending ration;
3. Inform me of the action taken.

Kindly also ensure that I or my family are not harassed for making this complaint.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Ration card no.: {{card}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of ration card
2. Ration slip / ePoS receipt or SMS (if any)
3. Names/signatures of witnesses (if any)`,
  },
  attach: [
    "राशन कार्ड की कॉपी",
    "ePoS मशीन की पर्ची या राशन मिलने का SMS (अगर मिलता हो)",
    "गांव/मोहल्ले के दूसरे कार्डधारकों के नाम और हस्ताक्षर (सामूहिक शिकायत ज़्यादा असर करती है)",
    "फोटो/वीडियो, अगर हों",
  ],
  submit: [
    "पत्र प्रिंट करें, हस्ताक्षर/अंगूठा लगाएं और एक कॉपी अपने पास रखें।",
    "ज़िला आपूर्ति कार्यालय में जमा करके रिसीविंग लें, या <strong>रजिस्टर्ड डाक</strong> से भेजें। कॉपी प्रखंड आपूर्ति अधिकारी/SDM को भी दे सकते हैं।",
    "साथ में अपने राज्य की खाद्य विभाग हेल्पलाइन या पोर्टल पर भी शिकायत दर्ज कराएं (कई राज्यों में 1967; नंबर राज्य के खाद्य विभाग की वेबसाइट पर देखें)।",
    "उचित समय में कार्रवाई न हो या ज़िला अधिकारी के आदेश से संतुष्ट न हों, तो <strong>राज्य खाद्य आयोग</strong> में अपील करें (अपील की समय सीमा और तरीका राज्य के नियम से तय होता है; आयोग के दफ्तर से पूछें)।",
  ],
  tips: [
    "हर महीने कितना राशन मिला, उसकी तारीख और मात्रा लिखकर रखें; यही सबसे पक्का सबूत है।",
    "मशीन पर्ची ज़रूर मांगें; पर्ची में लिखी मात्रा और मिली मात्रा का फर्क शिकायत में लिखें।",
    "कोई धमकी दे तो उसका ज़िक्र भी शिकायत में करें।",
    "हक से जुड़ी मात्रा राज्य योजना में अलग हो सकती है; अपने कार्ड का हक ज़िला आपूर्ति कार्यालय से पक्का कर लें।",
  ],
  official: [
    { href: "https://nfsa.gov.in/", title: "NFSA पोर्टल (खाद्य एवं सार्वजनिक वितरण विभाग)", note: "राज्यों के राशन पोर्टल के लिंक" },
    { href: "https://dfpd.gov.in/", title: "खाद्य एवं सार्वजनिक वितरण विभाग" },
  ],
  related: ["/service/ration-card.html", "/service/pm-garib-kalyan-anna-yojana.html"],
  faq: [
    { q: "राशन डीलर की शिकायत कहां करें?", a: "ज़िले के जिला आपूर्ति अधिकारी (DSO) या जिला शिकायत निवारण अधिकारी को लिखित में, और राज्य के खाद्य विभाग की हेल्पलाइन/पोर्टल पर।" },
    { q: "राशन कार्ड पर कितना अनाज मिलता है?", a: "NFSA के तहत प्राथमिकता परिवार (PHH) को 5 किलो प्रति व्यक्ति और अंत्योदय (AAY) कार्ड को 35 किलो प्रति परिवार हर महीने, और 1 जनवरी 2024 से यह मुफ्त है।" },
    { q: "क्या डीलर मुफ्त राशन के पैसे ले सकता है?", a: "नहीं। PMGKAY के तहत NFSA का अनाज मुफ्त है। पैसे मांगे तो DSO को शिकायत करें।" },
    { q: "DSO के आदेश से संतुष्ट न हों तो?", a: "NFSA की धारा 15-16 के तहत राज्य खाद्य आयोग में अपील की जा सकती है।" },
    { q: "क्या शिकायत करने पर मेरा कार्ड कट सकता है?", a: "शिकायत करना आपका हक है; इसके कारण कार्ड रद्द नहीं किया जा सकता। डर हो तो सामूहिक शिकायत करें और पत्र में यह बात लिखें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
