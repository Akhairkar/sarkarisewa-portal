import json

with open('data/lang.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

data['en']['wa_join'] = "Join WhatsApp Channel"
data['hi']['wa_join'] = "व्हाट्सएप चैनल से जुड़ें"

with open('data/lang.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Added wa_join key to lang.json")
