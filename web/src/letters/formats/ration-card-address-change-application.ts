import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - nfsa.gov.in / DFPD: ration cards are issued and updated by the State/UT
//   food & civil supplies department; One Nation One Ration Card lets NFSA
//   card holders lift their entitlement from any fair price shop in the
//   country with Aadhaar biometric authentication, without a new card; state
//   food helpline 1967 in most states. (Same facts as the site's ration-card
//   guide.)
// - Moving permanently to another state needs a card from that state (old
//   card surrendered / name deleted) under that state's rules; forms, fees and
//   timelines differ by state and are not given.
export const rationCardAddressChangeApplication: Letter = {
  slug: "ration-card-address-change-application",
  category: "social",
  emoji: "🏘️",
  title: "Ration Card Address Change Application in Hindi 2026: राशन कार्ड पता बदलने का आवेदन",
  description: "राशन कार्ड में पता या राशन दुकान बदलने का तैयार आवेदन पत्र (हिंदी/English)। किसे दें, कौन से कागज़, वन नेशन वन राशन कार्ड से कहीं भी राशन, हेल्पलाइन 1967।",
  h1: "राशन कार्ड में पता बदलने का आवेदन पत्र 2026",
  short: { hi: "राशन कार्ड पता बदलने का आवेदन", en: "Ration card address change" },
  lead: "मकान बदलने पर राशन कार्ड में नया पता और ज़रूरत हो तो नई <strong>उचित मूल्य दुकान (राशन दुकान)</strong> दर्ज करवाने के लिए राज्य के खाद्य एवं आपूर्ति विभाग को आवेदन दें: कई राज्यों में राज्य खाद्य पोर्टल/CSC से, बाकी जगह <strong>प्रखंड/तहसील आपूर्ति कार्यालय या ज़िला आपूर्ति अधिकारी</strong> को। सिर्फ राशन लेने के लिए पता बदलना ज़रूरी नहीं: <strong>वन नेशन वन राशन कार्ड</strong> से NFSA कार्डधारक देश की किसी भी राशन दुकान से आधार/अंगूठे से अपना हिस्सा ले सकता है।",
  facts: [
    ["किसे दें", "प्रखंड/तहसील आपूर्ति अधिकारी या ज़िला आपूर्ति अधिकारी (राज्य अनुसार)"],
    ["सिर्फ राशन लेना", "ONORC से किसी भी राशन दुकान पर, नया कार्ड नहीं"],
    ["दूसरे राज्य में स्थायी रूप से", "पुराना कार्ड सरेंडर, नए राज्य में नया कार्ड"],
    ["शिकायत", "राज्य खाद्य हेल्पलाइन 1967 (ज़्यादातर राज्यों में)"],
  ],
  to: "जहां अब रहते हैं, उस इलाके के <strong>आपूर्ति निरीक्षक / प्रखंड या तहसील आपूर्ति अधिकारी</strong> को, या शहर में <strong>ज़िला आपूर्ति अधिकारी (DSO)</strong> को। दूसरे ज़िले में गए हों तो कई राज्यों में पुराने और नए दोनों दफ्तर शामिल होते हैं।",
  when: [
    "उसी गांव/शहर में मकान बदला",
    "दूसरे मोहल्ले/वार्ड में जाने से राशन दुकान दूर हो गई",
    "उसी राज्य के दूसरे ज़िले में बस गए",
    "पते में गलती (मकान नंबर, वार्ड, गांव का नाम) सुधारनी है",
  ],
  fields: [
    { key: "office", label: { hi: "दफ्तर का नाम और पता", en: "Office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: ज़िला आपूर्ति अधिकारी, लखनऊ", en: "e.g. District Supply Officer, Lucknow" } },
    { key: "name", label: { hi: "कार्ड के मुखिया का नाम", en: "Head of family (card holder)" }, required: true },
    { key: "card", label: { hi: "राशन कार्ड संख्या", en: "Ration card number" }, required: true },
    { key: "members", label: { hi: "परिवार के सदस्यों की संख्या", en: "Number of family members" }, type: "number" },
    { key: "change", label: { hi: "क्या बदलना है", en: "What to change" }, type: "select", required: true, options: [
      { hi: "पता बदलना और नए पते के पास की राशन दुकान से जोड़ना", en: "change of address and tagging to a fair price shop near the new address" },
      { hi: "सिर्फ पता बदलना (राशन दुकान वही रहे)", en: "change of address only (same fair price shop)" },
      { hi: "पते में गलती सुधारना", en: "correction of error in address" },
    ] },
    { key: "oldaddress", label: { hi: "पुराना पता (कार्ड में दर्ज)", en: "Old address (on card)" }, type: "textarea", required: true },
    { key: "newaddress", label: { hi: "नया/सही पता", en: "New/correct address" }, type: "textarea", required: true },
    { key: "shop", label: { hi: "नई राशन दुकान (पता हो तो नाम/कोड)", en: "Preferred fair price shop (name/code if known)" }, placeholder: { hi: "न पता हो तो खाली छोड़ें", en: "Leave blank if not known" } },
    { key: "proof", label: { hi: "नए पते का प्रमाण", en: "Proof of new address" }, type: "select", required: true, options: [
      { hi: "आधार कार्ड (नए पते वाला)", en: "Aadhaar card (new address)" },
      { hi: "बिजली/पानी बिल", en: "electricity/water bill" },
      { hi: "किरायानामा", en: "rent agreement" },
      { hi: "वोटर ID कार्ड", en: "voter ID card" },
      { hi: "मकान की रसीद/संपत्ति कर रसीद", en: "house/property tax receipt" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: राशन कार्ड संख्या {{card}} में पता बदलने हेतु आवेदन

महोदय/महोदया,

मैं, {{name}}, राशन कार्ड संख्या {{card}} का/की मुखिया हूं। मेरे कार्ड में परिवार के {{members}} सदस्य दर्ज हैं। मेरा अनुरोध है: {{change}}।

कार्ड में दर्ज पुराना पता:
{{oldaddress}}

नया/सही पता:
{{newaddress}}

नई राशन दुकान (यदि लागू): {{shop}}

नए पते के प्रमाण के रूप में {{proof}} की प्रति संलग्न है। मैं घोषणा करता/करती हूं कि मेरे परिवार का देश में कोई अन्य राशन कार्ड नहीं है और ऊपर दी गई जानकारी सही है।

कृपया मेरे राशन कार्ड में पता बदलने की कृपा करें और आवेदन की पावती दें।

धन्यवाद।

प्रार्थी/प्रार्थिनी,

(हस्ताक्षर/अंगूठा)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न: राशन कार्ड की कॉपी, {{proof}} की प्रति, मुखिया का आधार`,
    en: `To,
{{office}}

Subject: Application for change of address in ration card no. {{card}}

Sir/Madam,

I, {{name}}, am the head of family of ration card no. {{card}}. {{members}} family members are listed on my card. My request is: {{change}}.

Old address on the card:
{{oldaddress}}

New/correct address:
{{newaddress}}

Preferred fair price shop (if applicable): {{shop}}

A copy of my {{proof}} is enclosed as proof of the new address. I declare that my family does not hold any other ration card in the country and that the above information is correct.

Kindly change the address on my ration card and give me an acknowledgement of this application.

Thank you.

Yours faithfully,

(Signature/Thumb impression)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures: Copy of ration card, copy of {{proof}}, Aadhaar of head of family`,
  },
  attach: [
    "राशन कार्ड की कॉपी",
    "नए पते का प्रमाण: आधार, बिजली/पानी बिल, किरायानामा, वोटर ID या संपत्ति कर रसीद (राज्य जो माने)",
    "मुखिया का आधार; राज्य का फॉर्म, अगर दफ्तर मांगे",
  ],
  submit: [
    'अपने राज्य का खाद्य पोर्टल खोलें (लिंक <a href="https://nfsa.gov.in/" target="_blank" rel="noopener nofollow">nfsa.gov.in</a> पर); कई राज्यों में पता/दुकान बदलने का ऑनलाइन आवेदन या <a href="/tools/csc-locator.html">CSC</a> से आवेदन होता है।',
    "ऑफलाइन हो तो यह पत्र, राज्य का फॉर्म और कागज़ आपूर्ति कार्यालय में जमा करें और <strong>पावती</strong> लें।",
    "बदलाव होने तक राशन रुकने न दें: NFSA कार्ड हो तो ONORC से नई जगह की किसी भी राशन दुकान पर आधार/अंगूठे से राशन ले सकते हैं।",
    "समय पर काम न हो तो राज्य खाद्य हेल्पलाइन (ज़्यादातर राज्यों में <strong>1967</strong>) पर शिकायत करें या ज़िला आपूर्ति अधिकारी को लिखें।",
  ],
  tips: [
    "दूसरे राज्य में हमेशा के लिए बस गए हों तो पता बदलना नहीं, पुराने राज्य में कार्ड सरेंडर करके नए राज्य में नया कार्ड बनवाना पड़ता है।",
    "पहले आधार में नया पता अपडेट करवा लें; वही प्रमाण हर जगह काम आता है।",
    "पता बदलने के लिए दलाल को पैसे न दें; फीस हो तो सरकारी रसीद लें।",
    "पुराने पते के राशन डीलर से कोई बकाया/विवाद हो तो वह भी लिखित में बता दें।",
  ],
  notice: "हर राज्य का अपना फॉर्म और ऑनलाइन पोर्टल है। कई राज्यों में यह पत्र अकेले काफी नहीं; राज्य का फॉर्म भी भरना पड़ता है।",
  official: [
    { href: "https://nfsa.gov.in/", title: "NFSA पोर्टल", note: "राज्यों के खाद्य विभाग के पोर्टल के लिंक" },
    { href: "https://dfpd.gov.in/", title: "खाद्य एवं सार्वजनिक वितरण विभाग, भारत सरकार" },
  ],
  related: ["/service/ration-card.html", "/service/pm-garib-kalyan-anna-yojana.html", "/service/migrant-worker-registration.html"],
  faq: [
    { q: "राशन कार्ड में पता कैसे बदलें?", a: "राज्य के खाद्य पोर्टल/CSC से ऑनलाइन (जहां सुविधा हो) या आपूर्ति कार्यालय में आवेदन दें, साथ में नए पते का प्रमाण और राशन कार्ड की कॉपी लगाएं।" },
    { q: "दूसरे शहर में रहते हैं, क्या राशन के लिए पता बदलना ज़रूरी है?", a: "नहीं। NFSA कार्ड पर वन नेशन वन राशन कार्ड से देश की किसी भी राशन दुकान पर अपना कार्ड नंबर/आधार बताकर और अंगूठा लगाकर राशन ले सकते हैं।" },
    { q: "दूसरे राज्य में शिफ्ट हो गए, राशन कार्ड का क्या करें?", a: "थोड़े समय के लिए हों तो ONORC से राशन लें। हमेशा के लिए बसे हों तो पुराने राज्य में कार्ड सरेंडर/नाम कटवाकर नए राज्य में नया कार्ड बनवाएं।" },
    { q: "पता बदलने में कितना समय लगता है?", a: "यह राज्य के नियम पर निर्भर है। पावती और आवेदन संख्या रखें और राज्य पोर्टल पर स्टेटस देखें।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
