import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - jharsewa.jharkhand.gov.in (JharSewa / e-Nagrik Seva on ServicePlus) home
//   page: "Issue of Caste Certificate" under certificate services; apply
//   online (with or without registration as per service), at a kiosk/Pragya
//   Kendra, or in person at the office; "Track Application Status Report";
//   "Verify your Certificate" (application reference number + token);
//   caste lists SC/ST/OBC/BC-I/BC-II as PDFs; State Designated Agency JAP-IT,
//   Dhurwa, Ranchi, phone 0651-2401581 / 2401040,
//   support.edistrict@jharkhandmail.gov.in.
// - ServiceWiseRequirements.pdf (JharSewa "Prerequisite for Applying"): modes
//   (online registration, CSC/Pragya Kendra, Jan Suvidha Kendra, approved
//   kiosk); caste services of the Department of Personnel, Administrative
//   Reforms & Rajbhasha: ST, SC, EBC-I & BC-II, EBC-I & BC-II (Non Creamy
//   Layer), OBC, OBC/ST/SC migrants, and "Central by SDO and DC" services that
//   need the reference number of the Circle Officer's certificate; documents
//   per service (identity, proof of citizenship, ordinary residence, permanent
//   residence, caste, self-declaration, promotion order for NCL, Tatkal
//   enclosure).
// - ServicePlus national service list (viewAllServiceList.html on the same
//   server): Jharkhand caste services marked "Statutory" with 30 days, 45 days
//   where a local inspection report is required, "Not Defined" for the SDO/DC
//   central-format services; services through school (Circle Officer).
// Left out (not confirmable on an official page we could open): a fee, the
// appeal officers, the validity rule for caste/NCL certificates.
export const jharkhandCasteCertificate: DocGuide = {
  state: { slug: "jharkhand", hi: "झारखंड" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Jharkhand Caste Certificate 2026: Apply & Status",
  description: "झारखंड जाति प्रमाण पत्र (Caste Certificate) 2026: JharSewa पर ऑनलाइन या प्रज्ञा केंद्र से आवेदन। SC/ST/OBC/BC की अलग सेवाएं, अंचल अधिकारी, 30/45 दिन, कागज़ और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "झारखंड जाति प्रमाण पत्र 2026: JharSewa पर आवेदन, सही सेवा चुनना, कागज़ और स्टेटस",
  lead: "झारखंड में जाति प्रमाण पत्र <strong>JharSewa पोर्टल (jharsewa.jharkhand.gov.in)</strong> पर ऑनलाइन, या प्रज्ञा केंद्र / जन सुविधा केंद्र से बनता है। राज्य के काम का प्रमाण पत्र <strong>अंचल अधिकारी (CO)</strong> देते हैं; केंद्र सरकार वाले प्रारूप के लिए उसी प्रमाण पत्र की संदर्भ संख्या से <strong>SDO/उपायुक्त (DC)</strong> के स्तर पर अलग आवेदन होता है। सेवा-सूची में समय सीमा 30 दिन है, और जहां स्थानीय जांच रिपोर्ट चाहिए वहां 45 दिन।",
  facts: [
    ["पोर्टल", '<a href="https://jharsewa.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">jharsewa.jharkhand.gov.in</a>'],
    ["जारी करते हैं", "अंचल अधिकारी (CO); केंद्रीय प्रारूप: SDO/DC"],
    ["समय सीमा", "30 दिन (स्थानीय जांच हो तो 45 दिन)"],
    ["आवेदन", "ऑनलाइन, प्रज्ञा केंद्र, जन सुविधा केंद्र"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> JharSewa पर जाति प्रमाण पत्र की <strong>कई अलग सेवाएं</strong> हैं: SC, ST, EBC-I/BC-II, EBC-I/BC-II (नॉन-क्रीमी लेयर), OBC, दूसरे राज्य से आए लोगों (Migrants) के लिए, और केंद्र के प्रारूप (\"Central by SDO and DC\") के लिए। गलत सेवा में आवेदन करेंगे तो दोबारा करना पड़ सकता है।",
  sections: [
    {
      id: "kya-hai",
      title: "कौन सी सेवा आपके काम की है",
      table: {
        head: ["सेवा (JharSewa पर नाम)", "कब चुनें", "कौन देता है"],
        rows: [
          ["<strong>Caste Certificate for Scheduled Caste / Scheduled Tribe</strong>", "राज्य की योजना, दाखिला, नौकरी में SC/ST", "अंचल अधिकारी"],
          ["<strong>Caste Certificate for EBC-I and BC-II</strong>", "राज्य की पिछड़ा वर्ग (अत्यंत पिछड़ा-I, पिछड़ा-II) सूची", "अंचल अधिकारी"],
          ["<strong>EBC-I and BC-II (Non Creamy Layer)</strong>", "राज्य की नौकरी/दाखिले में BC आरक्षण", "अंचल अधिकारी"],
          ["<strong>Caste Certificate for OBC</strong>", "OBC प्रमाण पत्र", "अंचल अधिकारी"],
          ["<strong>... Central by SDO and DC / OBC by SDO and DC</strong>", "केंद्र सरकार की नौकरी/परीक्षा के प्रारूप में", "अनुमंडल पदाधिकारी (SDO) / उपायुक्त (DC); अंचल वाले प्रमाण पत्र की संदर्भ संख्या लगती है"],
          ["<strong>... for ST and SC Migrants / OBC Migrants</strong>", "जो दूसरे राज्य से आकर झारखंड में बसे हैं", "अंचल अधिकारी (केंद्रीय प्रारूप: SDO/DC)"],
        ],
      },
      callout: { kind: "info", html: "शहरी निकाय (ULB) या पंचायत (RLB) से बाहर के इलाकों के लिए भी अलग सेवाएं हैं, और स्कूल के ज़रिए SC/ST/BC प्रमाण पत्र (अंचल अधिकारी) की सेवा भी सूची में है। पोर्टल पर अपना इलाका सही चुनें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (JharSewa की सूची)",
      intro: "पोर्टल की \"Prerequisite for Applying\" सूची के अनुसार SC/ST/BC/OBC प्रमाण पत्र में ये कागज़ लगते हैं:",
      list: [
        "<strong>पहचान का प्रमाण</strong> (Identity Proof)।",
        "<strong>भारत की नागरिकता का प्रमाण</strong>।",
        "<strong>साधारण निवास (अभी कहां रहते हैं) का प्रमाण</strong>।",
        "<strong>स्थायी निवासी होने का प्रमाण</strong>।",
        "<strong>जाति का प्रमाण</strong>: जैसे परिवार में पहले बना जाति प्रमाण पत्र या ज़मीन के पुराने कागज़ जिनमें जाति लिखी हो।",
        "<strong>स्व-घोषणा पत्र</strong> (नाबालिग के लिए माता-पिता की ओर से)।",
        "<strong>नॉन-क्रीमी लेयर / OBC:</strong> माता-पिता की नौकरी हो और उम्र 40 साल से ज़्यादा हो तो नियोक्ता का <strong>प्रमोशन ऑर्डर</strong>।",
        "<strong>तत्काल</strong> में आवेदन कर रहे हों तो उसका संलग्नक।",
      ],
      callout: { kind: "ok", html: "<strong>केंद्रीय प्रारूप (SDO/DC) के लिए:</strong> सिर्फ <strong>अंचल अधिकारी के प्रमाण पत्र की संदर्भ संख्या</strong> और किस काम के लिए चाहिए उसका कागज़ (जैसे भर्ती का विज्ञापन) लगता है। इसलिए पहले अंचल स्तर का प्रमाण पत्र बनवाएं।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://jharsewa.jharkhand.gov.in/" target="_blank" rel="noopener nofollow">jharsewa.jharkhand.gov.in</a> खोलें और <strong>Register Yourself</strong> से अकाउंट बनाएं (या लॉगिन करें)।',
        "<strong>Services to Individuals</strong> या सेवा सूची में अपनी श्रेणी वाली जाति प्रमाण पत्र सेवा चुनें (ऊपर की तालिका देखें)।",
        "फॉर्म भरें और मांगे गए कागज़ (स्कैन) अपलोड करें।",
        "आवेदन जमा करें और <strong>पावती (Acknowledgement)</strong> डाउनलोड करें; इसमें आवेदन संदर्भ संख्या होती है।",
        "स्वीकृत होने पर प्रमाण पत्र पोर्टल से डाउनलोड करें। केंद्र का प्रारूप चाहिए तो उसी संदर्भ संख्या से \"Central by SDO and DC\" वाली सेवा में आवेदन करें।",
      ],
    },
    {
      id: "offline",
      title: "प्रज्ञा केंद्र / जन सुविधा केंद्र से",
      intro: "पोर्टल के अनुसार यह सेवा <strong>प्रज्ञा केंद्र (CSC)</strong>, <strong>जन सुविधा केंद्र</strong> और सरकार से मंज़ूर निजी कियोस्क से भी मिलती है। सारे कागज़ों की मूल प्रति और कॉपी ले जाएं, पावती ज़रूर लें। केंद्र का सेवा शुल्क पहले पूछ लें और रसीद लें।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और शिकायत",
      table: {
        head: ["सेवा", "समय सीमा (सेवा-सूची)"],
        rows: [
          ["SC / ST / EBC-I, BC-II / OBC / नॉन-क्रीमी लेयर (अंचल अधिकारी)", "30 दिन"],
          ["जहां स्थानीय जांच रिपोर्ट (Local Inspection Report) चाहिए", "45 दिन"],
          ["केंद्रीय प्रारूप (SDO/DC), Migrants", "सूची में तय नहीं (Not Defined)"],
        ],
      },
      html: "<p><strong>फीस:</strong> किसी सरकारी पेज पर हमें इसका सरकारी शुल्क नहीं मिला। प्रज्ञा केंद्र अपना सेवा शुल्क लेते हैं; रसीद मांगें।</p><p>ये सेवाएं सेवा-सूची में \"Statutory\" (कानूनी समय सीमा वाली) दर्ज हैं। समय पर प्रमाण पत्र न मिले तो अंचल कार्यालय से लिखित कारण मांगें और अनुमंडल पदाधिकारी (SDO) के यहां शिकायत/अपील करें।</p>",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track Application Status</strong> में आवेदन संदर्भ संख्या डालें, या लॉगिन करके View Status of Application देखें।",
        "<strong>डाउनलोड:</strong> स्वीकृत होने के बाद लॉगिन करके अपने आवेदन की स्थिति (View Status of Application) से प्रमाण पत्र खोलें; प्रज्ञा केंद्र से आवेदन किया हो तो वहीं से भी मिलता है।",
        "<strong>सत्यापन:</strong> होमपेज पर <strong>Verify your Certificate</strong> में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा <strong>Token</strong> डालें।",
      ],
      html: '<p>DigiLocker में देखने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत सेवा चुनी (जैसे राज्य की जगह केंद्र वाली)", "पहले अंचल अधिकारी वाली सेवा में आवेदन करें; केंद्र का प्रारूप बाद में SDO/DC सेवा से"],
          ["जाति का कोई पुराना सबूत नहीं", "परिवार में किसी का पुराना प्रमाण पत्र या ज़मीन के पुराने कागज़ लगाएं; स्थानीय जांच वाली सेवा में 45 दिन लग सकते हैं"],
          ["नॉन-क्रीमी लेयर में माता-पिता की नौकरी का कागज़ नहीं", "40 साल से ऊपर वाले माता-पिता का प्रमोशन ऑर्डर लगाएं"],
          ["दूसरे राज्य से आए हैं", "Migrants वाली सेवा चुनें और मूल राज्य का कागज़ लगाएं"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पोर्टल पर दी गई राज्य नामित एजेंसी (JAP-IT, धुर्वा, रांची) का फोन <strong>0651-2401581 / 2401040</strong> और ईमेल support.edistrict@jharkhandmail.gov.in है। आवेदन से जुड़े सवाल के लिए पहले अपने अंचल कार्यालय या प्रज्ञा केंद्र से पूछें।",
    },
  ],
  official: [
    { href: "https://jharsewa.jharkhand.gov.in/", title: "JharSewa (आवेदन, स्टेटस, सत्यापन)" },
    { href: "https://jharsewa.jharkhand.gov.in/resources/pdf/20/ServiceWiseRequirements.pdf", title: "सेवा के अनुसार ज़रूरी कागज़ (PDF)" },
    { href: "https://jharsewa.jharkhand.gov.in/resources/pdf/20/ServiceWiseRequirements_Hindi.pdf", title: "सेवा के अनुसार ज़रूरी कागज़, हिंदी (PDF)" },
  ],
  faq: [
    { q: "झारखंड में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "jharsewa.jharkhand.gov.in पर रजिस्टर करें, अपनी श्रेणी (SC, ST, EBC-I/BC-II, OBC आदि) वाली जाति प्रमाण पत्र सेवा चुनें, फॉर्म भरें, कागज़ अटैच करें और जमा करके पावती रखें।" },
    { q: "झारखंड जाति प्रमाण पत्र कितने दिन में बनता है?", a: "JharSewa की सेवा-सूची में अंचल अधिकारी के स्तर पर 30 दिन तय हैं। जहां स्थानीय जांच रिपोर्ट चाहिए, वहां 45 दिन।" },
    { q: "केंद्र सरकार की नौकरी के लिए जाति प्रमाण पत्र कैसे बनेगा?", a: "पहले अंचल अधिकारी से प्रमाण पत्र बनवाएं। फिर JharSewa पर \"Central by SDO and DC\" (OBC के लिए \"OBC by SDO and DC\") सेवा में उस प्रमाण पत्र की संदर्भ संख्या देकर आवेदन करें।" },
    { q: "नॉन-क्रीमी लेयर प्रमाण पत्र के लिए क्या अलग लगता है?", a: "पहचान, नागरिकता, निवास और जाति के कागज़ों के साथ, अगर माता-पिता नौकरी में हैं और उम्र 40 साल से ज़्यादा है तो नियोक्ता का प्रमोशन ऑर्डर।" },
    { q: "जाति प्रमाण पत्र असली है या नहीं, कैसे जांचें?", a: "JharSewa होमपेज पर Verify your Certificate में आवेदन संदर्भ संख्या और प्रमाण पत्र पर छपा टोकन डालें।" },
  ],
  related: [
    { href: "/states/jharkhand-income-certificate.html", emoji: "💰", title: "झारखंड आय प्रमाण पत्र", text: "JharSewa पर आवेदन" },
    { href: "/states/jharkhand-domicile-certificate.html", emoji: "🏠", title: "झारखंड स्थानीय निवासी प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/self-declaration.html", emoji: "✍️", title: "स्व-घोषणा पत्र", text: "नमूना और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://jharsewa.jharkhand.gov.in/", label: "📝 JharSewa पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
