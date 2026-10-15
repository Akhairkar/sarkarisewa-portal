import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): myScheme (api.myscheme.gov.in, slug
// "cmmfi": Chief Minister's Micro Finance Initiative, Finance Department,
// Nagaland; bank credit-linked subsidy; beneficiary min 10%, bank max 60%,
// back-ended state subsidy fixed at 30%; additional 4% interest subvention on
// fresh KCC loans and NSRLM SHG credit linkage over GoI's 3%; CGTMSE annual
// guarantee fee 0.37% paid by the state; collateral-free MSE loans up to ₹10
// lakh; 6-month moratorium with interest paid by state; tenure max 5 years,
// extendable to 7; 2-year lock-in before foreclosure; livestock insurance
// mandatory; eligibility for individuals, SHGs (Panchasutra), FPOs; banks:
// commercial banks, Nagaland Rural Bank, Nagaland State Cooperative Bank; DLIMC
// headed by the Deputy Commissioner; apply on credit.nagaland.gov.in; guideline
// "CMMFI 2.0 booklet"); dccp.nagaland.gov.in DC conference concept note
// (launched 23.08.2022 by the Union Finance Minister and CM Neiphiu Rio);
// cmmfi.nagaland.gov.in search extract (maximum admissible ceiling ₹15 lakh).
// The portals themselves could not be opened from the sandbox.
export const nagalandChiefMinisterMicroFinanceInitiative: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "नागालैंड", href: "/states/nagaland.html" },
    { label: "मुख्यमंत्री माइक्रो फाइनेंस (CMMFI)" },
  ],
  docHi: "मुख्यमंत्री माइक्रो फाइनेंस (CMMFI)",
  title: "Chief Minister Micro Finance Initiative",
  description: "नागालैंड की मुख्यमंत्री माइक्रो फाइनेंस पहल (CMMFI): बैंक कर्ज पर 30% सरकारी सब्सिडी, KCC पर 4% अतिरिक्त ब्याज छूट। किसान, उद्यमी, SHG और FPO के लिए पात्रता और ऑनलाइन आवेदन।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "नागालैंड मुख्यमंत्री माइक्रो फाइनेंस पहल (CMMFI): 30% सब्सिडी वाला बैंक कर्ज, पात्रता और आवेदन",
  lead: "Chief Minister's Micro Finance Initiative (CMMFI) नागालैंड सरकार के वित्त विभाग की योजना है, जो 23 अगस्त 2022 को शुरू हुई। इसमें किसान, उद्यमी, स्वयं सहायता समूह (SHG) और किसान उत्पादक संगठन (FPO) बैंक से कर्ज लेते हैं और प्रोजेक्ट लागत का <strong>30% सरकार सब्सिडी</strong> के रूप में देती है। आवेदन ऑनलाइन credit.nagaland.gov.in पर होता है।",
  facts: [
    ["विभाग", "वित्त विभाग, नागालैंड"],
    ["सरकारी सब्सिडी", "प्रोजेक्ट लागत का 30% (बैक-एंडेड)"],
    ["अपना हिस्सा", "कम से कम 10%; बैंक कर्ज अधिकतम 60%"],
    ["आवेदन", "credit.nagaland.gov.in"],
  ],
  sections: [
    {
      id: "labh",
      title: "योजना में क्या मिलता है",
      table: {
        head: ["हिस्सा", "प्रोजेक्ट लागत में"],
        rows: [
          ["लाभार्थी का अपना हिस्सा", "कम से कम 10%"],
          ["बैंक कर्ज", "अधिकतम 60%"],
          ["नागालैंड सरकार की सब्सिडी (बैक-एंडेड)", "30% तय"],
        ],
      },
      list: [
        "<strong>ब्याज में अतिरिक्त छूट:</strong> नए KCC कर्ज और NSRLM SHG के बैंक कर्ज पर केंद्र की 3% के ऊपर राज्य 4% अतिरिक्त ब्याज छूट देता है।",
        "<strong>मोरेटोरियम:</strong> सभी प्रोजेक्ट में 6 महीने की छूट अवधि; इस दौरान का ब्याज राज्य सरकार देती है।",
        "<strong>बिना गारंटी कर्ज:</strong> सूक्ष्म और लघु उद्यम के ₹10 लाख तक के कर्ज बिना कोलैटरल; CGTMSE की सालाना गारंटी फीस (0.37%) राज्य सरकार भरती है।",
        "<strong>अवधि:</strong> कर्ज अधिकतम 5 साल के लिए, बैंक चाहे तो 7 साल या ज़्यादा तक।",
      ],
      callout: { kind: "warn", html: "सब्सिडी <strong>बैक-एंडेड</strong> है: यह बैंक के ज़रिए आती है, नकद नहीं मिलती। कर्ज 2 साल से पहले पूरा चुकाकर बंद नहीं किया जा सकता (lock-in)। पशुपालन (गाय, सुअर, मुर्गी आदि) के कर्ज में पशु बीमा ज़रूरी है।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "<strong>किसान और उद्यमी (व्यक्ति):</strong> किसी बैंक के डिफॉल्टर न हों, सरकारी कर्मचारी न हों, ज़मीन आधारित काम के लिए अपने नाम या लीज़ पर ज़मीन हो (नॉन-कैडस्ट्रल इलाकों में ग्राम परिषद का प्रमाण, क्षेत्र प्रशासनिक अधिकारी के प्रतिहस्ताक्षर के साथ), और उस काम का अनुभव या प्रशिक्षण हो।",
        "<strong>स्वयं सहायता समूह (SHG):</strong> NSRLM और गैर-NSRLM दोनों, जो \"पंचसूत्र\" (नियमित बैठक, बचत, आपसी कर्ज, समय पर वापसी, अद्यतन खाते) पूरा करते हों।",
        "<strong>किसान उत्पादक संगठन (FPO):</strong> पंजीकृत, कम से कम 3 साल की ऑडिटेड बैलेंस शीट, कम से कम 100 शेयरधारक और ₹1 लाख की चुकता पूंजी, घाटे में न हो।",
      ],
      callout: { kind: "info", html: "कर्ज कमर्शियल बैंक (सरकारी/निजी), नागालैंड रूरल बैंक या नागालैंड स्टेट कोऑपरेटिव बैंक से होना चाहिए, तभी सब्सिडी मिलेगी। योजना पोर्टल के अनुसार अधिकतम स्वीकार्य सीमा ₹15 लाख बताई गई है; अपने प्रोजेक्ट की सीमा बैंक से पक्की करें।" },
    },
    {
      id: "avedan",
      title: "ऑनलाइन आवेदन कैसे करें",
      steps: [
        '<a href="https://credit.nagaland.gov.in/" target="_blank" rel="noopener nofollow">credit.nagaland.gov.in</a> पर "Register" चुनें, लाभार्थी का प्रकार (व्यक्ति/SHG/FPO) चुनें, कानूनी नाम और पासवर्ड डालें।',
        "पंजीकृत ईमेल या मोबाइल नंबर और पासवर्ड से लॉगिन करें।",
        "आवेदन फॉर्म भरें, ज़रूरी कागज़ (प्रोजेक्ट रिपोर्ट/DPR, ज़मीन के कागज़, पहचान, बैंक विवरण आदि) अपलोड करें और जमा करें।",
        "बैंक शाखा आवेदन की जांच करती है; ₹10 लाख से ऊपर के सब्सिडी वाले कर्ज में नोडल विभाग की तकनीकी राय ली जा सकती है।",
        "मंज़ूरी के बाद बैंक कर्ज और सब्सिडी दोनों जारी करता है।",
      ],
      callout: { kind: "ok", html: "ज़िला स्तर पर उपायुक्त (DC) की अध्यक्षता वाली ज़िला कार्यान्वयन एवं निगरानी समिति (DLIMC) योजना देखती है। कृषि, बागवानी, पशुपालन, मत्स्य, उद्योग विभाग और NSRLM तकनीकी मदद देते हैं; अपने काम से जुड़े ज़िला कार्यालय से सलाह लें।" },
    },
  ],
  official: [
    { href: "https://credit.nagaland.gov.in/", title: "Credit Portal, नागालैंड (CMMFI आवेदन)" },
    { href: "https://cmmfi.nagaland.gov.in/", title: "Chief Minister's Micro Finance Initiative" },
    { href: "https://www.myscheme.gov.in/schemes/cmmfi", title: "myScheme: CMMFI" },
  ],
  faq: [
    { q: "CMMFI में कितनी सब्सिडी मिलती है?", a: "प्रोजेक्ट लागत का 30%, बैंक के ज़रिए बैक-एंडेड सब्सिडी के रूप में। लाभार्थी कम से कम 10% लगाता है और बाकी अधिकतम 60% बैंक कर्ज होता है।" },
    { q: "आवेदन कहां करें?", a: "credit.nagaland.gov.in पर पंजीकरण करके ऑनलाइन।" },
    { q: "क्या सरकारी कर्मचारी आवेदन कर सकते हैं?", a: "नहीं, व्यक्तिगत लाभार्थी सेवारत सरकारी कर्मचारी नहीं होना चाहिए।" },
    { q: "कर्ज पर गारंटी चाहिए?", a: "सूक्ष्म और लघु उद्यम के ₹10 लाख तक के कर्ज बिना कोलैटरल हैं; CGTMSE की गारंटी फीस राज्य भरता है। KCC/कृषि ढांचा कर्ज में ग्राम विकास बोर्ड (VDB) या व्यक्तिगत गारंटी मांगी जा सकती है।" },
    { q: "KCC पर क्या छूट है?", a: "नए KCC कर्ज पर केंद्र की 3% ब्याज छूट के ऊपर राज्य 4% अतिरिक्त छूट देता है।" },
  ],
  related: [
    { href: "/service/cgstmse-loan-guarantee.html", emoji: "🛡️", title: "CGTMSE लोन गारंटी", text: "बिना गारंटी व्यवसाय कर्ज" },
    { href: "/service/pm-mudra-yojana.html", emoji: "💼", title: "प्रधानमंत्री मुद्रा योजना", text: "छोटे व्यवसाय के लिए कर्ज" },
    { href: "/service/nagaland-cmhis-scheme.html", emoji: "🏥", title: "CMHIS (नागालैंड)", text: "मुख्यमंत्री स्वास्थ्य बीमा" },
    { href: "/service/nl-income-certificate.html", emoji: "💰", title: "आय प्रमाण पत्र (नागालैंड)", text: "योजनाओं के लिए" },
    { href: "/states/nagaland.html", emoji: "🦅", title: "नागालैंड की सेवाएं", text: "राज्य की सभी गाइड" },
  ],
  aside: [
    { href: "https://credit.nagaland.gov.in/", label: "💳 CMMFI आवेदन पोर्टल" },
    { href: "/tools/csc-locator.html", label: "📍 नज़दीकी CSC" },
  ],
};
