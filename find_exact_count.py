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

# Binary search total rows
low = 0
high = 1000000

while low <= high:
    mid = (low + high) // 2
    r = requests.get(f"{URL}/csc_centers?select=id&offset={mid}&limit=1", headers=headers)
    if r.status_code == 200 and len(r.json()) > 0:
        low = mid + 1
    else:
        high = mid - 1

total_rows = high + 1
print(f"EXACT TOTAL ROWS IN SUPABASE: {total_rows}")
