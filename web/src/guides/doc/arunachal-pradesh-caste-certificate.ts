import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - eservice.arunachal.gov.in (Arunachal eServices / ServicePlus, Department of
//   IT & Communication, run by NIC): register, apply online, upload scanned
//   documents, track application, "Verify Certificate" with application
//   reference number + token printed at the bottom of the certificate, SMS on
//   decision; helpline 155250, serviceplus-arn@nic.in. Services page: District
//   Administration > "Issuance of Schedule Tribe Certificate" (with link to the
//   APST Gazette Notification 2022), "Issuance of Permanent Residence
//   Certficate (PRC)", TRC, income, dependent certificates; document lists.
// - PreRequisite_STC.pdf and SOP_eServices_Arunachal.pdf (SOP_ServicePlus_1.0)
//   on the same portal: ST certificate documents (mandatory: verification
//   document from GB/HGB and Admin Officer; attested Land Allotment Passbook
//   (urban) or Land Possession Certificate (rural) of father/guardian for the
//   present address; passport photo; optional: birth certificate, father's ST
//   certificate, applicant's PRC); channels: online or CSC / Jan Suvidha
//   counter of the DC office; payment cash/online; acknowledgement with
//   reference number; dealing assistant > branch officer > approving officer
//   who issues the PRC/TRC/ST certificate with digital signature; possible
//   in-person verification; print from own login or at CSC.
// - how_to_apply.pdf (portal): apply at the respective DC office, pay by debit
//   card/net banking, digitally signed certificate delivered in the ServicePlus
//   account.
// - dibangvalley.nic.in Citizen Charter (Arunachal Pradesh Right to Public
//   Service Act, 2016 and Rules, 2017): ST certificate, designated officer DC,
//   15 days; 1st appeal Secretary/Commissioner of the Department 15 days; 2nd
//   appeal Chief Secretary 15 days. Same for PRC.
// - papumpare.nic.in Citizen Charter (same Act): PRC, income and ST certificate,
//   designated officer EAC/CO (J/S), 3 days. Timelines differ by district.
// Left out (not confirmable on an official page we could open): the fee
// amount, a validity statement, details of the 2022 APST gazette (scanned).
export const arunachalPradeshCasteCertificate: DocGuide = {
  state: { slug: "arunachal-pradesh", hi: "अरुणाचल प्रदेश" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Arunachal Pradesh Caste Certificate 2026",
  description: "अरुणाचल प्रदेश ST (जनजाति) प्रमाण पत्र 2026: eservice.arunachal.gov.in (ServicePlus) पर ऑनलाइन आवेदन, ज़रूरी कागज़, समय सीमा, अपील और सत्यापन।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "अरुणाचल प्रदेश जाति (ST) प्रमाण पत्र 2026: ServicePlus पर आवेदन, कागज़, समय सीमा और सत्यापन",
  lead: "अरुणाचल प्रदेश में जाति प्रमाण पत्र के नाम पर मुख्य रूप से <strong>अनुसूचित जनजाति (ST) प्रमाण पत्र</strong> बनता है, जो राज्य की मान्य जनजातियों (APST) के लोगों के लिए है। आवेदन <a href=\"https://eservice.arunachal.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">eservice.arunachal.gov.in</a> (ServicePlus) पर या CSC / DC कार्यालय के जन सुविधा काउंटर पर होता है और प्रमाण पत्र उपायुक्त (Deputy Commissioner) कार्यालय से डिजिटल हस्ताक्षर के साथ मिलता है। समय सीमा ज़िले के नागरिक चार्टर में तय है (जैसे पापुम पारे में 3 दिन, दिबांग वैली में 15 दिन)। सबसे ज़रूरी कागज़ गांव बूढ़ा (GB/HGB) और प्रशासनिक अधिकारी का सत्यापन है।",
  facts: [
    ["पोर्टल", '<a href="https://eservice.arunachal.gov.in/" target="_blank" rel="noopener nofollow">eservice.arunachal.gov.in</a>'],
    ["जारी करते हैं", "उपायुक्त (DC) कार्यालय"],
    ["समय सीमा", "ज़िले के चार्टर अनुसार: 3 से 15 दिन"],
    ["हेल्पलाइन", "155250"],
  ],
  notice: "<strong>ST प्रमाण पत्र और PRC अलग हैं:</strong> स्थायी निवास प्रमाण पत्र (PRC) राज्य का निवासी होने का सबूत है, जनजाति का नहीं। पोर्टल पर दोनों की अलग सेवा है; ST प्रमाण पत्र के लिए \"Issuance of Schedule Tribe Certificate\" ही चुनें।",
  sections: [
    {
      id: "kaun-sa",
      title: "अरुणाचल में कौन सा प्रमाण पत्र किस काम का",
      table: {
        head: ["ServicePlus सेवा", "क्या साबित करता है"],
        rows: [
          ["<strong>Issuance of Schedule Tribe Certificate</strong>", "आप अरुणाचल प्रदेश की मान्य अनुसूचित जनजाति (APST) से हैं। आरक्षण, छात्रवृत्ति और जनजाति योजनाओं में लगता है।"],
          ["<strong>Issuance of Permanent Residence Certficate (PRC)</strong>", "आप अरुणाचल के स्थायी निवासी हैं। इसकी जानकारी <a href=\"/states/arunachal-pradesh-domicile-certificate.html\">अरुणाचल PRC / निवास प्रमाण पत्र गाइड</a> में है।"],
          ["<strong>Issuance of Temporary Residence Certficate (TRC)</strong>", "अस्थायी निवास, जैसे नौकरी या व्यापार के लिए रह रहे लोग।"],
          ["<strong>Issuance of Income Certificate</strong>", "परिवार की आय। देखें <a href=\"/states/arunachal-pradesh-income-certificate.html\">अरुणाचल आय प्रमाण पत्र</a>।"],
        ],
      },
      callout: { kind: "info", html: "कौन सी जनजातियां APST में गिनी जाती हैं, इसके लिए पोर्टल की सेवा-सूची में <strong>APST Gazette Notification</strong> का लिंक दिया गया है। जनजाति का दर्जा राज्य के हिसाब से तय होता है; दूसरे राज्य से आए SC/ST/OBC परिवारों को आम तौर पर अपने मूल राज्य से प्रमाण पत्र बनवाना होता है, इसलिए पहले अपने DC कार्यालय से पूछ लें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (पोर्टल की सूची)",
      intro: "मूल कागज़ों की स्कैन कॉपी अपलोड करनी होती है। पोर्टल और SOP के अनुसार:",
      list: [
        "<strong>ज़रूरी:</strong> गांव बूढ़ा / हेड गांव बूढ़ा (GB/HGB) और प्रशासनिक अधिकारी (Admin Officer) का <strong>सत्यापन पत्र</strong>।",
        "<strong>ज़रूरी:</strong> पिता/अभिभावक की ज़मीन का कागज़, मौजूदा पते वाला: शहर में <strong>Land Allotment Passbook</strong> की सत्यापित कॉपी, या गांव में <strong>Land Possession Certificate (LPC)</strong> की सत्यापित कॉपी।",
        "<strong>ज़रूरी:</strong> पासपोर्ट साइज़ रंगीन फोटो।",
        "<strong>वैकल्पिक:</strong> जन्म प्रमाण पत्र, <strong>पिता का ST प्रमाण पत्र</strong>, आवेदक का स्थायी निवास प्रमाण पत्र (PRC), सभी की सत्यापित कॉपी।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> पिता का ST प्रमाण पत्र वैकल्पिक है, पर हो तो ज़रूर लगाएं; जांच आसान होती है। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://eservice.arunachal.gov.in/" target="_blank" rel="noopener nofollow">eservice.arunachal.gov.in</a> खोलें। पहली बार हैं तो <strong>Register Yourself</strong> / Citizen Registration से अकाउंट बनाएं (पता, मोबाइल, ईमेल; ईमेल पर एक्टिवेशन लिंक आता है)।',
        "लॉगिन करके <strong>Issuance of Schedule Tribe Certificate</strong> सेवा और अपना ज़िला (DC कार्यालय) चुनें।",
        "ऑनलाइन फॉर्म भरें और ऊपर लिखे कागज़ों की स्कैन कॉपी अपलोड करें।",
        "जहां शुल्क लगता है, वहां डेबिट कार्ड या नेट बैंकिंग से भुगतान करें और Submit करें।",
        "<strong>पावती (Acknowledgement)</strong> डाउनलोड करें; इसमें आवेदन संदर्भ संख्या होती है। जमा होने की सूचना SMS से भी आती है।",
      ],
    },
    {
      id: "offline",
      title: "CSC या DC कार्यालय के जन सुविधा काउंटर से",
      intro: "SOP के अनुसार भरा हुआ फॉर्म और कागज़ <strong>कॉमन सर्विस सेंटर (CSC)</strong> या जहां उपलब्ध हो वहां <strong>DC कार्यालय के जन सुविधा काउंटर</strong> पर भी दे सकते हैं। ऑपरेटर कागज़ स्कैन करके ऑनलाइन चढ़ाता है, शुल्क नकद या ऑनलाइन लेता है और पावती की प्रति देता है। CSC का अपना सेवा शुल्क हो सकता है, पहले पूछ लें।",
    },
    {
      id: "jaanch",
      title: "जांच कैसे होती है",
      steps: [
        "DC कार्यालय का डीलिंग असिस्टेंट आवेदन और कागज़ जांचता है। कमी छोटी हो तो आवेदन सुधार के लिए लौटाया जाता है, गलत हो तो खारिज।",
        "शाखा अधिकारी (Branch officer) सत्यापन करते हैं और ज़रूरत हो तो आपको <strong>खुद आकर सत्यापन</strong> के लिए बुला सकते हैं।",
        "मंज़ूरी देने वाले अधिकारी डिजिटल हस्ताक्षर से प्रमाण पत्र जारी करते हैं। हर चरण पर SMS आता है।",
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
      html: "<p><strong>फीस:</strong> पोर्टल पर भुगतान का विकल्प है, पर इस सेवा की फीस की रकम किसी आधिकारिक पेज पर हमें नहीं मिली। आवेदन करते समय स्क्रीन पर दिखी रकम ही मान्य है।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track Application</strong> में संदर्भ संख्या डालें, या लॉगिन करके Track Application Status देखें।",
        "<strong>डाउनलोड:</strong> डिजिटल हस्ताक्षर वाला प्रमाण पत्र आपके ServicePlus अकाउंट में आता है; वहीं से प्रिंट करें। CSC से आवेदन किया हो तो पावती दिखाकर वहीं से प्रिंट मिलता है।",
        "<strong>असली है या नहीं:</strong> होमपेज के <strong>Verify Certificate</strong> में प्रमाण पत्र के नीचे छपा Application Reference Number और Token डालें; सही होने पर ही प्रमाण पत्र खुलता है।",
      ],
      html: '<p>प्रमाण पत्र फोन में रखने के बारे में सामान्य जानकारी: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "validity",
      title: "वैधता",
      intro: "अरुणाचल के ST प्रमाण पत्र की वैधता अवधि पोर्टल या चार्टर पर नहीं लिखी है। आम तौर पर जनजाति प्रमाण पत्र बार-बार नहीं बनवाना पड़ता, पर नौकरी या दाखिले का विज्ञापन किसी खास तारीख के बाद का प्रमाण पत्र मांगे तो उसी के हिसाब से नया बनवाएं। पता बदलने पर PRC के मामले में पुराना PRC जमा करना होता है।",
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["GB/HGB और Admin Officer का सत्यापन नहीं लगाया", "पहले गांव बूढ़ा और प्रशासनिक अधिकारी से सत्यापन पत्र लें"],
          ["ज़मीन का कागज़ मौजूदा पते से मेल नहीं खाता", "पिता/अभिभावक का मौजूदा पते वाला LPC या Land Allotment Passbook लगाएं"],
          ["ST की जगह PRC सेवा में आवेदन", "\"Issuance of Schedule Tribe Certificate\" में नया आवेदन करें"],
          ["गलत ज़िले में आवेदन", "जिस ज़िले में परिवार रहता है उसी DC कार्यालय को चुनें"],
          ["तय समय में फैसला नहीं", "विभाग के सचिव/आयुक्त के पास पहली अपील करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      list: [
        "<strong>ServicePlus हेल्पलाइन:</strong> 155250, ईमेल serviceplus-arn@nic.in (सूचना प्रौद्योगिकी विभाग, सिविल सचिवालय, ईटानगर)।",
        "अपने ज़िले के <strong>DC कार्यालय के जन सुविधा काउंटर</strong> पर भी पूछ सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://eservice.arunachal.gov.in/", title: "Arunachal eServices / ServicePlus (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://eservice.arunachal.gov.in/resources/homePage/12/pdf/PreRequisite_STC.pdf", title: "ST प्रमाण पत्र के ज़रूरी कागज़ (PDF)" },
    { href: "https://eservice.arunachal.gov.in/resources/homePage/12/pdf/SOP_eServices_Arunachal.pdf", title: "ServicePlus सेवाओं का SOP (PDF)" },
    { href: "https://dibangvalley.nic.in/citizen-charter/", title: "दिबांग वैली ज़िला: नागरिक चार्टर (समय सीमा और अपील)" },
    { href: "https://papumpare.nic.in/citizen-charter/", title: "पापुम पारे ज़िला: नागरिक चार्टर" },
  ],
  faq: [
    { q: "अरुणाचल प्रदेश में ST प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "eservice.arunachal.gov.in पर रजिस्टर करके लॉगिन करें, \"Issuance of Schedule Tribe Certificate\" चुनें, फॉर्म भरें, GB/HGB और Admin Officer का सत्यापन, पिता का LPC या Land Allotment Passbook और फोटो अपलोड करें, शुल्क भरकर पावती लें।" },
    { q: "अरुणाचल में ST प्रमाण पत्र कौन जारी करता है?", a: "ज़िले का उपायुक्त (Deputy Commissioner) कार्यालय। प्रमाण पत्र डिजिटल हस्ताक्षर के साथ ServicePlus पर जारी होता है।" },
    { q: "ST प्रमाण पत्र कितने दिन में बनता है?", a: "समय सीमा ज़िले के नागरिक चार्टर में तय है: दिबांग वैली में DC के लिए 15 दिन, पापुम पारे में EAC/सर्किल ऑफिसर के लिए 3 दिन। देर हो तो विभाग के सचिव/आयुक्त और फिर मुख्य सचिव के पास अपील हो सकती है।" },
    { q: "क्या PRC से ST प्रमाण पत्र का काम चल जाएगा?", a: "नहीं। PRC स्थायी निवास का प्रमाण है और ST प्रमाण पत्र जनजाति का। दोनों के लिए पोर्टल पर अलग सेवाएं हैं।" },
    { q: "प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "eservice.arunachal.gov.in के Verify Certificate में प्रमाण पत्र के नीचे छपा Application Reference Number और Token डालें।" },
  ],
  related: [
    { href: "/states/arunachal-pradesh-income-certificate.html", emoji: "💰", title: "अरुणाचल आय प्रमाण पत्र", text: "ServicePlus पर आवेदन" },
    { href: "/states/arunachal-pradesh-domicile-certificate.html", emoji: "🏠", title: "अरुणाचल PRC / निवास प्रमाण पत्र", text: "स्थायी निवास" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://eservice.arunachal.gov.in/", label: "📝 ServicePlus पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
