import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

JOBS_DIR = r"C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal\jobs"

files = [f for f in os.listdir(JOBS_DIR) if f.endswith(".html") and f != "index.html"]

for filename in sorted(files):
    filepath = os.path.join(JOBS_DIR, filename)
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Look for last date patterns in tables
    match_last_date = re.search(r'(?:अंतिम तिथि|Last Date)[^<]*?</td>\s*<td[^>]*>([^<]+)</td>', content, re.IGNORECASE)
    ld = match_last_date.group(1).strip() if match_last_date else "Not found"

    # Look for exam date
    match_exam = re.search(r'(?:परीक्षा तिथि|Exam Date)[^<]*?</td>\s*<td[^>]*>([^<]+)</td>', content, re.IGNORECASE)
    ed = match_exam.group(1).strip() if match_exam else "Not found"

    print(f"{filename[:40]:40} | Apply End: {ld[:25]:25} | Exam: {ed[:25]}")
