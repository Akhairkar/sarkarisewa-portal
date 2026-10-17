import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - PMFBY operational guidelines (pmfby.gov.in) as summarised by insurers and
//   Tribune (Haryana agri dept): individual-farm claims for localised
//   calamities (hailstorm, landslide, inundation, cloudburst, natural fire
//   from lightning) and post-harvest losses (crop kept in cut-and-spread
//   condition, up to 14 days) must be intimated within 72 hours of the
//   event/discovery via the Crop Insurance app, Krishi Rakshak Portal &
//   Helpline 14447, insurance company, bank, CSC or agriculture office;
//   insurer appoints a surveyor within 48 hours. Widespread (area-level)
//   losses are settled on area yield data without individual intimation.
// - Non-insured / additional relief: SDRF norms 2022-23 to 2025-26 give
//   input subsidy where crop loss is 33% or more, up to 2 ha per farmer
//   (Assam/Haryana state SDRF notices; Rs 8,500/ha rainfed, Rs 17,000/ha
//   irrigated). Rates for 2026-27 onward not verified, so no amount stated.
export const cropLossCompensationApplication: Letter = {
  slug: "crop-loss-compensation-application",
  category: "land",
  emoji: "🌾",
  title: "Crop Loss Compensation Application 2026: फसल नुकसान मुआवजा आवेदन",
  description: "ओलावृष्टि, बाढ़, आग से फसल नुकसान पर फसल बीमा (PMFBY) क्लेम और मुआवजे का आवेदन पत्र (हिंदी/English)। 72 घंटे में सूचना, हेल्पलाइन 14447।",
  h1: "फसल नुकसान मुआवजा / PMFBY क्लेम का आवेदन पत्र 2026",
  short: { hi: "फसल नुकसान मुआवजा आवेदन", en: "Crop loss compensation" },
  lead: "प्रधानमंत्री फसल बीमा योजना (PMFBY) में बीमित फसल को <strong>ओलावृष्टि, जलभराव, भूस्खलन, बादल फटने, बिजली से आग</strong> जैसी स्थानीय आपदा या कटाई के बाद खेत में पड़ी फसल को नुकसान हो, तो <strong>72 घंटे के अंदर</strong> सूचना देनी होती है: <strong>Crop Insurance ऐप</strong>, हेल्पलाइन <strong>14447</strong>, बीमा कंपनी, बैंक या कृषि विभाग को। बीमा न हो तो भी 33% या ज़्यादा नुकसान पर राज्य आपदा राहत (SDRF) से मुआवजे के लिए <strong>तहसीलदार/SDM</strong> को आवेदन दिया जाता है।",
  facts: [
    ["सूचना का समय", "72 घंटे के अंदर (PMFBY, स्थानीय आपदा)"],
    ["कहां बताएं", "Crop Insurance ऐप / 14447 / बीमा कंपनी / बैंक / कृषि विभाग"],
    ["बिना बीमा", "SDRF मुआवजा: 33% या ज़्यादा नुकसान, अधिकतम 2 हेक्टेयर"],
    ["वेबसाइट", '<a href="https://pmfby.gov.in/" target="_blank" rel="noopener nofollow">pmfby.gov.in</a>'],
  ],
  to: "फसल बीमा क्लेम के लिए: <strong>बीमा कंपनी</strong> (ज़िले में तय कंपनी) या जिस बैंक से बीमा हुआ, उसके शाखा प्रबंधक, और प्रति <strong>ज़िला/ब्लॉक कृषि अधिकारी</strong> को। सरकारी मुआवजे (SDRF) के लिए <strong>तहसीलदार/SDM</strong> को।",
  when: [
    "ओलावृष्टि, आंधी, जलभराव या बिजली से आग से खड़ी फसल खराब हुई",
    "कटाई के बाद खेत में सूख रही फसल बेमौसम बारिश/ओलों से खराब हुई",
    "बीमा क्लेम की सूचना दी पर सर्वे या भुगतान नहीं हुआ",
    "बीमा नहीं था, सरकारी आपदा राहत/मुआवजा चाहिए",
  ],
  fields: [
    { key: "to", label: { hi: "किसे दे रहे हैं", en: "Addressed to" }, type: "select", required: true, options: [
      { hi: "शाखा प्रबंधक, बैंक / बीमा कंपनी (PMFBY क्लेम)", en: "Branch Manager, Bank / Insurance Company (PMFBY claim)" },
      { hi: "ज़िला/ब्लॉक कृषि अधिकारी", en: "District/Block Agriculture Officer" },
      { hi: "तहसीलदार / उप-ज़िलाधिकारी (आपदा राहत)", en: "Tehsildar / SDM (disaster relief)" },
    ] },
    { key: "office", label: { hi: "दफ्तर/शाखा का पता", en: "Office/branch address" }, required: true },
    { key: "name", label: { hi: "किसान का नाम", en: "Farmer's name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "land", label: { hi: "गांव, खसरा/सर्वे संख्या, रकबा", en: "Village, khasra/survey no., area" }, type: "textarea", required: true },
    { key: "crop", label: { hi: "फसल और मौसम", en: "Crop and season" }, required: true, placeholder: { hi: "जैसे: गेहूं, रबी 2025-26", en: "e.g. Wheat, Rabi 2025-26" } },
    { key: "policy", label: { hi: "PMFBY पॉलिसी/आवेदन संख्या (हो तो)", en: "PMFBY policy/application no. (if any)" } },
    { key: "acct", label: { hi: "बैंक खाते के आखिरी 4 अंक", en: "Last 4 digits of bank account" }, hint: { hi: "पूरा खाता नंबर, PIN या OTP कभी न लिखें", en: "Never write full account number, PIN or OTP" } },
    { key: "cause", label: { hi: "नुकसान का कारण", en: "Cause of loss" }, type: "select", required: true, options: [
      { hi: "ओलावृष्टि", en: "hailstorm" },
      { hi: "जलभराव / बाढ़", en: "inundation / flood" },
      { hi: "बेमौसम बारिश (कटाई के बाद)", en: "unseasonal rain (post-harvest)" },
      { hi: "बिजली गिरने से आग", en: "fire due to lightning" },
      { hi: "सूखा / कीट / अन्य", en: "drought / pests / other" },
    ] },
    { key: "when", label: { hi: "नुकसान की तारीख और कितना नुकसान", en: "Date of loss and extent" }, required: true, placeholder: { hi: "जैसे: 14/10/2026, लगभग 70% फसल खराब", en: "e.g. 14/10/2026, about 70% crop damaged" } },
    { key: "ticket", label: { hi: "14447/ऐप पर दी सूचना का नंबर (हो तो)", en: "Intimation/docket no. from 14447/app (if any)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{office}}

विषय: {{cause}} से फसल नुकसान की सूचना एवं क्षतिपूर्ति/बीमा दावा हेतु आवेदन

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पत्नी श्री {{father}}, निम्न भूमि पर खेती करता/करती हूं:
{{land}}

इस भूमि पर बोई गई {{crop}} की फसल को {{cause}} से नुकसान हुआ है। नुकसान की तारीख और सीमा: {{when}}।

प्रधानमंत्री फसल बीमा योजना से संबंधित विवरण: पॉलिसी/आवेदन संख्या {{policy}}, बैंक खाता (अंतिम 4 अंक) {{acct}}। नुकसान की सूचना 72 घंटे के अंदर हेल्पलाइन/ऐप पर भी दी गई है, सूचना संख्या: {{ticket}}।

अतः आपसे प्रार्थना है कि:
1. मौके पर नुकसान का सर्वे/आकलन जल्द कराया जाए;
2. योजना/नियमों के अनुसार बीमा दावा या आपदा राहत मुआवजा मेरे बैंक खाते में दिलाया जाए।

भवदीय/भवदीया,

(हस्ताक्षर / अंगूठे का निशान)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. खतौनी/भू-अभिलेख की नकल (या बटाई/किरायानामा)
2. फसल बीमा पॉलिसी/आवेदन की रसीद (यदि हो)
3. बुआई प्रमाण / गिरदावरी (यदि हो)
4. नुकसान की फोटो
5. आधार और बैंक पासबुक की प्रति`,
    en: `To,
The {{to}},
{{office}}

Subject: Intimation of crop loss due to {{cause}} and application for compensation/insurance claim

Sir/Madam,

I, {{name}}, son/wife of Shri {{father}}, cultivate the following land:
{{land}}

The {{crop}} crop sown on this land has been damaged due to {{cause}}. Date and extent of loss: {{when}}.

Details of insurance under Pradhan Mantri Fasal Bima Yojana: policy/application no. {{policy}}, bank account (last 4 digits) {{acct}}. The loss has also been intimated within 72 hours on the helpline/app; intimation no.: {{ticket}}.

I therefore request you kindly:
1. to get the loss surveyed/assessed on the spot at the earliest;
2. to have the insurance claim or disaster relief compensation credited to my bank account as per the scheme/rules.

Yours faithfully,

(Signature / thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of land record (or sharecropping/lease agreement)
2. Crop insurance policy/application receipt (if any)
3. Sowing certificate / girdawari (if any)
4. Photographs of the damage
5. Copy of Aadhaar and bank passbook`,
  },
  attach: [
    "खतौनी/भू-अभिलेख की नकल; बटाईदार/किरायेदार किसान हों तो बटाई/किरायानामा",
    "PMFBY पॉलिसी या आवेदन की रसीद (बैंक/CSC/पोर्टल से)",
    "नुकसान वाले खेत की तारीख और लोकेशन वाली फोटो",
    "आधार और बैंक पासबुक की कॉपी (खाता आधार से जुड़ा हो)",
  ],
  submit: [
    "<strong>सबसे पहले 72 घंटे के अंदर</strong> Crop Insurance ऐप पर फोटो के साथ सूचना दें या <strong>14447</strong> पर कॉल करें; SMS में आई सूचना/डॉकेट संख्या लिख लें।",
    "फिर यह पत्र बैंक शाखा या ब्लॉक/ज़िला कृषि कार्यालय में जमा करके रिसीविंग लें; बीमा कंपनी 48 घंटे में सर्वेयर नियुक्त करती है।",
    "सर्वे के समय खेत पर रहें और सर्वे रिपोर्ट पर अपना नुकसान सही लिखवाएं; कॉपी मांगें।",
    "भुगतान अटके तो 14447 पर उसी डॉकेट नंबर से शिकायत करें, फिर ज़िला स्तरीय शिकायत समिति/ज़िला कृषि अधिकारी को लिखें।",
    "बीमा न हो तो तहसीलदार/SDM को आवेदन दें; पटवारी/लेखपाल के सर्वे में 33% या ज़्यादा नुकसान दर्ज होने पर राज्य आपदा राहत (SDRF) से सहायता मिलती है।",
  ],
  tips: [
    "72 घंटे की समय सीमा न चूकें; देरी होने पर व्यक्तिगत क्लेम खारिज हो सकता है।",
    "पूरे इलाके में सूखा/बाढ़ जैसा बड़ा नुकसान हो तो अलग सूचना ज़रूरी नहीं होती, क्लेम क्षेत्र की उपज के आंकड़ों से तय होता है; फिर भी सूचना देना ठीक है।",
    "बैंक खाता नंबर, OTP किसी फोन करने वाले 'सर्वेयर' को न बताएं।",
    "हर नुकसान की तारीख वाली फोटो और गवाह रखें।",
  ],
  notice: "फसल बीमा क्लेम की राशि और सरकारी मुआवजे की दरें <strong>फसल, ज़िले और राज्य</strong> के हिसाब से अलग हैं और समय-समय पर बदलती हैं। अपने ज़िले की बीमा कंपनी और दरें कृषि विभाग से पूछें।",
  official: [
    { href: "https://pmfby.gov.in/", title: "PM फसल बीमा योजना (PMFBY)", note: "पॉलिसी स्थिति, शिकायत, बीमा कंपनी की जानकारी" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
  ],
  related: ["/service/pm-fasal-bima-yojana.html", "/service/kisan-credit-card.html", "/service/farmer-id-card-agristack.html"],
  faq: [
    { q: "फसल नुकसान की सूचना कितने दिन में देनी होती है?", a: "PMFBY में ओलावृष्टि, जलभराव, बिजली से आग जैसी स्थानीय आपदा और कटाई के बाद के नुकसान की सूचना 72 घंटे के अंदर देनी होती है।" },
    { q: "फसल बीमा की शिकायत/सूचना कहां दें?", a: "Crop Insurance ऐप, कृषि रक्षक हेल्पलाइन 14447, बीमा कंपनी, बैंक शाखा या कृषि विभाग में। सूचना की डॉकेट संख्या संभाल कर रखें।" },
    { q: "बीमा नहीं है तो मुआवजा कैसे मिलेगा?", a: "तहसीलदार/SDM को आवेदन दें। राजस्व विभाग के सर्वे में 33% या ज़्यादा नुकसान होने पर राज्य आपदा राहत कोष (SDRF) से प्रति हेक्टेयर सहायता मिलती है, अधिकतम 2 हेक्टेयर तक।" },
    { q: "क्या बटाईदार किसान भी क्लेम कर सकता है?", a: "PMFBY में बटाईदार/किरायेदार किसान भी बीमा करा सकते हैं, अगर राज्य के नियम से ज़रूरी कागज़ (बटाई घोषणा आदि) हों। जिसने बीमा कराया, वही क्लेम करेगा।" },
    { q: "फसल बीमा का पैसा कितने दिन में आता है?", a: "सर्वे और आकलन के बाद बीमा कंपनी सीधे बैंक खाते में भेजती है; समय योजना के नियम और राज्य की प्रक्रिया पर निर्भर है। देरी हो तो 14447 पर शिकायत करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
