import requests
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Accept": "application/json"
}

test_cities = ["Patna", "Pune", "Kolkata", "Nagpur", "Jaipur", "Ajmer", "Kota", "Guntur", "Kurnool", "Nellore", "Vijayawada", "Visakhapatnam", "Guwahati", "Chandigarh"]

print("=== CHECKING SUPABASE FOR 97 CITIES ===")
for city in test_cities:
    r = requests.get(f"{URL}/csc_centers?district=ilike.*{city}*&select=vle_name,address,pincode,state,district&limit=5", headers=headers)
    if r.status_code == 200:
        data = r.json()
        print(f"City '{city}': Found {len(data)} sample centers in Supabase. (Sample dist: {data[0].get('district') if data else 'None'})")
    else:
        print(f"City '{city}': Error {r.status_code} - {r.text}")
