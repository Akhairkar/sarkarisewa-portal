import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - A school/college character (conduct) certificate is issued by the head
//   of the institution on its letterhead; no national law fixes its format,
//   fee or time limit, so none are given.
// - Recruitment and admission notices commonly ask for a character
//   certificate from the head of the institution last attended, and many
//   government jobs separately run police verification; the police
//   character certificate is a different document issued by state police
//   (see the site's /service/character-certificate.html guide).
export const schoolCharacterCertificateApplication: Letter = {
  slug: "school-character-certificate-application",
  category: "school",
  emoji: "📜",
  title: "Character Certificate Application in Hindi 2026: चरित्र प्रमाण पत्र",
  description: "स्कूल/कॉलेज से चरित्र प्रमाण पत्र (Character Certificate) मांगने का प्रार्थना पत्र (हिंदी/English)। दाखिले, नौकरी के फॉर्म के लिए; भरें और प्रिंट करें।",
  h1: "स्कूल/कॉलेज से चरित्र प्रमाण पत्र के लिए प्रार्थना पत्र 2026",
  short: { hi: "चरित्र प्रमाण पत्र (स्कूल/कॉलेज)", en: "Character certificate (school/college)" },
  lead: "स्कूल या कॉलेज का <strong>चरित्र प्रमाण पत्र</strong> (Character / Conduct Certificate) बताता है कि पढ़ाई के दौरान आपका आचरण अच्छा रहा। यह <strong>प्रधानाचार्य/प्राचार्य</strong> अपने लेटरहेड पर देते हैं और अक्सर TC या अंकतालिका के साथ मिलता है। नए स्कूल/कॉलेज में दाखिले, नौकरी या भर्ती के फॉर्म में यह मांगा जाता है। ध्यान दें: <strong>पुलिस का चरित्र प्रमाण पत्र</strong> अलग दस्तावेज़ है, जो थाने/राज्य पुलिस पोर्टल से बनता है।",
  facts: [
    ["किसे दें", "आखिरी स्कूल/कॉलेज के प्रधानाचार्य/प्राचार्य"],
    ["कब मिलता है", "आम तौर पर संस्था छोड़ते समय, TC के साथ"],
    ["फीस और समय", "संस्था के नियम से; ऑफिस में पूछें"],
    ["अलग दस्तावेज़", "पुलिस चरित्र प्रमाण पत्र थाने/पुलिस पोर्टल से"],
  ],
  to: "जिस स्कूल/कॉलेज में आपने आखिरी बार पढ़ाई की, उसके <strong>प्रधानाचार्य/प्राचार्य</strong> को। विश्वविद्यालय में कई बार यह विभागाध्यक्ष या रजिस्ट्रार के ज़रिए मिलता है।",
  when: [
    "नए स्कूल/कॉलेज या विश्वविद्यालय में दाखिले के समय",
    "सरकारी/प्राइवेट नौकरी या भर्ती (जैसे सेना, पुलिस) के फॉर्म और दस्तावेज़ जांच में",
    "हॉस्टल, स्कॉलरशिप या अप्रेंटिसशिप में",
    "TC के साथ चरित्र प्रमाण पत्र नहीं मिला हो या खो गया हो",
  ],
  fields: [
    { key: "school", label: { hi: "स्कूल/कॉलेज का नाम और पता", en: "School/college name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता/माता का नाम", en: "Father's/mother's name" }, required: true },
    { key: "class", label: { hi: "कक्षा/कोर्स", en: "Class/course" }, required: true, placeholder: { hi: "जैसे: कक्षा 12 (कला) / B.Com.", en: "e.g. Class 12 (Arts) / B.Com." } },
    { key: "roll", label: { hi: "रोल/नामांकन/प्रवेश नंबर", en: "Roll/enrolment/admission no." } },
    { key: "years", label: { hi: "कब से कब तक पढ़े", en: "Studied from – to" }, required: true, placeholder: { hi: "जैसे: 2022 से 2026 तक", en: "e.g. 2022 to 2026" } },
    { key: "status", label: { hi: "अभी की स्थिति", en: "Current status" }, type: "select", options: [
      { hi: "मैं आपके संस्थान का पूर्व छात्र/छात्रा हूं", en: "I am a former student of your institution" },
      { hi: "मैं आपके संस्थान का वर्तमान छात्र/छात्रा हूं", en: "I am a current student of your institution" },
    ] },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, type: "select", options: [
      { hi: "आगे की पढ़ाई के लिए दाखिले", en: "admission for higher studies" },
      { hi: "नौकरी/भर्ती के आवेदन", en: "a job/recruitment application" },
      { hi: "छात्रवृत्ति/अप्रेंटिसशिप", en: "a scholarship/apprenticeship" },
      { hi: "हॉस्टल में प्रवेश", en: "hostel admission" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "address", label: { hi: "पता", en: "Address" }, type: "textarea" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
प्रधानाचार्य/प्राचार्य,
{{school}}

विषय: चरित्र प्रमाण पत्र जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

सविनय निवेदन है कि {{status}}। मैंने, {{name}}, पुत्र/पुत्री {{father}}, आपके संस्थान में {{years}} {{class}} में अध्ययन किया है।
रोल/नामांकन नंबर: {{roll}}

मुझे {{purpose}} के लिए चरित्र प्रमाण पत्र की आवश्यकता है। संस्थान में पढ़ाई के दौरान मैंने सभी नियमों का पालन किया है और मेरे विरुद्ध कोई अनुशासनात्मक कार्रवाई नहीं हुई है।

अतः आपसे प्रार्थना है कि मुझे चरित्र प्रमाण पत्र जल्द से जल्द जारी करने की कृपा करें। इसके लिए कोई फीस या फॉर्म ज़रूरी हो तो मैं उसे जमा कर दूंगा/दूंगी।

धन्यवाद।

आपका आज्ञाकारी/आपकी आज्ञाकारी,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: अंकतालिका/TC या आई-कार्ड की कॉपी`,
    en: `To,
The Principal,
{{school}}

Subject: Application for issue of Character Certificate

Respected Sir/Madam,

Most respectfully, {{status}}. I, {{name}}, son/daughter of {{father}}, studied {{class}} in your institution during {{years}}.
Roll/enrolment no.: {{roll}}

I need a character certificate for {{purpose}}. During my studies I followed all the rules of the institution and no disciplinary action was taken against me.

I therefore request you kindly to issue me a character certificate at the earliest. If any fee or form is required, I will submit it.

Thanking you.

Yours obediently,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosed: copy of marksheet/TC or ID card`,
  },
  attach: [
    "आखिरी कक्षा की अंकतालिका या TC की कॉपी",
    "स्कूल/कॉलेज आई-कार्ड की कॉपी (वर्तमान छात्र हों तो)",
    "भर्ती/दाखिले का तय फॉर्मेट हो तो वह फॉर्मेट",
  ],
  submit: [
    "पत्र प्रिंट करें, हस्ताक्षर करें और स्कूल ऑफिस/कॉलेज के अकादमिक सेक्शन में दें; रिसीविंग लें।",
    "पूर्व छात्र हैं तो पास होने का साल और रोल नंबर ज़रूर लिखें, ताकि रिकॉर्ड जल्दी मिले।",
    "सर्टिफिकेट पर नाम, पिता का नाम, पढ़ाई के साल, प्रधानाचार्य के हस्ताक्षर और मुहर जांच लें।",
    "नौकरी में पुलिस वेरिफिकेशन/पुलिस चरित्र प्रमाण पत्र अलग से मांगा जाए तो वह राज्य पुलिस पोर्टल या थाने से बनवाएं।",
  ],
  tips: [
    "भर्ती के विज्ञापन में लिखा हो कि सर्टिफिकेट कितना पुराना न हो (जैसे 6 महीने), तो उसी हिसाब से नया बनवाएं।",
    "जहां फॉर्म में \"संस्था के प्रधान का चरित्र प्रमाण पत्र\" लिखा हो, वहां पुलिस वाला प्रमाण पत्र नहीं चलता, और उल्टा भी।",
    "कई प्रमाण पत्र चाहिए हों तो एक साथ 2-3 मूल प्रतियां मांग लें।",
    "स्कूल बंद हो गया हो तो ज़िला शिक्षा अधिकारी (DEO) कार्यालय से रिकॉर्ड के बारे में पूछें।",
  ],
  related: ["/students/", "/service/character-certificate.html"],
  faq: [
    { q: "स्कूल का चरित्र प्रमाण पत्र कौन देता है?", a: "जिस स्कूल/कॉलेज में आपने आखिरी बार पढ़ाई की, उसके प्रधानाचार्य या प्राचार्य अपने लेटरहेड पर देते हैं।" },
    { q: "स्कूल और पुलिस के चरित्र प्रमाण पत्र में क्या अंतर है?", a: "स्कूल/कॉलेज वाला प्रमाण पत्र पढ़ाई के दौरान आचरण बताता है। पुलिस वाला प्रमाण पत्र बताता है कि आपके खिलाफ कोई आपराधिक मामला दर्ज है या नहीं; वह थाने या राज्य पुलिस के पोर्टल से बनता है।" },
    { q: "क्या पास होने के कई साल बाद भी चरित्र प्रमाण पत्र मिल सकता है?", a: "हां, ज़्यादातर संस्थान पूर्व छात्रों को रिकॉर्ड देखकर देते हैं। पत्र में पास होने का साल और रोल नंबर लिखें।" },
    { q: "चरित्र प्रमाण पत्र की फीस कितनी है?", a: "कोई एक राष्ट्रीय फीस नहीं है; हर संस्था अपना नियम रखती है। कई सरकारी स्कूल बिना फीस देते हैं। ऑफिस से पूछ लें।" },
    { q: "क्या चरित्र प्रमाण पत्र TC के साथ मिलता है?", a: "कई स्कूल TC के साथ या TC में ही आचरण (Conduct) लिख देते हैं। अलग से चाहिए हो तो यह प्रार्थना पत्र दें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
