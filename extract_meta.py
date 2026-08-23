import sys
import json
import re
import os

files = sys.argv[1:]
results = []

for filepath in files:
    filepath = filepath.strip()
    if not filepath or not os.path.exists(filepath): continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
        
    title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    title = title_match.group(1).strip() if title_match else ""
    
    desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE | re.DOTALL)
    desc = desc_match.group(1).strip() if desc_match else ""
    
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
    h1 = h1_match.group(1).strip() if h1_match else ""
    # strip tags from h1
    h1 = re.sub(r'<[^>]+>', '', h1).strip()
    
    results.append({
        "file": filepath,
        "title": title,
        "description": desc,
        "h1": h1
    })

print(json.dumps(results, indent=2))
