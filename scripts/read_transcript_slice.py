import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/Lenovo/.gemini/antigravity/brain/8407ad8b-d35f-4219-bfbc-793a97336e08/.system_generated/logs/transcript.jsonl', 'r', encoding='utf-8', errors='ignore') as fp:
    lines = fp.readlines()

for idx in [16560, 16995, 18318]:
    for k in range(idx-1, min(idx+6, len(lines))):
        obj = json.loads(lines[k])
        t = obj.get("type", "")
        c = obj.get("content", "")
        th = obj.get("thinking", "")
        print(f"Line {k} [{t}]:")
        if c:
            print("  content:", c[:300].replace('\n', ' '))
        if th:
            print("  thinking:", th[:300].replace('\n', ' '))
