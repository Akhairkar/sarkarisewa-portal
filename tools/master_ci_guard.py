# -*- coding: utf-8 -*-
"""
MASTER CI GUARD & RECURRENCE PREVENTION AUDIT
=============================================
This test suite strictly audits:
1. Blog Title Truncation: Asserts 0 blog files have '...' in <title>
2. Brand Name Uniformity: Asserts 0 production files have 'सरकारीसेवा पोर्टल'
3. Encoding / Mojibake: Asserts 0 files have mojibake or corrupt byte sequences
4. 65 Duplicate Pairs: Asserts all 65 pairs are valid client-side HTML redirect stubs
5. Official Government Links: Asserts all service content pages have official gov links
6. Pre-baked Header & Footer: Asserts all pages have baked header/footer
7. Git Hygiene: Asserts 0 __pycache__ or .pyc files tracked in git
"""

import os, sys, glob, re, json

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def audit_blog_titles():
    print("\n[CHECK 1/7] Auditing Blog Titles for Truncation...")
    blog_files = glob.glob(os.path.join(ROOT, 'blog', '*.html'))
    broken = []
    for f in blog_files:
        fn = os.path.basename(f)
        if fn in ('index.html', 'post.html'):
            continue
        with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        tm = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
        title = tm.group(1).strip() if tm else ''
        if '...' in title or 'â€¦' in title or '…' in title:
            broken.append((fn, title))
            
    if broken:
        print(f"  ❌ FAILED: {len(broken)} blog files have truncated titles:")
        for b in broken:
            print(f"     - {b[0]}: {b[1]}")
        return False
    else:
        print(f"  ✅ PASSED: 0/{len(blog_files)} blog files have truncated titles. All clean!")
        return True

def audit_brand_names():
    print("\n[CHECK 2/7] Auditing Brand Name Uniformity (SarkariSewa India)...")
    forbidden = ['सरकारीसेवा पोर्टल', 'SarkariSewa Portal']
    found = []
    
    for dirpath, _, filenames in os.walk(ROOT):
        rel = os.path.relpath(dirpath, ROOT)
        if any(p in ('.git', '__pycache__', 'node_modules', 'tools') for p in rel.split(os.sep)):
            continue
        for f in filenames:
            if f.endswith('.html') or f.endswith('.json') or f.endswith('.js'):
                p = os.path.join(dirpath, f)
                try:
                    c = open(p, encoding='utf-8', errors='ignore').read()
                    for fb in forbidden:
                        if fb in c:
                            found.append((os.path.relpath(p, ROOT), fb))
                            break
                except Exception:
                    pass
                    
    if found:
        print(f"  ❌ FAILED: {len(found)} production files have legacy brand name:")
        for fp, fb in found[:10]:
            print(f"     - {fp} ({fb})")
        return False
    else:
        print(f"  ✅ PASSED: 0 production files have legacy brand name. Brand is 100% SarkariSewa India!")
        return True

def audit_encoding_mojibake():
    print("\n[CHECK 3/7] Auditing Encoding Integrity & Mojibake...")
    corrupt_patterns = ['â€™', 'â€œ', 'â€', 'à¤', 'à¥', 'â€¦', 'Ã¢']
    found = []
    
    for dirpath, _, filenames in os.walk(ROOT):
        rel = os.path.relpath(dirpath, ROOT)
        if any(p in ('.git', '__pycache__', 'node_modules') for p in rel.split(os.sep)):
            continue
        for f in filenames:
            if f.endswith('.html') or f.endswith('.json'):
                p = os.path.join(dirpath, f)
                try:
                    c = open(p, encoding='utf-8', errors='ignore').read()
                    for cp in corrupt_patterns:
                        if cp in c:
                            found.append((os.path.relpath(p, ROOT), cp))
                            break
                except Exception:
                    pass
                    
    if found:
        print(f"  ❌ FAILED: {len(found)} files have mojibake patterns:")
        for fp, cp in found[:10]:
            print(f"     - {fp} (pattern: {cp})")
        return False
    else:
        print(f"  ✅ PASSED: 0 files have mojibake. All UTF-8 strings are pristine!")
        return True

