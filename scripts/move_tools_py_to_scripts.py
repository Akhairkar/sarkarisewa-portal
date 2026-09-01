import os
import glob
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('scripts', exist_ok=True)

py_files = sorted(glob.glob('tools/*.py'))
print(f"Found {len(py_files)} python files in tools/")

moved_count = 0
for pf in py_files:
    fname = os.path.basename(pf)
    dest = os.path.join('scripts', fname)
    shutil.move(pf, dest)
    moved_count += 1

print(f"Successfully moved {moved_count} python scripts from tools/ to scripts/!")

# Verify tools/ folder now only has HTML and non-python files
remaining_files = sorted(glob.glob('tools/*'))
print(f"Remaining items in tools/ ({len(remaining_files)}):")
for rf in remaining_files:
    print(" -", os.path.basename(rf))
