import requests
import time

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}"
}

def test_query(q_str):
    print("\nQuery:", q_str)
    start = time.time()
    resp = requests.get(f"{URL}/csc_centers?{q_str}", headers=headers)
    end = time.time()
    print(f"Status: {resp.status_code} (took {end-start:.2f}s)")

test_query("or=(vle_name.ilike.*Nagpur*,district.ilike.*Nagpur*)&limit=100")
test_query("or=(vle_name.ilike.*Mohan*,district.ilike.*Mohan*)&limit=100")
