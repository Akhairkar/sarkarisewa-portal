import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, SOON, DISCLAIMER, crumbs, cards, sample } from "./common";

// Sources (checked 4 Oct 2026):
// - Department of Publication, "Guidelines for Notification of Public Notice"
//   (deptpub.gov.in/document-category/con-guidelines/): Public Notice in Gazette
//   of India Part IV for correction of name; undertaking showing correct and
//   wrong name with father's/husband's name and address; attested copy of the
//   connected legal/medical document; newspaper; proforma with two witnesses.
// - Department of Publication, adult change-of-name guideline (for when the
//   difference is a real change of name, not a spelling error).
// - RGI letter No.1/12/2014-VS(CRS) dated 30.06.2015: change of name in birth
//   record may be considered, preferably with "alias" (both names) and an entry
//   in the remarks column.
// - PIB (MEA) 23.12.2016: passport annexes are self-declarations on plain
//   paper; no attestation by Notary/Executive Magistrate/First Class
//   Judicial Magistrate.
// - DARPG OM K-11022/67/2012-AR (10.05.2013) / PIB 01.08.2014 on
//   self-certification.
// - Notaries Act 1952 s.8; BNS 2023 ss.227/229.
// No single law prescribes a "one and the same person" affidavit; the page says
// so and points to correcting the source record.
export const oneAndSame: DocGuide = {
  crumbs: crumbs("वन एंड सेम पर्सन एफिडेविट"),
  docHi: "वन एंड सेम एफिडेविट",
  title: "वन एंड सेम पर्सन एफिडेविट: नाम में अंतर हो तो | SarkariSewa India",
  description: "आधार, पैन, मार्कशीट या बैंक में नाम अलग-अलग लिखा हो तो One and Same Person एफिडेविट कब काम आता है, कब दस्तावेज़ सुधारना ज़रूरी है, नमूना फॉर्मेट और गलतियां।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "वन एंड सेम पर्सन एफिडेविट: दस्तावेज़ों में नाम अलग हो तो क्या करें",
  lead: "वन एंड सेम पर्सन (one and the same person) एफिडेविट में आप शपथ पर बताते हैं कि अलग-अलग दस्तावेज़ों में लिखे दो नाम (जैसे \"R. Kumar\" और \"Ramesh Kumar\") एक ही व्यक्ति, यानी आपके हैं। इसका कोई एक तय कानूनी फॉर्मेट नहीं है; बैंक, नौकरी देने वाले या कॉलेज जैसे दफ्तर इसे सहायक सबूत के रूप में मांगते हैं। यह गलत दस्तावेज़ को ठीक नहीं करता। स्थायी हल यह है कि जिस दस्तावेज़ में गलती है, उसे जारी करने वाली संस्था से सुधरवाएं; ज़रूरत पड़े तो गजट ऑफ इंडिया में \"Public Notice\" के रूप में नाम का सुधार छपवाया जा सकता है।",
  facts: [
    ["क्या साबित करता है", "दो नाम एक ही व्यक्ति के हैं"],
    ["कानूनी फॉर्मेट", "कोई एक तय नहीं; मांगने वाले दफ्तर का"],
    ["स्थायी हल", "गलत दस्तावेज़ में सुधार"],
    ["गजट विकल्प", "Part IV में Public Notice (नाम का सुधार)"],
  ],
  notice: DISCLAIMER,
  sections: [
    {
      id: "kab",
      title: "कब काम आता है",
      list: [
        "<strong>इनीशियल बनाम पूरा नाम:</strong> मार्कशीट में \"S. K. Sharma\", आधार में \"Sunil Kumar Sharma\"।",
        "<strong>स्पेलिंग का अंतर:</strong> \"Mohd.\" और \"Mohammad\", \"Laxmi\" और \"Lakshmi\"।",
        "<strong>शादी के बाद surname:</strong> पुराने दस्तावेज़ मायके के surname में, नए ससुराल के surname में।",
        "<strong>पिता/माता के नाम में अंतर:</strong> किसी दस्तावेज़ में पिता का नाम छोटा या अलग स्पेलिंग में।",
        "<strong>नाम के आगे-पीछे शब्द:</strong> \"Kumar\", \"Devi\", \"Singh\" किसी दस्तावेज़ में है, किसी में नहीं।",
      ],
      callout: { kind: "warn", html: "अगर अंतर सिर्फ स्पेलिंग/इनीशियल का नहीं बल्कि नाम पूरी तरह बदला गया है, तो यह \"नाम परिवर्तन\" है। उसके लिए <a href=\"/affidavit/name-change.html\">नाम बदलने का एफिडेविट और गजट प्रक्रिया</a> देखें।" },
    },
    {
      id: "sahi-rasta",
      title: "पहले सोचें: एफिडेविट या दस्तावेज़ में सुधार?",
      table: {
        head: ["स्थिति", "बेहतर रास्ता"],
        rows: [
          ["एक दस्तावेज़ में साफ टाइपिंग गलती", "उसी संस्था से सुधार कराएं (बोर्ड, UIDAI, आयकर विभाग, बैंक)। एफिडेविट सिर्फ तब तक के लिए, अगर कोई दफ्तर मांगे"],
          ["बहुत पुराना दस्तावेज़ जो अब नहीं सुधर सकता", "वन एंड सेम एफिडेविट + दोनों दस्तावेज़ों की कॉपी"],
          ["कई दस्तावेज़ों में अलग-अलग रूप, सरकारी नौकरी/पासपोर्ट जैसा काम", "गजट ऑफ इंडिया Part IV में नाम सुधार की Public Notice पर विचार करें, फिर हर दस्तावेज़ अपडेट कराएं"],
          ["जन्म प्रमाण पत्र में नाम अलग", "जन्म-मृत्यु रजिस्ट्रार से सुधार; RGI के 2015 के पत्र के अनुसार दोनों नाम \"alias\" के साथ लिखे जा सकते हैं"],
          ["पासपोर्ट आवेदन", "पासपोर्ट के annexures 2016 से सादे कागज़ पर स्व-घोषणा हैं, नोटरी की ज़रूरत नहीं; जो annexure मांगा जाए वही दें"],
        ],
      },
    },
    {
      id: "gazette",
      title: "गजट में नाम सुधार (Public Notice) कैसे होता है",
      intro: "प्रकाशन विभाग की \"Public Notice\" गाइडलाइन नाम के सुधार (correction of name) जैसे मामलों के लिए है। इसमें मांगा जाता है:",
      steps: [
        "किसी दैनिक स्थानीय प्रमुख अखबार में मामले के ब्योरे के साथ सूचना; original अखबार।",
        "आवेदक का साइन किया undertaking, जिसमें <strong>सही और गलत नाम</strong>, पिता/पति का नाम और पता हो।",
        "संबंधित कानूनी/मेडिकल दस्तावेज़ की attested कॉपी (जिस दस्तावेज़ में गलती है)।",
        "तय प्रोफॉर्मा, टाइप किया हुआ, दो प्रतियों में, दो गवाहों के साथ; CD (MS Word) और CD सर्टिफिकेट।",
        "दो self-attested फोटो, self-attested ID, request letter और bharatkosh.gov.in से भरी फीस की रसीद।",
      ],
    },
    {
      id: "namuna",
      title: "वन एंड सेम पर्सन एफिडेविट का नमूना",
      html: sample(
        "नमूना: एक ही व्यक्ति होने का शपथ पत्र",
        `शपथ पत्र

मैं, [सही पूरा नाम], पुत्र/पुत्री/पत्नी [पिता/पति का नाम], उम्र [__] वर्ष, निवासी [पूरा पता], शपथपूर्वक कहता/कहती हूं कि:

1. मेरे [दस्तावेज़ 1, जैसे आधार नं. XXXX XXXX 1234] में मेरा नाम "[नाम का रूप 1]" लिखा है।
2. मेरे [दस्तावेज़ 2, जैसे कक्षा 10 की मार्कशीट, रोल नं. ___, वर्ष ___] में मेरा नाम "[नाम का रूप 2]" लिखा है।
3. "[नाम का रूप 1]" और "[नाम का रूप 2]" एक ही व्यक्ति, यानी मेरे, नाम हैं। यह अंतर [कारण, जैसे इनीशियल लिखने / स्पेलिंग की गलती / विवाह के बाद surname] के कारण है।
4. मेरा सही और पूरा नाम "[सही पूरा नाम]" है, और आगे सभी कामों में मैं इसी नाम का उपयोग करूंगा/करूंगी।
5. यह शपथ पत्र [दफ्तर/बैंक/संस्था का नाम] में [काम] के लिए दिया जा रहा है।

सत्यापन: ऊपर लिखी बातें मेरी जानकारी और विश्वास में सही हैं, कुछ छिपाया नहीं गया है।

स्थान: [__]          दिनांक: [__]
                                         शपथकर्ता के हस्ताक्षर`
      ),
      list: [
        "<strong>साथ लगाएं:</strong> जिन दस्तावेज़ों में नाम अलग है, उन सबकी self-attested कॉपी; फोटो ID।",
        "आधार नंबर पूरा लिखने की बजाय आखिरी 4 अंक लिखें, जब तक दफ्तर पूरा नंबर न मांगे।",
      ],
    },
    {
      id: "attest",
      title: "attest कराना और आम गलतियां",
      list: [
        "Notary (Notaries Act 1952, धारा 8) या अधिकृत Oath Commissioner के सामने खुद जाकर साइन करें। stamp paper/e-Stamp की राशि राज्य के नियम से तय होती है; दफ्तर से पूछें कि stamp paper चाहिए या स्व-घोषणा काफी है।",
        "<strong>गलती:</strong> एफिडेविट में सिर्फ \"मेरे नाम में अंतर है\" लिखना; हर दस्तावेज़ का नाम, नंबर और नाम का सटीक रूप लिखें।",
        "<strong>गलती:</strong> एफिडेविट बनवाकर असली दस्तावेज़ कभी न सुधरवाना; अगली बार फिर वही दिक्कत आएगी।",
        "<strong>गलती:</strong> किसी दूसरे व्यक्ति के दस्तावेज़ को अपना बताना; शपथ पर झूठा बयान BNS 2023 की धारा 227/229 के तहत अपराध है।",
        "<strong>गलती:</strong> साइन अलग-अलग तरह से करना; एफिडेविट पर वही साइन करें जो आपके ID पर है।",
      ],
      callout: { kind: "info", html: SOON },
    },
  ],
  official: [
    { href: "https://deptpub.gov.in/document-category/con-guidelines/", title: "प्रकाशन विभाग: Public Notice / Change of Name गाइडलाइन" },
    { href: "https://egazette.gov.in/", title: "e-Gazette", note: "Part IV सूचना डाउनलोड" },
    { href: "https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=155792", title: "PIB (2016): पासपोर्ट annexures स्व-घोषणा पर" },
    { href: "https://www.indiacode.nic.in/", title: "India Code", note: "Notaries Act 1952" },
  ],
  faq: [
    { q: "वन एंड सेम पर्सन एफिडेविट क्या है?", a: "यह शपथ पत्र है जिसमें आप बताते हैं कि अलग-अलग दस्तावेज़ों में लिखे नाम के दो रूप एक ही व्यक्ति, यानी आपके हैं। इसका कोई एक कानूनी फॉर्मेट नहीं है; जिस दफ्तर में देना है, उसका फॉर्मेट हो तो वही इस्तेमाल करें।" },
    { q: "क्या इस एफिडेविट से आधार या मार्कशीट का नाम बदल जाएगा?", a: "नहीं। एफिडेविट सिर्फ सहायक सबूत है। आधार, पैन, मार्कशीट आदि में सुधार उन्हीं संस्थाओं की प्रक्रिया से होता है जिन्होंने उन्हें जारी किया।" },
    { q: "पासपोर्ट के लिए नाम में अंतर हो तो नोटरी एफिडेविट चाहिए?", a: "विदेश मंत्रालय की 2016 की घोषणा के अनुसार पासपोर्ट के सभी annexures सादे कागज़ पर स्व-घोषणा हैं और Notary/मजिस्ट्रेट के attestation की ज़रूरत नहीं। आवेदन में जो annexure मांगा जाए वही दें।" },
    { q: "गजट में नाम का सुधार कब कराएं?", a: "जब कई दस्तावेज़ों में नाम अलग हो और सरकारी नौकरी या दूसरे बड़े काम में मज़बूत सबूत चाहिए। प्रकाशन विभाग नाम के सुधार को Part IV में Public Notice के रूप में छापता है, जिसमें सही और गलत नाम वाला undertaking और संबंधित दस्तावेज़ की attested कॉपी लगती है।" },
    { q: "शादी के बाद surname बदला है, क्या यह वन एंड सेम एफिडेविट से चलेगा?", a: "यह उस दफ्तर पर निर्भर है; पहले पूछ लें कि वे विवाह प्रमाण पत्र, एफिडेविट या गजट में से क्या मानते हैं। पक्के रिकॉर्ड के लिए गजट नाम परिवर्तन और हर दस्तावेज़ में अपडेट बेहतर है।" },
    { q: "क्या एक एफिडेविट सब जगह चल जाएगा?", a: "ज़रूरी नहीं। दफ्तर अपना फॉर्मेट या हाल की तारीख का एफिडेविट मांग सकता है। इसलिए उसमें काम और संस्था का नाम लिखें।" },
  ],
  related: cards("name", "dob", "lost", "self", "aadhaar", "pan"),
  aside: [
    { href: "/affidavit/name-change.html", label: "✍️ नाम बदलने की गाइड" },
    { href: "/affidavit/", label: "📜 सभी एफिडेविट गाइड" },
  ],
};
