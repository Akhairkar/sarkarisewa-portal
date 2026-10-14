import type { DocGuide } from "./types";

// Sources (checked 14 Oct 2026):
// - Unified Services Portal, Government of Nagaland
//   (services.nagaland.gov.in/services, opened directly): "Domicile
//   Certificate", Internal service (delivered within the portal), code
//   DOMICILE_CERTIFICATE, organisation Home Department, Apply / More Info;
//   separate "Re-Issue of Indigenous Inhabitant Certificate" (Home
//   Department): only for citizens of identified indigenous tribes of
//   Nagaland, village verification and administrative circle verification
//   required. Portal has Register, Sign In, Track Application, helpdesk
//   e-mail support@usp.gov.in (the phone shown, 1800-123-456, looks like a
//   placeholder and is not used).
// - services.nagaland.gov.in/services/40 (Domicile Certificate detail page):
//   "No description available", "No eligibility criteria specified yet", "No
//   documents specified yet".
// - Searches found only non-official guides (wikiprocedure.com, vikaspedia
//   Kiphire page) for documents and residence period; not used as fact.
// Left out (not confirmable on an official page): issuing officer, residence
// period, document list, fee, time limit, validity. The old description's
// "ServicePlus Nagaland" and "official fee" were dropped.
export const nagalandDomicileCertificate: DocGuide = {
  state: { slug: "nagaland", hi: "नागालैंड" },
  doc: "domicile-certificate",
  docHi: "निवास प्रमाण पत्र",
  title: "Nagaland Domicile Certificate 2026: Apply & Status",
  description: "नागालैंड डोमिसाइल प्रमाण पत्र 2026: Unified Services Portal (services.nagaland.gov.in) पर Home Department की सेवा, आवेदन और स्टेटस, Indigenous Inhabitant Certificate से फर्क।",
  published: "2026-08-01",
  modified: "2026-10-14",
  verified: "14 अक्टूबर 2026",
  h1: "नागालैंड डोमिसाइल प्रमाण पत्र 2026: Unified Services Portal पर आवेदन",
  lead: "नागालैंड में डोमिसाइल प्रमाण पत्र (Domicile Certificate) <strong>गृह विभाग (Home Department)</strong> की सेवा है, जिसका आवेदन राज्य के <strong>Unified Services Portal</strong> (services.nagaland.gov.in) पर होता है। पोर्टल पर अभी इस सेवा की पात्रता और कागज़ों की सूची नहीं लिखी है, इसलिए आवेदन से पहले अपने ज़िले के उपायुक्त (DC) कार्यालय से पूछ लें। नागालैंड की जनजातियों के लिए अलग <strong>Indigenous Inhabitant Certificate</strong> भी होता है।",
  facts: [
    ["ऑनलाइन", '<a href="https://services.nagaland.gov.in/" target="_blank" rel="noopener nofollow">services.nagaland.gov.in</a>'],
    ["विभाग", "गृह विभाग (Home Department)"],
    ["अलग प्रमाण पत्र", "Indigenous Inhabitant Certificate"],
    ["पोर्टल मदद", "support@usp.gov.in"],
  ],
  sections: [
    {
      id: "kya-hai",
      title: "डोमिसाइल और Indigenous Inhabitant Certificate में फर्क",
      table: {
        head: ["प्रमाण पत्र", "किसके लिए"],
        rows: [
          ["<strong>Domicile Certificate</strong>", "नागालैंड का निवासी होने का सबूत; दाखिले, भर्ती और योजनाओं में मांगा जाता है"],
          ["<strong>Indigenous Inhabitant Certificate</strong>", "पोर्टल के अनुसार सिर्फ नागालैंड की पहचानी गई मूल जनजातियों के लोगों के लिए; पोर्टल पर इसकी <strong>दोबारा जारी (Re-Issue)</strong> सेवा है, जिसमें गांव और प्रशासनिक सर्कल का सत्यापन ज़रूरी है"],
        ],
      },
      callout: { kind: "info", html: "कई भर्तियों में डोमिसाइल के साथ Indigenous Inhabitant Certificate और ST प्रमाण पत्र अलग से मांगे जाते हैं। ST प्रमाण पत्र के लिए: <a href=\"/states/nagaland-caste-certificate.html\">नागालैंड ST/BT प्रमाण पत्र</a>।" },
    },
    {
      id: "online",
      title: "Unified Services Portal पर आवेदन",
      steps: [
        '<a href="https://services.nagaland.gov.in/" target="_blank" rel="noopener nofollow">services.nagaland.gov.in</a> खोलें और <strong>Register</strong> से अकाउंट बनाएं, फिर <strong>Sign In</strong> करें।',
        "<strong>Services</strong> में <strong>Domicile Certificate</strong> (Home Department) ढूंढें और <strong>Apply</strong> दबाएं। यह पोर्टल के अंदर ही भरी जाने वाली (Internal) सेवा है।",
        "फॉर्म भरें और पोर्टल जो कागज़ मांगे, उन्हें अपलोड करें।",
        "आवेदन जमा करें और आवेदन संख्या नोट करें; बाद में <strong>Track Application</strong> से स्थिति देखें।",
      ],
      html: "<p>पोर्टल पर पात्रता, फीस और समय सीमा अभी नहीं लिखी है (14 अक्टूबर 2026 को जांचा)। ऑनलाइन में दिक्कत हो तो पोर्टल की USP सहायता ईमेल <strong>support@usp.gov.in</strong> पर लिखें, या अपने ज़िले के DC कार्यालय से संपर्क करें।</p>",
    },
    {
      id: "kagaz",
      title: "कागज़ पहले से तैयार रखें",
      intro: "आधिकारिक सूची नहीं मिली। निवास साबित करने के लिए आम तौर पर ये कागज़ काम आते हैं:",
      list: [
        "आधार कार्ड, वोटर ID और पासपोर्ट साइज़ फोटो",
        "जन्म प्रमाण पत्र या स्कूल का प्रमाण पत्र",
        "लंबे निवास के पुराने कागज़: स्कूल रिकॉर्ड, ज़मीन/मकान के कागज़, पुराना राशन कार्ड",
        "गांव परिषद / गांव बूढ़ा या वार्ड अधिकारी का निवास प्रमाण, अगर मांगा जाए",
      ],
      callout: { kind: "warn", html: "यह सूची आधिकारिक नहीं है, सिर्फ तैयारी के लिए है। निवास की न्यूनतम अवधि भी किसी आधिकारिक पेज पर हमें नहीं मिली। पोर्टल या DC कार्यालय जो मांगे, वही मान्य है।" },
    },
    {
      id: "rejection",
      title: "आवेदन क्यों अटकता है, और क्या करें",
      table: {
        head: ["वजह", "हल"],
        rows: [
          ["Domicile की जगह Indigenous Inhabitant चाहिए था", "भर्ती/दाखिले के फॉर्म में मांगा गया प्रमाण पत्र देखकर सही सेवा चुनें"],
          ["निवास का पुराना सबूत नहीं", "स्कूल रिकॉर्ड, ज़मीन या किराये के पुराने कागज़ जोड़ें"],
          ["नाम/पता कागज़ों में अलग-अलग", "आधार, वोटर ID और राशन कार्ड में एक जैसी जानकारी कराएं"],
        ],
      },
    },
  ],
  official: [
    { href: "https://services.nagaland.gov.in/", title: "Unified Services Portal, नागालैंड सरकार" },
    { href: "https://services.nagaland.gov.in/services/40", title: "Domicile Certificate: सेवा का पेज" },
    { href: "https://nagaland.gov.in/", title: "नागालैंड सरकार की वेबसाइट" },
  ],
  faq: [
    { q: "नागालैंड डोमिसाइल ऑनलाइन कहां बनता है?", a: "Unified Services Portal (services.nagaland.gov.in) पर, जहां यह गृह विभाग की Domicile Certificate सेवा है।" },
    { q: "डोमिसाइल के लिए कितने साल रहना ज़रूरी है?", a: "यह शर्त किसी आधिकारिक पेज पर हमें नहीं मिली; पोर्टल पर भी पात्रता अभी नहीं लिखी है। अपने ज़िले के DC कार्यालय से पूछें।" },
    { q: "Indigenous Inhabitant Certificate क्या है?", a: "पोर्टल के अनुसार यह सिर्फ नागालैंड की पहचानी गई मूल जनजातियों के लोगों के लिए है। इसके दोबारा जारी होने में गांव और प्रशासनिक सर्कल का सत्यापन होता है।" },
    { q: "फीस कितनी है?", a: "पोर्टल पर अभी फीस नहीं लिखी है। आवेदन के समय जो शुल्क दिखे वही मान्य है।" },
  ],
  related: [
    { href: "/states/nagaland-caste-certificate.html", emoji: "📜", title: "नागालैंड जाति (ST/BT) प्रमाण पत्र", text: "Unified Services Portal पर" },
    { href: "/states/nagaland-income-certificate.html", emoji: "💰", title: "नागालैंड आय प्रमाण पत्र", text: "कहां बनता है" },
    { href: "/service/domicile-certificate.html", emoji: "🏠", title: "डोमिसाइल प्रमाण पत्र: पूरी जानकारी", text: "सभी राज्यों के नियम" },
    { href: "/tools/document-compressor.html", emoji: "🗜️", title: "फोटो / Document Resizer", text: "अपलोड के साइज़ में, फ्री" },
    { href: "/jobs/index.html", emoji: "🎯", title: "नई सरकारी नौकरियां", text: "भर्ती, योग्यता और आखिरी तारीख" },
  ],
  otherStatesTitle: "दूसरे राज्यों में निवास प्रमाण पत्र",
  aside: [
    { href: "https://services.nagaland.gov.in/", label: "📝 Unified Services Portal" },
    { href: "/service/domicile-certificate.html", label: "🏠 डोमिसाइल गाइड" },
  ],
};
