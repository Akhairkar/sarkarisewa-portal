import re

filepath = "assets/js/csc-supabase-ui.js"
with open(filepath, "r", encoding="utf-8") as f:
    js = f.read()

# 1. Fix table name
js = js.replace('.from("csc_centres")', '.from("csc_centers")')

# 2. Fix column mappings
old_mapping = """            supabaseData = data.map(row => ({
              id: row.id,
              name: row.name || row.center_name || "CSC Centre",
              state: row.state || "Unknown",
              district: row.district || searchLocation,
              pincode: row.pincode,
              address: row.address || `${row.name || row.center_name}, ${row.pincode}`,
              contact: row.owner_phone || row.phone || row.contact || "N/A",
              services: ["Aadhar Update", "PAN Card", "Income Certificate"],
              timings: "9:00 AM - 6:00 PM (Mon-Sat)",
              rating: 4.8,
              is_verified: row.status === 'verified' || row.is_verified === true
            }));"""

new_mapping = """            supabaseData = data.map(row => ({
              id: row.id,
              name: row.vle_name || row.name || row.center_name || "CSC Centre",
              state: row.state || "Unknown",
              district: row.district || searchLocation,
              pincode: row.pincode,
              address: row.address || `${row.vle_name || "CSC"}, ${row.pincode}`,
              contact: row.whatsapp_number || row.phone_number || row.owner_phone || row.phone || row.contact || "N/A",
              services: ["Aadhar Update", "PAN Card", "Income Certificate"],
              timings: "9:00 AM - 6:00 PM (Mon-Sat)",
              rating: 4.8,
              is_verified: row.is_claimed === true || row.status === 'verified' || row.is_verified === true
            }));"""

if old_mapping in js:
    js = js.replace(old_mapping, new_mapping)
else:
    print("Could not find old mapping block!")
    
with open(filepath, "w", encoding="utf-8") as f:
    f.write(js)
    
print("Updated csc-supabase-ui.js!")
