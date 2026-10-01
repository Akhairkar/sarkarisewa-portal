import os
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

corrupted_files = [
    'service/pm-usp-college-scholarship.html',
    'jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html',
    'jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html',
    'jobs/sbi-clerk-junior-associate-recruitment-2026.html',
    'jobs/ibps-po-mt-xvi-recruitment-2026-4455-posts.html',
    'category/jobs-education.html',
    'sitemap.html'
]

def fix_mojibake_text(text):
    # Regex to find mojibake sequences (e.g. à¤, à¥, etc.)
    # In Windows-1252 / latin-1 -> utf-8 double encoding:
    # We can try to encode latin1 then decode utf8
    def fix_match(m):
        chunk = m.group(0)
        try:
            return chunk.encode('latin-1').decode('utf-8')
        except:
            try:
                return chunk.encode('windows-1252').decode('utf-8')
            except:
                return chunk

    # Pattern matching sequences of mojibake characters
    pattern = r'[à-ÿ\u0080-\u00ff]+'
    fixed = re.sub(pattern, fix_match, text)
    return fixed

for fpath in corrupted_files:
    if not os.path.exists(fpath):
        print(f"File not found: {fpath}")
        continue
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    sample_bad = re.findall(r'[à-ÿ\u0080-\u00ff]{3,}', content)
    print(f"\n{fpath}: Found {len(sample_bad)} bad sequences. Sample: {sample_bad[:3]}")
    
    fixed_content = fix_mojibake_text(content)
    sample_after = re.findall(r'[à-ÿ\u0080-\u00ff]{3,}', fixed_content)
    print(f"  -> After fix: {len(sample_after)} bad sequences remaining.")
    
    # Save the repaired file
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)
    print(f"  -> Saved {fpath}")
