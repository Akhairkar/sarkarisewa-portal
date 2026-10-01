import os
import glob
import sys

sys.stdout.reconfigure(encoding='utf-8')

service_income = sorted(glob.glob('service/*income-certificate*.html'))
states_income = sorted(glob.glob('states/*income-certificate*.html'))

print(f"Service folder income certificate pages ({len(service_income)}):")
for s in service_income:
    # Check if redirect stub
    with open(s, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    is_stub = 'window.location.replace' in c or 'http-equiv="refresh"' in c
    print(f" - {os.path.basename(s)} (Stub: {is_stub})")

print(f"\nStates folder income certificate pages ({len(states_income)}):")
for s in states_income:
    with open(s, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    is_stub = 'window.location.replace' in c or 'http-equiv="refresh"' in c
    print(f" - {os.path.basename(s)} (Stub: {is_stub})")
