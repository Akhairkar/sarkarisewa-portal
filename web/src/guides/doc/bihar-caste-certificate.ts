import type { DocGuide } from "./types";

// Sources (checked 5 Oct 2026):
// - serviceonline.bihar.gov.in (RTPS Bihar on ServicePlus) home page: GAD RTPS
//   services "जाति प्रमाण-पत्र का निर्गमन" at circle/block, sub-division and
//   district level; separate Non Creamy Layer services for Govt. of Bihar and
//   for Govt. of India, and EWS income & asset certificate; delivery by SMS
//   link, e-mail, DigiLocker, ServicePlus inbox, "Download Certificate" link,
//   RTPS counter/kiosk/CSC; Aadhaar OTP or one of 12 ECI identity cards;
//   "Track Application Status"; "Verify / Download by Submission ID" for
//   certificates issued before 24 April 2017; note that portal verification of
//   residence/caste/income/NCL/EWS certificates is subject to final
//   verification by the issuing authority; RTPS Appeal link
//   (rtpsappeal.bihar.gov.in); sub-division/district applications use the
//   lower-level application reference number; advice not to re-apply while a
//   certificate is valid.
// - Bihar_RTPS_GAD_Services.pdf (portal document): RTPS schedule of GAD
//   services: caste certificate Form-I with self-affidavits (general / SC-ST /
//   BC-EBC formats), Circle Officer 10 working days, appeal SDO 15, review DM
//   15; SDO-level and DM-level counter-signature 10 days on the lower
//   certificate (appeal DM, review Divisional Commissioner); OBC NCL (Govt. of
//   India) Form-VI + Form-VIII affidavit; BC/EBC NCL (Govt. of Bihar) Form-IX +
//   Form-XI affidavit; "Tatkal" caste/residence/income at Circle Officer level
//   2 working days.
// - GAD_points.pdf ("आवश्यक सूचना", portal document): caste decided by father's
//   caste, not husband's; caste certificate remains valid always; NCL
//   certificate need not be made again and again, old certificate plus
//   undertaking.
// - Ltr_No_10207.pdf (GAD letter, June 2026): Kurmi (Mahto) of the Jharkhand
//   autonomous area; Bihar Act 15 of 2003 s.3, residents of other states cannot
//   claim reservation under the Act.
// - Bihar_RTPS_Quick_Reference.pdf and Bihar_Applicant_User_Manual.pdf: online
//   and RTPS counter steps, apply only in own jurisdiction office, certificate
//   from the same counter on showing acknowledgement and ID, OGRAS payment note
//   (fee "may be applicable for some Non-RTPS Online Services"), support chain.
// - ServiceList.pdf: Tatkal caste service at RO level operational; DigiLocker
//   and UMANG integrations.
// Left out (not confirmable on an official page we could open): a fee amount,
// a state helpline number, the exact list of caste proof documents (the form's
// annexure list is shown only inside the online form).
export const biharCasteCertificate: DocGuide = {
  state: { slug: "bihar", hi: "बिहार" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Bihar Caste Certificate 2026: Apply & Status | SarkariSewa India",
  description: "बिहार जाति प्रमाण पत्र (Caste Certificate) online apply 2026 at RTPS Bihar / ServiceOnline. Eligibility, document list, RTPS time limit & status check guide.",
  published: "2024-06-01",
  modified: "2026-10-05",
  verified: "5 अक्टूबर 2026",
  h1: "बिहार जाति प्रमाण पत्र 2026: RTPS पोर्टल पर आवेदन, अंचल/अनुमंडल/जिला स्तर, समय सीमा और स्टेटस",
  lead: "बिहार में जाति प्रमाण पत्र सामान्य प्रशासन विभाग की सेवा है और बिहार लोक सेवाओं का अधिकार (RTPS) कानून में शामिल है। आवेदन serviceonline.bihar.gov.in पर ऑनलाइन या अपने अंचल/प्रखंड के RTPS काउंटर पर होता है। अंचल स्तर पर अंचलाधिकारी (CO) 10 कार्य दिवस में प्रमाण पत्र देते हैं; ज़रूरत हो तो उसी प्रमाण पत्र के आधार पर अनुमंडल (SDO) और जिला स्तर का प्रमाण पत्र बनता है। पोर्टल के अनुसार जाति का निर्धारण पिता की जाति से होता है और जाति प्रमाण पत्र की वैधता हमेशा बनी रहती है।",
  facts: [
    ["पोर्टल", '<a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.bihar.gov.in</a>'],
    ["जारी करते हैं", "अंचलाधिकारी (CO); अनुमंडल व जिला स्तर पर प्रति-हस्ताक्षर"],
    ["समय सीमा", "10 कार्य दिवस (तत्काल सेवा: 2 कार्य दिवस)"],
    ["वैधता", "हमेशा (पोर्टल की आवश्यक सूचना)"],
  ],
  notice: "<strong>सही स्तर चुनें:</strong> पहले <strong>अंचल स्तर</strong> का प्रमाण पत्र बनता है। अनुमंडल (SDO) स्तर के लिए अंचल वाले आवेदन की संदर्भ संख्या और जिला स्तर के लिए अनुमंडल वाले आवेदन की संदर्भ संख्या चाहिए। सीधे जिला स्तर पर आवेदन नहीं हो सकता।",
  sections: [
    {
      id: "kya-hai",
      title: "जाति प्रमाण पत्र और नॉन-क्रीमी लेयर में फर्क",
      intro: "RTPS पोर्टल पर जाति से जुड़ी ये <strong>अलग-अलग सेवाएं</strong> हैं; जो आपसे मांगा गया है वही चुनें:",
      table: {
        head: ["सेवा", "कब चाहिए", "फॉर्म (RTPS सूची के अनुसार)"],
        rows: [
          ["<strong>जाति प्रमाण पत्र</strong>", "SC/ST, पिछड़ा वर्ग (BC) या अत्यंत पिछड़ा वर्ग (EBC) होने का प्रमाण; सामान्य (उच्च जाति) के लिए भी प्रारूप है", "फॉर्म-I आवेदन + श्रेणी के अनुसार स्वयं शपथ-पत्र"],
          ["<strong>नॉन-क्रीमी लेयर (बिहार सरकार के लिए)</strong>", "राज्य की नौकरी/दाखिले में BC/EBC आरक्षण", "फॉर्म-IX + फॉर्म-XI स्वयं शपथ-पत्र"],
          ["<strong>नॉन-क्रीमी लेयर (भारत सरकार के लिए)</strong>", "केंद्र की नौकरी/परीक्षा में OBC आरक्षण", "फॉर्म-VI + फॉर्म-VIII स्वयं शपथ-पत्र"],
          ["<strong>EWS आय और संपत्ति प्रमाण पत्र</strong>", "आर्थिक रूप से कमजोर वर्ग का आरक्षण", "अलग RTPS सेवा"],
        ],
      },
      callout: { kind: "info", html: "OBC/BC/EBC उम्मीदवार को आरक्षण के लिए आम तौर पर जाति प्रमाण पत्र के अलावा <strong>नॉन-क्रीमी लेयर प्रमाण पत्र</strong> भी लगता है। केंद्र और राज्य के लिए ये दो अलग प्रमाण पत्र हैं, इसलिए भर्ती के विज्ञापन में लिखा प्रारूप देखकर ही आवेदन करें।" },
    },
    {
      id: "patrata",
      title: "किसे मिलता है: जाति, निवास और विवाह के नियम",
      list: [
        "<strong>पिता की जाति:</strong> पोर्टल की \"आवश्यक सूचना\" के अनुसार व्यक्ति की जाति का निर्धारण <strong>पिता की जाति</strong> से होता है, <strong>पति की जाति से नहीं</strong>। यानी शादी के बाद महिला की जाति नहीं बदलती।",
        "<strong>बिहार का निवासी:</strong> सामान्य प्रशासन विभाग के जून 2026 के पत्र में बिहार अधिनियम 15, 2003 की धारा 3 उद्धृत है: बिहार राज्य के बाहर के निवासी अभ्यर्थी इस अधिनियम के तहत आरक्षण का दावा नहीं करेंगे।",
        "<strong>कुर्मी (महतो), झारखंड स्वशासी क्षेत्र:</strong> उसी पत्र के अनुसार बिहार की अत्यंत पिछड़े वर्गों की सूची (अनुसूची-1) के क्रमांक-6 पर दर्ज यह प्रविष्टि झारखंड स्वशासी क्षेत्र की है, जो अब पूरी तरह झारखंड में है। बिहार के दूसरे जिलों के कुर्मी पिछड़े वर्ग (अनुसूची-2, क्रमांक-35) में हैं।",
        "<strong>अपने ही कार्यालय में आवेदन:</strong> आवेदन सिर्फ अपने क्षेत्राधिकार वाले अंचल/प्रखंड, अनुमंडल या जिला कार्यालय में दें; दूसरे कार्यालय का आवेदन स्वीकार नहीं होता।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>आवेदन (फॉर्म-I)</strong>: ऑनलाइन आवेदन में यह फॉर्म स्क्रीन पर भरा जाता है; RTPS काउंटर पर भरा हुआ और स्याही से हस्ताक्षर किया फॉर्म देना होता है।",
        "<strong>स्वयं शपथ-पत्र</strong>: सामान्य, SC/ST और BC/EBC के लिए अलग प्रारूप हैं (RTPS सूची में फॉर्म-II, III और V)।",
        "<strong>फोटो</strong>: वेबकैम से या फाइल अपलोड करके।",
        "<strong>पहचान</strong>: आधार OTP से प्रमाणीकरण करें; न करें तो भारत निर्वाचन आयोग के मान्य 12 पहचान पत्रों में से एक अपलोड करें (मतदाता पहचान पत्र, पासपोर्ट, ड्राइविंग लाइसेंस, पैन कार्ड, फोटो वाली बैंक/डाकघर पासबुक, मनरेगा जॉब कार्ड, आधार आदि)।",
        "फॉर्म में <strong>तारांकित (*) अनिवार्य अनुलग्नक</strong>: इन्हें छोटे आकार की PDF में पहले से स्कैन करके रखें।",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> जाति पिता से तय होती है, इसलिए पिता के नाम वाले रिकॉर्ड और परिवार में पहले बने जाति प्रमाण पत्र (अगर हों) की कॉपी साथ रखें। कर्मचारी की स्थल जांच में यही काम आते हैं।" },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://serviceonline.bihar.gov.in/" target="_blank" rel="noopener nofollow">serviceonline.bihar.gov.in</a> खोलें। पहली बार हैं तो <strong>Register Yourself</strong> से अकाउंट बनाएं; पोर्टल अब <strong>मेरी पहचान (NSSO)</strong> लॉगिन से जुड़ा है।',
        "बाईं ओर <strong>RTPS सेवाएं → सामान्य प्रशासन विभाग → जाति प्रमाण-पत्र का निर्गमन → अंचल स्तर पर</strong> चुनें।",
        "फॉर्म ध्यान से भरें, फोटो लगाएं और <strong>Save Draft</strong> करें। ड्राफ्ट में <strong>Edit</strong> से सुधार कर सकते हैं।",
        "<strong>Attach Annexure</strong> से शपथ-पत्र और बाकी कागज़ (PDF/इमेज) जोड़ें।",
        "आधार नंबर डालकर OTP से प्रमाणीकरण करें, या 12 मान्य पहचान पत्रों में से एक अपलोड करें।",
        "भरा हुआ फॉर्म और अनुलग्नक एक बार देख लें, फिर <strong>Submit</strong> करें और <strong>पावती (Acknowledgement)</strong> डाउनलोड करें। इसमें आवेदन संदर्भ संख्या होती है।",
        "हर चरण की सूचना SMS/ईमेल से आती है। अनुमंडल या जिला स्तर का प्रमाण पत्र चाहिए तो अंचल स्तर वाला प्रमाण पत्र बनने के बाद उसकी संदर्भ संख्या से अगले स्तर पर आवेदन करें।",
      ],
    },
    {
      id: "offline",
      title: "RTPS काउंटर, कियोस्क या CSC से आवेदन",
      intro: "अपने अंचल/प्रखंड कार्यालय के <strong>RTPS काउंटर</strong> पर कार्यपालक सहायक (EA) को भरा हुआ फॉर्म और शपथ-पत्र दें। वे पोर्टल पर डेटा भरकर आपकी फोटो लेंगे और पावती की एक कॉपी देंगे। प्रमाण पत्र उसी काउंटर से <strong>पावती और वैध पहचान पत्र</strong> दिखाकर मिलता है। पोर्टल के अनुसार कियोस्क और कॉमन सर्विस सेंटर (CSC) से भी आवेदन होता है।",
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और अपील (RTPS सूची)",
      table: {
        head: ["स्तर", "प्रमाण पत्र देने वाले", "समय", "अपील / पुनरीक्षण"],
        rows: [
          ["अंचल", "अंचलाधिकारी (CO)", "10 कार्य दिवस", "अनुमंडलाधिकारी (15 दिन) / जिलाधिकारी (15 दिन)"],
          ["अंचल (तत्काल सेवा)", "अंचलाधिकारी", "2 कार्य दिवस", "अनुमंडलाधिकारी / जिलाधिकारी"],
          ["अनुमंडल", "अनुमंडलाधिकारी या उनके प्राधिकृत पदाधिकारी", "10 कार्य दिवस", "जिलाधिकारी / प्रमंडलीय आयुक्त"],
          ["जिला", "जिलाधिकारी द्वारा प्राधिकृत पदाधिकारी", "10 कार्य दिवस", "जिलाधिकारी / प्रमंडलीय आयुक्त"],
        ],
      },
      html: "<p><strong>फीस:</strong> RTPS सेवा-सूची में इस सेवा का कोई शुल्क दर्ज नहीं है। पोर्टल पर नियम यह है कि जिस सेवा में शुल्क हो वहां <strong>Make Payment</strong> दिखता है, नहीं तो सीधे <strong>Submit</strong> होता है। CSC या कियोस्क पर अलग सेवा शुल्क लगे तो पहले पूछ लें।</p>",
      callout: { kind: "warn", html: "समय सीमा में प्रमाण पत्र न मिले या आवेदन बिना ठोस वजह खारिज हो, तो <a href=\"https://rtpsappeal.bihar.gov.in\" target=\"_blank\" rel=\"noopener nofollow\">RTPS अपील पोर्टल</a> पर अपील करें।" },
    },
    {
      id: "status",
      title: "स्टेटस, डाउनलोड और सत्यापन",
      list: [
        "<strong>स्टेटस:</strong> होमपेज पर <strong>नागरिक अनुभाग → आवेदन की स्थिति देखें (Track Application Status)</strong> में आवेदन संदर्भ संख्या और तारीख डालें। स्थिति Initiated, Under Process, Delivered या Rejected दिखती है।",
        "<strong>डाउनलोड:</strong> SMS में आए लिंक से, ईमेल से, DigiLocker से, लॉगिन करके ServicePlus इनबॉक्स (Delivered → Output Certificate) से, या होमपेज के \"सर्टिफिकेट डाउनलोड करें\" लिंक से।",
        "<strong>पुराने प्रमाण पत्र:</strong> 24 अप्रैल 2017 से पहले जारी प्रमाण पत्र \"Verify / Download by Submission ID\" से मिलते हैं।",
        "<strong>सत्यापन:</strong> पोर्टल साफ कहता है कि पोर्टल से किया गया सत्यापन जारी करने वाले प्राधिकारी के अंतिम सत्यापन के अधीन है। नौकरी में संस्था सीधे अंचल/अनुमंडल कार्यालय से भी जांच करा सकती है।",
      ],
      html: '<p>DigiLocker से प्रमाण पत्र निकालने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "ncl",
      title: "वैधता और नॉन-क्रीमी लेयर का नवीनीकरण",
      list: [
        "<strong>जाति प्रमाण पत्र:</strong> वैधता हमेशा बनी रहती है। पोर्टल की सलाह है कि वैध प्रमाण पत्र होने पर बार-बार नया आवेदन न करें; वही प्रमाण पत्र अलग-अलग कामों में इस्तेमाल करें।",
        "<strong>नॉन-क्रीमी लेयर:</strong> इसे बार-बार बनवाने की ज़रूरत नहीं है। राज्य की सेवाओं के लिए पुराने प्रमाण पत्र के साथ <strong>अंडरटेकिंग</strong> देकर आवेदन किया जा सकता है, और अंडरटेकिंग लेकर पुराने प्रमाण पत्र के आधार पर नया NCL प्रमाण पत्र भी जारी हो सकता है।",
        "<strong>सत्यापन के बाद मूल प्रमाण पत्र:</strong> संस्थाओं को सत्यापन के बाद उम्मीदवार का मूल प्रमाण पत्र लौटाना होता है।",
      ],
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता या खारिज होता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["गलत कार्यालय या गलत स्तर पर आवेदन", "अपने अंचल/प्रखंड में अंचल स्तर से शुरू करें; अगले स्तर पर पिछली संदर्भ संख्या से आवेदन करें"],
          ["पहचान का प्रमाण नहीं", "आधार OTP करें या 12 मान्य पहचान पत्रों में से एक साफ स्कैन लगाएं"],
          ["जाति का दावा पति के आधार पर", "जाति पिता की जाति से तय होती है; उसी के अनुसार आवेदन करें"],
          ["गलत शपथ-पत्र प्रारूप", "अपनी श्रेणी (सामान्य, SC/ST, BC/EBC) का शपथ-पत्र लगाएं; NCL के लिए अलग सेवा चुनें"],
          ["भुगतान कटा पर आवेदन जमा नहीं (जिन सेवाओं में शुल्क है)", "दोबारा भुगतान न करें; पोर्टल पर <strong>Re-validate Payment</strong> करें"],
        ],
      },
    },
    {
      id: "help",
      title: "मदद कहां मिलेगी",
      intro: "पोर्टल की आवेदक पुस्तिका के अनुसार तकनीकी मदद इस क्रम में मिलती है: पहले अपने पंचायत/प्रखंड/अंचल/अनुमंडल के <strong>कार्यपालक सहायक</strong>, फिर उनके माध्यम से आईटी सहायक, जिला आईटी प्रबंधक और NIC जिला केंद्र। पोर्टल पर इस सेवा के लिए अलग हेल्पलाइन नंबर नहीं दिया गया है, इसलिए किसी अनौपचारिक नंबर पर अपनी जानकारी न दें।",
    },
  ],
  official: [
    { href: "https://serviceonline.bihar.gov.in/", title: "RTPS बिहार / ServicePlus (आवेदन, स्टेटस, डाउनलोड)" },
    { href: "https://rtpsappeal.bihar.gov.in", title: "RTPS अपील पोर्टल" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/Bihar_RTPS_GAD_Services.pdf", title: "सामान्य प्रशासन विभाग की RTPS सेवाएं (PDF): फॉर्म, समय सीमा, अपील" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/GAD_points.pdf", title: "आवश्यक सूचना (PDF): जाति, वैधता और नॉन-क्रीमी लेयर" },
    { href: "https://serviceonline.bihar.gov.in/resources/homePage/10/Document/Bihar_Applicant_User_Manual.pdf", title: "आवेदक उपयोगकर्ता पुस्तिका (PDF)" },
  ],
  faq: [
    { q: "बिहार में जाति प्रमाण पत्र ऑनलाइन कैसे बनवाएं?", a: "serviceonline.bihar.gov.in पर रजिस्टर/लॉगिन करें, RTPS सेवाएं → सामान्य प्रशासन विभाग → जाति प्रमाण-पत्र का निर्गमन → अंचल स्तर पर चुनें, फॉर्म भरें, शपथ-पत्र अटैच करें, आधार OTP करें और Submit करके पावती डाउनलोड करें।" },
    { q: "बिहार जाति प्रमाण पत्र कितने दिन में बनता है?", a: "RTPS सूची के अनुसार अंचलाधिकारी के स्तर पर 10 कार्य दिवस। तत्काल सेवा में अंचल स्तर पर 2 कार्य दिवस। अनुमंडल और जिला स्तर के प्रति-हस्ताक्षर के लिए भी 10-10 कार्य दिवस तय हैं।" },
    { q: "शादी के बाद महिला किस जाति का प्रमाण पत्र बनवाएगी?", a: "पोर्टल की आवश्यक सूचना के अनुसार जाति का निर्धारण पिता की जाति से होता है, पति की जाति से नहीं। इसलिए प्रमाण पत्र पिता की जाति के आधार पर ही बनेगा।" },
    { q: "बिहार का जाति प्रमाण पत्र कब तक वैध रहता है?", a: "पोर्टल की आवश्यक सूचना के अनुसार जाति प्रमाण पत्र की वैधता हमेशा बनी रहती है। नॉन-क्रीमी लेयर प्रमाण पत्र बार-बार बनवाने की ज़रूरत नहीं; राज्य की सेवाओं के लिए पुराने प्रमाण पत्र के साथ अंडरटेकिंग दी जा सकती है।" },
    { q: "केंद्र की नौकरी के लिए OBC प्रमाण पत्र कौन सा बनवाएं?", a: "RTPS पोर्टल पर \"नॉन क्रीमी लेयर प्रमाण पत्र (केन्द्र सरकार के प्रयोजनार्थ)\" अलग सेवा है (फॉर्म-VI और फॉर्म-VIII शपथ-पत्र)। बिहार सरकार की नौकरी के लिए \"बिहार सरकार के प्रयोजनार्थ\" वाली सेवा (फॉर्म-IX और फॉर्म-XI) है।" },
    { q: "अनुमंडल या जिला स्तर का जाति प्रमाण पत्र कैसे बनता है?", a: "पहले अंचल स्तर का प्रमाण पत्र बनता है। अनुमंडल स्तर के लिए उसी आवेदन की संदर्भ संख्या से आवेदन होता है और अनुमंडलाधिकारी उसे प्रति-हस्ताक्षरित करते हैं; जिला स्तर के लिए अनुमंडल वाले आवेदन की संदर्भ संख्या लगती है।" },
    { q: "क्या दूसरे राज्य का निवासी बिहार का जाति प्रमाण पत्र लेकर आरक्षण ले सकता है?", a: "सामान्य प्रशासन विभाग के पत्र में बिहार अधिनियम 15, 2003 की धारा 3 उद्धृत है, जिसके अनुसार बिहार राज्य के बाहर के निवासी अभ्यर्थी इस अधिनियम के तहत आरक्षण का दावा नहीं कर सकते।" },
  ],
  related: [
    { href: "/states/bihar-income-certificate.html", emoji: "💰", title: "बिहार आय प्रमाण पत्र", text: "RTPS पर आवेदन, 1 साल की वैधता" },
    { href: "/states/bihar-domicile-certificate.html", emoji: "🏠", title: "बिहार आवासीय प्रमाण पत्र", text: "निवास प्रमाण पत्र" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://serviceonline.bihar.gov.in/", label: "📝 RTPS बिहार पर आवेदन करें" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
