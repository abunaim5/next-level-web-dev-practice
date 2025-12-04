const path = require("path");

console.log('Filename:', __filename);
console.log('Dirname:', __dirname);

console.log('\n' + '-'.repeat(50) + '\n');

const filePath = '/naim/documents/nextlevel.pdf';

console.log('Analyzing path:', filePath, '\n');
console.log('Directory:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('File Name:', path.basename(filePath, path.extname(filePath)));

console.log('\n' + '-'.repeat(50) + '\n');

const parsed = path.parse(filePath);
console.log('Path parsed object:', parsed);

console.log('\n' + '-'.repeat(50) + '\n');

console.log('Formatted path:', path.format(parsed));
