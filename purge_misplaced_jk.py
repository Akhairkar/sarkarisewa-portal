import os
import glob
import shutil
import re

# 1. Delete 27 misplaced files
misplaced_files = [
    'service/csc-locator/andhra-pradesh/jammu.html',
    'service/csc-locator/assam/badgam.html',
    'service/csc-locator/assam/baramulla.html',
    'service/csc-locator/bihar/badgam.html',
    'service/csc-locator/chhattisgarh/baramulla.html',
    'service/csc-locator/chhattisgarh/kargil.html',
    'service/csc-locator/chhattisgarh/kathua.html',
    'service/csc-locator/gujarat/doda.html',
    'service/csc-locator/gujarat/kargil.html',
    'service/csc-locator/jharkhand/baramulla.html',
    'service/csc-locator/karnataka/jammu.html',
    'service/csc-locator/karnataka/kargil.html',
    'service/csc-locator/kerala/jammu.html',
    'service/csc-locator/madhya-pradesh/baramulla.html',
    'service/csc-locator/madhya-pradesh/doda.html',
    'service/csc-locator/madhya-pradesh/kargil.html',
    'service/csc-locator/maharashtra/doda.html',
    'service/csc-locator/manipur/badgam.html',
    'service/csc-locator/nagaland/badgam.html',
    'service/csc-locator/odisha/baramulla.html',
    'service/csc-locator/punjab/kargil.html',
    'service/csc-locator/rajasthan/anantnag.html',
    'service/csc-locator/sikkim/badgam.html',
    'service/csc-locator/tamil-nadu/jammu.html',
    'service/csc-locator/tamil-nadu/kathua.html',
    'service/csc-locator/telangana/kathua.html',
    'service/csc-locator/tripura/kargil.html'
]

deleted_count = 0
for f in misplaced_files:
    if os.path.exists(f):
        os.remove(f)
        deleted_count += 1

print(f"Deleted {deleted_count} misplaced J&K district files.")

# 2. Handle duplicate jammu-kashmir folder
jk_old_dir = 'service/csc-locator/jammu-kashmir'
jk_target_dir = 'service/csc-locator/jammu-and-kashmir'

if os.path.exists(jk_old_dir):
    # Copy any missing files to jammu-and-kashmir
    for item in os.listdir(jk_old_dir):
        src = os.path.join(jk_old_dir, item)
        dst = os.path.join(jk_target_dir, item)
        if not os.path.exists(dst):
            shutil.copy2(src, dst)
            print(f"Copied {item} to {jk_target_dir}")
    shutil.rmtree(jk_old_dir)
    print("Deleted duplicate folder service/csc-locator/jammu-kashmir/")

# Also check root level or states level for duplicate jammu-kashmir
if os.path.exists('service/csc-locator/jammu-kashmir.html'):
    os.remove('service/csc-locator/jammu-kashmir.html')

# 3. Clean sitemap.xml
if os.path.exists('sitemap.xml'):
    with open('sitemap.xml', 'r', encoding='utf-8') as f:
        sitemap_content = f.read()

    # Remove deleted URLs from sitemap
    for f in misplaced_files:
        url_path = f.replace('\\', '/')
        url = f"https://sarkarisewaindia.com/{url_path}"
        sitemap_content = re.sub(rf'<url>\s*<loc>{re.escape(url)}</loc>.*?</url>', '', sitemap_content, flags=re.DOTALL)

    # Remove jammu-kashmir URLs (pointing to old folder)
    sitemap_content = re.sub(r'<url>\s*<loc>https://sarkarisewaindia\.com/service/csc-locator/jammu-kashmir/.*?</loc>.*?</url>', '', sitemap_content, flags=re.DOTALL)

    with open('sitemap.xml', 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    print("Cleaned sitemap.xml.")
