import os
import re
import sys
from datetime import datetime, date

# Always reconfigure stdout for UTF-8 on Windows
sys.stdout.reconfigure(encoding='utf-8')

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    jobs_dir = os.path.join(base_dir, 'jobs')
    today = date(2026, 9, 4)

    print(f"Scanning jobs directory: {jobs_dir}")
    print(f"Reference today's date: {today.isoformat()}\n")

    expired_files = []
    future_files = []
    no_valid_through_files = []

    # Get all .html files sorted
    html_files = sorted([f for f in os.listdir(jobs_dir) if f.endswith('.html')])

    pattern = re.compile(r'"validThrough"\s*:\s*"([^"]+)"')

    for fname in html_files:
        fpath = os.path.join(jobs_dir, fname)
        found_dates = []

        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                for line_no, line in enumerate(f, start=1):
                    match = pattern.search(line)
                    if match:
                        date_str = match.group(1).strip()
                        found_dates.append((date_str, line_no))
        except Exception as e:
            print(f"Error reading {fname}: {e}")
            continue

        if not found_dates:
            no_valid_through_files.append((fname, fpath))
        else:
            for date_str, line_no in found_dates:
                # Extract YYYY-MM-DD from date string
                clean_date_str = date_str[:10]
                try:
                    parsed_date = datetime.strptime(clean_date_str, '%Y-%m-%d').date()
                    if parsed_date < today:
                        expired_files.append({
                            'filename': fname,
                            'path': fpath,
                            'date_str': date_str,
                            'parsed_date': parsed_date,
                            'line_no': line_no
                        })
                    else:
                        future_files.append({
                            'filename': fname,
                            'path': fpath,
                            'date_str': date_str,
                            'parsed_date': parsed_date,
                            'line_no': line_no
                        })
                except ValueError:
                    print(f"Warning: Could not parse date '{date_str}' in {fname}:{line_no}")

    print("=" * 80)
    print(f"SCAN SUMMARY (Total HTML files: {len(html_files)})")
    print(f"  - Expired files: {len(expired_files)}")
    print(f"  - Future/Active files: {len(future_files)}")
    print(f"  - Files with NO validThrough: {len(no_valid_through_files)}")
    print("=" * 80)

    print("\n--- 1. EXPIRED FILES (validThrough < 2026-09-04) ---")
    if expired_files:
        for item in expired_files:
            print(f"  - {item['filename']} (Line {item['line_no']}): validThrough = {item['date_str']}")
    else:
        print("  None")

    print("\n--- 2. FUTURE / ACTIVE FILES (validThrough >= 2026-09-04) ---")
    if future_files:
        for item in future_files:
            print(f"  - {item['filename']} (Line {item['line_no']}): validThrough = {item['date_str']}")
    else:
        print("  None")

    print("\n--- 3. FILES WITH NO validThrough SCHEMA ---")
    if no_valid_through_files:
        for fname, _ in no_valid_through_files:
            print(f"  - {fname}")
    else:
        print("  None")

if __name__ == '__main__':
    main()
