import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

PAIRS_18 = [
    ("service/andaman-nicobar-income-certificate.html", "an-income-certificate"),
    ("service/arunachal-pradesh-income-certificate.html", "ar-income-certificate"),
    ("service/chandigarh-income-certificate.html", "ch-income-certificate"),
    ("service/dadra-nagar-haveli-daman-diu-income-certificate.html", "dn-income-certificate"),
    ("service/goa-income-certificate.html", "ga-income-certificate"),
    ("service/himachal-pradesh-income-certificate.html", "hp-income-certificate"),
    ("service/jammu-kashmir-income-certificate.html", "jk-income-certificate"),
    ("service/karnataka-income-certificate.html", "ka-income-certificate"),
    ("service/ladakh-income-certificate.html", "la-income-certificate"),
    ("service/lakshadweep-income-certificate.html", "ld-income-certificate"),
    ("service/manipur-income-certificate.html", "mn-income-certificate"),
    ("service/meghalaya-income-certificate.html", "ml-income-certificate"),
    ("service/mizoram-income-certificate.html", "mz-income-certificate"),
    ("service/nagaland-income-certificate.html", "nl-income-certificate"),
    ("service/puducherry-income-certificate.html", "py-income-certificate"),
    ("service/sikkim-income-certificate.html", "sk-income-certificate"),
    ("service/tripura-income-certificate.html", "tr-income-certificate"),
    ("service/uttar-pradesh-income-certificate.html", "up-income-certificate")
]

stub_template = """<!DOCTYPE html>
<html lang="hi">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<title>Redirecting to Official Service Page | SarkariSewa India</title>
<link rel="canonical" href="https://sarkarisewaindia.com/service/{target}.html" />
<meta http-equiv="refresh" content="0; url=https://sarkarisewaindia.com/service/{target}.html" />
<script>window.location.replace("https://sarkarisewaindia.com/service/{target}.html");</script>
</head>
<body>
<p>Ye page yahan move ho gaya hai: <a href="https://sarkarisewaindia.com/service/{target}.html">{target}.html</a></p>
</body>
</html>"""

for old_path, target_code in PAIRS_18:
    content = stub_template.format(target=target_code)
    with open(old_path, 'w', encoding='utf-8') as fp:
        fp.write(content)
    print(f"Created redirect stub: {old_path} -> service/{target_code}.html")

print("Task 6 execution complete!")
