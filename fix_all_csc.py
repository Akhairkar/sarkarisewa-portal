import glob
import re

files = glob.glob("assets/js/csc-*.js")

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        js = f.read()

    if 'csc_centres' in js:
        js = js.replace('csc_centres', 'csc_centers')
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(js)
        print(f"Fixed table name in {filepath}")
