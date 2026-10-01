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

# Check sample rows at intervals of 50,000 to see state distribution
for offset in range(0, 500000, 25000):
    r = requests.get(f"{URL}/csc_centers?select=state,district,pincode&offset={offset}&limit=1", headers=headers)
    if r.status_code == 200 and r.json():
        row = r.json()[0]
        print(f"Row #{offset:6d}: State = '{row.get('state')}', District = '{row.get('district')}', Pin = '{row.get('pincode')}'")
