import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Constitution of India, Art. 243X: state legislature may authorise a
//   municipality to levy and collect taxes; property tax assessment registers,
//   mutation (name transfer) procedure, fee and time limits are under each
//   state's municipal Act and city bye-laws (same research as
//   web/src/guides/doc/municipal-property-tax.ts, 15 Oct 2026).
// - Supreme Court, Jitendra Singh v. State of Madhya Pradesh (2021, reported
//   widely incl. LiveLaw): mutation entries are for fiscal (tax) purposes and
//   do not confer title; title comes from the registered document / court
//   order / succession.
// Mutation fee (often a % of stamp value or a fixed amount), notice period for
// objections and timelines differ by state and city, so none is stated.
export const propertyMutationApplication: Letter = {
  slug: "property-mutation-application",
  category: "municipal",
  emoji: "🏠",
  title: "Property Mutation Application in Hindi 2026: हाउस टैक्स नाम परिवर्तन",
  description: "नगर निगम/नगर पालिका के संपत्ति कर (हाउस टैक्स) रिकॉर्ड में नाम बदलवाने (म्यूटेशन/नामांतरण) का आवेदन पत्र (हिंदी/English)। खरीद, विरासत, ज़रूरी कागज़।",
  h1: "संपत्ति कर नामांतरण (म्यूटेशन) आवेदन पत्र 2026",
  short: { hi: "हाउस टैक्स नामांतरण आवेदन", en: "Property tax mutation" },
  lead: "मकान/प्लॉट खरीदने, विरासत में मिलने या दान से मिलने पर नगर निगम/नगर पालिका के <strong>संपत्ति कर (हाउस टैक्स) रिकॉर्ड</strong> में नया नाम दर्ज करवाने को <strong>नामांतरण या म्यूटेशन</strong> कहते हैं। आवेदन नगर निकाय के <strong>कर निर्धारण अधिकारी / राजस्व विभाग</strong> को दिया जाता है। शुल्क, आपत्ति के लिए नोटिस और समय सीमा हर राज्य के नगर पालिका कानून और शहर के नियम से तय होते हैं। ध्यान रखें: सुप्रीम कोर्ट के अनुसार म्यूटेशन सिर्फ टैक्स के रिकॉर्ड के लिए है, इससे मालिकाना हक नहीं मिलता।",
  facts: [
    ["किसे दें", "नगर निगम/नगर पालिका का कर निर्धारण अधिकारी / राजस्व (हाउस टैक्स) विभाग"],
    ["ज़रूरी कागज़", "रजिस्ट्री / वसीयत / वारिस प्रमाण, मृत्यु प्रमाण पत्र (विरासत में), पहचान पत्र, ताज़ा टैक्स रसीद"],
    ["फीस और समय", "राज्य और शहर के नियम के हिसाब से अलग; दफ्तर या पोर्टल से पूछें"],
    ["ध्यान दें", "म्यूटेशन टैक्स रिकॉर्ड के लिए है; मालिकाना हक रजिस्ट्री/उत्तराधिकार से तय होता है"],
  ],
  to: "शहर के <strong>नगर निगम / नगर पालिका / नगर पंचायत</strong> के कर निर्धारण अधिकारी (Assessing Officer), ज़ोनल अधिकारी या राजस्व अधीक्षक को। गांव की खेती की ज़मीन का दाखिल-खारिज/नामांतरण तहसील (राजस्व विभाग) में होता है, नगर निकाय में नहीं।",
  when: [
    "मकान/फ्लैट/प्लॉट खरीदा है और हाउस टैक्स अब भी पुराने मालिक के नाम है",
    "माता-पिता या परिवार के सदस्य की मृत्यु के बाद संपत्ति वारिसों के नाम करनी है",
    "वसीयत, दान पत्र (गिफ्ट डीड) या बंटवारे से संपत्ति मिली है",
    "बिजली/पानी कनेक्शन या लोन के लिए अपने नाम की टैक्स रसीद चाहिए",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर का नाम और पता", en: "Office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: कर निर्धारण अधिकारी, नगर निगम, ज़ोन-2, भोपाल", en: "e.g. Assessing Officer, Municipal Corporation, Zone 2, Bhopal" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" } },
    { key: "property", label: { hi: "संपत्ति का पता", en: "Property address" }, type: "textarea", required: true, placeholder: { hi: "मकान नं., वार्ड नं., मोहल्ला, शहर", en: "House no., ward no., locality, city" } },
    { key: "pid", label: { hi: "संपत्ति ID / असेसमेंट नंबर", en: "Property ID / assessment no." }, required: true, placeholder: { hi: "पुरानी टैक्स रसीद पर लिखा", en: "As on old tax receipt" } },
    { key: "oldname", label: { hi: "रिकॉर्ड में अभी किसका नाम है", en: "Present name in records" }, required: true },
    { key: "basis", label: { hi: "संपत्ति कैसे मिली", en: "How the property was acquired" }, type: "select", options: [
      { hi: "रजिस्टर्ड बैनामा/सेल डीड से खरीदी है", en: "purchased by registered sale deed" },
      { hi: "रिकॉर्ड में दर्ज मालिक की मृत्यु के बाद उत्तराधिकार से मिली है", en: "inherited after the death of the recorded owner" },
      { hi: "वसीयत के आधार पर मिली है", en: "received under a will" },
      { hi: "दान पत्र (गिफ्ट डीड) से मिली है", en: "received by gift deed" },
      { hi: "परिवार में बंटवारे से मिली है", en: "received through family partition" },
    ] },
    { key: "deed", label: { hi: "दस्तावेज़ का विवरण", en: "Document details" }, placeholder: { hi: "जैसे: बैनामा रजि. नं. 4521, दिनांक 12/08/2026, उप निबंधक कार्यालय ___", en: "e.g. Sale deed reg. no. 4521 dated 12/08/2026, Sub-Registrar office ___" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: संपत्ति ID {{pid}} के संपत्ति कर रिकॉर्ड में नामांतरण (म्यूटेशन) हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि नीचे लिखी संपत्ति (संपत्ति ID/असेसमेंट नं. {{pid}}) नगर निकाय के संपत्ति कर रिकॉर्ड में अभी श्री/श्रीमती {{oldname}} के नाम दर्ज है:
{{property}}

यह संपत्ति मुझे {{basis}}। दस्तावेज़ का विवरण: {{deed}}। अब इस संपत्ति का कब्ज़ा और उपयोग मेरे पास है।

अतः निवेदन है कि नियमानुसार जांच कर इस संपत्ति के कर रिकॉर्ड में {{oldname}} के स्थान पर मेरा नाम {{name}}, पुत्र/पुत्री/पत्नी {{father}}, दर्ज करने की कृपा करें। मैं नियमानुसार नामांतरण शुल्क और यदि कोई बकाया कर हो तो उसे जमा करने को तैयार हूं। कृपया आवेदन की पावती/आवेदन संख्या दें।

संलग्न:
1. बैनामा / वसीयत / दान पत्र / वारिस प्रमाण पत्र की प्रमाणित कॉपी (जो लागू हो)
2. मृत्यु प्रमाण पत्र (विरासत के मामले में)
3. नवीनतम संपत्ति कर रसीद
4. मेरे पहचान प्रमाण की स्व-प्रमाणित कॉपी
5. शपथ पत्र / अन्य वारिसों का अनापत्ति पत्र (यदि मांगा गया हो)

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Application for mutation (transfer of name) in property tax records, property ID {{pid}}.

Sir/Madam,

The property described below (property ID / assessment no. {{pid}}) is at present recorded in the municipal property tax records in the name of Mr/Ms {{oldname}}:
{{property}}

This property was {{basis}}. Document details: {{deed}}. The property is now in my possession and use.

I therefore request you to make the necessary inquiry as per rules and record my name, {{name}}, son/daughter/wife of {{father}}, in place of {{oldname}} in the tax records of this property. I am ready to pay the mutation fee and any tax arrears as per rules. Kindly give me an acknowledgement / application number.

Enclosures:
1. Certified copy of sale deed / will / gift deed / legal heir certificate (as applicable)
2. Death certificate (in case of inheritance)
3. Latest property tax receipt
4. Self-attested copy of my identity proof
5. Affidavit / no-objection of other legal heirs (if required)

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "खरीद पर: रजिस्टर्ड बैनामा/सेल डीड की प्रमाणित कॉपी",
    "विरासत पर: मृत्यु प्रमाण पत्र, वारिस/उत्तराधिकार प्रमाण पत्र या बाकी वारिसों का अनापत्ति शपथ पत्र; वसीयत हो तो उसकी कॉपी",
    "ताज़ा संपत्ति कर रसीद (बकाया न हो)",
    "आवेदक का पहचान प्रमाण और फोटो; कई शहर नोटरी शपथ पत्र भी मांगते हैं",
  ],
  submit: [
    "अपने नगर निगम/नगर पालिका की वेबसाइट देखें; कई शहरों में म्यूटेशन ऑनलाइन या नागरिक सुविधा केंद्र से होता है।",
    "ऑफलाइन हो तो यह पत्र, फॉर्म और दस्तावेज़ ज़ोनल/राजस्व कार्यालय में जमा करें और पावती लें।",
    "कई जगह आपत्तियों के लिए सार्वजनिक नोटिस निकाला जाता है; आपत्ति न आने पर आदेश होता है। तय शुल्क रसीद लेकर ही जमा करें।",
    "लंबे समय तक आदेश न हो तो नगर आयुक्त/EO को लिखें, राज्य के लोक शिकायत पोर्टल पर शिकायत करें, या RTI से आवेदन की स्थिति पूछें।",
  ],
  tips: [
    "पहले पुराना हाउस टैक्स बकाया चुका दें; बकाया रहने पर ज़्यादातर जगह नामांतरण रुकता है।",
    "विरासत में सभी वारिसों के नाम या बाकी वारिसों की लिखित सहमति लगाएं, वरना आपत्ति आ सकती है।",
    "हाउस टैक्स में नाम बदलने से मालिकाना हक साबित नहीं होता; रजिस्ट्री और उत्तराधिकार के कागज़ संभाल कर रखें।",
    "खेती की ज़मीन का नामांतरण (दाखिल-खारिज) तहसील में होता है, नगर निगम में नहीं।",
  ],
  notice: "नामांतरण का शुल्क, फॉर्म और प्रक्रिया हर राज्य के नगर पालिका कानून और शहर के नियम से अलग है। कई शहर सिर्फ ऑनलाइन या अपने तय फॉर्म पर ही आवेदन लेते हैं।",
  official: [
    { href: "https://pgportal.gov.in/", title: "CPGRAMS लोक शिकायत पोर्टल" },
  ],
  related: ["/service/municipal-property-tax.html", "/service/city-municipal-property-tax-receipt.html", "/service/death-certificate.html"],
  faq: [
    { q: "हाउस टैक्स में नाम कैसे बदलवाएं?", a: "नगर निगम/नगर पालिका के कर निर्धारण या राजस्व विभाग में (कई शहरों में ऑनलाइन) नामांतरण का आवेदन दें। साथ में बैनामा या वारिस के कागज़, ताज़ा टैक्स रसीद और पहचान पत्र लगाएं, फिर तय शुल्क जमा करें।" },
    { q: "म्यूटेशन (नामांतरण) की फीस कितनी है?", a: "यह हर राज्य और शहर के नियम से अलग है; कहीं तय राशि, कहीं संपत्ति के मूल्य का प्रतिशत। सही शुल्क नगर निकाय की वेबसाइट या दफ्तर से पूछें।" },
    { q: "क्या म्यूटेशन से मालिकाना हक मिल जाता है?", a: "नहीं। सुप्रीम कोर्ट ने कहा है कि म्यूटेशन की एंट्री सिर्फ टैक्स वसूली के रिकॉर्ड के लिए है; मालिकाना हक रजिस्टर्ड दस्तावेज़, वसीयत या उत्तराधिकार से तय होता है।" },
    { q: "पिता की मृत्यु के बाद मकान का हाउस टैक्स अपने नाम कैसे करें?", a: "मृत्यु प्रमाण पत्र, वारिस प्रमाण पत्र या बाकी वारिसों का अनापत्ति शपथ पत्र और ताज़ा टैक्स रसीद के साथ नामांतरण का आवेदन दें। सभी वारिसों के नाम भी दर्ज कराए जा सकते हैं।" },
    { q: "नगर निगम म्यूटेशन में कितना समय लगता है?", a: "समय सीमा राज्य के लोक सेवा गारंटी कानून या शहर के नागरिक चार्टर में तय होती है। आपत्ति का नोटिस निकलने पर कुछ हफ्ते लग सकते हैं; अपने शहर की समय सीमा दफ्तर से पूछें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
