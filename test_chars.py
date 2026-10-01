import sys
sys.stdout.reconfigure(encoding='utf-8')

s = "à¤ªà¥€"
for c in s:
    print(c, hex(ord(c)))
