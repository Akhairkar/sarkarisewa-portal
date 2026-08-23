import json

file_path = "tools/self-declaration-builder.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Replace H1
original_h1 = '<h1 class="calculator-title">📝 स्व-घोषणा पत्र निर्माता (Self Declaration PDF Builder)</h1>'
new_h1 = '<h1 class="calculator-title">Self Declaration Letter Online बनाएं – Free PDF</h1>'
if original_h1 in html:
    html = html.replace(original_h1, new_h1)

# Replace description
original_desc = '<p class="calculator-desc">किसी भी सरकारी या प्राइवेट काम के लिए अपना Affidavit या स्व-घोषणा पत्र मिनटों में ऑनलाइन बनाएं और फ्री PDF डाउनलोड करें।</p>'
new_desc = '<p class="calculator-desc">अपना Self Declaration Letter कुछ ही मिनटों में बनाएं। जरूरी जानकारी भरें, format चुनें और PDF तैयार करें। सरकारी काम, नौकरी, scholarship और अन्य जरूरतों के लिए उपयोगी।</p>'
if original_desc in html:
    html = html.replace(original_desc, new_desc)

# Select options
original_select = """<select id="template-select" onchange="updateTemplate()">
          <option value="income">आय प्रमाण पत्र हेतु (Income Declaration)</option>
          <option value="name_change">नाम सुधार (Name Change Affidavit)</option>
          <option value="gap_year">गैप ईयर (Gap Year Affidavit)</option>
          <option value="noc">सामान्य एनओसी (General NOC)</option>
          <option value="address">पता परिवर्तन (Address Change)</option>
        </select>"""
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
# Let's use a regex for select just in case indentation varies, but simpler
import re
html = re.sub(r'<select id="template-select" onchange="updateTemplate()">.*?</select>', new_select, html, flags=re.DOTALL)

# Add schema
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
