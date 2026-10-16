import type { DocGuide } from "./types";
import { gstinPromo } from "./promos";

// Sources (checked 16 Oct 2026; pib.gov.in, standupmitra.in and
// newsonair.gov.in not reachable from the sandbox, search-result extracts
// used): Union Cabinet approval Jan 2016 (Business Standard/PTI, GKToday:
// bank loans of Rs 10 lakh to Rs 1 crore for greenfield enterprises, at
// least one SC/ST and one woman borrower per bank branch, SIDBI refinance
// window, credit guarantee through NCGTC), Deccan Herald 2021 (extended to
// 2025 for the 15th Finance Commission period), newsonair.gov.in 16 Mar 2026
// (Lok Sabha reply: scheme launched April 2016 "came to an end in March last
// year", studied by NITI Aayog and being redrafted for more benefits),
// Telangana Today (relaunch being prepared), Union Budget 2025-26 (new scheme
// for 5 lakh first-time women and SC/ST entrepreneurs, term loans up to Rs 2
// crore). No notification of a revamped scheme was found by 16 Oct 2026, so
// its terms are not stated. Aggregator claims that banks still accept
// applications under the old framework were not confirmed and are left out.
export const standUpIndia: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/category/government-schemes.html" },
    { label: "स्टैंड अप इंडिया" },
  ],
  docHi: "स्टैंड अप इंडिया",
  promo: gstinPromo,
  title: "स्टैंड अप इंडिया योजना 2026",
  description: "स्टैंड अप इंडिया: SC/ST और महिला उद्यमियों को नए उद्यम के लिए ₹10 लाख-₹1 करोड़ का बैंक लोन। योजना मार्च 2025 में खत्म हुई, नया रूप तैयार हो रहा है; अभी के विकल्प।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "स्टैंड अप इंडिया योजना 2026: मार्च 2025 में खत्म, नए रूप का इंतज़ार और अभी के विकल्प",
  lead: "स्टैंड अप इंडिया केंद्र सरकार (वित्त मंत्रालय) की योजना थी, जिसमें हर बैंक शाखा को कम से कम एक SC/ST और एक महिला उद्यमी को नया उद्यम शुरू करने के लिए <strong>₹10 लाख से ₹1 करोड़</strong> तक का लोन देना था। यह अप्रैल 2016 में शुरू हुई और <strong>31 मार्च 2025 को खत्म</strong> हो गई। मार्च 2026 में वित्त मंत्री ने लोकसभा में बताया कि योजना को ज़्यादा लाभ के साथ नए सिरे से बनाया जा रहा है; 15 अक्टूबर 2026 तक नई योजना की अधिसूचना हमें नहीं मिली।",
  facts: [
    ["मंत्रालय", "वित्त मंत्रालय (वित्तीय सेवाएं विभाग)"],
    ["लोन", "₹10 लाख - ₹1 करोड़ (पुरानी योजना)"],
    ["किसके लिए", "SC/ST और महिला उद्यमी"],
    ["स्थिति", "मार्च 2025 में खत्म; नया रूप तैयार हो रहा है"],
  ],
  notice: "स्टैंड अप इंडिया की अवधि 31 मार्च 2025 को खत्म हो चुकी है। \"स्टैंड अप इंडिया 2026 में तुरंत लोन\" का वादा करने वाले एजेंटों से सावधान रहें। नई योजना आने पर उसकी घोषणा सरकार (PIB/वित्त मंत्रालय) करेगी।",
  sections: [
    {
      id: "kya-thi",
      title: "पुरानी योजना में क्या था",
      list: [
        "<strong>लोन:</strong> ₹10 लाख से ₹1 करोड़ तक का बैंक लोन (टर्म लोन और कार्यशील पूंजी मिलाकर)।",
        "<strong>नया उद्यम (greenfield):</strong> लोन सिर्फ पहली बार शुरू होने वाले उद्यम के लिए था, जैसे निर्माण, सेवा या व्यापार।",
        "<strong>कौन:</strong> 18 साल से ऊपर के SC/ST या महिला उद्यमी; कंपनी/फर्म हो तो कम से कम 51% हिस्सा और नियंत्रण SC/ST या महिला के पास।",
        "<strong>लक्ष्य:</strong> हर बैंक शाखा कम से कम एक SC/ST और एक महिला उधारकर्ता को लोन दे।",
        "<strong>सहायता:</strong> SIDBI की रीफाइनेंस सुविधा और NCGTC के ज़रिए क्रेडिट गारंटी; आवेदन standupmitra.in पोर्टल या बैंक शाखा से।",
      ],
    },
    {
      id: "aage",
      title: "अब क्या स्थिति है",
      list: [
        "<strong>मार्च 2025:</strong> 15वें वित्त आयोग की अवधि के साथ योजना खत्म हुई।",
        "<strong>बजट 2025-26:</strong> सरकार ने पहली बार उद्यम शुरू करने वाली 5 लाख महिलाओं और SC/ST उद्यमियों के लिए ₹2 करोड़ तक के टर्म लोन की नई योजना की घोषणा की, जिसमें स्टैंड अप इंडिया के अनुभव शामिल होंगे।",
        "<strong>मार्च 2026:</strong> वित्त मंत्री ने लोकसभा में कहा कि नीति आयोग और दूसरे विभागों ने योजना का अध्ययन किया है और इसे ज़्यादा लाभ के साथ नए सिरे से बनाया जा रहा है।",
        "<strong>अक्टूबर 2026:</strong> नई योजना की शर्तें या अधिसूचना हमें सरकारी स्रोत में नहीं मिलीं।",
      ],
      callout: { kind: "info", html: "नई योजना कब और किन शर्तों पर आएगी, यह अपने बैंक की शाखा या <a href=\"https://www.standupmitra.in/\" target=\"_blank\" rel=\"noopener nofollow\">standupmitra.in</a> पर देखते रहें।" },
    },
    {
      id: "vikalp",
      title: "अभी बिज़नेस लोन के दूसरे विकल्प",
      list: [
        '<strong>प्रधानमंत्री मुद्रा योजना:</strong> छोटे कारोबार के लिए बिना गिरवी लोन, देखें <a href="/service/pm-mudra-yojana.html">मुद्रा योजना गाइड</a>।',
        '<strong>पीएम विश्वकर्मा:</strong> पारंपरिक कारीगरों के लिए लोन और प्रशिक्षण, देखें <a href="/service/pm-vishwakarma-yojana.html">पीएम विश्वकर्मा गाइड</a>।',
        '<strong>Udyam रजिस्ट्रेशन:</strong> ज़्यादातर बैंक MSME लोन के लिए यह मांगते हैं, देखें <a href="/service/udyam-registration.html">Udyam रजिस्ट्रेशन</a>।',
        "<strong>राज्य की योजनाएं:</strong> कई राज्यों के SC/ST व महिला विकास निगम भी स्वरोज़गार लोन देते हैं; ज़िला उद्योग केंद्र (DIC) से पूछें।",
      ],
    },
  ],
  official: [
    { href: "https://www.standupmitra.in/", title: "Stand-Up Mitra पोर्टल (SIDBI)" },
    { href: "https://financialservices.gov.in/", title: "वित्तीय सेवाएं विभाग, वित्त मंत्रालय" },
  ],
  faq: [
    { q: "क्या स्टैंड अप इंडिया योजना अभी चल रही है?", a: "नहीं। योजना 31 मार्च 2025 को खत्म हो गई। मार्च 2026 में वित्त मंत्री ने बताया कि इसे नए सिरे से बनाया जा रहा है। 15 अक्टूबर 2026 तक नई योजना की अधिसूचना हमें नहीं मिली।" },
    { q: "पुरानी योजना में कितना लोन मिलता था?", a: "नए उद्यम के लिए ₹10 लाख से ₹1 करोड़ तक का बैंक लोन।" },
    { q: "₹2 करोड़ वाली योजना क्या है?", a: "बजट 2025-26 में पहली बार उद्यम शुरू करने वाली 5 लाख महिलाओं और SC/ST उद्यमियों के लिए ₹2 करोड़ तक के टर्म लोन की नई योजना की घोषणा हुई थी। इसकी अधिसूचित शर्तें हमें नहीं मिलीं।" },
    { q: "अभी नया बिज़नेस शुरू करने के लिए लोन कहां से लें?", a: "मुद्रा योजना, पीएम विश्वकर्मा या राज्य के SC/ST/महिला विकास निगम की योजनाएं देखें। अपनी बैंक शाखा और ज़िला उद्योग केंद्र से भी पूछें।" },
  ],
  related: [
    { href: "/service/standup-india-sc-st-women-loan.html", emoji: "🏦", title: "स्टैंड-अप इंडिया लोन", text: "पात्रता, कागज़ और आवेदन के तरीके" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "छोटे कारोबार के लिए लोन" },
    { href: "/service/pm-vishwakarma-yojana.html", emoji: "🛠️", title: "पीएम विश्वकर्मा योजना", text: "कारीगरों के लिए लोन" },
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "Udyam रजिस्ट्रेशन", text: "MSME पंजीकरण" },
  ],
  aside: [
    { href: "https://www.standupmitra.in/", label: "🏦 Stand-Up Mitra" },
    { href: "/service/pm-mudra-yojana.html", label: "💼 मुद्रा लोन" },
  ],
};
