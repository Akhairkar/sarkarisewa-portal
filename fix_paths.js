const fs = require('fs');

const rootFiles = [
    '7th-pay-commission-calculator.html',
    '8th-pay-calculator.html',
    'exam-age-calculator.html',
    'nps-pension-calculator.html'
];

rootFiles.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');
    content = content.replace(/href="\.\.\/project-report\/"/g, 'href="project-report/"');
    content = content.replace(/href="\.\.\/hidden-tax-calculator\.html"/g, 'href="hidden-tax-calculator.html"');
    content = content.replace(/href="\.\.\/tools\/income-tax-calculator\.html"/g, 'href="tools/income-tax-calculator.html"');
    content = content.replace(/href="\.\.\/tools\/photo-resizer\.html"/g, 'href="tools/photo-resizer.html"');
    fs.writeFileSync(filepath, content, 'utf8');
    console.log("Fixed paths in " + filepath);
});
