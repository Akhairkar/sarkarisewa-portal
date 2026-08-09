const fs = require('fs');

const dataPath = 'data/blog-posts.json';
let posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newPosts = [
  {
    slug: "7th-pay-commission-salary-calculator-guide",
    isStatic: true,
    title: { en: "7th Pay Commission Salary Calculator Guide 2026", hi: "सातवें वेतन आयोग सैलरी कैलकुलेटर 2026 की जानकारी" },
    excerpt: { en: "Calculate your 7th Pay Commission salary with 50% DA rules, HRA, and benefits.", hi: "7वें वेतन आयोग के तहत अपनी सैलरी, 50% DA नियम और भत्तों की गणना करना सीखें।" },
    datePublished: "2026-08-09",
    category: "finance-tax",
    tags: ["salary", "calculator", "7th-pay"]
  },
  {
    slug: "8th-pay-commission-expected-salary-calculator",
    isStatic: true,
    title: { en: "8th Pay Commission Expected Salary & Fitment Factor", hi: "आठवां वेतन आयोग: अनुमानित सैलरी और फिटमेंट फैक्टर" },
    excerpt: { en: "Understand the expected 8th Pay Commission changes, fitment factors, and future salary projections.", hi: "8वें वेतन आयोग के संभावित बदलावों और फिटमेंट फैक्टर के आधार पर अपनी भविष्य की सैलरी का अनुमान लगाएं।" },
    datePublished: "2026-08-09",
    category: "finance-tax",
    tags: ["salary", "calculator", "8th-pay"]
  },
  {
    slug: "nps-pension-calculator-benefits-guide",
    isStatic: true,
    title: { en: "NPS Pension Calculator & Govt Contribution Benefits", hi: "NPS पेंशन कैलकुलेटर और सरकारी योगदान के फायदे" },
    excerpt: { en: "Maximize your retirement corpus with the NPS Pension Calculator and understand the 14% govt contribution.", hi: "NPS पेंशन कैलकुलेटर का उपयोग करके अपना रिटायरमेंट फंड बढ़ाएं और 14% सरकारी योगदान को समझें।" },
    datePublished: "2026-08-09",
    category: "finance-tax",
    tags: ["pension", "calculator", "nps"]
  },
  {
    slug: "exam-age-calculator-for-sarkari-naukri",
    isStatic: true,
    title: { en: "Exam Age Calculator for UPSC, SSC & Bank Exams", hi: "सरकारी नौकरी परीक्षाओं के लिए आयु कैलकुलेटर" },
    excerpt: { en: "Calculate your exact age for UPSC, SSC, and Bank exams. Check age relaxations for OBC, SC, ST.", hi: "UPSC, SSC और बैंक परीक्षाओं के लिए अपनी सटीक आयु की गणना करें और आयु छूट के नियम जानें।" },
    datePublished: "2026-08-09",
    category: "jobs-education",
    tags: ["exam", "calculator", "age"]
  },
  {
    slug: "hidden-tax-calculator-save-income-tax",
    isStatic: true,
    title: { en: "Hidden Tax Calculator: Save Income Tax Legally", hi: "हिडन टैक्स कैलकुलेटर: कानूनी रूप से इनकम टैक्स बचाएं" },
    excerpt: { en: "Discover hidden taxes and learn how to save income tax legally using 80C, 80D, and other instruments.", hi: "छिपे हुए टैक्स को समझें और 80C, 80D जैसे विकल्पों का उपयोग करके कानूनी रूप से इनकम टैक्स बचाना सीखें।" },
    datePublished: "2026-08-09",
    category: "finance-tax",
    tags: ["tax", "calculator", "savings"]
  }
];

// Add if not already present
newPosts.forEach(newPost => {
  if (!posts.some(p => p.slug === newPost.slug)) {
    posts.unshift(newPost); // add to top so they show first
  }
});

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2), 'utf8');
console.log("Updated blog-posts.json successfully.");
