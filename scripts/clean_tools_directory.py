import os
import glob
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Remove __pycache__ in tools/ if any
if os.path.exists('tools/__pycache__'):
    shutil.rmtree('tools/__pycache__')

# Move all non-html, non-asset files (e.g. .ps1, .txt) to scripts/
other_files = glob.glob('tools/*.ps1') + glob.glob('tools/*.txt')
for f in other_files:
    fname = os.path.basename(f)
    dest = os.path.join('scripts', fname)
    shutil.move(f, dest)

print("Remaining items in tools/ directory:")
for f in sorted(glob.glob('tools/*')):
    print(" -", os.path.basename(f))