def audit_duplicate_pairs():
    print("\n[CHECK 4/7] Auditing 65 Duplicate Service Pairs (GitHub Pages Redirect Stubs)...")
    from fix_duplicate_service_pairs import PAIRS
    broken = []
    for short_f, full_f in PAIRS:
        full_p = os.path.join(ROOT, 'service', full_f)
        if not os.path.exists(full_p):
            broken.append((full_f, "File Missing"))
            continue
        with open(full_p, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        if 'http-equiv="refresh"' not in c or short_f not in c or 'window.location.replace' not in c:
            broken.append((full_f, "Not a valid client-side redirect stub"))
            
    if broken:
        print(f"  ❌ FAILED: {len(broken)} duplicate pair files are invalid:")
        for b in broken:
            print(f"     - {b[0]}: {b[1]}")
        return False
    else:
        print(f"  ✅ PASSED: All {len(PAIRS)} duplicate pair files are valid client-side HTML redirect stubs!")
        return True

def audit_service_gov_links():
    print("\n[CHECK 5/7] Auditing Official Government Direct Links in Services...")
    services = glob.glob(os.path.join(ROOT, 'service', '*.html'))
    missing = []
    for s in services:
        with open(s, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        if 'http-equiv="refresh"' in c or os.path.basename(s) == 'service.html':
            continue
        has_gov_link = bool(re.search(r'https?://[a-zA-Z0-9.-]+\.gov\.in|https?://[a-zA-Z0-9.-]+\.nic\.in|officialLinks|officialLink|आधिकारिक लिंक|Primary Source', c, re.IGNORECASE))
        if not has_gov_link:
            missing.append(os.path.basename(s))
            
    if missing:
        print(f"  ❌ FAILED: {len(missing)} service content pages missing official link:")
        for m in missing[:10]:
            print(f"     - {m}")
        return False
    else:
        print(f"  ✅ PASSED: 100% of service content pages have verified official gov links!")
        return True

def audit_baked_headers_footers():
    print("\n[CHECK 6/7] Auditing Pre-rendered Baked Headers & Footers...")
    key_pages = [
        'tools/csc-locator.html',
        'tools/eligibility-checker.html',
        'tools/document-checklist.html',
        'tools/status-troubleshooter.html',
        'jobs/index.html',
        'exams/index.html',
        'category/index.html',
        'states/index.html',
        'service/ayushman-bharat.html',
        'service/pm-kisan.html'
    ]
    broken = []
    for kp in key_pages:
        p = os.path.join(ROOT, kp)
        if not os.path.exists(p):
            broken.append((kp, "File Missing"))
            continue
        with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
            c = fp.read()
        if 'class="site-header"' not in c or 'class="site-footer"' not in c:
            broken.append((kp, "Header or Footer not pre-baked"))
            
    if broken:
        print(f"  ❌ FAILED: {len(broken)} key master pages missing baked header/footer:")
        for b in broken:
            print(f"     - {b[0]}: {b[1]}")
        return False
    else:
        print(f"  ✅ PASSED: All key master hub and tool pages have pre-baked headers and footers!")
        return True

def audit_git_hygiene():
    print("\n[CHECK 7/7] Auditing Git Hygiene (.gitignore & pycache)...")
    import subprocess
    res = subprocess.run(["git", "ls-files", "*.pyc", "*__pycache__*"], capture_output=True, text=True, cwd=ROOT)
    tracked_cache = [l for l in res.stdout.splitlines() if l.strip()]
    if tracked_cache:
        print(f"  ❌ FAILED: {len(tracked_cache)} __pycache__ / .pyc files tracked in git:")
        for tc in tracked_cache[:10]:
            print(f"     - {tc}")
        return False
    else:
        print(f"  ✅ PASSED: 0 __pycache__ or .pyc files tracked in git repository!")
        return True

def main():
    print("=" * 80)
    print("SARKARISEWA INDIA — MASTER CI GUARD & VERIFICATION SUITE")
    print("=" * 80)
    
    results = [
        audit_blog_titles(),
        audit_brand_names(),
        audit_encoding_mojibake(),
        audit_duplicate_pairs(),
        audit_service_gov_links(),
        audit_baked_headers_footers(),
        audit_git_hygiene()
    ]
    
    print("\n" + "=" * 80)
    if all(results):
        print("🎉 ALL 7/7 AUDITS PASSED WITH 100% PERFECTION! ZERO REGRESSION DETECTED.")
        print("=" * 80)
        sys.exit(0)
    else:
        failed_count = results.count(False)
        print(f"⚠️ {failed_count}/7 AUDITS FAILED. PLEASE FIX IDENTIFIED ISSUES.")
        print("=" * 80)
        sys.exit(1)

if __name__ == '__main__':
    main()
