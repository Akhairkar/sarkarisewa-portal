import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): jaljeevanmission.gov.in (Department of
// Drinking Water & Sanitation, Ministry of Jal Shakti; aim of household tap
// connections to all rural households; links to ejalshakti.gov.in dashboard
// "JJMIndia" report, JJM app, WQMIS water-quality portal; State/District Water
// Sanitation Missions); Cabinet decision March 2026 on pmindia.gov.in (title:
// JJM extended up to December 2028 with enhanced outlay, restructured focus on
// service delivery, O&M and Gram Panchayat certification before "Har Ghar
// Jal") as summarised by Drishti IAS / Onmanorama (about 15.8 crore of 19.36
// crore rural households covered, ~81%, early March 2026). JJM covers rural
// households only (urban water supply is a municipal / AMRUT matter). No
// national online "apply for tap connection" form or JJM toll-free number was
// found, so none is given. Outlay figure left out (sources differ).
export const nationalWaterGridJalJeevan: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "उपयोगिताएं", href: "/category/utilities.html" },
    { label: "जल जीवन मिशन नल कनेक्शन" },
  ],
  docHi: "जल जीवन मिशन नल कनेक्शन",
  title: "जल जीवन मिशन नल कनेक्शन (Jal Jeevan Tap Water)",
  description: "जल जीवन मिशन (हर घर जल) में गांव के घरों को नल से पानी का कनेक्शन। कनेक्शन कैसे मिलता है, ग्राम पंचायत/पानी समिति की भूमिका, गांव की स्थिति कैसे देखें और शिकायत कहां करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "जल जीवन मिशन (हर घर जल) 2026: गांव में नल कनेक्शन कैसे मिले, स्थिति कैसे देखें, शिकायत कहां करें",
  lead: "जल जीवन मिशन केंद्र सरकार (जल शक्ति मंत्रालय) का कार्यक्रम है, जिसमें हर ग्रामीण घर तक नल से पीने का पानी पहुंचाना है। कनेक्शन के लिए कोई राष्ट्रीय ऑनलाइन फॉर्म नहीं है; काम ग्राम पंचायत, पानी समिति और राज्य के जल विभाग (PHED/जल निगम) के ज़रिए गांव-स्तर पर होता है। मार्च 2026 में मिशन की अवधि दिसंबर 2028 तक बढ़ाई गई।",
  facts: [
    ["विभाग", "पेयजल एवं स्वच्छता विभाग, जल शक्ति मंत्रालय"],
    ["किसके लिए", "ग्रामीण घर (शहर इसमें नहीं)"],
    ["अवधि", "दिसंबर 2028 तक बढ़ाई गई"],
    ["कनेक्शन कहां से", "ग्राम पंचायत / राज्य का जल विभाग"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "जल जीवन मिशन क्या है",
      intro: "मिशन 2019 में शुरू हुआ। इसका लक्ष्य गांव के हर घर में चालू नल कनेक्शन (Functional Household Tap Connection) देना है, ताकि नियमित रूप से साफ पीने का पानी मिले।",
      list: [
        "मार्च 2026 तक लगभग <strong>19.36 करोड़ ग्रामीण घरों में से करीब 15.8 करोड़</strong> (लगभग 81%) में नल कनेक्शन होने की जानकारी दी गई। ताज़ा आंकड़ा मिशन के डैशबोर्ड पर दिखता है।",
        "मार्च 2026 में केंद्रीय मंत्रिमंडल ने मिशन को <strong>दिसंबर 2028</strong> तक बढ़ाया। अब ध्यान नए पाइप बिछाने के साथ-साथ <strong>पानी की नियमित सप्लाई और रखरखाव</strong> पर है।",
        "किसी गांव को \"हर घर जल\" घोषित करने से पहले ग्राम पंचायत को यह पक्का करना होता है कि रखरखाव की व्यवस्था है।",
        "शहरों में पानी का कनेक्शन नगर निगम/नगर पालिका या जल बोर्ड देता है; वह इस मिशन का हिस्सा नहीं है।",
      ],
    },
    {
      id: "connection",
      title: "गांव में नल कनेक्शन कैसे मिलता है",
      steps: [
        "<strong>ग्राम पंचायत/पानी समिति से पूछें:</strong> हर गांव में ग्राम जल एवं स्वच्छता समिति (पानी समिति/VWSC) बनती है। अपने वार्ड सदस्य, सरपंच या पंचायत सचिव से पूछें कि आपके गांव की योजना बनी है या नहीं।",
        "<strong>घर का नाम सूची में जुड़वाएं:</strong> योजना बनते समय सभी घरों की सूची बनती है। आपका घर छूट गया हो तो पंचायत को लिखित में बताएं।",
        "<strong>राज्य के जल विभाग से संपर्क:</strong> पाइपलाइन का काम राज्य का PHED / जल निगम / ग्रामीण जलापूर्ति विभाग कराता है। ब्लॉक या ज़िले के उस कार्यालय में आवेदन/शिकायत दे सकते हैं।",
        "<strong>कागज़:</strong> आम तौर पर घर के मुखिया का नाम, आधार/पहचान पत्र और मोबाइल नंबर मांगा जाता है। राज्य के हिसाब से इसमें फर्क हो सकता है।",
      ],
      callout: { kind: "warn", html: "कई राज्यों में गांव की योजना में समुदाय से थोड़ा अंशदान लिया जाता है, जिसका नियम राज्य तय करता है। <strong>कोई ठेकेदार या व्यक्ति निजी तौर पर पैसे मांगे तो रसीद मांगें</strong> और पंचायत या जल विभाग को बताएं।" },
    },
    {
      id: "sthiti",
      title: "अपने गांव की स्थिति कैसे देखें",
      steps: [
        '<a href="https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx" target="_blank" rel="noopener nofollow">JJM डैशबोर्ड</a> खोलें।',
        "राज्य, फिर ज़िला, ब्लॉक, पंचायत और गांव चुनें।",
        "देखें कि गांव में कितने घरों में नल कनेक्शन दर्ज है और गांव \"हर घर जल\" घोषित है या नहीं।",
      ],
      callout: { kind: "info", html: "डैशबोर्ड पर कनेक्शन दर्ज है पर आपके घर में पानी नहीं आता, तो यह बात ग्राम सभा में उठाएं और जल विभाग को लिखित शिकायत दें।" },
    },
    {
      id: "shikayat",
      title: "पानी न आए या पानी गंदा हो तो",
      list: [
        "<strong>पहले पंचायत/पानी समिति:</strong> नल टूटा है, सप्लाई बंद है या पानी कम आता है तो पानी समिति या पंप ऑपरेटर को बताएं।",
        "<strong>राज्य का जल विभाग:</strong> ब्लॉक/ज़िला स्तर के PHED या जल निगम कार्यालय में शिकायत दें। कई राज्यों की अपनी टोल-फ्री या सीएम हेल्पलाइन भी है।",
        "<strong>पानी की जांच:</strong> गांव में कुछ महिलाओं को फील्ड टेस्ट किट से पानी जांचने की ट्रेनिंग दी जाती है। ज़िले की जल परीक्षण प्रयोगशाला में भी जांच होती है।",
        '<strong>ऑनलाइन शिकायत:</strong> केंद्र सरकार के <a href="https://pgportal.gov.in/" target="_blank" rel="noopener nofollow">CPGRAMS (pgportal.gov.in)</a> पर पेयजल एवं स्वच्छता विभाग या अपने राज्य को शिकायत भेज सकते हैं।',
      ],
    },
  ],
  official: [
    { href: "https://jaljeevanmission.gov.in/", title: "जल जीवन मिशन (पेयजल एवं स्वच्छता विभाग)" },
    { href: "https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx", title: "JJM डैशबोर्ड: गांव-वार नल कनेक्शन" },
    { href: "https://pgportal.gov.in/", title: "CPGRAMS: ऑनलाइन शिकायत" },
  ],
  faq: [
    { q: "जल जीवन मिशन में नल कनेक्शन के लिए ऑनलाइन आवेदन कहां करें?", a: "कोई राष्ट्रीय ऑनलाइन फॉर्म नहीं है। कनेक्शन गांव की योजना के तहत ग्राम पंचायत/पानी समिति और राज्य के जल विभाग के ज़रिए मिलता है। कुछ राज्यों के अपने पोर्टल हो सकते हैं, इसलिए अपने ब्लॉक के जल विभाग से पूछें।" },
    { q: "क्या शहर में भी जल जीवन मिशन से कनेक्शन मिलता है?", a: "नहीं, यह मिशन सिर्फ ग्रामीण घरों के लिए है। शहर में नगर निगम, नगर पालिका या जल बोर्ड पानी का कनेक्शन देते हैं।" },
    { q: "जल जीवन मिशन कब तक चलेगा?", a: "मार्च 2026 में केंद्रीय मंत्रिमंडल ने इसे दिसंबर 2028 तक बढ़ा दिया है।" },
    { q: "मेरे गांव में कितने घरों में नल लगा है, यह कैसे देखें?", a: "ejalshakti.gov.in पर JJM डैशबोर्ड में राज्य, ज़िला, ब्लॉक, पंचायत और गांव चुनकर देखें।" },
    { q: "नल लगा है पर पानी नहीं आता, क्या करें?", a: "पानी समिति/पंचायत को बताएं, फिर ब्लॉक के PHED/जल निगम कार्यालय में लिखित शिकायत दें। हल न हो तो CPGRAMS (pgportal.gov.in) पर शिकायत करें।" },
  ],
  related: [
    { href: "/service/water-supply-connection-bill.html", emoji: "🚰", title: "पानी कनेक्शन और बिल", text: "शहर में पानी का कनेक्शन" },
    { href: "/service/swachh-bharat-sanitation-complaint.html", emoji: "🧹", title: "स्वच्छ भारत शिकायत", text: "सफाई से जुड़ी शिकायत" },
    { href: "/service/electricity-connection-bill.html", emoji: "💡", title: "बिजली कनेक्शन", text: "नया कनेक्शन और बिल" },
    { href: "/service/pm-awas-yojana.html", emoji: "🏠", title: "प्रधानमंत्री आवास योजना", text: "पक्का घर" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx", label: "🚰 गांव की स्थिति देखें" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
