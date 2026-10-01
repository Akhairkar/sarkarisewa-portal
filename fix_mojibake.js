const fs = require('fs');

// Fix 7th pay calculator
const batchA = JSON.parse(fs.readFileSync('batchA.json', 'utf8'));
const pay7hi = batchA['7th-pay-commission-calculator.html'].contentHi;

let pay7html = fs.readFileSync('7th-pay-commission-calculator.html', 'utf8');
pay7html = pay7html.replace(/<div class="lang-hi" style="display:none;">[\s\S]*?<\/div>/, `<div class="lang-hi" style="display:none;">\n          ${pay7hi}\n        </div>`);
fs.writeFileSync('7th-pay-commission-calculator.html', pay7html, 'utf8');

// Fix ISRO
const fixHindi = JSON.parse(fs.readFileSync('fix-hindi.json', 'utf8'));
const isroHi = fixHindi.isro;

let isroHtml = fs.readFileSync('jobs/isro-scientistengineer-recruitment-2026-mseotm9e-1.html', 'utf8');
isroHtml = isroHtml.replace(/<div class="lang-hi" style="display:none;">[\s\S]*?<\/div>/, `<div class="lang-hi" style="display:none;">\n          ${isroHi}\n        </div>`);
fs.writeFileSync('jobs/isro-scientistengineer-recruitment-2026-mseotm9e-1.html', isroHtml, 'utf8');

// Fix UK Ration Card in states.json
const statesJson = JSON.parse(fs.readFileSync('data/states.json', 'utf8'));
const uk = statesJson.states.find(s => s.id === 'uk');
if (uk) {
    const ration = uk.services.find(s => s.id === 'uk-ration-card');
    if (ration) {
        ration.contentHi = fixHindi.ukRation;
    }
}
fs.writeFileSync('data/states.json', JSON.stringify(statesJson, null, 2), 'utf8');

console.log("Mojibake fixed successfully.");
