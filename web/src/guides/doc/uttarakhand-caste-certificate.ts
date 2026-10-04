import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026):
// - Apuni Sarkar portal eservices.uk.gov.in: its public service API
//   (/api/service, service "caste-certificate", id ES08): Revenue Department >
//   Revenue Certificates, charge Rs 40, delivery time 15 days, notified under
//   Right to Service (rts: true), document list (required: photo, land
//   registry/khatauni or residence proof since 1985, Aadhaar, family register
//   copy; optional: khatauni, house tax, nagar nigam assessment, electricity,
//   water bill, bank passbook, gas connection, voter ID, ration card/family
//   register for relation match).
// - The portal's own bundle: approval flow Tehsildar > Patwari > Tehsildar;
//   FAQ (Rs 30 portal charge on top of department charge; card/UPI/net banking;
//   SMS at each step; "Application Status" and "Verify Certificate" on the home
//   page; no limit on downloads; helpline 1905 option 4, Mon-Sat 10-5,
//   e-helpdesk@uk.gov.in); CSC operator login exists.
export const uttarakhandCasteCertificate: DocGuide = {
  state: { slug: "uttarakhand", hi: "उत्तराखंड" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Uttarakhand Caste Certificate 2026: Apply & Status | SarkariSewa",
  description: "उत्तराखंड जाति प्रमाण पत्र (Caste Certificate) online apply 2026 at Apuni Sarkar Uttarakhand. Eligibility, document list, official fee & status check guide.",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "उत्तराखंड जाति प्रमाण पत्र 2026: अपुणि सरकार पोर्टल पर आवेदन, कागज़, फीस और स्टेटस",
  lead: "उत्तराखंड में जाति प्रमाण पत्र राजस्व विभाग जारी करता है और इसका आवेदन अपुणि सरकार पोर्टल (eservices.uk.gov.in) पर होता है। पोर्टल के अनुसार यह सेवा सेवा का अधिकार (Right to Service) में शामिल है और इसकी समय सीमा 15 दिन है। आवेदन तहसीलदार के पास जाता है, पटवारी जांच करके रिपोर्ट देते हैं और तहसीलदार प्रमाण पत्र जारी करते हैं।",
  facts: [
    ["पोर्टल", '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a>'],
    ["समय सीमा", "15 दिन (सेवा का अधिकार)"],
    ["शुल्क", "₹40 (पोर्टल पर दर्ज)"],
    ["जारी करते हैं", "तहसीलदार"],
  ],
  notice: "<strong>सबसे ज़रूरी कागज़:</strong> पोर्टल पर <strong>1985 से उत्तराखंड में निवास</strong> दिखाने वाला कागज़ (भूमि रजिस्ट्री/खतौनी या निवास से जुड़ा दस्तावेज़) और <strong>परिवार रजिस्टर की नकल</strong> अनिवार्य है। इनके बिना आवेदन आगे नहीं बढ़ता।",
  sections: [
    {
      id: "kya-hai",
      title: "जाति प्रमाण पत्र किसे और क्यों चाहिए",
      intro: "जाति प्रमाण पत्र से यह साबित होता है कि आप अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) या अन्य पिछड़ा वर्ग (OBC) से हैं। इसका इस्तेमाल होता है:",
      list: [
        "सरकारी नौकरी और भर्ती परीक्षाओं में <strong>आरक्षण और उम्र में छूट</strong> के लिए",
        "स्कूल-कॉलेज में <strong>दाखिले और छात्रवृत्ति</strong> के लिए",
        "SC/ST/OBC के लिए बनी <strong>सरकारी योजनाओं</strong> का लाभ लेने के लिए",
      ],
      callout: { kind: "info", html: "आर्थिक रूप से कमज़ोर वर्ग (EWS) का प्रमाण पत्र अलग सेवा है। अपुणि सरकार पोर्टल पर \"Economically Weaker Section (EWS) Certificate\" के लिए अलग से आवेदन करें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (पोर्टल की सूची के अनुसार)",
      intro: "ये कागज़ <strong>अनिवार्य</strong> हैं, इन्हें स्कैन करके अपलोड करना होता है:",
      list: [
        "<strong>आवेदक की फोटो</strong>",
        "<strong>भूमि रजिस्ट्री / खतौनी की प्रति</strong>, या ऐसा कागज़ जिससे <strong>1985 से निवास</strong> साबित हो",
        "<strong>आधार कार्ड</strong>",
        "<strong>परिवार रजिस्टर की नकल</strong>",
      ],
      html: "<p>इनमें से जो हों वे <strong>अतिरिक्त कागज़</strong> के रूप में लगा सकते हैं (ये ज़रूरी नहीं, पर जांच आसान करते हैं):</p><ul class=\"checklist\"><li>खतौनी, हाउस टैक्स या नगर निगम का मूल्यांकन</li><li>बिजली या पानी का बिल, बैंक पासबुक, गैस कनेक्शन</li><li>मतदाता पहचान पत्र (Voter ID)</li><li><strong>राशन कार्ड / परिवार रजिस्टर</strong>, परिवार के रिश्तों के मिलान के लिए</li></ul>",
      callout: { kind: "ok", html: "<strong>टिप:</strong> अगर पिता, दादा या भाई-बहन का पहले से जाति प्रमाण पत्र बना है तो उसकी कॉपी भी साथ रखें और रिश्ता परिवार रजिस्टर/राशन कार्ड से साबित करें। इससे पटवारी की जांच जल्दी होती है।" },
    },
    {
      id: "online",
      title: "अपुणि सरकार पोर्टल पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://eservices.uk.gov.in/" target="_blank" rel="noopener nofollow">eservices.uk.gov.in</a> खोलें। पहली बार हैं तो <strong>Citizen Login</strong> में \"Signup\" से अकाउंट बनाएं, फिर लॉगिन करें।',
        "विभागों में <strong>राजस्व विभाग (Revenue Department)</strong> → <strong>राजस्व प्रमाण पत्र</strong> → <strong>जाति प्रमाण पत्र</strong> चुनें।",
        "फॉर्म में नाम, माता-पिता का नाम, पता, जाति और श्रेणी की जानकारी भरें। नाम और जन्मतिथि आधार व स्कूल के कागज़ों से मिलाकर लिखें।",
        "ऊपर बताए अनिवार्य कागज़ अपलोड करें (साफ स्कैन, पूरा पन्ना दिखे)।",
        "<strong>ऑनलाइन भुगतान</strong> करें: क्रेडिट/डेबिट कार्ड, UPI या नेट बैंकिंग।",
        "सबमिट होने पर <strong>आवेदन संख्या (Application Number)</strong> मिलती है; इसे नोट कर लें। हर चरण पर आपको SMS से सूचना मिलती है।",
        "मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड करें; डाउनलोड की कोई सीमा नहीं है।",
      ],
    },
    {
      id: "offline",
      title: "खुद आवेदन नहीं कर पा रहे? (CSC / जन सेवा केंद्र)",
      intro: "अपुणि सरकार पोर्टल पर CSC (कॉमन सर्विस सेंटर) ऑपरेटरों का अलग लॉगिन है। नज़दीकी CSC/जन सेवा केंद्र पर अपने मूल कागज़ लेकर जाएं; ऑपरेटर आपकी ओर से ऑनलाइन आवेदन कर देगा। आवेदन संख्या की पर्ची ज़रूर लें। केंद्र पर अलग से कितना शुल्क लगेगा, यह पहले पूछ लें।",
    },
    {
      id: "fees",
      title: "फीस और समय सीमा",
      table: {
        head: ["क्या", "जानकारी"],
        rows: [
          ["सेवा शुल्क", "पोर्टल की सेवा सूची में <strong>₹40</strong> दर्ज है"],
          ["पोर्टल शुल्क", "पोर्टल के FAQ के अनुसार विभागीय शुल्क के अलावा <strong>₹30</strong> लगता है; भुगतान से पहले स्क्रीन पर कुल राशि देख लें"],
          ["समय सीमा", "<strong>15 दिन</strong> (सेवा का अधिकार के तहत अधिसूचित सेवा)"],
          ["जांच", "तहसीलदार → पटवारी (स्थानीय जांच और रिपोर्ट) → तहसीलदार (मंज़ूरी)"],
        ],
      },
      callout: { kind: "warn", html: "15 दिन में फैसला न हो या बिना ठोस वजह आवेदन खारिज हो, तो सेवा का अधिकार कानून के तहत अपील का अधिकार है। पोर्टल के Grievances सेक्शन में शिकायत दर्ज कर सकते हैं या 1905 पर कॉल कर सकते हैं।" },
    },
    {
      id: "status",
      title: "स्टेटस कैसे देखें और प्रमाण पत्र कैसे जांचें",
      list: [
        "<strong>स्टेटस:</strong> पोर्टल के मुख्य पेज पर <strong>\"Application Status\"</strong> में आवेदन संख्या डालें।",
        "<strong>प्रमाण पत्र असली है या नहीं:</strong> मुख्य पेज पर <strong>\"Verify Certificate\"</strong> में आवेदन संख्या डालकर जांचें। नौकरी या दाखिले के समय संस्था भी यही जांच कर सकती है।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद अपने लॉगिन से जितनी बार चाहें डाउनलोड करें।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["1985 से निवास का कागज़ नहीं लगा", "खतौनी, भूमि रजिस्ट्री या पुराने निवास का कोई सरकारी रिकॉर्ड लगाएं"],
          ["परिवार रजिस्टर की नकल नहीं है", "ग्राम पंचायत/नगर निकाय से परिवार रजिस्टर की नकल लें (यह भी अपुणि सरकार पर उपलब्ध सेवा है)"],
          ["नाम या पिता का नाम कागज़ों में अलग", "आधार, स्कूल सर्टिफिकेट और परिवार रजिस्टर में एक जैसा नाम हो; ज़रूरत हो तो पहले सुधार कराएं"],
          ["धुंधला या अधूरा स्कैन", "पूरा पन्ना साफ स्कैन करके दोबारा आवेदन करें"],
          ["पटवारी की जांच में देर", "आवेदन संख्या के साथ तहसील में संपर्क करें या 1905 पर शिकायत करें"],
        ],
      },
    },
    {
      id: "helpline",
      title: "हेल्पलाइन",
      list: [
        "<strong>1905</strong> (मुख्यमंत्री हेल्पलाइन): अपुणि सरकार की सेवाओं के लिए विकल्प 4 चुनें; सोमवार से शनिवार, सुबह 10 से शाम 5 बजे तक।",
        "ईमेल: <strong>e-helpdesk@uk.gov.in</strong>",
      ],
    },
  ],
  official: [
    { href: "https://eservices.uk.gov.in/", title: "अपुणि सरकार पोर्टल (आवेदन, स्टेटस, Verify Certificate)" },
    { href: "https://eservices.uk.gov.in/grievances", title: "अपुणि सरकार: शिकायत (Grievances)" },
    { href: "https://eservices.uk.gov.in/rts-act.pdf", title: "उत्तराखंड सेवा का अधिकार अधिनियम (PDF): अपील के नियम" },
    { href: "https://socialwelfare.uk.gov.in/", title: "समाज कल्याण विभाग, उत्तराखंड (छात्रवृत्ति और योजनाएं)" },
  ],
  faq: [
    { q: "उत्तराखंड में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "eservices.uk.gov.in (अपुणि सरकार) पर लॉगिन करें, राजस्व विभाग → राजस्व प्रमाण पत्र → जाति प्रमाण पत्र चुनें, फॉर्म भरें, फोटो, आधार, परिवार रजिस्टर की नकल और 1985 से निवास का कागज़ अपलोड करें और ऑनलाइन भुगतान करें।" },
    { q: "उत्तराखंड जाति प्रमाण पत्र कितने दिन में बनता है?", a: "पोर्टल के अनुसार यह सेवा का अधिकार में शामिल सेवा है और इसकी समय सीमा 15 दिन है।" },
    { q: "उत्तराखंड जाति प्रमाण पत्र की फीस कितनी है?", a: "पोर्टल की सेवा सूची में ₹40 दर्ज है। पोर्टल के FAQ के अनुसार ₹30 का पोर्टल शुल्क विभागीय शुल्क के अलावा लगता है, इसलिए भुगतान से पहले स्क्रीन पर कुल राशि देख लें।" },
    { q: "जाति प्रमाण पत्र के लिए 1985 वाला कागज़ क्या है?", a: "पोर्टल पर अनिवार्य कागज़ों में भूमि रजिस्ट्री/खतौनी या ऐसा दस्तावेज़ मांगा गया है जिससे 1985 से उत्तराखंड में निवास साबित हो।" },
    { q: "जाति प्रमाण पत्र कौन जारी करता है?", a: "तहसीलदार। आवेदन पहले तहसीलदार के पास जाता है, पटवारी जांच करके रिपोर्ट देते हैं और फिर तहसीलदार मंज़ूरी देते हैं।" },
    { q: "आवेदन का स्टेटस और प्रमाण पत्र की असलियत कैसे जांचें?", a: "पोर्टल के मुख्य पेज पर \"Application Status\" में आवेदन संख्या डालकर स्टेटस देखें, और \"Verify Certificate\" में आवेदन संख्या डालकर प्रमाण पत्र की जांच करें।" },
    { q: "अपुणि सरकार की हेल्पलाइन क्या है?", a: "1905 पर कॉल करें और विकल्प 4 चुनें (सोमवार-शनिवार, 10 से 5 बजे), या e-helpdesk@uk.gov.in पर ईमेल करें।" },
  ],
  related: [
    { href: "/states/uttarakhand-domicile-certificate.html", emoji: "🏠", title: "उत्तराखंड स्थायी निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/states/uttarakhand-income-certificate.html", emoji: "💰", title: "उत्तराखंड आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/tools/age-calculator.html", emoji: "⏳", title: "Exam Age Calculator", text: "आरक्षित वर्ग की उम्र छूट जांचें" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://eservices.uk.gov.in/", label: "📝 अपुणि सरकार पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
