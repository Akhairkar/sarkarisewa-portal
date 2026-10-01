# fix_semrush_issues.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

Write-Host "=========================================="
Write-Host "AUTOMATED FIX FOR SEMRUSH AUDIT ISSUES"
Write-Host "=========================================="

$htmlFiles = Get-ChildItem -Path $ROOT -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "\\partials\\" -and $_.FullName -notmatch "\\.git\\" }

# 1. Fix hreflang="en" href="=en" typo across all HTML files
$fixedHrefLangCount = 0
foreach ($fileObj in $htmlFiles) {
    $html = [System.IO.File]::ReadAllText($fileObj.FullName, $utf8NoBOM)
    if ($html.Contains('href="=en"')) {
        $html = $html.Replace('href="=en"', 'href="?lang=en"')
        [System.IO.File]::WriteAllText($fileObj.FullName, $html, $utf8NoBOM)
        $fixedHrefLangCount++
    }
}
Write-Host "✅ Fixed href='=en' typo in $fixedHrefLangCount files!"

# 2. Check and create exam-age-theme.css if missing
$examCssPath = "$ROOT\assets\css\exam-age-theme.css"
if (-not (Test-Path $examCssPath)) {
    $examCssContent = @"
/**
 * exam-age-theme.css
 * Theme styles for Exam Age Eligibility Calculator
 */
:root {
  --eac-primary: #10243E;
  --eac-accent: #D97F2B;
  --eac-bg: #F5F3ED;
  --eac-surface: #FFFFFF;
}
[data-theme="dark"] {
  --eac-primary: #E8EDF3;
  --eac-bg: #0B1420;
  --eac-surface: #101D2C;
}
"@
    [System.IO.File]::WriteAllText($examCssPath, $examCssContent, $utf8NoBOM)
    Write-Host "✅ Created missing assets/css/exam-age-theme.css!"
}

# 3. Check and create csc/index.html if missing
$cscPath = "$ROOT\csc\index.html"
if (-not (Test-Path $cscPath)) {
    $cscDir = "$ROOT\csc"
    if (-not (Test-Path $cscDir)) { New-Item -ItemType Directory -Path $cscDir | Out-Null }
    $cscContent = @"
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSC Centres Guide — निकटतम जन सेवा केंद्र खोजें | SarkariSewa</title>
    <meta name="description" content="भारत के सभी राज्यों और जिलों में CSC जन सेवा केंद्र खोजें। आधार, पैन, आय प्रमाण पत्र व सरकारी सेवाओं के लिए नज़दीकी केंद्र विवरण।">
    <link rel="canonical" href="https://sarkarisewaindia.com/csc/index.html">
    <link rel="stylesheet" href="../assets/css/style.css?v=2.0">
</head>
<body class="htc-scope">
    <script>window.SS_ROOT = "../";</script>
    <div id="site-header"></div>
    <main class="container" style="padding:40px 20px;">
        <h1>🏛️ CSC Centres Directory (जन सेवा केंद्र)</h1>
        <p>अपने राज्य और ज़िले के अनुसार निकटतम जन सेवा केंद्र (CSC Center) की सूची और सेवाएं खोजें।</p>
    </main>
    <div id="site-footer"></div>
    <script src="../assets/js/main.js?v=2.0"></script>
</body>
</html>
"@
    [System.IO.File]::WriteAllText($cscPath, $cscContent, $utf8NoBOM)
    Write-Host "✅ Created missing csc/index.html!"
}

Write-Host "=========================================="
Write-Host "AUTOMATED FIX COMPLETE!"
Write-Host "=========================================="
