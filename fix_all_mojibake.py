import sys
import re
import os

sys.stdout.reconfigure(encoding='utf-8')

def fix_cp1252_mojibake(text):
    # Match sequences that contain cp1252 mojibake characters
    # In Windows-1252: à, ¤, ¥, ¦, §, ¨, ©, ª, «, ¬, ®, ¯, °, ±, ², ³, ´, µ, ¶, ·, ¸, ¹, º, », ¼, ½, ¾, ¿, Â, Ã, Ä, Å, Æ, Ç, È, É, Ê, Ë, Ì, Í, Î, Ï, Ð, Ñ, Ò, Ó, Ô, Õ, Ö, ×, Ø, Ù, Ú, Û, Ü, Ý, Þ, ß, à, á, â, ã, ä, å, æ, ç, è, é, ê, ë, ì, í, î, ï, ð, ñ, ò, ó, ô, õ, ö, ÷, ø, ù, ú, û, ü, ý, þ, ÿ, €, ‚, ƒ, „, …, †, ‡, ˆ, ‰, Š, ‹, Œ, Ž, ‘, ’, “, ”, •, –, —, ˜, ™, š, ›, œ, ž, Ÿ
    
    # We can iterate through tokens or use regex:
    def replace_token(match):
        chunk = match.group(0)
        try:
            return chunk.encode('cp1252').decode('utf-8')
        except:
            # try partial decode
            buf = bytearray()
            out = []
            for ch in chunk:
                try:
                    b = ch.encode('cp1252')
                    buf.extend(b)
                    try:
                        decoded_piece = buf.decode('utf-8')
                        out.append(decoded_piece)
                        buf.clear()
                    except UnicodeDecodeError:
                        pass
                except:
                    if buf:
                        out.append(buf.decode('cp1252', errors='ignore'))
                        buf.clear()
                    out.append(ch)
            if buf:
                out.append(buf.decode('cp1252', errors='ignore'))
            return "".join(out)

    pattern = r'[à-ÿ\u0152\u0153\u0160\u0161\u0178\u017D\u017E\u0192\u02C6\u02DC\u2013\u2014\u2018\u2019\u201A\u201C\u201D\u201E\u2020\u2021\u2022\u2026\u2030\u2039\u203A\u20AC\u2122\x80-\xff]+'
    return re.sub(pattern, replace_token, text)

corrupted_files = [
    'service/pm-usp-college-scholarship.html',
    'jobs/upsssc-auditor-assistant-accountant-recruitment-2026-msa62jkl-1.html',
    'jobs/ibps-rrb-xv-officer-scale-i-ii-iii-office-assistant-recruitment-2026.html',
    'jobs/sbi-clerk-junior-associate-recruitment-2026.html',
    'jobs/ibps-po-mt-xvi-recruitment-2026-4455-posts.html',
    'category/jobs-education.html',
    'sitemap.html'
]

for fpath in corrupted_files:
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        
    fixed = fix_cp1252_mojibake(content)
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(fixed)
        
    print(f"Fixed {fpath} successfully.")
