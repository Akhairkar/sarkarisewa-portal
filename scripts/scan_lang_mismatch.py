import os
import glob
import re
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')

# Standard folders to monitor
TARGET_FOLDERS = [
    'service/csc-locator',
    'service/jan-aushadhi',
    'service',
    'states',
    'jobs',
    'blog',
    'exams',
    'tools',
    'support',
    'root',
    'category',
    'updates',
    'admin'
]

def categorize_folder(path):
    norm_path = path.replace('\\', '/')
    parts = norm_path.split('/')
    
    if len(parts) == 1:
        return 'root'
    
    if norm_path.startswith('service/csc-locator'):
        return 'service/csc-locator'
    elif norm_path.startswith('service/jan-aushadhi'):
        return 'service/jan-aushadhi'
    elif norm_path.startswith('service/'):
        return 'service'
    elif norm_path.startswith('states/'):
        return 'states'
    elif norm_path.startswith('jobs/'):
        return 'jobs'
    elif norm_path.startswith('blog/'):
        return 'blog'
    elif norm_path.startswith('exams/'):
        return 'exams'
    elif norm_path.startswith('tools/'):
        return 'tools'
    elif norm_path.startswith('support/'):
        return 'support'
    else:
        return parts[0]

def scan_language_mismatch():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    os.chdir(root_dir)

    all_html = sorted(glob.glob('**/*.html', recursive=True))
    all_html = [
        f.replace('\\', '/')
        for f in all_html
        if not any(p in f.replace('\\', '/').split('/') for p in ['.git', 'node_modules', '.gemini', 'scratch'])
    ]

    flagged_by_folder = defaultdict(list)
    en_by_folder = defaultdict(int)
    total_en_pages = 0
    total_flagged = 0

    devanagari_pattern = re.compile(r'[\u0900-\u097F]')

    for file_path in all_html:
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
                content = fp.read()
        except Exception as e:
            print(f"Error reading {file_path}: {e}", file=sys.stderr)
            continue

        folder = categorize_folder(file_path)

        # Check for lang="en" in <html> tag
        html_tag_match = re.search(r'<html\b([^>]*)>', content, re.IGNORECASE)
        if not html_tag_match:
            continue

        tag_attrs = html_tag_match.group(1)
        lang_match = re.search(r'\blang=["\']?en(?:-[a-zA-Z]+)?["\']?', tag_attrs, re.IGNORECASE)
        if not lang_match:
            continue

        total_en_pages += 1
        en_by_folder[folder] += 1

        # Extract body text
        body_match = re.search(r'<body\b[^>]*>(.*)</body>', content, re.IGNORECASE | re.DOTALL)
        if body_match:
            body_text = body_match.group(1)
        else:
            head_end = re.search(r'</head>', content, re.IGNORECASE)
            body_text = content[head_end.end():] if head_end else content

        devanagari_count = len(devanagari_pattern.findall(body_text))

        # Flag if Devanagari characters exceed 100 AND the page has lang="en"
        if devanagari_count > 100:
            flagged_by_folder[folder].append((file_path, devanagari_count))
            total_flagged += 1

    print("=" * 70)
    print("LANGUAGE MISMATCH AUDIT REPORT")
    print("Criteria: <html lang=\"en\"> with > 100 Devanagari characters in body")
    print("=" * 70)
    print(f"Total HTML files scanned          : {len(all_html)}")
    print(f"Total pages with lang=\"en\"        : {total_en_pages}")
    print(f"Total pages with language mismatch : {total_flagged}")
    print("-" * 70)
    print(f"{'Folder':<30} | {'lang=\"en\" Total':<16} | {'Flagged Mismatch':<16}")
    print("-" * 70)

    # Display all target folders in an orderly manner
    seen_folders = set()
    for folder in TARGET_FOLDERS:
        seen_folders.add(folder)
        en_count = en_by_folder[folder]
        flagged_count = len(flagged_by_folder[folder])
        print(f"{folder:<30} | {en_count:<16} | {flagged_count:<16}")

    for folder in sorted(flagged_by_folder.keys()):
        if folder not in seen_folders:
            en_count = en_by_folder[folder]
            flagged_count = len(flagged_by_folder[folder])
            print(f"{folder:<30} | {en_count:<16} | {flagged_count:<16}")

    print("-" * 70)
    print(f"{'TOTAL':<30} | {total_en_pages:<16} | {total_flagged:<16}")
    print("=" * 70)

    return total_flagged, flagged_by_folder

if __name__ == '__main__':
    scan_language_mismatch()
