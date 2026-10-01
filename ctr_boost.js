/**
 * CTR BOOST SCRIPT - 2026 Version
 * Updates title tags and meta descriptions across all SEO-injected pages
 * Adds: Free/मुफ्त, urgency (अभी, आज), year (2026), benefit amounts, power words
 * Goal: Increase CTR from Google Search impressions
 */
const fs = require('fs');

// CTR power words map - keyed by filename pattern
const ctrMap = {
  'od-caste-certificate.html': {
    title: 'ओडिशा जाति प्रमाण पत्र 2026 – अभी मुफ्त ऑनलाइन आवेदन करें',
    desc: '⚡ ओडिशा SC/ST/OBC जाति प्रमाण पत्र घर बैठे 5 मिनट में! मुफ्त आवेदन, दस्तावेज़ और प्रक्रिया की पूरी जानकारी।'
  },
  'od-income-certificate.html': {
    title: 'ओडिशा आय प्रमाण पत्र 2026 – अभी ऑनलाइन मुफ्त आवेदन',
    desc: '✅ ओडिशा आय प्रमाण पत्र मुफ्त ऑनलाइन बनाएं – छात्रवृत्ति, EWS, BPL के लिए जरूरी। Step-by-Step गाइड।'
  },
  'od-ration-card.html': {
    title: 'ओडिशा राशन कार्ड 2026 – मुफ्त आवेदन, 5 किलो अनाज',
    desc: '🆓 ओडिशा नया राशन कार्ड मुफ्त बनाएं! AAY/BPL – 5 किलो मुफ्त अनाज। food.odisha.gov.in पर अभी करें।'
  },
  'od-residence-certificate.html': {
    title: 'ओडिशा निवास प्रमाण पत्र 2026 – मुफ्त ऑनलाइन आवेदन',
    desc: '✅ ओडिशा डोमिसाइल/निवास प्रमाण पत्र मुफ्त में बनाएं। नौकरी आरक्षण के लिए जरूरी। Step-by-Step गाइड।'
  },
  'od-subhadra-yojana.html': {
    title: 'ओडिशा सुभद्रा योजना 2026 – ₹10,000 पाएं अभी आवेदन करें',
    desc: '💰 सुभद्रा योजना: ओडिशा महिलाओं को ₹10,000/साल! रक्षाबंधन पर पहली किस्त। subhadra.odisha.gov.in पर आज आवेदन।'
  },
  'organ-donation-pledge-notto.html': {
    title: 'अंगदान संकल्प 2026 – NOTTO पर मुफ्त पंजीकरण करें',
    desc: '❤️ एक अंगदान से 8 जिंदगियाँ बचाएं! NOTTO पर मुफ्त Donor पंजीकरण – 2 मिनट में। आज ही संकल्प लें।'
  },
  'organ-donation-registration.html': {
    title: 'अंगदान पंजीकरण 2026 – NOTTO India Free Registration',
    desc: '🩺 NOTTO पर मुफ्त अंगदान पंजीकरण करें। जीवित और मृत दोनों प्रकार। 8 जिंदगियाँ बचाने का मौका।'
  },
  'pan-card.html': {
    title: 'PAN Card मुफ्त ऑनलाइन 2026 – 5 मिनट में Instant e-PAN',
    desc: '🆓 आधार से Instant e-PAN बिल्कुल मुफ्त! या ₹107 में 15 दिन में। PAN Card Apply Now – Step-by-Step गाइड।'
  },
  'passport.html': {
    title: 'पासपोर्ट ऑनलाइन 2026 – ₹1500 में 30 दिन में पाएं',
    desc: '✈️ Indian Passport ऑनलाइन आवेदन! नया ₹1500, तत्काल ₹3500। घर बैठे appointment लें। Complete Guide 2026.'
  },
  'nps-tier2-account-activation.html': {
    title: 'NPS Tier 2 खाता 2026 – बिना Lock-in, कभी भी निकालें',
    desc: '💹 NPS Tier 2 खोलें – कोई Lock-in नहीं! ₹1000 से शुरू, बाजार से जुड़े रिटर्न। अभी Activate करें।'
  },
  'national-pension-system.html': {
    title: 'NPS खाता 2026 – ₹2 लाख Tax Save करें, अभी खोलें',
    desc: '💰 NPS से ₹2 लाख/वर्ष टैक्स बचाएं! बाजार से जुड़े रिटर्न, ₹500 से शुरू। अभी PRAN नंबर पाएं।'
  },
  'national-scholarship-portal.html': {
    title: 'NSP छात्रवृत्ति 2026-27 – मुफ्त ऑनलाइन आवेदन अभी करें',
    desc: '🎓 50+ सरकारी छात्रवृत्तियाँ scholarships.gov.in पर! SC/ST/OBC मुफ्त। ₹5,000/माह तक। Last Date से पहले करें!'
  },
  'namaste-scheme-sewer-workers.html': {
    title: 'NAMASTE योजना 2026 – सफाई कर्मियों को ₹1 लाख मुफ्त',
    desc: '🛡️ NAMASTE: सफाई कर्मियों को ₹1 लाख + मुफ्त PPE + बीमा! अभी पंजीकरण करें। पात्रता यहाँ देखें।'
  },
  'namo-drone-didi-scheme.html': {
    title: 'नमो ड्रोन दीदी 2026 – SHG महिलाएं ₹15,000/माह कमाएं',
    desc: '🚁 Drone Didi: SHG महिलाओं को मुफ्त ड्रोन + Training + ₹15,000-20,000/माह! अभी BDO से मिलें।'
  },
  'national-apprenticeship-scheme.html': {
    title: 'NAPS 2026 – Earn While You Learn ₹9,000/माह मुफ्त Register',
    desc: '🎓 NAPS Apprenticeship: पढ़ाई के साथ ₹7,000-12,000/माह! मुफ्त पंजीकरण apprenticeshipindia.org पर। अभी!'
  },
  'national-blood-bank-eraktkosh.html': {
    title: 'e-RaktKosh 2026 – ब्लड मुफ्त खोजें, डोनर बनें',
    desc: '🩸 e-RaktKosh: सभी Blood Groups रियल-टाइम उपलब्धता! मुफ्त Donor पंजीकरण। एक Donation से 4 जिंदगियाँ।'
  },
  'national-social-assistance-programme.html': {
    title: 'NSAP पेंशन 2026 – बुजुर्ग/विधवा को ₹500/माह अभी आवेदन',
    desc: '👴 NSAP: बुजुर्ग, विधवा, दिव्यांग को ₹200-500/माह + राज्य टॉपअप! मुफ्त आवेदन पंचायत में। अभी करें।'
  },
  'national-water-grid-jal-jeevan.html': {
    title: 'जल जीवन मिशन 2026 – मुफ्त नल कनेक्शन पाएं अभी',
    desc: '🚰 हर घर जल! मुफ्त नल कनेक्शन के लिए पंचायत में आज ही आवेदन करें। jaljeevanmission.gov.in पर देखें।'
  },
  'ncs-national-career-service.html': {
    title: 'NCS पोर्टल 2026 – मुफ्त Job Registration, सरकारी नौकरी',
    desc: '💼 NCS: 10 लाख+ सरकारी-निजी नौकरियाँ मुफ्त! 2 मिनट में Registration ncs.gov.in पर। Career Counselling भी।'
  },
  'nikshay-poshan-yojana-tb.html': {
    title: 'निक्षय पोषण योजना 2026 – TB मरीज ₹500/माह मुफ्त पाएं',
    desc: '💊 TB मरीजों को ₹500/माह पोषण सहायता मुफ्त! nikshay.in पर पंजीकरण। DR-TB को कुल ₹12,000 तक।'
  },
  'pb-ashirwad-scheme.html': {
    title: 'Punjab Ashirwad Scheme 2026 – बेटियों को ₹51,000 Free',
    desc: '👧 पंजाब आशीर्वाद योजना: बेटी की शादी पर ₹51,000 मुफ्त! SC/ST/OBC BPL परिवार अभी आवेदन करें।'
  },
  'pb-caste-certificate.html': {
    title: 'Punjab Caste Certificate 2026 – मुफ्त ऑनलाइन 5 दिन में',
    desc: '✅ पंजाब SC/ST/OBC जाति प्रमाण पत्र 5 दिन में मुफ्त! sewaKendra.punjab.gov.in पर अभी आवेदन करें।'
  },
  'pb-income-certificate.html': {
    title: 'Punjab Income Certificate 2026 – मुफ्त ऑनलाइन आवेदन',
    desc: '✅ पंजाब आय प्रमाण पत्र मुफ्त! छात्रवृत्ति-EWS के लिए जरूरी। Sewa Kendra पर 7 दिन में। अभी करें।'
  },
  'pb-ration-card.html': {
    title: 'Punjab Ration Card 2026 – मुफ्त अनाज, ऑनलाइन आवेदन',
    desc: '🌾 पंजाब राशन कार्ड: BPL को मुफ्त राशन! नया कार्ड epos.punjab.gov.in पर ऑनलाइन बनाएं। अभी करें।'
  },
  'pb-residence-certificate.html': {
    title: 'Punjab Residence Certificate 2026 – मुफ्त ऑनलाइन आवेदन',
    desc: '📋 पंजाब निवास प्रमाण पत्र (Domicile) मुफ्त में 7 दिन में पाएं। Sewa Kendra Punjab पर अभी आवेदन करें।'
  }
};

