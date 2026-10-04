import type { Section } from "../doc/types";
import { SOON, DISCLAIMER, cards, ext } from "./common";

// Hub for /affidavit/. Sources (checked 4 Oct 2026):
// - Notaries Act 1952 s.8(1)(e) and s.8(2) (indiacode.gov.in).
// - Oaths Act 1969 s.3(2)(a)/(b) (indiacode.gov.in).
// - Indian Stamp Act 1899, Schedule I, Article 4 "Affidavit" and its
//   exemptions (court use, pension/charitable allowance, Army/Air Force
//   enrolment); several state amendments on indiacode show different amounts,
//   so no amount is stated.
// - Inspector General of Registration, Odisha, e-Stamping leaflet
//   (igrodisha.gov.in/pdf/e-Stamping_engodia.pdf): SHCIL appointed Central
//   Record Keeping Agency (CRA) for e-Stamp certificates; genuineness checked
//   via "Verify e-Stamp Certificate" on shcilestamp.com.
// - BNS 2023 ss.227, 229, 236.
// - PIB 01.08.2014 and DARPG OM 10.05.2013 (self-certification), PIB
//   23.12.2016 (passport annexes as plain-paper self-declarations).
// Child guides list their own sources.
export const hub = {
  title: "एफिडेविट (शपथ पत्र): फॉर्मेट, नियम और प्रक्रिया | SarkariSewa India",
  description: "एफिडेविट क्या है, नोटरी या मजिस्ट्रेट से कैसे attest होता है, stamp paper/e-Stamp, स्व-घोषणा कब काफी है, और नाम, जन्मतिथि, गैप, आय, एंटी-रैगिंग के फॉर्मेट।",
  h1: "एफिडेविट (शपथ पत्र): क्या है, कैसे बनता है और कब ज़रूरी नहीं",
  lead: "एफिडेविट (शपथ पत्र) वह लिखित बयान है जिसे आप शपथ लेकर सच बताते हैं और किसी अधिकृत व्यक्ति के सामने साइन करते हैं। भारत में Notaries Act 1952 की धारा 8 नोटरी को एफिडेविट लेने का अधिकार देती है, और Oaths Act 1969 की धारा 3(2) के तहत हाई कोर्ट (अदालती एफिडेविट के लिए) या राज्य सरकार (बाकी एफिडेविट के लिए) अधिकारियों को शपथ दिलाने का अधिकार देती है। एफिडेविट पर stamp duty राज्य के कानून से तय होती है। पर हर काम में एफिडेविट ज़रूरी नहीं: केंद्र और कई राज्यों के आदेशों के अनुसार जहां कानून शपथ पत्र नहीं मांगता, वहां सादे कागज़ पर स्व-घोषणा (self declaration) मानी जाती है।",
  facts: [
    ["कौन attest करता है", "Notary, या अधिकृत Oath Commissioner/मजिस्ट्रेट"],
    ["कानून", "Notaries Act 1952 (धारा 8), Oaths Act 1969 (धारा 3)"],
    ["stamp duty", "राज्य के हिसाब से अलग; अदालत में दाखिल एफिडेविट पर छूट"],
    ["e-Stamp जांच", ext("https://www.shcilestamp.com/", "shcilestamp.com") + " (जिन राज्यों में SHCIL CRA है)"],
    ["झूठा एफिडेविट", "BNS 2023 धारा 227, 229"],
  ] as [string, string][],
  notice: DISCLAIMER,
  soon: SOON,
  guides: cards("name", "same", "dob", "gap", "income", "ragging", "lost", "self", "builder"),
  sections: [
    {
      id: "kya-hai",
      title: "एफिडेविट क्या है और कौन attest करता है",
      intro: "एफिडेविट में आप तथ्य लिखते हैं, आखिर में \"सत्यापन\" (verification) लिखते हैं कि बातें आपकी जानकारी में सच हैं, और अधिकृत व्यक्ति के सामने शपथ लेकर साइन करते हैं।",
      table: {
        head: ["कौन", "कानूनी आधार", "कब"],
        rows: [
          ["Notary (नोटरी)", "Notaries Act 1952, धारा 8(1)(e): \"administer oath to, or take affidavit from, any person\"", "ज़्यादातर गैर-अदालती काम: कॉलेज, बैंक, दफ्तर"],
          ["Oath Commissioner (अदालत से अधिकृत)", "Oaths Act 1969, धारा 3(2)(a): हाई कोर्ट द्वारा अधिकृत", "अदालत में दाखिल होने वाले एफिडेविट"],
          ["मजिस्ट्रेट/अधिकृत अधिकारी", "Oaths Act 1969, धारा 3(2)(b): राज्य सरकार द्वारा अधिकृत", "दूसरे एफिडेविट; कुछ दफ्तर खास तौर पर मजिस्ट्रेट मांगते हैं (जैसे गजट में अलग surname के लिए First Class Magistrate)"],
        ],
      },
      callout: { kind: "warn", html: "Notaries Act की धारा 8(2) के अनुसार नोटरी का काम तभी notarial act माना जाता है जब वह उसके साइन और <strong>official मुहर</strong> के साथ हो। एफिडेविट पर दोनों देखें और खुद जाकर, पहचान पत्र के साथ साइन करें।" },
    },
    {
      id: "stamp",
      title: "Stamp paper और e-Stamp: क्या जानना ज़रूरी है",
      list: [
        "<strong>Stamp duty राज्य तय करते हैं:</strong> Indian Stamp Act 1899 की अनुसूची I के Article 4 में एफिडेविट पर stamp duty है, पर कई राज्यों ने अपने संशोधन/Stamp Act से अलग राशि रखी है। इसलिए हम कोई एक राशि नहीं लिख रहे; अपने राज्य के पंजीयन/स्टांप विभाग या जिस दफ्तर में देना है, उससे पूछें।",
        "<strong>छूट:</strong> केंद्रीय Stamp Act के Article 4 में अदालत या अदालत के अधिकारी के सामने तुरंत दाखिल/इस्तेमाल होने वाले एफिडेविट, सिर्फ पेंशन या चैरिटेबल भत्ता पाने के लिए दिए एफिडेविट, और सेना/वायुसेना में भर्ती की शर्त वाले एफिडेविट पर छूट लिखी है। आपके राज्य का कानून देखें।",
        "<strong>e-Stamp:</strong> कई राज्यों में stamp duty e-Stamp सर्टिफिकेट से भरी जाती है। जैसे ओडिशा के पंजीयन विभाग के अनुसार Stock Holding Corporation of India (SHCIL) e-Stamp सर्टिफिकेट के लिए Central Record Keeping Agency (CRA) है और सर्टिफिकेट असली है या नहीं, यह shcilestamp.com पर \"Verify e-Stamp Certificate\" से जांचा जा सकता है।",
        "<strong>सादा कागज़ कब:</strong> जब फॉर्म/दफ्तर स्व-घोषणा या undertaking मांगे, या एफिडेविट Article 4 की छूट में आता हो।",
      ],
      callout: { kind: "info", html: SOON },
    },
    {
      id: "antar",
      title: "एफिडेविट, स्व-घोषणा और self-attestation में फर्क",
      table: {
        head: ["", "एफिडेविट", "स्व-घोषणा", "Self-attested कॉपी"],
        rows: [
          ["क्या है", "शपथ लेकर दिया लिखित बयान", "सादे कागज़/फॉर्म पर साइन किया बयान", "फोटोकॉपी पर आपके साइन"],
          ["किसके सामने", "Notary/Oath Commissioner/मजिस्ट्रेट", "किसी के सामने नहीं", "किसी के सामने नहीं"],
          ["खर्च", "stamp paper/e-Stamp + नोटरी शुल्क", "नहीं", "नहीं"],
          ["झूठ पर", "BNS धारा 227/229", "BNS धारा 236", "झूठी या बदली हुई कॉपी देने पर कानूनी कार्रवाई"],
          ["कब", "कानून या संस्था शपथ पत्र मांगे", "कानून एफिडेविट न मांगे (DARPG/PIB 2014)", "राजपत्रित अधिकारी के attestation की जगह"],
        ],
      },
      html: '<p>विस्तार से: <a href="/affidavit/self-declaration.html">स्व-घोषणा कहां एफिडेविट की जगह मान्य है</a>।</p>',
    },
    {
      id: "kaise",
      title: "एफिडेविट बनवाने के 6 कदम",
      steps: [
        "<strong>फॉर्मेट तय करें:</strong> जिस दफ्तर/कॉलेज में देना है, उसका फॉर्मेट हो तो वही लें। न हो तो इस गाइड के नमूने अपनी स्थिति के हिसाब से बदलें।",
        "<strong>पूछें कि क्या एफिडेविट ज़रूरी है:</strong> स्व-घोषणा या ऑनलाइन undertaking (जैसे एंटी-रैगिंग) काफी हो तो पैसे बचाएं।",
        "<strong>Stamp paper/e-Stamp:</strong> अपने राज्य का, सही राशि का, और जिसके नाम से एफिडेविट है उसी के नाम से।",
        "<strong>मैटर टाइप करें:</strong> नाम, पिता/पति का नाम, उम्र, पूरा पता, दस्तावेज़ों के नंबर सही-सही; आखिर में सत्यापन, स्थान और तारीख।",
        "<strong>खुद जाकर साइन करें:</strong> Notary/अधिकृत अधिकारी के सामने, original पहचान पत्र के साथ; मुहर, साइन और रजिस्टर एंट्री देखें।",
        "<strong>कॉपी रखें:</strong> original जमा करें, स्कैन और फोटोकॉपी अपने पास रखें।",
      ],
    },
    {
      id: "galtiyan",
      title: "हर एफिडेविट में होने वाली आम गलतियां",
      list: [
        "किसी और के लिए साइन करना या बिना पढ़े साइन करना। एफिडेविट हमेशा वही व्यक्ति साइन करे जिसका बयान है।",
        "नाम की स्पेलिंग या जन्मतिथि दस्तावेज़ों से अलग लिखना।",
        "एफिडेविट को दस्तावेज़ का सुधार समझना: इससे आधार, मार्कशीट या जन्म प्रमाण पत्र अपने-आप नहीं बदलते।",
        "पुराने नियम मानकर बेवजह एफिडेविट बनवाना (जैसे CBSE ने 2015 से डुप्लीकेट मार्कशीट के लिए एफिडेविट की शर्त हटा दी, पासपोर्ट annexures 2016 से स्व-घोषणा हैं)।",
        "झूठा बयान: शपथ पर झूठ BNS 2023 की धारा 229 के तहत 3 साल तक (अदालती मामले में 7 साल तक) की कैद और जुर्माने वाला अपराध है।",
      ],
    },
  ] as Section[],
  official: [
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "Notaries Act 1952, Oaths Act 1969, Indian Stamp Act 1899, BNS 2023" },
    { href: "https://www.pib.gov.in/newsite/printrelease.aspx?relid=107872", title: "PIB 01.08.2014: एफिडेविट की जगह self-certification" },
    { href: "https://www.igrodisha.gov.in/pdf/e-Stamping_engodia.pdf", title: "ओडिशा पंजीयन विभाग: e-Stamping जानकारी", note: "e-Stamp का उदाहरण" },
    { href: "https://deptpub.gov.in/document-category/con-guidelines/", title: "प्रकाशन विभाग: नाम परिवर्तन गाइडलाइन" },
    { href: "https://www.antiragging.in/", title: "Anti-Ragging पोर्टल (UGC)" },
  ],
  faq: [
    { q: "एफिडेविट कौन बना सकता है?", a: "मैटर कोई भी टाइप कर सकता है, पर शपथ Notary (Notaries Act 1952, धारा 8) या Oaths Act 1969 की धारा 3(2) के तहत अधिकृत Oath Commissioner/मजिस्ट्रेट के सामने होती है। साइन वही व्यक्ति करता है जिसका बयान है।" },
    { q: "एफिडेविट कितने रुपये के stamp paper पर बनता है?", a: "यह राज्य के Stamp Act/संशोधन से तय होता है और अलग-अलग राज्यों में अलग है। अदालत में दाखिल और पेंशन के लिए दिए एफिडेविट पर केंद्रीय कानून में छूट है। अपने राज्य के स्टांप विभाग या जिस दफ्तर में देना है, उससे पूछें।" },
    { q: "क्या एफिडेविट ऑनलाइन बन सकता है?", a: "कई राज्यों में stamp duty e-Stamp से भरी जा सकती है और मैटर ऑनलाइन तैयार हो सकता है, पर शपथ और साइन अधिकृत व्यक्ति के सामने होते हैं। जहां दफ्तर स्व-घोषणा या ऑनलाइन undertaking मानता है, वहां नोटरी की ज़रूरत नहीं।" },
    { q: "क्या हर सरकारी काम में एफिडेविट ज़रूरी है?", a: "नहीं। केंद्र सरकार (DARPG 2013, PIB 2014) ने कहा है कि जहां कानून में एफिडेविट ज़रूरी नहीं, वहां स्व-घोषणा मानी जाए; महाराष्ट्र और पुडुचेरी जैसे राज्यों ने इसके आदेश जारी किए। पासपोर्ट annexures भी 2016 से सादे कागज़ पर स्व-घोषणा हैं।" },
    { q: "e-Stamp असली है या नहीं, कैसे जांचें?", a: "जिन राज्यों में SHCIL Central Record Keeping Agency है, वहां shcilestamp.com पर \"Verify e-Stamp Certificate\" से जांच होती है (ओडिशा पंजीयन विभाग की जानकारी के अनुसार)। दूसरे राज्यों में अपने पंजीयन विभाग की वेबसाइट देखें।" },
    { q: "झूठा एफिडेविट देने पर क्या सज़ा है?", a: "शपथ पर जानबूझकर झूठा बयान भारतीय न्याय संहिता 2023 की धारा 227 के तहत झूठा साक्ष्य है; धारा 229 में अदालती कार्यवाही में 7 साल तक और बाकी मामलों में 3 साल तक की कैद और जुर्माना है। झूठी स्व-घोषणा पर धारा 236 लागू होती है।" },
    { q: "एफिडेविट कितने समय तक मान्य रहता है?", a: "कानून में एफिडेविट की कोई आम वैधता अवधि तय नहीं है; यह मांगने वाले दफ्तर पर निर्भर है। कई जगह हाल की तारीख का एफिडेविट मांगा जाता है, जैसे प्रकाशन विभाग नाम परिवर्तन के लिए एक साल से पुराने दस्तावेज़ नहीं लेता।" },
  ],
};
