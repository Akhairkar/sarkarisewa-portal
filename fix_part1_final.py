import glob
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("=" * 70)
print("🚀 APPLYING PART 1 FINAL FIXES & CLEANUP")
print("=" * 70)

# 1. Delete 3 misplaced district files
misplaced = [
    'service/csc-locator/bihar/dimapur.html',
    'service/csc-locator/west-bengal/guntur.html',
    'service/csc-locator/delhi/meerut.html'
]
for m in misplaced:
    if os.path.exists(m):
        os.remove(m)
        print(f"✅ Deleted misplaced file: {m}")
    else:
        print(f"Clean: {m}")

# 2. Fix PM-USP scholarship meta tag syntax and encoding
pm_usp_file = 'service/pm-usp-college-scholarship.html'
if os.path.exists(pm_usp_file):
    with open(pm_usp_file, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    c = re.sub(r'name=["\']description["\']/>/&gt;', 'name="description"/>', c)
    c = re.sub(r'property=["\']og:description["\']/>/&gt;', 'property="og:description"/>', c)
    with open(pm_usp_file, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print("✅ Fixed service/pm-usp-college-scholarship.html metadata syntax.")

# 3. Fix nav & footer relative links in all service/*.html pages
replacements = [
    ('href="../../index.html" style="padding-left: 32px;">🖼️ Govt Exam Photo Resizer</a>', 'href="../tools/photo-resizer.html" style="padding-left: 32px;">🖼️ Govt Exam Photo Resizer</a>'),
    ('href="../../index.html" style="padding-left: 32px;">✍️ Signature Resizer</a>', 'href="../tools/signature-resizer.html" style="padding-left: 32px;">✍️ Signature Resizer</a>'),
    ('href="../../index.html" style="padding-left: 32px;">📄 Document Compressor</a>', 'href="../tools/document-compressor.html" style="padding-left: 32px;">📄 Document Compressor</a>'),
    ('href="../../index.html" style="padding-left: 32px;">📍 CSC / e-Seva Locator</a>', 'href="../tools/csc-locator.html" style="padding-left: 32px;">📍 CSC / e-Seva Locator</a>'),
    ('href="../../index.html" style="padding-left: 32px;">🎯 Scheme Eligibility Engine</a>', 'href="../tools/eligibility-checker.html" style="padding-left: 32px;">🎯 Scheme Eligibility Engine</a>'),
    ('href="../../index.html" style="padding-left: 32px;">📋 Document Checklist</a>', 'href="../tools/document-checklist.html" style="padding-left: 32px;">📋 Document Checklist</a>'),
    ('href="../../index.html" style="padding-left: 32px;">📝 Self-Declaration Builder</a>', 'href="../tools/self-declaration-builder.html" style="padding-left: 32px;">📝 Self-Declaration Builder</a>'),
    ('href="../../index.html" style="padding-left: 32px;">⌨️ Typing Speed Test</a>', 'href="../tools/typing-speed-test.html" style="padding-left: 32px;">⌨️ Typing Speed Test</a>'),
    ('href="../../index.html" style="padding-left: 32px;">📅 Deadline Calendar</a>', 'href="../tools/deadline-calendar.html" style="padding-left: 32px;">📅 Deadline Calendar</a>'),
    ('href="../../index.html" style="padding-left: 32px;">🔗 PAN-Aadhaar Resolver</a>', 'href="../tools/pan-aadhaar-conflict-resolver.html" style="padding-left: 32px;">🔗 PAN-Aadhaar Resolver</a>'),
    ('href="../../index.html" style="padding-left: 32px;">🔍 Status Troubleshooter</a>', 'href="../tools/status-troubleshooter.html" style="padding-left: 32px;">🔍 Status Troubleshooter</a>'),
    ('href="../../index.html" style="padding-left: 32px;">💳 Govt Card Clarifier</a>', 'href="../tools/govt-card-clarifier.html" style="padding-left: 32px;">💳 Govt Card Clarifier</a>'),
    ('href="../../index.html" style="padding-left: 32px;">⏳ Age &amp; Retirement Calculator</a>', 'href="../tools/age-calculator.html" style="padding-left: 32px;">⏳ Age &amp; Retirement Calculator</a>'),
    ('href="../../index.html" style="padding-left: 32px;">📊 Savings Comparator</a>', 'href="../tools/savings-comparator.html" style="padding-left: 32px;">📊 Savings Comparator</a>'),
    ('href="../../index.html" style="padding-left: 32px;">💰 Gratuity Calculator</a>', 'href="../tools/gratuity-calculator.html" style="padding-left: 32px;">💰 Gratuity Calculator</a>'),
    ('href="../../index.html" style="padding-left: 32px;">⚖️ Income Tax</a>', 'href="../tools/income-tax-calculator.html" style="padding-left: 32px;">⚖️ Income Tax</a>'),
    ('href="../../index.html" style="padding-left: 32px;">⚖️ Late Filing Penalty Calculator</a>', 'href="../tools/itr-penalty-calculator.html" style="padding-left: 32px;">⚖️ Late Filing Penalty Calculator</a>'),
    ('href="../../index.html" style="padding-left: 32px;">📈 EPF Calculator</a>', 'href="../tools/epf-calculator.html" style="padding-left: 32px;">📈 EPF Calculator</a>'),
    ('href="../../index.html" style="padding-left: 32px;">🏠 HRA Exemption</a>', 'href="../tools/hra-calculator.html" style="padding-left: 32px;">🏠 HRA Exemption</a>'),
    ('href="../../index.html" style="padding-left: 32px;">🧮 7th Pay Calculator</a>', 'href="../7th-pay-commission-calculator.html" style="padding-left: 32px;">🧮 7th Pay Calculator</a>'),
    ('href="../../index.html" style="padding-left: 32px;">🚀 8th Pay Projection</a>', 'href="../8th-pay-calculator.html" style="padding-left: 32px;">🚀 8th Pay Projection</a>'),
    ('href="../../states/index.html" style="padding-left: 32px;">', 'href="../states/index.html" style="padding-left: 32px;">'),
    ('data-i18n="nav_identity" href="../../index.html"', 'data-i18n="nav_identity" href="../category/identity-documents.html"'),
    ('data-i18n="nav_schemes" href="../../index.html"', 'data-i18n="nav_schemes" href="../category/government-schemes.html"'),
    ('data-i18n="nav_finance" href="../../index.html"', 'data-i18n="nav_finance" href="../category/finance-tax.html"'),
    ('data-i18n="nav_jobs" href="../../index.html"', 'data-i18n="nav_jobs" href="../category/jobs-education.html"'),
    ('data-i18n="nav_utilities" href="../../index.html"', 'data-i18n="nav_utilities" href="../category/utilities.html"'),
    ('data-i18n="nav_health" href="../../index.html"', 'data-i18n="nav_health" href="../category/health.html"'),
    ('data-i18n="nav_support" href="../../index.html"', 'data-i18n="nav_support" href="../support/index.html"'),
    ('data-i18n="nav_blog" href="../../index.html"', 'data-i18n="nav_blog" href="../blog/index.html"'),
    ('data-i18n="nav_jobalerts" href="../../index.html"', 'data-i18n="nav_jobalerts" href="../jobs/index.html"'),
    ('data-i18n="nav_examcal" href="../../index.html"', 'data-i18n="nav_examcal" href="../exams/index.html"'),
    ('href="../../index.html">🧮 Tools &amp; Calculators</a>', 'href="../tools/index.html">🧮 Tools &amp; Calculators</a>'),
    ('data-i18n="nav_eligibility_engine" href="../../index.html"', 'data-i18n="nav_eligibility_engine" href="../tools/eligibility-checker.html"'),
    ('href="../../index.html">📋 Document Checklist</a>', 'href="../tools/document-checklist.html">📋 Document Checklist</a>'),
    ('href="../../index.html">📝 Self-Declaration Builder</a>', 'href="../tools/self-declaration-builder.html">📝 Self-Declaration Builder</a>'),
    ('href="../../index.html">📸 Govt Exam Photo Resizer</a>', 'href="../tools/photo-resizer.html">📸 Govt Exam Photo Resizer</a>'),
    ('href="../../index.html">✍️ Signature Resizer</a>', 'href="../tools/signature-resizer.html">✍️ Signature Resizer</a>'),
    ('href="../../index.html">📄 Document Compressor</a>', 'href="../tools/document-compressor.html">📄 Document Compressor</a>'),
    ('href="../../index.html">📊 Savings Scheme Comparator</a>', 'href="../tools/savings-comparator.html">📊 Savings Scheme Comparator</a>'),
    ('href="../../index.html">💳 Govt Card Clarifier</a>', 'href="../tools/govt-card-clarifier.html">💳 Govt Card Clarifier</a>'),
    ('href="../../index.html">', 'href="../index.html">')
]

service_files = glob.glob('service/*.html')
fixed_count = 0
for f in service_files:
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    orig = content
    for old, new in replacements:
        content = content.replace(old, new)
    if content != orig:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(content)
        fixed_count += 1

print(f"✅ Fixed navigation & footer relative links in {fixed_count} service pages.")

# 4. Generate clean sitemap
all_html_files = [f.replace('\\', '/') for f in glob.glob('**/*.html', recursive=True) if not f.startswith('.')]
admin_root_files = {
    'dashboard.html', 'analytics.html', 'blog.html', 'comments.html',
    'csc.html', 'deadlines.html', 'exams.html', 'jobs.html',
    'services.html', 'subscribers.html', '404.html', 'google3d97747d4af174a7.html',
    'service/service.html', 'header.html', 'partials/footer.html', 'partials/header.html'
}

valid_sitemap_urls = []
base_url = "https://sarkarisewaindia.com"

for fpath in sorted(all_html_files):
    if fpath.startswith('admin/') or fpath in admin_root_files:
        continue
    priority = "0.6"
    changefreq = "monthly"
    if fpath == "index.html":
        priority = "1.0"
        changefreq = "daily"
    elif "calculator" in fpath or fpath.startswith("tools/"):
        priority = "0.9"
        changefreq = "weekly"
    elif fpath.startswith("states/") and fpath.count('/') == 1:
        priority = "0.8"
        changefreq = "weekly"
    elif fpath.startswith("service/") and fpath.count('/') == 1:
        priority = "0.8"
        changefreq = "weekly"
    elif fpath.startswith("service/csc-locator/") and fpath.count('/') == 2:
        priority = "0.8"
        changefreq = "weekly"
    elif fpath.startswith("service/csc-locator/") or fpath.startswith("service/jan-aushadhi/"):
        priority = "0.7"
        changefreq = "monthly"
    elif fpath.startswith("blog/") or fpath.startswith("web-stories/"):
        priority = "0.7"
        changefreq = "weekly"
        
    valid_sitemap_urls.append({
        "loc": f"{base_url}/{fpath}",
        "lastmod": "2026-08-29",
        "changefreq": changefreq,
        "priority": priority
    })

sitemap_xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap_xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for item in valid_sitemap_urls:
    sitemap_xml_content += f"""  <url>
    <loc>{item['loc']}</loc>
    <lastmod>{item['lastmod']}</lastmod>
    <changefreq>{item['changefreq']}</changefreq>
    <priority>{item['priority']}</priority>
  </url>\n"""
sitemap_xml_content += '</urlset>\n'

with open('sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_xml_content)

print(f"✅ Generated clean sitemap.xml with {len(valid_sitemap_urls)} public URLs.")
print("=" * 70)
print("🎉 ALL PART 1 FIXES SUCCESSFULLY COMPLETED!")
print("=" * 70)
