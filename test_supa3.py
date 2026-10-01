import requests

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Accept": "application/json"
}

resp = requests.get(f"{URL}/csc_centers?state=ilike.maharashtra&district=ilike.nagpur&select=*&limit=10", headers=headers)
print("ilike exact:", resp.status_code)

resp2 = requests.get(f"{URL}/csc_centers?state=ilike.*maharashtra*&select=*&limit=10", headers=headers)
print("state only wildcard:", resp2.status_code)
