import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

# Let's test single character mapping and full string decoding
test_str = "à¤ªà¥€एम à¤‰à¤šà¥ à¤š à¤¶à¤¿à¤•्षा à¤›à¤¾à¤¤à¥ à¤°à¤µà¥ƒत्ति à¤¯à¥‹à¤œना (PM-USP College Scholarship)"

def smart_mojibake_fix(text):
    # Strategy: convert characters in the range 0x80 - 0xFF back to bytes and decode utf-8
    # If mixed with already-decoded hindi (0x0900-0x097F), process character by character or word by word
    
    # Common mappings for Devanagari mojibake
    # Devanagari in UTF-8 is 3 bytes: \xe0\xa4\x80 to \xe0\xa5\xbf
    # When interpreted as Windows-1252/latin1 and re-encoded to UTF-8:
    # \xe0 -> à
    # \xa4 -> ¤
    # \xa5 -> ¥
    # etc.
    
    # We can reconstruct by replacing byte sequences:
    buf = bytearray()
    i = 0
    res = []
    
    for ch in text:
        code = ord(ch)
        if 0x00 <= code <= 0xFF:
            # It's a single byte in latin1/cp1252
            try:
                b = ch.encode('latin1')
                buf.extend(b)
            except:
                if buf:
                    try:
                        res.append(buf.decode('utf-8'))
                    except:
                        res.append(buf.decode('latin1', errors='ignore'))
                    buf.clear()
                res.append(ch)
        else:
            if buf:
                try:
                    res.append(buf.decode('utf-8'))
                except:
                    try:
                        res.append(buf.decode('windows-1252'))
                    except:
                        res.append(buf.decode('latin1', errors='ignore'))
                buf.clear()
            res.append(ch)
            
    if buf:
        try:
            res.append(buf.decode('utf-8'))
        except:
            res.append(buf.decode('latin1', errors='ignore'))
            
    return "".join(res)

print("Original:", test_str)
print("Repaired:", smart_mojibake_fix(test_str))
