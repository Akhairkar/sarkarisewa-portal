import type { Letter } from "../types";

// Sources (checked 17 Oct 2026), same as the repo pm-awas-yojana guide
// (checked 15 Oct 2026):
// - PMIndia/PIB Cabinet decision Aug 2024 and PIB explainer Sep 2025: PMAY-G
//   2024-25 to 2028-29, 2 crore additional rural houses; unit assistance
//   Rs 1.20 lakh (plains) / Rs 1.30 lakh (NE and hill states incl. J&K,
//   Ladakh, HP, Uttarakhand); beneficiaries identified through the Awaas+ 2024
//   survey (app launched 17.09.2024) and verified by the Gram Sabha.
// - PIB backgrounder PMAY-Urban 2.0 (10 Aug 2024): EWS up to Rs 3 lakh, LIG
//   Rs 3-6 lakh, MIG Rs 6-9 lakh annual income; no pucca house anywhere in
//   India; verticals BLC, AHP, ARH, ISS; apply on pmay-urban.gov.in or through
//   the urban local body.
// - Instalments are released by DBT into the beneficiary's bank account after
//   geo-tagged stage inspections (scheme guidelines); exact instalment
//   schedule differs by state, so it is not given. No helpline number is given
//   because none was verified.
export const pmAwasYojanaApplicationLetter: Letter = {
  slug: "pm-awas-yojana-application-letter",
  category: "social",
  emoji: "🏠",
  title: "PM Awas Yojana Application Letter in Hindi 2026: आवास योजना आवेदन/शिकायत पत्र",
  description: "प्रधानमंत्री आवास योजना (ग्रामीण/शहरी) के लिए आवेदन या शिकायत पत्र हिंदी/English में: सर्वे में नाम जोड़ना, किस्त न मिलना, आवेदन की स्थिति। BDO/नगर निकाय को।",
  h1: "प्रधानमंत्री आवास योजना आवेदन/शिकायत पत्र 2026: BDO या नगर निकाय को",
  short: { hi: "PM आवास योजना आवेदन/शिकायत", en: "PM Awas Yojana letter" },
  lead: "<strong>PMAY-ग्रामीण</strong> में लाभार्थी <strong>Awaas+ सर्वे</strong> और <strong>ग्राम सभा</strong> की जांच से चुने जाते हैं और पक्का घर बनाने के लिए मैदानी इलाकों में <strong>₹1.20 लाख</strong> (पूर्वोत्तर/पहाड़ी राज्यों में <strong>₹1.30 लाख</strong>) किस्तों में खाते में आते हैं। <strong>PMAY-शहरी 2.0</strong> में ₹9 लाख तक सालाना आय वाले परिवार, जिनका देश में कहीं पक्का घर नहीं है, <strong>pmay-urban.gov.in</strong> या नगर निकाय से आवेदन करते हैं। गांव में यह पत्र <strong>खंड विकास अधिकारी (BDO)</strong> को और शहर में <strong>नगर निकाय</strong> को दें: सर्वे में नाम जोड़ने, किस्त रुकने या आवेदन की स्थिति के लिए।",
  facts: [
    ["गांव में किसे दें", "खंड विकास अधिकारी (BDO); कॉपी ग्राम पंचायत को"],
    ["शहर में किसे दें", "नगर निगम/नगर पालिका का PMAY प्रकोष्ठ"],
    ["ग्रामीण सहायता", "₹1.20 लाख (मैदानी), ₹1.30 लाख (पूर्वोत्तर/पहाड़ी)"],
    ["फीस", "कोई सरकारी फीस नहीं"],
  ],
  to: "<strong>गांव:</strong> अपने प्रखंड के <strong>खंड विकास अधिकारी (BDO)</strong> को, कॉपी ग्राम पंचायत सचिव/ग्राम प्रधान को। <strong>शहर:</strong> नगर निगम आयुक्त/नगर पालिका के <strong>अधिशासी अधिकारी</strong> या वहां के PMAY-U प्रकोष्ठ को।",
  when: [
    "कच्चा घर/बेघर होने के बावजूद Awaas+ सर्वे या सूची में नाम नहीं आया",
    "आवास स्वीकृत हुआ पर पहली/अगली किस्त खाते में नहीं आई",
    "शहरी योजना में ऑनलाइन आवेदन किया, पर लंबे समय से स्थिति पता नहीं",
    "किसी अपात्र को लाभ मिला या किस्त के बदले पैसा मांगा जा रहा है",
  ],
  fields: [
    { key: "officer", label: { hi: "अधिकारी का पद और कार्यालय", en: "Officer's designation and office" }, type: "textarea", required: true, placeholder: { hi: "जैसे: खंड विकास अधिकारी, विकास खंड सदर, गोंडा", en: "e.g. Block Development Officer, Sadar Block, Gonda" } },
    { key: "scheme", label: { hi: "योजना", en: "Scheme" }, type: "select", options: [
      { hi: "प्रधानमंत्री आवास योजना-ग्रामीण (PMAY-G)", en: "Pradhan Mantri Awas Yojana-Gramin (PMAY-G)" },
      { hi: "प्रधानमंत्री आवास योजना-शहरी 2.0 (PMAY-U 2.0)", en: "Pradhan Mantri Awas Yojana-Urban 2.0 (PMAY-U 2.0)" },
    ] },
    { key: "purpose", label: { hi: "पत्र का उद्देश्य", en: "Purpose of letter" }, type: "select", options: [
      { hi: "पात्र होने पर भी सर्वे/लाभार्थी सूची में नाम जोड़ने हेतु", en: "inclusion of my name in the survey/beneficiary list as I am eligible" },
      { hi: "स्वीकृत आवास की रुकी हुई किस्त जारी करने हेतु", en: "release of the pending instalment of my sanctioned house" },
      { hi: "मेरे आवेदन की स्थिति और स्वीकृति हेतु", en: "status and sanction of my application" },
    ] },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "relation", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "address", label: { hi: "पूरा पता (गांव/वार्ड, पंचायत, प्रखंड, ज़िला)", en: "Full address (village/ward, panchayat, block, district)" }, type: "textarea", required: true },
    { key: "regno", label: { hi: "आवास ID / आवेदन संख्या (अगर है)", en: "Awaas ID / application no. (if any)" }, placeholder: { hi: "जैसे: UP1234567", en: "e.g. UP1234567" } },
    { key: "house", label: { hi: "अभी के घर की स्थिति", en: "Present housing condition" }, type: "textarea", required: true, placeholder: { hi: "जैसे: कच्चा घर, छत टूटी हुई, बारिश में पानी टपकता है; परिवार में 5 सदस्य", en: "e.g. kutcha house with broken roof, leaks in rain; 5 family members" } },
    { key: "details", label: { hi: "और जानकारी (किस्त, तारीख, क्या हुआ)", en: "Other details (instalment, dates, what happened)" }, type: "textarea", placeholder: { hi: "जैसे: पहली किस्त 10/02/2026 को मिली, लिंटर तक काम पूरा, जियो-टैगिंग के बाद भी दूसरी किस्त नहीं आई", en: "e.g. first instalment received on 10/02/2026, work done up to lintel, second instalment not received even after geo-tagging" } },
    { key: "bank", label: { hi: "बैंक का नाम और खाते के आखिरी 4 अंक", en: "Bank name and last 4 digits of account" }, hint: { hi: "पूरा खाता नंबर, PIN या OTP कभी न लिखें", en: "Never write the full account number, PIN or OTP" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{officer}}

विषय: {{scheme}} के अंतर्गत {{purpose}} आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी {{relation}}, निम्नलिखित पते का निवासी हूं:
{{address}}

मेरे परिवार के पास कहीं भी पक्का मकान नहीं है। वर्तमान स्थिति: {{house}}

आवास ID / आवेदन संख्या: {{regno}}
बैंक खाता: {{bank}}

{{details}}

अतः आपसे निवेदन है कि जांच कर {{scheme}} के अंतर्गत {{purpose}} आवश्यक कार्यवाही करने की कृपा करें, और यदि कोई दस्तावेज़ या औपचारिकता बाकी है तो मुझे लिखित में सूचित करें।

मैं घोषणा करता/करती हूं कि ऊपर दी गई जानकारी सही है।

भवदीय/भवदीया,

(हस्ताक्षर/अंगूठा निशान)
नाम: {{name}}
मोबाइल: {{phone}}

दिनांक: {{date}}

संलग्न:
1. आधार कार्ड की कॉपी
2. बैंक पासबुक (पहला पन्ना) की कॉपी
3. घर की वर्तमान स्थिति की फोटो
4. स्वीकृति पत्र/पिछली किस्त का विवरण (यदि हो)`,
    en: `To,
{{officer}}

Subject: Application for {{purpose}} under {{scheme}}

Sir/Madam,

I, {{name}}, son/daughter/wife of {{relation}}, am a resident of the following address:
{{address}}

My family does not own a pucca house anywhere. Present condition: {{house}}

Awaas ID / application no.: {{regno}}
Bank account: {{bank}}

{{details}}

I therefore request you to kindly look into the matter and take necessary action for {{purpose}} under {{scheme}}, and to inform me in writing if any document or formality is pending.

I declare that the information given above is true.

Yours faithfully,

(Signature/thumb impression)
Name: {{name}}
Mobile: {{phone}}

Date: {{date}}

Enclosures:
1. Copy of Aadhaar card
2. Copy of bank passbook (first page)
3. Photographs of the present house
4. Sanction letter/details of earlier instalment (if any)`,
  },
  attach: [
    "आधार कार्ड और बैंक पासबुक के पहले पन्ने की कॉपी (खाता आधार से जुड़ा हो)",
    "मौजूदा कच्चे/टूटे घर की फोटो",
    "जॉब कार्ड (मनरेगा), राशन कार्ड या SECC/Awaas+ सूची का विवरण, अगर हो",
    "शहरी योजना: आय प्रमाण पत्र और यह स्व-घोषणा कि देश में कहीं पक्का घर नहीं है",
    "किस्त की शिकायत: स्वीकृति पत्र, पिछली किस्त की पासबुक एंट्री, निर्माण की फोटो",
  ],
  submit: [
    "गांव: पत्र की दो कॉपी बनाएं; एक BDO कार्यालय में जमा करके रिसीविंग लें, दूसरी ग्राम पंचायत सचिव को दें। ग्राम सभा की बैठक में भी अपनी बात रखें।",
    "शहर: पहले <a href=\"https://pmay-urban.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmay-urban.gov.in</a> पर आवेदन/स्थिति देखें, फिर यह पत्र नगर निकाय के PMAY प्रकोष्ठ में दें।",
    "ग्रामीण आवास की स्थिति और लाभार्थी सूची <a href=\"https://pmayg.dord.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmayg.dord.gov.in</a> पर देखी जा सकती है।",
    "कार्रवाई न हो तो ज़िला ग्रामीण विकास अभिकरण (DRDA)/परियोजना निदेशक या ज़िलाधिकारी को लिखें; फिर <a href=\"https://pgportal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CPGRAMS</a> पर शिकायत करें।",
  ],
  tips: [
    "ग्रामीण योजना में सीधे फॉर्म भरकर घर नहीं मिलता; नाम Awaas+ सर्वे और ग्राम सभा से आता है।",
    "सूची में नाम डलवाने या किस्त के लिए किसी को पैसा न दें; मांगे तो उसी पत्र में लिखें या भ्रष्टाचार की शिकायत करें।",
    "बैंक खाता आधार से जुड़ा और चालू रखें; किस्त DBT से सीधे खाते में आती है।",
    "निर्माण का हर चरण (नींव, लिंटर, छत) पूरा होते ही जियो-टैगिंग करवाएं, तभी अगली किस्त आती है।",
  ],
  official: [
    { href: "https://pmayg.dord.gov.in/", title: "PMAY-ग्रामीण (ग्रामीण विकास मंत्रालय)" },
    { href: "https://pmay-urban.gov.in/", title: "PMAY-शहरी 2.0 (आवास और शहरी कार्य मंत्रालय)" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS", note: "शिकायत" },
  ],
  related: ["/service/pm-awas-yojana.html"],
  faq: [
    { q: "प्रधानमंत्री आवास योजना का आवेदन पत्र किसे लिखें?", a: "गांव में खंड विकास अधिकारी (BDO) को, कॉपी ग्राम पंचायत को। शहर में नगर निगम/नगर पालिका के PMAY प्रकोष्ठ को; शहरी योजना में ऑनलाइन आवेदन pmay-urban.gov.in पर होता है।" },
    { q: "आवास योजना में कितना पैसा मिलता है?", a: "PMAY-ग्रामीण में मैदानी इलाकों में ₹1.20 लाख और पूर्वोत्तर/पहाड़ी राज्यों में ₹1.30 लाख, किस्तों में। शहरी योजना में राशि आपके चुने हिस्से (BLC, AHP, ब्याज सब्सिडी आदि) पर निर्भर है।" },
    { q: "सूची में नाम नहीं है तो क्या करें?", a: "ग्राम सभा की बैठक में आपत्ति दें और BDO को लिखित आवेदन दें कि आपका नाम Awaas+ सर्वे में जोड़ा जाए। कच्चे घर की फोटो और आधार साथ लगाएं।" },
    { q: "आवास की किस्त नहीं आई तो क्या करें?", a: "पहले देखें कि पिछले चरण की जियो-टैगिंग हो गई है और खाता आधार से जुड़ा है। फिर BDO को किस्त जारी करने का पत्र दें; हल न हो तो DRDA/ज़िलाधिकारी या CPGRAMS पर शिकायत करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
