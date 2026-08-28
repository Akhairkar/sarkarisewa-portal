import requests
import json

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}"
}

resp = requests.get(f"{URL}/csc_centers?district=ilike.*nagpur*&limit=10", headers=headers)
print("Status:", resp.status_code)
if resp.status_code == 200:
    data = resp.json()
    print("Found:", len(data))
    for row in data:
        print(row.get('district'), row.get('pincode'), row.get('state'))
