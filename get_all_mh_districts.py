import sys
import requests

sys.stdout.reconfigure(encoding='utf-8')

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Accept": "application/json"
}

# Fetch all rows where state is MAHARASHTRA
offset = 0
mh_districts = {}

while True:
    r = requests.get(f"{URL}/csc_centers?state=eq.MAHARASHTRA&select=district&offset={offset}&limit=1000", headers=headers)
    if r.status_code != 200 or not r.json():
        break
    data = r.json()
    for row in data:
        d = row.get('district') or 'UNKNOWN'
        mh_districts[d] = mh_districts.get(d, 0) + 1
    offset += 1000

print(f"=== ALL DISTRICTS IN MAHARASHTRA IN SUPABASE (Total Rows: {sum(mh_districts.values())}) ===")
for d, count in sorted(mh_districts.items()):
    print(f"  - '{d}': {count} centers")
