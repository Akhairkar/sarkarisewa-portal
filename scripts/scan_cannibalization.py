# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

import os
import re

def is_redirect_stub(filepath):
    """
    Check if a file is a redirect stub:
    - File size < 500 bytes, OR
    - File contains 'http-equiv="refresh"' (case-insensitive)
    Returns (is_stub, reason, line_no)
    """
    try:
        size = os.path.getsize(filepath)
    except Exception as e:
        return False, f"Error getting size: {e}", None

    if size < 500:
        return True, f"size={size}B (<500B)", None

    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            for idx, line in enumerate(f, start=1):
                if re.search(r'http-equiv=["\']?refresh["\']?', line, re.IGNORECASE):
                    return True, f'http-equiv="refresh" found on line {idx} (size={size}B)', idx
    except Exception as e:
        return False, f"Error reading file: {e}", None

    return False, f"full page (size={size}B)", None

def get_page_info(filepath):
    """Extract canonical and title with line numbers if possible."""
    size = os.path.getsize(filepath)
    canonical = None
    canonical_line = None
    title = None
    title_line = None
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            for idx, line in enumerate(f, start=1):
                if not canonical and 'rel="canonical"' in line:
                    canonical = line.strip()
                    canonical_line = idx
                if not title and '<title>' in line:
                    title = line.strip()
                    title_line = idx
                if canonical and title:
                    break
    except Exception:
        pass
    return {
        'size': size,
        'canonical': canonical,
        'canonical_line': canonical_line,
        'title': title,
        'title_line': title_line
    }

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    service_dir = os.path.join(root_dir, 'service')
    states_dir = os.path.join(root_dir, 'states')

    # 1. List all .html files directly in service/ folder (not subfolders)
    service_files = {
        f for f in os.listdir(service_dir)
        if os.path.isfile(os.path.join(service_dir, f)) and f.lower().endswith('.html')
    }

    # 2. List all .html files in states/ folder
    states_files = {
        f for f in os.listdir(states_dir)
        if os.path.isfile(os.path.join(states_dir, f)) and f.lower().endswith('.html')
    }

    # 3. Find filenames that appear in BOTH folders
    common_files = sorted(service_files.intersection(states_files))

    print("=" * 80)
    print("KEYWORD CANNIBALIZATION AUDIT REPORT")
    print(f"Service HTML files count: {len(service_files)}")
    print(f"States HTML files count:  {len(states_files)}")
    print(f"Common filenames count:   {len(common_files)}")
    print("=" * 80)

    cannibalization_bugs = []
    redirect_oks = []

    for filename in common_files:
        service_path = os.path.join(service_dir, filename)
        states_path = os.path.join(states_dir, filename)

        srv_is_stub, srv_reason, srv_line = is_redirect_stub(service_path)
        st_is_stub, st_reason, st_line = is_redirect_stub(states_path)

        if srv_is_stub or st_is_stub:
            status = 'redirect - OK'
            redirect_oks.append({
                'filename': filename,
                'status': status,
                'service_stub': srv_is_stub,
                'service_reason': srv_reason,
                'service_line': srv_line,
                'states_stub': st_is_stub,
                'states_reason': st_reason,
                'states_line': st_line,
            })
        else:
            status = 'CANNIBALIZATION BUG'
            srv_info = get_page_info(service_path)
            st_info = get_page_info(states_path)
            cannibalization_bugs.append({
                'filename': filename,
                'status': status,
                'service_info': srv_info,
                'states_info': st_info,
            })

    print(f"\nTotal 'redirect - OK':     {len(redirect_oks)}")
    print(f"Total 'CANNIBALIZATION BUG': {len(cannibalization_bugs)}")
    print("-" * 80)

    if cannibalization_bugs:
        print("\n[!] CANNIBALIZATION BUGS (Both are full content pages):")
        for idx, item in enumerate(cannibalization_bugs, start=1):
            fn = item['filename']
            srv = item['service_info']
            st = item['states_info']
            print(f"\n{idx}. {fn} -> CANNIBALIZATION BUG")
            print(f"    - service/{fn} ({srv['size']} bytes) | Canon Line {srv['canonical_line']}: {srv['canonical']}")
            print(f"    - states/{fn} ({st['size']} bytes) | Canon Line {st['canonical_line']}: {st['canonical']}")

    print("\n" + "=" * 80)
    print("REDIRECT - OK ITEMS (At least one is a redirect stub):")
    for idx, item in enumerate(redirect_oks, start=1):
        fn = item['filename']
        print(f"{idx:3d}. {fn:<50} | service: {item['service_reason']} | states: {item['states_reason']}")

    print("=" * 80)
    print(f"\nSUMMARY:")
    print(f"  - Service folder files:    {len(service_files)}")
    print(f"  - States folder files:     {len(states_files)}")
    print(f"  - Overlapping filenames:   {len(common_files)}")
    print(f"  - Verified redirect stubs: {len(redirect_oks)} ('redirect - OK')")
    print(f"  - Confirmed cannibalized: {len(cannibalization_bugs)} ('CANNIBALIZATION BUG')")
    print("=" * 80)

if __name__ == '__main__':
    main()
