import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - An authority (authorisation) letter is a private letter; no national
//   law prescribes its format. Banks, universities, courier and government
//   offices decide whether to accept it and usually ask for the ID of both
//   persons; many banks have their own mandate/authority form for cash or
//   account matters. Hence the notice and no legal claims.
// - UIDAI (uidai.gov.in) recommends using masked Aadhaar where full number
//   is not needed; the page tells readers to share only the last 4 digits
//   of account/ID numbers and never PIN/OTP.
// - A general/special power of attorney (registered/notarised) is needed
//   for property or legal acts; an authority letter does not replace it.
export const authorityLetterFormat: Letter = {
  slug: "authority-letter-format",
  category: "personal",
  emoji: "🤝",
  title: "Authority Letter Format in Hindi 2026: अधिकार पत्र (प्राधिकार पत्र)",
  description: "किसी और को दस्तावेज़ लेने/जमा करने या आपकी ओर से काम करने का अधिकार देने वाला पत्र (हिंदी/English)। भरें, प्रिंट करें; कब चलता है, कब नहीं, जानें।",
  h1: "अधिकार पत्र (Authority Letter) फॉर्मेट 2026: किसी को अपनी ओर से भेजें",
  short: { hi: "अधिकार पत्र (Authority Letter)", en: "Authority letter" },
  lead: "जब आप खुद किसी दफ्तर, बैंक, कॉलेज या कूरियर ऑफिस नहीं जा सकते, तो <strong>अधिकार पत्र (Authority / Authorization Letter)</strong> लिखकर किसी भरोसेमंद व्यक्ति को अपनी ओर से दस्तावेज़ लेने या जमा करने का अधिकार दे सकते हैं। पत्र में दोनों का नाम, संबंध, काम का साफ विवरण, तारीख और <strong>दोनों के हस्ताक्षर</strong> होने चाहिए। इसे मानना या न मानना दफ्तर के नियम पर है; कई बैंक अपना फॉर्म मांगते हैं, और ज़मीन-जायदाद या कानूनी काम के लिए <strong>पावर ऑफ अटॉर्नी</strong> लगती है।",
  facts: [
    ["किसे लिखें", "जिस दफ्तर/बैंक/संस्था में काम है"],
    ["साथ में", "दोनों के पहचान पत्र की स्व-प्रमाणित कॉपी"],
    ["मान्यता", "दफ्तर के नियम पर; कई जगह अपना फॉर्म"],
    ["नहीं चलेगा", "संपत्ति/कानूनी काम: पावर ऑफ अटॉर्नी चाहिए"],
  ],
  to: "जिस दफ्तर में काम है, उसके <strong>प्रभारी अधिकारी/शाखा प्रबंधक/रजिस्ट्रार</strong> को, या जहां नाम पता न हो वहां \"संबंधित अधिकारी\" (To Whom It May Concern) लिखकर।",
  when: [
    "कॉलेज/विश्वविद्यालय से मार्कशीट, डिग्री या TC किसी और से मंगवाना",
    "कूरियर/डाक घर से अपना पार्सल या स्पीड पोस्ट किसी और से लेना",
    "बैंक से चेकबुक, पासबुक या स्टेटमेंट लेना (बैंक के नियम से)",
    "दफ्तर में फॉर्म/कागज़ जमा कराना या प्रमाण पत्र लेना",
    "बीमारी, विदेश में होने या बुज़ुर्ग होने के कारण खुद न जा पाना",
  ],
  fields: [
    { key: "office", label: { hi: "किसे (अधिकारी और दफ्तर)", en: "To (officer and office)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: शाखा प्रबंधक, भारतीय स्टेट बैंक, गोमती नगर, लखनऊ", en: "e.g. Branch Manager, State Bank of India, Gomti Nagar, Lucknow" } },
    { key: "name", label: { hi: "आपका नाम (अधिकार देने वाला)", en: "Your name (giving authority)" }, required: true },
    { key: "myid", label: { hi: "आपका पहचान पत्र (प्रकार और आखिरी 4 अंक)", en: "Your ID (type and last 4 digits)" }, placeholder: { hi: "जैसे: आधार XXXX-XXXX-1234", en: "e.g. Aadhaar XXXX-XXXX-1234" } },
    { key: "agent", label: { hi: "जिसे अधिकार दे रहे हैं, उसका नाम", en: "Name of authorised person" }, required: true },
    { key: "relation", label: { hi: "उससे आपका संबंध", en: "Relationship" }, required: true, placeholder: { hi: "जैसे: मेरा भाई / पति / मित्र", en: "e.g. my brother / husband / friend" } },
    { key: "agentid", label: { hi: "उसका पहचान पत्र (प्रकार और आखिरी 4 अंक)", en: "Their ID (type and last 4 digits)" }, required: true, placeholder: { hi: "जैसे: वोटर ID ...6789", en: "e.g. Voter ID ...6789" } },
    { key: "task", label: { hi: "कौन सा काम (साफ-साफ)", en: "Task (be specific)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: मेरी B.A. (2025) की मूल डिग्री, नामांकन सं. 12345, प्राप्त करना", en: "e.g. collect my original B.A. (2025) degree, enrolment no. 12345" } },
    { key: "reason", label: { hi: "आप खुद क्यों नहीं आ सकते", en: "Why you cannot come" }, type: "select", options: [
      { hi: "मैं इस समय शहर से बाहर हूं", en: "I am currently out of station" },
      { hi: "मेरी तबीयत ठीक नहीं है", en: "I am unwell" },
      { hi: "मैं नौकरी के कारण उस समय उपस्थित नहीं हो सकता/सकती", en: "I cannot be present at that time due to my job" },
      { hi: "मैं वरिष्ठ नागरिक हूं और आने-जाने में कठिनाई है", en: "I am a senior citizen and find it difficult to travel" },
    ] },
    { key: "valid", label: { hi: "पत्र कब तक मान्य (चाहें तो)", en: "Valid till (optional)" }, type: "date" },
    { key: "phone", label: { hi: "आपका मोबाइल नंबर", en: "Your mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: अधिकार पत्र (Authority Letter)

महोदय/महोदया,

मैं, {{name}}, यह पत्र लिखकर सूचित करता/करती हूं कि {{reason}}, इसलिए मैं स्वयं उपस्थित नहीं हो सकता/सकती।
मेरा पहचान पत्र: {{myid}}

अतः मैं {{agent}} ({{relation}}) को मेरी ओर से निम्नलिखित कार्य करने के लिए अधिकृत करता/करती हूं:

{{task}}

{{agent}} का पहचान पत्र: {{agentid}}। उनके और मेरे पहचान पत्र की स्व-प्रमाणित प्रतियां संलग्न हैं। कृपया उन्हें यह कार्य करने की अनुमति दें। इस कार्य के लिए उनके द्वारा किए गए हस्ताक्षर और प्राप्ति मुझे स्वीकार होगी।

यह अधिकार केवल ऊपर लिखे कार्य के लिए है।
यह पत्र {{valid}} तक मान्य है।

धन्यवाद।

अधिकार देने वाले के हस्ताक्षर: ________
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

अधिकृत व्यक्ति के हस्ताक्षर (सत्यापन हेतु): ________
नाम: {{agent}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: दोनों के पहचान पत्र की स्व-प्रमाणित प्रतियां`,
    en: `To,
{{office}}

Subject: Authority Letter

Sir/Madam,

I, {{name}}, write to inform you that {{reason}}, and therefore I am unable to be present in person.
My ID: {{myid}}

I hereby authorise {{agent}} ({{relation}}) to do the following on my behalf:

{{task}}

ID of {{agent}}: {{agentid}}. Self-attested copies of their ID and mine are enclosed. Kindly allow them to complete this task. Their signature and acknowledgement for this task will be binding on me.

This authority is only for the task mentioned above.
This letter is valid till {{valid}}.

Thanking you.

Signature of person giving authority: ________
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Specimen signature of authorised person: ________
Name: {{agent}}

Place: {{place}}
Date: {{date}}

Enclosed: self-attested copies of ID proof of both persons`,
  },
  attach: [
    "अधिकार देने वाले के पहचान पत्र की स्व-प्रमाणित कॉपी",
    "अधिकृत व्यक्ति के पहचान पत्र की कॉपी; दफ्तर में वह अपना मूल पहचान पत्र भी साथ रखे",
    "काम से जुड़ा कागज़: जैसे फीस रसीद, आवेदन की पावती, कूरियर/स्पीड पोस्ट की सूचना पर्ची",
  ],
  submit: [
    "पत्र प्रिंट करें; आप और अधिकृत व्यक्ति, दोनों हस्ताक्षर करें।",
    "अधिकृत व्यक्ति पत्र, दोनों के पहचान पत्र की कॉपी और अपना मूल पहचान पत्र लेकर दफ्तर जाए।",
    "दफ्तर का अपना फॉर्म हो (जैसे बैंक का मैंडेट फॉर्म) तो वह भी भरें; बैंक में नकद निकासी के लिए अधिकार पत्र आम तौर पर नहीं चलता, बैंक का तरीका पूछें।",
    "काम होने के बाद मिली पावती/रसीद अपने पास रखें।",
  ],
  tips: [
    "काम बिल्कुल साफ लिखें (कौन सा दस्तावेज़, कौन सा नंबर); \"सारे काम\" जैसे शब्द न लिखें।",
    "पत्र में खाता नंबर, कार्ड नंबर या आधार पूरा न लिखें; सिर्फ आखिरी 4 अंक। <strong>PIN, OTP या पासवर्ड कभी न दें</strong>।",
    "पहचान पत्र की कॉपी पर \"केवल ___ के लिए\" लिखकर हस्ताक्षर करें, ताकि गलत इस्तेमाल न हो।",
    "सिर्फ भरोसेमंद व्यक्ति को अधिकार दें; ज़मीन, संपत्ति या अदालती काम के लिए पावर ऑफ अटॉर्नी बनवाएं।",
  ],
  notice: "अधिकार पत्र स्वीकार करना <strong>दफ्तर के नियम</strong> पर निर्भर है। कई बैंक, विश्वविद्यालय और सरकारी दफ्तर अपना तय फॉर्म मांगते हैं या खुद आने को कहते हैं; जाने से पहले फोन करके पूछ लें।",
  related: ["/documents/", "/affidavit/"],
  faq: [
    { q: "अधिकार पत्र (Authority Letter) क्या होता है?", a: "यह एक लिखित पत्र है जिसमें आप किसी भरोसेमंद व्यक्ति को अपनी ओर से कोई तय काम, जैसे दस्तावेज़ लेना या जमा करना, करने की अनुमति देते हैं।" },
    { q: "अधिकार पत्र के साथ क्या-क्या लगता है?", a: "आपके और अधिकृत व्यक्ति, दोनों के पहचान पत्र की स्व-प्रमाणित कॉपी। अधिकृत व्यक्ति अपना मूल पहचान पत्र भी साथ ले जाए।" },
    { q: "क्या बैंक अधिकार पत्र मानता है?", a: "चेकबुक, पासबुक या स्टेटमेंट जैसे कामों के लिए कई बैंक मानते हैं, पर अक्सर अपना फॉर्म भरवाते हैं। नकद निकासी के लिए आम तौर पर बैंक का अलग तरीका होता है; शाखा से पूछें।" },
    { q: "क्या अधिकार पत्र स्टांप पेपर पर लिखना ज़रूरी है?", a: "आम तौर पर नहीं; सादे कागज़ पर हस्ताक्षर वाला पत्र चलता है। अगर दफ्तर नोटरी या स्टांप पेपर मांगे तो उसी हिसाब से बनवाएं।" },
    { q: "अधिकार पत्र और पावर ऑफ अटॉर्नी में क्या अंतर है?", a: "अधिकार पत्र किसी एक छोटे काम के लिए होता है। पावर ऑफ अटॉर्नी कानूनी दस्तावेज़ है, जो ज़मीन-जायदाद, अदालत या बड़े लेन-देन के लिए नोटरी/रजिस्ट्री से बनता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
