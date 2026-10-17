import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Registration of Births and Deaths Act 1969 (indiacode.nic.in) s.15:
//   the Registrar may correct an entry in the register that is erroneous
//   in form or substance, on proof to his satisfaction (Kerala govt circular;
//   Gujarat HC 2025 upheld Registrar's power to correct clerical errors on
//   documents such as school leaving certificate, Aadhaar, passport).
//   State RBD rules r.11 set the enquiry procedure; no fixed time limit for
//   clerical corrections (Bombay HC as reported on lawweb.in).
// - s.14 + state rules r.10: child's name can be added later, generally
//   within 15 years of registration (some states extended this by
//   amendment, e.g. Delhi 2021, HP 2023), so the page says "state rules".
// - RBD (Amendment) Act 2023, in force 1 Oct 2023: s.25A appeal against
//   Registrar's action/order to the District Registrar within 30 days.
// - Civil Registration System: crsorgi.gov.in (Office of the Registrar
//   General). Fees and forms differ by state/municipal body: not stated.
export const birthCertificateCorrectionApplication: Letter = {
  slug: "birth-certificate-correction-application",
  category: "document",
  emoji: "👶",
  title: "Birth Certificate Correction Application in Hindi 2026: जन्म प्रमाण पत्र सुधार",
  description: "जन्म प्रमाण पत्र में नाम, जन्म तिथि, माता-पिता का नाम सुधारने का आवेदन पत्र (हिंदी/English), रजिस्ट्रार को। धारा 15, कागज़ और अपील की जानकारी।",
  h1: "जन्म प्रमाण पत्र में सुधार के लिए आवेदन पत्र 2026",
  short: { hi: "जन्म प्रमाण पत्र सुधार आवेदन", en: "Birth certificate correction" },
  lead: "जन्म प्रमाण पत्र में नाम की स्पेलिंग, माता-पिता का नाम, लिंग, जन्म स्थान या जन्म तिथि गलत हो तो उसी <strong>जन्म-मृत्यु रजिस्ट्रार</strong> (नगर निगम/नगर पालिका, या गांव में पंचायत/प्रखंड स्तर का रजिस्ट्रार) को आवेदन दिया जाता है जहां जन्म दर्ज हुआ था। <strong>जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 की धारा 15</strong> के तहत रजिस्ट्रार सबूत से संतुष्ट होने पर रजिस्टर की गलती सुधारता है। बच्चे का नाम बाद में जुड़वाना हो तो वह आम तौर पर रजिस्ट्रेशन से <strong>15 साल</strong> के अंदर होता है (राज्य के नियम से)। रजिस्ट्रार के फैसले के खिलाफ <strong>30 दिन</strong> में ज़िला रजिस्ट्रार को अपील हो सकती है।",
  facts: [
    ["किसे दें", "जहां जन्म दर्ज है, वहां के जन्म-मृत्यु रजिस्ट्रार"],
    ["कानून", "RBD अधिनियम 1969, धारा 15 (सुधार)"],
    ["नाम जोड़ना", "आम तौर पर 15 साल के अंदर (राज्य के नियम)"],
    ["अपील", "धारा 25A: 30 दिन में ज़िला रजिस्ट्रार"],
  ],
  to: "जिस जगह जन्म का पंजीकरण हुआ है, वहां के <strong>रजिस्ट्रार (जन्म एवं मृत्यु)</strong> को: शहर में नगर निगम/नगर पालिका का स्वास्थ्य विभाग, गांव में ग्राम पंचायत सचिव/प्रखंड या अस्पताल स्तर का रजिस्ट्रार, जैसा राज्य ने तय किया हो। प्रमाण पत्र पर रजिस्ट्रार का पद और पता छपा होता है।",
  when: [
    "बच्चे या माता-पिता के नाम की स्पेलिंग गलत छपी है",
    "जन्म तिथि, लिंग या जन्म स्थान गलत दर्ज हुआ है",
    "प्रमाण पत्र में बच्चे का नाम नहीं है, नाम जुड़वाना है",
    "पासपोर्ट, स्कूल दाखिले या आधार में जन्म प्रमाण पत्र से मेल नहीं खा रहा",
  ],
  fields: [
    { key: "office", label: { hi: "रजिस्ट्रार का दफ्तर और पता", en: "Registrar's office and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: रजिस्ट्रार (जन्म एवं मृत्यु), नगर निगम, लखनऊ", en: "e.g. Registrar (Births & Deaths), Municipal Corporation, Lucknow" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "relation", label: { hi: "आवेदक कौन है", en: "Applicant is" }, type: "select", options: [
      { hi: "मैं बच्चे का पिता/माता हूं", en: "I am the father/mother of the child" },
      { hi: "मैं स्वयं वह व्यक्ति हूं जिसका प्रमाण पत्र है", en: "I am the person whose certificate it is" },
      { hi: "मैं बच्चे का कानूनी अभिभावक हूं", en: "I am the legal guardian of the child" },
    ] },
    { key: "child", label: { hi: "प्रमाण पत्र पर जिसका नाम है", en: "Name on the certificate" }, required: true },
    { key: "regno", label: { hi: "पंजीकरण संख्या और तारीख", en: "Registration no. and date" }, required: true, placeholder: { hi: "प्रमाण पत्र पर छपी", en: "As printed on the certificate" } },
    { key: "dob", label: { hi: "जन्म तिथि और जन्म स्थान (अस्पताल/गांव)", en: "Date and place of birth (hospital/village)" }, required: true },
    { key: "wrong", label: { hi: "अभी क्या गलत छपा है", en: "What is printed wrong" }, type: "textarea", required: true, placeholder: { hi: "जैसे: पिता का नाम: RAMESH KUMAR SHARMA की जगह RAMESH KUMAR SARMA", en: "e.g. Father's name: RAMESH KUMAR SARMA instead of RAMESH KUMAR SHARMA" } },
    { key: "right", label: { hi: "सही क्या होना चाहिए", en: "What it should be" }, type: "textarea", required: true, placeholder: { hi: "जैसे: पिता का नाम: RAMESH KUMAR SHARMA", en: "e.g. Father's name: RAMESH KUMAR SHARMA" } },
    { key: "proof", label: { hi: "सबूत के कागज़", en: "Supporting documents" }, type: "textarea", required: true, placeholder: { hi: "जैसे: अस्पताल का डिस्चार्ज कार्ड, माता-पिता का आधार, स्कूल प्रमाण पत्र", en: "e.g. Hospital discharge card, parents' Aadhaar, school certificate" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 की धारा 15 के तहत जन्म प्रविष्टि/प्रमाण पत्र में सुधार हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, निवेदन करता/करती हूं कि {{relation}}। आपके कार्यालय में दर्ज जन्म का विवरण इस प्रकार है:
नाम: {{child}}
पंजीकरण संख्या/तारीख: {{regno}}
जन्म तिथि और स्थान: {{dob}}

इस प्रविष्टि और प्रमाण पत्र में निम्न गलती है:
गलत: {{wrong}}
सही: {{right}}

यह गलती पंजीकरण के समय लिपिकीय भूल से हुई है। सही विवरण के समर्थन में निम्न दस्तावेज़ों की स्व-प्रमाणित प्रतियां संलग्न हैं:
{{proof}}

अतः आपसे प्रार्थना है कि अधिनियम की धारा 15 और राज्य के नियमों के अनुसार जांच करके रजिस्टर में सुधार करें और संशोधित जन्म प्रमाण पत्र जारी करने की कृपा करें। निर्धारित शुल्क जमा करने और कोई अन्य दस्तावेज़ या शपथ पत्र देने को मैं तैयार हूं।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. मूल जन्म प्रमाण पत्र (जिसमें गलती है) की प्रति
2. सबूत के दस्तावेज़ (ऊपर लिखे अनुसार)
3. आवेदक का पहचान पत्र
4. शपथ पत्र (यदि मांगा गया हो)`,
    en: `To,
{{office}}

Subject: Application for correction of birth entry/certificate under Section 15 of the Registration of Births and Deaths Act, 1969

Sir/Madam,

I, {{name}}, respectfully submit that {{relation}}. The details of the birth registered in your office are as follows:
Name: {{child}}
Registration no./date: {{regno}}
Date and place of birth: {{dob}}

The entry and certificate contain the following error:
Wrong: {{wrong}}
Correct: {{right}}

This error occurred due to a clerical mistake at the time of registration. Self-attested copies of the following documents are enclosed in support of the correct details:
{{proof}}

I therefore request you kindly to make an enquiry and correct the register under Section 15 of the Act and the state rules, and issue a corrected birth certificate. I am ready to pay the prescribed fee and furnish any other document or affidavit required.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of the original birth certificate (with the error)
2. Supporting documents (as listed above)
3. Applicant's identity proof
4. Affidavit (if required)`,
  },
  attach: [
    "गलत छपे जन्म प्रमाण पत्र की कॉपी (मूल साथ ले जाएं)",
    "सही जानकारी का सबूत: अस्पताल का डिस्चार्ज कार्ड/जन्म रिपोर्ट, माता-पिता का आधार/वोटर कार्ड, विवाह प्रमाण पत्र, स्कूल रिकॉर्ड",
    'जन्म तिथि सुधार में कई दफ्तर <a href="/affidavit/date-of-birth.html">जन्म तिथि का शपथ पत्र</a> मांगते हैं',
    "आवेदक का पहचान पत्र और पते का प्रमाण",
  ],
  submit: [
    "पहले नगर निगम/पंचायत की वेबसाइट या दफ्तर से पूछें कि सुधार का अपना फॉर्म है या नहीं; हो तो फॉर्म के साथ यह पत्र लगाएं।",
    "पत्र और कागज़ रजिस्ट्रार के दफ्तर में जमा करें, फीस (अगर लगे) भरें और <strong>रसीद/आवेदन नंबर</strong> लें।",
    "रजिस्ट्रार जांच करता है; अस्पताल रिकॉर्ड या गवाह/शपथ पत्र मांगा जा सकता है।",
    "सुधार के बाद संशोधित प्रमाण पत्र लें; कई राज्यों में यह CRS पोर्टल से डिजिटल रूप में भी मिलता है।",
    "रजिस्ट्रार मना करे या कार्रवाई न करे, तो आदेश/कार्रवाई के <strong>30 दिन के अंदर ज़िला रजिस्ट्रार</strong> को अपील करें (धारा 25A)।",
  ],
  tips: [
    "सबूत ऐसे लगाएं जो जन्म के समय के हों (अस्पताल रिकॉर्ड); बाद में बने कागज़ कम माने जाते हैं।",
    "जन्म तिथि में बड़ा बदलाव (साल/महीना) आसानी से नहीं होता; ठोस सबूत के बिना आवेदन खारिज हो सकता है।",
    "सुधार के बाद आधार, स्कूल रिकॉर्ड और पासपोर्ट में भी वही जानकारी अपडेट कराएं।",
    "बिचौलियों को पैसे न दें; फीस की सरकारी रसीद ही लें।",
  ],
  notice: "सुधार का फॉर्म, फीस और प्रक्रिया <strong>राज्य और नगर निकाय के हिसाब से अलग</strong> है। 15 साल के बाद नाम जोड़ने या जन्म तिथि बदलने में कई राज्यों में ज़िला स्तर की अनुमति या अदालत का आदेश लगता है; दफ्तर से पूछें।",
  official: [
    { href: "https://crsorgi.gov.in/", title: "Civil Registration System (CRS)", note: "भारत के महारजिस्ट्रार का जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 का पाठ" },
  ],
  related: ["/service/birth-certificate.html", "/affidavit/date-of-birth.html", "/service/passport.html"],
  faq: [
    { q: "जन्म प्रमाण पत्र में सुधार के लिए आवेदन किसे दें?", a: "जहां जन्म दर्ज हुआ है, वहां के जन्म-मृत्यु रजिस्ट्रार को: शहर में नगर निगम/नगर पालिका, गांव में पंचायत या राज्य द्वारा तय रजिस्ट्रार।" },
    { q: "जन्म प्रमाण पत्र में सुधार किस कानून के तहत होता है?", a: "जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 की धारा 15 के तहत। रजिस्ट्रार सबूत देखकर संतुष्ट होने पर रजिस्टर में सुधार करता है; प्रक्रिया राज्य के नियमों में है।" },
    { q: "जन्म प्रमाण पत्र में बच्चे का नाम कब तक जुड़ सकता है?", a: "आम तौर पर पंजीकरण से 15 साल के अंदर। कुछ राज्यों ने नियम बदलकर समय बढ़ाया है; अपने रजिस्ट्रार से पूछें।" },
    { q: "क्या जन्म तिथि बदल सकती है?", a: "हां, अगर साबित हो कि दर्ज तिथि गलत है। इसके लिए अस्पताल का रिकॉर्ड जैसे ठोस सबूत चाहिए; कई जगह शपथ पत्र और जांच भी होती है।" },
    { q: "रजिस्ट्रार सुधार से मना कर दे तो?", a: "2023 के संशोधन से जुड़ी धारा 25A के तहत रजिस्ट्रार की कार्रवाई या आदेश के 30 दिन के अंदर ज़िला रजिस्ट्रार को अपील कर सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
