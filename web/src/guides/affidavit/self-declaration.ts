import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, SOON, DISCLAIMER, crumbs, cards, sample } from "./common";

// Sources (checked 4 Oct 2026):
// - PIB, Prime Minister's Office, 01.08.2014 "PM encourages self-certification
//   in place of affidavits and attestations" (pib.gov.in relid=107872): all
//   Union Ministries/Departments and State Governments asked to provide for
//   self-certification in place of affidavits, and self-certification in place
//   of attestation by Gazetted Officers; originals produced at the final stage;
//   affidavits not required by law to be done away with; IPC applies to false
//   self-certification.
// - DARPG Office Memorandum No.K-11022/67/2012-AR dated 10.05.2013, as cited in
//   Government of Puducherry G.O.Ms.No.3/2015/A2/ARW dated 24.03.2015
//   (py.gov.in/sites/default/files/arw24032015.pdf). The G.O.: no affidavit from
//   applicants for admission/services/schemes/employment except where required
//   by statute or law; self-declaration accepted instead, standard format with a
//   self-attested passport photo; departments to display which affidavits are
//   replaced and where affidavits continue by law; self-attested copies instead
//   of Gazetted Officer attestation; originals only from finally selected/
//   admitted candidates. DARPG's own copy (darpg.gov.in/sites/default/files/
//   Adoption_of_self_certification.pdf) returned 404 from our network.
// - Maharashtra GAD G.R. No. Prasudha 1614/345/Pra.Kra.71/18-A dated 09.03.2015
//   (rd.mahaonline.gov.in/PDF/SelfDeclaration.pdf): affidavit only where an
//   existing law/rule requires it; otherwise self-declaration; self-attested
//   copies instead of attested copies.
// - PIB (MEA) 23.12.2016 "Announcement of new Passport Rules": all annexes are
//   self-declarations on plain paper; no Notary/Executive Magistrate/First Class
//   Judicial Magistrate attestation; annexes reduced from 15 to 9.
// - UGC D.O. 24.05.2023: anti-ragging undertaking online, no print/sign.
// - RBD Act 1969 s.13(2) as amended: self-attested document for registration
//   between 30 days and 1 year.
// - Aaple Sarkar income certificate checklist: Self-Declaration mandatory.
// - BNS 2023 s.236 (false statement in a declaration receivable as evidence).
export const selfDeclaration: DocGuide = {
  crumbs: crumbs("स्व-घोषणा (Self Declaration)"),
  docHi: "स्व-घोषणा",
  title: "स्व-घोषणा पत्र: कहां एफिडेविट की जगह मान्य | SarkariSewa India",
  description: "सरकार ने कई कामों में नोटरी एफिडेविट की जगह स्व-घोषणा (Self Declaration) मानने को कहा है: official आदेश, कहां मान्य, कहां नहीं, नमूना और सावधानियां।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "स्व-घोषणा (Self Declaration): कहां एफिडेविट की जगह मान्य है",
  lead: "स्व-घोषणा पत्र (self declaration) सादे कागज़ पर आपका साइन किया बयान है, जिसके लिए stamp paper या नोटरी की ज़रूरत नहीं होती। भारत सरकार के प्रशासनिक सुधार विभाग (DARPG) ने 10 मई 2013 के कार्यालय ज्ञापन से और प्रधानमंत्री कार्यालय की 1 अगस्त 2014 की पहल से सभी केंद्रीय मंत्रालयों और राज्य सरकारों से कहा कि जहां कानून में एफिडेविट ज़रूरी नहीं, वहां स्व-घोषणा और self-attested कॉपी मानी जाएं; मूल दस्तावेज़ आखिरी चरण में दिखाए जाएं। कई राज्यों (जैसे महाराष्ट्र, पुडुचेरी) ने इसके आदेश जारी किए। जहां कोई कानून या नियम एफिडेविट मांगता है, वहां एफिडेविट ही देना होगा।",
  facts: [
    ["केंद्र का आदेश", "DARPG OM K-11022/67/2012-AR, 10.05.2013"],
    ["PIB घोषणा", "1 अगस्त 2014 (प्रधानमंत्री कार्यालय)"],
    ["खर्च", "stamp paper और नोटरी नहीं"],
    ["झूठी घोषणा", "BNS 2023 धारा 236"],
  ],
  notice: DISCLAIMER,
  sections: [
    {
      id: "aadesh",
      title: "सरकार के आदेश क्या कहते हैं",
      list: [
        "<strong>केंद्र (PIB, 01.08.2014):</strong> सभी केंद्रीय मंत्रालयों/विभागों और राज्य सरकारों से एफिडेविट की जगह स्व-प्रमाणन (self-certification) और राजपत्रित अधिकारी के attestation की जगह self-attestation की व्यवस्था करने को कहा गया। कानून में ज़रूरी न होने वाले सभी एफिडेविट धीरे-धीरे खत्म करने का लक्ष्य है। झूठे self-certification पर दंड कानून लागू होता है।",
        "<strong>पुडुचेरी (G.O. 24.03.2015, DARPG के 2013 के OM के आधार पर):</strong> एडमिशन, सरकारी सेवाओं, योजनाओं और नौकरी के आवेदकों से एफिडेविट नहीं मांगा जाएगा, सिवाय जहां कानून में ज़रूरी हो; तय फॉर्मेट में स्व-घोषणा पर self-attested पासपोर्ट फोटो लगेगी; विभाग अपनी वेबसाइट/नोटिस बोर्ड पर बताएंगे कि कौन-से एफिडेविट स्व-घोषणा से बदले गए और कहां कानून की वजह से जारी रहेंगे; मूल दस्तावेज़ सिर्फ अंतिम रूप से चुने/दाखिल उम्मीदवारों से।",
        "<strong>महाराष्ट्र (शासन निर्णय 09.03.2015):</strong> सभी सरकारी दफ्तरों और स्थानीय निकायों में जहां मौजूदा कानून/नियम से एफिडेविट ज़रूरी है वहीं एफिडेविट; बाकी जगह स्व-घोषणा पत्र, और attested कॉपी की जगह self-attested कॉपी।",
      ],
      callout: { kind: "info", html: "यह नियम हर राज्य और हर विभाग में एक जैसा लागू नहीं हुआ है। फॉर्म या पोर्टल पर साफ \"Affidavit\" लिखा है तो पहले उसी दफ्तर से पूछें कि स्व-घोषणा चलेगी या नहीं।" },
    },
    {
      id: "kahan",
      title: "कहां स्व-घोषणा मान्य है: जांचे हुए उदाहरण",
      table: {
        head: ["काम", "क्या लगता है", "official आधार"],
        rows: [
          ["पासपोर्ट के annexures", "सादे कागज़ पर स्व-घोषणा; Notary/मजिस्ट्रेट attestation नहीं", "विदेश मंत्रालय, PIB 23.12.2016"],
          ["कॉलेज में एंटी-रैगिंग undertaking", "ऑनलाइन undertaking; प्रिंट/साइन/नोटरी नहीं", "UGC पत्र 24.05.2023 (<a href=\"/affidavit/anti-ragging.html\">गाइड</a>)"],
          ["महाराष्ट्र में आय प्रमाण पत्र", "स्व-घोषणा अनिवार्य दस्तावेज़", "Aaple Sarkar चेकलिस्ट (<a href=\"/affidavit/income.html\">गाइड</a>)"],
          ["30 दिन से 1 साल के अंदर जन्म/मृत्यु पंजीकरण", "ज़िला रजिस्ट्रार की अनुमति, फीस और self-attested दस्तावेज़", "जन्म-मृत्यु पंजीकरण अधिनियम, धारा 13(2) (<a href=\"/affidavit/date-of-birth.html\">गाइड</a>)"],
          ["पुडुचेरी/महाराष्ट्र के सरकारी दफ्तरों की सेवाएं", "जहां कानून एफिडेविट न मांगे, स्व-घोषणा", "राज्य सरकार के 2015 के आदेश"],
        ],
      },
    },
    {
      id: "kahan-nahi",
      title: "कहां अब भी एफिडेविट चाहिए",
      list: [
        "जहां किसी <strong>कानून या नियम</strong> में शपथ पत्र लिखा है; सरकार के आदेश भी यही छूट देते हैं।",
        "<strong>अदालत</strong> में दाखिल होने वाले एफिडेविट (इनके लिए Oaths Act 1969 की धारा 3(2)(a) में हाई कोर्ट द्वारा अधिकृत व्यक्ति शपथ दिलाते हैं)।",
        "गजट में <strong>अलग surname अपनाने</strong> पर प्रकाशन विभाग First Class Magistrate से attest एफिडेविट मांगता है (<a href=\"/affidavit/name-change.html\">नाम परिवर्तन गाइड</a>)।",
        "जहां संस्था का अपना फॉर्मेट \"affidavit\" मांगता है और वह स्व-घोषणा नहीं मानती (जैसे कुछ कॉलेजों का <a href=\"/affidavit/gap-certificate.html\">गैप एफिडेविट</a>)।",
      ],
    },
    {
      id: "self-attest",
      title: "Self-attestation और स्व-घोषणा में फर्क",
      table: {
        head: ["", "Self-attested कॉपी", "स्व-घोषणा पत्र", "एफिडेविट"],
        rows: [
          ["क्या है", "दस्तावेज़ की फोटोकॉपी पर आपके साइन कि यह असली की सही कॉपी है", "किसी तथ्य के बारे में आपका लिखित, साइन किया बयान", "Notary/Oath Commissioner के सामने शपथ लेकर दिया बयान"],
          ["किसकी जगह", "राजपत्रित अधिकारी का attestation", "बिना कानूनी ज़रूरत वाला एफिडेविट", "जहां कानून शपथ मांगे"],
          ["खर्च", "नहीं", "नहीं", "stamp paper/e-Stamp (राज्य के हिसाब से) + नोटरी शुल्क"],
          ["मूल दस्तावेज़", "अंतिम चरण में दिखाने होते हैं", "मांगे जाने पर सबूत", "सबूत साथ लगाने होते हैं"],
        ],
      },
    },
    {
      id: "namuna",
      title: "स्व-घोषणा का नमूना",
      intro: "नीचे का नमूना पुडुचेरी सरकार के 2015 के आदेश के मानक फॉर्मेट पर आधारित है। जिस दफ्तर का अपना फॉर्मेट हो, वही भरें। फ्री में भरकर प्रिंट करने के लिए हमारा <a href=\"/tools/self-declaration-builder.html\">Self Declaration बिल्डर</a> भी है।",
      html: sample(
        "नमूना: स्व-घोषणा पत्र (Self Declaration)",
        `स्व-घोषणा पत्र                                   [पासपोर्ट साइज़ फोटो, self-attested]

मैं, [पूरा नाम], पुत्र/पुत्री/पत्नी [पिता/पति का नाम], उम्र [__] वर्ष, निवासी [पूरा पता], ज़िला [__], राज्य [__], घोषणा करता/करती हूं कि:

[यहां वह तथ्य लिखें जिसकी घोषणा करनी है, जैसे: मेरे परिवार की वार्षिक आय ₹___ है / मैं ___ से ___ तक इस पते पर रह रहा/रही हूं]

ऊपर दी गई और संलग्न दस्तावेज़ों में दी गई जानकारी मेरी जानकारी और विश्वास में सही है और कुछ छिपाया नहीं गया है। मैं जानता/जानती हूं कि जानकारी झूठी पाए जाने पर मुझ पर कानून के अनुसार कार्रवाई होगी और मेरे द्वारा लिए गए सभी लाभ वापस ले लिए जाएंगे।

स्थान: [__]          दिनांक: [__]
                                         हस्ताक्षर`
      ),
    },
    {
      id: "savdhani",
      title: "सावधानियां और आम गलतियां",
      list: [
        "<strong>स्व-घोषणा भी कानूनी बयान है:</strong> भारतीय न्याय संहिता 2023 की धारा 236 के अनुसार ऐसी घोषणा में जानबूझकर झूठा बयान झूठे साक्ष्य जैसा दंडनीय है।",
        "बिना पूछे नोटरी एफिडेविट पर पैसे खर्च न करें; पहले फॉर्म/वेबसाइट पढ़ें कि \"self declaration\" या \"self attested\" लिखा है या नहीं।",
        "फोटो पर क्रॉस-साइन, तारीख और स्थान लिखना न भूलें।",
        "self-attested कॉपी देने का मतलब यह नहीं कि मूल दस्तावेज़ कभी नहीं दिखाने; अंतिम चरण में मूल दस्तावेज़ मांगे जाते हैं।",
        "अगर दफ्तर स्व-घोषणा लेने से मना करे और कोई कानून न बताए, तो लिखित में कारण पूछें या उस विभाग की शिकायत व्यवस्था का इस्तेमाल करें।",
      ],
      callout: { kind: "info", html: SOON },
    },
  ],
  official: [
    { href: "https://www.pib.gov.in/newsite/printrelease.aspx?relid=107872", title: "PIB 01.08.2014: एफिडेविट की जगह self-certification" },
    { href: "https://py.gov.in/sites/default/files/arw24032015.pdf", title: "पुडुचेरी सरकार G.O. 24.03.2015", note: "DARPG OM 10.05.2013 के आधार पर, मानक फॉर्मेट सहित" },
    { href: "https://rd.mahaonline.gov.in/PDF/SelfDeclaration.pdf", title: "महाराष्ट्र शासन निर्णय 09.03.2015" },
    { href: "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=155792", title: "PIB 23.12.2016: पासपोर्ट annexures स्व-घोषणा" },
    { href: "https://darpg.gov.in/", title: "प्रशासनिक सुधार और लोक शिकायत विभाग (DARPG)" },
  ],
  faq: [
    { q: "क्या स्व-घोषणा पत्र एफिडेविट की जगह मान्य है?", a: "जहां किसी कानून या नियम में एफिडेविट ज़रूरी नहीं, वहां केंद्र सरकार (DARPG 2013, PIB 2014) ने स्व-घोषणा मानने को कहा है, और कई राज्यों ने आदेश जारी किए हैं। जहां कानून शपथ पत्र मांगता है या अदालत में देना है, वहां एफिडेविट ही चलेगा।" },
    { q: "स्व-घोषणा के लिए stamp paper या नोटरी चाहिए?", a: "नहीं। यह सादे कागज़ या फॉर्म पर आपका साइन किया बयान है। कुछ फॉर्मेट में self-attested पासपोर्ट फोटो लगानी होती है।" },
    { q: "पासपोर्ट के annexure पर नोटरी कराना ज़रूरी है?", a: "विदेश मंत्रालय की 23.12.2016 की घोषणा के अनुसार सभी annexures सादे कागज़ पर स्व-घोषणा हैं और Notary/Executive Magistrate/First Class Judicial Magistrate के attestation की ज़रूरत नहीं।" },
    { q: "Self-attested कॉपी कैसे करें?", a: "दस्तावेज़ की फोटोकॉपी पर अपने साइन करें (कई जगह साथ में तारीख और \"self attested\" लिखा जाता है)। सरकार के आदेशों के अनुसार मूल दस्तावेज़ आखिरी चरण में दिखाने होते हैं।" },
    { q: "झूठी स्व-घोषणा पर क्या सज़ा है?", a: "भारतीय न्याय संहिता 2023 की धारा 236 के अनुसार किसी ऐसी घोषणा में, जिसे कानून सबूत के रूप में मानता है, जानबूझकर झूठा बयान झूठे साक्ष्य की तरह दंडनीय है। साथ ही उस घोषणा से मिला लाभ वापस लिया जा सकता है।" },
    { q: "दफ्तर स्व-घोषणा नहीं ले रहा, क्या करें?", a: "पूछें कि किस कानून/नियम में एफिडेविट ज़रूरी है। पुडुचेरी जैसे आदेशों में विभागों को यह सूची सार्वजनिक करनी थी। जवाब न मिले तो उस विभाग की शिकायत व्यवस्था या CPGRAMS जैसे शिकायत पोर्टल का इस्तेमाल करें।" },
    { q: "क्या कोई फ्री स्व-घोषणा फॉर्मेट मिलेगा?", a: "हां, ऊपर नमूना दिया है और SarkariSewa का Self Declaration बिल्डर टूल फ्री में फॉर्मेट भरकर प्रिंट करने देता है। जिस दफ्तर का अपना फॉर्मेट हो, वही इस्तेमाल करें।" },
  ],
  related: cards("builder", "income", "ragging", "dob", "passport", "hub"),
  aside: [
    { href: "/tools/self-declaration-builder.html", label: "🧾 फ्री Self Declaration बिल्डर" },
    { href: "/affidavit/", label: "📜 सभी एफिडेविट गाइड" },
  ],
};
