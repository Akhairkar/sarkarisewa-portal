import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - There is no single central "senior citizen card"; state social welfare
//   departments / district administration issue senior citizen identity
//   cards or certificates for people aged 60+ (site guide
//   /service/senior-citizen-card.html and state guides in src/guides/senior).
// - Maintenance and Welfare of Parents and Senior Citizens Act 2007 s.2(h):
//   senior citizen = Indian citizen aged 60 or above (indiacode).
// - Elderline 14567 (MoSJE national helpline for senior citizens).
// - Ayushman Vay Vandana card (AB PM-JAY, 70+, no income limit) is separate.
// - Forms, fees and offices differ by state: not stated.
export const seniorCitizenCardApplicationLetter: Letter = {
  slug: "senior-citizen-card-application-letter",
  category: "social",
  emoji: "👴",
  title: "Senior Citizen Card Application in Hindi 2026: वरिष्ठ नागरिक कार्ड आवेदन",
  description: "60+ उम्र के लिए वरिष्ठ नागरिक पहचान पत्र का आवेदन पत्र (हिंदी/English), ज़िला समाज कल्याण अधिकारी को। कागज़, कहां दें और एल्डरलाइन 14567।",
  h1: "वरिष्ठ नागरिक पहचान पत्र के लिए आवेदन पत्र 2026",
  short: { hi: "वरिष्ठ नागरिक कार्ड आवेदन", en: "Senior citizen card application" },
  lead: "पूरे देश के लिए केंद्र सरकार का कोई एक \"सीनियर सिटीजन कार्ड\" नहीं है। <strong>60 साल या ज़्यादा</strong> उम्र के लोगों का वरिष्ठ नागरिक पहचान पत्र/प्रमाण पत्र <strong>राज्य का समाज कल्याण विभाग या ज़िला प्रशासन</strong> बनाता है; कई राज्यों में e-District पोर्टल या CSC से आवेदन होता है। जहां हाथ से आवेदन लिया जाता है, वहां <strong>ज़िला समाज कल्याण अधिकारी</strong> को यह पत्र दें। बुज़ुर्गों की मदद के लिए राष्ट्रीय हेल्पलाइन <strong>एल्डरलाइन 14567</strong> है।",
  facts: [
    ["उम्र", "60 साल या ज़्यादा"],
    ["किसे दें", "ज़िला समाज कल्याण अधिकारी / राज्य द्वारा तय दफ्तर"],
    ["कहां से", "e-District पोर्टल, CSC या ज़िला कार्यालय (राज्य के अनुसार)"],
    ["हेल्पलाइन", "एल्डरलाइन 14567"],
  ],
  to: "अपने ज़िले के <strong>ज़िला समाज कल्याण अधिकारी</strong> को (कुछ राज्यों में SDM, तहसीलदार या नगर निगम)। राज्य का ऑनलाइन फॉर्म हो तो उसी में आवेदन करें और यह पत्र साथ लगाएं।",
  when: [
    "बस/रेल किराये में छूट, अस्पताल में अलग लाइन जैसी राज्य की सुविधाओं के लिए",
    "उम्र का अलग सरकारी पहचान पत्र चाहिए (पेंशन, बैंक, सरकारी दफ्तरों में)",
    "राज्य की बुज़ुर्ग योजनाओं में वरिष्ठ नागरिक कार्ड मांगा गया है",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर और ज़िला", en: "Office and district" }, required: true, placeholder: { hi: "जैसे: ज़िला समाज कल्याण अधिकारी, ज़िला रांची, झारखंड", en: "e.g. District Social Welfare Officer, District Ranchi, Jharkhand" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "dob", label: { hi: "जन्म तिथि / उम्र", en: "Date of birth / age" }, required: true, placeholder: { hi: "जैसे: 01/01/1960 (66 वर्ष)", en: "e.g. 01/01/1960 (66 years)" } },
    { key: "gender", label: { hi: "लिंग", en: "Gender" }, type: "select", options: [
      { hi: "पुरुष", en: "Male" },
      { hi: "महिला", en: "Female" },
      { hi: "अन्य", en: "Other" },
    ] },
    { key: "blood", label: { hi: "ब्लड ग्रुप (पता हो तो)", en: "Blood group (if known)" } },
    { key: "address", label: { hi: "पूरा पता", en: "Full address" }, type: "textarea", required: true },
    { key: "emergency", label: { hi: "आपात संपर्क (नाम, रिश्ता, मोबाइल)", en: "Emergency contact (name, relation, mobile)" }, required: true, placeholder: { hi: "जैसे: सुनील कुमार, पुत्र, 98XXXXXXXX", en: "e.g. Sunil Kumar, son, 98XXXXXXXX" } },
    { key: "phone", label: { hi: "आपका मोबाइल नंबर", en: "Your mobile number" }, type: "tel" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: वरिष्ठ नागरिक पहचान पत्र जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी श्री {{father}}, निवासी {{address}}, भारत का नागरिक हूं। मेरी जन्म तिथि {{dob}} है, अतः मैं 60 वर्ष से अधिक आयु का/की वरिष्ठ नागरिक हूं।

मेरा विवरण इस प्रकार है:
लिंग: {{gender}}
ब्लड ग्रुप: {{blood}}
आपात संपर्क: {{emergency}}

राज्य सरकार की सुविधाओं का लाभ लेने के लिए मुझे वरिष्ठ नागरिक पहचान पत्र की आवश्यकता है। आयु और निवास के प्रमाण की प्रतियां तथा फोटो संलग्न हैं।

अतः आपसे प्रार्थना है कि मुझे वरिष्ठ नागरिक पहचान पत्र जारी करने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर / अंगूठे का निशान)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. आयु प्रमाण (आधार/जन्म प्रमाण पत्र/वोटर ID/पेंशन पर्ची)
2. निवास का प्रमाण
3. दो पासपोर्ट साइज़ फोटो
4. ब्लड ग्रुप रिपोर्ट (यदि हो)`,
    en: `To,
{{office}}

Subject: Application for issue of senior citizen identity card

Sir/Madam,

I, {{name}}, son/daughter/wife of Shri {{father}}, resident of {{address}}, am a citizen of India. My date of birth is {{dob}}, so I am a senior citizen above 60 years of age.

My details are as follows:
Gender: {{gender}}
Blood group: {{blood}}
Emergency contact: {{emergency}}

I need a senior citizen identity card to avail the facilities of the state government. Copies of proof of age and residence and photographs are enclosed.

I therefore request you kindly to issue me a senior citizen identity card.

Yours faithfully,

(Signature / thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Proof of age (Aadhaar/birth certificate/voter ID/pension slip)
2. Proof of residence
3. Two passport-size photographs
4. Blood group report (if any)`,
  },
  attach: [
    "उम्र का प्रमाण: आधार, वोटर ID, जन्म प्रमाण पत्र, स्कूल प्रमाण पत्र या पेंशन पर्ची",
    "निवास का प्रमाण: राशन कार्ड, बिजली बिल, आधार",
    "दो पासपोर्ट साइज़ फोटो",
    "ब्लड ग्रुप रिपोर्ट (कार्ड पर छपता है, अगर राज्य का फॉर्मेट मांगे)",
  ],
  submit: [
    "पहले अपने राज्य के e-District पोर्टल या CSC पर \"वरिष्ठ नागरिक पहचान पत्र\" सेवा देखें; कई राज्यों में ऑनलाइन है।",
    "हाथ से आवेदन हो तो यह पत्र और कागज़ ज़िला समाज कल्याण कार्यालय (या राज्य द्वारा तय दफ्तर) में जमा करें और रसीद लें।",
    "बुज़ुर्ग खुद न जा सकें तो परिवार का सदस्य <a href=\"/arzi/authority-letter-format.html\">अधिकार पत्र</a> के साथ जमा कर सकता है, अगर दफ्तर अनुमति दे।",
    "देरी या परेशानी हो तो <strong>एल्डरलाइन 14567</strong> पर कॉल करें या ज़िला अधिकारी को लिखें।",
  ],
  tips: [
    "70 साल या ज़्यादा हों तो अलग से <strong>आयुष्मान वय वंदना कार्ड</strong> बनवाएं: ₹5 लाख तक मुफ्त इलाज, कोई आय सीमा नहीं।",
    "कार्ड बनवाने के नाम पर कोई अतिरिक्त पैसा मांगे तो न दें; फीस हो तो सरकारी रसीद लें।",
    "बैंक में वरिष्ठ नागरिक FD दर के लिए अलग कार्ड ज़रूरी नहीं, आधार/उम्र का प्रमाण काफी है।",
  ],
  notice: "वरिष्ठ नागरिक कार्ड <strong>राज्य सरकार</strong> देती है; फॉर्म, दफ्तर, फीस और मिलने वाली सुविधाएं हर राज्य में अलग हैं।",
  official: [
    { href: "https://socialjustice.gov.in/", title: "सामाजिक न्याय और अधिकारिता मंत्रालय", note: "वरिष्ठ नागरिक कल्याण, एल्डरलाइन" },
    { href: "https://beneficiary.nha.gov.in/", title: "आयुष्मान कार्ड पोर्टल (NHA)", note: "70+ के लिए वय वंदना कार्ड" },
  ],
  related: ["/service/senior-citizen-card.html", "/service/ayushman-bharat-vayo-vandana.html", "/service/national-social-assistance-programme.html"],
  faq: [
    { q: "सीनियर सिटीजन कार्ड कौन बनाता है?", a: "राज्य सरकार का समाज कल्याण विभाग या ज़िला प्रशासन। केंद्र सरकार का कोई एक राष्ट्रीय सीनियर सिटीजन कार्ड नहीं है।" },
    { q: "वरिष्ठ नागरिक कार्ड के लिए उम्र कितनी चाहिए?", a: "60 साल या उससे ज़्यादा। माता-पिता और वरिष्ठ नागरिकों का भरण-पोषण अधिनियम 2007 में भी वरिष्ठ नागरिक की उम्र 60 साल है।" },
    { q: "वरिष्ठ नागरिक कार्ड के लिए कौन से कागज़ लगते हैं?", a: "उम्र का प्रमाण, निवास का प्रमाण और फोटो। कुछ राज्य ब्लड ग्रुप और आपात संपर्क भी मांगते हैं।" },
    { q: "क्या सीनियर सिटीजन कार्ड ऑनलाइन बनता है?", a: "कई राज्यों में e-District पोर्टल या CSC से बनता है, कुछ में सिर्फ दफ्तर में। अपने राज्य का पोर्टल देखें।" },
    { q: "बुज़ुर्गों की हेल्पलाइन कौन सी है?", a: "एल्डरलाइन 14567, जो सामाजिक न्याय मंत्रालय की राष्ट्रीय हेल्पलाइन है: पेंशन, कानूनी मदद, दुर्व्यवहार की शिकायत के लिए।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
