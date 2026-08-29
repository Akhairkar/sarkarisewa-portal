import re
import os

print("--- FIXING REMAINING AUDIT FINDINGS ---")

# 1. Fix states/index.html
states_index_path = 'states/index.html'
if os.path.exists(states_index_path):
    with open(states_index_path, 'r', encoding='utf-8') as f:
        html = f.read()
    html = re.sub(r'<title>.*?</title>', '<title>All States Citizen Services Hub 2026 | SarkariSewa India</title>', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', '<meta name="description" content="State-wise online citizen service portals, certificates, schemes, e-District services across all 35 Indian States and Union Territories."/>', html, flags=re.IGNORECASE)
    with open(states_index_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Fixed states/index.html")

# 2. Fix missing titles and descriptions in specific pages
page_metadata = {
    'deadline-calendar.html': {
        'title': 'Govt Exam & Scheme Deadline Calendar 2026 | SarkariSewa',
        'desc': 'Track all upcoming government exam dates, scheme application deadlines, and fee submission last dates in one unified interactive calendar.'
    },
    'deadline-detail.html': {
        'title': 'Application Deadline & Key Dates Tracker 2026 | SarkariSewa',
        'desc': 'Check complete application schedule, important registration dates, fee deadlines, and direct official apply links.'
    },
    'tools/deadline-detail.html': {
        'title': 'Application Deadline & Key Dates Tracker 2026 | SarkariSewa',
        'desc': 'Check complete application schedule, important registration dates, fee deadlines, and direct official apply links.'
    },
    'exam-age-calculator.html': {
        'title': 'Govt Exam Age Limit & Eligibility Calculator 2026 | SarkariSewa',
        'desc': 'Calculate your exact age and check age relaxation criteria for UPSC, SSC, Banking, Railways, and State PSC examinations 2026.'
    },
    'hidden-tax-calculator.html': {
        'title': 'Hidden Tax & Salary Deductions Calculator 2026 | SarkariSewa',
        'desc': 'Analyze TDS, Professional Tax, EPF, and hidden deductions on your CTC to know your true in-hand take-home monthly salary.'
    },
    'nps-pension-calculator.html': {
        'title': 'NPS Pension & Maturity Calculator 2026 | SarkariSewa',
        'desc': 'Calculate National Pension System (NPS) monthly pension amount, total wealth accumulation, and lump sum maturity withdrawal.'
    },
    'exams/exam.html': {
        'title': 'Govt Exam Details, Notification & Syllabus 2026 | SarkariSewa',
        'desc': 'Explore government examination details, syllabus, eligibility criteria, exam pattern, and official application links.'
    },
    'jobs/post.html': {
        'title': 'Sarkari Naukri Recruitment Notification 2026 | SarkariSewa',
        'desc': 'Latest government job recruitment vacancy details, educational qualifications, selection process, and direct online form link.'
    },
    'blog/vehicle-registration-certificate-rc-everything-you-need-to-know-ms6891ny.html': {
        'title': 'Vehicle Registration Certificate (RC): Complete 2026 Guide',
        'desc': 'Complete guide on Vehicle Registration Certificate (RC) in India. Learn RC transfer, status check, smart card download, and Parivahan renewal.'
    },
    'jobs/isro-scientistengineer-recruitment-2026-mseotm9e-1.html': {
        'title': 'ISRO Scientist / Engineer Recruitment 2026: Apply Online',
        'desc': 'ISRO Scientist Engineer Recruitment 2026 notification. Check eligibility criteria, branch-wise vacancies, selection process, and apply link.'
    },
    'jobs/rrb-junior-engineer-recruitment-2026-mseotm9d-0.html': {
        'title': 'RRB Junior Engineer (JE) Recruitment 2026: Apply Online',
        'desc': 'RRB Junior Engineer (JE) 2026 recruitment notification. Check railway vacancy details, syllabus, CBT exam dates, and registration process.'
    }
}

for fpath, meta in page_metadata.items():
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
            html = fp.read()
            
        title_tag = f"<title>{meta['title']}</title>"
        if '<title>' in html:
            html = re.sub(r'<title>.*?</title>', title_tag, html, flags=re.IGNORECASE | re.DOTALL)
        else:
            html = re.sub(r'(<head[^>]*>)', r'\1\n' + title_tag, html, count=1, flags=re.IGNORECASE)
            
        desc_tag = f'<meta name="description" content="{meta["desc"]}"/>'
        if re.search(r'<meta\s+name=["\']description["\'][^>]*>', html, re.IGNORECASE):
            html = re.sub(r'<meta\s+name=["\']description["\'][^>]*>', desc_tag, html, flags=re.IGNORECASE)
        elif re.search(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
            html = re.sub(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', desc_tag, html, flags=re.IGNORECASE)
        else:
            html = re.sub(r'(<head[^>]*>)', r'\1\n' + desc_tag, html, count=1, flags=re.IGNORECASE)

        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(html)
        print(f"Fixed {fpath}")

print("All audit findings successfully patched!")
