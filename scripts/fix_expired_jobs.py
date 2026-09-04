import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

JOBS_DIR = r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal\jobs"
REFERENCE_DATE = "2026-09-04"

files = [f for f in os.listdir(JOBS_DIR) if f.endswith(".html") and f != "index.html"]

updated_count = 0

for filename in files:
    filepath = os.path.join(JOBS_DIR, filename)
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    match = re.search(r'("validThrough":\s*")([^"]+)(")', content)
    if not match:
        continue

    val = match.group(2)
    date_part = val.split("T")[0]

    if date_part < REFERENCE_DATE:
        if "T" in val:
            time_part = val.split("T")[1]
            new_val = f"2026-11-30T{time_part}"
        else:
            new_val = "2026-11-30"

        new_content = content[:match.start(2)] + new_val + content[match.end(2):]
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)

        print(f"Updated {filename}: {val} -> {new_val}")
        updated_count += 1

print(f"\nTotal updated files: {updated_count}")
