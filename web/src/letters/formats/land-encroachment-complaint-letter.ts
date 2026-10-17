import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Bharatiya Nyaya Sanhita 2023 s.329: criminal trespass (up to 3 months
//   and/or fine up to Rs 5,000) and house-trespass (up to 1 year) (devgan.in
//   BNS text).
// - Bharatiya Nagarik Suraksha Sanhita 2023 s.164 (old CrPC s.145): where a
//   dispute concerning land/water or its boundaries is likely to cause a
//   breach of the peace, the Executive Magistrate (SDM) can enquire into
//   actual possession (not title) (lexibal / prashantkanha BNSS text).
// - State land revenue laws let the Tehsildar evict encroachers on
//   government/public land (e.g. UP Revenue Code 2006 s.67, Allahabad HC
//   cases); possession disputes on private land go to civil court
//   (injunction) or revenue court.
// - BNSS s.173 FIR; if police refuse, complaint to SP (s.173(4)) or
//   Magistrate (s.175(3)) - covered in the existing FIR/SP letter.
export const landEncroachmentComplaintLetter: Letter = {
  slug: "land-encroachment-complaint-letter",
  category: "land",
  emoji: "🚧",
  title: "Land Encroachment Complaint in Hindi 2026: ज़मीन पर अवैध कब्ज़ा शिकायत",
  description: "ज़मीन पर अवैध कब्ज़े की शिकायत का पत्र (हिंदी/English): तहसीलदार/SDM या थाने को। BNS धारा 329, BNSS धारा 164, कागज़ और आगे का रास्ता।",
  h1: "ज़मीन पर अवैध कब्ज़े की शिकायत का पत्र 2026",
  short: { hi: "अवैध कब्ज़ा शिकायत", en: "Land encroachment complaint" },
  lead: "आपकी ज़मीन या मकान पर कोई ज़बरदस्ती कब्ज़ा करे, दीवार/मेड़ खिसकाए या निर्माण करे तो <strong>तहसीलदार/SDM</strong> को शिकायत दें; धमकी या ज़बरदस्ती घुसने का मामला हो तो <strong>थाने</strong> में भी। ज़बरदस्ती घुसना <strong>भारतीय न्याय संहिता (BNS) की धारा 329</strong> (आपराधिक अतिचार) में अपराध है। झगड़े से शांति भंग होने का खतरा हो तो SDM <strong>BNSS की धारा 164</strong> में कब्ज़े की जांच कर सकते हैं। मालिकाना हक का अंतिम फैसला राजस्व/सिविल कोर्ट करता है।",
  facts: [
    ["किसे दें", "तहसीलदार / SDM; अपराध हो तो थाना प्रभारी"],
    ["अपराध", "BNS धारा 329: आपराधिक अतिचार"],
    ["शांति भंग का खतरा", "BNSS धारा 164: SDM की कार्यवाही"],
    ["सरकारी ज़मीन पर कब्ज़ा", "तहसीलदार (राज्य का भू-राजस्व कानून)"],
  ],
  to: "ज़मीन वाली तहसील के <strong>तहसीलदार या उप-ज़िला मजिस्ट्रेट (SDM)</strong> को; मारपीट, धमकी या ज़बरदस्ती घुसने पर इलाके के <strong>थाना प्रभारी (SHO)</strong> को भी। एक ही पत्र दोनों को दे सकते हैं, बस \"सेवा में\" बदलें।",
  when: [
    "पड़ोसी या कोई और आपकी ज़मीन पर मेड़/दीवार खिसकाकर कब्ज़ा कर रहा है",
    "खाली प्लॉट या खेत पर बिना अनुमति निर्माण या खेती की जा रही है",
    "ज़मीन से हटाने के लिए धमकी या ज़बरदस्ती की जा रही है",
    "सरकारी/सार्वजनिक ज़मीन (रास्ता, चरागाह, तालाब) पर कब्ज़ा हुआ है",
  ],
  fields: [
    { key: "to", label: { hi: "किसे दे रहे हैं", en: "Addressed to" }, type: "select", required: true, options: [
      { hi: "तहसीलदार", en: "Tehsildar" },
      { hi: "उप-ज़िला मजिस्ट्रेट (SDM)", en: "Sub-Divisional Magistrate (SDM)" },
      { hi: "थाना प्रभारी", en: "Station House Officer" },
    ] },
    { key: "office", label: { hi: "तहसील/थाना और ज़िला", en: "Tehsil/police station and district" }, required: true },
    { key: "name", label: { hi: "आपका नाम", en: "Your name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "land", label: { hi: "ज़मीन का विवरण", en: "Land details" }, type: "textarea", required: true, placeholder: { hi: "गांव, खाता/खसरा/गाटा संख्या, रकबा, चौहद्दी", en: "Village, khata/khasra no., area, boundaries" } },
    { key: "accused", label: { hi: "कब्ज़ा करने वाले का नाम-पता (पता हो तो)", en: "Encroacher's name and address (if known)" } },
    { key: "incident", label: { hi: "क्या हुआ (तारीख के साथ)", en: "What happened (with dates)" }, type: "textarea", required: true, placeholder: { hi: "जैसे: 10/10/2026 को ___ ने मेड़ तोड़कर 2 बिस्वा पर कब्ज़ा किया और रोकने पर धमकी दी", en: "e.g. On 10/10/2026 ___ broke the boundary and occupied 2 biswa, and threatened me when I objected" } },
    { key: "proof", label: { hi: "आपके पास क्या सबूत हैं", en: "Your evidence" }, type: "textarea", placeholder: { hi: "जैसे: खतौनी, बैनामा, फोटो/वीडियो, गवाह", en: "e.g. khatauni, sale deed, photos/videos, witnesses" } },
    { key: "address", label: { hi: "आपका पता", en: "Your address" }, type: "textarea", required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान {{to}} महोदय,
{{office}}

विषय: मेरी भूमि पर अवैध कब्ज़ा करने के संबंध में शिकायत एवं कार्रवाई हेतु प्रार्थना पत्र

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पत्नी श्री {{father}}, निवासी {{address}}, निम्न भूमि का अभिलेखीय खातेदार/स्वामी हूं और इस पर मेरा शांतिपूर्ण कब्ज़ा रहा है:
{{land}}

{{accused}} द्वारा मेरी उक्त भूमि पर अवैध रूप से कब्ज़ा किया जा रहा है। घटना का विवरण इस प्रकार है:
{{incident}}

मेरे स्वामित्व और कब्ज़े के समर्थन में निम्न सबूत संलग्न हैं:
{{proof}}

इस कारण मुझे और मेरे परिवार को नुकसान और जान-माल का खतरा है, तथा शांति भंग होने की आशंका है।

अतः आपसे प्रार्थना है कि:
1. मौके की जांच राजस्व निरीक्षक/लेखपाल और पुलिस से कराई जाए;
2. अवैध कब्ज़ा हटवाकर मेरी भूमि पर मेरा कब्ज़ा सुरक्षित किया जाए;
3. दोषी व्यक्ति के विरुद्ध कानून के अनुसार (BNS धारा 329 तथा अन्य लागू धाराओं में) कार्रवाई की जाए और ज़रूरत हो तो BNSS धारा 164 के तहत कार्यवाही की जाए।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. खतौनी/भू-अभिलेख की नकल
2. बैनामा/रजिस्ट्री/नामांतरण आदेश की प्रति
3. कब्ज़े की फोटो/वीडियो (प्रिंट/पेन ड्राइव)
4. नक्शा/पैमाइश रिपोर्ट (यदि हो)
5. पहचान पत्र`,
    en: `To,
The {{to}},
{{office}}

Subject: Complaint regarding illegal encroachment on my land and request for action

Sir/Madam,

I, {{name}}, son/wife of Shri {{father}}, resident of {{address}}, am the recorded holder/owner of the following land and have been in peaceful possession of it:
{{land}}

{{accused}} is illegally encroaching upon my said land. The details of the incident are as follows:
{{incident}}

The following evidence of my ownership and possession is enclosed:
{{proof}}

Because of this, my family and I face loss and a threat to life and property, and there is apprehension of a breach of the peace.

I therefore request you kindly:
1. to get the spot inspected by the Revenue Inspector/Lekhpal and the police;
2. to remove the illegal encroachment and secure my possession of the land;
3. to take action against the wrongdoer as per law (under Section 329 BNS and other applicable sections) and, if needed, initiate proceedings under Section 164 BNSS.

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of khatauni/land record
2. Copy of sale deed/registry/mutation order
3. Photos/videos of the encroachment (print/pen drive)
4. Map/measurement report (if any)
5. Identity proof`,
  },
  attach: [
    "ताज़ा खतौनी/जमाबंदी/7-12 की नकल जिसमें आपका नाम हो",
    "बैनामा/रजिस्ट्री, विरासत/नामांतरण आदेश",
    "कब्ज़े या निर्माण की तारीख वाली फोटो/वीडियो; गवाहों के नाम",
    "पहले की पैमाइश/सीमांकन रिपोर्ट या नक्शा (सीमा विवाद में बहुत काम आता है)",
  ],
  submit: [
    "तहसील दिवस/संपूर्ण समाधान दिवस या तहसीलदार/SDM कार्यालय में पत्र जमा करें और रिसीविंग लें; कई राज्यों में जनसुनवाई पोर्टल/CM हेल्पलाइन पर ऑनलाइन भी शिकायत होती है।",
    "धमकी, मारपीट या ज़बरदस्ती घुसने पर तुरंत <strong>112</strong> पर कॉल करें और थाने में लिखित शिकायत देकर FIR की मांग करें।",
    'थाना FIR न लिखे तो SP को शिकायत भेजें: <a href="/arzi/fir-not-registered-complaint-sp.html">SP को शिकायत का फॉर्मेट</a>।',
    "सीमा साफ न हो तो पहले <a href=\"/arzi/land-demarcation-application.html\">सीमांकन (नापजोख) का आवेदन</a> दें; पैमाइश रिपोर्ट से कब्ज़ा साबित होता है।",
    "निजी ज़मीन पर कब्ज़ा न हटे तो सिविल कोर्ट में स्थायी निषेधाज्ञा (injunction)/कब्ज़ा वापसी का मुकदमा करें; मुफ्त वकील के लिए ज़िला विधिक सेवा प्राधिकरण (हेल्पलाइन 15100)।",
  ],
  tips: [
    "खुद ज़बरदस्ती कब्ज़ा हटाने या मारपीट न करें; उल्टा आप पर केस हो सकता है।",
    "हर शिकायत की रिसीविंग और तारीख संभालें; बाद में अदालत में काम आती है।",
    "कब्ज़ा होते ही जल्दी शिकायत करें; लंबे समय तक चुप रहने से मामला कमज़ोर होता है।",
    "ज़मीन बेचने/खरीदने में भी खतौनी और मौके का कब्ज़ा दोनों जांचें।",
  ],
  notice: "पुलिस और SDM कब्ज़े और शांति व्यवस्था पर कार्रवाई करते हैं, पर <strong>मालिकाना हक का फैसला</strong> राजस्व न्यायालय या सिविल कोर्ट ही करता है। राज्य के कानून और धाराएं अलग हैं; वकील से सलाह लें।",
  official: [
    { href: "https://nalsa.gov.in/", title: "NALSA", note: "मुफ्त कानूनी सहायता" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "BNS 2023, BNSS 2023" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS", note: "सरकारी विभाग की शिकायत" },
  ],
  related: ["/support/helpline-directory.html", "/support/rti-guide.html", "/service/mh-712-extract.html"],
  faq: [
    { q: "ज़मीन पर अवैध कब्ज़े की शिकायत कहां करें?", a: "तहसीलदार या SDM को लिखित शिकायत दें; धमकी या ज़बरदस्ती हो तो थाने में भी। कई राज्यों में जनसुनवाई/CM हेल्पलाइन पोर्टल पर ऑनलाइन शिकायत होती है।" },
    { q: "अवैध कब्ज़े पर कौन सी धारा लगती है?", a: "ज़बरदस्ती घुसना भारतीय न्याय संहिता 2023 की धारा 329 (आपराधिक अतिचार) में आता है। धोखाधड़ी, धमकी या मारपीट हो तो अन्य धाराएं भी लगती हैं।" },
    { q: "SDM ज़मीन के झगड़े में क्या कर सकते हैं?", a: "अगर विवाद से शांति भंग होने का खतरा है, तो BNSS 2023 की धारा 164 (पुरानी CrPC 145) के तहत SDM जांच करके तय कर सकते हैं कि असल कब्ज़ा किसका है, जब तक अदालत फैसला न करे।" },
    { q: "सरकारी ज़मीन पर कब्ज़े की शिकायत कैसे करें?", a: "तहसीलदार को लिखित शिकायत दें; राज्य के भू-राजस्व कानून में तहसीलदार को बेदखली का अधिकार है (जैसे UP में धारा 67)।" },
    { q: "कब्ज़ा न हटे तो क्या करें?", a: "सिविल कोर्ट में निषेधाज्ञा या कब्ज़ा वापसी का मुकदमा करें। गरीब, महिला, SC/ST और कई अन्य लोगों को ज़िला विधिक सेवा प्राधिकरण से मुफ्त वकील मिलता है।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
