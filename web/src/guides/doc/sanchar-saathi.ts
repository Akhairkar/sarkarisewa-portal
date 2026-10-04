import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026): sancharsaathi.gov.in (home page service
// descriptions and FAQs: Know Mobile Connections in Your Name/TAFCOP, Block
// Lost/Stolen Mobile Handset/CEIR, Know genuineness of handset/KYM, Chakshu,
// Report International Call with Indian Number, Trusted Contact Details;
// 9-connection limit, re-verification timelines 30/45/60 days; SMS
// "KYM <IMEI>" to 14422; 1963/1800110420; Contact Us page: helpdesk
// help-sancharsaathi@gov.in, 011-20907480, Mon-Fri 9-5), sancharsaathi.gov.in/sfc
// (Chakshu: report within 30 days; 1930 / cybercrime.gov.in for money lost).
// Old page's "1800-11-0001 / 1947" helpline and generic "documents/fees"
// blocks were not on the official site and were dropped.
export const sancharSaathi: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "संचार साथी (TAFCOP)" },
  ],
  docHi: "संचार साथी",
  title: "संचार साथी मोबाइल कनेक्शन जांच (Sanchar Saathi TAFCOP) | SarkariSewa India",
  description: "दूरसंचार विभाग के पोर्टल से जानें आपके नाम पर कितने सिम कार्ड चालू हैं और फर्जी सिम ब्लॉक करें। संचार साथी (TAFCOP) से नंबर रिपोर्ट करना, खोया/चोरी फोन CEIR से ब्लॉक करना, IMEI जांच और चक्षु पर फ्रॉड कॉल की शिकायत।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "संचार साथी (Sanchar Saathi): अपने नाम के सिम जांचें, खोया फोन ब्लॉक करें, IMEI और फ्रॉड कॉल रिपोर्ट",
  lead: "संचार साथी दूरसंचार विभाग (DoT) का मुफ्त पोर्टल और ऐप है। sancharsaathi.gov.in पर \"Know Mobile Connections in Your Name\" (पहले TAFCOP) में अपने मोबाइल नंबर के OTP से लॉगिन करके देख सकते हैं कि आपके नाम पर कौन-कौन से नंबर चल रहे हैं, और जो नंबर आपका नहीं है उसे \"This is not my number\" चुनकर रिपोर्ट कर सकते हैं। यहीं खोया/चोरी हुआ फोन ब्लॉक (CEIR), फोन का IMEI जांच और फ्रॉड कॉल/SMS की शिकायत (चक्षु) भी होती है।",
  facts: [
    ["पोर्टल", '<a href="https://sancharsaathi.gov.in/" target="_blank" rel="noopener nofollow">sancharsaathi.gov.in</a>'],
    ["शुल्क", "कोई शुल्क नहीं"],
    ["एक व्यक्ति के नाम पर", "अधिकतम 9 मोबाइल कनेक्शन (J&K, असम, पूर्वोत्तर में 6)"],
    ["हेल्पडेस्क", "011-20907480 (सोम-शुक्र, 9 से 5)"],
  ],
  sections: [
    {
      id: "sevaen",
      title: "संचार साथी पर कौन-कौन सी सेवाएं हैं",
      intro: "पोर्टल पर \"Citizen Centric Services\" में ये सुविधाएं हैं। ऐप Google Play Store और Apple App Store पर \"Sanchar Saathi\" नाम से है।",
      table: {
        head: ["सेवा", "किस काम की"],
        rows: [
          ["<strong>Know Mobile Connections in Your Name</strong> (TAFCOP)", "आपके नाम पर कितने मोबाइल नंबर हैं, यह देखना और अनचाहे/फर्जी नंबर रिपोर्ट करना"],
          ["<strong>Block Your Lost / Stolen Mobile Handset</strong> (CEIR)", "खोया/चोरी फोन सभी कंपनियों के नेटवर्क पर ब्लॉक करना, ट्रेस होने पर सूचना, मिलने पर अनब्लॉक"],
          ["<strong>Know Genuineness of Your Mobile Handset</strong> (KYM)", "IMEI नंबर से फोन असली है या नहीं, ब्रांड और मॉडल जांचना"],
          ["<strong>Chakshu</strong>", "फ्रॉड कॉल, SMS, WhatsApp और स्पैम (UCC) की रिपोर्ट"],
          ["<strong>Report Incoming International Call With Indian Number</strong>", "+91 नंबर दिखाकर विदेश से आई कॉल की रिपोर्ट"],
          ["<strong>Trusted Contact Details</strong>", "बैंक/वित्तीय संस्थाओं के असली कस्टमर केयर नंबर, ईमेल और वेबसाइट जांचना"],
          ["<strong>Know Your Wireline ISP</strong>", "PIN कोड, पते या नाम से अपने इलाके की ब्रॉडबैंड (वायरलाइन) कंपनियां देखना"],
        ],
      },
    },
    {
      id: "apne-naam-ke-sim",
      title: "अपने नाम पर चल रहे सिम कैसे जांचें (TAFCOP)",
      steps: [
        '<a href="https://sancharsaathi.gov.in/" target="_blank" rel="noopener nofollow">sancharsaathi.gov.in</a> खोलें और <strong>Citizen Centric Services → Know mobile connections in your name</strong> चुनें।',
        "<strong>अपना मोबाइल नंबर डालें</strong> और उस पर आए OTP से लॉगिन करें।",
        "स्क्रीन पर <strong>आपके नाम (आपके पहचान पत्र) पर जारी सभी मोबाइल नंबर</strong> दिखेंगे।",
        "जो नंबर आपने नहीं लिया उसके आगे <strong>\"This is not my number\"</strong> और जो अब नहीं चाहिए उसके आगे <strong>\"Not required\"</strong> चुनें।",
        "<strong>\"Report\" बटन दबाएं।</strong> अनुरोध का रेफरेंस नंबर संभालकर रखें।",
      ],
      callout: { kind: "info", html: "जिन नंबरों के लिए \"This is not my number\" या \"Not required\" चुना जाता है, उन्हें कंपनी <strong>दोबारा सत्यापन (re-verification)</strong> के लिए चिह्नित करती है। जो कनेक्शन री-वेरिफिकेशन में फेल हो, वह बंद कर दिया जाता है।" },
    },
    {
      id: "reverification",
      title: "रिपोर्ट किए गए नंबर का आगे क्या होता है",
      table: {
        head: ["कदम", "समय सीमा (पोर्टल FAQ के अनुसार)"],
        rows: [
          ["आउटगोइंग सेवा बंद", "30 दिन के अंदर"],
          ["इनकमिंग सेवा बंद", "45 दिन के अंदर"],
          ["री-वेरिफिकेशन में फेल कनेक्शन बंद", "60 दिन के अंदर"],
        ],
      },
      list: [
        "अंतरराष्ट्रीय रोमिंग, दिव्यांगता या अस्पताल में भर्ती होने पर इन कामों के लिए <strong>30 दिन अतिरिक्त</strong> मिल सकते हैं।",
        "री-वेरिफिकेशन में ग्राहक की फोटो और पहचान पत्र (PoI) को कंपनी के रिकॉर्ड से मिलाया जाता है; ज़रूरी नहीं कि वही पहचान पत्र दें जो सिम लेते समय दिया था।",
        "री-वेरिफिकेशन पूरा होने तक उस नंबर पर <strong>पोर्ट (MNP) नहीं</strong> हो सकता।",
        "तय सीमा से ज़्यादा कनेक्शन हों तो बाद में लिए गए अतिरिक्त कनेक्शन कंपनी बंद कर देती है। फर्जी कागज़ से सिम लेने पर पुलिस शिकायत/FIR होती है।",
      ],
    },
    {
      id: "khoya-phone",
      title: "खोया या चोरी हुआ फोन कैसे ब्लॉक करें (CEIR)",
      steps: [
        "<strong>पुलिस में रिपोर्ट</strong> दर्ज कराएं और उसकी कॉपी रखें।",
        "<strong>उसी नंबर का डुप्लीकेट सिम</strong> अपनी कंपनी (Jio, Airtel, Vi, BSNL, MTNL) से लें। ब्लॉकिंग फॉर्म में यही नंबर देना होता है और OTP इसी पर आता है। ध्यान दें: TRAI नियम के अनुसार दोबारा जारी सिम पर SMS सुविधा 24 घंटे बाद चालू होती है।",
        "<strong>कागज़ तैयार रखें:</strong> पुलिस रिपोर्ट की कॉपी और पहचान पत्र; फोन का खरीद बिल भी दे सकते हैं।",
        "संचार साथी पर <strong>Block Your Lost / Stolen Mobile Handset</strong> में ब्लॉकिंग फॉर्म भरें, कागज़ अपलोड करें और सबमिट करें।",
        "मिलने वाली <strong>Request ID</strong> संभालकर रखें। इसी से स्टेटस देखते हैं और फोन मिलने पर अनब्लॉक करते हैं।",
      ],
      callout: { kind: "ok", html: "पोर्टल के अनुसार रिपोर्ट किया गया फोन <strong>24 घंटे में</strong> भारत के मोबाइल नेटवर्क पर ब्लॉक हो जाता है। कोई उसमें सिम डालकर इस्तेमाल करे तो ट्रेसबिलिटी रिपोर्ट बनती है, आपको SMS आता है और रिपोर्ट उस थाने को भी जाती है जहां आपने शिकायत की थी।" },
      html: "<p><strong>फोन मिल जाए तो:</strong> पहले स्थानीय पुलिस को बताएं, फिर पोर्टल या ऐप पर अनब्लॉक फॉर्म भरें। अगर ब्लॉकिंग राज्य पुलिस के ज़रिए हुई थी तो अनब्लॉक भी राज्य पुलिस से ही करवाना होगा। फॉर्म सबमिट करने पर \"Request already exist ... by State police\" लिखा आए तो मतलब आपका अनुरोध पहले से पुलिस के ज़रिए दर्ज है।</p>",
    },
    {
      id: "imei",
      title: "फोन असली है या नहीं: IMEI से जांच",
      steps: [
        "फोन में <strong>*#06#</strong> डायल करके IMEI नंबर देखें (डुअल सिम फोन में दो IMEI होते हैं)।",
        "संचार साथी पर <strong>Know genuineness of your mobile handset</strong> में 15 अंकों का IMEI डालें और सबमिट करें।",
        "या <strong>14422</strong> पर SMS भेजें: <code>KYM &lt;15 अंकों का IMEI&gt;</code>। ऐप से भी जांच होती है।",
      ],
      callout: { kind: "warn", html: "जवाब में निर्माता, डिवाइस टाइप, ब्रांड और मॉडल आता है। अगर ये जानकारी फोन से मेल न खाए, या IMEI सब ज़ीरो/अवैध हो, तो वह फोन न खरीदें। ऐसे फोन टेलीकॉम नेटवर्क पर नहीं चल सकते।" },
    },
    {
      id: "chakshu",
      title: "फ्रॉड कॉल, SMS और स्पैम की शिकायत (चक्षु)",
      intro: "चक्षु पर उन कॉल, SMS और WhatsApp मैसेज/कॉल की रिपोर्ट होती है जिनमें भेजने वाले का नंबर दिखता है, जैसे KYC अपडेट, बिजली/गैस कनेक्शन कटने, DoT/TRAI/पुलिस/CBI बनकर धमकी, निवेश-ट्रेडिंग, नौकरी/लॉटरी/लोन ऑफर, सेक्सटॉर्शन या संदिग्ध लिंक।",
      steps: [
        "पोर्टल पर <strong>Citizen Centric Services → Chakshu - Report Suspected Fraud Communication</strong> चुनें।",
        "माध्यम (Call/SMS/WhatsApp) और श्रेणी चुनें, विवरण भरें। स्क्रीनशॉट अपलोड करना वैकल्पिक है।",
        "अपना मोबाइल नंबर OTP से सत्यापित करें, नाम डालें और सबमिट करें।",
      ],
      list: [
        "<strong>30 दिन के अंदर</strong> रिपोर्ट करें, तभी कार्रवाई होती है।",
        "स्पैम (UCC) की शिकायत <strong>7 दिन के अंदर</strong> करने पर ही वैध शिकायत मानी जाती है; उसके बाद की रिपोर्ट स्पैमर पकड़ने में मदद करती है। स्पैम की शिकायत <strong>1909</strong> पर कॉल/SMS या TRAI DND ऐप से भी होती है।",
        "<strong>पैसे कट गए हों तो चक्षु नहीं,</strong> तुरंत साइबर क्राइम हेल्पलाइन <a href=\"tel:1930\">1930</a> या <a href=\"https://cybercrime.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cybercrime.gov.in</a> पर शिकायत करें।",
        "विदेश से +91 नंबर दिखाकर आई कॉल \"Report Incoming International Call With Indian Number\" में या <strong>1963 / 1800110420</strong> पर रिपोर्ट करें।",
      ],
    },
  ],
  official: [
    { href: "https://sancharsaathi.gov.in/", title: "संचार साथी पोर्टल (DoT)" },
    { href: "https://tafcop.sancharsaathi.gov.in/", title: "Know Mobile Connections in Your Name (TAFCOP)" },
    { href: "https://ceir.sancharsaathi.gov.in/", title: "CEIR: खोया/चोरी फोन ब्लॉक, अनब्लॉक, स्टेटस" },
    { href: "https://sancharsaathi.gov.in/sfc/", title: "चक्षु: फ्रॉड कॉल/SMS और स्पैम रिपोर्ट" },
    { href: "https://cybercrime.gov.in/", title: "राष्ट्रीय साइबर क्राइम रिपोर्टिंग पोर्टल", note: "पैसे की धोखाधड़ी: 1930" },
    { href: "mailto:help-sancharsaathi@gov.in", title: "संचार साथी हेल्पडेस्क", note: "help-sancharsaathi@gov.in, 011-20907480 (सोम-शुक्र, सुबह 9 से शाम 5)" },
  ],
  faq: [
    { q: "मेरे नाम पर कितने सिम चल रहे हैं, कैसे पता करें?", a: "sancharsaathi.gov.in पर Citizen Centric Services में \"Know mobile connections in your name\" चुनें, अपना मोबाइल नंबर डालकर OTP से लॉगिन करें। आपके नाम पर जारी सभी नंबर दिख जाएंगे। यह सेवा मुफ्त है।" },
    { q: "जो नंबर मेरा नहीं है, उसे कैसे बंद कराएं?", a: "उसी लिस्ट में उस नंबर के आगे \"This is not my number\" चुनकर Report दबाएं। कंपनी उस नंबर का री-वेरिफिकेशन करती है; फेल होने पर 30 दिन में आउटगोइंग, 45 दिन में इनकमिंग बंद और 60 दिन में कनेक्शन बंद हो जाता है।" },
    { q: "एक व्यक्ति के नाम पर कितने सिम हो सकते हैं?", a: "पूरे देश में सभी कंपनियों को मिलाकर अधिकतम 9 मोबाइल कनेक्शन। जम्मू-कश्मीर, असम और पूर्वोत्तर राज्यों में यह सीमा 6 है।" },
    { q: "चोरी हुआ फोन ब्लॉक करने के लिए क्या चाहिए?", a: "पुलिस रिपोर्ट की कॉपी, पहचान पत्र और उसी नंबर का डुप्लीकेट सिम (OTP उसी पर आता है)। खरीद का बिल वैकल्पिक है। फॉर्म भरने पर मिली Request ID से स्टेटस देखें और फोन मिलने पर अनब्लॉक करें।" },
    { q: "सेकंड-हैंड फोन खरीदने से पहले क्या जांचें?", a: "*#06# से IMEI देखें और संचार साथी के \"Know genuineness of your mobile handset\" में डालें, या 14422 पर \"KYM <IMEI>\" SMS भेजें। ब्रांड-मॉडल मेल न खाए तो फोन न खरीदें।" },
    { q: "फ्रॉड कॉल से पैसे कट गए तो कहां शिकायत करें?", a: "चक्षु पैसे की धोखाधड़ी की शिकायत के लिए नहीं है। तुरंत 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत करें। चक्षु पर फ्रॉड नंबर की रिपोर्ट अलग से कर सकते हैं।" },
    { q: "क्या दूसरे का नंबर अपने नाम पर ट्रांसफर हो सकता है?", a: "मोबाइल कनेक्शन ट्रांसफर नहीं होता। सिर्फ खून के रिश्ते/कानूनी वारिस के बीच, मौजूदा ग्राहक की सहमति और नए CAF के साथ नाम बदला जा सकता है; इसके लिए अपनी टेलीकॉम कंपनी से संपर्क करें।" },
  ],
  related: [
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल नंबर", text: "आधार से मोबाइल जोड़ना/बदलना" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "डाउनलोड, अपडेट और लॉक" },
    { href: "/service/police-clearance-certificate.html", emoji: "👮", title: "पुलिस क्लीयरेंस सर्टिफिकेट", text: "विदेश जाने के लिए PCC" },
    { href: "/tools/status-troubleshooter.html", emoji: "⚙️", title: "स्टेटस ट्रबलशूटर", text: "अटके आवेदन का हल" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://sancharsaathi.gov.in/", label: "📱 संचार साथी खोलें" },
    { href: "https://cybercrime.gov.in/", label: "🚨 साइबर फ्रॉड: 1930" },
  ],
};
