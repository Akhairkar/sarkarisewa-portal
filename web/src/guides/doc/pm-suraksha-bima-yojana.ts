import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme (api.myscheme.gov.in, slug "pmsby":
// Department of Financial Services; from 9 May 2015; age 18-70 (age nearer
// birthday), savings bank/post office account holders with auto-debit
// consent; premium ₹20/year auto-debited on or before 1 June; cover 1 June-31
// May; ₹2 lakh on accidental death or total disability (both eyes/both
// hands or feet/one eye + one hand or foot), ₹1 lakh on loss of one eye or one
// hand/foot; cover ends at 70, account closure or insufficient balance;
// multiple accounts still only ₹2 lakh; forms at jansuraksha.gov.in; national
// toll-free 1800-180-1111 / 1800-110-001); PIB 10-year backgrounder May 2025
// (static.pib.gov.in: 50.54 crore cumulative enrolments by 19 Mar 2025);
// New India Samachar May 2026 (premium still ₹20).
export const pmSurakshaBimaYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "सरकारी योजनाएं", href: "/yojana/" },
    { label: "पीएम सुरक्षा बीमा योजना" },
  ],
  docHi: "पीएम सुरक्षा बीमा योजना",
  title: "पीएम सुरक्षा बीमा योजना (PMSBY) 2026",
  description: "₹20 के वार्षिक प्रीमियम पर ₹2 लाख का कवर देने वाली कम लागत वाली दुर्घटना मृत्यु और विकलांगता बीमा योजना।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "पीएम सुरक्षा बीमा योजना (PMSBY) 2026: ₹20 में ₹2 लाख का दुर्घटना बीमा, जुड़ना और क्लेम",
  lead: "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY) सरकार समर्थित दुर्घटना बीमा है। 18 से 70 साल का कोई भी व्यक्ति, जिसका बैंक या डाकघर में बचत खाता है, सिर्फ ₹20 सालाना प्रीमियम पर जुड़ सकता है। दुर्घटना में मृत्यु या पूरी विकलांगता पर ₹2 लाख और आंशिक विकलांगता पर ₹1 लाख मिलता है। प्रीमियम हर साल 1 जून से पहले खाते से अपने आप कटता है।",
  facts: [
    ["सालाना प्रीमियम", "₹20 (ऑटो-डेबिट)"],
    ["बीमा राशि", "मृत्यु/पूरी विकलांगता ₹2 लाख; आंशिक ₹1 लाख"],
    ["उम्र", "18 से 70 साल"],
    ["कवर अवधि", "1 जून से 31 मई (हर साल नवीनीकरण)"],
  ],
  sections: [
    {
      id: "labh",
      title: "कितना पैसा मिलता है",
      table: {
        head: ["स्थिति (दुर्घटना से)", "राशि"],
        rows: [
          ["मृत्यु", "₹2 लाख (नॉमिनी को)"],
          ["दोनों आंखों की रोशनी पूरी तरह जाना, दोनों हाथ या दोनों पैर बेकार होना, या एक आंख की रोशनी और एक हाथ/पैर बेकार होना", "₹2 लाख"],
          ["एक आंख की रोशनी पूरी तरह जाना, या एक हाथ/पैर बेकार होना", "₹1 लाख"],
        ],
      },
      callout: { kind: "info", html: "यह सिर्फ <strong>दुर्घटना</strong> बीमा है। बीमारी या सामान्य मृत्यु के लिए <a href=\"/service/pm-jeevan-jyoti-bima-yojana.html\">पीएम जीवन ज्योति बीमा योजना</a> (PMJJBY) देखें। कई खातों से जुड़ने पर भी कुल कवर ₹2 लाख ही रहता है।" },
    },
    {
      id: "patrata",
      title: "कौन जुड़ सकता है",
      list: [
        "उम्र <strong>18 से 70 साल</strong> (नज़दीकी जन्मदिन के हिसाब से)।",
        "भाग लेने वाले बैंक या डाकघर में <strong>बचत खाता</strong>।",
        "खाते से प्रीमियम के <strong>ऑटो-डेबिट</strong> की सहमति।",
      ],
    },
    {
      id: "kaise-jude",
      title: "कैसे जुड़ें",
      steps: [
        "<strong>बैंक/डाकघर शाखा में:</strong> PMSBY फॉर्म (सहमति-सह-घोषणा पत्र) भरकर दें। फॉर्म <a href=\"https://jansuraksha.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">jansuraksha.gov.in</a> से हिंदी समेत कई भाषाओं में डाउनलोड होता है।",
        "<strong>ऑनलाइन:</strong> अपने बैंक की नेट बैंकिंग या मोबाइल ऐप के \"Insurance/Social Security\" सेक्शन से।",
        "नॉमिनी का नाम ज़रूर लिखें और खाते में ₹20 रखें।",
        "जुड़ने पर पावती-सह-बीमा प्रमाण पत्र मिलता है; इसे संभाल कर रखें।",
      ],
      callout: { kind: "warn", html: "हर साल 1 जून से पहले खाते में कम से कम ₹20 रखें। पैसा न होने से प्रीमियम न कटे तो बीमा उस साल बंद हो जाता है।" },
    },
    {
      id: "kab-band",
      title: "बीमा कब खत्म होता है",
      list: [
        "70 साल की उम्र पूरी होने पर।",
        "बैंक खाता बंद होने पर।",
        "खाते में प्रीमियम के लिए पैसा न होने पर।",
      ],
    },
    {
      id: "claim",
      title: "क्लेम कैसे करें",
      steps: [
        "दुर्घटना की सूचना जल्द से जल्द उस बैंक शाखा को दें जहां खाता है।",
        "क्लेम फॉर्म बैंक से या jansuraksha.gov.in से लें।",
        "<strong>मृत्यु पर:</strong> मृत्यु प्रमाण पत्र, FIR/पंचनामा, पोस्टमार्टम रिपोर्ट (जहां लागू हो), नॉमिनी का पहचान पत्र और बैंक विवरण।",
        "<strong>विकलांगता पर:</strong> सरकारी डॉक्टर का विकलांगता प्रमाण पत्र, अस्पताल के कागज़ और FIR (जहां लागू हो)।",
        "बैंक क्लेम बीमा कंपनी को भेजता है; मंज़ूरी के बाद पैसा नॉमिनी/खाताधारक के खाते में आता है।",
      ],
    },
    {
      id: "madad",
      title: "हेल्पलाइन",
      list: [
        "<strong>राष्ट्रीय टोल-फ्री:</strong> 1800-180-1111 / 1800-110-001",
        "राज्यवार टोल-फ्री नंबर jansuraksha.gov.in पर दिए हैं।",
        "पहले अपने बैंक से शिकायत करें; हल न हो तो बैंक के ग्रिवांस पोर्टल या RBI लोकपाल के पास जा सकते हैं।",
      ],
    },
  ],
  official: [
    { href: "https://jansuraksha.gov.in/", title: "जन सुरक्षा पोर्टल: PMSBY फॉर्म, नियम, क्लेम फॉर्म", note: "टोल-फ्री 1800-180-1111" },
    { href: "https://www.myscheme.gov.in/schemes/pmsby", title: "myScheme: प्रधानमंत्री सुरक्षा बीमा योजना" },
    { href: "https://financialservices.gov.in/", title: "वित्तीय सेवा विभाग, वित्त मंत्रालय" },
  ],
  faq: [
    { q: "PMSBY का प्रीमियम कितना है?", a: "₹20 प्रति वर्ष, जो हर साल 1 जून से पहले बैंक खाते से अपने आप कटता है।" },
    { q: "PMSBY में कितना बीमा मिलता है?", a: "दुर्घटना में मृत्यु या पूरी विकलांगता पर ₹2 लाख, और एक आंख या एक हाथ/पैर की स्थायी हानि पर ₹1 लाख।" },
    { q: "क्या बीमारी से मृत्यु पर पैसा मिलता है?", a: "नहीं, PMSBY सिर्फ दुर्घटना बीमा है। किसी भी कारण से मृत्यु के लिए ₹436 सालाना वाली PMJJBY योजना है।" },
    { q: "क्या दो बैंक खातों से दो बार बीमा मिलेगा?", a: "नहीं। कई खातों से प्रीमियम कट जाए तब भी कुल कवर ₹2 लाख ही रहता है।" },
    { q: "PMSBY से कैसे जुड़ें?", a: "अपने बैंक/डाकघर में फॉर्म भरकर या बैंक की नेट बैंकिंग/मोबाइल ऐप से। फॉर्म jansuraksha.gov.in पर भी है।" },
  ],
  related: [
    { href: "/service/pm-jeevan-jyoti-bima-yojana.html", emoji: "🛡️", title: "पीएम जीवन ज्योति बीमा", text: "₹2 लाख का जीवन बीमा" },
    { href: "/service/atal-pension-yojana.html", emoji: "🧓", title: "अटल पेंशन योजना", text: "₹1,000-₹5,000 मासिक पेंशन" },
    { href: "/service/pm-jan-dhan-yojana.html", emoji: "🏦", title: "जन धन खाता", text: "बचत खाता खोलें" },
    { href: "/service/pm-shram-yogi-maandhan.html", emoji: "👷", title: "PM श्रम योगी मानधन", text: "असंगठित मज़दूरों की पेंशन" },
  ],
  aside: [
    { href: "https://jansuraksha.gov.in/", label: "📄 PMSBY फॉर्म डाउनलोड" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
