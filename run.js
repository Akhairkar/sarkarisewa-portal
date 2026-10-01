const fs = require('fs');
let content = fs.readFileSync('inject_batch3.js', 'utf8');
content = content.replace('batch3.json', 'batch13.json');
content = content.replace(/\?\xA0\"/g, ' - ');
content = content.replace(/\?"/g, ' - ');
fs.writeFileSync('inject_batch13.js', content);
