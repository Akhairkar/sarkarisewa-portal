const fs = require('fs');
let html = fs.readFileSync('7th-pay-commission-calculator.html', 'utf8');
html = html.replace(/ data-i18n="7th_pay_seo_heading_1"/g, '');
html = html.replace(/ data-i18n="related_tools_heading"/g, '');
fs.writeFileSync('7th-pay-commission-calculator.html', html, 'utf8');
console.log('Fixed i18n keys in 7th pay calculator.');
