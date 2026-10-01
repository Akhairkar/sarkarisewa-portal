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

# Fetch all districts under MAHARASHTRA by paging
print("=== FETCHING MAHARASHTRA DISTRICTS FROM SUPABASE ===")
districts = set()

# Paging 1000 rows at a time
offset = 0
while offset < 20000:
    resp = requests.get(f"{URL}/csc_centers?state=eq.MAHARASHTRA&select=district&offset={offset}&limit=1000", headers=headers)
    if resp.status_code != 200 or not resp.json():
        break
    for r in resp.json():
        if r.get('district'):
            districts.add(r['district'])
    offset += 1000

print(f"Total Unique Maharashtra Districts found in Supabase: {len(districts)}")
print(sorted(list(districts)))
