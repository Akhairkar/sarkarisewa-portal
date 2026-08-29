import sys
sys.stdout.reconfigure(encoding='utf-8')

s = "à¤ªà¥€"
try:
    decoded = s.encode('cp1252').decode('utf-8')
    print("Decoded successfully:", decoded)
except Exception as e:
    print("Error:", e)
