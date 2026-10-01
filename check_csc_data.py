import requests
import json

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Content-Type": "application/json"
}

# 1. Try to query csc_centres
print("Querying csc_centres...")
resp = requests.get(f"{URL}/csc_centres?select=*", headers=headers)
print("Status:", resp.status_code)
if resp.status_code == 200:
    data = resp.json()
    print("Row count:", len(data))
    if data:
        print("Sample row:", json.dumps(data[0], indent=2))
else:
    print("Error:", resp.text)

# 2. Try another common name like csc_centers
print("\nQuerying csc_centers...")
resp = requests.get(f"{URL}/csc_centers?select=*", headers=headers)
print("Status:", resp.status_code)
if resp.status_code == 200:
    data = resp.json()
    print("Row count:", len(data))
    if data:
        print("Sample row:", json.dumps(data[0], indent=2))
else:
    print("Error:", resp.text)
    
# 3. List all tables by checking OpenAPI spec
print("\nFetching OpenAPI schema to see table names...")
resp = requests.get(f"{URL}/", headers=headers)
if resp.status_code == 200:
    schema = resp.json()
    tables = list(schema.get("definitions", {}).keys())
    print("Tables found:", tables)
