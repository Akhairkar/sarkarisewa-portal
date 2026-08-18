const fs = require('fs');

function updateISRO() {
  const filePath = 'jobs/isro-scientistengineer-recruitment-2026-mseotm9e-1.html';
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Fix Title
  html = html.replace(
    /<title>.*?<\/title>/s,
    `<title>ISRO Scientist Recruitment 2026 (Apply Online): Eligibility, Syllabus & Huge Salary</title>`
  );

  // 2. Fix Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/s,
    `<meta name="description" content="ISRO Scientist/Engineer Recruitment 2026 is here! Golden opportunity to apply for 92+ posts. Check full notification, syllabus, salary, and how to apply online instantly." />`
  );

  // 3. Add Schema Markup right before </head>
  if (!html.includes('application/ld+json')) {
    const schema = `
    <!-- JSON-LD Structured Data for 100% SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "JobPosting",
          "title": "ISRO Scientist/Engineer SC Recruitment 2026",
          "description": "Indian Space Research Organisation (ISRO) has announced recruitment for 92 Scientist/Engineer SC posts. Massive opportunity for B.E/B.Tech graduates to join India's premier space agency.",
          "datePosted": "2026-08-01",
          "validThrough": "2026-08-17T23:59:59Z",
          "employmentType": "FULL_TIME",
          "hiringOrganization": {
            "@type": "Organization",
            "name": "Indian Space Research Organisation (ISRO)",
            "sameAs": "https://www.isro.gov.in"
          },
          "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          },
          "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
              "@type": "QuantitativeValue",
              "value": 56100,
              "unitText": "MONTH"
            }
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the salary of ISRO Scientist in 2026?",
              "acceptedAnswer": { "@type": "Answer", "text": "The basic pay starts at ₹56,100 (Level 10 of 7th CPC). Gross salary ranges from ₹80,000 to ₹1,00,000 depending on HRA and DA." }
            },
            {
              "@type": "Question",
              "name": "Is GATE score required for ISRO recruitment?",
              "acceptedAnswer": { "@type": "Answer", "text": "No, ISRO conducts its own written exam for this recruitment. GATE score is not mandatory." }
            }
          ]
        }
      ]
    }
    </script>
    `;
    html = html.replace('</head>', `${schema}\n</head>`);
  }

  // 4. Add Related Tools Section
  if (!html.includes('id="seo-tools-section"')) {
    const toolsHtml = `
    <section class="job-post-section" id="seo-tools-section" style="margin-top:20px; border-top:2px solid var(--color-border); padding-top:20px;">
      <h2>Related Preparation Tools & Calculators</h2>
      <div class="service-grid" style="margin-top:10px;">
        <a href="../tools/photo-resizer.html" class="service-card" style="text-decoration:none;">
          <div class="service-card__icon">📸</div>
          <h3 class="service-card__title">Govt Exam Photo Resizer</h3>
          <p class="service-card__desc">Resize your photo & signature precisely for ISRO application portal.</p>
        </a>
        <a href="../tools/typing-speed-test.html" class="service-card" style="text-decoration:none;">
          <div class="service-card__icon">⌨️</div>
          <h3 class="service-card__title">Typing Speed Test</h3>
          <p class="service-card__desc">Improve your typing speed for Govt Exams.</p>
        </a>
        <a href="../7th-pay-commission-calculator.html" class="service-card" style="text-decoration:none;">
          <div class="service-card__icon">🧮</div>
          <h3 class="service-card__title">7th Pay Salary Calculator</h3>
          <p class="service-card__desc">Calculate your exact ISRO Level 10 Salary with HRA & DA.</p>
        </a>
      </div>
    </section>
    `;
    html = html.replace('</article>', `${toolsHtml}\n</article>`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Updated ISRO Job Page successfully.');
}

updateISRO();
