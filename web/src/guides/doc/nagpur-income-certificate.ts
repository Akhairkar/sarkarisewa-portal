import type { DocGuide } from "./types";

// Nagpur district page for the Maharashtra income certificate (उत्पन्नाचे
// प्रमाणपत्र). Procedure facts are the ones verified for
// maharashtra-income-certificate.ts on 13 Oct 2026 (Aaple Sarkar service page
// ServiceId=1251: 15 days, Nayab Tahsildar, appeals to Tahsildar and SDO;
// call centre 1800 120 8040). Nagpur-specific source (checked 16 Oct 2026):
// - nagpur.gov.in (District Collectorate, Nagpur): 14 tahsils: Nagpur Urban,
//   Nagpur Rural, Hingna, Kamptee, Katol, Narkhed, Saoner, Kalmeshwar, Ramtek,
//   Parseoni, Mauda, Umred, Bhiwapur, Kuhi.
// Left out: fee amount, tahsil office addresses and phone numbers (not
// confirmed on an official page), any fixed document list.
const TAHSILS = ["Nagpur Urban (नागपुर शहर)", "Nagpur Rural (नागपुर ग्रामीण)", "Hingna (हिंगणा)", "Kamptee (कामठी)", "Katol (काटोल)", "Narkhed (नरखेड)", "Saoner (सावनेर)", "Kalmeshwar (कळमेश्वर)", "Ramtek (रामटेक)", "Parseoni (पारशिवनी)", "Mauda (मौदा)", "Umred (उमरेड)", "Bhiwapur (भिवापूर)", "Kuhi (कुही)"];

