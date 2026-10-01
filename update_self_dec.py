import re

file_path = "tools/self-declaration-builder.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update Title
html = re.sub(
    r'<title>.*?</title>',
    '<title>Self Declaration Letter Online – Free PDF Builder | Hindi & English</title>',
    html,
    flags=re.DOTALL
)

# 2. Update Meta Description
html = re.sub(
    r'<meta name="description" content=".*?"\s*/>',
    '<meta name="description" content="Self Declaration Letter online बनाएं और free PDF download करें. Name, address और purpose भरें. Hindi & English formats available. No login required." />',
    html,
    flags=re.DOTALL
)

# Update OG/Twitter Tags
html = re.sub(r'<meta property="og:title" content=".*?"\s*/>', '<meta property="og:title" content="Self Declaration Letter Online – Free PDF Builder | Hindi & English" />', html)
html = re.sub(r'<meta property="og:description" content=".*?"\s*/>', '<meta property="og:description" content="Self Declaration Letter online बनाएं और free PDF download करें. Name, address और purpose भरें. Hindi & English formats available. No login required." />', html)
html = re.sub(r'<meta name="twitter:title" content=".*?"\s*/>', '<meta name="twitter:title" content="Self Declaration Letter Online – Free PDF Builder | Hindi & English" />', html)
html = re.sub(r'<meta name="twitter:description" content=".*?"\s*/>', '<meta name="twitter:description" content="Self Declaration Letter online बनाएं और free PDF download करें. Name, address और purpose भरें. Hindi & English formats available. No login required." />', html)

# 3 & 4. Update H1 and Above-the-fold Intro
html = re.sub(
    r'<h1 class="calculator-title">.*?</h1>',
    '<h1 class="calculator-title">Self Declaration Letter Online बनाएं – Free PDF</h1>',
    html,
    flags=re.DOTALL
)

html = re.sub(
    r'<p class="calculator-desc">.*?</p>',
    '<p class="calculator-desc">अपना Self Declaration Letter कुछ ही मिनटों में बनाएं। जरूरी जानकारी भरें, format चुनें और PDF तैयार करें। सरकारी काम, नौकरी, scholarship और अन्य जरूरतों के लिए उपयोगी।</p>',
    html,
    flags=re.DOTALL
)

# 5. Add new Templates to <select>
new_options = """
            <option value="general">सामान्य घोषणा (General Self Declaration)</option>
            <option value="income">आय प्रमाण पत्र हेतु (Income Declaration)</option>
            <option value="address">पता परिवर्तन (Address Change)</option>
            <option value="student">छात्र घोषणा (Student Self Declaration)</option>
            <option value="scholarship">स्कॉलरशिप घोषणा (Scholarship Self Declaration)</option>
            <option value="job">नौकरी/रोजगार घोषणा (Job/Employment Self Declaration)</option>
            <option value="scheme">सरकारी योजना (Government Scheme Self Declaration)</option>
            <option value="name_change">नाम सुधार (Name Change Affidavit)</option>
            <option value="gap_year">गैप ईयर (Gap Year Affidavit)</option>
            <option value="noc">सामान्य एनओसी (General NOC)</option>
"""
html = re.sub(
    r'<select id="template-select" onchange="updateTemplate()">.*?</select>',
    '<select id="template-select" onchange="updateTemplate()">' + new_options + '</select>',
    html,
    flags=re.DOTALL
)

