import requests
import json
import os
import time

url = "https://janaushadhi.gov.in:8443/api/v1/website/getAllKendraByStateDistrict"

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9HVUVTVCIsInN1YiI6ImRmM2UwOGVjLTU3YTEtNDFjYy05NDQyLWQ5NDY0YzVmMTYzMSIsImlhdCI6MTc4NzM4Nzc4MSwiZXhwIjoxNzg3Mzg5NTgxfQ.ibAg-igvr61E2LkCmeD4RM5nGaVqhpgmDXKhZq8G3HE",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "DNT": "1",
    "Origin": "https://janaushadhi.gov.in",
    "Referer": "https://janaushadhi.gov.in/locate-kendra",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
    "sec-ch-ua": '"Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"'
}

def fetch_data():
    all_records = []
    
    # First attempt: Try fetching all records in one go (pageSize = 30000)
    print("Attempting to fetch all records in a single request...")
    payload = {
        "pageIndex": 0,
        "pageSize": 30000,
        "stateId": 0,
        "districtId": 0,
        "pinCode": 0,
        "storeCode": ""
    }
    
    try:
        response = requests.post(url, headers=headers, json=payload, verify=False)
        data = response.json()
        
        body = data.get("responseBody", {})
        total_elements = body.get("totalElement", 0)
        records = body.get("addKendraResponseList", [])
        
        if len(records) >= total_elements or len(records) > 20000:
            print(f"Success! Fetched {len(records)} records in one go.")
            save_data(records)
            return
        
        print(f"Server limited the pageSize to {len(records)}. Falling back to pagination...")
        
        # Fallback to paginated loop
        # We will use a pageSize of 1000 which is generally safe
        page_size = 1000
        page_index = 0
        
        while True:
            print(f"Fetching page {page_index} (pageSize: {page_size})...")
            payload["pageIndex"] = page_index
            payload["pageSize"] = page_size
            
            resp = requests.post(url, headers=headers, json=payload, verify=False)
            page_data = resp.json().get("responseBody", {})
            page_records = page_data.get("addKendraResponseList", [])
            
            if not page_records:
                break
                
            all_records.extend(page_records)
            
            if page_data.get("isLastPage", True):
                break
                
            page_index += 1
            time.sleep(0.5) # Be polite to the server
            
        print(f"Success! Fetched a total of {len(all_records)} records.")
        save_data(all_records)
        
    except Exception as e:
        print(f"Error fetching data: {e}")

def save_data(records):
    os.makedirs('data', exist_ok=True)
    file_path = 'data/jan_aushadhi_stores_all.json'
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(records, f, ensure_ascii=False) # Keep hindi text native if any
    print(f"Data saved to {file_path}. Size: {os.path.getsize(file_path) / (1024*1024):.2f} MB")

if __name__ == "__main__":
    # Disable SSL warnings just in case the govt site has weird certs
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    fetch_data()
