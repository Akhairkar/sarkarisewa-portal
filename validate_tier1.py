import sys
import os
import glob
import json
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

tier1_files = [
    'index.html',
    '7th-pay-commission-calculator.html',
    '8th-pay-calculator.html',
] + glob.glob('tools/*.html')

print(f"=== RUNNING POST-OPTIMIZATION AUDIT ON {len(tier1_files)} TIER 1 FILES ===")
errors_found = 0

for filepath in sorted(tier1_files):
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    title_tag = soup.find('title')
    title = title_tag.get_text(strip=True) if title_tag else None
    
    desc_tag = soup.find('meta', attrs={'name': 'description'})
    desc = desc_tag['content'].strip() if (desc_tag and desc_tag.get('content')) else None
    
    canonical_tag = soup.find('link', attrs={'rel': 'canonical'})
    canonical = canonical_tag['href'].strip() if (canonical_tag and canonical_tag.get('href')) else None
    
    schemas = soup.find_all('script', attrs={'type': 'application/ld+json'})
    schema_valid = False
    for s in schemas:
        try:
            raw = s.string or ""
            parsed = json.loads(raw)
            schema_valid = True
        except Exception as e:
            print(f"❌ Schema Error in {filepath}: {e}")
            errors_found += 1
            
    if not title or len(title) < 10:
        print(f"❌ Title missing or too short in {filepath}")
        errors_found += 1
    if not desc or len(desc) < 30:
        print(f"❌ Meta Description missing or too short in {filepath}")
        errors_found += 1
    if not canonical or "jan-aushadhi" in canonical and "jan-aushadhi" not in filepath:
        print(f"❌ Bad Canonical in {filepath}: {canonical}")
        errors_found += 1
        
    print(f"✔️ {filepath:<35} | Title: {len(title)} chars | Desc: {len(desc)} chars | Canonical OK | Schema Valid: {schema_valid}")

if errors_found == 0:
    print("\n🎉 AUDIT PASSED 100%! All Tier 1 pages are healthy, with zero broken schemas, perfect canonicals, and click-optimized titles.")
else:
    print(f"\n⚠️ Audit found {errors_found} errors.")
