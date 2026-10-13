import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - anagrasarkalyan.gov.in (Backward Classes Welfare Department, West Bengal)
//   home page: "Online Application for Issuance of Caste Certificate" link to
//   castcertificatewb.gov.in; Bangla Sahayata Kendra link; "Reservation" page
//   with "Issue of SC/ST/OBC Certificates" documents.
// - BCW Memorandum No. 1465-BCW/MR-67/10 dated 30.04.2010 "Guidelines for
//   issuance of SC/ST Certificate" (07-07-2017-07-16-24.pdf on the BCW site):
//   WB SC & ST (Identification) Act 1994 and Rules 1995; SDO of the
//   sub-division (Kolkata: ADM South 24 Pgs as assigned) is the competent
//   authority; BDO (block) / Deputy Magistrate assigned by SDO (municipal
//   areas) / District Welfare Officer Kolkata are recommending authorities;
//   online application, signed hard copy and documents on 2nd/4th Wednesday
//   within 60 days, hearing and verification of originals, field enquiry;
//   five criteria (citizen, permanent resident of WB since 1950, ordinary
//   resident, caste, identity) and the document list for each; no
//   application to be rejected only for lack of documents (Pradhan/Chairman/
//   Councillor certificate + enquiry); no age limit; paternal relative's
//   certificate as proof; affidavit for first-generation applicants; no
//   demand for declarations from 5-10 persons; ordinarily disposed within
//   eight weeks; migrants after 1950 get a certificate in a different format
//   but not WB benefits; marriage does not change SC/ST status; SC must
//   profess Hindu, Sikh or Buddhist religion.
// - BCW OBC certificate format and affidavit (07-07-2017-07-12-43.pdf): SDO
//   issues; certificate states state OBC and Government of India (central)
//   recognition and non-creamy layer under WB Act 2012 Schedule II and DoPT
//   OM 08.09.1993 (revised 27.05.2013); affidavit: permanent resident of WB
//   since 1993, parents' service and income details.
// - BCW Notifications 944-BCW/MR-23/2026 and 945-BCW/MR-23/2026 dated
//   18.05.2026 (Kolkata Gazette Extraordinary): withdrawal of the five 2025
//   OBC notifications; State List of OBCs of 66 classes for 7% reservation
//   following Calcutta High Court judgment of 22.05.2024.
// - Notification 1795-BCW dated 17.06.2022 under the WB Right to Public
//   Services Act, 2013 (seen as a reprint on wbxpress.com, not on an official
//   page): SC/ST/OBC certificate within four weeks of submitting hard copies;
//   designated officer SDO / District Welfare Officer (Kolkata).
// Left out (not confirmable on an official page we could open): a fee, a
// helpline number, the exact current online form steps (castcertificatewb.gov.in
// was not reachable from our checker).
export const westBengalCasteCertificate: DocGuide = {
  state: { slug: "west-bengal", hi: "पश्चिम बंगाल" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "West Bengal Caste Certificate 2026: Apply & Status",
  description: "पश्चिम बंगाल जाति प्रमाण पत्र (SC/ST/OBC Caste Certificate) 2026: castcertificatewb.gov.in पर आवेदन, SDO की सुनवाई, ज़रूरी कागज़, नई OBC सूची (66 वर्ग) और स्टेटस।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "पश्चिम बंगाल जाति प्रमाण पत्र 2026: SC/ST/OBC आवेदन, सुनवाई, कागज़ और नई OBC सूची",
  lead: "पश्चिम बंगाल में SC, ST और OBC प्रमाण पत्र <strong>अनुमंडल अधिकारी (SDO)</strong> जारी करते हैं; कोलकाता में यह काम ज़िला कल्याण अधिकारी के ज़रिए होता है। आवेदन पिछड़ा वर्ग कल्याण विभाग के पोर्टल castcertificatewb.gov.in पर ऑनलाइन या ब्लॉक (BDO) / SDO कार्यालय में होता है, फिर तय बुधवार को मूल कागज़ों के साथ सुनवाई होती है। <strong>मई 2026 से राज्य की OBC सूची में 66 वर्ग</strong> हैं, जिन्हें 7% आरक्षण मिलता है।",
  facts: [
    ["पोर्टल", '<a href="http://castcertificatewb.gov.in/" target="_blank" rel="noopener nofollow">castcertificatewb.gov.in</a>'],
    ["जारी करते हैं", "SDO (कोलकाता: ज़िला कल्याण अधिकारी के ज़रिए)"],
    ["समय सीमा", "4 सप्ताह (RTPS अधिसूचना 2022)"],
    ["निवास की शर्त", "SC/ST: 1950 से, OBC: 1993 से बंगाल में"],
  ],
  notice: "<strong>OBC सूची बदली है:</strong> पिछड़ा वर्ग कल्याण विभाग की 18 मई 2026 की अधिसूचना (945-BCW) के अनुसार राज्य की OBC सूची में अब <strong>66 वर्ग</strong> हैं और राज्य की नौकरियों में OBC आरक्षण <strong>7%</strong> है। 2025 की पांच OBC अधिसूचनाएं वापस ले ली गई हैं (944-BCW)। आवेदन से पहले देख लें कि आपकी जाति इस सूची में है।",
  sections: [
    {
      id: "kya-hai",
      title: "कौन सा प्रमाण पत्र, कौन जारी करता है",
      intro: "पश्चिम बंगाल में जाति प्रमाण पत्र राज्य के <strong>पिछड़ा वर्ग कल्याण विभाग (Backward Classes Welfare Department)</strong> के नियमों से बनता है। विभाग के दिशानिर्देशों के अनुसार:",
      table: {
        head: ["काम", "कौन करता है"],
        rows: [
          ["प्रमाण पत्र जारी करना", "अनुमंडल अधिकारी (SDO); कोलकाता के लिए ज़िलाधिकारी द्वारा तय अधिकारी"],
          ["सिफ़ारिश (जांच)", "ब्लॉक में BDO; नगरपालिका क्षेत्र में SDO द्वारा तय डिप्टी मजिस्ट्रेट; कोलकाता में ज़िला कल्याण अधिकारी"],
          ["आवेदन कहां दें", "ब्लॉक क्षेत्र: ब्लॉक कार्यालय; नगरपालिका क्षेत्र: SDO कार्यालय; कोलकाता: ज़िला कल्याण अधिकारी का कार्यालय"],
        ],
      },
      callout: { kind: "info", html: "OBC प्रमाण पत्र के प्रारूप में दो बातें लिखी होती हैं: आपका वर्ग <strong>राज्य सरकार</strong> की OBC सूची में है या नहीं, और <strong>भारत सरकार</strong> (केंद्रीय सूची) में पश्चिम बंगाल के लिए है या नहीं। साथ में यह भी कि आप <strong>क्रीमी लेयर</strong> में नहीं हैं। केंद्र की नौकरी के लिए केंद्रीय सूची वाली पंक्ति भरी होनी चाहिए।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है: पांच शर्तें",
      intro: "विभाग के दिशानिर्देशों में SC/ST प्रमाण पत्र के लिए पांच बातें साबित करनी होती हैं:",
      list: [
        "<strong>भारत का नागरिक</strong> होना।",
        "<strong>स्थायी निवास:</strong> SC/ST के लिए <strong>1950 से</strong> पश्चिम बंगाल का स्थायी निवासी। OBC शपथ-पत्र में <strong>1993 से</strong> स्थायी निवास लिखना होता है।",
        "<strong>साधारण निवास:</strong> अभी जिस पते पर रहते हैं, वहां के निवासी होना।",
        "<strong>जाति:</strong> आप उस जाति/जनजाति से हैं।",
        "<strong>पहचान</strong>।",
      ],
      html: "<p>दिशानिर्देशों के अनुसार शादी से SC/ST दर्जा न मिलता है, न जाता है। SC के लिए हिंदू, सिख या बौद्ध धर्म मानना ज़रूरी है; ST किसी भी धर्म का हो सकता है। आवेदन के लिए कोई उम्र सीमा नहीं है। 1950 के बाद दूसरे राज्य से आए व्यक्ति को अलग प्रारूप में प्रमाण पत्र मिल सकता है, लेकिन बंगाल में SC/ST के लाभ नहीं मिलते।</p>",
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (हर शर्त के लिए कोई एक)",
      intro: "दिशानिर्देश साफ कहते हैं कि <strong>हर शर्त के लिए नीचे दिया कोई एक कागज़ काफ़ी है</strong>:",
      table: {
        head: ["शर्त", "इनमें से कोई एक"],
        rows: [
          ["नागरिकता", "मतदाता पहचान पत्र / वोटर लिस्ट (अपना या माता-पिता का), PAN, जन्म प्रमाण पत्र, माता-पिता का जाति प्रमाण पत्र, नागरिकता प्रमाण पत्र"],
          ["1950 से स्थायी निवास", "ज़मीन का दस्तावेज़ या लगान रसीद, 1950 से निवास दिखाने वाली वोटर लिस्ट/राशन कार्ड/जन्म प्रमाण पत्र, माता-पिता का जाति प्रमाण पत्र"],
          ["अभी का निवास", "ज़मीन का दस्तावेज़, वोटर कार्ड, राशन कार्ड, जन्म प्रमाण पत्र, किराया रसीद, बैंक/डाकघर पासबुक, BPL कार्ड"],
          ["जाति", "पिता की ओर के किसी खून के रिश्तेदार का जाति प्रमाण पत्र और रिश्ते का सबूत, 1950 से पहले का ज़मीन का दस्तावेज़ जिसमें जाति लिखी हो"],
          ["पहचान", "एडमिट कार्ड, वोटर कार्ड, PAN, जन्म प्रमाण पत्र, नियोक्ता/शिक्षण संस्थान का पहचान पत्र, बैंक पासबुक, BPL कार्ड"],
        ],
      },
      callout: { kind: "ok", html: "<strong>कागज़ नहीं हैं, तब भी आवेदन करें:</strong> दिशानिर्देशों के अनुसार कागज़ न होने भर से आवेदन खारिज नहीं होगा। ग्राम पंचायत प्रधान, नगरपालिका चेयरमैन या पार्षद का प्रमाण पत्र और जांच की रिपोर्ट काफ़ी मानी जाती है। पहली पीढ़ी के आवेदक शपथ-पत्र दे सकते हैं। 5-10 लोगों से लिखवाकर लाने की ज़रूरत <strong>नहीं</strong> है।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन और सुनवाई",
      steps: [
        '<a href="http://castcertificatewb.gov.in/" target="_blank" rel="noopener nofollow">castcertificatewb.gov.in</a> खोलें (यह लिंक पिछड़ा वर्ग कल्याण विभाग की वेबसाइट पर दिया गया है)।',
        "SC, ST या OBC चुनकर फॉर्म भरें और फोटो अपलोड करें।",
        "भरा हुआ आवेदन और <strong>पावती (रसीद संख्या)</strong> डाउनलोड करें। इसी संख्या से आगे स्थिति देखी जाती है।",
        "दिशानिर्देशों के अनुसार ऑनलाइन आवेदन के <strong>60 दिन के भीतर</strong> महीने के <strong>दूसरे या चौथे बुधवार</strong> को खुद जाकर हस्ताक्षर किया आवेदन और कागज़ जमा करें। मूल कागज़ साथ ले जाएं; उसी दिन सुनवाई और मिलान होता है।",
        "ज़रूरत हो तो फील्ड जांच होती है, फिर SDO प्रमाण पत्र जारी करते हैं।",
      ],
      callout: { kind: "info", html: "OBC के लिए 10 रुपये के NJ स्टांप पेपर पर शपथ-पत्र (प्रथम श्रेणी न्यायिक / कार्यकारी मजिस्ट्रेट के सामने) लगता है, जिसमें माता-पिता की नौकरी और सालाना आय लिखी जाती है। नाबालिग के लिए माता-पिता शपथ-पत्र देते हैं।" },
    },
    {
      id: "offline",
      title: "ऑफलाइन आवेदन",
      intro: "ब्लॉक क्षेत्र में रहने वाले ब्लॉक कार्यालय (BDO) में और नगरपालिका क्षेत्र वाले SDO कार्यालय में आवेदन दे सकते हैं। दिशानिर्देशों के अनुसार कार्यालय आपका आवेदन भी उसी वेबसाइट पर चढ़ाता है और आपको दूसरे या चौथे बुधवार को मूल कागज़ों के साथ सुनवाई पर बुलाता है। स्कूलों में भी विशेष कैंप लगाने का निर्देश है, क्योंकि ज़्यादातर आवेदक छात्र होते हैं।",
    },
    {
      id: "samay",
      title: "समय सीमा और शिकायत",
      list: [
        "<strong>समय सीमा:</strong> पश्चिम बंगाल लोक सेवा अधिकार कानून, 2013 के तहत 17 जून 2022 की अधिसूचना (1795-BCW) में SC/ST/OBC प्रमाण पत्र के लिए <strong>चार सप्ताह</strong> तय हैं, जो कागज़ों की हार्ड कॉपी जमा करने से गिने जाते हैं। (यह अधिसूचना हमने एक प्रकाशित प्रति में देखी; विभाग के 2010 के दिशानिर्देश आम तौर पर आठ सप्ताह कहते थे।)",
        "<strong>स्थिति जानने का हक:</strong> दिशानिर्देशों के अनुसार आवेदक को अपने आवेदन की स्थिति जानने का अधिकार है; मांगने पर कार्यालय को बताना होता है।",
        "<strong>फीस:</strong> विभाग के जो पेज हम खोल पाए, उनमें कोई सरकारी फीस नहीं लिखी है। OBC शपथ-पत्र का 10 रुपये का स्टांप पेपर अलग है।",
      ],
      callout: { kind: "warn", html: "समय पर प्रमाण पत्र न मिले या आवेदन खारिज हो, तो SDO कार्यालय से लिखित कारण मांगें और ज़िलाधिकारी (DM) के यहां अपील/शिकायत करें। विभाग की वेबसाइट पर \"Grievance\" लिंक भी है।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> ऑनलाइन आवेदन की पावती पर मिली रसीद संख्या से castcertificatewb.gov.in पर स्थिति देखें।",
        "<strong>प्रमाण पत्र:</strong> SDO कार्यालय से मिलता है। नौकरी/दाखिले में संस्था सीधे जारी करने वाले कार्यालय से जांच करा सकती है।",
        "<strong>DigiLocker:</strong> अगर आपका प्रमाण पत्र DigiLocker में उपलब्ध हो तो वहां से भी दिखाया जा सकता है।",
      ],
      html: '<p>DigiLocker का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["60 दिन में सुनवाई पर नहीं गए", "दूसरे/चौथे बुधवार को मूल कागज़ों के साथ ज़रूर जाएं; छूट गया हो तो कार्यालय से नई तारीख पूछें"],
          ["1950 (SC/ST) या 1993 (OBC) से निवास का सबूत नहीं", "पुरानी वोटर लिस्ट, ज़मीन का दस्तावेज़ या माता-पिता का जाति प्रमाण पत्र लगाएं"],
          ["जाति का कोई कागज़ नहीं", "पिता की ओर के रिश्तेदार का प्रमाण पत्र, या प्रधान/पार्षद का प्रमाण पत्र और शपथ-पत्र दें; जांच से फैसला होगा"],
          ["OBC जाति नई सूची में नहीं", "18 मई 2026 की 66 वर्गों वाली सूची देखें; सूची से बाहर की जाति पर राज्य का OBC प्रमाण पत्र नहीं बनेगा"],
          ["दूसरे राज्य से आकर बसे", "मूल राज्य में बना पिता/माता का प्रमाण पत्र लगाएं; बंगाल में अलग प्रारूप का प्रमाण पत्र मिलता है"],
        ],
      },
    },
  ],
  official: [
    { href: "http://castcertificatewb.gov.in/", title: "जाति प्रमाण पत्र ऑनलाइन आवेदन (पिछड़ा वर्ग कल्याण विभाग)" },
    { href: "https://anagrasarkalyan.gov.in/", title: "पिछड़ा वर्ग कल्याण विभाग, पश्चिम बंगाल (दिशानिर्देश, फॉर्म, OBC सूची)" },
    { href: "http://anagrasarkalyan.gov.in/documnts/07-07-2017-07-16-24.pdf", title: "SC/ST प्रमाण पत्र के दिशानिर्देश और कागज़ों की सूची (PDF)" },
    { href: "http://anagrasarkalyan.gov.in/documnts/07-07-2017-07-12-43.pdf", title: "OBC प्रमाण पत्र का प्रारूप और शपथ-पत्र (PDF)" },
    { href: "http://adibasikalyan.gov.in/", title: "आदिवासी विकास विभाग, पश्चिम बंगाल" },
  ],
  faq: [
    { q: "पश्चिम बंगाल में जाति प्रमाण पत्र कौन जारी करता है?", a: "अनुमंडल अधिकारी (SDO)। ब्लॉक में BDO और नगरपालिका क्षेत्र में SDO द्वारा तय अधिकारी जांच करके सिफ़ारिश करते हैं। कोलकाता में आवेदन ज़िला कल्याण अधिकारी के कार्यालय में होता है।" },
    { q: "ऑनलाइन आवेदन के बाद क्या करना होता है?", a: "पावती डाउनलोड करें और 60 दिन के भीतर महीने के दूसरे या चौथे बुधवार को हस्ताक्षर किया आवेदन और मूल कागज़ लेकर संबंधित कार्यालय जाएं। उसी दिन सुनवाई और मिलान होता है।" },
    { q: "कितने दिन में प्रमाण पत्र मिलता है?", a: "लोक सेवा अधिकार कानून के तहत 2022 की अधिसूचना में हार्ड कॉपी जमा करने से चार सप्ताह तय हैं। जांच लंबी हो तो देर हो सकती है; तब SDO कार्यालय से लिखित स्थिति मांगें।" },
    { q: "कागज़ न हों तो क्या आवेदन खारिज होगा?", a: "नहीं। विभाग के दिशानिर्देशों के अनुसार सिर्फ कागज़ न होने से आवेदन खारिज नहीं होगा। प्रधान/चेयरमैन/पार्षद का प्रमाण पत्र, शपथ-पत्र और जांच की रिपोर्ट से फैसला होता है।" },
    { q: "2026 में पश्चिम बंगाल की OBC सूची में क्या बदला?", a: "18 मई 2026 की अधिसूचना के अनुसार कलकत्ता हाई कोर्ट के 22 मई 2024 के फैसले के बाद राज्य की OBC सूची में 66 वर्ग हैं और OBC आरक्षण 7% है। 2025 की पांच OBC अधिसूचनाएं वापस ले ली गईं।" },
    { q: "केंद्र की नौकरी के लिए OBC प्रमाण पत्र कैसा होना चाहिए?", a: "प्रमाण पत्र में लिखा होना चाहिए कि आपका वर्ग भारत सरकार की OBC सूची में पश्चिम बंगाल के लिए दर्ज है और आप क्रीमी लेयर में नहीं हैं (DoPT के नियम)। भर्ती के विज्ञापन में मांगा गया प्रारूप और तारीख भी देखें।" },
  ],
  related: [
    { href: "/states/west-bengal-income-certificate.html", emoji: "💰", title: "पश्चिम बंगाल आय प्रमाण पत्र", text: "BDO/SDO, e-District" },
    { href: "/states/west-bengal-domicile-certificate.html", emoji: "🏠", title: "पश्चिम बंगाल निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "http://castcertificatewb.gov.in/", label: "📝 ऑनलाइन आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
