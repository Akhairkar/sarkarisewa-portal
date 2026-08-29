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

# Search for Nagpur in address
resp = requests.get(f"{URL}/csc_centers?address=like.*NAGPUR*&limit=5", headers=headers)
print("Search in address for NAGPUR status:", resp.status_code)
if resp.status_code == 200:
    for r in resp.json():
        print("Found by address:", r.get('state'), r.get('district'), r.get('vle_name'), r.get('pincode'))

# Search for 4400 in pincode
resp_pin = requests.get(f"{URL}/csc_centers?pincode=like.4400%&limit=5", headers=headers)
print("\nSearch for pincode 4400% status:", resp_pin.status_code)
if resp_pin.status_code == 200:
    for r in resp_pin.json():
        print("Found by pincode:", r.get('state'), r.get('district'), r.get('vle_name'), r.get('pincode'), r.get('address'))
