import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - himseva.hp.gov.in serviceList.xhtml and home page (saved copies from our
//   checker): Revenue Department services "An Application for Issuance of
//   Bonafide Himachali Certificate" and "An Application for Issuance of
//   Domicile Certificate" as separate services; portal FAQ lists domicile
//   certificate among e-District certificates.
// - "Rate List of LMK Charges for G2C Services" (portal PDF): Bonafide
//   Himachali and Domicile Certificate: Govt fee Rs 20, processing Rs 23.60,
//   LMK/CSC Rs 25 (total Rs 68.60 through LMK).
// - Department of Personnel notification No. Per(AP-B)A(3)-4/2019 dated
//   15.02.2021 on himachal.nic.in (search extracts; the PDF did not open from
//   our checker): supersedes the 2009 instructions; Bonafide Himachali
//   certificate issued by SDO (Civil), Tehsildar or Naib Tehsildar on the
//   basis of reports of the Gram Panchayat Pradhan / Patwari / municipal
//   officials; categories: permanent home in HP, residing in HP 20 years or
//   more, or permanent home in HP while living outside for occupation; citizen
//   of India required.
// - Facts already verified for himachal-pradesh-income-certificate.ts: online
//   only (DIT notice 2022), Track Application / Verify Certificate, helplines
//   0177-3525111 and 1800-180-8076, PSG Act appeal route (onlinepsg.hp.gov.in).
// Left out (not confirmable on an official page we could open): the eligibility
// rules of the separate "Domicile Certificate" service, the full document
// list, the PSG time limit in days, validity period.
export const himachalPradeshDomicileCertificate: DocGuide = {
  state: { slug: "himachal-pradesh", hi: "हिमाचल प्रदेश" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Himachal Pradesh Domicile Certificate 2026",
  description: "हिमाचल प्रदेश बोनाफाइड हिमाचली और डोमिसाइल प्रमाण पत्र 2026: HimSeva पर ऑनलाइन आवेदन, 20 साल निवास की शर्त, ₹20 फीस (LMK से ₹68.60), जारी करने वाले अधिकारी और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "हिमाचल प्रदेश बोनाफाइड हिमाचली / डोमिसाइल प्रमाण पत्र 2026: शर्तें, फीस और HimSeva पर आवेदन",
  lead: "हिमाचल प्रदेश में निवास साबित करने के लिए HimSeva पोर्टल पर दो अलग सेवाएं हैं: <strong>Bonafide Himachali Certificate</strong> और <strong>Domicile Certificate</strong>। राज्य की सरकारी भर्तियों में आम तौर पर बोनाफाइड हिमाचली प्रमाण पत्र मांगा जाता है। कार्मिक विभाग की 2021 की अधिसूचना के अनुसार यह उन्हें मिलता है जिनका हिमाचल में स्थायी घर है या जो <strong>20 साल या ज़्यादा</strong> से हिमाचल में रह रहे हैं; इसे SDO (सिविल), तहसीलदार या नायब तहसीलदार जारी करते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://himseva.hp.gov.in/" target="_blank" rel="noopener nofollow">himseva.hp.gov.in</a>'],
    ["बोनाफाइड हिमाचली", "स्थायी घर या 20+ साल निवास"],
    ["शुल्क", "₹20 + ₹23.60 (LMK से कुल ₹68.60)"],
    ["जारी करते हैं", "SDO (सिविल) / तहसीलदार / नायब तहसीलदार"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> जिस भर्ती, दाखिले या योजना के लिए प्रमाण पत्र चाहिए, उसके विज्ञापन/नियम में देखें कि \"Bonafide Himachali\" मांगा है या \"Domicile\"। HimSeva पर दोनों के लिए अलग आवेदन होता है। हिमाचल लोक सेवा आयोग (HPPSC) के विज्ञापनों में आरक्षित वर्ग के उम्मीदवारों से बोनाफाइड हिमाचली प्रमाण पत्र मांगा जाता है।",
  sections: [
    {
      id: "patrata",
      title: "बोनाफाइड हिमाचली प्रमाण पत्र किसे मिलता है",
      intro: "कार्मिक विभाग की अधिसूचना (15 फरवरी 2021) के अनुसार:",
      list: [
        "आवेदक <strong>भारत का नागरिक</strong> हो, और",
        "उसका <strong>हिमाचल प्रदेश में स्थायी घर</strong> हो, <strong>या</strong>",
        "वह <strong>20 साल या उससे ज़्यादा</strong> समय से हिमाचल में रह रहा हो, <strong>या</strong>",
        "हिमाचल में स्थायी घर हो लेकिन नौकरी/काम की वजह से राज्य से बाहर रहता हो",
      ],
      callout: { kind: "warn", html: "पुराने नियमों और कई निजी वेबसाइटों में 15 साल लिखा मिलता है। 2021 की अधिसूचना में <strong>20 साल</strong> लिखा है, जो पुराने निर्देशों की जगह लेती है। अलग \"Domicile Certificate\" सेवा की शर्तें हमें किसी खुलने वाले सरकारी पेज पर नहीं मिलीं; उसके लिए तहसील कार्यालय से पुष्टि करें।" },
    },
    {
      id: "kagaz",
      title: "क्या-क्या तैयार रखें",
      intro: "पोर्टल पर फॉर्म भरते समय जो कागज़ मांगे जाएं वही अपलोड करें। आम तौर पर ये पास रखें:",
      list: [
        "<strong>फोटो</strong> और <strong>आधार कार्ड</strong>",
        "<strong>हिमाचल में स्थायी घर या 20 साल निवास का सबूत</strong>: जमाबंदी/ज़मीन के कागज़, पुराना राशन कार्ड, वोटर लिस्ट में नाम, स्कूल रिकॉर्ड",
        "<strong>ग्राम पंचायत प्रधान</strong> या शहरी क्षेत्र में नगर निकाय की रिपोर्ट/प्रमाण पत्र, अगर मांगा जाए",
        "<strong>शपथ-पत्र</strong>, अगर फॉर्म में मांगा जाए (नमूना फॉर्म <a href=\"http://himachalforms.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">himachalforms.nic.in</a> पर)",
      ],
    },
    {
      id: "online",
      title: "HimSeva पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://himseva.hp.gov.in/" target="_blank" rel="noopener nofollow">himseva.hp.gov.in</a> खोलें और <strong>Citizen Login</strong> में रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में <strong>Bonafide Himachali Certificate</strong> या <strong>Domicile Certificate</strong> चुनें (जो आपको चाहिए)।",
        "फॉर्म में नाम, माता-पिता का नाम, स्थायी पता और हिमाचल में रहने की अवधि सही भरें।",
        "कागज़ अपलोड करें और <strong>ऑनलाइन भुगतान</strong> करें।",
        "आवेदन संख्या नोट करें। पटवारी/स्थानीय रिपोर्ट के बाद अधिकारी फैसला करते हैं; मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "info", html: "राज्य सूचना प्रौद्योगिकी विभाग के नोटिस (2022) के अनुसार e-District सेवाओं के आवेदन <strong>सिर्फ ऑनलाइन</strong> लिए जाते हैं। खुद न कर पाएं तो लोक मित्र केंद्र (LMK) या CSC से ऑनलाइन आवेदन कराएं: <a href=\"/service/csc-locator/himachal-pradesh.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "fees",
      title: "फीस, समय सीमा और अपील",
      table: {
        head: ["क्या", "राशि / जानकारी"],
        rows: [
          ["सरकारी फीस", "₹20"],
          ["प्रोसेसिंग शुल्क", "₹23.60"],
          ["LMK/CSC शुल्क (केंद्र से आवेदन पर)", "₹25"],
          ["LMK से कुल", "₹68.60"],
        ],
      },
      html: "<p>ये दरें HimSeva पोर्टल की <strong>Rate List of LMK Charges for G2C Services</strong> से हैं और बोनाफाइड हिमाचली व डोमिसाइल दोनों पर एक जैसी हैं। सेवा की समय सीमा हिमाचल प्रदेश लोक सेवा गारंटी अधिनियम, 2011 की अधिसूचना में तय होती है; दिनों की संख्या हम आधिकारिक पेज पर पक्की नहीं कर पाए।</p>",
      callout: { kind: "warn", html: "<strong>अपील:</strong> आवेदन खारिज हो या समय पर फैसला न हो तो <strong>30 दिन के अंदर</strong> प्रथम अपील करें। देखें: <a href=\"https://onlinepsg.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">onlinepsg.hp.gov.in</a> (हेल्पलाइन 0177-2880400)।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और जांच",
      list: [
        "HimSeva के होम पेज पर <strong>Track Application</strong> में आवेदन संख्या डालें।",
        "प्रमाण पत्र असली है या नहीं, यह <strong>Verify Certificate</strong> से जांचें।",
        "नाम, पिता का नाम और पता जांच लें; गलती हो तो तहसील से संपर्क करें।",
      ],
      html: '<p>फोन में रखना हो तो: <a href="/digilocker/domicile-certificate.html">DigiLocker में निवास प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["20 साल निवास या स्थायी घर का सबूत नहीं", "जमाबंदी, पुराना राशन कार्ड, पुरानी वोटर लिस्ट या स्कूल रिकॉर्ड लगाएं"],
          ["गलत सेवा चुनी (Domicile बनाम Bonafide)", "भर्ती/दाखिले के नियम देखकर सही सेवा में नया आवेदन करें"],
          ["पंचायत/पटवारी रिपोर्ट नहीं लगी", "प्रधान या पटवारी से रिपोर्ट लेकर लगाएं"],
          ["नाम/पता कागज़ों में अलग", "आधार, राशन कार्ड और ज़मीन के रिकॉर्ड में एक जैसी जानकारी कराएं"],
        ],
      },
    },
    {
      id: "help",
      title: "हेल्पलाइन",
      intro: "HimSeva पोर्टल पर नागरिक हेल्पलाइन <strong>0177-3525111</strong> और टोल फ्री <strong>1800-180-8076</strong> दिए गए हैं।",
    },
  ],
  official: [
    { href: "https://himseva.hp.gov.in/", title: "HimSeva (Himachal Online Seva / e-District)" },
    { href: "https://himseva.hp.gov.in/pages/staticSite/serviceList.xhtml", title: "HimSeva: सेवाओं की सूची (Bonafide Himachali, Domicile)" },
    { href: "https://onlinepsg.hp.gov.in/", title: "लोक सेवा गारंटी: अपील" },
    { href: "http://himachalforms.nic.in/", title: "हिमाचल सरकार के फॉर्म (शपथ-पत्र के नमूने)" },
  ],
  faq: [
    { q: "हिमाचल में बोनाफाइड हिमाचली प्रमाण पत्र के लिए कितने साल का निवास चाहिए?", a: "कार्मिक विभाग की 15 फरवरी 2021 की अधिसूचना के अनुसार हिमाचल में स्थायी घर हो, या 20 साल या उससे ज़्यादा समय से हिमाचल में रह रहे हों; साथ में भारत का नागरिक होना ज़रूरी है।" },
    { q: "बोनाफाइड हिमाचली और डोमिसाइल प्रमाण पत्र में क्या फर्क है?", a: "HimSeva पर दोनों अलग सेवाएं हैं। राज्य की भर्तियों में आम तौर पर बोनाफाइड हिमाचली मांगा जाता है। जिस काम के लिए चाहिए, उसके नियम में जो नाम लिखा हो वही बनवाएं।" },
    { q: "फीस कितनी है?", a: "HimSeva की रेट लिस्ट के अनुसार सरकारी फीस ₹20 और प्रोसेसिंग ₹23.60 है। लोक मित्र केंद्र से आवेदन पर ₹25 और लगते हैं, कुल ₹68.60।" },
    { q: "प्रमाण पत्र कौन जारी करता है?", a: "2021 की अधिसूचना के अनुसार SDO (सिविल), तहसीलदार या नायब तहसीलदार, पंचायत प्रधान/पटवारी या नगर निकाय की रिपोर्ट के आधार पर।" },
    { q: "क्या तहसील में कागज़ी फॉर्म जमा हो सकता है?", a: "राज्य IT विभाग के नोटिस के अनुसार e-District सेवाओं के आवेदन सिर्फ ऑनलाइन लिए जाते हैं। खुद न कर पाएं तो लोक मित्र केंद्र से ऑनलाइन आवेदन कराएं।" },
  ],
  related: [
    { href: "/states/himachal-pradesh-caste-certificate.html", emoji: "📜", title: "हिमाचल जाति प्रमाण पत्र", text: "SC/ST/OBC, HimSeva पर" },
    { href: "/states/himachal-pradesh-income-certificate.html", emoji: "💰", title: "हिमाचल आय प्रमाण पत्र", text: "₹20 फीस, ऑनलाइन" },
    { href: "/states/himachal-pradesh-employment-exchange.html", emoji: "💼", title: "हिमाचल रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://himseva.hp.gov.in/", label: "📝 HimSeva पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
