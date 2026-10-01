const fs = require('fs');
const path = require('path');

const jobsDir = path.join(__dirname, 'jobs');
const jsonPath = path.join(__dirname, 'new-jobs.json');
const indexPath = path.join(jobsDir, 'index.html');
const templatePath = path.join(jobsDir, 'ibps-clerk-crp-csa-xvi-customer-service-associate-recruitment-2026-msa62jkl-0.html');

if (!fs.existsSync(jsonPath)) {
  console.log('JSON not found.');
  process.exit(1);
}

const jobsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const templateContent = fs.readFileSync(templatePath, 'utf8');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// The marker in index.html to insert new jobs
const marker = '<!-- Pre-rendered Static Cards for SEO & Instant Load -->';
let newCardsHtml = '';

for (const job of jobsData) {
  const filename = job.id + '.html';
  const filePath = path.join(jobsDir, filename);

  // 1. Build the job page based on template
  let newHtml = templateContent;
  
  // Replace title (in head and hero)
  newHtml = newHtml.replace(/<title>.*?<\/title>/, `<title>${job.title}</title>`);
  newHtml = newHtml.replace(/<h1 class=\"job-post-hero__title\">.*?<\/h1>/, `<h1 class="job-post-hero__title">${job.title}</h1>`);
  // Also breadcrumb title
  newHtml = newHtml.replace(/<span class=\"current\">.*?<\/span>/, `<span class="current">${job.title}</span>`);
  
  // Replace badges
  newHtml = newHtml.replace(/<span class=\"job-badge job-badge--type\">.*?<\/span>/g, `<span class="job-badge job-badge--type" style="background: ${job.badgeColor}; color: #fff;">${job.badgeText}</span>`);
  
  // Replace dept
  newHtml = newHtml.replace(/<p class=\"job-post-hero__dept\">.*?<\/p>/, `<p class="job-post-hero__dept">${job.dept}</p>`);
  
  // Replace meta
  newHtml = newHtml.replace(/<strong>रिक्तियां:<\/strong> .*?<\/div>/, `<strong>रिक्तियां:</strong> ${job.vacancies}</div>`);
  newHtml = newHtml.replace(/<strong>आवेदन की अंतिम तिथि:<\/strong> .*?<\/div>/, `<strong>आवेदन की अंतिम तिथि:</strong> ${job.deadline}</div>`);
  
  // Replace links
  newHtml = newHtml.replace(/href=\"https:\/\/www\.ibps\.in\/\"/g, `href="${job.link}"`);
  
  // Replace body content
  const bodyRegex = /<div class=\"job-post-body\" id=\"job-post-body\">[\s\S]*?<\/div>\s*<section class=\"job-post-related\"/;
  
  const seoContentHtml = `
    <div class="job-post-body" id="job-post-body">
      <div data-lang-show="en" class="htc-seo-content" style="padding:16px;">
        ${job.contentEn}
      </div>
      <div data-lang-show="hi" class="htc-seo-content" style="padding:16px;">
        ${job.contentHi}
      </div>
    </div>
    
    <section class="htc-section" style="margin-top: 2rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">
        <span data-lang-show="hi">उपयोगी टूल्स</span>
        <span data-lang-show="en">Useful Tools for Aspirants</span>
      </h3>
      <div class="service-grid">
        <article class="service-card">
          <h3 style="font-size: 1.1rem;"><a href="../tools/photo-resizer.html">📸 Govt Exam Photo Resizer</a></h3>
          <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--color-text-light);">Resize your photos precisely to the exact KB and pixel dimensions required by SSC, UPSC, IBPS and more.</p>
        </article>
        <article class="service-card">
          <h3 style="font-size: 1.1rem;"><a href="../tools/typing-speed-test.html">⌨️ Typing Speed Test</a></h3>
          <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--color-text-light);">Practice typing in Hindi (Mangal/Kruti Dev) or English with live WPM tracking.</p>
        </article>
        <article class="service-card">
          <h3 style="font-size: 1.1rem;"><a href="../tools/age-calculator.html">⏳ Exam Age Calculator</a></h3>
          <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--color-text-light);">Calculate your exact age as of the notification cutoff date to check eligibility.</p>
        </article>
      </div>
    </section>

    <section class="job-post-related"`;
  
  newHtml = newHtml.replace(bodyRegex, seoContentHtml);

  // Save the new job file
  fs.writeFileSync(filePath, newHtml, 'utf8');
  console.log(`Created ${filename}`);
  
  // 2. Build the job card for index.html
  newCardsHtml += `
      <article class="job-card" data-slug="${job.id}">
        <div class="job-card__head">
          <h3 class="job-card__title"><a href="${filename}" style="text-decoration:none; color:inherit;">${job.title}</a></h3>
          <span class="job-badge job-badge--type" style="background: ${job.badgeColor}; color: #fff;">${job.badgeText}</span>
        </div>
        <p class="job-card__dept">${job.dept}</p>
        <p class="job-card__qualification"><strong>पात्रता:</strong> ${job.qualification}</p>
        <div class="job-card__meta">
          <span><strong>रिक्तियां:</strong> ${job.vacancies}</span>
          <span><strong>अंतिम तिथि:</strong> ${job.deadline}</span>
        </div>
        <div class="job-card__actions">
          <a class="btn btn-primary" href="${filename}">पूरी जानकारी व आवेदन →</a>
          <a class="job-card__notification-link" href="${job.link}" target="_blank" rel="noopener noreferrer">आधिकारिक वेबसाइट</a>
        </div>
      </article>
`;
}

// Insert into index.html
indexContent = indexContent.replace(marker, marker + '\n' + newCardsHtml);
fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Updated jobs/index.html');
