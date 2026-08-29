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

print("=== 1. CHECKING TOTAL ROW COUNT & SAMPLE DATA ===")
# Fetch first 5 rows to see structure
resp = requests.get(f"{URL}/csc_centers?limit=5", headers=headers)
print(f"Sample fetch status: {resp.status_code}")
if resp.status_code == 200:
    print(json.dumps(resp.json(), indent=2, ensure_ascii=False))

print("\n=== 2. CHECKING HOW STATES ARE STORED ===")
# Fetch 50 random rows to see state/district casing
resp_states = requests.get(f"{URL}/csc_centers?select=state,district,pincode&limit=30", headers=headers)
if resp_states.status_code == 200:
    for r in resp_states.json():
        print(f"State: '{r.get('state')}', District: '{r.get('district')}', Pin: '{r.get('pincode')}'")

print("\n=== 3. SEARCHING FOR NAGPUR SPECIFICALLY ===")
# Test 1: exact match
resp_nagpur_eq = requests.get(f"{URL}/csc_centers?district=eq.Nagpur&limit=5", headers=headers)
print("district=eq.Nagpur status:", resp_nagpur_eq.status_code, "count:", len(resp_nagpur_eq.json()) if resp_nagpur_eq.status_code == 200 else "err")

# Test 2: uppercase match
resp_nagpur_upper = requests.get(f"{URL}/csc_centers?district=eq.NAGPUR&limit=5", headers=headers)
print("district=eq.NAGPUR status:", resp_nagpur_upper.status_code, "count:", len(resp_nagpur_upper.json()) if resp_nagpur_upper.status_code == 200 else "err")

# Test 3: lowercase match
resp_nagpur_lower = requests.get(f"{URL}/csc_centers?district=eq.nagpur&limit=5", headers=headers)
print("district=eq.nagpur status:", resp_nagpur_lower.status_code, "count:", len(resp_nagpur_lower.json()) if resp_nagpur_lower.status_code == 200 else "err")

# Test 4: state=Maharashtra and district=Nagpur
resp_mh_nagpur = requests.get(f"{URL}/csc_centers?state=eq.Maharashtra&district=eq.Nagpur&limit=5", headers=headers)
print("state=eq.Maharashtra&district=eq.Nagpur status:", resp_mh_nagpur.status_code, "count:", len(resp_mh_nagpur.json()) if resp_mh_nagpur.status_code == 200 else "err")

# Test 5: state=MAHARASHTRA and district=NAGPUR
resp_mh_nagpur_u = requests.get(f"{URL}/csc_centers?state=eq.MAHARASHTRA&district=eq.NAGPUR&limit=5", headers=headers)
print("state=eq.MAHARASHTRA&district=eq.NAGPUR status:", resp_mh_nagpur_u.status_code, "count:", len(resp_mh_nagpur_u.json()) if resp_mh_nagpur_u.status_code == 200 else "err")

# Test 6: search by Nagpur pincodes
resp_pincode = requests.get(f"{URL}/csc_centers?pincode=eq.440001&limit=5", headers=headers)
print("pincode=eq.440001 status:", resp_pincode.status_code, "data:", resp_pincode.json() if resp_pincode.status_code == 200 else "err")

resp_pincode_10 = requests.get(f"{URL}/csc_centers?pincode=eq.440010&limit=5", headers=headers)
print("pincode=eq.440010 status:", resp_pincode_10.status_code, "data:", resp_pincode_10.json() if resp_pincode_10.status_code == 200 else "err")
