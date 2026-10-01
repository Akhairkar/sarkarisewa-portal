import os
import re

file_path = "tools/csc-locator.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# All 36 States Options
states_html = '''<select id="state-select" class="input-field" onchange="updateDistricts()">
              <option value="">-- Select State --</option>
              <option value="ANDAMAN AND NICOBAR ISLANDS">Andaman And Nicobar Islands</option>
              <option value="ANDHRA PRADESH">Andhra Pradesh</option>
              <option value="ARUNACHAL PRADESH">Arunachal Pradesh</option>
              <option value="ASSAM">Assam</option>
              <option value="BIHAR">Bihar</option>
              <option value="CHANDIGARH">Chandigarh</option>
              <option value="CHHATTISGARH">Chhattisgarh</option>
              <option value="DADRA AND NAGAR HAVELI AND DAMAN AND DIU">Dadra And Nagar Haveli</option>
              <option value="DELHI">Delhi</option>
              <option value="GOA">Goa</option>
              <option value="GUJARAT">Gujarat</option>
              <option value="HARYANA">Haryana</option>
              <option value="HIMACHAL PRADESH">Himachal Pradesh</option>
              <option value="JAMMU AND KASHMIR">Jammu And Kashmir</option>
              <option value="JHARKHAND">Jharkhand</option>
              <option value="KARNATAKA">Karnataka</option>
              <option value="KERALA">Kerala</option>
              <option value="LADAKH">Ladakh</option>
              <option value="LAKSHADWEEP">Lakshadweep</option>
              <option value="MADHYA PRADESH">Madhya Pradesh</option>
              <option value="MAHARASHTRA">Maharashtra</option>
              <option value="MANIPUR">Manipur</option>
              <option value="MEGHALAYA">Meghalaya</option>
              <option value="MIZORAM">Mizoram</option>
              <option value="NAGALAND">Nagaland</option>
              <option value="ODISHA">Odisha</option>
              <option value="PUDUCHERRY">Puducherry</option>
              <option value="PUNJAB">Punjab</option>
              <option value="RAJASTHAN">Rajasthan</option>
              <option value="SIKKIM">Sikkim</option>
              <option value="TAMIL NADU">Tamil Nadu</option>
              <option value="TELANGANA">Telangana</option>
              <option value="TRIPURA">Tripura</option>
              <option value="UTTAR PRADESH">Uttar Pradesh</option>
              <option value="UTTARAKHAND">Uttarakhand</option>
              <option value="WEST BENGAL">West Bengal</option>
            </select>'''

# Replace old State select
old_state_pattern = re.compile(r'<select id="state-select" class="input-field">.*?</select>', re.DOTALL)
html = old_state_pattern.sub(states_html, html)

# Replace District input with select
old_district_pattern = re.compile(r'<input type="text" id="district-select" class="input-field"[^>]*>')
new_district = '<select id="district-select" class="input-field"><option value="">-- First Select State --</option></select>'
html = old_district_pattern.sub(new_district, html)

# Inject JS for mapping Top Districts (I'll add the JS right before </body>)
js_script = '''
<script>
  const stateDistricts = {
    "MAHARASHTRA": ["Nagpur", "Pune", "Mumbai", "Nashik", "Thane", "Aurangabad", "Amravati", "Nanded", "Kolhapur", "Jalgaon"],
    "UTTAR PRADESH": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Ghaziabad", "Prayagraj", "Bareilly", "Aligarh", "Gorakhpur"],
    "BIHAR": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Ara", "Begusarai", "Katihar", "Munger"],
    "GUJARAT": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh"],
    "KARNATAKA": ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi", "Davangere", "Ballari", "Kalaburagi"],
    "RAJASTHAN": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar"],
    "MADHYA PRADESH": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna"],
    "WEST BENGAL": ["Kolkata", "Howrah", "Darjeeling", "Siliguri", "Asansol", "Durgapur", "Bardhaman", "Malda"]
  };

  function updateDistricts() {
    const state = document.getElementById("state-select").value;
    const districtSelect = document.getElementById("district-select");
    districtSelect.innerHTML = '<option value="">-- Select District --</option>';
    
    if (stateDistricts[state]) {
        stateDistricts[state].forEach(d => {
            districtSelect.innerHTML += `<option value="${d}">${d}</option>`;
        });
        districtSelect.innerHTML += `<option value="Other">Other District...</option>`;
    } else if (state) {
        // Fallback for states not fully mapped in demo
        districtSelect.innerHTML += `<option value="Capital">Capital City</option>`;
        districtSelect.innerHTML += `<option value="Other">Other District...</option>`;
    }
  }
</script>
'''

if "function updateDistricts()" not in html:
    html = html.replace("</body>", js_script + "\n</body>")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)
print("Updated tools/csc-locator.html with 36 states and Dropdown JS.")
