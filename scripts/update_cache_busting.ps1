# update_cache_busting.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

$files = @("mpbcdc-yojana.html", "mpbcdc-direct-loan-yojana.html", "mpbcdc-seed-capital-yojana.html", "mpbcdc-subsidy-yojana.html", "hidden-tax-calculator.html", "index.html")

foreach ($file in $files) {
    $path = "$ROOT\$file"
    if (Test-Path $path) {
        $html = [System.IO.File]::ReadAllText($path, $utf8NoBOM)
        
        $html = $html.Replace('href="assets/css/hidden-tax-theme.css"', 'href="assets/css/hidden-tax-theme.css?v=2.0"')
        $html = $html.Replace('href="assets/css/style.css"', 'href="assets/css/style.css?v=2.0"')
        $html = $html.Replace('src="assets/js/main.js"', 'src="assets/js/main.js?v=2.0"')
        $html = $html.Replace('src="assets/js/mpbcdc-calculator.js"', 'src="assets/js/mpbcdc-calculator.js?v=2.0"')
        
        [System.IO.File]::WriteAllText($path, $html, $utf8NoBOM)
        Write-Host "Updated cache-busting tags in $file"
    }
}