// Generic CTR boost: add "अभी आवेदन करें!" to short descriptions
function boostGenericCTR(html) {
  return html.replace(
    /<meta name="description" content="([^"]{10,150})"/g,
    (match, desc) => {
      if (desc.includes('अभी') || desc.includes('मुफ्त') || desc.includes('🆓') ||
          desc.includes('✅') || desc.includes('💰') || desc.includes('Apply Now') ||
          desc.includes('Free') || desc.includes('2026')) {
        return match;
      }
      const boosted = desc.length < 140 ? desc + ' अभी आवेदन करें!' : desc;
      return `<meta name="description" content="${boosted}"`;
    }
  );
}

// Also replace any 2024 leftover in already injected pages
function fix2026(html) {
  // Replace year 2024 with 2026 only in title and meta description tags
  html = html.replace(/(<title>[^<]*?)2024([^<]*?<\/title>)/g, '$12026$2');
  html = html.replace(/(<meta name="description" content="[^"]*?)2024([^"]*?")/g, '$12026$2');
  html = html.replace(/(<meta property="og:description" content="[^"]*?)2024([^"]*?")/g, '$12026$2');
  html = html.replace(/(<meta name="twitter:description" content="[^"]*?)2024([^"]*?")/g, '$12026$2');
  return html;
}

const serviceDir = 'service';
const files = fs.readdirSync(serviceDir).filter(f => f.endsWith('.html'));
let updated = 0;

for (const filename of files) {
  const filePath = `${serviceDir}/${filename}`;
  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('INJECTED SEO CONTENT')) continue;

  let changed = false;
  const original = html;

  // Fix 2024 → 2026 everywhere in meta tags
  html = fix2026(html);

  // Apply custom CTR map
  if (ctrMap[filename]) {
    const { title, desc } = ctrMap[filename];
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`);
    html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${desc}"`);
    html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${desc}"`);
  }

  // Generic CTR boost
  html = boostGenericCTR(html);

  if (html !== original) {
    fs.writeFileSync(filePath, html, 'utf8');
    updated++;
    console.log(`✅ CTR Boosted: ${filename}`);
  }
}

console.log(`\n🎉 CTR Boost Complete! Updated ${updated} files.`);
