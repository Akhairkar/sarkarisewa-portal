import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, crumbs, cards, NOT_ADVICE, SOON, ext } from "./common";

// /rent-agreement/uttar-pradesh.html. Sources (checked 4 Oct 2026), all on
// igrsup.gov.in (Stamp and Registration Department, Uttar Pradesh):
// - /igrsup/homePage/kirayanama_faq.html: digital stamping of kirayanama up to
//   12 months, online, faceless, Aadhaar e-KYC + Aadhaar e-Sign; steps 1-7;
//   s.18(c) Registration Act: up to 12 months registration optional, above 12
//   months compulsory; duty based on rent amount, term and premium, calculated by
//   the software; payment by debit card/net banking/UPI; requirements (Aadhaar of
//   both, Aadhaar-linked mobile, e-mail, online payment); s.35 Indian Stamp Act;
//   parties need not be at one place; document on login/e-mail/printout.
// - Home page (/igrsup/defaultAction.action): "12 माह तक के किरायानामा विलेख की
//   डिजिटल स्टाम्पिंग" (-> userServicesHomeAction?request_locale=hi&rid=9, user
//   login/registration with OTP), "किरायानामा सत्यापन" (kirayanaamaDetails_new,
//   by application number), model deeds 109/110/112 (lease), links to SHCIL
//   e-stamp (shcilestamp.com OnlineStamping) and e-stamp certificate verification.
// - /prernadoc/ViewGOPDF_list_user.pdf: UP Stamp (Fifty-first Amendment) Rules,
//   2025, Notification No. 4/2025/259/94-SR-2-2025-700(13)/2023-TC dated
//   11 March 2025 (physical non-judicial stamp papers of Rs 10,000-25,000 no
//   longer valid; those bought earlier usable/refundable till 31.03.2025).
// - Police: uppolice.gov.in citizen services "Tenant/PG Verification".
// NOT included: a rupee rate table. The department's older "शुल्क विवरण" PDF
// on igrsup is undated, and we could not open an official notification for the
// 2025 changes to rent-deed duty, so the page sends readers to the official
// calculator on the portal instead of quoting rates.
const IGRS = "https://igrsup.gov.in/igrsup/defaultAction.action";
const FAQ = "https://igrsup.gov.in/igrsup/homePage/kirayanama_faq.html";
const PORTAL = "https://igrsup.gov.in/igrsup/userServicesHomeAction?request_locale=hi&rid=9";
const VERIFY = "https://igrsup.gov.in/igrsup/kirayanaamaDetails_new";

