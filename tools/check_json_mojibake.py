import json

with open("data/services.json", "r", encoding="utf-8") as f:
    services = json.load(f)

corrupt = []
for s in services:
    raw = json.dumps(s, ensure_ascii=False)
    for pat in ["â€™", "â€œ", "â€", "à¤", "à¥", "â€¦", "Ã"]:
        if pat in raw:
            sid = s.get("id") or s.get("slug")
            corrupt.append((sid, pat))
            break

print("Corrupt entries:", len(corrupt))
for c in corrupt:
    print(c)
