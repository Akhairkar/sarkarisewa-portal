import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026; ladakibahin.maharashtra.gov.in returned 403
// to the sandbox, search-result extracts used): myscheme.gov.in/schemes/mmlby
// (Women and Child Development Department, Maharashtra; women aged 21-65;
// family income up to Rs 2.5 lakh; Rs 1,500 per month by DBT; exclusions incl.
// income-tax payer family members and regular/permanent government
// employees; four-wheeler excluding tractor), ladakibahin.maharashtra.gov.in
// extracts (e-KYC facility for all beneficiaries: Aadhaar + OTP), Navbharat
// Live / Patrika / Prabhat Khabar 2026 reports (e-KYC mandatory; about 80 lakh
// found ineligible after e-KYC and verification, about 1.66 crore remaining
// eligible; installments go by DBT and need Aadhaar-linked bank account;
// payment dates often delayed), sarkariyojana.com (new applications reported
// closed; annual e-KYC needed). A Rs 2,100 increase is not confirmed by any
// official source and is not mentioned as fact. Helpline not verified.
export const mhLadkiBahinYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "महाराष्ट्र", href: "/states/maharashtra.html" },
    { label: "लाडकी बहीण योजना" },
  ],
  docHi: "लाडकी बहीण योजना",
  title: "मुख्यमंत्री माझी लाडकी बहीण योजना",
  description: "महाराष्ट्र की 21–65 वर्ष की पात्र कम-आय महिलाओं को हर महीने ₹1,500 की सीधी नकद सहायता, ताकि उनकी आर्थिक स्वतंत्रता और स्वास्थ्य को सहारा मिले।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मुख्यमंत्री माझी लाडकी बहीण योजना, महाराष्ट्र: ₹1,500 महीना, पात्रता और e-KYC",
  lead: "मुख्यमंत्री माझी लाडकी बहीण योजना महाराष्ट्र सरकार के महिला एवं बाल विकास विभाग की योजना है। इसमें 21 से 65 साल की पात्र महिलाओं को, जिनके परिवार की सालाना आय ₹2.5 लाख तक है, हर महीने <strong>₹1,500</strong> सीधे बैंक खाते (DBT) में मिलते हैं। किस्त जारी रखने के लिए <strong>e-KYC</strong> ज़रूरी है; e-KYC और जांच के बाद लाखों नाम अपात्र किए गए हैं।",
  facts: [
    ["राशि", "₹1,500 प्रति माह (DBT)"],
    ["उम्र", "21 से 65 साल"],
    ["आय सीमा", "परिवार की सालाना आय ₹2.5 लाख तक"],
    ["पोर्टल", "ladakibahin.maharashtra.gov.in"],
  ],
  notice: "राशि ₹2,100 करने की बात चर्चा में रही है, पर हमें इसकी कोई सरकारी घोषणा नहीं मिली। अभी तक ₹1,500 प्रति माह ही मान्य है। किस्त की तारीख के लिए सिर्फ सरकारी घोषणा पर भरोसा करें।",
  sections: [
    {
      id: "patrata",
      title: "कौन पात्र है",
      list: [
        "महाराष्ट्र की निवासी महिला, उम्र <strong>21 से 65 साल</strong>",
        "विवाहित, विधवा, तलाकशुदा, परित्यक्ता या निराधार महिला, और परिवार की एक अविवाहित महिला",
        "परिवार की सालाना आय <strong>₹2.5 लाख</strong> तक",
        "अपने नाम का बैंक खाता, जो आधार से जुड़ा हो",
      ],
    },
    {
      id: "apatra",
      title: "कौन पात्र नहीं है",
      list: [
        "परिवार का कोई सदस्य आयकर (income tax) भरता हो",
        "परिवार का कोई सदस्य सरकारी विभाग/उपक्रम में नियमित या स्थायी कर्मचारी हो",
        "परिवार के नाम चारपहिया वाहन हो (ट्रैक्टर छोड़कर)",
        "आय सीमा से ज़्यादा आय, या गलत जानकारी देकर लिया गया लाभ",
      ],
      callout: { kind: "warn", html: "जांच में अपात्र पाई गई महिलाओं की किस्त बंद की गई है। गलत जानकारी देकर लाभ लेने पर वसूली भी हो सकती है।" },
    },
    {
      id: "ekyc",
      title: "e-KYC कैसे करें",
      steps: [
        '<a href="https://ladakibahin.maharashtra.gov.in/" target="_blank" rel="noopener nofollow">ladakibahin.maharashtra.gov.in</a> खोलें और <strong>e-KYC</strong> विकल्प चुनें।',
        "आधार नंबर और कैप्चा भरें।",
        "आधार से जुड़े मोबाइल पर आया OTP डालकर पुष्टि करें।",
        "जो जानकारी मांगी जाए (जैसे परिवार में सरकारी नौकरी के बारे में घोषणा) सही-सही भरें और सबमिट करें।",
      ],
      callout: { kind: "ok", html: 'खुद न कर पाएं तो आंगनवाड़ी सेविका, सेतु सुविधा केंद्र या <a href="/tools/csc-locator.html">नज़दीकी CSC</a> से मदद लें। e-KYC के लिए कोई पैसा मांगे तो न दें।' },
    },
    {
      id: "kist",
      title: "किस्त नहीं आई तो क्या करें",
      list: [
        "देखें कि e-KYC पूरी हुई है या नहीं।",
        "बैंक खाता आधार से जुड़ा और <strong>DBT के लिए चालू</strong> हो; बैंक में जाकर आधार सीडिंग जांचें।",
        "पोर्टल पर लॉगिन करके आवेदन की स्थिति देखें; अपात्र दिखे तो कारण देखें।",
        "समस्या बनी रहे तो आंगनवाड़ी सेविका या तालुका के महिला एवं बाल विकास (बाल विकास प्रकल्प) कार्यालय से संपर्क करें।",
      ],
      callout: { kind: "info", html: "खबरों के अनुसार नए आवेदन फिलहाल बंद हैं और मौजूदा लाभार्थियों को हर साल e-KYC करनी है। नए आवेदन खुलने की जानकारी पोर्टल पर ही देखें।" },
    },
  ],
  official: [
    { href: "https://ladakibahin.maharashtra.gov.in/", title: "मुख्यमंत्री माझी लाडकी बहीण योजना पोर्टल", note: "e-KYC और स्थिति" },
    { href: "https://www.myscheme.gov.in/schemes/mmlby", title: "myScheme: योजना का विवरण" },
    { href: "https://grievances.maharashtra.gov.in/en", title: "महाराष्ट्र सरकार शिकायत पोर्टल" },
  ],
  faq: [
    { q: "लाडकी बहीण योजना में कितने पैसे मिलते हैं?", a: "पात्र महिला को हर महीने ₹1,500, सीधे बैंक खाते में (DBT)। ₹2,100 की कोई सरकारी घोषणा हमें नहीं मिली।" },
    { q: "उम्र की सीमा क्या है?", a: "21 से 65 साल।" },
    { q: "क्या e-KYC ज़रूरी है?", a: "हां। सरकार ने सभी लाभार्थियों के लिए e-KYC अनिवार्य की है। e-KYC न होने पर किस्त रुक सकती है।" },
    { q: "क्या अभी नया आवेदन कर सकते हैं?", a: "खबरों के अनुसार नए आवेदन फिलहाल बंद हैं। नए पंजीकरण की जानकारी के लिए ladakibahin.maharashtra.gov.in देखें।" },
    { q: "मेरा नाम अपात्र क्यों हुआ?", a: "आम कारण: e-KYC न होना, परिवार में आयकरदाता या सरकारी कर्मचारी होना, चारपहिया वाहन होना या आय सीमा से ज़्यादा आय। पोर्टल पर कारण देखें और गलती हो तो बाल विकास प्रकल्प कार्यालय में संपर्क करें।" },
  ],
  related: [
    { href: "/service/mh-bandhkam-kamgar-yojana.html", emoji: "👷", title: "बांधकाम कामगार योजना", text: "निर्माण मज़दूरों के लिए" },
    { href: "/service/mh-income-certificate.html", emoji: "💰", title: "महाराष्ट्र आय प्रमाण पत्र", text: "आय का प्रमाण" },
    { href: "/service/pm-matru-vandana-yojana.html", emoji: "🤱", title: "पीएम मातृ वंदना योजना", text: "गर्भवती महिलाओं को सहायता" },
    { href: "/states/maharashtra.html", emoji: "🗺️", title: "महाराष्ट्र की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://ladakibahin.maharashtra.gov.in/", label: "👩 e-KYC / स्थिति" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
