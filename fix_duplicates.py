import re

pairs = {
    "about.html": {
        "title": "About SarkariSewa India: Mission, Citizen Services & Team",
        "desc": "Learn about SarkariSewa India — an independent citizen assistance portal providing free guides, scheme calculators, and verified CSC center locators."
    },
    "latest-updates.html": {
        "title": "Latest Sarkari Yojana & Job Updates 2026 | SarkariSewa India",
        "desc": "Stay informed with real-time notifications on new government schemes, job recruitment forms, exam result announcements, and application deadline alerts."
    },
    "deadline-detail.html": {
        "title": "Govt Application Deadline & Key Dates Tracker 2026 | SarkariSewa",
        "desc": "Check detailed application schedule, start date, last date to apply, fee payment deadline, and direct registration links for government schemes and exams."
    },
    "tools/deadline-detail.html": {
        "title": "Govt Application Deadline & Key Dates Tracker 2026 | SarkariSewa",
        "desc": "Check detailed application schedule, start date, last date to apply, fee payment deadline, and direct registration links for government schemes and exams."
    }
}

for fpath, data in pairs.items():
    with open(fpath, 'r', encoding='utf-8') as f:
        html = f.read()

    # Update Title
    title_tag = f"<title>{data['title']}</title>"
    html = re.sub(r'<title>.*?</title>', title_tag, html, count=1, flags=re.IGNORECASE | re.DOTALL)

    # Update Meta Description
    desc_tag = f'<meta name="description" content="{data["desc"]}"/>'
    if re.search(r'<meta\s+name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)
    elif re.search(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', html, re.IGNORECASE):
        html = re.sub(r'<meta\s+content=[^>]*name=["\']description["\'][^>]*>', desc_tag, html, count=1, flags=re.IGNORECASE)

    # Update OpenGraph
    html = re.sub(r'<meta\s+property=["\']og:title["\'][^>]*>', f'<meta property="og:title" content="{data["title"]}"/>', html, count=1, flags=re.IGNORECASE)
    html = re.sub(r'<meta\s+property=["\']og:description["\'][^>]*>', f'<meta property="og:description" content="{data["desc"]}"/>', html, count=1, flags=re.IGNORECASE)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Updated {fpath}")
