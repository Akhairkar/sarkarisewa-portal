import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; mohfw.gov.in and rchrpt.mohfw.gov.in not
// opened from the sandbox, search extracts used): vajiramandravi.com and
// edukemy.com summaries of the PIB release of 9 Feb 2024 (Kilkari: centrally
// hosted IVR service of the Ministry of Health and Family Welfare; free,
// weekly, time-appropriate 72 audio messages on pregnancy, childbirth and
// childcare from the second trimester until the child is one year old;
// women registered on the RCH portal on the basis of LMP or the child's date
// of birth; free for States/UTs and beneficiaries; "Dr. Anita" voice; then in
// 18 States/UTs; launch of local-language content for Gujarat and
// Maharashtra). The calling number and the current list of states could not
// be confirmed and are left out. The old title was cut off mid-word
// ("Kilkari Matern") and was completed.
export const kilkariMobileHealthAudio: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "स्वास्थ्य", href: "/category/health.html" },
    { label: "किलकारी" },
  ],
  docHi: "किलकारी",
  title: "किलकारी मोबाइल स्वास्थ्य सेवा (Kilkari Maternal Audio)",
  description: "गर्भवती महिलाओं और एक साल तक के बच्चों की मांओं के मोबाइल पर हर हफ्ते मुफ्त ऑडियो कॉल: कुल 72 संदेश। किलकारी में नाम कैसे जुड़ता है, कॉल न आए तो क्या करें।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "किलकारी: गर्भावस्था और बच्चे की देखभाल पर हर हफ्ते मुफ्त ऑडियो कॉल",
  lead: "किलकारी केंद्र सरकार के स्वास्थ्य एवं परिवार कल्याण मंत्रालय की मुफ्त मोबाइल सेवा है। इसमें गर्भवती महिला और नवजात की मां के मोबाइल पर हर हफ्ते एक रिकॉर्ड की हुई कॉल आती है, जिसमें गर्भावस्था, प्रसव और बच्चे की देखभाल की सलाह होती है। गर्भ के दूसरे तिमाही से बच्चे के एक साल का होने तक कुल 72 संदेश आते हैं। इसके लिए अलग आवेदन नहीं होता: आशा/ANM जब गर्भ का पंजीकरण RCH पोर्टल पर करती हैं, तो नंबर अपने-आप जुड़ जाता है।",
  facts: [
    ["मंत्रालय", "स्वास्थ्य एवं परिवार कल्याण मंत्रालय"],
    ["संदेश", "72 साप्ताहिक ऑडियो कॉल"],
    ["अवधि", "गर्भ के दूसरे तिमाही से बच्चे के 1 साल तक"],
    ["खर्च", "मुफ्त"],
  ],
  sections: [
    {
      id: "kya-milta",
      title: "किलकारी कॉल में क्या बताया जाता है",
      list: [
        "गर्भावस्था में खान-पान, आराम, जांच और खतरे के लक्षण",
        "अस्पताल में सुरक्षित प्रसव की तैयारी",
        "जन्म के बाद मां और बच्चे की देखभाल, सिर्फ मां का दूध, टीकाकरण",
        "परिवार नियोजन और बच्चे के पोषण की सलाह",
      ],
      callout: { kind: "info", html: "संदेश \"डॉ. अनीता\" नाम की आवाज़ में आते हैं। हर कॉल उस हफ्ते की गर्भावस्था या बच्चे की उम्र के हिसाब से होती है।" },
    },
    {
      id: "kaise-jude",
      title: "किलकारी में नाम कैसे जुड़ता है",
      steps: [
        "<strong>गर्भ का पंजीकरण:</strong> गर्भ का पता चलते ही आशा, ANM या सरकारी स्वास्थ्य केंद्र पर पंजीकरण कराएं।",
        "<strong>मोबाइल नंबर दें:</strong> पंजीकरण में अपना या परिवार का वह नंबर लिखवाएं जो हमेशा आपके पास रहता हो।",
        "<strong>RCH पोर्टल:</strong> स्वास्थ्य कर्मी आपका रिकॉर्ड RCH पोर्टल पर आखिरी माहवारी की तारीख (LMP) से दर्ज करते हैं। बच्चे के जन्म के बाद पंजीकरण हो तो जन्म तारीख से।",
        "<strong>कॉल शुरू:</strong> दूसरे तिमाही से हर हफ्ते कॉल आने लगती है।",
      ],
      callout: { kind: "ok", html: "किलकारी के लिए कोई फॉर्म, फीस या ऐप नहीं है। कोई पैसे लेकर \"किलकारी में नाम जोड़ने\" की बात करे तो मना करें।" },
    },
    {
      id: "call-nahi",
      title: "कॉल न आए तो क्या करें",
      list: [
        "आशा/ANM से जांच कराएं कि RCH पोर्टल पर आपका मोबाइल नंबर सही दर्ज है।",
        "नंबर बदल गया हो तो नया नंबर आशा/ANM को बताकर रिकॉर्ड में सुधार करवाएं।",
        "किलकारी कुछ ही राज्यों/केंद्र शासित प्रदेशों में चल रही है (फरवरी 2024 में 18)। आपके राज्य में सेवा है या नहीं, यह स्वास्थ्य केंद्र से पूछें।",
      ],
    },
    {
      id: "saath",
      title: "साथ में काम की योजनाएं",
      list: [
        "<strong>जननी सुरक्षा योजना:</strong> सरकारी अस्पताल में डिलीवरी पर नकद सहायता।",
        "<strong>प्रधानमंत्री मातृ वंदना योजना:</strong> पात्र गर्भवती महिलाओं को नकद सहायता।",
        "<strong>ABHA हेल्थ कार्ड:</strong> मां और बच्चे के स्वास्थ्य रिकॉर्ड एक जगह।",
      ],
    },
  ],
  official: [
    { href: "https://www.mohfw.gov.in/", title: "स्वास्थ्य एवं परिवार कल्याण मंत्रालय" },
    { href: "https://pib.gov.in/", title: "PIB: किलकारी से जुड़ी प्रेस विज्ञप्तियां" },
  ],
  faq: [
    { q: "किलकारी क्या है?", a: "स्वास्थ्य मंत्रालय की मुफ्त मोबाइल सेवा, जिसमें गर्भवती महिला और नवजात की मां को हर हफ्ते मां-बच्चे की देखभाल पर रिकॉर्ड की हुई कॉल आती है। कुल 72 संदेश आते हैं।" },
    { q: "किलकारी के लिए आवेदन कैसे करें?", a: "अलग आवेदन नहीं है। आशा/ANM के पास गर्भ का पंजीकरण कराते समय मोबाइल नंबर दें; RCH पोर्टल पर दर्ज होते ही नंबर किलकारी से जुड़ जाता है (जिन राज्यों में सेवा चालू है)।" },
    { q: "क्या किलकारी कॉल के पैसे लगते हैं?", a: "नहीं, यह सेवा लाभार्थियों के लिए पूरी तरह मुफ्त है।" },
    { q: "कॉल कब तक आती है?", a: "गर्भ के दूसरे तिमाही से बच्चे के एक साल का होने तक, हर हफ्ते।" },
  ],
  related: [
    { href: "/service/janani-suraksha-yojana.html", emoji: "🤰", title: "जननी सुरक्षा योजना", text: "अस्पताल में डिलीवरी पर सहायता" },
    { href: "/service/pm-matru-vandana-yojana.html", emoji: "🤱", title: "प्रधानमंत्री मातृ वंदना योजना", text: "गर्भवती महिलाओं को नकद सहायता" },
    { href: "/service/abha-health-card.html", emoji: "🩺", title: "ABHA हेल्थ कार्ड", text: "डिजिटल स्वास्थ्य रिकॉर्ड" },
    { href: "/service/birth-certificate.html", emoji: "👶", title: "जन्म प्रमाण पत्र", text: "बच्चे का जन्म पंजीकरण" },
  ],
  aside: [
    { href: "/service/janani-suraksha-yojana.html", label: "🤰 जननी सुरक्षा योजना" },
    { href: "/service/pm-matru-vandana-yojana.html", label: "🤱 मातृ वंदना योजना" },
  ],
};
