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
export const eSanjeevaniTeleconsultation: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "ई-संजीवनी फ्री डॉक्टर परामर्श" },
  ],
  docHi: "ई-संजीवनी फ्री डॉक्टर परामर्श",
  title: "ई-संजीवनी फ्री डॉक्टर परामर्श (eSanjeevani Teleconsultation)",
  description: "ई-संजीवनी OPD पर घर बैठे मुफ्त वीडियो कॉल से सरकारी डॉक्टर से परामर्श: मोबाइल OTP से पंजीकरण, टोकन, वीडियो कॉल और ई-प्रिस्क्रिप्शन, स्टेप बाय स्टेप।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "ई-संजीवनी OPD: घर बैठे मुफ्त डॉक्टर परामर्श कैसे लें (स्टेप बाय स्टेप)",
  lead: "ई-संजीवनी (eSanjeevani) केंद्र सरकार के स्वास्थ्य एवं परिवार कल्याण मंत्रालय की मुफ्त टेलीमेडिसिन सेवा है। इसके <strong>eSanjeevani OPD</strong> हिस्से में आप मोबाइल नंबर से पंजीकरण करके, टोकन लेकर, घर से वीडियो कॉल पर सरकारी डॉक्टर से बात कर सकते हैं और डॉक्टर की ई-प्रिस्क्रिप्शन (दवा की पर्ची) डाउनलोड कर सकते हैं। परामर्श के लिए कोई फीस नहीं लगती।",
  facts: [
    ["पोर्टल", '<a href="https://esanjeevani.mohfw.gov.in/" target="_blank" rel="noopener nofollow">esanjeevani.mohfw.gov.in</a>'],
    ["किसकी सेवा", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय"],
    ["फीस", "मुफ्त"],
    ["ज़रूरी", "मोबाइल नंबर, कैमरा-माइक वाला फोन, इंटरनेट"],
  ],
  notice: "<strong>इमरजेंसी में ई-संजीवनी का इंतज़ार न करें।</strong> सीने में दर्द, सांस फूलना, बेहोशी, तेज़ खून बहना या दुर्घटना हो तो तुरंत 112/108 पर फोन करें या नज़दीकी अस्पताल जाएं।",
  sections: [
    {
      id: "pehle",
      title: "शुरू करने से पहले क्या चाहिए",
      list: [
        "चालू <strong>मोबाइल नंबर</strong>, जिस पर OTP और टोकन का SMS आएगा।",
        "<strong>कैमरा और माइक</strong> वाला स्मार्टफोन या कंप्यूटर, और ठीक-ठाक इंटरनेट।",
        "पुरानी पर्चियां या जांच रिपोर्ट (हों तो) फोटो/PDF में, ताकि डॉक्टर को दिखा सकें।",
        "मरीज़ का नाम, उम्र और बीमारी की बात साफ-साफ बताने के लिए तैयार रहें।",
      ],
    },
    {
      id: "kaise",
      title: "ई-संजीवनी OPD पर परामर्श के स्टेप",
      steps: [
        '<a href="https://esanjeevani.mohfw.gov.in/" target="_blank" rel="noopener nofollow">esanjeevani.mohfw.gov.in</a> खोलें या eSanjeevani ऐप इस्तेमाल करें, और <strong>मरीज़ (Patient)</strong> के रूप में आगे बढ़ें।',
        "<strong>मोबाइल नंबर डालें</strong> और आए हुए OTP से पुष्टि करें।",
        "<strong>राज्य</strong> और <strong>OPD</strong> (सामान्य या विशेषज्ञ) चुनें, फिर मरीज़ का नाम, उम्र, लिंग जैसी जानकारी भरें।",
        "बीमारी के बारे में लिखें और पुरानी रिपोर्ट हो तो अपलोड करें, फिर <strong>टोकन</strong> लें। SMS में Patient ID और टोकन नंबर आता है।",
        "बारी आने पर SMS/सूचना आती है। लॉगिन करके <strong>Call Now</strong> दबाएं; डॉक्टर वीडियो कॉल पर जुड़ जाते हैं।",
        "बात खत्म होने पर डॉक्टर <strong>ई-प्रिस्क्रिप्शन</strong> भेजते हैं। उसे डाउनलोड करके सेव/प्रिंट कर लें।",
      ],
      callout: { kind: "info", html: "OPD किस समय खुलती है और कौन से विशेषज्ञ OPD उपलब्ध हैं, यह राज्य के हिसाब से अलग है। टोकन लेते समय पोर्टल पर यही दिखता है।" },
    },
    {
      id: "pharmacy",
      title: "ई-प्रिस्क्रिप्शन से दवा",
      intro: "ई-प्रिस्क्रिप्शन डॉक्टर की पर्ची की तरह है। इसे दिखाकर आप दवा ले सकते हैं। सस्ती जेनेरिक दवाओं के लिए <a href=\"/service/jan-aushadhi-store-locator.html\">नज़दीकी जन औषधि केंद्र</a> देखें।",
    },
    {
      id: "aam-dikkat",
      title: "आम दिक्कतें और हल",
      table: {
        head: ["दिक्कत", "क्या करें"],
        rows: [
          ["OTP नहीं आ रहा", "नंबर दोबारा जांचें, नेटवर्क वाली जगह जाएं और थोड़ी देर बाद फिर भेजें"],
          ["वीडियो/आवाज़ नहीं आ रही", "ब्राउज़र/ऐप को कैमरा और माइक की अनुमति दें; बेहतर नेटवर्क पर जाएं"],
          ["बारी आई पर कॉल छूट गई", "पोर्टल पर Patient ID से लॉगिन करें; ज़रूरत हो तो नया टोकन लें"],
          ["घर पर स्मार्टफोन नहीं है", "पास के आयुष्मान आरोग्य मंदिर (स्वास्थ्य केंद्र) में पूछें; वहां से भी ई-संजीवनी पर डॉक्टर से बात करवाई जाती है"],
        ],
      },
    },
  ],
  official: [
    { href: "https://esanjeevani.mohfw.gov.in/", title: "eSanjeevani पोर्टल (स्वास्थ्य मंत्रालय)" },
    { href: "https://www.mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
  ],
  faq: [
    { q: "क्या ई-संजीवनी पर डॉक्टर की सलाह मुफ्त है?", a: "हां। संसद में दिए सरकार के जवाब (फरवरी 2025) के अनुसार ई-संजीवनी पर मरीज़ों को मुफ्त परामर्श दिया जाता है।" },
    { q: "ई-संजीवनी पर पंजीकरण के लिए क्या चाहिए?", a: "चालू मोबाइल नंबर (OTP के लिए)। वीडियो कॉल के लिए कैमरा-माइक वाला फोन या कंप्यूटर और इंटरनेट।" },
    { q: "क्या ई-संजीवनी की पर्ची से दवा मिलती है?", a: "डॉक्टर ई-प्रिस्क्रिप्शन देते हैं, जिसे डाउनलोड या प्रिंट करके दवा ली जा सकती है।" },
    { q: "ई-संजीवनी OPD कब खुलती है?", a: "समय और उपलब्ध OPD राज्य के हिसाब से अलग हैं। टोकन लेते समय पोर्टल पर खुले OPD दिखते हैं।" },
  ],
  related: [
    { href: "/service/e-sanjeevani-telemedicine.html", emoji: "🩺", title: "ई-संजीवनी टेलीमेडिसिन", text: "OPD और आरोग्य मंदिर वाली सेवा" },
    { href: "/service/abha-health-card.html", emoji: "🪪", title: "ABHA हेल्थ कार्ड", text: "डिजिटल हेल्थ ID" },
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान कार्ड", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/jan-aushadhi-store-locator.html", emoji: "💊", title: "जन औषधि केंद्र", text: "सस्ती जेनेरिक दवाएं" },
    { href: "/service/e-raktkosh-blood-donation.html", emoji: "🩸", title: "ई-रक्तकोश", text: "खून की उपलब्धता देखें" },
  ],
  aside: [
    { href: "https://esanjeevani.mohfw.gov.in/", label: "🩺 ई-संजीवनी खोलें" },
    { href: "#kaise", label: "📋 परामर्श के स्टेप" },
  ],
};
