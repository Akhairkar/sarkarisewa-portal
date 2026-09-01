import os
import glob
import re
import json
from bs4 import BeautifulSoup

def extract_faqs_from_html(html_text):
    faqs = []
    
    # 1. Try parsing details.faq-item
    details_pattern = re.findall(r'<details[^>]*class=["\'][^"\']*faq-item[^"\']*["\'][^>]*>.*?<summary[^>]*>(?:<span[^>]*>)?(.*?)(?:</span>)?</summary>.*?<div[^>]*class=["\']faq-answer["\'][^>]*>(.*?)</div>.*?</details>', html_text, re.DOTALL | re.IGNORECASE)
    for q_raw, a_raw in details_pattern:
        # clean question
        q_clean = re.sub(r'<[^>]+>', '', q_raw).strip()
        q_clean = re.sub(r'^[❓\s\?]+', '', q_clean).strip()
        
        # clean answer
        a_clean = re.sub(r'<[^>]+>', '', a_raw).strip()
        a_clean = re.sub(r'\s+', ' ', a_clean).strip()
        
        if q_clean and a_clean and len(q_clean) > 5 and len(a_clean) > 10:
            faqs.append({"question": q_clean, "answer": a_clean})
            
    # 2. If none, try div.faq-item
    if not faqs:
        div_pattern = re.findall(r'<div[^>]*class=["\'][^"\']*faq-item[^"\']*["\'][^>]*>.*?<h3[^>]*>(.*?)</h3>.*?<div[^>]*class=["\']faq-answer["\'][^>]*>(.*?)</div>.*?</div>', html_text, re.DOTALL | re.IGNORECASE)
        for q_raw, a_raw in div_pattern:
            q_clean = re.sub(r'<[^>]+>', '', q_raw).strip()
            q_clean = re.sub(r'^[❓\s\?]+', '', q_clean).strip()
            a_clean = re.sub(r'<[^>]+>', '', a_raw).strip()
            a_clean = re.sub(r'\s+', ' ', a_clean).strip()
            if q_clean and a_clean and len(q_clean) > 5 and len(a_clean) > 10:
                faqs.append({"question": q_clean, "answer": a_clean})
                
    return faqs

# Test on siddharthnagar.html
test_file = 'service/csc-locator/uttar-pradesh/siddharthnagar.html'
with open(test_file, 'r', encoding='utf-8', errors='ignore') as fp:
    content = fp.read()

faqs = extract_faqs_from_html(content)
print(f"Extracted {len(faqs)} FAQs from {test_file}:")
for i, f in enumerate(faqs[:3]):
    print(f"Q{i+1}: {f['question']}")
    print(f"A{i+1}: {f['answer'][:80]}...")
