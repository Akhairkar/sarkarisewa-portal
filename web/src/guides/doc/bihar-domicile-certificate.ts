import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - serviceonline.bihar.gov.in (RTPS Bihar / ServicePlus) home page: service
//   "आवासीय प्रमाण-पत्र का निर्गमन" (Issuance of Residential Certificate) at
//   circle, sub-division and district level; certificates verified through the
//   portal (Residence / Caste / Income / NCL / EWS) are subject to final
//   verification by the issuing authority.
// - Bihar_RTPS_GAD_Services.pdf (portal document, Bihar Right to Public
//   Services Act, GAD services): residence certificate application Form-XII,
//   attachment Form-XIV self-affidavit, certificate Form-XIII; Circle Officer
//   10 working days, appeal SDO (15), review DM (15); sub-division and district
//   level counter-signature 10 days; "Tatkal" caste/residence/income at Circle
//   Officer level 2 working days.
// - GAD_points.pdf ("आवश्यक सूचना", portal document): permanent residence
//   certificate is valid always; temporary residence certificate is valid one
//   year from issue.
// - Facts reused from bihar-income-certificate.ts (same portal, checked
//   5 Oct 2026): online / RTPS counter / kiosk / CSC routes, Aadhaar OTP or one
//   of 12 ECI identity cards, delivery by SMS link / DigiLocker / "Download
//   Certificate", "Track Application Status", rtpsappeal.bihar.gov.in.
// Left out (not confirmable on an official page we could open): a fixed number
// of years of residence, a fee amount, a helpline number, domicile rules of
// particular recruitments.
export const biharDomicileCertificate: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Bihar Domicile Certificate 2026: Apply & Status",
  description: "बिहार आवासीय (निवास) प्रमाण पत्र 2026: RTPS Bihar (serviceonline.bihar.gov.in) पर आवेदन, फॉर्म-XII और शपथ-पत्र, 10 दिन की समय सीमा, तत्काल सेवा, वैधता और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "बिहार आवासीय (निवास) प्रमाण पत्र 2026: RTPS पर आवेदन, कागज़, समय सीमा और वैधता",
  lead: "बिहार में निवास प्रमाण पत्र को आवासीय प्रमाण पत्र कहते हैं। यह सामान्य प्रशासन विभाग की RTPS सेवा है। आवेदन serviceonline.bihar.gov.in पर या अंचल/प्रखंड के RTPS काउंटर पर होता है और अंचलाधिकारी (CO) 10 कार्य दिवस में प्रमाण पत्र देते हैं। स्थायी आवासीय प्रमाण पत्र हमेशा मान्य रहता है।",
  facts: [
    ["पोर्टल", '<a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.bihar.gov.in</a>'],
    ["जारी करते हैं", "अंचलाधिकारी (CO)"],
    ["समय सीमा", "10 कार्य दिवस (तत्काल: 2 कार्य दिवस)"],
    ["वैधता", "स्थायी: हमेशा; अस्थायी: 1 साल"],
  ],
  notice: "<strong>ध्यान दें:</strong> पोर्टल से किया गया प्रमाण पत्र का सत्यापन जारी करने वाले अधिकारी के अंतिम सत्यापन के अधीन है। भर्ती या दाखिले में \"बिहार का निवासी\" की शर्त उस विज्ञापन के नियम से तय होती है, इसलिए विज्ञापन की शर्तें भी पढ़ें।",
  sections: [
    {
      id: "kya-hai",
      title: "आवासीय प्रमाण पत्र क्या है और कहां काम आता है",
      intro: "यह इस बात का सरकारी प्रमाण है कि आप बिहार के किस अंचल/ज़िले के निवासी हैं। यह आम तौर पर इन कामों में मांगा जाता है:",
      list: [
        "<strong>सरकारी नौकरी और दाखिले</strong> में बिहार निवासियों के लिए तय लाभ के लिए",
        "<strong>छात्रवृत्ति और राज्य की योजनाओं</strong> में, जहां बिहार का निवासी होना शर्त है",
        "जाति, नॉन-क्रीमी लेयर या EWS प्रमाण पत्र के साथ सहायक कागज़ के रूप में",
      ],
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लिए है। आरक्षण के लिए जाति प्रमाण पत्र अलग से बनता है: <a href=\"/states/bihar-caste-certificate.html\">बिहार जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "prakar",
      title: "स्थायी और अस्थायी आवासीय प्रमाण पत्र",
      table: {
        head: ["प्रकार", "वैधता (पोर्टल की आवश्यक सूचना)"],
        rows: [
          ["<strong>स्थायी</strong> आवासीय प्रमाण पत्र", "हमेशा मान्य; बार-बार बनवाने की ज़रूरत नहीं"],
          ["<strong>अस्थायी</strong> आवासीय प्रमाण पत्र", "जारी होने की तारीख से <strong>1 साल</strong>"],
        ],
      },
      callout: { kind: "warn", html: "RTPS के दस्तावेज़ों में आवासीय प्रमाण पत्र के लिए निवास के तय सालों की कोई संख्या नहीं दी गई है। जांच में यह देखा जाता है कि आप सच में उस पते पर रहते हैं, इसलिए शपथ-पत्र में सही पता और जानकारी लिखें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>आवेदन फॉर्म-XII</strong>: ऑनलाइन फॉर्म स्क्रीन पर भरा जाता है; RTPS काउंटर पर भरा हुआ, हस्ताक्षर किया फॉर्म दें।",
        "<strong>स्वयं शपथ-पत्र (फॉर्म-XIV)</strong>: निवास के बारे में आपकी घोषणा।",
        "<strong>फोटो</strong>: वेबकैम से या फाइल अपलोड करके।",
        "<strong>पहचान</strong>: आधार OTP से प्रमाणीकरण, या भारत निर्वाचन आयोग के मान्य 12 पहचान पत्रों में से एक (वोटर कार्ड, पासपोर्ट, ड्राइविंग लाइसेंस, पैन कार्ड, फोटो वाली बैंक/डाकघर पासबुक, मनरेगा जॉब कार्ड आदि)।",
        "निवास दिखाने वाले जो कागज़ हों (जैसे ज़मीन की रसीद/खतियान, राशन कार्ड, वोटर लिस्ट में नाम), उन्हें साथ रखें; जांच में काम आते हैं।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन छोटी PDF में रखें। फोटो/कागज़ छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.bihar.gov.in</a> खोलें। पहली बार हैं तो रजिस्टर करके अकाउंट बनाएं।',
        "<strong>RTPS सेवाएं → सामान्य प्रशासन विभाग → आवासीय प्रमाण-पत्र का निर्गमन → अंचल स्तर पर</strong> चुनें। जल्दी चाहिए तो अंचल स्तर की <strong>तत्काल</strong> सेवा भी है।",
        "फॉर्म में नाम, माता-पिता का नाम और पूरा पता (गांव/मोहल्ला, पंचायत/वार्ड, अंचल, ज़िला) सही भरें और फोटो लगाएं।",
        "स्वयं शपथ-पत्र (फॉर्म-XIV) अटैच करें।",
        "आधार OTP से प्रमाणीकरण करें या मान्य पहचान पत्र अपलोड करें, फिर फॉर्म जांचकर <strong>Submit</strong> करें।",
        "<strong>पावती</strong> डाउनलोड करें; उसमें आवेदन संदर्भ संख्या होती है। आगे की सूचना SMS से आती है।",
      ],
    },
    {
      id: "offline",
      title: "RTPS काउंटर, कियोस्क या CSC से",
      intro: "अपने अंचल/प्रखंड के <strong>RTPS काउंटर</strong> पर भरा हुआ फॉर्म-XII और शपथ-पत्र दें। ऑनलाइन एंट्री के बाद पावती मिलती है। प्रमाण पत्र उसी काउंटर से पावती और पहचान पत्र दिखाकर भी मिलता है। कियोस्क और कॉमन सर्विस सेंटर (CSC) से भी आवेदन हो सकता है; वहां का सेवा शुल्क पहले पूछ लें।",
    },
    {
      id: "samay",
      title: "समय सीमा और अपील",
      table: {
        head: ["स्तर", "प्रमाण पत्र देने वाले", "समय", "अपील / पुनरीक्षण"],
        rows: [
          ["अंचल", "अंचलाधिकारी (CO)", "10 कार्य दिवस", "अनुमंडलाधिकारी (15 दिन) / जिलाधिकारी (15 दिन)"],
          ["अंचल (तत्काल सेवा)", "अंचलाधिकारी", "2 कार्य दिवस", "अनुमंडलाधिकारी / जिलाधिकारी"],
          ["अनुमंडल (अंचल वाले प्रमाण पत्र पर)", "अनुमंडलाधिकारी या प्राधिकृत पदाधिकारी", "10 कार्य दिवस", "जिलाधिकारी / प्रमंडलीय आयुक्त"],
          ["जिला (अनुमंडल वाले प्रमाण पत्र पर)", "जिलाधिकारी द्वारा प्राधिकृत पदाधिकारी", "10 कार्य दिवस", "जिलाधिकारी / प्रमंडलीय आयुक्त"],
        ],
      },
      html: "<p>कुछ भर्तियों में अनुमंडल या ज़िला स्तर का प्रमाण पत्र मांगा जाता है; उसके लिए पहले अंचल वाला प्रमाण पत्र बनता है। RTPS सेवा-सूची में इस सेवा का कोई सरकारी शुल्क दर्ज नहीं है। समय पर प्रमाण पत्र न मिले तो <a href=\"https://rtpsappeal.bihar.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">RTPS अपील पोर्टल</a> पर अपील करें।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>आवेदन की स्थिति देखें (Track Application Status)</strong> में संदर्भ संख्या डालें।",
        "<strong>डाउनलोड:</strong> SMS के लिंक, DigiLocker या होमपेज के \"सर्टिफिकेट डाउनलोड करें\" लिंक से।",
        "<strong>सत्यापन:</strong> होमपेज पर प्रमाण पत्र सत्यापन का विकल्प है; यह जारी करने वाले अधिकारी के अंतिम सत्यापन के अधीन है।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["शपथ-पत्र नहीं लगाया", "फॉर्म-XIV स्वयं शपथ-पत्र अटैच करें"],
          ["पता अधूरा या कागज़ों से अलग", "आधार, राशन कार्ड और वोटर कार्ड वाला एक ही पता लिखें"],
          ["जांच में पते पर निवास नहीं मिला", "उसी अंचल में आवेदन करें जहां आप सच में रहते हैं; ज़मीन/राशन के कागज़ दिखाएं"],
          ["पहचान प्रमाण नहीं", "आधार OTP करें या 12 मान्य पहचान पत्रों में से एक लगाएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://serviceonline.bihar.gov.in/", title: "RTPS बिहार / ServicePlus (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/Bihar_RTPS_GAD_Services.pdf", title: "सामान्य प्रशासन विभाग की RTPS सेवाएं (PDF): फॉर्म, समय सीमा, अपील" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/GAD_points.pdf", title: "आवश्यक सूचना (PDF): प्रमाण पत्रों की वैधता" },
    { href: "https://rtpsappeal.bihar.gov.in", title: "RTPS अपील पोर्टल" },
  ],
  faq: [
    { q: "बिहार में आवासीय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "serviceonline.bihar.gov.in पर RTPS सेवाएं → सामान्य प्रशासन विभाग → आवासीय प्रमाण-पत्र का निर्गमन → अंचल स्तर पर चुनें, फॉर्म भरें, स्वयं शपथ-पत्र अटैच करें, आधार OTP करें और Submit करके पावती रखें।" },
    { q: "बिहार आवासीय प्रमाण पत्र कितने दिन में बनता है?", a: "अंचलाधिकारी 10 कार्य दिवस में देते हैं। तत्काल सेवा में 2 कार्य दिवस।" },
    { q: "आवासीय प्रमाण पत्र कितने समय तक मान्य है?", a: "पोर्टल की आवश्यक सूचना के अनुसार स्थायी आवासीय प्रमाण पत्र हमेशा मान्य है; अस्थायी आवासीय प्रमाण पत्र जारी होने से 1 साल तक।" },
    { q: "क्या फीस लगती है?", a: "RTPS सेवा-सूची में इस सेवा का कोई सरकारी शुल्क दर्ज नहीं है। CSC/कियोस्क अपना सेवा शुल्क ले सकते हैं।" },
    { q: "समय पर प्रमाण पत्र न मिले तो क्या करें?", a: "अनुमंडलाधिकारी के पास अपील करें, rtpsappeal.bihar.gov.in पर ऑनलाइन भी। उसके बाद जिलाधिकारी के पास पुनरीक्षण होता है।" },
  ],
  related: [
    { href: "/states/bihar-caste-certificate.html", emoji: "📜", title: "बिहार जाति प्रमाण पत्र", text: "जाति और नॉन-क्रीमी लेयर" },
    { href: "/states/bihar-income-certificate.html", emoji: "💰", title: "बिहार आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/bihar-employment-exchange.html", emoji: "💼", title: "बिहार रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://serviceonline.bihar.gov.in/", label: "📝 RTPS बिहार पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
