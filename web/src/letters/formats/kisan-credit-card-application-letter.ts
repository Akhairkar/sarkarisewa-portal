import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Repo kisan-credit-card guide (checked 15 Oct 2026; search extracts of PIB,
//   RBI and agriwelfare.gov.in): Modified Interest Subvention Scheme continued
//   for 2025-26 - short-term crop loans up to Rs 3 lakh through KCC at 7%, 3%
//   prompt repayment incentive -> effective 4%; RBI raised the
//   collateral-free agriculture loan limit from Rs 1.6 lakh to Rs 2 lakh from
//   1 Jan 2025; KCC application form on pmkisan.gov.in.
// - Lok Sabha answers (eparlib.sansad.in AU171 / AU3990): a time line of 14
//   days has been fixed to issue a KCC after receipt of a complete
//   application; IBA advised banks to waive processing, documentation,
//   inspection and other service charges for KCC/crop loans up to Rs 3 lakh,
//   but charges are under each bank's board-approved policy - so the page says
//   "ask the bank".
// - RBI Integrated Ombudsman (cms.rbi.org.in, 14448) for complaints.
// Credit limits depend on scale of finance and crop area set by district
// committees; no amounts are promised.
export const kisanCreditCardApplicationLetter: Letter = {
  slug: "kisan-credit-card-application-letter",
  category: "bank",
  emoji: "🌾",
  title: "Kisan Credit Card Application Letter in Hindi 2026: KCC आवेदन पत्र बैंक को",
  description: "किसान क्रेडिट कार्ड (KCC) बनवाने या लिमिट बढ़ाने का आवेदन पत्र बैंक को (हिंदी/English)। 4% ब्याज (समय पर चुकाने पर), ₹2 लाख तक बिना गारंटी, 14 दिन में KCC।",
  h1: "किसान क्रेडिट कार्ड (KCC) आवेदन पत्र 2026: बैंक शाखा प्रबंधक को",
  short: { hi: "किसान क्रेडिट कार्ड आवेदन पत्र", en: "Kisan Credit Card application" },
  lead: "किसान क्रेडिट कार्ड (KCC) से खेती, पशुपालन और मछलीपालन के खर्च के लिए बैंक से कम ब्याज पर लोन मिलता है। <strong>₹3 लाख</strong> तक के फसल लोन पर ब्याज <strong>7%</strong> है और समय पर चुकाने पर प्रभावी ब्याज <strong>4%</strong> रह जाता है; <strong>₹2 लाख</strong> तक बिना गारंटी (collateral) के। आवेदन उस बैंक शाखा के <strong>शाखा प्रबंधक</strong> को दें जहां आपका खाता है या जो आपके गांव की सेवा करती है, साथ में बैंक का KCC फॉर्म और ज़मीन के कागज़। सरकार ने पूरा आवेदन मिलने के <strong>14 दिन</strong> में KCC जारी करने की समय-सीमा तय की है।",
  facts: [
    ["किसे दें", "अपनी बैंक शाखा का शाखा प्रबंधक"],
    ["ब्याज", "7%; समय पर चुकाने पर 4% (₹3 लाख तक)"],
    ["बिना गारंटी", "₹2 लाख तक (1 जनवरी 2025 से)"],
    ["समय", "पूरा आवेदन मिलने के 14 दिन में KCC"],
  ],
  to: "जिस बैंक (सरकारी, निजी, ग्रामीण या सहकारी बैंक) में आपका बचत खाता है या जो आपके गांव के लिए सेवा क्षेत्र वाली शाखा है, उसके <strong>शाखा प्रबंधक</strong> को। पहले से KCC हो तो उसी शाखा को लिमिट बढ़ाने/नवीनीकरण के लिए।",
  when: [
    "पहली बार किसान क्रेडिट कार्ड बनवाना है",
    "PM-KISAN लाभार्थी हैं और KCC नहीं है",
    "पशुपालन या मछलीपालन के लिए KCC चाहिए",
    "पुराने KCC की लिमिट बढ़वानी या नवीनीकरण करवाना है",
  ],
  fields: [
    { key: "bank", label: { hi: "बैंक और शाखा का नाम/पता", en: "Bank and branch name/address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: बैंक ऑफ बड़ौदा, शाखा मझौली, देवरिया", en: "e.g. Bank of Baroda, Majhauli branch, Deoria" } },
    { key: "name", label: { hi: "किसान का नाम", en: "Farmer's name" }, required: true },
    { key: "relation", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "address", label: { hi: "गांव, पंचायत, तहसील, ज़िला", en: "Village, panchayat, tehsil, district" }, type: "textarea", required: true },
    { key: "account", label: { hi: "इस बैंक में बचत खाते के आखिरी 4 अंक (अगर है)", en: "Last 4 digits of savings account here (if any)" }, hint: { hi: "पूरा खाता नंबर, PIN या OTP न लिखें", en: "Do not write the full account number, PIN or OTP" } },
    { key: "land", label: { hi: "ज़मीन का विवरण (खसरा/खाता नं., रकबा)", en: "Land details (khasra/khata no., area)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: खसरा नं. 245, 1.2 एकड़, गांव रामपुर (स्वयं के नाम)", en: "e.g. Khasra no. 245, 1.2 acres, village Rampur (own name)" } },
    { key: "crops", label: { hi: "कौन सी फसल/काम", en: "Crops/activity" }, required: true, placeholder: { hi: "जैसे: खरीफ में धान, रबी में गेहूं; 2 भैंस", en: "e.g. paddy in kharif, wheat in rabi; 2 buffaloes" } },
    { key: "type", label: { hi: "आवेदन का प्रकार", en: "Type of request" }, type: "select", options: [
      { hi: "नया किसान क्रेडिट कार्ड जारी करना", en: "issue of a new Kisan Credit Card" },
      { hi: "पशुपालन/मछलीपालन के लिए किसान क्रेडिट कार्ड", en: "Kisan Credit Card for animal husbandry/fisheries" },
      { hi: "मौजूदा KCC की लिमिट बढ़ाना/नवीनीकरण", en: "enhancement/renewal of my existing KCC limit" },
    ] },
    { key: "limit", label: { hi: "मांगी गई लिमिट (चाहें तो)", en: "Limit requested (optional)" }, placeholder: { hi: "जैसे: ₹1,50,000", en: "e.g. Rs 1,50,000" } },
    { key: "pmkisan", label: { hi: "PM-KISAN पंजीकरण संख्या (अगर है)", en: "PM-KISAN registration no. (if any)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
शाखा प्रबंधक,
{{bank}}

विषय: {{type}} हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{relation}}, निम्नलिखित पते का निवासी किसान हूं:
{{address}}

मेरे पास निम्नलिखित कृषि भूमि है:
{{land}}

मैं इस भूमि पर {{crops}} करता/करती हूं। खेती/पशुपालन के खर्च (बीज, खाद, दवा, सिंचाई, चारा आदि) के लिए मुझे समय पर ऋण की आवश्यकता है।

अतः आपसे निवेदन है कि मेरा {{type}} करने की कृपा करें। मेरी अनुमानित ऋण आवश्यकता: {{limit}}।

इस बैंक में मेरा बचत खाता (अंतिम अंक): {{account}}
PM-KISAN पंजीकरण संख्या: {{pmkisan}}

भरा हुआ KCC आवेदन फॉर्म और आवश्यक दस्तावेज़ संलग्न हैं। मैं घोषणा करता/करती हूं कि मेरे नाम पर किसी अन्य बैंक में किसान क्रेडिट कार्ड नहीं है और ऊपर दी गई जानकारी सही है।

भवदीय/भवदीया,

(हस्ताक्षर/अंगूठा निशान)
नाम: {{name}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न:
1. भरा हुआ KCC आवेदन फॉर्म
2. आधार कार्ड और पैन कार्ड (यदि हो) की कॉपी
3. भूमि के कागज़ (खतौनी/जमाबंदी/7-12 आदि)
4. पासपोर्ट साइज़ फोटो
5. अन्य बैंक से "नो ड्यूज़" प्रमाण पत्र (यदि बैंक मांगे)`,
    en: `To,
The Branch Manager,
{{bank}}

Subject: Application for {{type}}

Sir/Madam,

I, {{name}}, son/daughter/wife of {{relation}}, am a farmer residing at:
{{address}}

I hold the following agricultural land:
{{land}}

I cultivate/undertake {{crops}} on this land. I need timely credit for cultivation/animal husbandry expenses (seeds, fertiliser, pesticide, irrigation, fodder etc.).

I therefore request you to kindly process the {{type}}. My estimated credit requirement: {{limit}}.

My savings account in this bank (last digits): {{account}}
PM-KISAN registration no.: {{pmkisan}}

The filled KCC application form and required documents are enclosed. I declare that I do not hold a Kisan Credit Card with any other bank and that the information given above is true.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Date: {{date}}

Enclosures:
1. Filled KCC application form
2. Copies of Aadhaar card and PAN card (if any)
3. Land records (khatauni/jamabandi/7-12 etc.)
4. Passport-size photograph
5. No-dues certificate from other banks (if required by the bank)`,
  },
  attach: [
    "बैंक का KCC आवेदन फॉर्म (शाखा से या <a href=\"https://pmkisan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmkisan.gov.in</a> से डाउनलोड)",
    "आधार कार्ड, पैन कार्ड (अगर हो), पासपोर्ट साइज़ फोटो",
    "ज़मीन के कागज़: खतौनी/जमाबंदी/7-12 (राज्य के अनुसार); बटाईदार/किरायेदार किसान बैंक के नियम अनुसार कागज़",
    "पशुपालन/मछलीपालन के लिए पशुओं या तालाब का विवरण",
  ],
  submit: [
    "शाखा से KCC फॉर्म लें, भरें और यह पत्र व कागज़ लगाकर जमा करें; आवेदन की पावती/रसीद ज़रूर लें।",
    "बैंक ज़मीन और कागज़ की जांच करेगा; पूरा आवेदन मिलने के 14 दिन में KCC जारी करने की समय-सीमा तय है।",
    "प्रोसेसिंग फीस पहले पूछ लें; ₹3 लाख तक के KCC पर कई बैंक कोई फीस नहीं लेते।",
    "देरी या बिना कारण मना होने पर शाखा प्रबंधक से लिखित कारण मांगें, फिर बैंक के क्षेत्रीय कार्यालय/शिकायत पोर्टल पर शिकायत करें; 30 दिन में हल न हो तो <a href=\"https://cms.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">RBI लोकपाल (cms.rbi.org.in)</a>, हेल्पलाइन 14448।",
  ],
  tips: [
    "एक किसान का एक ही KCC होता है; दूसरे बैंक में पहले से KCC हो तो नया आवेदन खारिज हो सकता है।",
    "लोन हर साल समय पर चुकाएं या नवीनीकरण कराएं, तभी 4% वाला ब्याज लाभ मिलता है।",
    "KCC बनवाने के लिए किसी दलाल को पैसा न दें; बैंक की तय फीस की ही रसीद लें।",
    "ज़मीन के कागज़ में नाम आधार के नाम से मिलाएं; अंतर हो तो पहले सुधार कराएं।",
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल", note: "KCC फॉर्म डाउनलोड" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली", note: "बैंक के खिलाफ शिकायत; 14448" },
  ],
  related: ["/service/kisan-credit-card.html", "/service/pm-kisan.html", "/service/pm-fasal-bima-yojana.html"],
  faq: [
    { q: "किसान क्रेडिट कार्ड के लिए आवेदन कहां करें?", a: "अपने बैंक (सरकारी, निजी, ग्रामीण या सहकारी) की शाखा में KCC फॉर्म, यह आवेदन पत्र, आधार और ज़मीन के कागज़ के साथ। फॉर्म pmkisan.gov.in पर भी मिलता है।" },
    { q: "KCC पर ब्याज कितना लगता है?", a: "₹3 लाख तक के अल्पकालिक फसल लोन पर 7%; समय पर चुकाने पर 3% छूट मिलकर प्रभावी ब्याज 4%।" },
    { q: "KCC पर बिना गारंटी कितना लोन मिलता है?", a: "RBI के नियम के अनुसार 1 जनवरी 2025 से ₹2 लाख तक के कृषि लोन पर ज़मीन गिरवी (collateral) नहीं मांगी जाती।" },
    { q: "KCC बनने में कितना समय लगता है?", a: "सरकार ने पूरा आवेदन मिलने के 14 दिन में KCC जारी करने की समय-सीमा तय की है। देरी हो तो शाखा से लिखित कारण मांगें।" },
    { q: "क्या पशुपालक को भी KCC मिलता है?", a: "हां, पशुपालन और मछलीपालन के लिए भी KCC बनता है; इनके लिए ब्याज छूट वाले लोन की सीमा ₹2 लाख है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
