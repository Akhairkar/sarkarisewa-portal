import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT_FIXES = {
    "faq.html": {
        "title": "<title>Frequently Asked Questions | SarkariSewa India</title>",
        "desc": '<meta name="description" content="Frequently asked questions and answers regarding government schemes, identity documents, application processes, and citizen utilities on SarkariSewa India."/>'
    },
    "404.html": {
        "title": "<title>Page Not Found (404) | SarkariSewa India</title>",
        "desc": '<meta name="description" content="The page you are looking for does not exist or has been moved. Explore government schemes, certificates, and citizen tools on SarkariSewa India."/>'
    },
    "disclaimer.html": {
        "title": "<title>Disclaimer | SarkariSewa India</title>",
        "desc": '<meta name="description" content="Read the official disclaimer of SarkariSewa India regarding information accuracy, government affiliations, and independent citizen resources."/>'
    },
    "sitemap.html": {
        "title": "<title>Sitemap | SarkariSewa India</title>",
        "desc": '<meta name="description" content="Complete HTML sitemap of SarkariSewa India. Quick access to all government schemes, state certificates, citizen tools, and guides."/>'
    },
    "find-services.html": {
        "title": "<title>Find Government Services | SarkariSewa India</title>",
        "desc": '<meta name="description" content="Search and discover central and state government schemes, certificates, welfare programs, and online citizen services across India."/>'
    },
    "privacy-policy.html": {
        "title": "<title>Privacy Policy | SarkariSewa India</title>",
        "desc": '<meta name="description" content="Privacy policy of SarkariSewa India outlining data protection, cookie policy, user information handling, and third-party tools compliance."/>'
    }
}

for fname, data in ROOT_FIXES.items():
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
            
        # Replace title
        c = re.sub(r'<title>[^<]*</title>', data["title"], c, count=1)
        
        # Replace meta description
        if 'name="description"' in c:
            c = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', data["desc"], c, count=1, flags=re.IGNORECASE)
        elif "name='description'" in c:
            c = re.sub(r'<meta\s+[^>]*name=[\'\"]description[\'\"][^>]*>', data["desc"], c, count=1, flags=re.IGNORECASE)
        else:
            c = c.replace('</title>', f'</title>\n  {data["desc"]}')
            
        with open(fname, 'w', encoding='utf-8') as fp:
            fp.write(c)
        print(f"Fixed {fname}")

print("Task 3 complete!")
