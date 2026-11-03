import type { DocGuide } from "./types";
import { PASSPORT_KENDRAS } from "../../data/passport-kendras";

// Sources: passportindia.gov.in PDFs "List of 93 Operational PSKs" and "List
// of 424 Operational POPSKs" (fetched 3 Nov 2026, see data/passport-kendras.ts);
// Lok Sabha answer 11 Mar 2026: 452 POPSKs operational across 23 postal
// circles (staffnews.in copy). Fees are not repeated here: they changed on
// 1 Jul 2026 and are kept on /service/passport.html.
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const totalPsk = PASSPORT_KENDRAS.reduce((n, g) => n + g.rpos.reduce((m, r) => m + r.psk.length, 0), 0);
const totalPopsk = PASSPORT_KENDRAS.reduce((n, g) => n + g.rpos.reduce((m, r) => m + r.popsk.length, 0), 0);
const totalRpo = PASSPORT_KENDRAS.reduce((n, g) => n + g.rpos.length, 0);

const listHtml =
  `<label for="psk-q" class="psk-lbl"><strong>🔍 अपना शहर/ज़िला खोजें</strong> (अंग्रेज़ी में, जैसे Nagpur, Bhilwara)</label>` +
  `<input id="psk-q" class="psk-q" type="search" placeholder="शहर का नाम लिखें…" autocomplete="off" />` +
  `<p id="psk-none" class="psk-none" hidden>इस नाम का कोई केंद्र नहीं मिला। स्पेलिंग बदलकर देखें, या अपने राज्य की सूची देखें; आपका आवेदन नज़दीकी केंद्र या अपने क्षेत्र के पासपोर्ट कार्यालय से होगा।</p>` +
  PASSPORT_KENDRAS.map((g) =>
    `<section class="psk-state" data-state><h3>${g.state}</h3><div class="table-wrap"><table><thead><tr><th>क्षेत्रीय पासपोर्ट कार्यालय (RPO)</th><th>पासपोर्ट सेवा केंद्र (PSK)</th><th>पोस्ट ऑफिस पासपोर्ट सेवा केंद्र (POPSK)</th></tr></thead><tbody>` +
    g.rpos.map((r) =>
      `<tr data-row data-text="${esc([r.rpo, ...r.psk, ...r.popsk].join(" ").toLowerCase())}"><td><strong>RPO ${esc(r.rpo)}</strong></td><td>${r.psk.map(esc).join("<br>")}</td><td>${r.popsk.length ? r.popsk.map(esc).join(", ") : "—"}</td></tr>`,
    ).join("") +
    `</tbody></table></div></section>`,
  ).join("") +
  `<script>(function(){var q=document.getElementById("psk-q"),none=document.getElementById("psk-none");if(!q)return;q.addEventListener("input",function(){var v=q.value.trim().toLowerCase(),any=false;document.querySelectorAll("[data-state]").forEach(function(s){var shown=false;s.querySelectorAll("[data-row]").forEach(function(r){var ok=!v||r.getAttribute("data-text").indexOf(v)>-1;r.hidden=!ok;if(ok)shown=true;});s.hidden=!shown;if(shown)any=true;});none.hidden=any;});})();</script>` +
  `<style>.psk-q{width:100%;min-height:46px;padding:8px 12px;border:2px solid var(--c-line);border-radius:10px;font:inherit;box-sizing:border-box;margin:6px 0 12px;background:var(--c-surface,#fff);color:var(--c-text)}.psk-lbl{display:block}.psk-state h3{margin:18px 0 6px}.psk-none{color:var(--c-muted)}</style>`;

