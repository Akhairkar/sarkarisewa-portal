import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Women & Child Development Department,
// Gujarat (wcd.gujarat.gov.in/posts?id=438, scheme description: daughters
// born on/after 02-08-2019; mother aged 18+ at birth; couple's annual income
// Rs 2,00,000 or less in rural and urban areas; all daughters among the
// couple's first 3 children; Rs 4,000 at Class 1 admission, Rs 6,000 at
// Class 9 admission, Rs 1,00,000 at age 18 for higher studies/marriage);
// myScheme (api.myscheme.gov.in, slug "vdy": same amounts; offline form at
// Anganwadi / Gram Panchayat / CDPO (ICDS) / District Women & Child Officer;
// SMS on eligibility; DBT to bank account). myScheme says "first two girl
// children"; the department's own text ("all daughters out of the first 3
// children") is used. No online application was found, so none is claimed;
// document list is written as commonly asked items.
export const gjVahliDikriYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्य सेवाएं", href: "/states/" },
    { label: "वहाली दिकरी योजना (गुजरात)" },
  ],
  docHi: "वहाली दिकरी योजना",
  title: "वहाली दिकरी योजना 2026",
  description: "गुजरात की वहाली दिकरी योजना: बेटी के कक्षा 1 में दाखिले पर ₹4,000, कक्षा 9 में ₹6,000 और 18 साल पर ₹1,00,000। पात्रता, आय सीमा, कागज़ और आवेदन कहां करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "वहाली दिकरी योजना (गुजरात): ₹1.10 लाख की सहायता, पात्रता और आवेदन",
  lead: "वहाली दिकरी योजना गुजरात सरकार के महिला एवं बाल विकास विभाग की योजना है। 2 अगस्त 2019 या उसके बाद जन्मी बेटी को कक्षा 1 में दाखिले पर <strong>₹4,000</strong>, कक्षा 9 में दाखिले पर <strong>₹6,000</strong> और 18 साल की उम्र पर उच्च शिक्षा/विवाह के लिए <strong>₹1,00,000</strong> मिलते हैं, कुल ₹1,10,000। परिवार की सालाना आय ₹2 लाख या उससे कम होनी चाहिए। फॉर्म आंगनवाड़ी, ग्राम पंचायत या ICDS कार्यालय से मिलता है।",
  facts: [
    ["विभाग", "महिला एवं बाल विकास विभाग, गुजरात"],
    ["कुल सहायता", "₹1,10,000 (तीन किस्तों में)"],
    ["आय सीमा", "दंपती की सालाना आय ₹2 लाख तक"],
    ["आवेदन", "आंगनवाड़ी / ग्राम पंचायत / CDPO (ICDS) कार्यालय"],
  ],
  sections: [
    {
      id: "labh",
      title: "कितना पैसा, कब मिलता है",
      table: {
        head: ["कब", "राशि"],
        rows: [
          ["कक्षा 1 में दाखिले के समय", "₹4,000"],
          ["कक्षा 9 में दाखिले के समय", "₹6,000"],
          ["18 साल की उम्र पर (उच्च शिक्षा या विवाह के लिए)", "₹1,00,000"],
          ["<strong>कुल</strong>", "<strong>₹1,10,000</strong>"],
        ],
      },
      callout: { kind: "info", html: "राशि सीधे बैंक खाते में (DBT) आती है। पात्र/अपात्र होने की सूचना SMS से मिलती है, इसलिए फॉर्म में चालू मोबाइल नंबर लिखें।" },
    },
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "बेटी का जन्म <strong>2 अगस्त 2019 या उसके बाद</strong> हुआ हो।",
        "परिवार गुजरात का निवासी हो।",
        "बेटी के जन्म के समय मां की उम्र 18 साल या ज़्यादा हो।",
        "पति-पत्नी की कुल सालाना आय (गांव और शहर दोनों में) <strong>₹2,00,000 या कम</strong> हो।",
        "विभाग के अनुसार दंपती के <strong>पहले 3 बच्चों में</strong> जितनी बेटियां हैं, सभी को लाभ मिलता है। (myScheme पर \"पहली दो बेटियां\" लिखा है; अपने ICDS कार्यालय से पुष्टि करें।)",
      ],
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      intro: "कार्यालय के फॉर्म में दी सूची ही अंतिम है। ज़्यादातर ये मांगे जाते हैं:",
      list: [
        "बेटी का जन्म प्रमाण पत्र",
        "माता-पिता का आधार कार्ड और निवास का प्रमाण",
        "परिवार का आय प्रमाण पत्र",
        "राशन कार्ड",
        "बैंक खाते की पासबुक की कॉपी",
        "पहले के बच्चों का विवरण/जन्म प्रमाण पत्र, और तय फॉर्मेट में घोषणा पत्र अगर मांगा जाए",
      ],
    },
    {
      id: "avedan",
      title: "आवेदन कैसे करें",
      steps: [
        "नज़दीकी <strong>आंगनवाड़ी केंद्र, ग्राम पंचायत, CDPO (ICDS) कार्यालय</strong> या ज़िला महिला एवं बाल अधिकारी कार्यालय से फॉर्म लें।",
        "फॉर्म भरें और ऊपर के कागज़ों की कॉपी लगाएं।",
        "उसी कार्यालय में जमा करें और पावती लें।",
        "अधिकारी जांच करते हैं; पात्र या अपात्र होने की सूचना SMS से आती है।",
        "मंज़ूरी के बाद हर किस्त तय पड़ाव (कक्षा 1, कक्षा 9, 18 साल) पर बैंक खाते में आती है। उस समय दाखिले का प्रमाण देना पड़ सकता है।",
      ],
      callout: { kind: "warn", html: "फॉर्म मुफ्त मिलता है। कोई \"जल्दी मंज़ूरी\" के नाम पर पैसे मांगे तो ज़िला महिला एवं बाल अधिकारी कार्यालय में शिकायत करें।" },
    },
  ],
  official: [
    { href: "https://wcd.gujarat.gov.in/", title: "महिला एवं बाल विकास विभाग, गुजरात", note: "योजना का विवरण" },
    { href: "https://www.myscheme.gov.in/", title: "myScheme", note: "\"Vahli Dikri Yojana\" खोजें" },
  ],
  faq: [
    { q: "वहाली दिकरी योजना में कितना पैसा मिलता है?", a: "कुल ₹1,10,000: कक्षा 1 में दाखिले पर ₹4,000, कक्षा 9 में दाखिले पर ₹6,000 और 18 साल की उम्र पर उच्च शिक्षा/विवाह के लिए ₹1,00,000।" },
    { q: "किन बेटियों को लाभ मिलता है?", a: "2 अगस्त 2019 या उसके बाद जन्मी बेटियों को, जिनके माता-पिता की सालाना आय ₹2 लाख तक है और जन्म के समय मां की उम्र 18 साल या ज़्यादा थी।" },
    { q: "कितनी बेटियों को लाभ मिलेगा?", a: "विभाग के विवरण के अनुसार दंपती के पहले 3 बच्चों में जितनी बेटियां हैं, उन सबको। कुछ जगह \"पहली दो बेटियां\" लिखा मिलता है, इसलिए अपने ICDS कार्यालय से पक्का करें।" },
    { q: "आवेदन कहां करें?", a: "आंगनवाड़ी केंद्र, ग्राम पंचायत, CDPO (ICDS) कार्यालय या ज़िला महिला एवं बाल अधिकारी कार्यालय में फॉर्म भरकर जमा करें।" },
  ],
  related: [
    { href: "/states/gujarat-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (गुजरात)", text: "₹2 लाख आय सीमा का प्रमाण" },
    { href: "/states/gujarat-birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र (गुजरात)", text: "बेटी का जन्म प्रमाण" },
    { href: "/states/gujarat-ration-card.html", emoji: "🍚", title: "राशन कार्ड (गुजरात)", text: "परिवार का प्रमाण" },
    { href: "/service/sukanya-samriddhi-yojana.html", emoji: "🎀", title: "सुकन्या समृद्धि योजना", text: "बेटी के लिए बचत खाता" },
  ],
  aside: [
    { href: "https://wcd.gujarat.gov.in/", label: "🏛️ WCD गुजरात" },
    { href: "/states/gujarat-income-certificate.html", label: "💰 आय प्रमाण पत्र" },
  ],
};
