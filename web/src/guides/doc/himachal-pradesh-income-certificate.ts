import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - himseva.hp.gov.in (Himachal Online Seva / e-District) home page: service
//   "Income Certificate" and separate "Economically Weaker Section"; Track
//   Application, Verify Certificate, Download Forms (himachalforms.nic.in);
//   Citizen Helpline 0177-3525111; Notice.pdf (DIT, 2022): e-District
//   applications only in online mode, no offline applications.
// - himseva.hp.gov.in help page: toll free 18001808076.
// - "Rate List of LMK Charges for G2C Services" (portal PDF): Income
//   Certificate Govt fee Rs 20, processing Rs 23.60, LMK/CSC Rs 25 (total
//   Rs 68.60 through LMK).
// - emerginghimachal.hp.gov.in kya/income.pdf (Procedure and Checklist for
//   Income certificate): residence proof; affidavit stating family income from
//   known sources; online payment; Patwari verification -> Tehsil dealing
//   assistant -> Tehsildar approves/rejects/sends back; download online;
//   timelines under HP Public Services Guarantee Act 2011.
// - onlinepsg.hp.gov.in About: PSG Act appeal within 30 days, decided in 30
//   (max 45) days, second appeal; helpline 0177-2880400.
// Left out (not confirmable on an official page we could open): the PSG time
// limit in days, a validity period for the income certificate.
export const himachalPradeshIncomeCertificate: DocGuide = {
  state: { slug: "himachal-pradesh", hi: "हिमाचल प्रदेश" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Himachal Pradesh Income Certificate 2026: Apply Online",
  description: "हिमाचल प्रदेश आय प्रमाण पत्र 2026: HimSeva (e-District HP) पर ऑनलाइन आवेदन। शुल्क ₹20 + ₹23.60 प्रोसेसिंग, आय का शपथ-पत्र, तहसीलदार, स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "हिमाचल प्रदेश आय प्रमाण पत्र 2026: HimSeva पर आवेदन, शपथ-पत्र, शुल्क और स्टेटस",
  lead: "हिमाचल प्रदेश में आय प्रमाण पत्र राजस्व विभाग की ऑनलाइन सेवा है। आवेदन <strong>HimSeva (Himachal Online Seva / e-District)</strong> पोर्टल पर खुद या लोक मित्र केंद्र (LMK) से होता है; पटवारी जांच करते हैं और <strong>तहसीलदार</strong> प्रमाण पत्र देते हैं। साथ में निवास का प्रमाण और परिवार की सभी ज्ञात स्रोतों से आय का <strong>शपथ-पत्र</strong> लगता है।",
  facts: [
    ["पोर्टल", '<a href="https://himseva.hp.gov.in/" target="_blank" rel="noopener nofollow">himseva.hp.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (जांच: पटवारी)"],
    ["शुल्क", "₹20 फीस + ₹23.60 प्रोसेसिंग (LMK से कुल ₹68.60)"],
    ["कागज़", "निवास प्रमाण + आय का शपथ-पत्र"],
  ],
  notice: "<strong>ऑफलाइन आवेदन नहीं:</strong> सूचना प्रौद्योगिकी विभाग के नोटिस के अनुसार e-District सेवाओं के आवेदन सिर्फ ऑनलाइन लिए जाते हैं। फोन/कंप्यूटर न हो तो लोक मित्र केंद्र से ऑनलाइन आवेदन करवाएं।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है, और कौन सा चाहिए",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में मांगा जाता है। HimSeva पर आय से जुड़ी ये सेवाएं अलग हैं:",
      table: {
        head: ["सेवा (पोर्टल पर नाम)", "कब चाहिए"],
        rows: [
          ["<strong>Income Certificate</strong>", "योजना, छात्रवृत्ति या दाखिले में जहां \"आय प्रमाण पत्र\" मांगा गया हो"],
          ["<strong>Economically Weaker Section Certificate</strong>", "EWS आरक्षण (नौकरी/दाखिला); यह अलग सेवा है"],
          ["<strong>BPL Certificate</strong>", "जहां गरीबी रेखा से नीचे (BPL) होने का प्रमाण मांगा गया हो"],
        ],
      },
      callout: { kind: "info", html: "OBC आरक्षण के लिए नॉन-क्रीमी लेयर वाला OBC प्रमाण पत्र चाहिए, सिर्फ आय प्रमाण पत्र नहीं। देखें: <a href=\"/states/himachal-pradesh-caste-certificate.html\">हिमाचल जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "विभाग की चेकलिस्ट में ये दो चीज़ें मांगी गई हैं:",
      list: [
        "<strong>निवास का प्रमाण</strong> (जैसे परिवार रजिस्टर की नकल या बोनाफाइड हिमाचली प्रमाण पत्र)।",
        "<strong>शपथ-पत्र (affidavit)</strong>, जिसमें परिवार की <strong>सभी ज्ञात स्रोतों से आय</strong> लिखी हो (नौकरी, खेती-बागवानी, मज़दूरी, व्यापार आदि)।",
        "इसके साथ पहचान पत्र, फोटो और आय का कोई सबूत (वेतन पर्ची, पेंशन, ITR) हो तो लगा दें; इससे पटवारी की जांच जल्दी होती है।",
      ],
      callout: { kind: "warn", html: "शपथ-पत्र में आय कम या गलत न लिखें: पटवारी आपकी बताई आय की जांच करके रिपोर्ट देते हैं। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। शपथ-पत्र का नमूना <a href=\"http://himachalforms.nic.in/\" target=\"_blank\" rel=\"noopener nofollow\">himachalforms.nic.in</a> पर देखें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://himseva.hp.gov.in/" target="_blank" rel="noopener nofollow">himseva.hp.gov.in</a> खोलें और <strong>Citizen Login</strong> में मोबाइल नंबर से रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में <strong>Income Certificate</strong> चुनें।",
        "फॉर्म भरें, निवास प्रमाण और शपथ-पत्र अपलोड करें।",
        "डेबिट/क्रेडिट कार्ड या नेट बैंकिंग से शुल्क दें; भुगतान के बाद मिली <strong>पावती</strong> की आवेदन संख्या संभालकर रखें।",
        "पटवारी जांच रिपोर्ट अपलोड करते हैं, तहसील के डीलिंग असिस्टेंट फाइल आगे भेजते हैं और <strong>तहसीलदार</strong> मंज़ूरी देते हैं, खारिज करते हैं या सुधार के लिए लौटाते हैं।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "लोक मित्र केंद्र या CSC से भी ऑनलाइन आवेदन हो जाता है। नज़दीकी केंद्र: <a href=\"/service/csc-locator/himachal-pradesh.html\">CSC लोकेटर</a>। अपलोड के लिए फाइल छोटी करें: <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
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
      html: "<p>ये दरें HimSeva पोर्टल की <strong>Rate List of LMK Charges for G2C Services</strong> से हैं। भुगतान से पहले स्क्रीन पर दिखी राशि देख लें।</p><p><strong>समय सीमा:</strong> आय प्रमाण पत्र <strong>हिमाचल प्रदेश लोक सेवा गारंटी अधिनियम, 2011</strong> के तहत अधिसूचित सेवा है और दिनों की गिनती उसी अधिसूचना में तय है। हम आधिकारिक पेज पर इसकी संख्या पक्की नहीं कर पाए, इसलिए यहां नहीं लिख रहे।</p>",
      callout: { kind: "warn", html: "<strong>अपील:</strong> आवेदन खारिज हो या तय समय में प्रमाण पत्र न मिले तो <strong>30 दिन के अंदर</strong> प्रथम अपील अधिकारी के पास अपील करें। अपील 30 दिन में (ज़्यादा से ज़्यादा 45 दिन) निपटानी होती है; उसके बाद दूसरी अपील का रास्ता है। देखें: <a href=\"https://onlinepsg.hp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">onlinepsg.hp.gov.in</a> (हेल्पलाइन 0177-2880400)।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> HimSeva होमपेज पर <strong>Track Application</strong> में आवेदन संख्या डालें।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद Citizen Login से।",
        "<strong>सत्यापन:</strong> होमपेज के <strong>Verify Certificate</strong> से।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: नया कब बनवाएं",
      intro: "HimSeva की चेकलिस्ट में आय प्रमाण पत्र की कोई वैधता अवधि नहीं लिखी है। आय हर साल बदलती है, इसलिए छात्रवृत्ति, योजना या दाखिले का विज्ञापन जितना नया (उदाहरण के लिए चालू वित्तीय वर्ष का) प्रमाण पत्र मांगे, वैसा ही लगाएं। शक हो तो जिस दफ्तर में जमा करना है, वहां पूछ लें।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों लौटता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["शपथ-पत्र नहीं लगाया या अधूरा", "परिवार की सभी स्रोतों की आय वाला शपथ-पत्र लगाएं"],
          ["निवास का प्रमाण नहीं", "परिवार रजिस्टर की नकल या बोनाफाइड हिमाचली प्रमाण पत्र लगाएं"],
          ["पटवारी की जांच में आय अलग निकली", "सही आय लिखकर दोबारा आवेदन करें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र बनवा लिया", "EWS की अलग सेवा में आवेदन करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "HimSeva पोर्टल पर नागरिक हेल्पलाइन <strong>0177-3525111</strong> और हेल्प पेज पर टोल फ्री <strong>1800-180-8076</strong> दिए गए हैं। पोर्टल के Feedback / Grievance लिंक से शिकायत भी दर्ज होती है।",
    },
  ],
  official: [
    { href: "https://himseva.hp.gov.in/", title: "Himachal Online Seva / HimSeva (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://himseva.hp.gov.in/pages/staticSite/serviceList.xhtml", title: "राजस्व विभाग की ऑनलाइन सेवाओं की सूची" },
    { href: "https://onlinepsg.hp.gov.in/", title: "लोक सेवा गारंटी (PSG) अपील पोर्टल" },
    { href: "http://himachalforms.nic.in/", title: "हिमाचल सरकार के फॉर्म (शपथ-पत्र आदि)" },
  ],
  faq: [
    { q: "हिमाचल में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "himseva.hp.gov.in पर रजिस्टर/लॉगिन करें, राजस्व विभाग में Income Certificate चुनें, निवास प्रमाण और आय का शपथ-पत्र अपलोड करें, शुल्क दें और पावती रखें। पटवारी की जांच के बाद तहसीलदार प्रमाण पत्र जारी करते हैं।" },
    { q: "हिमाचल आय प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल की रेट-लिस्ट के अनुसार सरकारी फीस ₹20 और प्रोसेसिंग शुल्क ₹23.60 है। लोक मित्र केंद्र से आवेदन पर ₹25 और लगते हैं, यानी कुल ₹68.60।" },
    { q: "आय प्रमाण पत्र में कौन से कागज़ लगते हैं?", a: "विभाग की चेकलिस्ट के अनुसार निवास का प्रमाण और परिवार की सभी ज्ञात स्रोतों से आय बताने वाला शपथ-पत्र।" },
    { q: "आय प्रमाण पत्र कितने दिन में बनता है?", a: "यह लोक सेवा गारंटी अधिनियम 2011 के तहत अधिसूचित सेवा है और समय सीमा उसी में तय है। तय समय में न बने तो 30 दिन के अंदर प्रथम अपील कर सकते हैं।" },
    { q: "क्या EWS के लिए यही प्रमाण पत्र चलेगा?", a: "नहीं। HimSeva पर Economically Weaker Section Certificate अलग सेवा है; EWS आरक्षण के लिए वही बनवाएं।" },
  ],
  related: [
    { href: "/states/himachal-pradesh-caste-certificate.html", emoji: "📜", title: "हिमाचल जाति प्रमाण पत्र", text: "SC/ST और OBC" },
    { href: "/states/himachal-pradesh-domicile-certificate.html", emoji: "🏠", title: "हिमाचल बोनाफाइड / निवास प्रमाण पत्र", text: "स्थायी निवासी का सबूत" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://himseva.hp.gov.in/", label: "📝 HimSeva पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
