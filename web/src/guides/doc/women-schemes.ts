import type { Section } from "./types";

// "Other schemes for women" box shown near the top of the women's monthly-aid
// guides (Ladli Behna, Delhi Lakshmi): links to our existing guides only.
const SCHEMES: [string, string, string][] = [
  ["/service/pm-matru-vandana-yojana.html", "🤱 गर्भवती महिलाएं: PM मातृ वंदना", "पहले बच्चे पर ₹5,000"],
  ["/service/janani-suraksha-yojana.html", "🏥 जननी सुरक्षा योजना", "अस्पताल में प्रसव पर सहायता"],
  ["/service/pm-jan-dhan-yojana.html", "🏦 ज़ीरो बैलेंस खाता: जन धन", "DBT के लिए मुफ्त बैंक खाता"],
  ["/service/sukanya-samriddhi-yojana.html", "📮 पोस्ट ऑफिस: सुकन्या समृद्धि", "बेटी के लिए बचत खाता"],
  ["/service/mahila-samman-bachat-patra.html", "📮 महिला सम्मान बचत पत्र", "पुरानी योजना: नया खाता बंद, पुराने खाते की जानकारी"],
  ["/service/pm-ujjwala-yojana.html", "🔥 उज्ज्वला योजना", "मुफ्त गैस कनेक्शन"],
  ["/service/lakhpati-didi-yojana.html", "👩‍💼 लखपति दीदी", "स्वयं सहायता समूह की महिलाएं"],
  ["/service/pm-mudra-yojana.html", "💼 मुद्रा लोन", "छोटे काम के लिए लोन"],
];

export function womenSchemesBox(current: string): Section {
  const monthly: [string, string][] = [
    ["/service/mp-ladli-behna-yojana.html", "लाड़ली बहना (MP)"],
    ["/service/delhi-lakshmi-yojana.html", "दिल्ली लक्ष्मी योजना"],
    ["/service/mh-ladki-bahin-yojana.html", "लाडकी बहीण (महाराष्ट्र)"],
    ["/service/cg-mahtari-vandan-yojana.html", "महतारी वंदन (छत्तीसगढ़)"],
    ["/service/jh-maiya-samman-yojana.html", "मंईयां सम्मान (झारखंड)"],
    ["/service/od-subhadra-yojana.html", "सुभद्रा (ओडिशा)"],
    ["/service/wb-lakshmir-bhandar.html", "लक्ष्मीर भंडार (बंगाल)"],
    ["/service/ka-gruha-lakshmi-yojana.html", "गृह लक्ष्मी (कर्नाटक)"],
  ].filter(([href]) => !href.includes(current)) as [string, string][];
  return {
    id: "mahila-yojana",
    title: "महिलाओं के लिए दूसरी ज़रूरी सरकारी योजनाएं",
    intro: "इस योजना के साथ आप इनका भी लाभ ले सकती हैं (अपनी पात्रता देखकर):",
    html:
      `<div class="table-wrap"><table><thead><tr><th>योजना</th><th>किसके लिए / क्या मिलता है</th></tr></thead><tbody>` +
      SCHEMES.map(([href, name, text]) => `<tr><td><a href="${href}">${name}</a></td><td>${text}</td></tr>`).join("") +
      `</tbody></table></div><p><strong>दूसरे राज्यों की हर महीने पैसे वाली योजनाएं:</strong> ` +
      monthly.map(([href, name]) => `<a href="${href}">${name}</a>`).join(" · ") +
      `</p>`,
  };
}
