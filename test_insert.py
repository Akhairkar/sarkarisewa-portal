import urllib.request
import json

url = "https://yjxsgkqspmhxndvhnjcd.supabase.co/rest/v1/csc_claims"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

payload = {
    "application_id": "TEST-12345",
    "owner_name": "Test Owner",
    "owner_mobile": "9999999999",
    "centre_name": "Test Centre",
    "full_address": "Test Address",
    "city": "Test City",
    "district": "Test District",
    "state": "Test State",
    "pincode": "123456",
    "status": "pending"
}

req = urllib.request.Request(url, headers=headers, data=json.dumps(payload).encode('utf-8'))
try:
    with urllib.request.urlopen(req) as response:
        print("Success:", response.read().decode())
except urllib.error.HTTPError as e:
    print("HTTP Error:", e.code, e.read().decode())
except Exception as e:
    print("Error:", e)
