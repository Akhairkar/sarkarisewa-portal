import type { DocGuide } from "./types";

// Sources (checked 13 Oct 2026):
// - vswsonline.ap.gov.in now redirects to apseva.ap.gov.in ("Swarna Gramam
//   Swarna Wardu", SGSW department, Government of Andhra Pradesh). The portal
//   application lists services "Integrated Certificate", "Integrated
//   Certificate For Students", "OBC Member Certificate", "Duplicate of OBC /
//   EBC / Integrated Certificate", "Re-Issuance of Integrated Certificate",
//   "Income Asset Certificate For EWS"; caste form fields (caste claimed,
//   purpose, whether education certificate contains caste, caste certificate
//   issued to family members); notes "To know the application status, please
//   visit https://apseva.ap.gov.in" and "For any query call us on: 1902".
// - EoDB SOP (vswsonline.ap.gov.in/assets/User-Manuals/EoDB SOP final.pdf,
//   portal document, created Nov 2022): Integrated Certificate (Community,
//   Nativity and Date of Birth) - competent authority Tahsildar (MRO) or RDO;
//   BC, SC, ST and OC citizens; SLA 30 days; documents SSC marks memo or TC or
//   DOB extract, previously issued caste certificate of applicant / parents /
//   family members (wherever applicable); VRO verifies and does field
//   verification, RI re-verifies, Tahsildar final for some castes, else RDO;
//   track status on AP Seva; download/print after approval; fee Rs 12.
// Left out (not confirmable on an official page we could open): validity (a
// 2015 GO on permanent certificates is reported only by secondary sources), a
// current fee confirmation (SOP is from 2022), appeal officer.
export const andhraPradeshCasteCertificate: DocGuide = {
  state: { slug: "andhra-pradesh", hi: "आंध्र प्रदेश" },
  doc: "caste-certificate",
  docHi: "जाति प्रमाण पत्र",
  title: "Andhra Pradesh Caste Certificate 2026",
  description: "आंध्र प्रदेश जाति प्रमाण पत्र (Integrated Certificate) online apply 2026 at AP Seva / ग्राम-वार्ड सचिवालय। Tahsildar/RDO, 30 दिन की समय सीमा, दस्तावेज़ और स्टेटस चेक।",
  published: "2026-08-01",
  modified: "2026-10-13",
  verified: "13 अक्टूबर 2026",
  h1: "आंध्र प्रदेश जाति प्रमाण पत्र 2026: Integrated Certificate के लिए AP Seva पर आवेदन, कागज़ और समय सीमा",
  lead: "आंध्र प्रदेश में जाति प्रमाण पत्र <strong>Integrated Certificate</strong> (समुदाय, मूल निवास और जन्मतिथि का एक साथ प्रमाण पत्र) के रूप में बनता है। आवेदन ग्राम/वार्ड सचिवालय में या <strong>apseva.ap.gov.in</strong> पर होता है; VRO और राजस्व निरीक्षक की जांच के बाद <strong>तहसीलदार (MRO) या RDO</strong> इसे मंज़ूर करते हैं। सेवा की तय समय सीमा 30 दिन है।",
  facts: [
    ["पोर्टल", '<a href="https://apseva.ap.gov.in/" target="_blank" rel="noopener nofollow">apseva.ap.gov.in</a>'],
    ["जारी करते हैं", "तहसीलदार (MRO) या RDO"],
    ["समय सीमा", "30 दिन"],
    ["सेवा का नाम", "Integrated Certificate"],
  ],
  notice: "<strong>पोर्टल का नया पता:</strong> पुराना vswsonline.ap.gov.in अब <strong>apseva.ap.gov.in</strong> (स्वर्ण ग्रामम स्वर्ण वार्डु विभाग) पर खुलता है। आवेदन की स्थिति भी यहीं देखें।",
  sections: [
    {
      id: "kya-hai",
      title: "AP Seva पर जाति से जुड़ी सेवाएं: कौन सी चुनें",
      table: {
        head: ["सेवा", "कब चाहिए"],
        rows: [
          ["<strong>Integrated Certificate</strong>", "BC, SC, ST या OC का समुदाय, मूल निवास और जन्मतिथि का प्रमाण: छात्रवृत्ति, फीस रीइंबर्समेंट और कल्याण योजनाएं"],
          ["<strong>Integrated Certificate For Students</strong>", "विद्यार्थियों के लिए अलग सेवा"],
          ["<strong>OBC Member Certificate</strong>", "केंद्र सरकार की नौकरी/परीक्षा में OBC आरक्षण"],
          ["<strong>Income Asset Certificate For EWS</strong>", "आर्थिक रूप से कमजोर वर्ग (EWS) का आरक्षण"],
          ["<strong>Re-Issuance / Duplicate</strong>", "पहले बने Integrated/OBC प्रमाण पत्र की दोबारा कॉपी"],
        ],
      },
      callout: { kind: "info", html: "केंद्र की भर्ती में OBC आरक्षण तभी मिलता है जब आपकी जाति <strong>केंद्रीय OBC सूची</strong> में हो और आप <strong>नॉन-क्रीमी लेयर</strong> में हों। इसके लिए Integrated Certificate नहीं, <strong>OBC Member Certificate</strong> बनवाएं और भर्ती विज्ञापन का प्रारूप देख लें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़ (AP Seva की SOP)",
      list: [
        "<strong>जन्मतिथि का प्रमाण</strong>: SSC मार्क्स मेमो, या ट्रांसफर सर्टिफिकेट (TC), या नगरपालिका/ग्राम पंचायत से जन्मतिथि का उद्धरण",
        "<strong>पहले जारी जाति प्रमाण पत्र</strong>: आवेदक, माता-पिता या परिवार के किसी सदस्य का (जहां लागू हो)",
        "फॉर्म में यह भी पूछा जाता है कि <strong>शिक्षा के प्रमाण पत्र में जाति लिखी है या नहीं</strong> और प्रमाण पत्र किस काम के लिए चाहिए",
        "आवेदक को एक <strong>स्व-घोषणा/वचन (undertaking)</strong> भी देना पड़ सकता है",
      ],
      callout: { kind: "ok", html: "<strong>टिप:</strong> परिवार में किसी का पुराना जाति प्रमाण पत्र और जाति लिखा स्कूल रिकॉर्ड सबसे काम के कागज़ हैं। स्कैन छोटा करने के लिए <a href=\"/tools/document-compressor.html\">Document Compressor</a> इस्तेमाल करें।" },
    },
    {
      id: "online",
      title: "आवेदन कैसे करें (स्टेप बाय स्टेप)",
      steps: [
        '<a href="https://apseva.ap.gov.in/" target="_blank" rel="noopener nofollow">apseva.ap.gov.in</a> खोलें और <strong>Citizen Login</strong> से लॉगिन करें। या अपने <strong>ग्राम/वार्ड सचिवालय</strong> जाकर कर्मचारी से आवेदन कराएं।',
        "<strong>Integrated Certificate</strong> सेवा चुनें (केंद्र के लिए OBC Member Certificate)।",
        "ऑनलाइन फॉर्म भरें: जाति और उपजाति, उद्देश्य, जन्मतिथि आदि।",
        "कागज़ अपलोड करें, स्क्रीन पर दिखी फीस भरें और आवेदन जमा करें।",
        "<strong>ग्राम राजस्व अधिकारी (VRO)</strong> कागज़ जांचते हैं और ज़रूरत हो तो मौके पर जांच करते हैं; फिर <strong>राजस्व निरीक्षक (RI)</strong> दोबारा जांचकर तहसीलदार को भेजते हैं।",
        "कुछ जातियों में <strong>तहसीलदार</strong> ही अंतिम मंज़ूरी देते हैं; बाकी में तहसीलदार अपनी सिफारिश के साथ <strong>RDO</strong> को भेजते हैं और RDO मंज़ूर/नामंज़ूर करते हैं।",
        "मंज़ूरी के बाद लॉगिन करके प्रमाण पत्र डाउनलोड या प्रिंट करें।",
      ],
    },
    {
      id: "samay",
      title: "समय सीमा, फीस और मदद",
      table: {
        head: ["बात", "जानकारी (AP Seva SOP)"],
        rows: [
          ["समय सीमा (SLA)", "30 दिन"],
          ["मंज़ूर करने वाले", "तहसीलदार (MRO) या RDO"],
          ["फीस", "SOP में ₹12 लिखी है; यह दस्तावेज़ 2022 का है, इसलिए आवेदन के समय स्क्रीन/सचिवालय में बताई राशि ही मानें"],
          ["सवाल के लिए", "AP Seva पर दिया नंबर 1902"],
        ],
      },
    },
    {
      id: "status",
      title: "स्टेटस और डाउनलोड",
      list: [
        "<strong>स्टेटस:</strong> <a href=\"https://apseva.ap.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">apseva.ap.gov.in</a> पर आवेदन नंबर से देखें कि आवेदन किस अधिकारी के पास है।",
        "<strong>डाउनलोड:</strong> मंज़ूरी के बाद लॉगिन करके डाउनलोड/प्रिंट करें, या सचिवालय से लें।",
        "<strong>खो गया?</strong> Re-Issuance / Duplicate सेवा से दोबारा कॉपी लें।",
      ],
      html: '<p>DigiLocker से प्रमाण पत्र निकालने का तरीका: <a href="/digilocker/caste-certificate.html">DigiLocker में जाति प्रमाण पत्र</a>।</p>',
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["जन्मतिथि का कोई प्रमाण नहीं", "SSC मेमो, TC या पंचायत/नगरपालिका से जन्मतिथि का उद्धरण लगाएं"],
          ["परिवार में किसी का पुराना जाति प्रमाण पत्र नहीं", "जाति लिखा स्कूल रिकॉर्ड दिखाएं; VRO मौके पर जांच कर सकते हैं"],
          ["केंद्र की नौकरी के लिए Integrated Certificate लगा दिया", "OBC Member Certificate अलग से बनवाएं"],
          ["जाति/उपजाति की वर्तनी अलग", "सभी कागज़ों में एक जैसी वर्तनी रखें"],
        ],
      },
    },
  ],
  official: [
    { href: "https://apseva.ap.gov.in/", title: "AP Seva (ग्राम/वार्ड सचिवालय पोर्टल): आवेदन और स्टेटस" },
    { href: "https://vswsonline.ap.gov.in/assets/User-Manuals/EoDB%20SOP%20final.pdf", title: "AP Seva SOP (PDF): Integrated Certificate की समय सीमा, कागज़, प्रक्रिया" },
  ],
  faq: [
    { q: "आंध्र प्रदेश में जाति प्रमाण पत्र कहां बनता है?", a: "ग्राम/वार्ड सचिवालय में या apseva.ap.gov.in पर। सेवा का नाम Integrated Certificate है।" },
    { q: "Integrated Certificate क्या है?", a: "यह समुदाय (जाति), मूल निवास और जन्मतिथि का एक साथ प्रमाण पत्र है, जो छात्रवृत्ति, फीस रीइंबर्समेंट और कल्याण योजनाओं में लगता है।" },
    { q: "कितने दिन में बनता है?", a: "AP Seva की SOP के अनुसार Integrated Certificate की समय सीमा 30 दिन है।" },
    { q: "कौन मंज़ूर करता है?", a: "VRO और राजस्व निरीक्षक की जांच के बाद कुछ जातियों में तहसीलदार, बाकी में RDO।" },
    { q: "केंद्र की नौकरी के लिए कौन सा प्रमाण पत्र चाहिए?", a: "AP Seva पर अलग OBC Member Certificate सेवा है। EWS के लिए Income Asset Certificate For EWS है।" },
  ],
  related: [
    { href: "/states/andhra-pradesh-income-certificate.html", emoji: "💰", title: "आंध्र प्रदेश आय प्रमाण पत्र", text: "AP Seva पर आवेदन, 7 दिन" },
    { href: "/states/andhra-pradesh-domicile-certificate.html", emoji: "🏠", title: "आंध्र प्रदेश निवास प्रमाण पत्र", text: "डोमिसाइल सर्टिफिकेट" },
    { href: "/digilocker/caste-certificate.html", emoji: "📲", title: "DigiLocker में जाति प्रमाण पत्र", text: "डाउनलोड और शेयर करें" },
    { href: "/service/caste-certificate.html", emoji: "📜", title: "जाति प्रमाण पत्र: पूरी जानकारी", text: "SC/ST/OBC, सभी राज्य" },
    { href: "/affidavit/", emoji: "✍️", title: "एफिडेविट और स्व-घोषणा", text: "नमूने और नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
  ],
  otherStatesTitle: "दूसरे राज्यों में जाति प्रमाण पत्र",
  aside: [
    { href: "https://apseva.ap.gov.in/", label: "📝 AP Seva पर आवेदन" },
    { href: "/service/caste-certificate.html", label: "📜 जाति प्रमाण पत्र गाइड" },
  ],
};
