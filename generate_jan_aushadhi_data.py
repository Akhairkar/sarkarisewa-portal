import json
import os

# Create the data directory if it doesn't exist
os.makedirs('data', exist_ok=True)

# We will create a sample dataset covering a few states, districts, and stores
# In the future, this can be updated with a full web-scraped dataset containing all 14,000+ stores.
sample_data = [
    {
        "id": "JA0001",
        "state": "Maharashtra",
        "district": "Mumbai",
        "name": "Pradhan Mantri Bhartiya Jan Aushadhi Kendra - Andheri",
        "address": "Shop No. 4, Ground Floor, Near Andheri Station, Andheri West, Mumbai, Maharashtra 400058",
        "pincode": "400058",
        "status": "Active"
    },
    {
        "id": "JA0002",
        "state": "Maharashtra",
        "district": "Pune",
        "name": "PMBJP Kendra - Shivajinagar",
        "address": "123, FC Road, Near Police Station, Shivajinagar, Pune, Maharashtra 411005",
        "pincode": "411005",
        "status": "Active"
    },
    {
        "id": "JA0003",
        "state": "Maharashtra",
        "district": "Nagpur",
        "name": "Jan Aushadhi Store - Sitabuldi",
        "address": "Main Road, Sitabuldi Market, Nagpur, Maharashtra 440012",
        "pincode": "440012",
        "status": "Active"
    },
    {
        "id": "JA0004",
        "state": "Uttar Pradesh",
        "district": "Lucknow",
        "name": "PMBJP Store - Gomti Nagar",
        "address": "Vibhuti Khand, Gomti Nagar, Near Hospital, Lucknow, UP 226010",
        "pincode": "226010",
        "status": "Active"
    },
    {
        "id": "JA0005",
        "state": "Uttar Pradesh",
        "district": "Varanasi",
        "name": "Jan Aushadhi Kendra - Lanka",
        "address": "BHU Road, Lanka, Varanasi, UP 221005",
        "pincode": "221005",
        "status": "Active"
    },
    {
        "id": "JA0006",
        "state": "Delhi",
        "district": "New Delhi",
        "name": "PMBJP Kendra - AIIMS",
        "address": "Inside AIIMS Campus, Ansari Nagar, New Delhi 110029",
        "pincode": "110029",
        "status": "Active"
    },
    {
        "id": "JA0007",
        "state": "Gujarat",
        "district": "Ahmedabad",
        "name": "Jan Aushadhi - Bapunagar",
        "address": "Diamond Market Road, Bapunagar, Ahmedabad, Gujarat 380024",
        "pincode": "380024",
        "status": "Active"
    },
    {
        "id": "JA0008",
        "state": "Bihar",
        "district": "Patna",
        "name": "PMBJP Store - Kankarbagh",
        "address": "Main Road, Kankarbagh, Patna, Bihar 800020",
        "pincode": "800020",
        "status": "Active"
    }
]

with open('data/jan_aushadhi_stores.json', 'w', encoding='utf-8') as f:
    json.dump(sample_data, f, indent=4)

print("Sample data file created at data/jan_aushadhi_stores.json")
