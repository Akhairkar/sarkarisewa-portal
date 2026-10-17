import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - No national law fixes the format of a student's leave application; the
//   rules on leave, attendance and medical certificates are set by each
//   school and its board/state (e.g. CBSE Examination Bye-laws require a
//   minimum attendance for board exams, with condonation only for reasons
//   such as illness, on the principal's recommendation). The page therefore
//   tells readers to follow the school diary/rules and keeps numbers out.
// - Common school practice (diary leave note, parent's signature, medical
//   certificate for long sick leave) is described generally.
export const schoolLeaveApplication: Letter = {
  slug: "school-leave-application",
  category: "school",
  emoji: "🎒",
  title: "School Leave Application in Hindi 2026: छुट्टी के लिए प्रार्थना पत्र",
  description: "स्कूल की छुट्टी का प्रार्थना पत्र (हिंदी/English): बीमारी, शादी या घर के काम के लिए। नाम, कक्षा, तारीखें भरें, पत्र तैयार; प्रिंट, कॉपी या WhatsApp करें।",
  h1: "स्कूल छुट्टी प्रार्थना पत्र 2026: कक्षा अध्यापक/प्रधानाचार्य को",
  short: { hi: "स्कूल छुट्टी प्रार्थना पत्र", en: "School leave application" },
  lead: "स्कूल से छुट्टी लेने के लिए <strong>कक्षा अध्यापक (Class Teacher)</strong> या <strong>प्रधानाचार्य (Principal)</strong> को छोटा प्रार्थना पत्र लिखा जाता है, जिसमें छात्र का नाम, कक्षा, छुट्टी की तारीखें और कारण होता है। छोटे बच्चों के लिए पत्र पर <strong>माता-पिता/अभिभावक के हस्ताक्षर</strong> ज़रूरी होते हैं। लंबी बीमारी की छुट्टी में डॉक्टर का पर्चा या मेडिकल सर्टिफिकेट साथ लगाएं। नीचे जानकारी भरें, पत्र तैयार हो जाएगा।",
  facts: [
    ["किसे दें", "कक्षा अध्यापक; 2-3 दिन से ज़्यादा हो तो प्रधानाचार्य"],
    ["कब दें", "पहले से पता हो तो छुट्टी से पहले; बीमारी में लौटते ही"],
    ["साथ में", "लंबी बीमारी: डॉक्टर का पर्चा/मेडिकल सर्टिफिकेट"],
    ["ध्यान रहे", "बोर्ड परीक्षा के लिए न्यूनतम उपस्थिति (attendance) ज़रूरी होती है"],
  ],
  to: "आम तौर पर <strong>कक्षा अध्यापक</strong> को। ज़्यादा दिन की छुट्टी, परीक्षा के समय की छुट्टी या स्कूल का नियम कहे तो <strong>प्रधानाचार्य/प्रधानाध्यापक</strong> को (कक्षा अध्यापक के ज़रिए)।",
  when: [
    "बुखार, बीमारी या चोट के कारण स्कूल न आ पाना",
    "घर में शादी, किसी परिजन का निधन या ज़रूरी पारिवारिक काम",
    "गांव/दूसरे शहर जाना या डॉक्टर के पास जाना",
    "पहले ली गई छुट्टी के बाद लौटने पर लिखित जानकारी देनी हो",
  ],
  fields: [
    { key: "to", label: { hi: "किसे लिख रहे हैं", en: "Addressed to" }, type: "select", options: [
      { hi: "कक्षा अध्यापक/अध्यापिका", en: "The Class Teacher" },
      { hi: "प्रधानाचार्य/प्रधानाचार्या", en: "The Principal" },
      { hi: "प्रधानाध्यापक/प्रधानाध्यापिका", en: "The Headmaster/Headmistress" },
    ] },
    { key: "school", label: { hi: "स्कूल का नाम और जगह", en: "School name and place" }, required: true, placeholder: { hi: "जैसे: राजकीय उच्च माध्यमिक विद्यालय, सीतापुर", en: "e.g. Govt. Senior Secondary School, Sitapur" } },
    { key: "name", label: { hi: "छात्र/छात्रा का नाम", en: "Student's name" }, required: true },
    { key: "class", label: { hi: "कक्षा और सेक्शन", en: "Class and section" }, required: true, placeholder: { hi: "जैसे: 7 (ब)", en: "e.g. 7 (B)" } },
    { key: "roll", label: { hi: "रोल नंबर (चाहें तो)", en: "Roll no. (optional)" } },
    { key: "reason", label: { hi: "छुट्टी का कारण", en: "Reason for leave" }, type: "select", options: [
      { hi: "मुझे बुखार है और डॉक्टर ने आराम करने की सलाह दी है", en: "I am suffering from fever and the doctor has advised rest" },
      { hi: "मेरी तबीयत ठीक नहीं है", en: "I am not well" },
      { hi: "मेरे परिवार में विवाह समारोह है, जिसमें मेरा शामिल होना ज़रूरी है", en: "there is a wedding in my family which I have to attend" },
      { hi: "परिवार में एक ज़रूरी काम के कारण मुझे बाहर जाना है", en: "I have to go out of station due to an urgent family matter" },
      { hi: "मेरे परिवार में एक परिजन का निधन हो गया है", en: "there has been a death in my family" },
    ] },
    { key: "details", label: { hi: "और कुछ बताना हो (चाहें तो)", en: "Anything to add (optional)" }, type: "textarea", placeholder: { hi: "जैसे: डॉक्टर का पर्चा संलग्न है", en: "e.g. Doctor's prescription is attached" } },
    { key: "from", label: { hi: "छुट्टी कब से", en: "Leave from" }, type: "date", required: true },
    { key: "till", label: { hi: "छुट्टी कब तक", en: "Leave till" }, type: "date", required: true },
    { key: "parent", label: { hi: "माता-पिता/अभिभावक का नाम", en: "Parent/guardian's name" }, placeholder: { hi: "छोटे बच्चों के लिए ज़रूरी", en: "Needed for younger students" } },
    { key: "phone", label: { hi: "अभिभावक का मोबाइल (चाहें तो)", en: "Parent's mobile (optional)" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{school}}

विषय: {{from}} से {{till}} तक अवकाश हेतु प्रार्थना पत्र

महोदय/महोदया,

सविनय निवेदन है कि मैं, {{name}}, आपके विद्यालय की कक्षा {{class}} का छात्र/छात्रा हूं।
रोल नंबर: {{roll}}

मैं आपको सूचित करना चाहता/चाहती हूं कि {{reason}}। इस कारण मैं {{from}} से {{till}} तक विद्यालय आने में असमर्थ रहूंगा/रहूंगी।

{{details}}

अतः आपसे विनम्र प्रार्थना है कि मुझे {{from}} से {{till}} तक का अवकाश प्रदान करने की कृपा करें। इन दिनों में छूटा हुआ पाठ्यक्रम और गृहकार्य मैं लौटकर पूरा कर लूंगा/लूंगी।

धन्यवाद।

आपका आज्ञाकारी शिष्य/आपकी आज्ञाकारी शिष्या,
{{name}}
कक्षा: {{class}}

अभिभावक के हस्ताक्षर: ________
अभिभावक का नाम: {{parent}}
मोबाइल: {{phone}}

दिनांक: {{date}}`,
    en: `To,
{{to}},
{{school}}

Subject: Application for leave from {{from}} to {{till}}

Respected Sir/Madam,

I, {{name}}, am a student of class {{class}} of your school.
Roll no.: {{roll}}

Most respectfully, I wish to inform you that {{reason}}. Due to this, I will not be able to attend school from {{from}} to {{till}}.

{{details}}

I therefore request you kindly to grant me leave from {{from}} to {{till}}. I will complete the missed lessons and homework after I return.

Thanking you.

Yours obediently,
{{name}}
Class: {{class}}

Signature of parent/guardian: ________
Parent/guardian's name: {{parent}}
Mobile: {{phone}}

Date: {{date}}`,
  },
  attach: [
    "बीमारी की लंबी छुट्टी में डॉक्टर का पर्चा या मेडिकल सर्टिफिकेट (स्कूल मांगे तो)",
    "शादी के लिए छुट्टी में चाहें तो निमंत्रण कार्ड की कॉपी",
  ],
  submit: [
    "पत्र प्रिंट करें या स्कूल डायरी/कॉपी के पन्ने पर साफ-साफ लिखें; अभिभावक से हस्ताक्षर कराएं।",
    "छुट्टी पहले से पता हो तो छुट्टी शुरू होने से पहले कक्षा अध्यापक को दें; अचानक बीमारी में किसी साथी के हाथ भिजवाएं या लौटने के पहले दिन जमा करें।",
    "कई स्कूल WhatsApp/ऐप पर सूचना भी लेते हैं; फिर भी लौटकर लिखित पत्र दे दें।",
    "परीक्षा या प्रैक्टिकल वाले दिन छुट्टी हो तो प्रधानाचार्य से बात करें और दोबारा परीक्षा का नियम पूछें।",
  ],
  tips: [
    "छुट्टी की <strong>तारीखें साफ</strong> लिखें (से–तक); सिर्फ \"2 दिन\" लिखने से गड़बड़ होती है।",
    "बोर्ड कक्षाओं (10वीं/12वीं) में उपस्थिति कम होने पर परीक्षा में बैठने में दिक्कत हो सकती है; बार-बार की छुट्टी से बचें।",
    "बीमारी का बहाना बनाकर झूठा कारण न लिखें; बाद में मेडिकल पर्चा मांगा जा सकता है।",
    "लौटकर छूटा हुआ काम साथी की कॉपी से पूरा कर लें।",
  ],
  related: ["/students/"],
  faq: [
    { q: "स्कूल छुट्टी का प्रार्थना पत्र किसे लिखें?", a: "आम तौर पर कक्षा अध्यापक को। ज़्यादा दिन की छुट्टी हो या स्कूल का नियम कहे तो प्रधानाचार्य को लिखें और कक्षा अध्यापक के ज़रिए दें।" },
    { q: "बीमारी की छुट्टी में मेडिकल सर्टिफिकेट ज़रूरी है?", a: "1-2 दिन के लिए अक्सर अभिभावक का पत्र काफी होता है। लंबी बीमारी में ज़्यादातर स्कूल डॉक्टर का पर्चा या मेडिकल सर्टिफिकेट मांगते हैं; अपने स्कूल का नियम पूछ लें।" },
    { q: "छुट्टी के बाद पत्र दे सकते हैं?", a: "हां, अचानक बीमारी में लौटने के पहले दिन पत्र दें और उसमें छुट्टी की पूरी तारीखें लिखें।" },
    { q: "क्या अभिभावक के हस्ताक्षर ज़रूरी हैं?", a: "स्कूल के छात्रों के लिए हां, ज़्यादातर स्कूल अभिभावक के हस्ताक्षर वाला पत्र ही मानते हैं। कॉलेज में छात्र खुद हस्ताक्षर करते हैं।" },
    { q: "ज़्यादा छुट्टी से क्या नुकसान है?", a: "बोर्ड और कई राज्यों के नियमों में परीक्षा के लिए न्यूनतम उपस्थिति ज़रूरी है। उपस्थिति कम हो तो प्रवेश पत्र रुक सकता है, इसलिए छुट्टी सोच-समझकर लें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
