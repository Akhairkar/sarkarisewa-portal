import os
import glob
import re
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Step 1: Find all stub files
service_files = sorted(glob.glob('service/*.html'))
stubs = []

for sf in service_files:
    fname = os.path.basename(sf)
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    if 'window.location.replace' in content or 'http-equiv="refresh"' in content or len(content) < 1500:
        stubs.append(fname)

print(f"Found {len(stubs)} redirect stub files in service/:")
for s in stubs[:10]:
    print(" -", s)

# Step 2: Read sitemap.xml
with open('sitemap.xml', 'r', encoding='utf-8', errors='ignore') as fp:
    sitemap_content = fp.read()

initial_url_count = sitemap_content.count('<url>')
print(f"Initial <url> count in sitemap.xml: {initial_url_count}")

removed_count = 0
for stub in stubs:
    # Pattern to remove url block containing this stub
    stub_loc = f"https://sarkarisewaindia.com/service/{stub}"
    # regex pattern for <url>...</url> containing stub_loc
    pattern = rf'\s*<url>\s*<loc>{re.escape(stub_loc)}</loc>.*?</url>'
    if re.search(pattern, sitemap_content, re.DOTALL):
        sitemap_content = re.sub(pattern, '', sitemap_content, flags=re.DOTALL)
        removed_count += 1

print(f"Removed {removed_count} stub URLs from sitemap.xml!")
final_url_count = sitemap_content.count('<url>')
print(f"Final <url> count in sitemap.xml: {final_url_count}")

# Format / Clean any empty lines
sitemap_content = re.sub(r'\n\s*\n', '\n', sitemap_content)

with open('sitemap.xml', 'w', encoding='utf-8') as fp:
    fp.write(sitemap_content)

print("Saved clean sitemap.xml successfully!")
