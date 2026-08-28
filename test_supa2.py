import glob
import os
import requests
from urllib.parse import quote

URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1"
ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

headers = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Accept": "application/json"
}

state = "maharashtra"
district = "nagpur"

query_url = f"{URL}/csc_centers?state=ilike.*{quote(state)}*"
query_url += f"&district=ilike.*{quote(district)}*"
query_url += "&select=*&limit=10"
print(query_url)

resp = requests.get(query_url, headers=headers)
print(resp.status_code)
print(len(resp.json()))
