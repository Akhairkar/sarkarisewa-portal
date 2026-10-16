import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; parivahan.gov.in not reachable from the
// sandbox, search-result extracts used): Jharkhand government MyGov listing
// of Vahan online services and DTO document sets (Form 29/30 for transfer with
// original RC, insurance, PUC, address proof, PAN/Form 60; Form 25 renewal with
// old RC, insurance, fitness, PUC); Spinny / Ujjivan SFB / LocoNav RTO form
// guides (Form 26 duplicate RC; online transfer via Parivahan with chassis
// last five digits and OTP on RC-linked mobile); Autocar India (inter-state
// transfer, NOC). Motor Vehicles Act, 1988 s.41(7): non-transport vehicle
// registration valid 15 years, renewable for 5 years at a time. Fees and road
// tax vary by state and vehicle and are not stated. Old page's helpline
// number was not re-verified and is left out.
export const vehicleRegistrationCertificate: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "वाहन पंजीकरण (RC)" },
  ],
  docHi: "वाहन पंजीकरण प्रमाण पत्र (RC)",
  title: "वाहन पंजीकरण प्रमाण पत्र (आरसी) 2026",
  description: "RTO के साथ मोटर वाहन का अनिवार्य पंजीकरण, जो कानूनी स्वामित्व और सड़क योग्यता अनुपालन को साबित करता है, परिवहन पोर्टल के माध्यम से प्रबंधित।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "वाहन RC (रजिस्ट्रेशन सर्टिफिकेट) 2026: नया पंजीकरण, ट्रांसफर, नवीनीकरण और डुप्लीकेट RC",
  lead: "मोटर वाहन अधिनियम, 1988 के तहत सड़क पर चलने वाले हर मोटर वाहन का RTO में पंजीकरण ज़रूरी है, और उसका सबूत RC (रजिस्ट्रेशन सर्टिफिकेट) है। नए वाहन का पंजीकरण आम तौर पर डीलर ही कराता है। ट्रांसफर, पता बदलना, डुप्लीकेट RC और नवीनीकरण जैसी सेवाएं parivahan.gov.in के \"Vahan\" पोर्टल पर ऑनलाइन शुरू होती हैं; फीस और रोड टैक्स राज्य के अनुसार अलग हैं।",
  facts: [
    ["कानून", "मोटर वाहन अधिनियम, 1988"],
    ["पोर्टल", "parivahan.gov.in (Vahan)"],
    ["निजी वाहन RC की वैधता", "15 साल, फिर 5-5 साल का नवीनीकरण"],
    ["फीस", "वाहन और राज्य के अनुसार"],
  ],
  sections: [
    {
      id: "sevayen",
      title: "कौन सी सेवा किस फॉर्म से",
      table: {
        head: ["काम", "फॉर्म", "कौन करता है"],
        rows: [
          ["नए वाहन का पंजीकरण", "फॉर्म 20", "आम तौर पर डीलर, खरीद के समय"],
          ["मालिक बदलना (ट्रांसफर)", "फॉर्म 29 (बेचने वाले की सूचना) और फॉर्म 30 (खरीदार का आवेदन)", "खरीदार और विक्रेता"],
          ["डुप्लीकेट RC (खोने/खराब होने पर)", "फॉर्म 26", "वाहन मालिक"],
          ["RC का नवीनीकरण", "फॉर्म 25", "वाहन मालिक, वैधता खत्म होने से पहले"],
          ["दूसरे राज्य में ले जाने के लिए NOC", "फॉर्म 28", "वाहन मालिक"],
        ],
      },
    },
    {
      id: "online",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        "<a href=\"https://parivahan.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">parivahan.gov.in</a> पर \"Online Services\" में \"Vehicle Related Services\" चुनें।",
        "राज्य और RTO चुनें, फिर वाहन नंबर डालें।",
        "पहचान के लिए चेसिस नंबर के आखिरी 5 अंक और RC से जुड़े मोबाइल पर आया OTP डालें।",
        "सेवा चुनें (ट्रांसफर, पता बदलना, डुप्लीकेट RC, नवीनीकरण आदि), जानकारी भरें, कागज़ अपलोड करें और फीस ऑनलाइन भरें।",
        "रसीद प्रिंट करें। जहां वाहन की जांच या मूल कागज़ दिखाने की ज़रूरत हो, वहां तय तारीख पर RTO जाएं।",
      ],
      callout: { kind: "warn", html: "RC से जुड़ा मोबाइल नंबर बंद है तो OTP नहीं आएगा। पहले पोर्टल या RTO से मोबाइल नंबर अपडेट करवाएं।" },
    },
    {
      id: "kagaz",
      title: "आम तौर पर लगने वाले कागज़",
      list: [
        "<strong>ट्रांसफर:</strong> मूल RC, फॉर्म 29 और 30, वैध बीमा, PUC, खरीदार का पते का प्रमाण, PAN या फॉर्म 60/61।",
        "<strong>लोन वाला वाहन:</strong> बैंक/फाइनेंसर का NOC और फॉर्म 35 (लोन खत्म होने पर hypothecation हटाने के लिए)।",
        "<strong>नवीनीकरण:</strong> पुरानी RC, बीमा, PUC और फिटनेस जांच।",
        "<strong>डुप्लीकेट RC:</strong> फॉर्म 26 के साथ RC खोने की पुलिस रिपोर्ट/शपथ पत्र (राज्य के नियम अनुसार)।",
      ],
    },
    {
      id: "digital",
      title: "डिजिटल RC और ज़रूरी बातें",
      list: [
        "RC की डिजिटल कॉपी <a href=\"/service/mparivahan-virtual-rc-dl.html\">mParivahan</a> या <a href=\"/service/digilocker.html\">DigiLocker</a> में रखी जा सकती है; जांच के समय यह मान्य है।",
        "पुराना वाहन बेचने के बाद ट्रांसफर ज़रूर पूरा करवाएं, वरना चालान और दुर्घटना की ज़िम्मेदारी कागज़ों में आपके नाम रह सकती है।",
        "वाहन पर चालान बकाया हो तो कई सेवाएं रुक जाती हैं; पहले <a href=\"/challan/e-challan-status-check.html\">चालान स्टेटस</a> देखें।",
      ],
    },
  ],
  official: [
    { href: "https://parivahan.gov.in/", title: "परिवहन सेवा (Vahan), सड़क परिवहन और राजमार्ग मंत्रालय" },
    { href: "https://morth.gov.in/", title: "सड़क परिवहन और राजमार्ग मंत्रालय (MoRTH)" },
  ],
  faq: [
    { q: "नए वाहन की RC कौन बनवाता है?", a: "आम तौर पर डीलर खरीद के समय ही पंजीकरण का आवेदन करता है। रोड टैक्स और पंजीकरण फीस वाहन की कीमत के साथ ली जाती है।" },
    { q: "पुरानी गाड़ी खरीदी है, RC अपने नाम कैसे करें?", a: "parivahan.gov.in पर Vehicle Related Services में ट्रांसफर ऑफ ओनरशिप चुनें। फॉर्म 29 और 30, मूल RC, बीमा, PUC और पते के प्रमाण के साथ आवेदन करें और फीस भरें।" },
    { q: "निजी कार/बाइक की RC कितने साल वैध रहती है?", a: "गैर-परिवहन (निजी) वाहन का पंजीकरण 15 साल के लिए होता है; उसके बाद 5-5 साल के लिए नवीनीकरण होता है, जिसमें वाहन की जांच होती है।" },
    { q: "RC खो गई तो क्या करें?", a: "फॉर्म 26 से डुप्लीकेट RC के लिए आवेदन करें। कई राज्यों में पुलिस रिपोर्ट या शपथ पत्र मांगा जाता है।" },
    { q: "RC की फीस कितनी है?", a: "वाहन के प्रकार, सेवा और राज्य के अनुसार अलग होती है। ऑनलाइन आवेदन में फीस पोर्टल अपने आप दिखाता है।" },
  ],
  related: [
    { href: "/service/driving-licence.html", emoji: "🚗", title: "ड्राइविंग लाइसेंस", text: "लर्नर और पक्का DL" },
    { href: "/service/mparivahan-virtual-rc-dl.html", emoji: "📱", title: "mParivahan वर्चुअल RC/DL", text: "फोन में RC" },
    { href: "/service/fastag-registration.html", emoji: "🛣️", title: "FASTag", text: "टोल के लिए FASTag" },
    { href: "/challan/e-challan-status-check.html", emoji: "🚦", title: "ई-चालान स्टेटस", text: "वाहन पर बकाया चालान" },
    { href: "/services/rc-challan/", emoji: "📄", title: "RC और चालान रिपोर्ट", text: "वाहन की जानकारी" },
  ],
  aside: [
    { href: "https://parivahan.gov.in/", label: "🚗 Parivahan पोर्टल" },
    { href: "/challan/e-challan-status-check.html", label: "🚦 चालान स्टेटस" },
  ],
};
