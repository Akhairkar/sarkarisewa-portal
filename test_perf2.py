import requests
import time

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

def test_query(q_str):
    print("\nQuery:", q_str)
    start = time.time()
    resp = requests.get(f"{URL}/csc_centers?{q_str}", headers=headers)
    end = time.time()
    print(f"Status: {resp.status_code} (took {end-start:.2f}s)")
    if resp.status_code == 200:
        print("Results:", len(resp.json()))
    else:
        print("Error:", resp.text)

test_query("or=(pincode.ilike.*440014*,vle_name.ilike.*440014*,district.ilike.*440014*)&limit=100")
test_query("or=(pincode.eq.440014,vle_name.ilike.*440014*,district.ilike.*440014*)&limit=100")
test_query("or=(pincode.eq.440014)&limit=100")

