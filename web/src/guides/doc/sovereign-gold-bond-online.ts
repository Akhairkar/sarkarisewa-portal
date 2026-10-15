import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): rbi.org.in SGB notifications/FAQs (issued
// by RBI for the Government of India; sold through banks, designated post
// offices, SHCIL and NSE/BSE; Rs 50/gram discount for online application and
// digital payment; 2.5% a year interest paid half-yearly; 8-year tenor with
// premature redemption from the 5th year; redemption price from IBJA 999
// gold average of 3 previous business days; bonds in demat form tradable on
// exchanges), Finance Ministry post-Budget briefing 1 Feb 2025 and reports
// (no tranche after Feb 2024), Finance Bill 2026 as reported by NISM /
// Taxmann / Moneylife (from 1 Apr 2026 redemption exemption only for original
// subscribers; exchange buyers taxed), National Herald 2026 (33 tranches of
// 2018-2021 eligible for premature redemption Apr-Sep 2026). Old description
// promised "100% tax free capital gain" for everyone and was rewritten.
export const sovereignGoldBondOnline: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "SGB ऑनलाइन" },
  ],
  docHi: "SGB ऑनलाइन",
  title: "सोवरेन गोल्ड बॉन्ड आरबीआई (Sovereign Gold Bond SGB)",
  description: "RBI का सोवरेन गोल्ड बॉन्ड: नई किस्त फरवरी 2024 से बंद। डीमैट से NSE/BSE पर खरीद-बिक्री, ऑनलाइन रिडेम्पशन, 2.5% ब्याज और 2026 के टैक्स नियम।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "सोवरेन गोल्ड बॉन्ड ऑनलाइन: अब डीमैट से खरीद-बिक्री और रिडेम्पशन कैसे करें",
  lead: "RBI भारत सरकार की ओर से सोवरेन गोल्ड बॉन्ड (SGB) किस्तों में बेचता था, और ऑनलाइन आवेदन पर ₹50 प्रति ग्राम की छूट मिलती थी। <strong>फरवरी 2024 के बाद कोई नई किस्त नहीं आई</strong>, इसलिए अब बैंक के नेट बैंकिंग से नया SGB नहीं खरीदा जा सकता। ऑनलाइन आप सिर्फ डीमैट खाते से <strong>NSE/BSE पर पुराने बॉन्ड</strong> खरीद-बेच सकते हैं, और अपने बॉन्ड का समय से पहले रिडेम्पशन बैंक/ब्रोकर से करवा सकते हैं।",
  facts: [
    ["नई किस्त", "फरवरी 2024 के बाद नहीं"],
    ["ऑनलाइन खरीद", "डीमैट से NSE/BSE पर (बाज़ार भाव)"],
    ["ब्याज", "2.5% सालाना, हर 6 महीने"],
    ["टैक्स छूट (रिडेम्पशन)", "1.4.2026 से सिर्फ मूल खरीदार को"],
  ],
  notice: "जो वेबसाइट या ऐप \"नया SGB, RBI रेट पर\" बेचने का दावा करे, उससे सावधान रहें। RBI की कोई नई किस्त अभी खुली नहीं है।",
  sections: [
    {
      id: "kharid",
      title: "अब SGB ऑनलाइन कैसे खरीदें",
      steps: [
        "<strong>डीमैट और ट्रेडिंग खाता:</strong> किसी SEBI-पंजीकृत ब्रोकर या बैंक के साथ डीमैट खाता खोलें (PAN और KYC ज़रूरी)।",
        "<strong>सीरीज़ खोजें:</strong> ब्रोकर ऐप में \"SGB\" खोजें। हर सीरीज़ का अलग नाम, ब्याज की तारीख और परिपक्वता की तारीख होती है।",
        "<strong>भाव और मात्रा देखें:</strong> कई सीरीज़ में रोज़ कम सौदे होते हैं, इसलिए भाव सोने के भाव से ऊपर-नीचे हो सकता है। लिमिट ऑर्डर लगाएं।",
        "<strong>खरीद के बाद:</strong> बॉन्ड डीमैट में आ जाता है; ब्याज उसी बैंक खाते में आता है जो डीमैट से जुड़ा है।",
      ],
      callout: { kind: "warn", html: "1 अप्रैल 2026 से शेयर बाज़ार से खरीदे गए SGB पर <strong>रिडेम्पशन के समय भी पूंजीगत लाभ टैक्स</strong> लगता है (वित्त विधेयक 2026)। टैक्स-मुक्त रिडेम्पशन सिर्फ उस मूल खरीदार को है जिसने RBI किस्त में खरीदा था।" },
    },
    {
      id: "redemption",
      title: "समय से पहले रिडेम्पशन (5 साल बाद)",
      steps: [
        "<strong>RBI की सूचना देखें:</strong> RBI हर सीरीज़ की समय से पहले रिडेम्पशन की तारीख और प्रति ग्राम कीमत घोषित करता है। 2026 में 2018-2021 की कई सीरीज़ इसके लिए पात्र हुईं।",
        "<strong>जहां से खरीदा वहीं आवेदन:</strong> बैंक/डाकघर से खरीदा हो तो वहीं; डीमैट में हो तो अपने ब्रोकर/डिपॉज़िटरी पार्टिसिपेंट से। कई बैंक नेट बैंकिंग में यह विकल्प देते हैं।",
        "<strong>तय विंडो में अनुरोध:</strong> ब्याज भुगतान की तारीख से पहले की तय अवधि में अनुरोध देना होता है; देर होने पर अगली ब्याज तारीख तक रुकना पड़ता है।",
        "<strong>पैसा बैंक खाते में:</strong> रिडेम्पशन की तारीख पर रकम दर्ज बैंक खाते में आती है।",
      ],
    },
    {
      id: "basics",
      title: "SGB के मूल नियम",
      list: [
        "1 बॉन्ड = 1 ग्राम सोना; रिडेम्पशन पर सोना नहीं, पैसा मिलता है।",
        "ब्याज 2.5% सालाना (खरीद मूल्य पर), हर 6 महीने; ब्याज पर टैक्स लगता है।",
        "अवधि 8 साल; 5वें साल से ब्याज की तारीखों पर समय से पहले निकासी।",
        "रिडेम्पशन कीमत = पिछले 3 कारोबारी दिनों के 999 सोने के IBJA बंद भाव का औसत।",
      ],
      callout: { kind: "info", html: 'योजना, टैक्स और बंद होने की पूरी जानकारी हमारी <a href="/service/sovereign-gold-bond.html">सॉवरेन गोल्ड बॉन्ड गाइड</a> में है।' },
    },
  ],
  official: [
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक (RBI)", note: "SGB अधिसूचनाएं, रिडेम्पशन कीमत; संपर्क केंद्र 14448" },
    { href: "https://www.nseindia.com/", title: "NSE" },
    { href: "https://www.bseindia.com/", title: "BSE" },
  ],
  faq: [
    { q: "क्या नेट बैंकिंग से नया SGB खरीद सकते हैं?", a: "नहीं। नई किस्त फरवरी 2024 के बाद नहीं आई, इसलिए बैंक में नया आवेदन नहीं होता। पुराने बॉन्ड डीमैट खाते से NSE/BSE पर खरीदे जा सकते हैं।" },
    { q: "ऑनलाइन ₹50 प्रति ग्राम छूट अब मिलती है?", a: "यह छूट RBI की किस्त में ऑनलाइन आवेदन पर थी। नई किस्त न होने से अब यह लागू नहीं है; बाज़ार में भाव ही मायने रखता है।" },
    { q: "बाज़ार से खरीदा SGB 8 साल बाद टैक्स-मुक्त होगा?", a: "वित्त विधेयक 2026 के अनुसार 1 अप्रैल 2026 से नहीं। रिडेम्पशन पर टैक्स छूट सिर्फ मूल खरीदार को है।" },
    { q: "समय से पहले रिडेम्पशन का अनुरोध कहां दें?", a: "जहां से बॉन्ड खरीदा या जहां रखा है: बैंक, डाकघर या डीमैट वाला ब्रोकर/डिपॉज़िटरी पार्टिसिपेंट, RBI की घोषित विंडो के अंदर।" },
  ],
  related: [
    { href: "/service/sovereign-gold-bond.html", emoji: "🪙", title: "सॉवरेन गोल्ड बॉन्ड", text: "योजना, टैक्स और बंद होने की जानकारी" },
    { href: "/service/ais-annual-information-statement.html", emoji: "🧾", title: "AIS / TIS", text: "SGB ब्याज आयकर में" },
    { href: "/service/income-tax-return-filing.html", emoji: "📑", title: "ITR फाइलिंग", text: "ब्याज और पूंजीगत लाभ दिखाएं" },
  ],
  aside: [
    { href: "https://www.rbi.org.in/", label: "🏦 RBI वेबसाइट" },
    { href: "/service/sovereign-gold-bond.html", label: "🪙 SGB की पूरी गाइड" },
  ],
};
