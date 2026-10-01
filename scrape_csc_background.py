import requests
import csv
import time
import urllib3
import os
import ssl

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Fix for Government Portals with outdated SSL (UNSAFE_LEGACY_RENEGOTIATION)
class CustomHttpAdapter(requests.adapters.HTTPAdapter):
    def __init__(self, ssl_context=None, **kwargs):
        self.ssl_context = ssl_context
        super().__init__(**kwargs)
    def init_poolmanager(self, connections, maxsize, block=False):
        self.poolmanager = urllib3.poolmanager.PoolManager(
            num_pools=connections, maxsize=maxsize,
            block=block, ssl_context=self.ssl_context)

ctx = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
ctx.options |= 0x4  # OP_LEGACY_SERVER_CONNECT
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

session = requests.session()
session.mount('https://', CustomHttpAdapter(ctx))


BASE_URL = "https://locator.csccloud.in"
DISTRICTS_URL = f"{BASE_URL}/Home/GetDistricts"
GRID_URL = f"{BASE_URL}/Home/get_locator_grid"

headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
}

def get_states():
    return ["ANDAMAN AND NICOBAR ISLANDS", "ANDHRA PRADESH", "ARUNACHAL PRADESH", "ASSAM", "BIHAR", "CHANDIGARH", "CHHATTISGARH", "DELHI", "GOA", "GUJARAT", "HARYANA", "HIMACHAL PRADESH", "JAMMU AND KASHMIR", "JHARKHAND", "KARNATAKA", "KERALA", "LADAKH", "LAKSHADWEEP", "MADHYA PRADESH", "MAHARASHTRA", "MANIPUR", "MEGHALAYA", "MIZORAM", "NAGALAND", "ODISHA", "PUDUCHERRY", "PUNJAB", "RAJASTHAN", "SIKKIM", "TAMIL NADU", "TELANGANA", "TRIPURA", "UTTAR PRADESH", "UTTARAKHAND", "WEST BENGAL"]

def get_districts(state):
    try:
        res = session.get(DISTRICTS_URL, params={"state": state}, headers=headers)
        return [d.get("DistrictName") for d in res.json() if d.get("DistrictName")]
    except Exception as e:
        print(f"Error fetching districts for {state}: {e}")
        return []

def scrape_csc():
    os.makedirs('data', exist_ok=True)
    file_name = "data/csc_database.csv"
    
    csv_headers = ["csc_id", "vle_name", "state", "district", "address", "pincode", "latitude", "longitude", "is_claimed"]
    
    with open(file_name, "w", newline='', encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=csv_headers)
        writer.writeheader()

        states = get_states()
        for state in states:
            print(f"Fetching State: {state}")
            districts = get_districts(state)
            
            for district in districts:
                print(f"  -> District: {district}")
                page = 1
                
                while True:
                    payload = {
                        "page": page,
                        "page_size": 1000,
                        "state": state,
                        "district": district,
                        "sub_district": "",
                        "IsCSCPayAgent": None,
                        "csc_id": "",
                        "pincode": "",
                        "address": ""
                    }
                    
                    try:
                        r = session.post(GRID_URL, headers=headers, json=payload)
                        data = r.json()
                        items = data.get("Table", [])
                        
                        if not items or len(items) == 0:
                            break
                            
                        for item in items:
                            writer.writerow({
                                "csc_id": item.get("CSCID", ""),
                                "vle_name": item.get("Name", ""),
                                "state": state,
                                "district": district,
                                "address": item.get("Address", "") or "",
                                "pincode": item.get("Pincode", "") or "",
                                "latitude": item.get("Latitude", ""),
                                "longitude": item.get("Longitude", ""),
                                "is_claimed": False
                            })
                        
                        if page % 2 == 0:
                            f.flush()
                            
                        if len(items) < 1000:
                            break
                            
                        page += 1
                        time.sleep(0.3)
                    except Exception as e:
                        print(f"Error at {district} Page {page}: {e}")
                        break

    print(f"Data completely scraped and saved to {file_name}!")

if __name__ == "__main__":
    scrape_csc()
