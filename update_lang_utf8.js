const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/lang.json', 'utf8'));

const newEn = {
  seo_title_age_calc: 'Age & Retirement Calculator Online | Exact Age & Service Tracker',
  seo_desc_age_calc: 'Calculate exact age (Years, Months, Days) and retirement date from your Date of Birth. Best free tool for tracking government job age limits.',
  seo_title_project_report: 'Project Report Generator for PMEGP, Mudra & MPBCDC Loan',
  seo_desc_project_report: 'Generate your bank-ready Project Report for PMEGP, Mudra, and MPBCDC loans for free. Auto-calculate subsidy, DSCR, P&L, and EMI.',
  seo_title_hidden_tax: 'Hidden Tax Calculator (Indirect Tax) | Check GST & Excise Duty',
  seo_desc_hidden_tax: 'How much hidden GST and Excise duty do you pay on petrol, groceries, and bills? Enter monthly spending to calculate your actual indirect tax.',
  seo_title_hra: 'HRA Exemption Calculator | Income Tax Rent Savings Tool',
  seo_desc_hra: 'How much Income Tax can you save on House Rent Allowance (HRA)? Calculate your exact tax exemption under Section 10(13A) for free.',
  seo_title_epf: 'EPF Maturity Calculator Online | Check PF Interest & Balance',
  seo_desc_epf: 'Estimate your EPF balance at retirement. Calculate total PF interest and maturity amount based on employer and employee contributions.'
};

const newHi = {
  seo_title_age_calc: 'आयु और सेवानिवृत्ति कैलकुलेटर ऑनलाइन | सटीक आयु और नौकरी की अवधि जांचें',
  seo_desc_age_calc: 'अपनी जन्म तिथि से सटीक आयु (वर्ष, महीने, दिन) और सेवानिवृत्ति (Retirement) की तारीख निकालें। सरकारी नौकरी की आयु सीमा जांचने का सबसे अच्छा फ्री टूल।',
  seo_title_project_report: 'PMEGP, Mudra और MPBCDC लोन के लिए प्रोजेक्ट रिपोर्ट जेनरेटर',
  seo_desc_project_report: 'बैंक लोन (PMEGP, मुद्रा, MPBCDC) के लिए अपनी प्रोजेक्ट रिपोर्ट 2 मिनट में मुफ्त बनाएं। सब्सिडी, DSCR, P&L और EMI की ऑटोमैटिक गणना करें।',
  seo_title_hidden_tax: 'हिडन टैक्स कैलकुलेटर — जानिए आप कितना अप्रत्यक्ष कर देते हैं?',
  seo_desc_hidden_tax: 'पेट्रोल, राशन, और बिलों पर आप कितना हिडन GST और एक्साइज ड्यूटी देते हैं? अपने मासिक खर्च दर्ज करें और अपना असली अप्रत्यक्ष कर जांचें।',
  seo_title_hra: 'HRA छूट कैलकुलेटर | मकान किराये पर इनकम टैक्स बचाएं',
  seo_desc_hra: 'मकान किराया भत्ता (HRA) पर आप कितना इनकम टैक्स बचा सकते हैं? धारा 10(13A) के तहत अपने सटीक टैक्स छूट की मुफ्त में गणना करें।',
  seo_title_epf: 'EPF मैच्योरिटी कैलकुलेटर ऑनलाइन | पीएफ ब्याज और बैलेंस जांचें',
  seo_desc_epf: 'रिटायरमेंट पर आपका EPF बैलेंस कितना होगा? नियोक्ता (Employer) और कर्मचारी योगदान के आधार पर कुल पीएफ ब्याज और मैच्योरिटी राशि की गणना करें।'
};

Object.assign(data.en, newEn);
Object.assign(data.hi, newHi);

fs.writeFileSync('data/lang.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated lang.json with proper UTF-8 Hindi text.');
