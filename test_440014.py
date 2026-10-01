import requests
import json

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# The exact query parameter that Supabase JS client constructs:
query = "or=(pincode.ilike.*440014*,vle_name.ilike.*440014*,address.ilike.*440014*,district.ilike.*440014*)&limit=100"

print("Fetching with query:", query)
resp = requests.get(f"{URL}/csc_centers?{query}", headers=headers)
print("Status:", resp.status_code)
print("Response:", resp.text[:500]) # Print first 500 chars

# Also let's try with `ilike.%440014%` literal (which is wrong in URL but maybe the user's browser sends it?)
query2 = "or=(pincode.ilike.%25440014%25,vle_name.ilike.%25440014%25,address.ilike.%25440014%25,district.ilike.%25440014%25)&limit=100"
print("\nFetching with URL encoded % signs:")
resp2 = requests.get(f"{URL}/csc_centers?{query2}", headers=headers)
print("Status2:", resp2.status_code)
print("Response2:", resp2.text[:500])
