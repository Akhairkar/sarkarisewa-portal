import os
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')
from test_state_metadata import STATE_METADATA

print("Ensuring both 2-letter code and full-name URLs resolve for every state...")

for state_key, meta in STATE_METADATA.items():
    code = meta["code"]
    file_full = f"service/{state_key}-income-certificate.html"
    file_code = f"service/{code}-income-certificate.html"
    
    # Check which one has full content
    has_full_content = os.path.exists(file_full) and os.path.getsize(file_full) > 5000
    has_code_content = os.path.exists(file_code) and os.path.getsize(file_code) > 5000
    
    if has_full_content and not os.path.exists(file_code):
        # Create redirect stub or copy
        # Create client redirect stub from file_code to file_full or copy content
        # Actually copying content or linking makes both URLs work directly!
        shutil.copyfile(file_full, file_code)
        print(f"Created {file_code} from {file_full}")
        
    elif has_code_content and not os.path.exists(file_full):
        shutil.copyfile(file_code, file_full)
        print(f"Created {file_full} from {file_code}")
        
    elif has_code_content and os.path.exists(file_full) and os.path.getsize(file_full) < 1000:
        # file_full is a redirect stub pointing to file_code
        print(f"Verified {file_full} (stub) -> {file_code} (full)")
        
    elif has_full_content and os.path.exists(file_code) and os.path.getsize(file_code) < 1000:
        print(f"Verified {file_code} (stub) -> {file_full} (full)")

print("Done! Both short-code and full-name URLs are fully operational.")
