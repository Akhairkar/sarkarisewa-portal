# -*- coding: utf-8 -*-
import os, sys, glob, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1. Pages directly visible in GSC screenshots
GSC_PAGES = [
    # Top Impressions Pages (Image 3)
    ('service/jan-aushadhi/delhi/new-delhi.html', 471, 0, '0%', 6.8, 'Top Impression Jan Aushadhi'),
    ('states/haryana-employment-exchange.html', 77, 0, '0%', 5.9, 'Top Impression State Service'),
    ('service/csc-locator/karnataka/bengaluru.html', 60, 0, '0%', 9.5, 'Top Impression CSC District'),
    ('support/rti-guide.html', 47, 0, '0%', 7.7, 'Support Page'),
    ('service/csc-locator/assam/guwahati.html', 34, 0, '0%', 8.3, 'CSC District'),
    ('service/jan-aushadhi/gujarat.html', 33, 0, '0%', 9.0, 'Jan Aushadhi State Hub'),
    ('service/csc-locator/gujarat/ahmedabad.html', 33, 0, '0%', 14.0, 'CSC District'),
    ('states/haryana-income-certificate.html', 25, 0, '0%', 6.3, 'State Service'),
    ('service/csc-locator/west-bengal/siliguri.html', 25, 0, '0%', 7.9, 'CSC District'),
    ('service/csc-locator/delhi/north.html', 25, 0, '0%', 10.9, 'CSC District'),

    # Top Ranking Pages (Image 2)
    ('service/jan-aushadhi/assam/sivasagar.html', 1, 1, '100%', 1.0, 'Rank #1 Jan Aushadhi'),
    ('service/jan-aushadhi/rajasthan/', 1, 1, '100%', 1.0, 'Rank #1 Jan Aushadhi Hub Directory'),
    ('states/gujarat-domicile-certificate.html', 6, 0, '0%', 2.2, 'Rank #2.2 State Service'),
    ('service/jan-aushadhi/odisha/gajapati.html', 3, 0, '0%', 2.3, 'Rank #2.3 Jan Aushadhi'),
    ('states/jharkhand-ration-card.html', 6, 0, '0%', 2.7, 'Rank #2.7 State Service'),
    ('service/csc-locator/madhya-pradesh/shahdol.html', 1, 1, '100%', 3.0, 'Rank #3.0 CSC District'),
    ('states/karnataka-sir-voter-list.html', 4, 0, '0%', 3.5, 'Rank #3.5 SIR Voter List'),
    ('states/madhya-pradesh-labour-card.html', 3, 1, '33.3%', 3.7, 'Rank #3.7 State Service'),
    ('service/csc-locator/jammu-and-kashmir/srinagar.html', 4, 0, '0%', 4.0, 'Rank #4.0 CSC District'),
    ('service/csc-locator/rajasthan/kekri.html', 3, 0, '0%', 4.0, 'Rank #4.0 CSC District'),

    # Image 1 Pages
    ('service/csc-locator/andhra-pradesh/krishna.html', 4, 0, '0%', 60.2, 'CSC District'),
    ('service/csc-locator/madhya-pradesh/rajgarh.html', 4, 0, '0%', 48.2, 'CSC District'),
    ('states/gujarat-sir-voter-list.html', 2, 1, '50%', 46.5, 'SIR Voter List'),
    ('states/gujarat-driving-licence.html', 7, 0, '0%', 36.3, 'State Service'),
    ('service/csc-locator/tamil-nadu/chennai.html', 8, 0, '0%', 25.0, 'CSC District'),
    ('states/maharashtra-voter-id-card.html', 4, 0, '0%', 24.2, 'State Service'),
    ('states/jharkhand-voter-id-card.html', 3, 1, '33.3%', 22.3, 'State Service'),
    ('states/chhattisgarh-sir-voter-list.html', 9, 0, '0%', 19.8, 'SIR Voter List'),
    ('service/csc-locator/jharkhand/dhanbad.html', 5, 0, '0%', 19.2, 'CSC District'),
    ('states/chhattisgarh-ration-card.html', 9, 1, '11.1%', 18.2, 'State Service')
]

def analyze():
    print("=" * 100)
    print("GSC PERFORMANCE & UPGRADE DEFICIT ANALYSIS")
    print("=" * 100)
    
    for i, item in enumerate(GSC_PAGES, 1):
        rel_url = item[0]
        imp = item[1]
        clicks = item[2]
        ctr = item[3]
        pos = item[4]
        note = item[5]
        
        # Check corresponding local file path
        if rel_url.endswith('/'):
            fpath = os.path.join(ROOT, rel_url.rstrip('/') + '.html')
            if not os.path.exists(fpath):
                fpath = os.path.join(ROOT, rel_url, 'index.html')
        else:
            fpath = os.path.join(ROOT, rel_url)
            
        exists = os.path.exists(fpath)
        size_kb = os.path.getsize(fpath) / 1024 if exists else 0
        
        title = ""
        desc = ""
        faq_count = 0
        words = 0
        problems = []
        
        if exists:
            with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
                c = fp.read()
            tm = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
            title = tm.group(1).strip() if tm else 'NO_TITLE'
            dm = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', c, re.IGNORECASE)
            desc = dm.group(1).strip() if dm else 'NO_DESC'
            faq_count = len(re.findall(r'<details\b', c))
            words = len(re.findall(r'\w+', c))
            
            # Check reasons for low CTR / upgrade needed
            if '2026' not in title:
                problems.append("Missing '2026' in <title>")
            if len(title) > 65:
                problems.append(f"Title too long ({len(title)} chars, risk of SERP truncate)")
            if len(title) < 35:
                problems.append("Title too short/weak")
            if '2026' not in desc:
                problems.append("Missing '2026' in description")
            if faq_count < 6:
                problems.append(f"Low FAQs ({faq_count})")
            if words < 3000:
                problems.append(f"Thin Content ({words} words < 3000)")
            if 'class="site-header"' not in c:
                problems.append("Missing baked header")
            if 'class="site-footer"' not in c:
                problems.append("Missing baked footer")
        else:
            problems.append("FILE DOES NOT EXIST ON DISK (404 Error Risk)")
            
        print(f"\nURL: https://sarkarisewaindia.com/{rel_url}")
        print(f"  [GSC Stats] Impr: {imp} | Clicks: {clicks} | CTR: {ctr} | Pos: {pos} ({note})")
        print(f"  [File] Exists: {exists} | Size: {size_kb:.1f} KB | Words: {words} | FAQs: {faq_count}")
        print(f"  [Title] {title}")
        print(f"  [Desc] {desc[:90]}...")
        if problems:
            print(f"  ⚠️ DEFICITS: {', '.join(problems)}")
        else:
            print(f"  ✅ UPGRADED & HEALTHY")

if __name__ == '__main__':
    analyze()
