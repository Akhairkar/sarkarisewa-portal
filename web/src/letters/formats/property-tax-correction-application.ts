import type { Letter } from "../types";

// Sources (checked 17 Oct 2026; same research as /service/municipal-property-tax):
// - Constitution Art. 243X and the Twelfth Schedule: property tax is levied
//   by municipalities under each State's municipal Act and city bye-laws.
//   The method (annual rental value / unit area / capital value), rebates,
//   penalties, the period for filing an objection to a new or revised
//   assessment, and the appellate forum (municipal tribunal / court) are set
//   by each State Act, so the page gives no national time limit or fee and
//   says "the notice states the time limit".
// - Many State Acts make deposit of the admitted/assessed tax a condition for
//   hearing an appeal; page states this generally ("कई राज्यों में").
// - Name change in the tax record is a separate letter on this site
//   (property-mutation-application), so this letter covers corrections of
//   area, usage, construction type, duplicate entries and wrong arrears.
export const propertyTaxCorrectionApplication: Letter = {
  slug: "property-tax-correction-application",
  category: "municipal",
  emoji: "🏠",
  title: "Property Tax Correction Application in Hindi 2026: हाउस टैक्स सुधार",
  description: "हाउस टैक्स (संपत्ति कर) में गलत क्षेत्रफल, उपयोग, बकाया या दोहरे बिल पर सुधार/आपत्ति आवेदन (हिंदी/English)। नगर निगम को कैसे दें, क्या लगाएं, अपील।",
  h1: "संपत्ति कर (हाउस टैक्स) सुधार / आपत्ति आवेदन पत्र 2026",
  short: { hi: "हाउस टैक्स सुधार आवेदन", en: "Property tax correction" },
  lead: "संपत्ति कर (हाउस टैक्स/गृहकर) राज्य के नगरपालिका कानून के तहत <strong>नगर निगम/नगर पालिका</strong> लगाती है। बिल में <strong>क्षेत्रफल, उपयोग (रिहायशी/व्यावसायिक), निर्माण का प्रकार, मंज़िलें</strong> या <strong>बकाया</strong> गलत लिखा हो, या एक ही मकान के दो बिल आ रहे हों, तो <strong>कर निर्धारण अधिकारी</strong> को सुधार/आपत्ति का आवेदन दें। नया या बढ़ा हुआ असेसमेंट नोटिस मिला हो तो नोटिस में लिखी <strong>समय सीमा के अंदर</strong> आपत्ति देना ज़रूरी है।",
  facts: [
    ["किसे दें", "कर निर्धारण अधिकारी / ज़ोनल अधिकारी (कर विभाग), नगर निगम/पालिका"],
    ["समय सीमा", "असेसमेंट नोटिस में लिखी अवधि के अंदर (राज्य के कानून से)"],
    ["ज़रूरी", "प्रॉपर्टी ID / असेसमेंट नंबर और पिछली रसीद"],
    ["आगे", "आपत्ति पर आदेश से असंतुष्ट हों तो राज्य कानून के तहत अपील"],
  ],
  to: "अपने नगर निगम/नगर पालिका के <strong>कर निर्धारण अधिकारी (Assessing Officer)</strong>, <strong>ज़ोनल अधिकारी</strong> या <strong>कर अधीक्षक</strong> को। छोटे शहरों में <strong>अधिशासी अधिकारी</strong> को लिखें।",
  when: [
    "बिल में मकान का क्षेत्रफल या मंज़िलें असल से ज़्यादा लिखी हैं",
    "रिहायशी मकान को व्यावसायिक या किराये का दिखाकर ज़्यादा टैक्स लगाया गया",
    "जमा किया गया टैक्स बकाया में दिख रहा है या ब्याज/जुर्माना गलत जोड़ा गया",
    "एक ही संपत्ति के दो प्रॉपर्टी ID / दो बिल आ रहे हैं",
    "नया असेसमेंट नोटिस मिला है और उस पर आपत्ति करनी है",
  ],
  fields: [
    { key: "office", label: { hi: "अधिकारी और नगर निगम/पालिका का पता", en: "Officer and municipal body address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: कर निर्धारण अधिकारी, ज़ोन-3, नगर निगम, आगरा", en: "e.g. Assessing Officer, Zone 3, Agra Municipal Corporation" } },
    { key: "name", label: { hi: "मालिक का नाम (जैसा टैक्स रिकॉर्ड में है)", en: "Owner's name (as in tax record)" }, required: true },
    { key: "pid", label: { hi: "प्रॉपर्टी ID / असेसमेंट नंबर", en: "Property ID / assessment number" }, required: true },
    { key: "property", label: { hi: "संपत्ति का पता", en: "Property address" }, type: "textarea", required: true },
    { key: "issue", label: { hi: "क्या गलती है", en: "What is wrong" }, type: "select", required: true, options: [
      { hi: "संपत्ति का क्षेत्रफल/मंज़िलें गलत दर्ज हैं", en: "the area/floors of the property are recorded wrongly" },
      { hi: "संपत्ति का उपयोग (रिहायशी/व्यावसायिक/किराया) गलत दर्ज है", en: "the use of the property (residential/commercial/rented) is recorded wrongly" },
      { hi: "जमा किया गया कर बकाया में दिखाया जा रहा है / ब्याज-जुर्माना गलत जोड़ा गया है", en: "tax already paid is shown as arrears / interest-penalty is added wrongly" },
      { hi: "एक ही संपत्ति पर दो प्रॉपर्टी ID / दो बिल बन गए हैं", en: "two property IDs / two bills have been created for the same property" },
      { hi: "नए/संशोधित कर निर्धारण पर मेरी आपत्ति है", en: "I object to the new/revised assessment" },
    ] },
    { key: "wrong", label: { hi: "रिकॉर्ड में क्या लिखा है", en: "What the record shows" }, type: "textarea", required: true, placeholder: { hi: "जैसे: कवर्ड एरिया 1,800 वर्ग फुट, व्यावसायिक; वार्षिक कर ₹9,400", en: "e.g. Covered area 1,800 sq ft, commercial; annual tax Rs 9,400" } },
    { key: "correct", label: { hi: "सही जानकारी क्या है", en: "Correct details" }, type: "textarea", required: true, placeholder: { hi: "जैसे: कवर्ड एरिया 1,100 वर्ग फुट, केवल रिहायशी (स्वयं के रहने हेतु)", en: "e.g. Covered area 1,100 sq ft, residential only (self-occupied)" } },
    { key: "notice", label: { hi: "बिल/नोटिस नंबर और तारीख (अगर हो)", en: "Bill/notice number and date (if any)" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "पत्र-व्यवहार का पता", en: "Correspondence address" }, type: "textarea" },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: संपत्ति कर (प्रॉपर्टी ID / असेसमेंट नंबर {{pid}}) के रिकॉर्ड में सुधार / कर निर्धारण पर आपत्ति हेतु आवेदन।

महोदय/महोदया,

मैं, {{name}}, संपत्ति {{property}} का/की स्वामी हूं, जिसकी प्रॉपर्टी ID / असेसमेंट नंबर {{pid}} है। बिल/नोटिस संख्या एवं तारीख: {{notice}}।

निवेदन है कि {{issue}}।

रिकॉर्ड में दर्ज जानकारी:
{{wrong}}

सही जानकारी:
{{correct}}

इस गलती के कारण मुझ पर अधिक कर/बकाया दिखाया जा रहा है। सही जानकारी के समर्थन में कागज़ संलग्न हैं।

अतः आपसे निवेदन है कि:
1. मौके का निरीक्षण/कागज़ों की जांच कर रिकॉर्ड में सुधार करें और संशोधित बिल जारी करें;
2. गलत रूप से जोड़ा गया बकाया/ब्याज/जुर्माना हटाएं, और अधिक जमा राशि आगे के कर में समायोजित करें;
3. सुधार होने तक इस राशि पर कोई दंडात्मक कार्रवाई न करें;
4. इस आवेदन पर सुनवाई का अवसर दें और आदेश की प्रति मुझे दें।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

संलग्न:
1. विवादित बिल/नोटिस की कॉपी
2. पिछली कर रसीदों की कॉपी
3. स्वामित्व का प्रमाण (रजिस्ट्री/आवंटन पत्र) और स्वीकृत नक्शा (यदि हो)
4. क्षेत्रफल/उपयोग के समर्थन में फोटो या अन्य प्रमाण

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Application for correction of property tax record / objection to assessment (Property ID / assessment no. {{pid}}).

Sir/Madam,

I, {{name}}, am the owner of the property at {{property}}, bearing property ID / assessment number {{pid}}. Bill/notice number and date: {{notice}}.

I submit that {{issue}}.

Details as recorded:
{{wrong}}

Correct details:
{{correct}}

Because of this error, excess tax/arrears are being shown against me. Documents supporting the correct details are enclosed.

I therefore request you to:
1. Inspect the site / verify the documents, correct the record and issue a revised bill;
2. Remove the arrears/interest/penalty added wrongly and adjust any excess amount paid against future tax;
3. Not take any coercive action for this amount until the correction is decided;
4. Give me an opportunity of hearing and a copy of the order passed.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Enclosures:
1. Copy of the disputed bill/notice
2. Copies of previous tax receipts
3. Proof of ownership (sale deed/allotment letter) and sanctioned plan (if any)
4. Photos or other proof of area/use

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "विवादित बिल या असेसमेंट नोटिस की कॉपी",
    "पिछले सालों की टैक्स रसीदें (खासकर जो बकाया में गलत दिख रही हैं)",
    "रजिस्ट्री/आवंटन पत्र, स्वीकृत नक्शा या पूर्णता प्रमाण पत्र (जो हो)",
    "उपयोग साबित करने के लिए: बिजली का घरेलू कनेक्शन बिल, फोटो; दो ID हों तो दोनों बिल",
  ],
  submit: [
    "पहले निगम का प्रॉपर्टी टैक्स पोर्टल देखें: कई शहरों में स्व-कर निर्धारण (self-assessment) में सुधार या ऑनलाइन आपत्ति का विकल्प है।",
    "यह पत्र कागज़ों के साथ ज़ोनल/कर विभाग कार्यालय में जमा करें और <strong>तारीख वाली रिसीविंग</strong> लें; नोटिस की समय सीमा के अंदर जमा करें।",
    "अधिकारी मौके का निरीक्षण कर सकते हैं; सुनवाई की तारीख मिले तो कागज़ों की मूल प्रति लेकर जाएं।",
    "आदेश से असंतुष्ट हों तो राज्य के नगरपालिका कानून में दी गई अपील (आयुक्त/ट्रिब्यूनल/अदालत) करें; कई राज्यों में अपील से पहले तय टैक्स जमा करना शर्त होती है।",
  ],
  tips: [
    "जिस हिस्से पर विवाद नहीं है, वह टैक्स समय पर भरते रहें, ताकि ब्याज/जुर्माना न बढ़े।",
    "नाम बदलना हो (खरीद, विरासत) तो वह नामांतरण (mutation) का अलग आवेदन है।",
    "नापजोख खुद करके लिखें: कवर्ड एरिया, खुली जगह और मंज़िलें अलग-अलग।",
    "मकान का कुछ हिस्सा किराये पर है तो वह सच-सच बताएं; गलत जानकारी पर बाद में जुर्माना लग सकता है।",
  ],
  related: ["/service/municipal-property-tax.html", "/service/city-municipal-property-tax-receipt.html"],
  faq: [
    { q: "हाउस टैक्स में गलती कैसे सुधरवाएं?", a: "नगर निगम/पालिका के कर निर्धारण अधिकारी को सुधार आवेदन दें, साथ में बिल, पिछली रसीदें और सही जानकारी का सबूत लगाएं। कई शहरों में यह काम ऑनलाइन पोर्टल पर भी होता है।" },
    { q: "प्रॉपर्टी टैक्स असेसमेंट पर आपत्ति कितने दिन में करें?", a: "यह हर राज्य के कानून में अलग है और असेसमेंट नोटिस में लिखा होता है। उसी समय के अंदर लिखित आपत्ति दें, वरना असेसमेंट अंतिम हो सकता है।" },
    { q: "क्या आपत्ति के दौरान टैक्स भरना पड़ेगा?", a: "जिस हिस्से पर विवाद नहीं है वह भरते रहें। अपील के स्तर पर कई राज्यों में पूरा या तय हिस्सा जमा करना शर्त होती है; अपने निगम से पूछें।" },
    { q: "जमा टैक्स बकाया में दिख रहा है, क्या करें?", a: "पुरानी रसीदों की कॉपी के साथ यह पत्र दें और रिकॉर्ड अपडेट करने को कहें। ऑनलाइन भुगतान का ट्रांजैक्शन ID और बैंक स्टेटमेंट भी लगाएं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
