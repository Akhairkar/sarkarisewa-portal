import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - CBSE correction window coverage (Careers360, Business Today 2025) and
//   school circulars (Ramjas School, 2025): corrections in candidate/parent
//   names are made on the basis of the school's admission form, admission-
//   withdrawal register and TC; only minor (spelling) corrections are
//   allowed, complete change of name is not; names must match school
//   records. Post-result correction is through the board's regional office;
//   time limits and fees vary by board, so none are given.
// - Department of Publication (egazette.gov.in) name-change notices are
//   published in Part IV of the Gazette of India; prerequisites include a
//   newspaper advertisement and a notarised affidavit. Fee/time not verified
//   from an official page, so not stated.
// - Other certificates (caste, income, domicile) are corrected by the
//   issuing tehsil/e-District office under state rules.
export const nameCorrectionCertificateApplication: Letter = {
  slug: "name-correction-certificate-application",
  category: "document",
  emoji: "✏️",
  title: "Name Correction Application in Hindi 2026: प्रमाण पत्र में नाम सुधार",
  description: "मार्कशीट, TC या किसी प्रमाण पत्र में नाम/स्पेलिंग की गलती सुधारने का आवेदन पत्र (हिंदी/English)। जानकारी भरें, कौन से कागज़ लगें, जानें और प्रिंट करें।",
  h1: "प्रमाण पत्र में नाम/स्पेलिंग सुधार के लिए आवेदन पत्र 2026",
  short: { hi: "प्रमाण पत्र में नाम सुधार आवेदन", en: "Name correction application" },
  lead: "मार्कशीट, TC, डिग्री या किसी सरकारी प्रमाण पत्र में <strong>नाम, पिता/माता के नाम की स्पेलिंग</strong> गलत छपी हो तो उसी दफ्तर को आवेदन दिया जाता है जिसने वह दस्तावेज़ जारी किया: स्कूल के रिकॉर्ड के लिए <strong>प्रधानाचार्य</strong>, बोर्ड की मार्कशीट के लिए <strong>बोर्ड का क्षेत्रीय कार्यालय</strong> (अक्सर स्कूल के ज़रिए), और विश्वविद्यालय के लिए <strong>परीक्षा नियंत्रक</strong>। बोर्ड आम तौर पर <strong>स्कूल के प्रवेश रजिस्टर</strong> के आधार पर सिर्फ छोटी गलती सुधारते हैं; पूरा नाम बदलना हो तो शपथ पत्र, अखबार विज्ञापन और गज़ट नोटिफिकेशन की ज़रूरत पड़ती है।",
  facts: [
    ["किसे दें", "जिस दफ्तर/संस्था ने प्रमाण पत्र जारी किया"],
    ["आधार", "स्कूल का प्रवेश रजिस्टर, जन्म प्रमाण पत्र, आधार आदि"],
    ["पूरा नाम बदलना", "शपथ पत्र + अखबार विज्ञापन + गज़ट (भाग IV)"],
    ["फीस/समय सीमा", "बोर्ड/विश्वविद्यालय/राज्य के नियम से अलग"],
  ],
  to: "जिस संस्था ने दस्तावेज़ जारी किया, उसके सक्षम अधिकारी को: स्कूल रिकॉर्ड/TC के लिए <strong>प्रधानाचार्य</strong>; 10वीं/12वीं की मार्कशीट के लिए <strong>बोर्ड के क्षेत्रीय अधिकारी/सचिव</strong> (आवेदन स्कूल से अग्रसारित कराएं); डिग्री/मार्कशीट के लिए <strong>परीक्षा नियंत्रक/रजिस्ट्रार</strong>; जाति, आय, निवास प्रमाण पत्र के लिए जारी करने वाले <strong>तहसील/SDM कार्यालय</strong>।",
  when: [
    "मार्कशीट या डिग्री में नाम की स्पेलिंग गलत छपी है (जैसे Sunita की जगह Sunitha)",
    "पिता/माता का नाम गलत छपा है या आपस में बदल गया है",
    "स्कूल रिकॉर्ड और आधार/जन्म प्रमाण पत्र में नाम अलग है, जिससे नौकरी/स्कॉलरशिप में दिक्कत है",
    "जाति, आय या निवास प्रमाण पत्र में नाम गलत लिखा गया है",
  ],
  fields: [
    { key: "office", label: { hi: "अधिकारी और दफ्तर का नाम-पता", en: "Officer and office address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: क्षेत्रीय अधिकारी, केंद्रीय माध्यमिक शिक्षा बोर्ड, क्षेत्रीय कार्यालय, पटना", en: "e.g. Regional Officer, CBSE, Regional Office, Patna" } },
    { key: "name", label: { hi: "आपका नाम (सही नाम)", en: "Your name (correct)" }, required: true },
    { key: "doc", label: { hi: "कौन सा प्रमाण पत्र", en: "Which certificate" }, required: true, placeholder: { hi: "जैसे: कक्षा 10 की अंकतालिका, रोल नं. 1234567, वर्ष 2024", en: "e.g. Class 10 marksheet, roll no. 1234567, year 2024" } },
    { key: "field", label: { hi: "किसमें गलती है", en: "Error is in" }, type: "select", options: [
      { hi: "मेरे नाम", en: "name" },
      { hi: "पिता के नाम", en: "father's name" },
      { hi: "माता के नाम", en: "mother's name" },
      { hi: "उपनाम (सरनेम)", en: "surname" },
    ] },
    { key: "wrong", label: { hi: "अभी क्या छपा है (गलत)", en: "Printed now (wrong)" }, required: true, placeholder: { hi: "जैसे: SUNITHA KUMARI", en: "e.g. SUNITHA KUMARI" } },
    { key: "right", label: { hi: "सही क्या होना चाहिए", en: "Should be (correct)" }, required: true, placeholder: { hi: "जैसे: SUNITA KUMARI", en: "e.g. SUNITA KUMARI" } },
    { key: "proof", label: { hi: "सही नाम का सबूत", en: "Proof of correct name" }, type: "select", options: [
      { hi: "विद्यालय का प्रवेश रजिस्टर/प्रवेश फॉर्म", en: "the school admission register/admission form" },
      { hi: "जन्म प्रमाण पत्र", en: "the birth certificate" },
      { hi: "आधार कार्ड और पिछली कक्षा की अंकतालिका", en: "the Aadhaar card and previous class marksheet" },
      { hi: "शपथ पत्र और गज़ट नोटिफिकेशन", en: "an affidavit and gazette notification" },
    ] },
    { key: "school", label: { hi: "स्कूल/कॉलेज का नाम (चाहें तो)", en: "School/college (optional)" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: {{doc}} में {{field}} की त्रुटि सुधारने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मेरे प्रमाण पत्र ({{doc}}) में {{field}} की वर्तनी (स्पेलिंग) गलत छप गई है।
स्कूल/कॉलेज: {{school}}

गलत छपा है: {{wrong}}
सही होना चाहिए: {{right}}

सही नाम {{proof}} में दर्ज है, जिसकी स्व-प्रमाणित प्रति संलग्न है। इस गलती के कारण मुझे आगे की पढ़ाई, नौकरी और अन्य दस्तावेज़ों में कठिनाई हो रही है।

अतः आपसे प्रार्थना है कि रिकॉर्ड की जांच करके मेरे प्रमाण पत्र में "{{wrong}}" के स्थान पर "{{right}}" करने और संशोधित प्रमाण पत्र जारी करने की कृपा करें। मूल गलत प्रमाण पत्र और निर्धारित शुल्क संलग्न है; कोई अन्य दस्तावेज़ आवश्यक हो तो कृपया सूचित करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. गलत छपे प्रमाण पत्र की मूल प्रति/फोटोकॉपी
2. सही नाम का सबूत ({{proof}}) की स्व-प्रमाणित प्रति
3. पहचान पत्र की प्रति
4. शुल्क की रसीद (यदि लागू हो)`,
    en: `To,
{{office}}

Subject: Application for correction of my {{field}} in {{doc}}

Sir/Madam,

I respectfully submit that my {{field}} has been printed incorrectly in my {{doc}}.
School/college: {{school}}

Printed (wrong): {{wrong}}
Should be (correct): {{right}}

The correct name is recorded in {{proof}}, a self-attested copy of which is enclosed. This error is causing me difficulty in further studies, employment and other documents.

I therefore request you kindly to verify the records, correct my {{field}} in the certificate from "{{wrong}}" to "{{right}}" and issue a corrected certificate. The original incorrect certificate and the prescribed fee are enclosed; please let me know if any other document is required.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Original/photocopy of the incorrect certificate
2. Self-attested copy of proof of correct name ({{proof}})
3. Copy of identity proof
4. Fee receipt (if applicable)`,
  },
  attach: [
    "गलत छपा प्रमाण पत्र (मूल; कई दफ्तर नया देते समय पुराना वापस लेते हैं)",
    "सही नाम का सबूत: स्कूल प्रवेश रजिस्टर का प्रमाणित अंश, जन्म प्रमाण पत्र, पिछली मार्कशीट या आधार",
    'पूरा नाम बदला हो तो <a href="/affidavit/name-change.html">नाम बदलने का शपथ पत्र</a>, अखबार विज्ञापन और गज़ट की कॉपी',
    "बोर्ड/विश्वविद्यालय/दफ्तर की तय फीस की रसीद",
  ],
  submit: [
    "पहले उसी दफ्तर की वेबसाइट/नोटिस देखें: कई बोर्ड और विश्वविद्यालय सुधार का अपना फॉर्म या ऑनलाइन पोर्टल रखते हैं।",
    "बोर्ड की मार्कशीट में सुधार के लिए आवेदन अपने <strong>स्कूल के प्रधानाचार्य से अग्रसारित (forward)</strong> कराएं; स्कूल ही प्रवेश रजिस्टर की कॉपी लगाता है।",
    "पत्र, कागज़ और फीस दफ्तर में जमा करें या रजिस्टर्ड/स्पीड पोस्ट से भेजें; रिसीविंग/रसीद संभालें।",
    "संशोधित प्रमाण पत्र मिलने पर नई स्पेलिंग अक्षर-अक्षर मिलाएं।",
    "लंबे समय तक जवाब न मिले तो उसी दफ्तर के वरिष्ठ अधिकारी को याद-पत्र दें, या RTI से आवेदन की स्थिति पूछें।",
  ],
  tips: [
    "जितनी जल्दी हो सके सुधार कराएं; कई बोर्ड/विश्वविद्यालय परिणाम के कुछ सालों बाद सुधार नहीं करते या कड़े कागज़ मांगते हैं।",
    "बोर्ड उसी नाम को सही मानता है जो स्कूल के प्रवेश रिकॉर्ड में है; रिकॉर्ड में भी गलती हो तो पहले स्कूल में सुधार कराएं।",
    "सिर्फ छोटी गलती (स्पेलिंग) सुधार से ठीक होती है; पूरा नया नाम रखना 'नाम परिवर्तन' है, उसके लिए गज़ट का रास्ता है।",
    'सुधार न हो पाए तो कई जगह <a href="/affidavit/one-and-same-person.html">\"एक ही व्यक्ति\" (One and Same Person) शपथ पत्र</a> से काम चल जाता है।',
  ],
  notice: "हर बोर्ड, विश्वविद्यालय और दफ्तर की <strong>समय सीमा, फीस और फॉर्म अलग</strong> हैं, और कई जगह सिर्फ उनका तय फॉर्म या ऑनलाइन आवेदन लिया जाता है। यह पत्र साथ में अनुरोध के रूप में लगाएं।",
  official: [
    { href: "https://egazette.gov.in/", title: "e-Gazette (भारत का राजपत्र)", note: "नाम परिवर्तन की सूचना भाग IV में छपती है" },
  ],
  related: ["/affidavit/name-change.html", "/affidavit/one-and-same-person.html", "/students/"],
  faq: [
    { q: "मार्कशीट में नाम गलत हो तो किसे आवेदन दें?", a: "10वीं/12वीं की मार्कशीट के लिए बोर्ड के क्षेत्रीय कार्यालय को, आम तौर पर अपने स्कूल के ज़रिए। कॉलेज की मार्कशीट/डिग्री के लिए विश्वविद्यालय के परीक्षा नियंत्रक को।" },
    { q: "नाम सुधार के लिए कौन से कागज़ लगते हैं?", a: "गलत छपा प्रमाण पत्र, सही नाम का सबूत (स्कूल प्रवेश रजिस्टर, जन्म प्रमाण पत्र, पिछली मार्कशीट या आधार) और पहचान पत्र। फीस संस्था के नियम से।" },
    { q: "क्या बोर्ड पूरा नाम बदल देता है?", a: "आम तौर पर नहीं। बोर्ड स्कूल के रिकॉर्ड के आधार पर सिर्फ स्पेलिंग जैसी छोटी गलती सुधारते हैं। पूरा नाम बदलना हो तो शपथ पत्र, अखबार विज्ञापन और गज़ट नोटिफिकेशन चाहिए, और तब भी बोर्ड का नियम देखें।" },
    { q: "नाम सुधार में कितना समय लगता है?", a: "कोई एक तय समय नहीं है; बोर्ड/विश्वविद्यालय के हिसाब से कुछ हफ्ते से कुछ महीने लग सकते हैं। रसीद संभालें और समय-समय पर स्थिति पूछें।" },
    { q: "आधार और मार्कशीट में नाम अलग है, क्या करें?", a: "जो दस्तावेज़ गलत है उसे सुधारें। मार्कशीट सही है तो आधार अपडेट कराएं; मार्कशीट गलत है तो यह आवेदन दें। तब तक 'एक ही व्यक्ति' शपथ पत्र काम आ सकता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
