import type { DocGuide } from "../doc/types";

// Sources (checked 18 Oct 2026; esb.mp.gov.in not opened from the sandbox, so
// coverage of the MPESB rulebook was used):
// - freepressjournal.in (Bhopal): MP Police to recruit 1,000 Constable
//   Drivers, applications from 15 Oct 2026; male candidates only.
// - mysarkarinaukri.com, resultbharat.com, adda247.com, careers360,
//   indgovtjobs.in, sahisarkarijobs.in, govtjobguru.in: 1,000 posts (SAF 200 +
//   District Police Force 800); online 15-29 Oct 2026; correction till 3 Nov
//   2026; exam from 4 Jan 2027; 10th pass (ST: 8th) + valid heavy motor
//   vehicle (HMV) licence by 29 Oct 2026; age 18-33 (UR) with category
//   relaxation; pay ₹19,500-62,000; fee: MPESB ₹500 (UR) / ₹250 (MP
//   SC/ST/OBC/EWS) + police dept fee ₹200 / ₹100 + MPOnline portal charge;
//   selection: written exam, PET/physical, document check, driving/trade test
//   (qualifying), medical.
// Relaxed upper ages per category reported by one site only: left to rulebook.
export const mpPoliceConstableDriverRecruitment2026: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी नौकरी", href: "/jobs/" },
    { label: "MP पुलिस आरक्षक (चालक) भर्ती 2026" },
  ],
  docHi: "MP पुलिस ड्राइवर भर्ती 2026",
  title: "MP पुलिस कांस्टेबल ड्राइवर भर्ती 2026: 1,000 पद, आवेदन 29 अक्टूबर तक",
  description: "MP पुलिस आरक्षक (चालक) भर्ती 2026: 1,000 पद, MPESB के ज़रिए ऑनलाइन आवेदन 15 से 29 अक्टूबर 2026 तक। 10वीं पास + भारी वाहन लाइसेंस, उम्र, फीस और चयन प्रक्रिया।",
  published: "2026-10-18",
  modified: "2026-10-18",
  verified: "18 अक्टूबर 2026",
  h1: "MP पुलिस आरक्षक (चालक) भर्ती 2026: 1,000 पदों पर आवेदन चालू",
  lead: "<strong>स्थिति: आवेदन चालू।</strong> मध्य प्रदेश पुलिस में <strong>आरक्षक (चालक) यानी कांस्टेबल ड्राइवर के 1,000 पदों</strong> की भर्ती मध्य प्रदेश कर्मचारी चयन मंडल (MPESB) करा रहा है। ऑनलाइन आवेदन <strong>15 से 29 अक्टूबर 2026</strong> तक होंगे। यह भर्ती केवल पुरुषों के लिए है और 10वीं पास के साथ <strong>भारी वाहन (HMV) ड्राइविंग लाइसेंस</strong> ज़रूरी है।",
  facts: [
    ["कुल पद", "1,000 (विशेष सशस्त्र बल 200 + ज़िला पुलिस बल 800)"],
    ["आखिरी तारीख", "29 अक्टूबर 2026; सुधार 3 नवंबर तक"],
    ["योग्यता", "10वीं पास (ST: 8वीं) + भारी वाहन लाइसेंस"],
    ["आवेदन", "<a href=\"https://esb.mp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">esb.mp.gov.in</a> / MPOnline"],
  ],
  notice: "18 अक्टूबर 2026 तक: आवेदन चालू है। ये जानकारी MPESB की नियम पुस्तिका पर आधारित समाचार रिपोर्टों से है। फॉर्म भरने से पहले esb.mp.gov.in पर नियम पुस्तिका (Rule Book) ज़रूर पढ़ें।",
  sections: [
    {
      id: "tarikh",
      title: "महत्वपूर्ण तारीखें",
      table: {
        head: ["चरण", "तारीख"],
        rows: [
          ["ऑनलाइन आवेदन शुरू", "15 अक्टूबर 2026"],
          ["आवेदन की आखिरी तारीख", "29 अक्टूबर 2026"],
          ["फॉर्म में सुधार की आखिरी तारीख", "3 नवंबर 2026"],
          ["लिखित परीक्षा", "4 जनवरी 2027 से (संभावित)"],
        ],
      },
    },
    {
      id: "pad",
      title: "पद और वेतन",
      table: {
        head: ["इकाई", "पद"],
        rows: [
          ["विशेष सशस्त्र बल (SAF)", "200"],
          ["ज़िला पुलिस बल", "800"],
          ["कुल", "1,000"],
        ],
      },
      callout: { kind: "info", html: "वेतनमान: ₹19,500 से ₹62,000 (और नियमों के अनुसार भत्ते)। वर्गवार आरक्षण और ज़िलावार बंटवारा नियम पुस्तिका में देखें।" },
    },
    {
      id: "patrata",
      title: "योग्यता और उम्र",
      list: [
        "<strong>कौन:</strong> केवल पुरुष उम्मीदवार।",
        "<strong>शिक्षा:</strong> 10वीं पास (सामान्य, SC, OBC); अनुसूचित जनजाति (ST) के लिए 8वीं पास।",
        "<strong>लाइसेंस:</strong> मान्य भारी मोटर वाहन (HMV) ड्राइविंग लाइसेंस। शिक्षा और लाइसेंस दोनों 29 अक्टूबर 2026 तक होने चाहिए।",
        "<strong>उम्र:</strong> अनारक्षित वर्ग के लिए 18 से 33 साल। MP के आरक्षित वर्गों और अन्य श्रेणियों को नियमों के अनुसार छूट; सही ऊपरी सीमा नियम पुस्तिका में देखें।",
        "<strong>शारीरिक मानक:</strong> ऊंचाई, सीना आदि नोटिफिकेशन में देखें।",
      ],
    },
    {
      id: "fees",
      title: "फीस",
      table: {
        head: ["वर्ग", "MPESB परीक्षा फीस", "पुलिस विभाग फीस"],
        rows: [
          ["अनारक्षित (सामान्य)", "₹500", "₹200"],
          ["MP के SC/ST/OBC/EWS", "₹250", "₹100"],
        ],
      },
      html: "इसके अलावा MPOnline पोर्टल शुल्क अलग से लगता है (कियोस्क से भरने पर ज़्यादा, खुद रजिस्टर्ड लॉगिन से भरने पर कम)।",
    },
    {
      id: "chayan",
      title: "चयन प्रक्रिया",
      steps: [
        "<strong>लिखित परीक्षा</strong> (ऑनलाइन, MPESB द्वारा)।",
        "<strong>शारीरिक दक्षता परीक्षा</strong> (पुलिस विभाग द्वारा)।",
        "<strong>दस्तावेज़ जांच।</strong>",
        "<strong>ड्राइविंग / ट्रेड टेस्ट</strong> (केवल पास होना ज़रूरी)।",
        "<strong>मेडिकल जांच।</strong>",
      ],
    },
    {
      id: "apply",
      title: "कैसे आवेदन करें",
      steps: [
        "<a href=\"https://esb.mp.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">esb.mp.gov.in</a> पर पुलिस आरक्षक (चालक) भर्ती की नियम पुस्तिका पढ़ें।",
        "MPESB प्रोफाइल (आधार e-KYC के साथ) बनाएं, अगर पहले से नहीं है।",
        "MPOnline पर आवेदन फॉर्म खोलें, लाइसेंस और 10वीं की जानकारी सही भरें।",
        "फोटो और हस्ताक्षर अपलोड करें; साइज़ के लिए हमारा <a href=\"/tools/photo-resizer.html\">फोटो रिसाइज़र</a> इस्तेमाल कर सकते हैं।",
        "फीस भरकर फॉर्म का प्रिंट रखें। गलती हो तो 3 नवंबर 2026 तक सुधार करें।",
      ],
      callout: { kind: "warn", html: "लाइसेंस भारी वाहन (HMV) का होना चाहिए। हल्के वाहन (LMV) के लाइसेंस से यह पद नहीं मिलेगा।" },
    },
  ],
  official: [
    { href: "https://esb.mp.gov.in/", title: "मध्य प्रदेश कर्मचारी चयन मंडल (MPESB)", note: "नियम पुस्तिका और आवेदन" },
    { href: "https://www.mponline.gov.in/", title: "MPOnline", note: "ऑनलाइन फॉर्म और फीस" },
    { href: "https://www.mppolice.gov.in/", title: "मध्य प्रदेश पुलिस" },
  ],
  faq: [
    { q: "MP पुलिस ड्राइवर भर्ती 2026 की आखिरी तारीख क्या है?", a: "29 अक्टूबर 2026। फॉर्म में सुधार 3 नवंबर 2026 तक किया जा सकता है।" },
    { q: "क्या महिलाएं आवेदन कर सकती हैं?", a: "नहीं। रिपोर्टों के अनुसार यह भर्ती केवल पुरुष उम्मीदवारों के लिए है।" },
    { q: "कौन सा ड्राइविंग लाइसेंस चाहिए?", a: "मान्य भारी मोटर वाहन (HMV) लाइसेंस, जो 29 अक्टूबर 2026 तक बना हुआ हो।" },
    { q: "उम्र सीमा क्या है?", a: "अनारक्षित वर्ग के लिए 18 से 33 साल। आरक्षित वर्गों की छूट नियम पुस्तिका में देखें।" },
    { q: "परीक्षा कब होगी?", a: "लिखित परीक्षा 4 जनवरी 2027 से होने की संभावना है। एडमिट कार्ड esb.mp.gov.in पर आएगा।" },
  ],
  related: [
    { href: "/tools/age-calculator.html", emoji: "🎂", title: "उम्र कैलकुलेटर", text: "अपनी सही उम्र जानें" },
    { href: "/tools/photo-resizer.html", emoji: "🖼️", title: "फोटो रिसाइज़र", text: "फॉर्म के लिए फोटो" },
    { href: "/tools/signature-resizer.html", emoji: "✍️", title: "सिग्नेचर रिसाइज़र", text: "हस्ताक्षर का साइज़" },
    { href: "/jobs/index.html", emoji: "💼", title: "सभी सरकारी नौकरियां", text: "और भर्तियां देखें" },
  ],
  aside: [
    { href: "https://esb.mp.gov.in/", label: "🚓 esb.mp.gov.in पर नियम पुस्तिका" },
    { href: "/jobs/index.html", label: "💼 सभी सरकारी नौकरियां" },
  ],
};
