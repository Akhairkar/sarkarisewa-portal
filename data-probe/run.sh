#!/bin/bash
# Passport Seva Kendra lists from passportindia.gov.in (official PDFs/pages).
set -u
OUT=data-probe/out; mkdir -p $OUT
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
sudo apt-get install -y -qq poppler-utils >/dev/null 2>&1 || true
i=0
while read -r url; do
  [ -z "$url" ] && continue
  i=$((i+1)); f="$OUT/f$i"
  code=$(curl -sS -L -A "$UA" --max-time 60 -o "$f.bin" -w "%{http_code} %{content_type} %{size_download}" "$url" 2>"$f.err")
  echo "$i $url -> $code $(head -c 200 $f.err)" >> $OUT/index.txt
  if file "$f.bin" | grep -qi pdf; then pdftotext -layout "$f.bin" "$f.txt"; mv "$f.bin" "$f.pdf"; else mv "$f.bin" "$f.html"; fi
  rm -f "$f.err"
done <<'URLS'
https://portal1.passportindia.gov.in/AppOnlineProject/pdf/POPSK_List.pdf
https://portal2.passportindia.gov.in/AppOnlineProject/pdf/POPSK.pdf
https://www.passportindia.gov.in/AppOnlineProject/pdf/POPSK_List.pdf
https://www.passportindia.gov.in/AppOnlineProject/pdf/PSK_List.pdf
https://www.passportindia.gov.in/AppOnlineProject/pdf/PSKList.pdf
https://portal1.passportindia.gov.in/AppOnlineProject/pdf/PSK_List.pdf
https://www.passportindia.gov.in/AppOnlineProject/online/contactUs
https://www.passportindia.gov.in/
https://www.mea.gov.in/passport-offices.htm
URLS
ls -la $OUT
