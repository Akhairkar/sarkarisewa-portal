import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Passport Seva proof-of-present-address list (MEA Annexure II,
//   mea.gov.in; copies on portal2.passportindia.gov.in / Indian missions):
//   "Certificate from employer of reputed companies on letter head" is an
//   accepted address proof; notes say only public limited companies may
//   give it, on company letterhead with seal; computer printouts not
//   accepted. Checked lists differ by version, so readers are told to
//   check the current list on passportindia.gov.in.
// - RBI Master Direction on KYC / RBI KYC FAQs (rbi.org.in, rev. 09.06.2025):
//   "deemed OVD" for address only - letter of allotment of accommodation
//   from employer issued by State/Central Govt departments, statutory/
//   regulatory bodies, PSUs, scheduled commercial banks, financial
//   institutions and listed companies (and leave-and-licence agreements with
//   such employers); the customer must submit an OVD with current address
//   within three months.
// - UIDAI's 2025 document list was not confirmed to include an employer
//   letter, so the page does not claim Aadhaar acceptance.
export const addressProofLetterFromEmployer: Letter = {
  slug: "address-proof-letter-from-employer",
  category: "job",
  emoji: "🏷️",
  title: "Address Proof Letter from Employer in Hindi 2026: पता प्रमाण पत्र अनुरोध",
  description: "कंपनी/HR से पते और नौकरी का प्रमाण पत्र (Address / Employment Proof Letter) मांगने का पत्र (हिंदी/English)। पासपोर्ट, बैंक, किराये के लिए; भरें, प्रिंट करें।",
  h1: "कंपनी से पते/नौकरी का प्रमाण पत्र मांगने का अनुरोध पत्र 2026",
  short: { hi: "कंपनी से पता प्रमाण पत्र अनुरोध", en: "Employer address proof request" },
  lead: "नए शहर में नौकरी करने वालों के पास अक्सर मौजूदा पते का कागज़ नहीं होता। ऐसे में कंपनी के <strong>HR</strong> से लेटरहेड पर <strong>पते और नौकरी का प्रमाण पत्र</strong> मांगा जा सकता है। <strong>पासपोर्ट</strong> के पते के सबूत की सूची में प्रतिष्ठित कंपनी (पब्लिक लिमिटेड) के लेटरहेड पर मुहर वाला प्रमाण पत्र शामिल है। <strong>बैंक KYC</strong> में RBI के नियम के तहत सरकारी विभाग, PSU, बैंक या लिस्टेड कंपनी का <strong>आवास आवंटन पत्र</strong> सिर्फ पते के लिए अस्थायी रूप से चलता है, और <strong>3 महीने</strong> में नए पते वाला दस्तावेज़ देना होता है।",
  facts: [
    ["किसे दें", "कंपनी का HR / प्रशासन विभाग"],
    ["पासपोर्ट", "प्रतिष्ठित कंपनी के लेटरहेड पर, मुहर सहित"],
    ["बैंक KYC", "सिर्फ नियोक्ता का आवास आवंटन पत्र (तय संस्थाएं); 3 महीने में नया OVD"],
    ["दूसरी जगह", "मानना या न मानना उस संस्था के नियम पर"],
  ],
  to: "अपनी कंपनी के <strong>HR मैनेजर/प्रशासन विभाग</strong> को। पत्र पर कंपनी का लेटरहेड, अधिकृत अधिकारी के हस्ताक्षर, नाम-पद और <strong>कंपनी की मुहर</strong> होनी चाहिए।",
  when: [
    "पासपोर्ट आवेदन में मौजूदा पते का सबूत चाहिए",
    "कंपनी के दिए फ्लैट/क्वार्टर के पते पर बैंक खाता या KYC",
    "किराये का मकान लेना, गैस/ब्रॉडबैंड कनेक्शन या बच्चे का स्कूल दाखिला",
    "लोन, वीज़ा या किसी आवेदन में नौकरी का सबूत (Employment Verification) चाहिए",
  ],
  fields: [
    { key: "to", label: { hi: "किसे (नाम/पद)", en: "To (name/designation)" }, required: true, placeholder: { hi: "जैसे: HR मैनेजर", en: "e.g. HR Manager" } },
    { key: "company", label: { hi: "कंपनी का नाम और पता", en: "Company name and address" }, type: "textarea", required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "designation", label: { hi: "पद और कर्मचारी ID", en: "Designation and employee ID" }, required: true },
    { key: "joined", label: { hi: "जॉइनिंग की तारीख", en: "Date of joining" }, type: "date", required: true },
    { key: "address", label: { hi: "आपका मौजूदा पता (जैसा प्रमाण पत्र में चाहिए)", en: "Your current address (as needed in the letter)" }, type: "textarea", required: true },
    { key: "addrtype", label: { hi: "यह पता किसका है", en: "This address is" }, type: "select", options: [
      { hi: "कंपनी द्वारा आवंटित आवास/क्वार्टर", en: "accommodation/quarters allotted by the company" },
      { hi: "किराये का मकान, जिसका पता कंपनी के रिकॉर्ड में दर्ज है", en: "a rented house whose address is recorded in company records" },
      { hi: "मेरा अपना/परिवार का मकान, जो कंपनी के रिकॉर्ड में दर्ज है", en: "my own/family house, recorded in company records" },
    ] },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, type: "select", options: [
      { hi: "पासपोर्ट आवेदन", en: "passport application" },
      { hi: "बैंक खाता/KYC", en: "bank account/KYC" },
      { hi: "किराये का मकान/कनेक्शन", en: "house rental/utility connection" },
      { hi: "बच्चे का स्कूल दाखिला", en: "child's school admission" },
      { hi: "लोन/वीज़ा आवेदन", en: "loan/visa application" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel" },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{to}},
{{company}}

विषय: पते और नौकरी का प्रमाण पत्र जारी करने हेतु अनुरोध

महोदय/महोदया,

मैं, {{name}}, पुत्र/पुत्री/पत्नी {{father}}, {{designation}} के पद पर {{joined}} से आपकी कंपनी में कार्यरत हूं।

मुझे {{purpose}} के लिए अपने मौजूदा पते और नौकरी का प्रमाण पत्र चाहिए। मेरा मौजूदा पता, जो {{addrtype}} है, इस प्रकार है:
{{address}}

अतः आपसे निवेदन है कि कंपनी के लेटरहेड पर, अधिकृत अधिकारी के हस्ताक्षर और कंपनी की मुहर सहित, एक प्रमाण पत्र जारी करने की कृपा करें, जिसमें मेरा नाम, पिता/पति का नाम, पद, जॉइनिंग की तारीख और ऊपर लिखा पता हो।

पते के सत्यापन के लिए किराये का समझौता या कोई अन्य दस्तावेज़ चाहिए तो मैं उपलब्ध करा दूंगा/दूंगी।

धन्यवाद।

भवदीय/भवदीया,
{{name}}
{{designation}}
मोबाइल: {{phone}}

दिनांक: {{date}}`,
    en: `To,
{{to}},
{{company}}

Subject: Request for address and employment proof letter

Dear Sir/Madam,

I, {{name}}, son/daughter/wife of {{father}}, have been working in your company as {{designation}} since {{joined}}.

I need a letter certifying my current address and employment for {{purpose}}. My current address, which is {{addrtype}}, is:
{{address}}

I therefore request you kindly to issue a letter on the company letterhead, signed by the authorised officer and bearing the company seal, stating my name, father's/husband's name, designation, date of joining and the above address.

If a rent agreement or any other document is needed to verify the address, I will provide it.

Thanking you.

Yours sincerely,
{{name}}
{{designation}}
Mobile: {{phone}}

Date: {{date}}`,
  },
  attach: [
    "किराये का समझौता या कंपनी का आवास आवंटन पत्र (HR पते की पुष्टि के लिए मांग सकता है)",
    "पासपोर्ट/बैंक का तय फॉर्मेट हो तो वह फॉर्मेट",
  ],
  submit: [
    "पत्र HR को ईमेल या हाथ से दें; कंपनी के पोर्टल पर \"Address Proof / Employment Letter\" का विकल्प हो तो वहां से मांगें।",
    "मिले हुए पत्र में लेटरहेड, तारीख, अधिकारी का नाम-पद, हस्ताक्षर और <strong>मुहर</strong> जांचें; पासपोर्ट में कंप्यूटर से बिना हस्ताक्षर की प्रिंटआउट नहीं चलती।",
    '<strong>पासपोर्ट:</strong> आवेदन से पहले <a href="https://www.passportindia.gov.in/" target="_blank" rel="noopener nofollow">Passport Seva</a> पर पते के सबूत की ताज़ा सूची देखें।',
    "<strong>बैंक KYC:</strong> नियोक्ता का आवास आवंटन पत्र देने पर बैंक के कहे अनुसार 3 महीने के अंदर नए पते वाला आधार/वोटर ID/पासपोर्ट जैसा दस्तावेज़ जमा करें।",
  ],
  tips: [
    "पता बिल्कुल वैसा लिखें जैसा आवेदन फॉर्म में भरेंगे (मकान नंबर, गली, पिन कोड)।",
    "सामान्य कंपनी का पता प्रमाण पत्र हर जगह नहीं चलता; जहां जमा करना है, वहां पहले पूछ लें।",
    "पत्र में वेतन, बैंक खाता या PAN जैसी जानकारी तभी डलवाएं जब सच में ज़रूरत हो।",
    "पत्र की तारीख ताज़ा रखें; कई जगह 3-6 महीने से पुराना पत्र नहीं लेते।",
  ],
  notice: "कंपनी का पता प्रमाण पत्र <strong>हर विभाग में मान्य नहीं</strong> होता। आधार अपडेट और बैंक KYC के लिए उनकी अपनी दस्तावेज़ सूची है; जमा करने से पहले उस संस्था की सूची देखें।",
  official: [
    { href: "https://www.passportindia.gov.in/", title: "Passport Seva", note: "पते के सबूत की मान्य सूची" },
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक (RBI)", note: "KYC मास्टर डायरेक्शन और FAQ" },
  ],
  related: ["/service/passport.html", "/documents/"],
  faq: [
    { q: "कंपनी से पता प्रमाण पत्र कैसे मांगें?", a: "HR को लिखित अनुरोध (यह पत्र) दें, जिसमें मौजूदा पता और उद्देश्य लिखा हो। पत्र लेटरहेड पर, हस्ताक्षर और मुहर सहित लें।" },
    { q: "क्या पासपोर्ट में कंपनी का पता प्रमाण पत्र चलता है?", a: "हां, पासपोर्ट के पते के सबूत की सूची में प्रतिष्ठित कंपनी के लेटरहेड पर दिया प्रमाण पत्र शामिल है; नियम में पब्लिक लिमिटेड कंपनी और मुहर की शर्त है। आवेदन से पहले ताज़ा सूची देखें।" },
    { q: "क्या बैंक KYC में कंपनी का पत्र चलता है?", a: "सामान्य पता पत्र नहीं। RBI नियम में सिर्फ सरकारी विभाग, PSU, बैंक, वित्तीय संस्था या लिस्टेड कंपनी का आवास आवंटन पत्र पते के लिए अस्थायी रूप से चलता है, और 3 महीने में नए पते वाला दस्तावेज़ देना होता है।" },
    { q: "क्या आधार में पता बदलने के लिए कंपनी का पत्र चलेगा?", a: "आधार के लिए UIDAI की अपनी दस्तावेज़ सूची है। अपडेट से पहले myAadhaar पोर्टल या आधार केंद्र पर मान्य दस्तावेज़ों की सूची देखें।" },
    { q: "कंपनी पत्र देने से मना करे तो?", a: "कंपनी कानूनी रूप से यह पत्र देने को बाध्य नहीं है। तब किरायानामा, बिजली/गैस बिल या बैंक पासबुक जैसे दूसरे मान्य दस्तावेज़ इस्तेमाल करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
