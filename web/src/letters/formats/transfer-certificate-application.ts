import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Right of Children to Free and Compulsory Education Act 2009
//   (indiacode.gov.in), s.5(2)-(3): a child moving to another school (class
//   1-8) has the right to seek a transfer certificate; the head teacher or
//   in-charge shall immediately issue it; delay in producing the TC shall
//   not delay or deny admission; delay makes the head teacher liable to
//   disciplinary action under service rules. Restated in Delhi Directorate
//   of Education circular dt 04.10.2024 (edudel.nic.in) and Delhi High Court
//   judgment (delhihighcourt.nic.in, 2025).
// - CBSE examination bye-laws amendment (cbse.gov.in, 2012) and school
//   policies: for classes 9-12 the TC is issued after all dues are paid /
//   "no dues" clearance. Fees and timelines for TC differ by school/state,
//   so no amount or day count is given.
export const transferCertificateApplication: Letter = {
  slug: "transfer-certificate-application",
  category: "school",
  emoji: "🏫",
  title: "TC Application in Hindi 2026: स्थानांतरण प्रमाण पत्र आवेदन",
  description: "स्कूल से TC (Transfer Certificate) लेने का प्रार्थना पत्र (हिंदी/English)। जानकारी भरें, प्रिंट करें। RTE के तहत कक्षा 1-8 में TC तुरंत देने का नियम भी जानें।",
  h1: "TC (स्थानांतरण प्रमाण पत्र) के लिए प्रार्थना पत्र 2026",
  short: { hi: "TC आवेदन पत्र", en: "Transfer certificate application" },
  lead: "स्कूल छोड़ने या दूसरे स्कूल/शहर में दाखिले के लिए <strong>प्रधानाचार्य</strong> को TC (Transfer / School Leaving Certificate) का आवेदन दिया जाता है। कक्षा 1 से 8 के बच्चों के लिए <strong>शिक्षा का अधिकार (RTE) कानून 2009 की धारा 5</strong> कहती है कि प्रधानाध्यापक TC <strong>तुरंत</strong> जारी करेंगे और TC में देरी के कारण नए स्कूल में दाखिला नहीं रोका जा सकता। बड़ी कक्षाओं में स्कूल आम तौर पर बकाया फीस चुकाने (No Dues) के बाद TC देते हैं।",
  facts: [
    ["किसे दें", "स्कूल के प्रधानाचार्य/प्रधानाध्यापक"],
    ["कक्षा 1-8", "RTE धारा 5(2)-(3): TC तुरंत; देरी पर अनुशासनिक कार्रवाई"],
    ["कक्षा 9-12", "ज़्यादातर स्कूल बकाया (No Dues) के बाद TC देते हैं"],
    ["शिकायत", "प्रखंड/ज़िला शिक्षा अधिकारी (BEO/DEO)"],
  ],
  to: "जिस स्कूल में बच्चा अभी पढ़ रहा है, उसके <strong>प्रधानाचार्य/प्रधानाध्यापक</strong> को। आवेदन माता-पिता/अभिभावक की ओर से लिखा जाता है; बड़े छात्र (11वीं-12वीं) खुद भी लिख सकते हैं, पर अभिभावक के हस्ताक्षर लगवा लें।",
  when: [
    "परिवार का दूसरे शहर/राज्य में तबादला या घर बदलना",
    "दूसरे स्कूल में दाखिला लेना (जैसे सरकारी से प्राइवेट या उल्टा)",
    "10वीं के बाद दूसरे स्कूल/कॉलेज में 11वीं या ITI/पॉलिटेक्निक में दाखिला",
    "पढ़ाई पूरी होने के बाद स्कूल छोड़ना (School Leaving Certificate)",
  ],
  fields: [
    { key: "school", label: { hi: "स्कूल का नाम और पता", en: "School name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सरस्वती शिशु मंदिर, गांधी नगर, भोपाल", en: "e.g. Saraswati Shishu Mandir, Gandhi Nagar, Bhopal" } },
    { key: "parent", label: { hi: "अभिभावक का नाम", en: "Parent/guardian's name" }, required: true },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "class", label: { hi: "कक्षा और सेक्शन", en: "Class and section" }, required: true, placeholder: { hi: "जैसे: 8 (अ)", en: "e.g. 8 (A)" } },
    { key: "admno", label: { hi: "प्रवेश संख्या (Admission No.)", en: "Admission no." }, placeholder: { hi: "स्कूल की फीस रसीद/आई-कार्ड पर", en: "On fee receipt / ID card" } },
    { key: "session", label: { hi: "सत्र", en: "Session" }, placeholder: { hi: "जैसे: 2026-27", en: "e.g. 2026-27" } },
    { key: "reason", label: { hi: "TC का कारण", en: "Reason for TC" }, type: "select", options: [
      { hi: "मेरा तबादला दूसरे शहर में हो गया है और परिवार वहीं जा रहा है", en: "I have been transferred to another city and the family is shifting there" },
      { hi: "हम दूसरी जगह रहने जा रहे हैं, जहां से यह स्कूल दूर है", en: "we are shifting to a new residence far from this school" },
      { hi: "बच्चे का दाखिला दूसरे स्कूल में कराना है", en: "the child is to be admitted to another school" },
      { hi: "बच्चे ने इस स्कूल में पढ़ाई पूरी कर ली है और आगे की पढ़ाई दूसरी संस्था में करनी है", en: "the child has completed studies in this school and will study further elsewhere" },
    ] },
    { key: "newschool", label: { hi: "नए स्कूल/शहर का नाम (चाहें तो)", en: "New school / city (optional)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "पता", en: "Address" }, type: "textarea" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रधानाचार्य/प्रधानाध्यापक,
{{school}}

विषय: स्थानांतरण प्रमाण पत्र (TC) जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

सविनय निवेदन है कि मेरा पुत्र/मेरी पुत्री {{name}} आपके विद्यालय में कक्षा {{class}} में पढ़ रहा/रही है।
प्रवेश संख्या: {{admno}}
सत्र: {{session}}

{{reason}}, इसलिए बच्चे का इस विद्यालय में आगे पढ़ना संभव नहीं है।
नया विद्यालय/शहर: {{newschool}}

अतः आपसे प्रार्थना है कि {{name}} का स्थानांतरण प्रमाण पत्र (TC) तथा अब तक की अंकतालिका/रिपोर्ट कार्ड जल्द से जल्द जारी करने की कृपा करें, ताकि नए विद्यालय में प्रवेश में देरी न हो। विद्यालय की कोई फीस या पुस्तकालय की पुस्तक बकाया हो तो कृपया बताएं, मैं उसे तुरंत जमा कर दूंगा/दूंगी।

आपकी कृपा के लिए धन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
अभिभावक का नाम: {{parent}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
The Principal/Headmaster,
{{school}}

Subject: Application for issue of Transfer Certificate (TC)

Respected Sir/Madam,

My son/daughter {{name}} is studying in class {{class}} of your school.
Admission no.: {{admno}}
Session: {{session}}

As {{reason}}, it is not possible for the child to continue studying in this school.
New school/city: {{newschool}}

I therefore request you kindly to issue the Transfer Certificate (TC) of {{name}} along with the report card/marksheet up to date at the earliest, so that admission in the new school is not delayed. If any school fee or library book is pending, please let me know and I will clear it immediately.

Thanking you.

Yours faithfully,

(Signature)
Parent/guardian's name: {{parent}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "आखिरी फीस रसीद की कॉपी (No Dues दिखाने के लिए)",
    "बच्चे के आई-कार्ड की कॉपी (अगर हो)",
    "तबादला हुआ हो तो तबादला आदेश की कॉपी (स्कूल मांगे तो)",
  ],
  submit: [
    "पत्र प्रिंट करें, अभिभावक हस्ताक्षर करें और स्कूल ऑफिस/प्रधानाचार्य को दें।",
    "आवेदन की एक कॉपी पर <strong>रिसीविंग</strong> (तारीख और मुहर) ज़रूर लें।",
    "स्कूल का फॉर्म हो तो वह भी भरें; फीस, किताबें, आई-कार्ड लौटाकर No Dues पूरा करें।",
    "TC मिलने पर नाम, जन्म तिथि, पिता/माता का नाम और कक्षा जांच लें।",
    "कक्षा 1-8 में TC में देरी हो तो लिखित शिकायत <strong>प्रखंड शिक्षा अधिकारी (BEO)</strong> या <strong>ज़िला शिक्षा अधिकारी (DEO)</strong> को करें; RTE धारा 5 का हवाला दें।",
  ],
  tips: [
    "कक्षा 1-8 में नया स्कूल TC न होने के कारण दाखिला मना नहीं कर सकता (RTE धारा 5(2)); नए स्कूल को यह बताएं।",
    "TC पर जन्म तिथि गलत हो तो तुरंत सुधार कराएं; आगे बोर्ड और नौकरी में यही चलती है।",
    "दूसरे राज्य में दाखिले के लिए कुछ जगह TC पर शिक्षा अधिकारी का काउंटर-साइन मांगा जाता है; नए स्कूल से पहले पूछ लें।",
    "मूल TC एक ही बार मिलता है; नए स्कूल में देने से पहले उसकी फोटोकॉपी रख लें।",
  ],
  official: [
    { href: "https://www.indiacode.nic.in/handle/123456789/2086", title: "शिक्षा का अधिकार (RTE) अधिनियम 2009 (India Code)", note: "धारा 5: दूसरे स्कूल में स्थानांतरण का अधिकार" },
  ],
  related: ["/students/", "/service/school-admission-rte.html"],
  faq: [
    { q: "TC के लिए आवेदन किसे लिखें?", a: "जिस स्कूल में बच्चा पढ़ रहा है, उसके प्रधानाचार्य/प्रधानाध्यापक को। आवेदन अभिभावक की ओर से लिखा जाता है।" },
    { q: "स्कूल TC देने में देरी करे तो क्या करें?", a: "कक्षा 1-8 के लिए RTE अधिनियम की धारा 5(3) कहती है कि प्रधानाध्यापक TC तुरंत देंगे और देरी पर उन पर अनुशासनिक कार्रवाई हो सकती है। लिखित शिकायत प्रखंड या ज़िला शिक्षा अधिकारी को करें।" },
    { q: "क्या फीस बकाया होने पर स्कूल TC रोक सकता है?", a: "ज़्यादातर स्कूल, खासकर 9वीं-12वीं में, बकाया (No Dues) चुकाने के बाद ही TC देते हैं। रकम गलत लगे तो लिखित में ब्योरा मांगें और शिक्षा विभाग से शिकायत करें।" },
    { q: "क्या TC के बिना नए स्कूल में दाखिला हो सकता है?", a: "कक्षा 1-8 में हां; RTE धारा 5(2) के अनुसार TC में देरी के कारण दाखिला न रोका जा सकता है न मना किया जा सकता है। 9वीं से आगे स्कूल/बोर्ड के नियम लागू होते हैं।" },
    { q: "TC खो जाए तो क्या करें?", a: "उसी स्कूल में डुप्लीकेट TC का आवेदन दें। कई स्कूल शपथ पत्र या पुलिस में गुम होने की रिपोर्ट मांगते हैं; स्कूल से पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
