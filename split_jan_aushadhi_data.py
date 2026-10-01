import json
import os
import re

states = [
    {"slug": "andhra-pradesh", "name_en": "Andhra Pradesh"},
    {"slug": "arunachal-pradesh", "name_en": "Arunachal Pradesh"},
    {"slug": "assam", "name_en": "Assam"},
    {"slug": "bihar", "name_en": "Bihar"},
    {"slug": "chhattisgarh", "name_en": "Chhattisgarh"},
    {"slug": "goa", "name_en": "Goa"},
    {"slug": "gujarat", "name_en": "Gujarat"},
    {"slug": "haryana", "name_en": "Haryana"},
    {"slug": "himachal-pradesh", "name_en": "Himachal Pradesh"},
    {"slug": "jharkhand", "name_en": "Jharkhand"},
    {"slug": "karnataka", "name_en": "Karnataka"},
    {"slug": "kerala", "name_en": "Kerala"},
    {"slug": "madhya-pradesh", "name_en": "Madhya Pradesh"},
    {"slug": "maharashtra", "name_en": "Maharashtra"},
    {"slug": "manipur", "name_en": "Manipur"},
    {"slug": "meghalaya", "name_en": "Meghalaya"},
    {"slug": "mizoram", "name_en": "Mizoram"},
    {"slug": "nagaland", "name_en": "Nagaland"},
    {"slug": "odisha", "name_en": "Odisha"},
    {"slug": "punjab", "name_en": "Punjab"},
    {"slug": "rajasthan", "name_en": "Rajasthan"},
    {"slug": "sikkim", "name_en": "Sikkim"},
    {"slug": "tamil-nadu", "name_en": "Tamil Nadu"},
    {"slug": "telangana", "name_en": "Telangana"},
    {"slug": "tripura", "name_en": "Tripura"},
    {"slug": "uttar-pradesh", "name_en": "Uttar Pradesh"},
    {"slug": "uttarakhand", "name_en": "Uttarakhand"},
    {"slug": "west-bengal", "name_en": "West Bengal"},
    {"slug": "andaman-nicobar", "name_en": "Andaman And Nicobar Islands"},
    {"slug": "chandigarh", "name_en": "Chandigarh"},
    {"slug": "dadra-nagar-haveli-daman-diu", "name_en": "The Dadra And Nagar Haveli And Daman And Diu"}, # Adjusted for official name
    {"slug": "delhi", "name_en": "Delhi"},
    {"slug": "jammu-kashmir", "name_en": "Jammu And Kashmir"},
    {"slug": "ladakh", "name_en": "Ladakh"},
    {"slug": "lakshadweep", "name_en": "Lakshadweep"},
    {"slug": "puducherry", "name_en": "Puducherry"}
]

# Create output dir
out_dir = "data/jan-aushadhi"
os.makedirs(out_dir, exist_ok=True)

# Load master data
with open("data/jan_aushadhi_stores_all.json", "r", encoding="utf-8") as f:
    master_data = json.load(f)

# Group by state
state_groups = {}
for record in master_data:
    st_name = record.get("stateName", "").strip().lower()
    if st_name not in state_groups:
        state_groups[st_name] = []
    
    # We don't need all huge fields for the frontend. Optimize the payload!
    optimized_record = {
        "p": record.get("contactPerson") or "",
        "ph": record.get("contactNumber") or "",
        "pin": record.get("pinCode") or "",
        "d": record.get("districtName") or "",
        "a": record.get("kendraAddress") or "",
        "lt": record.get("latitude") or "",
        "lg": record.get("longitude") or ""
    }
    state_groups[st_name].append(optimized_record)

print(f"Total states found in data: {len(state_groups)}")

# Map to slugs and save
matched = 0
for st in states:
    slug = st["slug"]
    name_search = st["name_en"].lower().replace("and", "").replace("&", "").strip()
    
    # Find matching state in data
    found_key = None
    for k in state_groups.keys():
        k_clean = k.replace("and", "").replace("&", "").strip()
        if name_search in k_clean or k_clean in name_search:
            found_key = k
            break
            
    if found_key:
        matched += 1
        with open(os.path.join(out_dir, f"{slug}.json"), "w", encoding="utf-8") as f:
            json.dump(state_groups[found_key], f, separators=(',', ':')) # minified
        print(f"Saved {len(state_groups[found_key])} records for {slug} ({found_key})")
    else:
        print(f"WARNING: Could not find data for {slug} ({st['name_en']})")
        # Save empty array so frontend doesn't 404
        with open(os.path.join(out_dir, f"{slug}.json"), "w", encoding="utf-8") as f:
            json.dump([], f)

print(f"Successfully processed {matched} states.")
