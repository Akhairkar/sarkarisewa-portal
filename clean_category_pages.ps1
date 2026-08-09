# PowerShell script to cleanly format category/*.html navbar without orphaned elements

$repoDir = "C:\Users\Lenovo\.gemini\antigravity\scratch\sarkarisewa-portal-repo"
$categoryDir = "$repoDir\category"
$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)

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

foreach ($file in Get-ChildItem -Path $categoryDir -Filter "*.html") {
    $content = [System.IO.File]::ReadAllText($file.FullName, $utf8NoBOM)

    # Remove all previous tools dropdown blocks or corrupted orphaned li elements between Exam Calendar and Project Report
    $startMarker = '<li><a href="../exams/index.html" data-i18n="nav_examcal">Exam Calendar</a></li>'
    $endMarker = '<li><a href="../project-report/index.html"'

    $startIndex = $content.IndexOf($startMarker)
    $endIndex = $content.IndexOf($endMarker)

    if ($startIndex -ge 0 -and $endIndex -gt $startIndex) {
        $before = $content.Substring(0, $startIndex + $startMarker.Length)
        $after = $content.Substring($endIndex)

        $newContent = $before + "`n`n" + $cleanDropdown + "`n`n        " + $after
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBOM)
        Write-Host "Cleaned navbar in $($file.Name)"
    }
}
