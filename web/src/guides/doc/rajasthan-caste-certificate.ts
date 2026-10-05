import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - e-Mitra (emitra.rajasthan.gov.in) app bundle and its public APIs on
//   emitraapp.rajasthan.gov.in:
//   * getServiceRevenueDetails: Revenue Department services "Application form
//     for Caste Certificate" -SC/ST (Resident of Rajasthan), -SC-ST-migrated
//     (Central), -OBC for State, -OBC- Central, -General, -Minority; EWS for
//     state and for centre; "Print Digital Signed Certificates" services.
//   * getGuidelineEformJSON: citizen guideline (Jul 2024, .docx) for applying
//     SC/ST certificate via SSO > e-Mitra > प्रमाण पत्र सेवायें (Application),
//     Jan Aadhaar number, family member, OTP on Jan Aadhaar mobile, form,
//     attachments, payment page showing departmental fee, QR/net
//     banking/aggregator/UPI, DMP and Laser receipts; application forms:
//     Annexure-A SC/ST (Oct 2022) and Annexure B-1 OBC for Centre and State
//     (Jun 2026) with Jan Aadhaar of family head, migration declaration,
//     creamy-layer details, two witnesses, Patwari report, document list;
//     lists of sub-divisional (SDM) offices attached to the SC/ST and OBC
//     services (Jul 2025); SJE circular 18.10.2021 (mother's name).
//   * Online verification page: "Bonafide/Caste Certificate" by Transaction
//     ID (12-16 characters); contact: e-Mitra helpdesk 0141-2922241,
//     0141-2922238, helpdesk.emitra@rajasthan.gov.in; Citizen Contact Centre
//     1800-180-6127 (also for kiosks charging more than the fixed service
//     charge).
// - sje.rajasthan.gov.in (Social Justice & Empowerment Dept) "Guideline for
//   Caste Certificate" page: guidelines F11/.../15/54159 dated 09.09.2015
//   (issuing officer Sub-Divisional Magistrate; residents vs migrants; document
//   list; Patwari/Girdawar inquiry under MHA letter of 22.03.1977; bilingual
//   certificate; duplicate/revised certificate; appeal to district-level
//   scrutiny and vigilance committee; validity: SC/ST lifetime, OBC caste
//   certificate once with non-creamy-layer affidavit valid three years, NCL
//   one year, renewal on affidavit up to three years; district committee
//   composition; state committee appeal within 30 days); circular 63606-726
//   dated 20.10.2015 (ACEM may be authorised by the Collector).
// - SJE circular F11(167)... dated 18.10.2021 (cabinet order 134/2021 of
//   28.09.2021): caste certificate of children of single women in the
//   mother's name.
// Left out (not confirmable on an official page we could open): the fee
// amount, a time limit under the Rajasthan Guaranteed Delivery of Public
// Services Act, a separate helpline for caste certificates.
export const rajasthanCasteCertificate: DocGuide = {
  state: { slug: "rajasthan", hi: "राजस्थान" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Rajasthan Caste Certificate 2026: Apply & Status | SarkariSewa",
  description: "राजस्थान जाति प्रमाण पत्र (Caste Certificate) online apply 2026 at e-Mitra / SSO Rajasthan. Eligibility, document list, issuing officer (SDM) & status check guide.",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "राजस्थान जाति प्रमाण पत्र 2026: e-Mitra पर SC/ST/OBC आवेदन, जन आधार, कागज़ और वैधता",
  lead: "राजस्थान में जाति प्रमाण पत्र राजस्व विभाग की सेवा है और इसका आवेदन SSO ID से e-Mitra पर या नज़दीकी e-Mitra कियोस्क पर होता है। सामाजिक न्याय एवं अधिकारिता विभाग के दिशा-निर्देशों के अनुसार प्रमाण पत्र उपखंड मजिस्ट्रेट (SDM) जारी करते हैं। आवेदन जन आधार से जुड़ा है: परिवार के मुखिया का जन आधार नंबर डालकर सदस्य चुनना होता है। SC/ST, राज्य OBC, केंद्र OBC और दूसरे राज्य से आए (migrated) SC/ST के लिए e-Mitra पर अलग-अलग सेवाएं हैं।",
  facts: [
    ["पोर्टल", '<a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">SSO</a> → <a href="https://emitra.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">e-Mitra</a>'],
    ["जारी करते हैं", "उपखंड मजिस्ट्रेट (SDM)"],
    ["ज़रूरी", "परिवार का जन आधार नंबर"],
    ["वैधता", "SC/ST: जीवन भर; OBC नॉन-क्रीमी लेयर: 1 साल"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> राज्य की नौकरी/योजना के लिए \"SC/ST (Resident of Rajasthan)\" या \"OBC for State\", और केंद्र सरकार की नौकरी/परीक्षा के लिए \"OBC- Central\" वाली सेवा चुनें। गलत सेवा का प्रमाण पत्र भर्ती में मान्य न होने का जोखिम रहता है।",
  sections: [
    {
      id: "sevayen",
      title: "e-Mitra पर जाति प्रमाण पत्र की कौन सी सेवा किसके लिए",
      table: {
        head: ["e-Mitra सेवा", "किसके लिए"],
        rows: [
          ["Caste Certificate -SC/ST (Resident of Rajasthan)", "राजस्थान के मूल निवासी SC/ST, राज्य के कामों के लिए"],
          ["Caste Certificate- SC-ST-migrated (Central)", "दूसरे राज्य से आकर बसे SC/ST परिवार, केंद्र के कामों के लिए"],
          ["Caste Certificate -OBC for State", "राजस्थान की OBC सूची, राज्य की नौकरी/दाखिले के लिए"],
          ["Caste Certificate- OBC- Central", "केंद्र की OBC सूची, केंद्र सरकार की नौकरी/परीक्षा के लिए"],
          ["Caste Certificate -General / -Minority", "सामान्य वर्ग और अल्पसंख्यक समुदाय के प्रमाण पत्र"],
          ["Income and Asset certificate (EWS) for state / for Center", "EWS आरक्षण; राज्य और केंद्र के लिए अलग"],
        ],
      },
      callout: { kind: "info", html: "जून 2026 के OBC फॉर्म (परिशिष्ट B-1) में एक ही फॉर्म पर चुनना होता है कि आवेदन <strong>केंद्र</strong> के OBC के लिए है या <strong>राज्य</strong> के पिछड़े वर्ग के लिए, और सूची में आपकी जाति का क्रमांक भी लिखना होता है।" },
    },
    {
      id: "patrata",
      title: "पात्रता: मूल निवासी, दूसरे राज्य से आए और विवाहित लोग",
      list: [
        "<strong>मूल निवासी:</strong> 2015 के दिशा-निर्देशों के अनुसार वह व्यक्ति जो SC/ST/OBC/विशेष पिछड़ा वर्ग का है और राजस्थान का मूल निवासी है।",
        "<strong>दूसरे राज्य से आए परिवार:</strong> राज्य वाले SC/ST और OBC फॉर्म के शपथ-पत्र में लिखना होता है कि <strong>\"मैं और मेरा परिवार अन्य राज्य से राजस्थान में माइग्रेट होकर नहीं आये हैं\"</strong>। जो परिवार दूसरे राज्य से आए हैं, उनके लिए e-Mitra पर \"SC-ST-migrated (Central)\" अलग सेवा है।",
        "<strong>राजस्थान के लोग जो दूसरे राज्य में रह रहे हैं:</strong> OBC फॉर्म के अनुसार विवाह, शिक्षा या रोज़गार के लिए दूसरे राज्य में रह रहे राजस्थान के मूल निवासी <strong>घोषणा पत्र \"ड\"</strong> लगाकर आवेदन करते हैं।",
        "<strong>एक ही प्रमाण पत्र:</strong> शपथ-पत्र में यह भी लिखना होता है कि आपने किसी दूसरे जिले/प्रदेश से जाति प्रमाण पत्र नहीं बनवाया है।",
        "<strong>माता के नाम से:</strong> सामाजिक न्याय एवं अधिकारिता विभाग के 18.10.2021 के परिपत्र के अनुसार कानूनी रूप से तलाकशुदा या घरेलू कलह/हिंसा के कारण अलग रह रही एकल महिला के बच्चों का SC/ST/OBC प्रमाण पत्र, खास परिस्थितियों में माता की जाति और नाम से जारी हो सकता है, अगर बच्चों का पालन-पोषण माता कर रही हो।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-Mitra आवेदन फॉर्म की सूची)",
      list: [
        "<strong>आवेदक की नई फोटो</strong> (फॉर्म पर चिपकाएं, स्टेपल न करें)।",
        "<strong>अपनी या पिता की जाति का सबूत:</strong> पहले राजस्व रिकॉर्ड, जैसे <strong>भूमि की जमाबंदी</strong>; ज़रूरत हो तो नगरपालिका/विकास प्राधिकरण/नगर विकास न्यास/ग्राम पंचायत का जारी किया पट्टा जिसमें जाति लिखी हो (अगर ये ऑनलाइन उपलब्ध न हों)।",
        "<strong>आय प्रमाण पत्र या आयकर रिटर्न</strong> की कॉपी (अगर ऑनलाइन उपलब्ध न हो)।",
        "फॉर्म का <strong>शपथ-पत्र</strong>, किसी उत्तरदायी व्यक्ति से सत्यापित।",
        "<strong>दो उत्तरदायी व्यक्तियों के प्रमाण पत्र</strong>: जैसे सांसद, विधायक, राजकीय अधिकारी-कर्मचारी, जिला प्रमुख, प्रधान, जिला परिषद सदस्य, सरपंच, ग्राम सेवक, पटवारी, महापौर, नगर निगम सदस्य, नगरपालिका अध्यक्ष, स्कूल के हेडमास्टर, PHC/CHC के डॉक्टर, BDO या सहायक अभियंता।",
        "<strong>पुराना जाति प्रमाण पत्र</strong> (अगर हो और ऑनलाइन न हो)।",
        "ट्रांसजेंडर आवेदक के लिए ट्रांसजेंडर होने का प्रमाण पत्र (OBC फॉर्म)।",
      ],
      callout: { kind: "ok", html: "<strong>OBC के लिए अतिरिक्त:</strong> फॉर्म में माता-पिता/पति के पद, सरकारी सेवा, कृषि भूमि, शहरी संपत्ति और परिवार की सालाना आय का ब्योरा भरना होता है, और यह घोषणा करनी होती है कि आप <strong>क्रीमी लेयर</strong> में नहीं हैं। गलत जानकारी पर चयन/नियुक्ति रद्द हो सकती है।" },
    },
    {
      id: "online",
      title: "SSO और e-Mitra पर ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://sso.rajasthan.gov.in/" target="_blank" rel="noopener nofollow">sso.rajasthan.gov.in</a> पर अपनी SSO ID से लॉगिन करें और <strong>E-MITRA</strong> चुनें।',
        "डैशबोर्ड पर सर्विसेज में <strong>प्रमाण पत्र सेवायें (Application)</strong> पर क्लिक करें और सर्च बॉक्स में अपनी सेवा लिखें, जैसे <strong>Application form for Caste Certificate-SC/ST (Resident of Rajasthan)</strong>।",
        "<strong>जन आधार नंबर</strong> डालें, <strong>Show Family Members</strong> पर क्लिक करें, जिसका प्रमाण पत्र बनना है वह सदस्य चुनें और <strong>Verify and Fetch Detail</strong> करें।",
        "जन आधार से जुड़े मोबाइल पर आया <strong>OTP</strong> डालें। आपका ब्योरा प्रोफाइल में अपने-आप भर जाएगा; बाकी जानकारी भरें, <strong>Fetch Address</strong> से वर्तमान व स्थायी पता भरकर सेव करें।",
        "आवेदन फॉर्म के सभी ज़रूरी फील्ड भरें। <strong>संलग्नक सूची</strong> में हर दस्तावेज़ अपलोड करके <strong>ADD</strong> करें, फिर फॉर्म सेव करें।",
        "भुगतान पेज पर सेवा का नाम और <strong>विभागीय शुल्क</strong> दिखेगा। QR कोड, नेट बैंकिंग, एग्रीगेटर या UPI से भुगतान करें।",
        "भुगतान के बाद <strong>DMP रसीद</strong> और <strong>लेज़र रसीद</strong> डाउनलोड करें। रसीद का ट्रांज़ैक्शन नंबर स्टेटस और प्रिंट के लिए काम आता है।",
      ],
    },
    {
      id: "offline",
      title: "e-Mitra कियोस्क से आवेदन",
      intro: "खुद आवेदन न कर पाएं तो नज़दीकी <strong>e-Mitra कियोस्क</strong> पर जन आधार, भरा हुआ फॉर्म और मूल कागज़ लेकर जाएं। अधूरा जमा आवेदन कियोस्क स्तर पर ही लंबित रहता है, इसलिए रसीद लेकर ही लौटें। e-Mitra के अनुसार अगर कियोस्क विभाग के तय सेवा शुल्क से ज़्यादा पैसे मांगे तो <strong>टोल फ्री 1800-180-6127</strong> पर शिकायत करें।",
    },
    {
      id: "jaanch",
      title: "जांच कैसे होती है और प्रमाण पत्र कौन देता है",
      list: [
        "<strong>जारी करने वाले:</strong> 2015 के दिशा-निर्देशों के अनुसार <strong>उपखंड मजिस्ट्रेट (SDM)</strong>। 20.10.2015 के परिपत्र के अनुसार विशेष परिस्थितियों में जिला कलेक्टर सहायक कलेक्टर एवं कार्यपालक मजिस्ट्रेट (ACEM) को भी अधिकृत कर सकते हैं। e-Mitra पर SC/ST और OBC सेवाओं के साथ राज्य के सभी उपखंड कार्यालयों की सूची दी गई है।",
        "<strong>पटवारी रिपोर्ट:</strong> जमाबंदी या दूसरे दस्तावेज़ ऑनलाइन न मिलें तो हल्का पटवारी मौके पर जांच, गवाहों और शपथ-पत्र के आधार पर जाति की रिपोर्ट देते हैं।",
        "<strong>रिकॉर्ड की जांच:</strong> SDM अपने पटवारी/गिरदावर से पैतृक या खुद के राजस्व रिकॉर्ड की जांच कराते हैं; ज़रूरत हो तो स्कूल, नगरपालिका या ग्राम पंचायत के रिकॉर्ड भी देखे जाते हैं।",
        "प्रमाण पत्र <strong>हिंदी और अंग्रेज़ी</strong> दोनों में एक साथ जारी होता है और e-Sign से डिजिटल हस्ताक्षरित होता है।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस, प्रिंट और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> e-Mitra वेबसाइट के <strong>Online verification / Transaction Status</strong> पेज पर रसीद का ट्रांज़ैक्शन नंबर डालें।",
        "<strong>प्रिंट:</strong> मंज़ूरी के बाद e-Mitra पर राजस्व विभाग की <strong>Print Digital Signed Certificates</strong> सेवा में ट्रांज़ैक्शन नंबर डालकर डिजिटल हस्ताक्षरित प्रमाण पत्र निकालें (यह e-Mitra कियोस्क से भी होता है)।",
        "<strong>प्रमाण पत्र असली है या नहीं:</strong> e-Mitra के Online verification पेज पर <strong>Bonafide/Caste Certificate</strong> चुनें और 12 से 16 अंकों का ट्रांज़ैक्शन ID डालें।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखना हो तो देखें: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता, डुप्लीकेट और नाम बदलना",
      list: [
        "<strong>SC/ST:</strong> 2015 के दिशा-निर्देशों के अनुसार जीवन भर (आजीवन) मान्य।",
        "<strong>OBC:</strong> जाति प्रमाण पत्र एक बार ही जारी होता है, पर क्रीमी लेयर में न होने का तथ्य तीन साल तक विधि-सम्मत शपथ-पत्र के आधार पर माना जाता है।",
        "<strong>नॉन-क्रीमी लेयर प्रमाण पत्र:</strong> एक साल के लिए मान्य। अगले साल भी क्रीमी लेयर में नहीं हैं तो सत्यापित शपथ-पत्र लेकर पुराना प्रमाण पत्र मान लिया जाता है; ऐसा अधिकतम तीन साल तक हो सकता है। भर्ती के विज्ञापन में मांगी गई तारीख ज़रूर देखें।",
        "<strong>डुप्लीकेट:</strong> प्रमाण पत्र गुम हो जाए, फट जाए या खराब हो जाए तो SDM दोबारा प्रति जारी कर सकते हैं।",
        "<strong>संशोधित प्रमाण पत्र:</strong> नाम बदलने पर, और उम्र बढ़ने पर पहचान के लिए नई फोटो वाला प्रमाण पत्र मांगने पर।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन खारिज हो जाए तो क्या करें",
      intro: "2015 के दिशा-निर्देशों के अनुसार अगर SDM आवेदन खारिज करें और आपको लगता है कि आपके कागज़ सही हैं, तो आप <strong>जिला स्तरीय जाति प्रमाण-पत्र छानबीन एवं सतर्कता समिति</strong> के अध्यक्ष (जिला कलेक्टर) को सारे सबूतों के साथ लिखित आवेदन दे सकते हैं। समिति आवेदन सही पाए तो SDM को प्रमाण पत्र जारी करने का निर्देश दे सकती है; खारिज करने का आदेश कारणों सहित होगा। जिला समिति के फैसले से असंतुष्ट पक्ष 30 दिन में <strong>राज्य स्तरीय छानबीन समिति</strong> में अपील कर सकता है।",
      table: {
        head: ["आम वजह", "हल"],
        rows: [
          ["जन आधार में नाम/रिश्ता गलत", "पहले जन आधार में सुधार कराएं, फिर आवेदन करें"],
          ["जाति का राजस्व रिकॉर्ड नहीं", "पटवारी रिपोर्ट, दो उत्तरदायी व्यक्तियों के प्रमाण पत्र और पुराना जाति प्रमाण पत्र लगाएं"],
          ["राज्य और केंद्र की सेवा में गड़बड़", "केंद्र की नौकरी के लिए \"OBC- Central\", राज्य के लिए \"OBC for State\" में आवेदन करें"],
          ["OBC में आय/संपत्ति का ब्योरा अधूरा", "फॉर्म के क्रीमी लेयर वाले सभी हिस्से भरें; करदाता हों तो पिछले तीन साल के रिटर्न की प्रति दें"],
          ["गवाह/शपथ-पत्र सत्यापित नहीं", "उत्तरदायी व्यक्ति से शपथ-पत्र सत्यापित कराकर दोबारा लगाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "हेल्पलाइन (e-Mitra)",
      list: [
        "<strong>सिटिज़न कॉन्टैक्ट सेंटर:</strong> 1800-180-6127 (टोल फ्री), ccc.emitra@rajasthan.gov.in",
        "<strong>e-Mitra हेल्पडेस्क:</strong> 0141-2922241, 0141-2922238, helpdesk.emitra@rajasthan.gov.in",
      ],
    },
  ],
  official: [
    { href: "https://sso.rajasthan.gov.in/", title: "राजस्थान SSO (e-Mitra लॉगिन)" },
    { href: "https://emitra.rajasthan.gov.in/emitra/online-verification", title: "e-Mitra: Online verification / Transaction Status" },
    { href: "https://sje.rajasthan.gov.in/Default.aspx?PageID=317", title: "सामाजिक न्याय एवं अधिकारिता विभाग: जाति प्रमाण पत्र के दिशा-निर्देश" },
    { href: "https://emitraapp.rajasthan.gov.in//emitrashared_2026/USER_MGMT_DOCS/GUIDELINE_AND_EFORM/2026/6/3/GAndE_1780464107335.pdf", title: "OBC (केंद्र/राज्य) आवेदन फॉर्म, परिशिष्ट B-1 (PDF)" },
    { href: "https://emitraapp.rajasthan.gov.in//emitrashared/USER_MGMT_DOCS/GUIDELINE_AND_EFORM/2022/10/13/GAndE_1665675056372.pdf", title: "SC/ST आवेदन फॉर्म, परिशिष्ट A (PDF)" },
  ],
  faq: [
    { q: "राजस्थान में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "sso.rajasthan.gov.in पर लॉगिन करके e-Mitra खोलें, प्रमाण पत्र सेवायें (Application) में अपनी सेवा (जैसे Caste Certificate-SC/ST या OBC for State) चुनें, जन आधार नंबर और OTP से सदस्य का ब्योरा लाएं, फॉर्म भरें, कागज़ अपलोड करें और शुल्क भरकर रसीद लें।" },
    { q: "राजस्थान में जाति प्रमाण पत्र कौन जारी करता है?", a: "सामाजिक न्याय एवं अधिकारिता विभाग के 2015 के दिशा-निर्देशों के अनुसार उपखंड मजिस्ट्रेट (SDM)। विशेष परिस्थितियों में जिला कलेक्टर ACEM को भी अधिकृत कर सकते हैं।" },
    { q: "राजस्थान का जाति प्रमाण पत्र कब तक वैध रहता है?", a: "2015 के दिशा-निर्देशों के अनुसार SC/ST प्रमाण पत्र जीवन भर मान्य है। OBC का नॉन-क्रीमी लेयर प्रमाण पत्र एक साल के लिए मान्य है; उसके बाद सत्यापित शपथ-पत्र देकर पुराना प्रमाण पत्र अधिकतम तीन साल तक माना जा सकता है।" },
    { q: "केंद्र सरकार की नौकरी के लिए OBC प्रमाण पत्र कैसे बनेगा?", a: "e-Mitra पर \"Application form for Caste Certificate- OBC- Central\" सेवा चुनें। फॉर्म में केंद्र की OBC सूची में आपकी जाति का क्रमांक और क्रीमी लेयर से जुड़ा ब्योरा भरना होता है।" },
    { q: "क्या बच्चे का जाति प्रमाण पत्र माता के नाम से बन सकता है?", a: "सामाजिक न्याय एवं अधिकारिता विभाग के 18.10.2021 के परिपत्र के अनुसार तलाकशुदा या पति से अलग रह रही एकल महिला के बच्चों का SC/ST/OBC प्रमाण पत्र खास परिस्थितियों में माता के नाम और जाति से जारी हो सकता है, अगर बच्चों का पालन-पोषण माता कर रही हो।" },
    { q: "जाति प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "e-Mitra वेबसाइट के Online verification पेज पर Bonafide/Caste Certificate चुनें और प्रमाण पत्र का 12 से 16 अंकों का ट्रांज़ैक्शन ID डालें।" },
    { q: "आवेदन खारिज हो जाए तो कहां अपील करें?", a: "2015 के दिशा-निर्देशों के अनुसार जिला स्तरीय जाति प्रमाण-पत्र छानबीन एवं सतर्कता समिति के अध्यक्ष (जिला कलेक्टर) को लिखित आवेदन दें। जिला समिति के फैसले के खिलाफ 30 दिन में राज्य स्तरीय छानबीन समिति में अपील हो सकती है।" },
  ],
  related: [
    { href: "/states/rajasthan-domicile-certificate.html", emoji: "🏠", title: "राजस्थान मूल निवास प्रमाण पत्र", text: "बोनाफाइड सर्टिफिकेट" },
    { href: "/states/rajasthan-income-certificate.html", emoji: "💰", title: "राजस्थान आय प्रमाण पत्र", text: "e-Mitra पर आवेदन" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://sso.rajasthan.gov.in/", label: "📝 SSO / e-Mitra पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
