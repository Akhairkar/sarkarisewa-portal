import sys
import requests
import json

sys.stdout.reconfigure(encoding='utf-8')

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Accept": "application/json"
}

# Fetch sample rows across different states
resp = requests.get(f"{URL}/csc_centers?select=state,district&limit=5000", headers=headers)
if resp.status_code == 200:
    data = resp.json()
    state_district_map = {}
    for r in data:
        st = r.get('state') or 'UNKNOWN'
        dist = r.get('district') or 'UNKNOWN'
        if st not in state_district_map:
            state_district_map[st] = set()
        state_district_map[st].add(dist)
        
    print("=== SUMMARY OF FIRST 5000 ROWS ===")
    for st, dists in sorted(state_district_map.items()):
        print(f"State: {st} -> {len(dists)} districts: {sorted(list(dists))[:10]}")

# Let's count total rows in Supabase by paginating
total = 0
offset = 0
while True:
    r = requests.get(f"{URL}/csc_centers?select=id&offset={offset}&limit=10000", headers=headers)
    if r.status_code != 200:
        break
    batch = len(r.json())
    total += batch
    if batch < 10000:
        break
    offset += 10000

print(f"\n==========================================")
print(f"ACTUAL TOTAL ROWS CURRENTLY IN SUPABASE: {total}")
print(f"==========================================")