# 6. Update JavaScript to include the new templates
new_templates_js = """const templates = {
        'general': {
          title: "SELF DECLARATION",
          extraFields: [
            { id: "e_purpose", label: "घोषणा का उद्देश्य (Purpose of Declaration):", type: "text", placeholder: "उदा. For official record" },
            { id: "e_statement", label: "मुख्य कथन (Main Statement):", type: "text", placeholder: "उदा. All my submitted documents are valid." }
          ],
          bodyGenerator: (data) => `
            1. That I am a citizen of India.<br>
            2. That this declaration is made for the purpose of <span class="doc-field">${data.e_purpose || '__________'}</span>.<br>
            3. That <span class="doc-field">${data.e_statement || '__________'}</span>.<br>
            4. That all the information provided by me is true and correct to the best of my knowledge and belief.
          `
        },
        'student': {
          title: "SELF DECLARATION BY STUDENT",
          extraFields: [
            { id: "e_course", label: "कोर्स/कक्षा (Course/Class):", type: "text", placeholder: "B.A. 1st Year" },
            { id: "e_college", label: "स्कूल/कॉलेज का नाम (School/College Name):", type: "text", placeholder: "Govt College" }
          ],
          bodyGenerator: (data) => `
            1. That I am a bonafide student of <span class="doc-field">${data.e_college || '__________'}</span>.<br>
            2. That I am currently studying in <span class="doc-field">${data.e_course || '__________'}</span> for the current academic session.<br>
            3. That I am submitting this declaration to confirm my active enrollment for official purposes.<br>
            4. That my conduct has been satisfactory and I abide by all institutional rules.
          `
        },
        'scholarship': {
          title: "SELF DECLARATION FOR SCHOLARSHIP",
          extraFields: [
            { id: "e_course", label: "कोर्स का नाम (Course Name):", type: "text", placeholder: "B.A. 1st Year" },
            { id: "e_college", label: "कॉलेज/स्कूल का नाम (College/School Name):", type: "text", placeholder: "Govt College" }
          ],
          bodyGenerator: (data) => `
            1. That I am a bonafide student of <span class="doc-field">${data.e_college || '__________'}</span> studying in <span class="doc-field">${data.e_course || '__________'}</span>.<br>
            2. That I am applying for the scholarship for the current academic year.<br>
            3. That I am not availing any other scholarship/stipend from any other government or private organization for this course.<br>
            4. That if any information is found incorrect, I am liable to refund the scholarship amount.
          `
        },
        'job': {
          title: "SELF DECLARATION FOR EMPLOYMENT",
          extraFields: [
            { id: "e_post", label: "पद का नाम (Post Applied For):", type: "text", placeholder: "Clerk" },
            { id: "e_dept", label: "विभाग (Department):", type: "text", placeholder: "Revenue Dept" }
          ],
          bodyGenerator: (data) => `
            1. That I have applied for the post of <span class="doc-field">${data.e_post || '__________'}</span> in <span class="doc-field">${data.e_dept || '__________'}</span>.<br>
            2. That I fulfill all the eligibility criteria regarding age, educational qualification, and experience as prescribed in the notification.<br>
            3. That I do not have any criminal case pending against me in any court of law.<br>
            4. That all documents submitted by me are genuine and verifiable.
          `
        },
        'scheme': {
          title: "SELF DECLARATION FOR GOVERNMENT SCHEME",
          extraFields: [
            { id: "e_scheme", label: "योजना का नाम (Scheme Name):", type: "text", placeholder: "PM Awas Yojana" }
          ],
          bodyGenerator: (data) => `
            1. That I am applying for the benefits under <span class="doc-field">${data.e_scheme || '__________'}</span>.<br>
            2. That I fulfill all the eligibility conditions laid down by the Government for this scheme.<br>
            3. That neither I nor any of my family members have availed the benefit of this scheme previously.<br>
            4. That the information and documents provided are completely true and accurate.
          `
        },
"""
html = html.replace('const templates = {', new_templates_js)

# 7. Add Schema.org JSON-LD (WebApplication, FAQPage)
schema = """
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Self Declaration Letter Builder",
        "url": "https://sarkarisewaindia.com/tools/self-declaration-builder.html",
        "applicationCategory": "Utility",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "description": "Create and download Free Self Declaration Letters in PDF format for Indian Government Schemes, Scholarships, Income, and Jobs."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this Self Declaration Letter Builder really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, completely free. No login, no signup and no hidden charges - fill the form and download your PDF instantly."
            }
          },
          {
            "@type": "Question",
            "name": "Is a self-attested self declaration letter legally valid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A self declaration letter is commonly accepted by many government offices and institutions when a standard document isn't available, but always check the specific department's requirement before submitting."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to print and sign the letter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, most offices require a physical or digital signature on the printed/downloaded letter - check whether your specific use case needs notarization or just a plain signature."
            }
          }
        ]
      }
    ]
  }
  </script>
</head>
"""
if 'application/ld+json' not in html:
    html = html.replace('</head>', schema)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Self Declaration Builder SEO & UX Upgrade Applied!")
