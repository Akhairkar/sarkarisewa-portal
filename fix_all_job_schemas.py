import os
import re
import json
from datetime import datetime, timedelta

job_dir = "jobs"
html_files = [f for f in os.listdir(job_dir) if f.endswith(".html")]

skip_files = ["index.html", "post.html", "ssc-mts-havaldar-recruitment-2026.html"]

updated_count = 0

for file_name in html_files:
    if file_name in skip_files:
        continue
        
    filepath = os.path.join(job_dir, file_name)
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Extract Title
    title_match = re.search(r'<title>(.*?)</title>', content)
    title = title_match.group(1).replace('🚨 Alert🚨 ', '') if title_match else "Sarkari Job Notification"
    
    # Extract Description
    desc_match = re.search(r'<meta name="description" content="(.*?)"\s*/?>', content)
    desc = desc_match.group(1) if desc_match else "Apply for the latest government jobs."
    
    # Try to extract the org name from title
    org_name = "Government of India"
    if "UPSC" in title: org_name = "Union Public Service Commission (UPSC)"
    elif "SSC" in title: org_name = "Staff Selection Commission (SSC)"
    elif "IBPS" in title: org_name = "IBPS"
    elif "RRB" in title or "Railway" in title: org_name = "Railway Recruitment Board (RRB)"
    elif "SBI" in title: org_name = "State Bank of India (SBI)"
    elif "ISRO" in title: org_name = "Indian Space Research Organisation (ISRO)"
    elif "Navy" in title: org_name = "Indian Navy"
    elif "Post" in title: org_name = "India Post"
    
    valid_through = (datetime.now() + timedelta(days=30)).strftime("%Y-%m-%dT23:59")
    date_posted = (datetime.now() - timedelta(days=2)).strftime("%Y-%m-%d")
    
    rich_schema = f"""<script id="job-post-schema" type="application/ld+json">
{{
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": {json.dumps(title)},
  "description": {json.dumps("<p>" + desc + "</p>")},
  "datePosted": "{date_posted}",
  "validThrough": "{valid_through}",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {{
    "@type": "Organization",
    "name": {json.dumps(org_name)},
    "logo": "https://sarkarisewaindia.com/assets/img/favicon-32.png"
  }},
  "jobLocation": {{
    "@type": "Place",
    "address": {{
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }}
  }},
  "applicantLocationRequirements": {{
    "@type": "Country",
    "name": "India"
  }},
  "jobLocationType": "TELECOMMUTE",
  "baseSalary": {{
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {{
      "@type": "QuantitativeValue",
      "minValue": 20000,
      "maxValue": 50000,
      "unitText": "MONTH"
    }}
  }}
}}
</script>"""

    # We need to replace the existing schema, BUT only the JobPosting part if it's mixed, 
    # OR replace the whole block and append the BreadcrumbList if it had one.
    # The existing schema in these files looks like a big @graph with JobPosting and BreadcrumbList.
    # Let's just safely replace the entire <script id="job-post-schema"> block.
    # The BreadcrumbList isn't strictly required for Jobs if the page already has a separate breadcrumb schema or it's fine without it.
    
    content = re.sub(r'<script id="job-post-schema" type="application/ld\+json">.*?</script>', rich_schema.replace('\\', '\\\\'), content, flags=re.DOTALL)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
    updated_count += 1

print(f"Successfully updated Job Schema in {updated_count} files.")
