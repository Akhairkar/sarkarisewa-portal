import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Electricity (Rights of Consumers) Rules, 2020 (gazette copy on
//   merc.gov.in; legitquest text): licensee must publish detailed procedure,
//   documents and charges for change in name and transfer of ownership; forms
//   free at local offices and on the website; online application facility.
// - Electricity (Rights of Consumers) Amendment Rules, 2024 (notified
//   22.02.2024; SCC Online / India Environment Portal): modification in an
//   existing connection within 3 days (metro), 7 days (other municipal
//   areas), 15 days (rural), 30 days (rural hilly areas) after a complete
//   application; "owner" includes legal heirs.
// - Tripura Electricity Supply Code notification (tsecl.in, 25.04.2024) as an
//   example: connection may be transferred to another person on death of the
//   consumer or transfer of ownership/occupancy using the change-of-name form.
// - Electricity Act 2003 s.42(5) CGRF, s.42(6) Ombudsman.
// Fees and the exact documents are set by each state supply code / DISCOM;
// arrears on the old connection usually have to be cleared (asked, not
// stated as a national rule).
export const electricityNameChangeApplication: Letter = {
  slug: "electricity-name-change-application",
  category: "utility",
  emoji: "🔌",
  title: "Electricity Name Change Application in Hindi 2026: बिजली बिल नाम बदलें",
  description: "बिजली कनेक्शन/बिल में नाम बदलने का आवेदन पत्र (हिंदी/English): मकान खरीदने या मालिक की मृत्यु पर। ज़रूरी दस्तावेज़, समय सीमा और शिकायत का रास्ता।",
  h1: "बिजली कनेक्शन नाम परिवर्तन आवेदन पत्र 2026",
  short: { hi: "बिजली बिल में नाम बदलना", en: "Electricity name change" },
  lead: "मकान खरीदने, विरासत में मिलने या कनेक्शन धारक की मृत्यु होने पर बिजली कनेक्शन नए मालिक/वारिस के नाम करवाने के लिए DISCOM के <strong>उपखंड अधिकारी (SDO) / सहायक अभियंता</strong> को आवेदन दिया जाता है। बिजली उपभोक्ता अधिकार नियम 2020 के तहत कंपनी को नाम बदलने की प्रक्रिया, दस्तावेज़ और शुल्क सार्वजनिक करने होते हैं, और 2024 संशोधन के अनुसार पूरा आवेदन मिलने पर मौजूदा कनेक्शन में बदलाव <strong>शहर में 3–7 दिन और गांव में 15 दिन</strong> में होना चाहिए।",
  facts: [
    ["किसे दें", "DISCOM के उपखंड कार्यालय के SDO / सहायक अभियंता"],
    ["समय सीमा", "पूरा आवेदन मिलने के बाद: महानगर 3 दिन, शहर 7 दिन, गांव 15 दिन, पहाड़ी गांव 30 दिन"],
    ["फीस", "नाम बदलने का शुल्क राज्य/DISCOM तय करती है; दफ्तर से पूछें"],
    ["शिकायत", "DISCOM शिकायत अधिकारी → CGRF फोरम → विद्युत लोकपाल"],
  ],
  to: "जिस सब-डिवीजन का बिल आता है, उस DISCOM कार्यालय के <strong>उपखंड अधिकारी (SDO) / सहायक अभियंता (राजस्व)</strong> को। दफ्तर का नाम आपके बिजली बिल पर छपा होता है।",
  when: [
    "मकान/दुकान खरीदी है और बिजली बिल अब भी पुराने मालिक के नाम आ रहा है",
    "कनेक्शन धारक (पिता, माता, पति आदि) की मृत्यु के बाद वारिस के नाम करवाना हो",
    "परिवार में बंटवारे या दान (गिफ्ट डीड) से संपत्ति आपके नाम हुई हो",
    "बिल में नाम की स्पेलिंग गलत हो (कई DISCOM इसे अलग 'नाम सुधार' मानती हैं)",
  ],
  fields: [
    { key: "office", label: { hi: "बिजली दफ्तर का नाम और पता", en: "Electricity office name and address" }, type: "textarea", required: true, placeholder: { hi: "जैसे: उपखंड अधिकारी, विद्युत वितरण उपखंड, सिविल लाइंस, बरेली", en: "e.g. SDO, Electricity Distribution Sub-Division, Civil Lines, Bareilly" } },
    { key: "consumer", label: { hi: "उपभोक्ता / खाता संख्या (बिल से)", en: "Consumer / account number (from bill)" }, required: true },
    { key: "oldname", label: { hi: "अभी किसके नाम है", en: "Present name on connection" }, required: true },
    { key: "name", label: { hi: "नया नाम (आपका नाम)", en: "New name (your name)" }, required: true },
    { key: "father", label: { hi: "पिता / पति का नाम", en: "Father's / husband's name" } },
    { key: "address", label: { hi: "कनेक्शन वाले परिसर का पता", en: "Address of the premises" }, type: "textarea", required: true },
    { key: "reason", label: { hi: "नाम बदलने का कारण", en: "Reason for change" }, type: "select", options: [
      { hi: "मैंने यह संपत्ति खरीदी है; रजिस्ट्री (सेल डीड) की कॉपी संलग्न है", en: "I have purchased the property; copy of sale deed enclosed" },
      { hi: "कनेक्शन धारक की मृत्यु हो गई है; मैं कानूनी वारिस हूं, मृत्यु प्रमाण पत्र और वारिस प्रमाण संलग्न हैं", en: "The consumer has died; I am the legal heir, death certificate and heirship proof enclosed" },
      { hi: "बंटवारे / गिफ्ट डीड से संपत्ति मेरे नाम हुई है; दस्तावेज़ संलग्न है", en: "The property came to me by partition / gift deed; document enclosed" },
      { hi: "पुराने धारक की लिखित सहमति से (सहमति पत्र संलग्न)", en: "With written consent of the present holder (consent letter enclosed)" },
    ] },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
{{office}}

विषय: बिजली कनेक्शन उपभोक्ता संख्या {{consumer}} में नाम परिवर्तन हेतु आवेदन।

महोदय/महोदया,

सविनय निवेदन है कि नीचे लिखे परिसर का बिजली कनेक्शन (उपभोक्ता संख्या {{consumer}}) अभी श्री/श्रीमती {{oldname}} के नाम पर है:
{{address}}

{{reason}}। अब इस परिसर का कब्ज़ा और उपयोग मेरे पास है।

अतः निवेदन है कि उक्त कनेक्शन का नाम {{oldname}} के स्थान पर मेरे नाम {{name}}, पुत्र/पुत्री/पत्नी {{father}}, पर दर्ज करने की कृपा करें। इस कनेक्शन पर यदि कोई बकाया है तो उसकी जानकारी दें; मैं नियमानुसार नाम परिवर्तन शुल्क और आवश्यक सिक्योरिटी जमा करने को तैयार हूं। कृपया आवेदन की पावती/आवेदन संख्या दें।

संलग्न:
1. नवीनतम बिजली बिल और भुगतान रसीद की कॉपी
2. मालिकाना / वारिस होने का प्रमाण (ऊपर लिखे अनुसार)
3. मेरे पहचान प्रमाण (आधार / वोटर कार्ड) की स्व-प्रमाणित कॉपी
4. पासपोर्ट साइज़ फोटो

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}`,
    en: `To,
{{office}}

Subject: Application for change of name in electricity connection, consumer no. {{consumer}}.

Sir/Madam,

The electricity connection (consumer no. {{consumer}}) at the following premises is at present in the name of Mr/Ms {{oldname}}:
{{address}}

{{reason}}. The premises are now in my possession and use.

I therefore request you to change the name on this connection from {{oldname}} to my name, {{name}}, son/daughter/wife of {{father}}. Kindly inform me of any dues on this connection; I am ready to pay the name change fee and security as per rules. Please give me an acknowledgement / application number.

Enclosures:
1. Copy of latest electricity bill and payment receipt
2. Proof of ownership / legal heirship (as stated above)
3. Self-attested copy of my identity proof (Aadhaar / Voter ID)
4. Passport size photograph

Yours faithfully,

(Signature)
Name: {{name}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}`,
  },
  attach: [
    "नवीनतम बिजली बिल और उसकी भुगतान रसीद (बकाया न हो तो काम जल्दी होता है)",
    "खरीद पर: रजिस्ट्री/सेल डीड की कॉपी; विरासत पर: मृत्यु प्रमाण पत्र और वारिस प्रमाण पत्र / बाकी वारिसों का अनापत्ति शपथ पत्र",
    "नए नाम वाले व्यक्ति का पहचान प्रमाण और फोटो",
    "कई DISCOM नोटरी शपथ पत्र (इंडेम्निटी बॉन्ड) भी मांगती हैं; दफ्तर से पूछें",
  ],
  submit: [
    "अपनी DISCOM की वेबसाइट/ऐप पर \"Change of Name / Name Transfer\" सेवा देखें; कई राज्यों में यह ऑनलाइन होता है।",
    "ऑफलाइन हो तो यह पत्र, DISCOM का फॉर्म और दस्तावेज़ उपखंड कार्यालय में जमा करें और पावती लें।",
    "बताया गया नाम परिवर्तन शुल्क/सिक्योरिटी रसीद लेकर जमा करें; अगले बिल में नया नाम देखें।",
    "तय समय में काम न हो तो DISCOM शिकायत अधिकारी, फिर <strong>CGRF फोरम</strong>, फिर <strong>विद्युत लोकपाल</strong> के पास जाएं।",
  ],
  tips: [
    "पहले पुराना बकाया चुका दें; बकाया रहने पर ज़्यादातर जगह नाम नहीं बदलता।",
    "वारिस के मामले में बाकी वारिसों की सहमति लगाएं, वरना आपत्ति आ सकती है।",
    "नाम बदलने से मीटर की जगह नहीं बदलती; मीटर शिफ्ट के लिए अलग आवेदन देना होता है।",
    "आवेदन और रसीदों की कॉपी संभाल कर रखें।",
  ],
  notice: "नाम बदलने का शुल्क, फॉर्म और दस्तावेज़ हर राज्य की बिजली कंपनी अलग तय करती है। कई कंपनियां अपना फॉर्म या ऑनलाइन आवेदन ही मानती हैं; यह पत्र उसके साथ लगाया जा सकता है।",
  official: [
    { href: "https://powermin.gov.in/", title: "विद्युत मंत्रालय (Ministry of Power)", note: "बिजली उपभोक्ता अधिकार नियम" },
  ],
  related: ["/service/sub-divisional-electricity-meter-shift.html", "/service/electricity-connection-bill.html", "/service/death-certificate.html"],
  faq: [
    { q: "बिजली बिल में नाम कैसे बदलें?", a: "DISCOM की वेबसाइट/ऐप पर नाम परिवर्तन सेवा में या उपखंड कार्यालय में आवेदन दें। साथ में ताज़ा बिल, मालिकाना या वारिस होने का प्रमाण और पहचान पत्र लगाएं, फिर तय शुल्क जमा करें।" },
    { q: "पिता की मृत्यु के बाद बिजली बिल अपने नाम कैसे करें?", a: "मृत्यु प्रमाण पत्र, वारिस प्रमाण पत्र या बाकी वारिसों की अनापत्ति और अपना पहचान पत्र लगाकर नाम परिवर्तन का आवेदन दें। 2024 संशोधन नियमों में 'मालिक' की परिभाषा में कानूनी वारिस शामिल हैं।" },
    { q: "नाम बदलने में कितना समय लगता है?", a: "पूरा आवेदन मिलने के बाद मौजूदा कनेक्शन में बदलाव महानगर में 3 दिन, अन्य शहरों में 7 दिन और गांव में 15 दिन (पहाड़ी गांव 30 दिन) में होना चाहिए।" },
    { q: "बिजली नाम परिवर्तन की फीस कितनी है?", a: "यह राज्य के सप्लाई कोड और DISCOM की दर सूची से तय होती है। सही राशि दफ्तर या कंपनी की वेबसाइट से पूछें।" },
    { q: "किरायेदार अपने नाम बिल करवा सकता है?", a: "नाम परिवर्तन आम तौर पर मालिक या वारिस के लिए होता है। किरायेदार को मकान मालिक की लिखित सहमति से अलग कनेक्शन लेना पड़ता है; नियम DISCOM के हिसाब से अलग हैं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
