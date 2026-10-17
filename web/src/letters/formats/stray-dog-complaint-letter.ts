import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Animal Birth Control Rules 2023 (under the Prevention of Cruelty to
//   Animals Act 1960; explainers on SCC Online, Bombay HC order Aug 2024):
//   the local authority runs the ABC programme (capture, sterilisation,
//   anti-rabies vaccination and release in the same area); r.20 feeding of
//   community animals arranged by the RWA/apartment association/local body
//   representative at spots away from entrances and children's play areas.
// - Supreme Court, In Re: City hounded by strays (suo motu), order of
//   22 Aug 2025 (Down To Earth, Deccan Herald, SCC Online): dogs picked up
//   must be sterilised, dewormed, vaccinated and released in the same area,
//   except rabid/suspected rabid or aggressive dogs; feeding on streets and
//   public places prohibited, municipal bodies to create dedicated feeding
//   spaces in each ward; matter extended to all States/UTs.
// - Supreme Court order of 7 Nov 2025 (Daily Pioneer, Siasat, Kerala Kaumudi):
//   stray dogs to be removed from premises of educational institutions,
//   hospitals, public sports complexes and bus stands/depots, not
//   released back there; such premises to be fenced; on 19 May 2026 the
//   Court dismissed applications seeking recall of that order (WION,
//   Swarajya).
// - Killing or maiming an animal is an offence (BNS 2023 s.325).
// Exact municipal helplines differ city to city and are not listed.
export const strayDogComplaintLetter: Letter = {
  slug: "stray-dog-complaint-letter",
  category: "municipal",
  emoji: "🐕",
  title: "Stray Dog Complaint Letter in Hindi 2026: आवारा कुत्तों की शिकायत",
  description: "आवारा कुत्तों के काटने/हमले या झुंड से परेशानी हो तो नगर निगम/नगर पालिका को शिकायत पत्र (हिंदी/English)। ABC नियम 2023 और सुप्रीम कोर्ट के 2025 के आदेश।",
  h1: "आवारा कुत्तों की शिकायत पत्र 2026: नगर निगम को कैसे लिखें",
  short: { hi: "आवारा कुत्तों की शिकायत", en: "Stray dog complaint" },
  lead: "आवारा कुत्तों की नसबंदी, टीकाकरण और काबू रखने की ज़िम्मेदारी <strong>नगर निगम / नगर पालिका</strong> (गांव में पंचायत) की है, जो <strong>पशु जन्म नियंत्रण (ABC) नियम 2023</strong> के तहत यह काम करते हैं। सुप्रीम कोर्ट ने <strong>22 अगस्त 2025</strong> को कहा कि पकड़े गए कुत्तों की नसबंदी और टीका लगाकर उन्हें उसी इलाके में छोड़ा जाए, पर <strong>पागल (रेबीज़) या आक्रामक कुत्ते</strong> नहीं छोड़े जाएंगे; <strong>7 नवंबर 2025</strong> के आदेश में स्कूल, अस्पताल, बस अड्डे जैसे परिसरों से कुत्ते हटाने को कहा। इसी आधार पर यह शिकायत पत्र लिखें।",
  facts: [
    ["किसे दें", "नगर आयुक्त / अधिशासी अधिकारी; पशु चिकित्सा/स्वास्थ्य विभाग"],
    ["नियम", "ABC नियम 2023 (पशु क्रूरता निवारण अधिनियम 1960 के तहत)"],
    ["सुप्रीम कोर्ट", "22 अगस्त 2025 और 7 नवंबर 2025 के आदेश; मई 2026 में आदेश बरकरार"],
    ["कुत्ता काटे तो", "तुरंत घाव धोएं, सरकारी अस्पताल में एंटी-रेबीज़ टीका लगवाएं"],
  ],
  to: "शहर में <strong>नगर आयुक्त (नगर निगम)</strong> या <strong>अधिशासी अधिकारी (नगर पालिका/नगर पंचायत)</strong> को; कई निगमों में यह काम <strong>पशु चिकित्सा अधिकारी / जन स्वास्थ्य विभाग</strong> देखता है। गांव में <strong>ग्राम पंचायत / खंड विकास अधिकारी</strong> को। स्कूल/अस्पताल परिसर का मामला हो तो उस संस्था के प्रमुख को भी कॉपी दें।",
  when: [
    "गली/मोहल्ले में कुत्तों के काटने या बच्चों-बुज़ुर्गों पर हमले की घटनाएं हो रही हैं",
    "कोई कुत्ता बीमार, पागल (रेबीज़ जैसे लक्षण) या बहुत आक्रामक है",
    "इलाके के कुत्तों की नसबंदी और टीकाकरण नहीं हुआ है",
    "स्कूल, अस्पताल, बस अड्डे या खेल परिसर में कुत्तों के झुंड रहते हैं",
  ],
  fields: [
    { key: "office", label: { hi: "नगर निगम/पालिका अधिकारी का पद और पता", en: "Municipal officer's designation and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: नगर आयुक्त, नगर निगम, कानपुर", en: "e.g. Municipal Commissioner, Kanpur Municipal Corporation" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "area", label: { hi: "समस्या वाली जगह (गली, वार्ड, लैंडमार्क)", en: "Problem location (street, ward, landmark)" }, required: true, placeholder: { hi: "जैसे: वार्ड 23, गली नं. 4, प्राथमिक विद्यालय के पास", en: "e.g. Ward 23, Lane 4, near the primary school" } },
    { key: "problem", label: { hi: "समस्या", en: "Problem" }, type: "select", required: true, options: [
      { hi: "इलाके में आवारा कुत्तों के काटने की घटनाएं हो रही हैं", en: "there have been incidents of stray dog bites in the area" },
      { hi: "एक कुत्ता पागल/रेबीज़ के लक्षण वाला या बहुत आक्रामक है", en: "a dog appears rabid or is very aggressive" },
      { hi: "इलाके के कुत्तों की नसबंदी और टीकाकरण नहीं हुआ है, संख्या लगातार बढ़ रही है", en: "the dogs of the area are not sterilised or vaccinated and their number keeps rising" },
      { hi: "स्कूल/अस्पताल/बस अड्डे के परिसर में आवारा कुत्तों का झुंड रहता है", en: "a pack of stray dogs lives inside a school/hospital/bus stand premises" },
    ] },
    { key: "count", label: { hi: "लगभग कितने कुत्ते", en: "Approximate number of dogs" }, type: "number" },
    { key: "incidents", label: { hi: "घटनाओं का विवरण (तारीख, किसे काटा)", en: "Details of incidents (dates, who was bitten)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 05/10/2026 को 8 साल के बच्चे को काटा, ज़िला अस्पताल में टीका लगा", en: "e.g. On 05/10/2026 an 8-year-old child was bitten, vaccinated at the district hospital" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: {{area}} में आवारा कुत्तों की समस्या के संबंध में शिकायत।

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, आपका ध्यान इस ओर दिलाना चाहता/चाहती हूं कि {{area}} में {{problem}}। इस इलाके में लगभग {{count}} आवारा कुत्ते हैं।

घटनाओं का विवरण:
{{incidents}}

इससे बच्चों, बुज़ुर्गों और राहगीरों में डर का माहौल है और रेबीज़ का खतरा बना हुआ है।

पशु जन्म नियंत्रण नियम 2023 के अनुसार आवारा कुत्तों की नसबंदी और टीकाकरण की ज़िम्मेदारी स्थानीय निकाय की है। माननीय सर्वोच्च न्यायालय ने 22 अगस्त 2025 के आदेश में रेबीज़ग्रस्त और आक्रामक कुत्तों को अलग रखने और 7 नवंबर 2025 के आदेश में शैक्षणिक संस्थान, अस्पताल, बस अड्डे जैसे परिसरों से आवारा कुत्ते हटाने के निर्देश दिए हैं।

अतः आपसे निवेदन है कि:
1. इलाके के कुत्तों को पकड़कर नसबंदी और एंटी-रेबीज़ टीकाकरण कराया जाए;
2. पागल/आक्रामक कुत्तों को नियम के अनुसार अलग रखा जाए;
3. वार्ड में कुत्तों को खाना खिलाने की तय जगह बनाई जाए, ताकि गलियों में झगड़े न हों;
4. की गई कार्रवाई की सूचना मुझे दी जाए।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न: फोटो/वीडियो, अस्पताल की पर्ची (कुत्ता काटने के मामले में), मोहल्ले के लोगों के हस्ताक्षर

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint regarding the stray dog problem at {{area}}.

Sir/Madam,

I, {{name}}, resident of {{address}}, wish to bring to your notice that at {{area}}, {{problem}}. There are about {{count}} stray dogs in the area.

Details of incidents:
{{incidents}}

Children, elderly people and passers-by are afraid and there is a constant risk of rabies.

Under the Animal Birth Control Rules, 2023, sterilisation and vaccination of stray dogs is the responsibility of the local body. The Hon'ble Supreme Court, in its order of 22 August 2025, directed that rabid and aggressive dogs be kept separately, and in its order of 7 November 2025 directed removal of stray dogs from premises such as educational institutions, hospitals and bus stands.

I therefore request you to:
1. Have the dogs of the area caught, sterilised and vaccinated against rabies;
2. Keep rabid/aggressive dogs separately as per rules;
3. Designate feeding spots in the ward so that disputes in the lanes are avoided;
4. Inform me of the action taken.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures: photos/videos, hospital slip (in case of dog bite), signatures of residents

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "कुत्तों के झुंड या हमले की फोटो/वीडियो (जगह और तारीख के साथ)",
    "कुत्ता काटने पर अस्पताल/टीकाकरण की पर्ची की कॉपी",
    "मोहल्ले/RWA के लोगों के नाम और हस्ताक्षर",
    "पहले की गई ऑनलाइन/फोन शिकायत का नंबर, अगर हो",
  ],
  submit: [
    "पहले अपने नगर निगम की हेल्पलाइन, ऐप या वेबसाइट पर शिकायत दर्ज करें और शिकायत संख्या लें; कई निगमों में 'डॉग स्क्वॉड' या पशु चिकित्सा विभाग का अलग नंबर होता है।",
    "यह पत्र नगर निगम/पालिका के कार्यालय या ज़ोनल कार्यालय में जमा करें और रिसीविंग लें; वार्ड पार्षद को भी कॉपी दें।",
    "स्कूल/अस्पताल परिसर का मामला हो तो उस संस्था के प्रमुख को भी लिखें; सुप्रीम कोर्ट ने ऐसे परिसरों की बाड़बंदी के निर्देश दिए हैं।",
    "कार्रवाई न हो तो ज़िलाधिकारी, राज्य की CM हेल्पलाइन/जन शिकायत पोर्टल पर शिकायत करें; RTI से इलाके में हुई नसबंदी की जानकारी मांग सकते हैं।",
  ],
  tips: [
    "कुत्ते को मारना, ज़हर देना या पीटना अपराध है (BNS धारा 325); खुद कार्रवाई न करें, निगम से करवाएं।",
    "कुत्ता काटे तो घाव को साबुन और बहते पानी से 15 मिनट धोएं और उसी दिन सरकारी अस्पताल में एंटी-रेबीज़ टीका लगवाएं; टीके की पूरी खुराक लें।",
    "खाना खिलाने वालों से झगड़े की जगह निगम से वार्ड में खाने की तय जगह बनवाने को कहें।",
    "सुप्रीम कोर्ट का मामला अभी चल रहा है; नए आदेश आ सकते हैं, निगम से ताज़ा नियम पूछें।",
  ],
  official: [
    { href: "https://awbi.gov.in/", title: "भारतीय जीव जंतु कल्याण बोर्ड (AWBI)", note: "ABC नियम और SOP" },
    { href: "https://www.indiacode.nic.in/", title: "India Code (पशु क्रूरता निवारण अधिनियम 1960)" },
  ],
  related: ["/support/helpline-directory.html", "/support/rti-guide.html"],
  faq: [
    { q: "आवारा कुत्तों की शिकायत कहां करें?", a: "अपने नगर निगम/नगर पालिका को: हेल्पलाइन, ऐप या लिखित पत्र से। गांव में ग्राम पंचायत या खंड विकास अधिकारी को लिखें।" },
    { q: "क्या नगर निगम कुत्तों को इलाके से हटा सकता है?", a: "आम तौर पर ABC नियम और सुप्रीम कोर्ट के 22 अगस्त 2025 के आदेश के अनुसार नसबंदी और टीके के बाद कुत्ते उसी इलाके में छोड़े जाते हैं। पागल या आक्रामक कुत्ते अलग रखे जाते हैं, और 7 नवंबर 2025 के आदेश के अनुसार स्कूल, अस्पताल, बस अड्डे जैसे परिसरों से कुत्ते हटाकर वहां वापस नहीं छोड़े जाते।" },
    { q: "क्या सड़क पर कुत्तों को खाना खिलाना मना है?", a: "सुप्रीम कोर्ट ने 22 अगस्त 2025 को सार्वजनिक जगहों पर खिलाने पर रोक लगाई और हर वार्ड में खाने की तय जगह बनाने को कहा। अपने निगम से तय जगह की जानकारी लें।" },
    { q: "कुत्ता काट ले तो क्या करें?", a: "घाव को साबुन-पानी से अच्छी तरह धोएं, तुरंत सरकारी अस्पताल में एंटी-रेबीज़ टीका लगवाएं और पूरी खुराक लें। फिर निगम को लिखित शिकायत करें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
