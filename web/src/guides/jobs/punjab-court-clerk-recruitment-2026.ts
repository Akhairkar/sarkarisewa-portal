import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; sssc.gov.in not opened from the sandbox, so
// coverage of the SSSC advertisement was used):
// - testbook.com, freejobalert.com, verandarace.com, careerpower.in,
//   mysarkarinaukri.com, adda247.com, bankersadda.com: Society for
//   Centralized Recruitment of Staff in Subordinate Courts (SSSC, under the
//   Punjab and Haryana High Court), Advt 37C/SSSC/PB/2026 dated ~3 Oct 2026;
//   1,270 Clerk posts in district courts of Punjab (number may change);
//   online 7 Oct 2026 (4 PM) to 4 Nov 2026 (4 PM); BA/BSc or equivalent,
//   Punjabi in matriculation, computer proficiency; age 18-37 on 1 Jan 2026
//   (Punjab SC/BC/OBC +5, PwBD +10, ESM per rules; in-service up to 45);
//   pay ₹29,200 (Level 5); fee ₹710 (Punjab SC/BC/OBC/ESM/EWS), ₹875 (Punjab
//   PwBD), ₹1,200 (others); CBT + Computer Proficiency Test.
// One page mis-states the window as 7 Nov - 4 Dec while its own table says
// 7 Oct - 4 Nov; most sources give 4 Nov. CBT pattern not confirmed.
export const punjabCourtClerkRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "पंजाब कोर्ट क्लर्क भर्ती 2026" },
  ],
  docHi: "पंजाब कोर्ट क्लर्क भर्ती 2026",
  title: "पंजाब कोर्ट क्लर्क भर्ती 2026: 1,270 पद, आवेदन 4 नवंबर तक",
  description: "पंजाब ज़िला अदालतों में क्लर्क के 1,270 पद (विज्ञापन 37C/SSSC/PB/2026)। ग्रेजुएट आवेदन करें, आखिरी तारीख 4 नवंबर 2026। उम्र, फीस, वेतन और sssc.gov.in पर आवेदन।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "पंजाब कोर्ट क्लर्क भर्ती 2026: 1,270 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> पंजाब एवं हरियाणा हाईकोर्ट के अधीन SSSC (Society for Centralized Recruitment of Staff in Subordinate Courts) ने <strong>पंजाब की ज़िला अदालतों में क्लर्क के 1,270 पद</strong> निकाले हैं (विज्ञापन 37C/SSSC/PB/2026)। ग्रेजुएट उम्मीदवार <strong>7 अक्टूबर से 4 नवंबर 2026 (शाम 4 बजे)</strong> तक sssc.gov.in पर ऑनलाइन आवेदन कर सकते हैं। 10वीं में पंजाबी विषय होना ज़रूरी बताया गया है।",
  facts: [
    ["कुल पद", "1,270 क्लर्क (पंजाब की ज़िला अदालतें)"],
    ["आखिरी तारीख", "4 नवंबर 2026, शाम 4 बजे"],
    ["वेतन", "₹29,200 (Level 5)"],
    ["आवेदन", "<a href=\"https://sssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">sssc.gov.in</a>"],
  ],
  notice: "18 अक्टूबर 2026 तक: आवेदन चालू है। ये जानकारी SSSC के विज्ञापन पर आधारित रिपोर्टों से है। हरियाणा के 1,265 क्लर्क पदों की अलग भर्ती (विज्ञापन 36C) का आवेदन जुलाई 2026 में बंद हो चुका है; दोनों को न मिलाएं। फॉर्म से पहले sssc.gov.in पर पूरा विज्ञापन पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["विज्ञापन जारी", "अक्टूबर 2026 (37C/SSSC/PB/2026)"],
          ["ऑनलाइन आवेदन शुरू", "7 अक्टूबर 2026, शाम 4 बजे"],
          ["आवेदन की आखिरी तारीख", "4 नवंबर 2026, शाम 4 बजे"],
          ["फीस की आखिरी तारीख", "नोटिफिकेशन में देखें"],
          ["लिखित परीक्षा (CBT)", "बाद में घोषित होगी"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["पद", "पद संख्या", "वेतन"],
        rows: [
          ["क्लर्क (पंजाब की ज़िला/अधीनस्थ अदालतें)", "1,270", "₹29,200 (Level 5)"],
        ],
      },
      callout: { kind: "info", html: "पदों की संख्या बिना सूचना घट-बढ़ सकती है। वर्गवार और ज़िलावार पद विज्ञापन में दिए हैं।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>शिक्षा:</strong> मान्यता प्राप्त विश्वविद्यालय से BA या BSc या समकक्ष डिग्री।",
        "<strong>पंजाबी:</strong> 10वीं (मैट्रिक) में पंजाबी एक विषय के रूप में पास।",
        "<strong>कंप्यूटर:</strong> कंप्यूटर चलाने में दक्षता; कोई खास कोर्स ज़रूरी है या नहीं, नोटिफिकेशन में देखें।",
        "<strong>उम्र:</strong> 1 जनवरी 2026 को 18 से 37 साल।",
        "<strong>छूट:</strong> पंजाब के SC और BC/OBC को 5 साल, पंजाब के दिव्यांग (PwBD) को 10 साल, पूर्व सैनिकों को नियमों के अनुसार; सरकारी/अदालत कर्मचारियों के लिए 45 साल तक।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "फीस"],
        rows: [
          ["पंजाब के SC / BC / OBC / पूर्व सैनिक / EWS", "₹710"],
          ["पंजाब के दिव्यांग (PwBD)", "₹875"],
          ["अन्य सभी (सामान्य और दूसरे राज्यों के उम्मीदवार)", "₹1,200"],
        ],
      },
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>कंप्यूटर आधारित लिखित परीक्षा (CBT)।</strong> सिलेबस और अंक विज्ञापन में देखें।",
        "<strong>कंप्यूटर प्रोफिशिएंसी टेस्ट (CPT)।</strong>",
        "<strong>दस्तावेज़ जांच</strong> और मेरिट के आधार पर नियुक्ति।",
      ],
      html: "कंप्यूटर पर तेज़ी से काम करने का अभ्यास करें; टाइपिंग का अभ्यास हमारे <a href=\"/tools/typing-speed-test.html\">टाइपिंग स्पीड टेस्ट</a> पर कर सकते हैं।",
    },
    {
      id: "apply",
      title: "कैसे आवेदन करें",
      steps: [
        "<a href=\"https://sssc.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">sssc.gov.in</a> खोलें और विज्ञापन 37C/SSSC/PB/2026 (पंजाब क्लर्क) चुनें।",
        "मोबाइल और ईमेल से रजिस्ट्रेशन करें।",
        "शिक्षा, पंजाबी (मैट्रिक) और वर्ग की जानकारी भरें; फोटो और हस्ताक्षर अपलोड करें। साइज़ के लिए <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> इस्तेमाल कर सकते हैं।",
        "फीस ऑनलाइन भरें और फाइनल फॉर्म का प्रिंट रखें।",
      ],
      callout: { kind: "warn", html: "आवेदन केवल ऑनलाइन होगा; डाक या हाथ से दिया फॉर्म स्वीकार नहीं होगा। आखिरी दिन शाम 4 बजे के बाद फॉर्म नहीं भरेगा।" },
    },
  ],
  official: [
    { href: "https://sssc.gov.in/", title: "SSSC (ज़िला अदालतों के स्टाफ की केंद्रीकृत भर्ती)", note: "विज्ञापन 37C/SSSC/PB/2026 और आवेदन" },
    { href: "https://highcourtchd.gov.in/", title: "पंजाब एवं हरियाणा हाईकोर्ट" },
  ],
  faq: [
    { q: "पंजाब कोर्ट क्लर्क भर्ती 2026 की आखिरी तारीख क्या है?", a: "4 नवंबर 2026, शाम 4 बजे तक (ज़्यादातर रिपोर्टों के अनुसार)।" },
    { q: "क्या दूसरे राज्य के लोग आवेदन कर सकते हैं?", a: "रिपोर्टों में 'अन्य सभी' वर्ग की फीस ₹1,200 दी गई है, यानी आवेदन संभव है, पर आरक्षण और छूट केवल पंजाब के उम्मीदवारों को मिलती है। 10वीं में पंजाबी विषय की शर्त ध्यान से देखें।" },
    { q: "योग्यता क्या है?", a: "BA या BSc या समकक्ष डिग्री, 10वीं में पंजाबी विषय और कंप्यूटर चलाने की जानकारी।" },
    { q: "उम्र सीमा क्या है?", a: "1 जनवरी 2026 को 18 से 37 साल। पंजाब के SC/BC/OBC को 5 साल और दिव्यांग को 10 साल की छूट।" },
    { q: "क्या यह हरियाणा की 1,265 क्लर्क भर्ती है?", a: "नहीं। हरियाणा के 1,265 पद अलग विज्ञापन (36C) से थे और उनका आवेदन जुलाई 2026 में बंद हो चुका है।" },
  ],
  related: [
    { href: "/jobs/rajasthan-high-court-stenographer-recruitment-2026-grade-ii-iii-163-posts-ms8e3ooo-3.html", emoji: "⚖️", title: "राजस्थान हाईकोर्ट स्टेनो", text: "अदालत की एक और भर्ती" },
    { href: "/tools/typing-speed-test.html", emoji: "⌨️", title: "टाइपिंग स्पीड टेस्ट", text: "कंप्यूटर टेस्ट की तैयारी" },
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "1 जनवरी 2026 को उम्र" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
  ],
  aside: [
    { href: "https://sssc.gov.in/", label: "⚖️ sssc.gov.in पर आवेदन" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
