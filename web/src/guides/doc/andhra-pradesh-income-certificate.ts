import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - vswsonline.ap.gov.in now redirects to apseva.ap.gov.in ("Swarna Gramam
//   Swarna Wardu", SGSW department, Government of Andhra Pradesh). The portal
//   application lists services "Income Certificate", "Income Certificate For
//   Students", "Agriculture Income Certificate", "Re-Issuance of Income
//   Certificate", "Income Asset Certificate For EWS"; the income form asks for
//   "Gross Annual Income includes Salary, Agriculture, Business, Profession
//   etc., for the financial year prior to the year of application
//   (Applicant/His/Her Family)", income on lands, buildings, business, labour,
//   other, and whether paying income tax; notes "To know the application
//   status, please visit https://apseva.ap.gov.in" and "For any query call us
//   on: 1902".
// - EoDB SOP (vswsonline.ap.gov.in/assets/User-Manuals/EoDB SOP final.pdf,
//   portal document, created Nov 2022): Income Certificate - competent
//   authority Tahsildar / Deputy Tahsildar of Revenue Department; SLA 7 days;
//   documents copy of IT returns / pay slips (any other document for income
//   proof), ration card / EPIC card / Aadhaar card; citizen login, upload,
//   online payment, undertaking; VRO verifies and does field verification, RI
//   re-verifies, Tahsildar approves; track status; download/print; fee Rs 12.
// Left out (not confirmable on an official page we could open): validity
// period (only Q&A sites, conflicting), current fee confirmation (SOP is from
// 2022), appeal officer.
export const andhraPradeshIncomeCertificate: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Andhra Pradesh Income Certificate 2026: Apply Online",
  description: "Andhra Pradesh (आंध्र प्रदेश) आय प्रमाण पत्र 2026: AP Seva / ग्राम-वार्ड सचिवालय से आवेदन। तहसीलदार, 7 दिन की समय सीमा, आवश्यक दस्तावेज़, EWS और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "आंध्र प्रदेश आय प्रमाण पत्र 2026: AP Seva पर आवेदन, कागज़, 7 दिन की समय सीमा और स्टेटस",
  lead: "आंध्र प्रदेश में आय प्रमाण पत्र राजस्व विभाग के <strong>तहसीलदार/डिप्टी तहसीलदार</strong> देते हैं। आवेदन ग्राम/वार्ड सचिवालय में या <strong>apseva.ap.gov.in</strong> पर होता है और सेवा की तय समय सीमा <strong>7 दिन</strong> है। फॉर्म में आवेदन वाले साल से <strong>पिछले वित्तीय वर्ष</strong> की परिवार की कुल आय (वेतन, खेती, व्यवसाय आदि) लिखी जाती है।",
  facts: [
    ["पोर्टल", '<a href="https://apseva.ap.gov.in/" target="_blank" rel="noopener nofollow">apseva.ap.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार / डिप्टी तहसीलदार"],
    ["समय सीमा", "7 दिन"],
    ["आय की अवधि", "पिछला वित्तीय वर्ष"],
  ],
  notice: "<strong>पोर्टल का नया पता:</strong> पुराना vswsonline.ap.gov.in अब <strong>apseva.ap.gov.in</strong> (स्वर्ण ग्रामम स्वर्ण वार्डु विभाग) पर खुलता है।",
  sections: [
    {
      id: "kya-hai",
      title: "आय से जुड़ी सेवाएं: कौन सी चुनें",
      table: {
        head: ["सेवा", "कब चाहिए"],
        rows: [
          ["<strong>Income Certificate</strong>", "योजनाएं, पेंशन और जहां सामान्य आय प्रमाण पत्र मांगा गया हो"],
          ["<strong>Income Certificate For Students</strong>", "विद्यार्थियों के लिए अलग सेवा (छात्रवृत्ति/फीस)"],
          ["<strong>Agriculture Income Certificate</strong>", "सिर्फ खेती की आय का प्रमाण"],
          ["<strong>Income Asset Certificate For EWS</strong>", "EWS आरक्षण (आय के साथ संपत्ति भी)"],
          ["<strong>Re-Issuance of Income Certificate</strong>", "पहले बने प्रमाण पत्र की दोबारा कॉपी"],
        ],
      },
      callout: { kind: "info", html: "OBC आरक्षण (केंद्र) के लिए आय प्रमाण पत्र नहीं, <strong>OBC Member Certificate</strong> लगता है। देखें: <a href=\"/states/andhra-pradesh-caste-certificate.html\">आंध्र प्रदेश जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (AP Seva की SOP)",
      list: [
        "<strong>आय का प्रमाण</strong>: आयकर रिटर्न (ITR) या पे-स्लिप की कॉपी, या आय दिखाने वाला कोई दूसरा कागज़",
        "<strong>पहचान</strong>: राशन कार्ड, मतदाता पहचान पत्र (EPIC) या आधार कार्ड",
        "फॉर्म में परिवार की आय अलग-अलग लिखनी होती है: <strong>ज़मीन, मकान, व्यवसाय, मज़दूरी और दूसरी आय</strong>, और यह कि आयकर भरते हैं या नहीं",
        "आवेदक को एक <strong>वचन/स्व-घोषणा (undertaking)</strong> देना पड़ सकता है",
      ],
      callout: { kind: "warn", html: "आय कम या गलत न लिखें; VRO ज़रूरत हो तो मौके पर जांच करते हैं। स्व-घोषणा के नियम: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://apseva.ap.gov.in/" target="_blank" rel="noopener nofollow">apseva.ap.gov.in</a> खोलें और <strong>Citizen Login</strong> से लॉगिन करें। या अपने <strong>ग्राम/वार्ड सचिवालय</strong> में कर्मचारी से आवेदन कराएं।',
        "<strong>Income Certificate</strong> (विद्यार्थी हों तो Income Certificate For Students) सेवा चुनें।",
        "फॉर्म में पिछले वित्तीय वर्ष की परिवार की आय और प्रमाण पत्र का उद्देश्य भरें।",
        "कागज़ अपलोड करें, ऑनलाइन फीस भरें और आवेदन जमा करें।",
        "<strong>ग्राम राजस्व अधिकारी (VRO)</strong> जांच करते हैं, <strong>राजस्व निरीक्षक (RI)</strong> दोबारा जांचते हैं और <strong>तहसीलदार</strong> मंज़ूरी देते हैं।",
        "मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड या प्रिंट करें।",
      ],
      callout: { kind: "ok", html: "स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और मदद",
      table: {
        head: ["बात", "जानकारी (AP Seva SOP)"],
        rows: [
          ["समय सीमा (SLA)", "7 दिन"],
          ["मंज़ूर करने वाले", "तहसीलदार / डिप्टी तहसीलदार"],
          ["फीस", "SOP में ₹12 लिखी है; यह दस्तावेज़ 2022 का है, इसलिए आवेदन के समय बताई राशि ही मानें"],
          ["सवाल के लिए", "AP Seva पर दिया नंबर 1902"],
        ],
      },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और वैधता",
      list: [
        "<strong>स्टेटस:</strong> <a href=\"https://apseva.ap.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">apseva.ap.gov.in</a> पर आवेदन नंबर से।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद लॉगिन करके, या सचिवालय से प्रिंट।",
        "<strong>वैधता:</strong> हमें किसी आधिकारिक पेज पर तय अवधि नहीं मिली। आय पिछले वित्तीय वर्ष की गिनी जाती है, इसलिए छात्रवृत्ति/योजना में आम तौर पर उसी साल का प्रमाण पत्र चाहिए; फॉर्म की शर्त देख लें।",
      ],
      html: '<p>DigiLocker में प्रमाण पत्र कैसे देखें: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["आय का कोई कागज़ नहीं", "ITR, पे-स्लिप या आय दिखाने वाला कोई दूसरा कागज़ लगाएं"],
          ["आय के स्रोत अधूरे लिखे", "ज़मीन, मकान, व्यवसाय, मज़दूरी, सबकी आय लिखें"],
          ["EWS के लिए सामान्य आय प्रमाण पत्र बनवा लिया", "Income Asset Certificate For EWS अलग से बनवाएं"],
          ["प्रमाण पत्र खो गया", "Re-Issuance of Income Certificate सेवा से कॉपी लें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://apseva.ap.gov.in/", title: "AP Seva (ग्राम/वार्ड सचिवालय पोर्टल): आवेदन और स्टेटस" },
    { href: "https://vswsonline.ap.gov.in/assets/User-Manuals/EoDB%20SOP%20final.pdf", title: "AP Seva SOP (PDF): आय प्रमाण पत्र की समय सीमा, कागज़, प्रक्रिया" },
  ],
  faq: [
    { q: "आंध्र प्रदेश में आय प्रमाण पत्र कहां बनता है?", a: "ग्राम/वार्ड सचिवालय में या apseva.ap.gov.in पर।" },
    { q: "कितने दिन में बनता है?", a: "AP Seva की SOP के अनुसार 7 दिन में।" },
    { q: "कौन जारी करता है?", a: "राजस्व विभाग के तहसीलदार/डिप्टी तहसीलदार, VRO और राजस्व निरीक्षक की जांच के बाद।" },
    { q: "आय किस साल की लिखनी है?", a: "आवेदन वाले साल से पिछले वित्तीय वर्ष की, पूरे परिवार की कुल आय (वेतन, खेती, व्यवसाय, पेशा आदि)।" },
    { q: "क्या विद्यार्थियों के लिए अलग सेवा है?", a: "हाँ, AP Seva पर Income Certificate For Students अलग सेवा है।" },
  ],
  related: [
    { href: "/states/andhra-pradesh-caste-certificate.html", emoji: "📜", title: "आंध्र प्रदेश जाति प्रमाण पत्र", text: "Integrated Certificate, 30 दिन" },
    { href: "/states/andhra-pradesh-domicile-certificate.html", emoji: "🏠", title: "आंध्र प्रदेश निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://apseva.ap.gov.in/", label: "📝 AP Seva पर आवेदन" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
