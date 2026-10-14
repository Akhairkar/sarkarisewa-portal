import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; mizoram.gov.in sub-domains, including
// edistrict.mizoram.gov.in and dconline.mizoram.gov.in, return 403 to our
// checker, so we relied on NeGD and district NIC pages):
// - negd.gov.in State Digital Solutions directory, "DC Online (e-District V2)",
//   Mizoram, published by SeMT; implementing agency Department of Information
//   & Communication Technology: citizens apply through Common Service Centres
//   (CSC) or directly at the DC office; DC staff verify, DC officers give
//   final approval; certificates published for download and delivery; SMS
//   updates; public certificate verification without login; covers Tribal,
//   Residential, Income and No-Income certificates.
// - serchhip.nic.in "DC Online e-District Version 2": dconline.mizoram.gov.in;
//   Income, Residential/Permanent Residential and Tribal certificates can be
//   applied online through the listed CSC/VLEs without going to the DC office.
// - lunglei.nic.in "Schedule Tribe/Caste Certificate/Residential Certificate"
//   (page last updated 2020, same text on serchhip.nic.in and aizawl.nic.in):
//   Office of the Deputy Commissioner is the nodal department; any Mizo whose
//   birth place or parents belong to the jurisdiction of Mizoram is eligible;
//   form from the DC office (e-District); applicants below 18 need voter ID of
//   mother/father/guardian; documents: attested voter ID, attested birth
//   certificate, endorsement from Village Council, endorsement from YMA,
//   attested ration card, two passport photos. (A per-certificate charge is
//   given there but the page is from 2020, so the amount is left out.)
// Left out (not confirmable on a current official page we could open): fee
// amount, time limit, validity, appeal route, an OBC or central-format
// service.
export const mizoramCasteCertificate: DocGuide = {
  state: { slug: "mizoram", hi: "मिज़ोरम" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Mizoram Caste Certificate 2026: Apply & Status",
  description: "मिज़ोरम ST (Tribal) प्रमाण पत्र 2026: DC Online (e-District V2) से CSC या DC कार्यालय में आवेदन, ज़रूरी कागज़ (Village Council, YMA), स्टेटस और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मिज़ोरम जाति (ST/Tribal) प्रमाण पत्र 2026: DC Online से आवेदन, कागज़ और सत्यापन",
  lead: "मिज़ोरम में जाति प्रमाण पत्र के नाम पर मुख्य रूप से <strong>अनुसूचित जनजाति (Tribal / ST) प्रमाण पत्र</strong> बनता है, जिसे ज़िले का उपायुक्त (Deputy Commissioner) कार्यालय जारी करता है। अब आवेदन <strong>DC Online (e-District Version 2)</strong> पर होता है: नज़दीकी कॉमन सर्विस सेंटर (CSC/VLE) से या सीधे DC कार्यालय में। DC कार्यालय के कर्मचारी जांच करते हैं, DC अधिकारी अंतिम मंज़ूरी देते हैं, और हर चरण पर SMS आता है। मुख्य कागज़ हैं मतदाता पहचान पत्र, जन्म प्रमाण पत्र और Village Council व YMA का समर्थन पत्र।",
  facts: [
    ["सिस्टम", "DC Online (e-District V2)"],
    ["कहां आवेदन", "CSC / VLE या DC कार्यालय"],
    ["जारी करते हैं", "उपायुक्त (DC) कार्यालय"],
    ["ज़रूरी", "Village Council और YMA का समर्थन पत्र"],
  ],
  notice: "<strong>सीधे घर से ऑनलाइन?</strong> सरकारी विवरण के अनुसार DC Online पर आवेदन CSC के ज़रिए या DC कार्यालय में होता है। इसलिए कागज़ लेकर नज़दीकी CSC/VLE या DC कार्यालय जाएं। (मिज़ोरम की सरकारी वेबसाइटें हमारे सिस्टम से नहीं खुलीं, इसलिए खुद-ऑनलाइन आवेदन की सुविधा की हम पुष्टि नहीं कर पाए।)",
  sections: [
    {
      id: "kaun",
      title: "कौन बनवा सकता है",
      list: [
        "ज़िला वेबसाइटों के अनुसार <strong>हर वह मिज़ो</strong> जिसका जन्म-स्थान या माता-पिता मिज़ोरम सरकार के क्षेत्र के हैं, ST/जाति प्रमाण पत्र के लिए पात्र है।",
        "जनजाति का दर्जा राज्य के हिसाब से तय होता है। दूसरे राज्य से आए SC/ST/OBC परिवारों को आम तौर पर अपने मूल राज्य से प्रमाण पत्र बनवाना होता है; ऐसे मामले में पहले DC कार्यालय से पूछ लें।",
        "निवास प्रमाण पत्र (Residential / Permanent Residential) अलग सेवा है; देखें <a href=\"/states/mizoram-domicile-certificate.html\">मिज़ोरम निवास प्रमाण पत्र</a>।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (DC कार्यालय की सूची)",
      list: [
        "<strong>मतदाता पहचान पत्र</strong> (सत्यापित कॉपी)। 18 साल से कम उम्र हैं तो <strong>माता/पिता/अभिभावक का मतदाता पहचान पत्र</strong>।",
        "<strong>जन्म प्रमाण पत्र</strong> (सत्यापित कॉपी)।",
        "<strong>Village Council का समर्थन पत्र</strong> (endorsement)।",
        "<strong>YMA (Young Mizo Association) का समर्थन पत्र</strong>।",
        "<strong>राशन कार्ड</strong> (सत्यापित कॉपी)।",
        "<strong>दो पासपोर्ट साइज़ फोटो</strong>।",
      ],
      callout: { kind: "info", html: "यह सूची लुंगलेई, सेरछिप और आइज़ोल ज़िलों की वेबसाइट पर एक जैसी दी गई है, पर पेज पुराने हैं। जाने से पहले अपने CSC या DC कार्यालय से ताज़ा सूची पूछ लें।" },
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें (स्टेप बाय स्टेप)",
      steps: [
        "ऊपर लिखे कागज़ तैयार करें; Village Council और YMA से समर्थन पत्र पहले ले लें।",
        "नज़दीकी <strong>CSC / VLE</strong> पर जाएं (कई ज़िलों की वेबसाइट पर CSC/VLE की सूची और मोबाइल नंबर दिए गए हैं) या अपने ज़िले के <strong>DC कार्यालय</strong> के सुविधा केंद्र पर जाएं।",
        "ऑपरेटर <strong>DC Online</strong> पर Tribal certificate का आवेदन भरकर कागज़ चढ़ाएगा। आवेदन नंबर/रसीद ज़रूर लें।",
        "DC कार्यालय के कर्मचारी जांच करते हैं और DC अधिकारी अंतिम मंज़ूरी देते हैं। प्रगति की सूचना SMS से आती है।",
        "मंज़ूरी के बाद प्रमाण पत्र डाउनलोड/डिलीवरी के लिए जारी होता है; CSC या DC कार्यालय से लें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> SMS से सूचना आती है; ज़्यादा जानकारी के लिए वही CSC या DC कार्यालय जहां आवेदन दिया।",
        "<strong>असली है या नहीं:</strong> DC Online में सार्वजनिक सत्यापन की सुविधा है, जिसमें बिना लॉगिन कोई भी प्रमाण पत्र की जांच कर सकता है।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखने के बारे में सामान्य जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "samay",
      title: "फीस, समय सीमा और वैधता",
      list: [
        "<strong>फीस:</strong> ज़िला वेबसाइटों पर फॉर्म और सेवा शुल्क की छोटी रकम लिखी है, पर वे पेज 2020 या उससे पुराने हैं। मौजूदा रकम CSC या DC कार्यालय से पूछें और रसीद लें।",
        "<strong>समय सीमा:</strong> किसी मौजूदा आधिकारिक पेज पर हमें नहीं मिली।",
        "<strong>वैधता:</strong> आधिकारिक पेज पर नहीं लिखी। नौकरी/दाखिले का विज्ञापन किसी खास तारीख के बाद का प्रमाण पत्र मांगे तो उसी के हिसाब से नया बनवाएं।",
      ],
      callout: { kind: "info", html: "केंद्र सरकार की नौकरी में OBC आरक्षण के लिए केंद्र के फॉर्मेट वाला OBC (नॉन-क्रीमी लेयर) प्रमाण पत्र चाहिए होता है। DC Online की सूची में Tribal, Residential, Income और No-Income प्रमाण पत्र हैं; OBC की ज़रूरत हो तो DC कार्यालय से पूछें।" },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["Village Council या YMA का समर्थन पत्र नहीं", "दोनों से समर्थन पत्र लेकर लगाएं"],
          ["18 साल से कम, अपना वोटर ID नहीं", "माता/पिता/अभिभावक का मतदाता पहचान पत्र लगाएं"],
          ["कॉपी सत्यापित नहीं", "वोटर ID, जन्म प्रमाण पत्र और राशन कार्ड की सत्यापित कॉपी दें"],
          ["दूसरे ज़िले में आवेदन", "जिस ज़िले में रहते हैं उसी DC कार्यालय/वहीं के CSC से आवेदन करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "सबसे पहले अपने ज़िले के <strong>DC कार्यालय</strong> का सुविधा केंद्र। DC Online को सूचना एवं संचार प्रौद्योगिकी विभाग (ICT), मिज़ोरम लागू करता है। इस सेवा के लिए अलग हेल्पलाइन नंबर किसी आधिकारिक पेज पर हमें नहीं मिला।",
    },
  ],
  official: [
    { href: "https://dconline.mizoram.gov.in", title: "DC Online (e-District V2), मिज़ोरम", note: "सेरछिप ज़िला वेबसाइट पर दिया गया पता" },
    { href: "https://negd.gov.in/isl/Directory/statedata/931", title: "NeGD: DC Online (e-District V2) का विवरण" },
    { href: "https://serchhip.nic.in/dc-online-e-district-version-2/", title: "सेरछिप ज़िला: DC Online और CSC/VLE सूची" },
    { href: "https://lunglei.nic.in/?p=2861", title: "लुंगलेई ज़िला: ST/जाति/निवास प्रमाण पत्र के कागज़" },
  ],
  faq: [
    { q: "मिज़ोरम में ST (Tribal) प्रमाण पत्र कैसे बनवाएं?", a: "मतदाता पहचान पत्र, जन्म प्रमाण पत्र, Village Council और YMA का समर्थन पत्र, राशन कार्ड और दो फोटो लेकर नज़दीकी CSC/VLE या DC कार्यालय जाएं। आवेदन DC Online (e-District V2) पर दर्ज होता है और DC कार्यालय मंज़ूरी देता है।" },
    { q: "मिज़ोरम में ST प्रमाण पत्र कौन जारी करता है?", a: "ज़िले का उपायुक्त (Deputy Commissioner) कार्यालय। DC कर्मचारी जांच करते हैं और DC अधिकारी अंतिम मंज़ूरी देते हैं।" },
    { q: "18 साल से कम उम्र के बच्चे का प्रमाण पत्र कैसे बनेगा?", a: "ज़िला वेबसाइटों के अनुसार 18 साल से कम उम्र वालों को माता, पिता या अभिभावक का मतदाता पहचान पत्र लगाना होता है।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "DC Online में सार्वजनिक सत्यापन की सुविधा है, जहां बिना लॉगिन प्रमाण पत्र की जांच हो सकती है।" },
  ],
  related: [
    { href: "/states/mizoram-income-certificate.html", emoji: "💰", title: "मिज़ोरम आय प्रमाण पत्र", text: "DC Online से आवेदन" },
    { href: "/states/mizoram-domicile-certificate.html", emoji: "🏠", title: "मिज़ोरम निवास प्रमाण पत्र", text: "Residential / PRC" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "/service/csc-locator/mizoram.html", label: "📍 नज़दीकी CSC खोजें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
