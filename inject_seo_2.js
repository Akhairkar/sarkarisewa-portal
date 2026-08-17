const fs = require('fs');
const path = require('path');

const seoBlocks = {
  'tools/income-tax-calculator.html': {
    titleKey: 'seo_title_income_tax',
    descKey: 'seo_desc_income_tax',
    en: `Income Tax Calculator (Old vs New Regime) | Calculate Tax Savings`,
    enDesc: `Calculate your Income Tax under Old and New Regime. Find out which tax slab is better for you based on deductions like 80C, HRA, and standard deduction.`,
    contentEn: `<section class="seo-content" data-lang-show="en">
      <h2>Comprehensive Guide to the Income Tax Calculator (Old vs New Regime)</h2>
      <p>Understanding income tax slabs and choosing between the Old and New Tax Regimes can be complicated for salaried employees, pensioners, and business professionals in India. Our free online Income Tax Calculator is designed to simplify this process, providing a clear comparison to help you save maximum tax legally.</p>
      
      <h3>Old Tax Regime vs. New Tax Regime: Which is Better?</h3>
      <p>The choice between the two regimes depends heavily on your investments and deductions:</p>
      <ul>
        <li><strong>Old Tax Regime:</strong> This regime has higher tax rates but allows you to claim around 70 deductions and exemptions. The most popular ones include Section 80C (up to ₹1.5 Lakhs for LIC, PPF, ELSS), Section 80D (Health Insurance), HRA (House Rent Allowance), and LTA (Leave Travel Allowance). If you have substantial investments and pay house rent or a home loan EMI, the old regime might still save you more money.</li>
        <li><strong>New Tax Regime:</strong> Introduced as a simplified alternative, this regime offers lower tax rates but removes most exemptions. Notably, the Standard Deduction of ₹50,000 (which was previously only available in the old regime) has now been extended to the new regime. Furthermore, under the new regime, income up to ₹7 Lakhs is completely tax-free due to the Section 87A rebate. If you do not have many investments or home loan EMIs, the new regime is often the default and better choice.</li>
      </ul>
      
      <h3>How Our Calculator Works</h3>
      <p>Our tool requires you to input your Gross Annual Salary, any other sources of income, and your eligible deductions (like 80C, 80D, HRA, and Home Loan Interest). The algorithm then calculates your taxable income under both regimes simultaneously. It applies the respective tax slabs, adds the necessary health and education cess (4%), and displays a side-by-side comparison of your total tax liability. This instant comparison makes it incredibly easy to decide which regime to declare to your employer at the beginning of the financial year.</p>
      
      <h3>Frequently Asked Questions (FAQs)</h3>
      <h4>Can I switch between the Old and New Regime every year?</h4>
      <p>If you are a salaried individual without business income, you can choose between the old and new regimes every year while filing your ITR. However, individuals with business or professional income (including freelancers) can only switch back to the old regime once in their lifetime.</p>
      
      <h4>Is the Standard Deduction available in both regimes?</h4>
      <p>Yes, starting from the recent financial year, the standard deduction of ₹50,000 is available for salaried employees and pensioners under both the Old and New Tax Regimes.</p>
    </section>`,
    contentHi: `<section class="seo-content" data-lang-show="hi">
      <h2>इनकम टैक्स कैलकुलेटर (पुरानी बनाम नई कर व्यवस्था) की विस्तृत जानकारी</h2>
      <p>भारत में वेतनभोगी कर्मचारियों (Salaried Employees), पेंशनभोगियों और व्यापार करने वालों के लिए इनकम टैक्स स्लैब को समझना और पुरानी व नई कर व्यवस्था (Old vs New Regime) के बीच चयन करना मुश्किल हो सकता है। हमारा यह मुफ़्त ऑनलाइन इनकम टैक्स कैलकुलेटर इस प्रक्रिया को आसान बनाने और आपको ज़्यादा से ज़्यादा टैक्स बचाने में मदद करने के लिए डिज़ाइन किया गया है।</p>
      
      <h3>पुरानी कर व्यवस्था (Old Tax Regime) बनाम नई कर व्यवस्था (New Tax Regime)</h3>
      <p>इन दोनों में से कौन सी व्यवस्था आपके लिए बेहतर है, यह पूरी तरह से आपके निवेश (Investments) और कटौतियों (Deductions) पर निर्भर करता है:</p>
      <ul>
        <li><strong>पुरानी कर व्यवस्था:</strong> इस व्यवस्था में टैक्स की दरें अधिक हैं, लेकिन यह आपको लगभग 70 तरह की छूट और कटौतियों का लाभ देती है। इनमें सबसे लोकप्रिय हैं— धारा 80C (LIC, PPF, ELSS के लिए ₹1.5 लाख तक), धारा 80D (हेल्थ इंश्योरेंस), HRA (मकान किराया भत्ता), और होम लोन का ब्याज। यदि आपके पास अच्छे खासे निवेश हैं या आप भारी किराया चुकाते हैं, तो पुरानी व्यवस्था आपके लिए ज्यादा फायदेमंद हो सकती है।</li>
        <li><strong>नई कर व्यवस्था:</strong> इसे सरल बनाने के उद्देश्य से पेश किया गया था। इसमें टैक्स की दरें कम हैं लेकिन अधिकांश छूट समाप्त कर दी गई हैं। महत्वपूर्ण बात यह है कि अब नई व्यवस्था में भी ₹50,000 का स्टैंडर्ड डिडक्शन (Standard Deduction) मिलता है। साथ ही, धारा 87A की रिबेट (Rebate) के कारण नई व्यवस्था में ₹7 लाख तक की आय पूरी तरह से टैक्स-फ्री (Tax-Free) है। यदि आपके पास निवेश कम हैं, तो नई व्यवस्था आपके लिए बेहतर विकल्प है।</li>
      </ul>
      
      <h3>हमारा कैलकुलेटर कैसे काम करता है?</h3>
      <p>इस टूल में आपको अपनी कुल वार्षिक आय (Gross Salary) और अपने निवेश (जैसे 80C, HRA आदि) की जानकारी दर्ज करनी होती है। इसके बाद, हमारा सिस्टम दोनों व्यवस्थाओं के तहत आपकी कर योग्य आय (Taxable Income) की गणना करता है। यह संबंधित टैक्स स्लैब और 4% सेस (Cess) लगाकर दोनों व्यवस्थाओं की तुलना (Comparison) दिखाता है, जिससे आप आसानी से तय कर सकते हैं कि आपको कौन सी व्यवस्था चुननी चाहिए।</p>
      
      <h3>अक्सर पूछे जाने वाले प्रश्न (FAQs)</h3>
      <h4>क्या मैं हर साल पुरानी और नई व्यवस्था के बीच स्विच कर सकता हूँ?</h4>
      <p>यदि आप केवल वेतन (Salary) पाने वाले कर्मचारी हैं और आपकी कोई व्यावसायिक आय (Business Income) नहीं है, तो आप हर साल अपना ITR फाइल करते समय दोनों में से कोई भी व्यवस्था चुन सकते हैं। लेकिन व्यवसाय करने वालों के लिए यह छूट जीवन में केवल एक बार मिलती है।</p>
    </section>`
  },
  'tools/gratuity-calculator.html': {
    titleKey: 'seo_title_gratuity',
    descKey: 'seo_desc_gratuity',
    en: `Gratuity Calculator Online | Check Formula & Eligibility`,
    enDesc: `Calculate your Gratuity payout after 5 years of continuous service. Based on the Payment of Gratuity Act, 1972 formula: (15 * Last Drawn Salary * Tenure) / 26.`,
    contentEn: `<section class="seo-content" data-lang-show="en">
      <h2>Gratuity Calculator: Plan Your Post-Resignation Finances</h2>
      <p>Gratuity is a lump-sum financial benefit paid by an employer to an employee as a token of appreciation for their long-term, continuous service. Regulated by the Payment of Gratuity Act, 1972, this monetary reward is a significant component of an employee's severance package. Our free online Gratuity Calculator is designed to help you instantly compute the exact amount you are entitled to receive upon resignation, retirement, or termination.</p>
      
      <h3>Eligibility Criteria for Gratuity</h3>
      <p>To be legally eligible to receive gratuity in India, an employee must meet specific conditions:</p>
      <ul>
        <li><strong>Continuous Service:</strong> The employee must have completed at least 5 years of continuous service with the same employer. However, this 5-year rule is relaxed in cases of the employee's death or disablement due to a disease or accident.</li>
        <li><strong>Company Size:</strong> The employer's organization (factory, mine, oilfield, plantation, port, railway company, shop, or establishment) must have 10 or more employees on any single day in the preceding 12 months. Once an organization falls under the Act, it continues to be covered even if the employee count drops below 10 later.</li>
      </ul>
      
      <h3>The Gratuity Calculation Formula</h3>
      <p>The calculation of gratuity depends heavily on whether the employer is covered under the Payment of Gratuity Act. Most organized sector companies are covered.</p>
      <p><strong>For Employees Covered Under the Act:</strong></p>
      <p>The formula is: <code>(15 × Last Drawn Salary × Years of Service) / 26</code></p>
      <ul>
        <li><strong>15:</strong> Represents 15 days of wages for each completed year of service.</li>
        <li><strong>Last Drawn Salary:</strong> This includes your Basic Salary plus Dearness Allowance (DA). It does not include HRA or other allowances.</li>
        <li><strong>26:</strong> Represents the number of working days in a month.</li>
        <li><strong>Years of Service:</strong> If you have worked for 7 years and 7 months, it is rounded off to 8 years. If you worked for 7 years and 5 months, it is rounded to 7 years.</li>
      </ul>
      
      <h3>Tax Exemption Limits on Gratuity</h3>
      <p>Gratuity received by government employees is completely exempt from income tax. For non-government employees covered under the Act, gratuity is tax-exempt up to a maximum limit of ₹20 Lakhs. Any amount received above this ₹20 Lakh threshold is taxable according to your applicable income tax slab.</p>
      <p>Use our accurate calculator today to ensure you receive your rightful financial reward when you decide to move on to your next career opportunity!</p>
    </section>`,
    contentHi: `<section class="seo-content" data-lang-show="hi">
      <h2>ग्रेच्युटी (Gratuity) कैलकुलेटर: नियम और फॉर्मूले की पूरी जानकारी</h2>
      <p>ग्रेच्युटी एकमुश्त वित्तीय लाभ (Lump-sum Benefit) है जो नियोक्ता (Employer) द्वारा किसी कर्मचारी को उसकी लंबी और निरंतर सेवा के लिए ईनाम के रूप में दिया जाता है। यह 'पेमेंट ऑफ ग्रेच्युटी एक्ट, 1972' द्वारा नियंत्रित होता है। नौकरी छोड़ने, रिटायरमेंट या कंपनी से निकाले जाने पर यह एक बड़ी आर्थिक मदद साबित होता है। हमारा मुफ़्त ऑनलाइन ग्रेच्युटी कैलकुलेटर आपको यह जानने में मदद करता है कि आप कितनी ग्रेच्युटी राशि पाने के हकदार हैं।</p>
      
      <h3>ग्रेच्युटी पाने की पात्रता (Eligibility)</h3>
      <p>भारत में ग्रेच्युटी का कानूनी रूप से हकदार होने के लिए, एक कर्मचारी को कुछ शर्तों को पूरा करना होता है:</p>
      <ul>
        <li><strong>5 साल की निरंतर सेवा:</strong> कर्मचारी को एक ही कंपनी या नियोक्ता के साथ कम से कम 5 साल लगातार काम करना अनिवार्य है। हालांकि, बीमारी या दुर्घटना के कारण मृत्यु या विकलांगता की स्थिति में यह 5 साल का नियम लागू नहीं होता है।</li>
        <li><strong>कंपनी का आकार:</strong> जिस कंपनी या संस्थान (फैक्ट्री, दुकान, आदि) में आप काम करते हैं, उसमें पिछले 12 महीनों में किसी भी एक दिन कम से कम 10 कर्मचारी होने चाहिए। यदि कंपनी एक बार अधिनियम के दायरे में आ जाती है, तो कर्मचारियों की संख्या 10 से कम होने पर भी उसे ग्रेच्युटी देनी होती है।</li>
      </ul>
      
      <h3>ग्रेच्युटी की गणना कैसे की जाती है? (Formula)</h3>
      <p>संगठित क्षेत्र (Organized Sector) की अधिकांश कंपनियां ग्रेच्युटी एक्ट के अंतर्गत आती हैं। उनके लिए ग्रेच्युटी का फॉर्मूला इस प्रकार है:</p>
      <p><strong>ग्रेच्युटी = (15 × अंतिम वेतन × सेवा के वर्ष) / 26</strong></p>
      <ul>
        <li><strong>15:</strong> हर पूरे किए गए साल के लिए 15 दिन का वेतन।</li>
        <li><strong>अंतिम वेतन (Last Drawn Salary):</strong> इसमें आपकी 'बेसिक सैलरी' (Basic Salary) और 'महंगाई भत्ता' (DA) शामिल होता है। इसमें HRA या अन्य भत्ते शामिल नहीं होते हैं।</li>
        <li><strong>26:</strong> इसे एक महीने के कार्य दिवस (Working Days) के रूप में माना जाता है।</li>
        <li><strong>सेवा के वर्ष:</strong> यदि आपने 7 साल और 7 महीने काम किया है, तो इसे 8 साल माना जाएगा (6 महीने से ज्यादा को 1 साल माना जाता है)।</li>
      </ul>
      
      <h3>ग्रेच्युटी पर इनकम टैक्स की छूट (Tax Exemption)</h3>
      <p>सरकारी कर्मचारियों को मिलने वाली ग्रेच्युटी पूरी तरह से टैक्स-फ्री (Tax Free) होती है। प्राइवेट सेक्टर (गैर-सरकारी) कर्मचारियों के लिए, ग्रेच्युटी पर ₹20 लाख तक की राशि टैक्स-फ्री होती है। ₹20 लाख से ऊपर की किसी भी ग्रेच्युटी राशि पर आपके इनकम टैक्स स्लैब के अनुसार टैक्स लगेगा।</p>
    </section>`
  },
  'tools/itr-penalty-calculator.html': {
    titleKey: 'seo_title_itr_penalty',
    descKey: 'seo_desc_itr_penalty',
    en: `ITR Penalty & Late Fee Calculator | Section 234A, 234B, 234C`,
    enDesc: `Calculate exact late filing fee (Section 234F) and penal interest for delayed Income Tax Return (ITR) under Section 234A, 234B, and 234C.`,
    contentEn: `<section class="seo-content" data-lang-show="en">
      <h2>Understand ITR Late Filing Penalties (Section 234A, 234B, 234C, 234F)</h2>
      <p>Filing your Income Tax Return (ITR) before the due date (usually July 31st for individuals) is crucial. Missing this deadline not only delays your refunds but also attracts hefty late filing fees and penal interest under the Income Tax Act, 1961. Our ITR Penalty & Late Fee Calculator helps you determine the exact financial consequences of delayed filing, empowering you to clear your tax dues accurately.</p>
      
      <h3>Late Filing Fee under Section 234F</h3>
      <p>If you fail to file your ITR by the specified deadline, the Income Tax Department levies a flat late fee under Section 234F. The penalty structure is straightforward:</p>
      <ul>
        <li><strong>Zero Penalty:</strong> If your total income is below the basic exemption limit (₹2.5 Lakhs for old regime, ₹3 Lakhs for new regime), no late fee is levied.</li>
        <li><strong>Penalty of ₹1,000:</strong> If your total annual income is above the exemption limit but does not exceed ₹5,00,000, the maximum late fee is capped at ₹1,000.</li>
        <li><strong>Penalty of ₹5,000:</strong> If your total annual income exceeds ₹5,00,000, and you file the return after the due date (but before December 31st of the assessment year), a late fee of ₹5,000 is applicable.</li>
      </ul>
      
      <h3>Penal Interest (Sections 234A, 234B, 234C)</h3>
      <p>Besides the flat fee, the government charges interest on the outstanding tax amount. This is where delays become very expensive:</p>
      <ul>
        <li><strong>Section 234A (Delay in filing ITR):</strong> If you have outstanding taxes and file your ITR after the deadline, simple interest at 1% per month (or part of a month) is charged on the unpaid tax amount, calculated from the day immediately following the due date.</li>
        <li><strong>Section 234B (Delay in paying Advance Tax):</strong> If your total tax liability for the year exceeds ₹10,000, you are required to pay Advance Tax. If you fail to pay at least 90% of your assessed tax as advance tax by March 31st, a 1% per month interest is charged on the shortfall.</li>
        <li><strong>Section 234C (Shortfall in Advance Tax Installments):</strong> Advance tax must be paid in quarterly installments (15% by June, 45% by Sep, 75% by Dec, 100% by March). Falling short of these specific percentages attracts an additional 1% per month interest for the period of default.</li>
      </ul>
      <p>By entering your tax details into our calculator, you can instantly break down these complex sections and know your exact payable amount before logging into the income tax portal.</p>
    </section>`,
    contentHi: `<section class="seo-content" data-lang-show="hi">
      <h2>ITR लेट फीस और जुर्माना (Penalty) कैलकुलेटर: धारा 234A, 234B, 234C और 234F</h2>
      <p>अपना इनकम टैक्स रिटर्न (ITR) अंतिम तिथि (आमतौर पर व्यक्तिगत करदाताओं के लिए 31 जुलाई) से पहले फाइल करना बहुत महत्वपूर्ण है। डेडलाइन मिस करने पर न केवल आपके रिफंड में देरी होती है, बल्कि आयकर अधिनियम, 1961 के तहत भारी लेट फीस और दंडात्मक ब्याज (Penal Interest) भी लगता है। हमारा यह कैलकुलेटर आपको देरी से फाइल करने के कारण लगने वाले जुर्माने की सटीक गणना करने में मदद करता है।</p>
      
      <h3>धारा 234F के तहत लेट फाइलिंग फीस (Late Fee)</h3>
      <p>यदि आप नियत तिथि (Due Date) तक ITR दाखिल करने में विफल रहते हैं, तो धारा 234F के तहत एक फिक्स लेट फीस लगाई जाती है। इसके नियम बहुत स्पष्ट हैं:</p>
      <ul>
        <li><strong>शून्य (Zero) जुर्माना:</strong> यदि आपकी कुल आय बेसिक छूट सीमा (पुरानी व्यवस्था में ₹2.5 लाख, नई व्यवस्था में ₹3 लाख) से कम है, तो कोई लेट फीस नहीं लगती है।</li>
        <li><strong>₹1,000 का जुर्माना:</strong> यदि आपकी कुल वार्षिक आय छूट सीमा से अधिक है लेकिन ₹5,00,000 से अधिक नहीं है, तो अधिकतम लेट फीस ₹1,000 तक सीमित है।</li>
        <li><strong>₹5,000 का जुर्माना:</strong> यदि आपकी कुल आय ₹5,00,000 से अधिक है और आप नियत तिथि के बाद रिटर्न फाइल करते हैं, तो ₹5,000 की लेट फीस देनी होगी।</li>
      </ul>
      
      <h3>धारा 234A, 234B, 234C के तहत ब्याज (Interest on Delay)</h3>
      <p>फिक्स फीस के अलावा, सरकार बकाया टैक्स राशि पर ब्याज भी वसूलती है। यहीं पर देरी सबसे महंगी साबित होती है:</p>
      <ul>
        <li><strong>धारा 234A (ITR फाइल करने में देरी):</strong> यदि आप पर टैक्स बकाया है और आप डेडलाइन के बाद ITR फाइल करते हैं, तो बकाया टैक्स राशि पर 1% प्रति माह (या महीने के हिस्से के लिए) साधारण ब्याज (Simple Interest) लिया जाता है।</li>
        <li><strong>धारा 234B (एडवांस टैक्स चुकाने में देरी):</strong> यदि आपकी साल की कुल टैक्स देनदारी ₹10,000 से अधिक है, तो आपको एडवांस टैक्स चुकाना होता है। यदि आप 31 मार्च तक अपने कर का कम से कम 90% एडवांस टैक्स के रूप में नहीं चुकाते हैं, तो कमी वाली राशि पर 1% प्रति माह का ब्याज लगाया जाता है।</li>
        <li><strong>धारा 234C (किश्तों में कमी):</strong> एडवांस टैक्स को तिमाही किश्तों (Quarterly Installments) में चुकाना होता है। इन किश्तों में चूक होने पर अलग से 1% प्रति माह का ब्याज लगता है।</li>
      </ul>
    </section>`
  },
  'tools/photo-resizer.html': {
    titleKey: 'seo_title_photo_resizer',
    descKey: 'seo_desc_photo_resizer',
    en: `Govt Job Photo Resizer Online | Resize to Passport Size & KB`,
    enDesc: `Resize your photo for UPSC, SSC, IBPS, and state government jobs. Compress image size to 20KB/50KB and set exact pixel dimensions for free without losing quality.`,
    contentEn: `<section class="seo-content" data-lang-show="en">
      <h2>The Ultimate Government Job Photo Resizer and Compressor</h2>
      <p>Applying for government jobs in India requires strict adherence to photo and signature guidelines. Whether it's the UPSC, SSC, IBPS (Banking), Railway Recruitment Board (RRB), or State PSCs, every notification comes with specific rules for uploading passport-size photographs. Failing to meet these dimensional (pixels/cm) and file size (KB) constraints is one of the most common reasons applications are rejected or errors occur during submission. Our Free Online Photo Resizer solves this problem instantly, entirely within your browser.</p>
      
      <h3>Standard Photo Requirements for Govt Exams</h3>
      <p>While requirements vary slightly across departments, the general standard for Indian government exams is:</p>
      <ul>
        <li><strong>Dimensions:</strong> Most commonly 3.5 cm (width) x 4.5 cm (height). In pixels, this usually translates to 132 x 170 pixels or 200 x 230 pixels, depending on the DPI requirements.</li>
        <li><strong>File Size:</strong> Usually restricted between 20 KB and 50 KB. Some strict portals require the photo to be exactly below 20 KB.</li>
        <li><strong>Format:</strong> JPEG or JPG format is universally accepted. PNGs are often rejected.</li>
        <li><strong>Visuals:</strong> A light or white background is preferred. The applicant's face should cover 70-80% of the photograph without any hats or dark glasses.</li>
      </ul>
      
      <h3>How to Use Our Tool for Maximum Quality</h3>
      <p>Our tool is designed with a privacy-first approach. Your images are never uploaded to any server; all cropping and compression happen locally on your device. To use it:</p>
      <ol>
        <li>Upload your raw, high-resolution photo taken from a smartphone or camera.</li>
        <li>Use the interactive bounding box to crop out unnecessary backgrounds, ensuring your face and shoulders are clearly visible.</li>
        <li>Set the target file size (e.g., 50 KB) in the compressor slider. Our algorithm dynamically adjusts the image quality to maintain sharpness while dropping the byte count.</li>
        <li>Download the final processed JPG image and upload it directly to your application portal!</li>
      </ol>
    </section>`,
    contentHi: `<section class="seo-content" data-lang-show="hi">
      <h2>सरकारी नौकरी के लिए बेस्ट फोटो रिसाइज़र और कंप्रेसर (Photo Resizer)</h2>
      <p>भारत में UPSC, SSC, बैंकिंग (IBPS), रेलवे (RRB) और राज्य स्तरीय सरकारी नौकरियों के लिए आवेदन करते समय फोटो और हस्ताक्षर (Signature) के सख्त नियम होते हैं। हर नोटिफिकेशन में पासपोर्ट साइज फोटो के पिक्सेल (Pixels) और फाइल साइज (KB) की लिमिट दी होती है। सही साइज न होने के कारण कई बार फॉर्म रिजेक्ट हो जाते हैं या अपलोड ही नहीं होते। हमारा यह मुफ़्त ऑनलाइन फोटो रिसाइज़र आपकी इस समस्या को कुछ ही सेकंड में हल कर देता है।</p>
      
      <h3>सरकारी परीक्षाओं के लिए फोटो के मानक नियम (Standard Rules)</h3>
      <p>हालांकि हर विभाग के नियम थोड़े अलग हो सकते हैं, लेकिन आमतौर पर ये शर्तें लागू होती हैं:</p>
      <ul>
        <li><strong>डाइमेंशन (Dimensions):</strong> आमतौर पर 3.5 सेमी (चौड़ाई) x 4.5 सेमी (ऊंचाई) मांगी जाती है। पिक्सेल में, यह 132 x 170 पिक्सेल या 200 x 230 पिक्सेल हो सकता है।</li>
        <li><strong>फाइल का आकार (File Size):</strong> फोटो का साइज अक्सर 20 KB से 50 KB के बीच सीमित होता है। कुछ फॉर्म में इसे 20 KB से भी कम रखना होता है।</li>
        <li><strong>फॉर्मेट (Format):</strong> हमेशा JPEG या JPG फॉर्मेट का उपयोग करें। PNG फाइलें अक्सर रिजेक्ट कर दी जाती हैं।</li>
        <li><strong>बैकग्राउंड (Background):</strong> हल्का या सफेद बैकग्राउंड सबसे अच्छा माना जाता है। फोटो में चेहरे को 70-80% हिस्सा कवर करना चाहिए और टोपी या काला चश्मा नहीं होना चाहिए।</li>
      </ul>
      
      <h3>क्वालिटी खोए बिना फोटो कैसे रिसाइज़ करें?</h3>
      <p>यह टूल आपकी प्राइवेसी (Privacy) का पूरा ध्यान रखता है। आपकी फोटो हमारे किसी भी सर्वर पर अपलोड नहीं होती है, सारा काम आपके मोबाइल या कंप्यूटर पर ही होता है। उपयोग का तरीका:</p>
      <ol>
        <li>अपने फोन या कैमरे से ली गई ओरिजिनल हाई-रिज़ॉल्यूशन फोटो अपलोड करें।</li>
        <li>अनावश्यक बैकग्राउंड को हटाने के लिए क्रॉप (Crop) टूल का उपयोग करें, ताकि आपका चेहरा साफ दिखे।</li>
        <li>कैलकुलेटर में अपनी जरूरत का साइज (जैसे 50 KB) सेट करें। हमारा सिस्टम आपकी फोटो की क्वालिटी खराब किए बिना उसे सटीक साइज में कंप्रेस कर देगा।</li>
        <li>नई JPG फाइल डाउनलोड करें और बेझिझक अपने ऑनलाइन फॉर्म में अपलोड करें!</li>
      </ol>
    </section>`
  },
  'tools/signature-resizer.html': {
    titleKey: 'seo_title_signature_resizer',
    descKey: 'seo_desc_signature_resizer',
    en: `Online Signature Resizer & Compressor for Govt Exams`,
    enDesc: `Crop and compress your signature image to exactly 10KB-20KB for online government exam applications (SSC, Railway, Banking) securely in your browser.`,
    contentEn: `<section class="seo-content" data-lang-show="en">
      <h2>Create Perfect Signature Images for Exam Applications</h2>
      <p>Just like photographs, digital signatures are a mandatory requirement for almost every online application in India, from government job forms (UPSC, SSC, PSU) to bank account openings and PAN card applications. Signature images have even stricter dimensional and size constraints than photographs. Our dedicated Signature Resizer tool ensures your signature is crisp, clear, and perfectly formatted to meet these rigorous standards.</p>
      
      <h3>Common Signature Constraints for Indian Portals</h3>
      <p>The rules for signature uploads are notoriously difficult to get right on the first try. Standard requirements include:</p>
      <ul>
        <li><strong>Strict File Size:</strong> Usually restricted to a very tight window of 10 KB to 20 KB. If your image is 21 KB or 9 KB, the portal will throw an error.</li>
        <li><strong>Dimensions:</strong> Signatures are landscape-oriented. The most common requirement is 4.0 cm (width) x 2.0 cm (height), which translates to approximately 140 x 60 pixels.</li>
        <li><strong>Ink & Paper:</strong> Candidates are strictly instructed to sign on white, unruled paper using a black or dark blue ink pen. Signatures in all CAPITAL letters are frequently rejected as they are not legally valid as signatures.</li>
      </ul>
      
      <h3>Why Image Compression Ruins Signatures (And How We Fix It)</h3>
      <p>When you compress a small signature image to under 20 KB using standard compression tools, the image often becomes blurry, pixelated, or suffers from severe compression artifacts (making the ink look smudged). This can lead to the cancellation of your candidature during the document verification stage.</p>
      <p>Our tool uses specialized contrast-enhancement and grayscale-optimized compression. When you process your signature through our app, it first heightens the contrast (making the ink darker and the paper whiter) before reducing the file size. This ensures that even at 15 KB, the strokes of your signature remain sharp and legible. Plus, since all processing happens in your browser, your sensitive biometric signature data is completely safe from theft or misuse.</p>
    </section>`,
    contentHi: `<section class="seo-content" data-lang-show="hi">
      <h2>सरकारी परीक्षाओं के फॉर्म के लिए ऑनलाइन सिग्नेचर (हस्ताक्षर) रिसाइज़र</h2>
      <p>फोटो की तरह ही, भारत में लगभग हर ऑनलाइन फॉर्म (UPSC, SSC, बैंकिंग, पैन कार्ड आदि) के लिए डिजिटल सिग्नेचर (हस्ताक्षर) अपलोड करना अनिवार्य है। सिग्नेचर के आकार और पिक्सेल की शर्तें फोटो से भी ज्यादा सख्त होती हैं। हमारा 'सिग्नेचर रिसाइज़र टूल' यह सुनिश्चित करता है कि आपका हस्ताक्षर बिल्कुल साफ दिखे और फॉर्म के नियमों के अनुसार एकदम सही साइज में हो।</p>
      
      <h3>हस्ताक्षर (Signature) अपलोड करने के नियम</h3>
      <p>पहली बार में सही साइज का सिग्नेचर अपलोड करना काफी मुश्किल होता है। इसके सामान्य नियम इस प्रकार हैं:</p>
      <ul>
        <li><strong>सख्त फाइल साइज:</strong> सिग्नेचर का साइज आमतौर पर 10 KB से 20 KB के बीच होना चाहिए। यदि आपकी फोटो 21 KB या 9 KB की भी हुई, तो फॉर्म उसे रिजेक्ट कर देगा।</li>
        <li><strong>डाइमेंशन (Dimensions):</strong> हस्ताक्षर चौड़ाई में ज्यादा होते हैं। इसके लिए आमतौर पर 4.0 सेमी (चौड़ाई) x 2.0 सेमी (ऊंचाई) का साइज मांगा जाता है, जो पिक्सेल में लगभग 140 x 60 पिक्सेल होता है।</li>
        <li><strong>स्याही और कागज:</strong> उम्मीदवारों को हमेशा बिना लाइन वाले (Unruled) सफेद कागज पर काले या नीले पेन से साइन करने का निर्देश दिया जाता है। याद रखें, हमेशा अंग्रेजी के बड़े अक्षरों (CAPITAL letters) में किया गया हस्ताक्षर कानूनी रूप से अमान्य होता है और फॉर्म रिजेक्ट हो सकता है।</li>
      </ul>
      
      <h3>सामान्य टूल से सिग्नेचर क्यों धुंधले हो जाते हैं?</h3>
      <p>जब आप किसी सामान्य टूल से अपने सिग्नेचर को 20 KB से कम में कंप्रेस (Compress) करते हैं, तो वह अक्सर धुंधला (Blurry) या पिक्सेलेटेड हो जाता है। इससे डॉक्यूमेंट वेरिफिकेशन (DV) के समय आपकी उम्मीदवारी रद्द हो सकती है।</p>
      <p>हमारा टूल विशेष रूप से कंट्रास्ट-एन्हांसमेंट (Contrast-Enhancement) तकनीक का उपयोग करता है। यह फाइल का साइज कम करने से पहले स्याही को गहरा और कागज को ज्यादा सफेद करता है। इससे आपका सिग्नेचर 15 KB में भी बिल्कुल साफ और शार्प (Sharp) दिखाई देता है। इसके अलावा, क्योंकि पूरी प्रक्रिया आपके ब्राउज़र में होती है, आपका संवेदनशील हस्ताक्षर कभी भी इंटरनेट पर लीक नहीं हो सकता।</p>
    </section>`
  }
};

