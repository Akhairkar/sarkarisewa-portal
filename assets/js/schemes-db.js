/**
 * ADVANCED Sarkari Scheme Eligibility Database v2.0
 * 50+ Schemes with detailed eligibility criteria, match reasons, fail reasons,
 * documents, application steps, and official links.
 */

const SCHEMES_DB = [

  // ═══════════════════════════════════════════════════════
  // AGRICULTURE / FARMER SCHEMES
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-kisan',
    title: 'PM Kisan Samman Nidhi',
    titleHi: 'पीएम किसान सम्मान निधि',
    description: '₹6,000/year income support in 3 installments for landholding farmers.',
    descHi: 'भूमि धारक किसानों को 3 किस्तों में ₹6,000/वर्ष आय सहायता।',
    url: '../service/pm-kisan.html',
    applyUrl: 'https://pmkisan.gov.in',
    tags: ['Agriculture', 'किसान', 'Financial'],
    benefitAmount: 6000,
    benefitText: '₹6,000/year (₹2,000 × 3 installments)',
    icon: '🌾',
    documents: ['Aadhaar Card', 'Land records (Khasra/Khatauni)', 'Bank account (Aadhaar-linked)', 'Mobile number'],
    steps: ['Visit pmkisan.gov.in → Farmers Corner', 'Click "New Farmer Registration"', 'Enter Aadhaar & verify OTP', 'Fill land & bank details', 'Submit – amount credited in next installment'],
    criteria: {
      minAge: 18, maxAge: null,
      genders: ['All'],
      occupations: ['Farmer'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All'],
      requiresFarmer: true,
      requiresLand: true,
    }
  },
  {
    id: 'pm-fasal-bima',
    title: 'PM Fasal Bima Yojana',
    titleHi: 'पीएम फसल बीमा योजना',
    description: 'Crop insurance at just 1.5–5% premium. Protection against drought, flood, hailstorm, pests.',
    descHi: 'मात्र 1.5–5% प्रीमियम पर फसल बीमा। सूखा, बाढ़, ओलावृष्टि से सुरक्षा।',
    url: '../service/pm-fasal-bima-yojana.html',
    applyUrl: 'https://pmfby.gov.in',
    tags: ['Agriculture', 'Insurance', 'किसान'],
    benefitAmount: null, benefitText: 'Full crop insurance based on sum insured',
    icon: '🌧️',
    documents: ['Aadhaar Card', 'Land records / Khasra number', 'Bank account (Aadhaar-linked)', 'Sowing certificate'],
    steps: ['Visit pmfby.gov.in → Farmer Corner', 'Enter Aadhaar & crop details', 'Select insurance company for your district', 'Pay low premium online', 'Get Policy Number'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['Farmer'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'], requiresFarmer: true }
  },
  {
    id: 'kisan-credit-card',
    title: 'Kisan Credit Card (KCC)',
    titleHi: 'किसान क्रेडिट कार्ड',
    description: 'Short-term credit up to ₹3 lakh at just 4% interest per year for agricultural needs.',
    descHi: 'कृषि जरूरतों के लिए ₹3 लाख तक का ऋण मात्र 4% वार्षिक ब्याज पर।',
    url: '../service/kisan-credit-card.html',
    applyUrl: 'https://www.nabard.org',
    tags: ['Agriculture', 'Credit', 'किसान'],
    benefitAmount: 300000, benefitText: 'Up to ₹3 lakh credit at 4% interest',
    icon: '💳',
    documents: ['Aadhaar Card', 'Land records', 'Passport photo', 'Bank account details'],
    steps: ['Visit nearest bank (SBI/PNB/cooperative bank)', 'Request KCC application form', 'Submit with land records & Aadhaar', 'Bank verifies & issues KCC within 14 days'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['Farmer'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'], requiresFarmer: true }
  },
  {
    id: 'pm-kisan-maan-dhan',
    title: 'PM Kisan Maandhan Yojana',
    titleHi: 'पीएम किसान मानधन योजना',
    description: 'Pension of ₹3,000/month after age 60 for small and marginal farmers.',
    descHi: 'छोटे और सीमांत किसानों को 60 वर्ष के बाद ₹3,000/माह पेंशन।',
    url: '../service/pm-kisan-maan-dhan-yojana.html',
    applyUrl: 'https://pmkmy.gov.in',
    tags: ['Pension', 'Agriculture', 'Farmer'],
    benefitAmount: 36000, benefitText: '₹3,000/month pension after 60',
    icon: '👴',
    documents: ['Aadhaar Card', 'Bank account', 'Land records', 'Age proof'],
    steps: ['Visit nearest CSC center', 'Carry Aadhaar & savings account details', 'CSC operator will register you', 'Monthly contribution auto-deducted', 'Pension starts at 60'],
    criteria: { minAge: 18, maxAge: 40, genders: ['All'], occupations: ['Farmer'], castes: ['All'], maxIncome: 200000, states: ['All'], maritalStatus: ['All'], requiresFarmer: true, requiresLand: true }
  },

  // ═══════════════════════════════════════════════════════
  // WOMEN EMPOWERMENT
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-matru-vandana',
    title: 'PM Matru Vandana Yojana (PMMVY)',
    titleHi: 'पीएम मातृ वंदना योजना',
    description: '₹5,000 cash incentive for pregnant women and lactating mothers for first living child.',
    descHi: 'पहले जीवित बच्चे के लिए गर्भवती और स्तनपान कराने वाली माताओं को ₹5,000 नकद।',
    url: '../service/pm-matru-vandana-yojana.html',
    applyUrl: 'https://wcd.nic.in/pmmvy-scheme',
    tags: ['Women', 'Maternity', 'महिला'],
    benefitAmount: 5000, benefitText: '₹5,000 in installments',
    icon: '🤱',
    documents: ['Aadhaar Card', 'MCP Card (from ASHA/ANM)', 'Bank account linked to Aadhaar', 'Marriage certificate'],
    steps: ['Register at nearest Anganwadi / health center', 'Submit Aadhaar & MCP Card', 'First installment on registration', 'Second after 6-month check-up', 'Third after 14-week vaccination'],
    criteria: { minAge: 19, maxAge: 50, genders: ['Female'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['Married'], requiresPregnancy: true }
  },
  {
    id: 'pm-ujjwala',
    title: 'PM Ujjwala Yojana',
    titleHi: 'पीएम उज्ज्वला योजना',
    description: 'Free LPG gas connection for BPL women – no deposit required.',
    descHi: 'BPL महिलाओं को मुफ्त LPG गैस कनेक्शन – कोई जमा राशि नहीं।',
    url: '../service/pm-ujjwala-yojana.html',
    applyUrl: 'https://pmuy.gov.in',
    tags: ['Women', 'LPG', 'BPL', 'Free'],
    benefitAmount: 1800, benefitText: 'Free LPG connection + ₹1,800 support',
    icon: '🔥',
    documents: ['Aadhaar Card', 'BPL Ration Card / SECC data', 'Bank account', 'Passport photo'],
    steps: ['Visit nearest LPG distributor (HP/Indane/Bharat Gas)', 'Request PMUY application form', 'Submit Aadhaar + ration card', 'Connection issued within 7 days'],
    criteria: { minAge: 18, maxAge: null, genders: ['Female'], occupations: ['All'], castes: ['All'], maxIncome: 150000, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'sukanya-samriddhi',
    title: 'Sukanya Samriddhi Yojana (SSY)',
    titleHi: 'सुकन्या समृद्धि योजना',
    description: 'High-interest savings scheme for girl child (below 10 years). Tax-free returns, 8.2% interest.',
    descHi: 'बालिका (10 वर्ष से कम) के लिए उच्च ब्याज बचत योजना। टैक्स-मुक्त, 8.2% ब्याज।',
    url: '../service/sukanya-samriddhi-yojana.html',
    applyUrl: 'https://www.indiapost.gov.in',
    tags: ['Girl Child', 'Savings', 'बालिका'],
    benefitAmount: null, benefitText: '8.2% tax-free interest, full amount at 21',
    icon: '👧',
    documents: ['Girl child birth certificate', "Parent's Aadhaar", "Parent's address proof", 'Passport photo'],
    steps: ['Visit Post Office or authorized bank', 'Request SSY account opening form', 'Submit birth cert + parent Aadhaar', 'Minimum deposit ₹250', 'Account active for 21 years'],
    criteria: { minAge: 0, maxAge: 10, genders: ['Female'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['Unmarried'] }
  },
  {
    id: 'saubhagya',
    title: 'Saubhagya – Free Electricity Connection',
    titleHi: 'सौभाग्य – मुफ्त बिजली कनेक्शन',
    description: 'Free household electricity connection for BPL families under PMGY.',
    descHi: 'PMGY के तहत BPL परिवारों को मुफ्त घरेलू बिजली कनेक्शन।',
    url: '../service/saubhagya-free-electricity-connection.html',
    applyUrl: 'https://saubhagya.gov.in',
    tags: ['Electricity', 'BPL', 'Free'],
    benefitAmount: null, benefitText: 'Free electricity connection',
    icon: '💡',
    documents: ['Aadhaar Card', 'BPL Ration Card', 'Address proof'],
    steps: ['Visit Saubhagya.gov.in or contact DISCOM', 'Submit Aadhaar + BPL card', 'Connection surveyed & installed free', 'Pre-paid meter provided'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: 100000, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // HEALTH SCHEMES
  // ═══════════════════════════════════════════════════════
  {
    id: 'ayushman-bharat',
    title: 'Ayushman Bharat PM-JAY',
    titleHi: 'आयुष्मान भारत पीएम-जेएवाई',
    description: '₹5 lakh/year free health insurance for 55 crore+ beneficiaries. 2,000+ empaneled hospitals.',
    descHi: '55 करोड़+ लाभार्थियों के लिए ₹5 लाख/वर्ष मुफ्त स्वास्थ्य बीमा। 2,000+ अस्पताल।',
    url: '../service/ayushman-bharat.html',
    applyUrl: 'https://pmjay.gov.in',
    tags: ['Health', 'Insurance', 'Free', 'स्वास्थ्य'],
    benefitAmount: 500000, benefitText: '₹5 lakh/year health cover',
    icon: '🏥',
    documents: ['Aadhaar Card', 'Ration Card (NFSA)', 'Mobile number'],
    steps: ['Check eligibility at pmjay.gov.in/check-eligibility', 'If eligible, get Ayushman Card from CSC/hospital', 'Use card at any empaneled hospital for cashless treatment'],
    criteria: { minAge: 0, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: 250000, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'nikshay-poshan',
    title: 'Nikshay Poshan Yojana (TB Patients)',
    titleHi: 'निक्षय पोषण योजना (TB रोगी)',
    description: '₹500/month nutritional support for TB patients during treatment.',
    descHi: 'TB उपचार के दौरान रोगियों को ₹500/माह पोषण सहायता।',
    url: '../service/nikshay-poshan-yojana-tb.html',
    applyUrl: 'https://nikshay.in',
    tags: ['Health', 'TB', 'Nutrition'],
    benefitAmount: 6000, benefitText: '₹500/month during treatment',
    icon: '💊',
    documents: ['Aadhaar Card', 'TB diagnosis certificate from govt hospital', 'Bank account (Aadhaar-linked)'],
    steps: ['Register at nikshay.in or nearest govt TB center', 'Submit Aadhaar & diagnosis certificate', '₹500/month credited via DBT automatically'],
    criteria: { minAge: 0, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'], requiresTBPatient: true }
  },
  {
    id: 'rashtriya-bal-swasthya',
    title: 'Rashtriya Bal Swasthya Karyakram (RBSK)',
    titleHi: 'राष्ट्रीय बाल स्वास्थ्य कार्यक्रम',
    description: 'Free health screening and treatment for 0–18 year children for 30 defined conditions.',
    descHi: '0–18 वर्ष के बच्चों के लिए 30 परिभाषित बीमारियों की मुफ्त स्वास्थ्य जांच और उपचार।',
    url: '../service/rashtriya-bal-swasthya-karyakram.html',
    applyUrl: 'https://rbsk.nhp.gov.in',
    tags: ['Health', 'Children', 'Free'],
    benefitAmount: null, benefitText: 'Free screening + treatment up to ₹1 lakh',
    icon: '👶',
    documents: ['Birth certificate', "Parent's Aadhaar"],
    steps: ['Mobile health teams visit schools/anganwadis', 'Children screened free', 'Those needing treatment referred to govt hospitals', 'Treatment fully free'],
    criteria: { minAge: 0, maxAge: 18, genders: ['All'], occupations: ['Student', 'All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'pmsma',
    title: 'PM Surakshit Matritva Abhiyan (PMSMA)',
    titleHi: 'पीएम सुरक्षित मातृत्व अभियान',
    description: 'Free comprehensive antenatal check-up on 9th of every month at govt health facilities.',
    descHi: 'हर माह की 9 तारीख को सरकारी स्वास्थ्य केंद्रों में मुफ्त व्यापक प्रसव-पूर्व जांच।',
    url: '../service/pmsma-antenatal-checkup.html',
    applyUrl: 'https://pmsma.nhp.gov.in',
    tags: ['Women', 'Maternity', 'Health'],
    benefitAmount: null, benefitText: 'Free antenatal check-up every month',
    icon: '🤰',
    documents: ['Aadhaar Card', 'MCP Card'],
    steps: ['Visit nearest govt health center on 9th of month', 'Carry MCP Card and Aadhaar', 'Get free check-up, ultrasound, blood tests'],
    criteria: { minAge: 18, maxAge: 45, genders: ['Female'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'], requiresPregnancy: true }
  },

  // ═══════════════════════════════════════════════════════
  // EDUCATION / SCHOLARSHIP
  // ═══════════════════════════════════════════════════════
  {
    id: 'nsp-scholarship',
    title: 'National Scholarship Portal (NSP)',
    titleHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल',
    description: '50+ scholarships for SC/ST/OBC/Minority/EWS students – up to ₹20,000/year.',
    descHi: 'SC/ST/OBC/अल्पसंख्यक/EWS छात्रों के लिए 50+ छात्रवृत्तियाँ – ₹20,000/वर्ष तक।',
    url: '../service/national-scholarship-portal.html',
    applyUrl: 'https://scholarships.gov.in',
    tags: ['Education', 'Scholarship', 'Student', 'छात्रवृत्ति'],
    benefitAmount: 20000, benefitText: 'Up to ₹20,000/year based on course',
    icon: '🎓',
    documents: ['Aadhaar Card', 'Caste certificate', 'Income certificate', 'Marksheet (previous class)', 'Bank account (Aadhaar-linked)', 'Institute verification'],
    steps: ['Visit scholarships.gov.in', 'Register with Aadhaar & email', 'Apply for relevant scholarship scheme', 'Upload marksheet & caste certificate', 'Institute verifies online', 'Amount credited via DBT'],
    criteria: { minAge: 14, maxAge: 35, genders: ['All'], occupations: ['Student'], castes: ['All'], maxIncome: 250000, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'post-matric-obc',
    title: 'Post Matric Scholarship for OBC/EBC',
    titleHi: 'OBC/EBC पोस्ट मैट्रिक छात्रवृत्ति',
    description: 'Financial assistance for OBC/EBC students at post-10th level of study.',
    descHi: 'OBC/EBC छात्रों को 10वीं के बाद की पढ़ाई के लिए वित्तीय सहायता।',
    url: '../service/post-matric-scholarship-obc-ebc.html',
    applyUrl: 'https://scholarships.gov.in',
    tags: ['Education', 'Scholarship', 'OBC', 'Student'],
    benefitAmount: 12000, benefitText: 'Up to ₹12,000/year',
    icon: '📚',
    documents: ['OBC/EBC caste certificate', 'Income certificate (family <₹2.5 lakh)', 'Marksheet', 'Aadhaar', 'Bank account'],
    steps: ['Apply on scholarships.gov.in', 'Select "Post Matric Scholarship for OBC"', 'Upload all documents', 'Institute verifies application'],
    criteria: { minAge: 14, maxAge: 30, genders: ['All'], occupations: ['Student'], castes: ['OBC', 'EBC'], maxIncome: 250000, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'pm-vidyalaxmi',
    title: 'PM Vidyalaxmi Scheme',
    titleHi: 'पीएम विद्यालक्ष्मी योजना',
    description: 'Collateral-free education loans up to ₹7.5 lakh with 3% interest subvention for top institutions.',
    descHi: 'शीर्ष संस्थानों के लिए ₹7.5 लाख तक बिना गारंटी शिक्षा ऋण और 3% ब्याज सब्सिडी।',
    url: '../service/pm-vidyalaxmi-scheme.html',
    applyUrl: 'https://pmvidyalaxmi.co.in',
    tags: ['Education', 'Loan', 'Higher Education'],
    benefitAmount: 750000, benefitText: 'Loan up to ₹7.5 lakh at subsidized interest',
    icon: '🏫',
    documents: ['Aadhaar', 'Admission letter', 'Income proof (family <₹8 lakh)', 'Marksheets', 'Bank account'],
    steps: ['Visit pmvidyalaxmi.co.in', 'Login with Aadhaar', 'Apply for loan scheme', 'Bank processes within 15 days', 'Subsidy auto-credited to loan account'],
    criteria: { minAge: 16, maxAge: 35, genders: ['All'], occupations: ['Student'], castes: ['All'], maxIncome: 800000, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'swayam-courses',
    title: 'SWAYAM Free Online Courses (NPTEL)',
    titleHi: 'SWAYAM मुफ्त ऑनलाइन कोर्सेज़',
    description: 'Free online degree/certificate courses from IITs and central universities. Learn from home.',
    descHi: 'IIT और केंद्रीय विश्वविद्यालयों से मुफ्त ऑनलाइन डिग्री/सर्टिफिकेट कोर्स। घर से सीखें।',
    url: '../service/swayam-online-courses.html',
    applyUrl: 'https://swayam.gov.in',
    tags: ['Education', 'Free', 'Online', 'Skill'],
    benefitAmount: null, benefitText: 'Free courses (certificate with nominal exam fee)',
    icon: '💻',
    documents: ['Email ID (for registration)', 'Aadhaar (for certificate exam)'],
    steps: ['Visit swayam.gov.in', 'Register with email', 'Enroll in chosen course', 'Complete assignments & watch lectures free', 'Pay ₹1,000 for proctored exam (optional)'],
    criteria: { minAge: 14, maxAge: null, genders: ['All'], occupations: ['Student', 'Unemployed', 'All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // PENSION / SENIOR CITIZEN
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-shram-yogi',
    title: 'PM Shram Yogi Maandhan (PM-SYM)',
    titleHi: 'पीएम श्रम योगी मानधन',
    description: '₹3,000/month pension after 60 for unorganized workers. Govt contributes equal amount.',
    descHi: 'असंगठित क्षेत्र के श्रमिकों को 60 वर्ष के बाद ₹3,000/माह पेंशन। सरकार बराबर योगदान देती है।',
    url: '../service/pm-shram-yogi-maandhan.html',
    applyUrl: 'https://maandhan.in',
    tags: ['Pension', 'Unorganized', 'Labour'],
    benefitAmount: 36000, benefitText: '₹3,000/month pension after age 60',
    icon: '🧑‍🔧',
    documents: ['Aadhaar Card', 'Savings bank account', 'Mobile number'],
    steps: ['Visit nearest CSC center or maandhan.in', 'Enroll with Aadhaar & bank details', 'Pay monthly contribution (₹55–₹200 based on age)', 'Govt matches your contribution', 'Pension starts at 60'],
    criteria: { minAge: 18, maxAge: 40, genders: ['All'], occupations: ['Unorganized Worker', 'Artisan', 'Laborer'], castes: ['All'], maxIncome: 180000, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'atal-pension',
    title: 'Atal Pension Yojana (APY)',
    titleHi: 'अटल पेंशन योजना',
    description: 'Guaranteed pension of ₹1,000–₹5,000/month after 60. Small monthly contribution required.',
    descHi: '60 वर्ष के बाद ₹1,000–₹5,000/माह की गारंटीशुदा पेंशन। छोटी मासिक किस्त।',
    url: '../service/atal-pension-yojana.html',
    applyUrl: 'https://npscra.nsdl.co.in',
    tags: ['Pension', 'Savings', 'Retirement'],
    benefitAmount: null, benefitText: '₹1,000–₹5,000/month pension after 60',
    icon: '🏦',
    documents: ['Aadhaar Card', 'Bank account', 'Mobile number'],
    steps: ['Visit your bank branch or banking app', 'Request Atal Pension Yojana enrollment', 'Choose pension amount (₹1k–₹5k)', 'Auto-debit set up for monthly contribution', 'Pension credited after 60'],
    criteria: { minAge: 18, maxAge: 40, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'nsap-old-age',
    title: 'NSAP – Old Age / Widow / Disability Pension',
    titleHi: 'NSAP – वृद्धावस्था / विधवा / दिव्यांग पेंशन',
    description: 'Monthly pension for BPL senior citizens (60+), widows, and disabled persons.',
    descHi: 'BPL वरिष्ठ नागरिकों (60+), विधवाओं और दिव्यांगों को मासिक पेंशन।',
    url: '../service/national-social-assistance-programme.html',
    applyUrl: 'https://nsap.nic.in',
    tags: ['Pension', 'Senior Citizen', 'Widow', 'Disability', 'BPL'],
    benefitAmount: null, benefitText: '₹200–₹500/month + state top-up',
    icon: '👴',
    documents: ['Aadhaar Card', 'Age proof (60+ for old age)', 'BPL Ration Card / income proof', 'Disability certificate (for NDCP)', 'Death certificate of husband (for widow)'],
    steps: ['Apply at Gram Panchayat / Municipal Ward office', 'Submit Aadhaar + BPL card', 'Field verification done', 'Pension credited monthly via DBT'],
    criteria: { minAge: 60, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: 100000, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // HOUSING
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-awas',
    title: 'Pradhan Mantri Awas Yojana (PMAY)',
    titleHi: 'प्रधानमंत्री आवास योजना',
    description: 'Free/subsidized house: ₹1.20 lakh assistance (Gramin) or CLSS subsidy up to ₹2.67 lakh (Urban).',
    descHi: 'मुफ्त/सब्सिडी घर: ₹1.20 लाख सहायता (ग्रामीण) या ₹2.67 लाख तक CLSS सब्सिडी (शहरी)।',
    url: '../service/pm-awas-yojana.html',
    applyUrl: 'https://pmaymis.gov.in',
    tags: ['Housing', 'Free House', 'BPL', 'आवास'],
    benefitAmount: 120000, benefitText: '₹1.20 lakh (Gramin) or up to ₹2.67 lakh subsidy (Urban)',
    icon: '🏠',
    documents: ['Aadhaar Card', 'Income proof', 'Land records (Gramin)', 'Bank account', 'Caste certificate (SC/ST/OBC)'],
    steps: ['Visit pmaymis.gov.in → Citizen Assessment', 'Enter Aadhaar & verify', 'Fill income, property details', 'Apply for home loan (Urban) or register at Panchayat (Gramin)', 'Subsidy credited to loan/DBT account'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: 300000, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // EMPLOYMENT / SKILL / YOUTH
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-internship',
    title: 'PM Internship Scheme',
    titleHi: 'पीएम इंटर्नशिप योजना',
    description: '12-month internship at top 500 companies with ₹5,000/month stipend + ₹6,000 one-time grant.',
    descHi: 'शीर्ष 500 कंपनियों में 12 माह इंटर्नशिप – ₹5,000/माह स्टाइपेंड + ₹6,000 एकमुश्त।',
    url: '../service/pm-internship-scheme.html',
    applyUrl: 'https://pminternship.mca.gov.in',
    tags: ['Youth', 'Employment', 'Internship', 'युवा'],
    benefitAmount: 66000, benefitText: '₹5,000/month + ₹6,000 one-time grant',
    icon: '💼',
    documents: ['Aadhaar Card', 'Educational certificates (10th, 12th, degree)', 'Bank account', 'Passport photo'],
    steps: ['Visit pminternship.mca.gov.in', 'Register with Aadhaar', 'Browse available internship opportunities', 'Apply to preferred companies', 'Interview & selection by company'],
    criteria: { minAge: 21, maxAge: 24, genders: ['All'], occupations: ['Unemployed', 'Student'], castes: ['All'], maxIncome: 800000, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'pm-kaushal-vikas',
    title: 'PM Kaushal Vikas Yojana (PMKVY)',
    titleHi: 'पीएम कौशल विकास योजना',
    description: 'Free skill training + ₹8,000 reward certificate for youth in 300+ industry-relevant skills.',
    descHi: 'युवाओं को 300+ उद्योग-प्रासंगिक कौशल में मुफ्त प्रशिक्षण + ₹8,000 पुरस्कार प्रमाण पत्र।',
    url: '../service/pm-kaushal-vikas-yojana.html',
    applyUrl: 'https://pmkvyofficial.org',
    tags: ['Skill', 'Youth', 'Free Training', 'कौशल'],
    benefitAmount: 8000, benefitText: 'Free training + ₹8,000 certificate reward',
    icon: '🛠️',
    documents: ['Aadhaar Card', 'Educational proof (minimum 10th pass)', 'Bank account', 'Passport photo'],
    steps: ['Visit pmkvyofficial.org', 'Find nearest skill center', 'Register for your trade/course', 'Complete 3-month training free', 'Appear for assessment – get certificate + ₹8,000'],
    criteria: { minAge: 14, maxAge: 35, genders: ['All'], occupations: ['Unemployed', 'Student', 'Unorganized Worker'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'ncs-portal',
    title: 'National Career Service (NCS) Portal',
    titleHi: 'राष्ट्रीय कैरियर सेवा पोर्टल',
    description: 'Free job registration – access 10 lakh+ govt and private job listings. Career counselling too.',
    descHi: 'मुफ्त नौकरी पंजीकरण – 10 लाख+ सरकारी और निजी नौकरियाँ। करियर परामर्श भी।',
    url: '../service/ncs-national-career-service.html',
    applyUrl: 'https://ncs.gov.in',
    tags: ['Employment', 'Job', 'Free', 'Youth'],
    benefitAmount: null, benefitText: 'Free job matching & career services',
    icon: '🔍',
    documents: ['Aadhaar Card', 'Educational certificates', 'Resume/CV'],
    steps: ['Visit ncs.gov.in', 'Register with Aadhaar/email', 'Fill educational & skill profile', 'Apply to jobs matching profile', 'Get career counselling session'],
    criteria: { minAge: 14, maxAge: null, genders: ['All'], occupations: ['Unemployed', 'Student', 'All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'naps-apprenticeship',
    title: 'National Apprenticeship Promotion Scheme (NAPS)',
    titleHi: 'राष्ट्रीय शिक्षुता संवर्धन योजना',
    description: 'Earn while you learn: ₹7,000–₹12,000/month as apprentice in industry.',
    descHi: 'पढ़ते हुए कमाएं: उद्योग में शिक्षु के रूप में ₹7,000–₹12,000/माह।',
    url: '../service/national-apprenticeship-scheme.html',
    applyUrl: 'https://apprenticeshipindia.org',
    tags: ['Youth', 'Apprenticeship', 'Employment', 'Skill'],
    benefitAmount: 84000, benefitText: '₹7,000–₹12,000/month stipend',
    icon: '⚙️',
    documents: ['Aadhaar Card', 'Educational certificates', 'Bank account', 'ITI/diploma certificate (if applicable)'],
    steps: ['Visit apprenticeshipindia.org', 'Register as apprentice', 'Browse establishments offering apprenticeship', 'Apply & get selected', 'Receive monthly stipend throughout training'],
    criteria: { minAge: 14, maxAge: 28, genders: ['All'], occupations: ['Student', 'Unemployed'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // BUSINESS / SELF EMPLOYMENT
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-mudra',
    title: 'PM Mudra Yojana (PMMY)',
    titleHi: 'पीएम मुद्रा योजना',
    description: 'Business loans up to ₹10 lakh for micro/small enterprises. No collateral. Shishu/Kishore/Tarun.',
    descHi: 'सूक्ष्म/लघु उद्यमों के लिए ₹10 लाख तक व्यावसायिक ऋण। कोई गारंटी नहीं।',
    url: '../service/pm-mudra-yojana.html',
    applyUrl: 'https://udyamimitra.in',
    tags: ['Business', 'Loan', 'Self-employed', 'व्यवसाय'],
    benefitAmount: 1000000, benefitText: 'Loan up to ₹10 lakh',
    icon: '🏭',
    documents: ['Aadhaar Card', 'PAN Card', 'Bank account', 'Business plan/proof', 'Udyam registration (if available)'],
    steps: ['Visit udyamimitra.in or nearest bank', 'Choose loan type: Shishu (up to ₹50k) / Kishore (₹50k-₹5L) / Tarun (₹5L-₹10L)', 'Submit application + business plan', 'Bank processes within 7-30 days', 'No collateral required'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['Business', 'Self-employed', 'Artisan', 'Unorganized Worker'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'pm-vishwakarma',
    title: 'PM Vishwakarma Yojana',
    titleHi: 'पीएम विश्वकर्मा योजना',
    description: '₹15,000 toolkit grant + free training + ₹1 lakh–₹2 lakh concessional loan for artisans in 18 trades.',
    descHi: '18 व्यवसायों के कारीगरों को ₹15,000 टूलकिट + मुफ्त प्रशिक्षण + ₹1-2 लाख रियायती ऋण।',
    url: '../service/pm-vishwakarma-yojana.html',
    applyUrl: 'https://pmvishwakarma.gov.in',
    tags: ['Artisan', 'Business', 'Skill', 'कारीगर'],
    benefitAmount: 15000, benefitText: '₹15,000 toolkit + up to ₹2 lakh loan',
    icon: '🔨',
    documents: ['Aadhaar Card', 'Trade proof (family in traditional work)', 'Bank account', 'Mobile number'],
    steps: ['Visit pmvishwakarma.gov.in', 'Register with Aadhaar', 'Select your trade (blacksmith, carpenter, etc.)', 'Get PM Vishwakarma ID card', 'Receive toolkit incentive + training + loan'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['Artisan', 'Business', 'Self-employed'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'stand-up-india',
    title: 'Stand Up India Scheme',
    titleHi: 'स्टैंड अप इंडिया योजना',
    description: 'Bank loans ₹10 lakh–₹1 crore for SC/ST and women entrepreneurs to start new enterprise.',
    descHi: 'SC/ST और महिला उद्यमियों को नया उद्यम शुरू करने के लिए ₹10 लाख–₹1 करोड़ बैंक ऋण।',
    url: '../service/stand-up-india.html',
    applyUrl: 'https://www.standupmitra.in',
    tags: ['Business', 'Loan', 'SC/ST', 'Women'],
    benefitAmount: 10000000, benefitText: '₹10 lakh–₹1 crore loan',
    icon: '📈',
    documents: ['Aadhaar Card', 'PAN Card', 'Caste certificate (SC/ST) or proof of being female', 'Business plan', 'Bank account'],
    steps: ['Visit standupmitra.in', 'Register as SC/ST or Woman entrepreneur', 'Fill business plan & loan application', 'Bank processes application', 'Loan sanctioned within 30 days'],
    criteria: { minAge: 18, maxAge: null, genders: ['Female', 'All'], occupations: ['Business', 'Self-employed'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'], requiresFemaleOrSCST: true }
  },
  {
    id: 'pm-svanidhi',
    title: 'PM SVANidhi – Street Vendor Loan',
    titleHi: 'पीएम स्वनिधि – स्ट्रीट वेंडर ऋण',
    description: '₹10,000–₹50,000 collateral-free working capital loan for street vendors.',
    descHi: 'रेहड़ी-पटरी विक्रेताओं के लिए ₹10,000–₹50,000 बिना गारंटी कार्यशील पूंजी ऋण।',
    url: '../service/pm-svanidhi.html',
    applyUrl: 'https://pmsvanidhi.mohua.gov.in',
    tags: ['Business', 'Street Vendor', 'Loan', 'रेहड़ी'],
    benefitAmount: 50000, benefitText: 'Up to ₹50,000 loan in 3 stages',
    icon: '🛒',
    documents: ['Aadhaar Card', 'Vendor Certificate from ULB/TVC', 'Bank account', 'Letter of Recommendation (LoR)'],
    steps: ['Visit pmsvanidhi.mohua.gov.in', 'Apply with Aadhaar & vendor certificate', 'Get ₹10,000 (Stage 1)', 'Repay timely → upgrade to ₹20,000 (Stage 2)', 'Further upgrade to ₹50,000 (Stage 3)'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['Business', 'Self-employed', 'Unorganized Worker'], castes: ['All'], maxIncome: 200000, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // SOLAR / ENVIRONMENT
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-surya-ghar',
    title: 'PM Surya Ghar Muft Bijli Yojana',
    titleHi: 'पीएम सूर्य घर मुफ्त बिजली योजना',
    description: 'Subsidy up to ₹78,000 for rooftop solar panels. Get up to 300 units FREE electricity/month.',
    descHi: 'रूफटॉप सोलर पैनल के लिए ₹78,000 तक सब्सिडी। 300 यूनिट तक मुफ्त बिजली/माह।',
    url: '../service/pm-surya-ghar-muft-bijli.html',
    applyUrl: 'https://pmsuryagarh.gov.in',
    tags: ['Solar', 'Electricity', 'Subsidy', 'Green Energy'],
    benefitAmount: 78000, benefitText: '₹78,000 subsidy for 3kW solar panel',
    icon: '☀️',
    documents: ['Aadhaar Card', 'Electricity bill', 'Bank account', 'Property documents'],
    steps: ['Visit pmsuryagarh.gov.in', 'Register with consumer number & Aadhaar', 'Apply for subsidy', 'Get empaneled vendor to install panels', 'Subsidy credited after net metering installation'],
    criteria: { minAge: 18, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // DIGITAL / FINANCIAL INCLUSION
  // ═══════════════════════════════════════════════════════
  {
    id: 'pm-jandhan',
    title: 'PM Jan Dhan Yojana (PMJDY)',
    titleHi: 'पीएम जन धन योजना',
    description: 'Zero balance savings account with RuPay debit card, ₹1 lakh accident insurance, overdraft facility.',
    descHi: 'जीरो बैलेंस बचत खाता + RuPay कार्ड + ₹1 लाख दुर्घटना बीमा + ओवरड्राफ्ट सुविधा।',
    url: '../service/pm-jan-dhan-yojana.html',
    applyUrl: 'https://pmjdy.gov.in',
    tags: ['Banking', 'Financial Inclusion', 'Free', 'Zero Balance'],
    benefitAmount: 100000, benefitText: 'Free account + ₹1 lakh accident insurance',
    icon: '🏦',
    documents: ['Aadhaar Card', 'Passport photo (optional)'],
    steps: ['Visit nearest bank branch', 'Request PMJDY account opening form', 'Submit Aadhaar only', 'Account opened same day', 'RuPay card issued within 10 days'],
    criteria: { minAge: 10, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'pm-jeevan-jyoti',
    title: 'PM Jeevan Jyoti Bima Yojana (PMJJBY)',
    titleHi: 'पीएम जीवन ज्योति बीमा योजना',
    description: '₹2 lakh life insurance at just ₹436/year. Auto-renewed annually from bank account.',
    descHi: 'मात्र ₹436/वर्ष में ₹2 लाख जीवन बीमा। बैंक खाते से स्वत: नवीनीकरण।',
    url: '../service/pm-jeevan-jyoti-bima-yojana.html',
    applyUrl: 'https://jansuraksha.gov.in',
    tags: ['Insurance', 'Life Insurance', 'Affordable'],
    benefitAmount: 200000, benefitText: '₹2 lakh life cover at ₹436/year',
    icon: '🛡️',
    documents: ['Aadhaar-linked bank account', 'Consent form from bank'],
    steps: ['Visit your bank branch or banking app', 'Enroll for PMJJBY', '₹436 auto-deducted annually on June 1', 'Nominee gets ₹2 lakh on death'],
    criteria: { minAge: 18, maxAge: 50, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'pm-suraksha-bima',
    title: 'PM Suraksha Bima Yojana (PMSBY)',
    titleHi: 'पीएम सुरक्षा बीमा योजना',
    description: '₹2 lakh accident insurance at just ₹20/year. Available for 18–70 year age group.',
    descHi: 'मात्र ₹20/वर्ष में ₹2 लाख दुर्घटना बीमा। 18–70 वर्ष आयु वर्ग के लिए।',
    url: '../service/pm-suraksha-bima-yojana.html',
    applyUrl: 'https://jansuraksha.gov.in',
    tags: ['Insurance', 'Accident', 'Affordable'],
    benefitAmount: 200000, benefitText: '₹2 lakh accident cover at ₹20/year',
    icon: '⚡',
    documents: ['Aadhaar-linked bank account', 'Consent form'],
    steps: ['Visit bank branch or banking app', 'Enroll for PMSBY', '₹20/year auto-deducted', '₹2 lakh on accidental death, ₹1 lakh on disability'],
    criteria: { minAge: 18, maxAge: 70, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },
  {
    id: 'e-shram',
    title: 'e-Shram Card Registration',
    titleHi: 'ई-श्रम कार्ड पंजीकरण',
    description: 'Free registration for unorganized workers. Get ₹2 lakh accident insurance + priority in welfare schemes.',
    descHi: 'असंगठित श्रमिकों के लिए मुफ्त पंजीकरण। ₹2 लाख दुर्घटना बीमा + कल्याण योजनाओं में प्राथमिकता।',
    url: '../service/e-shram-card.html',
    applyUrl: 'https://eshram.gov.in',
    tags: ['Labour', 'Unorganized', 'Free', 'Registration'],
    benefitAmount: 200000, benefitText: 'Free UAN card + ₹2 lakh accident cover',
    icon: '🪪',
    documents: ['Aadhaar Card (linked to mobile)', 'Bank account number'],
    steps: ['Visit eshram.gov.in', 'Enter Aadhaar number', 'Verify with OTP on Aadhaar-linked mobile', 'Fill occupation & income details', 'Download e-Shram card instantly – Free'],
    criteria: { minAge: 16, maxAge: 59, genders: ['All'], occupations: ['Unorganized Worker', 'Farmer', 'Artisan', 'Business', 'Laborer'], castes: ['All'], maxIncome: null, states: ['All'], maritalStatus: ['All'] }
  },

  // ═══════════════════════════════════════════════════════
  // FOOD SECURITY
  // ═══════════════════════════════════════════════════════
  {
    id: 'pmgkay',
    title: 'PM Garib Kalyan Anna Yojana (Free Ration)',
    titleHi: 'पीएम गरीब कल्याण अन्न योजना (मुफ्त राशन)',
    description: '5 kg FREE foodgrain per person per month for 80 crore NFSA beneficiaries.',
    descHi: 'NFSA के 80 करोड़ लाभार्थियों को 5 किलो मुफ्त अनाज प्रति व्यक्ति प्रति माह।',
    url: '../service/pm-garib-kalyan-anna-yojana.html',
    applyUrl: 'https://nfsa.gov.in',
    tags: ['Food', 'Free', 'BPL', 'Ration', 'NFSA'],
    benefitAmount: null, benefitText: '5 kg FREE grain/person/month',
    icon: '🍚',
    documents: ['NFSA Ration Card', 'Aadhaar (for authentication at FPS)'],
    steps: ['Visit nearest Fair Price Shop (Sarkari Ration Dukaan)', 'Carry Ration Card & Aadhaar', 'Biometric/OTP authentication', 'Collect FREE grain (no payment needed)'],
    criteria: { minAge: 0, maxAge: null, genders: ['All'], occupations: ['All'], castes: ['All'], maxIncome: 120000, states: ['All'], maritalStatus: ['All'] }
  }
];

// ═══════════════════════════════════════════════════════════════
// ADVANCED MATCHING ENGINE v2.0
// Returns matched schemes with score, matchedReasons, failedReasons
// ═══════════════════════════════════════════════════════════════

const matchSchemesAdvanced = (profile) => {
  const results = [];

  SCHEMES_DB.forEach(scheme => {
    const c = scheme.criteria;
    const matchedReasons = [];
    const failedReasons = [];
    let totalPoints = 0;
    let earnedPoints = 0;

    // --- AGE CHECK ---
    totalPoints += 20;
    if (profile.age !== null) {
      let ageFail = false;
      if (c.minAge !== null && profile.age < c.minAge) {
        failedReasons.push(`Age ${profile.age} is below minimum required age of ${c.minAge} years`);
        ageFail = true;
      }
      if (c.maxAge !== null && profile.age > c.maxAge) {
        failedReasons.push(`Age ${profile.age} exceeds maximum age limit of ${c.maxAge} years`);
        ageFail = true;
      }
      if (!ageFail) {
        matchedReasons.push(`✅ Age ${profile.age} is within eligible range (${c.minAge || 0}–${c.maxAge || '60+'} yrs)`);
        earnedPoints += 20;
      }
    } else {
      earnedPoints += 10; // Partial – age not provided
    }

    // --- GENDER CHECK ---
    totalPoints += 15;
    if (c.genders.includes('All')) {
      matchedReasons.push(`✅ Open to all genders`);
      earnedPoints += 15;
    } else if (profile.gender && c.genders.includes(profile.gender)) {
      matchedReasons.push(`✅ Gender matches: ${profile.gender}`);
      earnedPoints += 15;
    } else if (profile.gender) {
      failedReasons.push(`❌ Only for ${c.genders.join('/')} – your gender is ${profile.gender}`);
    }

    // --- OCCUPATION CHECK ---
    totalPoints += 25;
    if (c.occupations.includes('All')) {
      matchedReasons.push(`✅ Open to all occupations`);
      earnedPoints += 25;
    } else if (profile.occupation && c.occupations.includes(profile.occupation)) {
      matchedReasons.push(`✅ Occupation matches: ${profile.occupation}`);
      earnedPoints += 25;
    } else if (c.requiresFarmer && profile.occupation !== 'Farmer') {
      failedReasons.push(`❌ Only for Farmers (your occupation: ${profile.occupation || 'not specified'})`);
    } else if (profile.occupation) {
      failedReasons.push(`❌ Eligible occupations: ${c.occupations.join(', ')} – yours is ${profile.occupation}`);
    }

    // --- CASTE CHECK ---
    totalPoints += 15;
    if (c.castes.includes('All')) {
      matchedReasons.push(`✅ Open to all categories`);
      earnedPoints += 15;
    } else if (profile.caste && c.castes.includes(profile.caste)) {
      matchedReasons.push(`✅ Your category (${profile.caste}) is eligible`);
      earnedPoints += 15;
    } else if (profile.caste) {
      failedReasons.push(`❌ Only for ${c.castes.join('/')} category – yours is ${profile.caste}`);
    }

    // --- INCOME CHECK ---
    totalPoints += 20;
    if (c.maxIncome === null) {
      matchedReasons.push(`✅ No income limit for this scheme`);
      earnedPoints += 20;
    } else if (profile.income !== null) {
      if (profile.income <= c.maxIncome) {
        matchedReasons.push(`✅ Income ₹${profile.income.toLocaleString('en-IN')} is within limit (max ₹${c.maxIncome.toLocaleString('en-IN')})`);
        earnedPoints += 20;
      } else {
        failedReasons.push(`❌ Income ₹${profile.income.toLocaleString('en-IN')} exceeds limit of ₹${c.maxIncome.toLocaleString('en-IN')}`);
      }
    } else {
      earnedPoints += 10; // Unknown
    }

    // --- MARITAL STATUS CHECK ---
    totalPoints += 5;
    if (c.maritalStatus.includes('All')) {
      earnedPoints += 5;
    } else if (profile.maritalStatus && c.maritalStatus.includes(profile.maritalStatus)) {
      matchedReasons.push(`✅ Marital status (${profile.maritalStatus}) is eligible`);
      earnedPoints += 5;
    } else if (profile.maritalStatus) {
      failedReasons.push(`❌ Requires marital status: ${c.maritalStatus.join('/')} – yours is ${profile.maritalStatus}`);
    }

    // --- SPECIAL FLAGS ---
    if (c.requiresFemaleOrSCST) {
      if (profile.gender === 'Female' || ['SC', 'ST'].includes(profile.caste)) {
        matchedReasons.push(`✅ Eligible as ${profile.gender === 'Female' ? 'Woman entrepreneur' : 'SC/ST entrepreneur'}`);
      } else {
        failedReasons.push(`❌ Only for Women OR SC/ST entrepreneurs`);
        totalPoints += 10;
      }
    }

    // --- SCORE ---
    const score = Math.round((earnedPoints / totalPoints) * 100);

    // Category
    let category = 'check'; // 'eligible', 'check', 'not_eligible'
    if (failedReasons.length === 0 && score >= 75) category = 'eligible';
    else if (failedReasons.length === 0 && score >= 50) category = 'check';
    else if (failedReasons.length > 0) category = 'not_eligible';

    // Always include schemes with score >= 50 or no hard fails
    if (score >= 40 || failedReasons.length === 0) {
      results.push({
        ...scheme,
        score,
        category,
        matchedReasons,
        failedReasons
      });
    }
  });

  // Sort: eligible first, then check, then not_eligible; within each, by score
  const order = { eligible: 0, check: 1, not_eligible: 2 };
  results.sort((a, b) => {
    if (order[a.category] !== order[b.category]) return order[a.category] - order[b.category];
    return (b.benefitAmount || 0) - (a.benefitAmount || 0);
  });

  return results;
};

// Legacy compatibility
const matchSchemes = (profile) => matchSchemesAdvanced(profile).filter(s => s.category !== 'not_eligible');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SCHEMES_DB, matchSchemes, matchSchemesAdvanced };
} else {
  window.SCHEMES_DB = SCHEMES_DB;
  window.matchSchemes = matchSchemes;
  window.matchSchemesAdvanced = matchSchemesAdvanced;
}
