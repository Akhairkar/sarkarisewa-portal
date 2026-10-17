import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Rights of Persons with Disabilities Act 2016 (indiacode): s.2(r)
//   benchmark disability = not less than 40% of a specified disability;
//   s.57 designation of certifying authorities; s.58 procedure; s.59 appeal
//   against the decision of the certifying authority to the appellate
//   authority notified by the state.
// - RPwD Rules 2017 r.18(5): certificates to be issued online on the UDID
//   portal from the notified date (1 June 2021).
// - RPwD (Amendment) Rules 2024 (notified Oct 2024; SCC Online, Vision IAS,
//   IASGyan): application on the UDID portal to the medical authority of the
//   district of residence or any notified hospital; decision within three
//   months (was one month); rejection intimated in Form VIII; appeal within
//   90 days; applications pending 2 years become inactive.
// - UDID portal: swavlambancard.gov.in (DEPwD).
export const disabilityCertificateApplicationLetter: Letter = {
  slug: "disability-certificate-application-letter",
  category: "social",
  emoji: "♿",
  title: "Disability Certificate Application in Hindi 2026: दिव्यांग प्रमाण पत्र/UDID",
  description: "दिव्यांग प्रमाण पत्र और UDID कार्ड के लिए CMO/मेडिकल बोर्ड को आवेदन पत्र (हिंदी/English)। RPwD Act 2016, 3 महीने में फैसला, 90 दिन में अपील।",
  h1: "दिव्यांग प्रमाण पत्र / UDID कार्ड के लिए आवेदन पत्र 2026",
  short: { hi: "दिव्यांग प्रमाण पत्र आवेदन", en: "Disability certificate application" },
  lead: "दिव्यांगता प्रमाण पत्र <strong>दिव्यांगजन अधिकार अधिनियम (RPwD Act) 2016</strong> के तहत राज्य की अधिसूचित <strong>मेडिकल अथॉरिटी</strong> (ज़िला अस्पताल का मेडिकल बोर्ड / CMO) जांच के बाद देती है। आवेदन केंद्र के <strong>UDID पोर्टल (swavlambancard.gov.in)</strong> पर होता है; इसी से प्रमाण पत्र और UDID कार्ड दोनों बनते हैं। 2024 के संशोधित नियमों के अनुसार फैसला <strong>3 महीने</strong> में होना चाहिए और आवेदन खारिज हो तो <strong>90 दिन</strong> में अपील की जा सकती है। सरकारी लाभ के लिए आम तौर पर <strong>40% या ज़्यादा</strong> (बेंचमार्क) दिव्यांगता चाहिए।",
  facts: [
    ["कानून", "RPwD Act 2016, धारा 57–59"],
    ["ऑनलाइन", '<a href="https://www.swavlambancard.gov.in/" target="_blank" rel="noopener nofollow">swavlambancard.gov.in</a> (UDID)'],
    ["फैसले का समय", "3 महीने (RPwD संशोधन नियम 2024)"],
    ["अपील", "खारिज होने पर 90 दिन में अपीलीय अधिकारी (धारा 59)"],
  ],
  to: "अपने ज़िले के <strong>मुख्य चिकित्सा अधिकारी (CMO) / मेडिकल बोर्ड</strong> या राज्य द्वारा अधिसूचित मेडिकल अथॉरिटी को। ऑनलाइन UDID आवेदन के बाद जांच की तारीख पर यह पत्र और कागज़ साथ ले जाएं; अटके आवेदन के लिए भी यही पत्र CMO को दें।",
  when: [
    "पहली बार दिव्यांग प्रमाण पत्र और UDID कार्ड बनवाना है",
    "दिव्यांग पेंशन, छात्रवृत्ति, नौकरी में आरक्षण, बस/रेल छूट के लिए प्रमाण पत्र चाहिए",
    "UDID पर आवेदन किया पर जांच की तारीख या कार्ड नहीं मिला",
    "अस्थायी प्रमाण पत्र की अवधि खत्म हो गई, दोबारा जांच करानी है",
  ],
  fields: [
    { key: "office", label: { hi: "CMO/मेडिकल बोर्ड का दफ्तर", en: "CMO / Medical Board office" }, required: true, placeholder: { hi: "जैसे: मुख्य चिकित्सा अधिकारी, ज़िला अस्पताल, सीतापुर", en: "e.g. Chief Medical Officer, District Hospital, Sitapur" } },
    { key: "name", label: { hi: "दिव्यांग व्यक्ति का नाम", en: "Name of the person with disability" }, required: true },
    { key: "father", label: { hi: "पिता/पति/अभिभावक का नाम", en: "Father's/husband's/guardian's name" }, required: true },
    { key: "dob", label: { hi: "जन्म तिथि", en: "Date of birth" }, required: true },
    { key: "type", label: { hi: "दिव्यांगता का प्रकार", en: "Type of disability" }, required: true, placeholder: { hi: "जैसे: चलने-फिरने में (लोकोमोटर), कम दिखना, कम सुनना, बौद्धिक", en: "e.g. locomotor, low vision, hearing impairment, intellectual" } },
    { key: "since", label: { hi: "कब से", en: "Since" }, placeholder: { hi: "जैसे: जन्म से / 2019 की दुर्घटना के बाद", en: "e.g. since birth / after an accident in 2019" } },
    { key: "enrol", label: { hi: "UDID आवेदन/नामांकन संख्या (हो तो)", en: "UDID enrolment no. (if any)" } },
    { key: "aadhaar4", label: { hi: "आधार के आखिरी 4 अंक", en: "Last 4 digits of Aadhaar" }, hint: { hi: "पूरा आधार नंबर न लिखें", en: "Do not write the full Aadhaar number" } },
    { key: "address", label: { hi: "पूरा पता", en: "Full address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: दिव्यांगजन अधिकार अधिनियम 2016 के तहत दिव्यांगता की जांच एवं दिव्यांग प्रमाण पत्र/UDID कार्ड जारी करने हेतु आवेदन

महोदय/महोदया,

निवेदन है कि मैं/मेरा/मेरी {{name}}, पुत्र/पुत्री/पत्नी श्री {{father}}, जन्म तिथि {{dob}}, निवासी {{address}}, {{since}} दिव्यांगता से प्रभावित है। दिव्यांगता का प्रकार: {{type}}।

UDID पोर्टल पर आवेदन/नामांकन संख्या: {{enrol}} (आधार के अंतिम 4 अंक: {{aadhaar4}})।

दिव्यांगता के कारण दैनिक जीवन, पढ़ाई/रोज़गार में कठिनाई होती है। इलाज के पुराने कागज़, पहचान और निवास के प्रमाण की प्रतियां संलग्न हैं।

अतः आपसे प्रार्थना है कि मेडिकल बोर्ड से जांच की तारीख देकर दिव्यांगता का आकलन कराएं तथा अधिनियम और नियमों के अनुसार निर्धारित समय में दिव्यांग प्रमाण पत्र और UDID कार्ड जारी करने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर / अंगूठे का निशान)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. UDID आवेदन की पावती (यदि हो)
2. पहचान और निवास का प्रमाण
3. हाल की फोटो (6 महीने के अंदर की)
4. इलाज/जांच के पुराने कागज़`,
    en: `To,
{{office}}

Subject: Application for assessment of disability and issue of disability certificate/UDID card under the Rights of Persons with Disabilities Act, 2016

Sir/Madam,

I respectfully submit that {{name}}, son/daughter/wife of Shri {{father}}, date of birth {{dob}}, resident of {{address}}, has been affected by disability {{since}}. Type of disability: {{type}}.

UDID application/enrolment no.: {{enrol}} (last 4 digits of Aadhaar: {{aadhaar4}}).

The disability causes difficulty in daily life and education/employment. Copies of previous treatment records and proof of identity and residence are enclosed.

I therefore request you kindly to fix a date for examination by the Medical Board, assess the disability, and issue the disability certificate and UDID card within the time prescribed under the Act and Rules.

Yours faithfully,

(Signature / thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. UDID application acknowledgement (if any)
2. Proof of identity and residence
3. Recent photograph (taken within 6 months)
4. Previous treatment/test records`,
  },
  attach: [
    "UDID पोर्टल पर आवेदन की पावती (enrolment number)",
    "पहचान का प्रमाण और आधार (या आधार नामांकन संख्या), निवास का प्रमाण",
    "हाल की फोटो (6 महीने के अंदर) और हस्ताक्षर/अंगूठे का निशान",
    "इलाज, ऑपरेशन, जांच रिपोर्ट (आंख, कान, IQ आदि) जो पहले हुई हों",
  ],
  submit: [
    '<a href="https://www.swavlambancard.gov.in/" target="_blank" rel="noopener nofollow">swavlambancard.gov.in</a> पर "Apply for Disability Certificate & UDID Card" में फॉर्म भरें, फोटो और कागज़ अपलोड करें; खुद न कर पाएं तो CSC या ज़िला अस्पताल की मदद लें।',
    "मेडिकल अथॉरिटी जांच की तारीख देती है; उस दिन यह पत्र, मूल कागज़ और पुरानी रिपोर्ट लेकर जाएं।",
    "जांच के बाद प्रमाण पत्र पोर्टल पर आता है और UDID कार्ड डाक से भेजा जाता है; स्थिति पोर्टल पर देखें।",
    "3 महीने में फैसला न हो तो CMO को यह पत्र देकर लिखित पावती लें, फिर ज़िला दिव्यांगजन सशक्तिकरण अधिकारी या राज्य दिव्यांगजन आयुक्त को शिकायत करें।",
    "आवेदन खारिज हो या प्रतिशत गलत लगे तो सूचना मिलने के <strong>90 दिन के अंदर</strong> राज्य द्वारा तय अपीलीय अधिकारी को अपील करें (धारा 59)।",
  ],
  tips: [
    "अस्थायी (temporary) प्रमाण पत्र की वैधता खत्म होने से पहले दोबारा जांच के लिए आवेदन करें।",
    "आवेदन 2 साल तक अधूरा पड़ा रहे तो निष्क्रिय (inactive) हो जाता है; समय पर जांच के लिए जाएं।",
    "पुराना हाथ से बना प्रमाण पत्र हो तो उसी नंबर से UDID पर ऑनलाइन करवा लें।",
    "पूरा आधार नंबर, OTP किसी अनजान व्यक्ति को न दें; पोर्टल पर आवेदन मुफ्त है।",
  ],
  official: [
    { href: "https://www.swavlambancard.gov.in/", title: "UDID पोर्टल (Swavlamban Card)", note: "ऑनलाइन आवेदन और स्थिति" },
    { href: "https://depwd.gov.in/", title: "दिव्यांगजन सशक्तिकरण विभाग (DEPwD)" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "RPwD अधिनियम 2016" },
  ],
  related: ["/service/disability-certificate.html", "/service/udid-disability-card-download.html", "/service/national-social-assistance-programme.html"],
  faq: [
    { q: "दिव्यांग प्रमाण पत्र के लिए आवेदन कहां करें?", a: "UDID पोर्टल swavlambancard.gov.in पर ऑनलाइन। आवेदन ज़िले की मेडिकल अथॉरिटी (CMO/मेडिकल बोर्ड) के पास जाता है जो जांच करके प्रमाण पत्र देती है।" },
    { q: "दिव्यांग प्रमाण पत्र कितने दिन में बनता है?", a: "RPwD संशोधन नियम 2024 के अनुसार मेडिकल अथॉरिटी को आवेदन मिलने के 3 महीने के अंदर फैसला करना होता है।" },
    { q: "आवेदन खारिज हो जाए तो क्या करें?", a: "खारिज होने की सूचना के 90 दिन के अंदर राज्य द्वारा अधिसूचित अपीलीय अधिकारी को RPwD Act की धारा 59 के तहत अपील करें।" },
    { q: "सरकारी लाभ के लिए कितनी दिव्यांगता चाहिए?", a: "ज़्यादातर लाभ (आरक्षण, पेंशन) के लिए 40% या ज़्यादा, यानी बेंचमार्क दिव्यांगता चाहिए। कुछ राज्य योजनाओं की शर्तें अलग हो सकती हैं।" },
    { q: "UDID कार्ड और दिव्यांग प्रमाण पत्र में क्या फर्क है?", a: "दोनों एक ही आवेदन से बनते हैं। प्रमाण पत्र में दिव्यांगता का प्रतिशत लिखा होता है; UDID कार्ड पूरे देश में मान्य पहचान पत्र है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
