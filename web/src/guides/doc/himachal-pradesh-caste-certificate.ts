import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - himseva.hp.gov.in (Himachal Online Seva / e-District) home page: services
//   "Caste (SC/ST) Certificate", "OBC Certificate", "Economically Weaker
//   Section"; Track Application, Verify Certificate, Download Forms
//   (himachalforms.nic.in); Citizen Helpline 0177-3525111; Notice.pdf (DIT,
//   2022): applications for e-District services only in online mode, no
//   offline applications.
// - himseva.hp.gov.in serviceList.xhtml (Revenue Department): Caste (SC/ST)
//   Certificate, Other Backward Class (OBC) Certificate, EWS Certificate,
//   Bonafide Himachali Certificate as separate services.
// - himseva.hp.gov.in help page: toll free 18001808076,
//   helpdesk.edistrict.itl@gmail.com.
// - "Rate List of LMK Charges for G2C Services" (portal PDF): Caste (SC/ST)
//   and OBC certificate Govt fee Rs 20, processing charges Rs 23.60, LMK/CSC
//   charges Rs 25 (total Rs 68.60 through LMK).
// - emerginghimachal.hp.gov.in kya/caste.pdf (Procedure and Checklist for
//   Caste certificate): residence proof; Patwari verification report ->
//   Tehsil dealing assistant -> Tehsildar approves/rejects/sends back;
//   download online; timelines under HP Public Services Guarantee Act 2011.
// - onlinepsg.hp.gov.in About: PSG Act 2011; first appeal within 30 days of
//   rejection or expiry of time limit, decided in 30 (max 45) days; second
//   appeal; helpline 0177-2880400.
// Left out (not confirmable on an official page we could open): the PSG time
// limit in days for caste/OBC certificates, the full document list for OBC,
// the OBC income limit, validity period.
export const himachalPradeshCasteCertificate: DocGuide = {
  state: { slug: "himachal-pradesh", hi: "हिमाचल प्रदेश" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Himachal Pradesh Caste Certificate 2026",
  description: "हिमाचल प्रदेश जाति प्रमाण पत्र (Caste Certificate) online apply 2026 at e-District HP. Eligibility, document list, official fee & status check guide.",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "हिमाचल प्रदेश जाति प्रमाण पत्र 2026: HimSeva पर SC/ST और OBC आवेदन, शुल्क, स्टेटस",
  lead: "हिमाचल प्रदेश में SC/ST और OBC प्रमाण पत्र राजस्व विभाग की ऑनलाइन सेवा है। आवेदन <strong>Himachal Online Seva (HimSeva / e-District)</strong> पोर्टल पर खुद या <strong>लोक मित्र केंद्र (LMK)</strong> से होता है; पटवारी जांच करते हैं और <strong>तहसीलदार</strong> प्रमाण पत्र मंज़ूर करते हैं। पोर्टल की रेट-लिस्ट में सरकारी फीस ₹20 और प्रोसेसिंग शुल्क ₹23.60 है; LMK से आवेदन पर ₹25 और लगते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://himseva.hp.gov.in/" target="_blank" rel="noopener nofollow">himseva.hp.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (जांच: पटवारी)"],
    ["शुल्क", "₹20 फीस + ₹23.60 प्रोसेसिंग (LMK से कुल ₹68.60)"],
    ["समय सीमा", "लोक सेवा गारंटी अधिनियम 2011 के तहत तय"],
  ],
  notice: "<strong>सही प्रमाण पत्र चुनें:</strong> HimSeva पर <strong>Caste (SC/ST) Certificate</strong> और <strong>OBC Certificate</strong> अलग-अलग सेवाएं हैं। केंद्र सरकार की नौकरी में OBC आरक्षण के लिए केंद्रीय सूची और नॉन-क्रीमी लेयर वाला प्रारूप मांगा जाता है; भर्ती के विज्ञापन में दिया प्रारूप देखकर ही आवेदन करें।",
  sections: [
    {
      id: "kya-hai",
      title: "हिमाचल में कौन सा जाति प्रमाण पत्र",
      intro: "राजस्व विभाग की सेवा-सूची में जाति से जुड़ी ये सेवाएं अलग-अलग हैं:",
      table: {
        head: ["सेवा (पोर्टल पर नाम)", "कब चाहिए"],
        rows: [
          ["<strong>Caste (SC/ST) Certificate</strong>", "अनुसूचित जाति / जनजाति का आरक्षण, छात्रवृत्ति, योजनाएं"],
          ["<strong>Other Backward Class (OBC) Certificate</strong>", "OBC आरक्षण; इसमें क्रीमी लेयर (परिवार की आय) की जांच होती है"],
          ["<strong>Economically Weaker Section Certificate</strong>", "सामान्य वर्ग में EWS आरक्षण; यह जाति नहीं, आय-संपत्ति का प्रमाण पत्र है"],
        ],
      },
      callout: { kind: "info", html: "हिमाचल का स्थायी निवासी होने का सबूत अलग सेवा <strong>Bonafide Himachali Certificate</strong> से मिलता है। देखें: <a href=\"/states/himachal-pradesh-domicile-certificate.html\">हिमाचल बोनाफाइड / निवास प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "विभाग की चेकलिस्ट में <strong>निवास का प्रमाण</strong> और समुदाय/जाति से जुड़ा प्रमाण मांगा गया है। आवेदन से पहले ये कागज़ स्कैन करके रखें:",
      list: [
        "<strong>निवास का प्रमाण</strong> (जैसे परिवार रजिस्टर की नकल, बोनाफाइड हिमाचली प्रमाण पत्र)।",
        "<strong>जाति का सबूत:</strong> पिता या परिवार के किसी सदस्य का पहले बना जाति प्रमाण पत्र, या ऐसा रिकॉर्ड जिसमें जाति लिखी हो।",
        "<strong>पहचान:</strong> आधार या दूसरा सरकारी पहचान पत्र, फोटो।",
        "<strong>OBC के लिए:</strong> परिवार की आय का ब्यौरा, क्योंकि नॉन-क्रीमी लेयर की जांच आय पर होती है।",
      ],
      callout: { kind: "ok", html: "फॉर्म और शपथ-पत्र के नमूने सरकार की <a href=\"http://himachalforms.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">himachalforms.nic.in</a> साइट पर मिलते हैं (HimSeva के Download Forms लिंक से)। फाइल छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://himseva.hp.gov.in/" target="_blank" rel="noopener nofollow">himseva.hp.gov.in</a> खोलें और <strong>Citizen Login</strong> में मोबाइल नंबर से रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग (Revenue Department) की सेवाओं में <strong>Caste (SC/ST) Certificate</strong> या <strong>OBC Certificate</strong> चुनें।",
        "फॉर्म भरें और कागज़ अपलोड करें।",
        "डेबिट/क्रेडिट कार्ड या नेट बैंकिंग से शुल्क दें। भुगतान के बाद <strong>पावती (Acknowledgement)</strong> मिलती है; इसकी आवेदन संख्या संभालकर रखें।",
        "पटवारी जांच रिपोर्ट अपलोड करते हैं, तहसील के डीलिंग असिस्टेंट फाइल आगे भेजते हैं और <strong>तहसीलदार</strong> मंज़ूरी देते हैं, खारिज करते हैं या सुधार के लिए लौटाते हैं।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से ऑनलाइन डाउनलोड करें।",
      ],
      callout: { kind: "info", html: "खुद ऑनलाइन न कर पाएं तो नज़दीकी <strong>लोक मित्र केंद्र (LMK)</strong> या CSC पर जाएं। सूचना प्रौद्योगिकी विभाग के नोटिस के अनुसार e-District सेवाओं के आवेदन <strong>सिर्फ ऑनलाइन</strong> लिए जाते हैं; तहसील में कागज़ी आवेदन नहीं चलता। नज़दीकी केंद्र: <a href=\"/service/csc-locator/himachal-pradesh.html\">CSC लोकेटर</a>।" },
    },
    {
      id: "samay",
      title: "शुल्क, समय सीमा और अपील",
      table: {
        head: ["मद", "राशि"],
        rows: [
          ["सरकारी फीस", "₹20"],
          ["प्रोसेसिंग शुल्क", "₹23.60"],
          ["LMK/CSC शुल्क (केंद्र से आवेदन पर)", "₹25"],
          ["LMK से कुल", "₹68.60"],
        ],
      },
      html: "<p>ये दरें HimSeva पोर्टल पर दी गई <strong>Rate List of LMK Charges for G2C Services</strong> से हैं (SC/ST और OBC दोनों के लिए एक जैसी)। भुगतान से पहले स्क्रीन पर दिखी राशि देख लें।</p><p><strong>समय सीमा:</strong> यह सेवा <strong>हिमाचल प्रदेश लोक सेवा गारंटी अधिनियम, 2011</strong> के तहत अधिसूचित है और दिनों की गिनती उसी की अधिसूचना में तय है। हम आधिकारिक पेज पर इसकी संख्या पक्की नहीं कर पाए, इसलिए यहां नहीं लिख रहे।</p>",
      callout: { kind: "warn", html: "<strong>अपील:</strong> आवेदन खारिज हो या तय समय में प्रमाण पत्र न मिले तो <strong>30 दिन के अंदर</strong> प्रथम अपील अधिकारी के पास अपील की जा सकती है। अपील 30 दिन में (ज़्यादा से ज़्यादा 45 दिन) निपटानी होती है; आदेश न माने जाने पर दूसरी अपील होती है। ऑनलाइन अपील के लिए <a href=\"https://onlinepsg.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">onlinepsg.hp.gov.in</a> देखें (हेल्पलाइन 0177-2880400)।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> HimSeva होमपेज पर <strong>Track Application</strong> में पावती वाली आवेदन संख्या डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद Citizen Login से प्रमाण पत्र डाउनलोड होता है।",
        "<strong>सत्यापन:</strong> होमपेज के <strong>Verify Certificate</strong> से कोई भी प्रमाण पत्र की जांच कर सकता है।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत सेवा चुनी (SC/ST की जगह OBC या उल्टा)", "अपनी श्रेणी की सही सेवा में नया आवेदन करें"],
          ["निवास का प्रमाण नहीं लगाया", "परिवार रजिस्टर की नकल या बोनाफाइड हिमाचली प्रमाण पत्र लगाएं"],
          ["जाति का पुराना सबूत नहीं", "परिवार के किसी सदस्य का जाति प्रमाण पत्र या जाति लिखा रिकॉर्ड लगाएं"],
          ["तहसीलदार ने सुधार के लिए लौटाया", "लॉगिन करके बताए गए बदलाव करें और दोबारा जमा करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "HimSeva पोर्टल पर नागरिक हेल्पलाइन <strong>0177-3525111</strong> और हेल्प पेज पर टोल फ्री <strong>1800-180-8076</strong> दिए गए हैं। आवेदन से जुड़ी शिकायत पोर्टल के Feedback / Grievance लिंक से भी कर सकते हैं।",
    },
  ],
  official: [
    { href: "https://himseva.hp.gov.in/", title: "Himachal Online Seva / HimSeva (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://himseva.hp.gov.in/pages/staticSite/serviceList.xhtml", title: "राजस्व विभाग की ऑनलाइन सेवाओं की सूची" },
    { href: "https://onlinepsg.hp.gov.in/", title: "लोक सेवा गारंटी (PSG) अपील पोर्टल" },
    { href: "http://himachalforms.nic.in/", title: "हिमाचल सरकार के फॉर्म" },
  ],
  faq: [
    { q: "हिमाचल में जाति प्रमाण पत्र कहां बनता है?", a: "himseva.hp.gov.in पर ऑनलाइन या लोक मित्र केंद्र (LMK) से आवेदन होता है। पटवारी जांच करते हैं और तहसीलदार प्रमाण पत्र जारी करते हैं।" },
    { q: "हिमाचल जाति प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल की रेट-लिस्ट के अनुसार सरकारी फीस ₹20 और प्रोसेसिंग शुल्क ₹23.60 है। लोक मित्र केंद्र से आवेदन पर ₹25 और लगते हैं, यानी कुल ₹68.60।" },
    { q: "क्या तहसील में जाकर कागज़ी आवेदन दे सकते हैं?", a: "नहीं। सूचना प्रौद्योगिकी विभाग के नोटिस के अनुसार e-District सेवाओं के आवेदन सिर्फ ऑनलाइन लिए जाते हैं। खुद न कर पाएं तो लोक मित्र केंद्र से ऑनलाइन आवेदन करवाएं।" },
    { q: "SC/ST और OBC प्रमाण पत्र एक ही सेवा में बनते हैं?", a: "नहीं। HimSeva पर Caste (SC/ST) Certificate और OBC Certificate अलग-अलग सेवाएं हैं। EWS के लिए भी अलग सेवा है।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "HimSeva होमपेज पर Verify Certificate से जांच करें।" },
  ],
  related: [
    { href: "/states/himachal-pradesh-income-certificate.html", emoji: "💰", title: "हिमाचल आय प्रमाण पत्र", text: "HimSeva पर आवेदन" },
    { href: "/states/himachal-pradesh-domicile-certificate.html", emoji: "🏠", title: "हिमाचल बोनाफाइड / निवास प्रमाण पत्र", text: "स्थायी निवासी का सबूत" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://himseva.hp.gov.in/", label: "📝 HimSeva पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
