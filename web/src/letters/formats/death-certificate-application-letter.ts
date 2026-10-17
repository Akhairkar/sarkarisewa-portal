import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Registration of Births and Deaths Act 1969 (indiacode.nic.in): death to
//   be reported within 21 days (free); s.10 medical certificate of cause of
//   death for deaths attended by a medical practitioner; s.12 extract given
//   free to the informant; s.17 certified extracts on application.
// - s.13 delayed registration: 21-30 days late fee; 30 days-1 year written
//   permission of prescribed authority + affidavit + fee; 1-2 years order of
//   DM/SDM/authorised Executive Magistrate (2023 amendment); after 2 years
//   order of a Judicial Magistrate First Class (RBD Amendment Act 2026,
//   in force 1 Oct 2026 per MHA notification 16 Sep 2026).
// - s.25A appeal to District Registrar within 30 days. CRS crsorgi.gov.in.
// - Fees beyond the free extract are set by state rules: not stated.
export const deathCertificateApplicationLetter: Letter = {
  slug: "death-certificate-application-letter",
  category: "document",
  emoji: "🕯️",
  title: "Death Certificate Application in Hindi 2026: मृत्यु प्रमाण पत्र आवेदन पत्र",
  description: "मृत्यु प्रमाण पत्र के लिए रजिस्ट्रार को आवेदन पत्र (हिंदी/English)। 21 दिन में मुफ्त पंजीकरण, देर होने पर धारा 13 के नियम, कागज़ और अपील की जानकारी।",
  h1: "मृत्यु प्रमाण पत्र के लिए आवेदन पत्र 2026 (देर से पंजीकरण भी)",
  short: { hi: "मृत्यु प्रमाण पत्र आवेदन", en: "Death certificate application" },
  lead: "मृत्यु का पंजीकरण <strong>21 दिन के अंदर</strong> स्थानीय <strong>जन्म-मृत्यु रजिस्ट्रार</strong> (नगर निगम/नगर पालिका या ग्राम पंचायत) के यहां मुफ्त होता है। अस्पताल में मृत्यु हो तो सूचना अस्पताल देता है, घर पर हो तो परिवार का मुखिया। 21 दिन बाद <strong>धारा 13</strong> लागू होती है: 30 दिन तक लेट फीस, 1 साल तक तय अधिकारी की अनुमति और शपथ पत्र, 1–2 साल पर DM/SDM का आदेश और 1 अक्टूबर 2026 से 2 साल के बाद <strong>न्यायिक मजिस्ट्रेट</strong> का आदेश।",
  facts: [
    ["किसे दें", "जहां मृत्यु हुई, वहां के जन्म-मृत्यु रजिस्ट्रार"],
    ["समय", "21 दिन में मुफ्त पंजीकरण"],
    ["देर होने पर", "धारा 13: लेट फीस / अनुमति / मजिस्ट्रेट आदेश"],
    ["अपील", "धारा 25A: 30 दिन में ज़िला रजिस्ट्रार"],
  ],
  to: "जिस जगह <strong>मृत्यु हुई</strong> (घर या अस्पताल), वहां के <strong>रजिस्ट्रार (जन्म एवं मृत्यु)</strong> को: शहर में नगर निगम/नगर पालिका, गांव में ग्राम पंचायत सचिव या राज्य द्वारा तय रजिस्ट्रार। देरी 1 साल से ज़्यादा हो तो पहले SDM/DM या मजिस्ट्रेट का आदेश लेना होता है।",
  when: [
    "परिवार में किसी की मृत्यु हुई है और प्रमाण पत्र चाहिए",
    "पेंशन, बीमा, बैंक खाता, नामांतरण या उत्तराधिकार के लिए प्रमाण पत्र मांगा गया है",
    "मृत्यु का पंजीकरण समय पर नहीं हुआ, अब देर से कराना है",
    "पहले से दर्ज मृत्यु के प्रमाण पत्र की और कॉपियां चाहिए",
  ],
  fields: [
    { key: "office", label: { hi: "रजिस्ट्रार का दफ्तर और पता", en: "Registrar's office and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: रजिस्ट्रार (जन्म एवं मृत्यु), नगर निगम, जयपुर", en: "e.g. Registrar (Births & Deaths), Municipal Corporation, Jaipur" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "relation", label: { hi: "मृतक से रिश्ता", en: "Relation with the deceased" }, required: true, placeholder: { hi: "जैसे: पुत्र", en: "e.g. son" } },
    { key: "deceased", label: { hi: "मृतक का नाम", en: "Name of the deceased" }, required: true },
    { key: "parent", label: { hi: "मृतक के पिता/पति का नाम", en: "Father's/husband's name of the deceased" }, required: true },
    { key: "age", label: { hi: "मृत्यु के समय उम्र", en: "Age at death" }, type: "number" },
    { key: "dod", label: { hi: "मृत्यु की तारीख", en: "Date of death" }, required: true, placeholder: { hi: "जैसे: 05/09/2026", en: "e.g. 05/09/2026" } },
    { key: "pod", label: { hi: "मृत्यु का स्थान", en: "Place of death" }, required: true, placeholder: { hi: "जैसे: घर, ग्राम रामपुर / ज़िला अस्पताल", en: "e.g. home, village Rampur / District Hospital" } },
    { key: "delay", label: { hi: "पंजीकरण की स्थिति", en: "Registration status" }, type: "select", required: true, options: [
      { hi: "मृत्यु को 21 दिन नहीं हुए हैं, पंजीकरण करना है", en: "less than 21 days since death; registration to be done" },
      { hi: "21 दिन से ज़्यादा हो गए, देर से पंजीकरण करना है (लेट फीस/अनुमति के साथ)", en: "more than 21 days since death; delayed registration with late fee/permission" },
      { hi: "पंजीकरण हो चुका है, प्रमाण पत्र की प्रतियां चाहिए", en: "already registered; copies of certificate needed" },
    ] },
    { key: "copies", label: { hi: "कितनी प्रतियां चाहिए", en: "Number of copies" }, type: "number", placeholder: { hi: "जैसे: 5", en: "e.g. 5" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: मृत्यु पंजीकरण एवं मृत्यु प्रमाण पत्र जारी करने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, सूचित करता/करती हूं कि मेरे {{relation}} श्री/श्रीमती {{deceased}}, पुत्र/पत्नी श्री {{parent}}, आयु {{age}} वर्ष, की मृत्यु दिनांक {{dod}} को {{pod}} में हो गई।

स्थिति: {{delay}}।

मृत्यु के समर्थन में आवश्यक कागज़ों की प्रतियां संलग्न हैं। देर से पंजीकरण के मामले में धारा 13 के अनुसार शपथ पत्र, लेट फीस और सक्षम अधिकारी की अनुमति/आदेश जमा करने को मैं तैयार हूं।

अतः आपसे प्रार्थना है कि जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 के अनुसार मृत्यु का पंजीकरण कर मुझे मृत्यु प्रमाण पत्र की {{copies}} प्रतियां जारी करने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. अस्पताल का मृत्यु सूचना पत्र / डॉक्टर का प्रमाण पत्र (जहां लागू हो)
2. श्मशान/कब्रिस्तान की पर्ची या पंचायत/वार्ड पार्षद का प्रमाण
3. मृतक का आधार/पहचान पत्र
4. आवेदक का पहचान पत्र
5. शपथ पत्र और अनुमति/आदेश (देर से पंजीकरण में)`,
    en: `To,
{{office}}

Subject: Application for registration of death and issue of death certificate

Sir/Madam,

I, {{name}}, resident of {{address}}, inform you that my {{relation}}, Shri/Smt {{deceased}}, son/wife of Shri {{parent}}, aged {{age}} years, died on {{dod}} at {{pod}}.

Status: {{delay}}.

Copies of the necessary documents in support of the death are enclosed. In case of delayed registration, I am ready to furnish an affidavit, the late fee and the permission/order of the competent authority under Section 13.

I therefore request you kindly to register the death under the Registration of Births and Deaths Act, 1969 and issue me {{copies}} copies of the death certificate.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Hospital death intimation / doctor's certificate (where applicable)
2. Cremation/burial ground slip or certificate of panchayat/ward councillor
3. Aadhaar/identity proof of the deceased
4. Applicant's identity proof
5. Affidavit and permission/order (for delayed registration)`,
  },
  attach: [
    "अस्पताल में मृत्यु: अस्पताल की मृत्यु सूचना / मृत्यु के कारण का चिकित्सा प्रमाण पत्र (धारा 10)",
    "घर पर मृत्यु: श्मशान/कब्रिस्तान की पर्ची, पंचायत/पार्षद का प्रमाण, गवाहों के बयान",
    "मृतक और आवेदक का आधार/पहचान पत्र",
    "21 दिन से ज़्यादा देर: शपथ पत्र, लेट फीस; 1 साल से ज़्यादा: SDM/DM या मजिस्ट्रेट का आदेश",
  ],
  submit: [
    "पत्र और कागज़ रजिस्ट्रार के दफ्तर (नगर निगम/पंचायत) में जमा करें; कई राज्यों में <a href=\"https://crsorgi.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">CRS पोर्टल</a> या e-District से ऑनलाइन भी होता है।",
    "आवेदन नंबर/रसीद लें। पंजीकरण के बाद पहली प्रति मुफ्त मिलती है (धारा 12); ज़्यादा प्रतियों की फीस राज्य के नियम से।",
    "देरी 1 साल से ज़्यादा हो तो पहले SDM/DM (1–2 साल) या प्रथम श्रेणी न्यायिक मजिस्ट्रेट (2 साल से ज़्यादा, 1 अक्टूबर 2026 से) से आदेश लें।",
    "रजिस्ट्रार मना करे या कार्रवाई न करे तो <strong>30 दिन में ज़िला रजिस्ट्रार</strong> को अपील करें (धारा 25A)।",
  ],
  tips: [
    "मृत्यु के बाद जितनी जल्दी हो, 21 दिन के अंदर पंजीकरण कराएं; बाद में प्रक्रिया लंबी हो जाती है।",
    "मृतक का नाम आधार, बैंक और ज़मीन के कागज़ों जैसा ही लिखवाएं, वरना पेंशन/नामांतरण में दिक्कत होती है।",
    "बैंक, बीमा, पेंशन, नामांतरण के लिए एक साथ कई प्रतियां ले लें।",
    "प्रमाण पत्र मिलते ही नाम, तारीख और स्थान जांचें; गलती हो तो तुरंत धारा 15 के तहत सुधार का आवेदन दें।",
  ],
  official: [
    { href: "https://crsorgi.gov.in/", title: "Civil Registration System (CRS)", note: "जन्म-मृत्यु पंजीकरण पोर्टल" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969" },
  ],
  related: ["/service/death-certificate.html", "/service/legal-heir-certificate.html", "/service/national-social-assistance-programme.html"],
  faq: [
    { q: "मृत्यु प्रमाण पत्र के लिए आवेदन कहां करें?", a: "जहां मृत्यु हुई, वहां के जन्म-मृत्यु रजिस्ट्रार (नगर निगम/नगर पालिका या ग्राम पंचायत) के पास। कई राज्यों में CRS या e-District पोर्टल से ऑनलाइन भी।" },
    { q: "मृत्यु पंजीकरण कितने दिन में कराना चाहिए?", a: "21 दिन के अंदर, तब यह मुफ्त है। उसके बाद धारा 13 के तहत लेट फीस, अनुमति या आदेश लगता है।" },
    { q: "1 साल बाद मृत्यु प्रमाण पत्र कैसे बनेगा?", a: "1 से 2 साल की देरी में DM/SDM या अधिकृत कार्यकारी मजिस्ट्रेट का आदेश, और 1 अक्टूबर 2026 से 2 साल से ज़्यादा देरी में प्रथम श्रेणी न्यायिक मजिस्ट्रेट का आदेश लेकर रजिस्ट्रार के पास पंजीकरण होता है।" },
    { q: "क्या मृत्यु प्रमाण पत्र मुफ्त है?", a: "समय पर पंजीकरण मुफ्त है और सूचना देने वाले को पहली प्रति मुफ्त मिलती है (धारा 12)। ज़्यादा प्रतियों और देर से पंजीकरण की फीस राज्य के नियम से।" },
    { q: "घर पर मृत्यु हुई हो तो कौन से कागज़ लगेंगे?", a: "श्मशान/कब्रिस्तान की पर्ची, पंचायत/पार्षद का प्रमाण, गवाहों के बयान और मृतक व आवेदक के पहचान पत्र। रजिस्ट्रार अपनी सूची बता देगा।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
