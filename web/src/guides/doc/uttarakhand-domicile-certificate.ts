import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - Apuni Sarkar portal eservices.uk.gov.in, public service API (/api/service,
//   service "domicile-certificate", id ES01, Hindi name "स्थाई निवास प्रमाण
//   पत्र"): Revenue Department > Revenue Certificates, charge Rs 40, delivery
//   time 15 days (1296000 s), notified under Right to Service (rts: true);
//   required documents: applicant photo; copy of land registry (documents
//   related to residence justifying 15 years of residing); Aadhaar card;
//   education related documents; latest electricity or water bill. Optional:
//   khatauni (ROR), house tax, nagar nigam assessment, electricity bill, water
//   bill, bank passbook, gas connection, voter ID, ration card / family
//   register (for family relation match).
// - The portal's own JS bundle: approval flow for domicile-certificate
//   S.D.M > PATWARI > TEHSILDAR > S.D.M.
// - Portal FAQ facts already recorded in uttarakhand-caste-certificate.ts:
//   Rs 30 portal charge on top of department charge, online payment, SMS at
//   each step, Application Status and Verify Certificate, unlimited downloads,
//   CSC operator login, helpline 1905 option 4 (Mon-Sat 10-5),
//   e-helpdesk@uk.gov.in, Grievances page, RTS Act PDF.
// Left out (not confirmable on an official page we could open): validity
// period; the separate "mool niwas" (1950-based) rules debated in the state are
// not described because the portal lists only this one residence service.
export const uttarakhandDomicileCertificate: DocGuide = {
  state: { slug: "uttarakhand", hi: "उत्तराखंड" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Uttarakhand Domicile Certificate 2026",
  description: "उत्तराखंड स्थाई निवास प्रमाण पत्र 2026: अपुणि सरकार पोर्टल पर आवेदन, 15 साल निवास के कागज़, ₹40 शुल्क, 15 दिन की समय सीमा, SDM-पटवारी-तहसीलदार जांच और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "उत्तराखंड स्थाई निवास (डोमिसाइल) प्रमाण पत्र 2026: अपुणि सरकार पर आवेदन, कागज़ और फीस",
  lead: "उत्तराखंड में स्थाई निवास प्रमाण पत्र (Domicile Certificate) राजस्व विभाग की सेवा है और इसका आवेदन अपुणि सरकार पोर्टल (eservices.uk.gov.in) पर होता है। पोर्टल पर <strong>15 साल के निवास</strong> का सबूत अनिवार्य कागज़ के रूप में मांगा जाता है। सेवा शुल्क ₹40 है और सेवा का अधिकार के तहत समय सीमा 15 दिन है; प्रमाण पत्र उप-ज़िलाधिकारी (SDM) जारी करते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a>'],
    ["निवास का सबूत", "15 साल"],
    ["शुल्क / समय", "₹40 / 15 दिन"],
    ["जारी करते हैं", "उप-ज़िलाधिकारी (SDM)"],
  ],
  notice: "<strong>सबसे ज़रूरी कागज़:</strong> पोर्टल पर भूमि रजिस्ट्री या निवास से जुड़ा ऐसा दस्तावेज़ अनिवार्य है जिससे <strong>15 साल का निवास</strong> साबित हो। साथ में आधार, शिक्षा के प्रमाण पत्र और बिजली या पानी का नया बिल भी अनिवार्य है।",
  sections: [
    {
      id: "kya-hai",
      title: "स्थाई निवास प्रमाण पत्र कहां काम आता है",
      intro: "यह इस बात का सबूत है कि आप उत्तराखंड के स्थाई निवासी हैं। आम तौर पर इसकी ज़रूरत पड़ती है:",
      list: [
        "उत्तराखंड की <strong>सरकारी भर्तियों</strong> में राज्य के निवासी होने का दावा करने के लिए",
        "दाखिले और काउंसलिंग में <strong>राज्य कोटे</strong> के लिए",
        "राज्य की उन योजनाओं में जहां <strong>स्थाई निवासी</strong> होना शर्त है",
      ],
      callout: { kind: "info", html: "यह प्रमाण पत्र सभी वर्गों के लिए है। आरक्षण के लिए जाति प्रमाण पत्र अलग बनता है: <a href=\"/states/uttarakhand-caste-certificate.html\">उत्तराखंड जाति प्रमाण पत्र गाइड</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (पोर्टल की सूची के अनुसार)",
      intro: "ये कागज़ <strong>अनिवार्य</strong> हैं:",
      list: [
        "<strong>आवेदक की फोटो</strong>",
        "<strong>भूमि रजिस्ट्री</strong> या निवास से जुड़ा ऐसा दस्तावेज़ जिससे <strong>15 साल का निवास</strong> साबित हो",
        "<strong>आधार कार्ड</strong>",
        "<strong>शिक्षा संबंधी प्रमाण पत्र</strong>",
        "<strong>बिजली या पानी का नया बिल</strong>",
      ],
      html: "<p>इनमें से जो हों वे <strong>अतिरिक्त कागज़</strong> के रूप में लगा सकते हैं:</p><ul class=\"checklist\"><li>खतौनी, हाउस टैक्स या नगर निगम का मूल्यांकन</li><li>बैंक पासबुक, गैस कनेक्शन</li><li>मतदाता पहचान पत्र (Voter ID)</li><li><strong>राशन कार्ड / परिवार रजिस्टर</strong>, परिवार के रिश्तों के मिलान के लिए</li></ul>",
      callout: { kind: "warn", html: "15 साल के निवास के लिए पुराने कागज़ सबसे ज़्यादा काम आते हैं: पुरानी खतौनी/रजिस्ट्री, पुराना हाउस टैक्स, स्कूल के पुराने प्रमाण पत्र। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "online",
      title: "अपुणि सरकार पोर्टल पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a> खोलें। पहली बार हैं तो <strong>Citizen Login</strong> में \"Signup\" से अकाउंट बनाएं, फिर लॉगिन करें।',
        "<strong>राजस्व विभाग (Revenue Department)</strong> → <strong>राजस्व प्रमाण पत्र</strong> → <strong>स्थाई निवास प्रमाण पत्र (Domicile Certificate)</strong> चुनें।",
        "फॉर्म में नाम, माता-पिता का नाम, पूरा पता और उत्तराखंड में रहने की जानकारी सही भरें।",
        "ऊपर बताए अनिवार्य कागज़ साफ स्कैन करके अपलोड करें।",
        "<strong>ऑनलाइन भुगतान</strong> करें (कार्ड, UPI या नेट बैंकिंग) और <strong>आवेदन संख्या</strong> नोट कर लें। हर चरण पर SMS आता है।",
        "मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड करें।",
      ],
    },
    {
      id: "offline",
      title: "CSC / जन सेवा केंद्र से आवेदन",
      intro: "अपुणि सरकार पोर्टल पर CSC ऑपरेटरों का अलग लॉगिन है। नज़दीकी CSC पर मूल कागज़ लेकर जाएं; ऑपरेटर ऑनलाइन आवेदन कर देगा। आवेदन संख्या की पर्ची ज़रूर लें और केंद्र का अतिरिक्त शुल्क पहले पूछ लें।",
    },
    {
      id: "fees",
      title: "फीस, समय सीमा और जांच",
      table: {
        head: ["क्या", "जानकारी"],
        rows: [
          ["सेवा शुल्क", "पोर्टल की सेवा सूची में <strong>₹40</strong>"],
          ["पोर्टल शुल्क", "पोर्टल के FAQ के अनुसार विभागीय शुल्क के अलावा <strong>₹30</strong>; भुगतान से पहले कुल राशि देख लें"],
          ["समय सीमा", "<strong>15 दिन</strong> (सेवा का अधिकार के तहत अधिसूचित)"],
          ["जांच", "SDM → पटवारी (स्थानीय जांच) → तहसीलदार → SDM (मंज़ूरी)"],
        ],
      },
      callout: { kind: "warn", html: "15 दिन में फैसला न हो या बिना ठोस वजह आवेदन खारिज हो, तो सेवा का अधिकार कानून के तहत अपील कर सकते हैं। पोर्टल के <a href=\"https://eservices.uk.gov.in/grievances\" target=\"_blank\" rel=\"noopener nofollow\">Grievances</a> सेक्शन में शिकायत करें या 1905 पर कॉल करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और जांच",
      list: [
        "<strong>स्टेटस:</strong> पोर्टल के मुख्य पेज पर <strong>Application Status</strong> में आवेदन संख्या डालें।",
        "<strong>असली है या नहीं:</strong> मुख्य पेज पर <strong>Verify Certificate</strong> से जांचें।",
        "<strong>डाउनलोड:</strong> अपने लॉगिन से जितनी बार चाहें डाउनलोड करें।",
      ],
      html: '<p>फोन में रखना हो तो: <a href="/digilocker/domicile-certificate.html">DigiLocker में निवास प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["15 साल के निवास का कागज़ नहीं", "पुरानी खतौनी/रजिस्ट्री, पुराना हाउस टैक्स या स्कूल रिकॉर्ड लगाएं"],
          ["बिजली/पानी का बिल पुराना", "नया बिल लगाएं; पोर्टल पर \"नवीनतम\" बिल मांगा गया है"],
          ["नाम/पता कागज़ों में अलग", "आधार, स्कूल सर्टिफिकेट और परिवार रजिस्टर में एक जैसा नाम कराएं"],
          ["पटवारी की जांच में देर", "आवेदन संख्या के साथ तहसील में संपर्क करें या 1905 पर शिकायत करें"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन",
      list: [
        "<strong>1905</strong>: अपुणि सरकार की सेवाओं के लिए विकल्प 4; सोमवार से शनिवार, सुबह 10 से शाम 5 बजे तक।",
        "ईमेल: <strong>e-helpdesk@uk.gov.in</strong>",
      ],
    },
  ],
  official: [
    { href: "https://eservices.uk.gov.in/", title: "अपुणि सरकार पोर्टल (आवेदन, स्टेटस, Verify Certificate)" },
    { href: "https://eservices.uk.gov.in/grievances", title: "अपुणि सरकार: शिकायत (Grievances)" },
    { href: "https://eservices.uk.gov.in/rts-act.pdf", title: "उत्तराखंड सेवा का अधिकार अधिनियम (PDF)" },
  ],
  faq: [
    { q: "उत्तराखंड स्थाई निवास प्रमाण पत्र के लिए कितने साल का निवास चाहिए?", a: "अपुणि सरकार पोर्टल पर अनिवार्य कागज़ के रूप में ऐसा दस्तावेज़ मांगा गया है जिससे 15 साल का निवास साबित हो।" },
    { q: "उत्तराखंड डोमिसाइल की फीस कितनी है?", a: "पोर्टल की सेवा सूची में ₹40 दर्ज है। पोर्टल के FAQ के अनुसार ₹30 पोर्टल शुल्क अलग से लगता है; भुगतान से पहले स्क्रीन पर कुल राशि देख लें।" },
    { q: "प्रमाण पत्र कितने दिन में बनता है?", a: "पोर्टल के अनुसार यह सेवा का अधिकार के तहत अधिसूचित सेवा है और समय सीमा 15 दिन है।" },
    { q: "प्रमाण पत्र कौन जारी करता है?", a: "पोर्टल के अनुसार आवेदन SDM के पास जाता है, पटवारी जांच करते हैं, तहसीलदार रिपोर्ट आगे भेजते हैं और SDM मंज़ूरी देते हैं।" },
    { q: "अपुणि सरकार की हेल्पलाइन क्या है?", a: "1905 पर कॉल करें और विकल्प 4 चुनें (सोमवार-शनिवार, 10 से 5 बजे), या e-helpdesk@uk.gov.in पर ईमेल करें।" },
  ],
  related: [
    { href: "/states/uttarakhand-caste-certificate.html", emoji: "📜", title: "उत्तराखंड जाति प्रमाण पत्र", text: "अपुणि सरकार पर, 15 दिन" },
    { href: "/states/uttarakhand-income-certificate.html", emoji: "💰", title: "उत्तराखंड आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/uttarakhand-employment-exchange.html", emoji: "💼", title: "उत्तराखंड रोज़गार कार्यालय", text: "पंजीकरण की जानकारी" },
    { href: "/digilocker/domicile-certificate.html", emoji: "📲", title: "DigiLocker में निवास प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://eservices.uk.gov.in/", label: "📝 अपुणि सरकार पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
