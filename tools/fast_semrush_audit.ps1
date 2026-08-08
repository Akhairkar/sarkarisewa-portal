# fast_semrush_audit.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

$htmlFiles = Get-ChildItem -Path $ROOT -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "\\partials\\" -and $_.FullName -notmatch "\\.git\\" }

Write-Host "=================================================="
Write-Host "SEMRUSH-STYLE TECHNICAL SITE AUDIT (Fast Engine)"
Write-Host "Total HTML files discovered: $($htmlFiles.Count)"
Write-Host "==================================================`n"

$brokenLinks = [System.Collections.ArrayList]::new()
$missingTitles = [System.Collections.ArrayList]::new()
$missingDescs = [System.Collections.ArrayList]::new()
$missingH1 = [System.Collections.ArrayList]::new()
$multipleH1 = [System.Collections.ArrayList]::new()
$missingAlts = [System.Collections.ArrayList]::new()
$missingCanonicals = [System.Collections.ArrayList]::new()
$invalidJsonLd = [System.Collections.ArrayList]::new()
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

# Fast HashSet of existing files for O(1) link lookup
$existingFilesSet = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
Get-ChildItem -Path $ROOT -Recurse | ForEach-Object {
    $r = $_.FullName.Replace("$ROOT\", "").Replace("\", "/")
    $null = $existingFilesSet.Add($r)
}

foreach ($fileObj in $htmlFiles) {
    $fullPath = $fileObj.FullName
    $relPath = $fullPath.Replace("$ROOT\", "").Replace("\", "/")
    $content = [System.IO.File]::ReadAllText($fullPath, $utf8NoBOM)

    # Title check
    if ($content -match '(?i)<title\b[^>]*>(.*?)</title>') {
        $t = $matches[1].Trim()
        if ([string]::IsNullOrWhiteSpace($t)) {
            $null = $missingTitles.Add($relPath)
        } else {
            if (-not $titlesMap.ContainsKey($t)) { $titlesMap[$t] = [System.Collections.ArrayList]::new() }
            $null = $titlesMap[$t].Add($relPath)
        }
    } else {
        $null = $missingTitles.Add($relPath)
    }

    # Meta Description check
    if ($content -match '(?i)<meta\s+name="description"\s+content="(.*?)"') {
        $d = $matches[1].Trim()
        if ([string]::IsNullOrWhiteSpace($d)) {
            $null = $missingDescs.Add($relPath)
        } else {
            if (-not $descsMap.ContainsKey($d)) { $descsMap[$d] = [System.Collections.ArrayList]::new() }
            $null = $descsMap[$d].Add($relPath)
        }
    } else {
        $null = $missingDescs.Add($relPath)
    }

    # Canonical check
    if ($content -notmatch '(?i)rel="canonical"') {
        $null = $missingCanonicals.Add($relPath)
    }

    # H1 check
    $h1Matches = [regex]::Matches($content, '(?i)<h1\b[^>]*>(.*?)</h1>')
    if ($h1Matches.Count -eq 0) {
        $null = $missingH1.Add($relPath)
    } elseif ($h1Matches.Count -gt 1) {
        $null = $multipleH1.Add("$relPath ($($h1Matches.Count) H1 tags)")
    }

    # Images missing ALT
    $imgMatches = [regex]::Matches($content, '(?i)<img\b[^>]*>')
    foreach ($img in $imgMatches) {
        if ($img.Value -notmatch '(?i)alt=') {
            $null = $missingAlts.Add($relPath)
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
            $null = $invalidJsonLd.Add("$relPath")
        }
    }

    # Internal links check (Fast lookup via HashSet)
    $fileDirRel = Split-Path $relPath
    $hrefMatches = [regex]::Matches($content, '(?i)href="([^"]+)"')
    foreach ($hm in $hrefMatches) {
        $rawHref = $hm.Groups[1].Value
        $rawNoHash = $rawHref -split '#' | Select-Object -First 1
        $raw = $rawNoHash -split '\?' | Select-Object -First 1
        if ([string]::IsNullOrWhiteSpace($raw) -or $raw -match '^(https?:)?//' -or $raw.StartsWith('mailto:') -or $raw.StartsWith('tel:') -or $raw.StartsWith('javascript:')) {
            continue
        }
        
        $targetRel = if ([string]::IsNullOrWhiteSpace($fileDirRel)) { $raw } else { "$fileDirRel/$raw" }
        # Normalize relative path (e.g. dir/../file)
        $targetRelNorm = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($ROOT, $targetRel)).Replace("$ROOT\", "").Replace("\", "/")
        
        $linkedPages[$targetRelNorm] = $true
        if (-not $existingFilesSet.Contains($targetRelNorm)) {
            $null = $brokenLinks.Add("$relPath -> $raw")
        }
    }
}

# Duplicate Titles and Descriptions count
$dupTitlesCount = 0
foreach ($k in $titlesMap.Keys) { if ($titlesMap[$k].Count -gt 1) { $dupTitlesCount++ } }

$dupDescsCount = 0
foreach ($k in $descsMap.Keys) { if ($descsMap[$k].Count -gt 1) { $dupDescsCount++ } }

# Orphan Pages
$orphanPages = [System.Collections.ArrayList]::new()
foreach ($fileObj in $htmlFiles) {
    $rel = $fileObj.FullName.Replace("$ROOT\", "").Replace("\", "/")
    if ($rel -ne "index.html" -and -not $linkedPages.ContainsKey($rel) -and -not $sitemapUrls.ContainsKey($rel)) {
        $null = $orphanPages.Add($rel)
    }
}

# GENERATE AUDIT REPORT
Write-Host "=================================================="
Write-Host "SEMRUSH AUDIT RESULTS SUMMARY"
Write-Host "=================================================="
Write-Host "🔴 CRITICAL ERRORS:"
Write-Host "  - Broken Internal Links: $($brokenLinks.Count)"
Write-Host "  - Missing Title Tags:    $($missingTitles.Count)"
Write-Host "  - Missing Meta Descs:    $($missingDescs.Count)"
Write-Host "  - Invalid JSON-LD Schema:$($invalidJsonLd.Count)"
Write-Host "  - Missing H1 Headings:   $($missingH1.Count)"

Write-Host "`n🟡 WARNINGS & OPPORTUNITIES:"
Write-Host "  - Duplicate Titles:      $dupTitlesCount"
Write-Host "  - Duplicate Meta Descs:  $dupDescsCount"
Write-Host "  - Multiple H1 Tags:      $($multipleH1.Count)"
Write-Host "  - Images Missing ALT:    $($missingAlts.Count)"
Write-Host "  - Missing Canonical Link:$($missingCanonicals.Count)"
Write-Host "  - Orphan Pages:          $($orphanPages.Count)"
Write-Host "==================================================`n"

if ($brokenLinks.Count -gt 0) {
    Write-Host "Broken Internal Links Sample (Top 15):"
    $brokenLinks | Select-Object -First 15 | ForEach-Object { Write-Host (" - " + $_) }
} else {
    Write-Host "✅ 0 Broken Links found!"
}

if ($missingTitles.Count -gt 0) {
    Write-Host "`nPages Missing Title (Top 10):"
    $missingTitles | Select-Object -First 10 | ForEach-Object { Write-Host (" - " + $_) }
} else {
    Write-Host "✅ All 343 pages have valid <title> tags!"
}

if ($missingDescs.Count -gt 0) {
    Write-Host "`nPages Missing Meta Description (Top 10):"
    $missingDescs | Select-Object -First 10 | ForEach-Object { Write-Host (" - " + $_) }
} else {
    Write-Host "✅ All 343 pages have valid meta descriptions!"
}

if ($invalidJsonLd.Count -gt 0) {
    Write-Host "`nPages with Invalid JSON-LD:"
    $invalidJsonLd | Select-Object -First 10 | ForEach-Object { Write-Host (" - " + $_) }
} else {
    Write-Host "✅ All JSON-LD structured data blocks are valid JSON!"
}
