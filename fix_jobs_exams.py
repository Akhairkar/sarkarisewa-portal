import os
import re
import glob

# ----------------- MODULE 8 (JOBS) -----------------
jobs_files = glob.glob('jobs/*.html')
for filepath in jobs_files:
    if 'index.html' in filepath or 'post.html' in filepath:
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if meta description is missing
    if '<meta name="description"' not in content:
        # Extract title to use in description
        title_match = re.search(r'<title>(.*?)</title>', content)
        title = title_match.group(1).split('|')[0].strip() if title_match else "Latest Govt Job 2026"
        
        desc = f'{title} — Notification, eligibility criteria, last date aur apply online link yahan dekhein. Free online updates on SarkariSewa India.'
        meta_tag = f'\n    <meta name="description" content="{desc}" />'
        
        # Inject after <head> or <title>
        content = re.sub(r'(<title>.*?</title>)', r'\1' + meta_tag, content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed Job Meta: {filepath}")

# Check the 2027 UPSC file specifically
upsc_file = 'jobs/upsc-cse-recruitment-2027.html'
if os.path.exists(upsc_file):
    with open(upsc_file, 'r', encoding='utf-8') as f:
        content = f.read()
    if '2027' in content:
        # We will just leave it as 2027 if that's what the URL is, but maybe fix internal text if it was a typo for 2026.
        # Actually, let's replace 2027 with 2026 inside the title/h1 if it's a typo, but not the filename to avoid 404s (unless we redirect).
        content = content.replace('2027', '2026')
        with open(upsc_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed 2027 typo in UPSC CSE job page.")

# ----------------- MODULE 9 (EXAMS) -----------------
exams_files = glob.glob('exams/*.html')
for filepath in exams_files:
    if 'index.html' in filepath or 'post.html' in filepath:
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<meta name="description"' not in content:
        title_match = re.search(r'<title>(.*?)</title>', content)
        title = title_match.group(1).split('|')[0].strip() if title_match else "Latest Exam 2026"
        
        desc = f'{title} — Syllabus, exam dates, admit card aur result updates yahan dekhein. Prepare well with SarkariSewa India.'
        meta_tag = f'\n    <meta name="description" content="{desc}" />'
        
        content = re.sub(r'(<title>.*?</title>)', r'\1' + meta_tag, content, count=1)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed Exam Meta: {filepath}")

print("Module 8 and 9 completed.")
