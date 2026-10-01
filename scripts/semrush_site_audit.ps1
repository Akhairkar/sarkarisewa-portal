# semrush_site_audit.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

$htmlFiles = Get-ChildItem -Path $ROOT -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "\\partials\\" -and $_.FullName -notmatch "\\.git\\" }

Write-Host "=================================================="
Write-Host "SEMRUSH-STYLE TECHNICAL SITE AUDIT"
Write-Host "Total HTML files discovered: $($htmlFiles.Count)"
Write-Host "==================================================`n"

$brokenLinks = @()
$missingTitles = @()
$missingDescs = @()
$missingH1 = @()
$multipleH1 = @()
$missingAlts = @()
$missingCanonicals = @()
$invalidJsonLd = @()
$titlesMap = @{}
$descsMap = @{}
$linkedPages = @{}

# Load Sitemap URLs
$sitemapUrls = @{}
$sitemapPath = "$ROOT\sitemap.xml"
if (Test-Path $sitemapPath) {
    try {
        [xml]$xml = Get-Content $sitemapPath
        foreach ($url in $xml.urlset.url) {
            $loc = $url.loc.Trim().Replace("https://sarkarisewaindia.com/", "")
            if ([string]::IsNullOrWhiteSpace($loc)) { $loc = "index.html" }
            $sitemapUrls[$loc] = $true
        }
    } catch {}
}

foreach ($fileObj in $htmlFiles) {
    $fullPath = $fileObj.FullName
    $relPath = $fullPath.Replace("$ROOT\", "").Replace("\", "/")
    $content = [System.IO.File]::ReadAllText($fullPath, $utf8NoBOM)

    # Title check
    if ($content -match '(?i)<title\b[^>]*>(.*?)</title>') {
        $t = $matches[1].Trim()
        if ([string]::IsNullOrWhiteSpace($t)) {
            $missingTitles += $relPath
        } else {
            if (-not $titlesMap.ContainsKey($t)) { $titlesMap[$t] = @() }
            $titlesMap[$t] += $relPath
        }
    } else {
        $missingTitles += $relPath
    }

    # Meta Description check
    if ($content -match '(?i)<meta\s+name="description"\s+content="(.*?)"') {
        $d = $matches[1].Trim()
        if ([string]::IsNullOrWhiteSpace($d)) {
            $missingDescs += $relPath
        } else {
            if (-not $descsMap.ContainsKey($d)) { $descsMap[$d] = @() }
            $descsMap[$d] += $relPath
        }
    } else {
        $missingDescs += $relPath
    }

    # Canonical check
    if ($content -notmatch '(?i)rel="canonical"') {
        $missingCanonicals += $relPath
    }

    # H1 check
    $h1Matches = [regex]::Matches($content, '(?i)<h1\b[^>]*>(.*?)</h1>')
    if ($h1Matches.Count -eq 0) {
        $missingH1 += $relPath
    } elseif ($h1Matches.Count -gt 1) {
        $multipleH1 += "$relPath ($($h1Matches.Count) H1 tags)"
    }

    # Images missing ALT
    $imgMatches = [regex]::Matches($content, '(?i)<img\b[^>]*>')
    foreach ($img in $imgMatches) {
        if ($img.Value -notmatch '(?i)alt=') {
            $missingAlts += $relPath
            break
        }
    }

    # JSON-LD check
    $jsonLdMatches = [regex]::Matches($content, '(?s)<script\s+type="application/ld\+json"\s*>(.*?)</script>')
    foreach ($jm in $jsonLdMatches) {
        $jStr = $jm.Groups[1].Value.Trim()
        try {
            $null = $jStr | ConvertFrom-Json
        } catch {
            $invalidJsonLd += "$relPath"
        }
    }

    # Internal links check
    $hrefMatches = [regex]::Matches($content, '(?i)href="([^"]+)"')
    $fileDir = Split-Path $fullPath
    foreach ($hm in $hrefMatches) {
        $rawHref = $hm.Groups[1].Value
        $rawNoHash = $rawHref -split '#' | Select-Object -First 1
        $raw = $rawNoHash -split '\?' | Select-Object -First 1
        if ([string]::IsNullOrWhiteSpace($raw) -or $raw -match '^(https?:)?//' -or $raw.StartsWith('mailto:') -or $raw.StartsWith('tel:') -or $raw.StartsWith('javascript:')) {
            continue
        }
        $targetFullPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($fileDir, $raw))
        if ($targetFullPath.StartsWith($ROOT)) {
            $targetRel = $targetFullPath.Replace("$ROOT\", "").Replace("\", "/")
            $linkedPages[$targetRel] = $true
            if (-not (Test-Path $targetFullPath)) {
                $brokenLinks += "$relPath -> $raw"
            }
        }
    }
}

# Duplicate Titles and Descriptions count
$dupTitlesCount = 0
foreach ($k in $titlesMap.Keys) { if ($titlesMap[$k].Count -gt 1) { $dupTitlesCount++ } }

$dupDescsCount = 0
foreach ($k in $descsMap.Keys) { if ($descsMap[$k].Count -gt 1) { $dupDescsCount++ } }

# Orphan Pages
$orphanPages = @()
foreach ($fileObj in $htmlFiles) {
    $rel = $fileObj.FullName.Replace("$ROOT\", "").Replace("\", "/")
    if ($rel -ne "index.html" -and -not $linkedPages.ContainsKey($rel) -and -not $sitemapUrls.ContainsKey($rel)) {
        $orphanPages += $rel
    }
}

# GENERATE AUDIT REPORT
Write-Host "=================================================="
Write-Host "SEMRUSH AUDIT RESULTS SUMMARY"
Write-Host "=================================================="
Write-Host "CRITICAL ERRORS:"
Write-Host "  - Broken Internal Links: $($brokenLinks.Count)"
Write-Host "  - Missing Title Tags:    $($missingTitles.Count)"
Write-Host "  - Missing Meta Descs:    $($missingDescs.Count)"
Write-Host "  - Invalid JSON-LD Schema:$($invalidJsonLd.Count)"
Write-Host "  - Missing H1 Headings:   $($missingH1.Count)"

Write-Host "`nWARNINGS:"
Write-Host "  - Duplicate Titles:      $dupTitlesCount"
Write-Host "  - Duplicate Meta Descs:  $dupDescsCount"
Write-Host "  - Multiple H1 Tags:      $($multipleH1.Count)"
Write-Host "  - Images Missing ALT:    $($missingAlts.Count)"
Write-Host "  - Missing Canonical Link:$($missingCanonicals.Count)"
Write-Host "  - Orphan Pages:          $($orphanPages.Count)"
Write-Host "==================================================`n"

if ($brokenLinks.Count -gt 0) {
    Write-Host "Top Broken Links Sample:"
    $brokenLinks | Select-Object -First 15 | ForEach-Object { Write-Host " - $_" }
}

if ($missingTitles.Count -gt 0) {
    Write-Host "Pages Missing Title:"
    $missingTitles | Select-Object -First 15 | ForEach-Object { Write-Host " - $_" }
}
