import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; esanjeevani.mohfw.gov.in and esanjeevaniopd.in
// were blocked from this sandbox, so no detail is taken from their pages):
// - Rajya Sabha answer, 4 Feb 2025 (rsdebate.nic.in PQ 267 U304, via search
//   extract): eSanjeevani continues to give free consultations; two variants,
//   eSanjeevani OPD (patient-to-doctor from home, launched April 2020) and
//   eSanjeevani AB-AAM (doctor-to-doctor hub-and-spoke at Ayushman Arogya
//   Mandirs, launched November 2019).
// - CGHS teleconsultation flow (gconnect.in copy of the CGHS order) and
//   explainers: mobile number + OTP registration, choose state/OPD/clinic,
//   Patient ID and token by SMS, video call, e-prescription to save/print;
//   camera, microphone and internet needed.
// Left out (not confirmable from an official page): OPD timings, helpline,
// app store listing details, consultation totals, AIIMS claims.
export const eSanjeevaniTelemedicine: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "ई-संजीवनी (टेलीमेडिसिन)" },
  ],
  docHi: "ई-संजीवनी (टेलीमेडिसिन)",
  title: "ई-संजीवनी (टेलीमेडिसिन) 2026",
  description: "घर से ऑनलाइन डॉक्टर परामर्श के लिए मुफ्त सरकारी टेलीमेडिसिन मंच, जिसमें विशेषज्ञों के साथ ओपीडी-शैली के परामर्श शामिल हैं।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ई-संजीवनी टेलीमेडिसिन 2026: घर से OPD और आयुष्मान आरोग्य मंदिर से डॉक्टर परामर्श",
  lead: "ई-संजीवनी (eSanjeevani) स्वास्थ्य एवं परिवार कल्याण मंत्रालय की राष्ट्रीय टेलीमेडिसिन सेवा है, जिस पर मरीज़ों को मुफ्त परामर्श मिलता है। इसके दो रूप हैं: <strong>eSanjeevani OPD</strong>, जिसमें आप घर से मोबाइल पर वीडियो कॉल से डॉक्टर से बात करते हैं, और <strong>eSanjeevani AB-AAM</strong>, जिसमें गांव/कस्बे के आयुष्मान आरोग्य मंदिर का स्वास्थ्यकर्मी आपको बड़े अस्पताल के डॉक्टर से जोड़ता है।",
  facts: [
    ["पोर्टल", '<a href="https://esanjeevani.mohfw.gov.in/" target="_blank" rel="noopener nofollow">esanjeevani.mohfw.gov.in</a>'],
    ["किसकी सेवा", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय"],
    ["फीस", "मुफ्त"],
    ["दो रूप", "घर से OPD; आरोग्य मंदिर से डॉक्टर"],
  ],
  notice: "<strong>इमरजेंसी में टेलीमेडिसिन का इंतज़ार न करें।</strong> गंभीर हालत में तुरंत 112/108 पर फोन करें या नज़दीकी अस्पताल जाएं।",
  sections: [
    {
      id: "do-roop",
      title: "ई-संजीवनी के दो रूप",
      table: {
        head: ["", "eSanjeevani OPD", "eSanjeevani AB-AAM"],
        rows: [
          ["किसके लिए", "जिसके पास स्मार्टफोन/कंप्यूटर और इंटरनेट है", "जिसके पास फोन नहीं या जो खुद नहीं चला पाते"],
          ["कहां से", "घर से, मोबाइल या कंप्यूटर पर", "पास के आयुष्मान आरोग्य मंदिर (स्वास्थ्य केंद्र) से"],
          ["कैसे", "मरीज़ खुद डॉक्टर से वीडियो कॉल पर बात करता है", "केंद्र का स्वास्थ्यकर्मी/डॉक्टर मरीज़ को बड़े अस्पताल के डॉक्टर से जोड़ता है (doctor-to-doctor)"],
          ["कब शुरू", "अप्रैल 2020", "नवंबर 2019"],
        ],
      },
    },
    {
      id: "opd",
      title: "घर से OPD परामर्श: छोटे में तरीका",
      steps: [
        '<a href="https://esanjeevani.mohfw.gov.in/" target="_blank" rel="noopener nofollow">esanjeevani.mohfw.gov.in</a> या eSanjeevani ऐप खोलें और मोबाइल नंबर से OTP डालकर पंजीकरण करें।',
        "राज्य और OPD चुनें, मरीज़ की जानकारी भरें और टोकन लें।",
        "बारी आने पर वीडियो कॉल से डॉक्टर से बात करें।",
        "ई-प्रिस्क्रिप्शन डाउनलोड करके सेव/प्रिंट करें।",
      ],
      html: "<p>पूरे स्टेप और आम दिक्कतों के हल: <a href=\"/service/e-sanjeevani-teleconsultation.html\">ई-संजीवनी फ्री डॉक्टर परामर्श गाइड</a>।</p>",
    },
    {
      id: "aarogya-mandir",
      title: "आयुष्मान आरोग्य मंदिर से परामर्श",
      intro: "घर पर फोन या इंटरनेट न हो, या बुज़ुर्ग खुद ऐप न चला सकें, तो पास के आयुष्मान आरोग्य मंदिर (पहले हेल्थ एंड वेलनेस सेंटर) जाएं। वहां के स्वास्थ्यकर्मी ई-संजीवनी के ज़रिए आपको बड़े अस्पताल (हब) के डॉक्टर या विशेषज्ञ से जोड़ सकते हैं, और डॉक्टर की पर्ची वहीं मिलती है।",
      callout: { kind: "info", html: "किस केंद्र पर यह सुविधा किस दिन/समय मिलती है, यह राज्य और ज़िले के हिसाब से अलग है। अपने ANM/आशा कार्यकर्ता या केंद्र से पूछ लें।" },
    },
    {
      id: "kiske-liye",
      title: "टेलीमेडिसिन किन बीमारियों में काम आता है",
      list: [
        "बुखार, खांसी-ज़ुकाम, पेट की आम दिक्कतें, त्वचा की छोटी समस्याएं।",
        "डायबिटीज़, BP जैसी पुरानी बीमारियों में दवा जारी रखने या रिपोर्ट दिखाने के लिए।",
        "यह जानने के लिए कि अस्पताल जाना ज़रूरी है या नहीं, और किस विभाग में।",
      ],
      callout: { kind: "warn", html: "डॉक्टर को लगे कि जांच या भर्ती ज़रूरी है, तो वे अस्पताल जाने की सलाह देंगे। वीडियो कॉल से हर बीमारी का इलाज नहीं हो सकता।" },
    },
  ],
  official: [
    { href: "https://esanjeevani.mohfw.gov.in/", title: "eSanjeevani पोर्टल (स्वास्थ्य मंत्रालय)" },
    { href: "https://www.mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
  ],
  faq: [
    { q: "ई-संजीवनी क्या है?", a: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय की राष्ट्रीय टेलीमेडिसिन सेवा, जिस पर मरीज़ों को मुफ्त डॉक्टर परामर्श मिलता है।" },
    { q: "eSanjeevani OPD और AB-AAM में क्या फर्क है?", a: "OPD में मरीज़ घर से खुद डॉक्टर से वीडियो कॉल करता है। AB-AAM में आयुष्मान आरोग्य मंदिर का स्वास्थ्यकर्मी/डॉक्टर मरीज़ को बड़े अस्पताल के डॉक्टर से जोड़ता है।" },
    { q: "क्या ई-संजीवनी पर फीस लगती है?", a: "नहीं, परामर्श मुफ्त है (संसद में सरकार का जवाब, फरवरी 2025)।" },
    { q: "स्मार्टफोन नहीं है तो क्या करें?", a: "पास के आयुष्मान आरोग्य मंदिर में जाएं; वहां से ई-संजीवनी के ज़रिए डॉक्टर से परामर्श करवाया जा सकता है।" },
  ],
  related: [
    { href: "/service/e-sanjeevani-teleconsultation.html", emoji: "📱", title: "ई-संजीवनी OPD: स्टेप बाय स्टेप", text: "घर से फ्री डॉक्टर परामर्श" },
    { href: "/service/abha-health-card.html", emoji: "🪪", title: "ABHA हेल्थ कार्ड", text: "डिजिटल हेल्थ ID" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/jan-aushadhi-store-locator.html", emoji: "💊", title: "जन औषधि केंद्र", text: "सस्ती जेनेरिक दवाएं" },
    { href: "/service/e-raktkosh-blood-donation.html", emoji: "🩸", title: "ई-रक्तकोश", text: "खून की उपलब्धता देखें" },
  ],
  aside: [
    { href: "https://esanjeevani.mohfw.gov.in/", label: "🩺 ई-संजीवनी खोलें" },
    { href: "/service/e-sanjeevani-teleconsultation.html", label: "📱 OPD के पूरे स्टेप" },
  ],
};
