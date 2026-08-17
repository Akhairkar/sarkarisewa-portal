const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'lang.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEn = {
  seo_title_income_tax: 'Income Tax Calculator (Old vs New Regime) | Calculate Tax Savings',
  seo_desc_income_tax: 'Calculate your Income Tax under Old and New Regime. Find out which tax slab is better for you based on deductions like 80C, HRA, and standard deduction.',
  seo_title_gratuity: 'Gratuity Calculator Online | Check Formula & Eligibility',
  seo_desc_gratuity: 'Calculate your Gratuity payout after 5 years of continuous service. Based on the Payment of Gratuity Act, 1972 formula: (15 * Last Drawn Salary * Tenure) / 26.',
  seo_title_itr_penalty: 'ITR Penalty & Late Fee Calculator | Section 234A, 234B, 234C',
  seo_desc_itr_penalty: 'Calculate exact late filing fee (Section 234F) and penal interest for delayed Income Tax Return (ITR) under Section 234A, 234B, and 234C.',
  seo_title_photo_resizer: 'Govt Job Photo Resizer Online | Resize to Passport Size & KB',
  seo_desc_photo_resizer: 'Resize your photo for UPSC, SSC, IBPS, and state government jobs. Compress image size to 20KB/50KB and set exact pixel dimensions for free without losing quality.',
  seo_title_signature_resizer: 'Online Signature Resizer & Compressor for Govt Exams',
  seo_desc_signature_resizer: 'Crop and compress your signature image to exactly 10KB-20KB for online government exam applications (SSC, Railway, Banking) securely in your browser.'
};

const newHi = {
  seo_title_income_tax: 'इनकम टैक्स कैलकुलेटर (पुरानी बनाम नई व्यवस्था) | टैक्स बचत की गणना करें',
  seo_desc_income_tax: 'पुरानी और नई टैक्स व्यवस्था (Old vs New Regime) के तहत अपने आयकर (Income Tax) की गणना करें। 80C, HRA और स्टैंडर्ड डिडक्शन के आधार पर जानें कौन सा स्लैब आपके लिए बेहतर है।',
  seo_title_gratuity: 'ग्रेच्युटी कैलकुलेटर ऑनलाइन | फॉर्मूला और नियम जांचें',
  seo_desc_gratuity: 'लगातार 5 साल की नौकरी के बाद अपनी ग्रेच्युटी (Gratuity) राशि की गणना करें। यह पेमेंट ऑफ ग्रेच्युटी एक्ट, 1972 के फॉर्मूले पर आधारित है।',
  seo_title_itr_penalty: 'ITR लेट फीस और जुर्माना कैलकुलेटर | धारा 234A, 234B, 234C',
  seo_desc_itr_penalty: 'आयकर रिटर्न (ITR) देर से फाइल करने पर लगने वाली लेट फीस (Section 234F) और ब्याज (234A, 234B, 234C) की सटीक गणना करें।',
  seo_title_photo_resizer: 'सरकारी नौकरी के लिए फोटो रिसाइज़र | 20KB/50KB में कंप्रेस करें',
  seo_desc_photo_resizer: 'UPSC, SSC, IBPS और अन्य सरकारी फॉर्म के लिए अपनी फोटो को सही पिक्सेल (Pixel) और साइज़ (20KB-50KB) में बिना क्वालिटी घटाए रिसाइज़ करें।',
  seo_title_signature_resizer: 'सरकारी परीक्षाओं के लिए ऑनलाइन सिग्नेचर (हस्ताक्षर) रिसाइज़र',
  seo_desc_signature_resizer: 'SSC, रेलवे और बैंकिंग फॉर्म के लिए अपने सिग्नेचर (हस्ताक्षर) की फोटो को क्रॉप करें और ठीक 10KB-20KB में सुरक्षित रूप से कंप्रेस (Compress) करें।'
};

Object.assign(data.en, newEn);
Object.assign(data.hi, newHi);

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated lang.json with 5 new tools.');
