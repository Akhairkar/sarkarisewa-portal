import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

TARGET_36_FILES = [
    'states/delhi-income-certificate.html',
    'states/telangana-income-certificate.html',
    'states/puducherry-income-certificate.html',
    'states/andhra-pradesh-income-certificate.html',
    'states/odisha-income-certificate.html',
    'states/dadra-nagar-haveli-daman-diu-income-certificate.html',
    'states/ladakh-income-certificate.html',
    'states/tripura-income-certificate.html',
    'states/kerala-income-certificate.html',
    'states/jharkhand-income-certificate.html',
    'states/meghalaya-income-certificate.html',
    'states/punjab-income-certificate.html',
    'states/mizoram-income-certificate.html',
    'states/uttar-pradesh-income-certificate.html',
    'states/chandigarh-income-certificate.html',
    'states/chhattisgarh-income-certificate.html',
    'states/uttarakhand-income-certificate.html',
    'states/west-bengal-income-certificate.html',
    'states/goa-income-certificate.html',
    'states/andaman-nicobar-income-certificate.html',
    'states/jammu-kashmir-income-certificate.html',
    'states/maharashtra-income-certificate.html',
    'states/arunachal-pradesh-income-certificate.html',
    'states/manipur-income-certificate.html',
    'states/karnataka-income-certificate.html',
    'states/madhya-pradesh-income-certificate.html',
    'states/assam-income-certificate.html',
    'states/nagaland-income-certificate.html',
    'states/bihar-income-certificate.html',
    'states/haryana-income-certificate.html',
    'states/rajasthan-income-certificate.html',
    'states/tamil-nadu-income-certificate.html',
    'states/himachal-pradesh-income-certificate.html',
    'states/lakshadweep-income-certificate.html',
    'states/sikkim-income-certificate.html',
    'states/gujarat-income-certificate.html'
]

files_fixed = 0
total_replaced = 0

for f in TARGET_36_FILES:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
            
        cnt = c.count('../../')
        if cnt > 0:
            c_new = c.replace('../../', '../')
            with open(f, 'w', encoding='utf-8') as fp:
                fp.write(c_new)
            files_fixed += 1
            total_replaced += cnt

print(f"Files fixed: {files_fixed}")
print(f"Total occurrences replaced: {total_replaced}")
