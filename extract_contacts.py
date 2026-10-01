import requests
import json
import csv

SUPABASE_URL = "https://yjxsgkqspmhxndvhnjcd.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHNna3FzcG1oeG5kdmhuamNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NTMyMTIsImV4cCI6MjEwMDQyOTIxMn0.f9FDnaMGzIUalBCigoiOY8Nfl9rl5qewBXFy9AdLY4I"

def fetch_all_csc():
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Range-Unit": "items"
    }
    
    all_data = []
    limit = 1000
    offset = 0
    
    print("Fetching data from Supabase...")
    while True:
        headers["Range"] = f"{offset}-{offset + limit - 1}"
        # We only need the contact fields and location for filtering if needed
        url = f"{SUPABASE_URL}/rest/v1/csc_centres?select=name,state,district,owner_phone,owner_email,phone,whatsapp"
        
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Error fetching data: {response.text}")
            break
            
        data = response.json()
        if not data:
            break
            
        all_data.extend(data)
        
        if len(data) < limit:
            break
            
        offset += limit
        
    return all_data

def export_to_csv(data):
    # We want to extract any valid phone number
    results = []
    for row in data:
        phone = row.get("owner_phone") or row.get("phone") or row.get("whatsapp")
        email = row.get("owner_email")
        
        if phone or email:
            # Clean phone number (keep only digits)
            clean_phone = ""
            if phone:
                clean_phone = "".join(filter(str.isdigit, str(phone)))
                # If length is slightly off, we still keep it but usually Indian mobiles are 10 digits
                
            results.append({
                "Name": row.get("name", "CSC Centre"),
                "State": row.get("state", ""),
                "District": row.get("district", ""),
                "Mobile": clean_phone,
                "Email": email or ""
            })
            
    # Remove duplicates based on mobile number
    seen_phones = set()
    unique_results = []
    for r in results:
        if r["Mobile"] and r["Mobile"] not in seen_phones:
            seen_phones.add(r["Mobile"])
            unique_results.append(r)
        elif not r["Mobile"]: # If only email exists
            unique_results.append(r)
            
    filename = "csc_contact_list.csv"
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=["Name", "State", "District", "Mobile", "Email"])
        writer.writeheader()
        writer.writerows(unique_results)
        
    print(f"\nSuccessfully extracted {len(unique_results)} unique contacts!")
    print(f"Saved to {filename}")

if __name__ == "__main__":
    data = fetch_all_csc()
    export_to_csv(data)
