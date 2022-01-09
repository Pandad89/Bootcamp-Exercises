const fs = require('fs');

fs.writeFileSync('2.1-file_system.txt', 'This text was created with the writeFileSync module');
fs.copyFileSync('2.1-file_system.txt', '2.1-file_system_copy.txt');
fs.renameSync('2.1-file_system_copy.txt', '2.1-file_system_renamedCopy.txt');
console.log(fs.readdirSync('../2.1'));
fs.chmodSync('2.1-file_system_renamedCopy.txt', 0o400);

