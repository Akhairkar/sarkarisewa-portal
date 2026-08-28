import os
if os.path.exists(".git/index.lock"):
    os.remove(".git/index.lock")
os.system("git add .")
os.system('git commit -m "fix"')
os.system("git push --force")
