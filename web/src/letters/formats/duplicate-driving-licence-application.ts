import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Central Motor Vehicles Rules 1989: holder of a lost/destroyed licence
//   must forthwith intimate the licensing authority and apply for a
//   duplicate in Form LLD (Form LLD headed "See rule 13(1)"; Delhi Transport
//   Dept page transport.delhi.gov.in/hi/node/3097 reproduces the duty and
//   the document list: Form LLD, FIR/NCR, ID/address proof, photo).
// - Online: sarathi.parivahan.gov.in -> state -> "Issue of Duplicate DL";
//   acknowledgement slip, fee paid online.
// - Fee differs by state and is shown on Sarathi (secondary sources quote
//   Rs 200-500): not stated as a number.
// - Lost-document report: most state police have online "lost report"; an
//   FIR is not needed for simple loss (theft is a cognizable offence: BNS).
export const duplicateDrivingLicenceApplication: Letter = {
  slug: "duplicate-driving-licence-application",
  category: "document",
  emoji: "🚗",
  title: "Duplicate Driving Licence Application in Hindi 2026: डुप्लीकेट DL आवेदन",
  description: "DL खो जाने या फटने पर RTO को डुप्लीकेट ड्राइविंग लाइसेंस का आवेदन पत्र (हिंदी/English)। Form LLD, पुलिस रिपोर्ट, Sarathi पर ऑनलाइन आवेदन।",
  h1: "ड्राइविंग लाइसेंस खो जाने पर डुप्लीकेट DL का आवेदन पत्र 2026",
  short: { hi: "डुप्लीकेट DL आवेदन", en: "Duplicate driving licence" },
  lead: "ड्राइविंग लाइसेंस खो जाए, चोरी हो जाए या फट जाए तो केंद्रीय मोटर वाहन नियम 1989 के तहत <strong>लाइसेंस जारी करने वाले RTO/लाइसेंसिंग अधिकारी</strong> को तुरंत सूचना देकर <strong>Form LLD</strong> में डुप्लीकेट के लिए आवेदन किया जाता है। ज़्यादातर राज्यों में यह <strong>sarathi.parivahan.gov.in</strong> पर ऑनलाइन होता है। खोने पर पुलिस की गुमशुदगी रिपोर्ट (lost report) या FIR की कॉपी लगती है। फीस राज्य के हिसाब से है, जो पोर्टल पर दिखती है।",
  facts: [
    ["किसे दें", "जिस RTO ने DL जारी किया (लाइसेंसिंग अधिकारी)"],
    ["फॉर्म", "Form LLD (केंद्रीय मोटर वाहन नियम 1989)"],
    ["ऑनलाइन", '<a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="noopener nofollow">sarathi.parivahan.gov.in</a>'],
    ["खोने का सबूत", "पुलिस lost report / FIR की कॉपी"],
  ],
  to: "जिस <strong>क्षेत्रीय परिवहन कार्यालय (RTO/ARTO/DTO)</strong> से लाइसेंस बना था, वहां के लाइसेंसिंग अधिकारी को। आप दूसरे राज्य में रहते हों तो पहले Sarathi पर देखें कि आपका DL ऑनलाइन रिकॉर्ड में है या नहीं।",
  when: [
    "ड्राइविंग लाइसेंस (कार्ड) खो गया या चोरी हो गया",
    "लाइसेंस फट गया, गंदा हो गया या पढ़ने लायक नहीं रहा",
    "पुराना कागज़ वाला DL है और उसकी जगह कार्ड चाहिए",
  ],
  fields: [
    { key: "office", label: { hi: "RTO का नाम और पता", en: "RTO name and address" }, required: true, placeholder: { hi: "जैसे: क्षेत्रीय परिवहन अधिकारी, RTO इंदौर, मध्य प्रदेश", en: "e.g. Regional Transport Officer, RTO Indore, Madhya Pradesh" } },
    { key: "name", label: { hi: "लाइसेंस धारक का नाम", en: "Licence holder's name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "dob", label: { hi: "जन्म तिथि", en: "Date of birth" }, required: true },
    { key: "dlno", label: { hi: "DL नंबर", en: "DL number" }, required: true, placeholder: { hi: "जैसे: MP09 20150012345", en: "e.g. MP09 20150012345" } },
    { key: "validity", label: { hi: "DL कब जारी हुआ / कब तक वैध", en: "Date of issue / valid till" } },
    { key: "class", label: { hi: "वाहन की श्रेणी", en: "Class of vehicle" }, placeholder: { hi: "जैसे: MCWG, LMV", en: "e.g. MCWG, LMV" } },
    { key: "reason", label: { hi: "क्या हुआ", en: "What happened" }, type: "select", required: true, options: [
      { hi: "खो गया", en: "lost" },
      { hi: "चोरी हो गया", en: "stolen" },
      { hi: "फट/खराब हो गया", en: "torn/damaged" },
    ] },
    { key: "details", label: { hi: "कब और कहां (और पुलिस रिपोर्ट नंबर)", en: "When and where (and police report no.)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 02/10/2026 को बस यात्रा में पर्स के साथ खो गया; ऑनलाइन lost report नं. ____", en: "e.g. Lost with wallet during bus journey on 02/10/2026; online lost report no. ____" } },
    { key: "address", label: { hi: "वर्तमान पता", en: "Present address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
लाइसेंसिंग अधिकारी,
{{office}}

विषय: ड्राइविंग लाइसेंस {{reason}} होने की सूचना एवं डुप्लीकेट ड्राइविंग लाइसेंस जारी करने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, पुत्र/पुत्री/पत्नी श्री {{father}}, जन्म तिथि {{dob}}, निवासी {{address}}, आपके कार्यालय से जारी ड्राइविंग लाइसेंस का धारक हूं। विवरण:

DL नंबर: {{dlno}}
जारी/वैधता: {{validity}}
वाहन श्रेणी: {{class}}

मेरा उपरोक्त ड्राइविंग लाइसेंस {{reason}} हो गया है। विवरण: {{details}}

मेरा लाइसेंस किसी न्यायालय या प्राधिकारी द्वारा निलंबित या रद्द नहीं किया गया है और न ही किसी के पास ज़ब्त है। Form LLD और आवश्यक कागज़ संलग्न हैं।

अतः आपसे प्रार्थना है कि नियमानुसार शुल्क लेकर मुझे डुप्लीकेट ड्राइविंग लाइसेंस जारी करने की कृपा करें। मूल लाइसेंस मिलने पर मैं उसे आपके कार्यालय में जमा कर दूंगा/दूंगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. भरा हुआ Form LLD
2. पुलिस lost report / FIR की प्रति (खोने/चोरी पर)
3. फटे/खराब लाइसेंस का मूल (खराब होने पर)
4. पहचान और पते का प्रमाण
5. पासपोर्ट साइज़ फोटो
6. फीस की रसीद`,
    en: `To,
The Licensing Authority,
{{office}}

Subject: Intimation of driving licence being {{reason}} and application for issue of duplicate driving licence

Sir/Madam,

I, {{name}}, son/daughter/wife of Shri {{father}}, date of birth {{dob}}, resident of {{address}}, hold a driving licence issued by your office. Details:

DL number: {{dlno}}
Issue/validity: {{validity}}
Class of vehicle: {{class}}

My above driving licence has been {{reason}}. Details: {{details}}

My licence has not been suspended or revoked by any court or authority, nor impounded by anyone. Form LLD and the necessary documents are enclosed.

I therefore request you kindly to issue me a duplicate driving licence on payment of the prescribed fee. If the original licence is found, I will surrender it to your office.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Filled Form LLD
2. Copy of police lost report / FIR (if lost/stolen)
3. Original torn/damaged licence (if damaged)
4. Identity and address proof
5. Passport-size photograph
6. Fee receipt`,
  },
  attach: [
    "Form LLD (Sarathi पर ऑनलाइन भरते समय अपने आप बनता है)",
    "खोने/चोरी पर पुलिस की <strong>lost report</strong> (कई राज्यों में ऑनलाइन) या FIR की कॉपी",
    "फटा/खराब लाइसेंस हो तो उसका मूल",
    "पहचान और पते का प्रमाण (आधार), फोटो और हस्ताक्षर",
  ],
  submit: [
    "पहले अपने राज्य की पुलिस वेबसाइट या थाने में <strong>खोए सामान की रिपोर्ट</strong> दर्ज कराएं; चोरी हो तो FIR।",
    'अपना DL नंबर न याद हो तो <a href="https://parivahan.gov.in/" target="_blank" rel="noopener nofollow">parivahan.gov.in</a> पर "DL Services" से नाम/जन्म तिथि से खोजें या RTO से पूछें।',
    '<a href="https://sarathi.parivahan.gov.in/" target="_blank" rel="noopener nofollow">sarathi.parivahan.gov.in</a> पर राज्य चुनें → "Driving Licence" → "Issue of Duplicate DL"; जानकारी भरें, कागज़ अपलोड करें, फीस भरें और acknowledgement प्रिंट करें।',
    "राज्य के नियम से RTO पर बायोमेट्रिक/सत्यापन के लिए जाना पड़ सकता है; तब यह पत्र और मूल कागज़ ले जाएं।",
    "कार्ड डाक से आता है या RTO से मिलता है। इस बीच DigiLocker/mParivahan में DL देख सकते हैं, जो चेकिंग में मान्य है।",
  ],
  tips: [
    "लाइसेंस की वैधता खत्म हो गई हो तो डुप्लीकेट की जगह नवीनीकरण (renewal) का आवेदन करें।",
    "DL के साथ पता भी बदलना हो तो Sarathi पर एक साथ दोनों सेवाएं चुन सकते हैं।",
    "पुराना DL बाद में मिल जाए तो उसे RTO में जमा करें; दो DL रखना गलत है।",
    "फर्ज़ी वेबसाइटों और एजेंटों से बचें; फीस सिर्फ parivahan.gov.in पर भरें।",
  ],
  official: [
    { href: "https://sarathi.parivahan.gov.in/", title: "Sarathi Parivahan", note: "डुप्लीकेट DL ऑनलाइन आवेदन" },
    { href: "https://parivahan.gov.in/", title: "Parivahan Sewa (MoRTH)" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker", note: "डिजिटल DL" },
  ],
  related: ["/service/driving-licence.html", "/service/mparivahan-virtual-rc-dl.html", "/affidavit/lost-document.html"],
  faq: [
    { q: "DL खो जाए तो डुप्लीकेट कैसे बनवाएं?", a: "पुलिस में lost report/FIR कराएं, फिर sarathi.parivahan.gov.in पर 'Issue of Duplicate DL' में आवेदन करें, कागज़ अपलोड करें और फीस भरें। जहां बुलाया जाए, RTO जाएं।" },
    { q: "डुप्लीकेट DL के लिए कौन सा फॉर्म भरें?", a: "Form LLD। Sarathi पर ऑनलाइन आवेदन करने पर यह फॉर्म अपने आप बनता है।" },
    { q: "डुप्लीकेट DL की फीस कितनी है?", a: "राज्य के हिसाब से अलग है। Sarathi पर आवेदन करते समय सही फीस दिखती है; वहीं ऑनलाइन भरें।" },
    { q: "क्या DL खोने पर FIR ज़रूरी है?", a: "ज़्यादातर RTO पुलिस की lost report या FIR की कॉपी मांगते हैं। कई राज्यों में खोए सामान की रिपोर्ट ऑनलाइन दर्ज होती है; चोरी हो तो FIR कराएं।" },
    { q: "डुप्लीकेट DL आने तक गाड़ी कैसे चलाएं?", a: "DigiLocker या mParivahan ऐप में दिखने वाला DL कानूनी रूप से मान्य है; साथ में आवेदन की रसीद रखें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
