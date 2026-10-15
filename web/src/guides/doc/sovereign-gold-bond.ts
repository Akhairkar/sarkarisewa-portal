import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): rbi.org.in Sovereign Gold Bond scheme
// notifications and FAQs (Government of India bond issued by RBI; 8-year
// tenor, premature redemption from the 5th year on interest dates; 2.5% a
// year on the issue price paid half-yearly; minimum 1 gram, maximum 4 kg for
// individuals/HUF and 20 kg for trusts per financial year; Rs 50/gram
// discount for online applications; redemption price = simple average of
// IBJA closing price of 999 gold for the previous 3 business days; interest
// taxable), Finance Ministry post-Budget briefing 1 Feb 2025 and reports
// (no tranche after Feb 2024 / SGB 2023-24 Series IV; 67 tranches since Nov
// 2015; scheme effectively closed for new issues), Finance Bill 2026 as
// reported by NISM, Taxmann, Moneylife (from 1 Apr 2026 the capital-gains
// exemption on redemption is limited to original subscribers who hold till
// redemption; secondary-market buyers taxed). Premature-redemption tax
// treatment is disputed among commentators, so not stated as settled.
export const sovereignGoldBond: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "सॉवरेन गोल्ड बॉन्ड" },
  ],
  docHi: "सॉवरेन गोल्ड बॉन्ड",
  title: "सॉवरेन गोल्ड बॉन्ड (SGB) 2026",
  description: "सोने के ग्राम में मूल्यांकित सरकारी प्रतिभूतियां, जो फिजिकल सोना रखने का विकल्प देती हैं, आवधिक ब्याज के साथ और भंडारण के जोखिम के बिना।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "सॉवरेन गोल्ड बॉन्ड (SGB) 2026: नई किस्त बंद, ब्याज, रिडेम्पशन और टैक्स के नए नियम",
  lead: "सॉवरेन गोल्ड बॉन्ड (SGB) भारत सरकार का बॉन्ड है जिसे RBI जारी करता था; इसकी कीमत ग्राम सोने में तय होती है और 2.5% सालाना ब्याज मिलता है। <strong>फरवरी 2024 के बाद कोई नई किस्त नहीं आई</strong> और सरकार ने 2025 में संकेत दिया कि योजना नई बिक्री के लिए बंद है। जिनके पास पुराने बॉन्ड हैं, उन्हें ब्याज और रिडेम्पशन पहले की शर्तों पर मिलते रहेंगे। 1 अप्रैल 2026 से रिडेम्पशन पर टैक्स छूट सिर्फ मूल खरीदार को मिलती है, शेयर बाज़ार से खरीदने वालों को नहीं।",
  facts: [
    ["जारीकर्ता", "RBI (भारत सरकार की ओर से)"],
    ["नई किस्त", "फरवरी 2024 के बाद नहीं"],
    ["ब्याज", "2.5% सालाना, हर 6 महीने (टैक्स लगता है)"],
    ["अवधि", "8 साल; 5वें साल से समय से पहले रिडेम्पशन"],
  ],
  notice: "नई SGB किस्त अभी नहीं मिल रही। \"नया SGB खरीदें\" जैसे संदेशों से सावधान रहें; पुराने बॉन्ड सिर्फ शेयर बाज़ार (NSE/BSE) पर डीमैट खाते से खरीदे-बेचे जा सकते हैं।",
  sections: [
    {
      id: "kya-hai",
      title: "SGB क्या है",
      list: [
        "<strong>सोने के बदले बॉन्ड:</strong> हर बॉन्ड 1 ग्राम सोने के बराबर। रिडेम्पशन पर उस समय के सोने के भाव से पैसा मिलता है, सोना नहीं।",
        "<strong>ब्याज:</strong> खरीद मूल्य पर 2.5% सालाना, हर 6 महीने बैंक खाते में। यह ब्याज आपकी आय में जुड़ता है और स्लैब के अनुसार टैक्स लगता है।",
        "<strong>सीमा:</strong> एक वित्त वर्ष में कम से कम 1 ग्राम; व्यक्ति/HUF के लिए अधिकतम 4 किलो, ट्रस्ट के लिए 20 किलो।",
        "<strong>रूप:</strong> डीमैट खाते में या RBI बॉन्ड लेजर/होल्डिंग सर्टिफिकेट के रूप में। बैंक लोन में गिरवी भी रखा जा सकता है।",
      ],
    },
    {
      id: "band",
      title: "क्या योजना बंद हो गई?",
      list: [
        "नवंबर 2015 से फरवरी 2024 तक कुल 67 किस्तें आईं। आखिरी किस्त SGB 2023-24 सीरीज़ IV (फरवरी 2024) थी।",
        "1 फरवरी 2025 के बजट के बाद वित्त मंत्री ने पूछे जाने पर कहा कि योजना \"एक तरह से\" बंद है; वित्त सचिव ने इसे सरकार के लिए महंगा कर्ज़ बताया।",
        "पुराने बॉन्ड पर ब्याज, समय से पहले रिडेम्पशन और 8 साल पूरे होने पर भुगतान पहले की शर्तों पर जारी है।",
      ],
    },
    {
      id: "redemption",
      title: "रिडेम्पशन (पैसा वापस) कैसे मिलता है",
      steps: [
        "<strong>8 साल पूरे होने पर:</strong> पैसा अपने-आप उस बैंक खाते में आता है जो बॉन्ड के साथ दर्ज है। खाता बदल गया हो तो पहले बैंक/डिपॉज़िटरी में अपडेट करें।",
        "<strong>5 साल बाद समय से पहले:</strong> ब्याज भुगतान की तारीख पर निकाल सकते हैं। RBI हर बार तारीखें और कीमत घोषित करता है; आवेदन उसी बैंक/डाकघर/ब्रोकर से करें जिससे खरीदा था, तय विंडो के अंदर।",
        "<strong>कीमत:</strong> रिडेम्पशन से पहले के 3 कारोबारी दिनों में 999 शुद्धता वाले सोने के IBJA बंद भाव का औसत।",
        "<strong>बाज़ार में बेचना:</strong> डीमैट में रखे बॉन्ड NSE/BSE पर कभी भी बेचे जा सकते हैं, पर भाव बाज़ार के हिसाब से कम-ज़्यादा होता है।",
      ],
    },
    {
      id: "tax",
      title: "टैक्स: 2026 से क्या बदला",
      list: [
        "<strong>ब्याज:</strong> पहले की तरह टैक्स लगता है।",
        "<strong>रिडेम्पशन पर पूंजीगत लाभ:</strong> वित्त विधेयक 2026 के अनुसार 1 अप्रैल 2026 से छूट सिर्फ <strong>मूल खरीदार</strong> को है, जिसने RBI की किस्त में खरीदा और रिडेम्पशन तक रखा।",
        "<strong>शेयर बाज़ार से खरीदे बॉन्ड:</strong> रिडेम्पशन पर भी पूंजीगत लाभ टैक्स लगेगा।",
        "<strong>बाज़ार में बेचने पर:</strong> 12 महीने से ज़्यादा रखने पर लंबी अवधि का पूंजीगत लाभ टैक्स, कम पर स्लैब के अनुसार।",
      ],
      callout: { kind: "warn", html: "5 साल बाद समय से पहले रिडेम्पशन पर टैक्स छूट को लेकर जानकारों की राय अलग है। बड़ी रकम हो तो किसी CA से सलाह लें।" },
    },
  ],
  official: [
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक (RBI)", note: "SGB अधिसूचनाएं, FAQ, रिडेम्पशन कीमत; संपर्क केंद्र 14448" },
    { href: "https://www.incometax.gov.in/", title: "आयकर विभाग" },
  ],
  faq: [
    { q: "क्या अभी नया सॉवरेन गोल्ड बॉन्ड खरीद सकते हैं?", a: "RBI की कोई नई किस्त फरवरी 2024 के बाद नहीं आई। पुराने बॉन्ड डीमैट खाते से NSE/BSE पर बाज़ार भाव पर खरीदे जा सकते हैं, पर 1 अप्रैल 2026 से ऐसे बॉन्ड पर रिडेम्पशन टैक्स-मुक्त नहीं है।" },
    { q: "SGB पर कितना ब्याज मिलता है?", a: "खरीद मूल्य पर 2.5% सालाना, हर 6 महीने। यह ब्याज टैक्स योग्य है।" },
    { q: "SGB कितने साल का होता है?", a: "8 साल। 5 साल पूरे होने के बाद ब्याज की तारीखों पर समय से पहले निकाल सकते हैं।" },
    { q: "रिडेम्पशन की कीमत कैसे तय होती है?", a: "रिडेम्पशन से पहले के 3 कारोबारी दिनों के 999 शुद्धता वाले सोने के IBJA बंद भाव के औसत से। RBI हर बार कीमत घोषित करता है।" },
    { q: "बॉन्ड रखने वाले की मृत्यु हो जाए तो?", a: "नॉमिनी या कानूनी वारिस उसी बैंक/डाकघर/डिपॉज़िटरी में मृत्यु प्रमाण पत्र और ज़रूरी कागज़ देकर बॉन्ड अपने नाम करवा सकते हैं या रिडेम्पशन ले सकते हैं।" },
  ],
  related: [
    { href: "/service/sovereign-gold-bond-online.html", emoji: "💻", title: "SGB ऑनलाइन", text: "डीमैट, बाज़ार में खरीद-बिक्री, रिडेम्पशन" },
    { href: "/service/ais-annual-information-statement.html", emoji: "🧾", title: "AIS / TIS", text: "SGB ब्याज आयकर में" },
    { href: "/service/income-tax-return-filing.html", emoji: "📑", title: "ITR फाइलिंग", text: "ब्याज और पूंजीगत लाभ दिखाएं" },
    { href: "/service/sukanya-samriddhi-yojana.html", emoji: "👧", title: "सुकन्या समृद्धि योजना", text: "बेटियों के लिए सरकारी बचत" },
  ],
  aside: [
    { href: "https://www.rbi.org.in/", label: "🏦 RBI वेबसाइट" },
    { href: "/service/sovereign-gold-bond-online.html", label: "💻 SGB ऑनलाइन गाइड" },
  ],
};
