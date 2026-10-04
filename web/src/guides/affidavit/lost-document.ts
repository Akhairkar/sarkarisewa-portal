import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, SOON, DISCLAIMER, crumbs, cards, sample } from "./common";

// Sources (checked 4 Oct 2026):
// - CBSE Notification File No. CBSE/Coord/EC-14-02/2015 dated 10.07.2015
//   (cbse.gov.in/cbsenew/bylawspdf/Amendment to examination byelaws Duplicate
//   certificate_10JUL2015.pdf): Rule 67(i) amended. Old rule needed an affidavit
//   before a First Class Magistrate or Governing Body member plus a press
//   clipping; amended rule needs (i) application on prescribed form,
//   (ii) prescribed fee, (iii) publication of the loss/theft/mutilation in a
//   leading national-level newspaper in Hindi or English and the full page of
//   the press clipping in original. Rule 67(ii): no duplicate if documents are
//   found manipulated/forged.
// - CBSE Notification No. CE/CBSE/2024 dated 04.09.2024: CBSE gives soft copies
//   of certificates in DigiLocker; UGC has told institutions to accept digital
//   copies for admission; hard-copy requests through the Duplicate Academic
//   Document System (cbseit.in/cbseweb/dads/home.aspx).
// - Department of Publication, "Guidelines for notification of lost/destroyed/
//   stolen documents notice" (Small Savings and Lotteries certificates):
//   newspaper advertisement, attested FIR copy, "an affidavit or undertaking"
//   with the same matter, witnesses, CD, ID, fee via bharatkosh. Used here as an
//   example of a process that combines FIR + affidavit + public notice.
// - UP Police website (uppolice.gov.in): citizen services list "Lost Article
//   Report" online.
// - BNS 2023 ss.227/229 (false statement on oath).
// Fee amounts in CBSE/DoP documents are old, so no amount is stated.
export const lostDocument: DocGuide = {
  crumbs: crumbs("दस्तावेज़ खोने का एफिडेविट"),
  docHi: "खोए दस्तावेज़ का एफिडेविट",
  title: "दस्तावेज़ खोने का एफिडेविट: मार्कशीट और ID | SarkariSewa India",
  description: "मार्कशीट, सर्टिफिकेट या ID खो जाए तो एफिडेविट कब ज़रूरी है और कब नहीं: पुलिस लॉस्ट रिपोर्ट, अखबार में सूचना, CBSE डुप्लीकेट का official नियम और नमूना फॉर्मेट।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "दस्तावेज़ खोने का एफिडेविट: खोई मार्कशीट, सर्टिफिकेट या ID",
  lead: "दस्तावेज़ खोने पर तीन काम होते हैं: पुलिस में गुम होने की रिपोर्ट (कई राज्यों में ऑनलाइन), जारी करने वाली संस्था से डुप्लीकेट का आवेदन, और जहां मांगा जाए वहां एफिडेविट या अखबार में सूचना। हर जगह एफिडेविट ज़रूरी नहीं: CBSE ने 10 जुलाई 2015 को अपना नियम बदलकर डुप्लीकेट सर्टिफिकेट के लिए मजिस्ट्रेट के सामने एफिडेविट की शर्त हटा दी; अब आवेदन, फीस और किसी राष्ट्रीय स्तर के हिंदी/अंग्रेज़ी अखबार में सूचना का पूरा पन्ना चाहिए। एफिडेविट बनवाने से पहले उस संस्था का मौजूदा नियम देखें जिससे डुप्लीकेट लेना है।",
  facts: [
    ["पहला कदम", "पुलिस में गुम होने की रिपोर्ट (Lost Report)"],
    ["CBSE डुप्लीकेट", "आवेदन + फीस + अखबार की सूचना (2015 से एफिडेविट नहीं)"],
    ["डिजिटल कॉपी", "CBSE के दस्तावेज़ DigiLocker में"],
    ["एफिडेविट", "सिर्फ जहां संस्था/दफ्तर मांगे"],
  ],
  notice: DISCLAIMER,
  sections: [
    {
      id: "kram",
      title: "दस्तावेज़ खो जाए तो सही क्रम",
      steps: [
        "<strong>डिजिटल कॉपी देखें:</strong> CBSE अपने सर्टिफिकेट की soft copy छात्र के DigiLocker में देता है, और CBSE की 2024 की अधिसूचना के अनुसार UGC ने उच्च शिक्षा संस्थानों से एडमिशन में डिजिटल कॉपी मानने को कहा है। कई बार डुप्लीकेट की ज़रूरत ही नहीं पड़ती। <a href=\"/service/digilocker.html\">डिजिलॉकर गाइड</a> देखें।",
        "<strong>पुलिस रिपोर्ट:</strong> अपने राज्य की पुलिस वेबसाइट/ऐप पर \"Lost Article/Lost Report\" या नज़दीकी थाने में गुम होने की रिपोर्ट दर्ज कराएं (जैसे UP पुलिस की वेबसाइट पर Lost Article Report सेवा है)। चोरी हुई हो तो FIR। रिपोर्ट की कॉपी/नंबर संभालकर रखें।",
        "<strong>संस्था का नियम पढ़ें:</strong> बोर्ड, यूनिवर्सिटी, बैंक या विभाग की वेबसाइट पर डुप्लीकेट का फॉर्म और दस्तावेज़ सूची देखें: एफिडेविट, अखबार की सूचना, पुलिस रिपोर्ट, फोटो, फीस।",
        "<strong>अखबार में सूचना</strong> (अगर मांगी गई हो): संस्था ने जिस तरह का अखबार कहा है (जैसे CBSE: राष्ट्रीय स्तर का हिंदी या अंग्रेज़ी अखबार) उसी में; पूरा पन्ना original रखें, कटिंग नहीं।",
        "<strong>एफिडेविट</strong> (अगर मांगा गया हो): संस्था के फॉर्मेट में, नहीं तो नीचे के नमूने जैसा, Notary/अधिकृत अधिकारी के सामने।",
        "<strong>आवेदन और फीस:</strong> सब दस्तावेज़ के साथ जमा करें; रसीद/आवेदन नंबर सेव करें।",
      ],
    },
    {
      id: "cbse",
      title: "उदाहरण: CBSE डुप्लीकेट मार्कशीट/सर्टिफिकेट",
      table: {
        head: ["", "2015 से पहले", "10.07.2015 के संशोधन के बाद (नियम 67(i))"],
        rows: [
          ["एफिडेविट", "First Class Magistrate या CBSE गवर्निंग बॉडी के सदस्य के सामने ज़रूरी", "<strong>ज़रूरी नहीं</strong>"],
          ["अखबार", "किसी प्रमुख अखबार में सूचना, प्रेस कटिंग", "राष्ट्रीय स्तर के प्रमुख हिंदी या अंग्रेज़ी अखबार में सूचना, <strong>पूरा पन्ना original</strong>"],
          ["आवेदन और फीस", "तय फॉर्म और फीस", "तय फॉर्म और फीस"],
        ],
      },
      callout: { kind: "info", html: "CBSE की 2024 की अधिसूचना के अनुसार हार्ड कॉपी के अनुरोध Duplicate Academic Document System (DADS) से होते हैं। फीस और मौजूदा फॉर्म CBSE की वेबसाइट पर देखें। नियम 67(ii) के अनुसार अगर पुराने दस्तावेज़ में छेड़छाड़/जालसाज़ी पाई जाए तो डुप्लीकेट नहीं मिलता। दूसरे राज्य बोर्ड और यूनिवर्सिटी के अपने नियम हैं।" },
    },
    {
      id: "kahan",
      title: "किस दस्तावेज़ के लिए कहां जाएं",
      table: {
        head: ["खोया दस्तावेज़", "डुप्लीकेट कौन देता है", "ध्यान रखें"],
        rows: [
          ["10वीं/12वीं मार्कशीट, सर्टिफिकेट", "संबंधित बोर्ड (CBSE, राज्य बोर्ड)", "पहले DigiLocker देखें; बोर्ड का मौजूदा नियम पढ़ें"],
          ["डिग्री/यूनिवर्सिटी मार्कशीट", "यूनिवर्सिटी का परीक्षा विभाग", "यूनिवर्सिटी का फॉर्म; कई जगह पुलिस रिपोर्ट/एफिडेविट मांगा जाता है"],
          ["आधार", "UIDAI", "पहले UIDAI की official वेबसाइट पर e-Aadhaar डाउनलोड/रीप्रिंट का विकल्प देखें"],
          ["पैन कार्ड", "आयकर विभाग", "आयकर विभाग की official वेबसाइट पर रीप्रिंट/डुप्लीकेट की प्रक्रिया देखें"],
          ["सरकारी बचत/निवेश प्रमाण पत्र", "जारी करने वाला विभाग", "जैसे प्रकाशन विभाग की गाइडलाइन में दिल्ली के Small Savings प्रमाण पत्रों के लिए FIR की attested कॉपी, एफिडेविट या undertaking और अखबार की सूचना मांगी गई है"],
        ],
      },
    },
    {
      id: "namuna",
      title: "दस्तावेज़ खोने के एफिडेविट का नमूना",
      html: sample(
        "नमूना: मूल दस्तावेज़ गुम होने का शपथ पत्र",
        `शपथ पत्र

मैं, [पूरा नाम], पुत्र/पुत्री [पिता/माता का नाम], उम्र [__] वर्ष, निवासी [पूरा पता], शपथपूर्वक कहता/कहती हूं कि:

1. मेरी/मेरा [दस्तावेज़ का नाम, जैसे कक्षा 12 की मार्कशीट], [जारी करने वाली संस्था], वर्ष [__], रोल/क्रमांक नं. [__], मेरे नाम से जारी हुई थी।
2. यह दस्तावेज़ दिनांक [__] को [स्थान/परिस्थिति, जैसे यात्रा के दौरान बस में] गुम हो गया/चोरी हो गया।
3. मैंने इसकी सूचना [थाने का नाम / ऑनलाइन पोर्टल] पर दिनांक [__] को दी, रिपोर्ट/FIR नं. [__]।
4. यह दस्तावेज़ मैंने किसी को गिरवी, बेचा या सौंपा नहीं है, और न ही यह किसी विवाद या अदालती मामले में जमा है।
5. अगर मूल दस्तावेज़ मिल जाता है, तो मैं डुप्लीकेट [संस्था] को लौटा दूंगा/दूंगी और मूल का दुरुपयोग नहीं करूंगा/करूंगी।
6. यह शपथ पत्र [संस्था] से डुप्लीकेट [दस्तावेज़] प्राप्त करने के लिए दिया जा रहा है।

सत्यापन: ऊपर लिखी बातें मेरी जानकारी और विश्वास में सही हैं, कुछ छिपाया नहीं गया है।

स्थान: [__]          दिनांक: [__]
                                         शपथकर्ता के हस्ताक्षर`
      ),
      list: [
        "<strong>साथ लगाएं:</strong> पुलिस रिपोर्ट/FIR की कॉपी, अखबार का पूरा पन्ना (अगर मांगा गया), खोए दस्तावेज़ की फोटोकॉपी हो तो वह, पहचान पत्र, फोटो।",
      ],
    },
    {
      id: "attest",
      title: "attest कराना और आम गलतियां",
      list: [
        "जिस अधिकारी के सामने साइन मांगे गए हों वहीं जाएं; न लिखा हो तो Notary (Notaries Act 1952, धारा 8) या अधिकृत Oath Commissioner। stamp paper/e-Stamp की राशि राज्य के नियम से तय होती है।",
        "<strong>गलती:</strong> पुलिस रिपोर्ट के बिना सिर्फ एफिडेविट लेकर जाना; ज़्यादातर संस्थाएं गुम होने की रिपोर्ट भी मांगती हैं।",
        "<strong>गलती:</strong> दस्तावेज़ का नंबर, साल या रोल नंबर गलत लिखना; पुरानी फोटोकॉपी या DigiLocker से सही ब्योरा लें।",
        "<strong>गलती:</strong> पुराने नियम के हिसाब से बेवजह मजिस्ट्रेट एफिडेविट बनवाना (जैसे CBSE में 2015 के बाद यह शर्त नहीं)।",
        "<strong>गलती:</strong> दस्तावेज़ असल में गिरवी/किसी के पास होने पर भी \"गुम\" लिखना; यह शपथ पर झूठा बयान है (BNS धारा 227/229)।",
      ],
      callout: { kind: "info", html: SOON },
    },
  ],
  official: [
    { href: "https://www.cbse.gov.in/cbsenew/examinationbyelaws.html", title: "CBSE परीक्षा उपनियम और संशोधन", note: "नियम 67, 10.07.2015" },
    { href: "https://cbseit.in/cbseweb/dads/home.aspx", title: "CBSE DADS", note: "डुप्लीकेट दस्तावेज़ आवेदन" },
    { href: "https://www.digilocker.gov.in/", title: "DigiLocker" },
    { href: "https://deptpub.gov.in/document-category/con-guidelines/", title: "प्रकाशन विभाग: Lost/Destroyed notice गाइडलाइन" },
    { href: "https://uppolice.gov.in/", title: "UP Police", note: "Lost Article Report (उदाहरण)" },
  ],
  faq: [
    { q: "मार्कशीट खो गई तो क्या एफिडेविट ज़रूरी है?", a: "यह बोर्ड/यूनिवर्सिटी के नियम पर निर्भर है। CBSE ने 10.07.2015 के संशोधन से डुप्लीकेट के लिए एफिडेविट की शर्त हटा दी; अब आवेदन, फीस और राष्ट्रीय स्तर के हिंदी/अंग्रेज़ी अखबार में सूचना का पूरा पन्ना चाहिए। दूसरे बोर्ड का मौजूदा नियम उसकी वेबसाइट पर देखें।" },
    { q: "क्या खोई मार्कशीट के लिए FIR ज़रूरी है?", a: "गुम होने पर आम तौर पर पुलिस में Lost Report काफी होती है; चोरी पर FIR। कौन-सा दस्तावेज़ चाहिए, यह डुप्लीकेट देने वाली संस्था तय करती है। कई राज्यों में पुलिस वेबसाइट पर ऑनलाइन लॉस्ट रिपोर्ट की सुविधा है।" },
    { q: "DigiLocker की मार्कशीट एडमिशन में चलेगी?", a: "CBSE की 2024 की अधिसूचना के अनुसार CBSE soft copy DigiLocker में देता है और UGC ने उच्च शिक्षा संस्थानों से डिजिटल कॉपी स्वीकार करने को कहा है। फिर भी अपने कॉलेज से पुष्टि कर लें।" },
    { q: "अखबार में सूचना किस अखबार में दें?", a: "संस्था ने जो कहा वही। CBSE के नियम में राष्ट्रीय स्तर का प्रमुख हिंदी या अंग्रेज़ी अखबार और पूरा पन्ना original लिखा है। प्रकाशन विभाग फोटोकॉपी/कटिंग या साप्ताहिक/शाम के अखबार नहीं मानता।" },
    { q: "डुप्लीकेट मिलने के बाद पुराना दस्तावेज़ मिल जाए तो?", a: "संस्था को बताएं और उसके निर्देश मानें। दोनों दस्तावेज़ों का एक साथ इस्तेमाल न करें; एफिडेविट में अक्सर यही वादा लिखा जाता है।" },
    { q: "आधार या पैन खोने पर एफिडेविट लगता है?", a: "पहले UIDAI और आयकर विभाग की official वेबसाइट पर दोबारा डाउनलोड या रीप्रिंट का विकल्प देखें और वहां की प्रक्रिया में जो मांगा जाए वही दें; बिना मांगे एफिडेविट बनवाने की ज़रूरत नहीं। चोरी होने पर पुलिस रिपोर्ट ज़रूर कराएं ताकि दुरुपयोग होने पर रिकॉर्ड रहे।" },
  ],
  related: cards("digilocker", "same", "gap", "aadhaar", "pan", "hub"),
  aside: [
    { href: "/service/digilocker.html", label: "☁️ डिजिलॉकर गाइड" },
    { href: "/affidavit/", label: "📜 सभी एफिडेविट गाइड" },
  ],
};
