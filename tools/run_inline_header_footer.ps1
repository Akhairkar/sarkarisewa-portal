# run_inline_header_footer.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

$headerText = [System.IO.File]::ReadAllText("$ROOT\partials\header.html", $utf8NoBOM)
$footerText = [System.IO.File]::ReadAllText("$ROOT\partials\footer.html", $utf8NoBOM)

function Rewrite-Links($htmlStr, $rootPrefix) {
    $pattern = 'href="([^"]*)"'
    return [regex]::Replace($htmlStr, $pattern, {
        param($match)
        $href = $match.Groups[1].Value
        if ($href -match '^(https?:)?//' -or $href.StartsWith('#') -or $href.StartsWith('mailto:') -or $href.StartsWith('tel:')) {
            return $match.Value
        }
        return 'href="' + $rootPrefix + $href + '"'
    })
}

$headerRoot = Rewrite-Links $headerText ""
$footerRoot = Rewrite-Links $footerText ""

$mpbcdcFiles = @("mpbcdc-yojana.html", "mpbcdc-direct-loan-yojana.html", "mpbcdc-seed-capital-yojana.html", "mpbcdc-subsidy-yojana.html")

foreach ($file in $mpbcdcFiles) {
    $path = "$ROOT\$file"
    if (Test-Path $path) {
        $html = [System.IO.File]::ReadAllText($path, $utf8NoBOM)
        
        # Replace <div id="site-header"></div>
        $headerTarget = '<div id="site-header"></div>'
        $headerReplacement = '<div id="site-header">' + "`n" + $headerRoot + "`n" + '</div>'
        if ($html.Contains($headerTarget)) {
            $html = $html.Replace($headerTarget, $headerReplacement)
        }
        
        # Replace <div id="site-footer"></div>
        $footerTarget = '<div id="site-footer"></div>'
        $footerReplacement = '<div id="site-footer">' + "`n" + $footerRoot + "`n" + '</div>'
        if ($html.Contains($footerTarget)) {
            $html = $html.Replace($footerTarget, $footerReplacement)
        }
        
        [System.IO.File]::WriteAllText($path, $html, $utf8NoBOM)
        Write-Host "Baked header/footer into $file"
    }
}
