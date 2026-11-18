import type { Letter } from "../types";

// Sources (checked 18 Nov 2026):
// - Supreme Court, Suraj Lamp & Industries v. State of Haryana (2011) 11 SCC
//   326: a GPA / agreement-to-sell / will transaction does not by itself
//   transfer title to immovable property; only a registered deed of
//   conveyance does. A power of attorney is an agency: an attorney may
//   execute a conveyance in exercise of the power, and genuine POAs to a
//   relative to manage affairs are not affected. (summary on indiankanoon.org/doc/1565619)
// - Stamp duty on a POA, notarisation, registration and the time to stamp a
//   POA signed abroad differ by state and by purpose, so the page does not
//   quote amounts and tells the reader to confirm with the sub-registrar or
//   an advocate. A secondary NRI-law explainer says "in most states" a POA
//   signed abroad must be stamped within three months of reaching India;
//   worded here as "usually, confirm for your state".
// Keyword research (OpenSEO, India, 18 Nov 2026): "power of attorney
// format" 3,600/mo (KD 0), "general power of attorney format" 1,900,
// "special power of attorney format" 480, "...pdf" 480, "...for property"
// 260, "power of attorney in hindi format" 170.
export const powerOfAttorneyFormat: Letter = {
  slug: "power-of-attorney-format",
  category: "document",
  emoji: "⚖️",
  title: "Power of Attorney Format in Hindi & English 2026: मुख्तारनामा (General / Special)",
  description: "पावर ऑफ अटॉर्नी (मुख्तारनामा) का नमूना फॉर्मेट, हिंदी/English में: General और Special। फॉर्म भरें, प्रिंट करें। स्टांप, नोटरी, रजिस्ट्रेशन की ज़रूरी बातें भी।",
  h1: "पावर ऑफ अटॉर्नी (मुख्तारनामा) का फॉर्मेट: General और Special 2026",
  short: { hi: "पावर ऑफ अटॉर्नी", en: "Power of attorney" },
  lead: "<strong>पावर ऑफ अटॉर्नी (मुख्तारनामा)</strong> वह लिखित अधिकार-पत्र है जिसमें एक व्यक्ति (<strong>मुख्तार देने वाला / Principal</strong>) दूसरे व्यक्ति (<strong>एजेंट / Attorney</strong>) को अपनी तरफ से तय काम करने का अधिकार देता है। <strong>General POA</strong> में कई काम, <strong>Special POA</strong> में एक तय काम (जैसे बैंक का काम, कोर्ट में पेशी, कागज़ जमा करना) आता है। नीचे फॉर्म भरकर नमूना बनाएं। <strong>ज़रूरी:</strong> पावर ऑफ अटॉर्नी एजेंसी है, <strong>मालिकाना हक का तबादला नहीं</strong>; संपत्ति बेचने-खरीदने के लिए रजिस्टर्ड विक्रय-पत्र ज़रूरी है, इसलिए यह नमूना भरकर बनवाने से पहले वकील/सब-रजिस्ट्रार से राय लें।",
  facts: [
    ["यह क्या है", "एक व्यक्ति का दूसरे को अपनी तरफ से काम करने का लिखित अधिकार"],
    ["दो प्रकार", "General (कई काम) और Special (एक तय काम)"],
    ["स्टांप पेपर", "राज्य और काम के हिसाब से अलग; सब-रजिस्ट्रार या वकील से पूछें"],
    ["संपत्ति के मामले में", "स्वामित्व इससे नहीं बदलता; रजिस्टर्ड विक्रय-पत्र (conveyance) चाहिए"],
  ],
  to: "जिस संस्था में एजेंट इसे दिखाएगा: बैंक, सब-रजिस्ट्रार दफ्तर, कोर्ट, विभाग या कंपनी। हर जगह उसके अपने नियम हैं, इसलिए जमा करने से पहले पूछ लें।",
  when: [
    "आप बीमार हों, बाहर हों या विदेश में हों और कोई भरोसेमंद व्यक्ति आपकी तरफ से बैंक/विभाग का काम करे",
    "किसी कोर्ट केस या सरकारी दफ्तर में अपनी तरफ से पेशी या कागज़ जमा करवाना",
    "किराया, बिजली-पानी या टैक्स जैसे नियमित काम किसी को सौंपना",
    "NRI परिवार द्वारा भारत में किसी रिश्तेदार को तय काम का अधिकार देना",
  ],
  fields: [
    { key: "ptype", label: { hi: "प्रकार", en: "Type" }, type: "select", options: [
      { hi: "विशेष (Special) पावर ऑफ अटॉर्नी", en: "Special power of attorney" },
      { hi: "सामान्य (General) पावर ऑफ अटॉर्नी", en: "General power of attorney" },
    ] },
    { key: "principal", label: { hi: "अधिकार देने वाले का नाम", en: "Principal's name" }, required: true },
    { key: "pfather", label: { hi: "अधिकार देने वाले के पिता/पति का नाम", en: "Principal's father's/husband's name" }, required: true },
    { key: "paddress", label: { hi: "अधिकार देने वाले का पता", en: "Principal's address" }, type: "textarea", required: true },
    { key: "agent", label: { hi: "एजेंट (जिसे अधिकार दे रहे हैं) का नाम", en: "Agent's name" }, required: true },
    { key: "afather", label: { hi: "एजेंट के पिता/पति का नाम", en: "Agent's father's/husband's name" }, required: true },
    { key: "aaddress", label: { hi: "एजेंट का पता", en: "Agent's address" }, type: "textarea", required: true },
    { key: "relation", label: { hi: "एजेंट से रिश्ता", en: "Relationship with agent" }, placeholder: { hi: "जैसे: बेटा / भाई / मित्र", en: "e.g. son / brother / friend" } },
    { key: "powers", label: { hi: "एजेंट कौन-कौन से काम कर सकेगा (साफ और छोटे में)", en: "Powers given to the agent (clear and specific)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 1. मेरे बैंक खाते (खाता संख्या ......) से जुड़े पूछताछ और दस्तावेज़ जमा करने के काम। 2. नगर निगम में संपत्ति कर की रसीद लेना।", en: "e.g. 1. Enquiries and submission of documents for my bank account no. ...... 2. Collecting property tax receipt from the municipal office." } },
    { key: "validity", label: { hi: "कब तक मान्य", en: "Valid until" }, placeholder: { hi: "जैसे: 31 दिसंबर 2027 तक / काम पूरा होने तक", en: "e.g. until 31 Dec 2027 / until the work is done" } },
    { key: "witness1", label: { hi: "गवाह 1 का नाम और पता", en: "Witness 1 name and address" } },
    { key: "witness2", label: { hi: "गवाह 2 का नाम और पता", en: "Witness 2 name and address" } },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `{{ptype}}
(मुख्तारनामा)

यह मुख्तारनामा आज दिनांक {{date}} को {{place}} में लिखा गया।

मैं, {{principal}}, पुत्र/पुत्री/पत्नी {{pfather}}, निवासी {{paddress}}, (आगे "अधिकार देने वाला") घोषणा करता/करती हूं कि

मैं {{agent}}, पुत्र/पुत्री/पत्नी {{afather}}, निवासी {{aaddress}}, (रिश्ता: {{relation}}), (आगे "एजेंट") को अपना विधिवत अधिकृत प्रतिनिधि (मुख्तार) नियुक्त करता/करती हूं।

एजेंट मेरी ओर से निम्नलिखित कार्य करने के लिए अधिकृत होगा:
{{powers}}

शर्तें:
1. एजेंट ऊपर लिखे कार्यों के अलावा कोई कार्य नहीं करेगा।
2. एजेंट द्वारा इस अधिकार के अंतर्गत किए गए कार्य मेरे द्वारा किए गए माने जाएंगे।
3. यह मुख्तारनामा {{validity}} तक मान्य रहेगा। मैं इसे कभी भी लिखित सूचना देकर रद्द कर सकता/सकती हूं।
4. इस मुख्तारनामे से एजेंट को किसी संपत्ति पर मालिकाना हक नहीं मिलता।

अधिकार देने वाले के हस्ताक्षर: ________
({{principal}})

एजेंट के हस्ताक्षर (स्वीकृति): ________
({{agent}})

गवाह:
1. {{witness1}}  हस्ताक्षर: ________
2. {{witness2}}  हस्ताक्षर: ________`,
    en: `{{ptype}}

This Power of Attorney is made on {{date}} at {{place}}.

I, {{principal}}, son/daughter/wife of {{pfather}}, resident of {{paddress}} (the "Principal"), declare that

I appoint {{agent}}, son/daughter/wife of {{afather}}, resident of {{aaddress}} (relationship: {{relation}}) (the "Attorney"), as my lawful attorney.

The Attorney is authorised to do the following on my behalf:
{{powers}}

Conditions:
1. The Attorney shall not do any act other than those listed above.
2. Acts done by the Attorney under this authority shall be treated as done by me.
3. This Power of Attorney is valid until {{validity}}. I may cancel it at any time by written notice.
4. This Power of Attorney does not give the Attorney ownership of any property.

Signature of Principal: ________
({{principal}})

Signature of Attorney (acceptance): ________
({{agent}})

Witnesses:
1. {{witness1}}  Signature: ________
2. {{witness2}}  Signature: ________`,
  },
  attach: [
    "अधिकार देने वाले और एजेंट, दोनों के पहचान पत्र (आधार/पैन/वोटर ID) की कॉपी",
    "दोनों की पासपोर्ट साइज़ फोटो, अगर नोटरी या सब-रजिस्ट्रार मांगे",
    "संपत्ति या खाते से जुड़ा काम हो तो उसके कागज़ की कॉपी (खाता संख्या, खसरा/खतौनी, रजिस्ट्री आदि)",
    "दो गवाहों के पहचान पत्र की कॉपी",
  ],
  submit: [
    "फॉर्म भरकर नमूना प्रिंट करें और <strong>राज्य में तय मूल्य के स्टांप पेपर</strong> पर ही टाइप/प्रिंट कराएं। कितने का स्टांप चाहिए, यह राज्य और काम के हिसाब से अलग है; सब-रजिस्ट्रार दफ्तर, स्टांप वेंडर या वकील से पूछें।",
    "अधिकार देने वाला, एजेंट और दो गवाह हस्ताक्षर करें।",
    "आमतौर पर नोटरी से सत्यापन कराया जाता है; <strong>अगर पावर ऑफ अटॉर्नी संपत्ति (खरीद-बिक्री, पट्टा, गिरवी) से जुड़ी है तो आमतौर पर रजिस्ट्रेशन भी ज़रूरी होता है।</strong> पहले अपने सब-रजिस्ट्रार दफ्तर या वकील से पक्का कर लें।",
    "बैंक/विभाग में दिखाने से पहले उनसे पूछ लें कि क्या वे अपना अलग फॉर्मेट या अपनी शाखा की मुहर वाला पावर ऑफ अटॉर्नी मांगते हैं।",
  ],
  tips: [
    "<strong>काम साफ लिखें।</strong> \"सब कुछ\" जैसे खुले शब्द न लिखें; General POA में भी हर अधिकार अलग से गिना हो तो गलत इस्तेमाल का खतरा कम रहता है।",
    "सिर्फ ऐसे भरोसेमंद व्यक्ति को दें जिसे आप अच्छी तरह जानते हैं। एजेंट आपके नाम से बैंक या संपत्ति का काम कर सकता है।",
    "संपत्ति बेचने का मामला हो तो समझें कि सुप्रीम कोर्ट के 2011 के फैसले (सूरज लैंप एंड इंडस्ट्रीज बनाम हरियाणा राज्य) के अनुसार सिर्फ GPA/बिक्री-समझौते/वसीयत से मालिकाना हक नहीं बदलता, रजिस्टर्ड विक्रय-पत्र चाहिए।",
    "समय-सीमा तय करें और जब काम खत्म हो जाए या भरोसा टूटे तो पावर ऑफ अटॉर्नी रद्द करें। रद्द करने का लिखित नोटिस एजेंट और संबंधित बैंक/दफ्तर को भेजें।",
    "विदेश में बैठकर भारत में उपयोग के लिए बनवाना हो तो आमतौर पर वहां के नोटरी/भारतीय दूतावास या apostille से सत्यापन कराना पड़ता है, और भारत पहुंचने के बाद तय समय के भीतर (अक्सर 3 महीने) स्टांप कराना पड़ सकता है। नियम राज्य के हिसाब से बदलते हैं, इसलिए वकील से पक्का कर लें।",
  ],
  notice: "यह एक <strong>नमूना फॉर्मेट</strong> है, कानूनी सलाह नहीं। स्टांप शुल्क, नोटरी और रजिस्ट्रेशन के नियम <strong>हर राज्य और हर काम</strong> के लिए अलग हैं। संपत्ति, बड़े पैसे या कोर्ट के काम के लिए पावर ऑफ अटॉर्नी <strong>वकील से बनवाएं या जांच कराएं</strong>।",
  tools: [
    { href: "/rent-agreement/", emoji: "🏠", title: "रेंट एग्रीमेंट (किरायानामा) फॉर्मेट", text: "किरायेदारी का फॉर्मेट और राज्यवार नियम" },
    { href: "/arzi/authority-letter-format.html", emoji: "✉️", title: "अधिकार पत्र (Authority Letter)", text: "छोटे काम के लिए किसी को अधिकृत करने का पत्र" },
    { href: "/affidavit/", emoji: "📜", title: "एफिडेविट (शपथ पत्र) फॉर्मेट", text: "नाम, जन्म तिथि, आय आदि के शपथ पत्र" },
    { href: "/tools/self-declaration-builder.html", emoji: "✍️", title: "Self-Declaration Builder", text: "स्व-घोषणा पत्र बनाएं" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "Document Compressor", text: "स्कैन कॉपी की फाइल छोटी करें" },
    { href: "/arzi/", emoji: "📝", title: "सभी आवेदन पत्र फॉर्मेट", text: "बैंक, स्कूल, दफ्तर और अन्य पत्र" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "CSC सेंटर खोजें", text: "पास का सेवा केंद्र ढूंढें" },
  ],
  related: [],
  faq: [
    { q: "पावर ऑफ अटॉर्नी (मुख्तारनामा) क्या होता है?", a: "यह एक लिखित अधिकार-पत्र है जिसमें एक व्यक्ति दूसरे को अपनी तरफ से तय काम करने का अधिकार देता है। देने वाले को Principal और पाने वाले को Attorney या एजेंट कहते हैं।" },
    { q: "General और Special पावर ऑफ अटॉर्नी में क्या फर्क है?", a: "General POA में एजेंट को कई तरह के काम करने का अधिकार मिलता है। Special POA में सिर्फ एक तय काम या तय मामले का अधिकार मिलता है, जैसे किसी एक कोर्ट केस में पेशी या एक बैंक काम।" },
    { q: "क्या पावर ऑफ अटॉर्नी से ज़मीन-मकान का मालिकाना हक बदल जाता है?", a: "नहीं। सुप्रीम कोर्ट ने सूरज लैंप एंड इंडस्ट्रीज बनाम हरियाणा राज्य (2011) में कहा है कि सिर्फ GPA/बिक्री-समझौते/वसीयत से अचल संपत्ति का मालिकाना हक नहीं बदलता; इसके लिए रजिस्टर्ड विक्रय-पत्र ज़रूरी है। एजेंट ज़रूर अधिकार के तहत विक्रय-पत्र पर हस्ताक्षर कर सकता है।" },
    { q: "पावर ऑफ अटॉर्नी कितने के स्टांप पेपर पर बनती है?", a: "यह राज्य और काम (General, Special, संपत्ति से जुड़ा या नहीं) के हिसाब से अलग-अलग है। सही रकम अपने राज्य के सब-रजिस्ट्रार दफ्तर, स्टांप विभाग की साइट या वकील से पूछकर ही लें।" },
    { q: "क्या पावर ऑफ अटॉर्नी रजिस्टर्ड कराना ज़रूरी है?", a: "हर काम के लिए नहीं। बैंक या विभाग के काम में अक्सर नोटरी से सत्यापित POA चल जाती है। पर संपत्ति बेचने, लीज़ या गिरवी जैसे काम के लिए आमतौर पर रजिस्ट्रेशन ज़रूरी होता है। अपने राज्य और काम के लिए सब-रजिस्ट्रार या वकील से पक्का करें।" },
    { q: "पावर ऑफ अटॉर्नी रद्द कैसे करें?", a: "आम तौर पर लिखित रद्दीकरण पत्र (Revocation) बनाकर एजेंट को और जहां POA दिखाई गई थी (बैंक, दफ्तर) वहां सूचना दी जाती है। अगर आपकी POA रजिस्टर्ड थी, तो रद्दीकरण का तरीका (रजिस्ट्रेशन चाहिए या नहीं) सब-रजिस्ट्रार या वकील से पूछ लें।" },
    { q: "विदेश से पावर ऑफ अटॉर्नी कैसे बनवाएं?", a: "आमतौर पर वहां के नोटरी या भारतीय दूतावास/वाणिज्य दूतावास से सत्यापन, या Hague देशों में apostille कराई जाती है। भारत पहुंचने के बाद कई राज्यों में तय समय (अक्सर 3 महीने) के भीतर स्टांप कराना पड़ता है। राज्य का नियम देखें या वकील से पक्का कर लें।" },
  ],
  published: "2026-11-18",
  modified: "2026-11-18",
  verified: "18 नवंबर 2026",
};
