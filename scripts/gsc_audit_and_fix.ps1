# gsc_audit_and_fix.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

Write-Host "=================================================="
Write-Host "GOOGLE SEARCH CONSOLE (GSC) READINESS AUDIT"
Write-Host "==================================================`n"

$htmlFiles = Get-ChildItem -Path $ROOT -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "\\partials\\" -and $_.FullName -notmatch "\\.git\\" -and $_.Name -notmatch "google.*\.html" }

# 1. Sitemap Audit & Update
$sitemapPath = "$ROOT\sitemap.xml"
$sitemapUrls = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)

if (Test-Path $sitemapPath) {
    try {
        [xml]$xml = Get-Content $sitemapPath
        foreach ($url in $xml.urlset.url) {
            $loc = $url.loc.Trim().Replace("https://sarkarisewaindia.com/", "")
            if ([string]::IsNullOrWhiteSpace($loc)) { $loc = "index.html" }
            $null = $sitemapUrls.Add($loc)
        }
    } catch {}
}

$missingFromSitemap = @()
foreach ($fileObj in $htmlFiles) {
    $rel = $fileObj.FullName.Replace("$ROOT\", "").Replace("\", "/")
    if ($rel -ne "404.html" -and $rel -notmatch "^admin/" -and -not $sitemapUrls.Contains($rel)) {
        $missingFromSitemap += $rel
    }
}

Write-Host "Sitemap Audit:"
Write-Host "  - Total URLs currently in sitemap.xml: $($sitemapUrls.Count)"
Write-Host "  - Indexable HTML pages missing from sitemap: $($missingFromSitemap.Count)"

# Append missing URLs to sitemap.xml
if ($missingFromSitemap.Count -gt 0) {
    $sitemapContent = [System.IO.File]::ReadAllText($sitemapPath, $utf8NoBOM)
    $today = (Get-Date).ToString("yyyy-MM-dd")
    
    $newEntries = ""
    foreach ($m in $missingFromSitemap) {
        $urlLoc = if ($m -eq "index.html") { "https://sarkarisewaindia.com/" } else { "https://sarkarisewaindia.com/$m" }
        $newEntries += @"

  <url>
    <loc>$urlLoc</loc>
    <lastmod>$today</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
"@
    }
    
    $sitemapContent = $sitemapContent.Replace("</urlset>", "$newEntries`n</urlset>")
    [System.IO.File]::WriteAllText($sitemapPath, $sitemapContent, $utf8NoBOM)
    Write-Host "✅ Appended $($missingFromSitemap.Count) missing URLs to sitemap.xml!" -ForegroundColor Green
}

# 2. Canonical Tags Audit
$missingCanonicals = @()
foreach ($fileObj in $htmlFiles) {
    $rel = $fileObj.FullName.Replace("$ROOT\", "").Replace("\", "/")
    $content = [System.IO.File]::ReadAllText($fileObj.FullName, $utf8NoBOM)
    if ($content -notmatch '(?i)rel=["'']canonical["'']') {
        $missingCanonicals += $rel
        
        # Auto-inject missing canonical tag into head
        $canonicalUrl = if ($rel -eq "index.html") { "https://sarkarisewaindia.com/" } else { "https://sarkarisewaindia.com/$rel" }
        $canonicalTag = "<link rel=""canonical"" href=""$canonicalUrl"">`n"
        if ($content -match '(?i)</head>') {
            $content = [regex]::Replace($content, '(?i)</head>', "    $canonicalTag</head>", 1)
            [System.IO.File]::WriteAllText($fileObj.FullName, $content, $utf8NoBOM)
        }
    }
}
Write-Host "`nCanonical Tags Audit:"
Write-Host "  - Injected missing canonical tags into $($missingCanonicals.Count) pages!" -ForegroundColor Green

# 3. Google Site Verification Tag Verification
$indexContent = [System.IO.File]::ReadAllText("$ROOT\index.html", $utf8NoBOM)
if ($indexContent -notmatch 'google-site-verification') {
    $gMeta = '<meta name="google-site-verification" content="google3d97747d4af174a7">'
    $indexContent = $indexContent.Replace("</head>", "  $gMeta`n</head>")
    [System.IO.File]::WriteAllText("$ROOT\index.html", $indexContent, $utf8NoBOM)
    Write-Host "`n✅ Added Google Site Verification meta tag to index.html!" -ForegroundColor Green
} else {
    Write-Host "`n✅ Google Site Verification tag verified on index.html!" -ForegroundColor Green
}

Write-Host "`n=================================================="
Write-Host "GSC AUDIT & OPTIMIZATION COMPLETE!"
Write-Host "=================================================="
