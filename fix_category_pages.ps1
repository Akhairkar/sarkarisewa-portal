# PowerShell script to update ONLY category/*.html pages with clean Tools dropdown menu

$repoDir = "C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal-repo"
$categoryDir = "$repoDir\category"
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)

$categoryFiles = Get-ChildItem -Path $categoryDir -Filter "*.html"

$cleanDropdown = @"
        <!-- Tools Dropdown Menu -->
        <li class="nav-dropdown">
          <a href="#" class="nav-highlight nav-dropdown-toggle" data-i18n="nav_tools">Tools <span class="nav-badge">New</span> &#9660;</a>
          <ul class="nav-dropdown-menu">
            <li><a href="../7th-pay-commission-calculator.html">7th Pay Calculator</a></li>
            <li><a href="../8th-pay-calculator.html">8th Pay Projection</a></li>
            <li><a href="../nps-pension-calculator.html">NPS Pension Tool</a></li>
            <li><a href="../exam-age-calculator.html">Exam Age Calculator</a></li>
            <li><a href="../hidden-tax-calculator.html">Hidden Tax Calculator</a></li>
          </ul>
        </li>
"@

# Regex pattern matching any existing nav-dropdown block in category pages
$dropdownPattern = '(?s)<!-- Tools Dropdown Menu -->.*?</ul>\s*</li>(?:\s*<li><a href="\.\./8th-pay-calculator\.html".*?</li>\s*</ul>\s*</li>)?'

foreach ($file in $categoryFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, $utf8NoBOM)

    if ($content -match 'nav-dropdown') {
        # Replace existing dropdown block cleanly
        $newContent = [regex]::Replace($content, '(?s)<li class="nav-dropdown">.*?</li>(?:\s*<li><a href="\.\./8th-pay-calculator\.html".*?</li>\s*</ul>\s*</li>)?', $cleanDropdown.Trim())
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBOM)
        Write-Host "Updated category file: $($file.Name)"
    } else {
        # Insert before project-report
        $targetAnchor = '<li><a href="../project-report/'
        if ($content.Contains($targetAnchor)) {
            $newContent = $content.Replace($targetAnchor, $cleanDropdown.Trim() + "`n        " + $targetAnchor)
            [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBOM)
            Write-Host "Inserted dropdown in category file: $($file.Name)"
        }
    }
}
