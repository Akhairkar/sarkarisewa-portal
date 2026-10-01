import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# State Name Formatter from folder slug
SPECIAL_NAMES = {
    "andaman-nicobar": "Andaman & Nicobar Islands",
    "andhra-pradesh": "Andhra Pradesh",
    "arunachal-pradesh": "Arunachal Pradesh",
    "dadra-nagar-haveli-daman-diu": "Dadra & Nagar Haveli and Daman & Diu",
    "delhi": "Delhi (NCT)",
    "himachal-pradesh": "Himachal Pradesh",
    "jammu-kashmir": "Jammu & Kashmir",
    "madhya-pradesh": "Madhya Pradesh",
    "tamil-nadu": "Tamil Nadu",
    "uttar-pradesh": "Uttar Pradesh",
    "west-bengal": "West Bengal"
}

def get_state_title(folder_slug):
    if folder_slug in SPECIAL_NAMES:
        return SPECIAL_NAMES[folder_slug]
    return folder_slug.replace('-', ' ').title()

# 1. CSC Locator Hub Files
csc_files = sorted(glob.glob('service/csc-locator/*/index.html'))
print(f"Found {len(csc_files)} csc-locator hub files.")

for cf in csc_files:
    parent_folder = os.path.basename(os.path.dirname(cf))
    state_name = get_state_title(parent_folder)
    
    with open(cf, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        
    new_title = f"<title>{state_name} CSC Center - All Districts 2026 | Jan Seva Kendra</title>"
    new_desc = f'<meta name="description" content="{state_name} ke sabhi districts mein CSC / Jan Seva Kendra dhoondhein. Apna district select karke nearest verified center ka address turant paayein."/>'
    
    # Replace title
    content = re.sub(r'<title>[^<]*</title>', new_title, content, count=1)
    
    # Replace or insert meta description
    if 'name="description"' in content:
        content = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', new_desc, content, count=1, flags=re.IGNORECASE)
    elif "name='description'" in content:
        content = re.sub(r'<meta\s+[^>]*name=[\'\"]description[\'\"][^>]*>', new_desc, content, count=1, flags=re.IGNORECASE)
    else:
        content = content.replace('</title>', f'</title>\n  {new_desc}')
        
    with open(cf, 'w', encoding='utf-8') as fp:
        fp.write(content)

# 2. Jan Aushadhi Hub Files
jan_files = sorted(glob.glob('service/jan-aushadhi/*/index.html'))
print(f"Found {len(jan_files)} jan-aushadhi hub files.")

for jf in jan_files:
    parent_folder = os.path.basename(os.path.dirname(jf))
    state_name = get_state_title(parent_folder)
    
    with open(jf, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        
    new_title = f"<title>{state_name} Jan Aushadhi Kendra - All Districts 2026</title>"
    new_desc = f'<meta name="description" content="{state_name} mein Jan Aushadhi Kendra ki district-wise list dekhein. Apna district select karke nearest store ka address, discount aur contact details paayein."/>'
    
    # Replace title
    content = re.sub(r'<title>[^<]*</title>', new_title, content, count=1)
    
    # Replace or insert meta description
    if 'name="description"' in content:
        content = re.sub(r'<meta\s+[^>]*name=["\']description["\'][^>]*>', new_desc, content, count=1, flags=re.IGNORECASE)
    elif "name='description'" in content:
        content = re.sub(r'<meta\s+[^>]*name=[\'\"]description[\'\"][^>]*>', new_desc, content, count=1, flags=re.IGNORECASE)
    else:
        content = content.replace('</title>', f'</title>\n  {new_desc}')
        
    with open(jf, 'w', encoding='utf-8') as fp:
        fp.write(content)

print("Task 2 execution complete!")
