import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Domicile / residence / nativity certificate is a state document issued
//   by the revenue department (Tehsildar / Mamlatdar / Circle Officer /
//   SDM / DC as notified), applied via state e-District / CSC / tehsil
//   (site guide /service/domicile-certificate.html).
// - The minimum residence period, fee, validity and accepted proofs are set
//   by each state (and differ for jobs/admissions), so no single number is
//   stated; letter asks the applicant to state years of residence.
export const domicileCertificateApplicationLetter: Letter = {
  slug: "domicile-certificate-application-letter",
  category: "document",
  emoji: "🏠",
  title: "Domicile Certificate Application in Hindi 2026: निवास प्रमाण पत्र आवेदन",
  description: "निवास/मूल निवास (Domicile) प्रमाण पत्र के लिए तहसीलदार को आवेदन पत्र (हिंदी/English)। कागज़, कितने साल का निवास, ऑनलाइन आवेदन और देरी पर शिकायत।",
  h1: "निवास / मूल निवास प्रमाण पत्र के लिए आवेदन पत्र 2026",
  short: { hi: "निवास प्रमाण पत्र आवेदन", en: "Domicile certificate application" },
  lead: "निवास या मूल निवास (Domicile) प्रमाण पत्र यह बताता है कि आप उस राज्य के निवासी हैं। इसे राज्य का राजस्व विभाग बनाता है: आम तौर पर <strong>तहसीलदार, अंचल अधिकारी, मामलतदार या SDM</strong>। ज़्यादातर राज्यों में आवेदन <strong>e-District पोर्टल, CSC या तहसील</strong> से होता है। कितने साल रहने पर प्रमाण पत्र मिलेगा और कौन से कागज़ चलेंगे, यह <strong>हर राज्य का अपना नियम</strong> है।",
  facts: [
    ["किसे दें", "तहसीलदार / SDM / अंचल अधिकारी"],
    ["कहां से", "e-District पोर्टल, CSC या तहसील"],
    ["निवास की अवधि", "राज्य के नियम के अनुसार (अलग-अलग)"],
    ["देरी हो तो", "राज्य का सेवा का अधिकार (RTS) कानून / CM हेल्पलाइन"],
  ],
  to: "जहां आप रहते हैं उस तहसील के <strong>तहसीलदार</strong> या राज्य द्वारा तय अधिकारी को। कुछ राज्यों (जैसे केरल में Nativity) में इसका नाम अलग है।",
  when: [
    "राज्य की सरकारी नौकरी या भर्ती परीक्षा में निवास प्रमाण पत्र मांगा गया है",
    "स्कूल-कॉलेज में राज्य कोटा या छात्रवृत्ति के लिए",
    "राज्य की किसी योजना में मूल निवासी होना शर्त है",
  ],
  fields: [
    { key: "office", label: { hi: "तहसील/दफ्तर का नाम", en: "Tehsil / office" }, required: true, placeholder: { hi: "जैसे: तहसील हुज़ूर, ज़िला भोपाल, मध्य प्रदेश", en: "e.g. Tehsil Huzur, District Bhopal, Madhya Pradesh" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "dob", label: { hi: "जन्म तिथि और जन्म स्थान", en: "Date and place of birth" }, required: true },
    { key: "address", label: { hi: "वर्तमान पूरा पता", en: "Present full address" }, type: "textarea", required: true },
    { key: "years", label: { hi: "राज्य में कितने साल से रह रहे हैं", en: "Years of residence in the state" }, required: true, placeholder: { hi: "जैसे: जन्म से / 2008 से", en: "e.g. since birth / since 2008" } },
    { key: "type", label: { hi: "किस आधार पर", en: "Basis" }, type: "select", options: [
      { hi: "मेरा जन्म इसी राज्य में हुआ और तब से यहीं रहता/रहती हूं", en: "I was born in this state and have lived here since" },
      { hi: "मेरे माता-पिता इस राज्य के मूल निवासी हैं", en: "My parents are permanent residents of this state" },
      { hi: "मैं राज्य के नियम में तय अवधि से ज़्यादा समय से यहां रह रहा/रही हूं", en: "I have lived here for longer than the period set by state rules" },
    ] },
    { key: "proof", label: { hi: "निवास के सबूत", en: "Proof of residence" }, type: "textarea", placeholder: { hi: "जैसे: राशन कार्ड, वोटर ID, स्कूल प्रमाण पत्र, ज़मीन/मकान के कागज़", en: "e.g. ration card, voter ID, school certificates, land/house papers" } },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान तहसीलदार महोदय,
{{office}}

विषय: निवास (मूल निवास) प्रमाण पत्र जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी श्री {{father}}, जन्म तिथि व स्थान {{dob}}, वर्तमान में {{address}} पर निवास करता/करती हूं।

मैं इस राज्य में {{years}} रह रहा/रही हूं। {{type}}। निवास के समर्थन में निम्न कागज़ों की प्रतियां संलग्न हैं:
{{proof}}

मुझे {{purpose}} के लिए निवास प्रमाण पत्र की आवश्यकता है। मैं घोषणा करता/करती हूं कि ऊपर दी गई जानकारी सही है और मैंने किसी अन्य राज्य से निवास प्रमाण पत्र नहीं बनवाया है।

अतः आपसे प्रार्थना है कि आवश्यक जांच कराकर मुझे निवास प्रमाण पत्र जारी करने की कृपा करें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. आधार कार्ड की प्रति
2. निवास के प्रमाण (ऊपर लिखे अनुसार)
3. जन्म प्रमाण पत्र / स्कूल प्रमाण पत्र
4. स्व-घोषणा/शपथ पत्र
5. पासपोर्ट साइज़ फोटो`,
    en: `To,
The Tehsildar,
{{office}}

Subject: Application for issue of residence (domicile) certificate

Sir/Madam,

I, {{name}}, son/daughter/wife of Shri {{father}}, date and place of birth {{dob}}, presently reside at {{address}}.

I have been living in this state {{years}}. {{type}}. Copies of the following documents are enclosed as proof of residence:
{{proof}}

I need a domicile certificate for {{purpose}}. I declare that the above information is true and that I have not obtained a domicile certificate from any other state.

I therefore request you kindly to get the necessary enquiry done and issue me a domicile certificate.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of Aadhaar card
2. Proof of residence (as listed above)
3. Birth certificate / school certificate
4. Self-declaration/affidavit
5. Passport-size photograph`,
  },
  attach: [
    "आधार कार्ड, राशन कार्ड, वोटर ID",
    "पुराने सबूत जो लंबे निवास को दिखाएं: स्कूल प्रमाण पत्र, ज़मीन/मकान के कागज़, पुराने बिजली बिल",
    "जन्म प्रमाण पत्र (जन्म उसी राज्य में हुआ हो तो)",
    "स्व-घोषणा या शपथ पत्र (राज्य के फॉर्मेट में)",
  ],
  submit: [
    "अपने राज्य के <strong>e-District / सेवा पोर्टल</strong> पर ऑनलाइन आवेदन देखें; ज़्यादातर राज्यों में उपलब्ध है।",
    "नहीं तो <strong>CSC या तहसील</strong> में पत्र और कागज़ जमा करें और आवेदन नंबर वाली रसीद लें।",
    "लेखपाल/पटवारी या राजस्व निरीक्षक पते की जांच करते हैं।",
    "तय समय में न मिले तो राज्य के <strong>सेवा का अधिकार</strong> कानून के तहत अपील या CM हेल्पलाइन पर शिकायत करें।",
  ],
  tips: [
    "दो राज्यों से निवास प्रमाण पत्र न बनवाएं; यह गलत घोषणा मानी जाती है।",
    "भर्ती विज्ञापन में लिखी तारीख के बाद का प्रमाण पत्र मांगा गया हो तो उसी हिसाब से नया बनवाएं।",
    "किराये के मकान में हों तो रेंट एग्रीमेंट और पुराने पते के सबूत भी लगाएं।",
  ],
  notice: "निवास प्रमाण पत्र के लिए कितने साल का निवास चाहिए, कौन से कागज़ चलेंगे और यह कितने समय तक मान्य है, यह <strong>हर राज्य के नियम</strong> से तय होता है। आवेदन से पहले अपने राज्य के पोर्टल की शर्तें पढ़ें।",
  official: [
    { href: "https://serviceonline.gov.in/", title: "ServicePlus (कई राज्यों का सेवा पोर्टल)" },
    { href: "https://www.india.gov.in/", title: "National Portal of India", note: "राज्य के e-District पोर्टल का लिंक" },
  ],
  related: ["/service/domicile-certificate.html", "/service/income-certificate.html", "/students/"],
  faq: [
    { q: "निवास प्रमाण पत्र का आवेदन किसे दें?", a: "अपनी तहसील के तहसीलदार या राज्य द्वारा तय अधिकारी (SDM/अंचल अधिकारी) को; ज़्यादातर राज्यों में e-District पोर्टल या CSC से ऑनलाइन आवेदन होता है।" },
    { q: "निवास प्रमाण पत्र के लिए कितने साल रहना ज़रूरी है?", a: "यह हर राज्य का अपना नियम है और नौकरी/दाखिले के लिए अलग भी हो सकता है। अपने राज्य के पोर्टल या तहसील से पूछें।" },
    { q: "किराये पर रहने वाले को निवास प्रमाण पत्र मिल सकता है?", a: "हां, अगर राज्य के नियम में तय अवधि से आप वहां रह रहे हैं और इसके सबूत (रेंट एग्रीमेंट, बिल, स्कूल रिकॉर्ड) दे सकते हैं।" },
    { q: "क्या दो राज्यों का निवास प्रमाण पत्र रख सकते हैं?", a: "नहीं। आवेदन में घोषणा करनी होती है कि दूसरे राज्य से प्रमाण पत्र नहीं लिया है; दो जगह से लेना गलत घोषणा है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
