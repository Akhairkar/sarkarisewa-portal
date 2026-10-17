import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - National Food Security Act, 2013 and nfsa.gov.in: ration cards are issued
//   and updated by the State/UT food & civil supplies department; NFSA
//   priority household entitlement 5 kg per person per month, AAY 35 kg per
//   family; state toll-free helpline 1967 in most states; nfsa.gov.in links
//   each state's portal. (Same facts as the site's ration-card guide.)
// - Documents usually asked (Aadhaar of the new member; birth certificate for
//   a child; marriage certificate and deletion/surrender certificate from the
//   earlier card for a daughter-in-law) follow state rules; forms, fees and
//   time limits differ by state and are not given.
// - Mera Ration app (DFPD/NIC) is for ONORC services; whether member addition
//   works through it could not be confirmed officially, so it is not claimed.
export const rationCardNameAddApplication: Letter = {
  slug: "ration-card-name-add-application",
  category: "social",
  emoji: "🍚",
  title: "Ration Card Name Add Application in Hindi 2026: राशन कार्ड में नाम जोड़ने का आवेदन",
  description: "राशन कार्ड में बच्चे, बहू या परिवार के सदस्य का नाम जोड़ने का तैयार आवेदन पत्र (हिंदी/English)। किसे दें, कौन से कागज़ लगें, ऑनलाइन तरीका और शिकायत 1967।",
  h1: "राशन कार्ड में नाम जोड़ने का आवेदन पत्र 2026: भरें और प्रिंट करें",
  short: { hi: "राशन कार्ड में नाम जोड़ने का आवेदन", en: "Ration card name addition" },
  lead: "राशन कार्ड में नया सदस्य (नवजात बच्चा, शादी के बाद आई बहू या छूटा हुआ सदस्य) जुड़ने पर NFSA प्राथमिकता कार्ड में उसके हिस्से का <strong>5 किलो अनाज हर महीने</strong> भी मिलने लगता है। नाम राज्य का <strong>खाद्य एवं आपूर्ति विभाग</strong> जोड़ता है: कई राज्यों में यह राज्य के खाद्य पोर्टल पर ऑनलाइन होता है, बाकी जगह आवेदन <strong>प्रखंड/तहसील आपूर्ति कार्यालय या ज़िला आपूर्ति अधिकारी (DSO)</strong> को दिया जाता है। फॉर्म और समय-सीमा राज्य के हिसाब से अलग हैं।",
  facts: [
    ["किसे दें", "प्रखंड/तहसील आपूर्ति अधिकारी या ज़िला आपूर्ति अधिकारी (राज्य अनुसार)"],
    ["ज़रूरी", "नए सदस्य का आधार और रिश्ते का प्रमाण"],
    ["फीस/समय", "राज्य के नियम के अनुसार; दफ्तर से पूछें"],
    ["शिकायत", "राज्य खाद्य हेल्पलाइन 1967 (ज़्यादातर राज्यों में)"],
  ],
  to: "आपके इलाके के <strong>आपूर्ति निरीक्षक / प्रखंड या तहसील आपूर्ति अधिकारी</strong> को, या शहर में <strong>ज़िला आपूर्ति अधिकारी (DSO) / खाद्य एवं रसद कार्यालय</strong> को। आपके राज्य में कौन लेता है, यह राज्य के खाद्य पोर्टल या नज़दीकी CSC से पता चलेगा।",
  when: [
    "घर में बच्चे का जन्म हुआ और उसका नाम जुड़वाना है",
    "शादी के बाद बहू का नाम ससुराल के राशन कार्ड में जुड़वाना है",
    "कार्ड बनते समय किसी सदस्य का नाम छूट गया था",
    "दूसरे कार्ड से नाम कटवाकर इस कार्ड में जुड़वाना है",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर का नाम और पता", en: "Office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: प्रखंड आपूर्ति पदाधिकारी, फुलवारी, पटना", en: "e.g. Block Supply Officer, Phulwari, Patna" } },
    { key: "name", label: { hi: "कार्ड के मुखिया का नाम", en: "Head of family (card holder)" }, required: true },
    { key: "card", label: { hi: "राशन कार्ड संख्या", en: "Ration card number" }, required: true },
    { key: "cardtype", label: { hi: "कार्ड का प्रकार", en: "Card type" }, type: "select", options: [
      { hi: "प्राथमिकता परिवार (PHH)", en: "Priority Household (PHH)" },
      { hi: "अंत्योदय (AAY)", en: "Antyodaya (AAY)" },
      { hi: "राज्य योजना/अन्य", en: "State scheme/other" },
    ] },
    { key: "member", label: { hi: "नए सदस्य का नाम", en: "New member's name" }, required: true },
    { key: "relation", label: { hi: "मुखिया से रिश्ता", en: "Relation to head" }, type: "select", required: true, options: [
      { hi: "पुत्र", en: "son" },
      { hi: "पुत्री", en: "daughter" },
      { hi: "बहू", en: "daughter-in-law" },
      { hi: "पत्नी/पति", en: "wife/husband" },
      { hi: "माता/पिता", en: "mother/father" },
      { hi: "पोता/पोती", en: "grandson/granddaughter" },
    ] },
    { key: "dob", label: { hi: "नए सदस्य की जन्म तिथि", en: "New member's date of birth" }, required: true, placeholder: { hi: "जैसे: 05/06/2026", en: "e.g. 05/06/2026" } },
    { key: "reason", label: { hi: "नाम जोड़ने का कारण", en: "Reason" }, type: "select", required: true, options: [
      { hi: "परिवार में बच्चे का जन्म हुआ है", en: "a child has been born in the family" },
      { hi: "विवाह के बाद बहू परिवार में आई है; उसका नाम पिछले राशन कार्ड से हटा दिया गया है", en: "the daughter-in-law has joined the family after marriage; her name has been deleted from her earlier ration card" },
      { hi: "कार्ड बनते समय सदस्य का नाम छूट गया था", en: "the member's name was left out when the card was made" },
    ] },
    { key: "docs", label: { hi: "संलग्न कागज़", en: "Documents enclosed" }, type: "textarea", required: true, placeholder: { hi: "जैसे: आधार कार्ड, जन्म प्रमाण पत्र, राशन कार्ड की कॉपी", en: "e.g. Aadhaar, birth certificate, ration card copy" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "पता", en: "Address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: राशन कार्ड संख्या {{card}} में परिवार के नए सदस्य का नाम जोड़ने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, राशन कार्ड संख्या {{card}} ({{cardtype}}) का/की मुखिया हूं और ऊपर लिखे पते पर अपने परिवार के साथ रहता/रहती हूं। निवेदन है कि {{reason}}।

अतः कृपया मेरे राशन कार्ड में निम्न सदस्य का नाम जोड़ने की कृपा करें:

नाम: {{member}}
मुखिया से रिश्ता: {{relation}}
जन्म तिथि: {{dob}}

मैं घोषणा करता/करती हूं कि उक्त सदस्य का नाम देश में किसी अन्य राशन कार्ड में दर्ज नहीं है और ऊपर दी गई जानकारी सही है। नाम जुड़ने के बाद राशन दुकान पर सदस्य का आधार e-KYC करवा दिया जाएगा।

आवश्यक कागज़ संलग्न हैं। कृपया आवेदन की पावती दें।

धन्यवाद।

प्रार्थी/प्रार्थिनी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: {{docs}}`,
    en: `To,
{{office}}

Subject: Application for adding a new family member's name to ration card no. {{card}}

Sir/Madam,

I, {{name}}, am the head of family of ration card no. {{card}} ({{cardtype}}) and live with my family at the address given below. I wish to state that {{reason}}.

Kindly add the following member to my ration card:

Name: {{member}}
Relation to head of family: {{relation}}
Date of birth: {{dob}}

I declare that the said member's name is not included in any other ration card in the country and that the above information is correct. After the name is added, the member's Aadhaar e-KYC will be completed at the ration shop.

The required documents are enclosed. Kindly give me an acknowledgement of this application.

Thank you.

Yours faithfully,

(Signature/Thumb impression)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: {{docs}}`,
  },
  attach: [
    "राशन कार्ड की कॉपी (पहला पन्ना और सदस्यों वाला पन्ना)",
    "नए सदस्य का आधार कार्ड (बच्चे का आधार न बना हो तो जन्म प्रमाण पत्र; कई राज्य बाद में आधार मांगते हैं)",
    "बहू के लिए: विवाह प्रमाण पत्र (या राज्य जो माने) और मायके के राशन कार्ड से नाम कटने का प्रमाण (deletion/surrender certificate)",
    "राज्य का निर्धारित फॉर्म, मुखिया का आधार और फोटो, अगर दफ्तर मांगे",
  ],
  submit: [
    'पहले अपने राज्य का खाद्य पोर्टल देखें (लिंक <a href="https://nfsa.gov.in/" target="_blank" rel="noopener nofollow">nfsa.gov.in</a> पर हैं); कई राज्यों में "सदस्य जोड़ें" का ऑनलाइन आवेदन या <a href="/tools/csc-locator.html">CSC</a> से आवेदन होता है।',
    "ऑफलाइन हो तो राज्य का फॉर्म लें, यह पत्र और कागज़ साथ लगाकर आपूर्ति कार्यालय में जमा करें और <strong>पावती/रसीद</strong> लें।",
    "आपूर्ति निरीक्षक जांच कर सकते हैं; बुलाया जाए तो मूल कागज़ लेकर जाएं।",
    "नाम जुड़ने के बाद राशन दुकान पर नए सदस्य का अंगूठा/आधार e-KYC करवाएं, तभी उसका हिस्सा मिलेगा।",
    "समय पर काम न हो तो राज्य की खाद्य हेल्पलाइन (ज़्यादातर राज्यों में <strong>1967</strong>) पर शिकायत करें या ज़िला आपूर्ति अधिकारी/ज़िला शिकायत निवारण अधिकारी को लिखें।",
  ],
  tips: [
    "बहू का नाम दो कार्ड में एक साथ नहीं रह सकता; पहले मायके के कार्ड से नाम कटवाएं, फिर जोड़ने का आवेदन दें।",
    "नाम की स्पेलिंग वैसी ही लिखें जैसी आधार में है, वरना e-KYC में दिक्कत होगी।",
    "NFSA में हर राज्य का कोटा तय है, इसलिए नाम जुड़ने में समय लग सकता है; पावती और आवेदन संख्या संभालकर रखें।",
    "नाम जुड़वाने के लिए किसी दलाल को पैसे न दें; फीस हो तो सरकारी रसीद लें।",
  ],
  notice: "हर राज्य का अपना फॉर्म और ऑनलाइन पोर्टल है। कई राज्यों में यह पत्र अकेले काफी नहीं; राज्य का फॉर्म भी भरना पड़ता है।",
  official: [
    { href: "https://nfsa.gov.in/", title: "NFSA पोर्टल", note: "राज्यों के खाद्य विभाग के पोर्टल के लिंक" },
    { href: "https://dfpd.gov.in/", title: "खाद्य एवं सार्वजनिक वितरण विभाग, भारत सरकार" },
  ],
  related: ["/service/ration-card.html", "/service/pm-garib-kalyan-anna-yojana.html", "/service/birth-certificate.html", "/service/marriage-certificate.html"],
  faq: [
    { q: "राशन कार्ड में नाम जोड़ने के लिए कौन से कागज़ चाहिए?", a: "नए सदस्य का आधार, राशन कार्ड की कॉपी और रिश्ते का प्रमाण: बच्चे के लिए जन्म प्रमाण पत्र, बहू के लिए विवाह प्रमाण पत्र और मायके के कार्ड से नाम कटने का प्रमाण। राज्य कुछ और भी मांग सकता है।" },
    { q: "क्या राशन कार्ड में नाम ऑनलाइन जुड़ता है?", a: "कई राज्यों में राज्य के खाद्य पोर्टल या CSC से ऑनलाइन आवेदन होता है; बाकी जगह आपूर्ति कार्यालय में फॉर्म जमा होता है। अपने राज्य का पोर्टल nfsa.gov.in से खोलें।" },
    { q: "राशन कार्ड में नाम जुड़ने में कितना समय लगता है?", a: "यह राज्य के नियम और कोटे पर निर्भर है। कई राज्य लोक सेवा गारंटी कानून में समय तय करते हैं। आवेदन की पावती रखें और राज्य पोर्टल पर स्टेटस देखें।" },
    { q: "नवजात बच्चे का आधार नहीं बना, क्या नाम जुड़ेगा?", a: "कई राज्य जन्म प्रमाण पत्र से नाम जोड़ते हैं और बाद में आधार मांगते हैं; कुछ राज्य आधार ज़रूरी रखते हैं। आपूर्ति कार्यालय से पूछें।" },
    { q: "शिकायत कहां करें?", a: "ज़्यादातर राज्यों में खाद्य विभाग की टोल-फ्री हेल्पलाइन 1967 है। ज़िला आपूर्ति अधिकारी को लिखित शिकायत भी दे सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
