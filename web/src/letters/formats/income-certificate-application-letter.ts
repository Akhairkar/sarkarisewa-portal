import type { Letter } from "../types";

// Sources (checked 17 Oct 2026):
// - Income certificate is a state revenue-department document: issued by the
//   Tehsildar / Naib Tehsildar / SDM / Circle Officer after field report of
//   the Patwari/Lekhpal/VAO; applied through state e-District / ServicePlus
//   portals, CSC or tehsil (site guide /service/income-certificate.html and
//   state e-District portals; edistrict / serviceonline.gov.in).
// - Validity, fee, format and the income definition differ by state and by
//   purpose (scholarship, EWS, OBC-NCL), so the page does not state amounts.
// - EWS income certificate-cum-asset certificate is issued in the format of
//   DoPT OM 19 Jan 2019 (central posts); OBC non-creamy layer limit Rs 8 lakh
//   per DoPT order 13 Sep 2017. Mentioned only as purposes, no amounts given
//   for state certificates.
// - False declaration: BNS 2023 s.229 (false evidence) and s.236/237 (false
//   statement in declaration) apply instead of IPC 193/199-200; the letter
//   only says "मैं जानता हूं कि गलत जानकारी देना अपराध है".
export const incomeCertificateApplicationLetter: Letter = {
  slug: "income-certificate-application-letter",
  category: "document",
  emoji: "💰",
  title: "Income Certificate Application in Hindi 2026: आय प्रमाण पत्र आवेदन पत्र",
  description: "तहसीलदार को आय प्रमाण पत्र के लिए आवेदन पत्र (हिंदी/English): अपनी जानकारी भरें, प्रिंट करें। कागज़, e-District/CSC से आवेदन और देरी पर शिकायत की जानकारी।",
  h1: "आय प्रमाण पत्र के लिए तहसीलदार को आवेदन पत्र 2026",
  short: { hi: "आय प्रमाण पत्र आवेदन", en: "Income certificate application" },
  lead: "आय प्रमाण पत्र राज्य सरकार का राजस्व विभाग बनाता है: आम तौर पर <strong>तहसीलदार / नायब तहसीलदार / SDM / अंचल अधिकारी</strong>, लेखपाल/पटवारी की जांच रिपोर्ट के बाद। ज़्यादातर राज्यों में आवेदन <strong>e-District पोर्टल, CSC या तहसील</strong> से होता है; जहां हाथ से आवेदन लिया जाता है या फॉर्म के साथ प्रार्थना पत्र मांगा जाता है, वहां यह पत्र काम आता है। फीस, वैधता और फॉर्मेट हर राज्य में अलग है।",
  facts: [
    ["किसे दें", "तहसीलदार / SDM / अंचल अधिकारी (राज्य के अनुसार)"],
    ["कहां से", "e-District पोर्टल, CSC या तहसील का जन सेवा केंद्र"],
    ["जांच", "लेखपाल/पटवारी/राजस्व निरीक्षक की रिपोर्ट"],
    ["देरी हो तो", "राज्य का सेवा का अधिकार (RTS) कानून / CM हेल्पलाइन"],
  ],
  to: "अपनी तहसील के <strong>तहसीलदार</strong> (कुछ राज्यों में SDM, अंचल अधिकारी, मामलतदार या उप-ज़िलाधिकारी) को। शहर में भी आय प्रमाण पत्र तहसील/राजस्व विभाग ही देता है, नगर निगम नहीं।",
  when: [
    "छात्रवृत्ति, फीस माफी या स्कूल-कॉलेज दाखिले के लिए आय प्रमाण पत्र चाहिए",
    "पेंशन, राशन कार्ड, आवास या किसी सरकारी योजना में आय का सबूत मांगा गया है",
    "EWS या OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र के साथ आय का प्रमाण चाहिए",
    "पुराना आय प्रमाण पत्र की अवधि खत्म हो गई है, नया बनवाना है",
  ],
  fields: [
    { key: "office", label: { hi: "तहसील/दफ्तर का नाम", en: "Tehsil / office" }, required: true, placeholder: { hi: "जैसे: तहसील सदर, ज़िला गोरखपुर, उत्तर प्रदेश", en: "e.g. Tehsil Sadar, District Gorakhpur, Uttar Pradesh" } },
    { key: "name", label: { hi: "आवेदक का नाम", en: "Applicant's name" }, required: true },
    { key: "father", label: { hi: "पिता/पति का नाम", en: "Father's/husband's name" }, required: true },
    { key: "address", label: { hi: "पूरा पता (गांव/मोहल्ला, पोस्ट, थाना)", en: "Full address (village/locality, post, police station)" }, type: "textarea", required: true },
    { key: "source", label: { hi: "परिवार की आय का ज़रिया", en: "Source of family income" }, required: true, placeholder: { hi: "जैसे: खेती और मज़दूरी", en: "e.g. Farming and daily wage labour" } },
    { key: "income", label: { hi: "परिवार की कुल सालाना आय (₹)", en: "Total annual family income (Rs)" }, type: "number", required: true, placeholder: { hi: "जैसे: 96000", en: "e.g. 96000" } },
    { key: "members", label: { hi: "परिवार के सदस्य (कितने)", en: "Family members (number)" }, type: "number" },
    { key: "purpose", label: { hi: "किस काम के लिए", en: "Purpose" }, type: "select", options: [
      { hi: "छात्रवृत्ति / फीस माफी", en: "Scholarship / fee concession" },
      { hi: "सरकारी योजना / पेंशन", en: "Government scheme / pension" },
      { hi: "EWS प्रमाण पत्र", en: "EWS certificate" },
      { hi: "नौकरी / दाखिला", en: "Job / admission" },
      { hi: "अन्य सरकारी काम", en: "Other official purpose" },
    ], required: true },
    { key: "phone", label: { hi: "मोबाइल नंबर", en: "Mobile number" }, type: "tel", required: true },
    { key: "place", label: { hi: "स्थान", en: "Place" } },
    { key: "date", label: { hi: "तारीख", en: "Date" }, type: "date", hint: { hi: "खाली छोड़ें तो आज की तारीख लगेगी", en: "Leave blank for today" } },
  ],
  template: {
    hi: `सेवा में,
श्रीमान तहसीलदार महोदय,
{{office}}

विषय: आय प्रमाण पत्र जारी करने हेतु प्रार्थना पत्र

महोदय/महोदया,

निवेदन है कि मैं, {{name}}, पुत्र/पुत्री/पत्नी श्री {{father}}, निवासी {{address}}, आपकी तहसील का स्थायी निवासी हूं।

मेरे परिवार में कुल {{members}} सदस्य हैं। परिवार की आय का मुख्य ज़रिया {{source}} है और सभी स्रोतों से परिवार की कुल वार्षिक आय लगभग ₹{{income}} है।

मुझे {{purpose}} के लिए आय प्रमाण पत्र की आवश्यकता है। आय के समर्थन में स्व-घोषणा पत्र और ज़रूरी कागज़ों की प्रतियां संलग्न हैं। मैं घोषणा करता/करती हूं कि दी गई जानकारी सही है; मैं जानता/जानती हूं कि गलत जानकारी देना दंडनीय अपराध है।

अतः आपसे प्रार्थना है कि लेखपाल/पटवारी से जांच कराकर मुझे आय प्रमाण पत्र जारी करने की कृपा करें।

सधन्यवाद।

भवदीय/भवदीया,

(हस्ताक्षर)
नाम: {{name}}
पता: {{address}}
मोबाइल: {{phone}}

स्थान: {{place}}
दिनांक: {{date}}

संलग्न:
1. आधार कार्ड / पहचान पत्र की प्रति
2. राशन कार्ड / निवास का प्रमाण
3. आय का स्व-घोषणा पत्र या शपथ पत्र
4. वेतन पर्ची / खतौनी / पेंशन पर्ची (जो लागू हो)
5. पासपोर्ट साइज़ फोटो`,
    en: `To,
The Tehsildar,
{{office}}

Subject: Application for issue of income certificate

Sir/Madam,

I, {{name}}, son/daughter/wife of Shri {{father}}, resident of {{address}}, am a permanent resident of your tehsil.

There are {{members}} members in my family. The main source of family income is {{source}}, and the total annual income of the family from all sources is about Rs {{income}}.

I need an income certificate for {{purpose}}. A self-declaration of income and copies of the necessary documents are enclosed. I declare that the above information is true; I understand that giving false information is a punishable offence.

I therefore request you kindly to get the facts verified by the Lekhpal/Patwari and issue me an income certificate.

Thanking you,

Yours faithfully,

(Signature)
Name: {{name}}
Address: {{address}}
Mobile: {{phone}}

Place: {{place}}
Date: {{date}}

Enclosures:
1. Copy of Aadhaar / identity proof
2. Ration card / proof of residence
3. Self-declaration or affidavit of income
4. Salary slip / land record / pension slip (as applicable)
5. Passport-size photograph`,
  },
  attach: [
    "आधार कार्ड या कोई सरकारी पहचान पत्र",
    "निवास का प्रमाण: राशन कार्ड, वोटर ID, बिजली बिल",
    'आय का स्व-घोषणा पत्र या <a href="/affidavit/income.html">आय का शपथ पत्र</a> (कई राज्यों में ज़रूरी)',
    "नौकरी हो तो वेतन पर्ची/फॉर्म 16, खेती हो तो खतौनी/जमाबंदी, पेंशन हो तो पेंशन पर्ची",
    "पासपोर्ट साइज़ फोटो",
  ],
  submit: [
    "पहले देखें कि आपके राज्य के <strong>e-District / सेवा पोर्टल</strong> पर ऑनलाइन आवेदन है या नहीं; ज़्यादातर राज्यों में है, तब यह पत्र स्कैन करके साथ लगा सकते हैं।",
    "ऑनलाइन खुद न कर पाएं तो नज़दीकी <strong>CSC / जन सेवा केंद्र</strong> या तहसील के काउंटर पर पत्र और कागज़ जमा करें और <strong>आवेदन नंबर/रसीद</strong> लें।",
    "लेखपाल/पटवारी जांच के लिए आ सकते हैं या फोन कर सकते हैं; मूल कागज़ तैयार रखें।",
    "तय समय में प्रमाण पत्र न मिले तो आवेदन नंबर के साथ राज्य के <strong>सेवा का अधिकार (RTS)</strong> कानून के तहत अपील, CM हेल्पलाइन या ज़िला अधिकारी के जनसुनवाई पोर्टल पर शिकायत करें।",
  ],
  tips: [
    "आय पूरे परिवार की और सभी स्रोतों से जोड़कर लिखें; कम आय दिखाने पर बाद में प्रमाण पत्र रद्द हो सकता है।",
    "किस काम के लिए चाहिए, साफ लिखें: EWS और OBC-NCL के लिए आय की गणना और फॉर्मेट अलग होता है।",
    "नाम की स्पेलिंग आधार और स्कूल रिकॉर्ड जैसी ही रखें।",
    "दलालों को पैसे न दें; फीस सिर्फ सरकारी रसीद पर दें।",
  ],
  notice: "आय प्रमाण पत्र का फॉर्म, फीस, समय सीमा और वैधता <strong>हर राज्य में अलग</strong> है। कई राज्य सिर्फ ऑनलाइन आवेदन लेते हैं; पत्र को फॉर्म के साथ संलग्न करें।",
  official: [
    { href: "https://serviceonline.gov.in/", title: "ServicePlus (कई राज्यों का सेवा पोर्टल)", note: "राज्य चुनकर आय प्रमाण पत्र सेवा देखें" },
    { href: "https://www.india.gov.in/", title: "National Portal of India", note: "अपने राज्य के e-District पोर्टल का लिंक" },
  ],
  related: ["/service/income-certificate.html", "/affidavit/income.html", "/service/national-scholarship-portal.html"],
  faq: [
    { q: "आय प्रमाण पत्र का आवेदन किसे लिखें?", a: "अपनी तहसील के तहसीलदार को (कुछ राज्यों में SDM या अंचल अधिकारी)। आय प्रमाण पत्र राजस्व विभाग देता है।" },
    { q: "आय प्रमाण पत्र कितने दिन में बनता है?", a: "राज्य के सेवा का अधिकार कानून में तय दिनों में; अलग-अलग राज्य में यह समय अलग है। आवेदन की रसीद पर अक्सर तय तारीख लिखी होती है।" },
    { q: "आय प्रमाण पत्र कितने समय तक मान्य रहता है?", a: "कोई एक राष्ट्रीय नियम नहीं है। कई योजनाएं और छात्रवृत्तियां चालू वित्त वर्ष का प्रमाण पत्र मांगती हैं; अपने राज्य और योजना का नियम देखें।" },
    { q: "क्या आय प्रमाण पत्र के साथ शपथ पत्र ज़रूरी है?", a: "कई राज्यों में आय का स्व-घोषणा पत्र या नोटरी शपथ पत्र मांगा जाता है। आवेदन से पहले तहसील या e-District पोर्टल की कागज़ सूची देखें।" },
    { q: "आय प्रमाण पत्र में गलत आय लिख दी तो?", a: "प्रमाण पत्र रद्द हो सकता है और गलत घोषणा पर कानूनी कार्रवाई भी हो सकती है। सही आय लिखें; गलती हो जाए तो नया आवेदन देकर सुधार कराएं।" },
  ],
  published: "2026-10-17",
  modified: "2026-10-17",
  verified: "17 अक्टूबर 2026",
};
