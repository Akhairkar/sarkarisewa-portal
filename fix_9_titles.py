import os
import re

fixes_9 = {
    "exams/rrb-group-d-2026.html": {
        "title": "RRB Group D Recruitment 2026: Notification, Exam Dates & Apply",
        "desc": "Railway RRB Group D (Level 1) 2026 recruitment notification: 10th/ITI pass eligibility, physical efficiency test (PET), syllabus aur official online apply link."
    },
    "exams/rrb-ntpc-ug-2026.html": {
        "title": "RRB NTPC Undergraduate 2026: 12th Pass Vacancies & Apply",
        "desc": "RRB NTPC Undergraduate (12th Pass) level 2026 recruitment: Junior Clerk, Accounts Clerk, Trains Clerk vacancies, CBT exam dates aur apply portal."
    },
    "jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html": {
        "title": "IBPS RRB-XV Recruitment 2026: Gramin Bank PO & Clerk Apply",
        "desc": "IBPS RRB-XV Regional Rural Banks recruitment 2026: Office Assistant & Officer Scale I, II, III vacancies, exam dates, eligibility aur online registration."
    },
    "jobs/isro-recruitment-2026-assistant-udc-jpa-stenographer-244-posts-ms8e3oon-0.html": {
        "title": "ISRO Assistant & Stenographer Recruitment 2026: 244 Posts Apply",
        "desc": "ISRO recruitment 2026 for 244 Assistant, Junior Personal Assistant (JPA), UDC and Stenographer posts. Eligibility, salary matrix aur online application guide."
    },
    "jobs/rajasthan-high-court-stenographer-recruitment-2026-grade-ii-iii-163-posts-ms8e3ooo-3.html": {
        "title": "Rajasthan High Court Stenographer Recruitment 2026: 163 Posts Apply",
        "desc": "Rajasthan High Court (HCRAJ) Stenographer Grade II & III recruitment 2026: 163 posts, Hindi/English shorthand test, eligibility criteria aur apply link."
    },
    "jobs/sbi-clerk-junior-associate-recruitment-2026.html": {
        "title": "SBI Clerk (Junior Associate) Recruitment 2026: Notification & Apply",
        "desc": "State Bank of India (SBI) Junior Associates (Customer Support & Sales) Clerk 2026: State-wise vacancies, prelims/mains exam syllabus aur sbi.co.in apply link."
    },
    "jobs/upsc-principal-vice-principal-recruitment-2026-delhi-education-dept-828-posts-ms8e3ooo-2.html": {
        "title": "UPSC Delhi Principal & Vice-Principal Recruitment 2026: 828 Posts",
        "desc": "UPSC Recruitment 2026 for 828 Principal & Vice-Principal posts in Delhi Directorate of Education: Eligibility, selection interview criteria aur apply form."
    },
    "jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html": {
        "title": "UPSSSC Auditor & Assistant Accountant Recruitment 2026: 1828 Posts",
        "desc": "UPSSSC Lekha Parikshak (Auditor) & Assistant Accountant recruitment 2026: 1828 posts, PET score eligibility, syllabus aur upsssc.gov.in online apply link."
    },
    "service/csc-locator/dadra-nagar-haveli-daman-diu.html": {
        "title": "Dadra & Nagar Haveli and Daman & Diu CSC Center List 2026",
        "desc": "Find verified Digital Seva Kendra (CSC) centers in Dadra & Nagar Haveli and Daman & Diu. Direct address, contact number and navigation."
    }
}

for fpath, data in fixes_9.items():
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # Clean title
    title_tag = f"<title>{data['title']}</title>"
    if re.search(r'<title>.*?</title>', html, re.IGNORECASE | re.DOTALL):
        html = re.sub(r'<title>.*?</title>', title_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)
    else:
        html = re.sub(r'(<head.*?>)', r'\1\n' + title_tag, html, count=1, flags=re.IGNORECASE)

    # Clean meta description
    desc_tag = f'<meta name="description" content="{data["desc"]}"/>'
    if re.search(r'<meta\s+name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)
    elif re.search(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<title>.*?</title>)', r'\1\n' + desc_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Fixed: {fpath}")
