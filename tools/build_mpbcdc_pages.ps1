# build_mpbcdc_pages.ps1
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
$ROOT = "C:\Users\Lenovo\Desktop\SarkariSewaIndia\SarkariSewa_Merged_Production"

# Execute python code via python string or .NET file writing
# Let's inspect the files in scratch or write them directly using .NET WriteAllText

$pyFile = "$ROOT\tools\build_mpbcdc_pages.py"
# We can parse the python file content and write the two HTML files cleanly!

$pyCode = [System.IO.File]::ReadAllText($pyFile, $utf8NoBOM)

# Extract dl_html
$dlStart = $pyCode.IndexOf('dl_html = """') + 'dl_html = """'.Length
$dlEnd = $pyCode.IndexOf('"""', $dlStart)
$dlHtml = $pyCode.Substring($dlStart, $dlEnd - $dlStart)

# Extract sc_html
$scStart = $pyCode.IndexOf('sc_html = """') + 'sc_html = """'.Length
$scEnd = $pyCode.IndexOf('"""', $scStart)
$scHtml = $pyCode.Substring($scStart, $scEnd - $scStart)

[System.IO.File]::WriteAllText("$ROOT\mpbcdc-direct-loan-yojana.html", $dlHtml, $utf8NoBOM)
Write-Host "Created mpbcdc-direct-loan-yojana.html"

[System.IO.File]::WriteAllText("$ROOT\mpbcdc-seed-capital-yojana.html", $scHtml, $utf8NoBOM)
Write-Host "Created mpbcdc-seed-capital-yojana.html"
