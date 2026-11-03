import type { DocGuide } from "./types";

// Sources (checked 3 Nov 2026; official portals not reachable from the
// sandbox, so only well-established points are stated and numeric limits that
// differ between sources are pointed to the tender/portal):
// - GeM: seller registration free (GeM seller FAQ as quoted by tender guides);
//   GST/PAN/bank/authorised signatory, Udyam recommended for MSE benefits;
//   name on Udyam should match the GeM seller profile (swcybernetics.in,
//   tender18.com, tenderkart.in, gemtenderservice.com). Purchase thresholds
//   differ between sources: not stated.
// - CPPP (eprocure.gov.in): online bidder enrollment is free, one-time; bidder
//   is valid only after DSC registration; Class 3 DSC on token, signing (and
//   encryption where asked) (Startup India bidder-enrollment PDF, institute
//   tender notices, CBSE CPPP guidelines).
// - MSE Public Procurement Policy Order 2012 (as amended): 25% annual
//   procurement target from MSEs incl. 4% SC/ST-owned and 3% women-owned;
//   registered MSEs get tender documents free and EMD exemption; purchase
//   preference within L1+15% (well established; each tender states it).
// - Startups (DPIIT-recognised): relaxation of prior turnover/experience in
//   public procurement, subject to quality/technical norms (Department of
//   Expenditure orders; each tender states it).
// - GFR 2017: Bid Security Declaration may be accepted instead of EMD (tender says).
export const sarkariTenderKaiseBhare: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सेवाएं", href: "/services/" },
    { label: "सरकारी टेंडर कैसे भरें" },
  ],
  docHi: "सरकारी टेंडर",
  title: "सरकारी टेंडर कैसे भरें 2026: GeM रजिस्ट्रेशन, ई-टेंडर, DSC, EMD छूट और MSME फायदे",
  description: "छोटे कारोबारियों के लिए सरकारी टेंडर की पूरी गाइड: GeM पर सेलर रजिस्ट्रेशन, CPPP/राज्य ई-टेंडर पोर्टल, डिजिटल सिग्नेचर (DSC), EMD और MSME/उद्यम छूट, बोली कैसे लगाएं, L1, आम गलतियां और भुगतान।",
  published: "2026-11-03",
  modified: "2026-11-03",
  verified: "3 नवंबर 2026",
  h1: "सरकारी टेंडर कैसे भरें: GeM, ई-टेंडर, DSC, EMD छूट और MSME के फायदे (2026 गाइड)",
  lead: "सरकारी विभाग और PSU अपनी ज़रूरत का सामान और सेवाएं दो तरीकों से खरीदते हैं: <strong>GeM (Government e Marketplace)</strong> पर, और <strong>ई-टेंडर पोर्टल</strong> (केंद्र का <a href=\"https://eprocure.gov.in/eprocure/app\" target=\"_blank\" rel=\"noopener nofollow\">CPPP</a> और राज्यों के अपने पोर्टल) पर। दोनों पर रजिस्ट्रेशन <strong>मुफ्त</strong> है। <strong>उद्यम (MSME) पंजीकरण</strong> वाले छोटे कारोबारियों को टेंडर फीस और EMD (बयाना राशि) में छूट जैसे सरकारी फायदे मिलते हैं, इसलिए छोटी दुकान या फर्म भी सरकारी सप्लायर बन सकती है।",
  facts: [
    ["सामान/सेवा बेचने का पोर्टल", "<a href=\"https://gem.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">gem.gov.in</a>"],
    ["केंद्र के ई-टेंडर", "<a href=\"https://eprocure.gov.in/eprocure/app\" target=\"_blank\" rel=\"noopener nofollow\">eprocure.gov.in</a> (CPPP)"],
    ["रजिस्ट्रेशन फीस", "मुफ्त (GeM और CPPP दोनों)"],
    ["सबसे बड़ा फायदा", "उद्यम पंजीकरण से EMD और टेंडर फीस में छूट"],
  ],
  notice: "\"गारंटी से टेंडर दिलाएंगे\" या \"GeM रजिस्ट्रेशन ₹5,000 में\" जैसे विज्ञापनों से सावधान रहें। रजिस्ट्रेशन सरकारी पोर्टल पर मुफ्त है और टेंडर सिर्फ सही बोली और कागज़ों से मिलता है। हर टेंडर की अपनी शर्तें होती हैं; अंतिम नियम उसी टेंडर दस्तावेज़ में देखें। यह साइट निजी है, किसी सरकारी विभाग की नहीं।",
  sections: [
    {
      id: "do-raaste",
      title: "GeM और ई-टेंडर में फर्क",
      table: {
        head: ["", "GeM (gem.gov.in)", "ई-टेंडर (CPPP / राज्य पोर्टल)"],
        rows: [
          ["क्या खरीदा जाता है", "रोज़मर्रा का सामान और सेवाएं: फर्नीचर, कंप्यूटर, स्टेशनरी, गाड़ी किराया, सफाई, सिक्योरिटी आदि", "निर्माण कार्य (सड़क, बिल्डिंग), बड़े और खास कामों की खरीद, सेवाएं"],
          ["कैसे बिकता है", "प्रोडक्ट कैटलॉग पर सीधी खरीद, या बिड/रिवर्स ऑक्शन", "टेंडर (बोली) के ज़रिए; तकनीकी और कीमत वाली बोली"],
          ["डिजिटल सिग्नेचर (DSC)", "ज़्यादातर काम आधार/OTP से; कुछ बिड में DSC मांगा जा सकता है", "<strong>ज़रूरी</strong> (Class 3 DSC)"],
          ["किसके लिए सही", "दुकानदार, सप्लायर, छोटे सेवा प्रदाता", "ठेकेदार, बड़े सप्लायर, सेवा कंपनियां"],
        ],
      },
    },
    {
      id: "pehle",
      title: "शुरू करने से पहले ये कागज़ तैयार करें",
      list: [
        "<strong>PAN कार्ड</strong> (फर्म/मालिक का)",
        "<strong>GST पंजीकरण</strong>: ज़्यादातर टेंडर और GeM पर ज़रूरी (<a href=\"/service/gst.html\">GST गाइड</a>)",
        "<strong>उद्यम (MSME) पंजीकरण</strong>: मुफ्त, और EMD/फीस छूट के लिए ज़रूरी (<a href=\"/service/udyam-registration.html\">उद्यम रजिस्ट्रेशन</a>)",
        "फर्म के नाम का <strong>चालू बैंक खाता</strong> और कैंसल चेक",
        "अधिकृत व्यक्ति (मालिक/पार्टनर/डायरेक्टर) का आधार, मोबाइल और ईमेल",
        "ई-टेंडर के लिए <strong>Class 3 DSC</strong> (USB टोकन में)",
        "पिछले काम का अनुभव प्रमाण, टर्नओवर (CA प्रमाणित), ITR और ज़रूरी लाइसेंस (जैसे ठेकेदार पंजीकरण, ISI/BIS) जहां टेंडर मांगे",
      ],
      callout: { kind: "ok", html: "<strong>नाम एक जैसा रखें:</strong> PAN, GST, उद्यम और बैंक में फर्म का नाम हूबहू एक हो। GeM पर उद्यम का नाम सेलर प्रोफाइल से मेल न खाए तो MSME फायदे अटक सकते हैं।" },
    },
    {
      id: "gem",
      title: "GeM पर सेलर रजिस्ट्रेशन कैसे करें",
      steps: [
        "<a href=\"https://gem.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">gem.gov.in</a> खोलें, <strong>Sign Up → Seller</strong> चुनें।",
        "अधिकृत व्यक्ति का मोबाइल/ईमेल और पहचान सत्यापित करें, फिर यूज़र ID बनाएं।",
        "फर्म की जानकारी भरें: PAN, फर्म का प्रकार (प्रोप्राइटर, पार्टनरशिप, कंपनी), पता।",
        "<strong>GST</strong>, <strong>उद्यम</strong> और <strong>बैंक खाता</strong> जोड़ें और सत्यापित करें।",
        "सेलर प्रोफाइल पूरी करें, फिर अपने <strong>प्रोडक्ट या सेवाएं कैटलॉग</strong> में जोड़ें (कीमत, स्टॉक, ब्रांड, फोटो)।",
        "कैटलॉग मंज़ूर होने के बाद ऑर्डर और बिड में हिस्सा लें।",
      ],
      callout: { kind: "info", html: "GeM पर सेलर रजिस्ट्रेशन और कैटलॉग मंज़ूरी मुफ्त है। कुछ मामलों में \"caution money\" का नियम लागू होता है, जिसमें उद्यम वाले MSE को छूट बताई जाती है; ताज़ा नियम GeM के सेलर FAQ में देखें।" },
    },
    {
      id: "etender",
      title: "ई-टेंडर पोर्टल (CPPP) पर बिडर रजिस्ट्रेशन",
      steps: [
        "पहले किसी लाइसेंस प्राप्त एजेंसी से <strong>Class 3 DSC</strong> (USB टोकन) बनवाएं; टेंडर में मांगा हो तो साइनिंग के साथ <strong>एन्क्रिप्शन</strong> वाला DSC लें।",
        "<a href=\"https://eprocure.gov.in/eprocure/app\" target=\"_blank\" rel=\"noopener nofollow\">eprocure.gov.in</a> पर <strong>Online Bidder Enrollment</strong> खोलें।",
        "फर्म की जानकारी, यूज़र ID और पासवर्ड भरें; MSE/स्टार्टअप हैं तो <strong>Preferential Bidder</strong> विकल्प चुनें।",
        "लॉगिन करके अपना <strong>DSC रजिस्टर</strong> करें; DSC रजिस्टर होने के बाद ही आप वैध बिडर बनते हैं।",
        "यह एक बार का काम है; इसके बाद टेंडर खोज, डाउनलोड और ऑनलाइन बोली लगा सकते हैं।",
      ],
      callout: { kind: "info", html: "राज्यों के अपने ई-टेंडर पोर्टल हैं (ज़्यादातर इसी NIC सिस्टम पर), जैसे महाराष्ट्र के लिए mahatenders.gov.in और मध्य प्रदेश के लिए mptenders.gov.in। जिस विभाग का टेंडर है, उसी पोर्टल पर अलग रजिस्ट्रेशन होता है; DSC वही चल जाता है।" },
    },
    {
      id: "msme-fayde",
      title: "MSME (उद्यम) और स्टार्टअप को मिलने वाले फायदे",
      table: {
        head: ["फायदा", "किसे", "ध्यान रखें"],
        rows: [
          ["<strong>टेंडर फीस में छूट</strong>", "उद्यम पंजीकृत सूक्ष्म और लघु उद्यम (MSE)", "उसी सामान/सेवा के लिए जिसका पंजीकरण है"],
          ["<strong>EMD (बयाना राशि) में छूट</strong>", "उद्यम पंजीकृत MSE", "टेंडर में दी गई शर्त देखें; छूट का प्रमाण लगाएं"],
          ["<strong>खरीद में प्राथमिकता</strong> (L1+15% तक कीमत मिलाने का मौका)", "MSE", "अगर आपकी कीमत L1 से 15% के भीतर है और आप L1 कीमत मान लेते हैं"],
          ["<strong>25% सरकारी खरीद MSE से</strong> (इसमें 4% SC/ST और 3% महिला उद्यमी)", "MSE", "सरकार का सालाना लक्ष्य; विभाग इसे पूरा करने के लिए MSE को प्राथमिकता देते हैं"],
          ["<strong>पिछले अनुभव/टर्नओवर की शर्त में छूट</strong>", "DPIIT मान्यता प्राप्त स्टार्टअप", "गुणवत्ता और तकनीकी शर्तें पूरी करनी होती हैं; टेंडर में लिखा हो तभी"],
        ],
      },
      callout: { kind: "warn", html: "ये छूटें सरकारी खरीद नीति (MSE Public Procurement Policy) से आती हैं, पर हर टेंडर में साफ लिखा होता है कि कौन सी छूट लागू है। निर्माण कार्य (works contracts) में कई बार ये छूट नहीं मिलतीं। टेंडर का <strong>NIT</strong> और शर्तें ध्यान से पढ़ें।" },
    },
    {
      id: "boli",
      title: "टेंडर में बोली कैसे लगाएं (स्टेप बाय स्टेप)",
      steps: [
        "पोर्टल पर अपने काम/ज़िले के हिसाब से टेंडर खोजें; <strong>NIT</strong> (Notice Inviting Tender) और पूरा टेंडर दस्तावेज़ डाउनलोड करें।",
        "पात्रता की शर्तें पढ़ें: अनुभव, टर्नओवर, लाइसेंस, कागज़ और <strong>आखिरी तारीख/समय</strong>।",
        "शंका हो तो <strong>Pre-bid meeting</strong> या पोर्टल पर सवाल (clarification) का इस्तेमाल करें।",
        "<strong>तकनीकी बोली (Technical Bid)</strong>: मांगे गए सभी कागज़ स्कैन करके DSC से अपलोड करें।",
        "<strong>कीमत बोली (Financial Bid / BOQ)</strong>: टेंडर में दी गई Excel/BOQ फाइल में ही दरें भरें; फॉर्मेट न बदलें।",
        "EMD ऑनलाइन जमा करें, या छूट हो तो उद्यम प्रमाणपत्र लगाएं; टेंडर में अनुमति हो तो <strong>Bid Security Declaration</strong> दें।",
        "आखिरी समय से पहले बोली <strong>Freeze/Submit</strong> करें और रसीद डाउनलोड करें।",
        "पहले तकनीकी बोली खुलती है; पास होने वालों की कीमत बोली खुलती है और सबसे कम कीमत वाला <strong>L1</strong> होता है।",
        "चुने जाने पर <strong>LoA/वर्क ऑर्डर</strong> मिलता है; परफॉर्मेंस सिक्योरिटी जमा करके समय पर सप्लाई/काम करें।",
      ],
    },
    {
      id: "galtiyan",
      title: "बोली रिजेक्ट होने की आम गलतियां",
      list: [
        "आखिरी 1-2 घंटे में अपलोड करना: पोर्टल धीमा होता है और DSC/इंटरनेट दिक्कत से बोली छूट जाती है। कम से कम एक दिन पहले जमा करें।",
        "मांगा गया कोई एक कागज़ छूट जाना, या बिना हस्ताक्षर/मुहर के अपलोड करना।",
        "BOQ फाइल का फॉर्मेट बदल देना या दर गलत खाने में भरना।",
        "DSC की वैधता खत्म होना या गलत DSC (सिर्फ साइनिंग, जबकि एन्क्रिप्शन मांगा था)।",
        "EMD छूट का प्रमाण (उद्यम) न लगाना या उस सामान का उद्यम में न होना।",
        "बहुत कम (unrealistic) दर भरना; बाद में काम पूरा न हो पाने पर ब्लैकलिस्ट होने का खतरा।",
      ],
    },
    {
      id: "bhugtan",
      title: "भुगतान कब मिलता है और देरी हो तो क्या करें",
      list: [
        "GeM पर सामान पहुंचने के बाद खरीदार विभाग <strong>CRAC</strong> (प्राप्ति प्रमाण) जारी करता है, उसके बाद भुगतान की प्रक्रिया चलती है।",
        "ई-टेंडर में भुगतान अनुबंध की शर्तों के अनुसार बिल जमा करने पर होता है।",
        "MSE को भुगतान में देरी हो तो <strong>MSME समाधान</strong> पोर्टल पर शिकायत की जा सकती है; MSE से खरीद का भुगतान आमतौर पर 45 दिन के भीतर करने का नियम है।",
        "GeM पर भुगतान में देरी की शिकायत GeM के Incident Management में दर्ज करें।",
      ],
    },
    {
      id: "shuruat",
      title: "पहला टेंडर जीतने के लिए सुझाव",
      list: [
        "शुरुआत <strong>GeM के छोटे ऑर्डर</strong> से करें: अपने इलाके के सामान का कैटलॉग सही कीमत पर डालें।",
        "अपने ज़िले के विभागों (नगर पालिका, स्कूल, अस्पताल, पुलिस) के टेंडर पर नज़र रखें; वहां बड़ी कंपनियां कम आती हैं।",
        "पहले कुछ ऑर्डर समय पर और अच्छी क्वालिटी में पूरे करें; यही अनुभव प्रमाण आगे बड़े टेंडर में काम आता है।",
        "टेंडर अलर्ट के लिए पोर्टल पर अपनी कैटेगरी और राज्य सेव करें।",
      ],
    },
  ],
  official: [
    { href: "https://gem.gov.in/", title: "GeM: Government e Marketplace", note: "सेलर रजिस्ट्रेशन, कैटलॉग, बिड" },
    { href: "https://eprocure.gov.in/eprocure/app", title: "CPPP: केंद्रीय सार्वजनिक खरीद पोर्टल", note: "ई-टेंडर" },
    { href: "https://udyamregistration.gov.in/", title: "उद्यम पंजीकरण", note: "MSME, मुफ्त" },
    { href: "https://samadhaan.msme.gov.in/", title: "MSME समाधान", note: "भुगतान में देरी की शिकायत" },
  ],
  faq: [
    { q: "GeM पर रजिस्ट्रेशन की फीस कितनी है?", a: "GeM पर सेलर रजिस्ट्रेशन और कैटलॉग मंज़ूरी मुफ्त है। इसके लिए किसी एजेंट को पैसे देने की ज़रूरत नहीं।" },
    { q: "सरकारी टेंडर भरने के लिए कौन सा DSC चाहिए?", a: "ई-टेंडर पोर्टल (CPPP और राज्य पोर्टल) पर Class 3 DSC (USB टोकन) चाहिए; कई टेंडर साइनिंग के साथ एन्क्रिप्शन वाला DSC भी मांगते हैं।" },
    { q: "क्या MSME को EMD नहीं भरना पड़ता?", a: "उद्यम पंजीकृत सूक्ष्म और लघु उद्यमों को सरकारी नीति के तहत आमतौर पर टेंडर फीस और EMD से छूट मिलती है, पर हर टेंडर में यह शर्त देखें; निर्माण कार्यों में कई बार छूट नहीं होती।" },
    { q: "L1 का मतलब क्या है?", a: "तकनीकी रूप से योग्य बोलियों में सबसे कम कीमत वाली बोली को L1 कहते हैं; आमतौर पर काम उसी को मिलता है।" },
    { q: "क्या बिना GST के टेंडर भर सकते हैं?", a: "ज़्यादातर टेंडर और GeM पर GST ज़रूरी है। कुछ छोटी सेवाओं में छूट हो सकती है, पर पहले टेंडर की शर्त देखें।" },
    { q: "नए कारोबार (अनुभव नहीं) को टेंडर कैसे मिले?", a: "GeM के छोटे ऑर्डर से शुरू करें। DPIIT मान्यता प्राप्त स्टार्टअप को कई टेंडर में पिछले अनुभव/टर्नओवर की शर्त में छूट मिलती है।" },
    { q: "सरकारी भुगतान में देरी हो तो क्या करें?", a: "MSE हैं तो MSME समाधान पोर्टल पर शिकायत करें; GeM ऑर्डर के लिए GeM की शिकायत सुविधा इस्तेमाल करें।" },
  ],
  related: [
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "MSME पंजीकरण, मुफ्त" },
    { href: "/service/gst.html", emoji: "🧾", title: "GST पंजीकरण", text: "टेंडर के लिए ज़रूरी" },
    { href: "/service/pmegp-loan-yojana.html", emoji: "🏦", title: "PMEGP लोन", text: "नए काम पर सब्सिडी" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🛡️", title: "CGTMSE", text: "बिना गिरवी लोन" },
  ],
  aside: [
    { href: "https://gem.gov.in/", label: "🛒 GeM पर रजिस्ट्रेशन" },
    { href: "https://eprocure.gov.in/eprocure/app", label: "📑 CPPP ई-टेंडर" },
  ],
};
