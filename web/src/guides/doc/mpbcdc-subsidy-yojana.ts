import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): mpbcdc.maharashtra.gov.in, official site of
// Mahatma Phule Backward Class Development Corporation Ltd (Social Justice &
// Special Assistance Department, Maharashtra): "अनुदान योजना" page (Special
// Component Scheme; businesses with project investment up to ₹50,000; bank
// loan 50% and corporation subsidy 50%, maximum ₹25,000; remaining amount
// from bank at the bank's interest rate; documents: caste, income, residence
// proof, quotation; district office verifies home and business site; District
// Beneficiary Selection Committee chaired by the Collector; recommendation to
// a nationalised bank; subsidy cheque sent to the bank after bank sanction);
// homepage (target group: economically weak / BPL Scheduled Caste and
// Neo-Buddhist persons; email info@mpbcdc.in). The page gives the lower loan
// limit inconsistently (₹10,000 / ₹20,000), so only "up to ₹50,000" is used.
// Age and income limits were not verified and are left out.
export const mpbcdcSubsidyYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "MPBCDC योजनाएं", href: "/category/mpbcdc-schemes.html" },
    { label: "50% अनुदान योजना" },
  ],
  docHi: "50% अनुदान योजना",
  title: "MPBCDC 50% Subsidy Yojana 2026: 50% विशेष अनुदान योजना",
  description: "MPBCDC 50% अनुदान योजना: महाराष्ट्र के SC/नव-बौद्ध लोगों के ₹50,000 तक के व्यवसाय पर 50% (अधिकतम ₹25,000) अनुदान, बाकी बैंक कर्ज। पात्रता, कागज़ और आवेदन प्रक्रिया।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "MPBCDC 50% अनुदान योजना: ₹50,000 तक के व्यवसाय पर ₹25,000 तक अनुदान",
  lead: "महात्मा फुले मागासवर्ग विकास महामंडळ (MPBCDC) की अनुदान योजना (विशेष घटक योजना) में ₹50,000 तक के छोटे व्यवसाय के लिए राष्ट्रीयकृत बैंक से कर्ज दिलाया जाता है। प्रकल्प का 50%, अधिकतम ₹25,000, महामंडळ अनुदान के रूप में देता है, जो वापस नहीं करना होता। बाकी रकम बैंक कर्ज होती है, जिस पर बैंक का ब्याज लगता है।",
  facts: [
    ["प्रकल्प सीमा", "₹50,000 तक"],
    ["अनुदान", "50%, अधिकतम ₹25,000"],
    ["बाकी रकम", "राष्ट्रीयकृत बैंक का कर्ज"],
    ["किसके लिए", "SC और नव-बौद्ध, महाराष्ट्र"],
  ],
  sections: [
    {
      id: "swaroop",
      title: "योजना का स्वरूप",
      table: {
        head: ["हिस्सा", "कितना", "ध्यान दें"],
        rows: [
          ["महामंडळ का अनुदान", "50%, अधिकतम ₹25,000", "वापस नहीं करना; चेक सीधे बैंक को जाता है"],
          ["बैंक का कर्ज", "बाकी रकम", "बैंक के ब्याज दर पर, बैंक के नियम से वापसी"],
        ],
      },
      callout: { kind: "info", html: "उदाहरण: ₹40,000 के व्यवसाय में ₹20,000 अनुदान और ₹20,000 बैंक कर्ज। ₹50,000 या उससे ज़्यादा पर अनुदान ₹25,000 से ज़्यादा नहीं होता। यह योजना बैंक की मंज़ूरी पर टिकी है; बैंक कर्ज मंज़ूर न करे तो अनुदान भी नहीं मिलता।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "महाराष्ट्र का निवासी",
        "<strong>अनुसूचित जाति (SC) या नव-बौद्ध</strong> समाज से",
        "आर्थिक रूप से कमज़ोर / गरीबी रेखा से नीचे का परिवार",
        "छोटा व्यवसाय शुरू करना चाहता हो (जैसे दुकान, सिलाई, औज़ार आदि)",
      ],
      callout: { kind: "warn", html: "आयु और आय सीमा की ताज़ा शर्तें महामंडळ की वेबसाइट पर नहीं मिलीं। ज़िला कार्यालय से पक्की करें।" },
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "जाति प्रमाण पत्र",
        "आय प्रमाण पत्र",
        "निवास का प्रमाण: राशन कार्ड, वोटर ID, आधार, PAN या बिजली बिल",
        "व्यवसाय के कागज़, जैसे सामान का कोटेशन (किंमतीपत्रक)",
        "बैंक खाते की पासबुक (बैंक कर्ज के लिए)",
      ],
    },
    {
      id: "prakriya",
      title: "आवेदन की प्रक्रिया",
      steps: [
        "अपने ज़िले के <strong>महात्मा फुले महामंडळ ज़िला कार्यालय</strong> में कागज़ के साथ आवेदन दें।",
        "ज़िला कार्यालय घर और व्यवसाय की जगह की <strong>जांच</strong> करता है।",
        "<strong>कलेक्टर की अध्यक्षता वाली ज़िला लाभार्थी चयन समिति</strong> आवेदनों की जांच कर मंज़ूरी देती है।",
        "मंज़ूर आवेदन ज़िला कार्यालय से <strong>राष्ट्रीयकृत बैंक</strong> को सिफारिश के साथ भेजा जाता है।",
        "बैंक कर्ज मंज़ूर करे तो महामंडळ अनुदान का चेक बैंक को भेजता है, फिर बैंक आपको कर्ज देता है।",
      ],
      callout: { kind: "ok", html: "किसी एजेंट को पैसे न दें। आवेदन का तरीका (ऑफलाइन/ऑनलाइन) और समय-सीमा ज़िला कार्यालय से पूछें।" },
    },
    {
      id: "tulna",
      title: "दूसरी योजनाओं से तुलना",
      list: [
        '<strong><a href="/service/mpbcdc-direct-loan-yojana.html">थेट कर्ज योजना</a>:</strong> ₹1 लाख तक, ₹50,000 अनुदान, ₹45,000 महामंडळ का कर्ज 4% पर, बैंक की ज़रूरत नहीं।',
        "<strong>बीज भांडवल योजना:</strong> ₹5 लाख तक के व्यवसाय पर बैंक 75%, महामंडळ 20% (4% ब्याज) और आवेदक 5%।",
        '<a href="/service/mpbcdc-yojana.html">MPBCDC की सभी योजनाएं</a>',
      ],
    },
  ],
  official: [
    { href: "https://mpbcdc.maharashtra.gov.in/", title: "महात्मा फुले मागासवर्ग विकास महामंडळ (MPBCDC)", note: "ईमेल info@mpbcdc.in" },
    { href: "https://sjsa.maharashtra.gov.in/", title: "सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र" },
  ],
  faq: [
    { q: "50% अनुदान योजना में अधिकतम कितना अनुदान मिलता है?", a: "प्रकल्प का 50%, लेकिन अधिकतम ₹25,000। प्रकल्प ₹50,000 तक का होना चाहिए।" },
    { q: "बाकी पैसा कहां से आता है?", a: "बाकी रकम राष्ट्रीयकृत बैंक कर्ज के रूप में देता है, जिस पर बैंक का ब्याज लगता है।" },
    { q: "अनुदान मेरे खाते में आता है?", a: "नहीं, बैंक के कर्ज मंज़ूर करने के बाद महामंडळ अनुदान का चेक बैंक को भेजता है और बैंक कर्ज के साथ इसे देता है।" },
    { q: "आवेदन कहां करें?", a: "अपने ज़िले के महात्मा फुले मागासवर्ग विकास महामंडळ के ज़िला कार्यालय में। चयन ज़िला लाभार्थी चयन समिति करती है।" },
  ],
  related: [
    { href: "/service/mpbcdc-yojana.html", emoji: "💸", title: "MPBCDC की सभी योजनाएं", text: "अनुदान, बीज भांडवल, थेट कर्ज" },
    { href: "/service/mpbcdc-direct-loan-yojana.html", emoji: "📉", title: "थेट कर्ज योजना", text: "₹1 लाख तक, 4% ब्याज" },
    { href: "/service/mpbcdc-seed-capital-yojana.html", emoji: "🌱", title: "बीज भांडवल योजना", text: "₹5 लाख तक के व्यवसाय" },
    { href: "/service/mh-caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र (महाराष्ट्र)", text: "आवेदन के लिए ज़रूरी" },
    { href: "/service/mh-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (महाराष्ट्र)", text: "उत्पन्नाचा दाखला" },
  ],
  aside: [
    { href: "https://mpbcdc.maharashtra.gov.in/", label: "🏛️ MPBCDC वेबसाइट" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
