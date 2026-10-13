import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; digitalgujarat.gov.in does not open from our
// checker, so we used district NIC pages and search extracts of the portal):
// - digitalgujarat.gov.in Citizen Services list (search extract): income
//   certificate, EWS income-and-asset certificate (central / state), NCL.
// - mahisagar.nic.in certificate page: Income Certificate, EWS (for job /
//   education) and other certificates on Digital Gujarat; Jan Seva Kendra,
//   Mamlatdar office; Digital Gujarat Help Desk 18002335500.
// - banaskantha.nic.in "Panchayat" page: "Income Certificate (Panchayat)" and
//   other certificates applied online on Digital Gujarat.
// - jamnagar.nic.in certificate page (search extract): income certificate among
//   certificates at Mamlatdar / TDO offices, apply on Digital Gujarat.
// - services.india.gov.in district listings "Gujarat Collectorate District ...
//   Obtain Income Certificate" (Rajkot, Ahmedabad, Patan, Botad, Valsad,
//   Narmada) exist (pages are script-rendered; content not read).
// Left out (no current official page we could open): fee (old page said Rs 20),
// time limit, validity period (a 2020 state release on 3-year validity of the
// SEBC NCL income certificate was found only as an old copy).
export const gujaratIncomeCertificate: DocGuide = {
  state: { slug: "gujarat", hi: "गुजरात" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Gujarat Income Certificate 2026: Apply Online",
  description: "Gujarat (गुजरात) आय प्रमाण पत्र (आवकनो दाखलो) 2026: Digital Gujarat पोर्टल या जन सेवा केंद्र/पंचायत से आवेदन, ज़रूरी कागज़, स्टेटस और हेल्पडेस्क।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "गुजरात आय प्रमाण पत्र (आवकनो दाखलो) 2026: Digital Gujarat पर आवेदन, कागज़ और स्टेटस",
  lead: "गुजरात में आय प्रमाण पत्र (आवकनो दाखलो) <strong>Digital Gujarat</strong> पोर्टल (digitalgujarat.gov.in) पर ऑनलाइन, या मामलतदार कार्यालय के <strong>जन सेवा केंद्र</strong> से बनता है। कई जिलों में यह सेवा <strong>पंचायत स्तर</strong> पर भी दी गई है। EWS आरक्षण के लिए अलग EWS प्रमाण पत्र बनता है। मदद के लिए Digital Gujarat हेल्पडेस्क <strong>1800 233 5500</strong> है।",
  facts: [
    ["पोर्टल", '<a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a>'],
    ["कहां", "जन सेवा केंद्र (मामलतदार) / पंचायत / ऑनलाइन"],
    ["फीस", "आवेदन के समय पोर्टल/केंद्र पर"],
    ["हेल्पडेस्क", "1800 233 5500"],
  ],
  notice: "<strong>सच्ची आय लिखें:</strong> आय प्रमाण पत्र परिवार की घोषित आय और तलाटी/मामलतदार की जांच पर बनता है। गलत आय लिखने पर प्रमाण पत्र रद्द हो सकता है।",
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की कुल सालाना आय का सरकारी प्रमाण है। यह मांगा जाता है:",
      list: [
        "<strong>छात्रवृत्ति</strong> और फीस सहायता (Digital Gujarat पर ही कई छात्रवृत्ति योजनाएं हैं)",
        "आय पर आधारित <strong>सरकारी योजनाएं</strong>",
        "<strong>EWS आरक्षण</strong> के लिए अलग \"Unreserved Economically Weaker Sections\" प्रमाण पत्र बनता है; साधारण आय प्रमाण पत्र उसकी जगह नहीं चलता",
      ],
      callout: { kind: "info", html: "SEBC/OBC आरक्षण के लिए <strong>नॉन-क्रीमी लेयर</strong> प्रमाण पत्र अलग से बनता है (राज्य और केंद्र के लिए अलग)। देखें: <a href=\"/states/gujarat-caste-certificate.html\">गुजरात जाति प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "कागज़ों की पक्की सूची Digital Gujarat पर सेवा चुनते समय दिखती है। आम तौर पर ये तैयार रखें:",
      list: [
        "<strong>आधार कार्ड</strong> और <strong>राशन कार्ड</strong>",
        "<strong>आय का प्रमाण:</strong> नौकरी हो तो वेतन पर्ची/Form 16, ITR; खेती हो तो 7/12 उतारा; या तलाटी का आय दाखला",
        "<strong>स्व-घोषणा पत्र</strong> जिसमें परिवार की सालाना आय और उसके स्रोत लिखे हों",
        "पासपोर्ट साइज़ फोटो",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> आय की स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "Digital Gujarat पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a> खोलें और मोबाइल नंबर से <strong>रजिस्टर</strong> करके लॉगिन करें।',
        "<strong>Citizen Services</strong> में <strong>Income Certificate</strong> चुनें।",
        "परिवार की आय और उसके स्रोत भरें, कागज़ अपलोड करें, पोर्टल पर दिखा शुल्क (अगर हो) भरें।",
        "आवेदन संख्या नोट करें; आगे स्टेटस इसी से दिखेगा।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से या जन सेवा केंद्र से मिलता है।",
      ],
    },
    {
      id: "offline",
      title: "जन सेवा केंद्र या पंचायत से",
      intro: "मामलतदार कार्यालय के <strong>जन सेवा केंद्र</strong> पर, या जहां पंचायत स्तर पर सेवा दी गई है वहां ग्राम पंचायत से आवेदन करें। कागज़ों की मूल और कॉपी साथ ले जाएं और रसीद ज़रूर लें। नज़दीकी केंद्र: <a href=\"/service/csc-locator/gujarat.html\">गुजरात CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय, फीस और शिकायत",
      list: [
        "<strong>समय:</strong> कितने दिन लगेंगे, यह हमें किसी मौजूदा सरकारी पेज पर नहीं मिला। रसीद पर दी तारीख देखें।",
        "<strong>फीस:</strong> आवेदन के समय पोर्टल या केंद्र पर बताई जाती है; हमें आधिकारिक राशि वाला मौजूदा पेज नहीं मिला।",
        "<strong>शिकायत:</strong> पहले मामलतदार कार्यालय; हल न मिले तो कलेक्टर कार्यालय या राज्य की <strong>SWAGAT</strong> शिकायत व्यवस्था।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> Digital Gujarat में लॉगिन करके, आवेदन संख्या से।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद पोर्टल से या जन सेवा केंद्र से।",
        "<strong>मदद:</strong> Digital Gujarat हेल्पडेस्क <strong>1800 233 5500</strong>।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता: नया कब बनवाएं",
      intro: "गुजरात के आय प्रमाण पत्र की वैधता बताने वाला कोई मौजूदा सरकारी आदेश हमें नहीं मिला। छात्रवृत्ति, दाखिले और योजनाओं के फॉर्म में लिखा होता है कि किस वित्तीय वर्ष या तारीख के बाद का प्रमाण पत्र चलेगा। उसी के अनुसार समय रहते नया प्रमाण पत्र बनवाएं।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई प्रमाण नहीं", "वेतन पर्ची, ITR, 7/12 उतारा या तलाटी का दाखला लगाएं"],
          ["आय के स्रोत अधूरे", "खेती, मज़दूरी, नौकरी, व्यापार: सबकी आय लिखें"],
          ["EWS के लिए साधारण आय प्रमाण पत्र", "Digital Gujarat पर EWS वाली अलग सेवा चुनें"],
          ["आरक्षण के लिए आय प्रमाण पत्र", "SEBC के लिए नॉन-क्रीमी लेयर प्रमाण पत्र बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "जिला NIC पृष्ठों पर <strong>Digital Gujarat हेल्पडेस्क: 1800 233 5500</strong> दिया गया है। आवेदन की बात के लिए अपने मामलतदार कार्यालय के जन सेवा केंद्र से संपर्क करें।",
    },
  ],
  official: [
    { href: "https://www.digitalgujarat.gov.in/", title: "Digital Gujarat (ऑनलाइन आवेदन, स्टेटस)" },
    { href: "https://mahisagar.nic.in/service/certificate/", title: "महीसागर जिला: प्रमाण पत्र सेवाएं और हेल्पडेस्क" },
    { href: "https://banaskantha.nic.in/service/panchayat/", title: "बनासकांठा जिला: पंचायत स्तर की प्रमाण पत्र सेवाएं" },
  ],
  faq: [
    { q: "गुजरात में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "digitalgujarat.gov.in पर रजिस्टर/लॉगिन करें, Citizen Services में Income Certificate चुनें, आय की जानकारी भरें और कागज़ अपलोड करें। जन सेवा केंद्र या पंचायत से भी आवेदन होता है।" },
    { q: "गुजरात आय प्रमाण पत्र की फीस कितनी है?", a: "आवेदन के समय पोर्टल या केंद्र पर बताई जाती है। हमें आधिकारिक राशि वाला मौजूदा पेज नहीं मिला, इसलिए यहां राशि नहीं लिखी है।" },
    { q: "क्या EWS के लिए यही आय प्रमाण पत्र चलेगा?", a: "नहीं। Digital Gujarat पर EWS (Unreserved Economically Weaker Sections) प्रमाण पत्र की अलग सेवा है।" },
    { q: "Digital Gujarat का हेल्पलाइन नंबर क्या है?", a: "जिला पृष्ठों पर Digital Gujarat हेल्पडेस्क 1800 233 5500 दिया गया है।" },
  ],
  related: [
    { href: "/states/gujarat-caste-certificate.html", emoji: "📜", title: "गुजरात जाति प्रमाण पत्र", text: "SC/ST, SEBC, नॉन-क्रीमी लेयर" },
    { href: "/states/gujarat-domicile-certificate.html", emoji: "🏠", title: "गुजरात डोमिसाइल प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://www.digitalgujarat.gov.in/", label: "📝 Digital Gujarat पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
