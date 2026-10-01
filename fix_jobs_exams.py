import os
import re

job_exam_fixes = {
    "jobs/upsc-cse-recruitment-2027.html": {
        "title": "UPSC CSE Recruitment 2026: IAS & IPS Notification, Dates & Apply",
        "desc": "UPSC Civil Services Examination (CSE) 2026: Prelims exam date, IAS/IPS eligibility criteria, syllabus, vacancy details aur online aavedan direct link."
    },
    "jobs/indian-navy-agniveer-ssr-recruitment-2026.html": {
        "title": "Indian Navy Agniveer SSR Recruitment 2026: Apply Online & Dates",
        "desc": "Indian Navy Agniveer (SSR) batch recruitment 2026: 12th pass eligibility, physical standards (PFT), salary, exam pattern aur joinindiannavy.gov.in apply link."
    },
    "jobs/rbi-grade-b-officer-recruitment-2026.html": {
        "title": "RBI Grade B Officer Recruitment 2026: Notification, Salary & Apply",
        "desc": "Reserve Bank of India (RBI) Grade B Officer Recruitment 2026: General/DEPR/DSIM posts, eligibility, phase 1 & 2 exam pattern aur online registration link."
    },
    "jobs/ibps-po-mt-recruitment-2026.html": {
        "title": "IBPS PO / MT Recruitment 2026: Notification, Vacancies & Apply",
        "desc": "IBPS PO/MT XVI recruitment 2026: 4000+ probationary officer vacancies in participating banks, prelims/mains syllabus, dates aur online apply form."
    },
    "jobs/rrb-ntpc-recruitment-2026.html": {
        "title": "RRB NTPC Recruitment 2026: Graduate & 12th Pass Vacancy Apply",
        "desc": "Railway RRB NTPC recruitment 2026: Station Master, Goods Guard, Clerk vacancies, CBT 1 & 2 exam pattern, syllabus aur regional RRB apply links."
    },
    "jobs/ssc-cgl-recruitment-2026.html": {
        "title": "SSC CGL Recruitment 2026: 17,000+ Posts Notification & Apply",
        "desc": "SSC Combined Graduate Level (CGL) 2026: Inspector, Assistant, ASO posts, Tier 1 & Tier 2 syllabus, age limit aur ssc.gov.in online application guide."
    },
    "jobs/india-post-gds-recruitment-2026.html": {
        "title": "India Post GDS Recruitment 2026: 44,000+ Gramin Dak Sevak Apply",
        "desc": "India Post GDS Recruitment 2026: 10th pass merit-based BPM/ABPM vacancies, circle-wise cutoff list aur indiapostgdsonline.gov.in direct apply portal."
    },
    "jobs/ssc-mts-havaldar-recruitment-2026.html": {
        "title": "SSC MTS & Havaldar Recruitment 2026: Notification, Exam & Apply",
        "desc": "Staff Selection Commission SSC MTS & Havaldar (CBIC & CBN) Recruitment 2026: 10th pass eligibility, exam pattern, syllabus aur online form apply link."
    },
    "claim-your-csc.html": {
        "title": "Claim Your CSC Center: Update Details & WhatsApp Link Free",
        "desc": "Are you a CSC VLE? Claim your Common Service Center listing on SarkariSewa India to update contact details, services offered & direct WhatsApp link."
    },
    "exams/upsc-cse-2026.html": {
        "title": "UPSC CSE 2026 Exam Calendar: Prelims & Mains Complete Dates",
        "desc": "UPSC Civil Services Examination (CSE) 2026 complete schedule: Prelims exam date, Mains timetable, interview dates aur official notification details."
    },
    "exams/ibps-clerk-2026.html": {
        "title": "IBPS Clerk 2026 Exam Dates: Prelims, Mains & Admit Card Schedule",
        "desc": "IBPS Clerk 2026 examination schedule: Prelims & Mains dates, admit card release, cutoff marks analysis aur preparation resources."
    },
    "exams/ssc-cgl-2026.html": {
        "title": "SSC CGL 2026 Exam Schedule: Tier 1 & Tier 2 Complete Timetable",
        "desc": "SSC CGL 2026 examination timetable: Tier 1 & Tier 2 exam dates, admit card download link, shift timings aur exam center guidelines."
    },
    "exams/ibps-po-2026.html": {
        "title": "IBPS PO 2026 Exam Calendar: Prelims, Mains & Interview Schedule",
        "desc": "IBPS Probationary Officer (PO) 2026 complete schedule: Prelims exam date, Mains timetable, result declaration aur interview slot details."
    },
    "services.html": {
        "title": "All Government Services & Schemes Directory 2026 | SarkariSewa",
        "desc": "Explore 200+ Central and State Government Services, scheme eligibility guides, certificate application portals, calculators and verified citizen tools."
    }
}

for fpath, data in job_exam_fixes.items():
    if not os.path.exists(fpath):
        print(f"Skipping (not found): {fpath}")
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

    # OpenGraph tags
    og_title = f'<meta property="og:title" content="{data["title"]}"/>'
    og_desc = f'<meta property="og:description" content="{data["desc"]}"/>'
    html = re.sub(r'<meta\s+property=["\']og:title["\'][^>]*>', og_title, html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+property=["\']og:description["\'][^>]*>', og_desc, html, count=1, flags=re.IGNORECASE)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Fixed: {fpath}")
