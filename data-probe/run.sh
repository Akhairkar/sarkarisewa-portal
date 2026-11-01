#!/usr/bin/env bash
# Probe 1: what the PM-JAY hospital search looks like from a normal server.
set -u
O=data-probe/out; mkdir -p "$O"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
log() { echo "== $*" | tee -a "$O/log.txt"; }
log "gist script"
curl -sL -m 60 "https://gist.githubusercontent.com/apoorv74/2e047db089b1771e283b5b641238cc22/raw/b004c2b0fb48ebad926ac48069f6a74a9b14ab8f/PMJAY.r" -o "$O/gist-PMJAY.r"; wc -c "$O/gist-PMJAY.r" | tee -a "$O/log.txt"
for u in "https://hospitals.pmjay.gov.in/" "https://hospitals.pmjay.gov.in/Search/" "https://hospitals.pmjay.gov.in/Search/empnlWorkFlow.htm"; do
  f="$O/$(echo "$u" | sed 's#https://##; s#[/:?&=]#_#g').html"
  log "GET $u"
  curl -sL -m 60 -A "$UA" -c "$O/cookies.txt" -b "$O/cookies.txt" -D "$f.headers" -w "HTTP %{http_code} final %{url_effective} size %{size_download}\n" "$u" -o "$f" | tee -a "$O/log.txt"
done
log "links and forms on the pages"
grep -hoE '<form[^>]*>|<select[^>]*>|name="[^"]+"|src="[^"]+\.js[^"]*"|action="[^"]+"' "$O"/*.html | sort | uniq -c | sort -rn | head -80 | tee -a "$O/log.txt"
