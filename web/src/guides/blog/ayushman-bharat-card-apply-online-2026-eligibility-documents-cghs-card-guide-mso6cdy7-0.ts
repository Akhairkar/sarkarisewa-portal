import type { DocGuide } from "../doc/types";

// Rewritten 16 Oct 2026 from the old blog post (same URL). Overlaps with
// /service/ayushman-bharat.html and /service/central-govt-health-scheme.html,
// so this post is an explainer: "Ayushman card or CGHS card - which one is for
// me", and links to both guides.
// Facts reused from verified guides (checked 15 Oct 2026):
// - web/src/guides/doc/ayushman-bharat.ts: PIB backgrounder 1 Nov 2025 (₹5 lakh
//   per family per year, launched 23 Sep 2018, cashless in empanelled
//   hospitals); PIB 1 Jan 2026 (ASHA/AWW/AWH added Feb 2024, 70+ from 29 Oct
//   2024, Ayushman App e-KYC); PIB 17 Nov 2024 (SECC 2011 criteria, no family
//   size cap, pre-existing diseases covered); helpline 14555. No application
//   form: name must be in the list (except 70+).
// - web/src/guides/doc/central-govt-health-scheme.ts and
//   cghs-pensioner-card-apply.ts: CGHS OM 28 Jun 2024 (contribution by pay
//   level ₹250/450/650/1,000 per month; lifetime card = 120 months; Bharatkosh;
//   pensioners not drawing FMA); MoHFW OM 17 Jul 2026 (Bhavishya route).
// - CGHS/ECHS/CAPF beneficiaries aged 70+ must choose one (PIB 11 Sep 2024).
// Old page's "passport photo" and "income certificate" document items were
// dropped (not part of the national process).

