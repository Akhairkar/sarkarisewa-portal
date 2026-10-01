const fs = require('fs');
let code = fs.readFileSync('refactor_ui.js', 'utf8');
code = code.replace(/\\`/g, '`');
code = code.replace(/\\\$/g, '$');
fs.writeFileSync('refactor_ui.js', code, 'utf8');
console.log('Fixed refactor_ui.js');
