import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): churachandpur.nic.in scheme page (District
// Administration, Govt of Manipur; CMHT launched Jan 2018: cashless treatment
// at empanelled hospitals for SECC poor families plus widows, disabled and AAY
// card holders; 7 critical ailments; original cover ₹2 lakh per family per year
// floater incl. ₹50,000 general; enrolment via ASHA intimation at booths,
// CMHT-Manipur Health card with family ID; ₹50 card fee waived for AAY,
// disabled, widows; ID/eligibility proofs; Aadhaar needed). EastMojo
// 05.04.2022 and Assam Tribune (state cabinet raised CMHT hospitalisation
// cover to ₹5 lakh per family per year, April 2022); Eastern Mirror 28.10.2025
// (CMHT and PM-JAY running, private hospitals seeking settlement of dues).
// cmhtmanipur.gov.in and sha.mn.gov.in did not load from the sandbox, so the
// current package list, helpline and enrolment status are not stated.
export const manipurCmhtScheme: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "मणिपुर", href: "/states/manipur.html" },
    { label: "CMHT योजना" },
  ],
  docHi: "CMHT योजना (मणिपुर)",
  title: "CMHT Scheme",
  description: "मणिपुर की मुख्यमंत्री-गी हकशेलगी तेंगबांग (CMHT) स्वास्थ्य योजना: गरीब परिवारों को सूचीबद्ध अस्पतालों में कैशलेस इलाज, पात्रता, CMHT कार्ड और ज़रूरी कागज़।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "CMHT योजना (मणिपुर): मुख्यमंत्री-गी हकशेलगी तेंगबांग से कैशलेस इलाज, पात्रता और कार्ड",
  lead: "मुख्यमंत्री-गी हकशेलगी तेंगबांग (Chief Minister-gi Hakshelgi Tengbang, CMHT) मणिपुर सरकार की स्वास्थ्य सुरक्षा योजना है, जो जनवरी 2018 में शुरू हुई। इसमें पात्र गरीब परिवारों को सूचीबद्ध (empanelled) अस्पतालों में भर्ती होकर इलाज कैशलेस मिलता है। शुरुआत में कवर ₹2 लाख प्रति परिवार प्रति साल था; अप्रैल 2022 में राज्य कैबिनेट ने इसे ₹5 लाख प्रति परिवार प्रति साल करने का फैसला किया।",
  facts: [
    ["योजना", "मुख्यमंत्री-गी हकशेलगी तेंगबांग (CMHT)"],
    ["कवर", "₹5 लाख/परिवार/साल (अप्रैल 2022 का फैसला)"],
    ["पात्र", "SECC के गरीब परिवार, विधवा, दिव्यांग, AAY कार्डधारी"],
    ["कार्ड फीस", "₹50 प्रति परिवार (AAY, विधवा, दिव्यांग मुफ्त)"],
  ],
  notice: "CMHT की मौजूदा पैकेज सूची और हेल्पलाइन हम सरकारी साइट से पक्की नहीं कर सके। इलाज से पहले अस्पताल के CMHT/आयुष्मान डेस्क पर अपना कार्ड और कवर जांच लें।",
  sections: [
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "सामाजिक-आर्थिक जाति जनगणना (SECC) के आंकड़ों में गरीब के रूप में चिह्नित परिवार",
        "<strong>विधवा</strong>, <strong>दिव्यांग</strong> व्यक्ति और <strong>अंत्योदय (AAY) राशन कार्डधारी</strong> परिवार",
        "SECC सूची में नाम न हो तो ज़िला उपायुक्त (Deputy Commissioner) से आर्थिक स्थिति का प्रमाण पत्र, या सरकार का मान्य कोई दूसरा कागज़",
      ],
    },
    {
      id: "labh",
      title: "क्या लाभ मिलता है",
      list: [
        "सूचीबद्ध सरकारी (ज़िला अस्पताल, CHC) और निजी अस्पतालों में <strong>भर्ती होकर इलाज</strong> बिना भुगतान (कैशलेस)",
        "योजना शुरू होने पर इन 7 गंभीर बीमारियों पर ज़ोर था: हृदय रोग, कैंसर, गुर्दा रोग, नवजात शिशु रोग, तंत्रिका (न्यूरो) रोग, जलना (Burns) और लिवर रोग",
        "कवर पूरे परिवार के लिए साझा (floater) है",
        "सिर्फ भर्ती वाले इलाज पर लागू; OPD आम तौर पर शामिल नहीं",
      ],
      callout: { kind: "info", html: "मणिपुर में केंद्र की <a href=\"/service/ayushman-bharat.html\">आयुष्मान भारत PM-JAY</a> भी चलती है (₹5 लाख प्रति परिवार)। 70 साल या ज़्यादा उम्र के सभी बुज़ुर्ग <a href=\"/service/ayushman-bharat-vayo-vandana.html\">आयुष्मान वय वंदना कार्ड</a> बनवा सकते हैं।" },
    },
    {
      id: "card",
      title: "CMHT कार्ड कैसे बनता है",
      steps: [
        "<strong>सूचना:</strong> पात्र परिवारों को नामांकन से पहले ASHA कार्यकर्ता के ज़रिए सूचना दी जाती है।",
        "<strong>नामांकन बूथ:</strong> नज़दीकी PHC, CHC या ज़िला अस्पताल में बने बूथ पर ASHA की मदद से नामांकन करवाएं।",
        "<strong>कागज़ दिखाएं:</strong> पहचान पत्र, पात्रता का प्रमाण और आधार (कम से कम परिवार के मुखिया या एक सदस्य का)।",
        "<strong>फीस:</strong> कार्ड के लिए ₹50 प्रति परिवार; AAY, विधवा और दिव्यांग से कोई फीस नहीं।",
        "<strong>कार्ड:</strong> परिवार को CMHT-मणिपुर हेल्थ कार्ड मिलता है, जिस पर परिवार की यूनिक ID होती है।",
      ],
    },
    {
      id: "kagaz",
      title: "ज़रूरी कागज़",
      list: [
        "<strong>पहचान पत्र (कोई एक):</strong> वोटर ID, PAN, ड्राइविंग लाइसेंस, राशन कार्ड, पासपोर्ट, सरकारी ID या आधार",
        "<strong>पात्रता प्रमाण (कोई एक):</strong> SECC आधारित पात्रता, AAY कार्ड, दिव्यांगता प्रमाण पत्र, या उपायुक्त का आर्थिक स्थिति प्रमाण पत्र",
        "<strong>आधार नंबर</strong> और सहमति (consent); आधार न हो तो आधार नामांकन संख्या",
      ],
    },
    {
      id: "ilaj",
      title: "अस्पताल में इलाज कैसे लें",
      steps: [
        "सूचीबद्ध अस्पताल में जाएं और CMHT/हेल्थ इंश्योरेंस डेस्क पर CMHT कार्ड व आधार दिखाएं।",
        "डेस्क आपकी पात्रता और बचा हुआ कवर जांचकर इलाज की मंज़ूरी लेता है।",
        "मंज़ूर पैकेज के इलाज के लिए अस्पताल को पैसे न दें। कोई पैसे मांगे तो ज़िला अस्पताल प्रशासन या स्वास्थ्य विभाग से शिकायत करें।",
      ],
    },
  ],
  official: [
    { href: "https://churachandpur.nic.in/", title: "ज़िला प्रशासन चुराचांदपुर: CMHT योजना की जानकारी" },
    { href: "https://manipur.gov.in/", title: "मणिपुर सरकार" },
  ],
  faq: [
    { q: "CMHT का पूरा नाम क्या है?", a: "मुख्यमंत्री-गी हकशेलगी तेंगबांग (Chief Minister-gi Hakshelgi Tengbang)। यह मणिपुर सरकार की स्वास्थ्य सुरक्षा योजना है।" },
    { q: "CMHT में कितने का इलाज मिलता है?", a: "शुरुआत (2018) में ₹2 लाख प्रति परिवार प्रति साल। अप्रैल 2022 में राज्य कैबिनेट ने इसे ₹5 लाख प्रति परिवार प्रति साल करने का फैसला किया। अस्पताल के डेस्क पर अपना मौजूदा कवर जांचें।" },
    { q: "CMHT कार्ड कहां बनता है?", a: "नज़दीकी PHC, CHC या ज़िला अस्पताल में लगे नामांकन बूथ पर, ASHA कार्यकर्ता की मदद से।" },
    { q: "क्या विधवा और दिव्यांग पात्र हैं?", a: "हाँ। विधवा, दिव्यांग और AAY कार्डधारी परिवार पात्र हैं और इनसे कार्ड की ₹50 फीस नहीं ली जाती।" },
  ],
  related: [
    { href: "/service/ayushman-bharat.html", emoji: "🏥", title: "आयुष्मान भारत PM-JAY", text: "₹5 लाख तक मुफ्त इलाज" },
    { href: "/service/ayushman-bharat-vayo-vandana.html", emoji: "👴", title: "आयुष्मान वय वंदना", text: "70+ बुज़ुर्गों के लिए" },
    { href: "/service/manipur-chief-minister-widow-pension-scheme.html", emoji: "🌸", title: "मुख्यमंत्री विधवा पेंशन", text: "मणिपुर की विधवा पेंशन" },
    { href: "/states/manipur-ration-card.html", emoji: "🍚", title: "मणिपुर राशन कार्ड", text: "AAY और NFSA कार्ड" },
  ],
  aside: [
    { href: "/service/ayushman-bharat.html", label: "🏥 आयुष्मान भारत" },
    { href: "/states/manipur.html", label: "🗺️ मणिपुर की सेवाएं" },
  ],
};
