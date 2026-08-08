# thin_content_audit.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

$htmlFiles = Get-ChildItem -Path $ROOT -Recurse -Filter "*.html" | Where-Object { 
    $_.FullName -notmatch "\\partials\\" -and 
    $_.FullName -notmatch "\\.git\\" -and
    $_.FullName -notmatch "\\admin\\" -and
    $_.Name -notmatch "google.*\.html"
}

Write-Host "=================================================="
Write-Host "GOOGLE HELPFUL CONTENT / THIN CONTENT AUDIT"
Write-Host "Total Indexable HTML pages analyzed: $($htmlFiles.Count)"
Write-Host "==================================================`n"

$thinPages = [System.Collections.ArrayList]::new()
$substantialPages = [System.Collections.ArrayList]::new()
$totalWordCount = 0

foreach ($fileObj in $htmlFiles) {
    $relPath = $fileObj.FullName.Replace("$ROOT\", "").Replace("\", "/")
    $content = [System.IO.File]::ReadAllText($fileObj.FullName, $utf8NoBOM)

    # Clean HTML tags, scripts, styles, header, footer
    $clean = [regex]::Replace($content, '(?s)<script\b[^>]*>.*?</script>', ' ')
    $clean = [regex]::Replace($clean, '(?s)<style\b[^>]*>.*?</style>', ' ')
    $clean = [regex]::Replace($clean, '(?s)<header\b[^>]*>.*?</header>', ' ')
    $clean = [regex]::Replace($clean, '(?s)<footer\b[^>]*>.*?</footer>', ' ')
    $clean = [regex]::Replace($clean, '<[^>]+>', ' ')

    # Count words
    $words = $clean.Split([char[]]@(' ', "`t", "`n", "`r"), [System.StringSplitOptions]::RemoveEmptyEntries)
    $wCount = $words.Count
    $totalWordCount += $wCount

    if ($wCount -lt 400) {
        $null = $thinPages.Add([PSCustomObject]@{ Path = $relPath; Words = $wCount })
    } else {
        $null = $substantialPages.Add([PSCustomObject]@{ Path = $relPath; Words = $wCount })
    }
}

$avgWords = [math]::Round($totalWordCount / [math]::Max($htmlFiles.Count, 1))

Write-Host "--- THIN CONTENT AUDIT RESULTS ---"
Write-Host "Total Indexable Pages Analyzed: $($htmlFiles.Count)"
Write-Host "High Quality Pages (400+ words): $($substantialPages.Count)"
Write-Host "Thin Content Risk Pages (< 400 words): $($thinPages.Count)"
Write-Host "Average Word Count per Page: $avgWords words`n"

if ($thinPages.Count -gt 0) {
    Write-Host "Top Thin Content Pages to Enhance:"
    $thinPages | Sort-Object Words | Select-Object -First 20 | ForEach-Object {
        Write-Host ("  - " + $_.Path + ": " + $_.Words + " words") -ForegroundColor Yellow
    }
} else {
    Write-Host "✅ 0 Thin Content pages found! Every single page has 400+ words of rich content!" -ForegroundColor Green
}
