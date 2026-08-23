import json

lang_file = "data/lang.json"
with open(lang_file, "r", encoding="utf-8") as f:
    lang_data = json.load(f)

# English
lang_data["en"]["daily_updates_view_all"] = "View All Latest Government Updates &rarr;"
lang_data["en"]["homepage_blog_view_all"] = "Read All Government Scheme Guides &rarr;"
lang_data["en"]["tools_banner_cta"] = "Explore All Government Calculators & Tools &rarr;"

# Hindi
lang_data["hi"]["daily_updates_view_all"] = "सभी नवीनतम सरकारी अपडेट देखें &rarr;"
lang_data["hi"]["homepage_blog_view_all"] = "सभी सरकारी योजना गाइड पढ़ें &rarr;"
lang_data["hi"]["tools_banner_cta"] = "सभी सरकारी कैलकुलेटर और टूल्स देखें &rarr;"

with open(lang_file, "w", encoding="utf-8") as f:
    json.dump(lang_data, f, ensure_ascii=False, indent=2)

print("Updated anchor texts.")
