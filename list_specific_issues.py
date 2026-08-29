import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

all_html = [f.replace('\\', '/') for f in glob.glob('**/*.html', recursive=True) if not f.startswith('.')]
admin_set = {
    'dashboard.html', 'analytics.html', 'blog.html', 'comments.html',
    'csc.html', 'deadlines.html', 'exams.html', 'jobs.html',
    'services.html', 'subscribers.html', '404.html'
}

print("=== ALL 34 BAD/MISSING TITLES ===")
for f in all_html:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    m = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE | re.DOTALL)
    if not m:
        print(f"Missing Title: {f}")
    else:
        t = m.group(1).strip()
        if '2026 2026' in t or '2027 2027' in t or '<span' in t or '&amp;amp;' in t or '...' in t or t.lower().startswith('index ') or any(w in t.lower() for w in ['undefined', 'null', 'nan', '[state]', '[district]', '{title}']):
            print(f"Bad Title in {f}: '{t}'")

print("\n=== ALL 20 PLACEHOLDER DESCRIPTIONS ===")
for f in all_html:
    if f.startswith('admin/') or f in admin_set:
        continue
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    m = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', c, re.IGNORECASE)
    if not m:
        m = re.search(r'<meta\s+content=["\'](.*?)["\']\s+name=["\']description["\']', c, re.IGNORECASE)
    if m:
        d = m.group(1).strip()
        if any(w in d.lower() for w in ['undefined', 'null', 'nan', '[state]', '[district]', '{title}', 'lorem']):
            print(f"Placeholder Desc in {f}: '{d}'")
    else:
        print(f"Missing Desc in {f}")
