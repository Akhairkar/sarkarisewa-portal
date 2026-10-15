import type { DocGuide } from "./types";

// Sources (checked 15 Oct 2026): mmsy.hp.gov.in (fetched: "new portal of
// Mukhya Mantri Swavalamban Yojana", exclusively for bonafide Himachali
// candidates, Apply New / Applicant Login / View Status / Bank Login,
// "capital subsidy, interest subsidy, up to 35% subsidy", new activities
// agriculture, animal husbandry, sericulture, mining; old portal kept for
// pendency; caution notice that no private agency/middleman is engaged;
// district helpdesk numbers of the District Industries Centres; operational
// guidelines 2019 PDF on emerginghimachal.hp.gov.in); PTI via The Week,
// 29 Aug 2025 (Industries Minister Harshwardhan Chauhan in the Assembly:
// scheme will not be stopped, new cases to be taken up after old ones are
// settled; 1,494 beneficiaries yet to get subsidy; 35 applications in 2025,
// none accepted); vikaspedia / news (projects up to ₹60 lakh, capital subsidy
// 25-35%, interest subsidy 5%; age 18-45 with five-year relaxation for
// women). Exact category-wise subsidy rates and current age limits were not
// confirmed from the guidelines and are described generally.
export const hpMukhyaMantriSwawalambanYojana: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "राज्यवार सेवाएं", href: "/states/index.html" },
    { label: "हिमाचल प्रदेश", href: "/states/himachal-pradesh.html" },
    { label: "मुख्यमंत्री स्वावलंबन योजना" },
  ],
  docHi: "मुख्यमंत्री स्वावलंबन योजना",
  title: "Mukhya Mantri Swawalamban Yojana",
  description: "हिमाचल प्रदेश की मुख्यमंत्री स्वावलंबन योजना (MMSY): अपना उद्योग/कारोबार शुरू करने पर बैंक लोन के साथ पूंजी और ब्याज सब्सिडी। पात्रता, mmsy.hp.gov.in पर आवेदन, ज़िला उद्योग केंद्र के नंबर और ताज़ा स्थिति।",
  published: "2024-06-01",
  modified: "2026-10-15",
  verified: "15 अक्टूबर 2026",
  h1: "मुख्यमंत्री स्वावलंबन योजना हिमाचल प्रदेश (MMSY): सब्सिडी, पात्रता और आवेदन",
  lead: "मुख्यमंत्री स्वावलंबन योजना हिमाचल प्रदेश सरकार के उद्योग विभाग की स्वरोज़गार योजना है। इसमें हिमाचल के मूल निवासी युवा बैंक लोन लेकर अपना उद्योग, सेवा या कारोबार शुरू करें तो सरकार मशीनरी/पूंजी निवेश पर 35% तक सब्सिडी और लोन के ब्याज पर सब्सिडी देती है। आवेदन mmsy.hp.gov.in पर होता है और काम ज़िला उद्योग केंद्र (DIC) देखता है। अगस्त 2025 में सरकार ने बताया था कि पहले पुराने लंबित मामले निपटाए जाएंगे, फिर नए मामले लिए जाएंगे।",
  facts: [
    ["विभाग", "उद्योग विभाग, हिमाचल प्रदेश (ज़िला उद्योग केंद्र)"],
    ["लाभ", "पूंजी निवेश पर 35% तक सब्सिडी + ब्याज सब्सिडी"],
    ["कौन", "हिमाचल के मूल (bonafide) निवासी"],
    ["पोर्टल", '<a href="https://mmsy.hp.gov.in/" target="_blank" rel="noopener nofollow">mmsy.hp.gov.in</a>'],
  ],
  notice: "<strong>ताज़ा स्थिति:</strong> 29 अगस्त 2025 को उद्योग मंत्री ने विधानसभा में कहा कि योजना बंद नहीं होगी, पर नए मामले पुराने मामलों के निपटने के बाद लिए जाएंगे। उस समय 1,494 लाभार्थियों की सब्सिडी बाकी थी और 2025 में आए 35 आवेदनों में से कोई स्वीकार नहीं हुआ था। आवेदन से पहले अपने ज़िला उद्योग केंद्र से पूछ लें कि नए मामले लिए जा रहे हैं या नहीं।",
  sections: [
    {
      id: "labh",
      title: "योजना में क्या मिलता है",
      list: [
        "बैंक से लोन लेकर लगाए गए उद्योग/सेवा/कारोबार की <strong>मशीनरी व पूंजी निवेश पर सब्सिडी</strong>: पोर्टल के अनुसार 35% तक। दर आवेदक की श्रेणी (जैसे पुरुष, महिला) पर निर्भर करती है; खबरों के अनुसार 25% से 35%।",
        "लोन के <strong>ब्याज पर सब्सिडी</strong> (खबरों के अनुसार 5%, कुछ सालों के लिए)।",
        "खबरों के अनुसार ₹60 लाख तक की लागत वाली इकाइयां योजना में आती हैं।",
        "नई गतिविधियां भी जोड़ी गई हैं: कृषि, पशुपालन, रेशम उत्पादन (sericulture) और खनन से जुड़े काम।",
      ],
      callout: { kind: "info", html: "सब्सिडी की सही दर, सीमा और गतिविधियों की सूची योजना के <a href=\"https://emerginghimachal.hp.gov.in/themes/backend/uploads/notification/Notification/Operational-Guidelines-for-Mukhya-Mantri-Swawlamban-Yojna-2019.pdf\" target=\"_blank\" rel=\"noopener nofollow\">दिशानिर्देश (2019)</a> और बाद के संशोधनों में है। आवेदन से पहले ज़िला उद्योग केंद्र से ताज़ा दरें पूछें।" },
    },
    {
      id: "patrata",
      title: "कौन आवेदन कर सकता है",
      list: [
        "हिमाचल प्रदेश का <strong>मूल (bonafide) निवासी</strong>।",
        "उम्र सीमा तय है; खबरों के अनुसार सामान्य सीमा 18-45 साल और महिलाओं को 5 साल की छूट। ताज़ा सीमा पोर्टल/DIC से पुष्टि करें।",
        "जिस काम के लिए आवेदन है उसका <strong>प्रोजेक्ट रिपोर्ट</strong> और बैंक से लोन लेने की तैयारी।",
      ],
    },
    {
      id: "aavedan",
      title: "आवेदन कैसे करें",
      steps: [
        '<a href="https://mmsy.hp.gov.in/" target="_blank" rel="noopener nofollow">mmsy.hp.gov.in</a> पर <strong>Apply New</strong> से पंजीकरण करें।',
        "आवेदन फॉर्म भरें: व्यक्तिगत विवरण, मूल निवास, काम का प्रकार, लागत और बैंक शाखा। प्रोजेक्ट रिपोर्ट और कागज़ अपलोड करें।",
        "ज़िला उद्योग केंद्र (DIC) आवेदन की जांच करके उसे बैंक को भेजता है।",
        "बैंक लोन मंज़ूर करता है; इकाई लगने के बाद नियमों के अनुसार सब्सिडी जारी होती है।",
        "<strong>Applicant Login / View Status</strong> से स्टेटस देखें और शिकायत (Grievance) भी यहीं से दर्ज करें।",
      ],
      callout: { kind: "warn", html: "पोर्टल की चेतावनी: योजना में कोई निजी एजेंसी, बिचौलिया या फ्रैंचाइज़ नहीं रखी गई है। सब्सिडी या लोन मंज़ूर कराने के नाम पर पैसे मांगने वालों से दूर रहें।" },
    },
    {
      id: "kagaz",
      title: "आमतौर पर लगने वाले कागज़",
      list: [
        "हिमाचली मूल निवासी प्रमाण पत्र (Bonafide Himachali certificate)",
        "आधार, पैन, फोटो",
        "उम्र का प्रमाण",
        "प्रोजेक्ट रिपोर्ट और ज़मीन/जगह के कागज़ (अपनी या किराए की)",
        "जाति/श्रेणी प्रमाण पत्र (अगर लागू हो)",
      ],
    },
    {
      id: "dic",
      title: "ज़िला उद्योग केंद्र (DIC) हेल्पडेस्क",
      intro: "पोर्टल पर दिए गए ज़िलावार नंबर:",
      table: {
        head: ["ज़िला", "फोन"],
        rows: [
          ["बिलासपुर", "01978-224248"],
          ["चंबा", "01899-222257"],
          ["हमीरपुर", "01972-222309"],
          ["कांगड़ा", "01892-223242"],
          ["किन्नौर", "01786-222276"],
          ["कुल्लू", "01902-222532"],
          ["लाहौल-स्पीति", "01900-222265"],
          ["मंडी", "01905-222161"],
          ["शिमला", "0177-2628270"],
          ["सिरमौर", "01702-222259"],
          ["सोलन", "01792-230528"],
          ["ऊना", "01975-223002"],
        ],
      },
    },
  ],
  official: [
    { href: "https://mmsy.hp.gov.in/", title: "मुख्यमंत्री स्वावलंबन योजना पोर्टल", note: "आवेदन, स्टेटस, शिकायत" },
    { href: "https://emerginghimachal.hp.gov.in/themes/backend/uploads/notification/Notification/Operational-Guidelines-for-Mukhya-Mantri-Swawlamban-Yojna-2019.pdf", title: "योजना के दिशानिर्देश 2019 (PDF)" },
  ],
  faq: [
    { q: "मुख्यमंत्री स्वावलंबन योजना में कितनी सब्सिडी मिलती है?", a: "पोर्टल के अनुसार पूंजी निवेश पर 35% तक सब्सिडी और ब्याज सब्सिडी। दर आवेदक की श्रेणी पर निर्भर है; खबरों में 25% से 35% बताई गई है। सही दर DIC से पूछें।" },
    { q: "क्या अभी नए आवेदन लिए जा रहे हैं?", a: "अगस्त 2025 में सरकार ने कहा कि योजना बंद नहीं होगी, पर पहले पुराने मामले निपटाए जाएंगे। 2025 में आए 35 आवेदनों में से तब तक कोई स्वीकार नहीं हुआ था। आवेदन से पहले ज़िला उद्योग केंद्र से स्थिति पूछें।" },
    { q: "आवेदन कहां करें?", a: "mmsy.hp.gov.in पर Apply New से। मदद के लिए अपने ज़िले के उद्योग केंद्र (DIC) में जाएं।" },
    { q: "क्या दूसरे राज्य का व्यक्ति आवेदन कर सकता है?", a: "नहीं। योजना सिर्फ हिमाचल के मूल (bonafide) निवासियों के लिए है।" },
  ],
  related: [
    { href: "/service/udyam-registration.html", emoji: "🏭", title: "उद्यम रजिस्ट्रेशन", text: "MSME प्रमाण पत्र" },
    { href: "/service/gst.html", emoji: "🧾", title: "GST पंजीकरण", text: "कारोबार के लिए GSTIN" },
    { href: "/service/hp-himcare-scheme.html", emoji: "🏥", title: "हिमकेयर योजना", text: "हिमाचल की स्वास्थ्य योजना" },
    { href: "/states/himachal-pradesh-domicile-certificate.html", emoji: "📄", title: "हिमाचल मूल निवास प्रमाण पत्र", text: "कैसे बनवाएं" },
  ],
  aside: [
    { href: "https://mmsy.hp.gov.in/", label: "🏭 MMSY पोर्टल खोलें" },
    { href: "/states/himachal-pradesh.html", label: "📍 हिमाचल की सभी सेवाएं" },
  ],
};
