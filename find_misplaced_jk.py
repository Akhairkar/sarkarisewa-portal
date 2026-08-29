import os
import glob
import sys

sys.stdout.reconfigure(encoding='utf-8')

# J&K and Ladakh exclusive districts
jk_ladakh_districts = {
    'kargil', 'leh', 'badgam', 'budgam', 'baramulla', 'jammu', 'kathua', 'doda', 
    'anantnag', 'bandipora', 'ganderbal', 'kulgam', 'kupwara', 'pulwama', 
    'punch', 'poonch', 'rajauri', 'rajouri', 'ramban', 'reasi', 'samba', 
    'shopian', 'srinagar', 'udhampur', 'kishtwar'
}

all_csc_files = glob.glob('service/csc-locator/*/*.html')
print(f"Total district CSC files: {len(all_csc_files)}")

misplaced_files = []

for fpath in all_csc_files:
    parts = fpath.replace('\\', '/').split('/')
    if len(parts) >= 4:
        state_folder = parts[2]
        district_file = parts[3].replace('.html', '')
        
        # If the state is NOT jammu-and-kashmir, jammu-kashmir, or ladakh
        if state_folder not in ['jammu-and-kashmir', 'jammu-kashmir', 'ladakh']:
            if district_file in jk_ladakh_districts:
                misplaced_files.append((fpath, state_folder, district_file))

print(f"\nFound {len(misplaced_files)} misplaced J&K/Ladakh district files in other state folders:")
for f, s, d in misplaced_files:
    print(f"  - {f} (State: {s}, District: {d})")
