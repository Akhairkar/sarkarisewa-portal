import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

for f in glob.glob('assets/**/*.css', recursive=True) + glob.glob('assets/**/*.js', recursive=True):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
    if 'state-spotlight' in c:
        print(f"Found 'state-spotlight' in {f}")
        for line in c.split('\n'):
            if 'state-spotlight' in line:
                print("  ", line.strip())