export const uttarPradesh: DocGuide = {
  crumbs: crumbs("उत्तर प्रदेश किरायानामा"),
  docHi: "उत्तर प्रदेश किरायानामा",
  title: "UP किरायानामा ऑनलाइन: 12 माह, e-Sign, स्टाम्प | SarkariSewa India",
  description: "उत्तर प्रदेश में 12 माह तक का किरायानामा IGRSUP पोर्टल पर Aadhaar e-KYC और e-Sign से घर बैठे बनता है। प्रक्रिया, ज़रूरी चीज़ें, रजिस्ट्रेशन नियम और सत्यापन।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "उत्तर प्रदेश किरायानामा: 12 माह तक का एग्रीमेंट ऑनलाइन कैसे बनाएं",
  lead: "उत्तर प्रदेश स्टाम्प एवं रजिस्ट्रेशन विभाग अपने पोर्टल igrsup.gov.in पर \"12 माह तक के किरायानामा विलेख की डिजिटल स्टाम्पिंग\" की सुविधा देता है। विभाग के FAQ के अनुसार मकान मालिक (किरायादाता) और किरायेदार (किरायाग्रहिता) दोनों Aadhaar e-KYC से पहचान सत्यापित करते हैं, किराया, अवधि और प्रीमियम भरने पर स्टाम्प शुल्क सॉफ्टवेयर खुद गिनता है, ऑनलाइन भुगतान होता है और दोनों अलग-अलग जगह से Aadhaar e-Sign करते हैं। 12 माह तक के किरायानामे का रजिस्ट्रेशन वैकल्पिक है; 12 माह से ज़्यादा का अनिवार्य।",
  facts: [
    ["पोर्टल", ext(PORTAL, "igrsup.gov.in: किरायानामा डिजिटल स्टाम्पिंग")],
    ["किसके लिए", "12 माह तक के किरायानामे"],
    ["पहचान और साइन", "Aadhaar e-KYC + Aadhaar e-Sign (OTP)"],
    ["स्टाम्प शुल्क", "किराया, अवधि, प्रीमियम से पोर्टल पर स्वतः गणना"],
    ["रजिस्ट्रेशन", "12 माह तक वैकल्पिक, उससे ज़्यादा अनिवार्य"],
  ],
  notice: NOT_ADVICE,
  sections: [
    {
      id: "prakriya",
      title: "पोर्टल पर किरायानामा बनाने के 7 चरण",
      intro: "विभाग के किरायानामा FAQ में बताए गए चरण:",
      steps: [
        `विभाग के पोर्टल पर लॉगिन करें और <strong>\"12 माह तक के किरायानामे की डिजिटल स्टाम्पिंग\"</strong> चुनें (${ext(PORTAL, "सीधा लिंक")})। नए उपयोगकर्ता पहले रजिस्टर करते हैं; लॉगिन में OTP आता है।`,
        "किरायादाता (मकान मालिक) और किरायाग्रहिता (किरायेदार) दोनों का <strong>आधार विवरण</strong> दर्ज करें।",
        "<strong>Aadhaar e-KYC</strong> से दोनों की पहचान सत्यापित करें (आधार से जुड़े मोबाइल पर OTP)।",
        "किराए की अवधि, मासिक किराया, प्रीमियम और बाकी विवरण भरें; <strong>स्टाम्प शुल्क अपने-आप गिना जाता है</strong>।",
        "किरायानामे का प्रारूप अपने-आप तैयार होता है; स्टाम्प शुल्क <strong>ऑनलाइन</strong> (डेबिट कार्ड, नेट बैंकिंग, UPI आदि) भरें।",
        "दोनों पक्ष <strong>Aadhaar e-Sign</strong> से दस्तावेज़ निष्पादित करें; दोनों का एक जगह होना ज़रूरी नहीं।",
        "प्रिंटआउट लें; दस्तावेज़ पंजीकृत ई-मेल और लॉगिन पर भी मिलता है और विभाग के सर्वर पर सुरक्षित रहता है।",
      ],
      callout: SOON,
    },
    {
      id: "zaroorat",
      title: "क्या-क्या चाहिए",
      list: [
        "दोनों पक्षों का आधार नंबर",
        "आधार से लिंक मोबाइल नंबर (e-KYC और e-Sign के OTP के लिए); मोबाइल लिंक नहीं है तो पहले <a href=\"/service/aadhaar-card.html\">आधार अपडेट</a> कराएं",
        "ई-मेल आईडी (दस्तावेज़ पाने के लिए)",
        "इंटरनेट और स्मार्टफोन/कंप्यूटर",
        "ऑनलाइन भुगतान का साधन (UPI, डेबिट कार्ड, नेट बैंकिंग)",
        "किराया, अवधि, प्रीमियम/डिपॉज़िट और संपत्ति का पूरा विवरण",
      ],
      callout: { kind: "info", html: "विभाग के FAQ में सेवा को \"नि:शुल्क प्रक्रिया\" बताया गया है, यानी पोर्टल इस्तेमाल का अलग शुल्क नहीं; स्टाम्प शुल्क तो देना ही होता है।" },
    },
    {
      id: "registration",
      title: "रजिस्ट्रेशन कब ज़रूरी है",
      table: {
        head: ["किरायानामे की अवधि", "रजिस्ट्रेशन", "आधार"],
        rows: [
          ["12 माह (1 साल) तक", "वैकल्पिक; केवल डिजिटल स्टाम्पिंग से वैध किरायानामा बन सकता है", "रजिस्ट्रेशन एक्ट धारा 18(c), विभाग का FAQ"],
          ["12 माह से ज़्यादा", "अनिवार्य; सब-रजिस्ट्रार के यहां", "रजिस्ट्रेशन एक्ट धारा 17(1)(d), विभाग का FAQ"],
        ],
      },
      html: "<p>12 माह से लंबी अवधि वाले पट्टे के लिए विभाग की वेबसाइट पर मॉडल डीड \"109 पट्टा (30 वर्ष या कम अवधि का)\" दी गई है। रजिस्ट्रेशन के लिए दस्तावेज़ साइन होने के चार महीने के अंदर पेश करना होता है (धारा 23)।</p>",
    },
    {
      id: "stamp",
      title: "स्टाम्प शुल्क: कैसे तय होता है और कैसे भरें",
      list: [
        "<strong>आधार:</strong> विभाग के अनुसार किरायानामे पर स्टाम्प शुल्क किराए की राशि, अवधि और प्रीमियम के आधार पर तय होता है। पोर्टल पर विवरण भरते ही राशि दिखती है।",
        "<strong>बिना उचित स्टाम्प:</strong> विभाग के FAQ के अनुसार भारतीय स्टाम्प अधिनियम 1899 की धारा 35 के तहत उचित स्टाम्प शुल्क न चुकाया गया किरायानामा न्यायालय में साक्ष्य के रूप में मान्य नहीं होता।",
        `<strong>पोर्टल से बाहर बनवा रहे हैं तो:</strong> विभाग की वेबसाइट SHCIL के ${ext("https://www.shcilestamp.com/", "e-Stamp")} और e-Stamp सर्टिफिकेट verify करने का लिंक देती है।`,
        "<strong>पुराने स्टाम्प पेपर:</strong> उत्तर प्रदेश स्टाम्प (इक्यावनवां संशोधन) नियमावली 2025 (अधिसूचना दिनांक 11 मार्च 2025) से ₹10,000 से ₹25,000 मूल्य के physical non-judicial स्टाम्प पेपर स्टाम्प शुल्क के लिए मान्य नहीं रहे; पहले खरीदे गए ऐसे पेपर 31.03.2025 तक इस्तेमाल/रिफंड हो सकते थे।",
      ],
      callout: { kind: "warn", html: "हम यहां रुपये में दर नहीं दे रहे, क्योंकि किराए के विलेखों पर लागू ताज़ा दरों की official अधिसूचना हम खुद जांच नहीं सके। सही राशि के लिए विभाग का पोर्टल ही इस्तेमाल करें।" },
    },
    {
      id: "satyapan",
      title: "बना हुआ किरायानामा कैसे जांचें",
      steps: [
        `igrsup.gov.in पर <strong>\"किरायानामा सत्यापन\"</strong> खोलें (${ext(VERIFY, "सीधा लिंक")})।`,
        "<strong>आवेदन संख्या</strong> डालें और <strong>विवरण देखें</strong> दबाएं।",
        "दिखे विवरण को अपने प्रिंट से मिलाएं: पार्टियों के नाम, अवधि, किराया।",
      ],
      html: "<p>मकान मालिक के लिए अगला कदम: किरायेदार का पुलिस वेरिफिकेशन। UP Police के citizen portal पर <strong>Tenant/PG Verification</strong> है; तरीका <a href=\"/rent-agreement/tenant-police-verification.html#uttar-pradesh\">पुलिस वेरिफिकेशन गाइड</a> में।</p>",
    },
  ],
  official: [
    { href: PORTAL, title: "12 माह तक के किरायानामा की डिजिटल स्टाम्पिंग", note: "IGRSUP लॉगिन" },
    { href: FAQ, title: "किरायानामा डिजिटल स्टाम्पिंग: FAQ", note: "स्टाम्प एवं रजिस्ट्रेशन विभाग, उ.प्र." },
    { href: VERIFY, title: "किरायानामा सत्यापन", note: "आवेदन संख्या से" },
    { href: IGRS, title: "स्टाम्प एवं रजिस्ट्रेशन विभाग, उत्तर प्रदेश", note: "मॉडल डीड, e-Stamp लिंक" },
    { href: "https://uppolice.gov.in/", title: "उत्तर प्रदेश पुलिस", note: "Tenant/PG Verification" },
  ],
  faq: [
    { q: "UP में किरायानामा ऑनलाइन कैसे बनाएं?", a: "igrsup.gov.in पर लॉगिन करके 12 माह तक के किरायानामे की डिजिटल स्टाम्पिंग चुनें, दोनों पक्षों का आधार विवरण भरें, Aadhaar e-KYC करें, किराया-अवधि-प्रीमियम भरें, अपने-आप गिना गया स्टाम्प शुल्क ऑनलाइन भरें और दोनों पक्ष Aadhaar e-Sign करें। फिर प्रिंटआउट लें।" },
    { q: "क्या UP में 11 महीने के किरायानामे का रजिस्ट्रेशन ज़रूरी है?", a: "नहीं। विभाग के FAQ के अनुसार रजिस्ट्रेशन एक्ट की धारा 18(c) के तहत 12 माह तक के किरायानामे का रजिस्ट्रेशन वैकल्पिक है। 12 माह से ज़्यादा अवधि वाले किरायानामे का रजिस्ट्रेशन अनिवार्य है।" },
    { q: "क्या दोनों पक्षों को एक साथ बैठना होगा?", a: "नहीं। विभाग के अनुसार पोर्टल फेसलेस है; मकान मालिक और किरायेदार अलग-अलग जगह से अपने-अपने Aadhaar e-Sign कर सकते हैं।" },
    { q: "UP में किरायानामे पर कितना स्टाम्प शुल्क लगता है?", a: "यह किराए, अवधि और प्रीमियम पर निर्भर है और विभाग का पोर्टल इसे खुद गिनता है। सही राशि पोर्टल पर विवरण भरकर देखें; इंटरनेट पर घूम रही दरों पर भरोसा करने से पहले पोर्टल से मिला लें।" },
    { q: "आधार से मोबाइल लिंक नहीं है तो क्या करें?", a: "e-KYC और e-Sign दोनों के लिए आधार से जुड़े मोबाइल पर OTP आता है। पहले आधार केंद्र पर मोबाइल नंबर लिंक कराएं, फिर पोर्टल पर किरायानामा बनाएं।" },
    { q: "क्या पोर्टल से बना किरायानामा कोर्ट में मान्य है?", a: "विभाग के FAQ के अनुसार हां: उचित स्टाम्प शुल्क चुकाया जाता है, Aadhaar e-Sign IT Act के तहत मान्य है और दस्तावेज़ विभाग के सर्वर पर सुरक्षित रहता है, इसलिए इसे साक्ष्य के रूप में पेश किया जा सकता है।" },
  ],
  related: cards("hub", "format", "police", "aadhaar", "maharashtra", "stUp"),
  aside: [
    { href: PORTAL, label: "🖊️ IGRSUP किरायानामा पोर्टल" },
    { href: "/rent-agreement/", label: "🏠 रेंट एग्रीमेंट गाइड" },
  ],
};
