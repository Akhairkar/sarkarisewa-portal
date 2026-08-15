import json
import random

cities = {
    "Maharashtra": {
        "Mumbai": ["400001", "400050", "400053", "400060"],
        "Pune": ["411001", "411038", "411057", "411014"],
        "Nagpur": ["440001", "440010", "440022"]
    },
    "Uttar Pradesh": {
        "Lucknow": ["226001", "226010", "226016"],
        "Kanpur": ["208001", "208012", "208022"],
        "Varanasi": ["221001", "221005", "221010"]
    },
    "Bihar": {
        "Patna": ["800001", "800010", "800020"],
        "Gaya": ["823001", "823002", "823003"],
        "Muzaffarpur": ["842001", "842002"]
    }
}

first_names = ["Ramesh", "Suresh", "Rahul", "Amit", "Priya", "Neha", "Vikas", "Sunil", "Pooja", "Arun"]
last_names = ["Kumar", "Sharma", "Singh", "Patil", "Deshmukh", "Gupta", "Mishra", "Yadav"]

services = [
    ["Aadhaar Update", "PAN Card", "Income Certificate"],
    ["Passport", "Voter ID", "Ration Card"],
    ["Ayushman Card", "E-Shram", "PM Kisan"],
    ["PF Withdrawal", "Police Clearance", "Driving License"],
    ["Aadhaar Update", "PAN Card", "Ayushman Card", "E-Shram"],
    ["Income Certificate", "Caste Certificate", "Domicile Certificate"]
]

centers = []

for state, state_cities in cities.items():
    for city, pincodes in state_cities.items():
        for pincode in pincodes:
            num_centers = random.randint(2, 4)
            for i in range(num_centers):
                fname = random.choice(first_names)
                lname = random.choice(last_names)
                is_verified = random.random() > 0.4
                rating = round(random.uniform(3.8, 5.0), 1)
                
                centers.append({
                    "id": f"CSC{random.randint(10000, 99999)}",
                    "name": f"{fname} CSC & e-Seva Kendra",
                    "state": state,
                    "district": city,
                    "pincode": pincode,
                    "address": f"Shop No. {random.randint(1,50)}, Main Market, Near {random.choice(['Bus Stand', 'Railway Station', 'Post Office', 'School', 'Temple'])}, {city}",
                    "services": random.choice(services),
                    "is_verified": is_verified,
                    "rating": rating,
                    "timings": "9:00 AM - 8:00 PM (Mon-Sat)",
                    "contact": f"+91-9{random.randint(100000000, 999999999)}"
                })

with open("data/csc-centers.json", "w", encoding="utf-8") as f:
    json.dump(centers, f, indent=2)

print(f"Generated {len(centers)} CSC centers.")
