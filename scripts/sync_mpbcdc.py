import os

files = [
    'mpbcdc-direct-loan-yojana.html',
    'mpbcdc-subsidy-yojana.html',
    'mpbcdc-seed-capital-yojana.html',
    'mpbcdc-yojana.html'
]

for fname in files:
    with open(fname, 'r', encoding='utf-8') as f_in:
        content = f_in.read()
    
    s_content = content
    s_content = s_content.replace('https://sarkarisewaindia.com/' + fname, 'https://sarkarisewaindia.com/service/' + fname)
    s_content = s_content.replace('window.SS_ROOT = "";', 'window.SS_ROOT = "../";')
    s_content = s_content.replace('href="assets/', 'href="../assets/')
    s_content = s_content.replace('src="assets/', 'src="../assets/')
    s_content = s_content.replace('href="manifest.json"', 'href="../manifest.json"')
    s_content = s_content.replace('href="favicon.ico"', 'href="../favicon.ico"')
    s_content = s_content.replace('href="index.html"', 'href="../index.html"')
    s_content = s_content.replace('href="search.html"', 'href="../search.html"')
    s_content = s_content.replace('href="about.html"', 'href="../about.html"')
    s_content = s_content.replace('href="contact.html"', 'href="../contact.html"')
    s_content = s_content.replace('href="faq.html"', 'href="../faq.html"')
    s_content = s_content.replace('href="sitemap.html"', 'href="../sitemap.html"')
    s_content = s_content.replace('href="privacy-policy.html"', 'href="../privacy-policy.html"')
    s_content = s_content.replace('href="disclaimer.html"', 'href="../disclaimer.html"')
    s_content = s_content.replace('href="terms.html"', 'href="../terms.html"')
    s_content = s_content.replace('href="category/', 'href="../category/')
    s_content = s_content.replace('href="states/', 'href="../states/')
    s_content = s_content.replace('href="tools/', 'href="../tools/')
    s_content = s_content.replace('href="jobs/', 'href="../jobs/')
    s_content = s_content.replace('href="exams/', 'href="../exams/')
    s_content = s_content.replace('href="blog/', 'href="../blog/')
    s_content = s_content.replace('href="support/', 'href="../support/')
    s_content = s_content.replace('href="admin/', 'href="../admin/')
    s_content = s_content.replace('href="project-report/', 'href="../project-report/')
    s_content = s_content.replace('href="7th-pay-commission-calculator.html"', 'href="../7th-pay-commission-calculator.html"')
    s_content = s_content.replace('href="8th-pay-calculator.html"', 'href="../8th-pay-calculator.html"')
    
    dest_path = os.path.join('service', fname)
    with open(dest_path, 'w', encoding='utf-8') as f_out:
        f_out.write(s_content)
    print(f'Successfully generated {dest_path} ({len(s_content)} bytes)')
