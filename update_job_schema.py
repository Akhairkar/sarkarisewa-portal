import os
import re

filepath = "jobs/ssc-mts-havaldar-recruitment-2026.html"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

rich_schema = """<script id="job-post-schema" type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "SSC MTS (Multi-Tasking Staff) & Havaldar Recruitment 2026",
  "description": "<p>The Staff Selection Commission (SSC) has released the official notification for MTS and Havaldar recruitment 2026. Apply online for 9,583 vacancies.</p><ul><li><strong>Post Name:</strong> Multi Tasking Staff (Non-Technical) & Havaldar</li><li><strong>Total Vacancies:</strong> 9,583</li><li><strong>Age Limit:</strong> 18-25 Years (MTS) and 18-27 Years (Havaldar)</li><li><strong>Educational Qualification:</strong> 10th Pass (Matriculation) from a recognized board.</li></ul><p>Interested candidates can apply online through the official SSC portal before the deadline.</p>",
  "identifier": {
    "@type": "PropertyValue",
    "name": "Staff Selection Commission (SSC)",
    "value": "SSC-MTS-2026"
  },
  "datePosted": "2026-08-10",
  "validThrough": "2026-09-10T23:59",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Staff Selection Commission (SSC)",
    "sameAs": "https://ssc.nic.in",
    "logo": "https://sarkarisewaindia.com/assets/img/ssc-logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    }
  },
  "applicantLocationRequirements": {
    "@type": "Country",
    "name": "India"
  },
  "jobLocationType": "TELECOMMUTE",
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 18000,
      "maxValue": 56900,
      "unitText": "MONTH"
    }
  }
}
</script>"""

# Replace the existing script tag
# Be careful to match multiline
content = re.sub(r'<script id="job-post-schema" type="application/ld\+json">.*?</script>', rich_schema, content, flags=re.DOTALL)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated SSC MTS Job schema.")
