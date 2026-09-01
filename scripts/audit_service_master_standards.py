import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

service_files = sorted(glob.glob('service/*.html'))
non_stubs = []
for sf in service_files:
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'window.location.replace' not in c and 'http-equiv="refresh"' not in c:
        non_stubs.append(sf)

print(f"Auditing {len(non_stubs)} non-stub service pages against Master Standard...")

missing_header = 0
missing_footer = 0
missing_tools = 0
missing_related_grid = 0
missing_faq = 0
missing_schema = 0
missing_gov_link = 0

for sf in non_stubs:
    fname = os.path.basename(sf)
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    if 'site-header' not in c and 'header-inner' not in c:
        missing_header += 1
    if 'site-footer' not in c and 'footer-inner' not in c:
        missing_footer += 1
    if 'tools/' not in c and 'eligibility-checker' not in c and 'csc-locator' not in c:
        missing_tools += 1
    if 'REAL RELATED SERVICES GRID' not in c and 'Related Services' not in c and 'संबंधित प्रमुख सरकारी सेवाएं' not in c:
        missing_related_grid += 1
    if '<details' not in c and 'class="faq' not in c and 'faq-item' not in c:
        missing_faq += 1
    if 'application/ld+json' not in c:
        missing_schema += 1
    if '.gov.in' not in c and '.nic.in' not in c and '.org.in' not in c and '.ac.in' not in c and 'official' not in c.lower():
        missing_gov_link += 1

print(f"\n--- Master Standards Compliance Results ({len(non_stubs)} Pages) ---")
print(f"1. Pre-baked Header: {'✅ 100%' if missing_header == 0 else f'❌ {missing_header} missing'}")
print(f"2. Pre-baked Footer: {'✅ 100%' if missing_footer == 0 else f'❌ {missing_footer} missing'}")
print(f"3. Useful Tools Links: {'✅ 100%' if missing_tools == 0 else f'❌ {missing_tools} missing'}")
print(f"4. Related Services Grid: {'✅ 100%' if missing_related_grid == 0 else f'❌ {missing_related_grid} missing'}")
print(f"5. FAQ Section: {'✅ 100%' if missing_faq == 0 else f'❌ {missing_faq} missing'}")
print(f"6. JSON-LD Schema: {'✅ 100%' if missing_schema == 0 else f'❌ {missing_schema} missing'}")
print(f"7. Official Portal Links: {'✅ 100%' if missing_gov_link == 0 else f'❌ {missing_gov_link} missing'}")
