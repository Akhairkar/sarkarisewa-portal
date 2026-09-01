import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

tool_files = sorted(glob.glob('tools/*.html'))
print(f"Total HTML files in tools/: {len(tool_files)}")

has_faq_content = 0
missing_faq_content = []
has_faq_schema = 0
missing_faq_schema = []

for tf in tool_files:
    fname = os.path.basename(tf)
    with open(tf, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        
    has_content = False
    if 'faq-section' in content or 'faq-item' in content or 'Frequently Asked Questions' in content or 'अक्सर पूछे जाने वाले सवाल' in content:
        has_faq_content += 1
        has_content = True
    else:
        missing_faq_content.append(fname)
        
    if '"FAQPage"' in content or '"@type": "FAQPage"' in content or '"@type":"FAQPage"' in content:
        has_faq_schema += 1
    else:
        missing_faq_schema.append(fname)

print(f"Has FAQ Content: {has_faq_content} / {len(tool_files)}")
print(f"Missing FAQ Content ({len(missing_faq_content)}): {missing_faq_content}")
print(f"Has FAQ Schema: {has_faq_schema} / {len(tool_files)}")
print(f"Missing FAQ Schema ({len(missing_faq_schema)}): {missing_faq_schema}")
