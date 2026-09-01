import os
import glob
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load services.json
with open('data/services.json', 'r', encoding='utf-8', errors='ignore') as fp:
    services_data = json.load(fp)

print(f"Loaded {len(services_data)} services from services.json")

# Map services by filename / id
service_map = {}
services_by_state = {}
services_by_cat = {}

for s in services_data:
    # determine filename
    sid = s.get('id', '')
    fn = sid + '.html' if not sid.endswith('.html') else sid
    s['filename'] = fn
    service_map[fn] = s
    
    state = s.get('state', '')
    if state:
        if state not in services_by_state:
            services_by_state[state] = []
        services_by_state[state].append(s)
        
    cat = s.get('category', '')
    if cat:
        if cat not in services_by_cat:
            services_by_cat[cat] = []
        services_by_cat[cat].append(s)

print(f"Mapped {len(service_map)} service filenames.")
print(f"States count: {len(services_by_state)}, Categories count: {len(services_by_cat)}")

# Get all 519 non-stub service pages
service_files = sorted(glob.glob('service/*.html'))
print(f"Total service files on disk: {len(service_files)}")

non_stubs = []
stubs = []

for sf in service_files:
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    if 'window.location.replace' in content or 'http-equiv="refresh"' in content or len(content) < 1500:
        stubs.append(sf)
    else:
        non_stubs.append(sf)

print(f"Active non-stub service pages: {len(non_stubs)}")
print(f"Redirect stubs: {len(stubs)}")
