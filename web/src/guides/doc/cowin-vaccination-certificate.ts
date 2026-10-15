import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): cowin.gov.in (live site; FAQ text in its
// main JS bundle: certificate download from Co-WIN portal, Aarogya Setu app or
// DigiLocker using the mobile number used at registration; DigiLocker path
// "Ministry of Health and Family Welfare > Health > COVID Vaccine certificate";
// vaccination centre must give a printed copy on the day; International Travel
// Certificate under "Show Certificate", ready about 2 hours after request;
// "Raise an Issue" list: correction of name/age/gender/photo ID, merging two
// dose-1 certificates, passport details, unknown member, transfer member,
// regenerate final certificate, vaccination date correction, revoke
// vaccination; verify.cowin.gov.in; helpline 1075; only Aarogya Setu and UMANG
// are authorised apps besides Co-WIN). Old description's "appointment booking"
// promise was dropped (not checked as currently available).
export const cowinVaccinationCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "कोविड टीकाकरण प्रमाण पत्र" },
  ],
  docHi: "कोविड टीकाकरण प्रमाण पत्र",
  title: "कोविन टीकाकरण प्रमाण पत्र 2026",
  description: "CoWIN से कोविड-19 टीकाकरण प्रमाण पत्र डाउनलोड करें: cowin.gov.in, DigiLocker या Aarogya Setu से। नाम/जन्म वर्ष सुधार, पासपोर्ट जोड़ना, इंटरनेशनल ट्रैवल सर्टिफिकेट और हेल्पलाइन 1075।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "CoWIN कोविड टीकाकरण प्रमाण पत्र: डाउनलोड, सुधार और पासपोर्ट जोड़ना",
  lead: "कोविड-19 टीके का प्रमाण पत्र स्वास्थ्य मंत्रालय के CoWIN पोर्टल (cowin.gov.in) से मुफ्त डाउनलोड होता है। इसके लिए वही मोबाइल नंबर चाहिए जो टीका लगवाते समय रजिस्ट्रेशन में दिया था। यही प्रमाण पत्र DigiLocker और Aarogya Setu ऐप में भी मिलता है। नाम, जन्म वर्ष या टीके की तारीख गलत हो तो CoWIN खाते में \"Raise an Issue\" से सुधार का अनुरोध करें।",
  facts: [
    ["पोर्टल", '<a href="https://www.cowin.gov.in/" target="_blank" rel="noopener nofollow">cowin.gov.in</a>'],
    ["शुल्क", "डाउनलोड मुफ्त"],
    ["दूसरे तरीके", "DigiLocker, Aarogya Setu"],
    ["हेल्पलाइन", "<a href=\"tel:1075\">1075</a>"],
  ],
  sections: [
    {
      id: "download",
      title: "CoWIN से प्रमाण पत्र कैसे डाउनलोड करें",
      steps: [
        '<a href="https://www.cowin.gov.in/" target="_blank" rel="noopener nofollow">cowin.gov.in</a> खोलें और <strong>Register / Sign In</strong> चुनें।',
        "<strong>मोबाइल नंबर डालें</strong> (जो टीका लगवाते समय दिया था) और OTP से लॉगिन करें।",
        "खाते में जुड़े सदस्यों की सूची दिखेगी। जिस व्यक्ति का प्रमाण पत्र चाहिए, उसके आगे <strong>Certificate / Show Certificate</strong> पर क्लिक करें।",
        "<strong>Download</strong> दबाकर PDF सेव करें। एक मोबाइल नंबर से जुड़े परिवार के सभी सदस्यों के प्रमाण पत्र यहीं मिलते हैं।",
      ],
      callout: { kind: "info", html: "पुराना मोबाइल नंबर बंद हो गया है तो OTP नहीं आएगा। ऐसे में DigiLocker (आधार से लॉगिन) से प्रमाण पत्र निकालकर देखें, या हेल्पलाइन <a href=\"tel:1075\">1075</a> पर पूछें।" },
    },
    {
      id: "digilocker",
      title: "DigiLocker और Aarogya Setu से",
      list: [
        "<strong>DigiLocker:</strong> लॉगिन करके <strong>Ministry of Health and Family Welfare → Health → COVID Vaccine Certificate</strong> चुनें और लाभार्थी संदर्भ ID (Beneficiary Reference ID) डालें। प्रमाण पत्र \"Issued Documents\" में जुड़ जाता है।",
        "<strong>Aarogya Setu ऐप:</strong> रजिस्ट्रेशन वाले मोबाइल नंबर से प्रमाण पत्र डाउनलोड कर सकते हैं।",
        "CoWIN के अनुसार रजिस्ट्रेशन के लिए CoWIN के अलावा सिर्फ <strong>Aarogya Setu और UMANG</strong> अधिकृत ऐप हैं। प्रमाण पत्र के नाम पर दूसरे ऐप/लिंक को अपना OTP न दें।",
      ],
    },
    {
      id: "sudhar",
      title: "प्रमाण पत्र में गलती हो तो: Raise an Issue",
      intro: "CoWIN खाते में लॉगिन करके डैशबोर्ड पर <strong>\"Raise an Issue\"</strong> चुनें। वहां ये अनुरोध हो सकते हैं:",
      list: [
        "नाम, उम्र (जन्म वर्ष), लिंग और फोटो ID में सुधार",
        "दो अलग-अलग पहली डोज़ के प्रमाण पत्र को एक करना (merge)",
        "प्रमाण पत्र में पासपोर्ट विवरण जोड़ना",
        "टीके की तारीख में सुधार; फाइनल प्रमाण पत्र दोबारा बनाना",
        "खाते में अनजान सदस्य की शिकायत, सदस्य को दूसरे खाते में भेजना",
        "टीका नहीं लगा पर प्रमाण पत्र बन गया तो उसे रद्द (revoke) करना",
      ],
      callout: { kind: "warn", html: "नाम और जन्म वर्ष वही रखें जो पहचान पत्र (आधार/पासपोर्ट) में है, खासकर विदेश यात्रा के लिए।" },
    },
    {
      id: "travel",
      title: "विदेश यात्रा: पासपोर्ट और इंटरनेशनल ट्रैवल सर्टिफिकेट",
      steps: [
        "<strong>पासपोर्ट जोड़ें:</strong> Raise an Issue में \"Add Passport Details to my vaccination certificate for travelling abroad\" चुनें, सदस्य चुनें, जन्म तिथि और पासपोर्ट नंबर डालकर सबमिट करें।",
        "<strong>इंटरनेशनल ट्रैवल सर्टिफिकेट:</strong> सभी डोज़ लगने के बाद \"Show Certificate\" में \"International Travel Certificate\" टैब से आवेदन करें। CoWIN के अनुसार यह आवेदन के करीब 2 घंटे बाद डाउनलोड होता है।",
      ],
      callout: { kind: "info", html: "हर देश के प्रवेश नियम अलग हैं। यात्रा से पहले उस देश के दूतावास या एयरलाइन से नियम पूछें।" },
    },
    {
      id: "verify",
      title: "प्रमाण पत्र असली है या नहीं, कैसे जांचें",
      html: '<p>प्रमाण पत्र पर QR कोड होता है। <a href="https://verify.cowin.gov.in/" target="_blank" rel="noopener nofollow">verify.cowin.gov.in</a> पर QR स्कैन करके कोई भी संस्था प्रमाण पत्र की जांच कर सकती है।</p>',
    },
  ],
  official: [
    { href: "https://www.cowin.gov.in/", title: "CoWIN पोर्टल (स्वास्थ्य एवं परिवार कल्याण मंत्रालय)" },
    { href: "https://verify.cowin.gov.in/", title: "CoWIN प्रमाण पत्र सत्यापन" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker" },
    { href: "tel:1075", title: "स्वास्थ्य मंत्रालय हेल्पलाइन", note: "1075" },
  ],
  faq: [
    { q: "कोविड टीकाकरण प्रमाण पत्र कहां से डाउनलोड करें?", a: "cowin.gov.in पर रजिस्टर्ड मोबाइल नंबर और OTP से लॉगिन करके। Aarogya Setu ऐप और DigiLocker से भी डाउनलोड होता है। डाउनलोड मुफ्त है।" },
    { q: "मोबाइल नंबर भूल गया/बंद हो गया तो प्रमाण पत्र कैसे मिलेगा?", a: "DigiLocker में COVID Vaccine Certificate चुनकर लाभार्थी संदर्भ ID से कोशिश करें। न हो तो हेल्पलाइन 1075 पर संपर्क करें।" },
    { q: "प्रमाण पत्र में नाम या जन्म वर्ष गलत है, कैसे सुधारें?", a: "CoWIN खाते में लॉगिन करके \"Raise an Issue\" में नाम/उम्र/लिंग/फोटो ID सुधार वाला विकल्प चुनें और सही विवरण भरें। सुधार के बाद नया प्रमाण पत्र डाउनलोड करें।" },
    { q: "प्रमाण पत्र में पासपोर्ट नंबर कैसे जोड़ें?", a: "Raise an Issue में \"Add Passport Details to my vaccination certificate for travelling abroad\" चुनें, सदस्य, जन्म तिथि और पासपोर्ट नंबर भरकर सबमिट करें।" },
    { q: "टीका नहीं लगवाया पर प्रमाण पत्र बन गया, क्या करें?", a: "CoWIN के Raise an Issue में \"Revoke Vaccination\" से गलत दर्ज टीकाकरण रद्द करने का अनुरोध करें।" },
  ],
  related: [
    { href: "/service/digilocker.html", emoji: "🗂️", title: "DigiLocker", text: "सरकारी दस्तावेज़ ऑनलाइन रखें" },
    { href: "/service/abha-health-card.html", emoji: "🏥", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य खाता" },
    { href: "/service/ayushman-bharat.html", emoji: "💳", title: "आयुष्मान भारत", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/aadhaar-mobile-update.html", emoji: "📱", title: "आधार में मोबाइल नंबर", text: "OTP के लिए मोबाइल अपडेट" },
  ],
  aside: [
    { href: "https://www.cowin.gov.in/", label: "💉 CoWIN खोलें" },
    { href: "https://www.digilocker.gov.in/", label: "🗂️ DigiLocker" },
  ],
};
