import os
import re

states = {
    "andaman-nicobar": "Andaman & Nicobar",
    "andhra-pradesh": "Andhra Pradesh",
    "arunachal": "Arunachal Pradesh",
    "assam": "Assam",
    "bihar": "Bihar",
    "chandigarh": "Chandigarh",
    "chhattisgarh": "Chhattisgarh",
    "dadra": "Dadra & Nagar Haveli",
    "delhi": "Delhi",
    "goa": "Goa",
    "gujarat": "Gujarat",
    "haryana": "Haryana",
    "hp": "Himachal Pradesh",
    "jammu-kashmir": "Jammu & Kashmir",
    "jharkhand": "Jharkhand",
    "karnataka": "Karnataka",
    "kerala": "Kerala",
    "ladakh": "Ladakh",
    "lakshadweep": "Lakshadweep",
    "madhya-pradesh": "Madhya Pradesh",
    "maharashtra": "Maharashtra",
    "manipur": "Manipur",
    "meghalaya": "Meghalaya",
    "mizoram": "Mizoram",
    "nagaland": "Nagaland",
    "odisha": "Odisha",
    "puducherry": "Puducherry",
    "punjab": "Punjab",
    "rajasthan": "Rajasthan",
    "sikkim": "Sikkim",
    "tamil-nadu": "Tamil Nadu",
    "telangana": "Telangana",
    "tripura": "Tripura",
    "uttar-pradesh": "Uttar Pradesh",
    "uttarakhand": "Uttarakhand",
    "west-bengal": "West Bengal"
}

count = 0

for state_slug, state_name in states.items():
    filepath = f"states/{state_slug}.html"
    
    # We mapped 'arunachal' hub page, but the jan aushadhi slug is 'arunachal-pradesh'
    ja_slug = state_slug
    if state_slug == "arunachal":
        ja_slug = "arunachal-pradesh"
    elif state_slug == "hp":
        ja_slug = "himachal-pradesh"
    elif state_slug == "dadra":
        ja_slug = "dadra-nagar-haveli-daman-diu"
        
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (Not Found)")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Check if already injected
    if "jan-aushadhi" in content and "90% Off Medicines" in content:
        print(f"Already injected in {filepath}")
        continue
        
    injection_html = f"""
        <a class="service-card" href="../service/jan-aushadhi/{ja_slug}.html">
          <div class="service-card__name">🏥 <span data-lang-show="en">Jan Aushadhi Kendra (PMBJP) - 90% Off Medicines</span><span data-lang-show="hi">जन औषधि केंद्र (90% सस्ती दवाएं)</span></div>
          <div class="service-card__desc"><span data-lang-show="en">Find exact PMBJP store locations in {state_name} and check generic medicine prices. Buy branded medicines at a huge discount.</span><span data-lang-show="hi">{state_name} में अपने नज़दीकी जन औषधि केंद्र का पता लगाएं और 90% तक की छूट पर दवाएं खरीदें।</span></div>
          <div class="service-card__arrow"><span data-lang-show="en">Locate Store &rarr;</span><span data-lang-show="hi">स्टोर खोजें &rarr;</span></div>
        </a>"""
        
    # Inject before the closing </div> of <div class="service-grid">
    # Note: Regex to find the end of service-grid safely
    if '<div class="service-grid">' in content:
        # Find the index of <div class="service-grid"> and inject at the end of it
        # Since it's nested, a simple string replacement won't work well if there are multiple, but usually there's one.
        # Better: replace the first occurrence of `</div>\n    </div>` right after `service-card` but let's just insert it right after the `<div class="service-grid">` tag so it appears FIRST!
        content = content.replace('<div class="service-grid">', f'<div class="service-grid">{injection_html}')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1
        print(f"Injected into {filepath}")
    else:
        print(f"service-grid not found in {filepath}")
        
print(f"Injected Jan Aushadhi links into {count} state hub pages.")
