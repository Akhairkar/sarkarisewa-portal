import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 15 Oct 2026): mpbcdc.maharashtra.gov.in, official site of
// Mahatma Phule Backward Class Development Corporation Ltd (Social Justice &
// Special Assistance Department, Maharashtra; working since 1978): homepage
// (aim: self-employment schemes and training for economically weak / BPL
// Scheduled Caste and Neo-Buddhist persons; email info@mpbcdc.in; news item on
// closing the NSKFDC loan system from 31.10.2023); scheme pages: Subsidy
// Scheme (project up to ₹50,000, 50% subsidy max ₹25,000, rest bank loan),
// Seed Capital / Margin Money Scheme (₹50,001 to ₹5,00,000; bank 75%,
// corporation 20% incl. subsidy up to ₹50,000, applicant 5%; 4% interest on
// seed capital; 5-year recovery), Direct Finance Scheme (up to ₹1,00,000;
// corporation ₹45,000 at 4% p.a., subsidy ₹50,000, applicant ₹5,000; 36
// months; GR dated 21.12.2018), Training Scheme (NSQF training under PM-AJAY,
// stipend and fee paid by district office), NSFDC scheme page (Suvidha up to
// ₹10 lakh, Utkarsh up to ₹50 lakh, Micro Credit and Mahila Samriddhi up to
// ₹1.40 lakh, education loans). Interest rates for NSFDC loans are left out
// because they change; age and income limits were not verified.
export const mpbcdcYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "MPBCDC योजनाएं", href: "/category/mpbcdc-schemes.html" },
    { label: "महात्मा फुले महामंडळ योजनाएं" },
  ],
  docHi: "महात्मा फुले महामंडळ योजनाएं",
  promo: gstinPromo,
  title: "MPBCDC Yojana 2026: महात्मा फुले महामंडळ योजनाएं",
  description: "MPBCDC (महात्मा फुले मागासवर्ग विकास महामंडळ) की योजनाएं: 50% अनुदान, बीज भांडवल, थेट कर्ज, प्रशिक्षण और NSFDC कर्ज। तुलना, पात्रता, कागज़ और ज़िला कार्यालय में आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "MPBCDC योजनाएं: महात्मा फुले मागासवर्ग विकास महामंडळ की कर्ज, अनुदान और प्रशिक्षण योजनाएं",
  lead: "महात्मा फुले मागासवर्ग विकास महामंडळ (MPBCDC) महाराष्ट्र सरकार के सामाजिक न्याय व विशेष सहाय्य विभाग के तहत 1978 से काम कर रहा है। यह अनुसूचित जाति और नव-बौद्ध समाज के आर्थिक रूप से कमज़ोर लोगों को स्वरोज़गार के लिए अनुदान, कर्ज और प्रशिक्षण देता है। मुख्य योजनाएं हैं: 50% अनुदान योजना, बीज भांडवल योजना, थेट कर्ज योजना, प्रशिक्षण योजना और NSFDC की कर्ज योजनाएं।",
  facts: [
    ["विभाग", "सामाजिक न्याय व विशेष सहाय्य, महाराष्ट्र"],
    ["किसके लिए", "SC और नव-बौद्ध समाज"],
    ["मुख्य योजनाएं", "अनुदान, बीज भांडवल, थेट कर्ज"],
    ["आवेदन", "महामंडळ का ज़िला कार्यालय"],
  ],
  sections: [
    {
      id: "tulna",
      title: "राज्य की तीन मुख्य योजनाओं की तुलना",
      table: {
        head: ["योजना", "प्रकल्प सीमा", "पैसा कैसे बंटता है"],
        rows: [
          ['<a href="/service/mpbcdc-subsidy-yojana.html">अनुदान योजना</a>', "₹50,000 तक", "50% अनुदान (अधिकतम ₹25,000), बाकी बैंक कर्ज"],
          ['<a href="/service/mpbcdc-seed-capital-yojana.html">बीज भांडवल योजना</a>', "₹50,001 से ₹5,00,000", "बैंक 75%, महामंडळ 20% (अधिकतम ₹50,000 अनुदान सहित, 4% ब्याज, 5 साल में वापसी), आवेदक 5%"],
          ['<a href="/service/mpbcdc-direct-loan-yojana.html">थेट कर्ज योजना</a>', "₹1,00,000 तक", "₹50,000 तक अनुदान, ₹45,000 महामंडळ का कर्ज (4% सालाना, 36 महीने), आवेदक ₹5,000"],
        ],
      },
      callout: { kind: "info", html: "अनुदान और बीज भांडवल योजना में बैंक का कर्ज मंज़ूर होना ज़रूरी है। थेट कर्ज योजना में कर्ज सीधे महामंडळ देता है।" },
    },
    {
      id: "prashikshan",
      title: "प्रशिक्षण योजना",
      intro: "अनुसूचित जाति और नव-बौद्ध युवक-युवतियों को PM-AJAY योजना के तहत NSQF के अनुसार कौशल प्रशिक्षण दिया जाता है।",
      list: [
        "ज़िला कार्यालय आवेदन मंगाता है; जाति प्रमाण पत्र और निवास का प्रमाण लगता है।",
        "इंटरव्यू और मूल कागज़ों की जांच के बाद ज़िला व्यवस्थापक की अध्यक्षता वाली समिति चयन करती है।",
        "चुने गए उम्मीदवार प्रशिक्षण संस्था में भेजे जाते हैं; हाज़िरी के हिसाब से विद्यावेतन (stipend) और संस्था की फीस ज़िला कार्यालय देता है।",
      ],
    },
    {
      id: "nsfdc",
      title: "NSFDC की कर्ज योजनाएं (महामंडळ के माध्यम से)",
      intro: "महामंडळ राष्ट्रीय अनुसूचित जाति वित्त एवं विकास निगम (NSFDC), नई दिल्ली की योजनाएं भी चलाता है। वेबसाइट पर दी गई कर्ज सीमाएं:",
      table: {
        head: ["योजना", "कर्ज सीमा"],
        rows: [
          ["सुविधा कर्ज योजना", "₹10,00,000 तक"],
          ["उत्कर्ष कर्ज योजना", "₹50,00,000 तक"],
          ["सूक्ष्म पत पुरवठा (Micro Credit)", "₹1,40,000 तक"],
          ["महिला समृद्धि", "₹1,40,000 तक"],
          ["उच्च शिक्षा कर्ज", "देश में ₹30 लाख, विदेश में ₹40 लाख तक"],
        ],
      },
      callout: { kind: "warn", html: "इन कर्जों में आम तौर पर 90% NSFDC और 10% आवेदक का हिस्सा होता है। ब्याज दर समय-समय पर बदलती है, इसलिए ज़िला कार्यालय से ताज़ा दर लें। सफाई कामगारों वाली NSKFDC कर्ज प्रणाली महामंडळ की सूचना के अनुसार 31 अक्टूबर 2023 से बंद की गई है।" },
    },
    {
      id: "patrata",
      title: "पात्रता और कागज़",
      list: [
        "महाराष्ट्र का निवासी, <strong>अनुसूचित जाति या नव-बौद्ध</strong> समाज से",
        "आर्थिक रूप से कमज़ोर / गरीबी रेखा से नीचे का परिवार",
        "<strong>कागज़:</strong> जाति प्रमाण पत्र, आय प्रमाण पत्र, निवास का प्रमाण (राशन कार्ड, वोटर ID, आधार, PAN या बिजली बिल), व्यवसाय के सामान का कोटेशन",
        "बड़े प्रकल्प (₹2 लाख से ऊपर) में प्रकल्प रिपोर्ट; वाहन के लिए लाइसेंस/परमिट; गुमास्ता लाइसेंस जैसे व्यवसाय के कागज़",
      ],
      callout: { kind: "warn", html: "आयु सीमा और आय सीमा की ताज़ा शर्तें महामंडळ की वेबसाइट पर नहीं मिलीं। ज़िला कार्यालय से लिखित में पूछें।" },
    },
    {
      id: "prakriya",
      title: "आवेदन की आम प्रक्रिया",
      steps: [
        "अपने ज़िले के <strong>महात्मा फुले महामंडळ ज़िला कार्यालय</strong> में योजना चुनें और कागज़ के साथ आवेदन दें।",
        "ज़िला कार्यालय घर और व्यवसाय की जगह की जांच करता है।",
        "बैंक वाली योजनाओं में कलेक्टर की अध्यक्षता वाली <strong>ज़िला लाभार्थी चयन समिति</strong> मंज़ूरी देती है और आवेदन बैंक को भेजा जाता है।",
        "बैंक/महामंडळ की मंज़ूरी के बाद अनुदान और कर्ज की रकम दी जाती है; कई योजनाओं में व्यवसाय शुरू होने के बाद जांच होती है।",
      ],
      callout: { kind: "ok", html: "किसी एजेंट को पैसे न दें। आवेदन ऑनलाइन है या ऑफलाइन, यह ज़िला कार्यालय से पूछें। महामंडळ का ईमेल: info@mpbcdc.in" },
    },
  ],
  official: [
    { href: "https://mpbcdc.maharashtra.gov.in/", title: "महात्मा फुले मागासवर्ग विकास महामंडळ (MPBCDC)", note: "ईमेल info@mpbcdc.in" },
    { href: "https://sjsa.maharashtra.gov.in/", title: "सामाजिक न्याय व विशेष सहाय्य विभाग, महाराष्ट्र" },
    { href: "https://aaplesarkar.mahaonline.gov.in/", title: "आपले सरकार (जाति/आय प्रमाण पत्र के लिए)" },
  ],
  faq: [
    { q: "MPBCDC का पूरा नाम क्या है?", a: "महात्मा फुले मागासवर्ग विकास महामंडळ मर्यादित (Mahatma Phule Backward Class Development Corporation Ltd), महाराष्ट्र सरकार के सामाजिक न्याय व विशेष सहाय्य विभाग के तहत।" },
    { q: "MPBCDC की योजनाएं किसके लिए हैं?", a: "महाराष्ट्र के अनुसूचित जाति और नव-बौद्ध समाज के आर्थिक रूप से कमज़ोर लोगों के लिए।" },
    { q: "सबसे ज़्यादा अनुदान किस योजना में है?", a: "थेट कर्ज योजना में ₹1 लाख के प्रकल्प पर ₹50,000 तक अनुदान है। अनुदान योजना में अधिकतम ₹25,000 और बीज भांडवल योजना में महामंडळ का हिस्सा अधिकतम ₹50,000 (अनुदान सहित) है।" },
    { q: "आवेदन कहां करें?", a: "अपने ज़िले के महात्मा फुले महामंडळ ज़िला कार्यालय में। ज़िला कार्यालयों की सूची महामंडळ की वेबसाइट पर \"संपर्क\" में है।" },
  ],
  related: [
    { href: "/service/mpbcdc-direct-loan-yojana.html", emoji: "📉", title: "थेट कर्ज योजना", text: "₹1 लाख तक, 4% ब्याज" },
    { href: "/service/mpbcdc-subsidy-yojana.html", emoji: "🎁", title: "50% अनुदान योजना", text: "₹50,000 तक के व्यवसाय" },
    { href: "/service/mpbcdc-seed-capital-yojana.html", emoji: "🌱", title: "बीज भांडवल योजना", text: "₹5 लाख तक के व्यवसाय" },
    { href: "/service/mh-caste-certificate.html", emoji: "🪪", title: "जाति प्रमाण पत्र (महाराष्ट्र)", text: "आवेदन के लिए ज़रूरी" },
    { href: "/service/mh-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (महाराष्ट्र)", text: "उत्पन्नाचा दाखला" },
    { href: "/service/stand-up-india.html", emoji: "🏦", title: "स्टैंड-अप इंडिया", text: "SC/ST व महिलाओं के लिए बैंक कर्ज" },
  ],
  aside: [
    { href: "https://mpbcdc.maharashtra.gov.in/", label: "🏛️ MPBCDC वेबसाइट" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
