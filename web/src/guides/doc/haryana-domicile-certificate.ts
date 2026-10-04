import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026; saralharyana.gov.in and edisha.gov.in are not
// reachable from our checker, so facts come from Haryana district websites):
// - faridabad.nic.in/service/residence-certificate/: purpose (resident quotas
//   in education and government service, local-preference jobs), conditions
//   (resident of the district / home in the district / 15 or more years),
//   documents, attestation by a Class-I officer and re-confirmation,
//   saralharyana.gov.in.
// - fatehabad.nic.in/service/residence-certificate/: born in Haryana or living
//   15 years; documents (form, Sarpanch/MC and Patwari report, DOB certificate,
//   ration/voter/Aadhaar card, photo); Atal Seva Kendra / e-Disha centres.
// - karnal.gov.in/service/residence-certificate/: documents (form, affidavit,
//   voter card, ration card, Aadhaar, birth certificate), e-Disha centre.
// - nuh.gov.in and hisar.gov.in /service/residence-certificate/: permanent
//   address in Haryana and 15 years' stay; Saral portal link.
// Left out (not confirmable on an official page we could open): fee, time
// limit, Saral menu names, validity period, helpline.
export const haryanaDomicileCertificate: DocGuide = {
  state: { slug: "haryana", hi: "हरियाणा" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Haryana Domicile Certificate 2026: Apply & Status | SarkariSewa",
  description: "हरियाणा निवास प्रमाण पत्र (Resident/Domicile Certificate) 2026: हरियाणा में जन्म या 15 साल निवास की शर्त, ज़रूरी कागज़, सरपंच/पटवारी रिपोर्ट, Saral Haryana पर आवेदन और अटल सेवा केंद्र।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "हरियाणा निवास (डोमिसाइल) प्रमाण पत्र 2026: 15 साल की शर्त, कागज़ और आवेदन",
  lead: "हरियाणा में निवास प्रमाण पत्र (Resident Certificate, जिसे आम तौर पर डोमिसाइल कहते हैं) उन लोगों को मिलता है जो हरियाणा में पैदा हुए हैं या 15 साल या उससे ज़्यादा समय से राज्य में रह रहे हैं। आवेदन Saral Haryana पोर्टल (saralharyana.gov.in) पर या अटल सेवा केंद्र / ई-दिशा केंद्र के ज़रिए होता है। यह प्रमाण पत्र दाखिले और सरकारी नौकरी में हरियाणा निवासियों के कोटे के लिए मांगा जाता है।",
  facts: [
    ["शर्त", "हरियाणा में जन्म या 15+ साल निवास"],
    ["ऑनलाइन", '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a>'],
    ["ऑफलाइन", "अटल सेवा केंद्र / ई-दिशा केंद्र"],
    ["जांच", "सरपंच/MC और पटवारी की रिपोर्ट"],
  ],
  notice: "<strong>ध्यान दें:</strong> फरीदाबाद ज़िला प्रशासन के अनुसार आवेदन को सत्यापित (attest) करने वाले प्रथम श्रेणी (Class-I) अधिकारी से दोबारा पुष्टि कराई जाती है और उसके बाद ही प्रमाण पत्र जारी होता है। इसलिए जिस अधिकारी से फॉर्म सत्यापित कराएं, उसका नाम-पद साफ लिखा हो।",
  sections: [
    {
      id: "kya-hai",
      title: "निवास प्रमाण पत्र क्या है और कहां काम आता है",
      intro: "यह इस बात का सबूत है कि प्रमाण पत्र रखने वाला व्यक्ति उस ज़िले/राज्य का निवासी है जिसने इसे जारी किया। सरकारी ज़िला पेजों के अनुसार इसकी ज़रूरत पड़ती है:",
      list: [
        "<strong>शिक्षण संस्थानों में</strong> हरियाणा निवासियों के कोटे (Resident Quota) में दाखिले के लिए",
        "<strong>सरकारी नौकरी</strong> में निवासियों के लिए तय कोटे या प्राथमिकता के लिए",
        "उन नौकरियों और योजनाओं में जहां <strong>स्थानीय निवासियों को प्राथमिकता</strong> दी जाती है",
      ],
      callout: { kind: "info", html: "यह प्रमाण पत्र <strong>सभी वर्गों</strong> के लोगों के लिए है; जाति से इसका कोई संबंध नहीं है। आरक्षण के लिए जाति प्रमाण पत्र अलग से बनता है।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है (पात्रता)",
      list: [
        "आवेदक <strong>हरियाणा में पैदा हुआ</strong> हो, <strong>या</strong>",
        "आवेदक <strong>15 साल या उससे ज़्यादा</strong> समय से हरियाणा में रह रहा हो, और",
        "हरियाणा में उसका <strong>स्थायी पता/घर</strong> हो; आवेदन उसी ज़िले में होता है जहां आप रहते हैं।",
      ],
      callout: { kind: "warn", html: "15 साल का निवास साबित करने के लिए पुराने कागज़ (जैसे पुराना राशन कार्ड, वोटर लिस्ट में नाम, स्कूल रिकॉर्ड, संपत्ति के कागज़) सबसे ज़्यादा काम आते हैं। सिर्फ नया आधार कार्ड 15 साल का निवास साबित नहीं करता।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      intro: "ज़िलों की सरकारी वेबसाइटों पर दी गई सूची के अनुसार ये कागज़ तैयार रखें:",
      list: [
        "<strong>आवेदन पत्र</strong> (तय फॉर्मेट में) और <strong>फोटो</strong>",
        "<strong>शपथ पत्र (Affidavit)</strong>: निवास की अवधि और पते के बारे में",
        "<strong>जन्म प्रमाण पत्र</strong> या जन्मतिथि का प्रमाण",
        "<strong>राशन कार्ड, वोटर कार्ड / वोटर लिस्ट में नाम, या आधार कार्ड</strong> (कम से कम एक; जितने हों उतने बेहतर)",
        "<strong>सरपंच या MC (पार्षद) और पटवारी की रिपोर्ट</strong>: आपके निवास की पुष्टि के लिए",
        "<strong>प्रथम श्रेणी (Class-I) अधिकारी से सत्यापित</strong> फॉर्म, जहां ज़िला यह मांगता है",
      ],
    },
    {
      id: "online",
      title: "Saral Haryana पर ऑनलाइन आवेदन",
      steps: [
        '<a href="https://saralharyana.gov.in/" target="_blank" rel="noopener nofollow">saralharyana.gov.in</a> खोलें और अपने अकाउंट से लॉगिन करें (नया हैं तो पहले रजिस्टर करें)।',
        "सेवाओं की सूची में <strong>Resident Certificate (निवास प्रमाण पत्र)</strong> खोजकर चुनें।",
        "फॉर्म में नाम, माता-पिता का नाम, पूरा पता, जन्म स्थान और <strong>हरियाणा में रहने की अवधि</strong> सही भरें।",
        "शपथ पत्र, जन्म प्रमाण, राशन/वोटर/आधार कार्ड और सरपंच/MC-पटवारी रिपोर्ट अपलोड करें।",
        "पोर्टल पर जो शुल्क दिखे उसका भुगतान करके आवेदन जमा करें और <strong>आवेदन नंबर</strong> नोट कर लें।",
        "मंज़ूरी के बाद प्रमाण पत्र Saral पोर्टल से डाउनलोड करें और उसमें नाम, पता व पिता का नाम जांच लें।",
      ],
    },
    {
      id: "offline",
      title: "अटल सेवा केंद्र / ई-दिशा केंद्र से आवेदन",
      intro: "खुद ऑनलाइन आवेदन न कर पाएं तो अपने ज़िले के <strong>अटल सेवा केंद्र</strong> या लघु सचिवालय/तहसील में बने <strong>ई-दिशा केंद्र</strong> पर सभी मूल कागज़ और फोटोकॉपी लेकर जाएं। वहां ऑपरेटर फॉर्म भरकर जमा करेगा। पावती पर लिखा आवेदन नंबर ज़रूर लें।",
      list: [
        "गांव में रहते हैं तो सरपंच और पटवारी की रिपोर्ट पहले से ले जाएं; शहर में MC (पार्षद) की रिपोर्ट लगती है।",
        "शपथ पत्र पर सही तारीख और निवास की अवधि लिखी हो।",
      ],
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "Saral पोर्टल पर लॉगिन करके अपने आवेदन की स्थिति देखें; केंद्र से आवेदन किया है तो आवेदन नंबर लेकर वहीं पूछें।",
        "सत्यापन के दौरान अधिकारी या पटवारी कोई कागज़ मांगें तो जल्दी जमा करें, वरना आवेदन लौट सकता है।",
        "प्रमाण पत्र मिलने पर उसकी कुछ प्रिंट और PDF कॉपी सुरक्षित रखें; दाखिले और भर्तियों में बार-बार मांगी जाती है।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["15 साल का निवास साबित नहीं हुआ", "पुराना राशन कार्ड, पुरानी वोटर लिस्ट, स्कूल रिकॉर्ड या संपत्ति/किराये के पुराने कागज़ जोड़ें"],
          ["सरपंच/MC या पटवारी की रिपोर्ट नहीं लगी", "पहले रिपोर्ट बनवाकर दोबारा आवेदन करें"],
          ["Class-I अधिकारी से पुष्टि नहीं हुई", "सत्यापन करने वाले अधिकारी से संपर्क करके पुष्टि भिजवाएं"],
          ["नाम/पता कागज़ों में अलग-अलग", "आधार, राशन कार्ड और वोटर कार्ड में एक जैसी जानकारी कराएं, फिर आवेदन करें"],
          ["गलत ज़िले में आवेदन", "उसी ज़िले में आवेदन करें जहां आपका स्थायी घर है"],
        ],
      },
    },
  ],
  official: [
    { href: "https://saralharyana.gov.in/", title: "Saral Haryana पोर्टल (ऑनलाइन आवेदन)" },
    { href: "https://faridabad.nic.in/service/residence-certificate/", title: "Residence Certificate: शर्तें और कागज़ (ज़िला फरीदाबाद)" },
    { href: "https://fatehabad.nic.in/service/residence-certificate/", title: "Haryana Residence Certificate (ज़िला फतेहाबाद)" },
    { href: "https://karnal.gov.in/service/residence-certificate/", title: "Residence Certificate (ज़िला करनाल)" },
  ],
  faq: [
    { q: "हरियाणा का निवास प्रमाण पत्र किसे मिलता है?", a: "जो हरियाणा में पैदा हुए हैं या 15 साल या उससे ज़्यादा समय से हरियाणा में रह रहे हैं और जिनका राज्य में स्थायी पता है।" },
    { q: "हरियाणा डोमिसाइल के लिए कौन से कागज़ चाहिए?", a: "आवेदन पत्र, फोटो, शपथ पत्र, जन्म प्रमाण पत्र, राशन/वोटर/आधार कार्ड और सरपंच या MC व पटवारी की रिपोर्ट। कुछ ज़िलों में फॉर्म प्रथम श्रेणी अधिकारी से सत्यापित कराना होता है।" },
    { q: "हरियाणा निवास प्रमाण पत्र ऑनलाइन कहां बनता है?", a: "Saral Haryana पोर्टल saralharyana.gov.in पर। ऑफलाइन के लिए अटल सेवा केंद्र या ई-दिशा केंद्र जाएं।" },
    { q: "मैं 10 साल से हरियाणा में रह रहा हूं, क्या प्रमाण पत्र बनेगा?", a: "ज़िला पेजों पर दी गई शर्त के अनुसार हरियाणा में जन्म या कम से कम 15 साल निवास ज़रूरी है। जिस संस्था या भर्ती के लिए चाहिए, उसके नियम भी पढ़ें, क्योंकि कुछ में माता-पिता के निवास या हरियाणा से पढ़ाई जैसी अलग शर्तें हो सकती हैं।" },
    { q: "निवास प्रमाण पत्र और जाति प्रमाण पत्र में क्या फर्क है?", a: "निवास प्रमाण पत्र बताता है कि आप हरियाणा के निवासी हैं और यह सभी वर्गों के लिए है। जाति प्रमाण पत्र SC/BC आरक्षण के लिए होता है और अलग से बनता है।" },
  ],
  related: [
    { href: "/states/haryana-caste-certificate.html", emoji: "📜", title: "हरियाणा जाति प्रमाण पत्र", text: "SC/BC प्रमाण पत्र" },
    { href: "/states/haryana-income-certificate.html", emoji: "💰", title: "हरियाणा आय प्रमाण पत्र", text: "छात्रवृत्ति और योजनाओं के लिए" },
    { href: "/states/haryana-employment-exchange.html", emoji: "💼", title: "हरियाणा रोज़गार कार्यालय", text: "hrex.gov.in पर पंजीकरण" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://saralharyana.gov.in/", label: "📝 Saral पर आवेदन करें" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
