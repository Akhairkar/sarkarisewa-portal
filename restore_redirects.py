import os

redirects = {
    "ap-ration-card.html": "andhra-pradesh-ration-card.html",
    "as-ration-card.html": "assam-ration-card.html",
    "br-ration-card.html": "bihar-ration-card.html",
    "cg-ration-card.html": "chhattisgarh-ration-card.html",
    "dl-ration-card.html": "delhi-ration-card.html",
    "gj-ration-card.html": "gujarat-ration-card.html",
    "hr-ration-card.html": "haryana-ration-card.html",
    "jh-ration-card.html": "jharkhand-ration-card.html",
    "ka-ration-card.html": "karnataka-ration-card.html",
    "kl-ration-card.html": "kerala-ration-card.html",
    "mh-ration-card.html": "maharashtra-ration-card.html",
    "mp-ration-card.html": "madhya-pradesh-ration-card.html",
    "od-ration-card.html": "odisha-ration-card.html",
    "pb-ration-card.html": "punjab-ration-card.html",
    "rj-ration-card.html": "rajasthan-ration-card.html",
    "tg-ration-card.html": "telangana-ration-card.html",
    "tn-ration-card.html": "tamil-nadu-ration-card.html",
    "uk-ration-card.html": "uttarakhand-ration-card.html",
    "up-ration-card.html": "uttar-pradesh-ration-card.html",
    "wb-ration-card.html": "west-bengal-ration-card.html",
    "ration-card.html": "../states/uttar-pradesh-ration-card.html" # generic fallback
}

template = """<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=../states/{new_url}">
    <link rel="canonical" href="https://sarkarisewaindia.com/states/{new_url}">
</head>
<body>
    <p>This page has moved. If you are not redirected automatically, <a href="../states/{new_url}">click here</a>.</p>
</body>
</html>
"""

os.makedirs("service", exist_ok=True)
for old, new in redirects.items():
    with open(os.path.join("service", old), "w", encoding="utf-8") as f:
        f.write(template.format(new_url=new))

print("Created 21 meta-refresh redirects.")
