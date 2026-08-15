/**
 * Sarkari Scheme Eligibility Database
 * Used by the Sarkari Scheme Eligibility Engine to match user profiles with available government schemes.
 */

const SCHEMES_DB = [
  {
    id: 'pm-kisan',
    title: 'PM Kisan Samman Nidhi',
    description: 'Income support of ₹6,000 per year in three equal installments for all landholding farmer families.',
    url: '../service/pm-kisan.html',
    tags: ['Agriculture', 'Financial Assistance'],
    benefitAmount: 6000,
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['All'],
      occupations: ['Farmer'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-awas',
    title: 'Pradhan Mantri Awas Yojana (PMAY-G/U)',
    description: 'Financial assistance for the construction of a pucca house for all houseless and those living in dilapidated houses.',
    url: '../service/pm-awas-yojana.html',
    tags: ['Housing', 'Subsidy'],
    benefitAmount: 120000,
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['All'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: 300000, // EWS category proxy
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'sukanya-samriddhi',
    title: 'Sukanya Samriddhi Yojana (SSY)',
    description: 'A small savings scheme specifically aimed at the betterment of the girl child. Offers high interest rates and tax benefits.',
    url: '../service/sukanya-samriddhi-yojana.html',
    tags: ['Girl Child', 'Savings'],
    benefitAmount: null, // Variable interest
    criteria: {
      minAge: 0,
      maxAge: 10,
      genders: ['Female'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['Unmarried']
    }
  },
  {
    id: 'ayushman-bharat',
    title: 'Ayushman Bharat PM-JAY',
    description: 'Health insurance cover of up to ₹5 lakhs per family per year for secondary and tertiary care hospitalization.',
    url: '../category/health.html',
    tags: ['Health', 'Insurance'],
    benefitAmount: 500000,
    criteria: {
      minAge: 0,
      maxAge: null,
      genders: ['All'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: 250000, // Proxy for SECC data vulnerability
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-shram-yogi',
    title: 'PM Shram Yogi Maandhan (PM-SYM)',
    description: 'Voluntary and contributory pension scheme for unorganized workers ensuring a minimum assured pension of ₹3,000/month after 60.',
    url: '../service/pm-shram-yogi-maandhan.html',
    tags: ['Pension', 'Unorganized Sector'],
    benefitAmount: 36000, // 3000 * 12
    criteria: {
      minAge: 18,
      maxAge: 40,
      genders: ['All'],
      occupations: ['Unorganized Worker', 'Laborer', 'Self-employed'],
      castes: ['All'],
      maxIncome: 180000, // Less than 15000/month
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'atal-pension',
    title: 'Atal Pension Yojana (APY)',
    description: 'Guaranteed minimum pension of ₹1,000 to ₹5,000 per month for subscribers post 60 years of age.',
    url: '../category/finance-tax.html',
    tags: ['Pension', 'Savings'],
    benefitAmount: null,
    criteria: {
      minAge: 18,
      maxAge: 40,
      genders: ['All'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-matru-vandana',
    title: 'Pradhan Mantri Matru Vandana Yojana',
    description: 'Maternity benefit program providing cash incentive of ₹5,000 to pregnant women and lactating mothers.',
    url: '../service/pm-matru-vandana-yojana.html',
    tags: ['Maternity', 'Women'],
    benefitAmount: 5000,
    criteria: {
      minAge: 19,
      maxAge: 50,
      genders: ['Female'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['Married']
    }
  },
  {
    id: 'pm-vishwakarma',
    title: 'PM Vishwakarma Yojana',
    description: 'Holistic support to artisans and craftspeople including toolkit incentive of ₹15,000 and collateral-free credit.',
    url: '../service/pm-vishwakarma-yojana.html',
    tags: ['Artisans', 'Skill Development'],
    benefitAmount: 15000, // Toolkit incentive
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['All'],
      occupations: ['Artisan', 'Craftsman', 'Self-employed'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'stand-up-india',
    title: 'Stand Up India Scheme',
    description: 'Bank loans between ₹10 lakh and ₹1 crore for setting up a greenfield enterprise.',
    url: '../service/stand-up-india.html',
    tags: ['Business', 'Loan'],
    benefitAmount: 10000000, // Max loan
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['Female'], // Standard logic: Female OR SC/ST. Handled loosely here.
      occupations: ['Business', 'Self-employed'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'stand-up-india-scst',
    title: 'Stand Up India Scheme (SC/ST)',
    description: 'Bank loans between ₹10 lakh and ₹1 crore for setting up a greenfield enterprise specifically for SC/ST individuals.',
    url: '../service/stand-up-india.html',
    tags: ['Business', 'Loan', 'SC/ST'],
    benefitAmount: 10000000, // Max loan
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['All'], 
      occupations: ['Business', 'Self-employed'],
      castes: ['SC', 'ST'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-mudra',
    title: 'Pradhan Mantri Mudra Yojana (PMMY)',
    description: 'Loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.',
    url: '../service/pm-mudra-yojana.html',
    tags: ['Business', 'Loan'],
    benefitAmount: 1000000, // Max loan
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['All'],
      occupations: ['Business', 'Self-employed'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'nsap-old-age',
    title: 'National Social Assistance Programme (Old Age Pension)',
    description: 'Pension to BPL persons aged 60 years or above.',
    url: '../service/national-social-assistance-programme.html',
    tags: ['Pension', 'Senior Citizen'],
    benefitAmount: null,
    criteria: {
      minAge: 60,
      maxAge: null,
      genders: ['All'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: 100000, // Proxy for BPL
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-ujjwala',
    title: 'PM Ujjwala Yojana',
    description: 'Free LPG connection to women belonging to BPL households.',
    url: '../service/pm-ujjwala-yojana.html',
    tags: ['Women', 'Household'],
    benefitAmount: 1600, // Financial support per connection
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['Female'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: 150000, // Proxy for BPL
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'post-matric-obc',
    title: 'Post Matric Scholarship for OBC/EBC',
    description: 'Financial assistance to OBC/EBC students studying at post-matriculation or post-secondary stage.',
    url: '../service/post-matric-scholarship-obc-ebc.html',
    tags: ['Education', 'Scholarship', 'OBC'],
    benefitAmount: null,
    criteria: {
      minAge: 14,
      maxAge: 30,
      genders: ['All'],
      occupations: ['Student'],
      castes: ['OBC', 'EBC'],
      maxIncome: 250000,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-vidyalaxmi',
    title: 'PM Vidyalaxmi Scheme',
    description: 'Collateral-free education loans up to ₹7.5 lakh with 3% interest subvention for students aiming for higher education.',
    url: '../service/pm-vidyalaxmi-scheme.html',
    tags: ['Education', 'Loan'],
    benefitAmount: 750000,
    criteria: {
      minAge: 16,
      maxAge: 35,
      genders: ['All'],
      occupations: ['Student'],
      castes: ['All'],
      maxIncome: 800000,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-surya-ghar',
    title: 'PM Surya Ghar Muft Bijli Yojana',
    description: 'Subsidy up to ₹78,000 for installing rooftop solar panels to get up to 300 units of free electricity every month.',
    url: '../service/pm-surya-ghar-muft-bijli.html',
    tags: ['Electricity', 'Subsidy'],
    benefitAmount: 78000,
    criteria: {
      minAge: 18,
      maxAge: null,
      genders: ['All'],
      occupations: ['All'],
      castes: ['All'],
      maxIncome: null,
      states: ['All'],
      maritalStatus: ['All']
    }
  },
  {
    id: 'pm-internship',
    title: 'PM Internship Scheme',
    description: '12-month internship opportunities in top 500 companies with a monthly stipend of ₹5,000.',
    url: '../service/pm-internship-scheme.html',
    tags: ['Youth', 'Employment'],
    benefitAmount: 60000, // 5000 * 12
    criteria: {
      minAge: 21,
      maxAge: 24,
      genders: ['All'],
      occupations: ['Unemployed', 'Student'],
      castes: ['All'],
      maxIncome: 800000, // Family income limit
      states: ['All'],
      maritalStatus: ['All']
    }
  }
];

// Helper functions for the matching engine
const matchSchemes = (profile) => {
  return SCHEMES_DB.filter(scheme => {
    const c = scheme.criteria;

    // Age Check
    if (profile.age !== null) {
      if (c.minAge !== null && profile.age < c.minAge) return false;
      if (c.maxAge !== null && profile.age > c.maxAge) return false;
    }

    // Gender Check
    if (profile.gender && !c.genders.includes('All')) {
      if (!c.genders.includes(profile.gender)) return false;
    }

    // Occupation Check
    if (profile.occupation && !c.occupations.includes('All')) {
      if (!c.occupations.includes(profile.occupation)) return false;
    }

    // Caste Check
    if (profile.caste && !c.castes.includes('All')) {
      if (!c.castes.includes(profile.caste)) return false;
    }

    // Income Check
    if (profile.income !== null && c.maxIncome !== null) {
      if (profile.income > c.maxIncome) return false;
    }

    // State Check
    if (profile.state && !c.states.includes('All')) {
      if (!c.states.includes(profile.state)) return false;
    }
    
    // Marital Status Check
    if (profile.maritalStatus && !c.maritalStatus.includes('All')) {
        if (!c.maritalStatus.includes(profile.maritalStatus)) return false;
    }

    return true; // Passed all criteria
  });
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SCHEMES_DB, matchSchemes };
} else {
    window.SCHEMES_DB = SCHEMES_DB;
    window.matchSchemes = matchSchemes;
}
