import re
import os

updates = [
    {
        "file": "tools/deadline-detail.html",
        "title": "Sarkari Form Last Date 2026: Apply Online & Check Deadline",
        "desc": "Kisi bhi Sarkari Yojana ya Job form ki last date check karein. Ghar baithe online apply process, fees aur official deadline ki latest information yahan dekhein."
    },
    {
        "file": "tools/deadline-calendar.html",
        "title": "Govt Exam & Yojana Deadline Calendar 2026: Last Date Check",
        "desc": "SSC, UPSC, Railway aur sabhi Sarkari Yojana forms ki last date miss na karein! Naye forms ki official deadlines aur online apply link ek hi calendar me."
    },
    {
        "file": "tools/csc-locator.html",
        "title": "Find Nearest CSC Center & Jan Seva Kendra Kaise Khoje 2026",
        "desc": "Apne paas ka CSC Center (Jan Seva Kendra) online kaise khoje? State aur PIN code daal kar verified VLE details, contact number aur address ghar baithe dekhein."
    },
    {
        "file": "tools/age-calculator.html",
        "title": "Free Age Calculator for Govt Jobs 2026 (Age Limit Check)",
        "desc": "Sarkari Naukri ke liye apni exact age calculate karein. SSC, UPSC form bharne ke liye age limit aur retirement date free me check karein."
    },
    {
        "file": "terms.html",
        "title": "Terms & Conditions - SarkariSewaIndia.com Official Policy",
        "desc": "SarkariSewaIndia ki terms and conditions padhein. Humari website par sarkari yojana, online form aur calculators use karne ke niyam yahan diye gaye hain."
    },
    {
        "file": "support/state-wise-services.html",
        "title": "State Wise Sarkari Yojana 2026: Apne Rajya Ki Scheme Khojein",
        "desc": "UP, Bihar, MP, Maharashtra aur sabhi rajyo ki nayi Sarkari Yojana list 2026. Apne state ki official schemes, documents aur apply online process yahan dekhein."
    },
    {
        "file": "support/rti-guide.html",
        "title": "RTI Online Kaise File Kare 2026? \u20b910 Fees & Status Check",
        "desc": "Central ya State govt me RTI application kaise lagaye? \u20b910 fee payment, format, required documents aur online appeal status check karne ka step-by-step tarika."
    },
    {
        "file": "support/index.html",
        "title": "SarkariSewa Help & Support: Yojana Form Queries & Solutions",
        "desc": "Sarkari Yojana ya Job form bharne me problem aa rahi hai? Humare help center se contact karein aur document, status check ya errors ka solution paayein."
    },
    {
        "file": "support/helpline-directory.html",
        "title": "All Govt Helpline Numbers 2026: Official Customer Care List",
        "desc": "Sabhi Sarkari Yojana, Bank, EPF, aur Police ke toll-free helpline numbers. Apni complaint darj karne ke liye official customer care directory yahan dekhein."
    },
    {
        "file": "subscribers.html",
        "title": "SarkariSewa Newsletter Subscribers Directory (Admin)",
        "desc": "Admin dashboard for managing SarkariSewaIndia newsletter subscribers and alert settings."
    }
]

for item in updates:
    path = item['file']
    if not os.path.exists(path): continue
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = re.sub(r'<title>.*?</title>', f'<title>{item["title"]}</title>', html, flags=re.IGNORECASE|re.DOTALL)
    
    if re.search(r'<meta[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'(<meta[^>]*name=["\']description["\'][^>]*content=["\'])(.*?)(["\'][^>]*>)', 
                      rf'\g<1>{item["desc"]}\g<3>', html, flags=re.IGNORECASE)
    else:
        html = re.sub(r'(<head[^>]*>)', rf'\1\n  <meta name="description" content="{item["desc"]}">', html, flags=re.IGNORECASE)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)

print("Applied 10 optimizations for Batch 3")
