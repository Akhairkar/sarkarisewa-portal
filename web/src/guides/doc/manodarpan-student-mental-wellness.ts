import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; manodarpan.education.gov.in not reachable from
// the sandbox, search-result extracts used): dsel.education.gov.in (Manodarpan
// page: initiative of the Ministry of Education under Atmanirbhar Bharat
// Abhiyan for psychosocial support of students, teachers and families;
// national toll-free helpline 8448440632 with trained counsellors, 8 AM to
// 8 PM on all days, since July 2020; live sessions "Sahyog" for Classes VI-XII
// and "Paricharcha" webinars), Rajya Sabha PQ 267 dated 19.03.2025 (Manodarpan
// activities), Ministry of Education DO letter on Mental Health Week 4-10
// October 2025 (helpline 844-844-0632), education.gov.in (portal
// manodarpan.education.gov.in, email manodarpan-mhrd@gov.in in launch
// material). Tele-MANAS 14416 / 1-800-891-4416 (MoHFW, 24x7, about 20
// languages) from Lok Sabha/Parliament replies reported in 2025. The old
// page's "24x7", helpline 1800-11-0001/1947, "online application", form PDF
// and Aadhaar requirement were not supported and were dropped.
export const manodarpanStudentMentalWellness: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "नौकरी और शिक्षा", href: "/category/jobs-education.html" },
    { label: "मनोदर्पण" },
  ],
  docHi: "मनोदर्पण",
  title: "मनोदर्पण छात्र मानसिक स्वास्थ्य सहायता (Manodarpan)",
  description: "शिक्षा मंत्रालय की मनोदर्पण पहल: छात्रों, शिक्षकों व अभिभावकों के लिए मुफ्त टेली-काउंसलिंग हेल्पलाइन 8448440632 (सुबह 8 से रात 8 बजे)। कब कॉल करें, क्या मिलता है, 24x7 Tele-MANAS 14416।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मनोदर्पण (Manodarpan): छात्रों के लिए मुफ्त काउंसलिंग हेल्पलाइन 8448440632",
  lead: "मनोदर्पण भारत सरकार के शिक्षा मंत्रालय की पहल है, जो छात्रों, उनके माता-पिता और शिक्षकों को तनाव, परीक्षा के डर और मन की परेशानियों में मदद देती है। इसकी राष्ट्रीय टोल-फ्री हेल्पलाइन <strong>8448440632</strong> पर प्रशिक्षित काउंसलर हर दिन सुबह 8 से रात 8 बजे तक मुफ्त बात करते हैं। इसके लिए कोई आवेदन, फॉर्म या आधार नहीं चाहिए; सीधे कॉल करें।",
  facts: [
    ["किसकी पहल", "शिक्षा मंत्रालय, भारत सरकार"],
    ["हेल्पलाइन", "8448440632 (टोल-फ्री)"],
    ["समय", "सुबह 8 से रात 8 बजे, सभी दिन"],
    ["फीस", "मुफ्त, कोई पंजीकरण नहीं"],
  ],
  notice: "अगर किसी की जान को तुरंत खतरा है तो <strong>112</strong> पर कॉल करें। रात में या किसी भी समय बात करनी हो तो स्वास्थ्य मंत्रालय की 24x7 हेल्पलाइन <strong>Tele-MANAS 14416</strong> पर कॉल करें।",
  sections: [
    {
      id: "kya-hai",
      title: "मनोदर्पण क्या है",
      intro: "शिक्षा मंत्रालय ने जुलाई 2020 में आत्मनिर्भर भारत अभियान के तहत मनोदर्पण शुरू किया। इसका मकसद छात्रों और उनके परिवार को मानसिक और भावनात्मक सहारा देना है।",
      list: [
        "<strong>टेली-काउंसलिंग हेल्पलाइन:</strong> 8448440632 पर प्रशिक्षित काउंसलर से फोन पर बात।",
        "<strong>\"सहयोग\" सत्र:</strong> कक्षा 6 से 12 के छात्रों के लिए काउंसलरों के साथ लाइव बातचीत।",
        "<strong>\"परिचर्चा\" वेबिनार:</strong> विशेषज्ञों के साथ ऑनलाइन चर्चा।",
        "<strong>पोर्टल:</strong> <a href=\"https://manodarpan.education.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">manodarpan.education.gov.in</a> पर सलाह, पढ़ने की सामग्री और सवाल भेजने की सुविधा।",
      ],
    },
    {
      id: "kab",
      title: "कब कॉल करें",
      list: [
        "परीक्षा या रिज़ल्ट को लेकर बहुत डर या घबराहट",
        "नींद न आना, पढ़ाई में मन न लगना, लगातार उदासी",
        "घर, हॉस्टल या दोस्तों के बीच परेशानी, अकेलापन",
        "माता-पिता या शिक्षक, जो बच्चे के व्यवहार को लेकर चिंतित हैं",
      ],
      callout: { kind: "info", html: "बात गोपनीय रहती है और कॉल का कोई पैसा नहीं लगता। अपना नाम बताना ज़रूरी नहीं है।" },
    },
    {
      id: "kaise",
      title: "हेल्पलाइन पर बात कैसे करें",
      steps: [
        "सुबह 8 से रात 8 बजे के बीच <strong>8448440632</strong> पर कॉल करें।",
        "IVRS पर भाषा/विकल्प चुनें, फिर काउंसलर से जुड़ने का इंतज़ार करें।",
        "अपनी परेशानी खुलकर बताएं। काउंसलर सलाह देंगे और ज़रूरत हो तो आगे किसी विशेषज्ञ या अस्पताल के पास जाने को कहेंगे।",
      ],
      callout: { kind: "ok", html: "रात 8 बजे के बाद या किसी भी समय मदद चाहिए तो <strong>Tele-MANAS 14416</strong> (या 1-800-891-4416) पर कॉल करें। यह स्वास्थ्य मंत्रालय की 24x7 मुफ्त सेवा है और लगभग 20 भाषाओं में चलती है।" },
    },
    {
      id: "galat",
      title: "ध्यान रखें",
      list: [
        "मनोदर्पण में <strong>कोई आवेदन, फॉर्म, फीस या आधार</strong> नहीं लगता। कोई पैसा या कागज़ मांगे तो सावधान रहें।",
        "यह काउंसलिंग है, इलाज या दवा नहीं। गंभीर परेशानी में मनोचिकित्सक या सरकारी अस्पताल के मानसिक स्वास्थ्य विभाग में दिखाएं।",
        "स्कूल/कॉलेज में काउंसलर या वेलनेस सेल हो तो वहां भी मदद लें।",
      ],
    },
  ],
  official: [
    { href: "https://manodarpan.education.gov.in/", title: "मनोदर्पण पोर्टल (शिक्षा मंत्रालय)", note: "हेल्पलाइन 8448440632" },
    { href: "https://dsel.education.gov.in/", title: "स्कूल शिक्षा एवं साक्षरता विभाग" },
  ],
  faq: [
    { q: "मनोदर्पण हेल्पलाइन नंबर क्या है?", a: "राष्ट्रीय टोल-फ्री नंबर 8448440632 है। इस पर प्रशिक्षित काउंसलर सुबह 8 से रात 8 बजे तक, सभी दिन बात करते हैं।" },
    { q: "क्या मनोदर्पण 24 घंटे चलता है?", a: "नहीं, शिक्षा मंत्रालय के अनुसार हेल्पलाइन सुबह 8 से रात 8 बजे तक चलती है। 24 घंटे मदद के लिए स्वास्थ्य मंत्रालय की Tele-MANAS हेल्पलाइन 14416 पर कॉल करें।" },
    { q: "क्या इसके लिए पंजीकरण या आवेदन करना पड़ता है?", a: "नहीं। सीधे कॉल करें। कोई फॉर्म, फीस या आधार नहीं लगता।" },
    { q: "कौन कॉल कर सकता है?", a: "स्कूल, कॉलेज और विश्वविद्यालय के छात्र, उनके माता-पिता और शिक्षक।" },
  ],
  related: [
    { href: "/service/national-scholarship-portal.html", emoji: "🎓", title: "राष्ट्रीय छात्रवृत्ति पोर्टल", text: "छात्रवृत्ति के लिए आवेदन" },
    { href: "/service/e-sanjeevani-teleconsultation.html", emoji: "🩺", title: "ई-संजीवनी", text: "डॉक्टर से मुफ्त ऑनलाइन सलाह" },
    { href: "/service/abha-health-card.html", emoji: "🏥", title: "ABHA हेल्थ कार्ड", text: "स्वास्थ्य रिकॉर्ड एक जगह" },
    { href: "/service/pm-shri-schools-portal.html", emoji: "🏫", title: "पीएम श्री स्कूल", text: "स्कूल से जुड़ी योजना" },
  ],
  aside: [
    { href: "https://manodarpan.education.gov.in/", label: "🧠 मनोदर्पण पोर्टल" },
    { href: "tel:8448440632", label: "📞 8448440632 पर कॉल" },
  ],
};
