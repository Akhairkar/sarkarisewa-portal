#!/usr/bin/env bash
# Probe 2: which official sources answer from a GitHub (non-Indian) server.
set -u
O=data-probe/out; rm -rf "$O"; mkdir -p "$O"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
log() { echo "== $*" | tee -a "$O/log.txt"; }
curl -s -m 20 https://ipinfo.io/json | tee -a "$O/log.txt"; echo | tee -a "$O/log.txt"
try() { # name url [extra curl args]
  local n="$1" u="$2"; shift 2
  log "$n $u"
  curl -sS -L -m 60 --connect-timeout 20 -A "$UA" -o "$O/$n" -w "HTTP %{http_code} type %{content_type} size %{size_download} ip %{remote_ip}\n" "$@" "$u" 2>&1 | tee -a "$O/log.txt"
}
try pmjay-home.html https://hospitals.pmjay.gov.in/
try pmjay-home-http.html http://hospitals.pmjay.gov.in/
try pmjay-post-jabalpur.html https://hospitals.pmjay.gov.in/Search/empnlWorkFlow.htm -X POST --data "actionFlag=ViewRegisteredHosptlsNew&search=Y&appReadOnly=Y&pageNo=1&searchState=23&searchDistrict=411&searchHospType=-1&searchSpeciality=-1&noOfPages=0"
try pmjay-main.html https://pmjay.gov.in/
try nha-hospital-list.pdf https://nha.gov.in/img/resources/PMJAY-Hospital-List.pdf
try popsk-list.pdf https://portal1.passportindia.gov.in/AppOnlineProject/pdf/POPSK_List.pdf
try passportindia.html https://www.passportindia.gov.in/
try datagov.html https://www.data.gov.in/
try mp-ayushman.html https://ayushmanbharat.mp.gov.in/
try uk-sha.html https://sha.uk.gov.in/
try janaushadhi.html https://janaushadhi.gov.in/
dig +short hospitals.pmjay.gov.in | tee -a "$O/log.txt"
for f in "$O"/*.pdf; do [ -s "$f" ] && (file "$f"; pdftotext -layout "$f" - 2>/dev/null | head -60) >> "$O/pdf-heads.txt"; done
true
