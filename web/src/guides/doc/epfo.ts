import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): EPFO circular INV-11/2/2021-INV/E-41960/2519
// dated 1 July 2026 notifying 8.25% interest for 2025-26 (reported by Outlook
// Money, Ascent HR); Union Cabinet approval of 16 Sept 2026 raising the
// EPF/EPS wage ceiling from Rs 15,000 to Rs 25,000 a month (Moneylife,
// Upstox, Free Press Journal, Outlook Business); EPF & MP Act 1952 coverage
// (establishments with 20 or more employees) and 12% employee/employer
// contribution with 8.33% to EPS; member services: unifiedportal-mem
// (UAN), passbook, UMANG; missed call 9966044425 and SMS "EPFOHO UAN" to
// 7738299899 (EPFO's published balance services, as reported); toll-free
// 1800-118-005; grievances at epfigms.gov.in (reachable). epfindia.gov.in
// itself could not be opened from here; the exact date from which the
// Rs 25,000 ceiling applies is left general.
export const epfo: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "वित्त और कर", href: "/category/finance-tax.html" },
    { label: "EPFO / भविष्य निधि" },
  ],
  docHi: "EPFO / भविष्य निधि",
  title: "ईपीएफओ / भविष्य निधि 2026",
  description: "कर्मचारी भविष्य निधि संगठन (EPFO) सदस्य सेवाएं: UAN, PF बैलेंस, पासबुक, ई-नॉमिनेशन, क्लेम और ट्रांसफर। आधिकारिक लिंक, ब्याज दर, वेतन सीमा और शिकायत की जानकारी।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "EPFO / भविष्य निधि (PF): UAN, बैलेंस, क्लेम, ट्रांसफर और शिकायत",
  lead: "कर्मचारी भविष्य निधि संगठन (EPFO) श्रम एवं रोज़गार मंत्रालय के तहत नौकरीपेशा लोगों का PF, पेंशन (EPS) और बीमा (EDLI) संभालता है। हर सदस्य का एक स्थायी UAN नंबर होता है, जिससे बैलेंस देखना, पैसा निकालना (क्लेम) और नौकरी बदलने पर PF ट्रांसफर ऑनलाइन होता है। 2025-26 के लिए PF पर <strong>8.25%</strong> ब्याज तय हुआ है।",
  facts: [
    ["विभाग", "श्रम एवं रोज़गार मंत्रालय, भारत सरकार"],
    ["ब्याज दर 2025-26", "8.25% सालाना"],
    ["मिस्ड कॉल बैलेंस", "9966044425 (UAN से जुड़े मोबाइल से)"],
    ["टोल-फ्री", "1800-118-005"],
  ],
  notice: "सितंबर 2026 में केंद्रीय मंत्रिमंडल ने EPF/EPS की अनिवार्य वेतन सीमा ₹15,000 से बढ़ाकर <strong>₹25,000 महीना</strong> करने को मंज़ूरी दी। यह आपकी सैलरी स्लिप पर कब से लागू होगा, इसकी पुष्टि अपने नियोक्ता/HR या EPFO से करें।",
  sections: [
    {
      id: "kaun",
      title: "PF किसका कटता है और कितना",
      list: [
        "<strong>कौन से संस्थान:</strong> EPF अधिनियम 1952 के तहत आम तौर पर 20 या ज़्यादा कर्मचारियों वाले संस्थान कवर होते हैं; छोटे संस्थान स्वेच्छा से भी जुड़ सकते हैं।",
        "<strong>कर्मचारी का हिस्सा:</strong> मूल वेतन + महंगाई भत्ते का 12%, जो पूरा PF खाते में जाता है।",
        "<strong>नियोक्ता का हिस्सा:</strong> 12%, जिसमें से 8.33% पेंशन योजना (EPS) में और बाकी PF में जाता है। EPS का हिस्सा वेतन सीमा तक के वेतन पर ही गिना जाता है।",
        "<strong>वेतन सीमा:</strong> 2014 से यह ₹15,000 महीना थी; सितंबर 2026 में इसे ₹25,000 करने को मंज़ूरी मिली। इससे ज़्यादा वेतन वाले कर्मचारियों के लिए नियम अलग हो सकते हैं।",
      ],
    },
    {
      id: "uan",
      title: "UAN चालू करें और KYC पूरा करें",
      steps: [
        '<a href="https://unifiedportal-mem.epfindia.gov.in/memberinterface/" target="_blank" rel="noopener nofollow">EPFO मेंबर पोर्टल</a> पर \"Activate UAN\" चुनें। UAN आपकी सैलरी स्लिप में लिखा होता है या HR से मिलता है।',
        "UAN, आधार और आधार से जुड़ा मोबाइल नंबर डालकर OTP से UAN सक्रिय करें और पासवर्ड बनाएं।",
        "लॉगिन करके <strong>Manage → KYC</strong> में बैंक खाता (IFSC सहित) और PAN जोड़ें। नियोक्ता की मंज़ूरी के बाद KYC पूरा होता है।",
        "<strong>ई-नॉमिनेशन</strong> ज़रूर भरें, ताकि किसी अनहोनी में परिवार को PF, पेंशन और EDLI बीमा का पैसा आसानी से मिले।",
      ],
    },
    {
      id: "balance",
      title: "PF बैलेंस कैसे देखें",
      table: {
        head: ["तरीका", "कैसे"],
        rows: [
          ["मिस्ड कॉल", "UAN से जुड़े मोबाइल से <strong>9966044425</strong> पर मिस्ड कॉल; SMS से बैलेंस आता है"],
          ["SMS", "<strong>EPFOHO UAN</strong> लिखकर 7738299899 पर भेजें (हिंदी के लिए अंत में HIN जोड़ें)"],
          ["पासबुक", "EPFO की पासबुक सेवा में UAN और पासवर्ड से लॉगिन"],
          ["UMANG ऐप", "UMANG ऐप में EPFO सेवा से पासबुक और क्लेम"],
        ],
      },
      callout: { kind: "info", html: "मिस्ड कॉल/SMS सेवा तभी काम करती है जब UAN सक्रिय हो और उसमें आधार/बैंक/PAN में से KYC जुड़ा हो।" },
    },
    {
      id: "claim",
      title: "PF निकालना (क्लेम) और ट्रांसफर",
      steps: [
        "मेंबर पोर्टल पर लॉगिन करके <strong>Online Services → Claim</strong> खोलें। बैंक खाते के आखिरी अंक डालकर सत्यापन करें।",
        "ज़रूरत के हिसाब से आंशिक निकासी (एडवांस), पूरा PF निकालना या पेंशन निकासी चुनें। कौन सा विकल्प मिलेगा, यह आपकी सेवा अवधि और नौकरी की स्थिति पर निर्भर है।",
        "आधार OTP से क्लेम जमा करें। स्टेटस पोर्टल या UMANG ऐप में \"Track Claim Status\" से देखें।",
        "<strong>नौकरी बदलने पर</strong> पुराना PF नए खाते में <strong>One Member One EPF Account (Transfer Request)</strong> से ट्रांसफर करें, ताकि सेवा अवधि जुड़ी रहे।",
      ],
      callout: { kind: "warn", html: "PF निकालने के नियम समय-समय पर बदलते हैं। क्लेम भरने से पहले पोर्टल पर दिख रहे विकल्प और शर्तें पढ़ें। पैसा सिर्फ आपके अपने KYC वाले बैंक खाते में आता है; कोई एजेंट फीस लेकर \"जल्दी निकलवाने\" का वादा करे तो सावधान रहें।" },
    },
    {
      id: "shikayat",
      title: "समस्या हो तो शिकायत",
      list: [
        '<strong>ऑनलाइन शिकायत:</strong> <a href="https://epfigms.gov.in/" target="_blank" rel="noopener nofollow">epfigms.gov.in</a> पर UAN से शिकायत दर्ज करें और नंबर संभालें।',
        "<strong>टोल-फ्री:</strong> 1800-118-005।",
        "<strong>नियोक्ता PF जमा नहीं कर रहा:</strong> पासबुक में महीनों की एंट्री न दिखे तो पहले HR से पूछें, फिर EPFiGMS पर शिकायत करें।",
        "<strong>नाम/जन्मतिथि में गलती:</strong> पोर्टल पर \"Modify Basic Details\" से सुधार का अनुरोध करें; नियोक्ता की मंज़ूरी लगती है।",
      ],
    },
  ],
  official: [
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", title: "EPFO यूनिफाइड मेंबर पोर्टल", note: "UAN, KYC, क्लेम, ट्रांसफर" },
    { href: "https://www.epfindia.gov.in/", title: "कर्मचारी भविष्य निधि संगठन (EPFO)" },
    { href: "https://epfigms.gov.in/", title: "EPFiGMS शिकायत पोर्टल" },
    { href: "https://web.umang.gov.in/", title: "UMANG ऐप", note: "EPFO पासबुक और क्लेम" },
  ],
  faq: [
    { q: "PF बैलेंस बिना इंटरनेट कैसे देखें?", a: "UAN से जुड़े मोबाइल से 9966044425 पर मिस्ड कॉल दें, या \"EPFOHO UAN\" लिखकर 7738299899 पर SMS भेजें। UAN सक्रिय और KYC पूरा होना चाहिए।" },
    { q: "2025-26 में PF पर कितना ब्याज मिला?", a: "8.25% सालाना। EPFO ने 1 जुलाई 2026 के सर्कुलर से यह दर अधिसूचित की और खातों में ब्याज जमा करने के निर्देश दिए।" },
    { q: "UAN क्या है?", a: "यूनिवर्सल अकाउंट नंबर (UAN) एक स्थायी नंबर है जो नौकरी बदलने पर भी वही रहता है। अलग-अलग नियोक्ताओं के PF खाते (Member ID) इसी से जुड़ते हैं।" },
    { q: "क्या PF वेतन सीमा ₹25,000 हो गई है?", a: "सितंबर 2026 में केंद्रीय मंत्रिमंडल ने EPF/EPS की अनिवार्य वेतन सीमा ₹15,000 से ₹25,000 करने को मंज़ूरी दी। आपके वेतन पर यह कब से लागू होगा, यह नियोक्ता/EPFO से पक्का करें।" },
    { q: "नौकरी बदलने पर PF निकालें या ट्रांसफर करें?", a: "आम तौर पर ट्रांसफर बेहतर है, क्योंकि सेवा अवधि जुड़ी रहती है जो पेंशन और टैक्स नियमों में काम आती है। ट्रांसफर मेंबर पोर्टल से ऑनलाइन होता है।" },
  ],
  related: [
    { href: "/service/epfo-higher-pension-option.html", emoji: "👴", title: "EPFO उच्च पेंशन", text: "संयुक्त विकल्प और डिमांड लेटर" },
    { href: "/tools/epf-calculator.html", emoji: "🧮", title: "EPF कैलकुलेटर", text: "PF जमा का अनुमान" },
    { href: "/service/esic.html", emoji: "🏥", title: "ESIC", text: "कर्मचारी राज्य बीमा" },
    { href: "/service/form-15g-15h-submission.html", emoji: "📄", title: "फॉर्म 15G / 15H", text: "TDS से बचाव" },
    { href: "/tools/gratuity-calculator.html", emoji: "💰", title: "ग्रेच्युटी कैलकुलेटर", text: "ग्रेच्युटी का हिसाब" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "नज़दीकी CSC", text: "ऑनलाइन काम में मदद" },
  ],
  aside: [
    { href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/", label: "🏦 EPFO मेंबर पोर्टल" },
    { href: "https://epfigms.gov.in/", label: "📝 EPFiGMS शिकायत" },
  ],
};
