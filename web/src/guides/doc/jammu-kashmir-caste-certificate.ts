import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026; eunnat.jk.gov.in, jk.gov.in, law.jk.gov.in
// and district sites were not reachable from our checker, so we used
// search-result extracts):
// - eunnat.jk.gov.in (e-Unnat, J&K online services portal): Revenue
//   Department certificate services by Tehsildar with PSGA time limits.
// - jansugam.jk.gov.in (ServicePlus, J&K UT instance; opened directly):
//   citizen login, "track application".
// - Jammu and Kashmir Reservation Act, 2004 (thc.nic.in copy): sections on the
//   authority competent to issue certificates, appeal and revision.
// - LiveLaw (2023) on a J&K & Ladakh High Court ruling: under Rule 22(i) of
//   the J&K Reservation Rules, 2005 only the Deputy Commissioner or the
//   Divisional Commissioner can hear an appeal against / cancel a category
//   certificate; a High Court judgment (SupremeToday) on ST certificates
//   issued by a Tehsildar.
// - Central-format notes (cuj.ac.in annexures, 2024-25): SC/ST/OBC
//   certificates for central jobs/admissions in the Government of India
//   format from a revenue officer not below Tehsildar, of the district where
//   the parents ordinarily reside.
// Left out (not confirmable on an official page we could open): fee, time
// limit in days, document list, validity period, the OBC/RBA income limits.
export const jammuKashmirCasteCertificate: DocGuide = {
  state: { slug: "jammu-kashmir", hi: "जम्मू और कश्मीर" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Jammu & Kashmir Caste Certificate 2026",
  description: "जम्मू और कश्मीर जाति / श्रेणी प्रमाण पत्र (Category Certificate) 2026: e-Unnat पर आवेदन, तहसीलदार, J&K आरक्षण नियम, अपील और स्टेटस चेक की जानकारी।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "जम्मू और कश्मीर जाति / श्रेणी प्रमाण पत्र 2026: आवेदन, तहसीलदार, अपील और केंद्रीय प्रारूप",
  lead: "जम्मू और कश्मीर में जाति या श्रेणी (Category) प्रमाण पत्र <strong>जम्मू-कश्मीर आरक्षण अधिनियम, 2004</strong> और <strong>आरक्षण नियम, 2005</strong> के तहत बनता है और राजस्व विभाग के <strong>तहसीलदार</strong> जारी करते हैं। आवेदन UT सरकार के <strong>e-Unnat</strong> पोर्टल पर ऑनलाइन होता है। प्रमाण पत्र से जुड़ी अपील या रद्द करने का अधिकार नियमों के अनुसार <strong>उपायुक्त (DC) या संभागीय आयुक्त</strong> के पास है।",
  facts: [
    ["पोर्टल", '<a href="https://eunnat.jk.gov.in/" target="_blank" rel="noopener nofollow">eunnat.jk.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार"],
    ["कानून", "J&K आरक्षण अधिनियम 2004 / नियम 2005"],
    ["अपील", "उपायुक्त या संभागीय आयुक्त"],
  ],
  notice: "<strong>केंद्र की नौकरी के लिए अलग प्रारूप:</strong> केंद्र सरकार की नौकरी या केंद्रीय संस्थानों में दाखिले के लिए SC/ST/OBC प्रमाण पत्र <strong>भारत सरकार के प्रारूप</strong> में मांगा जाता है, और OBC के लिए केंद्रीय सूची व नॉन-क्रीमी लेयर की शर्त लागू होती है। UT के आरक्षण वाला प्रमाण पत्र हर जगह नहीं चलता; भर्ती/दाखिले के विज्ञापन का प्रारूप देखकर आवेदन करें।",
  sections: [
    {
      id: "kya-hai",
      title: "J&K में श्रेणी प्रमाण पत्र किसके लिए",
      intro: "जम्मू-कश्मीर आरक्षण अधिनियम, 2004 में SC, ST और OBC के अलावा UT की अपनी आरक्षित श्रेणियां भी हैं, जैसे पिछड़े क्षेत्र के निवासी (RBA)। हर श्रेणी का प्रमाण पत्र तहसीलदार से बनता है। सही श्रेणी चुनें:",
      table: {
        head: ["ज़रूरत", "कौन सा प्रमाण पत्र"],
        rows: [
          ["J&K सरकार की नौकरी, दाखिला, छात्रवृत्ति", "J&K आरक्षण नियमों वाला श्रेणी प्रमाण पत्र (अपनी श्रेणी का)"],
          ["केंद्र सरकार की नौकरी / केंद्रीय संस्थान", "भारत सरकार के प्रारूप वाला SC/ST/OBC प्रमाण पत्र (OBC में नॉन-क्रीमी लेयर)"],
          ["EWS आरक्षण", "आय और संपत्ति प्रमाण पत्र (यह जाति का नहीं, आय-संपत्ति का प्रमाण है)"],
        ],
      },
    },
    {
      id: "kagaz",
      title: "कौन से कागज़ तैयार रखें",
      intro: "e-Unnat की पूरी दस्तावेज़-सूची हम खोल नहीं पाए। आम तौर पर ये कागज़ मांगे जाते हैं, इसलिए स्कैन करके रखें और फॉर्म में जो मांगा जाए वही लगाएं:",
      list: [
        "<strong>पहचान:</strong> आधार या दूसरा सरकारी पहचान पत्र, फोटो।",
        "<strong>निवास का सबूत:</strong> J&K डोमिसाइल प्रमाण पत्र या दूसरा मान्य कागज़।",
        "<strong>जाति/श्रेणी का सबूत:</strong> पिता या परिवार के किसी सदस्य का पहले बना श्रेणी प्रमाण पत्र, या ऐसा रिकॉर्ड जिसमें जाति लिखी हो।",
        "<strong>OBC / आय से जुड़ी श्रेणी के लिए:</strong> परिवार की आय का ब्यौरा।",
      ],
    },
    {
      id: "apply",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://eunnat.jk.gov.in/" target="_blank" rel="noopener nofollow">eunnat.jk.gov.in</a> खोलें और मोबाइल नंबर से रजिस्टर/लॉगिन करें।',
        "राजस्व विभाग की सेवाओं में अपनी श्रेणी का प्रमाण पत्र (तहसीलदार द्वारा) चुनें।",
        "फॉर्म भरें, कागज़ अपलोड करें और Submit करें।",
        "<strong>आवेदन संख्या</strong> लिखकर रखें।",
        "तहसीलदार की मंज़ूरी के बाद प्रमाण पत्र डाउनलोड करें।",
      ],
      callout: { kind: "ok", html: "खुद ऑनलाइन न कर पाएं तो नज़दीकी CSC से आवेदन करवाएं: <a href=\"/service/csc-locator/jammu-kashmir.html\">CSC लोकेटर</a>। फाइल छोटी करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a>।" },
    },
    {
      id: "samay",
      title: "समय सीमा, शुल्क और अपील",
      intro: "e-Unnat की सेवाएं <strong>जम्मू और कश्मीर लोक सेवा गारंटी अधिनियम, 2011 (PSGA)</strong> के तहत तय समय सीमा के साथ दी जाती हैं; पोर्टल पर हर सेवा के साथ \"PSGA Time\" लिखा होता है। श्रेणी प्रमाण पत्र के दिन और शुल्क हम किसी खुलने वाले सरकारी पेज पर पक्के नहीं कर पाए, इसलिए यहां नहीं लिख रहे; आवेदन के समय स्क्रीन पर देखें।",
      callout: { kind: "warn", html: "<strong>अपील:</strong> हाई कोर्ट के एक फैसले (2023) के अनुसार आरक्षण नियम 2005 के नियम 22(i) में श्रेणी प्रमाण पत्र पर अपील सुनने या उसे रद्द करने का अधिकार सिर्फ <strong>उपायुक्त (DC) या संभागीय आयुक्त</strong> को है। आवेदन खारिज हो तो लिखित वजह मांगें और अपने ज़िले के DC कार्यालय में अपील करें।" },
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> e-Unnat पर लॉगिन करके, या ServicePlus J&K (<a href=\"https://jansugam.jk.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">jansugam.jk.gov.in</a>) पर <strong>track application</strong> में।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद लॉगिन करके।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत श्रेणी या गलत प्रारूप चुना", "UT की नौकरी के लिए UT वाला, केंद्र के लिए भारत सरकार वाला प्रारूप"],
          ["जाति/श्रेणी का पुराना सबूत नहीं", "परिवार के किसी सदस्य का श्रेणी प्रमाण पत्र या जाति लिखा रिकॉर्ड लगाएं"],
          ["निवास का सबूत नहीं", "J&K डोमिसाइल प्रमाण पत्र लगाएं"],
          ["आवेदन खारिज हुआ", "उपायुक्त (DC) के पास अपील करें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://eunnat.jk.gov.in/", title: "e-Unnat J&K (ऑनलाइन सेवाएं)" },
    { href: "https://jansugam.jk.gov.in/", title: "ServicePlus J&K (लॉगिन, track application)" },
  ],
  faq: [
    { q: "जम्मू-कश्मीर में जाति प्रमाण पत्र कौन जारी करता है?", a: "राजस्व विभाग के तहसीलदार, जम्मू-कश्मीर आरक्षण अधिनियम 2004 और आरक्षण नियम 2005 के तहत। आवेदन e-Unnat पोर्टल पर ऑनलाइन होता है।" },
    { q: "प्रमाण पत्र खारिज हो जाए तो अपील कहां करें?", a: "हाई कोर्ट के फैसले के अनुसार नियम 22(i) में अपील सुनने और प्रमाण पत्र रद्द करने का अधिकार उपायुक्त (DC) या संभागीय आयुक्त को है।" },
    { q: "केंद्र सरकार की नौकरी के लिए कौन सा प्रमाण पत्र चाहिए?", a: "भारत सरकार के प्रारूप वाला SC/ST/OBC प्रमाण पत्र, OBC में केंद्रीय सूची और नॉन-क्रीमी लेयर के साथ। भर्ती के विज्ञापन में दिया प्रारूप ही बनवाएं।" },
    { q: "J&K जाति प्रमाण पत्र की फीस और समय सीमा क्या है?", a: "e-Unnat पर हर सेवा के साथ PSGA की समय सीमा दिखती है। श्रेणी प्रमाण पत्र के दिन और फीस हम सरकारी पेज पर पक्के नहीं कर पाए, इसलिए आवेदन के समय स्क्रीन पर देखें।" },
  ],
  related: [
    { href: "/states/jammu-kashmir-income-certificate.html", emoji: "💰", title: "J&K आय प्रमाण पत्र", text: "तहसीलदार, 30 दिन (PSGA)" },
    { href: "/states/jammu-kashmir-domicile-certificate.html", emoji: "🏠", title: "J&K डोमिसाइल प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://eunnat.jk.gov.in/", label: "📝 e-Unnat पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
