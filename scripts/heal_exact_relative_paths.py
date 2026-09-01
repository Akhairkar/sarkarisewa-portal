import os
import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.getcwd()
html_files = sorted(glob.glob('**/*.html', recursive=True))
html_files = [f for f in html_files if not any(p in f.split(os.sep) for p in ['.git', 'node_modules', '.gemini'])]

print(f"Total HTML files to process: {len(html_files)}")

# Standard top-level destinations
ROOT_DESTINATIONS = [
    'tools', 'states', 'category', 'service', 'jobs', 'exams', 'blog', 'support', 'updates',
    'assets', 'index.html', 'about.html', 'contact.html', 'faq.html', 'privacy-policy.html',
    'disclaimer.html', 'terms.html', 'search.html', 'sitemap.html', 'manifest.json', 'favicon.ico',
    '7th-pay-commission-calculator.html', '8th-pay-calculator.html'
]

fixed_files_count = 0

for file_path in html_files:
    # Calculate depth
    parts = os.path.normpath(file_path).split(os.sep)
    depth = len(parts) - 1 # 0 for root, 1 for tools/foo.html, 2 for csc-locator/up.html, 3 for csc-locator/up/lucknow.html
    
    if depth == 0:
        correct_prefix = ""
    else:
        correct_prefix = "../" * depth

    with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()

    orig_content = content
    
    # Fix any malformed ../+ patterns before root destinations
    # Regex matching (?:(?:\.\./)+)?(destination)
    for dest in ROOT_DESTINATIONS:
        # Match href or src with wrong number of ../
        # e.g. href="../../../../tools/..." or href="../../tools/..."
        pattern = rf'((?:href|src)=["\'])(?:\.\./)*({re.escape(dest)}(?:[/"\']|/[^"\']*["\']))'
        
        def make_repl(match):
            attr = match.group(1)
            target = match.group(2)
            if depth == 0:
                # no ../ prefix needed
                # if target is a file or folder directly in root
                return f'{attr}{target}'
            else:
                return f'{attr}{correct_prefix}{target}'

        content = re.sub(pattern, make_repl, content)

    if content != orig_content:
        with open(file_path, 'w', encoding='utf-8') as fp:
            fp.write(content)
        fixed_files_count += 1

print(f"==================================================")
print(f"DONE: Normalized exact relative paths in {fixed_files_count} / {len(html_files)} files!")
print(f"==================================================")
