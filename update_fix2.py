import os
import json

file_path = "tools/self-declaration-builder.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update Title
start = html.find('<title>')
end = html.find('</title>') + 8
if start != -1:
    html = html[:start] + '<title>Self Declaration Letter Online – Free PDF Builder | Hindi & English</title>' + html[end:]

# 2. Update Meta Description
# We will just find the meta description and replace it using string split or find
start_desc = html.find('<meta name="description" content="')
if start_desc != -1:
    end_desc = html.find('>', start_desc) + 1
    new_desc = '<meta name="description" content="Self Declaration Letter online बनाएं और free PDF download करें. Name, address और purpose भरें. Hindi & English formats available. No login required." />'
    html = html[:start_desc] + new_desc + html[end_desc:]

# Twitter and OG
start_og_title = html.find('<meta property="og:title"')
if start_og_title != -1:
    end_og_title = html.find('>', start_og_title) + 1
    html = html[:start_og_title] + '<meta property="og:title" content="Self Declaration Letter Online – Free PDF Builder | Hindi & English" />' + html[end_og_title:]

start_og_desc = html.find('<meta property="og:description"')
if start_og_desc != -1:
    end_og_desc = html.find('>', start_og_desc) + 1
    html = html[:start_og_desc] + '<meta property="og:description" content="Self Declaration Letter online बनाएं और free PDF download करें. Name, address और purpose भरें. Hindi & English formats available. No login required." />' + html[end_og_desc:]

start_tw_title = html.find('<meta name="twitter:title"')
if start_tw_title != -1:
    end_tw_title = html.find('>', start_tw_title) + 1
    html = html[:start_tw_title] + '<meta name="twitter:title" content="Self Declaration Letter Online – Free PDF Builder | Hindi & English" />' + html[end_tw_title:]

start_tw_desc = html.find('<meta name="twitter:description"')
if start_tw_desc != -1:
    end_tw_desc = html.find('>', start_tw_desc) + 1
    html = html[:start_tw_desc] + '<meta name="twitter:description" content="Self Declaration Letter online बनाएं और free PDF download करें. Name, address और purpose भरें. Hindi & English formats available. No login required." />' + html[end_tw_desc:]


# 3. Update H1
start_h1 = html.find('<h1 class="calculator-title">')
if start_h1 != -1:
    end_h1 = html.find('</h1>', start_h1) + 5
    html = html[:start_h1] + '<h1 class="calculator-title">Self Declaration Letter Online बनाएं – Free PDF</h1>' + html[end_h1:]

# 4. Update Intro Text
start_p = html.find('<p class="calculator-desc">')
if start_p != -1:
    end_p = html.find('</p>', start_p) + 4
    html = html[:start_p] + '<p class="calculator-desc">अपना Self Declaration Letter कुछ ही मिनटों में बनाएं। जरूरी जानकारी भरें, format चुनें और PDF तैयार करें। सरकारी काम, नौकरी, scholarship और अन्य जरूरतों के लिए उपयोगी।</p>' + html[end_p:]

# 5. Update Templates Select
start_sel = html.find('<select id="template-select" onchange="updateTemplate()">')
if start_sel != -1:
    end_sel = html.find('</select>', start_sel) + 9
    new_select = """<select id="template-select" onchange="updateTemplate()">
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
        </select>"""
    html = html[:start_sel] + new_select + html[end_sel:]

# 6. Update JS
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
html = html.replace('const templates = {', new_templates_js + "\n      'income': {\n        title: \"SELF DECLARATION FOR INCOME CERTIFICATE\",\n        extraFields: [\n          { id: \"e_income\", label: \"वार्षिक पारिवारिक आय (Annual Family Income in ₹):\", type: \"number\", placeholder: \"उदा. 150000\" },\n          { id: \"e_source\", label: \"आय का मुख्य स्रोत (Source of Income):\", type: \"text\", placeholder: \"उदा. Agriculture / Private Job\" }\n        ],\n        bodyGenerator: (data) => `\n          1. That I am a citizen of India and a permanent resident of the above-mentioned address.<br>\n          2. That my total family annual income from all sources (including ${data.e_source || '<span class=\"placeholder-text\">[Source]</span>'}) is ₹<span class=\"doc-field\">${data.e_income || '________'}</span> for the current financial year.<br>\n          3. That I need an Income Certificate for the purpose of availing government scheme benefits / educational scholarships.<br>\n          4. That no other member of my family pays income tax.\n        `\n      },")
# Wait, replacing `const templates = {` with this will duplicate `income` if I'm not careful. Let me just replace `const templates = {` with `new_templates_js` + `const templates = {`... wait, no. The original is:
# const templates = {
#       'income': { ...

html = html.replace("const templates = {", new_templates_js)

# 7. Add Schema
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
      }
    ]
  }
  </script>
</head>"""
if "WebApplication" not in html:
    html = html.replace("</head>", schema)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)
