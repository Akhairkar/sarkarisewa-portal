import type { DocGuide } from "../doc/types";
import { VERIFIED, PUBLISHED, MODIFIED, SOON, DISCLAIMER, crumbs, cards } from "./common";

// Sources (checked 4 Oct 2026):
// - UGC Secretary D.O. No.1-15/2009 (ARC) pt.III dated 24 May 2023
//   (ugc.gov.in/pdfnews/2601452_ARC_English.pdf): UGC Regulations on Curbing
//   the Menace of Ragging in HEIs 2009 notified after the Supreme Court judgment
//   of 08.05.2009 in Civil Appeal No.887/2009, mandatory for all HEIs; online
//   undertaking every academic year by each student and every parent (2nd
//   Amendment); 3rd Amendment notified 29 June 2016 expanding the definition of
//   ragging; revised procedure: student gets an e-mail with a registration
//   number and forwards it to the Nodal Officer, "will not receive pdf
//   affidavits and he/she is not required to print & sign it"; admission forms
//   to carry a column "Anti Ragging Undertaking Reference no".
// - UGC Secretary D.O. No.1-15/2021(ARC) dated 10 Sep 2023
//   (ugc.gov.in/pdfnews/9185290_Letter-for-uploading-on-UGC-website.pdf):
//   National Anti-Ragging Helpline 1800-180-5522 (24x7 toll free),
//   helpline@antiragging.in; online undertaking every academic year.
// - UGC D.O. No.1-74/2016 (ARC) dated 22 July 2025: Anti-Ragging Day on
//   12 August and Anti-Ragging Week 12-18 August (decided in 2023).
// - UGC "Ragging Related Circulars" page (ugc.gov.in/page/ragging-related-circulars.aspx).
// antiragging.in itself could not be opened from our network, so the exact
// form fields are not described; the steps follow the UGC letters.
export const antiRagging: DocGuide = {
  crumbs: crumbs("एंटी-रैगिंग एफिडेविट"),
  docHi: "एंटी-रैगिंग एफिडेविट",
  title: "एंटी-रैगिंग एफिडेविट: UGC ऑनलाइन Undertaking | SarkariSewa India",
  description: "कॉलेज एडमिशन में मांगा जाने वाला एंटी-रैगिंग एफिडेविट अब UGC नियमों के तहत ऑनलाइन undertaking है: कौन भरता है, रेफरेंस नंबर, हेल्पलाइन और आम गलतियां।",
  published: PUBLISHED,
  modified: MODIFIED,
  verified: VERIFIED,
  h1: "एंटी-रैगिंग एफिडेविट: UGC का ऑनलाइन Undertaking कैसे भरें",
  lead: "UGC के रैगिंग-विरोधी नियम (2009) सभी उच्च शिक्षा संस्थानों पर लागू हैं। इनके तहत हर छात्र और उसके माता-पिता/अभिभावक को हर शैक्षणिक वर्ष में एंटी-रैगिंग undertaking देना होता है, और यह अब ऑनलाइन भरा जाता है। UGC के मई 2023 के पत्र के अनुसार छात्र को ई-मेल पर रजिस्ट्रेशन नंबर मिलता है, जिसे वह अपने कॉलेज के नोडल अधिकारी को फॉरवर्ड करता है; PDF एफिडेविट प्रिंट करके साइन करने या नोटरी कराने की ज़रूरत नहीं रही। कॉलेज के एडमिशन फॉर्म में \"Anti Ragging Undertaking Reference no\" भरना होता है।",
  facts: [
    ["नियम", "UGC Regulations on Curbing the Menace of Ragging in HEIs, 2009"],
    ["कौन भरता है", "हर छात्र और हर अभिभावक, हर शैक्षणिक वर्ष"],
    ["कहां", '<a href="https://www.antiragging.in/" target="_blank" rel="noopener nofollow">antiragging.in</a> (ऑनलाइन)'],
    ["नोटरी/स्टांप", "नहीं; प्रिंट और साइन की ज़रूरत नहीं (UGC, 2023)"],
    ["हेल्पलाइन", '<a href="tel:18001805522">1800-180-5522</a> (24x7, टोल-फ्री)'],
  ],
  notice: DISCLAIMER,
  sections: [
    {
      id: "kya-hai",
      title: "एंटी-रैगिंग एफिडेविट क्या है और क्यों मांगा जाता है",
      intro: "सुप्रीम कोर्ट के 08.05.2009 के फैसले (सिविल अपील 887/2009) के बाद UGC ने रैगिंग रोकने के नियम बनाए, जो सभी उच्च शिक्षा संस्थानों के लिए अनिवार्य हैं। undertaking में छात्र वादा करता है कि वह रैगिंग नहीं करेगा, और अभिभावक भी इसकी ज़िम्मेदारी लेते हैं।",
      list: [
        "पहले इसे प्रिंट करके, साइन करके (कई जगह नोटरी से) जमा किया जाता था, इसलिए लोग आज भी इसे \"एंटी-रैगिंग एफिडेविट\" कहते हैं।",
        "नियमों के दूसरे संशोधन के बाद यह हर शैक्षणिक वर्ष में <strong>ऑनलाइन undertaking</strong> है, जो छात्र और अभिभावक दोनों देते हैं।",
        "29 जून 2016 के तीसरे संशोधन से रैगिंग की परिभाषा में रंग, नस्ल, धर्म, जाति, जातीयता, जेंडर (ट्रांसजेंडर सहित), sexual orientation, रूप-रंग, राष्ट्रीयता, क्षेत्र, भाषा, जन्म/निवास स्थान या आर्थिक पृष्ठभूमि के आधार पर किसी छात्र के साथ शारीरिक या मानसिक दुर्व्यवहार (bullying और बहिष्कार सहित) भी शामिल है।",
      ],
    },
    {
      id: "kaise-bharein",
      title: "ऑनलाइन undertaking भरने का तरीका",
      steps: [
        "official पोर्टल antiragging.in खोलें। किसी और वेबसाइट या एजेंट को पैसे न दें; UGC के पत्रों में ऑनलाइन undertaking के लिए किसी फीस का ज़िक्र नहीं है।",
        "छात्र और अभिभावक की जानकारी, कॉलेज/यूनिवर्सिटी का नाम और कोर्स सही-सही भरें। कॉलेज का नाम वही चुनें जो एडमिशन लेटर में है।",
        "सबमिट करने के बाद छात्र के ई-मेल पर <strong>रजिस्ट्रेशन/रेफरेंस नंबर</strong> वाला मेल आता है।",
        "UGC के 2023 के पत्र के अनुसार वह ई-मेल अपने कॉलेज के <strong>एंटी-रैगिंग नोडल अधिकारी</strong> के ई-मेल पर फॉरवर्ड करें। कॉलेज को नोडल अधिकारी का ई-मेल और फोन अपनी वेबसाइट और कैंपस में दिखाना होता है।",
        "एडमिशन फॉर्म के \"Anti Ragging Undertaking Reference no\" वाले खाने में यह नंबर लिखें।",
        "अगले शैक्षणिक वर्ष में फिर से undertaking भरें; यह हर साल का काम है।",
      ],
      callout: { kind: "ok", html: "UGC का 24 मई 2023 का पत्र साफ कहता है कि छात्र को PDF एफिडेविट नहीं मिलेगा और उसे पहले की तरह प्रिंट करके साइन करने की ज़रूरत नहीं है। अगर कॉलेज फिर भी कागज़ी कॉपी मांगे, तो पहले नोडल अधिकारी से पूछें कि रेफरेंस नंबर वाला ई-मेल काफी है या नहीं।" },
    },
    {
      id: "kya-lagta",
      title: "भरने से पहले क्या तैयार रखें",
      table: {
        head: ["जानकारी", "क्यों ज़रूरी"],
        rows: [
          ["छात्र का ऐसा ई-मेल जो आप रोज़ खोलते हों", "रजिस्ट्रेशन नंबर इसी पर आता है और इसे फॉरवर्ड करना होता है"],
          ["अभिभावक का नाम, मोबाइल और ई-मेल", "undertaking छात्र और अभिभावक दोनों का होता है"],
          ["कॉलेज/यूनिवर्सिटी का पूरा नाम, कोर्स और वर्ष", "गलत संस्थान चुनने पर रेफरेंस नंबर कॉलेज के रिकॉर्ड से मेल नहीं खाएगा"],
          ["कॉलेज के नोडल अधिकारी का ई-मेल", "कॉलेज की वेबसाइट या एडमिशन सेंटर पर लिखा होता है"],
        ],
      },
    },
    {
      id: "shikayat",
      title: "रैगिंग हो तो शिकायत कहां करें",
      list: [
        "<strong>नेशनल एंटी-रैगिंग हेल्पलाइन:</strong> <a href=\"tel:18001805522\">1800-180-5522</a> (24x7, टोल-फ्री), ई-मेल helpline@antiragging.in।",
        "<strong>कॉलेज में:</strong> एंटी-रैगिंग कमेटी, एंटी-रैगिंग स्क्वॉड और नोडल अधिकारी। UGC ने संस्थानों से इनके संपर्क वेबसाइट, हॉस्टल, लाइब्रेरी, कैंटीन आदि जगह लगाने को कहा है।",
        "UGC के अनुसार 12 अगस्त को एंटी-रैगिंग दिवस और 12 से 18 अगस्त तक एंटी-रैगिंग सप्ताह मनाया जाता है।",
      ],
      callout: { kind: "info", html: SOON },
    },
    {
      id: "galtiyan",
      title: "आम गलतियां",
      list: [
        "नोटरी या stamp paper पर एफिडेविट बनवाने में पैसे खर्च करना, जबकि UGC का ऑनलाइन undertaking मुफ्त में भरा जाता है।",
        "रेफरेंस नंबर वाला ई-मेल डिलीट कर देना; इसे सेव रखें और स्क्रीनशॉट भी लें।",
        "सिर्फ छात्र का undertaking भरना और अभिभावक का भूल जाना।",
        "हर साल दोबारा न भरना; नियम हर शैक्षणिक वर्ष का undertaking मांगते हैं।",
        "किसी दूसरे पोर्टल या लिंक पर निजी जानकारी भरना; सिर्फ antiragging.in या कॉलेज का बताया official लिंक इस्तेमाल करें।",
      ],
    },
  ],
  official: [
    { href: "https://www.antiragging.in/", title: "Anti-Ragging पोर्टल", note: "ऑनलाइन undertaking" },
    { href: "https://www.ugc.gov.in/page/ragging-related-circulars.aspx", title: "UGC: रैगिंग से जुड़े सर्कुलर" },
    { href: "https://www.ugc.gov.in/pdfnews/2601452_ARC_English.pdf", title: "UGC पत्र 24.05.2023", note: "ऑनलाइन undertaking की नई प्रक्रिया" },
    { href: "https://www.ugc.gov.in/", title: "University Grants Commission" },
  ],
  faq: [
    { q: "क्या एंटी-रैगिंग एफिडेविट नोटरी से बनवाना ज़रूरी है?", a: "UGC के 24 मई 2023 के पत्र के अनुसार undertaking ऑनलाइन भरा जाता है; छात्र को PDF एफिडेविट नहीं मिलता और उसे प्रिंट करके साइन करने की ज़रूरत नहीं। ई-मेल पर आया रजिस्ट्रेशन नंबर नोडल अधिकारी को फॉरवर्ड करना होता है।" },
    { q: "एंटी-रैगिंग undertaking कौन-कौन भरता है?", a: "UGC नियमों के अनुसार हर छात्र और हर अभिभावक, और यह हर शैक्षणिक वर्ष में भरना होता है।" },
    { q: "रेफरेंस नंबर कहां लिखना है?", a: "UGC ने कॉलेजों से एडमिशन फॉर्म में \"Anti Ragging Undertaking Reference no\" का अनिवार्य खाना रखने को कहा है। वहीं यह नंबर लिखें और ई-मेल नोडल अधिकारी को फॉरवर्ड करें।" },
    { q: "रजिस्ट्रेशन का ई-मेल नहीं आया तो क्या करें?", a: "स्पैम/प्रमोशन फोल्डर देखें और ई-मेल पता सही था या नहीं जांचें। फिर भी न मिले तो कॉलेज के नोडल अधिकारी या नेशनल एंटी-रैगिंग हेल्पलाइन 1800-180-5522 से संपर्क करें।" },
    { q: "क्या एंटी-रैगिंग undertaking की कोई फीस है?", a: "UGC के पत्रों में इसके लिए कोई फीस नहीं बताई गई है। पैसे मांगने वाली वेबसाइट या एजेंट से बचें और सिर्फ official पोर्टल इस्तेमाल करें।" },
    { q: "रैगिंग की शिकायत कहां करें?", a: "नेशनल एंटी-रैगिंग हेल्पलाइन 1800-180-5522 (24x7, टोल-फ्री) या helpline@antiragging.in पर, और अपने कॉलेज की एंटी-रैगिंग कमेटी/नोडल अधिकारी को।" },
  ],
  related: cards("gap", "lost", "self", "students", "nsp", "hub"),
  aside: [
    { href: "https://www.antiragging.in/", label: "🛡️ antiragging.in" },
    { href: "/affidavit/", label: "📜 सभी एफिडेविट गाइड" },
  ],
};
