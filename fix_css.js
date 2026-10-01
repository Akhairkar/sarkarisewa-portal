const fs = require('fs');
let css = fs.readFileSync('assets/css/style.css', 'utf8');

// Remove the corrupted line (has null bytes usually from UTF-16)
css = css.replace(/\0/g, '');
const lines = css.split('\n');
const cleaned = lines.filter(line => !line.includes('h t m l'));

css = cleaned.join('\n');
if (!css.includes('data-lang-show')) {
    css += '\n\nhtml[lang="hi"] [data-lang-show="en"], html[lang="en"] [data-lang-show="hi"] { display: none !important; }\n';
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('CSS fixed.');
