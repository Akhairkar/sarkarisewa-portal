import json

def check():
    html = open('tools/self-declaration-builder.html', encoding='utf-8').read()
    results = {
        "title": "Self Declaration Letter Online – Free PDF Builder" in html,
        "h1": "Self Declaration Letter Online बनाएं – Free PDF" in html,
        "desc": "अपना Self Declaration Letter कुछ ही मिनटों में बनाएं" in html,
        "student_option": 'value="student"' in html,
        "schema": 'WebApplication' in html
    }
    with open('check.json', 'w') as f:
        json.dump(results, f)

check()
