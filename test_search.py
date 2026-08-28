import requests
import json

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Content-Type": "application/json"
}

# The JS does:
# .or(`pincode.ilike.%${q}%,vle_name.ilike.%${q}%,address.ilike.%${q}%,district.ilike.%${q}%`)
# In PostgREST URL format:
query = "or=(pincode.ilike.*4400*,vle_name.ilike.*4400*,address.ilike.*4400*,district.ilike.*4400*)&limit=10"

resp = requests.get(f"{URL}/csc_centers?{query}", headers=headers)
print("Status:", resp.status_code)
print("Response:", resp.text)
