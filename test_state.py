import requests
import json
import time

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}"
}

print("Testing with state filter...")
start = time.time()
resp = requests.get(f"{URL}/csc_centers?state=ilike.*maharashtra*&district=ilike.*nagpur*&limit=10", headers=headers)
print("Status:", resp.status_code, "in", time.time() - start)
if resp.status_code == 200:
    for row in resp.json():
        print(row.get('district'), row.get('pincode'), row.get('state'))
