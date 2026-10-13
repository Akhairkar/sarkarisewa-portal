import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; digitalgujarat.gov.in does not open from our
// checker, so we used district NIC pages and search extracts of the portal):
// - digitalgujarat.gov.in Citizen Services list (search extract): SEBC
//   certificate, income certificate, Non-Creamy Layer certificate for Gujarat
//   Government and a separate one for Central Government, EWS certificate.
// - ahmedabad.nic.in "Non-Creamy Layer Certificate For Gujarat Government"
//   (updated Jul 2025): apply via digitalgujarat.gov.in; Mamlatdar Office, Jan
//   Seva Kendra; phone 18002335500.
// - surat.nic.in, valsad.nic.in, banaskantha.nic.in caste certificate pages:
//   services on Digital Gujarat: SEBC Certificate, SC/ST Caste Certificate,
//   Non-Creamy Layer Certificate For Gujarat Government, Nomad-Denotified Caste
//   Certificate; Jan Seva Kendra at tehsil/collectorate; Digital Gujarat Help
//   Desk 18002335500. banaskantha.nic.in "Panchayat" page: SC/ST caste, SEBC
//   and NCL (Gujarat Govt) also as "(Panchayat)" services.
// - mahisagar.nic.in certificate page: Non-Creamy Layer Certificate For Central
//   Government; EWS (for job/education) at Jan Seva Kendra, Mamlatdar office.
// Left out (no current official page we could open): fee, time limit, a fixed
// document list, validity periods (a 2020 government release on SEBC NCL
// validity was found only as an old copy).
export const gujaratCasteCertificate: DocGuide = {
  state: { slug: "gujarat", hi: "गुजरात" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Gujarat Caste Certificate 2026: Apply & Status",
  description: "गुजरात जाति प्रमाण पत्र (SC/ST, SEBC) 2026: Digital Gujarat पोर्टल या जन सेवा केंद्र से आवेदन, नॉन-क्रीमी लेयर (राज्य/केंद्र), कागज़ और हेल्पडेस्क।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "गुजरात जाति प्रमाण पत्र 2026: SC/ST और SEBC प्रमाण पत्र, नॉन-क्रीमी लेयर, Digital Gujarat पर आवेदन",
  lead: "गुजरात में जाति प्रमाण पत्र <strong>Digital Gujarat</strong> पोर्टल (digitalgujarat.gov.in) पर ऑनलाइन, या मामलतदार कार्यालय के <strong>जन सेवा केंद्र</strong> से बनता है। पोर्टल पर <strong>SC/ST जाति प्रमाण पत्र</strong>, <strong>SEBC प्रमाण पत्र</strong> (सामाजिक और शैक्षणिक रूप से पिछड़ा वर्ग) और घुमंतू-विमुक्त जाति प्रमाण पत्र अलग सेवाएं हैं। SEBC आरक्षण के लिए <strong>नॉन-क्रीमी लेयर</strong> प्रमाण पत्र भी लगता है, जो गुजरात सरकार और केंद्र सरकार के लिए अलग-अलग बनता है।",
  facts: [
    ["पोर्टल", '<a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a>'],
    ["कहां", "जन सेवा केंद्र (मामलतदार कार्यालय) / ऑनलाइन"],
    ["सेवाएं", "SC/ST, SEBC, घुमंतू-विमुक्त, NCL"],
    ["हेल्पडेस्क", "1800 233 5500"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> SEBC का जाति प्रमाण पत्र और नॉन-क्रीमी लेयर प्रमाण पत्र अलग हैं। गुजरात सरकार की नौकरी/दाखिले के लिए <strong>\"Non-Creamy Layer Certificate For Gujarat Government\"</strong> और केंद्र सरकार के लिए <strong>\"Non-Creamy Layer Certificate For Central Government\"</strong> चुनें।",
  sections: [
    {
      id: "kya-hai",
      title: "Digital Gujarat पर जाति से जुड़ी सेवाएं",
      table: {
        head: ["सेवा", "कब चाहिए"],
        rows: [
          ["<strong>SC/ST Caste Certificate</strong>", "अनुसूचित जाति / अनुसूचित जनजाति का प्रमाण"],
          ["<strong>SEBC Certificate</strong>", "सामाजिक और शैक्षणिक रूप से पिछड़ा वर्ग (गुजरात में OBC) का प्रमाण"],
          ["<strong>Nomad-Denotified Caste Certificate</strong>", "घुमंतू और विमुक्त जातियों के लिए"],
          ["<strong>Non-Creamy Layer (Gujarat Government)</strong>", "राज्य की नौकरी, दाखिले और योजनाओं में SEBC आरक्षण"],
          ["<strong>Non-Creamy Layer (Central Government)</strong>", "केंद्र की नौकरी/परीक्षा में OBC आरक्षण"],
          ["<strong>EWS (Unreserved Economically Weaker Sections)</strong>", "आर्थिक रूप से कमजोर सामान्य वर्ग का आरक्षण"],
        ],
      },
      callout: { kind: "info", html: "<strong>केंद्र की नौकरी:</strong> केंद्र सरकार की भर्ती में OBC आरक्षण तभी मिलता है जब आपकी जाति <strong>केंद्रीय OBC सूची</strong> में हो और प्रमाण पत्र केंद्र के प्रारूप में हो। राज्य की SEBC सूची और केंद्रीय सूची हर जाति के लिए एक जैसी नहीं होती।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "कागज़ों की पक्की सूची Digital Gujarat पर सेवा चुनते समय दिखती है। आम तौर पर ये तैयार रखें:",
      list: [
        "<strong>आधार कार्ड</strong>, राशन कार्ड या दूसरा पते का प्रमाण",
        "<strong>स्कूल छोड़ने का प्रमाण पत्र (LC)</strong>: अपना और पिता का, जिसमें जाति लिखी हो",
        "<strong>पिता या परिवार के किसी सदस्य का जाति प्रमाण पत्र</strong> (हो तो)",
        "तलाटी/पंचायत का दाखला या स्व-घोषणा पत्र",
        "नॉन-क्रीमी लेयर के लिए: परिवार की आय का प्रमाण और जाति प्रमाण पत्र",
        "पासपोर्ट साइज़ फोटो",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> जाति का सबसे मज़बूत सबूत <strong>पिता या दादा का पुराना स्कूल रिकॉर्ड</strong> होता है। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "Digital Gujarat पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://www.digitalgujarat.gov.in/" target="_blank" rel="noopener nofollow">digitalgujarat.gov.in</a> खोलें और मोबाइल नंबर से <strong>रजिस्टर</strong> करके लॉगिन करें।',
        "<strong>Citizen Services</strong> में अपनी ज़रूरत की सेवा चुनें: SC/ST Caste Certificate, SEBC Certificate या Non-Creamy Layer (राज्य/केंद्र)।",
        "फॉर्म भरें, कागज़ अपलोड करें और पोर्टल पर दिखा शुल्क (अगर हो) भरें।",
        "आवेदन संख्या नोट करें; आगे स्टेटस इसी से दिखेगा।",
        "मंज़ूरी के बाद प्रमाण पत्र पोर्टल से या जन सेवा केंद्र से मिलता है।",
      ],
    },
    {
      id: "offline",
      title: "जन सेवा केंद्र या पंचायत से",
      intro: "जिला पृष्ठों के अनुसार ये सेवाएं तहसील/कलेक्टर कार्यालय और मामलतदार कार्यालय के <strong>जन सेवा केंद्र</strong> पर मिलती हैं। कई जिलों में SC/ST, SEBC और नॉन-क्रीमी लेयर (राज्य) की सेवा <strong>पंचायत स्तर</strong> पर भी दी गई है, यानी गांव में ही आवेदन हो सकता है। सभी कागज़ों की मूल और कॉपी लेकर जाएं और रसीद ज़रूर लें। नज़दीकी केंद्र: <a href=\"/service/csc-locator/gujarat.html\">गुजरात CSC लोकेटर</a>।",
    },
    {
      id: "samay",
      title: "समय, फीस और शिकायत",
      list: [
        "<strong>समय:</strong> प्रमाण पत्र कितने दिन में बनेगा, यह हमें किसी मौजूदा सरकारी पेज पर नहीं मिला। रसीद पर दी गई तारीख देखें या जन सेवा केंद्र से पूछें।",
        "<strong>फीस:</strong> पोर्टल या केंद्र पर आवेदन के समय बताई जाती है।",
        "<strong>शिकायत:</strong> पहले मामलतदार कार्यालय से संपर्क करें। हल न मिले तो जिले के कलेक्टर कार्यालय या राज्य की <strong>SWAGAT</strong> शिकायत व्यवस्था में जाएं।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> Digital Gujarat में लॉगिन करके अपने आवेदन में, आवेदन संख्या से।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद पोर्टल से या जन सेवा केंद्र से।",
        "<strong>मदद:</strong> Digital Gujarat हेल्पडेस्क <strong>1800 233 5500</strong>।",
      ],
      html: '<p>DigiLocker से जुड़ी जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "ncl",
      title: "वैधता और नॉन-क्रीमी लेयर",
      list: [
        "<strong>जाति प्रमाण पत्र:</strong> जाति नहीं बदलती, पर वैधता का कोई मौजूदा सरकारी आदेश हमें नहीं मिला। भर्ती/दाखिले की सूचना में लिखी शर्त देखें।",
        "<strong>नॉन-क्रीमी लेयर:</strong> यह परिवार की आय पर टिका है, इसलिए इसकी वैधता सीमित होती है। भर्ती या दाखिले में जिस तारीख/वित्तीय वर्ष का प्रमाण पत्र मांगा गया हो, वही लगाएं; ज़रूरत हो तो नया बनवाएं।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत सेवा चुनी (जैसे SEBC की जगह NCL)", "पहले जाति (SEBC) प्रमाण पत्र, फिर NCL; राज्य और केंद्र के लिए सही NCL चुनें"],
          ["जाति का पुराना रिकॉर्ड नहीं", "पिता/दादा का LC या परिवार का जाति प्रमाण पत्र लगाएं"],
          ["नाम कागज़ों में अलग", "आधार, LC और राशन कार्ड में एक जैसा नाम रखें"],
          ["केंद्र की भर्ती में राज्य वाला NCL", "\"Non-Creamy Layer Certificate For Central Government\" बनवाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "जिला NIC पृष्ठों पर <strong>Digital Gujarat हेल्पडेस्क: 1800 233 5500</strong> दिया गया है। आवेदन से जुड़ी बात के लिए अपने मामलतदार कार्यालय के जन सेवा केंद्र से संपर्क करें।",
    },
  ],
  official: [
    { href: "https://www.digitalgujarat.gov.in/", title: "Digital Gujarat (ऑनलाइन आवेदन, स्टेटस)" },
    { href: "https://ahmedabad.nic.in/service/non-creamy-layer-certificate-for-gujarat-government/", title: "अहमदाबाद जिला: नॉन-क्रीमी लेयर (गुजरात सरकार) सेवा" },
    { href: "https://surat.nic.in/service/caste-certificate/", title: "सूरत जिला: जाति प्रमाण पत्र सेवाएं" },
  ],
  faq: [
    { q: "गुजरात में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "digitalgujarat.gov.in पर रजिस्टर/लॉगिन करें, Citizen Services में SC/ST Caste Certificate या SEBC Certificate चुनें, फॉर्म भरें और कागज़ अपलोड करें। मामलतदार कार्यालय के जन सेवा केंद्र से भी आवेदन होता है।" },
    { q: "SEBC प्रमाण पत्र और नॉन-क्रीमी लेयर में क्या फर्क है?", a: "SEBC प्रमाण पत्र बताता है कि आप सामाजिक और शैक्षणिक रूप से पिछड़े वर्ग से हैं। आरक्षण का लाभ लेने के लिए साथ में नॉन-क्रीमी लेयर प्रमाण पत्र भी लगता है, जो परिवार की आय पर आधारित है।" },
    { q: "केंद्र सरकार की नौकरी के लिए कौन सा प्रमाण पत्र चाहिए?", a: "Digital Gujarat पर \"Non-Creamy Layer Certificate For Central Government\" अलग सेवा है। आपकी जाति केंद्रीय OBC सूची में होनी चाहिए।" },
    { q: "Digital Gujarat का हेल्पलाइन नंबर क्या है?", a: "जिला पृष्ठों पर Digital Gujarat हेल्पडेस्क 1800 233 5500 दिया गया है।" },
  ],
  related: [
    { href: "/states/gujarat-income-certificate.html", emoji: "💰", title: "गुजरात आय प्रमाण पत्र", text: "आवकनो दाखलो, Digital Gujarat" },
    { href: "/states/gujarat-domicile-certificate.html", emoji: "🏠", title: "गुजरात डोमिसाइल प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://www.digitalgujarat.gov.in/", label: "📝 Digital Gujarat पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