export const ayushmanBharatCardApplyOnline2026EligibilityDocumentsCghsCardGuideMso6cdy70: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "ब्लॉग", href: "/blog/" },
    { label: "आयुष्मान कार्ड और CGHS कार्ड" },
  ],
  docHi: "आयुष्मान कार्ड / CGHS",
  title: "आयुष्मान भारत कार्ड ऑनलाइन आवेदन 2026: पात्रता, दस्तावेज और CGHS कार्ड गाइड",
  description: "आयुष्मान भारत PM-JAY कार्ड ऑनलाइन कैसे बनता है, कौन पात्र है, कौन से दस्तावेज लगते हैं, और CGHS कार्ड से यह कैसे अलग है: किसके लिए कौन सा कार्ड।",
  published: "2026-08-08",
  modified: "2026-10-16",
  verified: "16 अक्टूबर 2026",
  h1: "आयुष्मान भारत कार्ड या CGHS कार्ड: आपके लिए कौन सा, और कैसे बनवाएं",
  lead: "आयुष्मान भारत (PM-JAY) कार्ड गरीब और वंचित परिवारों तथा 70 साल से ऊपर के सभी बुजुर्गों के लिए है; इससे सूचीबद्ध अस्पतालों में साल में ₹5 लाख तक भर्ती वाला इलाज मुफ्त मिलता है। इसमें आवेदन फॉर्म नहीं होता: परिवार का नाम सूची में हो तो आधार e-KYC से कार्ड बनता है। CGHS कार्ड सिर्फ केंद्र सरकार के कर्मचारियों और पेंशनभोगियों के लिए है, जिसमें हर महीने अंशदान देना होता है। दोनों अलग योजनाएं हैं।",
  facts: [
    ["आयुष्मान (PM-JAY)", "₹5 लाख/परिवार/साल, मुफ्त, सूची वाले परिवार + 70+"],
    ["CGHS", "केंद्र सरकार कर्मचारी/पेंशनभोगी, मासिक अंशदान"],
    ["आयुष्मान कार्ड कहां", "Ayushman App, beneficiary.nha.gov.in, अस्पताल, CSC"],
    ["हेल्पलाइन (PM-JAY)", "14555"],
  ],
  sections: [
    {
      id: "antar",
      title: "आयुष्मान और CGHS में फर्क एक नज़र में",
      table: {
        head: ["बात", "आयुष्मान भारत (PM-JAY)", "CGHS"],
        rows: [
          ["किसके लिए", "SECC 2011 सूची वाले परिवार, राज्य द्वारा जोड़े गए परिवार, ASHA/आंगनवाड़ी कार्यकर्ता, और 70+ सभी बुजुर्ग", "केंद्र सरकार के सेवारत कर्मचारी, और FMA न लेने वाले केंद्रीय पेंशनभोगी, उनके आश्रित"],
          ["खर्च", "मुफ्त", "वेतन स्तर के हिसाब से ₹250 से ₹1,000 महीना; पेंशनभोगी 120 महीने का अंशदान देकर आजीवन कार्ड"],
          ["क्या मिलता है", "भर्ती वाला इलाज, ₹5 लाख/साल तक, कैशलेस", "वेलनेस सेंटर पर OPD व दवाएं, सूचीबद्ध अस्पतालों में तय दरों पर इलाज"],
          ["कहां इलाज", "देश भर के PM-JAY सूचीबद्ध सरकारी/निजी अस्पताल", "CGHS वाले शहरों के वेलनेस सेंटर और सूचीबद्ध अस्पताल"],
          ["कार्ड कैसे", "Ayushman App / beneficiary.nha.gov.in पर e-KYC", "cghs.mohfw.gov.in (कर्मचारी विभाग के ज़रिए; पेंशनभोगी खुद या Bhavishya पोर्टल से)"],
        ],
      },
      callout: { kind: "info", html: "70 साल से ऊपर के CGHS, ECHS या CAPF लाभार्थी चाहें तो आयुष्मान वय वंदना कार्ड ले सकते हैं, पर दोनों में से <strong>एक ही योजना</strong> चुननी होगी।" },
    },
    {
      id: "patrata",
      title: "आयुष्मान कार्ड की पात्रता कैसे जांचें",
      steps: [
        "Ayushman App डाउनलोड करें या <a href=\"https://beneficiary.nha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">beneficiary.nha.gov.in</a> खोलें और अपने मोबाइल OTP से लॉगिन करें।",
        "योजना PM-JAY, अपना राज्य और खोजने का तरीका (आधार, राशन कार्ड/परिवार ID आदि) चुनें।",
        "परिवार का नाम दिखे तो आप पात्र हैं। नाम न दिखे तो (70+ को छोड़कर) PM-JAY कार्ड नहीं बनेगा; अपने राज्य की स्वास्थ्य योजना के बारे में ज़िला आयुष्मान समन्वयक या 14555 से पूछें।",
      ],
    },
    {
      id: "card",
      title: "आयुष्मान कार्ड बनाने के स्टेप",
      steps: [
        "सूची में नाम मिलने पर सदस्य के आगे <strong>e-KYC</strong> चुनें।",
        "आधार OTP, फेस ऑथेंटिकेशन, फिंगरप्रिंट या आइरिस से पहचान की पुष्टि करें।",
        "ताज़ा फोटो लें और ज़रूरी जानकारी भरकर सबमिट करें।",
        "मंज़ूरी के बाद कार्ड उसी ऐप/पोर्टल से डाउनलोड करें। परिवार के हर सदस्य का कार्ड अलग बनता है।",
      ],
      callout: { kind: "ok", html: "खुद न बना सकें तो आधार और राशन कार्ड लेकर नज़दीकी सूचीबद्ध अस्पताल के आयुष्मान मित्र या <a href=\"/tools/csc-locator.html\">CSC केंद्र</a> पर जाएं।" },
    },
    {
      id: "dastavej",
      title: "ज़रूरी दस्तावेज़",
      list: [
        "<strong>आधार कार्ड</strong> (e-KYC के लिए; हर सदस्य का)।",
        "<strong>मोबाइल नंबर</strong> (लॉगिन OTP के लिए; आधार OTP चुनें तो आधार से जुड़ा मोबाइल)।",
        "<strong>राशन कार्ड या राज्य की परिवार ID</strong>: नाम खोजने में काम आती है, खासकर जहां राज्य ने राशन कार्ड के आधार पर परिवार जोड़े हैं।",
      ],
      callout: { kind: "warn", html: "आयुष्मान कार्ड का कोई आवेदन शुल्क नहीं है और आय प्रमाण पत्र नहीं मांगा जाता। \"पैसे दो, नाम सूची में जुड़वा देंगे\" कहने वाले एजेंट से बचें; केंद्र की सूची में ऐसे नाम नहीं जुड़ता।" },
    },
    {
      id: "cghs",
      title: "CGHS कार्ड किसे और कैसे",
      list: [
        "<strong>सेवारत केंद्रीय कर्मचारी:</strong> अपने कार्यालय के ज़रिए CGHS पोर्टल पर आवेदन; अंशदान वेतन से कटता है।",
        "<strong>केंद्रीय पेंशनभोगी (FMA न लेने वाले):</strong> <a href=\"https://cghs.mohfw.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">cghs.mohfw.gov.in</a> पर आवेदन करें और Bharatkosh पर अंशदान जमा करें। जुलाई 2026 से रिटायर होने वाले Bhavishya पोर्टल से भी आवेदन कर सकते हैं।",
        "पूरी जानकारी: <a href=\"/service/central-govt-health-scheme.html\">CGHS गाइड</a> और <a href=\"/service/cghs-pensioner-card-apply.html\">CGHS पेंशनभोगी कार्ड</a>।",
      ],
    },
  ],
  official: [
    { href: "https://beneficiary.nha.gov.in/", title: "आयुष्मान कार्ड: पात्रता देखें, e-KYC, डाउनलोड" },
    { href: "https://nha.gov.in/PM-JAY", title: "राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA): PM-JAY" },
    { href: "https://cghs.mohfw.gov.in/", title: "CGHS पोर्टल", note: "केंद्र सरकार कर्मचारी/पेंशनभोगी" },
  ],
  faq: [
    { q: "क्या आयुष्मान कार्ड के लिए ऑनलाइन आवेदन फॉर्म है?", a: "नहीं। PM-JAY में अलग आवेदन नहीं होता। परिवार का नाम सूची में है तो ऑनलाइन e-KYC करके कार्ड बनता है। 70+ बुजुर्गों के लिए सूची की ज़रूरत नहीं है।" },
    { q: "क्या केंद्र सरकार का कर्मचारी आयुष्मान कार्ड बनवा सकता है?", a: "PM-JAY की पात्रता सूची पर निर्भर करती है; CGHS वाले कर्मचारी आम तौर पर CGHS से इलाज लेते हैं। 70 साल से ऊपर के CGHS लाभार्थी CGHS या वय वंदना में से एक चुन सकते हैं।" },
    { q: "आयुष्मान कार्ड में OPD का इलाज मिलता है?", a: "PM-JAY मुख्य रूप से अस्पताल में भर्ती वाले इलाज के लिए है; भर्ती से पहले के और छुट्टी के बाद 15 दिन तक के खर्च भी शामिल हैं। सामान्य OPD आम तौर पर नहीं।" },
    { q: "परिवार में कितने लोगों का कार्ड बनेगा?", a: "PM-JAY में परिवार के सदस्यों की संख्या की कोई सीमा नहीं है; सूची में जिनके नाम हैं उन सबका कार्ड बन सकता है। ₹5 लाख का कवर पूरे परिवार के लिए साल भर का है।" },
    { q: "शिकायत कहां करें?", a: "आयुष्मान के लिए 14555 पर। CGHS के लिए cghs.mohfw.gov.in पर दिए संपर्क से।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत (PM-JAY) गाइड", text: "पात्रता, कार्ड, इलाज" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुजुर्गों का कार्ड" },
    { href: "/service/central-govt-health-scheme.html", emoji: "🩺", title: "CGHS गाइड", text: "अंशदान, सुविधाएं, कार्ड" },
    { href: "/service/cghs-pensioner-card-apply.html", emoji: "🪪", title: "CGHS पेंशनभोगी कार्ड", text: "आवेदन और आजीवन कार्ड" },
    { href: "/service/abha-health-card.html", emoji: "📋", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य रिकॉर्ड" },
  ],
  aside: [
    { href: "https://beneficiary.nha.gov.in/", label: "🏥 आयुष्मान पात्रता देखें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
