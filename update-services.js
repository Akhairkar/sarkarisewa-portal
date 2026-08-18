const fs = require('fs');
const path = require('path');

const servicesPath = path.join(process.cwd(), 'data', 'services.json');
const jobsPath = path.join(process.cwd(), 'new-jobs.json');

const services = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
const jobs = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));

jobs.forEach(job => {
  // Convert new job object into a service object
  const serviceObj = {
    id: job.id,
    slug: job.id,
    category: "jobs-education",
    name: {
      en: job.title,
      hi: job.title // Using English title for both, since new-jobs.json only has title
    },
    shortDescription: {
      en: `${job.dept} | ${job.vacancies} | Eligibility: ${job.qualification} | Last Date: ${job.deadline}`,
      hi: `${job.dept} | ${job.vacancies} | Eligibility: ${job.qualification} | Last Date: ${job.deadline}`
    },
    dateAdded: new Date().toISOString().split('T')[0],
    isNew: true,
    customUrl: `jobs/${job.id}.html`
  };
  
  // Prevent duplicates
  if (!services.some(s => s.id === job.id)) {
    services.unshift(serviceObj); // Add to beginning so they show up at top of latest
  }
});

fs.writeFileSync(servicesPath, JSON.stringify(services, null, 2), 'utf8');
console.log('Appended 5 jobs to data/services.json');
