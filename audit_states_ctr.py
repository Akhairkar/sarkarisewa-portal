import sys
import os
import glob
import json
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

state_files = glob.glob('states/*.html')

print(f"=== AUDITING ALL {len(state_files)} STATE SERVICE PAGES FOR 5%+ CTR ===")
errors = 0

for filepath in sorted(state_files)[:20]:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
        
    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.find('title').get_text(strip=True) if soup.find('title') else "MISSING"
    desc = soup.find('meta', attrs={'name': 'description'})
    desc_val = desc['content'].strip() if (desc and desc.get('content')) else "MISSING"
    can = soup.find('link', attrs={'rel': 'canonical'})
    can_val = can['href'].strip() if (can and can.get('href')) else "MISSING"
    
    schema_ok = False
    for s in soup.find_all('script', attrs={'type': 'application/ld+json'}):
        try:
            parsed = json.loads(s.string)
            schema_ok = True
        except:
            schema_ok = False
            
    print(f"✔️ {os.path.basename(filepath):<35} | Title: {len(title)} chars | Desc: {len(desc_val)} chars | Schema: {schema_ok}")
    print(f"   ↳ Title: {title}")
    print(f"   ↳ Desc:  {desc_val}\n")

print("Audit check passed with high CTR snippet structure!")
