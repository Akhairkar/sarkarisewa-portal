import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): Union Cabinet decision of 27 Aug 2025 on
// restructuring PM SVANidhi (newsonair.gov.in, Tribune, Vision IAS):
// lending period to 31 Mar 2030, tranches ₹15,000 / ₹25,000 / ₹50,000,
// UPI-linked RuPay credit card after timely repayment of the 2nd loan,
// digital cashback up to ₹1,600, coverage widened to census towns and
// peri-urban areas. Bank of Maharashtra PM SVANidhi page (documents: CoV / ID
// card / LoR from ULB or TVC; BDO-approved LoR in census towns/peri-urban;
// interest subsidy on loans to 31.03.2030). Deccan Herald / Vikaspedia on the
// LoR module on pmsvanidhi.mohua.gov.in (proof options, white-paper request
// for local enquiry, ULB to decide within 15 days). Street Vendors
// (Protection of Livelihood and Regulation of Street Vending) Act, 2014 for
// CoV/ID card. mohua.gov.in could not be opened; credit-card limit and the
// helpline were not confirmed from an official page and are left out. The
// old page's generic "Aadhaar-like universal ID" text was wrong and dropped.
export const streetVendorIdentityCard: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "पहचान दस्तावेज़", href: "/category/identity-documents.html" },
    { label: "स्ट्रीट वेंडर पहचान पत्र" },
  ],
  docHi: "स्ट्रीट वेंडर पहचान पत्र",
  title: "पीएम स्वनिधि विक्रेता पहचान पत्र (Vendor QR Card)",
  description: "रेहड़ी-पटरी विक्रेताओं के लिए नगर निकाय का वेंडिंग प्रमाण पत्र/पहचान पत्र और PM SVANidhi पोर्टल पर सिफारिश पत्र (LoR)। कौन से कागज़, कहां आवेदन, लोन और QR/UPI से भुगतान।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "स्ट्रीट वेंडर पहचान पत्र: वेंडिंग प्रमाण पत्र (CoV), सिफारिश पत्र (LoR) और PM SVANidhi लोन",
  lead: "रेहड़ी-पटरी वालों को पहचान पत्र और वेंडिंग प्रमाण पत्र (Certificate of Vending, CoV) आपके शहर का नगर निकाय (नगर निगम/नगर पालिका) और टाउन वेंडिंग कमेटी देती है, यह Street Vendors Act, 2014 के तहत बनता है। जिनके पास यह नहीं है, वे <a href=\"https://pmsvanidhi.mohua.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmsvanidhi.mohua.gov.in</a> पर नगर निकाय से सिफारिश पत्र (LoR) मांग सकते हैं और उसी से PM SVANidhi लोन ले सकते हैं। \"Vendor QR Card\" नाम का कोई अलग सरकारी कार्ड नहीं है; QR कोड डिजिटल भुगतान लेने के लिए मिलता है।",
  facts: [
    ["कौन जारी करता है", "नगर निकाय / टाउन वेंडिंग कमेटी"],
    ["कार्ड न हो तो", "PM SVANidhi पोर्टल पर LoR का आवेदन"],
    ["PM SVANidhi लोन", "₹15,000, फिर ₹25,000, फिर ₹50,000"],
    ["योजना की अवधि", "लोन 31 मार्च 2030 तक"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "वेंडर पहचान पत्र और वेंडिंग प्रमाण पत्र क्या है",
      list: [
        "<strong>वेंडिंग प्रमाण पत्र (CoV):</strong> नगर निकाय का दिया प्रमाण कि आप उस शहर में तय जगह/ज़ोन में बेचने के हकदार स्ट्रीट वेंडर हैं।",
        "<strong>पहचान पत्र (ID Card):</strong> नगर निकाय के वेंडर सर्वे में नाम आने पर दिया जाने वाला कार्ड।",
        "<strong>सिफारिश पत्र (Letter of Recommendation, LoR):</strong> जो वेंडर सर्वे में छूट गए या जिनके पास CoV/ID नहीं है, उन्हें नगर निकाय PM SVANidhi पोर्टल से LoR देता है। जनगणना कस्बों और शहर से सटे इलाकों में BDO की मंज़ूरी वाला LoR भी मान्य है।",
      ],
      callout: { kind: "info", html: "CoV और ID कार्ड की प्रक्रिया राज्य के Street Vending नियमों और नगर निकाय के सर्वे पर चलती है। अपने नगर निगम/नगर पालिका के शहरी गरीबी उन्मूलन (DAY-NULM) या वेंडिंग सेल से पूछें कि सर्वे कब हुआ और नया पंजीकरण कैसे होता है।" },
    },
    {
      id: "lor",
      title: "पहचान पत्र नहीं है: LoR कैसे लें",
      steps: [
        "<a href=\"https://pmsvanidhi.mohua.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">pmsvanidhi.mohua.gov.in</a> पर मोबाइल नंबर और OTP से लॉगिन करें, या नज़दीकी CSC पर जाएं।",
        "\"LoR cum loan application\" (सिफारिश पत्र के साथ लोन आवेदन) चुनें।",
        "वेंडर होने का कोई एक प्रमाण लगाएं, जैसे लॉकडाउन में राज्य से मिली एकमुश्त सहायता का प्रमाण, वेंडर संघ की सदस्यता, या कोई दूसरा कागज़ जिससे पता चले कि आप वेंडर हैं।",
        "कोई कागज़ नहीं है तो नगर निकाय को सादे कागज़ पर अर्ज़ी देकर स्थानीय जांच करवाने को कहें।",
        "नगर निकाय को 15 दिन में LoR पर फैसला करना होता है। LoR मिलने के बाद आवेदन बैंक को लोन के लिए जाता है।",
      ],
    },
    {
      id: "loan",
      title: "PM SVANidhi लोन और दूसरे फायदे",
      intro: "केंद्रीय मंत्रिमंडल ने 27 अगस्त 2025 को योजना को नए रूप में 31 मार्च 2030 तक बढ़ाया। आवास और शहरी कार्य मंत्रालय (MoHUA) योजना चलाता है।",
      table: {
        head: ["किस्त", "लोन राशि", "शर्त"],
        rows: [
          ["पहला लोन", "₹15,000 तक", "CoV/ID कार्ड या LoR, आधार"],
          ["दूसरा लोन", "₹25,000 तक", "पहला लोन चुकाने पर"],
          ["तीसरा लोन", "₹50,000 तक", "दूसरा लोन चुकाने पर"],
        ],
      },
      list: [
        "<strong>ब्याज सब्सिडी:</strong> समय पर किस्त भरने पर ब्याज में सब्सिडी सीधे खाते में आती है।",
        "<strong>RuPay क्रेडिट कार्ड:</strong> दूसरा लोन समय पर चुकाने वाले वेंडर UPI से जुड़ा RuPay क्रेडिट कार्ड ले सकते हैं। सीमा बैंक तय करता है।",
        "<strong>डिजिटल भुगतान पर कैशबैक:</strong> QR/UPI से भुगतान लेने पर कुल ₹1,600 तक कैशबैक मिल सकता है।",
      ],
      callout: { kind: "warn", html: "लोन लेने के लिए बैंक खाते से जुड़ी UPI ID ज़रूरी है। कोई व्यक्ति लोन या कार्ड दिलाने के नाम पर पैसे मांगे तो न दें; आवेदन पोर्टल या CSC से खुद करें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "आधार कार्ड (मोबाइल नंबर जुड़ा हो)",
        "वेंडिंग प्रमाण पत्र / पहचान पत्र, या LoR के लिए वेंडर होने का कोई प्रमाण",
        "बैंक खाता और UPI ID",
        "राशन कार्ड/वोटर ID जैसे दूसरे पहचान पत्र (बैंक मांगे तो)",
      ],
    },
    {
      id: "galtiyan",
      title: "आम दिक्कतें और हल",
      list: [
        "<strong>सर्वे में नाम नहीं:</strong> LoR का आवेदन करें या नगर निकाय से नए सर्वे/पंजीकरण के बारे में पूछें।",
        "<strong>आधार में मोबाइल नंबर नहीं:</strong> OTP नहीं आएगा; पहले आधार में मोबाइल नंबर जुड़वाएं।",
        "<strong>LoR 15 दिन में नहीं मिला:</strong> नगर निकाय के वेंडिंग/DAY-NULM अधिकारी से मिलें, या पोर्टल पर स्टेटस देखें।",
        "<strong>गांव/कस्बे में रहते हैं:</strong> योजना अब जनगणना कस्बों और शहर से सटे इलाकों तक धीरे-धीरे बढ़ाई जा रही है; ब्लॉक कार्यालय (BDO) से पूछें।",
      ],
    },
  ],
  official: [
    { href: "https://pmsvanidhi.mohua.gov.in/", title: "PM SVANidhi पोर्टल (MoHUA)", note: "LoR, लोन आवेदन और स्टेटस" },
    { href: "https://www.mohua.gov.in/", title: "आवास और शहरी कार्य मंत्रालय" },
  ],
  faq: [
    { q: "स्ट्रीट वेंडर पहचान पत्र कौन बनाता है?", a: "आपके शहर का नगर निकाय (नगर निगम/नगर पालिका) और टाउन वेंडिंग कमेटी, Street Vendors Act, 2014 और राज्य के नियमों के तहत।" },
    { q: "पहचान पत्र नहीं है तो क्या PM SVANidhi लोन मिलेगा?", a: "हां, PM SVANidhi पोर्टल पर \"LoR cum loan application\" भरें। नगर निकाय जांच करके सिफारिश पत्र (LoR) देता है, फिर बैंक लोन पर फैसला करता है।" },
    { q: "PM SVANidhi में कितना लोन मिलता है?", a: "अगस्त 2025 के बदलाव के बाद पहला लोन ₹15,000 तक, दूसरा ₹25,000 तक और तीसरा ₹50,000 तक। पिछला लोन चुकाने पर अगला मिलता है।" },
    { q: "Vendor QR Card क्या है?", a: "यह कोई अलग सरकारी पहचान पत्र नहीं है। PM SVANidhi से जुड़े वेंडरों को डिजिटल भुगतान लेने के लिए QR कोड/UPI ID मिलती है। पहचान के लिए नगर निकाय का CoV/ID कार्ड या LoR ही चलता है।" },
    { q: "क्या आवेदन के लिए कोई फीस है?", a: "पोर्टल पर आवेदन की कोई फीस नहीं बताई गई है। CSC पर सेवा शुल्क लग सकता है; रसीद लें।" },
  ],
  related: [
    { href: "/service/pm-svanidhi.html", emoji: "🛒", title: "PM SVANidhi योजना", text: "रेहड़ी-पटरी वालों का लोन" },
    { href: "/service/upi-payments.html", emoji: "📲", title: "UPI भुगतान", text: "QR से पैसे लेना" },
    { href: "/service/e-shram-card.html", emoji: "🧾", title: "ई-श्रम कार्ड", text: "असंगठित कामगारों का पंजीकरण" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "मुद्रा लोन", text: "छोटे कारोबार के लिए लोन" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम पंजीकरण", text: "छोटे कारोबार का पंजीकरण" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन आवेदन में मदद" },
  ],
  aside: [
    { href: "https://pmsvanidhi.mohua.gov.in/", label: "🛒 PM SVANidhi पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
