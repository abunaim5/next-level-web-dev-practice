const crypto = require('crypto');

console.log('MD5 Hash: ');
const md5Hash = crypto.createHash('md5').update('password123').digest('hex'); // Not recommended
const md5Hash2 = crypto.createHash('md5').update('password123').digest('hex'); // it gives same hashed password
console.log('input: password123');
console.log('MD5 HashedPassword:', md5Hash);
console.log('MD5 HashedPassword2:', md5Hash2);

console.log('\n' + '-'.repeat(50) + '\n');

const sha256Hash = crypto.createHash('sha256').update('password123').digest('hex'); // recommended
console.log('SHA256 HashedPassword:', sha256Hash);

console.log('\n' + '-'.repeat(50) + '\n');

const sha512Hash = crypto.createHash('sha512').update('password123').digest('hex'); // most recommended
console.log('SHA512 HashedPassword:', sha512Hash);
