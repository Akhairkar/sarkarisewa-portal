import requests
import csv
import time
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9HVUVTVCIsInN1YiI6ImRmM2UwOGVjLTU3YTEtNDFjYy05NDQyLWQ5NDY0YzVmMTYzMSIsImlhdCI6MTc4NzM4Nzc4MSwiZXhwIjoxNzg3Mzg5NTgxfQ.ibAg-igvr61E2LkCmeD4RM5nGaVqhpgmDXKhZq8G3HE"

headers = {
    "Accept": "application/json, text/plain, */*",
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json",
    "Origin": "https://janaushadhi.gov.in",
    "Referer": "https://janaushadhi.gov.in/locate-kendra",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

# 1. Sabhi States fetch karein
states_url = "https://janaushadhi.gov.in:8443/api/kendra/getAllStateOfIndia"
print("Fetching states list...")
res = requests.get(states_url, headers=headers, verify=False)
state_json = res.json()
states = state_json.get('data', [])

all_stores = []
kendra_url = "https://janaushadhi.gov.in:8443/api/v1/website/getAllKendraByStateDistrict"

for st in states:
    state_id = st.get('id')
    state_name = st.get('stateNameInEnglish')
    print(f"Fetching: {state_name} (ID: {state_id})...")
    
    page = 0
    while True:
        payload = {
            "pageIndex": page,
            "pageSize": 500,
            "stateId": str(state_id),
            "districtId": 0,
            "pinCode": 0,
            "storeCode": ""
        }
        r = requests.post(kendra_url, headers=headers, json=payload, verify=False)
        data = r.json()
        
        body = data.get("responseBody", {})
        items = body.get("addKendraResponseList", []) if isinstance(body, dict) else []
        
        if not items or len(items) == 0:
            break
            
        all_stores.extend(items)
        if len(items) < 500:
            break
        page += 1
        time.sleep(0.3)

# 2. CSV file save karein
if all_stores:
    keys = all_stores[0].keys()
    file_path = "jan_aushadhi_all_india.csv"
    with open(file_path, "w", newline='', encoding="utf-8-sig") as f:
        dict_writer = csv.DictWriter(f, keys)
        dict_writer.writeheader()
        dict_writer.writerows(all_stores)
    print(f"Done! Total {len(all_stores)} kendras saved to {file_path}")
else:
    print("No stores found.")
