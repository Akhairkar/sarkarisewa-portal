import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Legal heir / family member / "varisan" certificate is an administrative
//   certificate of the state revenue department (Tehsildar / SDM / Circle
//   Officer), issued after local enquiry; name, form and fee differ by state
//   (site guide /service/legal-heir-certificate.html; kanakkupillai,
//   outlookmoney, bricknbolt explainers).
// - Succession certificate is different: granted by the civil/District Court
//   under the Indian Succession Act 1925 (Part X, ss.370-390) for debts and
//   securities (bank deposits, shares); the page only points to it.
// - Death certificate (RBD Act 1969) is a prerequisite.
// - Time limits/fees are state-specific: not stated.
export const legalHeirCertificateApplication: Letter = {
  slug: "legal-heir-certificate-application",
  category: "document",
  emoji: "👨‍👩‍👧",
  title: "Legal Heir Certificate Application in Hindi 2026: वारिस प्रमाण पत्र आवेदन",
  description: "उत्तराधिकार/वारिस (Legal Heir) प्रमाण पत्र के लिए तहसीलदार को आवेदन पत्र (हिंदी/English)। वारिसों की सूची, कागज़ और Succession Certificate से फर्क।",
  h1: "उत्तराधिकार / वारिस प्रमाण पत्र के लिए आवेदन पत्र 2026",
  short: { hi: "वारिस प्रमाण पत्र आवेदन", en: "Legal heir certificate application" },
  lead: "किसी की मृत्यु के बाद उसके कानूनी वारिस (पत्नी/पति, बच्चे, माता-पिता आदि) कौन हैं, यह बताने वाला <strong>वारिस / उत्तराधिकार प्रमाण पत्र</strong> आम तौर पर <strong>तहसीलदार या SDM</strong> जांच के बाद देते हैं। पेंशन, सरकारी बकाया, बिजली कनेक्शन या अनुकंपा नौकरी के लिए यही मांगा जाता है। बैंक जमा, शेयर जैसे कर्ज़/प्रतिभूति के लिए कई बार अदालत का <strong>उत्तराधिकार प्रमाण पत्र (Succession Certificate)</strong> मांगा जाता है, जो भारतीय उत्तराधिकार अधिनियम 1925 के तहत सिविल कोर्ट देता है।",
  facts: [
    ["किसे दें", "तहसीलदार / SDM / अंचल अधिकारी"],
    ["पहले चाहिए", "मृत्यु प्रमाण पत्र"],
    ["जांच", "राजस्व निरीक्षक/पटवारी की रिपोर्ट, पड़ोसियों के बयान"],
    ["अदालत वाला", "Succession Certificate: सिविल कोर्ट (उत्तराधिकार अधिनियम 1925)"],
  ],
  to: "मृतक जिस तहसील में रहते थे, वहां के <strong>तहसीलदार</strong> (कुछ राज्यों में SDM, अंचल अधिकारी या नगर निगम) को। कई राज्यों में यह e-District पोर्टल पर \"परिवार सदस्य / वारिस प्रमाण पत्र\" नाम से मिलता है।",
  when: [
    "पति/पिता की पेंशन या सरकारी बकाया परिवार को चाहिए",
    "अनुकंपा नियुक्ति (compassionate job) के लिए वारिस होने का सबूत चाहिए",
    "बिजली/पानी कनेक्शन, गैस या मकान के रिकॉर्ड में नाम बदलवाना है",
    "बीमा या छोटी रकम के दावे में वारिसों की सूची मांगी गई है",
  ],
  fields: [
    { key: "office", label: { hi: "तहसील/दफ्तर का नाम", en: "Tehsil / office" }, required: true, placeholder: { hi: "जैसे: तहसील सदर, ज़िला वाराणसी", en: "e.g. Tehsil Sadar, District Varanasi" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "relation", label: { hi: "मृतक से रिश्ता", en: "Relation with the deceased" }, required: true, placeholder: { hi: "जैसे: पत्नी", en: "e.g. wife" } },
    { key: "deceased", label: { hi: "मृतक का नाम और पिता/पति का नाम", en: "Deceased's name and father's/husband's name" }, required: true },
    { key: "dod", label: { hi: "मृत्यु की तारीख", en: "Date of death" }, required: true },
    { key: "dcno", label: { hi: "मृत्यु प्रमाण पत्र संख्या", en: "Death certificate no." } },
    { key: "address", label: { hi: "मृतक का स्थायी पता", en: "Permanent address of the deceased" }, type: "textarea", required: true },
    { key: "heirs", label: { hi: "सभी वारिसों की सूची (नाम, रिश्ता, उम्र)", en: "All legal heirs (name, relation, age)" }, type: "textarea", required: true, placeholder: { hi: "1. सीता देवी – पत्नी – 52 वर्ष\n2. रमेश कुमार – पुत्र – 30 वर्ष\n3. पूजा – पुत्री – 26 वर्ष (विवाहित)", en: "1. Sita Devi – wife – 52 years\n2. Ramesh Kumar – son – 30 years\n3. Pooja – daughter – 26 years (married)" } },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, placeholder: { hi: "जैसे: पारिवारिक पेंशन", en: "e.g. family pension" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान तहसीलदार महोदय,
{{office}}

विषय: स्वर्गीय {{deceased}} के वारिस (उत्तराधिकार) प्रमाण पत्र जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

मैं, {{name}}, स्वर्गीय {{deceased}} का/की {{relation}} हूं। उनकी मृत्यु दिनांक {{dod}} को हो गई थी (मृत्यु प्रमाण पत्र संख्या: {{dcno}})। वे {{address}} के स्थायी निवासी थे।

उनकी मृत्यु के बाद उनके कानूनी वारिस निम्नलिखित हैं:
{{heirs}}

इनके अलावा उनका कोई अन्य वारिस नहीं है। मुझे {{purpose}} के लिए वारिस प्रमाण पत्र की आवश्यकता है। मैं घोषणा करता/करती हूं कि ऊपर दी गई जानकारी सही है और किसी वारिस का नाम छिपाया नहीं गया है।

अतः आपसे प्रार्थना है कि आवश्यक जांच कराकर वारिस प्रमाण पत्र जारी करने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. मृत्यु प्रमाण पत्र की प्रति
2. सभी वारिसों के आधार/पहचान पत्र
3. रिश्ते का प्रमाण (राशन कार्ड/परिवार रजिस्टर की नकल)
4. शपथ पत्र
5. मृतक का पते का प्रमाण`,
    en: `To,
The Tehsildar,
{{office}}

Subject: Application for issue of legal heir certificate of late {{deceased}}

Sir/Madam,

I, {{name}}, am the {{relation}} of late {{deceased}}, who died on {{dod}} (death certificate no. {{dcno}}). He/she was a permanent resident of {{address}}.

After his/her death, the legal heirs are as follows:
{{heirs}}

There is no other legal heir. I need a legal heir certificate for {{purpose}}. I declare that the above information is true and that the name of no legal heir has been concealed.

I therefore request you kindly to get the necessary enquiry done and issue a legal heir certificate.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of death certificate
2. Aadhaar/identity proof of all legal heirs
3. Proof of relationship (ration card/family register extract)
4. Affidavit
5. Address proof of the deceased`,
  },
  attach: [
    "मृत्यु प्रमाण पत्र (पहले यही बनवाएं)",
    "सभी वारिसों के आधार/पहचान पत्र, फोटो",
    "रिश्ते का सबूत: राशन कार्ड, परिवार रजिस्टर की नकल, जन्म/विवाह प्रमाण पत्र",
    "शपथ पत्र जिसमें सभी वारिसों के नाम हों (राज्य के फॉर्मेट में)",
    "मृतक का पते का प्रमाण",
  ],
  submit: [
    "अपने राज्य के <strong>e-District पोर्टल</strong> पर \"वारिस / परिवार सदस्य / उत्तराधिकार प्रमाण पत्र\" सेवा देखें; नहीं तो तहसील में पत्र जमा करें।",
    "रसीद लें। राजस्व निरीक्षक/पटवारी जांच करते हैं, पड़ोसियों के बयान लेते हैं; कुछ राज्यों में आपत्ति के लिए सार्वजनिक सूचना भी निकलती है।",
    "तय समय में प्रमाण पत्र न मिले तो राज्य के सेवा का अधिकार कानून के तहत अपील या ज़िला अधिकारी को शिकायत करें।",
    "बैंक जमा, शेयर आदि के लिए बैंक Succession Certificate मांगे तो ज़िला/सिविल कोर्ट में आवेदन करें; मुफ्त कानूनी मदद के लिए ज़िला विधिक सेवा प्राधिकरण से मिलें।",
  ],
  tips: [
    "विवाहित बेटियां भी कानूनी वारिस हैं; किसी वारिस का नाम छोड़ना गलत घोषणा है और प्रमाण पत्र रद्द हो सकता है।",
    "बैंक खाते में नॉमिनी हो तो पहले बैंक से पूछें; अक्सर वारिस प्रमाण पत्र की ज़रूरत ही नहीं पड़ती।",
    "ज़मीन के नामांतरण (दाखिल-खारिज) के लिए तहसील की अलग प्रक्रिया है; वारिस प्रमाण पत्र उसमें सहायक है।",
    "सभी वारिसों के नाम की स्पेलिंग उनके आधार जैसी रखें।",
  ],
  notice: "वारिस प्रमाण पत्र का नाम, फॉर्म, फीस और समय <strong>हर राज्य में अलग</strong> है। यह संपत्ति का मालिकाना हक तय नहीं करता; विवाद हो तो सिविल कोर्ट ही फैसला करता है।",
  official: [
    { href: "https://serviceonline.gov.in/", title: "ServicePlus (कई राज्यों का सेवा पोर्टल)" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "भारतीय उत्तराधिकार अधिनियम 1925" },
    { href: "https://nalsa.gov.in/", title: "NALSA", note: "मुफ्त कानूनी सहायता" },
  ],
  related: ["/service/legal-heir-certificate.html", "/service/death-certificate.html", "/service/bank-locker-nomination.html"],
  faq: [
    { q: "वारिस प्रमाण पत्र कौन बनाता है?", a: "आम तौर पर तहसीलदार या SDM, जांच के बाद। कुछ राज्यों में इसे परिवार सदस्य प्रमाण पत्र कहते हैं और e-District पोर्टल से आवेदन होता है।" },
    { q: "Legal Heir Certificate और Succession Certificate में क्या फर्क है?", a: "Legal heir certificate तहसील देती है और वारिसों की पहचान बताता है। Succession certificate सिविल कोर्ट भारतीय उत्तराधिकार अधिनियम 1925 के तहत देता है, जो कर्ज़ और प्रतिभूतियां (बैंक जमा, शेयर) वसूलने का अधिकार देता है।" },
    { q: "वारिस प्रमाण पत्र के लिए कौन से कागज़ लगते हैं?", a: "मृत्यु प्रमाण पत्र, सभी वारिसों के पहचान पत्र, रिश्ते का सबूत और शपथ पत्र। राज्य अपनी सूची में और कागज़ मांग सकता है।" },
    { q: "क्या शादीशुदा बेटी वारिस होती है?", a: "हां। हिंदू उत्तराधिकार कानून में बेटी, शादी हो या न हो, कानूनी वारिस है। उसका नाम सूची में ज़रूर लिखें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
