import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): rbi.org.in notification Id 10590 (1 Sep 2016,
// effective 1 Jan 2017: every CIC must give individuals one free full credit
// report incl. credit score once a calendar year, electronically, after
// authentication; procedure on CIC website), RBI circular RBI/2024-25/60 (Aug
// 2024, from 1 Jan 2025 credit data updated fortnightly: 15th and month-end,
// submitted within 7 days), RBI/2023-24/72 (26 Oct 2023: complaints to be
// resolved in 30 days — 21 days lender + 9 days CIC — else Rs 100 per calendar
// day compensation, paid within 5 working days of resolution), reported Aug
// 2026 RBI penalties on CICs for not paying this compensation (news, not
// stated as a figure). The four RBI-licensed CICs and their home pages are
// well-established; no score ranges or paid-plan prices are stated.
export const creditScoreReport: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सेवाएं", href: "/services/" },
    { label: "मुफ्त क्रेडिट रिपोर्ट" },
  ],
  docHi: "मुफ्त क्रेडिट रिपोर्ट",
  title: "मुफ्त वार्षिक क्रेडिट रिपोर्ट और स्कोर 2026",
  description: "प्रत्येक व्यक्ति को RBI-अधिकृत प्रत्येक क्रेडिट ब्यूरो से प्रति वर्ष एक मुफ्त पूर्ण क्रेडिट रिपोर्ट मिलती है, जो आपका क्रेडिट स्कोर और ऋण इतिहास दिखाती है।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मुफ्त क्रेडिट रिपोर्ट और क्रेडिट स्कोर: चारों क्रेडिट ब्यूरो से हर साल कैसे लें",
  lead: "RBI के निर्देश के अनुसार भारत की हर क्रेडिट इन्फॉर्मेशन कंपनी (क्रेडिट ब्यूरो) को हर व्यक्ति को साल (जनवरी-दिसंबर) में एक बार पूरी क्रेडिट रिपोर्ट, क्रेडिट स्कोर सहित, मुफ्त देनी होती है। ऐसे चार ब्यूरो हैं: TransUnion CIBIL, Equifax, Experian और CRIF High Mark, यानी साल में चार मुफ्त रिपोर्ट। रिपोर्ट में गलती हो तो शिकायत 30 दिन में सुलझनी चाहिए, वरना ₹100 रोज़ का मुआवज़ा मिलता है।",
  facts: [
    ["मुफ्त रिपोर्ट", "हर ब्यूरो से साल में 1 (स्कोर सहित)"],
    ["क्रेडिट ब्यूरो", "CIBIL, Equifax, Experian, CRIF High Mark"],
    ["डेटा अपडेट", "हर 15 दिन (1 जनवरी 2025 से)"],
    ["शिकायत हल न हो तो", "30 दिन बाद ₹100 प्रति दिन मुआवज़ा"],
  ],
  sections: [
    {
      id: "bureau",
      title: "चारों क्रेडिट ब्यूरो और उनकी वेबसाइट",
      table: {
        head: ["क्रेडिट ब्यूरो", "वेबसाइट"],
        rows: [
          ["TransUnion CIBIL", '<a href="https://www.cibil.com/" target="_blank" rel="noopener nofollow">cibil.com</a>'],
          ["Equifax", '<a href="https://www.equifax.co.in/" target="_blank" rel="noopener nofollow">equifax.co.in</a>'],
          ["Experian", '<a href="https://www.experian.in/" target="_blank" rel="noopener nofollow">experian.in</a>'],
          ["CRIF High Mark", '<a href="https://www.crifhighmark.com/" target="_blank" rel="noopener nofollow">crifhighmark.com</a>'],
        ],
      },
      callout: { kind: "warn", html: "ब्यूरो की वेबसाइट पर पैसे वाले प्लान भी दिखते हैं। मुफ्त रिपोर्ट के लिए <strong>\"Free Annual Credit Report\"</strong> या इसी तरह का विकल्प चुनें; कार्ड से भुगतान मांगा जाए तो रुककर देखें कि आप सही विकल्प पर हैं।" },
    },
    {
      id: "kaise-len",
      title: "मुफ्त रिपोर्ट कैसे लें",
      steps: [
        "ऊपर दी गई ब्यूरो की <strong>आधिकारिक वेबसाइट</strong> खुद टाइप करके खोलें।",
        "मुफ्त वार्षिक रिपोर्ट का विकल्प चुनें और <strong>नाम, जन्म तिथि, PAN, मोबाइल, ईमेल और पता</strong> भरें।",
        "<strong>पहचान सत्यापन:</strong> OTP और कुछ मामलों में आपके लोन/कार्ड से जुड़े सवालों के जवाब देने होते हैं।",
        "रिपोर्ट <strong>ऑनलाइन/ईमेल</strong> पर मिलती है। PDF सेव कर लें।",
        "बाकी तीन ब्यूरो से भी यही करें। साल भर में अलग-अलग महीनों में लेने से अपना रिकॉर्ड बार-बार जांचना आसान होता है।",
      ],
      callout: { kind: "info", html: "जिसने कभी लोन या क्रेडिट कार्ड नहीं लिया, उसका ब्यूरो में रिकॉर्ड नहीं होता, इसलिए रिपोर्ट/स्कोर नहीं बनता। यह कोई खराबी नहीं है।" },
    },
    {
      id: "kya-dekhen",
      title: "रिपोर्ट में क्या जांचें",
      list: [
        "<strong>निजी जानकारी:</strong> नाम, जन्म तिथि, PAN, पता सही हैं या नहीं।",
        "<strong>हर लोन और कार्ड:</strong> कोई ऐसा खाता तो नहीं जो आपने कभी लिया ही नहीं (पहचान चोरी का संकेत)।",
        "<strong>बंद हो चुके लोन</strong> \"Closed\" दिख रहे हैं या नहीं; चुकाने के बाद भी बकाया तो नहीं दिख रहा।",
        "<strong>देरी (DPD) और \"Settled\"/\"Written off\"</strong> जैसे शब्द, जो स्कोर को नुकसान पहुंचाते हैं।",
        "<strong>पूछताछ (Enquiries):</strong> किन बैंकों/कंपनियों ने आपकी रिपोर्ट देखी।",
      ],
    },
    {
      id: "galti",
      title: "रिपोर्ट में गलती हो तो शिकायत कैसे करें",
      steps: [
        "जिस ब्यूरो की रिपोर्ट में गलती है, उसकी वेबसाइट पर <strong>Dispute / Raise a Dispute</strong> में शिकायत करें, या सीधे उस बैंक/कंपनी को लिखें जिसने गलत जानकारी भेजी।",
        "शिकायत नंबर और अपने सबूत (लोन बंद होने का पत्र/NOC, भुगतान रसीद) संभालकर रखें।",
        "RBI के नियम के अनुसार शिकायत <strong>30 दिन में</strong> सुलझनी चाहिए (बैंक के लिए 21 दिन, ब्यूरो के लिए 9 दिन)। देरी होने पर देरी करने वाली संस्था को <strong>₹100 प्रति दिन</strong> मुआवज़ा आपके खाते में देना होता है।",
        '30 दिन में हल न हो या जवाब से संतुष्ट न हों तो <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener nofollow">RBI CMS पोर्टल</a> पर लोकपाल (Ombudsman) में शिकायत करें।',
      ],
    },
    {
      id: "score-sudhar",
      title: "स्कोर कैसे सुधरता है",
      list: [
        "EMI और क्रेडिट कार्ड बिल हर बार तय तारीख तक भरें।",
        "क्रेडिट कार्ड की पूरी लिमिट इस्तेमाल न करें।",
        "थोड़े समय में बहुत सारे लोन/कार्ड के लिए आवेदन न करें।",
        "लोन \"सेटलमेंट\" की जगह पूरा चुकाकर बंद कराएं और NOC लें।",
        "1 जनवरी 2025 से बैंक हर 15 दिन में ब्यूरो को डेटा भेजते हैं, इसलिए सुधार पहले से जल्दी दिखता है।",
      ],
      callout: { kind: "warn", html: "\"पैसे देकर CIBIL स्कोर ठीक करवाने\" वाले एजेंटों से सावधान रहें। सही जानकारी को कोई नहीं हटा सकता; गलत जानकारी की शिकायत आप खुद मुफ्त कर सकते हैं।" },
    },
  ],
  official: [
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक (RBI)", note: "मुफ्त रिपोर्ट का निर्देश, 1 सितंबर 2016" },
    { href: "https://cms.rbi.org.in/", title: "RBI शिकायत प्रबंधन प्रणाली (लोकपाल)" },
    { href: "https://www.cibil.com/", title: "TransUnion CIBIL" },
    { href: "https://www.equifax.co.in/", title: "Equifax" },
    { href: "https://www.experian.in/", title: "Experian" },
    { href: "https://www.crifhighmark.com/", title: "CRIF High Mark" },
  ],
  faq: [
    { q: "क्या CIBIL रिपोर्ट मुफ्त मिलती है?", a: "हां। RBI के निर्देश से CIBIL समेत चारों क्रेडिट ब्यूरो को हर व्यक्ति को साल में एक बार पूरी क्रेडिट रिपोर्ट, स्कोर सहित, मुफ्त देनी होती है।" },
    { q: "साल में कितनी मुफ्त रिपोर्ट ले सकते हैं?", a: "हर ब्यूरो से जनवरी-दिसंबर में एक। चार ब्यूरो हैं, इसलिए कुल चार मुफ्त रिपोर्ट।" },
    { q: "क्या अपना स्कोर देखने से स्कोर घटता है?", a: "नहीं। खुद अपनी रिपोर्ट देखना \"सॉफ्ट\" जांच है। स्कोर पर असर तब होता है जब आप लोन/कार्ड के लिए आवेदन करते हैं और बैंक रिपोर्ट मंगाता है।" },
    { q: "रिपोर्ट में गलत लोन दिख रहा है, क्या करें?", a: "ब्यूरो की वेबसाइट पर डिस्प्यूट दर्ज करें और सबूत लगाएं। 30 दिन में हल न हो तो ₹100 प्रति दिन मुआवज़ा मिलता है और आप RBI लोकपाल (cms.rbi.org.in) में शिकायत कर सकते हैं। कोई अनजान लोन हो तो पुलिस/साइबर शिकायत भी करें।" },
    { q: "लोन चुकाने के बाद भी रिपोर्ट में बकाया दिख रहा है?", a: "बैंक से NOC लें और ब्यूरो में डिस्प्यूट करें। 1 जनवरी 2025 से डेटा हर 15 दिन अपडेट होता है, इसलिए सही होने के बाद बदलाव जल्दी दिखना चाहिए।" },
  ],
  related: [
    { href: "/service/pan-card.html", emoji: "🪪", title: "पैन कार्ड", text: "क्रेडिट रिपोर्ट के लिए PAN ज़रूरी" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "छोटे कारोबार के लिए लोन" },
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🏦", title: "CGTMSE लोन गारंटी", text: "बिना गिरवी बिज़नेस लोन" },
    { href: "/service/kisan-credit-card.html", emoji: "🌾", title: "किसान क्रेडिट कार्ड", text: "खेती के लिए सस्ता लोन" },
    { href: "/service/consumer-grievance-redressal.html", emoji: "🛡️", title: "उपभोक्ता शिकायत", text: "सेवा में कमी की शिकायत" },
  ],
  aside: [
    { href: "https://www.cibil.com/", label: "📊 CIBIL रिपोर्ट" },
    { href: "https://cms.rbi.org.in/", label: "⚖️ RBI लोकपाल शिकायत" },
  ],
};