export const passportSevaKendraList: DocGuide = {
  crumbs: [
    { label: "होम", href: "/" },
    { label: "दस्तावेज़", href: "/documents/" },
    { label: "पासपोर्ट", href: "/service/passport.html" },
    { label: "पासपोर्ट सेवा केंद्र सूची" },
  ],
  docHi: "पासपोर्ट सेवा केंद्र सूची",
  title: "Passport Seva Kendra List 2026: राज्यवार पासपोर्ट सेवा केंद्र और पोस्ट ऑफिस PSK",
  description: `भारत के ${totalPsk} पासपोर्ट सेवा केंद्र (PSK) और ${totalPopsk} पोस्ट ऑफिस पासपोर्ट सेवा केंद्र (POPSK) की राज्यवार सूची, अपना शहर खोजें। कौन सा केंद्र चुनें, अपॉइंटमेंट कैसे लें और किस RPO के अंदर आते हैं।`,
  published: "2026-11-03",
  modified: "2026-11-03",
  verified: "3 नवंबर 2026",
  h1: "पासपोर्ट सेवा केंद्र सूची 2026: राज्यवार PSK और पोस्ट ऑफिस पासपोर्ट सेवा केंद्र",
  lead: `भारत में पासपोर्ट का काम <strong>${totalRpo} क्षेत्रीय पासपोर्ट कार्यालयों (RPO)</strong> के तहत <strong>${totalPsk} पासपोर्ट सेवा केंद्रों (PSK)</strong> और डाकघरों में बने <strong>पोस्ट ऑफिस पासपोर्ट सेवा केंद्रों (POPSK)</strong> पर होता है। नीचे पासपोर्ट विभाग की आधिकारिक सूची से सभी PSK और ${totalPopsk} POPSK राज्य के हिसाब से दिए हैं; ऊपर के बॉक्स में अपना शहर लिखकर तुरंत खोजें। अपॉइंटमेंट सिर्फ <a href="https://www.passportindia.gov.in/" target="_blank" rel="noopener nofollow">passportindia.gov.in</a> या mPassport Seva ऐप से लें।`,
  facts: [
    ["पासपोर्ट सेवा केंद्र (PSK)", `${totalPsk}`],
    ["पोस्ट ऑफिस PSK (इस सूची में)", `${totalPopsk} (मार्च 2026 तक कुल 452 चालू)`],
    ["क्षेत्रीय पासपोर्ट कार्यालय", `${totalRpo}`],
    ["अपॉइंटमेंट", "<a href=\"https://www.passportindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">passportindia.gov.in</a>"],
  ],
  notice: "POPSK की यह आधिकारिक सूची 424 केंद्रों की है; मार्च 2026 तक इनकी संख्या 452 हो चुकी है, इसलिए कुछ नए डाकघर केंद्र इसमें न हों। अपॉइंटमेंट बुक करते समय पोर्टल पर आपके पते के हिसाब से जो केंद्र दिखें, वही अंतिम हैं। यह साइट निजी है, विदेश मंत्रालय या पासपोर्ट विभाग की नहीं।",
  sections: [
    {
      id: "suchi",
      title: "राज्यवार पासपोर्ट सेवा केंद्र सूची",
      intro: "हर पंक्ति में एक क्षेत्रीय पासपोर्ट कार्यालय (RPO), उसके तहत आने वाले पासपोर्ट सेवा केंद्र (PSK/PSLK) और डाकघर वाले केंद्र (POPSK) हैं। नाम पासपोर्ट विभाग की सूची के अनुसार अंग्रेज़ी में हैं।",
      html: listHtml,
    },
    {
      id: "fark",
      title: "PSK, PSLK, POPSK और RPO में क्या फर्क है",
      table: {
        head: ["नाम", "क्या है"],
        rows: [
          ["<strong>RPO</strong> (क्षेत्रीय पासपोर्ट कार्यालय)", "आपके इलाके का मुख्य पासपोर्ट दफ्तर; फाइल की जांच, मंज़ूरी और शिकायत यहीं से होती है।"],
          ["<strong>PSK</strong> (पासपोर्ट सेवा केंद्र)", "जहां अपॉइंटमेंट पर जाकर कागज़ जांच, फोटो और उंगलियों के निशान होते हैं।"],
          ["<strong>PSLK</strong> (पासपोर्ट सेवा लघु केंद्र)", "छोटा पासपोर्ट सेवा केंद्र, कुछ शहरों में।"],
          ["<strong>POPSK</strong> (पोस्ट ऑफिस पासपोर्ट सेवा केंद्र)", "मुख्य डाकघर में बना केंद्र, ताकि ज़िले के लोगों को बड़े शहर न जाना पड़े।"],
        ],
      },
      callout: { kind: "info", html: "आप अपने पते के अधिकार क्षेत्र वाले RPO के तहत कोई भी उपलब्ध PSK या POPSK चुन सकते हैं; अपॉइंटमेंट बुक करते समय पोर्टल खुद विकल्प दिखाता है। तत्काल और कुछ खास सेवाएं हर केंद्र पर न हों, यह पोर्टल पर देखें।" },
    },
    {
      id: "appointment",
      title: "पासपोर्ट सेवा केंद्र में अपॉइंटमेंट कैसे लें",
      steps: [
        "<a href=\"https://www.passportindia.gov.in/\" target=\"_blank\" rel=\"noopener nofollow\">passportindia.gov.in</a> पर रजिस्टर करें या mPassport Seva ऐप डालें।",
        "लॉगिन करके नया पासपोर्ट/री-इश्यू का फॉर्म भरें।",
        "<strong>Pay and Schedule Appointment</strong> में फीस ऑनलाइन भरें।",
        "अपने RPO के तहत मिलने वाले PSK या POPSK में से नज़दीकी केंद्र और खाली तारीख चुनें।",
        "अपॉइंटमेंट रसीद (ARN वाली) का प्रिंट या फोन में कॉपी रखें और तय समय से पहले मूल कागज़ों के साथ पहुंचें।",
      ],
      callout: { kind: "ok", html: "फीस, ज़रूरी कागज़, तत्काल, पुलिस वेरिफिकेशन और खोए पासपोर्ट की पूरी जानकारी हमारी <a href=\"/service/passport.html\">पासपोर्ट 2026 गाइड</a> में है (फीस 1 जुलाई 2026 से बदली है)।" },
    },
    {
      id: "chunav",
      title: "कौन सा केंद्र चुनें: काम की बातें",
      list: [
        "पास का <strong>POPSK</strong> मिल जाए तो बड़े शहर के PSK जाने की ज़रूरत नहीं; वहां भीड़ भी अक्सर कम होती है।",
        "बड़े शहरों के PSK में अपॉइंटमेंट जल्दी भर जाते हैं; रोज़ सुबह नई तारीखें खुलती हैं, उस समय देखें।",
        "केंद्र पर सिर्फ अपॉइंटमेंट वाले ही अंदर जाते हैं; रसीद, मूल कागज़ और उनकी फोटोकॉपी साथ रखें।",
        "पुलिस वेरिफिकेशन आपके पते के थाने से होता है, केंद्र चाहे कोई भी चुनें।",
      ],
      callout: { kind: "warn", html: "पासपोर्ट के लिए किसी एजेंट को पैसे न दें। बहुत-सी नकली वेबसाइटें \"passport apply\" नाम से ज़्यादा फीस लेती हैं; फीस सिर्फ passportindia.gov.in या mPassport Seva ऐप पर भरें।" },
    },
  ],
  official: [
    { href: "https://www.passportindia.gov.in/", title: "पासपोर्ट सेवा (passportindia.gov.in)", note: "आवेदन, अपॉइंटमेंट, केंद्र" },
    { href: "https://www.passportindia.gov.in/AppOnlineProject/pdf/PSK_List.pdf", title: "आधिकारिक सूची: 93 पासपोर्ट सेवा केंद्र (PDF)" },
    { href: "https://www.passportindia.gov.in/AppOnlineProject/pdf/POPSK_List.pdf", title: "आधिकारिक सूची: पोस्ट ऑफिस पासपोर्ट सेवा केंद्र (PDF)" },
  ],
  faq: [
    { q: "भारत में कितने पासपोर्ट सेवा केंद्र हैं?", a: `पासपोर्ट विभाग की सूची में ${totalPsk} पासपोर्ट सेवा केंद्र (PSK) हैं, और मार्च 2026 तक 452 पोस्ट ऑफिस पासपोर्ट सेवा केंद्र (POPSK) चालू थे।` },
    { q: "मेरे शहर में पासपोर्ट ऑफिस कहां है?", a: "ऊपर के खोज बॉक्स में अपने शहर/ज़िले का नाम अंग्रेज़ी में लिखें। अपॉइंटमेंट बुक करते समय पोर्टल आपके पते के हिसाब से उपलब्ध केंद्र दिखाता है।" },
    { q: "क्या पोस्ट ऑफिस पासपोर्ट सेवा केंद्र में भी पासपोर्ट बनता है?", a: "हां। POPSK में भी अपॉइंटमेंट पर कागज़ जांच, फोटो और उंगलियों के निशान होते हैं; पासपोर्ट उसी RPO से जारी होता है।" },
    { q: "क्या मैं दूसरे ज़िले का PSK चुन सकता हूं?", a: "आप अपने पते वाले RPO के तहत उपलब्ध केंद्रों में से चुन सकते हैं; पोर्टल पर अपॉइंटमेंट लेते समय विकल्प दिखते हैं।" },
    { q: "पासपोर्ट की फीस कितनी है?", a: "फीस 1 जुलाई 2026 से बदली है; पूरी फीस सूची हमारी पासपोर्ट 2026 गाइड में देखें।" },
    { q: "PSK और RPO में क्या फर्क है?", a: "PSK वह जगह है जहां आप अपॉइंटमेंट पर जाते हैं; RPO आपके क्षेत्र का मुख्य पासपोर्ट कार्यालय है जो फाइल मंज़ूर करता है और पासपोर्ट जारी करता है।" },
  ],
  related: [
    { href: "/service/passport.html", emoji: "🛂", title: "पासपोर्ट 2026 गाइड", text: "फीस, कागज़, तत्काल" },
    { href: "/service/jan-aushadhi-store-locator.html", emoji: "💊", title: "जन औषधि केंद्र सूची", text: "सस्ती दवा की दुकानें" },
    { href: "/tools/csc-locator.html", emoji: "📍", title: "CSC केंद्र खोजें", text: "आपके ज़िले में" },
  ],
  aside: [
    { href: "https://www.passportindia.gov.in/", label: "🛂 अपॉइंटमेंट लें" },
    { href: "/service/passport.html", label: "📘 पासपोर्ट गाइड" },
  ],
};
