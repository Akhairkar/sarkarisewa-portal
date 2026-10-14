import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - eservice.arunachal.gov.in (Arunachal eServices / ServicePlus, Department of
//   IT & Communication, run by NIC): register, apply online, upload scanned
//   documents, track application, "Verify Certificate" with application
//   reference number + token, SMS on decision; helpline 155250,
//   serviceplus-arn@nic.in. Services page: District Administration >
//   "Issuance of Income Certificate".
// - PreRequisite_Income_Certificate.pdf and SOP_eServices_Arunachal.pdf
//   (SOP_ServicePlus_1.0): mandatory (one of): salary statement for last 12
//   months from DDO (government employee); certificate from BDO (rural) or from
//   DAO/DHO/DVO etc. for income from agriculture, horticulture, veterinary
//   sources (APST non-government); IT return / Form 16 (non-APST
//   non-government). Optional address proof: voter ID, Aadhaar, LPC, Land
//   Allotment Passbook, ration card, LPG card, driving licence. Process for
//   income certificate: online or CSC/JSK kiosk; fee in cash or online;
//   acknowledgement with reference number and SMS; dealing assistant > branch
//   officer (may call for in-person verification) > approving officer >
//   branch officer issues with digital signature; print from own login or at
//   CSC with acknowledgement.
// - how_to_apply.pdf (portal): payment by debit card / net banking; digitally
//   signed certificate delivered in the ServicePlus account.
// - dibangvalley.nic.in Citizen Charter (AP Right to Public Service Act, 2016
//   and Rules, 2017): income certificate, designated officer DC, 15 days; 1st
//   appeal Secretary/Commissioner 15 days; 2nd appeal Chief Secretary 15 days.
//   "How to avail the services" page (Anini): income certificate for APST
//   submitted through the BDO; for non-APST a self-declaration affidavit
//   before the Executive Magistrate.
// - papumpare.nic.in Citizen Charter (same Act): PRC, income and ST certificate,
//   designated officer EAC/CO (J/S), 3 days. Timelines differ by district.
// Left out (not confirmable on an official page we could open): fee amount,
// validity period.
export const arunachalPradeshIncomeCertificate: DocGuide = {
  state: { slug: "arunachal-pradesh", hi: "अरुणाचल प्रदेश" },
  doc: "income-certificate",
  docHi: "आय प्रमाण पत्र",
  title: "Arunachal Pradesh Income Certificate 2026: Apply Online",
  description: "Arunachal Pradesh (अरुणाचल प्रदेश) आय प्रमाण पत्र 2026: eservice.arunachal.gov.in (ServicePlus) पर ऑनलाइन आवेदन, किसे कौन सा आय-प्रमाण देना है, समय सीमा और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "अरुणाचल प्रदेश आय प्रमाण पत्र 2026: ServicePlus पर आवेदन, कागज़, समय सीमा और सत्यापन",
  lead: "अरुणाचल प्रदेश में आय प्रमाण पत्र ज़िले के उपायुक्त (DC) कार्यालय से मिलता है। आवेदन <a href=\"https://eservice.arunachal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">eservice.arunachal.gov.in</a> (ServicePlus) पर या CSC / जन सुविधा काउंटर पर होता है और प्रमाण पत्र डिजिटल हस्ताक्षर के साथ आपके अकाउंट में आता है। समय सीमा ज़िले के नागरिक चार्टर में तय है (जैसे पापुम पारे में 3 दिन, दिबांग वैली में 15 दिन)। आय का प्रमाण इस पर निर्भर है कि आप सरकारी कर्मचारी हैं, गांव में खेती/बागवानी/पशुपालन से कमाते हैं, या गैर-APST हैं।",
  facts: [
    ["पोर्टल", '<a href="https://eservice.arunachal.gov.in/" target="_blank" rel="noopener nofollow">eservice.arunachal.gov.in</a>'],
    ["जारी करते हैं", "उपायुक्त (DC) कार्यालय"],
    ["समय सीमा", "ज़िले के चार्टर अनुसार: 3 से 15 दिन"],
    ["हेल्पलाइन", "155250"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "आय प्रमाण पत्र किस काम आता है",
      intro: "आय प्रमाण पत्र परिवार की सालाना आय का सरकारी प्रमाण है, जो छात्रवृत्ति, फीस माफी और आय पर आधारित योजनाओं में मांगा जाता है। पोर्टल पर इसकी सेवा का नाम <strong>Issuance of Income Certificate</strong> है (District Administration के तहत)।",
      callout: { kind: "info", html: "जनजाति या निवास का सबूत चाहिए तो अलग सेवाएं हैं: <a href=\"/states/arunachal-pradesh-caste-certificate.html\">अरुणाचल ST प्रमाण पत्र</a> और <a href=\"/states/arunachal-pradesh-domicile-certificate.html\">PRC / निवास प्रमाण पत्र</a>।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़: किसे कौन सा आय-प्रमाण",
      intro: "पोर्टल की सूची के अनुसार नीचे में से <strong>आपकी स्थिति वाला एक</strong> आय-प्रमाण ज़रूरी है:",
      table: {
        head: ["आप कौन हैं", "कौन सा आय-प्रमाण"],
        rows: [
          ["सरकारी कर्मचारी", "पिछले <strong>12 महीने का वेतन विवरण</strong>, आहरण एवं वितरण अधिकारी (DDO) से"],
          ["APST, गैर-सरकारी, गांव में रहते हैं", "<strong>BDO (प्रखंड विकास अधिकारी) का प्रमाण पत्र</strong>"],
          ["APST, गैर-सरकारी, खेती/बागवानी/पशुपालन से आय", "<strong>DAO, DHO, DVO</strong> आदि (कृषि, बागवानी, पशु चिकित्सा अधिकारी) का प्रमाण पत्र"],
          ["गैर-APST, गैर-सरकारी", "<strong>आयकर रिटर्न (ITR) या Form 16</strong>"],
        ],
      },
      list: [
        "<strong>वैकल्पिक, पते का सबूत</strong> (सत्यापित कॉपी): मतदाता पहचान पत्र, आधार, LPC, Land Allotment Passbook, राशन कार्ड, LPG कार्ड या ड्राइविंग लाइसेंस।",
      ],
      callout: { kind: "ok", html: "ज़िलों में तरीका थोड़ा अलग हो सकता है। जैसे दिबांग वैली (अनिनी) के चार्टर में APST के लिए आवेदन <strong>BDO के माध्यम से</strong> और गैर-APST के लिए <strong>कार्यकारी मजिस्ट्रेट के सामने स्व-घोषणा शपथ-पत्र</strong> लिखा है। अपने DC कार्यालय से पुष्टि कर लें। शपथ-पत्र के बारे में: <a href=\"/affidavit/income.html\">आय का एफिडेविट / स्व-घोषणा</a>।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://eservice.arunachal.gov.in/" target="_blank" rel="noopener nofollow">eservice.arunachal.gov.in</a> खोलें। पहली बार हैं तो <strong>Register Yourself</strong> / Citizen Registration से अकाउंट बनाएं।',
        "लॉगिन करके <strong>Issuance of Income Certificate</strong> सेवा और अपना ज़िला (DC कार्यालय) चुनें।",
        "फॉर्म भरें, अपनी स्थिति वाला आय-प्रमाण और फोटो/पता प्रमाण की स्कैन कॉपी अपलोड करें।",
        "जहां शुल्क लगता है, वहां डेबिट कार्ड या नेट बैंकिंग से भुगतान करें और Submit करें।",
        "<strong>पावती</strong> डाउनलोड करें; उसमें आवेदन संदर्भ संख्या होती है। SMS भी आता है।",
      ],
    },
    {
      id: "offline",
      title: "CSC या जन सुविधा काउंटर से",
      intro: "SOP के अनुसार भरा हुआ फॉर्म और कागज़ <strong>CSC / जन सुविधा केंद्र (JSK)</strong> पर दे सकते हैं। ऑपरेटर कागज़ स्कैन करके ऑनलाइन चढ़ाता है, शुल्क नकद या ऑनलाइन लेता है और पावती देता है। मंज़ूरी के बाद पावती दिखाकर वहीं से प्रमाण पत्र का प्रिंट मिलता है। CSC का अपना सेवा शुल्क हो सकता है।",
    },
    {
      id: "jaanch",
      title: "जांच कैसे होती है",
      steps: [
        "डीलिंग असिस्टेंट कागज़ जांचता है; छोटी कमी पर आवेदन सुधार के लिए लौटता है।",
        "शाखा अधिकारी सत्यापन करते हैं और ज़रूरत हो तो आपको खुद आने के लिए बुला सकते हैं।",
        "मंज़ूरी देने वाले अधिकारी की मंज़ूरी के बाद शाखा अधिकारी डिजिटल हस्ताक्षर से प्रमाण पत्र जारी करते हैं। हर चरण पर SMS आता है।",
      ],
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील",
      intro: "समय सीमा अरुणाचल प्रदेश लोक सेवा अधिकार अधिनियम, 2016 और नियम, 2017 के तहत ज़िले के नागरिक चार्टर में लिखी होती है, और ज़िलों में अलग है। दो ज़िलों के चार्टर के उदाहरण (अपील का रास्ता दिबांग वैली के चार्टर से):",
      table: {
        head: ["स्तर", "अधिकारी", "समय"],
        rows: [
          ["प्रमाण पत्र देना (दिबांग वैली)", "उपायुक्त (DC)", "15 दिन"],
          ["प्रमाण पत्र देना (पापुम पारे)", "EAC / सर्किल ऑफिसर", "3 दिन"],
          ["पहली अपील", "संबंधित विभाग के सचिव / आयुक्त", "15 दिन"],
          ["दूसरी अपील", "मुख्य सचिव", "15 दिन"],
        ],
      },
      html: "<p><strong>फीस:</strong> इस सेवा की फीस की रकम किसी आधिकारिक पेज पर हमें नहीं मिली। आवेदन के समय पोर्टल पर दिखी रकम ही मान्य है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track Application</strong> में संदर्भ संख्या डालें, या लॉगिन करके देखें।",
        "<strong>डाउनलोड:</strong> डिजिटल हस्ताक्षर वाला प्रमाण पत्र आपके ServicePlus अकाउंट में आता है; वहीं से प्रिंट करें।",
        "<strong>असली है या नहीं:</strong> होमपेज के <strong>Verify Certificate</strong> में प्रमाण पत्र के नीचे छपा Application Reference Number और Token डालें।",
      ],
      html: '<p>सामान्य जानकारी: <a href="/digilocker/income-certificate.html">DigiLocker में आय प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता",
      intro: "अरुणाचल के आय प्रमाण पत्र की वैधता अवधि पोर्टल या चार्टर पर नहीं लिखी है। आय हर साल बदल सकती है, इसलिए कई छात्रवृत्ति और योजनाएं हाल में बना प्रमाण पत्र मांगती हैं। फॉर्म में लिखी शर्त देखकर ज़रूरत हो तो नया बनवाएं।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["अपनी स्थिति से अलग आय-प्रमाण लगाया", "सरकारी: DDO का वेतन विवरण; गांव: BDO; खेती आदि: DAO/DHO/DVO; गैर-APST: ITR/Form 16"],
          ["वेतन विवरण 12 महीने का नहीं", "DDO से पूरे 12 महीने का विवरण लें"],
          ["गलत ज़िले में आवेदन", "जिस ज़िले में रहते हैं उसी DC कार्यालय को चुनें"],
          ["तय समय में फैसला नहीं", "विभाग के सचिव/आयुक्त के पास पहली अपील करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      list: [
        "<strong>ServicePlus हेल्पलाइन:</strong> 155250, ईमेल serviceplus-arn@nic.in।",
        "अपने ज़िले के DC कार्यालय के <strong>जन सुविधा काउंटर</strong> पर भी पूछ सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://eservice.arunachal.gov.in/", title: "Arunachal eServices / ServicePlus (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://eservice.arunachal.gov.in/resources/homePage/12/pdf/PreRequisite_Income_Certificate.pdf", title: "आय प्रमाण पत्र के ज़रूरी कागज़ (PDF)" },
    { href: "https://eservice.arunachal.gov.in/resources/homePage/12/pdf/SOP_eServices_Arunachal.pdf", title: "ServicePlus सेवाओं का SOP (PDF)" },
    { href: "https://dibangvalley.nic.in/citizen-charter/", title: "दिबांग वैली ज़िला: नागरिक चार्टर (समय सीमा और अपील)" },
    { href: "https://papumpare.nic.in/citizen-charter/", title: "पापुम पारे ज़िला: नागरिक चार्टर" },
  ],
  faq: [
    { q: "अरुणाचल प्रदेश में आय प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "eservice.arunachal.gov.in पर रजिस्टर करके लॉगिन करें, \"Issuance of Income Certificate\" चुनें, फॉर्म भरें, अपनी स्थिति वाला आय-प्रमाण (DDO वेतन विवरण, BDO/DAO आदि का प्रमाण पत्र या ITR/Form 16) अपलोड करें और शुल्क भरकर पावती लें।" },
    { q: "गांव में रहने वाले किसान को कौन सा आय-प्रमाण लगाना होगा?", a: "पोर्टल की सूची के अनुसार APST गैर-सरकारी लोगों के लिए BDO का प्रमाण पत्र (ग्रामीण क्षेत्र) या खेती, बागवानी, पशुपालन से आय पर DAO, DHO, DVO आदि का प्रमाण पत्र।" },
    { q: "आय प्रमाण पत्र कितने दिन में बनता है?", a: "समय सीमा ज़िले के नागरिक चार्टर में तय है: दिबांग वैली में DC के लिए 15 दिन, पापुम पारे में EAC/सर्किल ऑफिसर के लिए 3 दिन। देर हो तो विभाग के सचिव/आयुक्त और फिर मुख्य सचिव के पास अपील हो सकती है।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "eservice.arunachal.gov.in के Verify Certificate में प्रमाण पत्र के नीचे छपा Application Reference Number और Token डालें।" },
  ],
  related: [
    { href: "/states/arunachal-pradesh-caste-certificate.html", emoji: "📜", title: "अरुणाचल ST प्रमाण पत्र", text: "जनजाति प्रमाण पत्र" },
    { href: "/states/arunachal-pradesh-domicile-certificate.html", emoji: "🏠", title: "अरुणाचल PRC / निवास प्रमाण पत्र", text: "स्थायी निवास" },
    { href: "/affidavit/income.html", emoji: "✍️", title: "आय का एफिडेविट / स्व-घोषणा", text: "कब काम आता है, नमूना" },
    { href: "/digilocker/income-certificate.html", emoji: "📲", title: "DigiLocker में आय प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्य" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में आय प्रमाण पत्र",
  aside: [
    { href: "https://eservice.arunachal.gov.in/", label: "📝 ServicePlus पर आवेदन करें" },
    { href: "/affidavit/income.html", label: "✍️ आय का एफिडेविट" },
  ],
};