for (const [file, block] of Object.entries(seoBlocks)) {
  const fullPath = path.resolve(file);
  if (!fs.existsSync(fullPath)) {
    console.error("Missing file:", fullPath);
    continue;
  }
  
  let html = fs.readFileSync(fullPath, 'utf8');
  
  // 1. Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title data-i18n="${block.titleKey}">${block.en}<\/title>`);
  
  // 2. Replace Meta Description
  if (/<meta\s+name=["']description["'].*?>/i.test(html)) {
    html = html.replace(/<meta\s+name=["']description["'].*?>/i, `<meta name="description" content="${block.enDesc}" data-i18n-content="${block.descKey}">`);
  } else {
    html = html.replace(/(<title.*?>.*?<\/title>)/i, `$1\n  <meta name="description" content="${block.enDesc}" data-i18n-content="${block.descKey}">`);
  }
  
  // 3. Append SEO Content
  const seoHtml = `\n\n<!-- SEO CONTENT BLOCK -->\n<div class="ss-container seo-container" style="margin-top: 40px; padding: 0 15px; max-width: 800px; margin-left: auto; margin-right: auto; line-height: 1.6; color: var(--color-text);">\n${block.contentEn}\n${block.contentHi}\n</div>\n\n`;
  
  if (html.includes('</main>')) {
    html = html.replace('</main>', seoHtml + '</main>');
  } else if (html.includes('<!-- container -->')) {
     html = html.replace('<!-- container -->', '<!-- container -->\\n' + seoHtml);
  } else if (html.includes('</section>')) {
     const parts = html.split('</section>');
     parts[parts.length - 2] += seoHtml;
     html = parts.join('</section>');
  } else {
    html = html.replace('</body>', seoHtml + '</body>');
  }

  fs.writeFileSync(fullPath, html, 'utf8');
  console.log('Updated SEO for:', file);
}
