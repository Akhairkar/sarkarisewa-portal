# -*- coding: utf-8 -*-
import os, sys, glob, re

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SERVICE_DIR = os.path.join(ROOT, 'service')

services = glob.glob(os.path.join(SERVICE_DIR, '*.html'))
print(f"Total files in service/: {len(services)}")

redirects = []
content_pages = []
missing_official = []
missing_related = []

for s in services:
    fn = os.path.basename(s)
    with open(s, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        
    if 'http-equiv="refresh"' in c:
        redirects.append(fn)
        continue
        
    content_pages.append(fn)
    
    # Check official link
    has_gov_link = bool(re.search(r'https?://[a-zA-Z0-9.-]+\.gov\.in|https?://[a-zA-Z0-9.-]+\.nic\.in|officialLinks|officialLink|आधिकारिक लिंक|Primary Source', c, re.IGNORECASE))
    if not has_gov_link:
        missing_official.append(fn)
        
    # Check related services
    has_related = bool(re.search(r'related-services|संबंधित सेवाएं|service-card|अन्य लोकप्रिय सेवाएं', c, re.IGNORECASE))
    if not has_related:
        missing_related.append(fn)

print(f"Redirect Stub Files: {len(redirects)}")
print(f"Real Content Pages: {len(content_pages)}")
print(f"Pages with Verified Official Gov Link: {len(content_pages) - len(missing_official)} / {len(content_pages)}")
print(f"Pages missing Gov Link: {len(missing_official)}")
print(f"Pages with Related Services Grid: {len(content_pages) - len(missing_related)} / {len(content_pages)}")
print(f"Pages missing Related Grid: {len(missing_related)}")

if missing_official:
    print("\nFirst 10 missing official link:", missing_official[:10])
if missing_related:
    print("\nFirst 10 missing related grid:", missing_related[:10])
