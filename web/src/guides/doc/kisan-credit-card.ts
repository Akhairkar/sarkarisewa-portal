import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; pib.gov.in, rbi.org.in and agriwelfare.gov.in
// not opened from the sandbox, search extracts used): iasgyan.in,
// shankariasparliament.com, drishtiias.com, compass.rauias.com (Modified
// Interest Subvention Scheme continued for 2025-26 with ₹15,640 crore;
// short-term crop loans up to ₹3 lakh through KCC at 7%; 1.5% subvention to
// lenders; 3% prompt repayment incentive -> effective 4%; allied activities
// benefit up to ₹2 lakh; Budget 2025-26 announced raising the MISS limit from
// ₹3 lakh to ₹5 lakh, operationalisation not confirmed), dailypioneer.com,
// freepressjournal.in, visionias.in (RBI raised collateral-free agriculture
// loan limit from ₹1.6 lakh to ₹2 lakh from 1 Jan 2025; KCC loans with
// tie-up arrangements collateral waived up to ₹3 lakh), outlookmoney.com,
// outlookbusiness.com, taxmann.com (RBI revised KCC directions 2026, ₹2 lakh
// limit unchanged, effective for loans from 1 Jan 2027). Processing charges
// and the exact current MISS ceiling are left general.
export const kisanCreditCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "किसान क्रेडिट कार्ड" },
  ],
  docHi: "किसान क्रेडिट कार्ड",
  title: "किसान क्रेडिट कार्ड (KCC) 2026",
  description: "किसानों को अल्पकालिक खेती, कटाई-बाद, और संबद्ध कृषि खर्चों के लिए रियायती ब्याज दर पर ऋण सुविधा देने वाली योजना। ब्याज 7%, समय पर चुकाने पर 4%, बिना गारंटी ₹2 लाख तक।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "किसान क्रेडिट कार्ड (KCC): 4% ब्याज पर खेती का लोन, कौन पात्र, कैसे बनवाएं",
  lead: "किसान क्रेडिट कार्ड (KCC) बैंक से खेती, पशुपालन और मछली पालन के कामों के लिए सस्ता अल्पकालिक लोन लेने की व्यवस्था है। केंद्र की ब्याज छूट योजना (MISS) में ₹3 लाख तक के लोन पर ब्याज 7% है, और समय पर चुकाने पर 3% अतिरिक्त छूट से असल ब्याज 4% रह जाता है। RBI के नियम से ₹2 लाख तक के कृषि लोन पर बैंक ज़मीन या दूसरी गारंटी नहीं मांग सकते।",
  facts: [
    ["ब्याज", "7%; समय पर चुकाने पर 4%"],
    ["ब्याज छूट की सीमा", "₹3 लाख तक का अल्पकालिक लोन"],
    ["बिना गारंटी", "₹2 लाख तक (1 जनवरी 2025 से)"],
    ["कहां बनता है", "सरकारी/निजी बैंक, ग्रामीण बैंक, सहकारी बैंक"],
  ],
  sections: [
    {
      id: "fayde",
      title: "KCC के फायदे",
      list: [
        "<strong>सस्ता ब्याज:</strong> ₹3 लाख तक के फसल लोन पर 7%; समय पर चुकाने पर 3% प्रोत्साहन से असल दर 4%।",
        "<strong>पशुपालन और मछली पालन:</strong> इन कामों के लिए भी KCC बनता है; ब्याज छूट का लाभ ₹2 लाख तक।",
        "<strong>बिना गारंटी:</strong> ₹2 लाख तक के कृषि लोन पर कोलैटरल नहीं (RBI, 1 जनवरी 2025 से)। फसल बिक्री के टाई-अप वाले KCC लोन में बैंक ₹3 लाख तक गारंटी छोड़ सकते हैं।",
        "<strong>ज़रूरत के हिसाब से पैसा:</strong> तय सीमा के अंदर जब चाहें निकालें और जमा करें; ब्याज सिर्फ इस्तेमाल की गई रकम पर।",
      ],
      callout: { kind: "info", html: "बजट 2025-26 में ब्याज छूट वाले लोन की सीमा ₹3 लाख से ₹5 लाख करने की घोषणा हुई थी। यह आपके बैंक में लागू हुई या नहीं, बैंक शाखा से पूछें।" },
    },
    {
      id: "patrata",
      title: "कौन बनवा सकता है",
      list: [
        "अपनी ज़मीन पर खेती करने वाले किसान (अकेले या संयुक्त)",
        "बटाईदार, किरायेदार किसान और मौखिक पट्टेदार",
        "स्वयं सहायता समूह (SHG) या संयुक्त देयता समूह (JLG) के किसान",
        "पशुपालक, मुर्गीपालक और मछली पालने वाले",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "भरा हुआ KCC आवेदन फॉर्म (बैंक में या PM-KISAN पोर्टल पर एक पन्ने का फॉर्म)",
        "आधार, पैन (अगर हो) और पासपोर्ट साइज़ फोटो",
        "ज़मीन के कागज़ (खसरा-खतौनी/7-12/RTC) या खेती करने का प्रमाण",
        "बोई जाने वाली फसल और खेती के रकबे की जानकारी",
      ],
    },
    {
      id: "kaise",
      title: "KCC कैसे बनवाएं",
      steps: [
        "जिस बैंक में खाता है (या नज़दीकी ग्रामीण/सहकारी बैंक) की शाखा में KCC फॉर्म लें।",
        "PM-KISAN लाभार्थी हैं तो <a href=\"https://pmkisan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmkisan.gov.in</a> से KCC फॉर्म डाउनलोड करके बैंक में जमा कर सकते हैं।",
        "फॉर्म के साथ कागज़ जमा करें। बैंक ज़मीन और फसल के हिसाब से लोन सीमा तय करता है।",
        "मंज़ूरी के बाद KCC खाता खुलता है और RuPay कार्ड मिलता है।",
      ],
      callout: { kind: "warn", html: "KCC बनवाने के लिए किसी एजेंट को पैसा न दें। ₹2 लाख तक के लोन पर बैंक ज़मीन गिरवी या गारंटर नहीं मांग सकता; मांगे तो बैंक के शिकायत अधिकारी या <a href=\"https://cms.rbi.org.in/\" target=\"_blank\" rel=\"noopener nofollow\">RBI शिकायत पोर्टल</a> पर शिकायत करें।" },
    },
    {
      id: "chukana",
      title: "समय पर चुकाना क्यों ज़रूरी",
      list: [
        "फसल लोन तय समय (आम तौर पर फसल कटने के बाद) में चुकाने पर ही 3% की अतिरिक्त छूट मिलती है।",
        "देर होने पर सामान्य बैंक दर से ब्याज लग सकता है और CIBIL स्कोर खराब होता है।",
        "प्राकृतिक आपदा में फसल खराब हो तो बैंक से लोन के पुनर्गठन के बारे में पूछें; फसल बीमा (PMFBY) भी कराएं।",
      ],
    },
  ],
  official: [
    { href: "https://pmkisan.gov.in/", title: "PM-KISAN पोर्टल", note: "KCC फॉर्म डाउनलोड" },
    { href: "https://www.rbi.org.in/", title: "भारतीय रिज़र्व बैंक (KCC के नियम)" },
    { href: "https://agriwelfare.gov.in/", title: "कृषि एवं किसान कल्याण विभाग" },
  ],
  faq: [
    { q: "KCC पर कितना ब्याज लगता है?", a: "₹3 लाख तक के अल्पकालिक फसल लोन पर 7%। समय पर चुकाने पर 3% प्रोत्साहन मिलता है, यानी असल ब्याज 4%।" },
    { q: "बिना गारंटी कितना लोन मिल सकता है?", a: "RBI के नियम से 1 जनवरी 2025 से ₹2 लाख तक के कृषि लोन पर कोलैटरल नहीं लिया जाता।" },
    { q: "क्या बिना ज़मीन वाले किसान KCC बनवा सकते हैं?", a: "हां, बटाईदार, किरायेदार किसान, SHG/JLG सदस्य, पशुपालक और मछली पालने वाले भी KCC के लिए पात्र हैं। बैंक खेती का प्रमाण मांग सकता है।" },
    { q: "KCC की सीमा ₹5 लाख हुई है क्या?", a: "बजट 2025-26 में ब्याज छूट वाले लोन की सीमा ₹5 लाख करने की घोषणा हुई थी। लागू होने की पक्की जानकारी अपने बैंक से लें।" },
    { q: "KCC के लिए कहां आवेदन करें?", a: "किसी भी व्यावसायिक बैंक, क्षेत्रीय ग्रामीण बैंक या सहकारी बैंक की शाखा में। PM-KISAN लाभार्थी पोर्टल से फॉर्म डाउनलोड कर सकते हैं।" },
  ],
  related: [
    { href: "/service/pm-kisan.html", emoji: "🌾", title: "पीएम किसान", text: "सालाना ₹6,000 की सहायता" },
    { href: "/service/pm-fasal-bima-yojana.html", emoji: "🌧️", title: "प्रधानमंत्री फसल बीमा योजना", text: "फसल नुकसान का बीमा" },
    { href: "/service/pm-kisan-maan-dhan-yojana.html", emoji: "👴", title: "पीएम किसान मानधन", text: "किसानों की पेंशन" },
    { href: "/service/ka-bhoomi-rtc.html", emoji: "📜", title: "कर्नाटक भूमि RTC", text: "ज़मीन का रिकॉर्ड" },
    { href: "/service/credit-score-report.html", emoji: "📈", title: "क्रेडिट स्कोर", text: "CIBIL रिपोर्ट देखें" },
  ],
  aside: [
    { href: "https://pmkisan.gov.in/", label: "🌾 PM-KISAN पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
