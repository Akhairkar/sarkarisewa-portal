import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; mizoram.gov.in sub-domains, including
// edistrict.mizoram.gov.in and dconline.mizoram.gov.in, return 403 to our
// checker, so we relied on NeGD and district NIC pages):
// - negd.gov.in State Digital Solutions directory, "DC Online (e-District V2)",
//   Mizoram (Department of ICT): apply through CSC or directly at the DC
//   office; DC staff verify, DC officers approve; certificates published for
//   download and delivery; SMS updates; public verification without login;
//   covers Tribal, Residential, Income and No-Income certificates.
// - serchhip.nic.in "DC Online e-District Version 2": dconline.mizoram.gov.in;
//   income, residential and tribal certificates applied online through the
//   listed CSC/VLEs without visiting the DC office.
// - aizawl.nic.in "Income Certificate" (updated 02.05.2022): documents: voter
//   ID (attested copy); government employee: last pay certificate
//   countersigned by DDO/Head of Department; non-government: original
//   recommendation letter of the Local Council chairman/secretary or Village
//   Council; non-government earning more than Rs 10,00,000: affidavit or
//   notarised copy; certificate collected from the Facilitation Centre.
//   mamit.nic.in (2018) has the same list. siaha.nic.in (2019): children below
//   18 give father's voter ID; children whose parents are divorced or dead
//   give a birth certificate; Village Council recommendation; one photo.
// Left out (not confirmable on a current official page we could open): fee
// amount (district pages quote form prices but are 2018-2022), time limit,
// validity. The old page's "₹20 fee" and "e-District portal se ghar baithe"
// claims could not be confirmed.
export const mizoramIncomeCertificate: DocGuide = {
  state: { slug: "mizoram", hi: "मिज़ोरम" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Mizoram Income Certificate 2026: Apply Online",
  description: "Mizoram (मिज़ोरम) आय प्रमाण पत्र 2026: DC Online (e-District V2) से CSC या DC कार्यालय में आवेदन, सरकारी/गैर-सरकारी लोगों के कागज़, SMS अपडेट और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "मिज़ोरम आय प्रमाण पत्र 2026: DC Online से आवेदन, कागज़ और सत्यापन",
  lead: "मिज़ोरम में आय प्रमाण पत्र ज़िले का उपायुक्त (DC) कार्यालय जारी करता है। आवेदन <strong>DC Online (e-District Version 2)</strong> पर दर्ज होता है: नज़दीकी कॉमन सर्विस सेंटर (CSC/VLE) से या सीधे DC कार्यालय में। सरकारी कर्मचारियों को DDO से प्रतिहस्ताक्षरित अंतिम वेतन प्रमाण पत्र और गैर-सरकारी लोगों को Local Council / Village Council का सिफारिशी पत्र लगाना होता है। इसी सिस्टम में आय न होने का प्रमाण पत्र (No-Income certificate) भी बनता है।",
  facts: [
    ["सिस्टम", "DC Online (e-District V2)"],
    ["कहां आवेदन", "CSC / VLE या DC कार्यालय"],
    ["जारी करते हैं", "उपायुक्त (DC) कार्यालय"],
    ["गैर-सरकारी के लिए", "Village / Local Council का सिफारिशी पत्र"],
  ],
  notice: "<strong>सीधे घर से ऑनलाइन?</strong> सरकारी विवरण के अनुसार DC Online पर आवेदन CSC के ज़रिए या DC कार्यालय में होता है। मिज़ोरम की सरकारी वेबसाइटें हमारे सिस्टम से नहीं खुलीं, इसलिए खुद-ऑनलाइन आवेदन की सुविधा की हम पुष्टि नहीं कर पाए।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में मांगा जाता है। DC Online की सूची में <strong>Income</strong> और <strong>No-Income</strong> (कोई आय नहीं) दोनों प्रमाण पत्र हैं; जिसकी अपनी कोई आय नहीं, उसके लिए फॉर्म में मांगा गया प्रमाण पत्र कौन सा है, यह देखकर आवेदन करें।",
      callout: { kind: "info", html: "जनजाति का प्रमाण चाहिए तो देखें <a href=\"/states/mizoram-caste-certificate.html\">मिज़ोरम ST (Tribal) प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (ज़िला DC कार्यालयों की सूची)",
      table: {
        head: ["आप कौन हैं", "कागज़"],
        rows: [
          ["सभी", "<strong>मतदाता पहचान पत्र</strong> की सत्यापित कॉपी; एक पासपोर्ट साइज़ फोटो"],
          ["सरकारी कर्मचारी", "<strong>अंतिम वेतन प्रमाण पत्र (Last Pay Certificate)</strong>, DDO या विभागाध्यक्ष से प्रतिहस्ताक्षरित"],
          ["गैर-सरकारी (खेती, व्यापार, मज़दूरी आदि)", "<strong>Local Council के अध्यक्ष/सचिव या Village Council का सिफारिशी पत्र</strong> (मूल प्रति)"],
          ["गैर-सरकारी, आय ₹10 लाख से ज़्यादा", "ऊपर के साथ <strong>शपथ-पत्र</strong> या नोटरी से प्रमाणित घोषणा"],
          ["18 साल से कम उम्र", "पिता का मतदाता पहचान पत्र; माता-पिता का तलाक हुआ हो या निधन हो गया हो तो जन्म प्रमाण पत्र"],
        ],
      },
      callout: { kind: "warn", html: "यह सूची आइज़ोल, ममित और सियाहा ज़िलों की वेबसाइटों से है और पेज पुराने (2018-2022) हैं। जाने से पहले CSC या DC कार्यालय से ताज़ा सूची पूछ लें। शपथ-पत्र के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें (स्टेप बाय स्टेप)",
      steps: [
        "अपनी स्थिति वाले कागज़ तैयार करें; गैर-सरकारी हैं तो पहले Village/Local Council से सिफारिशी पत्र लें।",
        "नज़दीकी <strong>CSC / VLE</strong> पर जाएं (कई ज़िलों की वेबसाइट पर CSC/VLE की सूची और मोबाइल नंबर हैं) या ज़िले के <strong>DC कार्यालय</strong> के सुविधा केंद्र पर।",
        "ऑपरेटर <strong>DC Online</strong> पर Income certificate का आवेदन भरकर कागज़ चढ़ाएगा। आवेदन नंबर/रसीद लें।",
        "DC कार्यालय के कर्मचारी जांच करते हैं और DC अधिकारी मंज़ूरी देते हैं। हर चरण की सूचना SMS से आती है।",
        "मंज़ूरी के बाद प्रमाण पत्र CSC या DC कार्यालय से लें।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> SMS से सूचना आती है; ज़्यादा जानकारी के लिए वही CSC या DC कार्यालय।",
        "<strong>असली है या नहीं:</strong> DC Online में सार्वजनिक सत्यापन की सुविधा है, जहां बिना लॉगिन प्रमाण पत्र की जांच हो सकती है।",
      ],
      html: '<p>सामान्य जानकारी: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "samay",
      title: "फीस, समय सीमा और वैधता",
      list: [
        "<strong>फीस:</strong> ज़िला वेबसाइटों पर फॉर्म की छोटी कीमत लिखी है, पर वे पेज 2018-2022 के हैं। मौजूदा रकम CSC या DC कार्यालय से पूछें और रसीद लें।",
        "<strong>समय सीमा और वैधता:</strong> किसी मौजूदा आधिकारिक पेज पर हमें नहीं मिली। आय बदलती है, इसलिए छात्रवृत्ति/योजना का फॉर्म किस तारीख के बाद का प्रमाण पत्र मांगता है, वह देखकर ज़रूरत हो तो नया बनवाएं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गैर-सरकारी, Council का पत्र नहीं", "Local Council / Village Council से सिफारिशी पत्र (मूल) लें"],
          ["सरकारी कर्मचारी, वेतन प्रमाण पत्र पर प्रतिहस्ताक्षर नहीं", "DDO या विभागाध्यक्ष से प्रतिहस्ताक्षर कराएं"],
          ["आय ₹10 लाख से ऊपर, शपथ-पत्र नहीं", "शपथ-पत्र या नोटरी से प्रमाणित घोषणा लगाएं"],
          ["वोटर ID की कॉपी सत्यापित नहीं", "सत्यापित कॉपी दें, मूल साथ ले जाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "अपने ज़िले के <strong>DC कार्यालय</strong> का सुविधा केंद्र या जिस CSC से आवेदन किया। DC Online को सूचना एवं संचार प्रौद्योगिकी विभाग (ICT), मिज़ोरम लागू करता है; इस सेवा का अलग हेल्पलाइन नंबर किसी आधिकारिक पेज पर हमें नहीं मिला।",
    },
  ],
  official: [
    { href: "https://dconline.mizoram.gov.in", title: "DC Online (e-District V2), मिज़ोरम", note: "सेरछिप ज़िला वेबसाइट पर दिया गया पता" },
    { href: "https://negd.gov.in/isl/Directory/statedata/931", title: "NeGD: DC Online (e-District V2) का विवरण" },
    { href: "https://serchhip.nic.in/dc-online-e-district-version-2/", title: "सेरछिप ज़िला: DC Online और CSC/VLE सूची" },
    { href: "https://aizawl.nic.in/service/income-certificate/", title: "आइज़ोल ज़िला: आय प्रमाण पत्र के कागज़" },
  ],
  faq: [
    { q: "मिज़ोरम में आय प्रमाण पत्र कैसे बनवाएं?", a: "मतदाता पहचान पत्र और अपनी स्थिति वाला आय-प्रमाण (सरकारी: DDO से प्रतिहस्ताक्षरित अंतिम वेतन प्रमाण पत्र; गैर-सरकारी: Village/Local Council का सिफारिशी पत्र) लेकर नज़दीकी CSC/VLE या DC कार्यालय जाएं। आवेदन DC Online पर दर्ज होता है।" },
    { q: "गैर-सरकारी लोगों को आय का क्या सबूत देना होता है?", a: "ज़िला वेबसाइटों के अनुसार Local Council के अध्यक्ष/सचिव या Village Council का मूल सिफारिशी पत्र। आय ₹10 लाख से ज़्यादा हो तो शपथ-पत्र या नोटरी से प्रमाणित घोषणा भी।" },
    { q: "जिसकी कोई आय नहीं, उसका क्या?", a: "DC Online में No-Income (आय न होने का) प्रमाण पत्र भी शामिल है। योजना/फॉर्म में कौन सा प्रमाण पत्र मांगा गया है, देखकर CSC या DC कार्यालय में आवेदन करें।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "DC Online में सार्वजनिक सत्यापन की सुविधा है, जहां बिना लॉगिन प्रमाण पत्र की जांच हो सकती है।" },
  ],
  related: [
    { href: "/states/mizoram-caste-certificate.html", emoji: "📜", title: "मिज़ोरम ST (Tribal) प्रमाण पत्र", text: "जनजाति प्रमाण पत्र" },
    { href: "/states/mizoram-domicile-certificate.html", emoji: "🏠", title: "मिज़ोरम निवास प्रमाण पत्र", text: "Residential / PRC" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "/service/csc-locator/mizoram.html", label: "📍 नज़दीकी CSC खोजें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
