import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Building permission (sanctioned map), set-backs, floors and completion /
//   occupancy certificate are governed by each State's municipal corporation
//   / municipalities / urban planning and development Act and building
//   bye-laws; enforcement lies with the municipal building department or the
//   development authority. Section numbers differ by state, so none is cited.
// - Supreme Court, Rajendra Kumar Barjatya v. U.P. Avas Evam Vikas Parishad,
//   2024 INSC 990 (17 Dec 2024; LiveLaw, Verdictum): approved plan to be
//   displayed at site during construction; completion/occupation certificate
//   only after verifying compliance with the approved plan; utility
//   connections (electricity, water, sewerage) only on production of the
//   completion certificate; banks to verify completion certificate before
//   lending; departmental action against officials who grant wrongful
//   permission; violation of directions = contempt. Reaffirmed April 2025.
// - Supreme Court, In re: Directions in the matter of demolition of
//   structures (13 Nov 2024; Deccan Herald, Onmanorama, Scroll): no
//   demolition without at least 15 days' show-cause notice by registered
//   post and pasted on the structure, personal hearing and reasoned order;
//   not applicable to encroachments on public places (roads, footpaths,
//   railway lines, water bodies) or where a court has ordered demolition.
export const illegalConstructionComplaintLetter: Letter = {
  slug: "illegal-construction-complaint-letter",
  category: "municipal",
  emoji: "🏗️",
  title: "Illegal Construction Complaint Letter Hindi 2026: अवैध निर्माण शिकायत",
  description: "बिना नक्शा पास, नक्शे से ज़्यादा मंज़िल या सरकारी ज़मीन/रास्ते पर अवैध निर्माण की शिकायत नगर निगम/विकास प्राधिकरण को (हिंदी/English)। सुप्रीम कोर्ट 2024 निर्देश",
  h1: "अवैध निर्माण की शिकायत पत्र 2026: नगर निगम / विकास प्राधिकरण को लिखें",
  short: { hi: "अवैध निर्माण की शिकायत", en: "Illegal construction complaint" },
  lead: "शहर में मकान/दुकान बनाने के लिए <strong>नगर निगम या विकास प्राधिकरण से नक्शा (बिल्डिंग प्लान) पास</strong> कराना ज़रूरी है। कोई बिना नक्शे के, नक्शे से ज़्यादा मंज़िल/हिस्सा, या सरकारी ज़मीन, नाली, रास्ते पर निर्माण कर रहा हो, तो उस निकाय के <strong>भवन/प्रवर्तन विभाग</strong> को लिखित शिकायत करें। सुप्रीम कोर्ट ने <strong>दिसंबर 2024</strong> (राजेंद्र कुमार बड़जात्या केस) में कहा कि अवैध निर्माण पर सख्त कार्रवाई हो और गलत अनुमति देने वाले अधिकारियों पर भी कार्रवाई हो।",
  facts: [
    ["किसे दें", "नगर आयुक्त / विकास प्राधिकरण के उपाध्यक्ष; भवन/प्रवर्तन विभाग"],
    ["कानून", "राज्य का नगर निगम/विकास प्राधिकरण अधिनियम और भवन उपविधि"],
    ["सुप्रीम कोर्ट", "2024 INSC 990 (17 दिसंबर 2024): पूर्णता प्रमाण पत्र के बिना बिजली-पानी कनेक्शन नहीं"],
    ["कार्रवाई से पहले", "मालिक को 15 दिन का नोटिस और सुनवाई (नवंबर 2024 के निर्देश)"],
  ],
  to: "जिस इलाके में निर्माण हो रहा है, वहां नक्शा पास करने वाली संस्था को: <strong>नगर आयुक्त (नगर निगम)</strong>, <strong>अधिशासी अधिकारी (नगर पालिका)</strong>, या <strong>विकास प्राधिकरण के उपाध्यक्ष/सचिव</strong> (जैसे LDA, GDA, DDA)। कॉपी उस ज़ोन के <strong>अवर/सहायक अभियंता (प्रवर्तन)</strong> को दें।",
  when: [
    "पड़ोस में बिना नक्शा पास कराए मकान/दुकान बन रही है",
    "नक्शे से ज़्यादा मंज़िल, आगे-पीछे की खाली जगह (सेटबैक) पर कब्ज़ा",
    "सड़क, नाली, पार्क या सरकारी ज़मीन पर कब्ज़ा करके निर्माण",
    "रिहायशी इलाके में बिना अनुमति व्यावसायिक निर्माण, जिससे रास्ता/धूप/हवा रुक रही है",
  ],
  fields: [
    { key: "office", label: { hi: "अधिकारी का पद और कार्यालय का पता", en: "Officer's designation and office address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: उपाध्यक्ष, लखनऊ विकास प्राधिकरण, लखनऊ", en: "e.g. Vice Chairman, Lucknow Development Authority" } },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "site", label: { hi: "अवैध निर्माण की जगह (पूरा पता, प्लॉट नं., लैंडमार्क)", en: "Site of illegal construction (full address, plot no., landmark)" }, type: "textarea", required: true },
    { key: "owner", label: { hi: "निर्माण कराने वाले का नाम (पता हो तो)", en: "Name of person building (if known)" }, placeholder: { hi: "जैसे: श्री ___ / अज्ञात", en: "e.g. Mr ___ / unknown" } },
    { key: "type", label: { hi: "किस तरह का अवैध निर्माण", en: "Type of illegal construction" }, type: "select", required: true, options: [
      { hi: "बिना नक्शा पास कराए निर्माण किया जा रहा है", en: "construction is being done without a sanctioned building plan" },
      { hi: "स्वीकृत नक्शे से अधिक मंज़िल/क्षेत्र में निर्माण किया जा रहा है", en: "construction exceeds the sanctioned plan (extra floors/area)" },
      { hi: "सड़क/नाली/पार्क/सरकारी भूमि पर कब्ज़ा कर निर्माण किया जा रहा है", en: "construction is being done by encroaching on road/drain/park/public land" },
      { hi: "रिहायशी भूखंड पर बिना अनुमति व्यावसायिक निर्माण किया जा रहा है", en: "commercial construction is being done on a residential plot without permission" },
    ] },
    { key: "details", label: { hi: "विवरण (कब से, कितनी मंज़िल, किस पर असर)", en: "Details (since when, floors, impact)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: सितंबर 2026 से तीसरी मंज़िल बन रही है, नाली पर सीढ़ी बना दी, बरसात में पानी भर रहा है", en: "e.g. Third floor being built since Sept 2026, stairs built over the drain, water-logging in rain" } },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: {{site}} पर हो रहे अवैध निर्माण के विरुद्ध शिकायत।

महोदय/महोदया,

मैं, {{name}}, निवासी {{address}}, आपको सूचित करना चाहता/चाहती हूं कि {{site}} पर {{owner}} द्वारा {{type}}।

विवरण:
{{details}}

यह निर्माण भवन उपविधि और नियोजन नियमों के विरुद्ध है तथा इससे आसपास के निवासियों के रास्ते, सुरक्षा और सुविधाओं पर बुरा असर पड़ रहा है। माननीय सर्वोच्च न्यायालय ने राजेंद्र कुमार बड़जात्या बनाम उ.प्र. आवास एवं विकास परिषद (2024 INSC 990) में अवैध निर्माण पर सख्त कार्रवाई के निर्देश दिए हैं।

अतः आपसे निवेदन है कि:
1. मौके का तुरंत निरीक्षण कराकर यह जांचें कि निर्माण का नक्शा स्वीकृत है या नहीं और निर्माण उसके अनुसार है या नहीं;
2. अवैध पाए जाने पर निर्माण कार्य तुरंत रुकवाएं और नियमानुसार कार्रवाई करें;
3. सरकारी भूमि/रास्ते पर हुआ कब्ज़ा हटवाएं;
4. की गई कार्रवाई की लिखित सूचना मुझे दें।

मेरी पहचान गोपनीय रखी जाए तो आभारी रहूंगा/रहूंगी।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

संलग्न: निर्माण की तारीख सहित फोटो/वीडियो, नक्शा/लोकेशन, (उपलब्ध हो तो) स्वीकृत नक्शे की RTI से मिली कॉपी

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Complaint against illegal construction at {{site}}.

Sir/Madam,

I, {{name}}, resident of {{address}}, wish to inform you that at {{site}}, by {{owner}}, {{type}}.

Details:
{{details}}

This construction violates the building bye-laws and planning rules and is adversely affecting the access, safety and amenities of nearby residents. The Hon'ble Supreme Court in Rajendra Kumar Barjatya v. U.P. Avas Evam Vikas Parishad (2024 INSC 990) has directed strict action against unauthorised construction.

I therefore request you to:
1. Inspect the site immediately and check whether the building plan is sanctioned and whether the construction conforms to it;
2. If found illegal, stop the construction immediately and take action as per rules;
3. Remove any encroachment on public land/road;
4. Inform me in writing of the action taken.

I would be grateful if my identity is kept confidential.

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Enclosures: dated photos/videos of the construction, location map, copy of sanctioned plan obtained through RTI (if available)

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "निर्माण की फोटो/वीडियो, जिन पर तारीख दिखे (अलग-अलग दिनों की, ताकि बढ़ता निर्माण दिखे)",
    "जगह का नक्शा या Google Maps लोकेशन का प्रिंट",
    "अगर RTI से स्वीकृत नक्शे की कॉपी मिली हो तो उसकी कॉपी",
    "पड़ोसियों के हस्ताक्षर (सामूहिक शिकायत ज़्यादा असर करती है)",
  ],
  submit: [
    "अपने नगर निगम/विकास प्राधिकरण का ऑनलाइन शिकायत पोर्टल या ऐप हो तो वहां फोटो के साथ शिकायत दर्ज करें और शिकायत संख्या लें।",
    "यह पत्र प्राधिकरण/निगम के कार्यालय (ज़ोनल कार्यालय) में जमा करें और रिसीविंग लें, या रजिस्टर्ड डाक से भेजें।",
    "कार्रवाई न हो तो <strong>RTI</strong> से पूछें कि उस प्लॉट का नक्शा पास है या नहीं और आपकी शिकायत पर क्या कार्रवाई हुई।",
    "फिर ज़िलाधिकारी/मंडलायुक्त, राज्य की CM हेल्पलाइन या जन शिकायत पोर्टल पर शिकायत करें; गंभीर मामलों में वकील के ज़रिए हाई कोर्ट जाया जा सकता है।",
  ],
  tips: [
    "शिकायत तथ्यों पर रखें: कौन-सी मंज़िल, कितना हिस्सा, कब से; निजी दुश्मनी वाली भाषा न लिखें।",
    "निर्माण शुरुआत में ही शिकायत करें; पूरा बनने के बाद कार्रवाई में ज़्यादा समय लगता है।",
    "किसी भी कार्रवाई से पहले निर्माण करने वाले को नोटिस और सुनवाई का मौका मिलता है; इसलिए जवाब में कुछ हफ्ते लग सकते हैं।",
    "दो पड़ोसियों के बीच दीवार/ज़मीन की सीमा का विवाद हो तो वह राजस्व/सिविल अदालत का मामला भी हो सकता है; पहले नाप (पैमाइश) करवा लें।",
  ],
  official: [
    { href: "https://www.sci.gov.in/", title: "सुप्रीम कोर्ट ऑफ इंडिया", note: "2024 INSC 990 का फैसला" },
  ],
  related: ["/service/municipal-property-tax.html", "/support/rti-guide.html"],
  faq: [
    { q: "अवैध निर्माण की शिकायत कहां करें?", a: "जो संस्था उस इलाके में नक्शा पास करती है: नगर निगम/नगर पालिका का भवन या प्रवर्तन विभाग, या विकास प्राधिकरण (जैसे LDA, DDA)। ऑनलाइन पोर्टल और लिखित पत्र दोनों से।" },
    { q: "क्या शिकायत करने वाले का नाम गुप्त रहता है?", a: "पत्र में नाम गोपनीय रखने का निवेदन कर सकते हैं, पर कानूनन इसकी गारंटी नहीं है। सामूहिक शिकायत करना बेहतर है।" },
    { q: "अवैध निर्माण पर कितने दिन में कार्रवाई होती है?", a: "पहले जांच होती है, फिर मालिक को नोटिस (सुप्रीम कोर्ट के 2024 निर्देशों में तोड़फोड़ से पहले कम से कम 15 दिन) और सुनवाई। इसलिए कुछ हफ्ते लग सकते हैं; सार्वजनिक सड़क/नाली पर कब्ज़े पर यह नोटिस नियम लागू नहीं होता।" },
    { q: "कैसे पता करें कि पड़ोसी का नक्शा पास है या नहीं?", a: "नगर निगम/विकास प्राधिकरण में RTI लगाकर उस प्लॉट के स्वीकृत नक्शे की प्रमाणित कॉपी मांगें। कई प्राधिकरणों के पोर्टल पर स्वीकृत नक्शों की सूची भी होती है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
