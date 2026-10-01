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

total = 0
offset = 0
states_count = {}

while True:
    r = requests.get(f"{URL}/csc_centers?select=state&offset={offset}&limit=1000", headers=headers)
    if r.status_code != 200:
        print("Error at offset", offset, r.status_code)
        break
    data = r.json()
    if not data:
        break
    total += len(data)
    for row in data:
        st = row.get('state') or 'UNKNOWN'
        states_count[st] = states_count.get(st, 0) + 1
    offset += 1000
    if offset % 20000 == 0:
        print(f"Counted {total} rows so far...")

print(f"\n==========================================")
print(f"ACTUAL TOTAL ROWS IN SUPABASE: {total}")
print(f"==========================================")
print("Breakdown by State:")
for st, cnt in sorted(states_count.items(), key=lambda x: x[1], reverse=True):
    print(f"  - {st}: {cnt} centers")