export const nagpurIncomeCertificate: DocGuide = {
  state: { slug: "maharashtra", hi: "महाराष्ट्र" },
  crumbs: [
    { label: "होम", href: "/" },
    { label: "महाराष्ट्र", href: "/states/maharashtra.html" },
    { label: "आय प्रमाण पत्र", href: "/states/maharashtra-income-certificate.html" },
    { label: "नागपुर" },
  ],
  docHi: "नागपुर आय प्रमाण पत्र",
  cscHref: "/service/csc-locator/maharashtra/nagpur.html",
  title: "Nagpur Income Certificate 2026: उत्पन्नाचा दाखला कैसे बनवाएं",
  description: "नागपुर (Nagpur) में आय प्रमाण पत्र / उत्पन्नाचा दाखला 2026: Aaple Sarkar पर ऑनलाइन आवेदन, 14 तहसीलें, ज़रूरी कागज़, 15 दिन की समय सीमा, स्टेटस और अपील।",
  published: "2026-10-16",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "नागपुर आय प्रमाण पत्र (उत्पन्नाचा दाखला) 2026: आवेदन, कागज़, तहसील और समय",
  lead: "नागपुर ज़िले में आय प्रमाण पत्र (उत्पन्नाचे प्रमाणपत्र) आपकी <strong>तहसील</strong> से बनता है और इसे <strong>नायब तहसीलदार</strong> जारी करते हैं। आवेदन <strong>Aaple Sarkar</strong> पोर्टल पर खुद या किसी <strong>आपले सरकार सेवा केंद्र / सेतु</strong> से होता है। पोर्टल पर समय सीमा <strong>15 दिन</strong> लिखी है। आवेदन उसी तहसील में करें जहां आप रहते हैं; नागपुर ज़िले में 14 तहसीलें हैं।",
  facts: [
    ["पोर्टल", '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a>'],
    ["जारी करते हैं", "नायब तहसीलदार (आपकी तहसील)"],
    ["समय सीमा", "15 दिन"],
    ["हेल्पलाइन", "1800 120 8040 (टोल फ्री, 24x7)"],
  ],
  notice: "<strong>सच्ची आय लिखें:</strong> प्रमाण पत्र परिवार की सालाना आय की घोषणा और तलाठी/तहसील की जांच पर बनता है। गलत घोषणा पर प्रमाण पत्र रद्द हो सकता है और कार्रवाई भी हो सकती है। किसी एजेंट को अपना OTP या पोर्टल का पासवर्ड न दें।",
  sections: [
    {
      id: "tahsil",
      title: "नागपुर ज़िले की 14 तहसीलें: आवेदन किसमें करें",
      intro: "आय प्रमाण पत्र उसी तहसील से बनता है जहां आप रहते हैं। फॉर्म में पता और तहसील सही चुनें, नहीं तो आवेदन लौट सकता है। नागपुर ज़िलाधिकारी कार्यालय (nagpur.gov.in) के अनुसार ज़िले की तहसीलें:",
      list: TAHSILS,
      callout: { kind: "info", html: "नागपुर शहर में रहते हैं तो आम तौर पर <strong>Nagpur Urban</strong> तहसील, और शहर के बाहर के गांव हैं तो <strong>Nagpur Rural</strong> या अपनी तालुका की तहसील। पक्का न हो तो अपने तलाठी या नज़दीकी सेतु केंद्र से पूछें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "Aaple Sarkar के सेवा पेज पर कागज़ों की तय सूची नहीं दिखती; फॉर्म भरते समय पोर्टल जो मांगे वही लगाएं। आम तौर पर ये काम आते हैं:",
      list: [
        "<strong>पहचान:</strong> आधार, मतदाता पहचान पत्र, PAN या ड्राइविंग लाइसेंस",
        "<strong>पता:</strong> राशन कार्ड, बिजली बिल, संपत्ति कर रसीद या 7/12 उतारा",
        "<strong>आय का प्रमाण:</strong> नौकरी हो तो वेतन प्रमाण पत्र/Form 16 या ITR; खेती हो तो 7/12 और 8-अ उतारा; या तलाठी की आय रिपोर्ट",
        "<strong>स्व-घोषणा/शपथ-पत्र</strong> जिसमें परिवार की सालाना आय लिखी हो, और फोटो",
      ],
      callout: { kind: "ok", html: "स्व-घोषणा के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" rel="noopener nofollow">aaplesarkar.mahaonline.gov.in</a> खोलें। पहली बार हैं तो <strong>पंजीकरण</strong> करें, फिर <strong>Citizen Login</strong> करें।',
        "<strong>Revenue Department → Income Certificate</strong> चुनें।",
        "ज़िला <strong>Nagpur</strong> और अपनी <strong>तहसील</strong> चुनें, परिवार की आय और उसके स्रोत भरें, फोटो और कागज़ अपलोड करें।",
        "पोर्टल पर दिखा शुल्क ऑनलाइन भरें और <strong>Application ID</strong> नोट करें।",
        "मंज़ूरी के बाद Citizen Login में अपने आवेदन से प्रमाण पत्र डाउनलोड करें।",
      ],
    },
    {
      id: "kendra",
      title: "सेवा केंद्र से बनवाना है तो",
      intro: "कागज़ लेकर नज़दीकी <strong>आपले सरकार सेवा केंद्र</strong> या तहसील के <strong>सेतु केंद्र</strong> पर जाएं। ऑपरेटर फॉर्म भरकर रसीद देगा। सरकारी शुल्क और केंद्र का सेवा शुल्क पहले पूछें और रसीद लें। नागपुर के केंद्रों की तहसील अनुसार सूची: <a href=\"/service/csc-locator/maharashtra/nagpur.html\">नागपुर CSC / सेवा केंद्र</a> (यह सूची 2018 की है, जाने से पहले पूछ लें)।",
    },
    {
      id: "samay",
      title: "समय सीमा और अपील (लोकसेवा हक्क अधिनियम)",
      table: {
        head: ["समय", "प्रमाण पत्र देने वाले", "पहली अपील", "दूसरी अपील"],
        rows: [["15 दिन", "नायब तहसीलदार", "तहसीलदार", "उपविभागीय अधिकारी (SDO)"]],
      },
      html: "<p>इसके बाद भी हल न मिले तो <strong>राज्य लोकसेवा हक्क आयोग</strong> के सामने तीसरी अपील होती है। <strong>फीस</strong> आवेदन के समय पोर्टल पर दिखती है; हमें कोई आधिकारिक राशि वाला पेज नहीं मिला।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> Aaple Sarkar होमपेज पर <strong>Track your Application</strong> में Application ID डालें।",
        "<strong>डाउनलोड:</strong> Citizen Login में अपने आवेदन से, या उसी सेवा केंद्र से।",
        "<strong>सत्यापन:</strong> <strong>Verify Your Authenticated Certificate</strong> में 18 अंकों का बारकोड डालें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत तहसील चुनी", "जहां रहते हैं उसी तहसील में आवेदन करें (ऊपर सूची देखें)"],
          ["आय का कोई प्रमाण नहीं", "वेतन प्रमाण पत्र/Form 16, ITR, 7/12 उतारा या तलाठी की रिपोर्ट लगाएं"],
          ["लिखी आय जांच से मेल नहीं खाती", "सभी स्रोतों की सच्ची आय लिखें"],
          ["आरक्षण के लिए आय प्रमाण पत्र बनवाया", "OBC/VJNT/SBC के लिए नॉन-क्रीमी लेयर प्रमाण पत्र बनवाएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", title: "Aaple Sarkar (आवेदन, स्टेटस, सत्यापन, अपील)" },
    { href: "https://aaplesarkar.mahaonline.gov.in/en/Login/Certificate_Documents?ServiceId=1251", title: "Income Certificate: समय सीमा और अधिकारी" },
    { href: "https://nagpur.gov.in/", title: "ज़िलाधिकारी कार्यालय, नागपुर" },
  ],
  faq: [
    { q: "नागपुर में आय प्रमाण पत्र कहां बनता है?", a: "आपकी तहसील से। आवेदन Aaple Sarkar पोर्टल पर खुद या आपले सरकार सेवा केंद्र/सेतु से होता है, और प्रमाण पत्र नायब तहसीलदार जारी करते हैं।" },
    { q: "नागपुर में आय प्रमाण पत्र कितने दिन में बनता है?", a: "Aaple Sarkar पर लोकसेवा हक्क अधिनियम के तहत समय सीमा 15 दिन लिखी है। देरी हो तो तहसीलदार के पास पहली अपील करें।" },
    { q: "नागपुर शहर में कौन सी तहसील चुनें?", a: "शहर में रहते हैं तो आम तौर पर Nagpur Urban, शहर के बाहर के गांव में Nagpur Rural या अपनी तालुका की तहसील। पक्का न हो तो तलाठी या सेतु केंद्र से पूछें।" },
    { q: "आय प्रमाण पत्र की फीस कितनी है?", a: "शुल्क आवेदन के समय Aaple Sarkar पोर्टल पर दिखता है। सेवा केंद्र अपना सेवा शुल्क अलग ले सकता है; पहले पूछें और रसीद लें।" },
  ],
  related: [
    { href: "/states/maharashtra-income-certificate.html", emoji: "💰", title: "महाराष्ट्र आय प्रमाण पत्र", text: "पूरे राज्य के लिए जानकारी" },
    { href: "/states/maharashtra-caste-certificate.html", emoji: "📜", title: "महाराष्ट्र जाति प्रमाण पत्र", text: "जाति, नॉन-क्रीमी लेयर" },
    { href: "/service/csc-locator/maharashtra/nagpur.html", emoji: "📍", title: "नागपुर CSC / सेवा केंद्र", text: "तहसील अनुसार सूची" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट", text: "कब काम आता है, नमूना" },
  ],
  aside: [
    { href: "https://aaplesarkar.mahaonline.gov.in/en", label: "📝 Aaple Sarkar पर आवेदन" },
    { href: "/service/csc-locator/maharashtra/nagpur.html", label: "📍 नागपुर के सेवा केंद्र" },
  ],
};
