import glob
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("=== CHECKING JOBS, BLOG, AND EXAMS MODULES ===")

# Jobs
jobs_files = glob.glob('jobs/*.html')
print(f"\nJobs HTML files ({len(jobs_files)}):")
for f in jobs_files[:5]:
    print(f"  - {f}")
if os.path.exists('data/jobs.json'):
    try:
        jd = json.load(open('data/jobs.json', encoding='utf-8'))
        print(f"  data/jobs.json has {len(jd)} entries.")
    except Exception as e:
        print(f"  data/jobs.json error: {e}")

# Blog
blog_files = glob.glob('blog/*.html')
print(f"\nBlog HTML files ({len(blog_files)}):")
for f in blog_files[:5]:
    print(f"  - {f}")
if os.path.exists('data/blog-posts.json'):
    try:
        bd = json.load(open('data/blog-posts.json', encoding='utf-8'))
        print(f"  data/blog-posts.json has {len(bd)} entries.")
    except Exception as e:
        print(f"  data/blog-posts.json error: {e}")

# Exams
exams_files = glob.glob('exams/*.html')
print(f"\nExams HTML files ({len(exams_files)}):")
for f in exams_files[:5]:
    print(f"  - {f}")
if os.path.exists('data/exams.json'):
    try:
        ed = json.load(open('data/exams.json', encoding='utf-8'))
        print(f"  data/exams.json has {len(ed)} entries.")
    except Exception as e:
        print(f"  data/exams.json error: {e}")
