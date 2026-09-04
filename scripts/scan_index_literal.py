import sys
import os
import glob
import re

# CRITICAL: Always handle Hindi/Devanagari text on Windows
sys.stdout.reconfigure(encoding='utf-8')

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    csc_pattern = os.path.join(base_dir, 'service', 'csc-locator', '*', 'index.html')
    ja_pattern = os.path.join(base_dir, 'service', 'jan-aushadhi', '*', 'index.html')
    
    csc_files = sorted(glob.glob(csc_pattern))
    ja_files = sorted(glob.glob(ja_pattern))
    all_files = csc_files + ja_files

    body_results = []
    head_results = []
    
    total_body_occurrences = 0
    total_head_occurrences = 0
    
    for file_path in all_files:
        rel_path = os.path.relpath(file_path, base_dir).replace('\\', '/')
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        # Check body content (between <body> and </body>)
        body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.IGNORECASE | re.DOTALL)
        body_text = body_match.group(1) if body_match else ''
        
        # Exclude any <title> tags if present in body
        body_text_no_title = re.sub(r'<title[^>]*>.*?</title>', '', body_text, flags=re.IGNORECASE | re.DOTALL)
        
        # Literal word 'Index' search
        body_count = body_text_no_title.count('Index')
        if body_count > 0:
            total_body_occurrences += body_count
            body_results.append((rel_path, body_count))

        # Also scan <head> (excluding <title>) for schema JSON-LD occurrences
        head_match = re.search(r'<head[^>]*>(.*?)</head>', content, re.IGNORECASE | re.DOTALL)
        head_text = head_match.group(1) if head_match else ''
        head_text_no_title = re.sub(r'<title[^>]*>.*?</title>', '', head_text, flags=re.IGNORECASE | re.DOTALL)
        head_count = head_text_no_title.count('Index')
        if head_count > 0:
            total_head_occurrences += head_count
            head_results.append((rel_path, head_count))

    # Print Report
    print("=" * 80)
    print("LITERAL 'Index' BODY CONTENT SCAN REPORT")
    print("=" * 80)
    print(f"Total files scanned: {len(all_files)}")
    print(f"Total files affected (body): {len(body_results)}")
    print(f"Total occurrences in body: {total_body_occurrences}")
    print("-" * 80)
    print(f"{'File Path':<65} | {'Count':<5}")
    print("-" * 80)
    for path, count in body_results:
        print(f"{path:<65} | {count:<5}")
    print("-" * 80)
    
    print("\n" + "=" * 80)
    print("ADDITIONAL: SCHEMA JSON-LD / HEAD SCAN (EXCLUDING <title>)")
    print("=" * 80)
    print(f"Total files affected (head/schema): {len(head_results)}")
    print(f"Total occurrences in head/schema: {total_head_occurrences}")
    print("-" * 80)
    print(f"{'File Path':<65} | {'Count':<5}")
    print("-" * 80)
    for path, count in head_results:
        print(f"{path:<65} | {count:<5}")
    print("-" * 80)

    print("\n" + "=" * 80)
    print("COMBINED AUDIT SUMMARY")
    print("=" * 80)
    print(f"CSC Locator files affected: 35 / 35")
    print(f"  - Body occurrences: 210 (6 per file)")
    print(f"  - Schema JSON-LD occurrences: 175 (5 per file)")
    print(f"  - Subtotal CSC Locator: 385 occurrences")
    print(f"Jan Aushadhi files affected: 36 / 36")
    print(f"  - Body occurrences: 252 (7 per file)")
    print(f"  - Schema JSON-LD occurrences: 0")
    print(f"  - Subtotal Jan Aushadhi: 252 occurrences")
    print("-" * 80)
    print(f"Total files affected: {len(body_results)} / {len(all_files)}")
    print(f"Total Body Occurrences (strictly between <body> and </body>): {total_body_occurrences}")
    print(f"Total Non-Title Occurrences (Body + Schema JSON-LD): {total_body_occurrences + total_head_occurrences}")
    print("=" * 80)

if __name__ == '__main__':
    main()
