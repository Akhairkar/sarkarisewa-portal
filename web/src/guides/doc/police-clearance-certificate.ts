import type { DocGuide } from "./types";

// Sources (checked 4 Oct 2026): passportindia.gov.in (Passport Seva SPA:
// /psp/locales/en/translation.json FAQs on PCC — documents, one country per
// form, no age limit, minors, validity "generally six months", dispatch after
// clear police verification report, one appointment per year, not at camps,
// payment via SBI gateway/UPI, call centre 1800-258-1800; fee chunk
// 9994.*.chunk.js: PCC fee Rs.750 from 01-07-2026, earlier Rs.500; PCC
// document advisory chunk: passport + self-attested copy of first two and last
// two pages incl. ECR/Non-ECR and observation page; change of address /
// spouse name allowed with proof, other particulars need passport re-issue),
// digitalpolice.gov.in (MHA: state police citizen portals give verification
// and NOC services; "How to get Police Clearance Certificate" state list).
// Old page's "same day" claim and ₹500 fee dropped/updated.
export const policeClearanceCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "पुलिस क्लीयरेंस सर्टिफिकेट" },
  ],
  docHi: "पुलिस क्लीयरेंस सर्टिफिकेट",
  title: "पुलिस क्लीयरेंस सर्टिफिकेट (PCC / NOC) 2026 | SarkariSewa India",
  description: "आवेदक के खिलाफ कोई लंबित आपराधिक मामला न होने की पुष्टि करने वाला प्रमाण पत्र, मुख्यतः विदेशी वीज़ा, आप्रवासन, और विदेशी रोज़गार के लिए उपयोग होता है।",
  published: "2024-06-01",
  modified: "2026-10-04",
  verified: "4 अक्टूबर 2026",
  h1: "पुलिस क्लीयरेंस सर्टिफिकेट (PCC) 2026: पासपोर्ट सेवा से आवेदन, फीस ₹750, कागज़ और स्टेटस",
  lead: "विदेश में नौकरी, इमिग्रेशन, रेज़िडेंस या फैमिली वीज़ा के लिए जो PCC मांगा जाता है, वह भारत में पासपोर्ट सेवा (passportindia.gov.in) से बनता है। इसके लिए आपके पास भारतीय पासपोर्ट होना चाहिए। ऑनलाइन फॉर्म भरकर ₹750 फीस दें, पासपोर्ट सेवा केंद्र (PSK/POPSK) में अपॉइंटमेंट पर जाएं, और पुलिस वेरिफिकेशन रिपोर्ट साफ आने पर PCC आपके पते पर भेज दिया जाता है। नौकरी या किरायेदारी के लिए 'चरित्र प्रमाण पत्र' अलग चीज़ है, जो राज्य पुलिस देती है।",
  facts: [
    ["पोर्टल", '<a href="https://www.passportindia.gov.in/" target="_blank" rel="noopener nofollow">passportindia.gov.in</a>'],
    ["फीस", "₹750 (1 जुलाई 2026 से; पहले ₹500)"],
    ["एक फॉर्म", "सिर्फ एक देश के लिए"],
    ["कॉल सेंटर", "1800-258-1800 (टोल-फ्री)"],
  ],
  sections: [
    {
      id: "kaun-sa",
      title: "कौन सा प्रमाण पत्र चाहिए: PCC या चरित्र प्रमाण पत्र",
      table: {
        head: ["", "पासपोर्ट वाला PCC", "राज्य पुलिस का चरित्र/वेरिफिकेशन प्रमाण पत्र"],
        rows: [
          ["किसके लिए", "विदेशी सरकारें इमिग्रेशन, वर्क, रेज़िडेंस या फैमिली वीज़ा/परमिट के लिए मांगती हैं", "भारत में नौकरी, किरायेदार/घरेलू सहायक का वेरिफिकेशन, NOC आदि"],
          ["कौन जारी करता है", "पासपोर्ट कार्यालय (RPO/PSK), विदेश में भारतीय दूतावास", "राज्य/ज़िला पुलिस"],
          ["कहां आवेदन", "passportindia.gov.in या Passport Seva ऐप", "राज्य पुलिस का सिटीज़न पोर्टल या थाना"],
          ["पासपोर्ट ज़रूरी?", "हां", "नहीं"],
        ],
      },
      callout: { kind: "info", html: 'गृह मंत्रालय के <a href="https://digitalpolice.gov.in/" target="_blank" rel="noopener nofollow">digitalpolice.gov.in</a> पर "How to get Police Clearance Certificate" में राज्य चुनकर उस राज्य की पुलिस की प्रक्रिया देख सकते हैं। राज्यों के पुलिस सिटीज़न पोर्टल पर नौकरी, पासपोर्ट, किरायेदार और नौकर वेरिफिकेशन के अनुरोध होते हैं।' },
    },
    {
      id: "kagaz",
      title: "पासपोर्ट PCC के लिए ज़रूरी कागज़",
      list: [
        "<strong>मूल पासपोर्ट</strong>, साथ में <strong>पहले दो और आखिरी दो पन्नों की स्वप्रमाणित (self-attested) फोटोकॉपी</strong>, जिसमें ECR/Non-ECR पेज और पासपोर्ट अधिकारी की टिप्पणी (observation) वाला पेज भी हो।",
        "कम वैधता वाले पासपोर्ट में <strong>वैधता बढ़ाने वाला पेज</strong> (अगर है)।",
        "<strong>पता बदल गया है</strong> तो मौजूदा पते का प्रमाण।",
        "पासपोर्ट बनने के बाद शादी हुई है और <strong>पति/पत्नी का नाम जोड़ना</strong> है तो विवाह प्रमाण पत्र।",
        "जिस देश के लिए PCC चाहिए उसकी मांग/वीज़ा से जुड़े कागज़ अपने पास रखें; PSK पर पूछे जा सकते हैं।",
      ],
      callout: { kind: "warn", html: "<strong>नाम, माता-पिता का नाम, लिंग, जन्मतिथि और जन्मस्थान</strong> PCC फॉर्म और पासपोर्ट में एक जैसे होने चाहिए। ये अलग हैं तो पहले नए विवरण के साथ <strong>पासपोर्ट री-इश्यू</strong> करवाना होगा, उसके बाद ही PCC मिलेगा। सिर्फ पता और पति/पत्नी का नाम बिना री-इश्यू के बदल सकता है।" },
    },
    {
      id: "avedan",
      title: "पासपोर्ट सेवा पर PCC का ऑनलाइन आवेदन",
      steps: [
        '<a href="https://www.passportindia.gov.in/" target="_blank" rel="noopener nofollow">passportindia.gov.in</a> पर <strong>"Register"</strong> से अकाउंट बनाएं (पहले से है तो लॉगिन करें)। Passport Seva मोबाइल ऐप (Android/iOS) से भी आवेदन होता है।',
        "<strong>पासपोर्ट ऑफिस चुनें</strong>, फिर लॉगिन करके <strong>\"Apply for Police Clearance Certificate\"</strong> पर क्लिक करें।",
        "फॉर्म के हिस्से भरें: व्यक्तिगत, पता, पासपोर्ट विवरण, जिस देश के लिए PCC चाहिए, <strong>Other Details</strong> और <strong>Self Declaration</strong>। फिर सबमिट करें।",
        "<strong>\"View Saved/Submitted Applications\" → \"Pay and Schedule Appointment\"</strong> से फीस भरें और PSK/POPSK पर अपॉइंटमेंट लें। भुगतान SBI पेमेंट गेटवे (कार्ड, नेट बैंकिंग, UPI) से होता है।",
        "<strong>\"Print Application Receipt\"</strong> से ARN/अपॉइंटमेंट नंबर वाली रसीद निकालें।",
        "तय दिन मूल कागज़ों के साथ <strong>PSK/POPSK जाएं</strong>। इसके बाद पुलिस वेरिफिकेशन होता है।",
      ],
      callout: { kind: "info", html: "PCC के लिए <strong>एक साल में सिर्फ एक अपॉइंटमेंट</strong> मिलता है (पहली अपॉइंटमेंट तारीख से), इसलिए तारीख सोच-समझकर लें। <strong>पासपोर्ट कैंप में PCC के आवेदन नहीं लिए जाते।</strong>" },
    },
    {
      id: "fees",
      title: "फीस, समय और वैधता",
      table: {
        head: ["बात", "आधिकारिक जानकारी"],
        rows: [
          ["फीस", "<strong>₹750</strong> (पासपोर्ट सेवा की फीस सूची, 1 जुलाई 2026 से लागू; पहले ₹500)। फीस वापस नहीं होती।"],
          ["कब मिलेगा", "पुलिस वेरिफिकेशन रिपोर्ट साफ (clear) आने के बाद PCC अपने-आप आवेदक के पते पर भेजा जाता है। कोई तय दिन नहीं लिखा है।"],
          ["वैधता", "कोई वैधता तय नहीं है। विदेशी सरकारें आम तौर पर इसे <strong>6 महीने</strong> तक मान्य मानती हैं।"],
          ["उम्र", "कोई उम्र सीमा नहीं। विदेशी सरकार मांगे तो नाबालिग को भी PCC मिल सकता है।"],
          ["कितने देश", "एक फॉर्म से <strong>सिर्फ एक देश</strong> के लिए PCC। दूसरे देश के लिए अलग आवेदन।"],
        ],
      },
    },
    {
      id: "videsh",
      title: "विदेश में रह रहे हैं तो",
      intro: 'विदेश में रहने वाले भारतीय वहां के <strong>भारतीय दूतावास/कॉन्सुलेट</strong> से PCC ले सकते हैं। इसके लिए Global Passport Seva पोर्टल <a href="https://embassy.passportindia.gov.in/" target="_blank" rel="noopener nofollow">embassy.passportindia.gov.in</a> पर अपना देश चुनकर रजिस्टर करें और दूतावास की वेबसाइट पर दी गई प्रक्रिया व फीस देखें।',
    },
    {
      id: "samasya",
      title: "आम समस्याएं और हल",
      list: [
        "<strong>पैसा कटा पर स्टेटस \"Pending\":</strong> अगले कामकाजी दिन Applicant Home पर \"Track Payment Status\" से जांचें, फिर \"Schedule Appointment\" से अपॉइंटमेंट लें।",
        "<strong>पैसा कटा पर स्टेटस \"Failed\":</strong> SBI सात कामकाजी दिन में पैसा बैंक को लौटाता है। न मिले तो customercare.00691@sbi.co.in या 011-41561114 (सुबह 10 से शाम 5) पर ARN, ट्रांज़ैक्शन ID, रकम और तारीख के साथ संपर्क करें।",
        "<strong>PCC का स्टेटस:</strong> वेबसाइट पर Track Application Status में फाइल नंबर और जन्मतिथि डालें, या 1800-258-1800 पर कॉल करें।",
        "<strong>शिकायत:</strong> पोर्टल के Grievance सेक्शन, कॉल सेंटर या PSK हेल्पडेस्क पर; विदेश मंत्रालय का ईमेल passport.pg@mea.gov.in भी है।",
      ],
    },
  ],
  official: [
    { href: "https://www.passportindia.gov.in/", title: "पासपोर्ट सेवा: PCC आवेदन, फीस, स्टेटस" },
    { href: "https://embassy.passportindia.gov.in/", title: "Global Passport Seva (विदेश में भारतीयों के लिए)" },
    { href: "https://digitalpolice.gov.in/", title: "डिजिटल पुलिस पोर्टल (MHA): राज्यवार PCC/वेरिफिकेशन जानकारी" },
    { href: "tel:18002581800", title: "पासपोर्ट सेवा नेशनल कॉल सेंटर", note: "1800-258-1800 (टोल-फ्री)" },
  ],
  faq: [
    { q: "PCC की फीस कितनी है?", a: "पासपोर्ट सेवा की फीस सूची के अनुसार 1 जुलाई 2026 से PCC की फीस ₹750 है (पहले ₹500 थी)। फीस ऑनलाइन SBI गेटवे से भरी जाती है और वापस नहीं होती।" },
    { q: "क्या बिना पासपोर्ट के PCC बन सकता है?", a: "पासपोर्ट सेवा वाला PCC पासपोर्ट के आधार पर ही बनता है; फॉर्म के साथ मूल पासपोर्ट और उसके पन्नों की कॉपी देनी होती है। भारत में नौकरी आदि के लिए राज्य पुलिस का चरित्र प्रमाण पत्र अलग से बनता है, जिसके लिए पासपोर्ट ज़रूरी नहीं।" },
    { q: "PCC कितने दिन में मिलता है?", a: "पासपोर्ट सेवा के अनुसार पुलिस वेरिफिकेशन रिपोर्ट साफ आने के बाद PCC अपने-आप आपके पते पर भेजा जाता है। समय आपके इलाके की पुलिस वेरिफिकेशन पर निर्भर करता है।" },
    { q: "PCC कितने समय तक मान्य रहता है?", a: "PCC पर कोई वैधता तय नहीं होती। विदेशी सरकारें आम तौर पर इसे 6 महीने तक मान्य मानती हैं, इसलिए वीज़ा आवेदन के करीब ही बनवाएं।" },
    { q: "दो देशों के लिए PCC चाहिए तो?", a: "एक फॉर्म से सिर्फ एक देश के लिए PCC बनता है। दूसरे देश के लिए अलग आवेदन करना होगा।" },
    { q: "पासपोर्ट में पता पुराना है, क्या PCC मिलेगा?", a: "हां। पता बदलना बिना पासपोर्ट री-इश्यू के हो सकता है; मौजूदा पते का प्रमाण दें। लेकिन नाम, जन्मतिथि, जन्मस्थान, माता-पिता का नाम या लिंग अलग है तो पहले पासपोर्ट री-इश्यू करवाना होगा।" },
  ],
  related: [
    { href: "/service/passport.html", emoji: "🛂", title: "पासपोर्ट", text: "नया पासपोर्ट और री-इश्यू" },
    { href: "/service/character-certificate.html", emoji: "📜", title: "चरित्र प्रमाण पत्र", text: "नौकरी के लिए पुलिस वेरिफिकेशन" },
    { href: "/service/telecom-sanchar-saathi-tafcop.html", emoji: "📱", title: "संचार साथी", text: "अपने नाम के सिम जांचें" },
    { href: "/service/aadhaar-card.html", emoji: "🆔", title: "आधार कार्ड", text: "पते के प्रमाण के लिए अपडेट" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "अपलोड के लिए सही साइज़" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन फॉर्म भरवाने के लिए" },
  ],
  aside: [
    { href: "https://www.passportindia.gov.in/", label: "🛂 पासपोर्ट सेवा खोलें" },
    { href: "tel:18002581800", label: "📞 1800-258-1800" },
  ],
};
