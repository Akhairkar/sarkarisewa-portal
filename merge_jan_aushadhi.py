import os
import json
import glob

all_stores = []

for filepath in glob.glob("data/jan-aushadhi/*.json"):
    if "store-locator.json" in filepath or "all-india.json" in filepath:
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
        all_stores.extend(data)

with open("data/jan-aushadhi/store-locator.json", "w", encoding="utf-8") as f:
    json.dump(all_stores, f, ensure_ascii=False)

print(f"Merged {len(all_stores)} stores into store-locator.json")
