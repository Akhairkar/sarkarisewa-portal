import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - edistrict.kerala.gov.in home page: services through Akshaya / Common
//   Service Centres and the online portal; Aadhaar-linked user creation;
//   "Track Application", "Certificate verification" (QR verify); contact
//   edistrict.ksitm@kerala.gov.in, 0471 2525444 (KSITM).
// - edistrict.kerala.gov.in FAQ (generalService.htm?event=faq): Community
//   Certificates are issued for SC/ST and Caste Certificates for OBC; validity
//   table (caste 3 years, community 3 years, non-creamy layer 1 year, income 1
//   year); supporting documents (caste: affidavit, any relevant document
//   certifying caste, ration card, school certificate; community: also caste
//   certificate, conversion certificate, gazette notification; NCL: affidavit,
//   basic tax receipt, ITR, ration card, salary certificate of parents, school
//   certificate, service certificate); time limits (caste 3 working days,
//   community 5, NCL 5); ration card verified from PDS database; one-time
//   registration, apply for others; upload limit 100 KB per page, 10 pages;
//   failed payment refunded in 7-10 working days.
// - Search extract of clr.kerala.gov.in/eng/index.php/services/certificates
//   (Land Revenue Department): caste certificate issued by the Village Officer
//   after scrutiny and local enquiry; SC/ST certificates issued by the Tahsildar
//   on the Village Officer's report; Tahsildar issues certificates for central
//   government organisations; non-creamy layer by Village Officer for state
//   purposes and Tahsildar for central purposes.
// - LiveLaw report on Kerala High Court (2021): Tahsildar issues community
//   certificates under the Kerala (SC/ST) Regulation of Issue of Community
//   Certificates Act, 1996; only the Scrutiny Committee can cancel them.
// Left out (not confirmable on an official page we could open): the fee
// amount, the appeal officer, a revenue helpline number.
export const keralaCasteCertificate: DocGuide = {
  state: { slug: "kerala", hi: "केरल" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Kerala Caste Certificate 2026: Apply & Status",
  description: "केरल जाति प्रमाण पत्र (Caste / Community Certificate) online apply 2026 at e-District Kerala या Akshaya केंद्र। SC/ST vs OBC, दस्तावेज़, समय सीमा, 3 साल वैधता और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "केरल जाति प्रमाण पत्र 2026: e-District पर आवेदन, Caste और Community सर्टिफिकेट का फर्क, कागज़ और वैधता",
  lead: "केरल में OBC के लिए <strong>Caste Certificate</strong> और SC/ST के लिए <strong>Community Certificate</strong> अलग-अलग सेवाएं हैं। आवेदन edistrict.kerala.gov.in पर या किसी Akshaya केंद्र से होता है; Caste Certificate विलेज ऑफिसर और SC/ST का Community Certificate तहसीलदार देते हैं। e-District के अनुसार दोनों प्रमाण पत्र <strong>3 साल</strong> तक मान्य हैं।",
  facts: [
    ["पोर्टल", '<a href="https://edistrict.kerala.gov.in/" target="_blank" rel="noopener nofollow">edistrict.kerala.gov.in</a>'],
    ["जारी करते हैं", "OBC: विलेज ऑफिसर; SC/ST: तहसीलदार"],
    ["समय सीमा", "Caste 3, Community 5 कार्य दिवस"],
    ["वैधता", "3 साल"],
  ],
  notice: "<strong>सही सेवा चुनें:</strong> e-District के FAQ के अनुसार Community Certificate सिर्फ SC/ST के लिए है और Caste Certificate OBC के लिए। गलत सेवा चुनने पर आपकी श्रेणी सूची में दिखेगी ही नहीं।",
  sections: [
    {
      id: "kya-hai",
      title: "केरल में जाति से जुड़े प्रमाण पत्र: कौन सा चाहिए",
      table: {
        head: ["प्रमाण पत्र", "किसके लिए", "कौन जारी करता है", "समय / वैधता"],
        rows: [
          ["<strong>Caste Certificate</strong>", "OBC (पिछड़ा वर्ग)", "विलेज ऑफिसर", "3 कार्य दिवस / 3 साल"],
          ["<strong>Community Certificate</strong>", "SC / ST", "तहसीलदार (विलेज ऑफिसर की रिपोर्ट पर)", "5 कार्य दिवस / 3 साल"],
          ["<strong>Non-Creamy Layer Certificate</strong>", "OBC आरक्षण (क्रीमी लेयर से बाहर होने का सबूत)", "राज्य के काम: विलेज ऑफिसर; केंद्र के काम: तहसीलदार", "5 कार्य दिवस / 1 साल"],
        ],
      },
      callout: { kind: "info", html: "<strong>केंद्र की नौकरी के लिए:</strong> राजस्व विभाग के अनुसार केंद्र सरकार के संस्थानों में देने वाले प्रमाण पत्र <strong>तहसीलदार</strong> जारी करते हैं। केंद्र की भर्ती में OBC आरक्षण <strong>केंद्रीय OBC सूची</strong> और केंद्रीय प्रारूप के नॉन-क्रीमी लेयर प्रमाण पत्र से मिलता है, इसलिए आवेदन में उद्देश्य (purpose) सही चुनें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (e-District की सूची)",
      table: {
        head: ["प्रमाण पत्र", "साथ लगाने वाले कागज़"],
        rows: [
          ["Caste Certificate (OBC)", "शपथ-पत्र (Affidavit), जाति दिखाने वाला कोई भी कागज़, राशन कार्ड, स्कूल सर्टिफिकेट"],
          ["Community Certificate (SC/ST)", "शपथ-पत्र, जाति दिखाने वाला कोई कागज़, पुराना Caste Certificate, धर्म परिवर्तन का प्रमाण पत्र/गज़ट अधिसूचना (अगर लागू हो), राशन कार्ड, स्कूल सर्टिफिकेट"],
          ["Non-Creamy Layer", "शपथ-पत्र, बेसिक टैक्स रसीद, आयकर रिटर्न, राशन कार्ड, माता-पिता का वेतन/सेवा प्रमाण पत्र, स्कूल सर्टिफिकेट"],
        ],
      },
      list: [
        "<strong>राशन कार्ड:</strong> e-District राशन कार्ड नंबर सीधे PDS डेटाबेस से जांचता है; सिर्फ नंबर डालकर <strong>Verify</strong> करें, कॉपी अपलोड करने की ज़रूरत नहीं।",
        "<strong>अपलोड सीमा:</strong> हर पेज 100 KB तक और एक फाइल में 10 पेज तक (यानी करीब 1 MB)। सूची में न दिया कोई और कागज़ हो तो <strong>One Time Registration → Enclosure</strong> से जोड़ें।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> स्कैन को 100 KB प्रति पेज तक छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://edistrict.kerala.gov.in/" target="_blank" rel="noopener nofollow">edistrict.kerala.gov.in</a> पर <strong>Create Account</strong> से अकाउंट बनाएं। यह आधार से जुड़ा है: नाम (इनिशियल की जगह समेत), जन्मतिथि और आधार नंबर बिल्कुल आधार जैसे भरें। नाम में बिंदु (.) हो तो उसकी जगह खाली जगह (space) दें।',
        "लॉगिन करके <strong>One Time Registration</strong> पूरा करें। आपको एक <strong>Register Number</strong> मिलेगा। परिवार के किसी दूसरे सदस्य के लिए आवेदन करना हो तो उसका अलग One Time Registration बनाएं।",
        "<strong>Apply for a Certificate</strong> में OBC के लिए <strong>Caste Certificate</strong> या SC/ST के लिए <strong>Community Certificate</strong> चुनें और Register Number चुनें।",
        "फॉर्म भरें, राशन कार्ड नंबर Verify करें, कागज़ अपलोड करें और ऑनलाइन फीस भरें।",
        "भुगतान के बाद पेज खाली हो जाए तो <strong>Transaction History</strong> में तारीख चुनकर देखें; आवेदन नंबर दिखे तो आवेदन जमा है। न दिखे तो दोबारा आवेदन करें; कटा हुआ पैसा 7-10 कार्य दिवस में लौटता है।",
      ],
    },
    {
      id: "offline",
      title: "Akshaya केंद्र से आवेदन",
      intro: "e-District की सेवाएं <strong>Akshaya / कॉमन सर्विस सेंटर</strong> से भी मिलती हैं। कागज़ और राशन कार्ड नंबर लेकर जाएं; केंद्र आपका रजिस्ट्रेशन बनाकर आवेदन भेजेगा। पहले Akshaya से आवेदन किया हो तो बाद में ऑनलाइन अकाउंट में <strong>Check Duplicate</strong> करके वही Register Number OTP से जोड़ सकते हैं। केंद्र का सेवा शुल्क पहले पूछ लें।",
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>Track Application</strong> में आवेदन नंबर डालें। हर चरण पर रजिस्टर्ड मोबाइल पर SMS भी आता है।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड करें या Akshaya केंद्र से प्रिंट लें।",
        "<strong>सत्यापन:</strong> होमपेज के <strong>Certificate verification</strong> से कोई भी संस्था प्रमाण पत्र असली है या नहीं, जांच सकती है।",
      ],
      html: '<p>DigiLocker से प्रमाण पत्र निकालने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["सूची में OBC/SC/ST श्रेणी नहीं दिख रही", "OBC के लिए Caste Certificate, SC/ST के लिए Community Certificate चुनें"],
          ["आधार सत्यापन फेल", "नाम, जन्मतिथि और नाम में इनिशियल की जगह बिल्कुल आधार जैसी रखें"],
          ["\"You have one pending application\"", "Clear दबाकर अधूरा आवेदन हटाएं और फिर से आवेदन करें"],
          ["जाति का कोई पुराना रिकॉर्ड नहीं", "स्कूल सर्टिफिकेट जिसमें जाति लिखी हो, या परिवार के सदस्य का पुराना प्रमाण पत्र लगाएं; विलेज ऑफिसर स्थानीय जांच करते हैं"],
        ],
      },
      html: "<p>मदद के लिए e-District (KSITM): ईमेल edistrict.ksitm@kerala.gov.in, फोन 0471 2525444। प्रमाण पत्र में देरी हो तो अपने विलेज ऑफिस या तालुक कार्यालय में आवेदन नंबर के साथ संपर्क करें।</p>",
    },
  ],
  official: [
    { href: "https://edistrict.kerala.gov.in/", title: "e-District Kerala (आवेदन, Track Application, Certificate verification)" },
    { href: "https://edistrict.kerala.gov.in/generalService.htm?event=faq", title: "e-District FAQ: कागज़, समय सीमा और वैधता की सूची" },
    { href: "https://clr.kerala.gov.in/eng/index.php/services/certificates", title: "भू-राजस्व विभाग: प्रमाण पत्र कौन जारी करता है" },
  ],
  faq: [
    { q: "केरल में OBC के लिए कौन सा प्रमाण पत्र बनवाएं?", a: "e-District पर Caste Certificate। SC/ST के लिए Community Certificate अलग सेवा है।" },
    { q: "केरल का जाति प्रमाण पत्र कितने साल मान्य है?", a: "e-District के FAQ के अनुसार Caste Certificate और Community Certificate दोनों 3 साल तक मान्य हैं। Non-Creamy Layer प्रमाण पत्र 1 साल मान्य है।" },
    { q: "कितने दिन में बनता है?", a: "e-District के अनुसार Caste Certificate 3 कार्य दिवस, Community Certificate 5 कार्य दिवस और Non-Creamy Layer 5 कार्य दिवस में।" },
    { q: "SC/ST का Community Certificate कौन देता है?", a: "तहसीलदार, विलेज ऑफिसर की रिपोर्ट के आधार पर। इसे रद्द करने का अधिकार सिर्फ स्क्रूटिनी कमेटी को है।" },
    { q: "क्या राशन कार्ड की कॉपी अपलोड करनी है?", a: "नहीं। e-District राशन कार्ड नंबर सीधे PDS डेटाबेस से जांचता है; सिर्फ नंबर डालकर Verify करें।" },
  ],
  related: [
    { href: "/states/kerala-income-certificate.html", emoji: "💰", title: "केरल आय प्रमाण पत्र", text: "e-District पर आवेदन, 1 साल वैधता" },
    { href: "/states/kerala-domicile-certificate.html", emoji: "🏠", title: "केरल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://edistrict.kerala.gov.in/", label: "📝 e-District Kerala पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
