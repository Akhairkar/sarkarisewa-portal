import sys
import os
import glob
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

tier1_files = [
    'index.html',
    '7th-pay-commission-calculator.html',
    '8th-pay-calculator.html',
] + glob.glob('tools/*.html')

print(f"Total Tier 1 files to inspect: {len(tier1_files)}")

audit_results = []

for filepath in sorted(tier1_files):
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    title_tag = soup.find('title')
    title = title_tag.get_text(strip=True) if title_tag else "MISSING"
    
    desc_tag = soup.find('meta', attrs={'name': 'description'})
    desc = desc_tag['content'].strip() if (desc_tag and desc_tag.get('content')) else "MISSING"
    
    canonical_tag = soup.find('link', attrs={'rel': 'canonical'})
    canonical = canonical_tag['href'].strip() if (canonical_tag and canonical_tag.get('href')) else "MISSING"
    
    schemas = soup.find_all('script', attrs={'type': 'application/ld+json'})
    schema_types = []
    for s in schemas:
        try:
            raw = s.string or ""
            if '"@type"' in raw:
                import json
                sd = json.loads(raw)
                if isinstance(sd, dict):
                    schema_types.append(sd.get('@type', 'Unknown'))
                    if '@graph' in sd:
                        schema_types.extend([item.get('@type', 'Unknown') for item in sd['@graph']])
        except:
            schema_types.append("JSON_ERROR")
            
    print(f"\n--- FILE: {filepath} ---")
    print(f"  Title ({len(title)} chars): {title}")
    print(f"  Desc ({len(desc)} chars): {desc}")
    print(f"  Canonical: {canonical}")
    print(f"  Schemas: {schema_types if schema_types else 'NONE'}")
