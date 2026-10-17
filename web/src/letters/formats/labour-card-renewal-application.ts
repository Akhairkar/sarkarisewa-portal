import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Code on Social Security, 2020 (indiacode.nic.in), in force from
//   21 Nov 2025: s.106 - a building worker aged 18 to under 60 who has done
//   building/construction work for at least 90 days in the preceding 12 months
//   is eligible for registration as a beneficiary with the state board.
//   During transition, existing state BOCW boards, rules and schemes continue
//   until new rules are notified (Govt announcement; EY/KPMG notes). Same facts
//   as the site's labour-card-construction-workers guide.
// - Renewal period and fee differ by state (examples verified for the site's
//   state guides: Assam ABOCWWB renewal every 2 years, renewal fee nil with
//   dues; Chhattisgarh registration and renewal free; Chandigarh renewal
//   through ServicePlus). So no single period or fee is given here.
// - e-Shram helpdesk 14434 (eshram.gov.in) is national; state board helplines
//   are on the state pages.
export const labourCardRenewalApplication: Letter = {
  slug: "labour-card-renewal-application",
  category: "social",
  emoji: "👷",
  title: "Labour Card Renewal Application in Hindi 2026: लेबर कार्ड नवीनीकरण आवेदन",
  description: "निर्माण मज़दूर (BOCW) लेबर कार्ड के नवीनीकरण (renewal) का तैयार आवेदन पत्र (हिंदी/English)। 90 दिन काम का प्रमाण, कागज़, कहां जमा करें, राज्य के नियम।",
  h1: "लेबर कार्ड (निर्माण मज़दूर) नवीनीकरण आवेदन पत्र 2026",
  short: { hi: "लेबर कार्ड नवीनीकरण आवेदन", en: "Labour card renewal" },
  lead: "निर्माण मज़दूर का लेबर कार्ड (BOCW पंजीकरण) राज्य का <strong>भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड</strong> बनाता है, और योजनाओं (बच्चों की पढ़ाई, शादी, प्रसूति, मृत्यु सहायता) का पैसा तभी मिलता है जब पंजीकरण <strong>चालू (नवीनीकृत)</strong> हो। सामाजिक सुरक्षा संहिता 2020 के अनुसार 18 से 60 साल का वह मज़दूर पात्र है जिसने <strong>पिछले 12 महीनों में कम से कम 90 दिन</strong> निर्माण काम किया हो। नवीनीकरण कितने साल में और कितनी फीस, यह <strong>हर राज्य का बोर्ड अलग तय करता है</strong>। ज़्यादातर राज्यों में नवीनीकरण बोर्ड के पोर्टल/CSC से ऑनलाइन होता है; जहां ऑफलाइन है, वहां यह पत्र श्रम कार्यालय में दें।",
  facts: [
    ["किसे दें", "ज़िला/प्रखंड श्रम कार्यालय (श्रम अधिकारी/श्रम प्रवर्तन अधिकारी)"],
    ["शर्त", "18-60 साल, पिछले 12 महीने में 90 दिन निर्माण काम"],
    ["अवधि और फीस", "राज्य बोर्ड के नियम अनुसार; श्रम कार्यालय से पूछें"],
    ["कानून", "सामाजिक सुरक्षा संहिता 2020 (21 नवंबर 2025 से)"],
  ],
  to: "आपके ज़िले/प्रखंड के <strong>श्रम कार्यालय</strong> में श्रम अधिकारी (या राज्य में जो पंजीकरण अधिकारी हो) को, या सीधे <strong>सचिव, भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड</strong> को।",
  when: [
    "लेबर कार्ड की वैधता खत्म होने वाली है या खत्म हो गई",
    "बोर्ड का सदस्यता शुल्क/अंशदान बकाया है और कार्ड चालू करवाना है",
    "योजना के आवेदन में बताया गया कि पंजीकरण नवीनीकृत नहीं है",
    "ऑनलाइन नवीनीकरण नहीं हो रहा और श्रम कार्यालय में लिखित आवेदन देना है",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर का नाम और पता", en: "Office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: श्रम अधीक्षक कार्यालय, मुज़फ्फरपुर, बिहार", en: "e.g. Labour Superintendent Office, Muzaffarpur, Bihar" } },
    { key: "board", label: { hi: "बोर्ड का नाम", en: "Board name" }, placeholder: { hi: "जैसे: बिहार भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड", en: "e.g. Bihar Building and Other Construction Workers Welfare Board" } },
    { key: "name", label: { hi: "मज़दूर का नाम", en: "Worker's name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "regno", label: { hi: "पंजीकरण संख्या/लेबर कार्ड नंबर", en: "Registration/labour card no." }, required: true },
    { key: "validity", label: { hi: "कार्ड कब तक वैध था", en: "Card valid till" }, placeholder: { hi: "जैसे: 31/08/2026", en: "e.g. 31/08/2026" } },
    { key: "work", label: { hi: "काम का प्रकार", en: "Type of work" }, type: "select", required: true, options: [
      { hi: "राजमिस्त्री", en: "mason" },
      { hi: "मज़दूर/हेल्पर", en: "helper/labourer" },
      { hi: "बढ़ई", en: "carpenter" },
      { hi: "प्लंबर", en: "plumber" },
      { hi: "बिजली मिस्त्री", en: "electrician" },
      { hi: "पेंटर", en: "painter" },
      { hi: "सरिया/लोहा बांधने वाला", en: "bar bender" },
      { hi: "अन्य निर्माण काम", en: "other construction work" },
    ] },
    { key: "days", label: { hi: "पिछले 12 महीने में काम के दिन और प्रमाण किसने दिया", en: "Workdays in last 12 months and who certified" }, required: true, placeholder: { hi: "जैसे: 120 दिन, ठेकेदार/नियोजक का प्रमाण पत्र", en: "e.g. 120 days, contractor/employer certificate" } },
    { key: "aadhaar", label: { hi: "आधार के आखिरी 4 अंक", en: "Last 4 digits of Aadhaar" }, type: "number", hint: { hi: "पूरा आधार नंबर न लिखें; कॉपी साथ लगाएं", en: "Do not write full Aadhaar; attach a copy" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "address", label: { hi: "पता", en: "Address" }, type: "textarea", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रम अधिकारी / पंजीकरण अधिकारी,
{{office}}

विषय: निर्माण श्रमिक पंजीकरण (लेबर कार्ड) संख्या {{regno}} के नवीनीकरण हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, पिता/पति {{father}}, {{board}} में पंजीकृत निर्माण श्रमिक हूं। मेरी पंजीकरण संख्या {{regno}} है, जो दिनांक {{validity}} तक वैध थी। मैं {{work}} का काम करता/करती हूं।

पिछले 12 महीनों में मेरे निर्माण कार्य का विवरण: {{days}}। इसका प्रमाण पत्र संलग्न है।

अतः आपसे निवेदन है कि मेरे पंजीकरण का नवीनीकरण करने की कृपा करें, ताकि मुझे और मेरे परिवार को बोर्ड की कल्याण योजनाओं का लाभ मिलता रहे। नवीनीकरण के लिए जो शुल्क/अंशदान बोर्ड के नियम से लागू हो, वह मैं जमा करने को तैयार हूं।

मैं घोषणा करता/करती हूं कि ऊपर दी गई जानकारी सही है।

धन्यवाद।

प्रार्थी/प्रार्थिनी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
आधार (अंतिम 4 अंक): {{aadhaar}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: पुराने लेबर कार्ड की कॉपी, 90 दिन काम का प्रमाण पत्र, आधार की कॉपी, बैंक पासबुक की कॉपी, फोटो`,
    en: `To,
The Labour Officer / Registering Officer,
{{office}}

Subject: Application for renewal of construction worker registration (labour card) no. {{regno}}

Sir/Madam,

I, {{name}}, son/daughter/wife of {{father}}, am a construction worker registered with the {{board}}. My registration number is {{regno}}, which was valid till {{validity}}. I work as a {{work}}.

In the last 12 months, my construction work record is: {{days}}. The certificate is enclosed.

I therefore request you to renew my registration so that my family and I continue to receive the benefits of the Board's welfare schemes. I am ready to pay the renewal fee/contribution applicable under the Board's rules.

I declare that the information given above is true.

Thank you.

Yours faithfully,

(Signature/Thumb impression)
Name: {{name}}
Aadhaar (last 4 digits): {{aadhaar}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Copy of old labour card, 90-day work certificate, copy of Aadhaar, copy of bank passbook, photograph`,
  },
  attach: [
    "पुराने लेबर कार्ड/पंजीकरण की कॉपी (कुछ राज्यों में बोर्ड की दी हुई कॉपी/पासबुक के भरे पन्ने)",
    "पिछले 12 महीने में कम से कम 90 दिन काम का प्रमाण पत्र (ठेकेदार/नियोजक, पंजीकृत यूनियन या राज्य जिस अधिकारी को माने)",
    "आधार कार्ड और बैंक पासबुक की कॉपी, हाल की फोटो",
    "बकाया सदस्यता शुल्क/अंशदान की रसीद, अगर राज्य में लागू हो",
  ],
  submit: [
    "पहले देखें कि आपके राज्य में नवीनीकरण ऑनलाइन है या नहीं: राज्य बोर्ड का पोर्टल या नज़दीकी <a href=\"/tools/csc-locator.html\">CSC</a>। ज़्यादातर राज्यों में ऑनलाइन आवेदन ही मान्य है।",
    "ऑफलाइन हो तो यह पत्र और कागज़ श्रम कार्यालय में जमा करें और <strong>पावती/रसीद</strong> लें।",
    "फीस/अंशदान सिर्फ बोर्ड के तय तरीके (ऑनलाइन या सरकारी रसीद) से जमा करें।",
    "नवीनीकरण के बाद कार्ड/प्रमाण की कॉपी संभालें; योजना के हर आवेदन में यही लगेगी।",
    "देरी हो तो ज़िला श्रम अधीक्षक/उप श्रम आयुक्त को लिखित शिकायत करें या राज्य बोर्ड की हेल्पलाइन पर बात करें।",
  ],
  tips: [
    "नवीनीकरण की तारीख से पहले आवेदन करें; देर होने पर कई राज्यों में बकाया शुल्क/जुर्माना लगता है और बीच के समय की योजनाओं का लाभ रुक सकता है।",
    "90 दिन के प्रमाण पत्र पर देने वाले का नाम, पता, मोबाइल और हस्ताक्षर/मुहर हो।",
    "बैंक खाता आधार से जुड़ा हो, वरना योजना का पैसा अटक सकता है।",
    "लेबर कार्ड के नाम पर पैसे मांगने वाले दलालों से बचें; सरकारी रसीद ज़रूर लें।",
  ],
  notice: "नवीनीकरण की अवधि, फीस और ऑनलाइन/ऑफलाइन तरीका हर राज्य में अलग है। अपने राज्य का लेबर कार्ड पेज या श्रम कार्यालय से पक्का करें।",
  official: [
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "सामाजिक सुरक्षा संहिता 2020 का पाठ" },
    { href: "https://eshram.gov.in/", title: "e-Shram पोर्टल", note: "असंगठित मज़दूरों का राष्ट्रीय पंजीकरण, हेल्पलाइन 14434" },
  ],
  related: ["/service/labour-card-construction-workers.html", "/service/e-shram-card.html", "/service/mh-bandhkam-kamgar-yojana.html"],
  faq: [
    { q: "लेबर कार्ड का नवीनीकरण कितने साल में होता है?", a: "यह राज्य बोर्ड तय करता है; कुछ राज्यों में हर साल, कुछ में हर 2-3 साल या मासिक/वार्षिक अंशदान से। अपने कार्ड पर वैधता देखें या श्रम कार्यालय से पूछें।" },
    { q: "नवीनीकरण के लिए कौन से कागज़ चाहिए?", a: "पुराना कार्ड, पिछले 12 महीने में 90 दिन काम का प्रमाण पत्र, आधार, बैंक पासबुक और फोटो। कुछ राज्य बकाया अंशदान की रसीद भी मांगते हैं।" },
    { q: "कार्ड की वैधता खत्म हो गई, क्या अब भी नवीनीकरण होगा?", a: "कई राज्यों में बकाया शुल्क/जुर्माना देकर नवीनीकरण हो जाता है; बहुत देर होने पर नया पंजीकरण करना पड़ सकता है। राज्य के नियम देखें।" },
    { q: "क्या नए लेबर कोड के बाद पुराना कार्ड चलेगा?", a: "हां। सामाजिक सुरक्षा संहिता 21 नवंबर 2025 से लागू है, पर नए नियम पूरी तरह लागू होने तक मौजूदा बोर्ड, नियम और योजनाएं चलती रहती हैं।" },
    { q: "लेबर कार्ड और ई-श्रम कार्ड में क्या फर्क है?", a: "लेबर कार्ड राज्य के निर्माण मज़दूर बोर्ड का पंजीकरण है, जिससे बोर्ड की योजनाएं मिलती हैं। ई-श्रम केंद्र का असंगठित मज़दूरों का पंजीकरण है। दोनों बनवा सकते हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
