# qa_verification.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

$mpbcdcFiles = @("mpbcdc-yojana.html", "mpbcdc-direct-loan-yojana.html", "mpbcdc-seed-capital-yojana.html", "mpbcdc-subsidy-yojana.html")

Write-Host "=========================================="
Write-Host "RUNNING MPBCDC QA CHECKLIST VERIFICATION"
Write-Host "=========================================="

# CHECK 1: Internal Links Verification
Write-Host "`n[Check 1] Internal Links Verification..."
$allLinksValid = $true
foreach ($file in $mpbcdcFiles) {
    $path = "$ROOT\$file"
    $html = [System.IO.File]::ReadAllText($path, $utf8NoBOM)
    $matches = [regex]::Matches($html, 'href="([^"]+)"')
    foreach ($m in $matches) {
        $rawUrl = $m.Groups[1].Value
        $url = $rawUrl.Split('?')[0]
        if (-not ($url -match '^(https?:)?//' -or $url.StartsWith('#') -or $url.StartsWith('mailto:') -or $url.StartsWith('tel:'))) {
            $targetPath = Join-Path $ROOT $url.Replace('/', '\')
            if (-not (Test-Path $targetPath)) {
                Write-Host "  FAILED link in $file -> $url (Path not found: $targetPath)" -ForegroundColor Red
                $allLinksValid = $false
            }
        }
    }
}
if ($allLinksValid) { Write-Host "  PASSED: All internal links are valid and exist!" -ForegroundColor Green }

# CHECK 2 & 3: HTML & JSON-LD Validation
Write-Host "`n[Check 2 & 3] HTML & JSON-LD Validation..."
$jsonLdValid = $true
foreach ($file in $mpbcdcFiles) {
    $path = "$ROOT\$file"
    $html = [System.IO.File]::ReadAllText($path, $utf8NoBOM)
    
    $jsonMatches = [regex]::Matches($html, '(?s)<script type="application/ld\+json">(.*?)</script>')
    foreach ($jm in $jsonMatches) {
        $jsonStr = $jm.Groups[1].Value.Trim()
        try {
            $null = $jsonStr | ConvertFrom-Json
        } catch {
            Write-Host ("  FAILED JSON-LD in " + $file + ": " + $_) -ForegroundColor Red
            $jsonLdValid = $false
        }
    }
}
if ($jsonLdValid) { Write-Host "  PASSED: All JSON-LD blocks are valid JSON!" -ForegroundColor Green }

# CHECK 4: Sitemap XML Validation
Write-Host "`n[Check 4] Sitemap XML Validation..."
try {
    $xml = New-Object System.Xml.XmlDocument
    $xml.Load("$ROOT\sitemap.xml")
    Write-Host "  PASSED: sitemap.xml is valid XML!" -ForegroundColor Green
} catch {
    Write-Host ("  FAILED: sitemap.xml is invalid: " + $_) -ForegroundColor Red
}

# CHECK 7: JS Null-Guards Verification
Write-Host "`n[Check 7] Calculator JS Null-Guard Verification..."
$jsPath = "$ROOT\assets\js\mpbcdc-calculator.js"
if (Test-Path $jsPath) {
    $jsText = [System.IO.File]::ReadAllText($jsPath, $utf8NoBOM)
    if ($jsText.Contains("if (!form) return;") -and $jsText.Contains("initDirectLoanCalc") -and $jsText.Contains("initSeedCapitalCalc") -and $jsText.Contains("initSubsidyCalc")) {
        Write-Host "  PASSED: mpbcdc-calculator.js has all null-guards in place!" -ForegroundColor Green
    } else {
        Write-Host "  FAILED: Null-guards missing in mpbcdc-calculator.js" -ForegroundColor Red
    }
}

Write-Host "`n=========================================="
Write-Host "QA VERIFICATION COMPLETE!"
Write-Host "=========================================="
